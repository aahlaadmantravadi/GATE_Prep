/**
 * Theory of Computation MEGA EXPANSION - FA, RE, CFG, PDA, TM
 * Deep coverage with pumping lemma, decidability
 */

Questions.register([
    // ========== REGULAR LANGUAGES ==========
    {
        id: "toc-re-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular expressions and DFA are:",
        options: ["DFA more powerful", "RE more powerful", "Equivalent in power", "Incomparable"],
        correctAnswer: 2,
        explanation: { solution: "RE = DFA = NFA = ε-NFA in power" }
    },
    {
        id: "toc-re-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular languages are closed under:",
        options: ["Only union", "Union, concatenation, Kleene star, intersection, complement", "Only complement", "None"],
        correctAnswer: 1,
        explanation: { solution: "Regular: closed under union, concat, *, ∩, complement, −" }
    },
    {
        id: "toc-re-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "L = {aⁿbⁿ | n≥0} is:",
        options: ["Regular", "Not regular (CFL)", "Not CFL", "Undecidable"],
        correctAnswer: 1,
        explanation: { solution: "aⁿbⁿ requires counting: not regular (pumping lemma)" }
    },
    {
        id: "toc-re-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Pumping lemma for regular languages: for |w| ≥ p, w = xyz where:",
        options: ["|y| ≤ p", "|xy| ≤ p, |y| ≥ 1", "|z| ≤ p", "All parts equal"],
        correctAnswer: 1,
        explanation: { solution: "Pumping: |xy| ≤ p, |y| ≥ 1, xyⁱz ∈ L for all i ≥ 0" }
    },
    // ========== DFA/NFA ==========
    {
        id: "toc-fa-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "DFA has exactly ___ transition per (state, symbol) pair:",
        options: ["0", "1", "0 or 1", "Multiple"],
        correctAnswer: 1,
        explanation: { solution: "DFA: exactly one transition for each (state, input)" }
    },
    {
        id: "toc-fa-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "NFA can have ___ transitions per (state, symbol):",
        options: ["Exactly 1", "0, 1, or more", "Only 0", "Infinite"],
        correctAnswer: 1,
        explanation: { solution: "NFA: zero, one, or multiple transitions allowed" }
    },
    {
        id: "toc-fa-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "NFA with n states can be converted to DFA with at most:",
        options: ["n states", "2ⁿ states", "n² states", "n+1 states"],
        correctAnswer: 1,
        explanation: { solution: "Subset construction: max 2ⁿ states", formula: "2^n" }
    },
    {
        id: "toc-fa-004",
        type: "NAT",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "NFA with 4 states. Equivalent DFA maximum states = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "2⁴ = 16" }
    },
    {
        id: "toc-fa-005",
        type: "NAT",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "DFA: 3 states, alphabet {0,1}. Total transitions = ?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "States × |Σ| = 3 × 2 = 6" }
    },
    {
        id: "toc-fa-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "ε-NFA allows:",
        options: ["Only ε moves", "ε transitions (no input consumed)", "No ε transitions", "Only non-ε"],
        correctAnswer: 1,
        explanation: { solution: "ε-NFA: moves without consuming input" }
    },
    {
        id: "toc-fa-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "Minimum DFA states for L = strings over {a,b} ending with 'ab':",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: { solution: "States: seen nothing, seen 'a', seen 'ab' = 3 states" }
    },
    // ========== CONTEXT-FREE LANGUAGES ==========
    {
        id: "toc-cfl-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "CFLs are recognized by:",
        options: ["DFA", "PDA (Pushdown Automata)", "Turing machine only", "NFA"],
        correctAnswer: 1,
        explanation: { solution: "CFL = language of CFG = language of PDA" }
    },
    {
        id: "toc-cfl-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "CFLs are closed under:",
        options: ["Union, concatenation, Kleene star", "Intersection", "Complement", "Both intersection and complement"],
        correctAnswer: 0,
        explanation: { solution: "CFL: closed under ∪, ·, *. NOT closed under ∩, complement" }
    },
    {
        id: "toc-cfl-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "L = {aⁿbⁿcⁿ | n≥0} is:",
        options: ["Regular", "CFL", "CSL (not CFL)", "Undecidable"],
        correctAnswer: 2,
        explanation: { solution: "aⁿbⁿcⁿ: not CFL (pumping lemma for CFLs)" }
    },
    {
        id: "toc-cfl-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "Chomsky Normal Form (CNF) productions are of form:",
        options: ["A → a or A → BC", "A → aBc", "A → ε always", "Any form"],
        correctAnswer: 0,
        explanation: { solution: "CNF: A→BC or A→a (binary or terminal)" }
    },
    {
        id: "toc-cfl-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "Greibach Normal Form (GNF) productions are of form:",
        options: ["A → aα (terminal followed by variables)", "A → BC", "A → aa", "A → ε"],
        correctAnswer: 0,
        explanation: { solution: "GNF: A → aα where a is terminal, α is string of variables" }
    },
    {
        id: "toc-cfl-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "CYK parsing algorithm runs in time:",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2ⁿ)"],
        correctAnswer: 2,
        explanation: { solution: "CYK: O(n³) for string length n" }
    },
    {
        id: "toc-cfl-007",
        type: "NAT",
        topic: "toc",
        subtopic: "CFL",
        question: "CNF grammar, string of length 6. CYK derivation steps = ?",
        correctAnswer: 5,
        tolerance: 0,
        explanation: { solution: "CNF: exactly n-1 = 5 derivation steps for length n" }
    },
    // ========== PUSHDOWN AUTOMATA ==========
    {
        id: "toc-pda-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "PDA differs from FA by having:",
        options: ["Multiple tapes", "Stack (LIFO)", "Two-way tape", "Output tape"],
        correctAnswer: 1,
        explanation: { solution: "PDA = FA + stack" }
    },
    {
        id: "toc-pda-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "DPDA and NPDA have:",
        options: ["Same power", "NPDA more powerful (for CFLs)", "DPDA more powerful", "Incomparable"],
        correctAnswer: 1,
        explanation: { solution: "NPDA > DPDA: some CFLs not recognized by DPDA" }
    },
    {
        id: "toc-pda-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "PDA acceptance modes:",
        options: ["Only final state", "Only empty stack", "Final state or empty stack (equivalent)", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "Final state ≡ empty stack for acceptance" }
    },
    {
        id: "toc-pda-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "L = {wwᴿ | w ∈ {a,b}*} is recognized by:",
        options: ["DFA", "DPDA", "NPDA", "Turing machine only"],
        correctAnswer: 2,
        explanation: { solution: "wwᴿ (palindromes): needs nondeterministic guess of middle" }
    },
    // ========== TURING MACHINES ==========
    {
        id: "toc-tm-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Turing machine has:",
        options: ["Finite tape", "Infinite tape, read-write head", "No tape", "Stack only"],
        correctAnswer: 1,
        explanation: { solution: "TM: infinite tape, can read/write, move left/right" }
    },
    {
        id: "toc-tm-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "TM is more powerful than PDA because:",
        options: ["Faster", "Can write to tape and move both directions", "Uses less memory", "Has multiple heads"],
        correctAnswer: 1,
        explanation: { solution: "TM: read/write + bidirectional movement" }
    },
    {
        id: "toc-tm-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Multi-tape TM vs single-tape TM:",
        options: ["Multi-tape more powerful", "Equivalent in power (single simulates multi)", "Single-tape more powerful", "Incomparable"],
        correctAnswer: 1,
        explanation: { solution: "Multi-tape can be simulated by single-tape TM" }
    },
    {
        id: "toc-tm-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Non-deterministic TM vs deterministic TM:",
        options: ["NTM more powerful", "Equivalent in power (can simulate each other)", "DTM more powerful", "Incomparable"],
        correctAnswer: 1,
        explanation: { solution: "DTM can simulate NTM (with exponential slowdown)" }
    },
    // ========== DECIDABILITY ==========
    {
        id: "toc-dec-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Decidable language means:",
        options: ["TM halts on all inputs with accept/reject", "TM may loop forever", "Recognized by PDA", "No TM exists"],
        correctAnswer: 0,
        explanation: { solution: "Decidable: TM always halts (accept or reject)" }
    },
    {
        id: "toc-dec-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Recursively enumerable (RE) language means:",
        options: ["Always decidable", "TM accepts members, may loop on non-members", "Finite language", "Empty language"],
        correctAnswer: 1,
        explanation: { solution: "RE: TM halts on accept, may loop on reject" }
    },
    {
        id: "toc-dec-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Halting problem is:",
        options: ["Decidable", "Undecidable", "Regular", "CFL"],
        correctAnswer: 1,
        explanation: { solution: "Halting: undecidable (diagonalization proof)" }
    },
    {
        id: "toc-dec-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Emptiness of regular language (is L(DFA) empty?) is:",
        options: ["Undecidable", "Decidable", "Always empty", "Always non-empty"],
        correctAnswer: 1,
        explanation: { solution: "Decidable: check if final state reachable" }
    },
    {
        id: "toc-dec-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Equivalence of two CFGs is:",
        options: ["Decidable", "Undecidable", "Always true", "Always false"],
        correctAnswer: 1,
        explanation: { solution: "CFG equivalence: undecidable" }
    },
    {
        id: "toc-dec-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Membership problem for CFL (is w ∈ L(G)?) is:",
        options: ["Undecidable", "Decidable (CYK algorithm)", "Only for regular", "Always true"],
        correctAnswer: 1,
        explanation: { solution: "CFL membership: decidable via CYK O(n³)" }
    },
    {
        id: "toc-dec-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Rice's theorem states that non-trivial properties of TM languages are:",
        options: ["Decidable", "Undecidable", "Always true", "Always false"],
        correctAnswer: 1,
        explanation: { solution: "Rice: non-trivial semantic properties undecidable" }
    },
    // ========== CHOMSKY HIERARCHY ==========
    {
        id: "toc-ch-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Chomsky Type 3 languages are:",
        options: ["Context-free", "Regular", "Context-sensitive", "Recursively enumerable"],
        correctAnswer: 1,
        explanation: { solution: "Type 3: Regular (DFA/NFA/RE)" }
    },
    {
        id: "toc-ch-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Chomsky Type 2 languages are:",
        options: ["Regular", "Context-free", "Context-sensitive", "RE"],
        correctAnswer: 1,
        explanation: { solution: "Type 2: Context-free (CFG/PDA)" }
    },
    {
        id: "toc-ch-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Chomsky Type 1 languages are:",
        options: ["Regular", "CFL", "Context-sensitive (LBA)", "RE"],
        correctAnswer: 2,
        explanation: { solution: "Type 1: CSL (Linear Bounded Automata)" }
    },
    {
        id: "toc-ch-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Chomsky Type 0 languages are:",
        options: ["Regular", "CFL", "CSL", "Recursively enumerable (TM)"],
        correctAnswer: 3,
        explanation: { solution: "Type 0: RE (Turing Machine)" }
    },
    {
        id: "toc-ch-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Proper containment: Regular ⊂ CFL ⊂ CSL ⊂ RE. True or false?",
        options: ["True", "False, all equal", "False, reverse order", "Incomparable"],
        correctAnswer: 0,
        explanation: { solution: "Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0" }
    }
]);

console.log("ToC Mega Expansion loaded - ~50 questions");
