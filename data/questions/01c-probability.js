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
        explanation: { solution: "Addition Rule for Probability (Inclusion-Exclusion):\n\nP(A∪B) = P(A) + P(B) - P(A∩B)\n\nWhy subtract P(A∩B)? When we add P(A) and P(B), we count the intersection TWICE (once in each). Subtract once to correct.\n\nSpecial cases:\n- If A,B mutually exclusive: P(A∩B)=0, so P(A∪B)=P(A)+P(B)\n- If A,B exhaustive: P(A∪B)=1\n\nVenn diagram helps visualize this!", formula: "P(A∪B) = P(A) + P(B) - P(A∩B)" }
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
        explanation: { solution: "Independence vs Mutual Exclusivity - don't confuse them!\n\nIndependent events: occurrence of A doesn't affect probability of B.\nP(A∩B) = P(A)·P(B)\n\nEquivalently: P(A|B) = P(A) and P(B|A) = P(B)\n\nExample: Two coin flips are independent.\nP(H₁ ∩ H₂) = 0.5 × 0.5 = 0.25\n\nNote: Mutually exclusive events are NOT independent (if one occurs, other can't)!", formula: "Independent: P(A∩B) = P(A)·P(B)" }
    },
    {
        id: "prob-basic-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "Conditional probability P(A|B) = ?",
        options: ["P(A∩B) / P(B)", "P(A) × P(B)", "P(A) + P(B)", "P(B|A)"],
        correctAnswer: 0,
        explanation: { solution: "Conditional Probability: probability of A GIVEN that B has occurred.\n\nP(A|B) = P(A∩B) / P(B) where P(B) > 0\n\nInterpretation: We restrict our sample space to B (our new 'universe'), then find probability of A within it.\n\nFrom this we get:\nMultiplication Rule: P(A∩B) = P(A|B)·P(B) = P(B|A)·P(A)\n\nChain Rule: P(A∩B∩C) = P(A)·P(B|A)·P(C|A∩B)", formula: "P(A|B) = P(A∩B) / P(B)" }
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
        explanation: { solution: "Bayes' Theorem: A powerful tool for 'inverting' conditional probabilities!\n\nP(A|B) = [P(B|A) · P(A)] / P(B)\n\nTerminology:\n- P(A) = Prior probability (before seeing evidence)\n- P(B|A) = Likelihood (probability of evidence given hypothesis)\n- P(A|B) = Posterior (updated belief after seeing evidence)\n- P(B) = Evidence (often computed as ΣP(B|Aᵢ)P(Aᵢ))\n\nApplication: Medical diagnosis, spam filtering, machine learning.", formula: "P(A|B) = P(B|A)P(A) / P(B)" }
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
        explanation: { solution: "Variance measures 'spread' or 'dispersion' of a random variable.\n\nVar(X) = E[(X-μ)²] = E(X²) - [E(X)]²\n\nThe second formula is often easier for computation:\n1. Find E(X²) = Σx²·P(x)\n2. Find E(X) and square it\n3. Var(X) = E(X²) - [E(X)]²\n\nProperties:\n- Var(X) ≥ 0 always\n- Var(X) = 0 iff X is constant\n- Var(aX+b) = a²Var(X)", formula: "Var(X) = E(X²) - [E(X)]² = E[(X-μ)²]" }
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
        explanation: { solution: "Binomial Distribution models the number of successes in n independent trials.\n\nP(X=k) = C(n,k) · p^k · (1-p)^(n-k)\n\nBreaking down the formula:\n- C(n,k) = n!/(k!(n-k)!) ways to choose which k trials are successes\n- p^k = probability of k successes\n- (1-p)^(n-k) = probability of (n-k) failures\n\nConditions for Binomial:\n1. Fixed n trials\n2. Each trial: success (p) or failure (1-p)\n3. Trials are independent", formula: "P(X=k) = C(n,k)·p^k·(1-p)^(n-k)" }
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
        explanation: { solution: "Poisson Distribution models rare events occurring at a constant average rate.\n\nP(X=k) = e^(-λ) · λ^k / k!\n\nWhere λ = expected number of events in the interval.\n\nApplications:\n- Number of calls per hour at call center\n- Number of defects per unit length\n- Number of arrivals at a queue\n\nKey insight: As Binomial with n→∞, p→0, np→λ, we get Poisson.", formula: "P(X=k) = e^(-λ)·λ^k / k!" }
    },
    {
        id: "prob-poisson-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability & Statistics",
        question: "For Poisson distribution with parameter λ, E(X) = Var(X) = ?",
        options: ["0", "1", "λ", "λ²"],
        correctAnswer: 2,
        explanation: { solution: "A unique property of Poisson distribution!\n\nFor Poisson with parameter λ:\nE(X) = λ (mean)\nVar(X) = λ (variance)\n\nThis means: Mean = Variance\n\nIn practice, if you observe data where mean ≈ variance, Poisson may be a good model!\n\nContrast with Binomial: Var = np(1-p) < np = Mean", formula: "E(X) = Var(X) = λ for Poisson" }
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
        explanation: { solution: "Memoryless Property: The exponential distribution 'forgets' the past!\n\nP(X > s+t | X > s) = P(X > t)\n\nMeaning: Given you've already waited s time units, the remaining wait time distribution is the same as if you just started.\n\nOnly exponential (continuous) and geometric (discrete) have this property.\n\nExample: If bulb has survived 100 hours, probability of surviving another 50 hours = probability of new bulb surviving 50 hours.", formula: "P(X > s+t | X > s) = P(X > t)" }
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
        explanation: { solution: "The 68-95-99.7 Rule (Empirical Rule) for Normal Distribution:\n\nP(μ - 1σ < X < μ + 1σ) ≈ 68.27%\nP(μ - 2σ < X < μ + 2σ) ≈ 95.45%\nP(μ - 3σ < X < μ + 3σ) ≈ 99.73%\n\nThis is a quick rule for estimating probabilities without tables!\n\nMemory aid: 68-95-99.7 corresponds to 1-2-3 standard deviations.", formula: "P(μ-σ < X < μ+σ) ≈ 0.68" }
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
