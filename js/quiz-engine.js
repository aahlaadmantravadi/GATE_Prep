

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


    getCorrectIndices(question) {
        if (question.type === 'NAT') return [question.correctAnswer || question.answer]; // Value, not index
        if (question.type === 'DESCRIPTIVE') return [];

        let raw = question.correctAnswer || question.correctAnswers || question.answer;
        if (raw === undefined || raw === null) return [];

        const targets = Array.isArray(raw) ? raw : [raw];
        const indices = [];

        targets.forEach(t => {
            if (typeof t === 'number') {
                indices.push(t);
            } else if (typeof t === 'string') {
                // Check for "A", "B", ... single letter case
                if (t.length === 1 && t >= 'A' && t <= 'Z') {
                    indices.push(t.charCodeAt(0) - 65); // A=0, B=1
                } else if (question.options) {
                    // Full text match, safe check for options
                    const idx = question.options.indexOf(t);
                    if (idx !== -1) indices.push(idx);
                }
            }
        });
        return indices.sort((a, b) => a - b);
    },

    submitAnswer() {
        const question = this.getCurrentQuestion();
        if (!question) return null;

        // Special handling for DESCRIPTIVE (always allow "submit")
        if (question.type === 'DESCRIPTIVE') {
            this.isAnswered = true;
            Storage.recordAnswer(question.id, question.topic, true); // Mark as correct/verified

            this.currentQuiz.answers.push({
                questionId: question.id,
                userAnswer: [],
                isCorrect: true
            });

            return {
                isCorrect: true,
                correctAnswer: [],
                explanation: question.explanation
            };
        }

        if (this.isAnswered || this.selectedAnswers.length === 0) return null;

        let isCorrect = false;
        let correctIndices = []; // For MCQ/MSQ

        if (question.type === 'NAT') {
            const userAnswer = this.selectedAnswers[0];
            const correctVal = question.correctAnswer || question.answer; // Handle varying property names
            const tolerance = question.tolerance || 0;
            isCorrect = Math.abs(userAnswer - correctVal) <= tolerance;
            correctIndices = [correctVal]; // Just for return
        } else {
            // MCQ or MSQ
            correctIndices = this.getCorrectIndices(question);
            const userIndices = [...this.selectedAnswers].sort((a, b) => a - b);

            // Compare sorted arrays
            isCorrect = JSON.stringify(userIndices) === JSON.stringify(correctIndices);
        }

        this.isAnswered = true;
        Storage.recordAnswer(question.id, question.topic, isCorrect);

        this.currentQuiz.answers.push({
            questionId: question.id,
            userAnswer: this.selectedAnswers,
            isCorrect: isCorrect
        });

        // Return standardized result object
        return {
            isCorrect,
            correctAnswer: question.type === 'MCQ' ? correctIndices[0] : correctIndices, // Return indices for UI highlighting
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
