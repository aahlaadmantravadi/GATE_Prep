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
        explanation: {
            solution: "Identity Law for OR: Adding 0 to anything leaves it unchanged. X + 0 = X. Think of it as: '0 contributes nothing to an OR.' The dual is X·1 = X (multiplying by 1 leaves unchanged).",
            formula: "$X + 0 = X$"
        }
    },
    {
        id: "dl-bool-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · 1 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 2,
        explanation: {
            solution: "Identity Law for AND: ANDing with 1 leaves the value unchanged. X·1 = X. Think: '1 is transparent to AND.' This is dual to X+0=X. Used in simplification when a term can be factored out.",
            formula: "$X \\cdot 1 = X$"
        }
    },
    {
        id: "dl-bool-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + 1 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 1,
        explanation: {
            solution: "Domination/Annulment Law for OR: ORing with 1 always gives 1, regardless of X. X + 1 = 1. Once you have a 1 in an OR, the result is always 1. The dual is X·0 = 0.",
            formula: "$X + 1 = 1$"
        }
    },
    {
        id: "dl-bool-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · 0 = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 0,
        explanation: {
            solution: "Domination/Annulment Law for AND: ANDing with 0 always gives 0, regardless of X. X·0 = 0. Once you have a 0 in an AND, the result is always 0. Very useful for simplifying expressions with contradicting terms.",
            formula: "$X \\cdot 0 = 0$"
        }
    },
    {
        id: "dl-bool-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + X = ?",
        options: ["0", "2X", "X", "1"],
        correctAnswer: 2,
        explanation: {
            solution: "Idempotent Law for OR: ORing a value with itself gives the same value. X + X = X. Unlike regular arithmetic where x + x = 2x, Boolean algebra has no '2'. Same for AND: X·X = X.",
            formula: "$X + X = X$"
        }
    },
    {
        id: "dl-bool-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · X = ?",
        options: ["0", "X²", "X", "1"],
        correctAnswer: 2,
        explanation: {
            solution: "Idempotent Law for AND: ANDing a value with itself gives the same value. X·X = X. There's no X² in Boolean algebra - only 0 and 1 exist as values. Same for OR: X+X = X.",
            formula: "$X \\cdot X = X$"
        }
    },
    {
        id: "dl-bool-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + X' = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 1,
        explanation: {
            solution: "Complement Law for OR: A value ORed with its complement always gives 1. X + X' = 1. Either X is 1 (making sum 1) or X is 0 (so X' is 1, making sum 1). This represents 'true OR false = true' in logic.",
            formula: "$X + X' = 1$"
        }
    },
    {
        id: "dl-bool-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X · X' = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 0,
        explanation: {
            solution: "Complement Law for AND: A value ANDed with its complement always gives 0. X·X' = 0. You can't have X and NOT X both true simultaneously. This is used to identify contradictions in expressions - if you see A·A', that term is 0.",
            formula: "$X \\cdot X' = 0$"
        }
    },
    {
        id: "dl-bool-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "(X')' = ?",
        options: ["0", "1", "X", "X'"],
        correctAnswer: 2,
        explanation: {
            solution: "Involution/Double Negation Law: Complementing twice returns the original value. (X')' = X. NOT(NOT X) = X. This is intuitive: flipping a bit twice gets you back to the start. Applies to any number of double complements.",
            formula: "$(X')' = X$"
        }
    },
    {
        id: "dl-bool-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "De Morgan: (X + Y)' = ?",
        options: ["X' + Y'", "X' · Y'", "X · Y", "(X · Y)'"],
        correctAnswer: 1,
        explanation: {
            solution: "De Morgan's First Theorem: The complement of an OR is the AND of complements. (X+Y)' = X'·Y'. To negate an OR: negate each term and change OR to AND. Essential for NAND/NOR conversion and bubble pushing in logic diagrams.",
            formula: "$(X+Y)' = X' \\cdot Y'$"
        }
    },
    {
        id: "dl-bool-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "De Morgan: (X · Y)' = ?",
        options: ["X' · Y'", "X' + Y'", "X + Y", "(X + Y)'"],
        correctAnswer: 1,
        explanation: {
            solution: "De Morgan's Second Theorem: The complement of an AND is the OR of complements. (X·Y)' = X'+Y'. To negate an AND: negate each term and change AND to OR. Remember: 'break the bar, change the operation.'",
            formula: "$(X \\cdot Y)' = X' + Y'$"
        }
    },
    {
        id: "dl-bool-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Absorption law: X + X·Y = ?",
        options: ["X·Y", "Y", "X + Y", "X"],
        correctAnswer: 3,
        explanation: {
            solution: "Absorption Law: X + X·Y = X(1+Y) = X·1 = X. The term X·Y is 'absorbed' by X. If X is 1, the whole expression is 1 regardless of Y. If X is 0, X·Y is 0 too. Key simplification rule that removes redundant terms.",
            formula: "$X + XY = X$"
        }
    },
    {
        id: "dl-bool-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Absorption law: X · (X + Y) = ?",
        options: ["X·Y", "Y", "X + Y", "X"],
        correctAnswer: 3,
        explanation: {
            solution: "Absorption Law (dual form): X·(X+Y) = X·X + X·Y = X + X·Y = X. Distributing X, then applying idempotent law, then absorption. This form absorbs the sum term. Both absorption forms simplify to just X.",
            formula: "$X(X+Y) = X$"
        }
    },
    {
        id: "dl-bool-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Consensus theorem: X·Y + X'·Z + Y·Z = ?",
        options: ["X·Y + X'·Z", "X·Y + Y·Z", "X'·Z + Y·Z", "X·Y·Z"],
        correctAnswer: 0,
        explanation: {
            solution: "Consensus Theorem: The term Y·Z is redundant. Y·Z = Y·Z·(X+X') = X·Y·Z + X'·Y·Z, which is covered by X·Y and X'·Z. The 'consensus term' (product of the non-complemented literals from first two terms) can always be removed.",
            formula: "$XY + X'Z + YZ = XY + X'Z$"
        }
    },
    {
        id: "dl-bool-015",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "X + X'·Y = ?",
        options: ["X", "Y", "X + Y", "X·Y"],
        correctAnswer: 2,
        explanation: {
            solution: "This is the 'simplification theorem' or 'reduction law': X + X'Y = (X+X')(X+Y) = 1·(X+Y) = X+Y. Here we used the distribution of OR over AND (which works in Boolean algebra). Result: X absorbs the X' part, leaving X+Y.",
            formula: "$X + X'Y = X + Y$"
        }
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
        explanation: {
            solution: "AND gate: output = 1 ONLY when ALL inputs = 1. If any input is 0, output is 0. Think of it as multiplication: 1×1×1×...=1, but 1×1×0×...=0. Used for enabling signals, masking, and detecting when multiple conditions are all true simultaneously."
        }
    },
    {
        id: "dl-gate-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "Output of OR gate is 0 when:",
        options: ["Any input is 0", "All inputs are 0", "Any input is 1", "All inputs are 1"],
        correctAnswer: 1,
        explanation: {
            solution: "OR gate: output = 0 ONLY when ALL inputs = 0. If any input is 1, output is 1. Think of it as finding maximum: max(0,0,0)=0, max(0,1,0)=1. Used for combining multiple trigger conditions where any one being true should activate the output."
        }
    },
    {
        id: "dl-gate-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "NAND gate is:",
        options: ["AND followed by NOT", "OR followed by NOT", "NOT followed by AND", "XOR followed by NOT"],
        correctAnswer: 0,
        explanation: {
            solution: "NAND = NOT-AND = AND gate with inverted output. Output = (A·B)'. Truth table: all 1s except when all inputs are 1 (then 0). NAND is a universal gate - any Boolean function can be built using only NAND gates. Very efficient in CMOS technology.",
            formula: "$NAND(A,B) = (A \\cdot B)'$"
        }
    },
    {
        id: "dl-gate-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "NOR gate is:",
        options: ["AND followed by NOT", "OR followed by NOT", "NOT followed by OR", "XOR followed by NOT"],
        correctAnswer: 1,
        explanation: {
            solution: "NOR = NOT-OR = OR gate with inverted output. Output = (A+B)'. Truth table: 1 only when all inputs are 0, otherwise 0. NOR is also a universal gate. In some technologies (like early TTL), NOR was the preferred building block over NAND.",
            formula: "$NOR(A,B) = (A + B)'$"
        }
    },
    {
        id: "dl-gate-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "XOR gate output is 1 when:",
        options: ["Both inputs same", "Both inputs different", "Both inputs 1", "Both inputs 0"],
        correctAnswer: 1,
        explanation: {
            solution: "XOR (Exclusive OR): output = 1 when inputs are DIFFERENT. 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0. Detects inequality. Used in: adders (sum bit), parity generators, comparators, and toggle circuits. For n-inputs: output=1 when ODD number of 1s.",
            formula: "$A \\oplus B = A'B + AB'$"
        }
    },
    {
        id: "dl-gate-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "XNOR gate output is 1 when:",
        options: ["Both inputs same", "Both inputs different", "Any input is 1", "Any input is 0"],
        correctAnswer: 0,
        explanation: {
            solution: "XNOR = NOT-XOR = Equivalence gate. Output = 1 when inputs are SAME. 0⊙0=1, 0⊙1=0, 1⊙0=0, 1⊙1=1. Detects equality. Used in comparators. For n-inputs: output=1 when EVEN number of inputs are 1 (including zero).",
            formula: "$A \\odot B = AB + A'B' = (A \\oplus B)'$"
        }
    },
    {
        id: "dl-gate-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "Which gate is called universal gate?",
        options: ["AND", "OR", "NAND", "XOR"],
        correctAnswer: 2,
        explanation: {
            solution: "NAND and NOR are universal gates because any Boolean function can be implemented using only that gate type. NOT = NAND(A,A). AND = NAND(NAND(A,B), NAND(A,B)). OR = NAND(NAND(A,A), NAND(B,B)). This simplifies IC manufacturing - one gate type for entire chip."
        }
    },
    {
        id: "dl-gate-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "NOT using only NAND: connect both inputs of NAND to X gives:",
        options: ["X", "0", "1", "X'"],
        correctAnswer: 3,
        explanation: {
            solution: "NAND(X,X) = (X·X)' = X' (by idempotent and complement laws). This is how NOT is built from NAND: short the two inputs together. Same works for NOR: NOR(X,X) = (X+X)' = X'. This is the first step in showing NAND/NOR universality.",
            formula: "$NAND(X,X) = (X \\cdot X)' = X'$"
        }
    },
    {
        id: "dl-gate-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ 0 = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 2,
        explanation: {
            solution: "XOR with 0: A ⊕ 0 = A'·0 + A·1 = 0 + A = A. XORing with 0 leaves the value unchanged - 0 is the identity element for XOR. Useful in controlled complement: XOR with control bit; if control=0, value passes unchanged; if control=1, value is complemented.",
            formula: "$A \\oplus 0 = A$"
        }
    },
    {
        id: "dl-gate-010",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ 1 = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 3,
        explanation: {
            solution: "XOR with 1: A ⊕ 1 = A'·1 + A·0 = A' + 0 = A'. XORing with 1 complements the value. This is how to build a controlled inverter: XOR the data with a control signal. Very useful in arithmetic circuits for subtraction (1's complement).",
            formula: "$A \\oplus 1 = A'$"
        }
    },
    {
        id: "dl-gate-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ A = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 0,
        explanation: {
            solution: "XOR with self: A ⊕ A = 0. If A=0, then 0⊕0=0. If A=1, then 1⊕1=0. Inputs are always same, so output is always 0. This is the self-inverse property. Useful: A ⊕ B ⊕ B = A (XORing twice with same value cancels out - used in encryption/swapping).",
            formula: "$A \\oplus A = 0$"
        }
    },
    {
        id: "dl-gate-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Logic Gates",
        question: "A ⊕ A' = ?",
        options: ["0", "1", "A", "A'"],
        correctAnswer: 1,
        explanation: {
            solution: "XOR with complement: A ⊕ A' = 1. If A=0, then 0⊕1=1. If A=1, then 1⊕0=1. Inputs are always different, so output is always 1. Compare with XNOR: A ⊙ A = 1 (same gives 1) and A ⊙ A' = 0 (different gives 0).",
            formula: "$A \\oplus A' = 1$"
        }
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
        explanation: {
            solution: "SOP = Sum (OR) of Products (ANDs) = OR of minterms. Each minterm is a product term containing every variable (complemented or not). SOP represents function as sum of minterms where f=1. Written as Σm(list of minterms). Example: f = A'B + AB' is SOP (non-canonical); f = Σm(1,2) is canonical SOP."
        }
    },
    {
        id: "dl-canon-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "POS (Product of Sums) is also called:",
        options: ["Minterm form", "Maxterm form", "Canonical sum", "Standard product"],
        correctAnswer: 1,
        explanation: {
            solution: "POS = Product (AND) of Sums (ORs) = AND of maxterms. Each maxterm is a sum term containing every variable. POS represents function as product of maxterms where f=0. Written as ΠM(list of maxterms). Minterms and maxterms are complements: mi' = Mi. Converting: Σm(1,2) = ΠM(0,3) for 2 variables."
        }
    },
    {
        id: "dl-canon-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For n variables, total number of minterms (or maxterms) is:",
        options: ["n", "n²", "2n", "2^n"],
        correctAnswer: 3,
        explanation: {
            solution: "For n variables, there are 2^n possible input combinations (rows in truth table), hence 2^n minterms and 2^n maxterms. Minterm mi corresponds to row i where function could be 1. Maxterm Mi corresponds to row i where function could be 0. They cover all possibilities.",
            formula: "$Minterms = Maxterms = 2^n$"
        }
    },
    {
        id: "dl-canon-004",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "For 4 variables, total number of possible Boolean functions is 2^(2^n). This equals:",
        correctAnswer: 65536,
        tolerance: 0,
        explanation: {
            solution: "For n variables: 2^n rows in truth table, each can be 0 or 1 independently, giving 2^(2^n) functions. For n=4: 2^(2^4) = 2^16 = 65536 unique Boolean functions. This includes constants (0,1), literals (A,A',B,...), common gates (AND,OR,XOR), and exotic functions.",
            formula: "$2^{2^4} = 2^{16} = 65536$"
        }
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
        explanation: {
            solution: "K-map is a graphical method for Boolean function minimization. It arranges minterms so adjacent cells differ by one variable, making it easy to identify terms that can be combined. Grouping adjacent 1s eliminates variables, yielding minimal SOP (or POS by grouping 0s). Works best for ≤5 variables."
        }
    },
    {
        id: "dl-kmap-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Adjacent cells in K-map differ in exactly:",
        options: ["0 variables", "1 variable", "2 variables", "All variables"],
        correctAnswer: 1,
        explanation: {
            solution: "K-map uses Gray code ordering: adjacent cells (horizontally, vertically, and wrapping around edges) differ in exactly ONE variable. This property is key: when two adjacent cells both have 1, the differing variable can be eliminated (XY + XY' = X). K-map visually exploits the XY + XY' = X simplification."
        }
    },
    {
        id: "dl-kmap-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A group of 2 cells in K-map eliminates how many variables?",
        options: ["0", "1", "2", "All"],
        correctAnswer: 1,
        explanation: {
            solution: "Group of 2 cells = 2^1 cells → eliminates 1 variable. The cells are adjacent, differing in one variable (say A), so A and A' average out to 1. Group of 4 = 2^2 → 2 variables eliminated. Group of 8 = 2^3 → 3 eliminated. General: 2^k cells eliminate k variables.",
            formula: "$2^k$ cells → $k$ variables eliminated"
        }
    },
    {
        id: "dl-kmap-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A group of 4 cells in K-map eliminates how many variables?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
        explanation: {
            solution: "Group of 4 = 2^2 cells → eliminates 2 variables. The group must form a square or rectangle (or wrap around edges). Two variables change within the group and are eliminated. For 4-variable K-map: 4-cell group leaves 2-literal term.",
            formula: "$2^2 = 4$ cells → 2 variables eliminated"
        }
    },
    {
        id: "dl-kmap-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "A group of 8 cells in K-map (for 4 variables) gives a term with:",
        options: ["0 literals", "1 literal", "2 literals", "3 literals"],
        correctAnswer: 1,
        explanation: {
            solution: "Group of 8 = 2^3 cells → eliminates 3 variables. In 4-variable K-map: 4 - 3 = 1 variable remains → 1 literal term. An 8-cell group covers half the K-map. Example: if all cells where A=1 are grouped, the term is just 'A'. Full 16-cell group = constant 1 (0 literals).",
            formula: "4 variables - 3 eliminated = 1 literal"
        }
    },
    {
        id: "dl-kmap-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "Don't care conditions in K-map are represented by:",
        options: ["0", "1", "X or d", "Empty cell"],
        correctAnswer: 2,
        explanation: {
            solution: "Don't cares (marked X or d) are input combinations that either never occur or whose output doesn't matter. During minimization, treat them as 0 or 1, whichever gives larger groups (fewer literals). Don't cares provide optimization opportunities without affecting the required functionality."
        }
    },
    {
        id: "dl-kmap-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Boolean Algebra",
        question: "K-map groups must be of size:",
        options: ["Any size", "Powers of 2 only", "Powers of 3 only", "Prime numbers"],
        correctAnswer: 1,
        explanation: {
            solution: "Valid group sizes: 1, 2, 4, 8, 16... (powers of 2). Each power of 2 corresponds to eliminating one more variable: 2^0=1 (no elimination), 2^1=2 (1 var eliminated), etc. Non-power-of-2 groupings don't correspond to valid Boolean simplifications and would give incorrect results."
        }
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
        explanation: {
            solution: "Half adder: 2 inputs (A, B), 2 outputs (Sum, Carry). It adds two single bits without handling incoming carry. Sum = A⊕B (1 when inputs differ). Carry = A·B (1 when both inputs are 1). Called 'half' because it's half of what's needed for multi-bit addition."
        }
    },
    {
        id: "dl-comb-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Half adder: Sum = ?, Carry = ?",
        options: ["Sum = A·B, Carry = A⊕B", "Sum = A⊕B, Carry = A·B", "Sum = A+B, Carry = A·B", "Sum = A·B, Carry = A+B"],
        correctAnswer: 1,
        explanation: {
            solution: "Half adder equations: Sum = A ⊕ B (XOR gives 1 when exactly one input is 1), Carry = A · B (AND gives 1 when both are 1). Adding 1+1: sum bit = 0, carry = 1 (result is 10 in binary = 2). XOR and AND gates form the half adder circuit.",
            formula: "$Sum = A \\oplus B$, $Carry = A \\cdot B$"
        }
    },
    {
        id: "dl-comb-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A full adder has:",
        options: ["2 inputs, 2 outputs", "3 inputs, 2 outputs", "3 inputs, 3 outputs", "4 inputs, 2 outputs"],
        correctAnswer: 1,
        explanation: {
            solution: "Full adder: 3 inputs (A, B, Cin), 2 outputs (Sum, Cout). Unlike half adder, it handles carry input from previous stage. Essential for multi-bit addition - chain n full adders to add n-bit numbers. Can be built from 2 half adders and an OR gate."
        }
    },
    {
        id: "dl-comb-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Full adder: Sum = ?",
        options: ["A ⊕ B ⊕ Cin", "A · B · Cin", "A + B + Cin", "(A⊕B)·Cin"],
        correctAnswer: 0,
        explanation: {
            solution: "Full adder sum: Sum = A ⊕ B ⊕ Cin. XOR of all three inputs gives 1 when odd number of inputs are 1. Cout = A·B + Cin·(A⊕B) = majority function (1 when 2+ inputs are 1). Full adder adds three bits, producing 2-bit result (Sum is LSB, Cout is MSB).",
            formula: "$Sum = A \\oplus B \\oplus C_{in}$"
        }
    },
    {
        id: "dl-comb-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "n-bit ripple carry adder uses how many full adders?",
        options: ["n-1", "n", "n+1", "2n"],
        correctAnswer: 1,
        explanation: {
            solution: "n-bit addition requires n full adders, one for each bit position. Carry ripples from LSB (FA0) through each stage to MSB (FAn-1). First stage can use half adder if no initial carry. The Cout of the final stage indicates overflow in unsigned addition."
        }
    },
    {
        id: "dl-comb-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Delay of n-bit ripple carry adder is O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: {
            solution: "Ripple carry adder: carry must propagate through all n stages sequentially. Worst case (adding 11...1 + 00...1): carry ripples from bit 0 to bit n-1. Each full adder has gate delay, so total delay = n × (single FA delay) = O(n). This is the main disadvantage of ripple carry."
        }
    },
    {
        id: "dl-comb-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "Carry lookahead adder has delay O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
        explanation: {
            solution: "CLA computes all carry bits in parallel using generate (G) and propagate (P) signals. Carries are computed as: Ci = Gi + Pi·Ci-1 = Gi + Pi·Gi-1 + Pi·Pi-1·Ci-2... Pre-computing these eliminates rippling. With hierarchical CLA, delay grows as O(log n). Much faster for wide additions."
        }
    },
    {
        id: "dl-comb-008",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 2-to-1 multiplexer has:",
        options: ["1 data input, 1 select", "2 data inputs, 1 select", "2 data inputs, 2 selects", "4 data inputs, 2 selects"],
        correctAnswer: 1,
        explanation: {
            solution: "2:1 MUX: 2 data inputs (I0, I1), 1 select line (S), 1 output (Y). Y = S'·I0 + S·I1. When S=0, output=I0; when S=1, output=I1. MUX acts as a programmable switch. Can implement any 2-variable function by hardwiring data inputs appropriately."
        }
    },
    {
        id: "dl-comb-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "2^n-to-1 multiplexer uses n select lines and has:",
        options: ["n data inputs", "2n data inputs", "n² data inputs", "2^n data inputs"],
        correctAnswer: 3,
        explanation: {
            solution: "A 2^n:1 MUX has 2^n data inputs selected by n select lines. The select lines form an n-bit binary number (0 to 2^n-1) that determines which input passes to output. Y = Σ(Ik · mk(S)), where mk is the minterm of select lines corresponding to input k.",
            formula: "$Data\\ inputs = 2^n$"
        }
    },
    {
        id: "dl-comb-010",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "An 8:1 multiplexer needs how many select lines?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "8:1 MUX: 8 = 2^3 inputs, so need 3 select lines (S2, S1, S0). The 3-bit select value chooses one of 8 inputs. Select range: 000 (I0) to 111 (I7). An 8:1 MUX can implement any 3-variable Boolean function directly, or 4-variable with some input tricks.",
            formula: "$2^3 = 8 \\Rightarrow 3$ select lines"
        }
    },
    {
        id: "dl-comb-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A decoder with n inputs has:",
        options: ["n outputs", "2n outputs", "n² outputs", "2^n outputs"],
        correctAnswer: 3,
        explanation: {
            solution: "An n-to-2^n decoder takes n binary inputs and activates exactly one of 2^n outputs. Each output corresponds to one minterm. Decoder can implement any Boolean function: OR together the outputs corresponding to minterms where function = 1. Enable input allows cascading for larger decoders.",
            formula: "$Outputs = 2^n$"
        }
    },
    {
        id: "dl-comb-012",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "A 3-to-8 decoder has how many outputs?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: {
            solution: "3-to-8 decoder: 3 inputs (A, B, C) generate 8 outputs (Y0-Y7). Output Yi = 1 when inputs form binary number i. Y0 = A'B'C', Y1 = A'B'C, ..., Y7 = ABC. Only one output is active at a time. Each output is a minterm of the input variables.",
            formula: "$2^3 = 8$ outputs"
        }
    },
    {
        id: "dl-comb-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Combinational Circuits",
        question: "An encoder with 2^n inputs has:",
        options: ["2^n outputs", "n² outputs", "n outputs", "2n outputs"],
        correctAnswer: 2,
        explanation: {
            solution: "Encoder is the inverse of decoder: 2^n inputs → n output bits. Output is the binary code of the active input. 8-to-3 encoder: when I5 is active, outputs are 101 (binary 5). Standard encoder assumes only one input active; priority encoder handles multiple active inputs by encoding the highest-priority one.",
            formula: "$2^n$ inputs → $n$ outputs"
        }
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
        explanation: {
            solution: "Combinational circuits are memoryless: output = f(current inputs) only. No feedback, no storage elements. Examples: adders, MUX, decoders, encoders. Same input always produces same output. Contrast with sequential circuits whose output also depends on history (state)."
        }
    },
    {
        id: "dl-seq-002",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A sequential circuit's output depends on:",
        options: ["Current inputs only", "Previous state only", "Current inputs and state (memory)", "Future inputs"],
        correctAnswer: 2,
        explanation: {
            solution: "Sequential circuits have memory: output = f(current inputs, current state). State represents the 'history' of past inputs stored in flip-flops. Examples: counters, registers, FSMs. Same input can produce different outputs depending on what happened before. Includes latches, flip-flops, and their combinations."
        }
    },
    {
        id: "dl-seq-003",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "SR latch has forbidden state when:",
        options: ["S=0, R=0", "S=0, R=1", "S=1, R=0", "S=1, R=1"],
        correctAnswer: 3,
        explanation: {
            solution: "SR latch: S=R=1 is forbidden/invalid. In NOR-based SR latch, both Q and Q' become 0 (violating complementarity). When inputs return to S=R=0, the latch enters a race condition with unpredictable result. JK flip-flop solves this by defining J=K=1 as toggle."
        }
    },
    {
        id: "dl-seq-004",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "JK flip-flop solves SR's forbidden state by making J=K=1 cause:",
        options: ["Hold state", "Set Q=1", "Reset Q=0", "Toggle (complement Q)"],
        correctAnswer: 3,
        explanation: {
            solution: "JK flip-flop converts the problematic S=R=1 condition into useful toggle operation. J=K=1 causes Q to flip: Q becomes Q'. This uses feedback to determine the action based on current state, eliminating ambiguity. JK is the most versatile flip-flop type.",
            formula: "$Q_{n+1} = JQ' + K'Q$"
        }
    },
    {
        id: "dl-seq-005",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "D flip-flop (delay flip-flop): Q(next) = ?",
        options: ["D'", "D", "Q", "0"],
        correctAnswer: 1,
        explanation: {
            solution: "D flip-flop: Q(n+1) = D. The simplest flip-flop - output becomes whatever D was at the clock edge. Called 'delay' because it delays input D by one clock cycle. No forbidden states. Used for registers, pipeline stages, and anywhere you need to store a bit.",
            formula: "$Q_{n+1} = D$"
        }
    },
    {
        id: "dl-seq-006",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "T flip-flop (toggle flip-flop): when T=1, Q(next) = ?",
        options: ["Q", "Q'", "0", "1"],
        correctAnswer: 1,
        explanation: {
            solution: "T flip-flop: when T=1, output toggles (Q becomes Q'). When T=0, output holds. Characteristic: Q(n+1) = T⊕Q. Ideal for counters: connect T=1 for continuous toggling, creating a divide-by-2 frequency divider. Ripple counter: chain T flip-flops with T=1.",
            formula: "$Q_{n+1} = T \\oplus Q = Q'$ when T=1"
        }
    },
    {
        id: "dl-seq-007",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "An n-bit counter can count from 0 to:",
        options: ["n", "n-1", "2^n", "2^n - 1"],
        correctAnswer: 3,
        explanation: {
            solution: "n-bit counter has 2^n states: 0 to 2^n-1. After reaching max (all 1s), it wraps to 0. Example: 4-bit counter: states 0000 to 1111 (0 to 15), so 16 states. Each flip-flop stores one bit of the count value.",
            formula: "$Range: 0$ to $2^n - 1$"
        }
    },
    {
        id: "dl-seq-008",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A 4-bit counter can count from 0 to (max value):",
        correctAnswer: 15,
        tolerance: 0,
        explanation: {
            solution: "4-bit counter max = 2^4 - 1 = 15. Binary 1111 = decimal 15. Count sequence: 0,1,2,...,14,15,0,1,... (wraps around). For decimal counting (0-9), use mod-10 counter with reset logic after 9.",
            formula: "$2^4 - 1 = 15$"
        }
    },
    {
        id: "dl-seq-009",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-N counter requires minimum how many flip-flops?",
        options: ["N", "N-1", "⌈log₂N⌉", "⌊log₂N⌋"],
        correctAnswer: 2,
        explanation: {
            solution: "Minimum flip-flops = ⌈log₂N⌉ (ceiling of log base 2). This is the minimum bits needed to represent N distinct states. For N=10: ⌈log₂10⌉ = ⌈3.32⌉ = 4 FFs (even though some states are unused). For N=16: ⌈log₂16⌉ = 4 FFs exactly.",
            formula: "$FFs = \\lceil\\log_2(N)\\rceil$"
        }
    },
    {
        id: "dl-seq-010",
        type: "NAT",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A mod-10 counter (decade counter) needs minimum how many flip-flops?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "Mod-10: counts 0-9, needs ⌈log₂10⌉ = ⌈3.32⌉ = 4 FFs. 3 FFs only give 8 states (not enough). 4 FFs give 16 states; logic forces reset after state 9 (1001), skipping 10-15. Decade counters are building blocks for BCD counting and decimal displays.",
            formula: "$\\lceil\\log_2(10)\\rceil = 4$"
        }
    },
    {
        id: "dl-seq-011",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "In a synchronous counter, all flip-flops are clocked by:",
        options: ["Different clocks", "The same clock", "No clock", "Previous FF output"],
        correctAnswer: 1,
        explanation: {
            solution: "Synchronous counter: all FFs share the same clock signal i.e., all toggle simultaneously on clock edge. Logic determines which FFs toggle based on current state. Faster and more predictable than asynchronous. No cumulative propagation delay. Used in high-speed applications."
        }
    },
    {
        id: "dl-seq-012",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "In a ripple (asynchronous) counter, the clock to each FF comes from:",
        options: ["External source", "Previous FF output", "Same global clock", "Internal oscillator"],
        correctAnswer: 1,
        explanation: {
            solution: "Ripple/asynchronous counter: only first FF gets external clock; each subsequent FF is clocked by previous FF's output. Simple design but slow - delay accumulates (ripples) through stages. For n-bit ripple counter, max delay = n × FF delay. Outputs don't change simultaneously, causing glitches."
        }
    },
    {
        id: "dl-seq-013",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "A 4-bit shift register can store:",
        options: ["4 bytes", "8 bits", "4 bits", "16 bits"],
        correctAnswer: 2,
        explanation: {
            solution: "n-bit shift register = n flip-flops = n bits of storage. 4-bit shift register stores 4 bits. Data shifts one position per clock: each FF's input comes from previous FF's output (for serial shift). Types: SISO, SIPO, PISO, PIPO for various serial/parallel I/O combinations."
        }
    },
    {
        id: "dl-seq-014",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "SISO shift register means:",
        options: ["Serial In, Serial Out", "Serial In, Store Out", "Store In, Serial Out", "Store In, Store Out"],
        correctAnswer: 0,
        explanation: {
            solution: "SISO = Serial-In, Serial-Out: data enters one bit at a time, exits one bit at a time. Used for delay lines (delays data by n clocks for n-bit register), serial data transmission, and temporary storage. Simplest interface but slowest for large data transfer."
        }
    },
    {
        id: "dl-seq-015",
        type: "MCQ",
        topic: "digital-logic",
        subtopic: "Sequential Circuits",
        question: "PIPO shift register means:",
        options: ["Parallel In, Parallel Out", "Parallel In, Previous Out", "Previous In, Parallel Out", "Partial In/Out"],
        correctAnswer: 0,
        explanation: {
            solution: "PIPO = Parallel-In, Parallel-Out: all bits loaded simultaneously, all bits read simultaneously. Fastest mode - no serial shifting needed. Used for simple register storage, buffer registers, and situations requiring instant data load/read. Like a row of D flip-flops with common clock."
        }
    }
]);

console.log("Exhaustive Digital Logic loaded - ~70 questions");
