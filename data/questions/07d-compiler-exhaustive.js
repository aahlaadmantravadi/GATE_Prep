/**
 * Compiler Design EXHAUSTIVE
 * Lexical, Syntax, Semantic Analysis, Code Generation, Optimization
 */

Questions.register([
    // ========== COMPILER PHASES ==========
    {
        id: "cd2-phase-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "The phases of a compiler in order are:",
        options: ["Parsing, Lexing, Code Gen", "Lexical, Syntax, Semantic, Intermediate, Optimization, Code Gen", "Code Gen, Optimization, Parsing", "Only Parsing and Code Gen"],
        correctAnswer: 1,
        explanation: { solution: "Phases: Lexical → Syntax → Semantic → IR Gen → Optimization → Code Gen" }
    },
    {
        id: "cd2-phase-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "The front-end of compiler includes:",
        options: ["Code generation only", "Lexical, Syntax, Semantic analysis", "Optimization only", "Linking only"],
        correctAnswer: 1,
        explanation: { solution: "Front-end: source language dependent (lexical, syntax, semantic)" }
    },
    {
        id: "cd2-phase-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "The back-end of compiler includes:",
        options: ["Lexical analysis", "Parsing", "Code generation and optimization", "Symbol table"],
        correctAnswer: 2,
        explanation: { solution: "Back-end: target machine dependent (optimization, code gen)" }
    },
    {
        id: "cd2-phase-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Compiler Phases",
        question: "Symbol table is used throughout:",
        options: ["Only lexical phase", "Only parsing phase", "All phases", "Only code generation"],
        correctAnswer: 2,
        explanation: { solution: "Symbol table: shared across all phases, stores identifiers info" }
    },
    // ========== LEXICAL ANALYSIS ==========
    {
        id: "cd2-lex-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lexical analyzer converts source to:",
        options: ["Parse tree", "Tokens (lexemes)", "Object code", "Assembly code"],
        correctAnswer: 1,
        explanation: { solution: "Lexer: character stream → token stream" }
    },
    {
        id: "cd2-lex-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Tokens are described using:",
        options: ["CFG", "Regular expressions", "Turing machines", "PDA"],
        correctAnswer: 1,
        explanation: { solution: "Tokens (identifiers, keywords, etc.) are regular, described by regex" }
    },
    {
        id: "cd2-lex-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lexical analyzer is implemented using:",
        options: ["PDA", "DFA/NFA", "Turing machine", "LR parser"],
        correctAnswer: 1,
        explanation: { solution: "Lexer = DFA (regex → NFA → DFA)" }
    },
    {
        id: "cd2-lex-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lex/Flex is a tool for:",
        options: ["Parser generation", "Lexer generation", "Code optimization", "Debugging"],
        correctAnswer: 1,
        explanation: { solution: "Lex/Flex: generates lexer from regex specification" }
    },
    {
        id: "cd2-lex-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lexer handles:",
        options: ["Syntax errors", "Semantic errors", "Recognizing tokens, removing whitespace/comments", "Code generation"],
        correctAnswer: 2,
        explanation: { solution: "Lexer: tokenization, remove whitespace, handle comments" }
    },
    // ========== SYNTAX ANALYSIS / PARSING ==========
    {
        id: "cd2-parse-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Syntax analysis (parsing) uses:",
        options: ["Regular grammar", "Context-free grammar (CFG)", "Context-sensitive grammar", "Type 0 grammar"],
        correctAnswer: 1,
        explanation: { solution: "Parsers use CFG for programming language syntax" }
    },
    {
        id: "cd2-parse-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Parser output is:",
        options: ["Token stream", "Parse tree / AST", "Object code", "Intermediate code"],
        correctAnswer: 1,
        explanation: { solution: "Parser: tokens → parse tree (or AST)" }
    },
    {
        id: "cd2-parse-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Top-down parsing builds parse tree:",
        options: ["From leaves to root", "From root to leaves", "Random order", "No tree built"],
        correctAnswer: 1,
        explanation: { solution: "Top-down: start from start symbol, expand to match input" }
    },
    {
        id: "cd2-parse-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Bottom-up parsing builds parse tree:",
        options: ["From root to leaves", "From leaves to root", "Random order", "No tree built"],
        correctAnswer: 1,
        explanation: { solution: "Bottom-up: start from input, reduce to start symbol" }
    },
    {
        id: "cd2-parse-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Recursive descent parser is a type of:",
        options: ["Bottom-up parser", "Top-down parser", "LR parser", "Operator precedence parser"],
        correctAnswer: 1,
        explanation: { solution: "Recursive descent: top-down, uses recursive functions for non-terminals" }
    },
    {
        id: "cd2-parse-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LL(1) grammar conditions: no left recursion, and:",
        options: ["Left factored", "Right factored", "Ambiguous", "No conditions"],
        correctAnswer: 0,
        explanation: { solution: "LL(1): no left recursion, left factored, FIRST/FOLLOW don't conflict" }
    },
    {
        id: "cd2-parse-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FIRST(α) is:",
        options: ["Last terminal derivable from α", "Set of terminals that begin strings derivable from α", "All non-terminals in α", "Empty set"],
        correctAnswer: 1,
        explanation: { solution: "FIRST(α) = terminals that can appear first in any derivation of α" }
    },
    {
        id: "cd2-parse-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FOLLOW(A) is:",
        options: ["Terminals that can appear immediately after A in some derivation", "All terminals in grammar", "First symbol of A", "Non-terminals after A"],
        correctAnswer: 0,
        explanation: { solution: "FOLLOW(A) = terminals that can appear right after A" }
    },
    {
        id: "cd2-parse-009",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LL(k) means:",
        options: ["Left-to-right, Leftmost derivation, k symbols lookahead", "Left-to-right, Rightmost derivation", "Right-to-left parsing", "k productions"],
        correctAnswer: 0,
        explanation: { solution: "LL(k): scan Left-to-right, Leftmost derivation, k lookahead" }
    },
    {
        id: "cd2-parse-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LR(k) means:",
        options: ["Left-to-right, Leftmost derivation", "Left-to-right, Rightmost derivation (reverse), k lookahead", "Right-to-left parsing", "k reductions"],
        correctAnswer: 1,
        explanation: { solution: "LR(k): scan Left-to-right, Rightmost derivation in reverse, k lookahead" }
    },
    {
        id: "cd2-parse-011",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LR parsers are more powerful than LL parsers because:",
        options: ["They use less memory", "They can handle more grammars (including left-recursive)", "They are simpler", "They don't need lookahead"],
        correctAnswer: 1,
        explanation: { solution: "LR handles larger class of grammars than LL" }
    },
    {
        id: "cd2-parse-012",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Types of LR parsers in order of power:",
        options: ["SLR < LALR < CLR", "CLR < LALR < SLR", "LALR < SLR < CLR", "All are equal"],
        correctAnswer: 0,
        explanation: { solution: "SLR ⊂ LALR ⊂ CLR (Canonical LR most powerful)" }
    },
    {
        id: "cd2-parse-013",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Yacc/Bison is a tool for:",
        options: ["Lexer generation", "Parser generation (LALR)", "Code optimization", "Assembly"],
        correctAnswer: 1,
        explanation: { solution: "Yacc/Bison: generates LALR(1) parser from grammar" }
    },
    {
        id: "cd2-parse-014",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Shift-Reduce parsing uses:",
        options: ["Queue", "Stack", "Tree", "Hash table"],
        correctAnswer: 1,
        explanation: { solution: "LR parsing uses stack for shift (push) and reduce (pop + push)" }
    },
    {
        id: "cd2-parse-015",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Shift action in LR parsing:",
        options: ["Pops and reduces by production", "Pushes next input symbol onto stack", "Accepts input", "Reports error"],
        correctAnswer: 1,
        explanation: { solution: "Shift: push current input symbol onto stack, advance input" }
    },
    {
        id: "cd2-parse-016",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Reduce action in LR parsing:",
        options: ["Push symbol onto stack", "Pop RHS of production, push LHS", "Accept input", "Shift and reduce simultaneously"],
        correctAnswer: 1,
        explanation: { solution: "Reduce: pop |RHS| symbols, push LHS non-terminal" }
    },
    {
        id: "cd2-parse-017",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Handle in bottom-up parsing is:",
        options: ["Any substring", "Leftmost simple phrase reducible to non-terminal", "The start symbol", "All terminals"],
        correctAnswer: 1,
        explanation: { solution: "Handle: substring matching RHS of production to reduce" }
    },
    // ========== SEMANTIC ANALYSIS ==========
    {
        id: "cd2-sem-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Semantic Analysis",
        question: "Semantic analysis checks:",
        options: ["Token validity", "Syntax correctness", "Type checking, scope rules", "Performance"],
        correctAnswer: 2,
        explanation: { solution: "Semantic: type checking, declaration before use, scope rules" }
    },
    {
        id: "cd2-sem-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Semantic Analysis",
        question: "Syntax-Directed Translation (SDT) attaches:",
        options: ["Only one attribute", "Semantic rules/actions to grammar productions", "No attributes", "Assembly code"],
        correctAnswer: 1,
        explanation: { solution: "SDT: semantic rules (attributes) associated with productions" }
    },
    {
        id: "cd2-sem-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Semantic Analysis",
        question: "S-attributed definition uses only:",
        options: ["Inherited attributes", "Synthesized attributes", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "S-attributed: only synthesized (computed bottom-up)" }
    },
    {
        id: "cd2-sem-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Semantic Analysis",
        question: "L-attributed definition allows:",
        options: ["Only inherited attributes", "Synthesized + inherited from left siblings or parent", "Any order of evaluation", "No attributes"],
        correctAnswer: 1,
        explanation: { solution: "L-attributed: inherited from left siblings or parent, synthesized OK" }
    },
    {
        id: "cd2-sem-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Semantic Analysis",
        question: "Type checking is part of:",
        options: ["Lexical analysis", "Syntax analysis", "Semantic analysis", "Code generation"],
        correctAnswer: 2,
        explanation: { solution: "Type checking: semantic phase, ensures type compatibility" }
    },
    // ========== INTERMEDIATE CODE ==========
    {
        id: "cd2-ir-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Three-address code (TAC) has at most:",
        options: ["1 address per instruction", "2 addresses", "3 addresses per instruction", "Unlimited addresses"],
        correctAnswer: 2,
        explanation: { solution: "TAC: x = y op z (at most 3 addresses)" }
    },
    {
        id: "cd2-ir-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Common TAC representations include:",
        options: ["Only quadruples", "Quadruples, triples, indirect triples", "Only assembly", "Parse tree only"],
        correctAnswer: 1,
        explanation: { solution: "TAC: quadruples (op, arg1, arg2, result), triples, indirect triples" }
    },
    {
        id: "cd2-ir-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Quadruple format is:",
        options: ["(op, arg1, arg2, result)", "(op, result, arg1, arg2)", "(result, op, arg1, arg2)", "Only (op, result)"],
        correctAnswer: 0,
        explanation: { solution: "Quadruple: (operator, arg1, arg2, result)" }
    },
    // ========== CODE OPTIMIZATION ==========
    {
        id: "cd2-opt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Machine-independent optimization is done on:",
        options: ["Assembly code", "Object code", "Intermediate code", "Binary code"],
        correctAnswer: 2,
        explanation: { solution: "IR-level optimization: independent of target machine" }
    },
    {
        id: "cd2-opt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Common subexpression elimination removes:",
        options: ["All expressions", "Redundant computation of same expression", "All variables", "All loops"],
        correctAnswer: 1,
        explanation: { solution: "CSE: if expression computed before and values unchanged, reuse result" }
    },
    {
        id: "cd2-opt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Dead code elimination removes:",
        options: ["All code", "Code whose result is never used", "Optimized code", "Loop code"],
        correctAnswer: 1,
        explanation: { solution: "Dead code: unreachable or result never used" }
    },
    {
        id: "cd2-opt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Constant folding computes:",
        options: ["Runtime constants", "Compile-time evaluation of constant expressions", "Variable values", "Loop bounds"],
        correctAnswer: 1,
        explanation: { solution: "Constant folding: evaluate constant expressions at compile time" }
    },
    {
        id: "cd2-opt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Loop-invariant code motion:",
        options: ["Moves code into loops", "Moves computation independent of loop outside the loop", "Removes all loops", "Unrolls loops"],
        correctAnswer: 1,
        explanation: { solution: "Loop-invariant: move expressions not changing in loop to before loop" }
    },
    {
        id: "cd2-opt-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Strength reduction replaces:",
        options: ["Addition with multiplication", "Expensive operations with cheaper equivalents", "Variables with constants", "Functions with inline code"],
        correctAnswer: 1,
        explanation: { solution: "Strength reduction: replace * with +, / with shifts, etc." }
    },
    {
        id: "cd2-opt-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Induction variable elimination in loops:",
        options: ["Adds more loop variables", "Removes or replaces auxiliary loop variables", "Converts loops to recursion", "Unrolls loops"],
        correctAnswer: 1,
        explanation: { solution: "Remove induction variables that can be computed from primary induction var" }
    },
    {
        id: "cd2-opt-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Loop unrolling:",
        options: ["Creates more loop iterations", "Replicates loop body to reduce overhead", "Converts loop to function", "Removes loop entirely"],
        correctAnswer: 1,
        explanation: { solution: "Unrolling: replicate body n times, reduce loop control overhead" }
    },
    {
        id: "cd2-opt-009",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Function inlining:",
        options: ["Calls function recursively", "Replaces function call with function body", "Removes function", "Adds function parameters"],
        correctAnswer: 1,
        explanation: { solution: "Inline: replace call with copy of function body (eliminate overhead)" }
    },
    // ========== CODE GENERATION ==========
    {
        id: "cd2-cg-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Code generator produces:",
        options: ["Tokens", "Parse tree", "Target machine code", "Intermediate code"],
        correctAnswer: 2,
        explanation: { solution: "Code gen: IR → target code (assembly or machine code)" }
    },
    {
        id: "cd2-cg-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Register allocation is:",
        options: ["Allocating memory to variables", "Assigning variables to limited CPU registers", "Removing registers", "Loading from disk"],
        correctAnswer: 1,
        explanation: { solution: "Register allocation: map variables to CPU registers (NP-hard)" }
    },
    {
        id: "cd2-cg-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Register allocation using graph coloring: nodes are:",
        options: ["Registers", "Variables (live ranges)", "Instructions", "Basic blocks"],
        correctAnswer: 1,
        explanation: { solution: "Interference graph: nodes = variables, edge if live simultaneously" }
    },
    {
        id: "cd2-cg-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Basic block is:",
        options: ["Any sequence of instructions", "Maximal sequence with one entry, one exit, no jumps in/out", "Single instruction", "Entire program"],
        correctAnswer: 1,
        explanation: { solution: "Basic block: straight-line code, single entry/exit" }
    },
    {
        id: "cd2-cg-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Control Flow Graph (CFG) nodes are:",
        options: ["Tokens", "Variables", "Basic blocks", "Registers"],
        correctAnswer: 2,
        explanation: { solution: "CFG: nodes = basic blocks, edges = control flow" }
    },
    {
        id: "cd2-cg-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Peephole optimization works on:",
        options: ["Entire program", "Small window of instructions", "Single basic block", "IR only"],
        correctAnswer: 1,
        explanation: { solution: "Peephole: optimize small sliding window of instructions" }
    },
    // ========== RUNTIME ENVIRONMENT ==========
    {
        id: "cd2-rt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Activation record (stack frame) contains:",
        options: ["Only return address", "Local variables, parameters, return address, saved registers", "Only global variables", "Only heap data"],
        correctAnswer: 1,
        explanation: { solution: "Activation record: locals, params, return addr, saved regs, control link" }
    },
    {
        id: "cd2-rt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Static allocation is used for:",
        options: ["Dynamic arrays", "Global variables, constants", "Local variables", "Heap objects"],
        correctAnswer: 1,
        explanation: { solution: "Static allocation: compile-time known size, globals, constants" }
    },
    {
        id: "cd2-rt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Stack allocation is used for:",
        options: ["Global variables", "Local variables, function calls", "Dynamic objects", "Static arrays"],
        correctAnswer: 1,
        explanation: { solution: "Stack: activation records, local variables, LIFO" }
    },
    {
        id: "cd2-rt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Heap allocation is used for:",
        options: ["Fixed-size locals", "Dynamically allocated objects (malloc, new)", "Return addresses", "Global constants"],
        correctAnswer: 1,
        explanation: { solution: "Heap: dynamic allocation, programmer/GC managed" }
    },
    {
        id: "cd2-rt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Access link (static link) in activation record is used for:",
        options: ["Dynamic scoping", "Accessing non-local variables in lexically enclosing scopes", "Returning to caller", "Garbage collection"],
        correctAnswer: 1,
        explanation: { solution: "Static link: access variables in lexically enclosing scope" }
    },
    {
        id: "cd2-rt-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Control link (dynamic link) points to:",
        options: ["Lexically enclosing scope", "Caller's activation record", "Global data", "Heap start"],
        correctAnswer: 1,
        explanation: { solution: "Dynamic/control link: points to caller's frame for return" }
    }
]);

console.log("Exhaustive Compiler Design loaded - ~60 questions");
