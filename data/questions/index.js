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

// Engineering Mathematics Questions
Questions.register([
    // Basic Calculus - Limits
    {
        id: "em-calc-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is the value of $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ ?",
        options: ["0", "1", "∞", "Does not exist"],
        correctAnswer: 1,
        explanation: {
            solution: "This is a fundamental limit. As x approaches 0, sin(x) approaches x, making the ratio approach 1. This can be proven using L'Hôpital's rule or the squeeze theorem.",
            formula: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
        }
    },
    {
        id: "em-calc-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "For a function f(x) to be continuous at x = a, which condition must be satisfied?",
        options: [
            "Only $\\lim_{x \\to a} f(x)$ should exist",
            "$\\lim_{x \\to a} f(x) = f(a)$ and both LHL = RHL",
            "f(a) should be defined",
            "f'(a) should exist"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "For continuity at x = a: (1) f(a) must be defined, (2) the limit must exist (LHL = RHL), and (3) the limit must equal f(a). All three conditions together define continuity.",
            formula: "$\\lim_{x \\to a} f(x) = f(a)$ where $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$",
        }
    },
    {
        id: "em-calc-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "If f(x) is differentiable at x = a, which of the following is necessarily true?",
        options: [
            "f(x) is continuous at x = a",
            "f(x) has a maximum at x = a",
            "f(x) has a minimum at x = a",
            "f''(a) exists"
        ],
        correctAnswer: 0,
        explanation: {
            solution: "Differentiability implies continuity. If a function is differentiable at a point, it must be continuous there. However, the converse is not true - a function can be continuous but not differentiable (e.g., |x| at x=0).",
            formula: "Differentiability at x=a ⟹ Continuity at x=a",
        }
    },
    {
        id: "em-calc-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\tan^{-1} x)$ ?",
        options: [
            "$\\frac{1}{\\sqrt{1-x^2}}$",
            "$\\frac{-1}{\\sqrt{1-x^2}}$",
            "$\\frac{1}{1+x^2}$",
            "$\\frac{-1}{1+x^2}$"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "The derivative of inverse tangent is 1/(1+x²). This can be derived using implicit differentiation on y = tan⁻¹(x), which gives tan(y) = x.",
            formula: "$\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1+x^2}$",
        }
    },
    {
        id: "em-calc-005",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "If $f(x) = e^x$, what is the coefficient of $x^3$ in the Taylor series expansion of f(x) about x = 0? (Enter as a fraction in decimal form, round to 2 decimal places)",
        correctAnswer: 0.17,
        tolerance: 0.01,
        explanation: {
            solution: "Taylor series of eˣ about x=0: eˣ = 1 + x + x²/2! + x³/3! + ... The coefficient of x³ is 1/3! = 1/6 ≈ 0.167",
            formula: "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$; coefficient of $x^3$ is $\\frac{1}{3!} = \\frac{1}{6}$",
        }
    },
    {
        id: "em-calc-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "According to Lagrange's Mean Value Theorem, for a function continuous in [a,b] and differentiable in (a,b), there exists c ∈ (a,b) such that:",
        options: [
            "$f'(c) = 0$",
            "$f'(c) = \\frac{f(b) - f(a)}{b - a}$",
            "$f(c) = \\frac{f(a) + f(b)}{2}$",
            "$f''(c) = 0$"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "LMVT states that the instantaneous rate of change at some point c equals the average rate of change over the interval. Geometrically, there's a point where the tangent is parallel to the secant line connecting endpoints.",
            formula: "$f'(c) = \\frac{f(b) - f(a)}{b - a}$",
        }
    },
    {
        id: "em-calc-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Rolle's theorem is a special case of Lagrange's MVT when:",
        options: [
            "f(a) = 0",
            "f(b) = 0",
            "f(a) = f(b)",
            "f'(a) = f'(b)"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "When f(a) = f(b), the LMVT gives f'(c) = (f(b)-f(a))/(b-a) = 0/(b-a) = 0. This means there exists at least one point c where the derivative is zero, which is Rolle's theorem.",
            formula: "If f(a) = f(b), then $\\exists c \\in (a,b)$ such that $f'(c) = 0$",
        }
    },
    {
        id: "em-calc-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "For finding maxima or minima of f(x), if f'(a) = 0 and f''(a) < 0, then x = a is a:",
        options: [
            "Point of local minimum",
            "Point of local maximum",
            "Point of inflection",
            "Cannot be determined"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Second derivative test: If f'(a) = 0 and f''(a) < 0, the function is concave down at x = a, indicating a local maximum. If f''(a) > 0, it would be concave up, indicating a local minimum.",
            formula: "f'(a) = 0, f''(a) < 0 ⟹ local maximum; f'(a) = 0, f''(a) > 0 ⟹ local minimum",
        }
    },
    {
        id: "em-calc-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\lim_{x \\to 0} (1 + ax)^{b/x}$ ?",
        options: [
            "$e^a$",
            "$e^b$",
            "$e^{ab}$",
            "$e^{a/b}$"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "This is a standard limit form. Using the fact that lim(1+k)^(1/k) = e as k→0, we can rewrite (1+ax)^(b/x) = [(1+ax)^(1/ax)]^(ab) → e^(ab).",
            formula: "$\\lim_{x \\to 0} (1 + ax)^{b/x} = e^{ab}$",
        }
    },
    {
        id: "em-calc-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The ILATE rule in integration by parts orders functions as:",
        options: [
            "Inverse, Logarithmic, Algebraic, Trigonometric, Exponential",
            "Integral, Limit, Algebraic, Taylor, Exponential",
            "Inverse, Linear, Algebraic, Transcendental, Elementary",
            "Iterative, Logarithmic, Asymptotic, Trigonometric, Euler"
        ],
        correctAnswer: 0,
        explanation: {
            solution: "ILATE helps choose which function to differentiate (first) and which to integrate (second) in integration by parts: ∫u·dv = uv - ∫v·du. Choose u from earlier in ILATE order.",
            formula: "∫f(x)g(x)dx = f(x)∫g(x)dx - ∫[f'(x)∫g(x)dx]dx",
        }
    },
    // Integration
    {
        id: "em-calc-011",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\int \\frac{1}{x} dx$ ?",
        options: [
            "$\\ln x + C$",
            "$\\ln |x| + C$",
            "$\\frac{1}{x^2} + C$",
            "$x\\ln x + C$"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "The absolute value is important because ln(x) is only defined for x > 0, but 1/x is defined for x ≠ 0. Using |x| extends the domain to all non-zero real numbers.",
            formula: "$\\int \\frac{1}{x} dx = \\ln|x| + C$",
        }
    },
    {
        id: "em-calc-012",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "For an odd function f(x), what is $\\int_{-a}^{a} f(x) dx$ ?",
        options: ["2∫₀ᵃ f(x)dx", "0", "f(a) - f(-a)", "Cannot be determined"],
        correctAnswer: 1,
        explanation: {
            solution: "An odd function satisfies f(-x) = -f(x). When integrated symmetrically around 0, the positive and negative parts cancel out completely, giving 0.",
            formula: "If f(-x) = -f(x), then $\\int_{-a}^{a} f(x)dx = 0$",
        }
    },
    {
        id: "em-calc-013",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The Gamma function Γ(n) for positive integer n equals:",
        options: ["n!", "(n-1)!", "(n+1)!", "n·(n-1)!"],
        correctAnswer: 1,
        explanation: {
            solution: "The Gamma function is defined as Γ(n) = ∫₀^∞ e^(-x)·x^(n-1)dx. For positive integers, Γ(n) = (n-1)!. This extends the factorial to non-integer values.",
            formula: "$\\Gamma(n) = (n-1)!$ for positive integers; $\\Gamma(n+1) = n!$",
        }
    },
    {
        id: "em-calc-014",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\Gamma(1/2)$ ?",
        options: ["$\\pi$", "$\\sqrt{\\pi}$", "$\\pi/2$", "$2\\pi$"],
        correctAnswer: 1,
        explanation: {
            solution: "This is a famous result. Γ(1/2) = √π can be proven using the integral definition and substitution techniques, ultimately relating to the Gaussian integral.",
            formula: "$\\Gamma(1/2) = \\sqrt{\\pi}$",
        }
    },
    // Euler's Theorem and Partial Derivatives
    {
        id: "em-calc-015",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "If f(x,y) is a homogeneous function of degree n, then according to Euler's theorem:",
        options: [
            "$x\\frac{\\partial f}{\\partial x} + y\\frac{\\partial f}{\\partial y} = f$",
            "$x\\frac{\\partial f}{\\partial x} + y\\frac{\\partial f}{\\partial y} = nf$",
            "$\\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y} = nf$",
            "$x\\frac{\\partial f}{\\partial x} \\cdot y\\frac{\\partial f}{\\partial y} = nf$"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Euler's theorem for homogeneous functions states that if f(kx, ky) = k^n·f(x,y), then the sum of x times partial derivative w.r.t. x plus y times partial derivative w.r.t. y equals n times the function.",
            formula: "$x\\frac{\\partial f}{\\partial x} + y\\frac{\\partial f}{\\partial y} = nf$ for homogeneous function of degree n",
        }
    }
]);

// More Engineering Math - Linear Algebra
Questions.register([
    {
        id: "em-la-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The rank of a matrix is defined as:",
        options: [
            "Number of rows",
            "Number of columns",
            "Maximum number of linearly independent rows (or columns)",
            "Determinant of the matrix"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Rank is the dimension of the vector space spanned by rows (or columns). It equals the number of non-zero rows in row echelon form and the number of linearly independent rows/columns.",
        }
    },
    {
        id: "em-la-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For a system of linear equations Ax = b, the system has a unique solution when:",
        options: [
            "rank(A) < rank(A|b)",
            "rank(A) = rank(A|b) < n (number of unknowns)",
            "rank(A) = rank(A|b) = n",
            "det(A) = 0"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Unique solution exists when the system is consistent (rank(A) = rank(A|b)) and the rank equals the number of unknowns. This means all unknowns are determined uniquely.",
            formula: "Unique solution: rank(A) = rank(A|b) = n",
        }
    },
    {
        id: "em-la-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The eigenvalues of a triangular matrix are:",
        options: [
            "All zeros",
            "The diagonal elements",
            "The sum of diagonal elements",
            "Cannot be determined without calculation"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "For triangular matrices (upper or lower), the characteristic polynomial det(A - λI) = 0 simplifies to the product of (aᵢᵢ - λ). Hence eigenvalues are the diagonal entries.",
        }
    },
    {
        id: "em-la-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If A is an n×n matrix with eigenvalues λ₁, λ₂, ..., λₙ, then det(A) equals:",
        options: [
            "λ₁ + λ₂ + ... + λₙ",
            "λ₁ · λ₂ · ... · λₙ",
            "(λ₁ · λ₂ · ... · λₙ)²",
            "None of the above"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "The determinant of a matrix equals the product of its eigenvalues (counting multiplicities). The trace (sum of diagonal) equals the sum of eigenvalues.",
            formula: "det(A) = λ₁ · λ₂ · ... · λₙ; trace(A) = λ₁ + λ₂ + ... + λₙ",
        }
    },
    {
        id: "em-la-005",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "What is the determinant of a 3×3 identity matrix?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: {
            solution: "The identity matrix has 1s on the diagonal and 0s elsewhere. Its determinant is always 1, regardless of size.",
        }
    }
]);

// Probability and Statistics
Questions.register([
    {
        id: "em-prob-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For two events A and B, P(A ∪ B) equals:",
        options: [
            "P(A) + P(B)",
            "P(A) + P(B) - P(A ∩ B)",
            "P(A) · P(B)",
            "P(A) + P(B) + P(A ∩ B)"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "The inclusion-exclusion principle: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). We subtract the intersection to avoid counting it twice.",
            formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        }
    },
    {
        id: "em-prob-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Bayes' theorem states that P(A|B) equals:",
        options: [
            "$\\frac{P(A) \\cdot P(B)}{P(B|A)}$",
            "$\\frac{P(B|A) \\cdot P(A)}{P(B)}$",
            "$\\frac{P(A) + P(B)}{P(A \\cap B)}$",
            "$\\frac{P(B)}{P(A)}$"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Bayes' theorem relates conditional probabilities. It's fundamental in statistical inference, allowing us to update probabilities based on new evidence.",
            formula: "$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$",
        }
    },
    {
        id: "em-prob-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "The mean of a Poisson distribution with parameter λ is:",
        options: ["λ²", "λ", "√λ", "1/λ"],
        correctAnswer: 1,
        explanation: {
            solution: "For Poisson distribution, both mean and variance equal λ. This is a key property: E[X] = Var(X) = λ.",
            formula: "Poisson(λ): Mean = Variance = λ",
        }
    },
    {
        id: "em-prob-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For a normal distribution N(μ, σ²), approximately what percentage of data lies within μ ± 2σ?",
        options: ["68%", "95%", "99.7%", "50%"],
        correctAnswer: 1,
        explanation: {
            solution: "The empirical rule (68-95-99.7 rule): ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ of the mean.",
            formula: "P(μ-2σ ≤ X ≤ μ+2σ) ≈ 0.95 or 95%",
        }
    },
    {
        id: "em-prob-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Two events A and B are independent if and only if:",
        options: [
            "P(A ∩ B) = 0",
            "P(A ∪ B) = P(A) + P(B)",
            "P(A ∩ B) = P(A) · P(B)",
            "P(A|B) = P(B|A)"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Independence means the occurrence of one event doesn't affect the probability of the other. P(A ∩ B) = P(A)·P(B) is the definition. Note: mutually exclusive events (P(A∩B)=0) are NOT independent unless one has probability 0.",
            formula: "A and B independent ⟺ P(A ∩ B) = P(A) · P(B)",
        }
    }
]);

console.log(`Loaded ${Questions.count()} questions`);
