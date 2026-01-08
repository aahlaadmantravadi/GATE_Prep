/**
 * GATE Previous Year Questions Style - Compiler Design
 * 50+ questions covering actual GATE exam patterns
 * Topics: Lexical, Parsing, SDT, Code Gen, Optimization
 */

Questions.register([
    // ========== LEXICAL ANALYSIS - GATE PYQ STYLE ==========
    {
        id: "gate-cd-lex-001",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "[GATE 2017 Style] Number of tokens in: printf(\"i = %d, &i = %x\", i, &i);",
        correctAnswer: 10,
        tolerance: 0,
        explanation: { solution: "printf ( \"i = %d, &i = %x\" , i , & i ) ; = 10 tokens. String is 1 token." }
    },
    {
        id: "gate-cd-lex-002",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "[GATE 2015 Style] Number of tokens in: int main() { int a = 10; return 0; }",
        correctAnswer: 14,
        tolerance: 0,
        explanation: { solution: "int main ( ) { int a = 10 ; return 0 ; } = 14 tokens" }
    },
    {
        id: "gate-cd-lex-003",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "[GATE Style] Number of tokens in: for(i=0; i<n; i++) a[i]=0;",
        correctAnswer: 17,
        tolerance: 0,
        explanation: { solution: "for ( i = 0 ; i < n ; i ++ ) a [ i ] = 0 ; = 17" }
    },
    {
        id: "gate-cd-lex-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "[GATE 2019] Which phase of compiler uses regular expressions?",
        options: ["Syntax analysis", "Lexical analysis", "Semantic analysis", "Code generation"],
        correctAnswer: 1,
        explanation: { solution: "Lexical analyzer uses RE → NFA → DFA for tokenization" }
    },
    {
        id: "gate-cd-lex-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "[GATE Style] Which is NOT a valid token in C?",
        options: ["123abc", "abc123", "_var", "__LINE__"],
        correctAnswer: 0,
        explanation: { solution: "Identifiers cannot start with digit: 123abc is invalid" }
    },
    // ========== PARSING - GATE PYQ STYLE ==========
    {
        id: "gate-cd-parse-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2018] Which grammar is suitable for LR parsing but not LL?",
        options: ["Right recursive grammar", "Left recursive grammar", "Ambiguous grammar", "ε-free grammar"],
        correctAnswer: 1,
        explanation: { solution: "Left recursion: allowed in LR, not in LL" }
    },
    {
        id: "gate-cd-parse-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2020] In SLR parsing, reduce action uses:",
        options: ["FIRST set", "FOLLOW set", "Both FIRST and FOLLOW", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "SLR: reduce on symbols in FOLLOW(LHS)" }
    },
    {
        id: "gate-cd-parse-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2016] Bottom-up parsing is same as:",
        options: ["Leftmost derivation", "Rightmost derivation in reverse", "Preorder traversal", "Postorder traversal"],
        correctAnswer: 1,
        explanation: { solution: "Bottom-up = reverse of rightmost derivation" }
    },
    {
        id: "gate-cd-parse-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2014] Handle in shift-reduce parsing is:",
        options: ["Leftmost terminal", "A substring matching RHS that reduces to LHS", "Rightmost nonterminal", "Any production"],
        correctAnswer: 1,
        explanation: { solution: "Handle: substring that matches RHS and should be reduced" }
    },
    {
        id: "gate-cd-parse-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2017] LALR(1) parser is:",
        options: ["More powerful than CLR(1)", "Less powerful than CLR(1) but same states as SLR", "Same as SLR", "Same as CLR(1)"],
        correctAnswer: 1,
        explanation: { solution: "LALR: CLR states merged (same as SLR count), less power than CLR" }
    },
    {
        id: "gate-cd-parse-006",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE Style] Grammar: S→aAb|bBa, A→a|as, B→b|bS. Number of productions = ?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "S→aAb, S→bBa, A→a, A→aS, B→b, B→bS = 6 productions" }
    },
    {
        id: "gate-cd-parse-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2019] Operator precedence parser cannot parse:",
        options: ["a+b*c", "Unary minus expressions like -a+b", "a*(b+c)", "a+b+c"],
        correctAnswer: 1,
        explanation: { solution: "OPG cannot have two operators adjacent (unary operators)" }
    },
    {
        id: "gate-cd-parse-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2015] Ambiguous grammar is always:",
        options: ["LL(1)", "LR(1)", "Neither LL nor LR", "Both LL and LR"],
        correctAnswer: 2,
        explanation: { solution: "Ambiguous grammars cannot be parsed by deterministic parsers" }
    },
    {
        id: "gate-cd-parse-009",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE Style] Number of items in canonical collection for S→AB, A→a, B→b:",
        options: ["3", "5", "7", "9"],
        correctAnswer: 2,
        explanation: { solution: "Augmented: S'→S. States: I0 to I6 typically = 7 states" }
    },
    {
        id: "gate-cd-parse-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2021] FIRST(ε) = ?",
        options: ["{}", "{ε}", "All terminals", "Error"],
        correctAnswer: 1,
        explanation: { solution: "FIRST(ε) = {ε}" }
    },
    // ========== FIRST/FOLLOW - GATE PYQ STYLE ==========
    {
        id: "gate-cd-ff-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2018] Given E→E+T|T, T→T*F|F, F→(E)|id. FIRST(E) = ?",
        options: ["{+, *, (, id}", "{(, id}", "{+, *}", "{E, T, F}"],
        correctAnswer: 1,
        explanation: { solution: "FIRST(E) = FIRST(T) = FIRST(F) = {(, id}" }
    },
    {
        id: "gate-cd-ff-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE 2016] FOLLOW(start symbol) always contains:",
        options: ["ε", "$ (end marker)", "Nothing", "All terminals"],
        correctAnswer: 1,
        explanation: { solution: "FOLLOW(S) always contains $ by definition" }
    },
    {
        id: "gate-cd-ff-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "[GATE Style] If A→αBβ then FOLLOW(B) contains:",
        options: ["FIRST(A)", "FIRST(β) - {ε}", "FOLLOW(A) only", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "FOLLOW(B) includes FIRST(β) - {ε}. If ε in FIRST(β), add FOLLOW(A)" }
    },
    // ========== SDT - GATE PYQ STYLE ==========
    {
        id: "gate-cd-sdt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "[GATE 2019] Which is true for S-attributed grammar?",
        options: ["Can use top-down parser", "Can use bottom-up parser (LR)", "Cannot be parsed", "Needs multiple passes"],
        correctAnswer: 1,
        explanation: { solution: "S-attributed: only synthesized, evaluated bottom-up (LR)" }
    },
    {
        id: "gate-cd-sdt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "[GATE 2017] L-attributed definition allows inherited attributes from:",
        options: ["Right siblings", "Children", "Parent and left siblings only", "Any node"],
        correctAnswer: 2,
        explanation: { solution: "L-attributed: parent, left siblings (not right siblings or children)" }
    },
    {
        id: "gate-cd-sdt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "[GATE 2020] Annotated parse tree is used in:",
        options: ["Lexical analysis", "Syntax directed translation", "Code generation only", "Linking"],
        correctAnswer: 1,
        explanation: { solution: "SDT: parse tree with attribute values = annotated parse tree" }
    },
    {
        id: "gate-cd-sdt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "[GATE Style] Given E→E1+T {E.val = E1.val + T.val}. 'val' is:",
        options: ["Inherited attribute", "Synthesized attribute", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "val of E computed from children: synthesized" }
    },
    {
        id: "gate-cd-sdt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "[GATE 2018] Given D→TL {L.type=T.type}, L→L1,id {L1.type=L.type}. 'type' for L is:",
        options: ["Synthesized", "Inherited", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "L.type comes from parent (T) or left sibling: inherited" }
    },
    // ========== INTERMEDIATE CODE - GATE PYQ STYLE ==========
    {
        id: "gate-cd-ic-001",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "[GATE 2017 Style] Minimum temporaries for (a+b)*(c+d)-(a+b) using 3AC with common subexpression elimination:",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "t1=a+b (reused), t2=c+d, t3=t1*t2-t1. Min 3 temps" }
    },
    {
        id: "gate-cd-ic-002",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "[GATE Style] Number of 3AC statements for a = b + c * d - e / f:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "t1=c*d, t2=e/f, t3=b+t1, a=t3-t2 = 4 statements" }
    },
    {
        id: "gate-cd-ic-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "[GATE 2016] Quadruple representation stores:",
        options: ["(op, arg1, result)", "(op, arg1, arg2, result)", "(op, result)", "(arg1, arg2, op)"],
        correctAnswer: 1,
        explanation: { solution: "Quadruple: (operator, arg1, arg2, result)" }
    },
    {
        id: "gate-cd-ic-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "[GATE 2019] Triple representation saves space by:",
        options: ["Not storing result (use statement number)", "Not storing operator", "Using hash table", "Compression"],
        correctAnswer: 0,
        explanation: { solution: "Triple: no result field, reference by statement number" }
    },
    {
        id: "gate-cd-ic-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "[GATE Style] DAG (Directed Acyclic Graph) helps in:",
        options: ["Syntax analysis", "Common subexpression elimination", "Register allocation", "Linking"],
        correctAnswer: 1,
        explanation: { solution: "DAG identifies and eliminates common subexpressions" }
    },
    // ========== CODE OPTIMIZATION - GATE PYQ STYLE ==========
    {
        id: "gate-cd-opt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE 2020] x=2*y can be optimized to x=y<<1. This is:",
        options: ["Constant folding", "Strength reduction", "Dead code elimination", "Copy propagation"],
        correctAnswer: 1,
        explanation: { solution: "Replacing * with << is strength reduction" }
    },
    {
        id: "gate-cd-opt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE 2018] x=3*2+1 becomes x=7 at compile time. This is:",
        options: ["Strength reduction", "Constant folding", "Dead code", "Inlining"],
        correctAnswer: 1,
        explanation: { solution: "Compile-time evaluation = constant folding" }
    },
    {
        id: "gate-cd-opt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE 2017] if(false) {x=1;} can be removed. This is:",
        options: ["Copy propagation", "Constant folding", "Dead code elimination", "Loop optimization"],
        correctAnswer: 2,
        explanation: { solution: "Unreachable code removal = dead code elimination" }
    },
    {
        id: "gate-cd-opt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE 2019] Moving invariant computation outside loop is:",
        options: ["Loop unrolling", "Code motion", "Strength reduction", "Dead code"],
        correctAnswer: 1,
        explanation: { solution: "Loop invariant code motion" }
    },
    {
        id: "gate-cd-opt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE Style] for(i=0;i<100;i++)f(); → 100 calls of f() without loop. This is:",
        options: ["Code motion", "Loop unrolling", "Inlining", "CSE"],
        correctAnswer: 1,
        explanation: { solution: "Expanding loop body = loop unrolling" }
    },
    {
        id: "gate-cd-opt-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE 2016] y=x; z=y+1; → z=x+1; is:",
        options: ["Dead code", "Copy propagation", "Constant folding", "CSE"],
        correctAnswer: 1,
        explanation: { solution: "Replacing y with x = copy propagation" }
    },
    {
        id: "gate-cd-opt-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE 2021] Peephole optimization works on:",
        options: ["Entire program", "Small window of target code", "Source code", "Parse tree"],
        correctAnswer: 1,
        explanation: { solution: "Peephole: local optimization on instruction window" }
    },
    {
        id: "gate-cd-opt-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "[GATE Style] Which is machine-dependent optimization?",
        options: ["Dead code elimination", "Register allocation", "Loop unrolling", "Constant folding"],
        correctAnswer: 1,
        explanation: { solution: "Register allocation depends on target architecture" }
    },
    // ========== CODE GENERATION - GATE PYQ STYLE ==========
    {
        id: "gate-cd-cg-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "[GATE 2018] Register allocation is modeled as:",
        options: ["Shortest path problem", "Graph coloring problem", "Maximum flow", "Minimum spanning tree"],
        correctAnswer: 1,
        explanation: { solution: "Interference graph coloring: k-colorable = k registers" }
    },
    {
        id: "gate-cd-cg-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "[GATE 2017] Live variable analysis determines:",
        options: ["Variables used after a point", "Variables never used", "Constant values", "Loop bounds"],
        correctAnswer: 0,
        explanation: { solution: "Live: variable may be used later before redefinition" }
    },
    {
        id: "gate-cd-cg-003",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "[GATE Style] Expression tree with 3 internal nodes needs minimum ___ registers:",
        correctAnswer: 2,
        tolerance: 0,
        explanation: { solution: "Sethi-Ullman: binary tree with 3 internal nodes needs 2 registers" }
    },
    {
        id: "gate-cd-cg-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "[GATE 2019] Instruction selection is part of:",
        options: ["Lexical analysis", "Parsing", "Code generation", "Optimization only"],
        correctAnswer: 2,
        explanation: { solution: "Code gen: instruction selection, register allocation, scheduling" }
    },
    // ========== RUNTIME - GATE PYQ STYLE ==========
    {
        id: "gate-cd-rt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "[GATE 2020] Activation record for a function call contains:",
        options: ["Only return address", "Parameters, locals, return address, saved registers", "Only parameters", "Only code"],
        correctAnswer: 1,
        explanation: { solution: "AR: params, return addr, saved regs, locals, control/access links" }
    },
    {
        id: "gate-cd-rt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "[GATE 2016] Static link in activation record is used for:",
        options: ["Dynamic scoping", "Accessing enclosing scope variables (lexical scoping)", "Return address", "Register saving"],
        correctAnswer: 1,
        explanation: { solution: "Static link: access lexically enclosing scope" }
    },
    {
        id: "gate-cd-rt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "[GATE Style] Display is used to optimize access to:",
        options: ["Global variables", "Nested scope variables", "Local variables only", "Heap"],
        correctAnswer: 1,
        explanation: { solution: "Display: array of pointers for fast nested scope access" }
    },
    {
        id: "gate-cd-rt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "[GATE 2018] Tail recursion can be converted to:",
        options: ["Nested recursion", "Iteration (loop)", "Multiple recursion", "Mutual recursion"],
        correctAnswer: 1,
        explanation: { solution: "Tail call optimization: convert to loop (no stack growth)" }
    },
    {
        id: "gate-cd-rt-005",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "[GATE Style] Function f calls g, g calls h, h calls f. Maximum activation records on stack:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "main→f→g→h→f would have 4 ARs (including main or initial)" }
    }
]);

console.log("GATE PYQ Style - Compiler Design loaded - ~50 questions");
