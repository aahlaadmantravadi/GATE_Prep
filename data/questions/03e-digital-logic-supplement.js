/**
 * Digital Logic SUPPLEMENT - Sequential Circuits & Number Systems
 * Counters, FSM, Mealy/Moore, Number system conversions
 */

Questions.register([
    // ========== COUNTERS ==========
    {
        id: "dl3-ctr-001",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "A ripple counter (asynchronous counter) has what disadvantage?",
        options: ["Too few states", "Propagation delay accumulates (spikes/glitches)", "Uses too few flip-flops", "Cannot be reset"],
        correctAnswer: 1,
        explanation: { solution: "Ripple counter: flip-flops change sequentially, causing accumulated delay and glitches" }
    },
    {
        id: "dl3-ctr-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "In a synchronous counter, all flip-flops are clocked:",
        options: ["Sequentially", "Simultaneously by the same clock", "By different clocks", "Not clocked"],
        correctAnswer: 1,
        explanation: { solution: "Synchronous: all FFs share same clock, faster than ripple counter" }
    },
    {
        id: "dl3-ctr-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "A 3-bit binary counter has how many states?",
        options: ["3", "6", "8", "16"],
        correctAnswer: 2,
        explanation: { solution: "n-bit counter: 2^n states. 3-bit = 8 states (0-7)", formula: "States = 2^n" }
    },
    {
        id: "dl3-ctr-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "A modulo-N counter counts from:",
        options: ["0 to N", "0 to N-1 (N states)", "1 to N", "1 to N+1"],
        correctAnswer: 1,
        explanation: { solution: "Mod-N: counts 0 to N-1, then resets (N distinct states)" }
    },
    {
        id: "dl3-ctr-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "BCD counter (decade counter) is modulo:",
        options: ["2", "8", "10", "16"],
        correctAnswer: 2,
        explanation: { solution: "BCD: counts 0-9 (10 states), requires 4 flip-flops" }
    },
    {
        id: "dl3-ctr-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Ring counter with n flip-flops has how many states?",
        options: ["2^n", "n", "2n", "n-1"],
        correctAnswer: 1,
        explanation: { solution: "Ring counter: n states with n flip-flops (one hot encoding)" }
    },
    {
        id: "dl3-ctr-007",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Johnson (twisted ring) counter with n flip-flops has how many states?",
        options: ["n", "2n", "2^n", "n^2"],
        correctAnswer: 1,
        explanation: { solution: "Johnson: 2n states with n flip-flops", formula: "States = 2n" }
    },
    {
        id: "dl3-ctr-008",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Maximum frequency of ripple counter with N flip-flops, propagation delay tpd, strobe pulse ts:",
        options: ["1/(N × tpd)", "1/(N × tpd + ts)", "N × tpd", "1/ts"],
        correctAnswer: 1,
        explanation: { solution: "f_max = 1/(N × tpd + ts)", formula: "f_max = 1/(N·tpd + ts)" }
    },
    // ========== FSM / STATE MACHINES ==========
    {
        id: "dl3-fsm-001",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "In Mealy machine, output depends on:",
        options: ["Present state only", "Present state and present input", "Next state only", "Input only"],
        correctAnswer: 1,
        explanation: { solution: "Mealy: output = f(state, input)" }
    },
    {
        id: "dl3-fsm-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "In Moore machine, output depends on:",
        options: ["Present state only", "Present state and input", "Input only", "Next state"],
        correctAnswer: 0,
        explanation: { solution: "Moore: output = f(state) only" }
    },
    {
        id: "dl3-fsm-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Mealy machine typically has fewer states than equivalent Moore machine because:",
        options: ["Output changes immediately with input", "Mealy uses more flip-flops", "Moore is simpler", "They always have same states"],
        correctAnswer: 0,
        explanation: { solution: "Mealy: output reacts to input immediately, can encode more info in transitions" }
    },
    {
        id: "dl3-fsm-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "State table for sequential circuit design shows:",
        options: ["Only inputs", "Present state, next state, inputs, outputs", "Only flip-flops", "Only gates"],
        correctAnswer: 1,
        explanation: { solution: "State table: present state × input → next state, output" }
    },
    {
        id: "dl3-fsm-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Excitation table gives:",
        options: ["Output for given input", "Required flip-flop inputs for present→next state transition", "Only next state", "Only present state"],
        correctAnswer: 1,
        explanation: { solution: "Excitation table: what inputs needed for FF to transition from Q to Q_next" }
    },
    // ========== NUMBER SYSTEMS ==========
    {
        id: "dl3-num-001",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Binary to decimal conversion: (101.11)₂ = ?",
        options: ["5.75", "5.5", "4.75", "6.25"],
        correctAnswer: 0,
        explanation: { solution: "1×4 + 0×2 + 1×1 + 1×0.5 + 1×0.25 = 4+1+0.5+0.25 = 5.75" }
    },
    {
        id: "dl3-num-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Hexadecimal A in decimal is:",
        options: ["10", "11", "15", "16"],
        correctAnswer: 0,
        explanation: { solution: "Hex: A=10, B=11, C=12, D=13, E=14, F=15" }
    },
    {
        id: "dl3-num-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "(1010)₂ in hexadecimal is:",
        options: ["A", "B", "10", "F"],
        correctAnswer: 0,
        explanation: { solution: "1010₂ = 10₁₀ = A₁₆" }
    },
    {
        id: "dl3-num-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "To convert octal to binary, each octal digit becomes:",
        options: ["2 bits", "3 bits", "4 bits", "1 bit"],
        correctAnswer: 1,
        explanation: { solution: "Octal (base 8): each digit = 3 binary bits (8 = 2³)" }
    },
    {
        id: "dl3-num-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "To convert hexadecimal to binary, each hex digit becomes:",
        options: ["2 bits", "3 bits", "4 bits", "8 bits"],
        correctAnswer: 2,
        explanation: { solution: "Hex (base 16): each digit = 4 binary bits (16 = 2⁴)" }
    },
    {
        id: "dl3-num-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "1's complement of binary number is obtained by:",
        options: ["Adding 1", "Flipping all bits", "Subtracting 1", "Multiplying by -1"],
        correctAnswer: 1,
        explanation: { solution: "1's complement: flip all bits (0→1, 1→0)" }
    },
    {
        id: "dl3-num-007",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "2's complement is obtained by:",
        options: ["1's complement + 1", "1's complement - 1", "Just flip MSB", "Just flip LSB"],
        correctAnswer: 0,
        explanation: { solution: "2's complement = 1's complement + 1", formula: "2's = 1's + 1" }
    },
    {
        id: "dl3-num-008",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Range of n-bit 2's complement representation:",
        options: ["0 to 2^n - 1", "-2^(n-1) to 2^(n-1) - 1", "-2^n to 2^n", "0 to 2^n"],
        correctAnswer: 1,
        explanation: { solution: "2's complement range: -2^(n-1) to 2^(n-1) - 1", formula: "[-2^(n-1), 2^(n-1)-1]" }
    },
    {
        id: "dl3-num-009",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "In BCD, decimal 25 is represented as:",
        options: ["11001", "0010 0101", "10101", "0011 0011"],
        correctAnswer: 1,
        explanation: { solution: "BCD: each decimal digit → 4 bits. 2=0010, 5=0101" }
    },
    {
        id: "dl3-num-010",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Excess-3 code is obtained by adding __ to BCD:",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: { solution: "Excess-3: BCD + 3 (self-complementing code)" }
    },
    // ========== SEQUENTIAL DESIGN ==========
    {
        id: "dl3-seq-001",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "JK flip-flop characteristic equation:",
        options: ["Q_next = JQ' + K'Q", "Q_next = J + K", "Q_next = J XOR K", "Q_next = JK"],
        correctAnswer: 0,
        explanation: { solution: "JK FF: Q_next = J·Q' + K'·Q", formula: "Q+ = JQ' + K'Q" }
    },
    {
        id: "dl3-seq-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "D flip-flop characteristic equation:",
        options: ["Q_next = D", "Q_next = D XOR Q", "Q_next = D'", "Q_next = DQ"],
        correctAnswer: 0,
        explanation: { solution: "D FF: Q_next = D (output follows input)", formula: "Q+ = D" }
    },
    {
        id: "dl3-seq-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "T flip-flop characteristic equation:",
        options: ["Q_next = T", "Q_next = T XOR Q (toggles when T=1)", "Q_next = T'Q", "Q_next = TQ'"],
        correctAnswer: 1,
        explanation: { solution: "T FF: Q_next = T ⊕ Q", formula: "Q+ = T ⊕ Q" }
    },
    {
        id: "dl3-seq-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Number of flip-flops needed for N states:",
        options: ["N", "log₂N", "⌈log₂N⌉", "2N"],
        correctAnswer: 2,
        explanation: { solution: "n flip-flops → 2^n states. Need ⌈log₂N⌉ FFs for N states", formula: "FFs = ⌈log₂N⌉" }
    },
    {
        id: "dl3-seq-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Setup time of a flip-flop is:",
        options: ["Time data must be stable before clock edge", "Time data must be stable after clock edge", "Propagation delay", "Clock period"],
        correctAnswer: 0,
        explanation: { solution: "Setup time: data stable before clock edge for reliable capture" }
    },
    {
        id: "dl3-seq-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Hold time of a flip-flop is:",
        options: ["Time data must be stable before clock edge", "Time data must be stable after clock edge", "Clock period", "Propagation delay"],
        correctAnswer: 1,
        explanation: { solution: "Hold time: data stable after clock edge" }
    }
]);

console.log("Digital Logic Supplement loaded - ~35 questions");
