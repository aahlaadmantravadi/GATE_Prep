

const QuizEngine = {
    currentQuiz: null,
    currentIndex: 0,
    selectedAnswers: [],
    isAnswered: false,


    topics: {
        'engineering-math': {
            name: 'Engineering Mathematics',
            icon: '∫',
            subtopics: ['Basic Calculus', 'Linear Algebra', 'Probability & Statistics']
        },
        'discrete-math': {
            name: 'Discrete Mathematics',
            icon: '∪',
            subtopics: ['Sets & Relations', 'Functions', 'Propositional Logic', 'Graph Theory', 'Combinatorics']
        },
        'digital-logic': {
            name: 'Digital Logic',
            icon: '⊕',
            subtopics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Circuits', 'Number Systems']
        },
        'coa': {
            name: 'Computer Organization & Architecture',
            icon: '💻',
            subtopics: ['CPU Design', 'Pipelining', 'Memory Hierarchy', 'I/O Organization']
        },
        'dsa': {
            name: 'Programming & Data Structures',
            icon: '🌳',
            subtopics: ['C Programming', 'Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Hashing']
        },
        'algorithms': {
            name: 'Algorithms',
            icon: '⚡',
            subtopics: ['Complexity Analysis', 'Sorting', 'Searching', 'Graph Algorithms', 'Dynamic Programming', 'Greedy']
        },
        'toc': {
            name: 'Theory of Computation',
            icon: '🔄',
            subtopics: ['Regular Languages', 'Context-Free Languages', 'Turing Machines', 'Decidability']
        },
        'compiler-design': {
            name: 'Compiler Design',
            icon: '⚙️',
            subtopics: ['Lexical Analysis', 'Parsing', 'Syntax Directed Translation', 'Code Optimization']
        },
        'os': {
            name: 'Operating Systems',
            icon: '🖥️',
            subtopics: ['Processes & Threads', 'CPU Scheduling', 'Synchronization', 'Deadlocks', 'Memory Management', 'File Systems']
        },
        'dbms': {
            name: 'Database Management Systems',
            icon: '🗄️',
            subtopics: ['ER Model', 'Relational Model', 'SQL', 'Normalization', 'Transactions', 'Indexing']
        },
        'networks': {
            name: 'Computer Networks',
            icon: '🌐',
            subtopics: ['OSI & TCP/IP', 'Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer', 'Application Protocols']
        },
        'aptitude': {
            name: 'General Aptitude',
            icon: '🧮',
            subtopics: ['Quantitative', 'Logical Reasoning', 'Verbal']
        }
    },


    startQuiz(questions, topic = 'Mixed') {
        this.currentQuiz = {
            questions: this.shuffleArray([...questions]),
            topic: topic,
            startTime: Date.now(),
            answers: []
        };
        this.currentIndex = 0;
        this.selectedAnswers = [];
        this.isAnswered = false;
        return this.getCurrentQuestion();
    },


    getCurrentQuestion() {
        if (!this.currentQuiz || this.currentIndex >= this.currentQuiz.questions.length) {
            return null;
        }
        return this.currentQuiz.questions[this.currentIndex];
    },


    getProgress() {
        if (!this.currentQuiz) return { current: 0, total: 0, percentage: 0 };
        return {
            current: this.currentIndex + 1,
            total: this.currentQuiz.questions.length,
            percentage: Math.round(((this.currentIndex + 1) / this.currentQuiz.questions.length) * 100)
        };
    },


    selectOption(optionIndex) {
        if (this.isAnswered) return;

        const question = this.getCurrentQuestion();
        if (!question) return;

        if (question.type === 'MCQ') {
            this.selectedAnswers = [optionIndex];
        } else if (question.type === 'MSQ') {
            const idx = this.selectedAnswers.indexOf(optionIndex);
            if (idx > -1) {
                this.selectedAnswers.splice(idx, 1);
            } else {
                this.selectedAnswers.push(optionIndex);
            }
        }
        return this.selectedAnswers;
    },


    setNATAnswer(value) {
        if (this.isAnswered) return;
        this.selectedAnswers = [parseFloat(value)];
        return this.selectedAnswers;
    },


    submitAnswer() {
        if (this.isAnswered || this.selectedAnswers.length === 0) return null;

        const question = this.getCurrentQuestion();
        if (!question) return null;

        let isCorrect = false;

        if (question.type === 'MCQ') {
            isCorrect = this.selectedAnswers[0] === question.correctAnswer;
        } else if (question.type === 'MSQ') {
            const sortedSelected = [...this.selectedAnswers].sort();
            const sortedCorrect = [...question.correctAnswers].sort();
            isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
        } else if (question.type === 'NAT') {
            const userAnswer = this.selectedAnswers[0];
            const correctAnswer = question.correctAnswer;
            const tolerance = question.tolerance || 0;
            isCorrect = Math.abs(userAnswer - correctAnswer) <= tolerance;
        }

        this.isAnswered = true;


        Storage.recordAnswer(question.id, question.topic, isCorrect);


        this.currentQuiz.answers.push({
            questionId: question.id,
            userAnswer: this.selectedAnswers,
            isCorrect: isCorrect
        });

        return {
            isCorrect,
            correctAnswer: question.type === 'MSQ' ? question.correctAnswers : question.correctAnswer,
            explanation: question.explanation
        };
    },


    nextQuestion() {
        if (!this.currentQuiz) return null;

        this.currentIndex++;
        this.selectedAnswers = [];
        this.isAnswered = false;

        if (this.currentIndex >= this.currentQuiz.questions.length) {
            return this.finishQuiz();
        }

        return this.getCurrentQuestion();
    },


    finishQuiz() {
        if (!this.currentQuiz) return null;

        const results = {
            topic: this.currentQuiz.topic,
            totalQuestions: this.currentQuiz.questions.length,
            correct: this.currentQuiz.answers.filter(a => a.isCorrect).length,
            duration: Date.now() - this.currentQuiz.startTime,
            answers: this.currentQuiz.answers
        };

        results.accuracy = Math.round((results.correct / results.totalQuestions) * 100);
        results.isComplete = true;

        return results;
    },


    getTopicQuestions(topicKey, count = null) {
        const topicQuestions = Questions.getByTopic(topicKey);
        if (count && count < topicQuestions.length) {
            return this.shuffleArray(topicQuestions).slice(0, count);
        }
        return topicQuestions;
    },


    getRandomQuestions(count = 20) {
        const allQuestions = Questions.getAll();
        return this.shuffleArray(allQuestions).slice(0, Math.min(count, allQuestions.length));
    },


    getQuestionsByIds(ids) {
        return Questions.getByIds(ids);
    },


    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },


    hasSelection() {
        return this.selectedAnswers.length > 0;
    }
};
