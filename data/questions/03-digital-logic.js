/**
 * Digital Logic Questions
 * Covers: Boolean Algebra, Gates, K-Maps, Combinational & Sequential Circuits
 */

Questions.register([
    // Logic Gates
    {
        id: "dl-gates-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "Which gates are called Universal Gates?",
        options: ["AND and OR", "NAND and NOR", "XOR and XNOR", "NOT and Buffer"],
        correctAnswer: 1,
        explanation: {
            solution: "NAND and NOR are universal gates because any other logic gate (AND, OR, NOT, XOR, etc.) can be implemented using only NAND gates or only NOR gates."
        }
    },
    {
        id: "dl-gates-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "The output of XOR gate is 1 when:",
        options: [
            "Both inputs are 0",
            "Both inputs are 1",
            "Inputs are different",
            "At least one input is 1"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "XOR (Exclusive OR) outputs 1 when inputs are different. A ⊕ B = A'B + AB' = 1 only when A ≠ B.",
            formula: "A ⊕ B = A'B + AB'"
        }
    },
    {
        id: "dl-gates-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "XNOR gate output is 1 when:",
        options: [
            "Both inputs are 0 only",
            "Both inputs are 1 only",
            "Inputs are same (both 0 or both 1)",
            "Inputs are different"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "XNOR (Exclusive NOR) is the complement of XOR. It outputs 1 when inputs are same: A ⊙ B = AB + A'B'.",
            formula: "A ⊙ B = AB + A'B' (Equality/Coincidence function)"
        }
    },
    // Boolean Algebra
    {
        id: "dl-bool-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "According to the Absorption Law, A + AB equals:",
        options: ["AB", "A", "B", "A + B"],
        correctAnswer: 1,
        explanation: {
            solution: "A + AB = A(1 + B) = A·1 = A. The term AB is 'absorbed' by A.",
            formula: "A + AB = A; also A(A + B) = A"
        }
    },
    {
        id: "dl-bool-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "De Morgan's theorem states that (A·B)' equals:",
        options: ["A'·B'", "A' + B'", "A + B", "(A + B)'"],
        correctAnswer: 1,
        explanation: {
            solution: "De Morgan's theorem: complement of AND is OR of complements; complement of OR is AND of complements.",
            formula: "(A·B)' = A' + B'; (A + B)' = A'·B'"
        }
    },
    {
        id: "dl-bool-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "The Consensus Theorem states that AB + A'C + BC equals:",
        options: ["AB + A'C", "AB + BC", "A'C + BC", "ABC"],
        correctAnswer: 0,
        explanation: {
            solution: "The term BC is redundant because it's covered by AB and A'C. BC = BC(A + A') = ABC + A'BC, which is covered by the other terms.",
            formula: "AB + A'C + BC = AB + A'C (BC is the consensus term)"
        }
    },
    {
        id: "dl-bool-004",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "With n Boolean variables, the maximum number of distinct Boolean functions possible is 2^(2^n). For n=2, this value is:",
        correctAnswer: 16,
        tolerance: 0,
        explanation: {
            solution: "For 2 variables, truth table has 2² = 4 rows. Each row can be 0 or 1, giving 2⁴ = 16 possible functions.",
            formula: "Number of Boolean functions with n variables = 2^(2^n)"
        }
    },
    // K-Map Minimization
    {
        id: "dl-kmap-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "K-Map",
        question: "In a K-map, adjacent cells differ by:",
        options: ["0 bits", "1 bit", "2 bits", "Any number of bits"],
        correctAnswer: 1,
        explanation: {
            solution: "K-maps use Gray code ordering so adjacent cells (including wrap-around) differ in exactly one bit. This allows grouping of cells to eliminate variables."
        }
    },
    {
        id: "dl-kmap-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "K-Map",
        question: "A 4-variable K-map has how many cells?",
        options: ["4", "8", "16", "32"],
        correctAnswer: 2,
        explanation: {
            solution: "An n-variable K-map has 2ⁿ cells. For 4 variables: 2⁴ = 16 cells.",
            formula: "K-map cells = 2^n where n = number of variables"
        }
    },
    {
        id: "dl-kmap-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "K-Map",
        question: "Grouping 8 cells in a 4-variable K-map eliminates how many variables?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: {
            solution: "Group of 2^k cells eliminates k variables. 8 = 2³, so 3 variables are eliminated, leaving only 1 variable in the term.",
            formula: "Group of 2^k cells = eliminates k variables"
        }
    },
    {
        id: "dl-kmap-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "K-Map",
        question: "In SOP (Sum of Products) form, minterms are grouped where the function value is:",
        options: ["0", "1", "Don't care", "Either 0 or 1"],
        correctAnswer: 1,
        explanation: {
            solution: "SOP groups cells with 1s to get product terms. POS (Product of Sums) groups 0s to get sum terms."
        }
    },
    // Combinational Circuits
    {
        id: "dl-comb-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A half adder has how many outputs?",
        options: ["1 (Sum)", "2 (Sum and Carry)", "3", "4"],
        correctAnswer: 1,
        explanation: {
            solution: "Half adder: Sum = A ⊕ B (XOR), Carry = A·B (AND). It adds two 1-bit numbers.",
            formula: "Sum = A ⊕ B, Carry = A·B"
        }
    },
    {
        id: "dl-comb-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 4-to-1 MUX has how many select lines?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: {
            solution: "A 2ⁿ-to-1 MUX needs n select lines. For 4-to-1: 4 = 2², so 2 select lines needed.",
            formula: "2^n inputs → n select lines"
        }
    },
    {
        id: "dl-comb-003",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 3-to-8 decoder has how many output lines?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: {
            solution: "A n-to-2^n decoder has 2ⁿ outputs. For 3-to-8: 2³ = 8 output lines.",
            formula: "n-bit decoder → 2^n outputs"
        }
    },
    // Sequential Circuits
    {
        id: "dl-seq-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "The main difference between a latch and a flip-flop is:",
        options: [
            "Latches have more inputs",
            "Flip-flops are level-triggered, latches are edge-triggered",
            "Latches are level-triggered, flip-flops are edge-triggered",
            "There is no difference"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Latches respond to input changes as long as enable is active (level-triggered). Flip-flops only respond at clock edges (edge-triggered), making them more predictable in synchronous circuits."
        }
    },
    {
        id: "dl-seq-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "In a JK flip-flop, when J=K=1, the flip-flop:",
        options: ["Sets (Q=1)", "Resets (Q=0)", "Toggles", "No change"],
        correctAnswer: 2,
        explanation: {
            solution: "JK flip-flop: J=K=0: No change, J=1,K=0: Set, J=0,K=1: Reset, J=K=1: Toggle. This eliminates the invalid state of SR flip-flop."
        }
    },
    {
        id: "dl-seq-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A T flip-flop toggles when T equals:",
        options: ["0", "1", "Either 0 or 1", "Depends on clock"],
        correctAnswer: 1,
        explanation: {
            solution: "T (Toggle) flip-flop: When T=0, output remains unchanged. When T=1, output toggles on clock edge."
        }
    },
    {
        id: "dl-seq-004",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-16 counter requires how many flip-flops?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "A mod-N counter needs ⌈log₂N⌉ flip-flops. For mod-16: log₂16 = 4 flip-flops (counts 0-15).",
            formula: "Flip-flops for mod-N counter = ⌈log₂N⌉"
        }
    },
    {
        id: "dl-seq-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A 4-bit shift register can store:",
        options: ["4 bits", "8 bits", "16 bits", "2 bits"],
        correctAnswer: 0,
        explanation: {
            solution: "An n-bit shift register stores n bits, one per flip-flop. Data can be shifted left, right, or loaded in parallel."
        }
    }
]);
