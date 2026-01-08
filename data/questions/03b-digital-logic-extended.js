/**
 * Digital Logic Extended - Combinational & Sequential Circuits
 */

Questions.register([
    // ========== BOOLEAN ALGEBRA EXTENDED ==========
    {
        id: "dl-bool-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Consensus theorem: AB + A'C + BC = ?",
        options: ["ABC", "AB + A'C", "A + B + C", "AB + BC"],
        correctAnswer: 1,
        explanation: { solution: "Consensus theorem: BC is redundant when AB and A'C exist", formula: "AB + A'C + BC = AB + A'C" }
    },
    {
        id: "dl-bool-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Dual of expression A + 1 = 1 is:",
        options: ["A + 0 = A", "A · 0 = 0", "A · 1 = A", "(A + 1) = 0"],
        correctAnswer: 1,
        explanation: { solution: "Duality: interchange + and ·, 0 and 1. Dual of A+1=1 is A·0=0" }
    },
    {
        id: "dl-bool-012",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A function of 4 variables has how many minterms?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "n variables → 2ⁿ minterms. 4 variables → 2⁴ = 16 minterms" }
    },
    {
        id: "dl-bool-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "XOR gate outputs 1 when:",
        options: ["All inputs are 1", "All inputs are 0", "Odd number of inputs are 1", "Even number of inputs are 1"],
        correctAnswer: 2,
        explanation: { solution: "XOR = 1 when odd number of 1s. Even = 0." }
    },
    {
        id: "dl-bool-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "NAND gate is called universal because:",
        options: ["It is fastest", "Any logic function can be implemented using only NAND", "It requires least power", "It is cheapest"],
        correctAnswer: 1,
        explanation: { solution: "Universal gates (NAND, NOR): can implement NOT, AND, OR - hence any function" }
    },
    // ========== COMBINATIONAL CIRCUITS ==========
    {
        id: "dl-comb-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A multiplexer with 16 inputs requires how many select lines?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: { solution: "2ⁿ inputs → n select lines. 16 = 2⁴ → 4 select lines", formula: "Select lines = log₂(inputs)" }
    },
    {
        id: "dl-comb-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "8-to-3 encoder converts 8 inputs to:",
        options: ["8 outputs", "3 output bits", "1 output bit", "None"],
        correctAnswer: 1,
        explanation: { solution: "2ⁿ-to-n encoder: 8-to-3 has 8 inputs, 3 binary output bits" }
    },
    {
        id: "dl-comb-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Priority encoder selects:",
        options: ["All inputs", "First active input", "Highest priority active input", "Random input"],
        correctAnswer: 2,
        explanation: { solution: "Priority encoder: outputs binary code of highest priority active input" }
    },
    {
        id: "dl-comb-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "4-bit binary adder carry output for adding 1111 + 0001 is:",
        options: ["0", "1", "Undefined", "Error"],
        correctAnswer: 1,
        explanation: { solution: "15 + 1 = 16, which is 10000 in binary. Carry out = 1, sum = 0000" }
    },
    {
        id: "dl-comb-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "BCD adder adds correction factor when sum exceeds:",
        options: ["9", "15", "10", "16"],
        correctAnswer: 0,
        explanation: { solution: "BCD: valid digits 0-9. If sum > 9 or carry, add 6 to get valid BCD" }
    },
    // ========== SEQUENTIAL CIRCUITS ==========
    {
        id: "dl-seq-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "SR latch is in invalid state when:",
        options: ["S=0, R=0", "S=0, R=1", "S=1, R=0", "S=1, R=1"],
        correctAnswer: 3,
        explanation: { solution: "S=R=1 is forbidden/invalid - causes Q and Q' both to be same value" }
    },
    {
        id: "dl-seq-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "JK flip-flop toggles when:",
        options: ["J=0, K=0", "J=0, K=1", "J=1, K=0", "J=1, K=1"],
        correctAnswer: 3,
        explanation: { solution: "J=K=1: toggle (complement) the output. Eliminates invalid state of SR." }
    },
    {
        id: "dl-seq-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "T flip-flop with T=1:",
        options: ["Holds", "Resets", "Sets", "Toggles"],
        correctAnswer: 3,
        explanation: { solution: "T=1: toggle on each clock edge. T=0: hold." }
    },
    {
        id: "dl-seq-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "D flip-flop output Q after clock edge equals:",
        options: ["Previous Q", "Q'", "D input", "Always 1"],
        correctAnswer: 2,
        explanation: { solution: "D flip-flop: Q(next) = D. Stores the D input value on clock edge." }
    },
    {
        id: "dl-seq-014",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-10 counter requires minimum how many flip-flops?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "Need at least ⌈log₂(10)⌉ = 4 flip-flops to count 10 states", formula: "FFs = ⌈log₂(N)⌉ = 4" }
    },
    {
        id: "dl-seq-015",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Ring counter with 4 flip-flops has how many distinct states?",
        options: ["16", "8", "4", "2"],
        correctAnswer: 2,
        explanation: { solution: "Ring counter: only one 1 circulates. N FFs → N states (not 2ⁿ)" }
    },
    {
        id: "dl-seq-016",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Johnson counter with 4 flip-flops has how many distinct states?",
        options: ["16", "8", "4", "2"],
        correctAnswer: 1,
        explanation: { solution: "Johnson/twisted ring: N FFs → 2N states. 4 FFs → 8 states." }
    },
    {
        id: "dl-seq-017",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Mealy machine output depends on:",
        options: ["Current state only", "Current state and current input", "Previous output", "Random"],
        correctAnswer: 1,
        explanation: { solution: "Mealy: output = f(state, input). Moore: output = f(state) only." }
    },
    {
        id: "dl-seq-018",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Number of states in minimal DFA for detecting sequence 101:",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: { solution: "States: Start, Seen1, Seen10, Seen101(accept). 4 states." }
    }
]);

console.log("Extended Digital Logic questions loaded");
