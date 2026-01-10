/**
 * Compiler Design COMPREHENSIVE - All Topics
 * Lexical Analysis, Parsing, SDT, Intermediate Code, Optimization
 */

Questions.register([
    // ========== COMPILER PHASES ==========
    {
        id: "cd3-phase-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "Number of phases in a typical compiler:",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: { solution: "6 phases: Lexical, Syntax, Semantic, ICG, Optimization, Code Gen" }
    },
    {
        id: "cd3-phase-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "Analysis phase of compiler includes:",
        options: ["Code optimization only", "Lexical, Syntax, Semantic analysis", "Code generation only", "None of these"],
        correctAnswer: 1,
        explanation: { solution: "Analysis (front-end): Lexical + Syntax + Semantic" }
    },
    {
        id: "cd3-phase-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "Synthesis phase of compiler includes:",
        options: ["Lexical analysis", "ICG, Optimization, Code Generation", "Parsing only", "Symbol table only"],
        correctAnswer: 1,
        explanation: { solution: "Synthesis (back-end): ICG + Optimization + Code Gen" }
    },
    // ========== LEXICAL ANALYSIS ==========
    {
        id: "cd3-lex-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lexeme is:",
        options: ["Internal representation", "Smallest unit of program (actual text)", "Token type", "Symbol table entry"],
        correctAnswer: 1,
        explanation: { solution: "Lexeme: actual text sequence. Token: internal representation" }
    },
    {
        id: "cd3-lex-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Types of tokens include:",
        options: ["Only identifiers", "Identifier, keyword, operator, literal, special symbol", "Only keywords", "Only operators"],
        correctAnswer: 1,
        explanation: { solution: "5 token types: identifier, keyword, operator, literal, special symbol" }
    },
    {
        id: "cd3-lex-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lexical analyzer is implemented using:",
        options: ["PDA", "DFA (from regular expression)", "Turing machine", "Stack"],
        correctAnswer: 1,
        explanation: { solution: "LA: Regular Expression → NFA → DFA → Lexer" }
    },
    {
        id: "cd3-lex-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Maximal munch rule means:",
        options: ["Read minimum characters", "Match longest prefix when ambiguous", "Ignore comments", "Error recovery"],
        correctAnswer: 1,
        explanation: { solution: "Longest prefix match: '==' chosen over '=' + '='" }
    },
    // ========== TOKEN COUNTING (NUMERICAL) ==========
    {
        id: "cd3-tok-001",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Number of tokens in: void main() { printf(\"gate\"); }",
        correctAnswer: 11,
        tolerance: 0,
        explanation: { solution: "void(1) main(1) ((1) )(1) {(1) printf(1) ((1) \"gate\"(1) )(1) ;(1) }(1) = 11" }
    },
    {
        id: "cd3-tok-002",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Number of tokens in: int x, *p; x = 10; p = &x; x++;",
        correctAnswer: 18,
        tolerance: 0,
        explanation: { solution: "int x , * p ; x = 10 ; p = & x ; x ++ ; = 18 tokens" }
    },
    {
        id: "cd3-tok-003",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Number of tokens in: int x; x = y; x == y;",
        correctAnswer: 11,
        tolerance: 0,
        explanation: { solution: "int(1) x(1) ;(1) x(1) =(1) y(1) ;(1) x(1) ==(1) y(1) ;(1) = 11" }
    },
    {
        id: "cd3-tok-004",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Number of tokens in: char ch = 'A';",
        correctAnswer: 5,
        tolerance: 0,
        explanation: { solution: "char(1) ch(1) =(1) 'A'(1) ;(1) = 5" }
    },
    {
        id: "cd3-tok-005",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Number of tokens in: char *p = \"gate\";",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "char(1) *(1) p(1) =(1) \"gate\"(1) ;(1) = 6" }
    },
    // ========== PARSING ==========
    {
        id: "cd3-parse-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Parser is implemented using:",
        options: ["DFA", "DPDA (Deterministic PDA)", "NFA", "Linear bounded automata"],
        correctAnswer: 1,
        explanation: { solution: "Parser = DPDA (handles CFG for programming languages)" }
    },
    {
        id: "cd3-parse-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LL(1) parser uses:",
        options: ["RMD", "LMD (Left to right, Leftmost derivation)", "Bottom-up", "Random"],
        correctAnswer: 1,
        explanation: { solution: "LL(1): Left-to-right scan, Leftmost derivation, 1 lookahead" }
    },
    {
        id: "cd3-parse-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LR(1) parser uses:",
        options: ["LMD", "Reverse of RMD (bottom-up)", "Only LMD", "No derivation"],
        correctAnswer: 1,
        explanation: { solution: "LR: Left-to-right, Rightmost derivation in Reverse" }
    },
    {
        id: "cd3-parse-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Hierarchy of LR parsers (weakest to strongest):",
        options: ["CLR < LALR < SLR", "SLR < LALR < CLR", "LALR < SLR < CLR", "All equal"],
        correctAnswer: 1,
        explanation: { solution: "Power: SLR(1) ⊂ LALR(1) ⊂ CLR(1)" }
    },
    {
        id: "cd3-parse-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LL(1) grammar cannot have:",
        options: ["Right recursion", "Left recursion or common prefix", "Production rules", "Terminals"],
        correctAnswer: 1,
        explanation: { solution: "LL(1): no left recursion, no common prefix (left factor)" }
    },
    {
        id: "cd3-parse-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FIRST set contains:",
        options: ["Variables", "Terminals that can start strings derived from symbol", "Only ε", "Only $"],
        correctAnswer: 1,
        explanation: { solution: "FIRST(X) = terminals that can begin strings derived from X" }
    },
    {
        id: "cd3-parse-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FOLLOW set contains:",
        options: ["Terminals only", "Terminals that can appear after a variable", "Variables", "Never contains $"],
        correctAnswer: 1,
        explanation: { solution: "FOLLOW(A) = terminals that can appear immediately after A" }
    },
    {
        id: "cd3-parse-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Grammar is LL(1) if for all A → α | β:",
        options: ["FIRST(α) ∩ FIRST(β) ≠ ∅", "FIRST(α) ∩ FIRST(β) = ∅ and other conditions", "Always LL(1)", "Never LL(1)"],
        correctAnswer: 1,
        explanation: { solution: "LL(1) condition: FIRST(α) ∩ FIRST(β) = ∅, and if ε in FIRST, check FOLLOW" }
    },
    {
        id: "cd3-parse-009",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Shift-Reduce conflict occurs when:",
        options: ["Two reduces possible", "Both shift and reduce possible in same state", "Only shift possible", "Neither possible"],
        correctAnswer: 1,
        explanation: { solution: "SR conflict: parser can't decide between shift and reduce" }
    },
    {
        id: "cd3-parse-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Reduce-Reduce conflict occurs when:",
        options: ["Two different reductions possible in same state", "Only one reduce", "Shift and reduce", "No conflict"],
        correctAnswer: 0,
        explanation: { solution: "RR conflict: multiple productions valid for reduction" }
    },
    {
        id: "cd3-parse-011",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Operator precedence grammar requires:",
        options: ["Two variables adjacent", "No two variables adjacent and no ε productions", "Always ε productions", "Only terminals"],
        correctAnswer: 1,
        explanation: { solution: "OPG: no VV adjacent, no ε, allows some ambiguous grammars" }
    },
    // ========== SYNTAX DIRECTED TRANSLATION ==========
    {
        id: "cd3-sdt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Synthesized attribute depends on:",
        options: ["Parent node", "Children nodes", "Siblings", "Root only"],
        correctAnswer: 1,
        explanation: { solution: "Synthesized: computed from children (bottom-up)" }
    },
    {
        id: "cd3-sdt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Inherited attribute depends on:",
        options: ["Children", "Parent and/or left siblings", "Right siblings only", "Only leaves"],
        correctAnswer: 1,
        explanation: { solution: "Inherited: from parent or left siblings (top-down/left-right)" }
    },
    {
        id: "cd3-sdt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "S-attributed grammar uses:",
        options: ["Only inherited attributes", "Only synthesized attributes", "Both equally", "No attributes"],
        correctAnswer: 1,
        explanation: { solution: "S-attributed: synthesized only, can use bottom-up parsing" }
    },
    {
        id: "cd3-sdt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "L-attributed grammar uses:",
        options: ["Only inherited", "Synthesized + restricted inherited (parent/left sibling)", "Only right sibling", "No attributes"],
        correctAnswer: 1,
        explanation: { solution: "L-attributed: synthesized + inherited from parent/left siblings" }
    },
    {
        id: "cd3-sdt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Relationship between S-attributed and L-attributed:",
        options: ["S ⊂ L (every S-attributed is L-attributed)", "L ⊂ S", "Equal", "Incomparable"],
        correctAnswer: 0,
        explanation: { solution: "Every S-attributed grammar is also L-attributed" }
    },
    {
        id: "cd3-sdt-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "S-attributed evaluation order:",
        options: ["Pre-order", "Post-order (reverse RMD)", "In-order", "Random"],
        correctAnswer: 1,
        explanation: { solution: "S-attributed: bottom-up (reverse of RMD)" }
    },
    {
        id: "cd3-sdt-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "L-attributed evaluation order:",
        options: ["Post-order", "In-order (depth-first left-to-right)", "Reverse pre-order", "Random"],
        correctAnswer: 1,
        explanation: { solution: "L-attributed: in-order traversal (topological)" }
    },
    // ========== INTERMEDIATE CODE ==========
    {
        id: "cd3-ic-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "3-address code has at most:",
        options: ["2 addresses per instruction", "3 addresses per instruction (including LHS)", "4 addresses", "1 address"],
        correctAnswer: 1,
        explanation: { solution: "3AC: at most 3 addresses (e.g., t = a + b)" }
    },
    {
        id: "cd3-ic-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "DAG (Directed Acyclic Graph) is used for:",
        options: ["Syntax errors", "Eliminating common subexpressions", "Lexical analysis", "Parsing only"],
        correctAnswer: 1,
        explanation: { solution: "DAG: common subexpression elimination" }
    },
    {
        id: "cd3-ic-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "SSA (Static Single Assignment) means:",
        options: ["Multiple assignments to same variable", "Each variable assigned exactly once", "No assignments", "Dynamic assignment"],
        correctAnswer: 1,
        explanation: { solution: "SSA: every variable has single definition point" }
    },
    {
        id: "cd3-ic-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Basic block starts with:",
        options: ["Any instruction", "Leader (first instruction or target of jump)", "Only return", "Only function call"],
        correctAnswer: 1,
        explanation: { solution: "Basic block: starts with leader, ends with jump/return" }
    },
    // ========== 3AC NUMERICAL ==========
    {
        id: "cd3-3ac-001",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Minimum temporaries for expression (a-b)*(c+d)+(a-b) using 3AC with DAG?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "t1=a-b, t2=c+d, t3=t1*t2+t1 (reuse t1). Minimum 3 temps" }
    },
    // ========== CODE OPTIMIZATION ==========
    {
        id: "cd3-opt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Constant folding means:",
        options: ["Folding code", "Evaluating constant expressions at compile time", "Removing constants", "Adding constants"],
        correctAnswer: 1,
        explanation: { solution: "x = 2*3+5 → x = 11 at compile time" }
    },
    {
        id: "cd3-opt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Copy propagation replaces:",
        options: ["Constants with variables", "Uses of variable with its definition", "Functions with code", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "x=y; z=x+1 → z=y+1 (propagate x=y)" }
    },
    {
        id: "cd3-opt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Strength reduction replaces:",
        options: ["Strong operators with weaker ones", "Expensive operations with cheaper equivalents", "Addition with subtraction", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "x=y*2 → x=y<<1 (shift cheaper than multiply)" }
    },
    {
        id: "cd3-opt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Dead code elimination removes:",
        options: ["All code", "Code that doesn't affect output", "Comments only", "Loops only"],
        correctAnswer: 1,
        explanation: { solution: "Remove unreachable code or code with unused results" }
    },
    {
        id: "cd3-opt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Common subexpression elimination is done using:",
        options: ["Stack", "DAG", "Queue", "Heap"],
        correctAnswer: 1,
        explanation: { solution: "DAG: reuse nodes for common subexpressions" }
    },
    {
        id: "cd3-opt-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Loop invariant code motion moves:",
        options: ["Code into loop", "Invariant code outside the loop", "Nothing", "Variables only"],
        correctAnswer: 1,
        explanation: { solution: "Move computations that don't change inside loop to outside" }
    },
    {
        id: "cd3-opt-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Loop unrolling:",
        options: ["Rolls up loop", "Replicates loop body to reduce iterations", "Deletes loops", "Creates new loops"],
        correctAnswer: 1,
        explanation: { solution: "Unroll: for(i=0;i<4;i++)f(); → f();f();f();f(); reduces overhead" }
    },
    {
        id: "cd3-opt-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Peephole optimization examines:",
        options: ["Entire program", "Small window of instructions", "Only loops", "Only functions"],
        correctAnswer: 1,
        explanation: { solution: "Peephole: local optimization on small instruction sequences" }
    },
    {
        id: "cd3-opt-009",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Induction variable elimination optimizes:",
        options: ["Constants", "Loop index variables linked by linear relationship", "Function calls", "Arrays"],
        correctAnswer: 1,
        explanation: { solution: "If j=4*i in loop, eliminate i, use j directly" }
    },
    // ========== RUNTIME ENVIRONMENT ==========
    {
        id: "cd3-rt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Activation record contains:",
        options: ["Only return address", "Local variables, parameters, return address, saved registers", "Only code", "Only data"],
        correctAnswer: 1,
        explanation: { solution: "Activation record: all info for one function invocation" }
    },
    {
        id: "cd3-rt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Static scope (lexical scope) determines binding at:",
        options: ["Runtime", "Compile time", "Link time", "Load time"],
        correctAnswer: 1,
        explanation: { solution: "Static: scope determined by program structure" }
    },
    {
        id: "cd3-rt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Dynamic scope determines binding at:",
        options: ["Compile time", "Runtime based on calling sequence", "Link time", "Never"],
        correctAnswer: 1,
        explanation: { solution: "Dynamic: binding based on call stack at runtime" }
    }
]);

console.log("Compiler Design Comprehensive loaded - ~55 questions");
