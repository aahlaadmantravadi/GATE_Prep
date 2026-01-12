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
        explanation: {
            solution: "Ripple counter: each FF is clocked by the previous FF's output, not a common clock. This causes propagation delays to accumulate - the LSB changes first, then ripples through to MSB. During transition, intermediate (wrong) values appear briefly, causing glitches. Not suitable for high-speed or when output is sampled combinationally.",
            formula: "Total delay = $n \\times t_{pd}$ for n flip-flops"
        }
    },
    {
        id: "dl3-ctr-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "In a synchronous counter, all flip-flops are clocked:",
        options: ["Sequentially", "Simultaneously by the same clock", "By different clocks", "Not clocked"],
        correctAnswer: 1,
        explanation: {
            solution: "Synchronous counter: ALL flip-flops receive the same clock signal simultaneously. They all change state at the same instant. Logic circuits determine which FFs toggle based on current count. No ripple delay - output is stable after one FF delay. Faster and glitch-free compared to ripple counters."
        }
    },
    {
        id: "dl3-ctr-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "A 3-bit binary counter has how many states?",
        options: ["3", "6", "8", "16"],
        correctAnswer: 2,
        explanation: {
            solution: "n-bit binary counter has 2^n states, counting from 0 to 2^n-1. 3-bit counter: 2^3 = 8 states (000, 001, 010, 011, 100, 101, 110, 111 = 0 to 7). After 111, it wraps back to 000. Each additional bit doubles the number of states.",
            formula: "States = $2^n = 2^3 = 8$"
        }
    },
    {
        id: "dl3-ctr-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "A modulo-N counter counts from:",
        options: ["0 to N", "0 to N-1 (N states)", "1 to N", "1 to N+1"],
        correctAnswer: 1,
        explanation: {
            solution: "Mod-N counter counts through exactly N distinct states, typically 0,1,2,...,N-1, then resets to 0. For example, mod-6 counter: 0,1,2,3,4,5,0,1,... (6 states). Uses feedback logic to skip unwanted states of the underlying binary counter. Decade counter (mod-10) counts 0-9."
        }
    },
    {
        id: "dl3-ctr-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "BCD counter (decade counter) is modulo:",
        options: ["2", "8", "10", "16"],
        correctAnswer: 2,
        explanation: {
            solution: "BCD (Binary Coded Decimal) counter is mod-10, counting 0-9 (0000 to 1001). Requires 4 flip-flops (to represent up to 9) but skips states 10-15 (1010-1111). Used for decimal counting, digital clocks, and frequency counters. Cascading two BCD counters counts 0-99.",
            formula: "BCD: 10 states (0-9)"
        }
    },
    {
        id: "dl3-ctr-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Ring counter with n flip-flops has how many states?",
        options: ["2^n", "n", "2n", "n-1"],
        correctAnswer: 1,
        explanation: {
            solution: "Ring counter: a single '1' circulates through n flip-flops (one-hot encoding). States: 1000...→0100...→0010...→0001...→1000... Only n unique states with n FFs (very inefficient: binary counter would have 2^n states). Advantage: no decoding needed - each state is directly indicated by which FF is set.",
            formula: "Ring counter: $n$ FFs → $n$ states"
        }
    },
    {
        id: "dl3-ctr-007",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Johnson (twisted ring) counter with n flip-flops has how many states?",
        options: ["n", "2n", "2^n", "n^2"],
        correctAnswer: 1,
        explanation: {
            solution: "Johnson counter (twisted ring): complement of last FF output feeds back to first FF. States for n=4: 0000→1000→1100→1110→1111→0111→0011→0001→0000. Total 2n states with n FFs. More efficient than ring counter (2n > n) but less than binary (2n < 2^n). Single-bit transitions prevent glitches.",
            formula: "Johnson: $n$ FFs → $2n$ states"
        }
    },
    {
        id: "dl3-ctr-008",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Maximum frequency of ripple counter with N flip-flops, propagation delay tpd, strobe pulse ts:",
        options: ["1/(N × tpd)", "1/(N × tpd + ts)", "N × tpd", "1/ts"],
        correctAnswer: 1,
        explanation: {
            solution: "For reliable operation, clock period must be long enough for all FFs to settle and for strobe/sampling. Minimum period = N × tpd (worst-case ripple from bit 0 to bit N-1) + ts (strobe time). Maximum frequency = 1/(N × tpd + ts). This is why ripple counters are slower than synchronous.",
            formula: "$f_{max} = \\frac{1}{N \\cdot t_{pd} + t_s}$"
        }
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
        explanation: {
            solution: "Mealy machine: output = f(current state, current input). Outputs appear on transition edges in state diagrams. Output can change asynchronously when input changes mid-state, potentially causing glitches. Typically needs fewer states than equivalent Moore machine for the same task.",
            formula: "Mealy: output = f(state, input)"
        }
    },
    {
        id: "dl3-fsm-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "In Moore machine, output depends on:",
        options: ["Present state only", "Present state and input", "Input only", "Next state"],
        correctAnswer: 0,
        explanation: {
            solution: "Moore machine: output = f(current state only). Outputs are labeled inside state circles in diagrams. Outputs are synchronous with state changes (only change at clock edges), making them more stable and easier to predict. Output is independent of input in the current cycle.",
            formula: "Moore: output = f(state)"
        }
    },
    {
        id: "dl3-fsm-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Mealy machine typically has fewer states than equivalent Moore machine because:",
        options: ["Output changes immediately with input", "Mealy uses more flip-flops", "Moore is simpler", "They always have same states"],
        correctAnswer: 0,
        explanation: {
            solution: "In Mealy, different outputs can be produced from the same state based on different inputs (output is on transitions). In Moore, each unique output needs its own state. This means Mealy often encodes the same behavior with fewer states. Tradeoff: Mealy outputs can glitch; Moore outputs are cleaner."
        }
    },
    {
        id: "dl3-fsm-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "State table for sequential circuit design shows:",
        options: ["Only inputs", "Present state, next state, inputs, outputs", "Only flip-flops", "Only gates"],
        correctAnswer: 1,
        explanation: {
            solution: "State table is the tabular representation of FSM behavior. Columns: present state, inputs, next state, outputs. Each row shows: given current state and input, what's the next state and output. Used to derive logic equations for flip-flop inputs. Equivalent to state diagram in tabular form."
        }
    },
    {
        id: "dl3-fsm-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Excitation table gives:",
        options: ["Output for given input", "Required flip-flop inputs for present→next state transition", "Only next state", "Only present state"],
        correctAnswer: 1,
        explanation: {
            solution: "Excitation table: for each FF type, shows what inputs (J,K or S,R or D or T) are needed to achieve a desired Q → Q_next transition. For JK: 0→0: J=0,K=X; 0→1: J=1,K=X; 1→0: J=X,K=1; 1→1: J=X,K=0. Essential for deriving FF input logic from state table."
        }
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
        explanation: {
            solution: "Convert each position: (101.11)₂ = 1×2² + 0×2¹ + 1×2⁰ + 1×2⁻¹ + 1×2⁻² = 4 + 0 + 1 + 0.5 + 0.25 = 5.75. Integer part: positional weights are 1,2,4,8... Fractional part: weights are 0.5, 0.25, 0.125... Sum all positions where bit is 1.",
            formula: "$(101.11)_2 = 4 + 1 + 0.5 + 0.25 = 5.75$"
        }
    },
    {
        id: "dl3-num-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Hexadecimal A in decimal is:",
        options: ["10", "11", "15", "16"],
        correctAnswer: 0,
        explanation: {
            solution: "Hexadecimal (base 16) uses digits 0-9 and A-F for values 10-15. A=10, B=11, C=12, D=13, E=14, F=15. So hex 'A' = decimal 10. Hex 'FF' = 15×16 + 15 = 255 (maximum 8-bit value). Each hex digit represents exactly 4 binary bits.",
            formula: "Hex: A=10, B=11, C=12, D=13, E=14, F=15"
        }
    },
    {
        id: "dl3-num-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "(1010)₂ in hexadecimal is:",
        options: ["A", "B", "10", "F"],
        correctAnswer: 0,
        explanation: {
            solution: "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10₁₀ = A₁₆. Quick method: group binary into 4-bit nibbles from right, convert each to hex. 1010 = A. For longer numbers: 11111010 → F A. Hex is compact notation for binary (4:1 ratio).",
            formula: "$(1010)_2 = 10_{10} = A_{16}$"
        }
    },
    {
        id: "dl3-num-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "To convert octal to binary, each octal digit becomes:",
        options: ["2 bits", "3 bits", "4 bits", "1 bit"],
        correctAnswer: 1,
        explanation: {
            solution: "Octal is base 8 = 2³, so each octal digit represents exactly 3 binary bits. Example: 752₈ → 7=111, 5=101, 2=010 → 111101010₂. Reverse for binary→octal: group from right in 3s. This direct mapping makes conversion trivial compared to decimal.",
            formula: "Octal $8 = 2^3$ → 3 bits per digit"
        }
    },
    {
        id: "dl3-num-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "To convert hexadecimal to binary, each hex digit becomes:",
        options: ["2 bits", "3 bits", "4 bits", "8 bits"],
        correctAnswer: 2,
        explanation: {
            solution: "Hexadecimal is base 16 = 2⁴, so each hex digit represents exactly 4 binary bits (a nibble). Example: 3F₁₆ → 3=0011, F=1111 → 00111111₂. This is why hex is the preferred compact notation for binary data - it's easy to convert mentally and groups bits nicely.",
            formula: "Hex $16 = 2^4$ → 4 bits per digit"
        }
    },
    {
        id: "dl3-num-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "1's complement of binary number is obtained by:",
        options: ["Adding 1", "Flipping all bits", "Subtracting 1", "Multiplying by -1"],
        correctAnswer: 1,
        explanation: {
            solution: "1's complement: invert every bit (0→1, 1→0). Example: 0101 → 1010. For n-bit number X, 1's complement = 2ⁿ - 1 - X. Used for representing negative numbers (older systems). Issue: two representations of zero (+0 and -0). Largely replaced by 2's complement in modern systems."
        }
    },
    {
        id: "dl3-num-007",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "2's complement is obtained by:",
        options: ["1's complement + 1", "1's complement - 1", "Just flip MSB", "Just flip LSB"],
        correctAnswer: 0,
        explanation: {
            solution: "2's complement = flip all bits (1's complement), then add 1. Example: 5 = 0101 → flip = 1010 → +1 = 1011 = -5 in 2's complement. Shortcut: flip bits from MSB up to and including the rightmost 1. 2's complement has only one zero and simplifies subtraction (just add the negative).",
            formula: "2's complement = 1's complement + 1"
        }
    },
    {
        id: "dl3-num-008",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Range of n-bit 2's complement representation:",
        options: ["0 to 2^n - 1", "-2^(n-1) to 2^(n-1) - 1", "-2^n to 2^n", "0 to 2^n"],
        correctAnswer: 1,
        explanation: {
            solution: "2's complement range: -2^(n-1) to 2^(n-1) - 1. For 8-bit: -128 to 127. MSB is sign bit (0=positive, 1=negative). One more negative value than positive (because 0 is counted as positive). This asymmetry sometimes causes overflow issues. Most common signed integer representation.",
            formula: "Range: $[-2^{n-1}, 2^{n-1}-1]$"
        }
    },
    {
        id: "dl3-num-009",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "In BCD, decimal 25 is represented as:",
        options: ["11001", "0010 0101", "10101", "0011 0011"],
        correctAnswer: 1,
        explanation: {
            solution: "BCD (Binary Coded Decimal): each decimal digit is represented by 4 bits separately. 25 = 2 and 5. 2 = 0010, 5 = 0101. Combined: 0010 0101. BCD is less efficient than pure binary (25 = 11001 in binary = 5 bits) but makes decimal I/O easier. Used in calculators, financial systems.",
            formula: "25 → 2=0010, 5=0101 → 0010 0101"
        }
    },
    {
        id: "dl3-num-010",
        type: "MCQ",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Excess-3 code is obtained by adding __ to BCD:",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: {
            solution: "Excess-3 code: add 3 (0011) to BCD value. Decimal 0 → BCD 0000 → Excess-3 0011. Decimal 9 → BCD 1001 → Excess-3 1100. This is a self-complementing code: 9's complement of a digit = bitwise complement of its Excess-3 code. Simplifies decimal subtraction in hardware.",
            formula: "Excess-3 = BCD + 3"
        }
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
        explanation: {
            solution: "JK flip-flop: Q_next = J·Q' + K'·Q. When J=1, can set (J·Q' term). When K=0, can hold (K'Q term). When J=K=1, both terms contribute to toggle. Derived from truth table: J=K=0→hold, J=1,K=0→set, J=0,K=1→reset, J=K=1→toggle. Most versatile flip-flop.",
            formula: "$Q_{n+1} = JQ' + K'Q$"
        }
    },
    {
        id: "dl3-seq-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "D flip-flop characteristic equation:",
        options: ["Q_next = D", "Q_next = D XOR Q", "Q_next = D'", "Q_next = DQ"],
        correctAnswer: 0,
        explanation: {
            solution: "D flip-flop: Q_next = D. The simplest characteristic equation - output becomes whatever D was at clock edge. D stands for 'Data' or 'Delay' (delays input by one clock). No forbidden states, no complex logic needed. The go-to building block for registers and pipelines.",
            formula: "$Q_{n+1} = D$"
        }
    },
    {
        id: "dl3-seq-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "T flip-flop characteristic equation:",
        options: ["Q_next = T", "Q_next = T XOR Q (toggles when T=1)", "Q_next = T'Q", "Q_next = TQ'"],
        correctAnswer: 1,
        explanation: {
            solution: "T flip-flop: Q_next = T ⊕ Q. When T=0: Q_next = 0⊕Q = Q (hold). When T=1: Q_next = 1⊕Q = Q' (toggle). XOR with T acts as conditional complement. T flip-flop is ideal for counters - tie T=1 for continuous toggling, divides frequency by 2.",
            formula: "$Q_{n+1} = T \\oplus Q$"
        }
    },
    {
        id: "dl3-seq-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Number of flip-flops needed for N states:",
        options: ["N", "log₂N", "⌈log₂N⌉", "2N"],
        correctAnswer: 2,
        explanation: {
            solution: "n flip-flops can represent 2^n states. To represent N states, need n where 2^n ≥ N, i.e., n = ⌈log₂N⌉ (ceiling). For N=5: ⌈log₂5⌉ = ⌈2.32⌉ = 3 FFs (can represent 8 states, 3 unused). For N=8: exactly 3 FFs. Some unused states become 'don't cares' for optimization.",
            formula: "FFs = $\\lceil\\log_2(N)\\rceil$"
        }
    },
    {
        id: "dl3-seq-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Setup time of a flip-flop is:",
        options: ["Time data must be stable before clock edge", "Time data must be stable after clock edge", "Propagation delay", "Clock period"],
        correctAnswer: 0,
        explanation: {
            solution: "Setup time (tsu): minimum time the data input must be stable BEFORE the clock edge for reliable capture. Violating setup time can cause metastability - output oscillates or settles unpredictably. Datasheet parameter. Constrains the maximum clock frequency: period ≥ propagation delay + setup time."
        }
    },
    {
        id: "dl3-seq-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential Circuits",
        question: "Hold time of a flip-flop is:",
        options: ["Time data must be stable before clock edge", "Time data must be stable after clock edge", "Clock period", "Propagation delay"],
        correctAnswer: 1,
        explanation: {
            solution: "Hold time (th): minimum time the data input must remain stable AFTER the clock edge. Ensures the flip-flop has fully captured the old value before data changes. Typically shorter than setup time. Violating hold time also causes metastability. Both tsu and th must be satisfied for reliable operation."
        }
    }
]);

console.log("Digital Logic Supplement loaded - ~35 questions");
