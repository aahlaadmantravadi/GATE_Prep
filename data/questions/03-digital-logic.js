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
            solution: "NAND and NOR are universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates. To make NOT from NAND: connect both inputs together. To make AND: NAND followed by NOT(NAND). To make OR: NOT both inputs, then NAND. This universality makes them preferred in IC manufacturing - entire chips can use just one gate type.",
            formula: "NOT: A' = (A·A)' | AND: A·B = ((A·B)')' | OR: A+B = (A'·B')'"
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
            solution: "XOR (Exclusive OR) outputs 1 when inputs are different (one is 0, other is 1). Truth table: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0. XOR is used in parity generators, adders (sum bit), and comparators. For n-input XOR, output is 1 when ODD number of inputs are 1.",
            formula: "$A \\oplus B = A'B + AB' = (A+B)(A'+B')$"
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
            solution: "XNOR (Exclusive NOR) is the complement of XOR - also called equivalence or coincidence gate. Output is 1 when inputs are SAME: 0⊙0=1, 0⊙1=0, 1⊙0=0, 1⊙1=1. Used in equality comparators. For n-input XNOR, output is 1 when EVEN number of inputs are 1 (including zero).",
            formula: "$A \\odot B = AB + A'B' = (A \\oplus B)'$"
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
            solution: "Absorption Law: A + AB = A(1 + B) = A·1 = A. Intuitively: if A=1, result is 1 regardless of B; if A=0, AB=0 so result is 0. Either way, result equals A. The dual form is A(A+B) = A. These laws eliminate redundant terms in Boolean expressions, simplifying circuits.",
            formula: "$A + AB = A$ and $A(A+B) = A$"
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
            solution: "De Morgan's theorems: (1) (A·B)' = A' + B' - complement of AND equals OR of complements. (2) (A+B)' = A'·B' - complement of OR equals AND of complements. Essential for converting between SOP and POS forms, and for implementing any gate using only NAND or only NOR. Break the bar, change the operation.",
            formula: "$(AB)' = A' + B'$ and $(A+B)' = A'B'$"
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
            solution: "Consensus Theorem: AB + A'C + BC = AB + A'C. The term BC is redundant (called consensus term) because BC = BC(A+A') = ABC + A'BC, which is already covered by AB and A'C. When you have XY + X'Z, any term YZ is redundant and can be removed. Useful for simplification without K-maps.",
            formula: "$AB + A'C + BC = AB + A'C$"
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
            solution: "For n variables, the truth table has 2^n rows. Each row can independently be 0 or 1, giving 2^(2^n) possible functions. For n=2: 2^2=4 rows, so 2^4=16 distinct functions. These include: constant 0, constant 1, A, B, A', B', AND, OR, NAND, NOR, XOR, XNOR, A→B, B→A, A'B, AB'.",
            formula: "$Functions = 2^{2^n} = 2^{2^2} = 2^4 = 16$"
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
            solution: "K-maps use Gray code ordering so physically adjacent cells (including wrap-around edges) differ in exactly ONE variable. This property allows grouping: when cells with 1s are adjacent, the differing variable can be eliminated. Left-right and top-bottom edges wrap around. A group of 2 eliminates 1 variable, group of 4 eliminates 2, etc."
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
            solution: "An n-variable K-map has 2^n cells, one for each possible minterm. For 4 variables (A,B,C,D): 2^4 = 16 cells arranged in a 4×4 grid. The rows/columns use Gray code labeling (00, 01, 11, 10) so adjacent cells differ by one bit. 5+ variable K-maps become impractical (3D visualization needed).",
            formula: "$Cells = 2^n = 2^4 = 16$"
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
            solution: "A group of 2^k cells eliminates k variables from the product term. 8 = 2^3, so 3 variables are eliminated, leaving only 1 variable in the resulting term. In a 4-variable K-map, grouping 8 cells (half the map) means only 1 variable distinguishes inside vs outside the group. Group of 16 = entire map = eliminates all 4 variables = constant 1.",
            formula: "$2^k$ cells → eliminate $k$ variables"
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
            solution: "SOP minimization: group cells containing 1s (and optionally don't cares) to form product terms, then OR them. The resulting terms are ANDs (products) of literals. POS minimization: group 0s to get sum terms, then AND them. Don't cares (X) can be treated as 0 or 1, whichever gives larger groups."
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
            solution: "Half adder adds two 1-bit inputs A and B, producing 2 outputs: Sum = A⊕B (XOR) and Carry = A·B (AND). Called 'half' because it cannot handle a carry input from a previous stage. Full adder adds 3 inputs (A, B, Cin) and produces Sum and Cout, enabling multi-bit addition by cascading.",
            formula: "$Sum = A \\oplus B$, $Carry = A \\cdot B$"
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
            solution: "A 2^n-to-1 multiplexer needs n select lines to choose among 2^n inputs. For 4-to-1 MUX: 4 = 2^2, so 2 select lines (S1, S0) are needed. The select lines form a binary number (00, 01, 10, 11) that determines which of the 4 inputs (I0-I3) passes to the output. MUX can implement any Boolean function.",
            formula: "$Select\\ lines = \\log_2(inputs) = \\log_2(4) = 2$"
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
            solution: "An n-to-2^n decoder has n input lines and 2^n output lines. For 3-to-8: 3 inputs (A, B, C) decode to 8 outputs (Y0-Y7). Exactly one output is active at a time, corresponding to the binary value of inputs. Each output represents one minterm. Decoders can implement any Boolean function using just OR gates on the outputs.",
            formula: "$Outputs = 2^n = 2^3 = 8$"
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
            solution: "Latches are LEVEL-TRIGGERED: output can change continuously while enable/clock is at active level. Flip-flops are EDGE-TRIGGERED: output changes only at clock edge (rising or falling). Edge-triggering makes flip-flops more predictable in synchronous circuits - data is sampled at precise moments, eliminating timing ambiguity."
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
            solution: "JK flip-flop truth table: J=0,K=0 → No change (Q holds). J=0,K=1 → Reset (Q=0). J=1,K=0 → Set (Q=1). J=1,K=1 → Toggle (Q becomes Q'). The toggle mode eliminates SR flip-flop's invalid state (S=R=1). JK is most versatile: can act as SR, D (tie J=D, K=D'), or T (tie J=K) flip-flop.",
            formula: "$Q_{n+1} = JQ'_n + K'Q_n$"
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
            solution: "T (Toggle) flip-flop: T=0 → output holds previous value. T=1 → output toggles (inverts) on clock edge. Characteristic equation: Q(n+1) = T⊕Q = T'Q + TQ'. T flip-flop is ideal for counters: connect T=1 for continuous toggling, creating frequency divider. Each stage divides frequency by 2.",
            formula: "$Q_{n+1} = T \\oplus Q_n$"
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
            solution: "A mod-N counter counts N states (0 to N-1) and needs ⌈log₂N⌉ flip-flops. For mod-16: log₂16 = 4 exactly, so 4 flip-flops. These provide 2^4 = 16 states (0000 to 1111). For mod-10 (decade counter): need ⌈log₂10⌉ = 4 FFs, but with feedback to skip states 10-15.",
            formula: "$FFs = \\lceil\\log_2(N)\\rceil = \\lceil\\log_2(16)\\rceil = 4$"
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
            solution: "An n-bit shift register contains n flip-flops, each storing 1 bit, for total of n bits. A 4-bit shift register stores 4 bits. Data can be shifted left or right on each clock. Types: SISO (Serial In Serial Out), SIPO (Serial In Parallel Out), PISO, PIPO. Used for serial-to-parallel conversion, delay lines, and multiplication/division by 2."
        }
    }
]);
