/**
 * Main Application - UI interactions and view management
 */

const App = {
    currentView: 'dashboard',
    currentTopic: null,

    init() {
        this.setupEventListeners();
        this.setupPYQToggle();
        this.setupAttemptedToggle();
        this.setupSidebarToggle();
        this.renderDashboard();
        this.updateTopicBadges();
    },

    setupSidebarToggle() {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('sidebarToggle');
        const openBtn = document.getElementById('sidebarOpenBtn');

        if (toggle && sidebar) {
            toggle.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
                localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
            });


            if (localStorage.getItem('sidebarCollapsed') === 'true') {
                sidebar.classList.add('collapsed');
            }
        }


        if (openBtn && sidebar) {
            openBtn.addEventListener('click', () => {
                sidebar.classList.remove('collapsed');
                localStorage.setItem('sidebarCollapsed', 'false');
            });
        }
    },

    setupPYQToggle() {
        const counts = Questions.getRawCounts();
        document.getElementById('count-all').textContent = counts.all;
        document.getElementById('count-study').textContent = counts.study;
        document.getElementById('count-pyq').textContent = counts.pyq;


        document.querySelectorAll('.pyq-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.pyqMode;
                Questions.setPYQMode(mode);


                document.querySelectorAll('.pyq-toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');


                this.renderDashboard();
                this.updateTopicBadges();
            });
        });
    },

    setupAttemptedToggle() {
        this.updateAttemptedCounts();


        document.querySelectorAll('.attempted-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.attemptedMode;
                Questions.setAttemptedMode(mode);


                document.querySelectorAll('.attempted-toggle-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');


                this.renderDashboard();
                this.updateTopicBadges();
                this.updateAttemptedCounts();
            });
        });
    },

    updateAttemptedCounts() {
        const counts = Questions.getRawAttemptedCounts();
        document.getElementById('count-all-attempted').textContent = counts.all;
        document.getElementById('count-unattempted').textContent = counts.unattempted;
        document.getElementById('count-attempted').textContent = counts.attempted;
    },

    setupEventListeners() {
        try {
            document.querySelectorAll('.nav-item[data-view]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showView(item.dataset.view);
                });
            });


            document.querySelectorAll('.nav-item[data-topic]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showTopicView(item.dataset.topic);
                });
            });


            document.getElementById('startRandomQuiz')?.addEventListener('click', () => this.startRandomQuiz());
            document.getElementById('reviewWrong')?.addEventListener('click', () => this.startReviewQuiz('wrong'));
            document.getElementById('reviewBookmarks')?.addEventListener('click', () => this.startReviewQuiz('bookmarks'));


            document.getElementById('exitQuiz')?.addEventListener('click', () => this.exitQuiz());
            document.getElementById('submitAnswer')?.addEventListener('click', () => this.submitAnswer());
            document.getElementById('nextQuestion')?.addEventListener('click', () => this.nextQuestion());
            document.getElementById('bookmarkQuestion')?.addEventListener('click', () => this.toggleBookmark());
            document.getElementById('backToDashboard')?.addEventListener('click', () => this.showView('dashboard'));
            document.getElementById('startTopicQuiz')?.addEventListener('click', () => {
                if (this.currentTopic) this.startTopicQuiz(this.currentTopic);
            });

            document.getElementById('resetProgress')?.addEventListener('click', () => {
                if (confirm('Reset all progress?')) {
                    Storage.resetAll();
                    this.renderDashboard();
                    this.updateTopicBadges();
                }
            });

            document.getElementById('natAnswer')?.addEventListener('input', (e) => {
                QuizEngine.setNATAnswer(e.target.value);
                document.getElementById('submitAnswer').disabled = !QuizEngine.hasSelection();
            });


            document.getElementById('changeFilterInQuiz')?.addEventListener('click', () => {
                if (confirm('Exit quiz and change filter settings?')) {
                    this.exitQuiz();

                    setTimeout(() => {
                        const container = document.querySelector('.attempted-toggle-container');
                        if (container) {
                            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }, 300);
                }
            });
        } catch (e) {
            console.error('SetupEventListeners Error', e);
            alert(`SetupEventListeners Error: ${e.message}`);
        }
    },

    showView(viewName) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.view === viewName);
        });
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        document.getElementById(`view-${viewName}`)?.classList.add('active');
        this.currentView = viewName;

        if (viewName === 'dashboard') this.renderDashboard();
        else if (viewName === 'statistics') this.renderStatistics();
        else if (viewName === 'bookmarks') this.renderBookmarks();
        else if (viewName === 'review') this.renderReviewList();
    },

    showTopicView(topicKey) {
        this.currentTopic = topicKey;
        const topic = QuizEngine.topics[topicKey];
        const questions = Questions.getByTopic(topicKey);
        const progress = Storage.getTopicProgress(topicKey);

        document.getElementById('topicTitle').textContent = topic.name;
        document.getElementById('subtopicGrid').innerHTML = `
            <div style="max-width:500px;margin:0 auto;text-align:center;">
                <p style="font-size:1.5rem;margin-bottom:1rem;">${questions.length} Questions Available</p>
                <p style="color:var(--text-secondary);">${progress.attempted} attempted | ${progress.attempted > 0 ? Math.round((progress.correct / progress.attempted) * 100) : 0}% accuracy</p>
            </div>`;
        this.showView('topic');
    },

    renderDashboard() {
        const stats = Storage.getOverallStats();
        const total = Questions.getAll().length;

        document.getElementById('totalQuestions').textContent = total;
        document.getElementById('answeredQuestions').textContent = stats.attempted;
        document.getElementById('overallAccuracy').textContent = stats.accuracy + '%';
        document.getElementById('currentStreak').textContent = Storage.getStreak();

        const container = document.getElementById('topicsContainer');
        container.innerHTML = '';

        Object.entries(QuizEngine.topics).forEach(([key, topic]) => {
            const questions = Questions.getByTopic(key);
            const progress = Storage.getTopicProgress(key);
            const pct = questions.length > 0 ? Math.round((progress.attempted / questions.length) * 100) : 0;

            const card = document.createElement('div');
            card.className = 'topic-card';
            card.innerHTML = `
                <div class="topic-card-header">
                    <span class="topic-card-icon">${topic.icon}</span>
                    <span class="topic-card-title">${topic.name}</span>
                </div>
                <div class="topic-card-stats">
                    <span>${questions.length} questions</span>
                    <span>${progress.attempted} done</span>
                </div>
                <div class="topic-progress-bar">
                    <div class="topic-progress-fill" style="width:${pct}%"></div>
                </div>`;
            card.onclick = () => this.showTopicView(key);
            container.appendChild(card);
        });
    },

    updateTopicBadges() {
        Object.keys(QuizEngine.topics).forEach(key => {
            const badge = document.getElementById(`badge-${key}`);
            if (badge) {
                const q = Questions.getByTopic(key);
                const p = Storage.getTopicProgress(key);
                badge.textContent = (q.length > 0 ? Math.round((p.attempted / q.length) * 100) : 0) + '%';
            }
        });
    },

    startTopicQuiz(topicKey) {
        try {
            const questions = QuizEngine.getTopicQuestions(topicKey);
            if (!questions.length) { alert('No questions available.'); return; }
            QuizEngine.startQuiz(questions, QuizEngine.topics[topicKey].name);
            this.showQuizView();
        } catch (e) {
            console.error(e);
            alert(`StartTopicQuiz Error: ${e.message}`);
        }
    },

    startRandomQuiz() {
        try {
            const questions = QuizEngine.getRandomQuestions(20);
            if (!questions.length) { alert('No questions available.'); return; }
            QuizEngine.startQuiz(questions, 'Random Mix');
            this.showQuizView();
        } catch (e) {
            console.error(e);
            alert(`StartRandomQuiz Error: ${e.message}`);
        }
    },

    startReviewQuiz(type) {
        try {
            const ids = type === 'wrong' ? Storage.getWrongAnswers().map(w => w.id) : Storage.getBookmarks();
            if (!ids.length) { alert(`No ${type} to review.`); return; }
            QuizEngine.startQuiz(Questions.getByIds(ids), type === 'wrong' ? 'Review Wrong' : 'Bookmarks');
            this.showQuizView();
        } catch (e) {
            console.error(e);
            alert(`StartReviewQuiz Error: ${e.message}`);
        }
    },

    showQuizView() {
        this.showView('quiz');
        this.renderQuestion();
    },

    renderQuestion() {
        try {
            const q = QuizEngine.getCurrentQuestion();
            if (!q) { this.finishQuiz(); return; }

            const prog = QuizEngine.getProgress();
            document.getElementById('quizTopicName').textContent = QuizEngine.currentQuiz.topic;
            document.getElementById('currentQuestionNum').textContent = prog.current;
            document.getElementById('totalQuestionNum').textContent = prog.total;
            document.getElementById('quizProgressBar').style.width = prog.percentage + '%';

            const bm = Storage.isBookmarked(q.id);
            document.getElementById('bookmarkIcon').textContent = bm ? '⭐' : '🔖';
            document.getElementById('bookmarkQuestion').classList.toggle('active', bm);
            document.getElementById('questionTypeBadge').textContent = q.type;

            // Render Title (Metadata)
            const titleEl = document.getElementById('questionTitle');
            if (titleEl) {
                titleEl.textContent = q.title || '';
                titleEl.style.display = q.title ? 'block' : 'none';
            } else if (q.title) {
                // Fallback if element doesn't exist
                const t = document.createElement('h3');
                t.id = 'questionTitle';
                t.className = 'question-header-title';
                t.textContent = q.title;
                document.getElementById('questionText').before(t);
            }

            document.getElementById('questionText').innerHTML = q.question;

            // Image handling
            const imgContainer = document.getElementById('questionImage');
            if (q.image) {
                imgContainer.innerHTML = `<img src="${q.image}" alt="Question Diagram" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 10px; border: 1px solid var(--border-color);">`;
                imgContainer.style.display = 'block';
            } else {
                imgContainer.innerHTML = '';
                imgContainer.style.display = 'none';
            }

            const optC = document.getElementById('optionsContainer');
            const natC = document.getElementById('natInputContainer');
            const submitBtn = document.getElementById('submitAnswer');

            // Clear any previous descriptive message
            const prevDescriptiveMsg = document.querySelector('.descriptive-msg');
            if (prevDescriptiveMsg) prevDescriptiveMsg.remove();

            if (q.type === 'NAT') {
                optC.style.display = 'none';
                natC.style.display = 'block';
                document.getElementById('natAnswer').value = '';
                submitBtn.textContent = 'Submit Answer';
            } else if (q.type === 'DESCRIPTIVE') {
                optC.style.display = 'none'; // Hide options
                natC.style.display = 'none'; // Hide NAT input

                // Add a helper message
                const msg = document.createElement('div');
                msg.className = 'descriptive-msg';
                msg.innerHTML = '<p style="color:var(--text-secondary); margin-bottom:1rem; font-style:italic;">This is a descriptive question. Verify your answer mentally, then click "Show Solution".</p>';
                // Insert before optionsContainer
                optC.parentNode.insertBefore(msg, optC);

                submitBtn.disabled = false; // Always allow showing solution
                submitBtn.textContent = 'Show Solution';
            } else {
                optC.style.display = 'flex';
                natC.style.display = 'none';
                this.renderOptions(q);
                submitBtn.textContent = 'Submit Answer';
            }

            submitBtn.style.display = 'inline-flex';
            // Only disable submit for MCQ/MSQ/NAT if no selection/input
            if (q.type !== 'DESCRIPTIVE') {
                submitBtn.disabled = !QuizEngine.hasSelection();
            }
            document.getElementById('nextQuestion').style.display = 'none';
            document.getElementById('explanationContainer').style.display = 'none';
            this.renderMath();
        } catch (e) {
            console.error(e);
            alert(`RenderQuestion Error: ${e.message}`);
        }
    },

    renderOptions(q) {
        const c = document.getElementById('optionsContainer');
        const L = ['A', 'B', 'C', 'D', 'E', 'F'];
        c.innerHTML = q.options.map((o, i) => `<div class="option" data-index="${i}"><span class="option-marker">${L[i]}</span><span class="option-text">${o}</span></div>`).join('');
        c.querySelectorAll('.option').forEach(o => o.onclick = () => !QuizEngine.isAnswered && this.selectOption(+o.dataset.index));
    },

    selectOption(i) {
        try {
            const q = QuizEngine.getCurrentQuestion();
            if (q.type === 'DESCRIPTIVE') return; // Should not happen as options are hidden

            const sel = QuizEngine.selectOption(i);
            document.querySelectorAll('.option').forEach((o, idx) => o.classList.toggle('selected', sel.includes(idx)));
            document.getElementById('submitAnswer').disabled = !QuizEngine.hasSelection();
        } catch (e) {
            console.error(e);
            alert(`SelectOption Error: ${e.message}`);
        }
    },

    submitAnswer() {
        try {
            const q = QuizEngine.getCurrentQuestion();

            // For DESCRIPTIVE questions, we don't check for selection, just submit to show explanation
            if (q.type === 'DESCRIPTIVE') {
                // QuizEngine.submitAnswer should handle DESCRIPTIVE by marking it as attempted
                // and returning a result object that indicates it's "correct" for self-evaluation.
                // If QuizEngine doesn't explicitly handle it, we might need a mock result here.
                // Assuming QuizEngine.submitAnswer is updated to handle DESCRIPTIVE gracefully.
            }

            const r = QuizEngine.submitAnswer();
            if (!r) return;

            if (q.type !== 'NAT' && q.type !== 'DESCRIPTIVE') {
                document.querySelectorAll('.option').forEach((o, idx) => {
                    o.classList.add('disabled');
                    const isCorrectIdx = q.type === 'MCQ' ? idx === r.correctAnswer : r.correctAnswer.includes(idx);
                    const isSelected = QuizEngine.selectedAnswers.includes(idx);
                    if (isCorrectIdx) o.classList.add('correct');
                    else if (isSelected) o.classList.add('incorrect');
                });
            } else if (q.type === 'NAT') {
                document.getElementById('natAnswer').classList.add(r.isCorrect ? 'correct' : 'incorrect');
            }

            this.showExplanation(r, q);
            document.getElementById('submitAnswer').style.display = 'none';
            document.getElementById('nextQuestion').style.display = 'inline-flex';
            document.getElementById('nextQuestion').textContent = QuizEngine.currentIndex === QuizEngine.currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next →';
            this.updateTopicBadges();
        } catch (error) {
            console.error(error);
            alert(`Error submitting answer: ${error.message}\n${error.stack}`);
        }
    },

    showExplanation(r, q) {
        try {
            const c = document.getElementById('explanationContainer');
            const b = document.getElementById('resultBadge');
            const e = document.getElementById('explanationContent');

            if (q.type === 'DESCRIPTIVE') {
                b.textContent = 'Solution';
                b.className = 'result-badge info'; // Neutral color for descriptive
            } else {
                b.textContent = r.isCorrect ? '✓ Correct!' : '✗ Incorrect';
                b.className = 'result-badge ' + (r.isCorrect ? 'correct' : 'incorrect');
            }

            let h = '';
            if (q.explanation) {
                if (typeof q.explanation === 'string') {
                    h += `<h4>Explanation</h4><p>${q.explanation}</p>`;
                } else {
                    if (q.explanation.solution) h += `<h4>Solution</h4><p>${q.explanation.solution}</p>`;
                    if (q.explanation.formula) h += `<h4>Formula</h4><div class="formula-box">${q.explanation.formula}</div>`;
                }
            }

            // Show correct answer for NAT if incorrect
            // Also show correct options for MCQ/MSQ if incorrect!
            if (!r.isCorrect) {
                if (q.type === 'NAT') {
                    const correctVal = q.correctAnswer || q.answer;
                    h += `<h4>Correct Answer</h4><p class="formula-box">${correctVal}</p>`;
                } else if (q.type === 'DESCRIPTIVE') {
                    // Nothing extra, explanation covers it
                } else {
                    // For MCQ/MSQ, the UI highlights correct answers, but let's be explicit
                    let correctText = '';
                    if (q.type === 'MCQ') {
                        correctText = q.options[r.correctAnswer];
                    } else if (q.type === 'MSQ') {
                        correctText = r.correctAnswer.map(idx => q.options[idx]).join(' AND ');
                    }
                    if (correctText) {
                        h += `<h4>Correct Answer</h4><p>${correctText}</p>`;
                    }
                }
            }

            e.innerHTML = h || '<p>Explanation not available.</p>';
            c.style.display = 'block';
            this.renderMath();
        } catch (error) {
            console.error("Explanation error", error);
            alert("Error showing explanation: " + error.message);
        }
    },

    nextQuestion() {
        try {
            // Remove temporary descriptive message if it exists
            const prevDescriptiveMsg = document.querySelector('.descriptive-msg');
            if (prevDescriptiveMsg) prevDescriptiveMsg.remove();

            const n = QuizEngine.nextQuestion();
            if (n?.isComplete) this.finishQuiz(n);
            else if (n) this.renderQuestion();
            else this.finishQuiz(); // Fallback if nextQuestion returns null/undefined unexpectedly
        } catch (e) {
            console.error(e);
            alert("Next Question Error: " + e.message);
        }
    },

    finishQuiz(r) {
        try {
            r = r || QuizEngine.finishQuiz();
            if (r) alert(`Done! ${r.correct}/${r.totalQuestions} (${r.accuracy}%)`);
            this.showView('dashboard');
            this.updateTopicBadges();
        } catch (e) {
            console.error(e);
            alert("Finish Quiz Error: " + e.message);
        }
    },

    exitQuiz() {
        if (confirm('Exit quiz?')) {
            try {
                this.showView('dashboard');
            } catch (e) { alert("Exit error: " + e.message); }
        }
    },

    toggleBookmark() {
        try {
            const q = QuizEngine.getCurrentQuestion();
            if (!q) return;
            const bm = Storage.toggleBookmark(q.id);
            document.getElementById('bookmarkIcon').textContent = bm ? '⭐' : '🔖';
            document.getElementById('bookmarkQuestion').classList.toggle('active', bm);
        } catch (e) {
            console.error("Bookmark error", e);
        }
    },

    renderStatistics() {
        const c = document.getElementById('detailedStats');
        c.innerHTML = Object.entries(QuizEngine.topics).map(([k, t]) => {
            const q = Questions.getByTopic(k), p = Storage.getTopicProgress(k);
            const acc = p.attempted > 0 ? Math.round((p.correct / p.attempted) * 100) : 0;
            const cls = acc >= 70 ? 'good' : acc >= 50 ? 'medium' : 'poor';
            return `<div class="stat-row"><div class="stat-row-topic">${t.icon} ${t.name}</div><div class="stat-row-value">${q.length}Q</div><div class="stat-row-value">${p.attempted}</div><div class="stat-row-accuracy ${cls}">${acc}%</div><div class="topic-progress-bar"><div class="topic-progress-fill" style="width:${q.length ? Math.round((p.attempted / q.length) * 100) : 0}%"></div></div></div>`;
        }).join('') || '<p>No stats yet.</p>';
    },

    renderBookmarks() {
        const c = document.getElementById('bookmarksList'), b = Storage.getBookmarks();
        if (!b.length) { c.innerHTML = '<div class="empty-state"><p>No bookmarks.</p></div>'; return; }
        c.innerHTML = Questions.getByIds(b).map(q => `<div class="review-item"><div style="color:var(--accent-primary);font-size:0.75rem">${q.topic}</div><div>${q.question.slice(0, 100)}...</div></div>`).join('');
    },

    renderReviewList() {
        const c = document.getElementById('reviewList'), w = Storage.getWrongAnswers();
        if (!w.length) { c.innerHTML = '<div class="empty-state"><p>No wrong answers!</p></div>'; return; }
        c.innerHTML = Questions.getByIds(w.map(x => x.id)).map(q => `<div class="review-item"><div style="color:var(--accent-primary);font-size:0.75rem">${q.topic}</div><div>${q.question.slice(0, 100)}...</div></div>`).join('');
    },

    renderMath() {
        if (typeof renderMathInElement !== 'undefined') {
            try {
                renderMathInElement(document.body, {
                    delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
                    throwOnError: false
                });
            } catch (e) { console.warn("Katex error", e); }
        }
    }
};

window.onerror = function (msg, url, line, col, error) {
    alert(`Global Error: ${msg}\nLine: ${line}`);
};

document.addEventListener('DOMContentLoaded', () => App.init());
