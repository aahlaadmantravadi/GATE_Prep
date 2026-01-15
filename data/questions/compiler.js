Questions.register([
    {
        id: "cd-lex-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "The lexical analyzer converts the source code into:",
        options: [
            "Parse tree",
            "Tokens",
            "Assembly code",
            "Intermediate code"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Lexer (scanner) reads characters and groups them into tokens (lexemes): keywords, identifiers, literals, operators. It removes whitespace/comments."
        }
    },
    {
        id: "cd-lex-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Regular expressions are sufficient for lexical analysis because:",
        options: [
            "Source code is always regular",
            "Tokens can be described using regular patterns",
            "Regular expressions are faster than CFG",
            "All of the above"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Token patterns (identifiers, numbers, keywords) are regular languages. DFA-based lexers are efficient O(n). Nested structures need CFG (parser's job)."
        }
    },
    {
        id: "cd-parse-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LL(1) parsing is:",
        options: [
            "Bottom-up, uses 1 lookahead",
            "Top-down, uses 1 lookahead",
            "Bottom-up, uses k lookahead",
            "Top-down, uses 0 lookahead"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "LL(1): Left-to-right scan, Leftmost derivation, 1 symbol lookahead. Predictive parsing - can decide which production to use by looking at next input symbol."
        }
    },
    {
        id: "cd-parse-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LR parsing is more powerful than LL parsing because:",
        options: [
            "It uses more memory",
            "It can handle left-recursive grammars and more types of grammars",
            "It is simpler to implement",
            "It produces smaller parse trees"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "LR (bottom-up) can handle left-recursive grammars directly (LL cannot). LR(1) recognizes a larger class of languages than LL(1). But LR is harder to implement."
        }
    },
    {
        id: "cd-first-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FIRST(α) contains ε if:",
        options: [
            "α starts with a terminal",
            "α starts with a non-terminal that can derive ε",
            "α is a single terminal",
            "FIRST never contains ε"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "FIRST(α) = set of terminals that can start strings derived from α. If α can derive ε (empty string), then ε ∈ FIRST(α)."
        }
    },
    {
        id: "cd-follow-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FOLLOW(A) is used to determine what can appear immediately after non-terminal A. FOLLOW of start symbol always contains:",
        options: [
            "ε",
            "All terminals",
            "$ (end of input marker)",
            "Nothing"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "$ (end marker) is always in FOLLOW(Start). FOLLOW is used in LL(1) to decide production when FIRST contains ε, and in LR to construct reduce actions."
        }
    },
    {
        id: "cd-sdt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Syntax Directed Translation",
        question: "In syntax-directed translation, synthesized attributes are computed from:",
        options: [
            "Parent to children (top-down)",
            "Children to parent (bottom-up)",
            "Siblings only",
            "Global variables"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Synthesized attributes: computed from children's attributes (bottom-up). Inherited attributes: passed from parent or siblings (top-down). S-attributed SDDs have only synthesized."
        }
    },
    {
        id: "cd-opt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Optimization",
        question: "Common subexpression elimination is an example of:",
        options: [
            "Machine-dependent optimization",
            "Peephole optimization",
            "Local optimization within a basic block",
            "Inter-procedural optimization"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "CSE: If expression E computed multiple times with same values, compute once and reuse. This is typically a local optimization within a basic block."
        }
    },
    {
        id: "cd-lex-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Lexer typically removes:",
        options: ["Keywords", "Identifiers", "Comments and whitespace", "Operators"],
        correctAnswer: 2,
        explanation: { solution: "Lexer removes whitespace and comments, outputs token stream" }
    },
    {
        id: "cd-lex-011",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Tools like lex/flex generate:",
        options: ["DFA", "PDA", "Turing machine", "NFA only"],
        correctAnswer: 0,
        explanation: { solution: "Lex/flex convert regex to NFA, then to DFA for efficient token matching" }
    },
    {
        id: "cd-parse-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Recursive descent parser is a type of:",
        options: ["Bottom-up parser", "Top-down parser", "LR parser", "LALR parser"],
        correctAnswer: 1,
        explanation: { solution: "Recursive descent: top-down, one function per non-terminal" }
    },
    {
        id: "cd-parse-011",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LL(1) grammar is one where parsing table has:",
        options: ["Multiple entries per cell", "At most one entry per cell", "No entries", "Only shift actions"],
        correctAnswer: 1,
        explanation: { solution: "LL(1): parsing table has at most one production per (non-terminal, terminal) cell" }
    },
    {
        id: "cd-parse-012",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LR(0) items are used to build:",
        options: ["Parse tree", "Canonical collection of LR(0) item sets", "Symbol table", "Lexer"],
        correctAnswer: 1,
        explanation: { solution: "LR(0) items with closures give canonical collection - basis for SLR, LR(1), LALR parsers" }
    },
    {
        id: "cd-parse-013",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Shift-reduce conflict occurs when parser can:",
        options: ["Only shift", "Only reduce", "Either shift or reduce", "Neither shift nor reduce"],
        correctAnswer: 2,
        explanation: { solution: "Shift-reduce conflict: both actions valid - grammar is not LR" }
    },
    {
        id: "cd-parse-014",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LALR(1) merges LR(1) states with:",
        options: ["Same lookahead", "Same core (ignore lookahead)", "Same actions", "No merging"],
        correctAnswer: 1,
        explanation: { solution: "LALR: merge states with same core, combine lookaheads. Fewer states than LR(1)." }
    },
    {
        id: "cd-parse-015",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Which parser type handles the largest class of grammars?",
        options: ["LL(1)", "SLR(1)", "LALR(1)", "CLR(1)/LR(1)"],
        correctAnswer: 3,
        explanation: { solution: "Power: LL(1) < SLR(1) < LALR(1) < LR(1). CLR handles most grammars." }
    },
    {
        id: "cd-ic-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Three-address code has at most:",
        options: ["One address", "Two addresses", "Three addresses", "Four addresses"],
        correctAnswer: 2,
        explanation: { solution: "TAC: x = y op z (at most 3 addresses - result and 2 operands)" }
    },
    {
        id: "cd-ic-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Intermediate Code",
        question: "Static Single Assignment (SSA) form ensures each variable is:",
        options: ["Used once", "Assigned once", "Never assigned", "Assigned in a loop"],
        correctAnswer: 1,
        explanation: { solution: "SSA: each variable assigned exactly once. Uses φ-functions for control flow." }
    },
    {
        id: "cd-opt-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Optimization",
        question: "Loop invariant code motion moves code:",
        options: ["Into the loop", "Out of the loop", "To another function", "To a different file"],
        correctAnswer: 1,
        explanation: { solution: "Move computations not depending on loop variables outside the loop" }
    },
    {
        id: "cd-opt-011",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Optimization",
        question: "Strength reduction replaces:",
        options: ["Addition with multiplication", "Expensive operations with cheaper equivalents", "Variables with constants", "Loops with recursion"],
        correctAnswer: 1,
        explanation: { solution: "E.g., replace i*4 with i<<2, or replace multiplication by addition in loops" }
    },
    {
        id: "cd-opt-012",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Optimization",
        question: "Dead code elimination removes:",
        options: ["All code", "Code whose result is never used", "Comments", "Variable declarations"],
        correctAnswer: 1,
        explanation: { solution: "Dead code: computations whose results are never used anywhere" }
    },
    {
        id: "cd-opt-013",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Optimization",
        question: "Constant folding evaluates:",
        options: ["Variables at runtime", "Constants at compile time", "Functions at runtime", "Loops at compile time"],
        correctAnswer: 1,
        explanation: { solution: "Constant folding: 2+3 → 5 at compile time" }
    },
    {
        id: "cd-cg-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Register allocation aims to:",
        options: ["Increase memory usage", "Minimize register usage while maximizing speed", "Eliminate all registers", "Slow down execution"],
        correctAnswer: 1,
        explanation: { solution: "Assign frequently used values to limited registers, minimize memory accesses" }
    },
    {
        id: "cd-cg-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Graph coloring is used for:",
        options: ["Lexical analysis", "Parsing", "Register allocation", "Type checking"],
        correctAnswer: 2,
        explanation: { solution: "Register allocation as graph coloring: nodes=variables, edges=interfering pairs, colors=registers" }
    },
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
    },
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
    },
    {
        isPYQ: true,
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
        isPYQ: true,
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
        isPYQ: true,
        id: "gate-cd-lex-003",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Number of tokens in: for(i=0; i<n; i++) a[i]=0;",
        correctAnswer: 17,
        tolerance: 0,
        explanation: { solution: "for ( i = 0 ; i < n ; i ++ ) a [ i ] = 0 ; = 17" }
    },
    {
        isPYQ: true,
        id: "gate-cd-lex-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Which phase of compiler uses regular expressions?",
        options: ["Syntax analysis", "Lexical analysis", "Semantic analysis", "Code generation"],
        correctAnswer: 1,
        explanation: { solution: "Lexical analyzer uses RE → NFA → DFA for tokenization" }
    },
    {
        isPYQ: true,
        id: "gate-cd-lex-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Lexical Analysis",
        question: "Which is NOT a valid token in C?",
        options: ["123abc", "abc123", "_var", "__LINE__"],
        correctAnswer: 0,
        explanation: { solution: "Identifiers cannot start with digit: 123abc is invalid" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Which grammar is suitable for LR parsing but not LL?",
        options: ["Right recursive grammar", "Left recursive grammar", "Ambiguous grammar", "ε-free grammar"],
        correctAnswer: 1,
        explanation: { solution: "Left recursion: allowed in LR, not in LL" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "In SLR parsing, reduce action uses:",
        options: ["FIRST set", "FOLLOW set", "Both FIRST and FOLLOW", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "SLR: reduce on symbols in FOLLOW(LHS)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Bottom-up parsing is same as:",
        options: ["Leftmost derivation", "Rightmost derivation in reverse", "Preorder traversal", "Postorder traversal"],
        correctAnswer: 1,
        explanation: { solution: "Bottom-up = reverse of rightmost derivation" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Handle in shift-reduce parsing is:",
        options: ["Leftmost terminal", "A substring matching RHS that reduces to LHS", "Rightmost nonterminal", "Any production"],
        correctAnswer: 1,
        explanation: { solution: "Handle: substring that matches RHS and should be reduced" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "LALR(1) parser is:",
        options: ["More powerful than CLR(1)", "Less powerful than CLR(1) but same states as SLR", "Same as SLR", "Same as CLR(1)"],
        correctAnswer: 1,
        explanation: { solution: "LALR: CLR states merged (same as SLR count), less power than CLR" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-006",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Grammar: S→aAb|bBa, A→a|as, B→b|bS. Number of productions = ?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "S→aAb, S→bBa, A→a, A→aS, B→b, B→bS = 6 productions" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Operator precedence parser cannot parse:",
        options: ["a+b*c", "Unary minus expressions like -a+b", "a*(b+c)", "a+b+c"],
        correctAnswer: 1,
        explanation: { solution: "OPG cannot have two operators adjacent (unary operators)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Ambiguous grammar is always:",
        options: ["LL(1)", "LR(1)", "Neither LL nor LR", "Both LL and LR"],
        correctAnswer: 2,
        explanation: { solution: "Ambiguous grammars cannot be parsed by deterministic parsers" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-009",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Number of items in canonical collection for S→AB, A→a, B→b:",
        options: ["3", "5", "7", "9"],
        correctAnswer: 2,
        explanation: { solution: "Augmented: S'→S. States: I0 to I6 typically = 7 states" }
    },
    {
        isPYQ: true,
        id: "gate-cd-parse-010",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FIRST(ε) = ?",
        options: ["{}", "{ε}", "All terminals", "Error"],
        correctAnswer: 1,
        explanation: { solution: "FIRST(ε) = {ε}" }
    },
    {
        isPYQ: true,
        id: "gate-cd-ff-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "Given E→E+T|T, T→T*F|F, F→(E)|id. FIRST(E) = ?",
        options: ["{+, *, (, id}", "{(, id}", "{+, *}", "{E, T, F}"],
        correctAnswer: 1,
        explanation: { solution: "FIRST(E) = FIRST(T) = FIRST(F) = {(, id}" }
    },
    {
        isPYQ: true,
        id: "gate-cd-ff-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "FOLLOW(start symbol) always contains:",
        options: ["ε", "$ (end marker)", "Nothing", "All terminals"],
        correctAnswer: 1,
        explanation: { solution: "FOLLOW(S) always contains $ by definition" }
    },
    {
        isPYQ: true,
        id: "gate-cd-ff-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Parsing",
        question: "If A→αBβ then FOLLOW(B) contains:",
        options: ["FIRST(A)", "FIRST(β) - {ε}", "FOLLOW(A) only", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "FOLLOW(B) includes FIRST(β) - {ε}. If ε in FIRST(β), add FOLLOW(A)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-sdt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Which is true for S-attributed grammar?",
        options: ["Can use top-down parser", "Can use bottom-up parser (LR)", "Cannot be parsed", "Needs multiple passes"],
        correctAnswer: 1,
        explanation: { solution: "S-attributed: only synthesized, evaluated bottom-up (LR)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-sdt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "L-attributed definition allows inherited attributes from:",
        options: ["Right siblings", "Children", "Parent and left siblings only", "Any node"],
        correctAnswer: 2,
        explanation: { solution: "L-attributed: parent, left siblings (not right siblings or children)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-sdt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Annotated parse tree is used in:",
        options: ["Lexical analysis", "Syntax directed translation", "Code generation only", "Linking"],
        correctAnswer: 1,
        explanation: { solution: "SDT: parse tree with attribute values = annotated parse tree" }
    },
    {
        isPYQ: true,
        id: "gate-cd-sdt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Given E→E1+T {E.val = E1.val + T.val}. 'val' is:",
        options: ["Inherited attribute", "Synthesized attribute", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "val of E computed from children: synthesized" }
    },
    {
        isPYQ: true,
        id: "gate-cd-sdt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "SDT",
        question: "Given D→TL {L.type=T.type}, L→L1,id {L1.type=L.type}. 'type' for L is:",
        options: ["Synthesized", "Inherited", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "L.type comes from parent (T) or left sibling: inherited" }
    },
    {
        isPYQ: true,
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
        isPYQ: true,
        id: "gate-cd-ic-002",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "Number of 3AC statements for a = b + c * d - e / f:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "t1=c*d, t2=e/f, t3=b+t1, a=t3-t2 = 4 statements" }
    },
    {
        isPYQ: true,
        id: "gate-cd-ic-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "Quadruple representation stores:",
        options: ["(op, arg1, result)", "(op, arg1, arg2, result)", "(op, result)", "(arg1, arg2, op)"],
        correctAnswer: 1,
        explanation: { solution: "Quadruple: (operator, arg1, arg2, result)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-ic-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "Triple representation saves space by:",
        options: ["Not storing result (use statement number)", "Not storing operator", "Using hash table", "Compression"],
        correctAnswer: 0,
        explanation: { solution: "Triple: no result field, reference by statement number" }
    },
    {
        isPYQ: true,
        id: "gate-cd-ic-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "3AC",
        question: "DAG (Directed Acyclic Graph) helps in:",
        options: ["Syntax analysis", "Common subexpression elimination", "Register allocation", "Linking"],
        correctAnswer: 1,
        explanation: { solution: "DAG identifies and eliminates common subexpressions" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "x=2*y can be optimized to x=y<<1. This is:",
        options: ["Constant folding", "Strength reduction", "Dead code elimination", "Copy propagation"],
        correctAnswer: 1,
        explanation: { solution: "Replacing * with << is strength reduction" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "x=3*2+1 becomes x=7 at compile time. This is:",
        options: ["Strength reduction", "Constant folding", "Dead code", "Inlining"],
        correctAnswer: 1,
        explanation: { solution: "Compile-time evaluation = constant folding" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "if(false) {x=1;} can be removed. This is:",
        options: ["Copy propagation", "Constant folding", "Dead code elimination", "Loop optimization"],
        correctAnswer: 2,
        explanation: { solution: "Unreachable code removal = dead code elimination" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Moving invariant computation outside loop is:",
        options: ["Loop unrolling", "Code motion", "Strength reduction", "Dead code"],
        correctAnswer: 1,
        explanation: { solution: "Loop invariant code motion" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-005",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "for(i=0;i<100;i++)f(); → 100 calls of f() without loop. This is:",
        options: ["Code motion", "Loop unrolling", "Inlining", "CSE"],
        correctAnswer: 1,
        explanation: { solution: "Expanding loop body = loop unrolling" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-006",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "y=x; z=y+1; → z=x+1; is:",
        options: ["Dead code", "Copy propagation", "Constant folding", "CSE"],
        correctAnswer: 1,
        explanation: { solution: "Replacing y with x = copy propagation" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-007",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Peephole optimization works on:",
        options: ["Entire program", "Small window of target code", "Source code", "Parse tree"],
        correctAnswer: 1,
        explanation: { solution: "Peephole: local optimization on instruction window" }
    },
    {
        isPYQ: true,
        id: "gate-cd-opt-008",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Optimization",
        question: "Which is machine-dependent optimization?",
        options: ["Dead code elimination", "Register allocation", "Loop unrolling", "Constant folding"],
        correctAnswer: 1,
        explanation: { solution: "Register allocation depends on target architecture" }
    },
    {
        isPYQ: true,
        id: "gate-cd-cg-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Register allocation is modeled as:",
        options: ["Shortest path problem", "Graph coloring problem", "Maximum flow", "Minimum spanning tree"],
        correctAnswer: 1,
        explanation: { solution: "Interference graph coloring: k-colorable = k registers" }
    },
    {
        isPYQ: true,
        id: "gate-cd-cg-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Live variable analysis determines:",
        options: ["Variables used after a point", "Variables never used", "Constant values", "Loop bounds"],
        correctAnswer: 0,
        explanation: { solution: "Live: variable may be used later before redefinition" }
    },
    {
        isPYQ: true,
        id: "gate-cd-cg-003",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Expression tree with 3 internal nodes needs minimum ___ registers:",
        correctAnswer: 2,
        tolerance: 0,
        explanation: { solution: "Sethi-Ullman: binary tree with 3 internal nodes needs 2 registers" }
    },
    {
        isPYQ: true,
        id: "gate-cd-cg-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Code Generation",
        question: "Instruction selection is part of:",
        options: ["Lexical analysis", "Parsing", "Code generation", "Optimization only"],
        correctAnswer: 2,
        explanation: { solution: "Code gen: instruction selection, register allocation, scheduling" }
    },
    {
        isPYQ: true,
        id: "gate-cd-rt-001",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Activation record for a function call contains:",
        options: ["Only return address", "Parameters, locals, return address, saved registers", "Only parameters", "Only code"],
        correctAnswer: 1,
        explanation: { solution: "AR: params, return addr, saved regs, locals, control/access links" }
    },
    {
        isPYQ: true,
        id: "gate-cd-rt-002",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Static link in activation record is used for:",
        options: ["Dynamic scoping", "Accessing enclosing scope variables (lexical scoping)", "Return address", "Register saving"],
        correctAnswer: 1,
        explanation: { solution: "Static link: access lexically enclosing scope" }
    },
    {
        isPYQ: true,
        id: "gate-cd-rt-003",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Display is used to optimize access to:",
        options: ["Global variables", "Nested scope variables", "Local variables only", "Heap"],
        correctAnswer: 1,
        explanation: { solution: "Display: array of pointers for fast nested scope access" }
    },
    {
        isPYQ: true,
        id: "gate-cd-rt-004",
        type: "MCQ",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Tail recursion can be converted to:",
        options: ["Nested recursion", "Iteration (loop)", "Multiple recursion", "Mutual recursion"],
        correctAnswer: 1,
        explanation: { solution: "Tail call optimization: convert to loop (no stack growth)" }
    },
    {
        isPYQ: true,
        id: "gate-cd-rt-005",
        type: "NAT",
        topic: "compiler-design",
        subtopic: "Runtime",
        question: "Function f calls g, g calls h, h calls f. Maximum activation records on stack:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "main→f→g→h→f would have 4 ARs (including main or initial)" }
    }
]);
