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
        explanation: {
            solution: "Consensus Theorem: When you have AB + A'C, the term BC is redundant because BC = BC(A+A') = ABC + A'BC, which is covered by AB and A'C. The third term (where one variable from first term meets one from second, both being the non-complemented versions) can always be removed. This simplifies expressions without K-maps.",
            formula: "$AB + A'C + BC = AB + A'C$"
        }
    },
    {
        id: "dl-bool-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Dual of expression A + 1 = 1 is:",
        options: ["A + 0 = A", "A · 0 = 0", "A · 1 = A", "(A + 1) = 0"],
        correctAnswer: 1,
        explanation: {
            solution: "Duality principle: swap AND↔OR and 0↔1 while keeping complements unchanged. Dual of A+1=1: change '+' to '·' and '1' to '0': A·0 = 0. Both equations are valid Boolean identities. Duality helps derive new theorems - if a Boolean equation is true, its dual is also true.",
            formula: "Dual: swap $+$ with $\\cdot$, swap $0$ with $1$"
        }
    },
    {
        id: "dl-bool-012",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A function of 4 variables has how many minterms?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: {
            solution: "A minterm is a product term where each variable appears exactly once (complemented or not). For n variables, there are 2^n minterms, one for each row of the truth table. With 4 variables (A,B,C,D): 2^4 = 16 minterms (m0 through m15). Each minterm equals 1 for exactly one input combination.",
            formula: "$Minterms = 2^n = 2^4 = 16$"
        }
    },
    {
        id: "dl-bool-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "XOR gate outputs 1 when:",
        options: ["All inputs are 1", "All inputs are 0", "Odd number of inputs are 1", "Even number of inputs are 1"],
        correctAnswer: 2,
        explanation: {
            solution: "For multi-input XOR, output is 1 when an ODD number of inputs are 1. This is because XOR is associative: A⊕B⊕C⊕D = ((A⊕B)⊕C)⊕D. Each XOR flips the result when input is 1. Used for parity generation: odd parity generator outputs 1 when odd number of data bits are 1.",
            formula: "$A \\oplus B \\oplus C = 1$ when odd count of 1s"
        }
    },
    {
        id: "dl-bool-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "NAND gate is called universal because:",
        options: ["It is fastest", "Any logic function can be implemented using only NAND", "It requires least power", "It is cheapest"],
        correctAnswer: 1,
        explanation: {
            solution: "NAND is universal because NOT, AND, and OR can all be built using only NAND gates: NOT(A) = A NAND A. AND(A,B) = NOT(A NAND B) = (A NAND B) NAND (A NAND B). OR(A,B) = (A NAND A) NAND (B NAND B). Since any function can be expressed using NOT, AND, OR, NAND alone suffices. Same applies to NOR."
        }
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
        explanation: {
            solution: "A 2^n-to-1 MUX needs n select lines. For 16 inputs: 16 = 2^4, so 4 select lines (S3,S2,S1,S0). The 4-bit select value (0000 to 1111) chooses which of 16 inputs passes to output. A MUX can implement any n-variable Boolean function using n select lines and hardwiring inputs to 0 or 1.",
            formula: "$Select = \\log_2(16) = 4$ lines"
        }
    },
    {
        id: "dl-comb-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "8-to-3 encoder converts 8 inputs to:",
        options: ["8 outputs", "3 output bits", "1 output bit", "None"],
        correctAnswer: 1,
        explanation: {
            solution: "An encoder compresses 2^n inputs to n output bits representing the binary code of the active input. 8-to-3 encoder: 8 inputs (I0-I7), 3 outputs (Y2,Y1,Y0). When I5 is active, output = 101 (binary 5). Opposite of decoder. Priority encoder handles multiple active inputs by encoding the highest-priority one."
        }
    },
    {
        id: "dl-comb-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Priority encoder selects:",
        options: ["All inputs", "First active input", "Highest priority active input", "Random input"],
        correctAnswer: 2,
        explanation: {
            solution: "When multiple inputs are active simultaneously, a priority encoder outputs the binary code of the HIGHEST PRIORITY input (typically the highest-numbered or designated). Regular encoders produce unpredictable output with multiple active inputs. Priority encoders also have a 'valid' output indicating if ANY input is active."
        }
    },
    {
        id: "dl-comb-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "4-bit binary adder carry output for adding 1111 + 0001 is:",
        options: ["0", "1", "Undefined", "Error"],
        correctAnswer: 1,
        explanation: {
            solution: "1111 (15) + 0001 (1) = 10000 (16) in binary. The 4-bit sum output shows 0000, and carry-out = 1. This carry-out is the 5th bit (2^4 = 16). The result indicates overflow for unsigned 4-bit arithmetic. In a ripple-carry adder, this carry propagates from LSB through each full adder to the final carry-out.",
            formula: "$15 + 1 = 16 = 10000_2$, carry out = 1"
        }
    },
    {
        id: "dl-comb-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "BCD adder adds correction factor when sum exceeds:",
        options: ["9", "15", "10", "16"],
        correctAnswer: 0,
        explanation: {
            solution: "BCD (Binary Coded Decimal) represents each decimal digit as 4 bits (0-9 only, not 10-15). When adding two BCD digits, if sum > 9 OR carry is generated, add 6 (0110) to correct the result into valid BCD. This skips the invalid hexadecimal values A-F. Example: 5+7=12 (1100), exceeds 9, so add 6: 1100+0110=10010 → 1 carry, 0010 (valid BCD 12).",
            formula: "If sum > 9 or carry: add 6 (0110)"
        }
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
        explanation: {
            solution: "In SR latch (using NOR gates): S=R=1 is INVALID because it forces both Q and Q' to 0, violating the requirement that Q' = complement of Q. When inputs return to S=R=0, the latch enters a race condition with unpredictable final state. JK flip-flop solves this by interpreting J=K=1 as 'toggle' instead of invalid."
        }
    },
    {
        id: "dl-seq-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "JK flip-flop toggles when:",
        options: ["J=0, K=0", "J=0, K=1", "J=1, K=0", "J=1, K=1"],
        correctAnswer: 3,
        explanation: {
            solution: "JK flip-flop operations: J=0,K=0: Hold (Q unchanged). J=0,K=1: Reset (Q=0). J=1,K=0: Set (Q=1). J=1,K=1: Toggle (Q flips). The toggle functionality converts the SR latch's invalid state into a useful operation. Insert a JK with J=K=1 tied together to create a T flip-flop for counters.",
            formula: "$Q_{next} = JQ' + K'Q$"
        }
    },
    {
        id: "dl-seq-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "T flip-flop with T=1:",
        options: ["Holds", "Resets", "Sets", "Toggles"],
        correctAnswer: 3,
        explanation: {
            solution: "Toggle flip-flop: T=0 means hold current state, T=1 means toggle (invert) Q on clock edge. Characteristic equation: Q(next) = T⊕Q. When T is permanently tied to 1, the flip-flop toggles on every clock edge, dividing clock frequency by 2. Chaining n T flip-flops creates an n-bit ripple counter.",
            formula: "$Q_{n+1} = T \\oplus Q_n$. T=1 → toggle"
        }
    },
    {
        id: "dl-seq-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "D flip-flop output Q after clock edge equals:",
        options: ["Previous Q", "Q'", "D input", "Always 1"],
        correctAnswer: 2,
        explanation: {
            solution: "D (Data/Delay) flip-flop: Q(next) = D. Whatever value is at input D when the active clock edge arrives is captured and held at output Q until the next clock edge. Simplest flip-flop - no invalid states, no race conditions. Used for registers, data storage, pipeline stages. Building block for most memory elements.",
            formula: "$Q_{n+1} = D$"
        }
    },
    {
        id: "dl-seq-014",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-10 counter requires minimum how many flip-flops?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "Mod-10 counter counts 0-9 (10 states). Need ⌈log₂(10)⌉ = ⌈3.32⌉ = 4 flip-flops (3 only gives 8 states). The 4 FFs provide 16 possible states, but feedback logic resets counter after state 9 (1001), skipping states 10-15. This is a decade counter or BCD counter, used in digital clocks and frequency counters.",
            formula: "$FFs = \\lceil\\log_2(10)\\rceil = 4$"
        }
    },
    {
        id: "dl-seq-015",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Ring counter with 4 flip-flops has how many distinct states?",
        options: ["16", "8", "4", "2"],
        correctAnswer: 2,
        explanation: {
            solution: "Ring counter: a single 1 (or 0) circulates through the flip-flops. With 4 FFs: states are 1000→0100→0010→0001→1000... Only 4 unique states with 4 FFs (not 2^4=16). Very inefficient storage-wise but simple decoding - each FF directly indicates one state. Used when glitch-free decoded outputs are needed."
        }
    },
    {
        id: "dl-seq-016",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Johnson counter with 4 flip-flops has how many distinct states?",
        options: ["16", "8", "4", "2"],
        correctAnswer: 1,
        explanation: {
            solution: "Johnson counter (twisted ring): complement of last FF feeds back to first. States: 0000→1000→1100→1110→1111→0111→0011→0001→0000. With n FFs: 2n unique states. 4 FFs → 8 states. More efficient than ring counter (2n vs n) but less than binary (2n vs 2^n). All transitions are single-bit changes, minimizing glitches."
        }
    },
    {
        id: "dl-seq-017",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Mealy machine output depends on:",
        options: ["Current state only", "Current state and current input", "Previous output", "Random"],
        correctAnswer: 1,
        explanation: {
            solution: "Mealy machine: output = f(current state, current input). Outputs can change asynchronously when inputs change. Moore machine: output = f(current state only). Outputs change only with clock. Mealy typically needs fewer states but can have glitchy outputs. Moore is more stable but may need more states."
        }
    },
    {
        id: "dl-seq-018",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "Number of states in minimal DFA for detecting sequence 101:",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: {
            solution: "For overlapping sequence detector '101': S0 (start/seen nothing), S1 (seen '1'), S2 (seen '10'), S3 (seen '101' - output and go to S1 since last '1' could start new sequence). Actually for non-overlapping: 4 states. For overlapping: S0→S1→S2→(output, goto S1). Counting carefully: 4 states needed for proper implementation including return logic."
        }
    }
]);

console.log("Extended Digital Logic questions loaded");
