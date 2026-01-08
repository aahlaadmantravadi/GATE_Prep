/**
 * Discrete Mathematics Questions
 * Covers: Graph Theory, Logic, Sets & Relations, Combinatorics
 */

Questions.register([
    // Graph Theory Basics
    {
        id: "dm-graph-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "According to the Handshaking Theorem, the sum of degrees of all vertices in a graph equals:",
        options: ["Number of vertices", "Number of edges", "Twice the number of edges", "Number of vertices squared"],
        correctAnswer: 2,
        explanation: {
            solution: "Each edge contributes 2 to the sum of degrees (one for each endpoint). Therefore, Σdeg(v) = 2|E|.",
            formula: "∑deg(v) = 2e, where e = number of edges"
        }
    },
    {
        id: "dm-graph-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "In a complete graph Kₙ, the number of edges is:",
        options: ["n", "n-1", "n(n-1)/2", "n²"],
        correctAnswer: 2,
        explanation: {
            solution: "In a complete graph, every vertex is connected to every other vertex. The number of ways to choose 2 vertices from n is C(n,2) = n(n-1)/2.",
            formula: "Edges in Kₙ = n(n-1)/2"
        }
    },
    {
        id: "dm-graph-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A bipartite graph cannot contain:",
        options: ["Even-length cycles", "Trees", "Odd-length cycles", "Isolated vertices"],
        correctAnswer: 2,
        explanation: {
            solution: "A bipartite graph can be partitioned into two sets where edges only go between sets. An odd-length cycle would require returning to the same set after an odd number of steps, which is impossible."
        }
    },
    {
        id: "dm-graph-004",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "In a complete bipartite graph K₃,₄, how many edges are there?",
        correctAnswer: 12,
        tolerance: 0,
        explanation: {
            solution: "In Km,n, each of the m vertices in one set connects to all n vertices in the other set, giving m×n = 3×4 = 12 edges.",
            formula: "Edges in Km,n = m × n"
        }
    },
    {
        id: "dm-graph-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A tree with n vertices has exactly:",
        options: ["n edges", "n-1 edges", "n+1 edges", "2n edges"],
        correctAnswer: 1,
        explanation: {
            solution: "A tree is a connected acyclic graph. The minimum edges for connectivity is n-1. Adding any more edge would create a cycle.",
            formula: "Edges in a tree = n - 1"
        }
    },
    {
        id: "dm-graph-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Euler's formula for connected planar graphs states: v - e + r = ?",
        options: ["0", "1", "2", "n"],
        correctAnswer: 2,
        explanation: {
            solution: "For any connected planar graph with v vertices, e edges, and r regions (including the infinite region), the formula v - e + r = 2 always holds.",
            formula: "v - e + r = 2 (Euler's formula)"
        }
    },
    {
        id: "dm-graph-007",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "An Eulerian circuit exists in a connected graph if and only if:",
        options: [
            "All vertices have even degree",
            "All vertices have odd degree",
            "Exactly two vertices have odd degree",
            "The graph is complete"
        ],
        correctAnswer: 0,
        explanation: {
            solution: "An Eulerian circuit (visiting every edge exactly once and returning to start) requires every vertex to have even degree so we can enter and leave each vertex the same number of times."
        }
    },
    {
        id: "dm-graph-008",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "K₅ and K₃,₃ are important because any non-planar graph must contain a subgraph homeomorphic to:",
        options: ["K₄ or K₂,₃", "K₅ or K₃,₃", "K₆ or K₄,₄", "K₃ or K₂,₂"],
        correctAnswer: 1,
        explanation: {
            solution: "Kuratowski's theorem states that a graph is non-planar if and only if it contains a subdivision (homeomorphic copy) of K₅ or K₃,₃."
        }
    },
    // Propositional Logic
    {
        id: "dm-logic-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "The conditional statement p → q is false only when:",
        options: [
            "p is false and q is true",
            "p is true and q is false",
            "Both p and q are false",
            "Both p and q are true"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "p → q means 'if p then q'. A promise is only broken when the premise (p) is true but the conclusion (q) is false."
        }
    },
    {
        id: "dm-logic-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "The contrapositive of p → q is:",
        options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p ∧ q"],
        correctAnswer: 2,
        explanation: {
            solution: "The contrapositive ¬q → ¬p is logically equivalent to p → q. If the original is true, so is the contrapositive, and vice versa."
        }
    },
    {
        id: "dm-logic-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "'p only if q' is equivalent to:",
        options: ["p → q", "q → p", "p ↔ q", "p ∧ q"],
        correctAnswer: 0,
        explanation: {
            solution: "'p only if q' means p can only be true when q is true. This is exactly p → q (if p then q)."
        }
    },
    {
        id: "dm-logic-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "Which of the following is a tautology?",
        options: ["p ∧ ¬p", "p ∨ ¬p", "p → p ∧ q", "p ↔ ¬p"],
        correctAnswer: 1,
        explanation: {
            solution: "p ∨ ¬p (Law of Excluded Middle) is always true - either p is true or its negation is true. p ∧ ¬p is a contradiction (always false)."
        }
    },
    {
        id: "dm-logic-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Propositional Logic",
        question: "De Morgan's law states that ¬(p ∧ q) is equivalent to:",
        options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "¬p → ¬q"],
        correctAnswer: 1,
        explanation: {
            solution: "De Morgan's laws: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q. Negation flips the operator and negates each component.",
            formula: "¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q"
        }
    },
    // Sets and Relations
    {
        id: "dm-sets-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "A relation R on set A is an equivalence relation if and only if it is:",
        options: [
            "Reflexive and symmetric",
            "Symmetric and transitive",
            "Reflexive, symmetric, and transitive",
            "Reflexive and transitive"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "An equivalence relation must satisfy all three properties: reflexive (aRa for all a), symmetric (aRb implies bRa), and transitive (aRb and bRc implies aRc)."
        }
    },
    {
        id: "dm-sets-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "A relation R on set A is a partial order if it is:",
        options: [
            "Reflexive, symmetric, and transitive",
            "Reflexive, antisymmetric, and transitive",
            "Irreflexive, symmetric, and transitive",
            "Reflexive and transitive only"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "A partial order (POSET) requires reflexivity (aRa), antisymmetry (aRb and bRa implies a=b), and transitivity (aRb and bRc implies aRc)."
        }
    },
    {
        id: "dm-sets-003",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "How many relations are possible on a set with 3 elements?",
        correctAnswer: 512,
        tolerance: 0,
        explanation: {
            solution: "A relation on set A is a subset of A×A. For |A|=3, |A×A|=9. Number of subsets = 2⁹ = 512.",
            formula: "Number of relations on set of n elements = 2^(n²)"
        }
    },
    // Combinatorics
    {
        id: "dm-comb-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Combinatorics",
        question: "The number of ways to arrange n distinct objects is:",
        options: ["n", "2ⁿ", "n!", "nⁿ"],
        correctAnswer: 2,
        explanation: {
            solution: "For the first position, n choices; for second, n-1 choices; and so on. Total = n × (n-1) × ... × 1 = n!",
            formula: "Permutations of n objects = n!"
        }
    },
    {
        id: "dm-comb-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Combinatorics",
        question: "The number of ways to choose r objects from n distinct objects (order doesn't matter) is:",
        options: ["n!/(n-r)!", "n!/r!", "n!/((n-r)! × r!)", "nʳ"],
        correctAnswer: 2,
        explanation: {
            solution: "C(n,r) = n!/((n-r)! × r!). We divide by r! because the order of selection doesn't matter.",
            formula: "C(n,r) = n!/((n-r)!r!) = nCr"
        }
    },
    {
        id: "dm-comb-003",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Combinatorics",
        question: "How many 4-letter words can be formed from the letters of 'GATE' without repetition?",
        correctAnswer: 24,
        tolerance: 0,
        explanation: {
            solution: "This is permutation of 4 distinct letters taken 4 at a time = 4! = 4 × 3 × 2 × 1 = 24."
        }
    }
]);
