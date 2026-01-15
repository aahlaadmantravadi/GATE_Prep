/**
 * Questions Registry - Manages all question data
 */

const Questions = {
    _questions: [],
    pyqMode: 'all', // 'all', 'study', 'pyq'

    /**
     * Set PYQ filter mode
     */
    setPYQMode(mode) {
        this.pyqMode = mode;
    },

    /**
     * Get PYQ mode
     */
    getPYQMode() {
        return this.pyqMode;
    },

    /**
     * Register questions from a topic module
     */
    register(topicQuestions) {
        this._questions = this._questions.concat(topicQuestions);
    },

    /**
     * Filter questions based on PYQ mode
     */
    _applyPYQFilter(questions) {
        if (this.pyqMode === 'all') return questions;
        if (this.pyqMode === 'pyq') return questions.filter(q => q.isPYQ === true);
        if (this.pyqMode === 'study') return questions.filter(q => !q.isPYQ);
        return questions;
    },

    /**
     * Get all questions (filtered by PYQ mode)
     */
    getAll() {
        return this._applyPYQFilter(this._questions);
    },

    /**
     * Get questions by topic (filtered by PYQ mode)
     */
    getByTopic(topicKey) {
        return this._applyPYQFilter(this._questions.filter(q => q.topic === topicKey));
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
     * Get questions by subtopic (filtered by PYQ mode)
     */
    getBySubtopic(topicKey, subtopic) {
        return this._applyPYQFilter(this._questions.filter(q => q.topic === topicKey && q.subtopic === subtopic));
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
    }
};

// Questions: Global registry for all question data
// Individual question files call Questions.register() when loaded

// Log initial state - count will be 0 until question files load
console.log('Questions registry initialized');

