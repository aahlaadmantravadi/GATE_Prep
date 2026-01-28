

const Questions = {
    _questions: [],
    pyqMode: 'all',
    attemptedMode: 'all',


    setPYQMode(mode) {
        this.pyqMode = mode;
    },


    getPYQMode() {
        return this.pyqMode;
    },


    setAttemptedMode(mode) {
        this.attemptedMode = mode;
    },


    getAttemptedMode() {
        return this.attemptedMode;
    },


    register(topicQuestions) {
        this._questions = this._questions.concat(topicQuestions);
    },


    _applyPYQFilter(questions) {
        if (this.pyqMode === 'all') return questions;
        if (this.pyqMode === 'pyq') return questions.filter(q => q.isPYQ === true);
        if (this.pyqMode === 'study') return questions.filter(q => !q.isPYQ);
        return questions;
    },


    _applyAttemptedFilter(questions) {
        if (this.attemptedMode === 'all') return questions;


        const progress = Storage.get(Storage.KEYS.PROGRESS) || {};
        const attemptedIds = new Set();


        Object.values(progress).forEach(topicProgress => {
            Object.keys(topicProgress.questions || {}).forEach(qId => {
                attemptedIds.add(qId);
            });
        });

        if (this.attemptedMode === 'attempted') {
            return questions.filter(q => attemptedIds.has(q.id));
        } else if (this.attemptedMode === 'unattempted') {
            return questions.filter(q => !attemptedIds.has(q.id));
        }

        return questions;
    },

    /**
     * Get all questions (filtered by PYQ mode and attempted status)
     */
    getAll() {
        let filtered = this._applyPYQFilter(this._questions);
        filtered = this._applyAttemptedFilter(filtered);
        return filtered;
    },

    /**
     * Get questions by topic (filtered by PYQ mode and attempted status)
     */
    getByTopic(topicKey) {
        let filtered = this._applyPYQFilter(this._questions.filter(q => q.topic === topicKey));
        filtered = this._applyAttemptedFilter(filtered);
        return filtered;
    },

    /**
     * Get questions by IDs
     */
    getByIds(ids) {
        return this._questions.filter(q => ids.includes(q.id));
    },

    /**
     * Get a single question by ID
     */
    getById(id) {
        return this._questions.find(q => q.id === id);
    },

    /**
     * Get questions by subtopic (filtered by PYQ mode and attempted status)
     */
    getBySubtopic(topicKey, subtopic) {
        let filtered = this._applyPYQFilter(this._questions.filter(q => q.topic === topicKey && q.subtopic === subtopic));
        filtered = this._applyAttemptedFilter(filtered);
        return filtered;
    },

    /**
     * Get total count (filtered by PYQ mode)
     */
    count() {
        return this.getAll().length;
    },

    /**
     * Get count by topic (filtered by PYQ mode)
     */
    countByTopic(topicKey) {
        return this.getByTopic(topicKey).length;
    },

    /**
     * Get raw counts (unfiltered) for display
     */
    getRawCounts() {
        const all = this._questions.length;
        const pyq = this._questions.filter(q => q.isPYQ).length;
        const study = all - pyq;
        return { all, pyq, study };
    },

    /**
     * Get raw attempted counts for display
     */
    getRawAttemptedCounts() {
        const progress = Storage.get(Storage.KEYS.PROGRESS) || {};
        const attemptedIds = new Set();

        Object.values(progress).forEach(topicProgress => {
            Object.keys(topicProgress.questions || {}).forEach(qId => {
                attemptedIds.add(qId);
            });
        });

        const all = this._questions.length;
        const attempted = this._questions.filter(q => attemptedIds.has(q.id)).length;
        const unattempted = all - attempted;
        return { all, attempted, unattempted };
    }
};




console.log('Questions registry initialized');

