/**
 * Probability & Statistics EXHAUSTIVE - Part 2
 * Every concept from the document
 */

Questions.register([
    // ========== RANDOM EXPERIMENT & SAMPLE SPACE ==========
    {
        id: "prob-exp-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "A random experiment is one whose:",
        options: ["Outcome is always known", "Outcome is uncertain", "Outcome is always the same", "There is no outcome"],
        correctAnswer: 1,
        explanation: { solution: "Random experiment: outcome is uncertain (e.g., coin flip, dice roll)" }
    },
    {
        id: "prob-exp-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "The sample space S is:",
        options: ["Any subset of outcomes", "Set of all possible outcomes", "An impossible event", "A single outcome"],
        correctAnswer: 1,
        explanation: { solution: "Sample space S = set of all possible outcomes of random experiment" }
    },
    {
        id: "prob-exp-003",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "When flipping a coin, the sample space has how many elements?",
        correctAnswer: 2,
        tolerance: 0,
        explanation: { solution: "S = {Head, Tail}, so |S| = 2" }
    },
    {
        id: "prob-exp-004",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "When rolling a standard die, the sample space has how many elements?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "S = {1, 2, 3, 4, 5, 6}, so |S| = 6" }
    },
    {
        id: "prob-exp-005",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "When rolling two dice, the sample space has how many elements?",
        correctAnswer: 36,
        tolerance: 0,
        explanation: { solution: "Each die has 6 outcomes, so |S| = 6 × 6 = 36" }
    },
    // ========== EVENT TYPES ==========
    {
        id: "prob-evt-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "An event is:",
        options: ["The sample space itself", "Any subset of the sample space", "The empty set only", "A single outcome only"],
        correctAnswer: 1,
        explanation: { solution: "Event = any subset of sample space S" }
    },
    {
        id: "prob-evt-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Two events A and B are mutually exclusive if:",
        options: ["A ∪ B = S", "A ∩ B = ∅", "P(A) = P(B)", "A = B"],
        correctAnswer: 1,
        explanation: { solution: "Mutually exclusive: A ∩ B = ∅ (cannot happen together)", formula: "A ∩ B = ∅" }
    },
    {
        id: "prob-evt-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Two events A and B are mutually exhaustive if:",
        options: ["A ∩ B = ∅", "A ∪ B = S", "P(A) + P(B) = 0", "A = B^c"],
        correctAnswer: 1,
        explanation: { solution: "Mutually exhaustive: A ∪ B = S (cover entire sample space)", formula: "A ∪ B = S" }
    },
    {
        id: "prob-evt-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Events A and B are independent if:",
        options: ["A ∩ B = ∅", "P(A ∩ B) = P(A) × P(B)", "P(A) = P(B)", "A ∪ B = S"],
        correctAnswer: 1,
        explanation: { solution: "Independent: P(A ∩ B) = P(A) × P(B)", formula: "P(A ∩ B) = P(A) · P(B)" }
    },
    {
        id: "prob-evt-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "The impossible event ∅ has probability:",
        options: ["1", "0.5", "0", "Undefined"],
        correctAnswer: 2,
        explanation: { solution: "P(∅) = 0 (impossible event)", formula: "P(∅) = 0" }
    },
    {
        id: "prob-evt-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "The certain event S has probability:",
        options: ["0", "0.5", "1", "∞"],
        correctAnswer: 2,
        explanation: { solution: "P(S) = 1 (certain event)", formula: "P(S) = 1" }
    },
    // ========== PROBABILITY AXIOMS ==========
    {
        id: "prob-ax-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For any event A, 0 ≤ P(A) ≤ 1 is known as:",
        options: ["Addition rule", "Probability axiom", "Bayes' theorem", "Conditional probability"],
        correctAnswer: 1,
        explanation: { solution: "Axiom: probability is always between 0 and 1 inclusive" }
    },
    {
        id: "prob-ax-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(A) = n(A)/n(S) is called:",
        options: ["Classical definition of probability", "Axiomatic definition", "Empirical probability", "Conditional probability"],
        correctAnswer: 0,
        explanation: { solution: "Classical/Laplace's definition: P(A) = favorable outcomes / total outcomes", formula: "P(A) = n(A)/n(S)" }
    },
    // ========== ADDITION THEOREM ==========
    {
        id: "prob-add-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(A ∪ B) = ?",
        options: ["P(A) + P(B)", "P(A) + P(B) - P(A ∩ B)", "P(A) × P(B)", "P(A)/P(B)"],
        correctAnswer: 1,
        explanation: { solution: "Addition rule for any two events", formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)" }
    },
    {
        id: "prob-add-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If A and B are mutually exclusive, P(A ∪ B) = ?",
        options: ["P(A) × P(B)", "P(A) - P(B)", "P(A) + P(B)", "P(A)/P(B)"],
        correctAnswer: 2,
        explanation: { solution: "Mutually exclusive: A ∩ B = ∅, so P(A ∪ B) = P(A) + P(B)", formula: "P(A ∪ B) = P(A) + P(B)" }
    },
    {
        id: "prob-add-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(A ∪ B ∪ C) = ?",
        options: ["P(A) + P(B) + P(C)", "P(A) + P(B) + P(C) - P(A∩B) - P(B∩C) - P(C∩A) + P(A∩B∩C)", "P(A) × P(B) × P(C)", "None of these"],
        correctAnswer: 1,
        explanation: { solution: "Inclusion-exclusion for three events", formula: "P(A∪B∪C) = P(A)+P(B)+P(C)-P(A∩B)-P(B∩C)-P(C∩A)+P(A∩B∩C)" }
    },
    {
        id: "prob-add-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(A^c ∩ B^c) = P((A ∪ B)^c) uses which law?",
        options: ["Bayes' theorem", "De Morgan's law", "Addition law", "Multiplication law"],
        correctAnswer: 1,
        explanation: { solution: "De Morgan: (A ∪ B)^c = A^c ∩ B^c", formula: "(A ∪ B)^c = A^c ∩ B^c" }
    },
    {
        id: "prob-add-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(A^c ∪ B^c) = P((A ∩ B)^c) uses which law?",
        options: ["De Morgan's law", "Addition law", "Bayes' theorem", "None"],
        correctAnswer: 0,
        explanation: { solution: "De Morgan: (A ∩ B)^c = A^c ∪ B^c", formula: "(A ∩ B)^c = A^c ∪ B^c" }
    },
    // ========== CONDITIONAL PROBABILITY ==========
    {
        id: "prob-cond-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Conditional probability P(A|B) = ?",
        options: ["P(A) × P(B)", "P(A ∩ B)/P(B)", "P(A)/P(B)", "P(A ∪ B)/P(B)"],
        correctAnswer: 1,
        explanation: { solution: "P(A|B) = P(A ∩ B)/P(B), where P(B) > 0", formula: "P(A|B) = P(A ∩ B)/P(B)" }
    },
    {
        id: "prob-cond-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If A and B are independent, P(A|B) = ?",
        options: ["P(B)", "P(A)", "P(A) × P(B)", "0"],
        correctAnswer: 1,
        explanation: { solution: "Independent: P(A|B) = P(A ∩ B)/P(B) = P(A)P(B)/P(B) = P(A)", formula: "P(A|B) = P(A)" }
    },
    // ========== MULTIPLICATION THEOREM ==========
    {
        id: "prob-mult-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(A ∩ B) = ?",
        options: ["P(A) + P(B)", "P(A|B) × P(B)", "P(A)/P(B)", "P(A ∪ B)"],
        correctAnswer: 1,
        explanation: { solution: "Multiplication rule: P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)", formula: "P(A ∩ B) = P(A|B) · P(B)" }
    },
    {
        id: "prob-mult-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If A and B are independent, P(A ∩ B) = ?",
        options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A)/P(B)"],
        correctAnswer: 1,
        explanation: { solution: "Independence: P(A ∩ B) = P(A) × P(B)", formula: "P(A ∩ B) = P(A) · P(B)" }
    },
    // ========== TOTAL PROBABILITY ==========
    {
        id: "prob-total-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If E₁, E₂, ..., Eₙ are mutually exclusive and exhaustive, P(A) = ?",
        options: ["ΣP(Eᵢ)", "ΣP(Eᵢ)·P(A|Eᵢ)", "P(A|E₁) only", "P(E₁)·P(E₂)·...·P(Eₙ)"],
        correctAnswer: 1,
        explanation: { solution: "Total probability: P(A) = Σ P(Eᵢ)·P(A|Eᵢ)", formula: "P(A) = Σ P(Eᵢ)·P(A|Eᵢ)" }
    },
    // ========== BAYES' THEOREM ==========
    {
        id: "prob-bayes-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Bayes' theorem states P(Eᵢ|A) = ?",
        options: ["P(A|Eᵢ)", "P(A) × P(Eᵢ)", "P(Eᵢ)·P(A|Eᵢ) / Σ P(Eⱼ)·P(A|Eⱼ)", "P(A)/P(Eᵢ)"],
        correctAnswer: 2,
        explanation: { solution: "Bayes: P(Eᵢ|A) = P(Eᵢ)·P(A|Eᵢ) / P(A)", formula: "P(Eᵢ|A) = P(Eᵢ)·P(A|Eᵢ) / Σ P(Eⱼ)·P(A|Eⱼ)" }
    },
    {
        id: "prob-bayes-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "In Bayes' theorem, P(Eᵢ) is called:",
        options: ["Prior probability", "Posterior probability", "Likelihood", "Evidence"],
        correctAnswer: 0,
        explanation: { solution: "P(Eᵢ) = prior, P(Eᵢ|A) = posterior, P(A|Eᵢ) = likelihood" }
    },
    {
        id: "prob-bayes-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "In Bayes' theorem, P(Eᵢ|A) is called:",
        options: ["Prior probability", "Posterior probability", "Likelihood", "Evidence"],
        correctAnswer: 1,
        explanation: { solution: "Posterior = probability after observing evidence A" }
    },
    // ========== COMBINATIONS & PERMUTATIONS ==========
    {
        id: "prob-comb-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "nCr = ?",
        options: ["n!/(r!(n-r)!)", "n!/(n-r)!", "n!/r!", "r!/(n-r)!"],
        correctAnswer: 0,
        explanation: { solution: "Combination: nCr = n!/(r!(n-r)!)", formula: "nCr = n!/(r!(n-r)!)" }
    },
    {
        id: "prob-comb-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "nPr = ?",
        options: ["n!/(r!(n-r)!)", "n!/(n-r)!", "n!/r!", "r!/(n-r)!"],
        correctAnswer: 1,
        explanation: { solution: "Permutation: nPr = n!/(n-r)!", formula: "nPr = n!/(n-r)!" }
    },
    {
        id: "prob-comb-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "nCr = nC(n-r) is the:",
        options: ["Pascal's identity", "Symmetry property", "Addition property", "Multiplication property"],
        correctAnswer: 1,
        explanation: { solution: "Choosing r from n = choosing remaining (n-r) to leave out", formula: "nCr = nC(n-r)" }
    },
    {
        id: "prob-comb-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "nC0 + nC1 + nC2 + ... + nCn = ?",
        options: ["n", "n!", "2^n", "n^2"],
        correctAnswer: 2,
        explanation: { solution: "Sum of binomial coefficients = 2^n", formula: "Σ nCr = 2^n" }
    },
    {
        id: "prob-comb-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "nC0 + nC2 + nC4 + ... (sum of even terms) = ?",
        options: ["2^n", "2^(n-1)", "2^(n+1)", "n"],
        correctAnswer: 1,
        explanation: { solution: "Sum of even-indexed terms = 2^(n-1)", formula: "nC0 + nC2 + ... = 2^(n-1)" }
    },
    {
        id: "prob-comb-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "nC1 + nC3 + nC5 + ... (sum of odd terms) = ?",
        options: ["2^n", "2^(n-1)", "2^(n+1)", "n"],
        correctAnswer: 1,
        explanation: { solution: "Sum of odd-indexed terms = 2^(n-1)", formula: "nC1 + nC3 + ... = 2^(n-1)" }
    },
    {
        id: "prob-comb-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "0·nC0 + 1·nC1 + 2·nC2 + ... + n·nCn = ?",
        options: ["n", "n × 2^n", "n × 2^(n-1)", "2^n"],
        correctAnswer: 2,
        explanation: { solution: "Σ r·nCr = n·2^(n-1)", formula: "Σ r·nCr = n·2^(n-1)" }
    },
    {
        id: "prob-comb-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Permutations of n objects where p are of one kind, q of another kind = ?",
        options: ["n!/(p!q!)", "n!/(p+q)", "(p+q)!", "n×p×q"],
        correctAnswer: 0,
        explanation: { solution: "Permutations with repetition: n!/(p!q!...)", formula: "n!/(p!q!)" }
    },
    {
        id: "prob-comb-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Combinations with repetition: choosing r items from n types with replacement = ?",
        options: ["nCr", "(n+r-1)Cr", "n^r", "r^n"],
        correctAnswer: 1,
        explanation: { solution: "Stars and bars: (n+r-1)Cr combinations with repetition", formula: "(n+r-1)Cr" }
    },
    // ========== ODDS ==========
    {
        id: "prob-odds-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If odds in favor of event A are m:(n-m), then P(A) = ?",
        options: ["m/n", "n/m", "(n-m)/n", "m/(n-m)"],
        correctAnswer: 0,
        explanation: { solution: "Odds m:(n-m) means m successes out of n trials, P(A) = m/n", formula: "P(A) = m/n" }
    },
    // ========== RANDOM VARIABLES ==========
    {
        id: "prob-rv-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "A discrete random variable has values obtained by:",
        options: ["Measuring", "Counting", "Weighing", "All of these"],
        correctAnswer: 1,
        explanation: { solution: "Discrete RV: countable outcomes (0, 1, 2, 3, ...)" }
    },
    {
        id: "prob-rv-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "A continuous random variable has values obtained by:",
        options: ["Counting", "Measuring", "Only integers", "Only rationals"],
        correctAnswer: 1,
        explanation: { solution: "Continuous RV: measurement gives any value in an interval" }
    },
    {
        id: "prob-rv-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For PMF p(x), Σ p(xᵢ) = ?",
        options: ["0", "0.5", "1", "∞"],
        correctAnswer: 2,
        explanation: { solution: "Sum of all probabilities = 1", formula: "Σ p(xᵢ) = 1" }
    },
    {
        id: "prob-rv-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For PDF f(x), ∫f(x)dx from -∞ to ∞ = ?",
        options: ["0", "0.5", "1", "∞"],
        correctAnswer: 2,
        explanation: { solution: "Total probability = 1", formula: "∫f(x)dx = 1" }
    },
    {
        id: "prob-rv-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "P(a ≤ X ≤ b) for continuous RV = ?",
        options: ["f(b) - f(a)", "∫f(x)dx from a to b", "f(a) + f(b)", "F(a) - F(b)"],
        correctAnswer: 1,
        explanation: { solution: "P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx", formula: "∫ₐᵇ f(x)dx" }
    },
    // ========== EXPECTATION ==========
    {
        id: "prob-exp-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[X] for discrete RV = ?",
        options: ["Σ xᵢ", "Σ p(xᵢ)", "Σ xᵢ·p(xᵢ)", "Σ xᵢ/p(xᵢ)"],
        correctAnswer: 2,
        explanation: { solution: "Expected value: E[X] = Σ xᵢ·p(xᵢ)", formula: "E[X] = Σ xᵢ·p(xᵢ)" }
    },
    {
        id: "prob-exp-011",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[X] for continuous RV = ?",
        options: ["∫f(x)dx", "∫x·f(x)dx", "∫x/f(x)dx", "∫x²·f(x)dx"],
        correctAnswer: 1,
        explanation: { solution: "E[X] = ∫x·f(x)dx from -∞ to ∞", formula: "E[X] = ∫x·f(x)dx" }
    },
    {
        id: "prob-exp-012",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[c] where c is a constant = ?",
        options: ["0", "1", "c", "c²"],
        correctAnswer: 2,
        explanation: { solution: "Expectation of constant is the constant itself", formula: "E[c] = c" }
    },
    {
        id: "prob-exp-013",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[aX] = ?",
        options: ["a + E[X]", "a × E[X]", "a/E[X]", "E[X]/a"],
        correctAnswer: 1,
        explanation: { solution: "Linearity: E[aX] = a·E[X]", formula: "E[aX] = a·E[X]" }
    },
    {
        id: "prob-exp-014",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[aX + b] = ?",
        options: ["a·E[X]", "E[X] + b", "a·E[X] + b", "a + b·E[X]"],
        correctAnswer: 2,
        explanation: { solution: "E[aX + b] = a·E[X] + b", formula: "E[aX + b] = a·E[X] + b" }
    },
    {
        id: "prob-exp-015",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[X + Y] = ?",
        options: ["E[X] + E[Y]", "E[X] × E[Y]", "E[X] - E[Y]", "max{E[X], E[Y]}"],
        correctAnswer: 0,
        explanation: { solution: "Always true: E[X + Y] = E[X] + E[Y]", formula: "E[X + Y] = E[X] + E[Y]" }
    },
    {
        id: "prob-exp-016",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If X and Y are independent, E[X·Y] = ?",
        options: ["E[X] + E[Y]", "E[X] × E[Y]", "E[X] - E[Y]", "E[X]/E[Y]"],
        correctAnswer: 1,
        explanation: { solution: "For independent RVs: E[XY] = E[X]·E[Y]", formula: "E[XY] = E[X]·E[Y]" }
    },
    {
        id: "prob-exp-017",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "E[X^n] is called the:",
        options: ["n-th moment", "n-th central moment", "Variance", "Standard deviation"],
        correctAnswer: 0,
        explanation: { solution: "E[X^n] = n-th raw moment about origin", formula: "n-th moment = E[X^n]" }
    },
    // ========== VARIANCE ==========
    {
        id: "prob-var-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(X) = ?",
        options: ["E[X] - E[X²]", "E[X²] - (E[X])²", "(E[X])² - E[X²]", "E[X]²"],
        correctAnswer: 1,
        explanation: { solution: "Var(X) = E[X²] - (E[X])²", formula: "Var(X) = E[X²] - (E[X])²" }
    },
    {
        id: "prob-var-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(X) can also be written as:",
        options: ["E[(X - μ)]", "E[(X - μ)²]", "(E[X] - μ)²", "E[X] - μ²"],
        correctAnswer: 1,
        explanation: { solution: "Var(X) = E[(X - E[X])²] = E[(X - μ)²]", formula: "Var(X) = E[(X - μ)²]" }
    },
    {
        id: "prob-var-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(c) where c is constant = ?",
        options: ["c", "c²", "0", "1"],
        correctAnswer: 2,
        explanation: { solution: "Variance of constant is 0", formula: "Var(c) = 0" }
    },
    {
        id: "prob-var-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(aX) = ?",
        options: ["a·Var(X)", "a²·Var(X)", "Var(X)/a", "Var(X) + a"],
        correctAnswer: 1,
        explanation: { solution: "Var(aX) = a²·Var(X)", formula: "Var(aX) = a²·Var(X)" }
    },
    {
        id: "prob-var-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(-X) = ?",
        options: ["-Var(X)", "Var(X)", "0", "1"],
        correctAnswer: 1,
        explanation: { solution: "Var(-X) = (-1)²·Var(X) = Var(X)", formula: "Var(-X) = Var(X)" }
    },
    {
        id: "prob-var-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(aX + b) = ?",
        options: ["a·Var(X)", "a²·Var(X)", "a²·Var(X) + b", "a·Var(X) + b"],
        correctAnswer: 1,
        explanation: { solution: "Adding constant doesn't change variance: Var(aX + b) = a²·Var(X)", formula: "Var(aX + b) = a²·Var(X)" }
    },
    {
        id: "prob-var-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If X, Y are independent, Var(X + Y) = ?",
        options: ["Var(X) + Var(Y)", "Var(X) × Var(Y)", "Var(X) - Var(Y)", "max{Var(X), Var(Y)}"],
        correctAnswer: 0,
        explanation: { solution: "For independent: Var(X + Y) = Var(X) + Var(Y)", formula: "Var(X + Y) = Var(X) + Var(Y)" }
    },
    {
        id: "prob-var-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "If X, Y are independent, Var(X - Y) = ?",
        options: ["Var(X) - Var(Y)", "Var(X) + Var(Y)", "|Var(X) - Var(Y)|", "0"],
        correctAnswer: 1,
        explanation: { solution: "Var(X - Y) = Var(X) + Var(-Y) = Var(X) + Var(Y)", formula: "Var(X - Y) = Var(X) + Var(Y)" }
    },
    {
        id: "prob-var-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Var(aX + bY) = ? (X, Y independent)",
        options: ["a²Var(X) + b²Var(Y)", "a·Var(X) + b·Var(Y)", "(a+b)²Var(X)", "Var(X) + Var(Y)"],
        correctAnswer: 0,
        explanation: { solution: "Var(aX + bY) = a²Var(X) + b²Var(Y) for independent X, Y", formula: "Var(aX + bY) = a²Var(X) + b²Var(Y)" }
    },
    // ========== COVARIANCE ==========
    {
        id: "prob-cov-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Cov(X, Y) = ?",
        options: ["E[XY] - E[X]E[Y]", "E[XY] + E[X]E[Y]", "E[XY]", "E[X]E[Y]"],
        correctAnswer: 0,
        explanation: { solution: "Cov(X, Y) = E[XY] - E[X]E[Y]", formula: "Cov(X, Y) = E[XY] - E[X]E[Y]" }
    },
    {
        id: "prob-cov-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For independent X and Y, Cov(X, Y) = ?",
        options: ["1", "-1", "0", "Undefined"],
        correctAnswer: 2,
        explanation: { solution: "Independent: E[XY] = E[X]E[Y], so Cov = 0", formula: "Cov(X, Y) = 0 if independent" }
    },
    {
        id: "prob-cov-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "General formula: Var(aX + bY) = ?",
        options: ["a²Var(X) + b²Var(Y)", "a²Var(X) + b²Var(Y) + 2ab·Cov(X,Y)", "aVar(X) + bVar(Y)", "(a+b)Var(X+Y)"],
        correctAnswer: 1,
        explanation: { solution: "Full formula with covariance term", formula: "Var(aX+bY) = a²Var(X) + b²Var(Y) + 2ab·Cov(X,Y)" }
    },
    // ========== STATISTICS ==========
    {
        id: "prob-stat-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Range of data = ?",
        options: ["Max - Min", "Max + Min", "Max × Min", "Max / Min"],
        correctAnswer: 0,
        explanation: { solution: "Range = Maximum - Minimum", formula: "Range = Max - Min" }
    },
    {
        id: "prob-stat-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Mean of first n natural numbers = ?",
        options: ["n", "n/2", "(n+1)/2", "n(n+1)/2"],
        correctAnswer: 2,
        explanation: { solution: "Sum = n(n+1)/2, Mean = n(n+1)/2 ÷ n = (n+1)/2", formula: "Mean = (n+1)/2" }
    },
    {
        id: "prob-stat-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Mean of first n odd numbers = ?",
        options: ["n-1", "n", "n+1", "2n-1"],
        correctAnswer: 1,
        explanation: { solution: "Sum of first n odd = n², Mean = n²/n = n", formula: "Mean = n" }
    },
    {
        id: "prob-stat-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Mean of first n even numbers = ?",
        options: ["n", "n+1", "n-1", "2n"],
        correctAnswer: 1,
        explanation: { solution: "Sum = 2+4+...+2n = n(n+1), Mean = (n+1)", formula: "Mean = n+1" }
    },
    {
        id: "prob-stat-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Sum of deviations from mean Σ(xᵢ - x̄) = ?",
        options: ["n", "0", "1", "Mean"],
        correctAnswer: 1,
        explanation: { solution: "Sum of deviations from mean is always 0", formula: "Σ(xᵢ - x̄) = 0" }
    },
    {
        id: "prob-stat-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For symmetric distribution, Mean, Median, Mode are:",
        options: ["All different", "Mean = Median only", "All equal", "Median = Mode only"],
        correctAnswer: 2,
        explanation: { solution: "Symmetric: Mean = Median = Mode", formula: "M = Md = Me" }
    },
    {
        id: "prob-stat-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For positively skewed distribution:",
        options: ["Mean < Median < Mode", "Mean = Median = Mode", "Mean > Median > Mode", "Mode > Median > Mean"],
        correctAnswer: 2,
        explanation: { solution: "Right/positive skew: tail on right, Mean > Median > Mode", formula: "Mean > Median > Mode" }
    },
    {
        id: "prob-stat-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "For negatively skewed distribution:",
        options: ["Mean > Median > Mode", "Mean < Median < Mode", "Mean = Median = Mode", "Mode > Mean > Median"],
        correctAnswer: 1,
        explanation: { solution: "Left/negative skew: tail on left, Mean < Median < Mode", formula: "Mean < Median < Mode" }
    },
    {
        id: "prob-stat-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Population standard deviation σ = ?",
        options: ["√(Σ(xᵢ-x̄)²/n)", "Σ(xᵢ-x̄)²/n", "√(Σ(xᵢ-x̄)²/(n-1))", "Σ|xᵢ-x̄|/n"],
        correctAnswer: 0,
        explanation: { solution: "Population SD = √(Σ(xᵢ-x̄)²/n)", formula: "σ = √(Σ(xᵢ-x̄)²/n)" }
    },
    {
        id: "prob-stat-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Probability",
        question: "Sample standard deviation uses denominator:",
        options: ["n", "n-1", "n+1", "n²"],
        correctAnswer: 1,
        explanation: { solution: "Sample SD uses (n-1) for unbiased estimate (Bessel's correction)", formula: "s = √(Σ(xᵢ-x̄)²/(n-1))" }
    }
]);

console.log("Exhaustive Probability & Statistics Part 2 loaded - ~75 questions");
