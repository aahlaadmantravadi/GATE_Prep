/**
 * Digital Logic EXHAUSTIVE Part 2
 * More K-map, min/maxterms, comparators, subtractors, code converters
 */

Questions.register([
    // ========== MINTERMS & MAXTERMS DETAILED ==========
    {
        id: "dl2-minmax-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A minterm is a product term where function output is:",
        options: ["0", "1", "X", "Either 0 or 1"],
        correctAnswer: 1,
        explanation: { solution: "Minterm: product term giving output 1 for that combination" }
    },
    {
        id: "dl2-minmax-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A maxterm is a sum term where function output is:",
        options: ["0", "1", "X", "Either 0 or 1"],
        correctAnswer: 0,
        explanation: { solution: "Maxterm: sum term giving output 0 for that combination" }
    },
    {
        id: "dl2-minmax-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "In SOP form, we OR the minterms where output is:",
        options: ["0", "1", "Don't care", "All values"],
        correctAnswer: 1,
        explanation: { solution: "SOP = Sum of Products (OR of minterms where output = 1)" }
    },
    {
        id: "dl2-minmax-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "In POS form, we AND the maxterms where output is:",
        options: ["0", "1", "Don't care", "All values"],
        correctAnswer: 0,
        explanation: { solution: "POS = Product of Sums (AND of maxterms where output = 0)" }
    },
    {
        id: "dl2-minmax-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 2 variables x,y, if x=0,y=0, the minterm m₀ = ?",
        options: ["xy", "x'y", "xy'", "x'y'"],
        correctAnswer: 3,
        explanation: { solution: "m₀ corresponds to binary 00, uncomplemented for 1, complemented for 0", formula: "m₀ = x'y'" }
    },
    {
        id: "dl2-minmax-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 2 variables, maxterm M₀ (x=0,y=0) = ?",
        options: ["x+y", "x'+y", "x+y'", "x'+y'"],
        correctAnswer: 0,
        explanation: { solution: "Maxterm: complemented for 0, uncomplemented for 1", formula: "M₀ = x+y" }
    },
    {
        id: "dl2-minmax-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "If f = Σm(3,5,6,7), then f' = ?",
        options: ["Σm(0,1,2,4)", "ΠM(3,5,6,7)", "Σm(3,5,6,7)", "ΠM(0,1,2,4)"],
        correctAnswer: 0,
        explanation: { solution: "Complement: swap 1s and 0s, f' uses remaining minterms" }
    },
    {
        id: "dl2-minmax-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "f = Σm(3,5,6,7) is equivalent to f = ?",
        options: ["ΠM(3,5,6,7)", "ΠM(0,1,2,4)", "Σm(0,1,2,4)", "Cannot convert"],
        correctAnswer: 1,
        explanation: { solution: "SOP and POS use complementary index sets", formula: "Σm(indices) = ΠM(remaining)" }
    },
    // ========== K-MAP ADVANCED ==========
    {
        id: "dl2-kmap-001",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A 5-variable K-map has how many cells?",
        correctAnswer: 32,
        tolerance: 0,
        explanation: { solution: "2^5 = 32 cells", formula: "Cells = 2^n" }
    },
    {
        id: "dl2-kmap-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 5-variable K-map, it is drawn as two 4-variable maps corresponding to:",
        options: ["First variable = 0 and 1", "Last variable = 0 and 1", "Middle variable = 0 and 1", "Cannot be split"],
        correctAnswer: 0,
        explanation: { solution: "5-var K-map: two 4-var maps for A=0 and A=1" }
    },
    {
        id: "dl2-kmap-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "In K-map, grouping 16 cells in a 4-variable map gives:",
        options: ["Constant 0", "Constant 1", "One variable", "Two variables"],
        correctAnswer: 1,
        explanation: { solution: "16 = 2^4 cells → all 4 variables eliminated → constant 1" }
    },
    {
        id: "dl2-kmap-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A Prime Implicant (PI) is:",
        options: ["Any product term", "Largest possible grouping that gives a product term", "Only single cell", "Smallest grouping"],
        correctAnswer: 1,
        explanation: { solution: "PI = largest rectangular group of 1s (can't be expanded further)" }
    },
    {
        id: "dl2-kmap-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "An Essential Prime Implicant (EPI) is a PI that:",
        options: ["Can be removed", "Covers at least one minterm not covered by any other PI", "Is the smallest PI", "Contains all 1s"],
        correctAnswer: 1,
        explanation: { solution: "EPI must be included - covers minterms no other PI covers" }
    },
    {
        id: "dl2-kmap-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A redundant group in K-map is one where:",
        options: ["All 1s are already covered by other groups", "It contains all 0s", "It cannot be formed", "It is a single cell"],
        correctAnswer: 0,
        explanation: { solution: "Redundant: all its 1s already covered, can be eliminated" }
    },
    {
        id: "dl2-kmap-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Implicant of a function is any product term for which output is:",
        options: ["Always 0", "Always 1 or don't care", "Only 1", "Only don't care"],
        correctAnswer: 1,
        explanation: { solution: "Implicant: output = 1 for that combination" }
    },
    // ========== DUALITY THEOREM ==========
    {
        id: "dl2-dual-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Duality theorem: to get dual of expression, swap:",
        options: ["0s and 1s only", "AND and OR only", "AND↔OR, 0↔1, keep literals", "Complement all variables"],
        correctAnswer: 2,
        explanation: { solution: "Dual: AND↔OR, 0↔1, literals unchanged", formula: "Dual(A+B) = A·B" }
    },
    {
        id: "dl2-dual-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Dual of (A + B·C) is:",
        options: ["A · (B + C)", "A' + B'·C'", "(A · B) + C", "A + B + C"],
        correctAnswer: 0,
        explanation: { solution: "Swap + ↔ ·: A · (B + C)" }
    },
    // ========== SUBTRACTORS ==========
    {
        id: "dl2-sub-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Half subtractor outputs are:",
        options: ["Sum and Carry", "Difference and Borrow", "Only Difference", "Only Borrow"],
        correctAnswer: 1,
        explanation: { solution: "Half subtractor: A - B → Difference (D) and Borrow (Bout)" }
    },
    {
        id: "dl2-sub-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Half subtractor: Difference D = ?, Borrow B_out = ?",
        options: ["D = A⊕B, Bout = AB", "D = A⊕B, Bout = A'B", "D = A·B, Bout = A⊕B", "D = A+B, Bout = A'B"],
        correctAnswer: 1,
        explanation: { solution: "D = A⊕B, Bout = A'B (borrow when B=1, A=0)", formula: "D = A⊕B, Bout = A'B" }
    },
    {
        id: "dl2-sub-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Full subtractor has how many inputs?",
        options: ["2", "3", "4", "1"],
        correctAnswer: 1,
        explanation: { solution: "Full subtractor: A, B, Bin (borrow in) → 3 inputs" }
    },
    {
        id: "dl2-sub-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Full subtractor: Difference D = ?",
        options: ["A ⊕ B ⊕ Bin", "AB + Bin", "A'B'Bin", "A + B + Bin"],
        correctAnswer: 0,
        explanation: { solution: "D = A ⊕ B ⊕ Bin (3-input XOR)", formula: "D = A ⊕ B ⊕ Bin" }
    },
    // ========== CARRY LOOKAHEAD ADDER ==========
    {
        id: "dl2-cla-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Carry Generate function G = ?",
        options: ["A ⊕ B", "A · B", "A + B", "A' · B'"],
        correctAnswer: 1,
        explanation: { solution: "G = A·B (carry generated when both inputs are 1)", formula: "G = A·B" }
    },
    {
        id: "dl2-cla-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Carry Propagate function P = ?",
        options: ["A · B", "A ⊕ B", "A + B", "A' · B'"],
        correctAnswer: 1,
        explanation: { solution: "P = A ⊕ B (carry propagates if exactly one input is 1)", formula: "P = A ⊕ B" }
    },
    {
        id: "dl2-cla-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "In CLA, Cout (C_{n+1}) = ?",
        options: ["G + P", "G · P", "G + P·Cin", "G · Cin + P"],
        correctAnswer: 2,
        explanation: { solution: "C_{n+1} = Gn + Pn·Cn", formula: "C_{n+1} = G + P·Cin" }
    },
    {
        id: "dl2-cla-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "CLA computes all carries simultaneously, reducing delay to:",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        correctAnswer: 2,
        explanation: { solution: "CLA has O(log n) delay vs O(n) for ripple carry" }
    },
    // ========== COMPARATOR ==========
    {
        id: "dl2-comp-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 1-bit comparator has how many outputs?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: { solution: "3 outputs: A<B, A=B, A>B" }
    },
    {
        id: "dl2-comp-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For 1-bit comparator, A=B output = ?",
        options: ["A ⊕ B", "(A ⊕ B)'", "A · B", "A + B"],
        correctAnswer: 1,
        explanation: { solution: "A = B when A XNOR B = 1", formula: "A = B → (A⊕B)' = A'B' + AB" }
    },
    {
        id: "dl2-comp-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For 1-bit comparator, A > B output = ?",
        options: ["A'B", "AB'", "A ⊕ B", "AB"],
        correctAnswer: 1,
        explanation: { solution: "A > B when A=1, B=0", formula: "A > B → AB'" }
    },
    {
        id: "dl2-comp-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For 1-bit comparator, A < B output = ?",
        options: ["A'B", "AB'", "A ⊕ B", "AB"],
        correctAnswer: 0,
        explanation: { solution: "A < B when A=0, B=1", formula: "A < B → A'B" }
    },
    // ========== MUX IMPLEMENTATION ==========
    {
        id: "dl2-mux-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 4:1 MUX output Y = ?",
        options: ["I₀S₁'S₀' + I₁S₁'S₀ + I₂S₁S₀' + I₃S₁S₀", "I₀ + I₁ + I₂ + I₃", "I₀S₀ + I₁S₁", "I₀ · I₁ · I₂ · I₃"],
        correctAnswer: 0,
        explanation: { solution: "Each input ANDed with its minterm of select lines", formula: "Y = Σ Iₖ · mₖ(S)" }
    },
    {
        id: "dl2-mux-002",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "To implement 32:1 MUX using 2:1 MUX, number of 2:1 MUX needed is 2^n - 1 = ?",
        correctAnswer: 31,
        tolerance: 0,
        explanation: { solution: "32 = 2^5, need 2^5 - 1 = 31 MUXes" }
    },
    {
        id: "dl2-mux-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Implementing any n-variable function using MUX requires:",
        options: ["2^n:1 MUX with n select lines", "2^(n-1):1 MUX with last variable as data input", "Both approaches work", "Cannot be done"],
        correctAnswer: 2,
        explanation: { solution: "Can use 2^n:1 with inputs 0/1, or 2^(n-1):1 with one variable as data" }
    },
    // ========== DECODER/ENCODER DETAILS ==========
    {
        id: "dl2-dec-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "2-to-4 decoder: Y₀ = ?, Y₁ = ?, Y₂ = ?, Y₃ = ?",
        options: ["A'B', A'B, AB', AB", "AB, AB', A'B, A'B'", "A+B, A'+B, A+B', A'+B'", "Cannot determine"],
        correctAnswer: 0,
        explanation: { solution: "Y₀ = A'B' (00), Y₁ = A'B (01), Y₂ = AB' (10), Y₃ = AB (11)", formula: "Each output is a minterm" }
    },
    {
        id: "dl2-dec-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A decoder can be used to implement:",
        options: ["Only AND functions", "Only OR functions", "Any Boolean function", "Only simple functions"],
        correctAnswer: 2,
        explanation: { solution: "Decoder outputs are minterms; OR selected minterms for any function" }
    },
    {
        id: "dl2-dec-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Priority encoder gives priority to:",
        options: ["All inputs equally", "Lower numbered inputs", "Higher numbered inputs", "Random input"],
        correctAnswer: 2,
        explanation: { solution: "Priority encoder: higher subscript = higher priority" }
    },
    {
        id: "dl2-dec-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Octal-to-Binary encoder has:",
        options: ["3 inputs, 8 outputs", "8 inputs, 3 outputs", "8 inputs, 8 outputs", "3 inputs, 3 outputs"],
        correctAnswer: 1,
        explanation: { solution: "8 octal inputs → 3 binary outputs" }
    },
    {
        id: "dl2-dec-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Decimal-to-BCD encoder has:",
        options: ["10 inputs, 4 outputs", "4 inputs, 10 outputs", "10 inputs, 10 outputs", "4 inputs, 4 outputs"],
        correctAnswer: 0,
        explanation: { solution: "10 decimal inputs → 4 BCD outputs" }
    },
    // ========== CODE CONVERTERS ==========
    {
        id: "dl2-code-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "BCD to Excess-3 conversion: add what to BCD?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: { solution: "Excess-3 = BCD + 3", formula: "Excess-3 = BCD + 0011" }
    },
    {
        id: "dl2-code-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Gray code has the property that adjacent codes differ in:",
        options: ["All bits", "2 bits", "1 bit", "0 bits"],
        correctAnswer: 2,
        explanation: { solution: "Gray code: adjacent numbers differ in exactly 1 bit" }
    },
    {
        id: "dl2-code-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Binary to Gray conversion: Gᵢ = ?",
        options: ["Bᵢ ⊕ Bᵢ₊₁", "Bᵢ · Bᵢ₊₁", "Bᵢ + Bᵢ₊₁", "Bᵢ'"],
        correctAnswer: 0,
        explanation: { solution: "G = B ⊕ (B >> 1)", formula: "Gᵢ = Bᵢ ⊕ Bᵢ₊₁" }
    },
    // ========== PROPAGATION DELAY ==========
    {
        id: "dl2-delay-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "If XOR has 2ns delay and AND has 1.5ns, full adder using 2 half adders + OR has delay:",
        options: ["2 + 1.5 + 1 = 4.5 ns", "2 + 2 + 1 = 5 ns", "2 × 3 = 6 ns", "max(2, 1.5, 1) = 2 ns"],
        correctAnswer: 1,
        explanation: { solution: "Critical path: XOR(2) → XOR(2) → OR(1) = 5 ns (sum path), Carry: XOR+AND+OR = 2+1.5+1 = 4.5ns" }
    },
    {
        id: "dl2-delay-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Glitches (hazards) in circuits are caused by:",
        options: ["Equal delays in all paths", "Different delays in converging paths", "No delays", "Very long delays"],
        correctAnswer: 1,
        explanation: { solution: "Hazard: temporary incorrect output due to unequal path delays" }
    },
    // ========== SEVEN SEGMENT DISPLAY ==========
    {
        id: "dl2-7seg-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A seven-segment display decoder has:",
        options: ["4 inputs, 7 outputs", "7 inputs, 4 outputs", "7 inputs, 7 outputs", "4 inputs, 4 outputs"],
        correctAnswer: 0,
        explanation: { solution: "4-bit BCD input → 7 segment outputs (a-g)" }
    },
    // ========== PARITY GENERATOR/CHECKER ==========
    {
        id: "dl2-par-001",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Even parity bit is set such that total number of 1s (including parity) is:",
        options: ["Odd", "Even", "Always 1", "Always 0"],
        correctAnswer: 1,
        explanation: { solution: "Even parity: total 1s = even" }
    },
    {
        id: "dl2-par-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Parity generator can be implemented using:",
        options: ["AND gates only", "OR gates only", "XOR gates chain", "NAND gates only"],
        correctAnswer: 2,
        explanation: { solution: "XOR of all bits gives even parity bit" }
    },
    {
        id: "dl2-par-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For n data bits, even parity bit P = ?",
        options: ["D₀ AND D₁ AND ... AND Dₙ₋₁", "D₀ XOR D₁ XOR ... XOR Dₙ₋₁", "D₀ OR D₁ OR ... OR Dₙ₋₁", "NOT(D₀)"],
        correctAnswer: 1,
        explanation: { solution: "P = D₀ ⊕ D₁ ⊕ ... ⊕ Dₙ₋₁", formula: "P = XOR of all data bits" }
    }
]);

console.log("Exhaustive Digital Logic Part 2 loaded - ~55 questions");
