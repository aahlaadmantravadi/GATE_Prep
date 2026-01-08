/**
 * Probability & Statistics - Comprehensive Questions
 * Random Variables, Distributions, Bayes' Theorem
 */

Questions.register([
    // ========== BASIC PROBABILITY ==========
    {
        id: "prob-basic-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "P(A ∪ B) = ?",
        options: ["P(A) + P(B)", "P(A) + P(B) - P(A∩B)", "P(A) × P(B)", "P(A|B) × P(B)"],
        correctAnswer: 1,
        explanation: { solution: "Addition rule: subtract intersection to avoid counting it twice", formula: "P(A∪B) = P(A) + P(B) - P(A∩B)" }
    },
    {
        id: "prob-basic-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For mutually exclusive events A and B, P(A ∪ B) = ?",
        options: ["P(A) + P(B) - P(A∩B)", "P(A) + P(B)", "P(A) × P(B)", "0"],
        correctAnswer: 1,
        explanation: { solution: "Mutually exclusive means A∩B = ∅, so P(A∩B) = 0", formula: "If A∩B = ∅: P(A∪B) = P(A) + P(B)" }
    },
    {
        id: "prob-basic-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For independent events A and B, P(A ∩ B) = ?",
        options: ["P(A) + P(B)", "P(A) × P(B)", "P(A|B)", "P(A)/P(B)"],
        correctAnswer: 1,
        explanation: { solution: "Independence means occurrence of one doesn't affect the other", formula: "Independent: P(A∩B) = P(A)·P(B)" }
    },
    {
        id: "prob-basic-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Conditional probability P(A|B) = ?",
        options: ["P(A∩B) / P(B)", "P(A) × P(B)", "P(A) + P(B)", "P(B|A)"],
        correctAnswer: 0,
        explanation: { solution: "Probability of A given B has occurred", formula: "P(A|B) = P(A∩B) / P(B)" }
    },
    {
        id: "prob-basic-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "P(A') = ? (complement of A)",
        options: ["P(A)", "1 + P(A)", "1 - P(A)", "1 / P(A)"],
        correctAnswer: 2,
        explanation: { solution: "Complement rule: probabilities of A and A' sum to 1", formula: "P(A') = 1 - P(A)" }
    },
    // ========== BAYES' THEOREM ==========
    {
        id: "prob-bayes-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Bayes' Theorem states P(A|B) = ?",
        options: ["P(B|A)P(A)/P(B)", "P(A)P(B)", "P(A∩B)", "P(A) + P(B|A)"],
        correctAnswer: 0,
        explanation: { solution: "Bayes' theorem relates conditional probabilities", formula: "P(A|B) = P(B|A)P(A) / P(B)" }
    },
    {
        id: "prob-bayes-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "In Bayes' theorem, P(A) is called:",
        options: ["Likelihood", "Posterior probability", "Prior probability", "Marginal probability"],
        correctAnswer: 2,
        explanation: { solution: "P(A) = prior (before observing B), P(A|B) = posterior (after observing B)" }
    },
    // ========== RANDOM VARIABLES ==========
    {
        id: "prob-rv-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Expected value E(X) of a discrete random variable is:",
        options: ["$\\sum x$", "$\\sum x \\cdot P(x)$", "$\\sum P(x)$", "max(x)"],
        correctAnswer: 1,
        explanation: { solution: "Weighted average of all values by their probabilities", formula: "E(X) = Σx·P(X=x)" }
    },
    {
        id: "prob-rv-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "E(aX + b) = ? (a, b are constants)",
        options: ["aE(X) + b", "E(X)", "aE(X)", "E(X) + b"],
        correctAnswer: 0,
        explanation: { solution: "Expected value is linear", formula: "E(aX + b) = aE(X) + b" }
    },
    {
        id: "prob-rv-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Var(X) = ?",
        options: ["E(X²) - E(X)²", "E(X)² - E(X²)", "E(X - μ)", "E(X²)"],
        correctAnswer: 0,
        explanation: { solution: "Variance = E(X²) - [E(X)]²", formula: "Var(X) = E(X²) - [E(X)]² = E[(X-μ)²]" }
    },
    {
        id: "prob-rv-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Var(aX + b) = ?",
        options: ["a²Var(X)", "a²Var(X) + b", "aVar(X) + b", "Var(X)"],
        correctAnswer: 0,
        explanation: { solution: "Constant b doesn't affect variance, a gets squared", formula: "Var(aX + b) = a²Var(X)" }
    },
    {
        id: "prob-rv-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Standard deviation σ is:",
        options: ["Variance", "$\\sqrt{Variance}$", "Variance²", "Mean"],
        correctAnswer: 1,
        explanation: { solution: "Standard deviation is square root of variance", formula: "σ = √Var(X)" }
    },
    {
        id: "prob-rv-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For independent random variables X and Y, Var(X + Y) = ?",
        options: ["Var(X) + Var(Y)", "Var(X) × Var(Y)", "Var(X) - Var(Y)", "max(Var(X), Var(Y))"],
        correctAnswer: 0,
        explanation: { solution: "For independent variables, variances add", formula: "Var(X+Y) = Var(X) + Var(Y) when X,Y independent" }
    },
    // ========== DISCRETE DISTRIBUTIONS ==========
    {
        id: "prob-binom-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Binomial distribution B(n,p) gives probability of k successes in n trials. P(X=k) = ?",
        options: ["$p^k$", "$\\binom{n}{k}p^k$", "$\\binom{n}{k}p^k(1-p)^{n-k}$", "$np$"],
        correctAnswer: 2,
        explanation: { solution: "Choose k positions for success, probability p for each success, (1-p) for failures", formula: "P(X=k) = C(n,k)·p^k·(1-p)^(n-k)" }
    },
    {
        id: "prob-binom-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Mean of Binomial distribution B(n,p) is:",
        options: ["p", "np", "n(1-p)", "n²p"],
        correctAnswer: 1,
        explanation: { solution: "Mean = np (expected number of successes)", formula: "E(X) = np for Binomial" }
    },
    {
        id: "prob-binom-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Variance of Binomial distribution B(n,p) is:",
        options: ["np", "np(1-p)", "n²p(1-p)", "p(1-p)"],
        correctAnswer: 1,
        explanation: { solution: "Variance = npq where q = 1-p", formula: "Var(X) = np(1-p) = npq for Binomial" }
    },
    {
        id: "prob-poisson-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Poisson distribution with parameter λ gives P(X=k) = ?",
        options: ["$\\lambda^k$", "$e^{-\\lambda}\\lambda^k$", "$\\frac{e^{-\\lambda}\\lambda^k}{k!}$", "$\\frac{\\lambda^k}{k!}$"],
        correctAnswer: 2,
        explanation: { solution: "Poisson models rare events with average rate λ", formula: "P(X=k) = e^(-λ)·λ^k / k!" }
    },
    {
        id: "prob-poisson-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For Poisson distribution with parameter λ, E(X) = Var(X) = ?",
        options: ["0", "1", "λ", "λ²"],
        correctAnswer: 2,
        explanation: { solution: "Unique property of Poisson: mean equals variance equals λ", formula: "E(X) = Var(X) = λ for Poisson" }
    },
    {
        id: "prob-poisson-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Poisson is used to approximate Binomial when:",
        options: ["n is large, p is small, np is moderate", "n is small", "p is large", "n = p"],
        correctAnswer: 0,
        explanation: { solution: "Poisson approximates Binomial when n→∞, p→0, np→λ" }
    },
    // ========== CONTINUOUS DISTRIBUTIONS ==========
    {
        id: "prob-uniform-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "PDF of Uniform distribution U(a,b) is:",
        options: ["1", "1/(b-a)", "(b-a)", "1/(b+a)"],
        correctAnswer: 1,
        explanation: { solution: "Constant PDF between a and b, zero elsewhere", formula: "f(x) = 1/(b-a) for a ≤ x ≤ b" }
    },
    {
        id: "prob-uniform-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Mean of Uniform distribution U(a,b) is:",
        options: ["a", "b", "(a+b)/2", "(b-a)/2"],
        correctAnswer: 2,
        explanation: { solution: "Mean is midpoint of interval", formula: "E(X) = (a+b)/2 for U(a,b)" }
    },
    {
        id: "prob-uniform-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Variance of Uniform distribution U(a,b) is:",
        options: ["$(b-a)^2$", "$(b-a)^2/12$", "$(b-a)/12$", "$(b+a)^2/12$"],
        correctAnswer: 1,
        explanation: { solution: "Variance formula for uniform", formula: "Var(X) = (b-a)²/12 for U(a,b)" }
    },
    {
        id: "prob-exp-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "PDF of Exponential distribution with parameter λ is f(x) = ?",
        options: ["$e^{-\\lambda x}$", "$\\lambda e^{-\\lambda x}$", "$\\lambda e^{\\lambda x}$", "$e^{-x/\\lambda}$"],
        correctAnswer: 1,
        explanation: { solution: "Exponential models time between Poisson events", formula: "f(x) = λe^(-λx) for x ≥ 0" }
    },
    {
        id: "prob-exp-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Mean of Exponential distribution with parameter λ is:",
        options: ["λ", "1/λ", "λ²", "$\\sqrt{\\lambda}$"],
        correctAnswer: 1,
        explanation: { solution: "Mean = 1/λ (average time between events)", formula: "E(X) = 1/λ for Exponential" }
    },
    {
        id: "prob-exp-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Exponential distribution has the memoryless property: P(X > s+t | X > s) = ?",
        options: ["P(X > t)", "P(X > s)", "P(X > s+t)", "P(X > s)P(X > t)"],
        correctAnswer: 0,
        explanation: { solution: "Memoryless: knowing X > s doesn't change conditional distribution", formula: "P(X > s+t | X > s) = P(X > t)" }
    },
    {
        id: "prob-normal-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Normal distribution N(μ,σ²) has PDF proportional to:",
        options: ["$e^{-x^2}$", "$e^{-(x-\\mu)^2/(2\\sigma^2)}$", "$e^{-|x-\\mu|}$", "$e^{-\\lambda x}$"],
        correctAnswer: 1,
        explanation: { solution: "Bell curve centered at μ with spread σ", formula: "f(x) ∝ exp[-(x-μ)²/(2σ²)]" }
    },
    {
        id: "prob-normal-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Standard Normal distribution Z has mean and variance:",
        options: ["μ=0, σ²=0", "μ=0, σ²=1", "μ=1, σ²=0", "μ=1, σ²=1"],
        correctAnswer: 1,
        explanation: { solution: "Standard normal: N(0,1) - mean 0, variance 1", formula: "Z ~ N(0,1)" }
    },
    {
        id: "prob-normal-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "To standardize X ~ N(μ,σ²), we compute Z = ?",
        options: ["X - μ", "(X - μ)/σ", "X/σ", "(X - μ)/σ²"],
        correctAnswer: 1,
        explanation: { solution: "Subtract mean, divide by standard deviation", formula: "Z = (X - μ)/σ ~ N(0,1)" }
    },
    {
        id: "prob-normal-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For standard normal, P(-1 ≤ Z ≤ 1) ≈ ?",
        options: ["50%", "68%", "95%", "99.7%"],
        correctAnswer: 1,
        explanation: { solution: "68-95-99.7 rule: about 68% within 1σ of mean", formula: "P(μ-σ < X < μ+σ) ≈ 0.68" }
    },
    {
        id: "prob-normal-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For standard normal, P(-2 ≤ Z ≤ 2) ≈ ?",
        options: ["50%", "68%", "95%", "99.7%"],
        correctAnswer: 2,
        explanation: { solution: "68-95-99.7 rule: about 95% within 2σ of mean", formula: "P(μ-2σ < X < μ+2σ) ≈ 0.95" }
    },
    // ========== CORRELATION & REGRESSION ==========
    {
        id: "prob-corr-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Correlation coefficient r ranges from:",
        options: ["0 to 1", "-1 to 1", "-∞ to ∞", "0 to ∞"],
        correctAnswer: 1,
        explanation: { solution: "r = 1 (perfect positive), r = -1 (perfect negative), r = 0 (no linear correlation)", formula: "-1 ≤ r ≤ 1" }
    },
    {
        id: "prob-corr-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "If r = 0, X and Y are:",
        options: ["Independent", "Perfectly correlated", "Uncorrelated (no linear relationship)", "Negatively correlated"],
        correctAnswer: 2,
        explanation: { solution: "r = 0 means no linear correlation, but X and Y could still be dependent (non-linearly)" }
    },
    {
        id: "prob-corr-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Covariance Cov(X,Y) = ?",
        options: ["E(XY)", "E(XY) - E(X)E(Y)", "E(X)E(Y)", "Var(X)Var(Y)"],
        correctAnswer: 1,
        explanation: { solution: "Covariance measures joint variability", formula: "Cov(X,Y) = E(XY) - E(X)E(Y)" }
    },
    {
        id: "prob-corr-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Correlation coefficient r = ?",
        options: ["Cov(X,Y)", "Cov(X,Y)/(σ_X × σ_Y)", "Cov(X,Y)/(σ_X + σ_Y)", "Var(X)/Var(Y)"],
        correctAnswer: 1,
        explanation: { solution: "Correlation is normalized covariance", formula: "r = Cov(X,Y)/(σ_X·σ_Y)" }
    },
    {
        id: "prob-ind-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "If X and Y are independent, then Cov(X,Y) = ?",
        options: ["1", "-1", "0", "E(X)E(Y)"],
        correctAnswer: 2,
        explanation: { solution: "Independence implies E(XY) = E(X)E(Y), so Cov = 0" }
    }
]);

console.log("Probability & Statistics questions loaded");
