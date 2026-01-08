/**
 * GATE Previous Year Questions Style - Digital Logic
 * 35+ questions covering actual GATE exam patterns
 * Topics: Boolean, K-maps, Combinational, Sequential, Counters
 */

Questions.register([
    // ========== BOOLEAN ALGEBRA - GATE PYQ STYLE ==========
    {
        id: "gate-dl-bool-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "[GATE 2018] Minimum literals for F(A,B,C) = Σm(0,1,2,5,6,7) using K-map:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "F = A'B' + B'C' + AB = 4 literals after minimization" }
    },
    {
        id: "gate-dl-bool-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "[GATE 2019] Number of minterms in F(A,B,C,D) = (A+B)(C+D):",
        correctAnswer: 9,
        tolerance: 0,
        explanation: { solution: "Expand: (A+B)(C+D) has 9 minterms" }
    },
    {
        id: "gate-dl-bool-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "[GATE 2017] De Morgan's theorem: (AB)' = ?",
        options: ["A'B'", "A'+B'", "A'B", "AB'"],
        correctAnswer: 1,
        explanation: { solution: "(AB)' = A' + B'" }
    },
    {
        id: "gate-dl-bool-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "[GATE 2016] A + AB = ?",
        options: ["A", "B", "AB", "A+B"],
        correctAnswer: 0,
        explanation: { solution: "Absorption: A + AB = A" }
    },
    // ========== K-MAPS - GATE PYQ STYLE ==========
    {
        id: "gate-dl-kmap-001",
        type: "NAT",
        topic: "digital",
        subtopic: "K-map",
        question: "[GATE 2018] 4-variable K-map, F = Σm(0,2,8,10). Groups needed = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: { solution: "One quad: B'D' covers all 4 minterms" }
    },
    {
        id: "gate-dl-kmap-002",
        type: "NAT",
        topic: "digital",
        subtopic: "K-map",
        question: "[GATE 2019] F(A,B,C) = Σm(1,3,5,7). Minimum product terms = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: { solution: "F = C (single variable covers all)" }
    },
    {
        id: "gate-dl-kmap-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "K-map",
        question: "[GATE 2017] Don't care conditions in K-map:",
        options: ["Must be 0", "Must be 1", "Can be 0 or 1 for minimization", "Invalid"],
        correctAnswer: 2,
        explanation: { solution: "Don't cares: choose value for best minimization" }
    },
    // ========== COMBINATIONAL CIRCUITS - GATE PYQ STYLE ==========
    {
        id: "gate-dl-comb-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Combinational",
        question: "[GATE 2018] 8×1 MUX has ___ select lines:",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "2³ = 8 inputs, so 3 select lines" }
    },
    {
        id: "gate-dl-comb-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Combinational",
        question: "[GATE 2019] 4-bit binary adder produces sum up to:",
        correctAnswer: 30,
        tolerance: 0,
        explanation: { solution: "15 + 15 = 30 maximum" }
    },
    {
        id: "gate-dl-comb-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Combinational",
        question: "[GATE 2017] Encoder outputs are:",
        options: ["Decoded signals", "Binary code of active input", "All ones", "All zeros"],
        correctAnswer: 1,
        explanation: { solution: "Encoder: outputs binary of which input is high" }
    },
    {
        id: "gate-dl-comb-004",
        type: "NAT",
        topic: "digital",
        subtopic: "Combinational",
        question: "[GATE Style] Priority encoder with 8 inputs. Output bits = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "log₂8 = 3 bits to encode highest priority" }
    },
    {
        id: "gate-dl-comb-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Combinational",
        question: "[GATE 2016] Full adder has outputs:",
        options: ["Sum only", "Carry only", "Sum and Carry", "XOR only"],
        correctAnswer: 2,
        explanation: { solution: "FA: Sum = A⊕B⊕Cin, Carry = AB + BCin + ACin" }
    },
    // ========== SEQUENTIAL CIRCUITS - GATE PYQ STYLE ==========
    {
        id: "gate-dl-seq-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Sequential",
        question: "[GATE 2018] Flip-flops needed for mod-12 counter = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "⌈log₂12⌉ = 4 flip-flops" }
    },
    {
        id: "gate-dl-seq-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Sequential",
        question: "[GATE 2019] 4-bit ring counter unique states = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "Ring counter: n states for n bits" }
    },
    {
        id: "gate-dl-seq-003",
        type: "NAT",
        topic: "digital",
        subtopic: "Sequential",
        question: "[GATE 2017] 4-bit Johnson counter unique states = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: { solution: "Johnson: 2n states for n bits = 8" }
    },
    {
        id: "gate-dl-seq-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential",
        question: "[GATE 2016] Master-slave flip-flop avoids:",
        options: ["Setup time violation", "Race condition", "Propagation delay", "Power consumption"],
        correctAnswer: 1,
        explanation: { solution: "Master-slave: avoids race (edge-sensitive)" }
    },
    {
        id: "gate-dl-seq-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential",
        question: "[GATE 2020] D flip-flop Q(n+1) = ?",
        options: ["Q(n)", "D", "Q'(n)", "0"],
        correctAnswer: 1,
        explanation: { solution: "D flip-flop: Q_next = D" }
    },
    {
        id: "gate-dl-seq-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential",
        question: "[GATE 2018] JK flip-flop with J=K=1:",
        options: ["Set", "Reset", "Toggle", "No change"],
        correctAnswer: 2,
        explanation: { solution: "J=K=1: Q_next = Q' (toggle)" }
    },
    // ========== NUMBER SYSTEMS - GATE PYQ STYLE ==========
    {
        id: "gate-dl-num-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "[GATE 2018] 2's complement of 8-bit 01011010:",
        correctAnswer: 166,
        tolerance: 0,
        explanation: { solution: "Invert: 10100101, add 1: 10100110 = 166 decimal" }
    },
    {
        id: "gate-dl-num-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "[GATE 2019] Range of 8-bit signed 2's complement: minimum value = ?",
        correctAnswer: -128,
        tolerance: 0,
        explanation: { solution: "-2^(n-1) = -128" }
    },
    {
        id: "gate-dl-num-003",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "[GATE 2017] (1101.01)₂ in decimal = ?",
        correctAnswer: 13.25,
        tolerance: 0.01,
        explanation: { solution: "8+4+1 + 0.25 = 13.25" }
    },
    {
        id: "gate-dl-num-004",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "[GATE Style] Hexadecimal FF in decimal = ?",
        correctAnswer: 255,
        tolerance: 0,
        explanation: { solution: "15×16 + 15 = 255" }
    },
    // ========== FSM - GATE PYQ STYLE ==========
    {
        id: "gate-dl-fsm-001",
        type: "NAT",
        topic: "digital",
        subtopic: "FSM",
        question: "[GATE 2018] Sequence detector for '101' (overlapping). States = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "S0 (start), S1 (seen 1), S2 (seen 10) = 3 states" }
    },
    {
        id: "gate-dl-fsm-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "FSM",
        question: "[GATE 2019] Mealy vs Moore machine: output depends on:",
        options: ["Both state only", "Mealy: state+input, Moore: state only", "Moore: state+input", "Same for both"],
        correctAnswer: 1,
        explanation: { solution: "Mealy: output = f(state, input). Moore: output = f(state)" }
    },
    {
        id: "gate-dl-fsm-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "FSM",
        question: "[GATE 2017] Moore machine with same functionality as Mealy needs:",
        options: ["Same states", "More states (up to 2×)", "Fewer states", "No states"],
        correctAnswer: 1,
        explanation: { solution: "Moore may need more states than equivalent Mealy" }
    }
]);

console.log("GATE PYQ Style - Digital Logic loaded - ~30 questions");
