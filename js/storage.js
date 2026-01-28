

const Storage = {
    KEYS: {
        PROGRESS: 'gate_quiz_progress',
        BOOKMARKS: 'gate_quiz_bookmarks',
        WRONG_ANSWERS: 'gate_quiz_wrong',
        SETTINGS: 'gate_quiz_settings',
        STREAK: 'gate_quiz_streak'
    },


    init() {
        if (!this.get(this.KEYS.PROGRESS)) {
            this.set(this.KEYS.PROGRESS, {});
        }
        if (!this.get(this.KEYS.BOOKMARKS)) {
            this.set(this.KEYS.BOOKMARKS, []);
        }
        if (!this.get(this.KEYS.WRONG_ANSWERS)) {
            this.set(this.KEYS.WRONG_ANSWERS, []);
        }
        if (!this.get(this.KEYS.STREAK)) {
            this.set(this.KEYS.STREAK, { current: 0, lastDate: null });
        }
    },


    get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Storage get error:', e);
            return null;
        }
    },


    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage set error:', e);
        }
    },

    /**
     * Record a question answer
     */
    recordAnswer(questionId, topic, isCorrect) {
        const progress = this.get(this.KEYS.PROGRESS) || {};

        if (!progress[topic]) {
            progress[topic] = {
                attempted: 0,
                correct: 0,
                questions: {}
            };
        }

        // Only count first attempt for stats
        if (!progress[topic].questions[questionId]) {
            progress[topic].attempted++;
            if (isCorrect) {
                progress[topic].correct++;
            }
        }

        progress[topic].questions[questionId] = {
            correct: isCorrect,
            lastAttempt: Date.now()
        };

        this.set(this.KEYS.PROGRESS, progress);

        // Handle wrong answers list
        if (!isCorrect) {
            this.addToWrongAnswers(questionId, topic);
        } else {
            this.removeFromWrongAnswers(questionId);
        }

        // Update streak
        this.updateStreak(isCorrect);
    },

    /**
     * Get progress for a specific topic
     */
    getTopicProgress(topic) {
        const progress = this.get(this.KEYS.PROGRESS) || {};
        return progress[topic] || { attempted: 0, correct: 0, questions: {} };
    },

    /**
     * Get overall statistics
     */
    getOverallStats() {
        const progress = this.get(this.KEYS.PROGRESS) || {};
        let totalAttempted = 0;
        let totalCorrect = 0;

        Object.values(progress).forEach(topic => {
            totalAttempted += topic.attempted;
            totalCorrect += topic.correct;
        });

        return {
            attempted: totalAttempted,
            correct: totalCorrect,
            accuracy: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0
        };
    },

    /**
     * Bookmark management
     */
    toggleBookmark(questionId) {
        const bookmarks = this.get(this.KEYS.BOOKMARKS) || [];
        const index = bookmarks.indexOf(questionId);

        if (index > -1) {
            bookmarks.splice(index, 1);
        } else {
            bookmarks.push(questionId);
        }

        this.set(this.KEYS.BOOKMARKS, bookmarks);
        return index === -1; // Returns true if added, false if removed
    },

    isBookmarked(questionId) {
        const bookmarks = this.get(this.KEYS.BOOKMARKS) || [];
        return bookmarks.includes(questionId);
    },

    getBookmarks() {
        return this.get(this.KEYS.BOOKMARKS) || [];
    },

    /**
     * Wrong answers management
     */
    addToWrongAnswers(questionId, topic) {
        const wrongAnswers = this.get(this.KEYS.WRONG_ANSWERS) || [];
        const existing = wrongAnswers.find(w => w.id === questionId);

        if (!existing) {
            wrongAnswers.push({ id: questionId, topic, timestamp: Date.now() });
            this.set(this.KEYS.WRONG_ANSWERS, wrongAnswers);
        }
    },

    removeFromWrongAnswers(questionId) {
        let wrongAnswers = this.get(this.KEYS.WRONG_ANSWERS) || [];
        wrongAnswers = wrongAnswers.filter(w => w.id !== questionId);
        this.set(this.KEYS.WRONG_ANSWERS, wrongAnswers);
    },

    getWrongAnswers() {
        return this.get(this.KEYS.WRONG_ANSWERS) || [];
    },

    /**
     * Streak management
     */
    updateStreak(isCorrect) {
        const streak = this.get(this.KEYS.STREAK) || { current: 0, lastDate: null };
        const today = new Date().toDateString();

        if (isCorrect) {
            if (streak.lastDate === today) {
                streak.current++;
            } else {
                // Check if yesterday
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                if (streak.lastDate === yesterday.toDateString()) {
                    streak.current++;
                } else {
                    streak.current = 1;
                }
            }
            streak.lastDate = today;
        }

        this.set(this.KEYS.STREAK, streak);
        return streak.current;
    },

    getStreak() {
        const streak = this.get(this.KEYS.STREAK) || { current: 0, lastDate: null };
        return streak.current;
    },

    /**
     * Reset all progress
     */
    resetAll() {
        localStorage.removeItem(this.KEYS.PROGRESS);
        localStorage.removeItem(this.KEYS.BOOKMARKS);
        localStorage.removeItem(this.KEYS.WRONG_ANSWERS);
        localStorage.removeItem(this.KEYS.STREAK);
        this.init();
    }
};

// Initialize storage on load
Storage.init();
