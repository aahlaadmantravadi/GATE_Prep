/**
 * Theory of Computation & Compiler Design Questions
 * Covers: Automata, Languages, Parsing, Code Optimization
 */

Questions.register([
    // Theory of Computation
    {
        id: "toc-dfa-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "A DFA (Deterministic Finite Automaton) for each state and input symbol has:",
        options: [
            "Zero transitions",
            "One or more transitions",
            "Exactly one transition",
            "At most one transition"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "DFA is deterministic: for each state q and input symbol a, there is exactly one transition δ(q,a). NFA may have 0, 1, or more transitions."
        }
    },
    {
        id: "toc-dfa-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Every NFA can be converted to an equivalent DFA with at most how many states (if NFA has n states)?",
        options: ["n", "n²", "2^n", "n!"],
        correctAnswer: 2,
        explanation: {
            solution: "Subset construction: Each DFA state represents a subset of NFA states. With n NFA states, there are 2^n possible subsets → at most 2^n DFA states."
        }
    },
    {
        id: "toc-regex-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "The regular expression (a|b)* represents:",
        options: [
            "Strings of exactly one a or b",
            "Strings of alternating a and b",
            "All strings over {a, b} including empty string",
            "Strings starting with a"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "(a|b)* means: zero or more repetitions of (a or b). This generates ε, a, b, aa, ab, ba, bb, ... - all possible strings over {a,b}."
        }
    },
    {
        id: "toc-pump-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "The Pumping Lemma is used to prove that a language is:",
        options: [
            "Regular",
            "Not regular",
            "Context-free",
            "Decidable"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Pumping Lemma gives a necessary (not sufficient) condition for regularity. If a language violates it, the language is NOT regular. It cannot prove a language IS regular."
        }
    },
    {
        id: "toc-cfg-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "Context-Free Grammars (CFG) are recognized by:",
        options: [
            "Finite Automata",
            "Pushdown Automata",
            "Turing Machines only",
            "Linear Bounded Automata"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "CFLs are recognized by PDAs (Pushdown Automata) which have a stack for memory. Regular languages use FA (no memory), Turing machines recognize recursively enumerable languages."
        }
    },
    {
        id: "toc-cfg-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Context-Free Languages",
        question: "A grammar is in Chomsky Normal Form (CNF) if every production is of the form:",
        options: [
            "A → a only",
            "A → BC or A → a (where A,B,C are non-terminals, a is terminal)",
            "A → aB or A → a",
            "A → ε only"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "CNF: Every production is either A → BC (two non-terminals) or A → a (single terminal). Start symbol can have S → ε. Useful for CYK parsing."
        }
    },
    {
        id: "toc-tm-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machines",
        question: "A Turing Machine is more powerful than a PDA because it has:",
        options: [
            "Faster processing speed",
            "A tape with random access read/write capability",
            "Multiple input symbols",
            "More states"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "TM has an infinite tape with read/write head that can move both directions - unlimited random access. PDA stack is LIFO only. This makes TM computationally universal."
        }
    },
    {
        id: "toc-decide-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "The halting problem for Turing Machines is:",
        options: [
            "Decidable",
            "Undecidable",
            "Context-free",
            "Regular"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Halting problem: Given a TM M and input w, does M halt on w? This is undecidable - no algorithm can solve it for all TM/input pairs. Proven by Alan Turing using diagonalization."
        }
    },
    // Compiler Design
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
    }
]);
