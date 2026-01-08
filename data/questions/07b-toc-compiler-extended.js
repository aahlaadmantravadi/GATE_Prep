/**
 * Theory of Computation Extended - DFA, NFA, CFG, Turing Machines
 */

Questions.register([
    // ========== DFA/NFA ==========
    {
        id: "toc-dfa-010",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "DFA for language 'strings containing substring 01' has minimum states:",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: { solution: "States: q0 (start), q1 (seen 0), q2 (seen 01 - accept). 3 states minimum." }
    },
    {
        id: "toc-dfa-011",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "DFA for 'strings where number of a's is divisible by 3' has minimum states:",
        options: ["2", "3", "4", "6"],
        correctAnswer: 1,
        explanation: { solution: "Track count mod 3: states 0, 1, 2 (accept state 0). Minimum 3 states." }
    },
    {
        id: "toc-dfa-012",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "ε-transitions are allowed in:",
        options: ["DFA only", "NFA only", "Both DFA and NFA", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "ε-NFA allows epsilon transitions (move without reading input). DFA has exactly one transition per symbol." }
    },
    {
        id: "toc-dfa-013",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "To convert NFA to DFA, we use:",
        options: ["Minimization algorithm", "Subset construction", "Pumping lemma", "CYK algorithm"],
        correctAnswer: 1,
        explanation: { solution: "Subset construction: DFA states = power set of NFA states" }
    },
    {
        id: "toc-dfa-014",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "ε-closure of state q includes:",
        options: ["q only", "States reachable from q using ε-transitions", "All states", "No states"],
        correctAnswer: 1,
        explanation: { solution: "ε-closure(q) = {q} ∪ states reachable from q via one or more ε-transitions" }
    },
    {
        id: "toc-dfa-015",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Minimized DFA for a regular language is:",
        options: ["Not unique", "Unique up to state renaming", "Always has 1 state", "Always larger than NFA"],
        correctAnswer: 1,
        explanation: { solution: "Minimal DFA is unique (up to isomorphism) for any regular language" }
    },
    // ========== REGULAR EXPRESSIONS ==========
    {
        id: "toc-regex-010",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "a+ means:",
        options: ["Zero or more a's", "One or more a's", "Exactly one a", "At most one a"],
        correctAnswer: 1,
        explanation: { solution: "a+ = aa* = one or more a's" }
    },
    {
        id: "toc-regex-011",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular expression for 'strings ending with ab' over {a,b} is:",
        options: ["ab", "(a|b)*ab", "ab(a|b)*", "(ab)*"],
        correctAnswer: 1,
        explanation: { solution: "Any string followed by ab at the end" }
    },
    {
        id: "toc-regex-012",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Language {aⁿbⁿ | n ≥ 0} is:",
        options: ["Regular", "Context-free but not regular", "Context-sensitive", "Recursively enumerable only"],
        correctAnswer: 1,
        explanation: { solution: "Requires matching count of a's and b's - needs stack (PDA), can't be done with finite memory (DFA)" }
    },
    {
        id: "toc-regex-013",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular languages are closed under:",
        options: ["Union, intersection, complement", "Union only", "Intersection only", "None of these"],
        correctAnswer: 0,
        explanation: { solution: "Regular languages closed under union, intersection, complement, concatenation, Kleene star" }
    },
    // ========== CFG/PDA ==========
    {
        id: "toc-cfg-010",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "Left recursion in grammar means:",
        options: ["A → Aα for some string α", "A → αA for some α", "A → ε", "Grammar has no terminals"],
        correctAnswer: 0,
        explanation: { solution: "Left recursive: A → Aα. Problematic for top-down parsers - causes infinite loop." }
    },
    {
        id: "toc-cfg-011",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "Left factoring is done to:",
        options: ["Remove left recursion", "Remove common prefixes for predictive parsing", "Convert to CNF", "Find FOLLOW sets"],
        correctAnswer: 1,
        explanation: { solution: "Left factoring: if A → αβ | αγ, transform to A → αA', A' → β | γ" }
    },
    {
        id: "toc-cfg-012",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "Ambiguous grammar means:",
        options: ["Has no parse tree for some string", "Has multiple parse trees for some string", "Cannot generate any string", "Is not context-free"],
        correctAnswer: 1,
        explanation: { solution: "Ambiguous: ∃ string with more than one distinct parse tree" }
    },
    {
        id: "toc-cfg-013",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "CFL are closed under:",
        options: ["Union, concatenation, Kleene star", "Intersection", "Complement", "All of above"],
        correctAnswer: 0,
        explanation: { solution: "CFLs closed under union, concatenation, star. NOT closed under intersection, complement." }
    },
    {
        id: "toc-cfg-014",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "Intersection of CFL and regular language is:",
        options: ["Always regular", "Always CFL", "Could be anything", "Undecidable"],
        correctAnswer: 1,
        explanation: { solution: "CFL ∩ Regular = CFL. Can build PDA that simulates both." }
    },
    {
        id: "toc-cfg-015",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "Greibach Normal Form (GNF) has productions of form:",
        options: ["A → BC", "A → aα where a is terminal, α is string of non-terminals", "A → a", "A → ε"],
        correctAnswer: 1,
        explanation: { solution: "GNF: A → aB₁B₂...Bₖ (terminal first, then non-terminals). Useful for PDA construction." }
    },
    // ========== TURING MACHINES ==========
    {
        id: "toc-tm-010",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machines",
        question: "Church-Turing thesis states:",
        options: ["TM is the fastest computer", "TM can solve NP problems in P time", "Any effectively computable function can be computed by a TM", "TM has infinite speed"],
        correctAnswer: 2,
        explanation: { solution: "Church-Turing thesis: intuitive notion of 'algorithm' = Turing machine computability" }
    },
    {
        id: "toc-tm-011",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machines",
        question: "A language is decidable if:",
        options: ["TM accepts all strings in the language", "TM halts on all inputs, accepting if in language", "TM has finite states", "TM uses bounded tape"],
        correctAnswer: 1,
        explanation: { solution: "Decidable (recursive): TM halts on ALL inputs - accepts members, rejects non-members" }
    },
    {
        id: "toc-tm-012",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machines",
        question: "A language is Turing-recognizable (recursively enumerable) if:",
        options: ["TM halts on all inputs", "TM accepts strings in language (may loop on non-members)", "It is finite", "It is regular"],
        correctAnswer: 1,
        explanation: { solution: "RE/Turing-recognizable: TM accepts L, but may loop forever on strings not in L" }
    },
    {
        id: "toc-tm-013",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machines",
        question: "Rice's theorem applies to:",
        options: ["All languages", "Properties of regular languages", "Non-trivial semantic properties of TM-recognized languages", "Finite automata"],
        correctAnswer: 2,
        explanation: { solution: "Rice's theorem: Any non-trivial property of RE languages is undecidable" }
    },
    {
        id: "toc-tm-014",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machines",
        question: "Post Correspondence Problem (PCP) is:",
        options: ["Decidable", "Undecidable", "NP-complete", "Regular"],
        correctAnswer: 1,
        explanation: { solution: "PCP is undecidable - used to prove undecidability of many other problems" }
    },
    // ========== DECIDABILITY ==========
    {
        id: "toc-dec-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Emptiness problem for DFA (is L(M) = ∅?) is:",
        options: ["Undecidable", "Decidable", "NP-hard", "NP-complete"],
        correctAnswer: 1,
        explanation: { solution: "Decidable: BFS/DFS from start state to check if any accepting state is reachable" }
    },
    {
        id: "toc-dec-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Equivalence problem for DFA (is L(M₁) = L(M₂)?) is:",
        options: ["Undecidable", "Decidable", "Semi-decidable", "None"],
        correctAnswer: 1,
        explanation: { solution: "Decidable: minimize both DFAs and check isomorphism, or check L(M₁)⊕L(M₂) = ∅" }
    },
    {
        id: "toc-dec-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Emptiness problem for CFG (is L(G) = ∅?) is:",
        options: ["Undecidable", "Decidable", "NP-complete", "None"],
        correctAnswer: 1,
        explanation: { solution: "Decidable: mark all non-terminals that can derive terminal strings, check if start symbol is marked" }
    },
    {
        id: "toc-dec-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Ambiguity problem for CFG (is grammar ambiguous?) is:",
        options: ["Decidable", "Undecidable", "NP-complete", "Linear time"],
        correctAnswer: 1,
        explanation: { solution: "Undecidable: no algorithm can determine if arbitrary CFG is ambiguous" }
    },
    {
        id: "toc-dec-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Membership problem for CFL (is w ∈ L(G)?) is:",
        options: ["Undecidable", "Decidable in O(n³)", "Not computable", "Requires exponential time"],
        correctAnswer: 1,
        explanation: { solution: "Decidable: CYK algorithm in O(n³) time using CNF grammar" }
    }
]);

/**
 * Compiler Design Extended
 */

Questions.register([
    // ========== LEXICAL ANALYSIS ==========
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
    // ========== PARSING EXTENDED ==========
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
    // ========== INTERMEDIATE CODE ==========
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
    // ========== CODE OPTIMIZATION ==========
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
    // ========== CODE GENERATION ==========
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
    }
]);

console.log("Extended ToC and Compiler questions loaded");
