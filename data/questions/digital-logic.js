Questions.register([
    {
        "id": "dl-gates-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "Which gates are called Universal Gates?",
        "options": [
            "AND and OR",
            "NOT and Buffer",
            "NAND and NOR",
            "XOR and XNOR"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "NAND and NOR are universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates. To make NOT from NAND: connect both inputs together. To make AND: NAND followed by NOT(NAND). To make OR: NOT both inputs, then NAND. This universality makes them preferred in IC manufacturing - entire chips can use just one gate type.",
            "formula": "NOT: A' = (A·A)' | AND: A·B = ((A·B)')' | OR: A+B = (A'·B')'"
        }
    },
    {
        "id": "dl-gates-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "The output of XOR gate is 1 when:",
        "options": [
            "Both inputs are 1",
            "Both inputs are 0",
            "Inputs are different",
            "At least one input is 1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "XOR (Exclusive OR) outputs 1 when inputs are different (one is 0, other is 1). Truth table: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0. XOR is used in parity generators, adders (sum bit), and comparators. For n-input XOR, output is 1 when ODD number of inputs are 1.",
            "formula": "$A \\oplus B = A'B + AB' = (A+B)(A'+B')$"
        }
    },
    {
        "id": "dl-gates-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "XNOR gate output is 1 when:",
        "options": [
            "Both inputs are 1 only",
            "Inputs are same (both 0 or both 1)",
            "Both inputs are 0 only",
            "Inputs are different"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "XNOR (Exclusive NOR) is the complement of XOR - also called equivalence or coincidence gate. Output is 1 when inputs are SAME: 0⊙0=1, 0⊙1=0, 1⊙0=0, 1⊙1=1. Used in equality comparators. For n-input XNOR, output is 1 when EVEN number of inputs are 1 (including zero).",
            "formula": "$A \\odot B = AB + A'B' = (A \\oplus B)'$"
        }
    },
    {
        "id": "dl-bool-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X + 0 = ?",
        "options": [
            "1",
            "0",
            "X'",
            "X"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Identity Law for OR: Adding 0 to anything leaves it unchanged. X + 0 = X. Think of it as: '0 contributes nothing to an OR.' The dual is X·1 = X (multiplying by 1 leaves unchanged).",
            "formula": "$X + 0 = X$"
        }
    },
    {
        "id": "dl-bool-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X · 1 = ?",
        "options": [
            "X",
            "0",
            "X'",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Identity Law for AND: ANDing with 1 leaves the value unchanged. X·1 = X. Think: '1 is transparent to AND.' This is dual to X+0=X. Used in simplification when a term can be factored out.",
            "formula": "$X \\cdot 1 = X$"
        }
    },
    {
        "id": "dl-bool-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X + 1 = ?",
        "options": [
            "X'",
            "1",
            "0",
            "X"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Domination/Annulment Law for OR: ORing with 1 always gives 1, regardless of X. X + 1 = 1. Once you have a 1 in an OR, the result is always 1. The dual is X·0 = 0.",
            "formula": "$X + 1 = 1$"
        }
    },
    {
        "id": "dl-bool-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X · 0 = ?",
        "options": [
            "1",
            "X'",
            "X",
            "0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Domination/Annulment Law for AND: ANDing with 0 always gives 0, regardless of X. X·0 = 0. Once you have a 0 in an AND, the result is always 0. Very useful for simplifying expressions with contradicting terms.",
            "formula": "$X \\cdot 0 = 0$"
        }
    },
    {
        "id": "dl-kmap-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Karnaugh map is used for:",
        "options": [
            "Multiplying expressions",
            "Minimizing Boolean expressions",
            "Counting gates",
            "Drawing circuits"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "K-map is a graphical method for Boolean function minimization. It arranges minterms so adjacent cells differ by one variable, making it easy to identify terms that can be combined. Grouping adjacent 1s eliminates variables, yielding minimal SOP (or POS by grouping 0s). Works best for ≤5 variables."
        }
    },
    {
        "id": "dl-kmap-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Adjacent cells in K-map differ in exactly:",
        "options": [
            "1 variable",
            "All variables",
            "2 variables",
            "0 variables"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "K-map uses Gray code ordering: adjacent cells (horizontally, vertically, and wrapping around edges) differ in exactly ONE variable. This property is key: when two adjacent cells both have 1, the differing variable can be eliminated (XY + XY' = X). K-map visually exploits the XY + XY' = X simplification."
        }
    },
    {
        "id": "dl-kmap-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A group of 2 cells in K-map eliminates how many variables?",
        "options": [
            "All",
            "2",
            "0",
            "1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Group of 2 cells = 2^1 cells → eliminates 1 variable. The cells are adjacent, differing in one variable (say A), so A and A' average out to 1. Group of 4 = 2^2 → 2 variables eliminated. Group of 8 = 2^3 → 3 eliminated. General: 2^k cells eliminate k variables.",
            "formula": "$2^k$ cells → $k$ variables eliminated"
        }
    },
    {
        "id": "dl-kmap-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A group of 4 cells in K-map eliminates how many variables?",
        "options": [
            "3",
            "1",
            "0",
            "2"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Group of 4 = 2^2 cells → eliminates 2 variables. The group must form a square or rectangle (or wrap around edges). Two variables change within the group and are eliminated. For 4-variable K-map: 4-cell group leaves 2-literal term.",
            "formula": "$2^2 = 4$ cells → 2 variables eliminated"
        }
    },
    {
        "id": "dl-comb-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A half adder has:",
        "options": [
            "3 inputs, 2 outputs",
            "2 inputs, 2 outputs",
            "1 input, 1 output",
            "2 inputs, 1 output"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Half adder: 2 inputs (A, B), 2 outputs (Sum, Carry). It adds two single bits without handling incoming carry. Sum = A⊕B (1 when inputs differ). Carry = A·B (1 when both inputs are 1). Called 'half' because it's half of what's needed for multi-bit addition."
        }
    },
    {
        "id": "dl-comb-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Half adder: Sum = ?, Carry = ?",
        "options": [
            "Sum = A·B, Carry = A+B",
            "Sum = A+B, Carry = A·B",
            "Sum = A⊕B, Carry = A·B",
            "Sum = A·B, Carry = A⊕B"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Half adder equations: Sum = A ⊕ B (XOR gives 1 when exactly one input is 1), Carry = A · B (AND gives 1 when both are 1). Adding 1+1: sum bit = 0, carry = 1 (result is 10 in binary = 2). XOR and AND gates form the half adder circuit.",
            "formula": "$Sum = A \\oplus B$, $Carry = A \\cdot B$"
        }
    },
    {
        "id": "dl-comb-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A full adder has:",
        "options": [
            "3 inputs, 3 outputs",
            "3 inputs, 2 outputs",
            "4 inputs, 2 outputs",
            "2 inputs, 2 outputs"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Full adder: 3 inputs (A, B, Cin), 2 outputs (Sum, Cout). Unlike half adder, it handles carry input from previous stage. Essential for multi-bit addition - chain n full adders to add n-bit numbers. Can be built from 2 half adders and an OR gate."
        }
    },
    {
        "id": "dl-seq-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "A combinational circuit's output depends on:",
        "options": [
            "Future inputs",
            "Both current inputs and previous state",
            "Current inputs only",
            "Previous state only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Combinational circuits are memoryless: output = f(current inputs) only. No feedback, no storage elements. Examples: adders, MUX, decoders, encoders. Same input always produces same output. Contrast with sequential circuits whose output also depends on history (state)."
        }
    },
    {
        "id": "dl-seq-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "A sequential circuit's output depends on:",
        "options": [
            "Future inputs",
            "Previous state only",
            "Current inputs only",
            "Current inputs and state (memory)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Sequential circuits have memory: output = f(current inputs, current state). State represents the 'history' of past inputs stored in flip-flops. Examples: counters, registers, FSMs. Same input can produce different outputs depending on what happened before. Includes latches, flip-flops, and their combinations."
        }
    },
    {
        "id": "dl-seq-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "SR latch has forbidden state when:",
        "options": [
            "S=1, R=0",
            "S=1, R=1",
            "S=0, R=0",
            "S=0, R=1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SR latch: S=R=1 is forbidden/invalid. In NOR-based SR latch, both Q and Q' become 0 (violating complementarity). When inputs return to S=R=0, the latch enters a race condition with unpredictable result. JK flip-flop solves this by defining J=K=1 as toggle."
        }
    },
    {
        "id": "dl-seq-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "JK flip-flop solves SR's forbidden state by making J=K=1 cause:",
        "options": [
            "Reset Q=0",
            "Toggle (complement Q)",
            "Hold state",
            "Set Q=1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "JK flip-flop converts the problematic S=R=1 condition into useful toggle operation. J=K=1 causes Q to flip: Q becomes Q'. This uses feedback to determine the action based on current state, eliminating ambiguity. JK is the most versatile flip-flop type.",
            "formula": "$Q_{n+1} = JQ' + K'Q$"
        }
    },
    {
        "id": "dl-seq-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "D flip-flop (delay flip-flop): Q(next) = ?",
        "options": [
            "D",
            "Q",
            "D'",
            "0"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "D flip-flop: Q(n+1) = D. The simplest flip-flop - output becomes whatever D was at the clock edge. Called 'delay' because it delays input D by one clock cycle. No forbidden states. Used for registers, pipeline stages, and anywhere you need to store a bit.",
            "formula": "$Q_{n+1} = D$"
        }
    },
    {
        "id": "dl-bool-010",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "De Morgan: (X + Y)' = ?",
        "options": [
            "X' + Y'",
            "X · Y",
            "(X · Y)'",
            "X' · Y'"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "De Morgan's First Theorem: The complement of an OR is the AND of complements. (X+Y)' = X'·Y'. To negate an OR: negate each term and change OR to AND. Essential for NAND/NOR conversion and bubble pushing in logic diagrams.",
            "formula": "$(X+Y)' = X' \\cdot Y'$"
        }
    },
    {
        "id": "dl-bool-011",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "De Morgan: (X · Y)' = ?",
        "options": [
            "(X + Y)'",
            "X' · Y'",
            "X' + Y'",
            "X + Y"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "De Morgan's Second Theorem: The complement of an AND is the OR of complements. (X·Y)' = X'+Y'. To negate an AND: negate each term and change AND to OR. Remember: 'break the bar, change the operation.'",
            "formula": "$(X \\cdot Y)' = X' + Y'$"
        }
    },
    {
        "id": "dl-bool-012",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Absorption law: X + X·Y = ?",
        "options": [
            "X·Y",
            "Y",
            "X",
            "X + Y"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Absorption Law: X + X·Y = X(1+Y) = X·1 = X. The term X·Y is 'absorbed' by X. If X is 1, the whole expression is 1 regardless of Y. If X is 0, X·Y is 0 too. Key simplification rule that removes redundant terms.",
            "formula": "$X + XY = X$"
        }
    },
    {
        "id": "dl-bool-013",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Absorption law: X · (X + Y) = ?",
        "options": [
            "X + Y",
            "X",
            "Y",
            "X·Y"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Absorption Law (dual form): X·(X+Y) = X·X + X·Y = X + X·Y = X. Distributing X, then applying idempotent law, then absorption. This form absorbs the sum term. Both absorption forms simplify to just X.",
            "formula": "$X(X+Y) = X$"
        }
    },
    {
        "id": "dl-bool-014",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Consensus theorem: X·Y + X'·Z + Y·Z = ?",
        "options": [
            "X·Y·Z",
            "X·Y + X'·Z",
            "X·Y + Y·Z",
            "X'·Z + Y·Z"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Consensus Theorem: The term Y·Z is redundant. Y·Z = Y·Z·(X+X') = X·Y·Z + X'·Y·Z, which is covered by X·Y and X'·Z. The 'consensus term' (product of the non-complemented literals from first two terms) can always be removed.",
            "formula": "$XY + X'Z + YZ = XY + X'Z$"
        }
    },
    {
        "id": "dl-comb-010",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "An 8:1 multiplexer needs how many select lines?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "8:1 MUX: 8 = 2^3 inputs, so need 3 select lines (S2, S1, S0). The 3-bit select value chooses one of 8 inputs. Select range: 000 (I0) to 111 (I7). An 8:1 MUX can implement any 3-variable Boolean function directly, or 4-variable with some input tricks.",
            "formula": "$2^3 = 8 \\Rightarrow 3$ select lines"
        }
    },
    {
        "id": "dl-comb-011",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A decoder with n inputs has:",
        "options": [
            "2n outputs",
            "n outputs",
            "n² outputs",
            "2^n outputs"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "An n-to-2^n decoder takes n binary inputs and activates exactly one of 2^n outputs. Each output corresponds to one minterm. Decoder can implement any Boolean function: OR together the outputs corresponding to minterms where function = 1. Enable input allows cascading for larger decoders.",
            "formula": "$Outputs = 2^n$"
        }
    },
    {
        "id": "dl-comb-012",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A 3-to-8 decoder has how many outputs?",
        "correctAnswer": 8,
        "tolerance": 0,
        "explanation": {
            "solution": "3-to-8 decoder: 3 inputs (A, B, C) generate 8 outputs (Y0-Y7). Output Yi = 1 when inputs form binary number i. Y0 = A'B'C', Y1 = A'B'C, ..., Y7 = ABC. Only one output is active at a time. Each output is a minterm of the input variables.",
            "formula": "$2^3 = 8$ outputs"
        }
    },
    {
        "id": "dl-comb-013",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "An encoder with 2^n inputs has:",
        "options": [
            "2^n outputs",
            "2n outputs",
            "n² outputs",
            "n outputs"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Encoder is the inverse of decoder: 2^n inputs → n output bits. Output is the binary code of the active input. 8-to-3 encoder: when I5 is active, outputs are 101 (binary 5). Standard encoder assumes only one input active; priority encoder handles multiple active inputs by encoding the highest-priority one.",
            "formula": "$2^n$ inputs → $n$ outputs"
        }
    },
    {
        "id": "dl-comb-014",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "BCD adder adds correction factor when sum exceeds:",
        "options": [
            "10",
            "15",
            "9",
            "16"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BCD (Binary Coded Decimal) represents each decimal digit as 4 bits (0-9 only, not 10-15). When adding two BCD digits, if sum > 9 OR carry is generated, add 6 (0110) to correct the result into valid BCD. This skips the invalid hexadecimal values A-F. Example: 5+7=12 (1100), exceeds 9, so add 6: 1100+0110=10010 → 1 carry, 0010 (valid BCD 12).",
            "formula": "If sum > 9 or carry: add 6 (0110)"
        }
    },
    {
        "id": "dl-seq-010",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "A mod-10 counter (decade counter) needs minimum how many flip-flops?",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "Mod-10: counts 0-9, needs ⌈log₂10⌉ = ⌈3.32⌉ = 4 FFs. 3 FFs only give 8 states (not enough). 4 FFs give 16 states; logic forces reset after state 9 (1001), skipping 10-15. Decade counters are building blocks for BCD counting and decimal displays.",
            "formula": "$\\lceil\\log_2(10)\\rceil = 4$"
        }
    },
    {
        "id": "dl-seq-011",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "In a synchronous counter, all flip-flops are clocked by:",
        "options": [
            "Different clocks",
            "Previous FF output",
            "No clock",
            "The same clock"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Synchronous counter: all FFs share the same clock signal i.e., all toggle simultaneously on clock edge. Logic determines which FFs toggle based on current state. Faster and more predictable than asynchronous. No cumulative propagation delay. Used in high-speed applications."
        }
    },
    {
        "id": "dl-seq-012",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "In a ripple (asynchronous) counter, the clock to each FF comes from:",
        "options": [
            "Same global clock",
            "Previous FF output",
            "Internal oscillator",
            "External source"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Ripple/asynchronous counter: only first FF gets external clock; each subsequent FF is clocked by previous FF's output. Simple design but slow - delay accumulates (ripples) through stages. For n-bit ripple counter, max delay = n × FF delay. Outputs don't change simultaneously, causing glitches."
        }
    },
    {
        "id": "dl-seq-013",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "A 4-bit shift register can store:",
        "options": [
            "4 bits",
            "16 bits",
            "8 bits",
            "4 bytes"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "n-bit shift register = n flip-flops = n bits of storage. 4-bit shift register stores 4 bits. Data shifts one position per clock: each FF's input comes from previous FF's output (for serial shift). Types: SISO, SIPO, PISO, PIPO for various serial/parallel I/O combinations."
        }
    },
    {
        "id": "dl-seq-014",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "SISO shift register means:",
        "options": [
            "Store In, Store Out",
            "Store In, Serial Out",
            "Serial In, Store Out",
            "Serial In, Serial Out"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SISO = Serial-In, Serial-Out: data enters one bit at a time, exits one bit at a time. Used for delay lines (delays data by n clocks for n-bit register), serial data transmission, and temporary storage. Simplest interface but slowest for large data transfer."
        }
    },
    {
        "id": "dl-seq-015",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "PIPO shift register means:",
        "options": [
            "Parallel In, Parallel Out",
            "Partial In/Out",
            "Previous In, Parallel Out",
            "Parallel In, Previous Out"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "PIPO = Parallel-In, Parallel-Out: all bits loaded simultaneously, all bits read simultaneously. Fastest mode - no serial shifting needed. Used for simple register storage, buffer registers, and situations requiring instant data load/read. Like a row of D flip-flops with common clock."
        }
    },
    {
        "id": "dl-seq-016",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "Johnson counter with 4 flip-flops has how many distinct states?",
        "options": [
            "8",
            "2",
            "16",
            "4"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Johnson counter (twisted ring): complement of last FF feeds back to first. States: 0000→1000→1100→1110→1111→0111→0011→0001→0000. With n FFs: 2n unique states. 4 FFs → 8 states. More efficient than ring counter (2n vs n) but less than binary (2n vs 2^n). All transitions are single-bit changes, minimizing glitches."
        }
    },
    {
        "id": "dl-seq-017",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "Mealy machine output depends on:",
        "options": [
            "Current state and current input",
            "Random",
            "Current state only",
            "Previous output"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Mealy machine: output = f(current state, current input). Outputs can change asynchronously when inputs change. Moore machine: output = f(current state only). Outputs change only with clock. Mealy typically needs fewer states but can have glitchy outputs. Moore is more stable but may need more states."
        }
    },
    {
        "id": "dl-seq-018",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "Number of states in minimal DFA for detecting sequence 101:",
        "options": [
            "2",
            "3",
            "5",
            "4"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "For overlapping sequence detector '101': S0 (start/seen nothing), S1 (seen '1'), S2 (seen '10'), S3 (seen '101' - output and go to S1 since last '1' could start new sequence). Actually for non-overlapping: 4 states. For overlapping: S0→S1→S2→(output, goto S1). Counting carefully: 4 states needed for proper implementation including return logic."
        }
    },
    {
        "id": "dl-bool-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X + X = ?",
        "options": [
            "0",
            "X",
            "1",
            "2X"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Idempotent Law for OR: ORing a value with itself gives the same value. X + X = X. Unlike regular arithmetic where x + x = 2x, Boolean algebra has no '2'. Same for AND: X·X = X.",
            "formula": "$X + X = X$"
        }
    },
    {
        "id": "dl-bool-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X · X = ?",
        "options": [
            "0",
            "1",
            "X²",
            "X"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Idempotent Law for AND: ANDing a value with itself gives the same value. X·X = X. There's no X² in Boolean algebra - only 0 and 1 exist as values. Same for OR: X+X = X.",
            "formula": "$X \\cdot X = X$"
        }
    },
    {
        "id": "dl-bool-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X + X' = ?",
        "options": [
            "0",
            "1",
            "X",
            "X'"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Complement Law for OR: A value ORed with its complement always gives 1. X + X' = 1. Either X is 1 (making sum 1) or X is 0 (so X' is 1, making sum 1). This represents 'true OR false = true' in logic.",
            "formula": "$X + X' = 1$"
        }
    },
    {
        "id": "dl-bool-008",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X · X' = ?",
        "options": [
            "0",
            "1",
            "X",
            "X'"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Complement Law for AND: A value ANDed with its complement always gives 0. X·X' = 0. You can't have X and NOT X both true simultaneously. This is used to identify contradictions in expressions - if you see A·A', that term is 0.",
            "formula": "$X \\cdot X' = 0$"
        }
    },
    {
        "id": "dl-bool-009",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "(X')' = ?",
        "options": [
            "X'",
            "1",
            "X",
            "0"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Involution/Double Negation Law: Complementing twice returns the original value. (X')' = X. NOT(NOT X) = X. This is intuitive: flipping a bit twice gets you back to the start. Applies to any number of double complements.",
            "formula": "$(X')' = X$"
        }
    },
    {
        "id": "dl-bool-015",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "X + X'·Y = ?",
        "options": [
            "X",
            "X·Y",
            "X + Y",
            "Y"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "This is the 'simplification theorem' or 'reduction law': X + X'Y = (X+X')(X+Y) = 1·(X+Y) = X+Y. Here we used the distribution of OR over AND (which works in Boolean algebra). Result: X absorbs the X' part, leaving X+Y.",
            "formula": "$X + X'Y = X + Y$"
        }
    },
    {
        "id": "dl-gate-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "Output of AND gate is 1 when:",
        "options": [
            "Any input is 1",
            "Any input is 0",
            "All inputs are 0",
            "All inputs are 1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "AND gate: output = 1 ONLY when ALL inputs = 1. If any input is 0, output is 0. Think of it as multiplication: 1×1×1×...=1, but 1×1×0×...=0. Used for enabling signals, masking, and detecting when multiple conditions are all true simultaneously."
        }
    },
    {
        "id": "dl-gate-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "Output of OR gate is 0 when:",
        "options": [
            "Any input is 0",
            "All inputs are 1",
            "Any input is 1",
            "All inputs are 0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "OR gate: output = 0 ONLY when ALL inputs = 0. If any input is 1, output is 1. Think of it as finding maximum: max(0,0,0)=0, max(0,1,0)=1. Used for combining multiple trigger conditions where any one being true should activate the output."
        }
    },
    {
        "id": "dl-gate-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "NAND gate is:",
        "options": [
            "AND followed by NOT",
            "NOT followed by AND",
            "OR followed by NOT",
            "XOR followed by NOT"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "NAND = NOT-AND = AND gate with inverted output. Output = (A·B)'. Truth table: all 1s except when all inputs are 1 (then 0). NAND is a universal gate - any Boolean function can be built using only NAND gates. Very efficient in CMOS technology.",
            "formula": "$NAND(A,B) = (A \\cdot B)'$"
        }
    },
    {
        "id": "dl-gate-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "NOR gate is:",
        "options": [
            "XOR followed by NOT",
            "NOT followed by OR",
            "AND followed by NOT",
            "OR followed by NOT"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "NOR = NOT-OR = OR gate with inverted output. Output = (A+B)'. Truth table: 1 only when all inputs are 0, otherwise 0. NOR is also a universal gate. In some technologies (like early TTL), NOR was the preferred building block over NAND.",
            "formula": "$NOR(A,B) = (A + B)'$"
        }
    },
    {
        "id": "dl-gate-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "XOR gate output is 1 when:",
        "options": [
            "Both inputs same",
            "Both inputs 0",
            "Both inputs different",
            "Both inputs 1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "XOR (Exclusive OR): output = 1 when inputs are DIFFERENT. 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0. Detects inequality. Used in: adders (sum bit), parity generators, comparators, and toggle circuits. For n-inputs: output=1 when ODD number of 1s.",
            "formula": "$A \\oplus B = A'B + AB'$"
        }
    },
    {
        "id": "dl-gate-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "XNOR gate output is 1 when:",
        "options": [
            "Both inputs same",
            "Both inputs different",
            "Any input is 0",
            "Any input is 1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "XNOR = NOT-XOR = Equivalence gate. Output = 1 when inputs are SAME. 0⊙0=1, 0⊙1=0, 1⊙0=0, 1⊙1=1. Detects equality. Used in comparators. For n-inputs: output=1 when EVEN number of inputs are 1 (including zero).",
            "formula": "$A \\odot B = AB + A'B' = (A \\oplus B)'$"
        }
    },
    {
        "id": "dl-gate-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "Which gate is called universal gate?",
        "options": [
            "XOR",
            "OR",
            "NAND",
            "AND"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "NAND and NOR are universal gates because any Boolean function can be implemented using only that gate type. NOT = NAND(A,A). AND = NAND(NAND(A,B), NAND(A,B)). OR = NAND(NAND(A,A), NAND(B,B)). This simplifies IC manufacturing - one gate type for entire chip."
        }
    },
    {
        "id": "dl-gate-008",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "NOT using only NAND: connect both inputs of NAND to X gives:",
        "options": [
            "0",
            "X'",
            "X",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NAND(X,X) = (X·X)' = X' (by idempotent and complement laws). This is how NOT is built from NAND: short the two inputs together. Same works for NOR: NOR(X,X) = (X+X)' = X'. This is the first step in showing NAND/NOR universality.",
            "formula": "$NAND(X,X) = (X \\cdot X)' = X'$"
        }
    },
    {
        "id": "dl-gate-009",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "A ⊕ 0 = ?",
        "options": [
            "A'",
            "0",
            "A",
            "1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "XOR with 0: A ⊕ 0 = A'·0 + A·1 = 0 + A = A. XORing with 0 leaves the value unchanged - 0 is the identity element for XOR. Useful in controlled complement: XOR with control bit; if control=0, value passes unchanged; if control=1, value is complemented.",
            "formula": "$A \\oplus 0 = A$"
        }
    },
    {
        "id": "dl-gate-010",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "A ⊕ 1 = ?",
        "options": [
            "A'",
            "0",
            "A",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "XOR with 1: A ⊕ 1 = A'·1 + A·0 = A' + 0 = A'. XORing with 1 complements the value. This is how to build a controlled inverter: XOR the data with a control signal. Very useful in arithmetic circuits for subtraction (1's complement).",
            "formula": "$A \\oplus 1 = A'$"
        }
    },
    {
        "id": "dl-gate-011",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "A ⊕ A = ?",
        "options": [
            "A'",
            "0",
            "A",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "XOR with self: A ⊕ A = 0. If A=0, then 0⊕0=0. If A=1, then 1⊕1=0. Inputs are always same, so output is always 0. This is the self-inverse property. Useful: A ⊕ B ⊕ B = A (XORing twice with same value cancels out - used in encryption/swapping).",
            "formula": "$A \\oplus A = 0$"
        }
    },
    {
        "id": "dl-gate-012",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Logic Gates",
        "question": "A ⊕ A' = ?",
        "options": [
            "A",
            "1",
            "A'",
            "0"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "XOR with complement: A ⊕ A' = 1. If A=0, then 0⊕1=1. If A=1, then 1⊕0=1. Inputs are always different, so output is always 1. Compare with XNOR: A ⊙ A = 1 (same gives 1) and A ⊙ A' = 0 (different gives 0).",
            "formula": "$A \\oplus A' = 1$"
        }
    },
    {
        "id": "dl-canon-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "SOP (Sum of Products) is also called:",
        "options": [
            "Standard sum",
            "Canonical product",
            "Maxterm form",
            "Minterm form"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SOP = Sum (OR) of Products (ANDs) = OR of minterms. Each minterm is a product term containing every variable (complemented or not). SOP represents function as sum of minterms where f=1. Written as Σm(list of minterms). Example: f = A'B + AB' is SOP (non-canonical); f = Σm(1,2) is canonical SOP."
        }
    },
    {
        "id": "dl-canon-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "POS (Product of Sums) is also called:",
        "options": [
            "Maxterm form",
            "Standard product",
            "Canonical sum",
            "Minterm form"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "POS = Product (AND) of Sums (ORs) = AND of maxterms. Each maxterm is a sum term containing every variable. POS represents function as product of maxterms where f=0. Written as ΠM(list of maxterms). Minterms and maxterms are complements: mi' = Mi. Converting: Σm(1,2) = ΠM(0,3) for 2 variables."
        }
    },
    {
        "id": "dl-canon-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "For n variables, total number of minterms (or maxterms) is:",
        "options": [
            "n²",
            "2n",
            "2^n",
            "n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "For n variables, there are 2^n possible input combinations (rows in truth table), hence 2^n minterms and 2^n maxterms. Minterm mi corresponds to row i where function could be 1. Maxterm Mi corresponds to row i where function could be 0. They cover all possibilities.",
            "formula": "$Minterms = Maxterms = 2^n$"
        }
    },
    {
        "id": "dl-canon-004",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "For 4 variables, total number of possible Boolean functions is 2^(2^n). This equals:",
        "correctAnswer": 65536,
        "tolerance": 0,
        "explanation": {
            "solution": "For n variables: 2^n rows in truth table, each can be 0 or 1 independently, giving 2^(2^n) functions. For n=4: 2^(2^4) = 2^16 = 65536 unique Boolean functions. This includes constants (0,1), literals (A,A',B,...), common gates (AND,OR,XOR), and exotic functions.",
            "formula": "$2^{2^4} = 2^{16} = 65536$"
        }
    },
    {
        "id": "dl-kmap-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A group of 8 cells in K-map (for 4 variables) gives a term with:",
        "options": [
            "3 literals",
            "0 literals",
            "1 literal",
            "2 literals"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Group of 8 = 2^3 cells → eliminates 3 variables. In 4-variable K-map: 4 - 3 = 1 variable remains → 1 literal term. An 8-cell group covers half the K-map. Example: if all cells where A=1 are grouped, the term is just 'A'. Full 16-cell group = constant 1 (0 literals).",
            "formula": "4 variables - 3 eliminated = 1 literal"
        }
    },
    {
        "id": "dl-kmap-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Don't care conditions in K-map are represented by:",
        "options": [
            "Empty cell",
            "1",
            "X or d",
            "0"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Don't cares (marked X or d) are input combinations that either never occur or whose output doesn't matter. During minimization, treat them as 0 or 1, whichever gives larger groups (fewer literals). Don't cares provide optimization opportunities without affecting the required functionality."
        }
    },
    {
        "id": "dl-kmap-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "K-map groups must be of size:",
        "options": [
            "Powers of 2 only",
            "Prime numbers",
            "Powers of 3 only",
            "Any size"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Valid group sizes: 1, 2, 4, 8, 16... (powers of 2). Each power of 2 corresponds to eliminating one more variable: 2^0=1 (no elimination), 2^1=2 (1 var eliminated), etc. Non-power-of-2 groupings don't correspond to valid Boolean simplifications and would give incorrect results."
        }
    },
    {
        "id": "dl-comb-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Full adder: Sum = ?",
        "options": [
            "A + B + Cin",
            "(A⊕B)·Cin",
            "A · B · Cin",
            "A ⊕ B ⊕ Cin"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Full adder sum: Sum = A ⊕ B ⊕ Cin. XOR of all three inputs gives 1 when odd number of inputs are 1. Cout = A·B + Cin·(A⊕B) = majority function (1 when 2+ inputs are 1). Full adder adds three bits, producing 2-bit result (Sum is LSB, Cout is MSB).",
            "formula": "$Sum = A \\oplus B \\oplus C_{in}$"
        }
    },
    {
        "id": "dl-comb-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "n-bit ripple carry adder uses how many full adders?",
        "options": [
            "2n",
            "n+1",
            "n",
            "n-1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "n-bit addition requires n full adders, one for each bit position. Carry ripples from LSB (FA0) through each stage to MSB (FAn-1). First stage can use half adder if no initial carry. The Cout of the final stage indicates overflow in unsigned addition."
        }
    },
    {
        "id": "dl-comb-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Delay of n-bit ripple carry adder is O(?)",
        "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Ripple carry adder: carry must propagate through all n stages sequentially. Worst case (adding 11...1 + 00...1): carry ripples from bit 0 to bit n-1. Each full adder has gate delay, so total delay = n × (single FA delay) = O(n). This is the main disadvantage of ripple carry."
        }
    },
    {
        "id": "dl-comb-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Carry lookahead adder has delay O(?)",
        "options": [
            "O(n²)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CLA computes all carry bits in parallel using generate (G) and propagate (P) signals. Carries are computed as: Ci = Gi + Pi·Ci-1 = Gi + Pi·Gi-1 + Pi·Pi-1·Ci-2... Pre-computing these eliminates rippling. With hierarchical CLA, delay grows as O(log n). Much faster for wide additions."
        }
    },
    {
        "id": "dl-comb-008",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A 2-to-1 multiplexer has:",
        "options": [
            "2 data inputs, 1 select",
            "1 data input, 1 select",
            "2 data inputs, 2 selects",
            "4 data inputs, 2 selects"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "2:1 MUX: 2 data inputs (I0, I1), 1 select line (S), 1 output (Y). Y = S'·I0 + S·I1. When S=0, output=I0; when S=1, output=I1. MUX acts as a programmable switch. Can implement any 2-variable function by hardwiring data inputs appropriately."
        }
    },
    {
        "id": "dl-comb-009",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "2^n-to-1 multiplexer uses n select lines and has:",
        "options": [
            "2^n data inputs",
            "n data inputs",
            "n² data inputs",
            "2n data inputs"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "A 2^n:1 MUX has 2^n data inputs selected by n select lines. The select lines form an n-bit binary number (0 to 2^n-1) that determines which input passes to output. Y = Σ(Ik · mk(S)), where mk is the minterm of select lines corresponding to input k.",
            "formula": "$Data\\ inputs = 2^n$"
        }
    },
    {
        "id": "dl-seq-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "T flip-flop (toggle flip-flop): when T=1, Q(next) = ?",
        "options": [
            "Q",
            "Q'",
            "0",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "T flip-flop: when T=1, output toggles (Q becomes Q'). When T=0, output holds. Characteristic: Q(n+1) = T⊕Q. Ideal for counters: connect T=1 for continuous toggling, creating a divide-by-2 frequency divider. Ripple counter: chain T flip-flops with T=1.",
            "formula": "$Q_{n+1} = T \\oplus Q = Q'$ when T=1"
        }
    },
    {
        "id": "dl-seq-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "An n-bit counter can count from 0 to:",
        "options": [
            "2^n - 1",
            "n-1",
            "2^n",
            "n"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "n-bit counter has 2^n states: 0 to 2^n-1. After reaching max (all 1s), it wraps to 0. Example: 4-bit counter: states 0000 to 1111 (0 to 15), so 16 states. Each flip-flop stores one bit of the count value.",
            "formula": "$Range: 0$ to $2^n - 1$"
        }
    },
    {
        "id": "dl-seq-008",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "A 4-bit counter can count from 0 to (max value):",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "4-bit counter max = 2^4 - 1 = 15. Binary 1111 = decimal 15. Count sequence: 0,1,2,...,14,15,0,1,... (wraps around). For decimal counting (0-9), use mod-10 counter with reset logic after 9.",
            "formula": "$2^4 - 1 = 15$"
        }
    },
    {
        "id": "dl-seq-009",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Sequential Circuits",
        "question": "A mod-N counter requires minimum how many flip-flops?",
        "options": [
            "⌈log₂N⌉",
            "N-1",
            "N",
            "⌊log₂N⌋"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Minimum flip-flops = ⌈log₂N⌉ (ceiling of log base 2). This is the minimum bits needed to represent N distinct states. For N=10: ⌈log₂10⌉ = ⌈3.32⌉ = 4 FFs (even though some states are unused). For N=16: ⌈log₂16⌉ = 4 FFs exactly.",
            "formula": "$FFs = \\lceil\\log_2(N)\\rceil$"
        }
    },
    {
        "id": "dl2-minmax-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A minterm is a product term where function output is:",
        "options": [
            "0",
            "X",
            "1",
            "Either 0 or 1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A minterm is a product (AND) term containing every variable (complemented or not) that evaluates to 1 for exactly one input combination. Minterms are the building blocks of SOP form. For n variables, minterm mi = 1 only when inputs form binary number i. Example: m3 for 2 variables = AB (inputs 11).",
            "formula": "Minterm $m_i = 1$ only for input combination $i$"
        }
    },
    {
        "id": "dl2-minmax-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A maxterm is a sum term where function output is:",
        "options": [
            "0",
            "1",
            "Either 0 or 1",
            "X"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "A maxterm is a sum (OR) term containing every variable that evaluates to 0 for exactly one input combination. Maxterms are the building blocks of POS form. Maxterm Mi = 0 only when inputs form binary number i. Example: M3 for 2 variables = A'+B' (outputs 0 only when AB=11).",
            "formula": "Maxterm $M_i = 0$ only for input combination $i$"
        }
    },
    {
        "id": "dl2-minmax-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "In SOP form, we OR the minterms where output is:",
        "options": [
            "Don't care",
            "All values",
            "0",
            "1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SOP (Sum of Products) = OR of minterms where function output is 1. Look at truth table, find all rows where f=1, write the minterm for each, OR them together. Example: if f=1 for inputs 01 and 11, then f = m1 + m3 = A'B + AB = B(A'+A) = B.",
            "formula": "$f = \\sum m_i$ for all $i$ where $f(i) = 1$"
        }
    },
    {
        "id": "dl2-minmax-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "In POS form, we AND the maxterms where output is:",
        "options": [
            "Don't care",
            "0",
            "All values",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "POS (Product of Sums) = AND of maxterms where function output is 0. Find all rows where f=0, write the maxterm for each, AND them. If f=0 for inputs 00 and 10, then f = M0·M2 = (A+B)(A'+B). POS and SOP are dual representations of the same function.",
            "formula": "$f = \\prod M_i$ for all $i$ where $f(i) = 0$"
        }
    },
    {
        "id": "dl2-minmax-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "For 2 variables x,y, if x=0,y=0, the minterm m₀ = ?",
        "options": [
            "xy",
            "x'y'",
            "xy'",
            "x'y"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "For minterm: use complemented form where variable = 0, uncomplemented where = 1. For x=0, y=0 (binary 00 = decimal 0): m0 = x'·y'. This product equals 1 only when x=0 AND y=0. For m1 (x=0,y=1): x'y. For m2 (x=1,y=0): xy'. For m3 (x=1,y=1): xy.",
            "formula": "$m_0 = x'y'$"
        }
    },
    {
        "id": "dl2-minmax-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "For 2 variables, maxterm M₀ (x=0,y=0) = ?",
        "options": [
            "x'+y",
            "x'+y'",
            "x+y'",
            "x+y"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "For maxterm: opposite of minterm - use uncomplemented where variable = 0, complemented where = 1. For x=0, y=0: M0 = x + y. This sum equals 0 only when x=0 AND y=0 (both terms are 0). Relationship: Mi = (mi)' and mi = (Mi)'. Maxterm is complement of corresponding minterm.",
            "formula": "$M_0 = x + y$"
        }
    },
    {
        "id": "dl2-minmax-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "If f = Σm(3,5,6,7), then f' = ?",
        "options": [
            "Σm(3,5,6,7)",
            "Σm(0,1,2,4)",
            "ΠM(3,5,6,7)",
            "ΠM(0,1,2,4)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Complement of f: swap 1s and 0s in truth table. f = Σm(3,5,6,7) means f=1 for these minterms. So f'=1 for remaining minterms: f' = Σm(0,1,2,4). For 3-variable function, indices 0-7, so f uses {3,5,6,7}, f' uses {0,1,2,4}. Also f' = ΠM(3,5,6,7).",
            "formula": "$f' = \\sum m(remaining\\ indices)$"
        }
    },
    {
        "id": "dl2-minmax-008",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "f = Σm(3,5,6,7) is equivalent to f = ?",
        "options": [
            "ΠM(3,5,6,7)",
            "ΠM(0,1,2,4)",
            "Σm(0,1,2,4)",
            "Cannot convert"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Converting SOP to POS: use complementary indices. f = Σm(3,5,6,7) = ΠM(0,1,2,4). Where f=1 (minterms), it's NOT where f=0 (maxterms). The maxterms are for indices where f=0. Both forms represent the same function, just different canonical representations.",
            "formula": "$\\sum m(indices) = \\prod M(remaining\\ indices)$"
        }
    },
    {
        "id": "dl2-kmap-001",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A 5-variable K-map has how many cells?",
        "correctAnswer": 32,
        "tolerance": 0,
        "explanation": {
            "solution": "K-map has 2^n cells for n variables. 5 variables: 2^5 = 32 cells. A 5-variable K-map is typically drawn as two adjacent 4-variable K-maps (16+16), one for A=0 and one for A=1. Cells in corresponding positions of the two maps are also considered adjacent. Beyond 5 variables, K-maps become impractical.",
            "formula": "$Cells = 2^5 = 32$"
        }
    },
    {
        "id": "dl2-kmap-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "For 5-variable K-map, it is drawn as two 4-variable maps corresponding to:",
        "options": [
            "First variable = 0 and 1",
            "Cannot be split",
            "Last variable = 0 and 1",
            "Middle variable = 0 and 1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "5-variable K-map: split on first (MSB) variable into two 4-variable maps. Left map: A=0, right map: A=1. Adjacency includes: normal 4-var adjacency within each map, PLUS cells in same position between maps (they differ only in A). This allows grouping across both sub-maps."
        }
    },
    {
        "id": "dl2-kmap-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "In K-map, grouping 16 cells in a 4-variable map gives:",
        "options": [
            "Constant 0",
            "Constant 1",
            "Two variables",
            "One variable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Grouping all 16 cells (entire 4-variable K-map) eliminates all 4 variables, leaving constant 1. This means f=1 for ALL input combinations - the function is always true. Similarly, if no cells contain 1, f = constant 0. A group covering the whole map indicates a tautology.",
            "formula": "$2^4 = 16$ cells → 4 eliminated → constant"
        }
    },
    {
        "id": "dl2-kmap-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A Prime Implicant (PI) is:",
        "options": [
            "Any product term",
            "Smallest grouping",
            "Largest possible grouping that gives a product term",
            "Only single cell"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Prime Implicant (PI): a product term that cannot be combined with another term to form a larger group. It's a maximal group of 1s (or don't cares) in K-map - you cannot expand it further. A function may have multiple PIs. The minimal cover uses fewest PIs that cover all minterms."
        }
    },
    {
        "id": "dl2-kmap-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "An Essential Prime Implicant (EPI) is a PI that:",
        "options": [
            "Covers at least one minterm not covered by any other PI",
            "Is the smallest PI",
            "Can be removed",
            "Contains all 1s"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Essential Prime Implicant (EPI): a PI that is the ONLY PI covering at least one minterm. EPIs MUST be included in any minimal solution. If a 1 in K-map can only be covered by one PI, that PI is essential. After selecting all EPIs, remaining 1s are covered by choosing from non-essential PIs."
        }
    },
    {
        "id": "dl2-kmap-006",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "A redundant group in K-map is one where:",
        "options": [
            "It contains all 0s",
            "All 1s are already covered by other groups",
            "It is a single cell",
            "It cannot be formed"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Redundant group: every 1 it covers is already covered by other selected groups. It can be eliminated without affecting the function. Optimal minimization identifies and excludes redundant groups. In contrast, EPIs are never redundant - they cover at least one 1 that no other PI covers."
        }
    },
    {
        "id": "dl2-kmap-007",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Implicant of a function is any product term for which output is:",
        "options": [
            "Always 1 or don't care",
            "Only don't care",
            "Only 1",
            "Always 0"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Implicant: any product term P such that P=1 implies f=1 (P 'implies' f). In other words, wherever P is true, the function is true (or don't care). Every minterm where f=1 is an implicant. Larger groups of adjacent 1s/don't-cares form larger implicants. Prime implicants are maximal implicants."
        }
    },
    {
        "id": "dl2-dual-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Duality theorem: to get dual of expression, swap:",
        "options": [
            "Complement all variables",
            "AND↔OR, 0↔1, keep literals",
            "0s and 1s only",
            "AND and OR only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Duality: interchange AND↔OR and 0↔1, but leave variables unchanged (don't complement them). If a Boolean equation is valid, its dual is also valid. Example: dual of (A+B)·C = 0 is (A·B)+C = 1. Note: dual ≠ complement. Complement also inverts each variable.",
            "formula": "Dual: $+$ ↔ $\\cdot$, $0$ ↔ $1$"
        }
    },
    {
        "id": "dl2-dual-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Boolean Algebra",
        "question": "Dual of (A + B·C) is:",
        "options": [
            "A + B + C",
            "(A · B) + C",
            "A · (B + C)",
            "A' + B'·C'"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Apply duality: swap + with · and vice versa. (A + B·C) has OR between A and (B·C), with AND inside. Dual: A · (B + C) - AND between A and (B+C), with OR inside. Precedence and grouping follow the same structure, just with swapped operators.",
            "formula": "$(A + BC)$ → $A(B + C)$"
        }
    },
    {
        "id": "dl2-sub-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Half subtractor outputs are:",
        "options": [
            "Difference and Borrow",
            "Only Difference",
            "Only Borrow",
            "Sum and Carry"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Half subtractor computes A - B with two outputs: Difference (D) and Borrow-out (Bout). D = A⊕B (1 when A≠B), Bout = A'·B (1 when we need to borrow: A=0, B=1). Similar to half adder but borrow logic differs from carry. Can be built with XOR and AND(with A inverted).",
            "formula": "$D = A \\oplus B$, $B_{out} = A'B$"
        }
    },
    {
        "id": "dl2-sub-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Half subtractor: Difference D = ?, Borrow B_out = ?",
        "options": [
            "D = A⊕B, Bout = A'B",
            "D = A·B, Bout = A⊕B",
            "D = A+B, Bout = A'B",
            "D = A⊕B, Bout = AB"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Half subtractor (A - B): Difference D = A ⊕ B (same as half adder sum). Borrow Bout = A'·B (need to borrow when A=0 and B=1). Compare to half adder carry = A·B. The asymmetry (A' vs A) reflects that subtraction is not commutative.",
            "formula": "$D = A \\oplus B$, $B_{out} = A'B$"
        }
    },
    {
        "id": "dl2-sub-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Full subtractor has how many inputs?",
        "options": [
            "2",
            "1",
            "3",
            "4"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Full subtractor has 3 inputs: A (minuend), B (subtrahend), and Bin (borrow from previous stage). Outputs: D (difference) and Bout (borrow out). Computes A - B - Bin. Essential for multi-bit subtraction by cascading full subtractors like full adders are cascaded for addition."
        }
    },
    {
        "id": "dl2-sub-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Full subtractor: Difference D = ?",
        "options": [
            "A + B + Bin",
            "AB + Bin",
            "A ⊕ B ⊕ Bin",
            "A'B'Bin"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Full subtractor: D = A ⊕ B ⊕ Bin (XOR of all three inputs, same as full adder sum). Bout = A'B + A'Bin + BBin = A'B + Bin(A'+ B) = A'B + Bin(A⊕B)'. The difference is 1 when odd number of inputs are 1, just like the sum in a full adder.",
            "formula": "$D = A \\oplus B \\oplus B_{in}$"
        }
    },
    {
        "id": "dl2-cla-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Carry Generate function G = ?",
        "options": [
            "A + B",
            "A' · B'",
            "A ⊕ B",
            "A · B"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Carry Generate (G): G = A·B. A carry is 'generated' when BOTH inputs are 1, regardless of incoming carry. Even if Cin=0, the stage produces Cout=1. This is one component of CLA - the carry that's definitely produced locally, independent of earlier stages.",
            "formula": "$G = A \\cdot B$"
        }
    },
    {
        "id": "dl2-cla-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Carry Propagate function P = ?",
        "options": [
            "A + B",
            "A' · B'",
            "A ⊕ B",
            "A · B"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Carry Propagate (P): P = A ⊕ B. A carry is 'propagated' when exactly one input is 1. If Cin=1 arrives, it passes through to become Cout=1. If Cin=0, then Cout=0. The XOR indicates the 'pass-through' condition. Note: some texts use P = A+B, which also works but is less precise.",
            "formula": "$P = A \\oplus B$"
        }
    },
    {
        "id": "dl2-cla-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "In CLA, Cout (C_{n+1}) = ?",
        "options": [
            "G + P",
            "G · Cin + P",
            "G + P·Cin",
            "G · P"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CLA carry equation: Cout = G + P·Cin. Carry out occurs if: (1) carry is Generated locally (G=1), OR (2) carry is Propagated from input (P=1 AND Cin=1). Expanding recursively: C1 = G0 + P0C0, C2 = G1 + P1G0 + P1P0C0, etc. All carries computed in parallel.",
            "formula": "$C_{out} = G + P \\cdot C_{in}$"
        }
    },
    {
        "id": "dl2-cla-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "CLA computes all carries simultaneously, reducing delay to:",
        "options": [
            "O(log n)",
            "O(n²)",
            "O(n)",
            "O(1)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CLA computes all carry bits in parallel using multi-level logic. For n bits: basic CLA has O(n) fan-in and O(1) depth, but practical implementations use hierarchical CLA with O(log n) depth. Compare to ripple carry's O(n) sequential delay. The tradeoff is increased logic complexity and area.",
            "formula": "CLA delay: $O(\\log n)$ vs ripple: $O(n)$"
        }
    },
    {
        "id": "dl2-comp-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A 1-bit comparator has how many outputs?",
        "options": [
            "3",
            "4",
            "2",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "1-bit comparator compares two bits A and B, producing 3 outputs: A<B, A=B, A>B. Exactly one output is 1 at any time. For multi-bit comparators, these three conditions are cascaded: start from MSB, propagate comparison result down. Some designs also have cascade inputs for chaining.",
            "formula": "Outputs: $A<B$, $A=B$, $A>B$"
        }
    },
    {
        "id": "dl2-comp-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "For 1-bit comparator, A=B output = ?",
        "options": [
            "A · B",
            "A ⊕ B",
            "A + B",
            "(A ⊕ B)'"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A equals B when both are 0 or both are 1. This is the XNOR function: (A⊕B)' = A'B' + AB = 1 when inputs are same. XOR gives 1 when different, so its complement gives 1 when same. XNOR is also called equivalence or coincidence gate.",
            "formula": "$A = B \\Rightarrow (A \\oplus B)' = A'B' + AB$"
        }
    },
    {
        "id": "dl2-comp-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "For 1-bit comparator, A > B output = ?",
        "options": [
            "AB'",
            "AB",
            "A'B",
            "A ⊕ B"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "A > B only when A=1 and B=0. This is exactly the function AB' (A AND NOT B). When A=1,B=0: AB' = 1·1 = 1. All other cases: AB' = 0. Simple 2-input gate with B inverted before AND. For multi-bit: compare MSB first, use lower bits only if MSBs equal.",
            "formula": "$A > B \\Rightarrow AB'$"
        }
    },
    {
        "id": "dl2-comp-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "For 1-bit comparator, A < B output = ?",
        "options": [
            "A'B",
            "AB",
            "A ⊕ B",
            "AB'"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "A < B only when A=0 and B=1. This is A'B (NOT A AND B). When A=0,B=1: A'B = 1·1 = 1. Symmetric to A>B case with roles swapped. Together: A>B = AB', A<B = A'B, A=B = (A⊕B)'. These three are mutually exclusive and exhaustive.",
            "formula": "$A < B \\Rightarrow A'B$"
        }
    },
    {
        "id": "dl2-mux-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A 4:1 MUX output Y = ?",
        "options": [
            "I₀S₁'S₀' + I₁S₁'S₀ + I₂S₁S₀' + I₃S₁S₀",
            "I₀S₀ + I₁S₁",
            "I₀ · I₁ · I₂ · I₃",
            "I₀ + I₁ + I₂ + I₃"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "4:1 MUX with 4 data inputs (I0-I3) and 2 select lines (S1,S0): Each input is ANDed with its corresponding minterm of select lines, then all are ORed. Y = I0·S1'S0' + I1·S1'S0 + I2·S1S0' + I3·S1S0. When S1S0 = 10 (binary 2), only I2 passes through.",
            "formula": "$Y = \\sum_{k=0}^{3} I_k \\cdot m_k(S_1,S_0)$"
        }
    },
    {
        "id": "dl2-mux-002",
        "type": "NAT",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "To implement 32:1 MUX using 2:1 MUX, number of 2:1 MUX needed is 2^n - 1 = ?",
        "correctAnswer": 31,
        "tolerance": 0,
        "explanation": {
            "solution": "Building 2^n:1 MUX from 2:1 MUXes follows a tree structure. Level 1: 16 MUXes (pairs of 32 inputs). Level 2: 8 MUXes. Level 3: 4. Level 4: 2. Level 5: 1. Total = 16+8+4+2+1 = 31 = 2^5 - 1. General formula for 2^n:1 MUX: need 2^n - 1 two-input MUXes.",
            "formula": "$2^5 - 1 = 31$ MUXes"
        }
    },
    {
        "id": "dl2-mux-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Implementing any n-variable function using MUX requires:",
        "options": [
            "2^n:1 MUX with n select lines",
            "Cannot be done",
            "Both approaches work",
            "2^(n-1):1 MUX with last variable as data input"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Two methods: (1) 2^n:1 MUX with all n variables as select lines, data inputs = 0 or 1 based on truth table. (2) 2^(n-1):1 MUX with n-1 variables as select, last variable and its functions (0, 1, X, X') as data inputs. Second method halves the MUX size but requires more analysis."
        }
    },
    {
        "id": "dl2-dec-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "2-to-4 decoder: Y₀ = ?, Y₁ = ?, Y₂ = ?, Y₃ = ?",
        "options": [
            "AB, AB', A'B, A'B'",
            "A'B', A'B, AB', AB",
            "Cannot determine",
            "A+B, A'+B, A+B', A'+B'"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "2-to-4 decoder with inputs A,B (A is MSB): Y0 = A'B' (AB=00), Y1 = A'B (AB=01), Y2 = AB' (AB=10), Y3 = AB (AB=11). Each output is the minterm corresponding to its index. Exactly one output is 1 at any time. Each output implements one minterm - decoder generates all minterms.",
            "formula": "$Y_i = m_i(A,B)$"
        }
    },
    {
        "id": "dl2-dec-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A decoder can be used to implement:",
        "options": [
            "Only OR functions",
            "Only AND functions",
            "Any Boolean function",
            "Only simple functions"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Decoder generates all minterms. Any Boolean function is a sum of minterms (SOP). Simply OR together the decoder outputs corresponding to minterms where function = 1. Example: f = Σm(1,3) using 2-to-4 decoder: f = Y1 + Y3. One decoder + one OR gate implements any function of the same variables."
        }
    },
    {
        "id": "dl2-dec-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Priority encoder gives priority to:",
        "options": [
            "Random input",
            "All inputs equally",
            "Lower numbered inputs",
            "Higher numbered inputs"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Priority encoder: when multiple inputs are active, output encodes the HIGHEST-numbered (highest priority) active input. If I7 and I3 are both 1, output = 111 (binary 7). Standard convention: higher subscript = higher priority. A 'valid' output indicates at least one input is active. Useful for interrupt handling."
        }
    },
    {
        "id": "dl2-dec-004",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Octal-to-Binary encoder has:",
        "options": [
            "8 inputs, 8 outputs",
            "3 inputs, 3 outputs",
            "8 inputs, 3 outputs",
            "3 inputs, 8 outputs"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Octal-to-Binary encoder: 8 octal input lines (0-7), 3 binary output lines. When input i is active, outputs show binary representation of i. Opposite of 3-to-8 decoder. Only one input should be active; for multiple active inputs, use priority encoder. Used for keypads, input encoding.",
            "formula": "8 inputs → 3 outputs ($8 = 2^3$)"
        }
    },
    {
        "id": "dl2-dec-005",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Decimal-to-BCD encoder has:",
        "options": [
            "10 inputs, 10 outputs",
            "10 inputs, 4 outputs",
            "4 inputs, 10 outputs",
            "4 inputs, 4 outputs"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Decimal-to-BCD encoder: 10 decimal inputs (0-9), 4 BCD output bits. When decimal key i is pressed, outputs show BCD code for i (0000 to 1001). Only 10 of 16 possible 4-bit codes are used (BCD is inefficient but human-friendly). Used in calculators, digital displays.",
            "formula": "10 inputs → 4 outputs"
        }
    },
    {
        "id": "dl2-code-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "BCD to Excess-3 conversion: add what to BCD?",
        "options": [
            "2",
            "3",
            "1",
            "4"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Excess-3 code = BCD + 3 (adding binary 0011). BCD 0 (0000) → Excess-3 (0011). BCD 9 (1001) → Excess-3 (1100). Excess-3 is self-complementing: 9's complement of a digit is obtained by inverting all bits. This simplifies BCD subtraction. Range: 0011 to 1100 for digits 0-9.",
            "formula": "Excess-3 = BCD + 0011"
        }
    },
    {
        "id": "dl2-code-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Gray code has the property that adjacent codes differ in:",
        "options": [
            "2 bits",
            "All bits",
            "1 bit",
            "0 bits"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Gray code (reflected binary code): consecutive values differ in exactly 1 bit. 00→01→11→10→00 for 2-bit Gray. This property minimizes switching errors (only one bit changes at a time). Used in: K-map labeling, rotary encoders, error reduction in analog-to-digital conversion, and state assignment to reduce glitches."
        }
    },
    {
        "id": "dl2-code-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Binary to Gray conversion: Gᵢ = ?",
        "options": [
            "Bᵢ · Bᵢ₊₁",
            "Bᵢ'",
            "Bᵢ ⊕ Bᵢ₊₁",
            "Bᵢ + Bᵢ₊₁"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Binary to Gray conversion: Gn = Bn (MSB same), Gi = Bi ⊕ Bi+1 (XOR adjacent binary bits). Alternatively: G = B XOR (B >> 1), XOR binary with itself shifted right. Gray to Binary: Bn = Gn, Bi = Bi+1 ⊕ Gi (requires XOR chain from MSB down).",
            "formula": "$G_i = B_i \\oplus B_{i+1}$, $G_n = B_n$"
        }
    },
    {
        "id": "dl2-delay-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "If XOR has 2ns delay and AND has 1.5ns, full adder using 2 half adders + OR has delay:",
        "options": [
            "2 × 3 = 6 ns",
            "2 + 1.5 + 1 = 4.5 ns",
            "2 + 2 + 1 = 5 ns",
            "max(2, 1.5, 1) = 2 ns"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Full adder from 2 half adders + OR: First HA (XOR + AND), second HA (XOR + AND), then OR. Critical path for Sum: XOR → XOR = 2 + 2 = 4ns. Critical path for Carry: XOR → AND → OR or AND → OR. Assuming OR=1ns: XOR(2) → AND(1.5) → OR(1) = 4.5ns or first AND(1.5) → OR(1) = 2.5ns. Taking max critical path ≈ 5ns with XOR path.",
            "formula": "Critical path: XOR → XOR → OR or XOR → AND → OR"
        }
    },
    {
        "id": "dl2-delay-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Glitches (hazards) in circuits are caused by:",
        "options": [
            "Very long delays",
            "Different delays in converging paths",
            "No delays",
            "Equal delays in all paths"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hazards/glitches occur when signals traveling different paths to the same gate arrive at different times due to unequal delays. The temporary incorrect output during transition is a glitch. Static hazard: output should stay constant but glitches. Dynamic hazard: output should change once but changes multiple times. Avoided by adding redundant logic or careful timing."
        }
    },
    {
        "id": "dl2-7seg-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "A seven-segment display decoder has:",
        "options": [
            "7 inputs, 7 outputs",
            "7 inputs, 4 outputs",
            "4 inputs, 4 outputs",
            "4 inputs, 7 outputs"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Seven-segment decoder: 4-bit BCD input (0-9, sometimes 0-F for hex), 7 outputs (a-g segments). Each output controls one LED segment. For digit '1': only segments b,c are on. For '8': all segments on. The decoder implements 7 separate Boolean functions, one per segment, based on the 4 input bits."
        }
    },
    {
        "id": "dl2-par-001",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Even parity bit is set such that total number of 1s (including parity) is:",
        "options": [
            "Always 0",
            "Always 1",
            "Odd",
            "Even"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Even parity: parity bit is chosen so total 1s (data + parity) is EVEN. If data has odd number of 1s, parity = 1 (making total even). If data has even 1s, parity = 0. Detects single-bit errors: any single bit flip changes parity from even to odd. Used in memory (ECC), communication protocols."
        }
    },
    {
        "id": "dl2-par-002",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "Parity generator can be implemented using:",
        "options": [
            "OR gates only",
            "XOR gates chain",
            "NAND gates only",
            "AND gates only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "XOR of all bits gives even parity bit. XOR outputs 1 when odd number of inputs are 1. If data has odd 1s, XOR = 1, adding this makes total even. If data has even 1s, XOR = 0, total stays even. For n data bits: P = D0 ⊕ D1 ⊕ ... ⊕ Dn-1. Tree structure of XORs minimizes delay."
        }
    },
    {
        "id": "dl2-par-003",
        "type": "MCQ",
        "topic": "digital-logic",
        "subtopic": "Combinational Circuits",
        "question": "For n data bits, even parity bit P = ?",
        "options": [
            "NOT(D₀)",
            "D₀ AND D₁ AND ... AND Dₙ₋₁",
            "D₀ XOR D₁ XOR ... XOR Dₙ₋₁",
            "D₀ OR D₁ OR ... OR Dₙ₋₁"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Even parity bit P = XOR of all data bits. P = D0 ⊕ D1 ⊕ D2 ⊕ ... ⊕ Dn-1. This generates a bit that, when included with data, makes total 1-count even. For odd parity: P = (D0 ⊕ D1 ⊕ ... ⊕ Dn-1)' or equivalently add 1 to even parity. Parity checker: XOR all bits including parity, result=0 means no error detected.",
            "formula": "$P = D_0 \\oplus D_1 \\oplus ... \\oplus D_{n-1}$"
        }
    }
]);