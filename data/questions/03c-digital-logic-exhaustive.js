/**
 * Digital Logic EXHAUSTIVE
 * Boolean algebra, gates, K-maps, combinational/sequential circuits
 */

Questions.register([
    // ========== BOOLEAN ALGEBRA BASICS ==========
    {
        id: "dl-bool-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + 0 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 2,
        explanation: { solution: "Identity law: X + 0 = X", formula: "X + 0 = X" }
    },
    {
        id: "dl-bool-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · 1 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 2,
        explanation: { solution: "Identity law: X · 1 = X", formula: "X · 1 = X" }
    },
    {
        id: "dl-bool-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + 1 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 1,
        explanation: { solution: "Domination law: X + 1 = 1", formula: "X + 1 = 1" }
    },
    {
        id: "dl-bool-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · 0 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 0,
        explanation: { solution: "Domination law: X · 0 = 0", formula: "X · 0 = 0" }
    },
    {
        id: "dl-bool-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + X = ?",
        options: ["0", "2X", "X", "1"],
        correctAnswer: 2,
        explanation: { solution: "Idempotent law: X + X = X", formula: "X + X = X" }
    },
    {
        id: "dl-bool-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · X = ?",
        options: ["0", "X²", "X", "1"],
        correctAnswer: 2,
        explanation: { solution: "Idempotent law: X · X = X", formula: "X · X = X" }
    },
    {
        id: "dl-bool-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + X' = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 1,
        explanation: { solution: "Complement law: X + X' = 1", formula: "X + X' = 1" }
    },
    {
        id: "dl-bool-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · X' = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 0,
        explanation: { solution: "Complement law: X · X' = 0", formula: "X · X' = 0" }
    },
    {
        id: "dl-bool-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "(X')' = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 2,
        explanation: { solution: "Involution law: (X')' = X", formula: "(X')' = X" }
    },
    {
        id: "dl-bool-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "De Morgan: (X + Y)' = ?",
        options: ["X' + Y'", "X' · Y'", "X · Y", "(X · Y)'"],
        correctAnswer: 1,
        explanation: { solution: "De Morgan: (X + Y)' = X' · Y'", formula: "(X + Y)' = X' · Y'" }
    },
    {
        id: "dl-bool-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "De Morgan: (X · Y)' = ?",
        options: ["X' · Y'", "X' + Y'", "X + Y", "(X + Y)'"],
        correctAnswer: 1,
        explanation: { solution: "De Morgan: (X · Y)' = X' + Y'", formula: "(X · Y)' = X' + Y'" }
    },
    {
        id: "dl-bool-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Absorption law: X + X·Y = ?",
        options: ["X·Y", "Y", "X + Y", "X"],
        correctAnswer: 3,
        explanation: { solution: "X + X·Y = X(1 + Y) = X·1 = X", formula: "X + X·Y = X" }
    },
    {
        id: "dl-bool-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Absorption law: X · (X + Y) = ?",
        options: ["X·Y", "Y", "X + Y", "X"],
        correctAnswer: 3,
        explanation: { solution: "X · (X + Y) = X·X + X·Y = X + X·Y = X", formula: "X · (X + Y) = X" }
    },
    {
        id: "dl-bool-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Consensus theorem: X·Y + X'·Z + Y·Z = ?",
        options: ["X·Y + X'·Z", "X·Y + Y·Z", "X'·Z + Y·Z", "X·Y·Z"],
        correctAnswer: 0,
        explanation: { solution: "Y·Z is redundant (consensus term)", formula: "X·Y + X'·Z + Y·Z = X·Y + X'·Z" }
    },
    {
        id: "dl-bool-015",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + X'·Y = ?",
        options: ["X", "Y", "X + Y", "X·Y"],
        correctAnswer: 2,
        explanation: { solution: "X + X'·Y = (X + X')(X + Y) = 1·(X + Y) = X + Y", formula: "X + X'Y = X + Y" }
    },
    // ========== LOGIC GATES ==========
    {
        id: "dl-gate-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "Output of AND gate is 1 when:",
        options: ["Any input is 1", "All inputs are 1", "Any input is 0", "All inputs are 0"],
        correctAnswer: 1,
        explanation: { solution: "AND: output = 1 only when ALL inputs = 1" }
    },
    {
        id: "dl-gate-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "Output of OR gate is 0 when:",
        options: ["Any input is 0", "All inputs are 0", "Any input is 1", "All inputs are 1"],
        correctAnswer: 1,
        explanation: { solution: "OR: output = 0 only when ALL inputs = 0" }
    },
    {
        id: "dl-gate-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "NAND gate is:",
        options: ["AND followed by NOT", "OR followed by NOT", "NOT followed by AND", "XOR followed by NOT"],
        correctAnswer: 0,
        explanation: { solution: "NAND = NOT(AND) = (A·B)'", formula: "NAND = (A·B)'" }
    },
    {
        id: "dl-gate-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "NOR gate is:",
        options: ["AND followed by NOT", "OR followed by NOT", "NOT followed by OR", "XOR followed by NOT"],
        correctAnswer: 1,
        explanation: { solution: "NOR = NOT(OR) = (A+B)'", formula: "NOR = (A+B)'" }
    },
    {
        id: "dl-gate-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "XOR gate output is 1 when:",
        options: ["Both inputs same", "Both inputs different", "Both inputs 1", "Both inputs 0"],
        correctAnswer: 1,
        explanation: { solution: "XOR: A ⊕ B = 1 when inputs are different", formula: "A ⊕ B = A'B + AB'" }
    },
    {
        id: "dl-gate-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "XNOR gate output is 1 when:",
        options: ["Both inputs same", "Both inputs different", "Any input is 1", "Any input is 0"],
        correctAnswer: 0,
        explanation: { solution: "XNOR: output = 1 when both inputs same (equality)", formula: "XNOR = A'B' + AB" }
    },
    {
        id: "dl-gate-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "Which gate is called universal gate?",
        options: ["AND", "OR", "NAND", "XOR"],
        correctAnswer: 2,
        explanation: { solution: "NAND and NOR are universal - can implement any function using only that gate" }
    },
    {
        id: "dl-gate-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "NOT using only NAND: connect both inputs of NAND to X gives:",
        options: ["X", "0", "1", "X'"],
        correctAnswer: 3,
        explanation: { solution: "(X·X)' = X' (NAND with same input = NOT)", formula: "NOT(X) = NAND(X,X)" }
    },
    {
        id: "dl-gate-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ 0 = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 2,
        explanation: { solution: "XOR with 0: A ⊕ 0 = A", formula: "A ⊕ 0 = A" }
    },
    {
        id: "dl-gate-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ 1 = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 3,
        explanation: { solution: "XOR with 1: A ⊕ 1 = A'", formula: "A ⊕ 1 = A'" }
    },
    {
        id: "dl-gate-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ A = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 0,
        explanation: { solution: "XOR with self: A ⊕ A = 0", formula: "A ⊕ A = 0" }
    },
    {
        id: "dl-gate-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ A' = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 1,
        explanation: { solution: "XOR with complement: A ⊕ A' = 1", formula: "A ⊕ A' = 1" }
    },
    // ========== CANONICAL FORMS ==========
    {
        id: "dl-canon-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "SOP (Sum of Products) is also called:",
        options: ["Maxterm form", "Minterm form", "Canonical product", "Standard sum"],
        correctAnswer: 1,
        explanation: { solution: "SOP = sum (OR) of minterms (products)" }
    },
    {
        id: "dl-canon-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "POS (Product of Sums) is also called:",
        options: ["Minterm form", "Maxterm form", "Canonical sum", "Standard product"],
        correctAnswer: 1,
        explanation: { solution: "POS = product (AND) of maxterms (sums)" }
    },
    {
        id: "dl-canon-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For n variables, total number of minterms (or maxterms) is:",
        options: ["n", "n²", "2n", "2^n"],
        correctAnswer: 3,
        explanation: { solution: "2^n possible combinations = 2^n minterms and 2^n maxterms", formula: "Total minterms = 2^n" }
    },
    {
        id: "dl-canon-004",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 4 variables, total number of possible Boolean functions is 2^(2^n). This equals:",
        correctAnswer: 65536,
        tolerance: 0,
        explanation: { solution: "2^(2^4) = 2^16 = 65536 different Boolean functions" }
    },
    // ========== K-MAPS ==========
    {
        id: "dl-kmap-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Karnaugh map is used for:",
        options: ["Multiplying expressions", "Minimizing Boolean expressions", "Drawing circuits", "Counting gates"],
        correctAnswer: 1,
        explanation: { solution: "K-map: graphical method for Boolean function minimization" }
    },
    {
        id: "dl-kmap-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Adjacent cells in K-map differ in exactly:",
        options: ["0 variables", "1 variable", "2 variables", "All variables"],
        correctAnswer: 1,
        explanation: { solution: "K-map adjacency: cells differ in exactly one variable (Gray code ordering)" }
    },
    {
        id: "dl-kmap-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A group of 2 cells in K-map eliminates how many variables?",
        options: ["0", "1", "2", "All"],
        correctAnswer: 1,
        explanation: { solution: "2^1 = 2 cells → 1 variable eliminated" }
    },
    {
        id: "dl-kmap-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A group of 4 cells in K-map eliminates how many variables?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
        explanation: { solution: "2^2 = 4 cells → 2 variables eliminated" }
    },
    {
        id: "dl-kmap-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A group of 8 cells in K-map (for 4 variables) gives a term with:",
        options: ["0 literals", "1 literal", "2 literals", "3 literals"],
        correctAnswer: 1,
        explanation: { solution: "2^3 = 8 cells → 3 variables eliminated → 4-3 = 1 literal remains" }
    },
    {
        id: "dl-kmap-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Don't care conditions in K-map are represented by:",
        options: ["0", "1", "X or d", "Empty cell"],
        correctAnswer: 2,
        explanation: { solution: "Don't care = X or d; can be treated as 0 or 1 for minimization" }
    },
    {
        id: "dl-kmap-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "K-map groups must be of size:",
        options: ["Any size", "Powers of 2 only", "Powers of 3 only", "Prime numbers"],
        correctAnswer: 1,
        explanation: { solution: "Groups must be 1, 2, 4, 8, 16, ... (powers of 2)" }
    },
    // ========== COMBINATIONAL CIRCUITS ==========
    {
        id: "dl-comb-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A half adder has:",
        options: ["1 input, 1 output", "2 inputs, 1 output", "2 inputs, 2 outputs", "3 inputs, 2 outputs"],
        correctAnswer: 2,
        explanation: { solution: "Half adder: A, B inputs → Sum, Carry outputs" }
    },
    {
        id: "dl-comb-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Half adder: Sum = ?, Carry = ?",
        options: ["Sum = A·B, Carry = A⊕B", "Sum = A⊕B, Carry = A·B", "Sum = A+B, Carry = A·B", "Sum = A·B, Carry = A+B"],
        correctAnswer: 1,
        explanation: { solution: "Sum = A ⊕ B (XOR), Carry = A · B (AND)", formula: "Sum = A⊕B, Carry = AB" }
    },
    {
        id: "dl-comb-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A full adder has:",
        options: ["2 inputs, 2 outputs", "3 inputs, 2 outputs", "3 inputs, 3 outputs", "4 inputs, 2 outputs"],
        correctAnswer: 1,
        explanation: { solution: "Full adder: A, B, Cin → Sum, Cout" }
    },
    {
        id: "dl-comb-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Full adder: Sum = ?",
        options: ["A ⊕ B ⊕ Cin", "A · B · Cin", "A + B + Cin", "(A⊕B)·Cin"],
        correctAnswer: 0,
        explanation: { solution: "Sum = A ⊕ B ⊕ Cin (3-input XOR)", formula: "Sum = A ⊕ B ⊕ Cin" }
    },
    {
        id: "dl-comb-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "n-bit ripple carry adder uses how many full adders?",
        options: ["n-1", "n", "n+1", "2n"],
        correctAnswer: 1,
        explanation: { solution: "n full adders for n-bit addition" }
    },
    {
        id: "dl-comb-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Delay of n-bit ripple carry adder is O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Carry propagates through n stages: O(n) delay" }
    },
    {
        id: "dl-comb-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Carry lookahead adder has delay O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "CLA computes carries in parallel: O(log n) delay" }
    },
    {
        id: "dl-comb-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 2-to-1 multiplexer has:",
        options: ["1 data input, 1 select", "2 data inputs, 1 select", "2 data inputs, 2 selects", "4 data inputs, 2 selects"],
        correctAnswer: 1,
        explanation: { solution: "2:1 MUX: 2 data, 1 select, 1 output" }
    },
    {
        id: "dl-comb-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "2^n-to-1 multiplexer uses n select lines and has:",
        options: ["n data inputs", "2n data inputs", "n² data inputs", "2^n data inputs"],
        correctAnswer: 3,
        explanation: { solution: "2^n:1 MUX has 2^n data inputs, n select lines", formula: "Data inputs = 2^n" }
    },
    {
        id: "dl-comb-010",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "An 8:1 multiplexer needs how many select lines?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "2^3 = 8, so 3 select lines" }
    },
    {
        id: "dl-comb-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A decoder with n inputs has:",
        options: ["n outputs", "2n outputs", "n² outputs", "2^n outputs"],
        correctAnswer: 3,
        explanation: { solution: "n-to-2^n decoder: n inputs → 2^n outputs", formula: "Outputs = 2^n" }
    },
    {
        id: "dl-comb-012",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 3-to-8 decoder has how many outputs?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: { solution: "2^3 = 8 outputs" }
    },
    {
        id: "dl-comb-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "An encoder with 2^n inputs has:",
        options: ["2^n outputs", "n² outputs", "n outputs", "2n outputs"],
        correctAnswer: 2,
        explanation: { solution: "2^n-to-n encoder: opposite of decoder", formula: "Outputs = n" }
    },
    // ========== SEQUENTIAL CIRCUITS ==========
    {
        id: "dl-seq-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A combinational circuit's output depends on:",
        options: ["Current inputs only", "Previous state only", "Both current inputs and previous state", "Future inputs"],
        correctAnswer: 0,
        explanation: { solution: "Combinational: output = f(inputs) only" }
    },
    {
        id: "dl-seq-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A sequential circuit's output depends on:",
        options: ["Current inputs only", "Previous state only", "Current inputs and state (memory)", "Future inputs"],
        correctAnswer: 2,
        explanation: { solution: "Sequential: output = f(inputs, current state)" }
    },
    {
        id: "dl-seq-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "SR latch has forbidden state when:",
        options: ["S=0, R=0", "S=0, R=1", "S=1, R=0", "S=1, R=1"],
        correctAnswer: 3,
        explanation: { solution: "S=R=1 is forbidden (race condition in SR latch)" }
    },
    {
        id: "dl-seq-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "JK flip-flop solves SR's forbidden state by making J=K=1 cause:",
        options: ["Hold state", "Set Q=1", "Reset Q=0", "Toggle (complement Q)"],
        correctAnswer: 3,
        explanation: { solution: "JK: when J=K=1, output toggles" }
    },
    {
        id: "dl-seq-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "D flip-flop (delay flip-flop): Q(next) = ?",
        options: ["D'", "D", "Q", "0"],
        correctAnswer: 1,
        explanation: { solution: "D flip-flop: Q(n+1) = D (copies input)", formula: "Q(next) = D" }
    },
    {
        id: "dl-seq-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "T flip-flop (toggle flip-flop): when T=1, Q(next) = ?",
        options: ["Q", "Q'", "0", "1"],
        correctAnswer: 1,
        explanation: { solution: "T=1: toggle, Q(n+1) = Q'", formula: "Q(next) = Q ⊕ T" }
    },
    {
        id: "dl-seq-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "An n-bit counter can count from 0 to:",
        options: ["n", "n-1", "2^n", "2^n - 1"],
        correctAnswer: 3,
        explanation: { solution: "n bits: 0 to 2^n - 1", formula: "Range: 0 to 2^n - 1" }
    },
    {
        id: "dl-seq-008",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A 4-bit counter can count from 0 to (max value):",
        correctAnswer: 15,
        tolerance: 0,
        explanation: { solution: "2^4 - 1 = 15" }
    },
    {
        id: "dl-seq-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-N counter requires minimum how many flip-flops?",
        options: ["N", "N-1", "⌈log₂N⌉", "⌊log₂N⌋"],
        correctAnswer: 2,
        explanation: { solution: "Minimum FFs = ⌈log₂N⌉", formula: "FFs = ⌈log₂N⌉" }
    },
    {
        id: "dl-seq-010",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-10 counter (decade counter) needs minimum how many flip-flops?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "⌈log₂(10)⌉ = ⌈3.32⌉ = 4" }
    },
    {
        id: "dl-seq-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "In a synchronous counter, all flip-flops are clocked by:",
        options: ["Different clocks", "The same clock", "No clock", "Previous FF output"],
        correctAnswer: 1,
        explanation: { solution: "Synchronous: all FFs share same clock (simultaneous transitions)" }
    },
    {
        id: "dl-seq-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "In a ripple (asynchronous) counter, the clock to each FF comes from:",
        options: ["External source", "Previous FF output", "Same global clock", "Internal oscillator"],
        correctAnswer: 1,
        explanation: { solution: "Ripple: each FF clocked by previous FF's output" }
    },
    {
        id: "dl-seq-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A 4-bit shift register can store:",
        options: ["4 bytes", "8 bits", "4 bits", "16 bits"],
        correctAnswer: 2,
        explanation: { solution: "n-bit shift register stores n bits" }
    },
    {
        id: "dl-seq-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "SISO shift register means:",
        options: ["Serial In, Serial Out", "Serial In, Store Out", "Store In, Serial Out", "Store In, Store Out"],
        correctAnswer: 0,
        explanation: { solution: "SISO = Serial-In Serial-Out" }
    },
    {
        id: "dl-seq-015",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "PIPO shift register means:",
        options: ["Parallel In, Parallel Out", "Parallel In, Previous Out", "Previous In, Parallel Out", "Partial In/Out"],
        correctAnswer: 0,
        explanation: { solution: "PIPO = Parallel-In Parallel-Out" }
    }
]);

console.log("Exhaustive Digital Logic loaded - ~70 questions");
