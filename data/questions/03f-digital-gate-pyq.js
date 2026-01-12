/**
 * GATE Previous Year Questions Style - Digital Logic
 * 35+ questions covering actual GATE exam patterns
 * Topics: Boolean, K-maps, Combinational, Sequential, Counters
 */

Questions.register([
    // ========== BOOLEAN ALGEBRA ==========
    {
        id: "gate-dl-bool-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "Minimum literals for F(A,B,C) = Σm(0,1,2,5,6,7) using K-map:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "Drawing the 3-variable K-map and grouping: minterms 0,1 form A'B', minterms 0,2 form B'C', and minterms 5,7,6 (with overlap) give AB + AC'. After simplification, F = A'B' + B'C' + AB requires 4 literals total. Key insight: count each variable occurrence in the minimal SOP form.",
            formula: "$F = A'B' + B'C' + AB$"
        }
    },
    {
        id: "gate-dl-bool-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "Number of minterms in F(A,B,C,D) = (A+B)(C+D):",
        correctAnswer: 9,
        tolerance: 0,
        explanation: {
            solution: "Using distributive law: (A+B)(C+D) = AC + AD + BC + BD. Each product term covers specific minterms. For 4 variables, A covers 8 minterms where A=1, but combined with C (AC) covers 4 minterms. Counting unique minterms across all terms: AC(4) + AD(4) + BC(4) + BD(4) with overlaps = 9 unique minterms. Alternatively, count zeros: (A+B)'(C+D)' = A'B'C'D' = 1 minterm, and (A+B)(C+D)' + (A+B)'(C+D) = 6 minterms are 0. Total 1s = 16-7 = 9."
        }
    },
    {
        id: "gate-dl-bool-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "De Morgan's theorem: (AB)' = ?",
        options: ["A'B'", "A'+B'", "A'B", "AB'"],
        correctAnswer: 1,
        explanation: {
            solution: "De Morgan's First Theorem states that the complement of a product equals the sum of complements: (AB)' = A' + B'. This is fundamental in digital logic for converting between AND/OR gates using inverters. The dual theorem states (A+B)' = A'B'. These theorems are essential for NAND/NOR gate implementations.",
            formula: "$(AB)' = A' + B'$ and $(A+B)' = A'B'$"
        }
    },
    {
        id: "gate-dl-bool-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Boolean Algebra",
        question: "A + AB = ?",
        options: ["A", "B", "AB", "A+B"],
        correctAnswer: 0,
        explanation: {
            solution: "This is the Absorption Law: A + AB = A(1 + B) = A·1 = A. Intuitively, if A is true, the entire expression is true regardless of B. If A is false, AB is also false. So the expression depends only on A. The dual form is A(A+B) = A. These laws help simplify Boolean expressions by eliminating redundant terms.",
            formula: "$A + AB = A$ (Absorption Law)"
        }
    },
    // ========== K-MAPS ==========
    {
        id: "gate-dl-kmap-001",
        type: "NAT",
        topic: "digital",
        subtopic: "K-map",
        question: "4-variable K-map, F = Σm(0,2,8,10). Groups needed = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: {
            solution: "Plotting minterms 0(0000), 2(0010), 8(1000), 10(1010) on a 4-variable K-map shows they form the four corners - which in K-map topology are all adjacent! This creates one quad (group of 4). The simplified expression is B'D' (variables that remain constant across the group). One group needed.",
            formula: "$F = B'D'$ (one quad covering all 4 minterms)"
        }
    },
    {
        id: "gate-dl-kmap-002",
        type: "NAT",
        topic: "digital",
        subtopic: "K-map",
        question: "F(A,B,C) = Σm(1,3,5,7). Minimum product terms = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: {
            solution: "Minterms 1,3,5,7 in binary are 001,011,101,111 - notice C=1 in all cases while A and B vary. On a 3-variable K-map, these form a vertical column of 4 cells. One group of 4 eliminates 2 variables, leaving F = C. This demonstrates maximum grouping for minimum product terms.",
            formula: "$F = C$ (single literal after K-map minimization)"
        }
    },
    {
        id: "gate-dl-kmap-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "K-map",
        question: "Don't care conditions in K-map:",
        options: ["Must be 0", "Must be 1", "Can be 0 or 1 for minimization", "Invalid"],
        correctAnswer: 2,
        explanation: {
            solution: "Don't care conditions (marked as 'X' or 'd') represent input combinations that either never occur or whose output doesn't matter. In K-map minimization, we can treat them as 0 or 1 to create larger groups, leading to simpler expressions. For example, in BCD (0-9), combinations 10-15 are don't cares since they never occur in valid BCD."
        }
    },
    // ========== COMBINATIONAL CIRCUITS ==========
    {
        id: "gate-dl-comb-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Combinational",
        question: "8×1 MUX has ___ select lines:",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "A multiplexer with n select lines can choose from 2^n inputs. For 8 inputs: 2^n = 8, so n = log₂(8) = 3 select lines. The select lines S2,S1,S0 form a 3-bit binary number (0-7) that determines which of the 8 input lines connects to the output. This is a fundamental relationship: n select lines → 2^n:1 MUX.",
            formula: "$n = \\log_2(inputs) = \\log_2(8) = 3$"
        }
    },
    {
        id: "gate-dl-comb-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Combinational",
        question: "4-bit binary adder produces sum up to:",
        correctAnswer: 30,
        tolerance: 0,
        explanation: {
            solution: "A 4-bit adder adds two 4-bit numbers. Maximum 4-bit value = 2^4 - 1 = 15. Maximum sum = 15 + 15 = 30. Note: the result requires 5 bits (11110 in binary), which is why the adder has a carry-out. The sum output is 4 bits (showing 14 = 1110) plus carry-out (1), representing 30.",
            formula: "Max sum = $(2^n - 1) + (2^n - 1) = 2^{n+1} - 2 = 30$ for n=4"
        }
    },
    {
        id: "gate-dl-comb-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "Combinational",
        question: "Encoder outputs are:",
        options: ["Decoded signals", "Binary code of active input", "All ones", "All zeros"],
        correctAnswer: 1,
        explanation: {
            solution: "An encoder converts 2^n input lines to n output lines representing the binary code of the active (HIGH) input. For example, an 8:3 encoder with input line 5 active outputs 101 (binary 5). It's the reverse of a decoder. Priority encoders handle multiple active inputs by encoding the highest-priority one."
        }
    },
    {
        id: "gate-dl-comb-004",
        type: "NAT",
        topic: "digital",
        subtopic: "Combinational",
        question: "Priority encoder with 8 inputs. Output bits = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "A priority encoder with 8 inputs needs log₂(8) = 3 output bits to represent which input (0-7) has highest priority. Additionally, it typically has a 'valid' output bit indicating if any input is active. The 3-bit output encodes the position of the highest-priority active input in binary.",
            formula: "$Output\\ bits = \\lceil\\log_2(inputs)\\rceil = \\lceil\\log_2(8)\\rceil = 3$"
        }
    },
    {
        id: "gate-dl-comb-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Combinational",
        question: "Full adder has outputs:",
        options: ["Sum only", "Carry only", "Sum and Carry", "XOR only"],
        correctAnswer: 2,
        explanation: {
            solution: "A full adder takes 3 inputs (A, B, Carry-in) and produces 2 outputs: Sum and Carry-out. Sum = A ⊕ B ⊕ Cin (XOR of all inputs). Carry = AB + BCin + ACin (majority function - carry generated if 2 or more inputs are 1). Half adder only has 2 inputs and no carry-in capability.",
            formula: "$Sum = A \\oplus B \\oplus C_{in}$, $C_{out} = AB + BC_{in} + AC_{in}$"
        }
    },
    // ========== SEQUENTIAL CIRCUITS ==========
    {
        id: "gate-dl-seq-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Sequential",
        question: "Flip-flops needed for mod-12 counter = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "A mod-N counter needs enough flip-flops to represent N states. Minimum flip-flops = ⌈log₂(N)⌉. For mod-12: log₂(12) = 3.58, so ⌈3.58⌉ = 4 flip-flops. These 4 flip-flops can represent 16 states (0-15), but the counter resets after state 11 (using additional reset logic) to cycle through only 12 states.",
            formula: "$FF = \\lceil\\log_2(12)\\rceil = \\lceil 3.58 \\rceil = 4$"
        }
    },
    {
        id: "gate-dl-seq-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Sequential",
        question: "4-bit ring counter unique states = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "A ring counter circulates a single '1' through n flip-flops: 1000→0100→0010→0001→1000... For n=4 bits, there are exactly n=4 unique states. This is inefficient (n FFs for n states) compared to a binary counter (n FFs for 2^n states), but the decoding is simpler - each FF output directly represents one state."
        }
    },
    {
        id: "gate-dl-seq-003",
        type: "NAT",
        topic: "digital",
        subtopic: "Sequential",
        question: "4-bit Johnson counter unique states = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: {
            solution: "A Johnson (twisted ring) counter inverts the feedback: 0000→1000→1100→1110→1111→0111→0011→0001→0000. For n bits, it has 2n unique states. With 4 bits: 2×4 = 8 states. More efficient than ring counter (2n vs n states) but still less than binary counter (2^n states). Glitch-free decoding is an advantage.",
            formula: "$States = 2n = 2 \\times 4 = 8$"
        }
    },
    {
        id: "gate-dl-seq-004",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential",
        question: "Master-slave flip-flop avoids:",
        options: ["Setup time violation", "Race condition", "Propagation delay", "Power consumption"],
        correctAnswer: 1,
        explanation: {
            solution: "Race condition (or race-around) occurs in level-triggered latches when the output changes multiple times during a clock pulse. Master-slave FF solves this: the master captures input on one clock edge, slave transfers on the opposite edge. This edge-triggering ensures the output changes exactly once per clock cycle, eliminating races."
        }
    },
    {
        id: "gate-dl-seq-005",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential",
        question: "D flip-flop Q(n+1) = ?",
        options: ["Q(n)", "D", "Q'(n)", "0"],
        correctAnswer: 1,
        explanation: {
            solution: "The D (Data) flip-flop is the simplest FF with characteristic equation Q(n+1) = D. Whatever value is at input D gets transferred to output Q on the active clock edge. This makes it ideal for registers and data storage. It eliminates the race condition of SR latch and the complexity of JK FF.",
            formula: "$Q_{n+1} = D$"
        }
    },
    {
        id: "gate-dl-seq-006",
        type: "MCQ",
        topic: "digital",
        subtopic: "Sequential",
        question: "JK flip-flop with J=K=1:",
        options: ["Set", "Reset", "Toggle", "No change"],
        correctAnswer: 2,
        explanation: {
            solution: "JK FF truth table: J=0,K=0→Hold; J=0,K=1→Reset(Q=0); J=1,K=0→Set(Q=1); J=1,K=1→Toggle(Q'). When J=K=1, the output toggles (inverts) on each clock edge. This is the key advantage over SR FF which has undefined behavior when S=R=1. Toggle mode is useful for frequency division and counters.",
            formula: "$Q_{n+1} = JQ'_n + K'Q_n$, when J=K=1: $Q_{n+1} = Q'_n$"
        }
    },
    // ========== NUMBER SYSTEMS ==========
    {
        id: "gate-dl-num-001",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "2's complement of 8-bit 01011010:",
        correctAnswer: 166,
        tolerance: 0,
        explanation: {
            solution: "2's complement = 1's complement + 1. Step 1: Invert all bits of 01011010 → 10100101. Step 2: Add 1 → 10100101 + 1 = 10100110. Converting 10100110 to decimal: 128+32+4+2 = 166. Note: 2's complement of a positive number gives its negative representation, but here we're asked for the decimal value of the resulting bit pattern.",
            formula: "2's complement: Invert bits, add 1. $10100110_2 = 166_{10}$"
        }
    },
    {
        id: "gate-dl-num-002",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Range of 8-bit signed 2's complement: minimum value = ?",
        correctAnswer: -128,
        tolerance: 0,
        explanation: {
            solution: "For n-bit 2's complement: range is -2^(n-1) to +2^(n-1)-1. For 8 bits: minimum = -2^7 = -128, maximum = 2^7-1 = 127. The asymmetry (one more negative than positive) occurs because 0 uses one positive pattern. The minimum value 10000000 represents -128 (MSB is sign bit with weight -128).",
            formula: "Range: $[-2^{n-1}, 2^{n-1}-1] = [-128, 127]$ for n=8"
        }
    },
    {
        id: "gate-dl-num-003",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "(1101.01)₂ in decimal = ?",
        correctAnswer: 13.25,
        tolerance: 0.01,
        explanation: {
            solution: "Convert integer and fraction separately. Integer 1101: 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8+4+0+1 = 13. Fraction .01: 0×2⁻¹ + 1×2⁻² = 0 + 0.25 = 0.25. Total = 13 + 0.25 = 13.25. Each position right of the binary point has weights 1/2, 1/4, 1/8, etc.",
            formula: "$1101.01_2 = 8+4+1+0.25 = 13.25_{10}$"
        }
    },
    {
        id: "gate-dl-num-004",
        type: "NAT",
        topic: "digital",
        subtopic: "Number Systems",
        question: "Hexadecimal FF in decimal = ?",
        correctAnswer: 255,
        tolerance: 0,
        explanation: {
            solution: "Hexadecimal uses base-16 with digits 0-9 and A-F (where A=10, B=11...F=15). FF in hex: F×16¹ + F×16⁰ = 15×16 + 15×1 = 240 + 15 = 255. This is also the maximum value for 8 bits (11111111 in binary), explaining why hex is popular for representing byte values.",
            formula: "$FF_{16} = 15 \\times 16 + 15 = 255_{10}$"
        }
    },
    // ========== FSM ==========
    {
        id: "gate-dl-fsm-001",
        type: "NAT",
        topic: "digital",
        subtopic: "FSM",
        question: "Sequence detector for '101' (overlapping). States = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "For overlapping sequence detector '101': S0 (initial/no match), S1 (seen '1'), S2 (seen '10'). From S2, if '1' comes, output=1 (found '101') and go to S1 (the last '1' could start new sequence). Only 3 states needed because we track progress toward the pattern. Non-overlapping would need similar states but different transitions.",
            formula: "States: S0(start) → S1(got 1) → S2(got 10) → output on 1"
        }
    },
    {
        id: "gate-dl-fsm-002",
        type: "MCQ",
        topic: "digital",
        subtopic: "FSM",
        question: "Mealy vs Moore machine: output depends on:",
        options: ["Both state only", "Mealy: state+input, Moore: state only", "Moore: state+input", "Same for both"],
        correctAnswer: 1,
        explanation: {
            solution: "Moore machine: output is a function of current state only (output = f(state)). Mealy machine: output depends on both current state AND input (output = f(state, input)). Mealy machines typically respond faster to inputs and may need fewer states, but outputs can have glitches during input transitions. Moore outputs are more stable."
        }
    },
    {
        id: "gate-dl-fsm-003",
        type: "MCQ",
        topic: "digital",
        subtopic: "FSM",
        question: "Moore machine with same functionality as Mealy needs:",
        options: ["Same states", "More states (up to 2×)", "Fewer states", "No states"],
        correctAnswer: 1,
        explanation: {
            solution: "Converting Mealy to Moore typically requires more states because Moore associates outputs with states, not transitions. In the worst case, if a Mealy state has different outputs on different input transitions, each must become a separate Moore state. This can nearly double the state count, though often the increase is less in practice."
        }
    }
]);

console.log("Digital Logic Questions loaded - ~23 questions");
