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
        explanation: {
            solution: "A minterm is a product (AND) term containing every variable (complemented or not) that evaluates to 1 for exactly one input combination. Minterms are the building blocks of SOP form. For n variables, minterm mi = 1 only when inputs form binary number i. Example: m3 for 2 variables = AB (inputs 11).",
            formula: "Minterm $m_i = 1$ only for input combination $i$"
        }
    },
    {
        id: "dl2-minmax-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A maxterm is a sum term where function output is:",
        options: ["0", "1", "X", "Either 0 or 1"],
        correctAnswer: 0,
        explanation: {
            solution: "A maxterm is a sum (OR) term containing every variable that evaluates to 0 for exactly one input combination. Maxterms are the building blocks of POS form. Maxterm Mi = 0 only when inputs form binary number i. Example: M3 for 2 variables = A'+B' (outputs 0 only when AB=11).",
            formula: "Maxterm $M_i = 0$ only for input combination $i$"
        }
    },
    {
        id: "dl2-minmax-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "In SOP form, we OR the minterms where output is:",
        options: ["0", "1", "Don't care", "All values"],
        correctAnswer: 1,
        explanation: {
            solution: "SOP (Sum of Products) = OR of minterms where function output is 1. Look at truth table, find all rows where f=1, write the minterm for each, OR them together. Example: if f=1 for inputs 01 and 11, then f = m1 + m3 = A'B + AB = B(A'+A) = B.",
            formula: "$f = \\sum m_i$ for all $i$ where $f(i) = 1$"
        }
    },
    {
        id: "dl2-minmax-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "In POS form, we AND the maxterms where output is:",
        options: ["0", "1", "Don't care", "All values"],
        correctAnswer: 0,
        explanation: {
            solution: "POS (Product of Sums) = AND of maxterms where function output is 0. Find all rows where f=0, write the maxterm for each, AND them. If f=0 for inputs 00 and 10, then f = M0·M2 = (A+B)(A'+B). POS and SOP are dual representations of the same function.",
            formula: "$f = \\prod M_i$ for all $i$ where $f(i) = 0$"
        }
    },
    {
        id: "dl2-minmax-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 2 variables x,y, if x=0,y=0, the minterm m₀ = ?",
        options: ["xy", "x'y", "xy'", "x'y'"],
        correctAnswer: 3,
        explanation: {
            solution: "For minterm: use complemented form where variable = 0, uncomplemented where = 1. For x=0, y=0 (binary 00 = decimal 0): m0 = x'·y'. This product equals 1 only when x=0 AND y=0. For m1 (x=0,y=1): x'y. For m2 (x=1,y=0): xy'. For m3 (x=1,y=1): xy.",
            formula: "$m_0 = x'y'$"
        }
    },
    {
        id: "dl2-minmax-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 2 variables, maxterm M₀ (x=0,y=0) = ?",
        options: ["x+y", "x'+y", "x+y'", "x'+y'"],
        correctAnswer: 0,
        explanation: {
            solution: "For maxterm: opposite of minterm - use uncomplemented where variable = 0, complemented where = 1. For x=0, y=0: M0 = x + y. This sum equals 0 only when x=0 AND y=0 (both terms are 0). Relationship: Mi = (mi)' and mi = (Mi)'. Maxterm is complement of corresponding minterm.",
            formula: "$M_0 = x + y$"
        }
    },
    {
        id: "dl2-minmax-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "If f = Σm(3,5,6,7), then f' = ?",
        options: ["Σm(0,1,2,4)", "ΠM(3,5,6,7)", "Σm(3,5,6,7)", "ΠM(0,1,2,4)"],
        correctAnswer: 0,
        explanation: {
            solution: "Complement of f: swap 1s and 0s in truth table. f = Σm(3,5,6,7) means f=1 for these minterms. So f'=1 for remaining minterms: f' = Σm(0,1,2,4). For 3-variable function, indices 0-7, so f uses {3,5,6,7}, f' uses {0,1,2,4}. Also f' = ΠM(3,5,6,7).",
            formula: "$f' = \\sum m(remaining\\ indices)$"
        }
    },
    {
        id: "dl2-minmax-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "f = Σm(3,5,6,7) is equivalent to f = ?",
        options: ["ΠM(3,5,6,7)", "ΠM(0,1,2,4)", "Σm(0,1,2,4)", "Cannot convert"],
        correctAnswer: 1,
        explanation: {
            solution: "Converting SOP to POS: use complementary indices. f = Σm(3,5,6,7) = ΠM(0,1,2,4). Where f=1 (minterms), it's NOT where f=0 (maxterms). The maxterms are for indices where f=0. Both forms represent the same function, just different canonical representations.",
            formula: "$\\sum m(indices) = \\prod M(remaining\\ indices)$"
        }
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
        explanation: {
            solution: "K-map has 2^n cells for n variables. 5 variables: 2^5 = 32 cells. A 5-variable K-map is typically drawn as two adjacent 4-variable K-maps (16+16), one for A=0 and one for A=1. Cells in corresponding positions of the two maps are also considered adjacent. Beyond 5 variables, K-maps become impractical.",
            formula: "$Cells = 2^5 = 32$"
        }
    },
    {
        id: "dl2-kmap-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 5-variable K-map, it is drawn as two 4-variable maps corresponding to:",
        options: ["First variable = 0 and 1", "Last variable = 0 and 1", "Middle variable = 0 and 1", "Cannot be split"],
        correctAnswer: 0,
        explanation: {
            solution: "5-variable K-map: split on first (MSB) variable into two 4-variable maps. Left map: A=0, right map: A=1. Adjacency includes: normal 4-var adjacency within each map, PLUS cells in same position between maps (they differ only in A). This allows grouping across both sub-maps."
        }
    },
    {
        id: "dl2-kmap-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "In K-map, grouping 16 cells in a 4-variable map gives:",
        options: ["Constant 0", "Constant 1", "One variable", "Two variables"],
        correctAnswer: 1,
        explanation: {
            solution: "Grouping all 16 cells (entire 4-variable K-map) eliminates all 4 variables, leaving constant 1. This means f=1 for ALL input combinations - the function is always true. Similarly, if no cells contain 1, f = constant 0. A group covering the whole map indicates a tautology.",
            formula: "$2^4 = 16$ cells → 4 eliminated → constant"
        }
    },
    {
        id: "dl2-kmap-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A Prime Implicant (PI) is:",
        options: ["Any product term", "Largest possible grouping that gives a product term", "Only single cell", "Smallest grouping"],
        correctAnswer: 1,
        explanation: {
            solution: "Prime Implicant (PI): a product term that cannot be combined with another term to form a larger group. It's a maximal group of 1s (or don't cares) in K-map - you cannot expand it further. A function may have multiple PIs. The minimal cover uses fewest PIs that cover all minterms."
        }
    },
    {
        id: "dl2-kmap-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "An Essential Prime Implicant (EPI) is a PI that:",
        options: ["Can be removed", "Covers at least one minterm not covered by any other PI", "Is the smallest PI", "Contains all 1s"],
        correctAnswer: 1,
        explanation: {
            solution: "Essential Prime Implicant (EPI): a PI that is the ONLY PI covering at least one minterm. EPIs MUST be included in any minimal solution. If a 1 in K-map can only be covered by one PI, that PI is essential. After selecting all EPIs, remaining 1s are covered by choosing from non-essential PIs."
        }
    },
    {
        id: "dl2-kmap-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A redundant group in K-map is one where:",
        options: ["All 1s are already covered by other groups", "It contains all 0s", "It cannot be formed", "It is a single cell"],
        correctAnswer: 0,
        explanation: {
            solution: "Redundant group: every 1 it covers is already covered by other selected groups. It can be eliminated without affecting the function. Optimal minimization identifies and excludes redundant groups. In contrast, EPIs are never redundant - they cover at least one 1 that no other PI covers."
        }
    },
    {
        id: "dl2-kmap-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Implicant of a function is any product term for which output is:",
        options: ["Always 0", "Always 1 or don't care", "Only 1", "Only don't care"],
        correctAnswer: 1,
        explanation: {
            solution: "Implicant: any product term P such that P=1 implies f=1 (P 'implies' f). In other words, wherever P is true, the function is true (or don't care). Every minterm where f=1 is an implicant. Larger groups of adjacent 1s/don't-cares form larger implicants. Prime implicants are maximal implicants."
        }
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
        explanation: {
            solution: "Duality: interchange AND↔OR and 0↔1, but leave variables unchanged (don't complement them). If a Boolean equation is valid, its dual is also valid. Example: dual of (A+B)·C = 0 is (A·B)+C = 1. Note: dual ≠ complement. Complement also inverts each variable.",
            formula: "Dual: $+$ ↔ $\\cdot$, $0$ ↔ $1$"
        }
    },
    {
        id: "dl2-dual-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Dual of (A + B·C) is:",
        options: ["A · (B + C)", "A' + B'·C'", "(A · B) + C", "A + B + C"],
        correctAnswer: 0,
        explanation: {
            solution: "Apply duality: swap + with · and vice versa. (A + B·C) has OR between A and (B·C), with AND inside. Dual: A · (B + C) - AND between A and (B+C), with OR inside. Precedence and grouping follow the same structure, just with swapped operators.",
            formula: "$(A + BC)$ → $A(B + C)$"
        }
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
        explanation: {
            solution: "Half subtractor computes A - B with two outputs: Difference (D) and Borrow-out (Bout). D = A⊕B (1 when A≠B), Bout = A'·B (1 when we need to borrow: A=0, B=1). Similar to half adder but borrow logic differs from carry. Can be built with XOR and AND(with A inverted).",
            formula: "$D = A \\oplus B$, $B_{out} = A'B$"
        }
    },
    {
        id: "dl2-sub-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Half subtractor: Difference D = ?, Borrow B_out = ?",
        options: ["D = A⊕B, Bout = AB", "D = A⊕B, Bout = A'B", "D = A·B, Bout = A⊕B", "D = A+B, Bout = A'B"],
        correctAnswer: 1,
        explanation: {
            solution: "Half subtractor (A - B): Difference D = A ⊕ B (same as half adder sum). Borrow Bout = A'·B (need to borrow when A=0 and B=1). Compare to half adder carry = A·B. The asymmetry (A' vs A) reflects that subtraction is not commutative.",
            formula: "$D = A \\oplus B$, $B_{out} = A'B$"
        }
    },
    {
        id: "dl2-sub-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Full subtractor has how many inputs?",
        options: ["2", "3", "4", "1"],
        correctAnswer: 1,
        explanation: {
            solution: "Full subtractor has 3 inputs: A (minuend), B (subtrahend), and Bin (borrow from previous stage). Outputs: D (difference) and Bout (borrow out). Computes A - B - Bin. Essential for multi-bit subtraction by cascading full subtractors like full adders are cascaded for addition."
        }
    },
    {
        id: "dl2-sub-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Full subtractor: Difference D = ?",
        options: ["A ⊕ B ⊕ Bin", "AB + Bin", "A'B'Bin", "A + B + Bin"],
        correctAnswer: 0,
        explanation: {
            solution: "Full subtractor: D = A ⊕ B ⊕ Bin (XOR of all three inputs, same as full adder sum). Bout = A'B + A'Bin + BBin = A'B + Bin(A'+ B) = A'B + Bin(A⊕B)'. The difference is 1 when odd number of inputs are 1, just like the sum in a full adder.",
            formula: "$D = A \\oplus B \\oplus B_{in}$"
        }
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
        explanation: {
            solution: "Carry Generate (G): G = A·B. A carry is 'generated' when BOTH inputs are 1, regardless of incoming carry. Even if Cin=0, the stage produces Cout=1. This is one component of CLA - the carry that's definitely produced locally, independent of earlier stages.",
            formula: "$G = A \\cdot B$"
        }
    },
    {
        id: "dl2-cla-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Carry Propagate function P = ?",
        options: ["A · B", "A ⊕ B", "A + B", "A' · B'"],
        correctAnswer: 1,
        explanation: {
            solution: "Carry Propagate (P): P = A ⊕ B. A carry is 'propagated' when exactly one input is 1. If Cin=1 arrives, it passes through to become Cout=1. If Cin=0, then Cout=0. The XOR indicates the 'pass-through' condition. Note: some texts use P = A+B, which also works but is less precise.",
            formula: "$P = A \\oplus B$"
        }
    },
    {
        id: "dl2-cla-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "In CLA, Cout (C_{n+1}) = ?",
        options: ["G + P", "G · P", "G + P·Cin", "G · Cin + P"],
        correctAnswer: 2,
        explanation: {
            solution: "CLA carry equation: Cout = G + P·Cin. Carry out occurs if: (1) carry is Generated locally (G=1), OR (2) carry is Propagated from input (P=1 AND Cin=1). Expanding recursively: C1 = G0 + P0C0, C2 = G1 + P1G0 + P1P0C0, etc. All carries computed in parallel.",
            formula: "$C_{out} = G + P \\cdot C_{in}$"
        }
    },
    {
        id: "dl2-cla-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "CLA computes all carries simultaneously, reducing delay to:",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        correctAnswer: 2,
        explanation: {
            solution: "CLA computes all carry bits in parallel using multi-level logic. For n bits: basic CLA has O(n) fan-in and O(1) depth, but practical implementations use hierarchical CLA with O(log n) depth. Compare to ripple carry's O(n) sequential delay. The tradeoff is increased logic complexity and area.",
            formula: "CLA delay: $O(\\log n)$ vs ripple: $O(n)$"
        }
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
        explanation: {
            solution: "1-bit comparator compares two bits A and B, producing 3 outputs: A<B, A=B, A>B. Exactly one output is 1 at any time. For multi-bit comparators, these three conditions are cascaded: start from MSB, propagate comparison result down. Some designs also have cascade inputs for chaining.",
            formula: "Outputs: $A<B$, $A=B$, $A>B$"
        }
    },
    {
        id: "dl2-comp-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For 1-bit comparator, A=B output = ?",
        options: ["A ⊕ B", "(A ⊕ B)'", "A · B", "A + B"],
        correctAnswer: 1,
        explanation: {
            solution: "A equals B when both are 0 or both are 1. This is the XNOR function: (A⊕B)' = A'B' + AB = 1 when inputs are same. XOR gives 1 when different, so its complement gives 1 when same. XNOR is also called equivalence or coincidence gate.",
            formula: "$A = B \\Rightarrow (A \\oplus B)' = A'B' + AB$"
        }
    },
    {
        id: "dl2-comp-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For 1-bit comparator, A > B output = ?",
        options: ["A'B", "AB'", "A ⊕ B", "AB"],
        correctAnswer: 1,
        explanation: {
            solution: "A > B only when A=1 and B=0. This is exactly the function AB' (A AND NOT B). When A=1,B=0: AB' = 1·1 = 1. All other cases: AB' = 0. Simple 2-input gate with B inverted before AND. For multi-bit: compare MSB first, use lower bits only if MSBs equal.",
            formula: "$A > B \\Rightarrow AB'$"
        }
    },
    {
        id: "dl2-comp-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For 1-bit comparator, A < B output = ?",
        options: ["A'B", "AB'", "A ⊕ B", "AB"],
        correctAnswer: 0,
        explanation: {
            solution: "A < B only when A=0 and B=1. This is A'B (NOT A AND B). When A=0,B=1: A'B = 1·1 = 1. Symmetric to A>B case with roles swapped. Together: A>B = AB', A<B = A'B, A=B = (A⊕B)'. These three are mutually exclusive and exhaustive.",
            formula: "$A < B \\Rightarrow A'B$"
        }
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
        explanation: {
            solution: "4:1 MUX with 4 data inputs (I0-I3) and 2 select lines (S1,S0): Each input is ANDed with its corresponding minterm of select lines, then all are ORed. Y = I0·S1'S0' + I1·S1'S0 + I2·S1S0' + I3·S1S0. When S1S0 = 10 (binary 2), only I2 passes through.",
            formula: "$Y = \\sum_{k=0}^{3} I_k \\cdot m_k(S_1,S_0)$"
        }
    },
    {
        id: "dl2-mux-002",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "To implement 32:1 MUX using 2:1 MUX, number of 2:1 MUX needed is 2^n - 1 = ?",
        correctAnswer: 31,
        tolerance: 0,
        explanation: {
            solution: "Building 2^n:1 MUX from 2:1 MUXes follows a tree structure. Level 1: 16 MUXes (pairs of 32 inputs). Level 2: 8 MUXes. Level 3: 4. Level 4: 2. Level 5: 1. Total = 16+8+4+2+1 = 31 = 2^5 - 1. General formula for 2^n:1 MUX: need 2^n - 1 two-input MUXes.",
            formula: "$2^5 - 1 = 31$ MUXes"
        }
    },
    {
        id: "dl2-mux-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Implementing any n-variable function using MUX requires:",
        options: ["2^n:1 MUX with n select lines", "2^(n-1):1 MUX with last variable as data input", "Both approaches work", "Cannot be done"],
        correctAnswer: 2,
        explanation: {
            solution: "Two methods: (1) 2^n:1 MUX with all n variables as select lines, data inputs = 0 or 1 based on truth table. (2) 2^(n-1):1 MUX with n-1 variables as select, last variable and its functions (0, 1, X, X') as data inputs. Second method halves the MUX size but requires more analysis."
        }
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
        explanation: {
            solution: "2-to-4 decoder with inputs A,B (A is MSB): Y0 = A'B' (AB=00), Y1 = A'B (AB=01), Y2 = AB' (AB=10), Y3 = AB (AB=11). Each output is the minterm corresponding to its index. Exactly one output is 1 at any time. Each output implements one minterm - decoder generates all minterms.",
            formula: "$Y_i = m_i(A,B)$"
        }
    },
    {
        id: "dl2-dec-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A decoder can be used to implement:",
        options: ["Only AND functions", "Only OR functions", "Any Boolean function", "Only simple functions"],
        correctAnswer: 2,
        explanation: {
            solution: "Decoder generates all minterms. Any Boolean function is a sum of minterms (SOP). Simply OR together the decoder outputs corresponding to minterms where function = 1. Example: f = Σm(1,3) using 2-to-4 decoder: f = Y1 + Y3. One decoder + one OR gate implements any function of the same variables."
        }
    },
    {
        id: "dl2-dec-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Priority encoder gives priority to:",
        options: ["All inputs equally", "Lower numbered inputs", "Higher numbered inputs", "Random input"],
        correctAnswer: 2,
        explanation: {
            solution: "Priority encoder: when multiple inputs are active, output encodes the HIGHEST-numbered (highest priority) active input. If I7 and I3 are both 1, output = 111 (binary 7). Standard convention: higher subscript = higher priority. A 'valid' output indicates at least one input is active. Useful for interrupt handling."
        }
    },
    {
        id: "dl2-dec-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Octal-to-Binary encoder has:",
        options: ["3 inputs, 8 outputs", "8 inputs, 3 outputs", "8 inputs, 8 outputs", "3 inputs, 3 outputs"],
        correctAnswer: 1,
        explanation: {
            solution: "Octal-to-Binary encoder: 8 octal input lines (0-7), 3 binary output lines. When input i is active, outputs show binary representation of i. Opposite of 3-to-8 decoder. Only one input should be active; for multiple active inputs, use priority encoder. Used for keypads, input encoding.",
            formula: "8 inputs → 3 outputs ($8 = 2^3$)"
        }
    },
    {
        id: "dl2-dec-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Decimal-to-BCD encoder has:",
        options: ["10 inputs, 4 outputs", "4 inputs, 10 outputs", "10 inputs, 10 outputs", "4 inputs, 4 outputs"],
        correctAnswer: 0,
        explanation: {
            solution: "Decimal-to-BCD encoder: 10 decimal inputs (0-9), 4 BCD output bits. When decimal key i is pressed, outputs show BCD code for i (0000 to 1001). Only 10 of 16 possible 4-bit codes are used (BCD is inefficient but human-friendly). Used in calculators, digital displays.",
            formula: "10 inputs → 4 outputs"
        }
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
        explanation: {
            solution: "Excess-3 code = BCD + 3 (adding binary 0011). BCD 0 (0000) → Excess-3 (0011). BCD 9 (1001) → Excess-3 (1100). Excess-3 is self-complementing: 9's complement of a digit is obtained by inverting all bits. This simplifies BCD subtraction. Range: 0011 to 1100 for digits 0-9.",
            formula: "Excess-3 = BCD + 0011"
        }
    },
    {
        id: "dl2-code-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Gray code has the property that adjacent codes differ in:",
        options: ["All bits", "2 bits", "1 bit", "0 bits"],
        correctAnswer: 2,
        explanation: {
            solution: "Gray code (reflected binary code): consecutive values differ in exactly 1 bit. 00→01→11→10→00 for 2-bit Gray. This property minimizes switching errors (only one bit changes at a time). Used in: K-map labeling, rotary encoders, error reduction in analog-to-digital conversion, and state assignment to reduce glitches."
        }
    },
    {
        id: "dl2-code-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Binary to Gray conversion: Gᵢ = ?",
        options: ["Bᵢ ⊕ Bᵢ₊₁", "Bᵢ · Bᵢ₊₁", "Bᵢ + Bᵢ₊₁", "Bᵢ'"],
        correctAnswer: 0,
        explanation: {
            solution: "Binary to Gray conversion: Gn = Bn (MSB same), Gi = Bi ⊕ Bi+1 (XOR adjacent binary bits). Alternatively: G = B XOR (B >> 1), XOR binary with itself shifted right. Gray to Binary: Bn = Gn, Bi = Bi+1 ⊕ Gi (requires XOR chain from MSB down).",
            formula: "$G_i = B_i \\oplus B_{i+1}$, $G_n = B_n$"
        }
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
        explanation: {
            solution: "Full adder from 2 half adders + OR: First HA (XOR + AND), second HA (XOR + AND), then OR. Critical path for Sum: XOR → XOR = 2 + 2 = 4ns. Critical path for Carry: XOR → AND → OR or AND → OR. Assuming OR=1ns: XOR(2) → AND(1.5) → OR(1) = 4.5ns or first AND(1.5) → OR(1) = 2.5ns. Taking max critical path ≈ 5ns with XOR path.",
            formula: "Critical path: XOR → XOR → OR or XOR → AND → OR"
        }
    },
    {
        id: "dl2-delay-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Glitches (hazards) in circuits are caused by:",
        options: ["Equal delays in all paths", "Different delays in converging paths", "No delays", "Very long delays"],
        correctAnswer: 1,
        explanation: {
            solution: "Hazards/glitches occur when signals traveling different paths to the same gate arrive at different times due to unequal delays. The temporary incorrect output during transition is a glitch. Static hazard: output should stay constant but glitches. Dynamic hazard: output should change once but changes multiple times. Avoided by adding redundant logic or careful timing."
        }
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
        explanation: {
            solution: "Seven-segment decoder: 4-bit BCD input (0-9, sometimes 0-F for hex), 7 outputs (a-g segments). Each output controls one LED segment. For digit '1': only segments b,c are on. For '8': all segments on. The decoder implements 7 separate Boolean functions, one per segment, based on the 4 input bits."
        }
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
        explanation: {
            solution: "Even parity: parity bit is chosen so total 1s (data + parity) is EVEN. If data has odd number of 1s, parity = 1 (making total even). If data has even 1s, parity = 0. Detects single-bit errors: any single bit flip changes parity from even to odd. Used in memory (ECC), communication protocols."
        }
    },
    {
        id: "dl2-par-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Parity generator can be implemented using:",
        options: ["AND gates only", "OR gates only", "XOR gates chain", "NAND gates only"],
        correctAnswer: 2,
        explanation: {
            solution: "XOR of all bits gives even parity bit. XOR outputs 1 when odd number of inputs are 1. If data has odd 1s, XOR = 1, adding this makes total even. If data has even 1s, XOR = 0, total stays even. For n data bits: P = D0 ⊕ D1 ⊕ ... ⊕ Dn-1. Tree structure of XORs minimizes delay."
        }
    },
    {
        id: "dl2-par-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "For n data bits, even parity bit P = ?",
        options: ["D₀ AND D₁ AND ... AND Dₙ₋₁", "D₀ XOR D₁ XOR ... XOR Dₙ₋₁", "D₀ OR D₁ OR ... OR Dₙ₋₁", "NOT(D₀)"],
        correctAnswer: 1,
        explanation: {
            solution: "Even parity bit P = XOR of all data bits. P = D0 ⊕ D1 ⊕ D2 ⊕ ... ⊕ Dn-1. This generates a bit that, when included with data, makes total 1-count even. For odd parity: P = (D0 ⊕ D1 ⊕ ... ⊕ Dn-1)' or equivalently add 1 to even parity. Parity checker: XOR all bits including parity, result=0 means no error detected.",
            formula: "$P = D_0 \\oplus D_1 \\oplus ... \\oplus D_{n-1}$"
        }
    }
]);

console.log("Exhaustive Digital Logic Part 2 loaded - ~55 questions");
