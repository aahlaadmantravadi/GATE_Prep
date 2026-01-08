/**
 * Discrete Mathematics EXHAUSTIVE - Logic & Set Theory
 * Every rule of inference, logical equivalence, set operation
 */

Questions.register([
    // ========== PROPOSITIONAL LOGIC - TRUTH VALUES ==========
    {
        id: "dm-logic-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "The implication p → q is false only when:",
        options: ["p is true and q is true", "p is true and q is false", "p is false and q is true", "p is false and q is false"],
        correctAnswer: 1,
        explanation: { solution: "p → q is false only when p = T, q = F (true implies false is contradiction)" }
    },
    {
        id: "dm-logic-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "The biconditional p ↔ q is true when:",
        options: ["p and q have different values", "p and q have same truth values", "p is true only", "q is true only"],
        correctAnswer: 1,
        explanation: { solution: "p ↔ q is true when both T or both F (same values)" }
    },
    {
        id: "dm-logic-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "A compound proposition that is always true is called:",
        options: ["Contradiction", "Contingency", "Tautology", "Satisfiable"],
        correctAnswer: 2,
        explanation: { solution: "Tautology = always true regardless of truth values of variables" }
    },
    {
        id: "dm-logic-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "A compound proposition that is always false is called:",
        options: ["Tautology", "Contradiction", "Contingency", "Satisfiable"],
        correctAnswer: 1,
        explanation: { solution: "Contradiction = always false" }
    },
    {
        id: "dm-logic-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "A compound proposition that is neither tautology nor contradiction is called:",
        options: ["Satisfiable", "Contingency", "Valid", "Sound"],
        correctAnswer: 1,
        explanation: { solution: "Contingency = sometimes true, sometimes false" }
    },
    {
        id: "dm-logic-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "A proposition is satisfiable if:",
        options: ["It is always true", "It is always false", "There exists at least one truth assignment making it true", "It contains no variables"],
        correctAnswer: 2,
        explanation: { solution: "Satisfiable = at least one assignment makes it true" }
    },
    // ========== OPERATOR PRECEDENCE ==========
    {
        id: "dm-logic-007",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Highest precedence logical operator is:",
        options: ["∧ (AND)", "∨ (OR)", "¬ (NOT)", "→ (implies)"],
        correctAnswer: 2,
        explanation: { solution: "Precedence (high to low): ¬, ∧, ∨, →, ↔" }
    },
    {
        id: "dm-logic-008",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Correct precedence order is:",
        options: ["∧ > ∨ > ¬ > →", "¬ > ∧ > ∨ > → > ↔", "→ > ∨ > ∧ > ¬", "↔ > → > ∨ > ∧ > ¬"],
        correctAnswer: 1,
        explanation: { solution: "¬ (1) > ∧ (2) > ∨ (3) > → (4) > ↔ (5)" }
    },
    // ========== LOGICAL EQUIVALENCES ==========
    {
        id: "dm-logic-010",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Double negation law: ¬(¬p) ≡",
        options: ["¬p", "p", "T", "F"],
        correctAnswer: 1,
        explanation: { solution: "¬(¬p) ≡ p", formula: "¬¬p ≡ p" }
    },
    {
        id: "dm-logic-011",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "De Morgan's law: ¬(p ∧ q) ≡",
        options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "p ∧ q"],
        correctAnswer: 1,
        explanation: { solution: "¬(p ∧ q) ≡ ¬p ∨ ¬q", formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q" }
    },
    {
        id: "dm-logic-012",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "De Morgan's law: ¬(p ∨ q) ≡",
        options: ["¬p ∨ ¬q", "¬p ∧ ¬q", "p ∧ q", "p ∨ q"],
        correctAnswer: 1,
        explanation: { solution: "¬(p ∨ q) ≡ ¬p ∧ ¬q", formula: "¬(p ∨ q) ≡ ¬p ∧ ¬q" }
    },
    {
        id: "dm-logic-013",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Commutative law: p ∧ q ≡",
        options: ["p ∨ q", "q ∧ p", "q ∨ p", "¬p ∧ ¬q"],
        correctAnswer: 1,
        explanation: { solution: "p ∧ q ≡ q ∧ p", formula: "p ∧ q ≡ q ∧ p" }
    },
    {
        id: "dm-logic-014",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Associative law: p ∧ (q ∧ r) ≡",
        options: ["(p ∧ q) ∧ r", "(p ∨ q) ∧ r", "p ∧ (q ∨ r)", "(p ∧ q) ∨ r"],
        correctAnswer: 0,
        explanation: { solution: "p ∧ (q ∧ r) ≡ (p ∧ q) ∧ r", formula: "p ∧ (q ∧ r) ≡ (p ∧ q) ∧ r" }
    },
    {
        id: "dm-logic-015",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Distributive law: p ∧ (q ∨ r) ≡",
        options: ["(p ∧ q) ∧ (p ∧ r)", "(p ∧ q) ∨ (p ∧ r)", "(p ∨ q) ∧ (p ∨ r)", "(p ∨ q) ∨ (p ∨ r)"],
        correctAnswer: 1,
        explanation: { solution: "p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)", formula: "∧ distributes over ∨" }
    },
    {
        id: "dm-logic-016",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Distributive law: p ∨ (q ∧ r) ≡",
        options: ["(p ∨ q) ∨ (p ∨ r)", "(p ∨ q) ∧ (p ∨ r)", "(p ∧ q) ∧ (p ∧ r)", "(p ∧ q) ∨ (p ∧ r)"],
        correctAnswer: 1,
        explanation: { solution: "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)", formula: "∨ distributes over ∧" }
    },
    {
        id: "dm-logic-017",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Idempotent law: p ∧ p ≡",
        options: ["T", "F", "p", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "p ∧ p ≡ p", formula: "p ∧ p ≡ p" }
    },
    {
        id: "dm-logic-018",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Identity law: p ∧ T ≡",
        options: ["T", "F", "p", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "p ∧ T ≡ p", formula: "p ∧ T ≡ p" }
    },
    {
        id: "dm-logic-019",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Identity law: p ∨ F ≡",
        options: ["T", "F", "p", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "p ∨ F ≡ p", formula: "p ∨ F ≡ p" }
    },
    {
        id: "dm-logic-020",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Domination law: p ∨ T ≡",
        options: ["p", "F", "T", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "p ∨ T ≡ T", formula: "p ∨ T ≡ T" }
    },
    {
        id: "dm-logic-021",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Domination law: p ∧ F ≡",
        options: ["p", "F", "T", "¬p"],
        correctAnswer: 1,
        explanation: { solution: "p ∧ F ≡ F", formula: "p ∧ F ≡ F" }
    },
    {
        id: "dm-logic-022",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Inverse/Negation law: p ∧ ¬p ≡",
        options: ["p", "T", "F", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "p ∧ ¬p ≡ F (contradiction)", formula: "p ∧ ¬p ≡ F" }
    },
    {
        id: "dm-logic-023",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Inverse/Negation law: p ∨ ¬p ≡",
        options: ["p", "T", "F", "¬p"],
        correctAnswer: 1,
        explanation: { solution: "p ∨ ¬p ≡ T (tautology - law of excluded middle)", formula: "p ∨ ¬p ≡ T" }
    },
    {
        id: "dm-logic-024",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Absorption law: p ∧ (p ∨ q) ≡",
        options: ["q", "p ∧ q", "p ∨ q", "p"],
        correctAnswer: 3,
        explanation: { solution: "p ∧ (p ∨ q) ≡ p", formula: "p ∧ (p ∨ q) ≡ p" }
    },
    {
        id: "dm-logic-025",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Absorption law: p ∨ (p ∧ q) ≡",
        options: ["q", "p ∧ q", "p ∨ q", "p"],
        correctAnswer: 3,
        explanation: { solution: "p ∨ (p ∧ q) ≡ p", formula: "p ∨ (p ∧ q) ≡ p" }
    },
    // ========== IMPLICATION EQUIVALENCES ==========
    {
        id: "dm-logic-030",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "p → q ≡",
        options: ["p ∧ q", "¬p ∨ q", "p ∨ q", "¬p ∧ q"],
        correctAnswer: 1,
        explanation: { solution: "p → q ≡ ¬p ∨ q (material implication)", formula: "p → q ≡ ¬p ∨ q" }
    },
    {
        id: "dm-logic-031",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Contrapositive: p → q ≡",
        options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ↔ q"],
        correctAnswer: 2,
        explanation: { solution: "Contrapositive: p → q ≡ ¬q → ¬p (logically equivalent)", formula: "p → q ≡ ¬q → ¬p" }
    },
    {
        id: "dm-logic-032",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Converse of p → q is:",
        options: ["¬q → ¬p", "q → p", "¬p → ¬q", "p ↔ q"],
        correctAnswer: 1,
        explanation: { solution: "Converse: q → p (NOT equivalent to original)" }
    },
    {
        id: "dm-logic-033",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Inverse of p → q is:",
        options: ["¬q → ¬p", "q → p", "¬p → ¬q", "p ↔ q"],
        correctAnswer: 2,
        explanation: { solution: "Inverse: ¬p → ¬q (NOT equivalent to original)" }
    },
    {
        id: "dm-logic-034",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "¬(p → q) ≡",
        options: ["p ∧ ¬q", "¬p ∨ q", "¬p ∧ q", "p ∨ ¬q"],
        correctAnswer: 0,
        explanation: { solution: "¬(p → q) ≡ ¬(¬p ∨ q) ≡ p ∧ ¬q", formula: "¬(p → q) ≡ p ∧ ¬q" }
    },
    {
        id: "dm-logic-035",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "p ↔ q ≡",
        options: ["(p → q) ∧ (q → p)", "p ∧ q", "p ∨ q", "(p ∧ q) ∨ (¬p ∧ ¬q)"],
        correctAnswer: 0,
        explanation: { solution: "p ↔ q ≡ (p → q) ∧ (q → p)", formula: "p ↔ q ≡ (p → q) ∧ (q → p)" }
    },
    {
        id: "dm-logic-036",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "p ↔ q can also be written as:",
        options: ["(p ∧ q) ∨ (¬p ∧ ¬q)", "(p ∨ q) ∧ (¬p ∨ ¬q)", "p XOR q", "(p ∧ ¬q) ∨ (¬p ∧ q)"],
        correctAnswer: 0,
        explanation: { solution: "p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)", formula: "XNOR operation" }
    },
    {
        id: "dm-logic-037",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "p ⊕ q (XOR) ≡",
        options: ["(p ∧ q) ∨ (¬p ∧ ¬q)", "(p ∧ ¬q) ∨ (¬p ∧ q)", "p ∧ q", "p ∨ q"],
        correctAnswer: 1,
        explanation: { solution: "XOR: true when exactly one is true", formula: "p ⊕ q ≡ (p ∧ ¬q) ∨ (¬p ∧ q)" }
    },
    // ========== RULES OF INFERENCE ==========
    {
        id: "dm-logic-040",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Modus Ponens: from p and p → q, we can conclude:",
        options: ["p", "¬q", "q", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "Modus Ponens: [p ∧ (p → q)] → q", formula: "p, p → q ⊢ q" }
    },
    {
        id: "dm-logic-041",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Modus Tollens: from ¬q and p → q, we can conclude:",
        options: ["p", "¬p", "q", "¬q"],
        correctAnswer: 1,
        explanation: { solution: "Modus Tollens: [(p → q) ∧ ¬q] → ¬p", formula: "p → q, ¬q ⊢ ¬p" }
    },
    {
        id: "dm-logic-042",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Hypothetical Syllogism: from p → q and q → r, we conclude:",
        options: ["p", "r", "p → r", "q"],
        correctAnswer: 2,
        explanation: { solution: "Hypothetical Syllogism: (p → q) ∧ (q → r) → (p → r)", formula: "p → q, q → r ⊢ p → r" }
    },
    {
        id: "dm-logic-043",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Disjunctive Syllogism: from p ∨ q and ¬p, we conclude:",
        options: ["p", "¬q", "q", "¬p"],
        correctAnswer: 2,
        explanation: { solution: "Disjunctive Syllogism: (p ∨ q) ∧ ¬p → q", formula: "p ∨ q, ¬p ⊢ q" }
    },
    {
        id: "dm-logic-044",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Addition rule: from p, we can derive:",
        options: ["p ∧ q", "p ∨ q", "p → q", "¬p"],
        correctAnswer: 1,
        explanation: { solution: "Addition: p → (p ∨ q)", formula: "p ⊢ p ∨ q" }
    },
    {
        id: "dm-logic-045",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Simplification: from p ∧ q, we can derive:",
        options: ["p ∨ q", "p (or q)", "p → q", "¬p ∧ ¬q"],
        correctAnswer: 1,
        explanation: { solution: "Simplification: (p ∧ q) → p", formula: "p ∧ q ⊢ p" }
    },
    {
        id: "dm-logic-046",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Conjunction: from p and q, we can derive:",
        options: ["p ∨ q", "p ∧ q", "p → q", "¬(p ∧ q)"],
        correctAnswer: 1,
        explanation: { solution: "Conjunction: p, q → (p ∧ q)", formula: "p, q ⊢ p ∧ q" }
    },
    {
        id: "dm-logic-047",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Resolution: from (p ∨ q) and (¬p ∨ r), we conclude:",
        options: ["q ∧ r", "q ∨ r", "p ∨ r", "¬p ∧ q"],
        correctAnswer: 1,
        explanation: { solution: "Resolution: (p ∨ q) ∧ (¬p ∨ r) → (q ∨ r)", formula: "p ∨ q, ¬p ∨ r ⊢ q ∨ r" }
    },
    // ========== QUANTIFIERS ==========
    {
        id: "dm-logic-050",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "∀x P(x) means:",
        options: ["There exists x such that P(x) is true", "For all x, P(x) is true", "P(x) is sometimes true", "P(x) is a tautology"],
        correctAnswer: 1,
        explanation: { solution: "∀ = universal quantifier = 'for all'" }
    },
    {
        id: "dm-logic-051",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "∃x P(x) means:",
        options: ["For all x, P(x) is true", "There exists at least one x such that P(x) is true", "P(x) is always false", "No x satisfies P(x)"],
        correctAnswer: 1,
        explanation: { solution: "∃ = existential quantifier = 'there exists'" }
    },
    {
        id: "dm-logic-052",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "¬(∀x P(x)) ≡",
        options: ["∀x ¬P(x)", "∃x ¬P(x)", "∃x P(x)", "¬∃x P(x)"],
        correctAnswer: 1,
        explanation: { solution: "Negation of 'all P' = 'exists one not P'", formula: "¬(∀x P(x)) ≡ ∃x ¬P(x)" }
    },
    {
        id: "dm-logic-053",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "¬(∃x P(x)) ≡",
        options: ["∃x ¬P(x)", "∀x ¬P(x)", "∀x P(x)", "∃x P(x)"],
        correctAnswer: 1,
        explanation: { solution: "Negation of 'exists P' = 'for all, not P'", formula: "¬(∃x P(x)) ≡ ∀x ¬P(x)" }
    },
    {
        id: "dm-logic-054",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Number of distinct propositional functions (truth tables) possible with n variables is 2^(2^n). For n=2, this is:",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "2^(2^2) = 2^4 = 16 distinct truth tables with 2 variables" }
    },
    // ========== SET THEORY ==========
    {
        id: "dm-set-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "In a set, order and repetition of elements:",
        options: ["Matters", "Doesn't matter", "Only order matters", "Only repetition matters"],
        correctAnswer: 1,
        explanation: { solution: "Sets: {1,2} = {2,1} = {1,2,1}, order and repetition don't matter" }
    },
    {
        id: "dm-set-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A set with exactly one element is called:",
        options: ["Empty set", "Singleton set", "Power set", "Universal set"],
        correctAnswer: 1,
        explanation: { solution: "Singleton set has exactly one element" }
    },
    {
        id: "dm-set-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "The cardinality of a set is:",
        options: ["Its first element", "Number of elements in it", "Its largest element", "Sum of its elements"],
        correctAnswer: 1,
        explanation: { solution: "|A| = cardinality = number of elements" }
    },
    {
        id: "dm-set-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A ⊆ B means:",
        options: ["A equals B", "Every element of A is in B", "Every element of B is in A", "A and B are disjoint"],
        correctAnswer: 1,
        explanation: { solution: "Subset: A ⊆ B iff x ∈ A → x ∈ B" }
    },
    {
        id: "dm-set-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A ⊂ B (proper subset) means:",
        options: ["A ⊆ B only", "A ⊆ B and A ≠ B", "A = B", "A ⊇ B"],
        correctAnswer: 1,
        explanation: { solution: "Proper subset: A ⊆ B and A ≠ B (B has at least one element not in A)" }
    },
    {
        id: "dm-set-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "|P(A)| where P(A) is power set of A with |A| = n is:",
        options: ["n", "n!", "2n", "2^n"],
        correctAnswer: 3,
        explanation: { solution: "Power set has 2^n subsets", formula: "|P(A)| = 2^|A|" }
    },
    {
        id: "dm-set-007",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "For any set A, ∅ is:",
        options: ["Not a subset of A", "Always a subset of A", "Only subset if A is empty", "Equal to A"],
        correctAnswer: 1,
        explanation: { solution: "Empty set ∅ is subset of every set" }
    },
    {
        id: "dm-set-008",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A ∪ B = ?",
        options: ["{x : x ∈ A and x ∈ B}", "{x : x ∈ A or x ∈ B}", "{x : x ∈ A but x ∉ B}", "{x : x ∉ A and x ∉ B}"],
        correctAnswer: 1,
        explanation: { solution: "Union: elements in A OR B (or both)" }
    },
    {
        id: "dm-set-009",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A ∩ B = ?",
        options: ["{x : x ∈ A or x ∈ B}", "{x : x ∈ A and x ∈ B}", "{x : x ∈ A but x ∉ B}", "{x : x ∉ A and x ∉ B}"],
        correctAnswer: 1,
        explanation: { solution: "Intersection: elements in BOTH A and B" }
    },
    {
        id: "dm-set-010",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A - B (or A \\ B) = ?",
        options: ["{x : x ∈ A and x ∈ B}", "{x : x ∈ A or x ∈ B}", "{x : x ∈ A and x ∉ B}", "{x : x ∈ B and x ∉ A}"],
        correctAnswer: 2,
        explanation: { solution: "Difference: elements in A but not in B" }
    },
    {
        id: "dm-set-011",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "A ⊕ B (symmetric difference) = ?",
        options: ["(A - B) ∪ (B - A)", "(A ∩ B)", "(A ∪ B)", "(A - B) ∩ (B - A)"],
        correctAnswer: 0,
        explanation: { solution: "Symmetric diff: in A or B but not both = (A∪B) - (A∩B)", formula: "A ⊕ B = (A - B) ∪ (B - A)" }
    },
    {
        id: "dm-set-012",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Two sets are disjoint if:",
        options: ["A ∪ B = ∅", "A ∩ B = ∅", "A = B", "A ⊆ B"],
        correctAnswer: 1,
        explanation: { solution: "Disjoint: no common elements, A ∩ B = ∅" }
    },
    // ========== SET LAWS ==========
    {
        id: "dm-set-013",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Idempotent law: A ∪ A = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 2,
        explanation: { solution: "A ∪ A = A", formula: "A ∪ A = A" }
    },
    {
        id: "dm-set-014",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Identity law: A ∪ ∅ = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 2,
        explanation: { solution: "A ∪ ∅ = A", formula: "A ∪ ∅ = A" }
    },
    {
        id: "dm-set-015",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Identity law: A ∩ U = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 2,
        explanation: { solution: "A ∩ U = A", formula: "A ∩ U = A" }
    },
    {
        id: "dm-set-016",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Domination law: A ∪ U = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 1,
        explanation: { solution: "A ∪ U = U", formula: "A ∪ U = U" }
    },
    {
        id: "dm-set-017",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Domination law: A ∩ ∅ = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 0,
        explanation: { solution: "A ∩ ∅ = ∅", formula: "A ∩ ∅ = ∅" }
    },
    {
        id: "dm-set-018",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Complement law: A ∪ A^c = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 1,
        explanation: { solution: "A ∪ A^c = U", formula: "A ∪ A' = U" }
    },
    {
        id: "dm-set-019",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Complement law: A ∩ A^c = ?",
        options: ["∅", "U", "A", "A^c"],
        correctAnswer: 0,
        explanation: { solution: "A ∩ A^c = ∅", formula: "A ∩ A' = ∅" }
    },
    {
        id: "dm-set-020",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "De Morgan's law: (A ∪ B)^c = ?",
        options: ["A^c ∪ B^c", "A^c ∩ B^c", "A ∩ B", "A ∪ B"],
        correctAnswer: 1,
        explanation: { solution: "(A ∪ B)^c = A^c ∩ B^c", formula: "(A ∪ B)' = A' ∩ B'" }
    },
    {
        id: "dm-set-021",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "De Morgan's law: (A ∩ B)^c = ?",
        options: ["A^c ∩ B^c", "A^c ∪ B^c", "A ∩ B", "A ∪ B"],
        correctAnswer: 1,
        explanation: { solution: "(A ∩ B)^c = A^c ∪ B^c", formula: "(A ∩ B)' = A' ∪ B'" }
    },
    {
        id: "dm-set-022",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Absorption law: A ∪ (A ∩ B) = ?",
        options: ["B", "A ∩ B", "A ∪ B", "A"],
        correctAnswer: 3,
        explanation: { solution: "A ∪ (A ∩ B) = A", formula: "Absorption" }
    },
    {
        id: "dm-set-023",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "Absorption law: A ∩ (A ∪ B) = ?",
        options: ["B", "A ∩ B", "A ∪ B", "A"],
        correctAnswer: 3,
        explanation: { solution: "A ∩ (A ∪ B) = A", formula: "Absorption" }
    },
    // ========== INCLUSION-EXCLUSION ==========
    {
        id: "dm-set-025",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "|A ∪ B| = ?",
        options: ["|A| + |B|", "|A| + |B| - |A ∩ B|", "|A| × |B|", "|A| - |B|"],
        correctAnswer: 1,
        explanation: { solution: "Inclusion-exclusion for 2 sets", formula: "|A ∪ B| = |A| + |B| - |A ∩ B|" }
    },
    {
        id: "dm-set-026",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Set Theory",
        question: "|A × B| where A×B is Cartesian product = ?",
        options: ["|A| + |B|", "|A| - |B|", "|A| × |B|", "|A| / |B|"],
        correctAnswer: 2,
        explanation: { solution: "Cartesian product: |A × B| = |A| × |B|", formula: "|A × B| = |A| × |B|" }
    }
]);

console.log("Exhaustive Discrete Math (Logic & Sets) loaded - ~75 questions");
