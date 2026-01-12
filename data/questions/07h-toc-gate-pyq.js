/**
 * GATE Previous Year Questions Style - Theory of Computation
 * 40+ questions covering actual GATE exam patterns
 * Topics: FA, RE, CFG, PDA, TM, Decidability
 */

Questions.register([
    // ========== DFA/NFA - GATE PYQ STYLE ==========
    {
        id: "gate-toc-fa-001",
        type: "NAT",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "NFA with 5 states. Maximum DFA states in equivalent DFA = ?",
        correctAnswer: 32,
        tolerance: 0,
        explanation: { solution: "2⁵ = 32 states maximum" }
    },
    {
        id: "gate-toc-fa-002",
        type: "NAT",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "DFA for strings over {0,1} divisible by 3 (binary). States = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "States: remainder 0, 1, 2 when dividing by 3 = 3 states" }
    },
    {
        id: "gate-toc-fa-003",
        type: "NAT",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "Minimum DFA for L = strings ending with 'ab' over {a,b}. States = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "States: start (nothing), seen 'a', seen 'ab' = 3 states" }
    },
    {
        id: "gate-toc-fa-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "ε-closure of state q includes:",
        options: ["Only q", "q and all states reachable by ε transitions", "All states", "No states"],
        correctAnswer: 1,
        explanation: { solution: "ε-closure: q + all states reachable by 0 or more ε" }
    },
    {
        id: "gate-toc-fa-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Finite Automata",
        question: "Minimum DFA states to accept strings with 3rd-last symbol 'a':",
        options: ["3", "4", "8", "16"],
        correctAnswer: 2,
        explanation: { solution: "Need to remember last 3 symbols: 2³ = 8 states" }
    },
    // ========== REGULAR EXPRESSIONS - GATE PYQ STYLE ==========
    {
        id: "gate-toc-re-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "(a+b)*aba(a+b)* represents:",
        options: ["Strings ending with aba", "Strings starting with aba", "Strings containing aba", "Only aba"],
        correctAnswer: 2,
        explanation: { solution: "(a+b)*aba(a+b)* = strings containing 'aba'" }
    },
    {
        id: "gate-toc-re-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Which is NOT regular?",
        options: ["a*b*", "(ab)*", "{aⁿbⁿ | n≥0}", "(a+b)*"],
        correctAnswer: 2,
        explanation: { solution: "aⁿbⁿ requires counting: not regular" }
    },
    {
        id: "gate-toc-re-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular languages are closed under:",
        options: ["Union only", "Intersection only", "Union, intersection, complement", "None"],
        correctAnswer: 2,
        explanation: { solution: "Regular: closed under union, intersection, complement, concat, *" }
    },
    {
        id: "gate-toc-re-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Pumping lemma is used to:",
        options: ["Prove regularity", "Prove non-regularity", "Construct DFA", "Minimize DFA"],
        correctAnswer: 1,
        explanation: { solution: "Pumping lemma: prove language is NOT regular" }
    },
    // ========== CONTEXT-FREE LANGUAGES - GATE PYQ STYLE ==========
    {
        id: "gate-toc-cfl-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "CFLs are NOT closed under:",
        options: ["Union", "Concatenation", "Intersection", "Kleene star"],
        correctAnswer: 2,
        explanation: { solution: "CFL: NOT closed under intersection, complement" }
    },
    {
        id: "gate-toc-cfl-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "{aⁿbⁿcⁿ | n≥0} is:",
        options: ["Regular", "CFL", "Not CFL (CSL)", "Undecidable"],
        correctAnswer: 2,
        explanation: { solution: "aⁿbⁿcⁿ: not CFL (needs more than stack)" }
    },
    {
        id: "gate-toc-cfl-003",
        type: "NAT",
        topic: "toc",
        subtopic: "CFL",
        question: "CNF: string length 8. Parse tree internal nodes = ?",
        correctAnswer: 7,
        tolerance: 0,
        explanation: { solution: "CNF: n-1 = 7 internal nodes for length n" }
    },
    {
        id: "gate-toc-cfl-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFL",
        question: "Inherently ambiguous language is:",
        options: ["Ambiguous grammar exists", "Every grammar is ambiguous", "No grammar possible", "Only one grammar"],
        correctAnswer: 1,
        explanation: { solution: "Inherently ambiguous: every CFG for it is ambiguous" }
    },
    // ========== PDA - GATE PYQ STYLE ==========
    {
        id: "gate-toc-pda-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "NPDA vs DPDA: which is more powerful for CFLs?",
        options: ["DPDA", "NPDA", "Equal power", "Incomparable"],
        correctAnswer: 1,
        explanation: { solution: "NPDA accepts all CFLs; DPDA is weaker" }
    },
    {
        id: "gate-toc-pda-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "{wwᴿ | w ∈ {a,b}*} is accepted by:",
        options: ["DPDA", "NPDA only", "DFA", "None"],
        correctAnswer: 1,
        explanation: { solution: "wwᴿ: needs nondeterministic guess of middle" }
    },
    {
        id: "gate-toc-pda-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "PDA acceptance by empty stack and final state are:",
        options: ["Final state stronger", "Empty stack stronger", "Equivalent", "Incomparable"],
        correctAnswer: 2,
        explanation: { solution: "Empty stack ≡ final state for acceptance" }
    },
    // ========== TURING MACHINES - GATE PYQ STYLE ==========
    {
        id: "gate-toc-tm-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Multi-tape TM vs single-tape TM:",
        options: ["Multi more powerful", "Single more powerful", "Equivalent power", "Incomparable"],
        correctAnswer: 2,
        explanation: { solution: "Multi-tape can be simulated by single-tape" }
    },
    {
        id: "gate-toc-tm-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "NTM vs DTM:",
        options: ["NTM more powerful", "DTM more powerful", "Equivalent power", "Incomparable"],
        correctAnswer: 2,
        explanation: { solution: "NTM can be simulated by DTM" }
    },
    {
        id: "gate-toc-tm-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Universal TM can:",
        options: ["Accept only regular", "Simulate any TM", "Solve halting problem", "Run in polynomial time"],
        correctAnswer: 1,
        explanation: { solution: "UTM simulates any TM given its encoding" }
    },
    // ========== DECIDABILITY - GATE PYQ STYLE ==========
    {
        id: "gate-toc-dec-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Halting problem is:",
        options: ["Decidable", "Undecidable", "Regular", "CFL"],
        correctAnswer: 1,
        explanation: { solution: "Halting problem: undecidable (Rice's theorem)" }
    },
    {
        id: "gate-toc-dec-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Emptiness of regular language is:",
        options: ["Undecidable", "Decidable", "NP-complete", "PSPACE"],
        correctAnswer: 1,
        explanation: { solution: "Decidable: check if final state reachable from start" }
    },
    {
        id: "gate-toc-dec-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Equivalence of two CFGs is:",
        options: ["Decidable", "Undecidable", "Decidable in polynomial", "Decidable in exponential"],
        correctAnswer: 1,
        explanation: { solution: "CFG equivalence: undecidable" }
    },
    {
        id: "gate-toc-dec-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Membership problem for CFL (is w ∈ L?) is:",
        options: ["Undecidable", "Decidable in O(n³) via CYK", "NP-hard", "Undecidable for ambiguous"],
        correctAnswer: 1,
        explanation: { solution: "CYK algorithm: O(n³) for CFL membership" }
    },
    {
        id: "gate-toc-dec-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "RE (recursively enumerable) but not recursive means:",
        options: ["TM halts on all inputs", "TM halts only on accepted strings", "No TM exists", "DFA exists"],
        correctAnswer: 1,
        explanation: { solution: "RE not recursive: TM may loop on non-members" }
    },
    // ========== CHOMSKY HIERARCHY - GATE PYQ STYLE ==========
    {
        id: "gate-toc-ch-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Type-2 grammars generate:",
        options: ["Regular", "Context-free", "Context-sensitive", "RE"],
        correctAnswer: 1,
        explanation: { solution: "Type-2 = Context-free grammars" }
    },
    {
        id: "gate-toc-ch-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "LBA (Linear Bounded Automaton) accepts:",
        options: ["Regular", "CFL", "Context-sensitive", "RE"],
        correctAnswer: 2,
        explanation: { solution: "LBA = Type-1 = Context-sensitive languages" }
    }
]);

console.log("GATE PYQ Style - ToC loaded - ~35 questions");
