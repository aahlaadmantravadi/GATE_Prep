Questions.register([
    {
        "id": "cd-lex-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "The lexical analyzer converts the source code into:",
        "options": [
            "Assembly code",
            "Intermediate code",
            "Parse tree",
            "Tokens"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Lexical Analyzer (Scanner/Lexer): First phase of compiler, reads source code CHARACTER STREAM and groups characters into TOKENS (lexemes). Token = meaningful unit: keywords (if, while), identifiers (variable names), literals (numbers, strings), operators (+, *, ==), punctuation ({, ;). Process: pattern matching using regular expressions, implemented as DFA (Deterministic Finite Automaton). Also REMOVES whitespace and comments. Output: token sequence passed to parser. Symbol table updated with identifiers. Handles lookahead for multi-character operators (==, <=). Error: invalid character sequences. Tools: Lex, Flex generate lexers from regex specifications. Efficient $O(n)$ - single pass through input.",
            "formula": "Lexer: char stream → token stream (regex/DFA)"
        }
    },
    {
        "id": "cd-lex-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Regular expressions are sufficient for lexical analysis because:",
        "options": [
            "Source code is always regular",
            "Regular expressions are faster than CFG",
            "Tokens can be described using regular patterns",
            "All of the above"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Regular Expressions for Lexical Analysis: Token patterns are REGULAR LANGUAGES - can be described by regular expressions. Examples: identifier = [a-zA-Z][a-zA-Z0-9]*, integer = [0-9]+, keyword = exact string (if|while|...). Regular languages recognized by FINITE AUTOMATA (DFA/NFA) with $O(n)$ linear time complexity - very efficient for lexical scanning. Why sufficient? Tokens have flat structure (no nesting): numbers, identifiers, keywords don't require context tracking. NESTED structures (balanced parentheses, nested blocks) are CONTEXT-FREE, need CFG and parser (not lexer). CFG for parsing is more powerful but slower than regex. Division of labor: lexer handles simple patterns fast, parser handles complex syntax. Regex → NFA (Thompson's construction) → DFA (subset construction) → minimized DFA for efficiency.",
            "formula": "Tokens: regular language (regex/DFA, $O(n)$)"
        }
    },
    {
        "id": "cd-parse-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LL(1) parsing is:",
        "options": [
            "Bottom-up, uses k lookahead",
            "Top-down, uses 1 lookahead",
            "Top-down, uses 0 lookahead",
            "Bottom-up, uses 1 lookahead"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "LL(1) Parsing: TOP-DOWN predictive parsing technique. LL = (1) Left-to-right scan of input, (2) Leftmost derivation (expand leftmost non-terminal first), (3) 1 symbol lookahead to decide production. Parser builds parse tree from ROOT → LEAVES. Uses predictive parsing table $M[A,a]$ where $A$ = non-terminal, $a$ = lookahead terminal - at most ONE production per cell (unambiguous). Implemented via: (1) RECURSIVE DESCENT - one function per non-terminal, or (2) TABLE-DRIVEN - explicit stack + parsing table. Requirements: (1) NO LEFT RECURSION, (2) LEFT FACTORED (remove common prefixes), (3) FIRST/FOLLOW sets don't conflict. Efficiency: $O(n)$ for LL(1) grammars. Limitations: cannot handle all CFGs, less powerful than LR parsers. Used for: hand-written parsers, educational purposes.",
            "formula": "LL(1): top-down, 1 lookahead, predictive table"
        }
    },
    {
        "id": "cd-parse-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LR parsing is more powerful than LL parsing because:",
        "options": [
            "It uses more memory",
            "It produces smaller parse trees",
            "It is simpler to implement",
            "It can handle left-recursive grammars and more types of grammars"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "LR Parsing Power: LR (Left-to-right scan, Rightmost derivation in reverse) is BOTTOM-UP parsing - more powerful than LL (top-down). Advantages: (1) HANDLES LEFT-RECURSIVE GRAMMARS directly - LL requires eliminating left recursion first (transforms grammar). (2) LARGER CLASS OF GRAMMARS - LR(1) recognizes strictly more languages than LL(1). Most programming language constructs are LR but not LL. (3) ERROR DETECTION - detects syntax errors as soon as possible (left-to-right scan). Disadvantages: (1) COMPLEX IMPLEMENTATION - requires parser generator (Yacc/Bison), hard to hand-code. (2) LARGER TABLES - LR(1) canonical tables exponentially large (mitigated by LALR). Power hierarchy: LL(1) ⊂ SLR(1) ⊂ LALR(1) ⊂ LR(1) ⊂ CFG. Trade-off: LL simpler to understand/implement; LR more powerful, industry standard (via tools).",
            "formula": "LR: bottom-up, handles left-recursion, LL ⊂ LR"
        }
    },
    {
        "id": "cd-first-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FIRST(α) contains ε if:",
        "options": [
            "α starts with a terminal",
            "α starts with a non-terminal that can derive ε",
            "α is a single terminal",
            "FIRST never contains ε"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FIRST Set: For grammar symbol (terminal/non-terminal) or string $\\alpha$, FIRST($\\alpha$) = SET OF TERMINALS that can appear as FIRST SYMBOL of strings derivable from $\\alpha$. Rules: (1) If $\\alpha$ is terminal $a$: FIRST($a$) = {$a$}. (2) If $\\alpha$ is non-terminal $A$ and $A \\to a\\beta$ (starts with terminal): add $a$ to FIRST($A$). (3) If $A \\to \\varepsilon$: add $\\varepsilon$ to FIRST($A$). (4) If $A \\to B\\beta$ and $B$ can derive $\\varepsilon$: FIRST($A$) includes FIRST($\\beta$). (5) For string $\\alpha = X_1X_2...X_n$: combine FIRST($X_i$) while $X_i$ nullable. EPSILON IN FIRST($\\alpha$)? Yes, if all symbols $X_1,...,X_n$ can derive $\\varepsilon$ (all nullable). Used in: LL(1) parsing table construction - if $\\varepsilon \\in$ FIRST($\\alpha$), check FOLLOW for production selection.",
            "formula": "FIRST($\\alpha$) = terminals starting derivations of $\\alpha$"
        }
    },
    {
        "id": "cd-follow-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FOLLOW(A) is used to determine what can appear immediately after non-terminal A. FOLLOW of start symbol always contains:",
        "options": [
            "$ (end of input marker)",
            "All terminals",
            "ε",
            "Nothing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FOLLOW Set: For non-terminal $A$, FOLLOW($A$) = SET OF TERMINALS that can appear IMMEDIATELY AFTER $A$ in some sentential form. Rules: (1) $ (end-of-input) ALWAYS IN FOLLOW(Start symbol). (2) If production $B \\to \\alpha A \\beta$: add FIRST($\\beta$) - {$\\varepsilon$} to FOLLOW($A$). (3) If $B \\to \\alpha A$ (A at end) OR $\\varepsilon \\in$ FIRST($\\beta$): add FOLLOW($B$) to FOLLOW($A$). FOLLOW never contains $\\varepsilon$, only terminals + $. Used in: (1) LL(1) PARSING - when FIRST($\\alpha$) contains $\\varepsilon$, use FOLLOW($A$) to select production $A \\to \\alpha$. Entry $M[A,a]$ where $a \\in$ FOLLOW($A$). (2) LR PARSING - construct REDUCE actions in parsing table. Essential for predictive parsing table construction. Computed iteratively until fixed point.",
            "formula": "FOLLOW($A$) = terminals immediately after $A$"
        }
    },
    {
        "id": "cd-sdt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Syntax Directed Translation",
        "question": "In syntax-directed translation, synthesized attributes are computed from:",
        "options": [
            "Siblings only",
            "Global variables",
            "Parent to children (top-down)",
            "Children to parent (bottom-up)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Syntax-Directed Translation (SDT) Attributes: Attach SEMANTIC INFORMATION to grammar symbols via attributes. Two types: (1) SYNTHESIZED ATTRIBUTES - computed from attributes of CHILDREN (bottom-up flow). Example: expression value computed from operand values: $E.val = E_1.val + E_2.val$ for $E \\to E_1 + E_2$. (2) INHERITED ATTRIBUTES - passed DOWN from parent or left siblings (top-down flow). Example: type propagation in declarations. S-ATTRIBUTED DEFINITION: only synthesized attributes - can evaluate during bottom-up parse (LR parsing friendly). L-ATTRIBUTED DEFINITION: synthesized + inherited from parent or LEFT siblings only - can evaluate during top-down parse (one left-to-right pass). Applications: type checking, code generation, translation schemes. Evaluation: build dependency graph, topological sort, evaluate attributes. Parse tree annotations.",
            "formula": "Synthesized: children→parent. Inherited: parent→children."
        }
    },
    {
        "id": "cd-opt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Optimization",
        "question": "Common subexpression elimination is an example of:",
        "options": [
            "Peephole optimization",
            "Inter-procedural optimization",
            "Machine-dependent optimization",
            "Local optimization within a basic block"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Common Subexpression Elimination (CSE): Code optimization identifying and eliminating REDUNDANT COMPUTATIONS. If expression $E$ computed multiple times with SAME OPERAND VALUES (no intervening modifications), compute ONCE and REUSE result. Example: $a = b + c; ...; d = b + c;$ → $t = b + c; a = t; ...; d = t;$ (if $b,c$ unchanged). Saves: computation time, registers. Typically LOCAL optimization within BASIC BLOCK (straight-line code, single entry/exit, no branches). Can extend to GLOBAL CSE across basic blocks using data flow analysis (available expressions). Implementation: value numbering, or hash-based detection. Trade-off: extra temporary variable vs reduced computation. Especially beneficial for expensive operations (multiplication, memory access). Part of machine-independent optimization pass on intermediate representation (IR).",
            "formula": "CSE: reuse $E$ if values unchanged (local opt)"
        }
    },
    {
        "id": "cd-lex-010",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lexer typically removes:",
        "options": [
            "Comments and whitespace",
            "Keywords",
            "Operators",
            "Identifiers"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Lexer Whitespace/Comment Removal: Lexical analyzer REMOVES whitespace (spaces, tabs, newlines) and comments before producing token stream. Why? (1) Whitespace is insignificant in most languages (except Python indentation, handled specially). (2) Comments are for humans, irrelevant to compilation. (3) Reduces parser input size, simplifies parsing. Lexer outputs CLEAN token sequence: keywords, identifiers, operators, literals. Exceptions: string literals preserve internal whitespace. Some lexers preserve line numbers for error messages despite removing newlines."
        }
    },
    {
        "id": "cd-lex-011",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Tools like lex/flex generate:",
        "options": [
            "PDA",
            "NFA only",
            "DFA",
            "Turing machine"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Lex/Flex Tools: LEXER GENERATORS - accept regex specifications, automatically generate lexical analyzer source code (typically C). Process: (1) Regex → NFA (Thompson's construction), (2) NFA → DFA (subset construction), (3) DFA minimization, (4) Generate code (table-driven or direct). Output: efficient DFA-based scanner. Benefits: rapid development, guaranteed correctness, optimized. Industry standard for compiler construction alongside parser generators (Yacc/Bison). Input format: patterns + actions (C code executed when pattern matches)."
        }
    },
    {
        "id": "cd-parse-010",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Recursive descent parser is a type of:",
        "options": [
            "Top-down parser",
            "LALR parser",
            "LR parser",
            "Bottom-up parser"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Recursive Descent Parser: TOP-DOWN parsing implementation - one RECURSIVE FUNCTION per non-terminal in grammar. Each function: (1) checks lookahead, (2) calls child functions for RHS non-terminals, (3) matches terminals by consuming input. Easy to hand-code for LL(1) grammars. Predictive (no backtracking if LL(1)). Advantages: simple, intuitive, good error messages. Disadvantages: cannot handle left-recursive grammars (infinite recursion!), limited to LL class. Example: parseExpr() calls parseTerm(), which calls parseFactor(). Widely used for hand-written parsers in production compilers."
        }
    },
    {
        "id": "cd-parse-011",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LL(1) grammar is one where parsing table has:",
        "options": [
            "At most one entry per cell",
            "Only shift actions",
            "Multiple entries per cell",
            "No entries"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "LL(1) Parsing Table: For LL(1) grammar, predictive parsing table $M[A,a]$ has AT MOST ONE production per cell where $A$ = non-terminal, $a$ = terminal (or $). Construction: For $A \\to \\alpha$, add entry to $M[A,a]$ for all $a \\in$ FIRST($\\alpha$); if $\\varepsilon \\in$ FIRST($\\alpha$), also add for all $a \\in$ FOLLOW($A$). If ANY cell has multiple entries, grammar is NOT LL(1). Empty cells indicate syntax error. Parser uses table + stack: pop $A$, look at input $a$, expand using $M[A,a]$. Deterministic parsing.",
            "formula": "LL(1): each $M[A,a]$ ≤ 1 production"
        }
    },
    {
        "id": "cd-parse-012",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LR(0) items are used to build:",
        "options": [
            "Symbol table",
            "Canonical collection of LR(0) item sets",
            "Parse tree",
            "Lexer"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "LR(0) Items: Core of LR parser construction. LR(0) item = production with DOT indicating parse position: $A \\to \\alpha \\cdot \\beta$ means $\\alpha$ recognized, expecting $\\beta$. CLOSURE operation: if item $A \\to \\alpha \\cdot B\\beta$, add all items $B \\to \\cdot\\gamma$ for productions of $B$. GOTO function: advance dot over symbol. Canonical collection = all reachable item sets from initial item $S' \\to \\cdot S$. Each set = parser state. Transitions between states on symbols. Foundation for SLR(1), LALR(1), LR(1) parsing tables. Adding lookahead gives LR(1) items."
        }
    },
    {
        "id": "cd-parse-013",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Shift-reduce conflict occurs when parser can:",
        "options": [
            "Only shift",
            "Either shift or reduce",
            "Neither shift nor reduce",
            "Only reduce"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Shift-Reduce Conflict: AMBIGUITY in LR parsing table - parser cannot decide whether to SHIFT (push next input onto stack) or REDUCE (pop and replace by LHS). Occurs when BOTH actions are valid in current state. Indicates grammar is NOT LR(k) for given $k$ (not deterministically parsable). Causes: (1) ambiguous grammar (classic: dangling else), (2) insufficient lookahead. Solutions: (1) rewrite grammar unambiguously, (2) use precedence/associativity rules (Yacc's approach), (3) increase lookahead (SLR→LALR→CLR). Reduce-reduce conflict: multiple reduce actions possible - even worse."
        }
    },
    {
        "id": "cd-parse-014",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LALR(1) merges LR(1) states with:",
        "options": [
            "Same core (ignore lookahead)",
            "No merging",
            "Same actions",
            "Same lookahead"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "LALR(1) Parser: Lookahead LR - COMPROMISE between SLR(1) (weak) and CLR/LR(1) (powerful but large tables). Construction: build full LR(1) canonical collection, then MERGE states with SAME CORE (ignore lookahead differences), combining lookahead sets. Result: same number of states as SLR (~100s for typical language) but more powerful (resolves conflicts SLR can't). Trade-off: can introduce reduce-reduce conflicts not in LR(1) (rare). Yacc/Bison generate LALR parsers. Power: SLR ⊂ LALR ⊂ LR(1). Industry standard for parser generators - best balance of power and table size.",
            "formula": "LALR: merge LR(1) states by core, combine lookaheads"
        }
    },
    {
        "id": "cd-parse-015",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Which parser type handles the largest class of grammars?",
        "options": [
            "LALR(1)",
            "SLR(1)",
            "CLR(1)/LR(1)",
            "LL(1)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Parser Power Hierarchy: LL(1) ⊂ SLR(1) ⊂ LALR(1) ⊂ CLR(1)/LR(1) ⊂ LR(k) ⊂ CFG. (1) LL(1): weakest, top-down, no left-recursion, limited conflict resolution. (2) SLR(1): simple LR, uses FOLLOW sets (coarse). (3) LALR(1): merges LR(1) states, industry standard (Yacc/Bison). (4) CLR(1) / LR(1): canonical LR, most powerful deterministic, handles largest CFG subset, but HUGE tables (exponential states). LR(k) for $k>1$ rarely used (tables explosion). Unambiguous CFGs may still not be LR. Most programming languages are LALR(1).",
            "formula": "LL(1) < SLR < LALR < CLR (most powerful)"
        }
    },
    {
        "id": "cd-ic-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Three-address code has at most:",
        "options": [
            "Four addresses",
            "Three addresses",
            "One address",
            "Two addresses"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Three-Address Code (TAC): INTERMEDIATE REPRESENTATION where each instruction has AT MOST 3 ADDRESSES (operands/results). General form: $x = y \\text{ op } z$ or $x = \\text{op } y$. Examples: $t1 = a + b$, $t2 = t1 * c$, $if\\ t2 < 10\\ goto\\ L1$. Addresses: variables, constants, temporaries, labels. Instructions: assignment, conditional/unconditional jumps, procedure calls, array access. Advantages: (1) machine-independent (portable IR), (2) simple structure (easy optimization), (3) maps easily to assembly (most machines 2-3 address). Representations: quadruples $(op, arg1, arg2, result)$, triples (implicit result), SSA form. Compiler generates TAC from AST, optimizes, then generates target code.",
            "formula": "TAC: $x = y \\text{ op } z$ (max 3 addresses)"
        }
    },
    {
        "id": "cd-ic-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Static Single Assignment (SSA) form ensures each variable is:",
        "options": [
            "Assigned in a loop",
            "Never assigned",
            "Used once",
            "Assigned once"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Static Single Assignment (SSA): IR form where each variable ASSIGNED EXACTLY ONCE (statically in code). For control flow merges, use $\\phi$ (phi) FUNCTIONS: $x_3 = \\phi(x_1, x_2)$ selects value based on predecessor block. Example: $x=1; if\\, P\\, then\\, x=2; y=x;$ becomes $x_1=1; if\\, P\\, then\\, x_2=2; x_3=\\phi(x_1,x_2); y=x_3;$. Benefits: simplifies many optimizations - def-use chains explicit, no variable overwrites. Use-def and def-use info built-in. Enables: constant propagation, dead code elimination, register allocation. Widely used in modern optimizing compilers (LLVM, GCC). Conversion: from TAC or AST. Reconstruction: from SSA back to normal form for code generation.",
            "formula": "SSA: each variable assigned once, $\\phi$-functions"
        }
    },
    {
        "id": "cd-opt-010",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Optimization",
        "question": "Loop invariant code motion moves code:",
        "options": [
            "Into the loop",
            "Out of the loop",
            "To a different file",
            "To another function"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Loop-Invariant Code Motion (LICM): Optimization HOISTING computations that don't change inside loop to OUTSIDE loop (before entry). Invariant = value independent of loop iterations. Example: $for(i=0; i<N; i++)\\, a[i] = x*y + z;$ → $t = x*y + z; for(i=0; i<N; i++)\\, a[i] = t;$ (move $x*y+z$ out). Conditions: (1) computation dominates all loop exits, (2) target variable not modified in loop, (3) safe (no exceptions). Benefit: reduces operations from $O(N)$ executions to $O(1)$. Major loop optimization. Requires dominance analysis, data flow (reaching definitions).",
            "formula": "LICM: hoist invariant out of loop"
        }
    },
    {
        "id": "cd-opt-011",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Optimization",
        "question": "Strength reduction replaces:",
        "options": [
            "Variables with constants",
            "Addition with multiplication",
            "Expensive operations with cheaper equivalents",
            "Loops with recursion"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Strength Reduction: Replace EXPENSIVE operations with CHEAPER equivalents producing same result. Common: (1) MULTIPLICATION → SHIFT: $x * 4$ → $x << 2$, $x * 8$ → $x << 3$ (powers of 2). (2) DIVISION/MODULO → SHIFT/AND: $x / 4$ → $x >> 2$, $x \\% 8$ → $x \\& 7$. (3) INDUCTION VARIABLES in loops: $i * c$ → add $c$ per iteration instead of multiply. Example: $for(i=0;i<N;i++)\\, a[i*4]$ → $for(t=0;t<N*4;t+=4)\\, a[t]$. Benefits: faster execution (shifts 10x faster than multiply), reduced latency. Modern compilers do this automatically. Architecture-dependent (RISC vs CISC).",
            "formula": "Strength: expensive → cheap ($* → <<$)"
        }
    },
    {
        "id": "cd-opt-012",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Optimization",
        "question": "Dead code elimination removes:",
        "options": [
            "Variable declarations",
            "Code whose result is never used",
            "Comments",
            "All code"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Dead Code Elimination: Remove code whose RESULT IS NEVER USED. Two types: (1) UNREACHABLE CODE - never executed (after return, impossible conditions), (2) USELESS CODE - result computed but never referenced. Example: $x = a + b;$ ...no use of $x$... Delete it! Detection: (1) live variable analysis (backward dataflow), (2) mark reachable blocks (CFG traversal). Benefits: smaller code, faster execution, reduced register pressure. Often exposes more optimization opportunities (cascade). SSA form simplifies detection - easy to identify unused def. Essential optimization pass in all compilers.",
            "formula": "Dead code: result never used OR unreachable"
        }
    },
    {
        "id": "cd-opt-013",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Optimization",
        "question": "Constant folding evaluates:",
        "options": [
            "Functions at runtime",
            "Variables at runtime",
            "Loops at compile time",
            "Constants at compile time"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Constant Folding: Evaluate CONSTANT EXPRESSIONS at COMPILE TIME instead of runtime. Examples: (1) $2 + 3$ → $5$, (2) $true \\&\\& false$ → $false$, (3) $\"hello\" + \" world\"$ → $\"hello\\ world\"$ (language-dependent). Propagate constants: $x = 5; y = x + 3;$ → $x = 5; y = 8;$. Benefits: reduced runtime computation, enables other optimizations (branch elimination if condition constant). Must respect language semantics (overflow, NaN, exception behavior). Works with constant propagation (dataflow analysis tracking constant values). Simple yet effective optimization - significant speedup for programs with many compile-time evaluable expressions.",
            "formula": "Constant folding: eval const at compile time"
        }
    },
    {
        "id": "cd-cg-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Register allocation aims to:",
        "options": [
            "Minimize register usage while maximizing speed",
            "Increase memory usage",
            "Eliminate all registers",
            "Slow down execution"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Register Allocation: Assign program VARIABLES/TEMPORARIES to LIMITED CPU REGISTERS to minimize memory accesses (registers 100x faster than RAM). Challenge: $k$ registers but potentially hundreds of variables. NP-hard problem. Goals: (1) maximize register usage (hot variables in registers), (2) minimize spills to memory, (3) minimize move instructions. Approaches: (1) GRAPH COLORING - interference graph, (2) LINEAR SCAN - fast greedy, (3) priority-based. Live range = region where variable holds value. Interference = variables live simultaneously (can't share register). Crucial for performance - register-heavy code much faster than memory-heavy."
        }
    },
    {
        "id": "cd-cg-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Graph coloring is used for:",
        "options": [
            "Parsing",
            "Lexical analysis",
            "Type checking",
            "Register allocation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Register Allocation via Graph Coloring: Model as GRAPH COLORING problem. (1) Build INTERFERENCE GRAPH: nodes = variables/temporaries, edge between $v_1,v_2$ if they're LIVE SIMULTANEOUSLY (interfere - can't use same register). (2) K-COLOR the graph where $k$ = number of available registers. Each color = register. (3) If colorable with $k$ colors: success! Variables with same color share register (at different times). (4) If not colorable: SPILL lowest-priority variable to memory, rebuild graph, retry. Heuristics: degree-based (color low-degree first), move coalescing (reduce moves). Used in production compilers (GCC, LLVM). Graph coloring NP-complete but works well in practice with good heuristics.",
            "formula": "Register alloc: graph coloring, nodes=vars, edges=interfere"
        }
    },
    {
        "id": "cd2-phase-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "The phases of a compiler in order are:",
        "options": [
            "Code Gen, Optimization, Parsing",
            "Lexical, Syntax, Semantic, Intermediate, Optimization, Code Gen",
            "Parsing, Lexing, Code Gen",
            "Only Parsing and Code Gen"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Compiler Phases: Sequential stages transforming source to target. Standard 6-phase model: (1) LEXICAL ANALYSIS - char stream → tokens (regex/DFA), (2) SYNTAX ANALYSIS - tokens → parse tree/AST (CFG/parser), (3) SEMANTIC ANALYSIS - type checking, scope resolution, (4) INTERMEDIATE Code GENeration - AST → IR (TAC/SSA), (5) CODE OPTIMIZATION - machine-independent optimizations on IR, (6) CODE GENERATION - IR → target code (assembly/machine). Plus: symbol table (shared), error handler (all phases). Modern: oftenmultiple IRs, multiple optimization passes. Some phases combined for efficiency.",
            "formula": "Phases: Lex → Syntax → Semantic → IR → Opt → CodeGen"
        }
    },
    {
        "id": "cd2-phase-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "The front-end of compiler includes:",
        "options": [
            "Optimization only",
            "Lexical, Syntax, Semantic analysis",
            "Code generation only",
            "Linking only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Compiler FRONT-END: SOURCE LANGUAGE dependent phases analyzing source code structure/semantics: (1) LEXICAL analysis (tokenization), (2) SYNTAX analysis (parsing), (3) SEMANTIC analysis (type checking, scope). Output: IR + symbol table + error messages. Portable across targets - same frontend for different backends (x86, ARM, RISC-V). Example: GCC C frontend, Clang C++ frontend. Separated from backend for modularity - one frontend, many backends (cross-compilation). Front-end checks program correctness, backend generates efficient code.",
            "formula": "Front-end: Lex + Syntax + Semantic (source-dependent)"
        }
    },
    {
        "id": "cd2-phase-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "The back-end of compiler includes:",
        "options": [
            "Symbol table",
            "Lexical analysis",
            "Code generation and optimization",
            "Parsing"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Compiler BACK-END: TARGET MACHINE dependent phases generating efficient machine code: (1) CODE OPTIMIZATION - machine-independent (on IR) + machine-dependent (target-specific instructions, addressing modes), (2) CODE GENERATION - IR → assembly/machine code, instruction selection, register allocation, instruction scheduling. Output: relocatable object code or assembly. Separated from frontend for portability - one backend, many frontends (C, C++, Fortran for same target). Example: LLVM backend for x86, ARM backend. Back-end exploits hardware features (SIMD, pipelining, cache) for performance.",
            "formula": "Back-end: Opt + CodeGen (target-dependent)"
        }
    },
    {
        "id": "cd2-phase-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "Symbol table is used throughout:",
        "options": [
            "Only parsing phase",
            "Only code generation",
            "All phases",
            "Only lexical phase"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Symbol Table: GLOBAL DATA STRUCTURE mapping identifiers (variable/function names) to their ATTRIBUTES (type, scope, memory location, etc.). Shared across ALL compiler phases. Operations: insert (declaration), lookup (usage), delete (end of scope). Implementation: hash table (fast $O(1)$ average), tree (scoped). Information stored: (1) name, (2) type, (3) scope/nest level, (4) memory address/offset, (5) function signature (params, return type), (6) line number (error messages). Used for: semantic checking (type compatibility, declaration before use), code generation (variable addresses). Scope management: nested scopes via stacked tables or single table with scope field.",
            "formula": "Symbol table: identifier → attributes (all phases)"
        }
    },
    {
        "id": "cd2-lex-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lexical analyzer converts source to:",
        "options": [
            "Assembly code",
            "Tokens (lexemes)",
            "Object code",
            "Parse tree"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Lexer: character stream → token stream"
        }
    },
    {
        "id": "cd2-lex-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Tokens are described using:",
        "options": [
            "Turing machines",
            "PDA",
            "CFG",
            "Regular expressions"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Tokens (identifiers, keywords, etc.) are regular, described by regex"
        }
    },
    {
        "id": "cd2-lex-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lexical analyzer is implemented using:",
        "options": [
            "DFA/NFA",
            "LR parser",
            "PDA",
            "Turing machine"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Lexer = DFA (regex → NFA → DFA)"
        }
    },
    {
        "id": "cd2-lex-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lex/Flex is a tool for:",
        "options": [
            "Parser generation",
            "Code optimization",
            "Lexer generation",
            "Debugging"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Lex/Flex: generates lexer from regex specification"
        }
    },
    {
        "id": "cd2-lex-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lexer handles:",
        "options": [
            "Semantic errors",
            "Syntax errors",
            "Recognizing tokens, removing whitespace/comments",
            "Code generation"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Lexer: tokenization, remove whitespace, handle comments"
        }
    },
    {
        "id": "cd2-parse-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Syntax analysis (parsing) uses:",
        "options": [
            "Context-sensitive grammar",
            "Type 0 grammar",
            "Context-free grammar (CFG)",
            "Regular grammar"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Parsers use CFG for programming language syntax"
        }
    },
    {
        "id": "cd2-parse-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Parser output is:",
        "options": [
            "Object code",
            "Parse tree / AST",
            "Token stream",
            "Intermediate code"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Parser: tokens → parse tree (or AST)"
        }
    },
    {
        "id": "cd2-parse-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Top-down parsing builds parse tree:",
        "options": [
            "From root to leaves",
            "No tree built",
            "Random order",
            "From leaves to root"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Top-down: start from start symbol, expand to match input"
        }
    },
    {
        "id": "cd2-parse-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Bottom-up parsing builds parse tree:",
        "options": [
            "No tree built",
            "From root to leaves",
            "Random order",
            "From leaves to root"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Bottom-up: start from input, reduce to start symbol"
        }
    },
    {
        "id": "cd2-parse-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Recursive descent parser is a type of:",
        "options": [
            "Operator precedence parser",
            "Bottom-up parser",
            "LR parser",
            "Top-down parser"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Recursive descent: top-down, uses recursive functions for non-terminals"
        }
    },
    {
        "id": "cd2-parse-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LL(1) grammar conditions: no left recursion, and:",
        "options": [
            "Ambiguous",
            "Right factored",
            "Left factored",
            "No conditions"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "LL(1): no left recursion, left factored, FIRST/FOLLOW don't conflict"
        }
    },
    {
        "id": "cd2-parse-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FIRST(α) is:",
        "options": [
            "Last terminal derivable from α",
            "Set of terminals that begin strings derivable from α",
            "Empty set",
            "All non-terminals in α"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FIRST(α) = terminals that can appear first in any derivation of α"
        }
    },
    {
        "id": "cd2-parse-008",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FOLLOW(A) is:",
        "options": [
            "Terminals that can appear immediately after A in some derivation",
            "First symbol of A",
            "All terminals in grammar",
            "Non-terminals after A"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FOLLOW(A) = terminals that can appear right after A"
        }
    },
    {
        "id": "cd2-parse-009",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LL(k) means:",
        "options": [
            "Right-to-left parsing",
            "Left-to-right, Rightmost derivation",
            "Left-to-right, Leftmost derivation, k symbols lookahead",
            "k productions"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "LL(k): scan Left-to-right, Leftmost derivation, k lookahead"
        }
    },
    {
        "id": "cd2-parse-010",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LR(k) means:",
        "options": [
            "Left-to-right, Rightmost derivation (reverse), k lookahead",
            "k reductions",
            "Left-to-right, Leftmost derivation",
            "Right-to-left parsing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "LR(k): scan Left-to-right, Rightmost derivation in reverse, k lookahead"
        }
    },
    {
        "id": "cd2-parse-011",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LR parsers are more powerful than LL parsers because:",
        "options": [
            "They use less memory",
            "They don't need lookahead",
            "They can handle more grammars (including left-recursive)",
            "They are simpler"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "LR handles larger class of grammars than LL"
        }
    },
    {
        "id": "cd2-parse-012",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Types of LR parsers in order of power:",
        "options": [
            "LALR < SLR < CLR",
            "All are equal",
            "SLR < LALR < CLR",
            "CLR < LALR < SLR"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SLR ⊂ LALR ⊂ CLR (Canonical LR most powerful)"
        }
    },
    {
        "id": "cd2-parse-013",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Yacc/Bison is a tool for:",
        "options": [
            "Assembly",
            "Code optimization",
            "Lexer generation",
            "Parser generation (LALR)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Yacc/Bison: generates LALR(1) parser from grammar"
        }
    },
    {
        "id": "cd2-parse-014",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Shift-Reduce parsing uses:",
        "options": [
            "Stack",
            "Queue",
            "Tree",
            "Hash table"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "LR parsing uses stack for shift (push) and reduce (pop + push)"
        }
    },
    {
        "id": "cd2-parse-015",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Shift action in LR parsing:",
        "options": [
            "Pops and reduces by production",
            "Reports error",
            "Accepts input",
            "Pushes next input symbol onto stack"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Shift: push current input symbol onto stack, advance input"
        }
    },
    {
        "id": "cd2-parse-016",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Reduce action in LR parsing:",
        "options": [
            "Shift and reduce simultaneously",
            "Push symbol onto stack",
            "Pop RHS of production, push LHS",
            "Accept input"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Reduce: pop |RHS| symbols, push LHS non-terminal"
        }
    },
    {
        "id": "cd2-parse-017",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Handle in bottom-up parsing is:",
        "options": [
            "All terminals",
            "The start symbol",
            "Leftmost simple phrase reducible to non-terminal",
            "Any substring"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Handle: substring matching RHS of production to reduce"
        }
    },
    {
        "id": "cd2-sem-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Semantic Analysis",
        "question": "Semantic analysis checks:",
        "options": [
            "Token validity",
            "Type checking, scope rules",
            "Performance",
            "Syntax correctness"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Semantic: type checking, declaration before use, scope rules"
        }
    },
    {
        "id": "cd2-sem-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Semantic Analysis",
        "question": "Syntax-Directed Translation (SDT) attaches:",
        "options": [
            "Semantic rules/actions to grammar productions",
            "No attributes",
            "Assembly code",
            "Only one attribute"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "SDT: semantic rules (attributes) associated with productions"
        }
    },
    {
        "id": "cd2-sem-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Semantic Analysis",
        "question": "S-attributed definition uses only:",
        "options": [
            "Both",
            "Inherited attributes",
            "Synthesized attributes",
            "Neither"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "S-attributed: only synthesized (computed bottom-up)"
        }
    },
    {
        "id": "cd2-sem-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Semantic Analysis",
        "question": "L-attributed definition allows:",
        "options": [
            "Any order of evaluation",
            "Only inherited attributes",
            "Synthesized + inherited from left siblings or parent",
            "No attributes"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "L-attributed: inherited from left siblings or parent, synthesized OK"
        }
    },
    {
        "id": "cd2-sem-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Semantic Analysis",
        "question": "Type checking is part of:",
        "options": [
            "Syntax analysis",
            "Semantic analysis",
            "Lexical analysis",
            "Code generation"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Type checking: semantic phase, ensures type compatibility"
        }
    },
    {
        "id": "cd2-ir-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Three-address code (TAC) has at most:",
        "options": [
            "3 addresses per instruction",
            "Unlimited addresses",
            "2 addresses",
            "1 address per instruction"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TAC: x = y op z (at most 3 addresses)"
        }
    },
    {
        "id": "cd2-ir-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Common TAC representations include:",
        "options": [
            "Only quadruples",
            "Parse tree only",
            "Quadruples, triples, indirect triples",
            "Only assembly"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TAC: quadruples (op, arg1, arg2, result), triples, indirect triples"
        }
    },
    {
        "id": "cd2-ir-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Quadruple format is:",
        "options": [
            "Only (op, result)",
            "(result, op, arg1, arg2)",
            "(op, arg1, arg2, result)",
            "(op, result, arg1, arg2)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Quadruple: (operator, arg1, arg2, result)"
        }
    },
    {
        "id": "cd2-opt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Machine-independent optimization is done on:",
        "options": [
            "Binary code",
            "Object code",
            "Intermediate code",
            "Assembly code"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "IR-level optimization: independent of target machine"
        }
    },
    {
        "id": "cd2-opt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Common subexpression elimination removes:",
        "options": [
            "All expressions",
            "All loops",
            "Redundant computation of same expression",
            "All variables"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CSE: if expression computed before and values unchanged, reuse result"
        }
    },
    {
        "id": "cd2-opt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Dead code elimination removes:",
        "options": [
            "Code whose result is never used",
            "Optimized code",
            "Loop code",
            "All code"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Dead code: unreachable or result never used"
        }
    },
    {
        "id": "cd2-opt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Constant folding computes:",
        "options": [
            "Runtime constants",
            "Variable values",
            "Loop bounds",
            "Compile-time evaluation of constant expressions"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Constant folding: evaluate constant expressions at compile time"
        }
    },
    {
        "id": "cd2-opt-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Loop-invariant code motion:",
        "options": [
            "Moves code into loops",
            "Unrolls loops",
            "Removes all loops",
            "Moves computation independent of loop outside the loop"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Loop-invariant: move expressions not changing in loop to before loop"
        }
    },
    {
        "id": "cd2-opt-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Strength reduction replaces:",
        "options": [
            "Variables with constants",
            "Expensive operations with cheaper equivalents",
            "Addition with multiplication",
            "Functions with inline code"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Strength reduction: replace * with +, / with shifts, etc."
        }
    },
    {
        "id": "cd2-opt-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Induction variable elimination in loops:",
        "options": [
            "Converts loops to recursion",
            "Removes or replaces auxiliary loop variables",
            "Adds more loop variables",
            "Unrolls loops"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Remove induction variables that can be computed from primary induction var"
        }
    },
    {
        "id": "cd2-opt-008",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Loop unrolling:",
        "options": [
            "Removes loop entirely",
            "Replicates loop body to reduce overhead",
            "Creates more loop iterations",
            "Converts loop to function"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Unrolling: replicate body n times, reduce loop control overhead"
        }
    },
    {
        "id": "cd2-opt-009",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Function inlining:",
        "options": [
            "Calls function recursively",
            "Replaces function call with function body",
            "Adds function parameters",
            "Removes function"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Inline: replace call with copy of function body (eliminate overhead)"
        }
    },
    {
        "id": "cd2-cg-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Code generator produces:",
        "options": [
            "Parse tree",
            "Intermediate code",
            "Target machine code",
            "Tokens"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Code gen: IR → target code (assembly or machine code)"
        }
    },
    {
        "id": "cd2-cg-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Register allocation is:",
        "options": [
            "Allocating memory to variables",
            "Removing registers",
            "Loading from disk",
            "Assigning variables to limited CPU registers"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Register allocation: map variables to CPU registers (NP-hard)"
        }
    },
    {
        "id": "cd2-cg-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Register allocation using graph coloring: nodes are:",
        "options": [
            "Basic blocks",
            "Registers",
            "Instructions",
            "Variables (live ranges)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Interference graph: nodes = variables, edge if live simultaneously"
        }
    },
    {
        "id": "cd2-cg-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Basic block is:",
        "options": [
            "Single instruction",
            "Maximal sequence with one entry, one exit, no jumps in/out",
            "Entire program",
            "Any sequence of instructions"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Basic Block: MAXIMAL sequence of consecutive THREE-ADDRESS CODE instructions with: (1) ONE ENTRY POINT - only first instruction can be entered (no jumps into middle), (2) ONE EXIT POINT - only last instruction transfers control out (no jumps out from middle). Straight-line code, NO BRANCHES except possibly at end. Identified by: (1) start = first instruction, or target of branch, or instruction after branch, (2) end = branch instruction, or instruction before next start. Used for: local optimization (CSE, dead code within block), data flow analysis. Program partitioned into basic blocks. CFG built from blocks. Example: $t1=a+b; t2=t1*c; ifthen goto L1; t3=t2-5;$ (4 instructions, 1 block if no label inside).",
            "formula": "Basic block: straight-line, 1 entry/1 exit"
        }
    },
    {
        "id": "cd2-cg-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Control Flow Graph (CFG) nodes are:",
        "options": [
            "Tokens",
            "Basic blocks",
            "Variables",
            "Registers"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Control Flow Graph (CFG): Directed graph representing ALL POSSIBLE CONTROL FLOW PATHS through program. Nodes = BASIC BLOCKS (maximal straight-line code sequences). Edges = CONTROL FLOW (jumps, branches, fall-through). Edge from block $B_1$ to $B_2$ if: (1) $B_1$ ends with branch/goto to $B_2$, or (2) $B_1$ falls through to $B_2$ (sequential). Used for: (1) DATA FLOW analysis (reaching defs, live variables), (2) OPTIMIZATION (loop detection, dead code), (3) CODE GENERATION. Properties: Entry node (start), Exit node(s). Loop = back edge (target dominates source). Modern compilers (GCC, LLVM) heavily use CFG for analysis/optimization.",
            "formula": "CFG: nodes=basic blocks, edges=control flow"
        }
    },
    {
        "id": "cd2-cg-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Peephole optimization works on:",
        "options": [
            "Small window of instructions",
            "IR only",
            "Entire program",
            "Single basic block"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Peephole Optimization: LOCAL optimization examining SMALL SLIDING WINDOW (peephole) of adjacent instructions, replacing with better sequence. Window size: typically 2-5 instructions. Transformations: (1) REDUNDANT LOAD/STORE elimination: $st\\ R1,x; ld\\ R1,x$ → $st\\ R1,x$, (2) ALGEBRAIC simplification: $x*1 → x$, $x+0 → x$, (3) STRENGTH REDUCTION: $x*2 → x<<1$, (4) UNREACHABLE CODE after unconditional jump, (5) FLOW OF CONTROL: $goto\\ L1; L1:goto\\ L2$ → $goto\\ L2$. Fast, effective, machine-dependent. Applied late in code generation on assembly/machine code. Multiple passes until no changes. Simple but powerful - catches code generator inefficiencies.",
            "formula": "Peephole: small window, local optimizations"
        }
    },
    {
        "id": "cd2-rt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Activation record (stack frame) contains:",
        "options": [
            "Only global variables",
            "Local variables, parameters, return address, saved registers",
            "Only heap data",
            "Only return address"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Activation Record (Stack Frame): Data structure pushed onto RUNTIME STACK for each FUNCTION CALL. Contains ALL information needed for function execution: (1) LOCAL VARIABLES - function's local vars, (2) PARAMETERS - actual arguments passed, (3) RETURN ADDRESS - where to resume after return, (4) SAVED REGISTERS - caller-saved or callee-saved registers, (5) CONTROL/DYNAMIC LINK - pointer to caller's activation record, (6) ACCESS/STATIC LINK - pointer to lexically enclosing scope (for nested functions/closures), (7) RETURN VALUE space (sometimes). Layout varies by architecture/calling convention (cdecl, stdcall). Stack grows downward on most systems. LIFO structure - latest call on top. Essential for recursion - each call gets own activation.",
            "formula": "Activation record: locals+params+retAddr+links"
        }
    },
    {
        "id": "cd2-rt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Static allocation is used for:",
        "options": [
            "Dynamic arrays",
            "Local variables",
            "Heap objects",
            "Global variables, constants"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Static Allocation: Memory allocated at COMPILE TIME - addresses and sizes KNOWN before execution. Used for: (1) GLOBAL VARIABLES - accessible throughout program lifetime, (2) CONSTANTS/LITERALS - immutable data, (3) STATIC variables (C/C++ static keyword) - persist across function calls, (4) CODE (instructions). Advantages: (1) FAST - no runtime overhead, (2) SIMPLE - fixed addresses. Disadvantages: (1) size must be compile-time constant, (2) no recursion support, (3) wastes space if not always used. Memory regions: .data (initialized globals), .bss (uninitialized), .rodata (constants), .text (code). Contrast: stack (dynamic, LIFO), heap (dynamic, programmer-managed).",
            "formula": "Static: compile-time alloc, globals/constants"
        }
    },
    {
        "id": "cd2-rt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Stack allocation is used for:",
        "options": [
            "Dynamic objects",
            "Static arrays",
            "Local variables, function calls",
            "Global variables"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Stack Allocation: RUNTIME memory allocation using CALL STACK (LIFO - Last In First Out). Used for: (1) LOCAL VARIABLES - function scope, (2) ACTIVATION RECORDS - function calls, (3) PARAMETERS - argument passing, (4) RETURN addresses, saved registers. Operations: PUSH activation record on call, POP on return. Advantages: (1) AUTOMATIC management - no malloc/free, (2) FAST - increment/decrement stack pointer, (3) LOCALITY - recent data in cache, (4) SUPPORTS RECURSION - each call gets fresh frame. Disadvantages: (1) LIMITED SIZE - stack overflow if deep recursion/large locals, (2) LIFETIME - data destroyed on return. Typical size: 1-8 MB. Stack pointer (SP), frame pointer (FP/BP) registers manage stack.",
            "formula": "Stack: LIFO, activation records, auto-managed"
        }
    },
    {
        "id": "cd2-rt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Heap allocation is used for:",
        "options": [
            "Return addresses",
            "Dynamically allocated objects (malloc, new)",
            "Fixed-size locals",
            "Global constants"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Heap Allocation: DYNAMIC memory allocation for VARIABLE-SIZED, LONG-LIVED data. Programmer-requested (malloc/new) or garbage-collected (Java, Python). Used for: (1) DYNAMIC STRUCTURES - linked lists, trees, resizable arrays, (2) OBJECTS whose size unknown at compile time, (3) DATA outliving function scope. Operations: allocate (malloc/new), deallocate (free/delete). Management: (1) MANUAL - C/C++, programmer frees (error-prone: leaks, dangling pointers), (2) GARBAGE COLLECTION - Java/Python, automatic reclamation (mark-sweep, copying, generational). Advantages: (1) FLEXIBLE - any size, any lifetime. Disadvantages: (1) SLOW - allocation costly, (2) FRAGMENTATION - external (gaps), internal (unused in block), (3) management complexity. Larger than stack (gigabytes).",
            "formula": "Heap: dynamic alloc, programmer/GC managed"
        }
    },
    {
        "id": "cd2-rt-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Access link (static link) in activation record is used for:",
        "options": [
            "Accessing non-local variables in lexically enclosing scopes",
            "Dynamic scoping",
            "Garbage collection",
            "Returning to caller"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Static link: access variables in lexically enclosing scope"
        }
    },
    {
        "id": "cd2-rt-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Control link (dynamic link) points to:",
        "options": [
            "Heap start",
            "Global data",
            "Lexically enclosing scope",
            "Caller's activation record"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Dynamic/control link: points to caller's frame for return"
        }
    },
    {
        "id": "cd3-phase-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "Number of phases in a typical compiler:",
        "options": [
            "6",
            "7",
            "5",
            "4"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "6 phases: Lexical, Syntax, Semantic, ICG, Optimization, Code Gen"
        }
    },
    {
        "id": "cd3-phase-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "Analysis phase of compiler includes:",
        "options": [
            "None of these",
            "Lexical, Syntax, Semantic analysis",
            "Code generation only",
            "Code optimization only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Analysis (front-end): Lexical + Syntax + Semantic"
        }
    },
    {
        "id": "cd3-phase-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Compiler Phases",
        "question": "Synthesis phase of compiler includes:",
        "options": [
            "Symbol table only",
            "ICG, Optimization, Code Generation",
            "Lexical analysis",
            "Parsing only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Synthesis (back-end): ICG + Optimization + Code Gen"
        }
    },
    {
        "id": "cd3-lex-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lexeme is:",
        "options": [
            "Symbol table entry",
            "Smallest unit of program (actual text)",
            "Internal representation",
            "Token type"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Lexeme: actual text sequence. Token: internal representation"
        }
    },
    {
        "id": "cd3-lex-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Types of tokens include:",
        "options": [
            "Only operators",
            "Only identifiers",
            "Only keywords",
            "Identifier, keyword, operator, literal, special symbol"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "5 token types: identifier, keyword, operator, literal, special symbol"
        }
    },
    {
        "id": "cd3-lex-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Lexical analyzer is implemented using:",
        "options": [
            "Turing machine",
            "PDA",
            "DFA (from regular expression)",
            "Stack"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "LA: Regular Expression → NFA → DFA → Lexer"
        }
    },
    {
        "id": "cd3-lex-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Maximal munch rule means:",
        "options": [
            "Error recovery",
            "Match longest prefix when ambiguous",
            "Read minimum characters",
            "Ignore comments"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Longest prefix match: '==' chosen over '=' + '='"
        }
    },
    {
        "id": "cd3-tok-001",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Number of tokens in: void main() { printf(\"gate\"); }",
        "correctAnswer": 11,
        "tolerance": 0,
        "explanation": {
            "solution": "void(1) main(1) ((1) )(1) {(1) printf(1) ((1) \"gate\"(1) )(1) ;(1) }(1) = 11"
        }
    },
    {
        "id": "cd3-tok-002",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Number of tokens in: int x, *p; x = 10; p = &x; x++;",
        "correctAnswer": 18,
        "tolerance": 0,
        "explanation": {
            "solution": "int x , * p ; x = 10 ; p = & x ; x ++ ; = 18 tokens"
        }
    },
    {
        "id": "cd3-tok-003",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Number of tokens in: int x; x = y; x == y;",
        "correctAnswer": 11,
        "tolerance": 0,
        "explanation": {
            "solution": "int(1) x(1) ;(1) x(1) =(1) y(1) ;(1) x(1) ==(1) y(1) ;(1) = 11"
        }
    },
    {
        "id": "cd3-tok-004",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Number of tokens in: char ch = 'A';",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "char(1) ch(1) =(1) 'A'(1) ;(1) = 5"
        }
    },
    {
        "id": "cd3-tok-005",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Number of tokens in: char *p = \"gate\";",
        "correctAnswer": 6,
        "tolerance": 0,
        "explanation": {
            "solution": "char(1) *(1) p(1) =(1) \"gate\"(1) ;(1) = 6"
        }
    },
    {
        "id": "cd3-parse-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Parser is implemented using:",
        "options": [
            "Linear bounded automata",
            "DPDA (Deterministic PDA)",
            "DFA",
            "NFA"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Parser = DPDA (handles CFG for programming languages)"
        }
    },
    {
        "id": "cd3-parse-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LL(1) parser uses:",
        "options": [
            "RMD",
            "Random",
            "Bottom-up",
            "LMD (Left to right, Leftmost derivation)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "LL(1): Left-to-right scan, Leftmost derivation, 1 lookahead"
        }
    },
    {
        "id": "cd3-parse-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LR(1) parser uses:",
        "options": [
            "Only LMD",
            "Reverse of RMD (bottom-up)",
            "No derivation",
            "LMD"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "LR: Left-to-right, Rightmost derivation in Reverse"
        }
    },
    {
        "id": "cd3-parse-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Hierarchy of LR parsers (weakest to strongest):",
        "options": [
            "SLR < LALR < CLR",
            "CLR < LALR < SLR",
            "LALR < SLR < CLR",
            "All equal"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Power: SLR(1) ⊂ LALR(1) ⊂ CLR(1)"
        }
    },
    {
        "id": "cd3-parse-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LL(1) grammar cannot have:",
        "options": [
            "Terminals",
            "Right recursion",
            "Production rules",
            "Left recursion or common prefix"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "LL(1): no left recursion, no common prefix (left factor)"
        }
    },
    {
        "id": "cd3-parse-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FIRST set contains:",
        "options": [
            "Terminals that can start strings derived from symbol",
            "Only ε",
            "Only $",
            "Variables"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FIRST(X) = terminals that can begin strings derived from X"
        }
    },
    {
        "id": "cd3-parse-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FOLLOW set contains:",
        "options": [
            "Never contains $",
            "Terminals that can appear after a variable",
            "Terminals only",
            "Variables"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FOLLOW(A) = terminals that can appear immediately after A"
        }
    },
    {
        "id": "cd3-parse-008",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Grammar is LL(1) if for all A → α | β:",
        "options": [
            "Always LL(1)",
            "FIRST(α) ∩ FIRST(β) ≠ ∅",
            "Never LL(1)",
            "FIRST(α) ∩ FIRST(β) = ∅ and other conditions"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "LL(1) condition: FIRST(α) ∩ FIRST(β) = ∅, and if ε in FIRST, check FOLLOW"
        }
    },
    {
        "id": "cd3-parse-009",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Shift-Reduce conflict occurs when:",
        "options": [
            "Only shift possible",
            "Neither possible",
            "Both shift and reduce possible in same state",
            "Two reduces possible"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SR conflict: parser can't decide between shift and reduce"
        }
    },
    {
        "id": "cd3-parse-010",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Reduce-Reduce conflict occurs when:",
        "options": [
            "Two different reductions possible in same state",
            "Shift and reduce",
            "No conflict",
            "Only one reduce"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "RR conflict: multiple productions valid for reduction"
        }
    },
    {
        "id": "cd3-parse-011",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Operator precedence grammar requires:",
        "options": [
            "No two variables adjacent and no ε productions",
            "Always ε productions",
            "Only terminals",
            "Two variables adjacent"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "OPG: no VV adjacent, no ε, allows some ambiguous grammars"
        }
    },
    {
        "id": "cd3-sdt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Synthesized attribute depends on:",
        "options": [
            "Parent node",
            "Root only",
            "Siblings",
            "Children nodes"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Synthesized: computed from children (bottom-up)"
        }
    },
    {
        "id": "cd3-sdt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Inherited attribute depends on:",
        "options": [
            "Children",
            "Only leaves",
            "Parent and/or left siblings",
            "Right siblings only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Inherited: from parent or left siblings (top-down/left-right)"
        }
    },
    {
        "id": "cd3-sdt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "S-attributed grammar uses:",
        "options": [
            "Only synthesized attributes",
            "Both equally",
            "No attributes",
            "Only inherited attributes"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "S-attributed: synthesized only, can use bottom-up parsing"
        }
    },
    {
        "id": "cd3-sdt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "L-attributed grammar uses:",
        "options": [
            "Synthesized + restricted inherited (parent/left sibling)",
            "Only inherited",
            "Only right sibling",
            "No attributes"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "L-attributed: synthesized + inherited from parent/left siblings"
        }
    },
    {
        "id": "cd3-sdt-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Relationship between S-attributed and L-attributed:",
        "options": [
            "Incomparable",
            "Equal",
            "L ⊂ S",
            "S ⊂ L (every S-attributed is L-attributed)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Every S-attributed grammar is also L-attributed"
        }
    },
    {
        "id": "cd3-sdt-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "S-attributed evaluation order:",
        "options": [
            "Post-order (reverse RMD)",
            "Pre-order",
            "Random",
            "In-order"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "S-attributed: bottom-up (reverse of RMD)"
        }
    },
    {
        "id": "cd3-sdt-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "L-attributed evaluation order:",
        "options": [
            "Reverse pre-order",
            "Post-order",
            "Random",
            "In-order (depth-first left-to-right)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "L-attributed: in-order traversal (topological)"
        }
    },
    {
        "id": "cd3-ic-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "3-address code has at most:",
        "options": [
            "1 address",
            "2 addresses per instruction",
            "4 addresses",
            "3 addresses per instruction (including LHS)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "3AC: at most 3 addresses (e.g., t = a + b)"
        }
    },
    {
        "id": "cd3-ic-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "DAG (Directed Acyclic Graph) is used for:",
        "options": [
            "Parsing only",
            "Lexical analysis",
            "Eliminating common subexpressions",
            "Syntax errors"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DAG: common subexpression elimination"
        }
    },
    {
        "id": "cd3-ic-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "SSA (Static Single Assignment) means:",
        "options": [
            "Dynamic assignment",
            "Each variable assigned exactly once",
            "No assignments",
            "Multiple assignments to same variable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SSA: every variable has single definition point"
        }
    },
    {
        "id": "cd3-ic-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Basic block starts with:",
        "options": [
            "Only return",
            "Only function call",
            "Any instruction",
            "Leader (first instruction or target of jump)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Basic block: starts with leader, ends with jump/return"
        }
    },
    {
        "id": "cd3-3ac-001",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Intermediate Code",
        "question": "Minimum temporaries for expression (a-b)*(c+d)+(a-b) using 3AC with DAG?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "t1=a-b, t2=c+d, t3=t1*t2+t1 (reuse t1). Minimum 3 temps"
        }
    },
    {
        "id": "cd3-opt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Constant folding means:",
        "options": [
            "Adding constants",
            "Evaluating constant expressions at compile time",
            "Folding code",
            "Removing constants"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "x = 2*3+5 → x = 11 at compile time"
        }
    },
    {
        "id": "cd3-opt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Copy propagation replaces:",
        "options": [
            "Nothing",
            "Uses of variable with its definition",
            "Functions with code",
            "Constants with variables"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "x=y; z=x+1 → z=y+1 (propagate x=y)"
        }
    },
    {
        "id": "cd3-opt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Strength reduction replaces:",
        "options": [
            "Nothing",
            "Strong operators with weaker ones",
            "Expensive operations with cheaper equivalents",
            "Addition with subtraction"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "x=y*2 → x=y<<1 (shift cheaper than multiply)"
        }
    },
    {
        "id": "cd3-opt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Dead code elimination removes:",
        "options": [
            "All code",
            "Code that doesn't affect output",
            "Loops only",
            "Comments only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Remove unreachable code or code with unused results"
        }
    },
    {
        "id": "cd3-opt-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Common subexpression elimination is done using:",
        "options": [
            "Stack",
            "DAG",
            "Queue",
            "Heap"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DAG: reuse nodes for common subexpressions"
        }
    },
    {
        "id": "cd3-opt-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Loop invariant code motion moves:",
        "options": [
            "Nothing",
            "Variables only",
            "Code into loop",
            "Invariant code outside the loop"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Move computations that don't change inside loop to outside"
        }
    },
    {
        "id": "cd3-opt-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Loop unrolling:",
        "options": [
            "Creates new loops",
            "Deletes loops",
            "Rolls up loop",
            "Replicates loop body to reduce iterations"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Unroll: for(i=0;i<4;i++)f(); → f();f();f();f(); reduces overhead"
        }
    },
    {
        "id": "cd3-opt-008",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Peephole optimization examines:",
        "options": [
            "Only loops",
            "Small window of instructions",
            "Entire program",
            "Only functions"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Peephole: local optimization on small instruction sequences"
        }
    },
    {
        "id": "cd3-opt-009",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Induction variable elimination optimizes:",
        "options": [
            "Function calls",
            "Arrays",
            "Loop index variables linked by linear relationship",
            "Constants"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "If j=4*i in loop, eliminate i, use j directly"
        }
    },
    {
        "id": "cd3-rt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Activation record contains:",
        "options": [
            "Local variables, parameters, return address, saved registers",
            "Only code",
            "Only data",
            "Only return address"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Activation record: all info for one function invocation"
        }
    },
    {
        "id": "cd3-rt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Static scope (lexical scope) determines binding at:",
        "options": [
            "Link time",
            "Runtime",
            "Compile time",
            "Load time"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Static: scope determined by program structure"
        }
    },
    {
        "id": "cd3-rt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Dynamic scope determines binding at:",
        "options": [
            "Never",
            "Link time",
            "Compile time",
            "Runtime based on calling sequence"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Dynamic: binding based on call stack at runtime"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-lex-001",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "[GATE 2017 Style] Number of tokens in: printf(\"i = %d, &i = %x\", i, &i);",
        "correctAnswer": 10,
        "tolerance": 0,
        "explanation": {
            "solution": "printf ( \"i = %d, &i = %x\" , i , & i ) ; = 10 tokens. String is 1 token."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-lex-002",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "[GATE 2015 Style] Number of tokens in: int main() { int a = 10; return 0; }",
        "correctAnswer": 14,
        "tolerance": 0,
        "explanation": {
            "solution": "int main ( ) { int a = 10 ; return 0 ; } = 14 tokens"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-lex-003",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Number of tokens in: for(i=0; i<n; i++) a[i]=0;",
        "correctAnswer": 17,
        "tolerance": 0,
        "explanation": {
            "solution": "for ( i = 0 ; i < n ; i ++ ) a [ i ] = 0 ; = 17"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-lex-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Which phase of compiler uses regular expressions?",
        "options": [
            "Syntax analysis",
            "Code generation",
            "Semantic analysis",
            "Lexical analysis"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Lexical analyzer uses RE → NFA → DFA for tokenization"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-lex-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Lexical Analysis",
        "question": "Which is NOT a valid token in C?",
        "options": [
            "123abc",
            "_var",
            "abc123",
            "__LINE__"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Identifiers cannot start with digit: 123abc is invalid"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Which grammar is suitable for LR parsing but not LL?",
        "options": [
            "ε-free grammar",
            "Left recursive grammar",
            "Right recursive grammar",
            "Ambiguous grammar"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Left recursion: allowed in LR, not in LL"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "In SLR parsing, reduce action uses:",
        "options": [
            "FOLLOW set",
            "Neither",
            "Both FIRST and FOLLOW",
            "FIRST set"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "SLR: reduce on symbols in FOLLOW(LHS)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Bottom-up parsing is same as:",
        "options": [
            "Rightmost derivation in reverse",
            "Preorder traversal",
            "Postorder traversal",
            "Leftmost derivation"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Bottom-up = reverse of rightmost derivation"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Handle in shift-reduce parsing is:",
        "options": [
            "Leftmost terminal",
            "Any production",
            "A substring matching RHS that reduces to LHS",
            "Rightmost nonterminal"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Handle: substring that matches RHS and should be reduced"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "LALR(1) parser is:",
        "options": [
            "More powerful than CLR(1)",
            "Less powerful than CLR(1) but same states as SLR",
            "Same as CLR(1)",
            "Same as SLR"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "LALR: CLR states merged (same as SLR count), less power than CLR"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-006",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Grammar: S→aAb|bBa, A→a|as, B→b|bS. Number of productions = ?",
        "correctAnswer": 6,
        "tolerance": 0,
        "explanation": {
            "solution": "S→aAb, S→bBa, A→a, A→aS, B→b, B→bS = 6 productions"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Operator precedence parser cannot parse:",
        "options": [
            "a+b*c",
            "a*(b+c)",
            "a+b+c",
            "Unary minus expressions like -a+b"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "OPG cannot have two operators adjacent (unary operators)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-008",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Ambiguous grammar is always:",
        "options": [
            "Neither LL nor LR",
            "LR(1)",
            "LL(1)",
            "Both LL and LR"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Ambiguous grammars cannot be parsed by deterministic parsers"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-009",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Number of items in canonical collection for S→AB, A→a, B→b:",
        "options": [
            "9",
            "3",
            "7",
            "5"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Augmented: S'→S. States: I0 to I6 typically = 7 states"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-parse-010",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FIRST(ε) = ?",
        "options": [
            "All terminals",
            "Error",
            "{ε}",
            "{}"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FIRST(ε) = {ε}"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ff-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "Given E→E+T|T, T→T*F|F, F→(E)|id. FIRST(E) = ?",
        "options": [
            "{E, T, F}",
            "{+, *}",
            "{(, id}",
            "{+, *, (, id}"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FIRST(E) = FIRST(T) = FIRST(F) = {(, id}"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ff-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "FOLLOW(start symbol) always contains:",
        "options": [
            "ε",
            "$ (end marker)",
            "All terminals",
            "Nothing"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FOLLOW(S) always contains $ by definition"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ff-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Parsing",
        "question": "If A→αBβ then FOLLOW(B) contains:",
        "options": [
            "FIRST(β) - {ε}",
            "FIRST(A)",
            "Nothing",
            "FOLLOW(A) only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FOLLOW(B) includes FIRST(β) - {ε}. If ε in FIRST(β), add FOLLOW(A)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-sdt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Which is true for S-attributed grammar?",
        "options": [
            "Needs multiple passes",
            "Can use bottom-up parser (LR)",
            "Can use top-down parser",
            "Cannot be parsed"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "S-attributed: only synthesized, evaluated bottom-up (LR)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-sdt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "L-attributed definition allows inherited attributes from:",
        "options": [
            "Children",
            "Right siblings",
            "Parent and left siblings only",
            "Any node"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "L-attributed: parent, left siblings (not right siblings or children)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-sdt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Annotated parse tree is used in:",
        "options": [
            "Lexical analysis",
            "Syntax directed translation",
            "Linking",
            "Code generation only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SDT: parse tree with attribute values = annotated parse tree"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-sdt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Given E→E1+T {E.val = E1.val + T.val}. 'val' is:",
        "options": [
            "Neither",
            "Inherited attribute",
            "Both",
            "Synthesized attribute"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "val of E computed from children: synthesized"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-sdt-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "SDT",
        "question": "Given D→TL {L.type=T.type}, L→L1,id {L1.type=L.type}. 'type' for L is:",
        "options": [
            "Both",
            "Inherited",
            "Neither",
            "Synthesized"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "L.type comes from parent (T) or left sibling: inherited"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ic-001",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "3AC",
        "question": "[GATE 2017 Style] Minimum temporaries for (a+b)*(c+d)-(a+b) using 3AC with common subexpression elimination:",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "t1=a+b (reused), t2=c+d, t3=t1*t2-t1. Min 3 temps"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ic-002",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "3AC",
        "question": "Number of 3AC statements for a = b + c * d - e / f:",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "t1=c*d, t2=e/f, t3=b+t1, a=t3-t2 = 4 statements"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ic-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "3AC",
        "question": "Quadruple representation stores:",
        "options": [
            "(op, arg1, result)",
            "(op, result)",
            "(op, arg1, arg2, result)",
            "(arg1, arg2, op)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Quadruple: (operator, arg1, arg2, result)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ic-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "3AC",
        "question": "Triple representation saves space by:",
        "options": [
            "Using hash table",
            "Not storing operator",
            "Compression",
            "Not storing result (use statement number)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Triple: no result field, reference by statement number"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-ic-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "3AC",
        "question": "DAG (Directed Acyclic Graph) helps in:",
        "options": [
            "Register allocation",
            "Linking",
            "Common subexpression elimination",
            "Syntax analysis"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DAG identifies and eliminates common subexpressions"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "x=2*y can be optimized to x=y<<1. This is:",
        "options": [
            "Copy propagation",
            "Strength reduction",
            "Constant folding",
            "Dead code elimination"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Replacing * with << is strength reduction"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "x=3*2+1 becomes x=7 at compile time. This is:",
        "options": [
            "Constant folding",
            "Inlining",
            "Strength reduction",
            "Dead code"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Compile-time evaluation = constant folding"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "if(false) {x=1;} can be removed. This is:",
        "options": [
            "Constant folding",
            "Copy propagation",
            "Loop optimization",
            "Dead code elimination"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Unreachable code removal = dead code elimination"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Moving invariant computation outside loop is:",
        "options": [
            "Loop unrolling",
            "Code motion",
            "Dead code",
            "Strength reduction"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Loop invariant code motion"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-005",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "for(i=0;i<100;i++)f(); → 100 calls of f() without loop. This is:",
        "options": [
            "Code motion",
            "Loop unrolling",
            "CSE",
            "Inlining"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Expanding loop body = loop unrolling"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-006",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "y=x; z=y+1; → z=x+1; is:",
        "options": [
            "Dead code",
            "Constant folding",
            "Copy propagation",
            "CSE"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Replacing y with x = copy propagation"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-007",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Peephole optimization works on:",
        "options": [
            "Source code",
            "Parse tree",
            "Entire program",
            "Small window of target code"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Peephole: local optimization on instruction window"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-opt-008",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Optimization",
        "question": "Which is machine-dependent optimization?",
        "options": [
            "Register allocation",
            "Loop unrolling",
            "Dead code elimination",
            "Constant folding"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Register allocation depends on target architecture"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-cg-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Register allocation is modeled as:",
        "options": [
            "Maximum flow",
            "Minimum spanning tree",
            "Shortest path problem",
            "Graph coloring problem"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Interference graph coloring: k-colorable = k registers"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-cg-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Live variable analysis determines:",
        "options": [
            "Loop bounds",
            "Variables never used",
            "Variables used after a point",
            "Constant values"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Live: variable may be used later before redefinition"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-cg-003",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Expression tree with 3 internal nodes needs minimum ___ registers:",
        "correctAnswer": 2,
        "tolerance": 0,
        "explanation": {
            "solution": "Sethi-Ullman: binary tree with 3 internal nodes needs 2 registers"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-cg-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Code Generation",
        "question": "Instruction selection is part of:",
        "options": [
            "Lexical analysis",
            "Optimization only",
            "Parsing",
            "Code generation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Code gen: instruction selection, register allocation, scheduling"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-rt-001",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Activation record for a function call contains:",
        "options": [
            "Only parameters",
            "Only code",
            "Parameters, locals, return address, saved registers",
            "Only return address"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "AR: params, return addr, saved regs, locals, control/access links"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-rt-002",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Static link in activation record is used for:",
        "options": [
            "Register saving",
            "Accessing enclosing scope variables (lexical scoping)",
            "Return address",
            "Dynamic scoping"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Static link: access lexically enclosing scope"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-rt-003",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Display is used to optimize access to:",
        "options": [
            "Global variables",
            "Heap",
            "Local variables only",
            "Nested scope variables"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Display: array of pointers for fast nested scope access"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-rt-004",
        "type": "MCQ",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Tail recursion can be converted to:",
        "options": [
            "Nested recursion",
            "Mutual recursion",
            "Multiple recursion",
            "Iteration (loop)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Tail call optimization: convert to loop (no stack growth)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-cd-rt-005",
        "type": "NAT",
        "topic": "compiler-design",
        "subtopic": "Runtime",
        "question": "Function f calls g, g calls h, h calls f. Maximum activation records on stack:",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "main→f→g→h→f would have 4 ARs (including main or initial)"
        }
    }
]);