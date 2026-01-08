/**
 * Theory of Computation EXHAUSTIVE
 * Automata, Regular Languages, CFG, PDA, Turing Machines
 */

Questions.register([
    // ========== FINITE AUTOMATA BASICS ==========
    {
        id: "toc2-fa-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "A DFA is defined as a 5-tuple:",
        options: ["(Q, Σ, δ, q0, F)", "(Q, Σ, δ, F)", "(Q, Σ, q0, F)", "(Σ, δ, q0, F)"],
        correctAnswer: 0,
        explanation: { solution: "DFA = (Q, Σ, δ, q0, F): states, alphabet, transition function, start state, final states" }
    },
    {
        id: "toc2-fa-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "In DFA, δ is a function from:",
        options: ["Q × Σ → Q", "Q × Σ → 2^Q", "Q → Σ", "Σ → Q"],
        correctAnswer: 0,
        explanation: { solution: "DFA: δ: Q × Σ → Q (exactly one next state)", formula: "δ: Q × Σ → Q" }
    },
    {
        id: "toc2-fa-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "In NFA, δ is a function from:",
        options: ["Q × Σ → Q", "Q × Σ → 2^Q", "Q × (Σ ∪ {ε}) → 2^Q", "Only option C is correct for NFA with ε-transitions"],
        correctAnswer: 2,
        explanation: { solution: "NFA: δ: Q × (Σ ∪ {ε}) → 2^Q (set of possible next states)", formula: "δ: Q × (Σ ∪ {ε}) → 2^Q" }
    },
    {
        id: "toc2-fa-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "Every NFA can be converted to an equivalent DFA with at most:",
        options: ["Same number of states", "2^n states (n = NFA states)", "n² states", "n! states"],
        correctAnswer: 1,
        explanation: { solution: "Subset construction: at most 2^n DFA states", formula: "Max DFA states = 2^n" }
    },
    {
        id: "toc2-fa-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "DFA and NFA are:",
        options: ["DFA more powerful", "NFA more powerful", "Equivalent in power", "Cannot compare"],
        correctAnswer: 2,
        explanation: { solution: "DFA = NFA in expressive power (both accept regular languages)" }
    },
    {
        id: "toc2-fa-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "ε-closure of a state q is:",
        options: ["States reachable from q by any symbol", "States reachable from q by ε-transitions only", "Only q itself", "Empty set"],
        correctAnswer: 1,
        explanation: { solution: "ε-closure(q) = {q} ∪ all states reachable via ε-transitions" }
    },
    {
        id: "toc2-fa-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "Minimum DFA for a regular language is:",
        options: ["Not unique", "Unique (up to isomorphism)", "Always has 1 state", "Cannot exist"],
        correctAnswer: 1,
        explanation: { solution: "Minimum DFA is unique for any regular language" }
    },
    {
        id: "toc2-fa-008",
        type: "MCQ",
        topic: "toc",
        subtopic: "Automata",
        question: "Two states p, q are distinguishable if:",
        options: ["They have same transitions", "There exists a string w where δ*(p,w)∈F XOR δ*(q,w)∈F", "They are both final", "They are both non-final"],
        correctAnswer: 1,
        explanation: { solution: "Distinguishable: some string leads to final from one, non-final from other" }
    },
    // ========== REGULAR LANGUAGES ==========
    {
        id: "toc2-reg-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular languages are closed under:",
        options: ["Union, intersection, complement", "Concatenation, Kleene star", "All of the above", "None of the above"],
        correctAnswer: 2,
        explanation: { solution: "Regular languages closed under: union, intersection, complement, concatenation, Kleene*, reversal" }
    },
    {
        id: "toc2-reg-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular expression for 0*1* describes:",
        options: ["Any number of 0s followed by any number of 1s", "Equal 0s and 1s", "Alternating 0s and 1s", "Only strings with both 0 and 1"],
        correctAnswer: 0,
        explanation: { solution: "0*1* = zero or more 0s, then zero or more 1s" }
    },
    {
        id: "toc2-reg-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Regular expression (0+1)* describes:",
        options: ["Only 0s", "Only 1s", "All strings over {0,1}", "Alternating 0s and 1s"],
        correctAnswer: 2,
        explanation: { solution: "(0+1)* = Σ* = all strings over {0,1}" }
    },
    {
        id: "toc2-reg-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Pumping lemma for regular languages is used to:",
        options: ["Prove a language is regular", "Prove a language is NOT regular", "Construct DFA", "Minimize DFA"],
        correctAnswer: 1,
        explanation: { solution: "Pumping lemma: contrapositive used to prove non-regularity" }
    },
    {
        id: "toc2-reg-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Pumping lemma: for regular L, ∃ pumping length p, any w∈L with |w|≥p can be split as w=xyz where:",
        options: ["|xy| ≤ p, |y| > 0, xy^iz ∈ L for all i ≥ 0", "|xz| ≤ p, |y| > 0", "|y| ≤ p only", "No conditions needed"],
        correctAnswer: 0,
        explanation: { solution: "Pumping: |xy| ≤ p, |y| ≥ 1, xy^iz ∈ L ∀i≥0", formula: "|xy| ≤ p, |y| > 0" }
    },
    {
        id: "toc2-reg-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "L = {0^n 1^n : n ≥ 0} is:",
        options: ["Regular", "Context-free but not regular", "Context-sensitive", "Recursively enumerable only"],
        correctAnswer: 1,
        explanation: { solution: "0^n1^n is context-free (CFG: S→0S1|ε), not regular (pumping lemma)" }
    },
    {
        id: "toc2-reg-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "L = {ww^R : w ∈ {0,1}*} (palindromes) is:",
        options: ["Regular", "Context-free", "Context-sensitive only", "Not context-free"],
        correctAnswer: 1,
        explanation: { solution: "Even-length palindromes are CFL: S→0S0|1S1|ε" }
    },
    {
        id: "toc2-reg-008",
        type: "MCQ",
        topic: "toc",
        subtopic: "Regular Languages",
        question: "Myhill-Nerode theorem: L is regular iff:",
        options: ["It has infinite states", "The relation ~L has finitely many equivalence classes", "It can be pumped", "It has a grammar"],
        correctAnswer: 1,
        explanation: { solution: "Myhill-Nerode: L regular iff # of equivalence classes of ≡L is finite" }
    },
    // ========== CONTEXT-FREE LANGUAGES ==========
    {
        id: "toc2-cfg-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "CFG production rules are of form:",
        options: ["A → α where A is non-terminal, α is any string of terminals and non-terminals", "a → α where a is terminal", "S → terminal only", "Non-terminal → Non-terminal only"],
        correctAnswer: 0,
        explanation: { solution: "CFG: A → α, A ∈ V (non-terminals), α ∈ (V ∪ T)*" }
    },
    {
        id: "toc2-cfg-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "CFGs are recognized by:",
        options: ["DFA", "NFA", "Pushdown Automata (PDA)", "Turing Machine only"],
        correctAnswer: 2,
        explanation: { solution: "CFL ↔ PDA (pushdown automata)" }
    },
    {
        id: "toc2-cfg-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "CFLs are closed under:",
        options: ["Union, concatenation, Kleene star", "Intersection with regular languages", "Both A and B", "Complement"],
        correctAnswer: 2,
        explanation: { solution: "CFLs closed under union, concat, *, intersection with regular. NOT closed under intersection, complement" }
    },
    {
        id: "toc2-cfg-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "CFLs are NOT closed under:",
        options: ["Union", "Intersection", "Concatenation", "Kleene star"],
        correctAnswer: 1,
        explanation: { solution: "CFLs not closed under intersection (and complement)" }
    },
    {
        id: "toc2-cfg-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "Chomsky Normal Form (CNF): productions are of form:",
        options: ["A → BC or A → a", "A → aB", "A → aBc", "Any form"],
        correctAnswer: 0,
        explanation: { solution: "CNF: A → BC (two non-terminals) or A → a (single terminal)", formula: "A → BC or A → a" }
    },
    {
        id: "toc2-cfg-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "Greibach Normal Form (GNF): productions are of form:",
        options: ["A → BC", "A → aα (terminal followed by non-terminals)", "A → a only", "A → abcd"],
        correctAnswer: 1,
        explanation: { solution: "GNF: A → aα where a is terminal, α is string of non-terminals", formula: "A → aα" }
    },
    {
        id: "toc2-cfg-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "CYK algorithm parses CFG in CNF in time:",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2^n)"],
        correctAnswer: 2,
        explanation: { solution: "CYK: dynamic programming, O(n³) time, O(n²) space", formula: "O(n³)" }
    },
    {
        id: "toc2-cfg-008",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "A grammar is ambiguous if:",
        options: ["It has no parse tree", "Some string has more than one parse tree", "All strings have unique parse trees", "It generates empty string"],
        correctAnswer: 1,
        explanation: { solution: "Ambiguous: at least one string with multiple leftmost/rightmost derivations" }
    },
    {
        id: "toc2-cfg-009",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "A CFL is inherently ambiguous if:",
        options: ["One grammar is ambiguous", "All grammars generating it are ambiguous", "It has no grammar", "It is regular"],
        correctAnswer: 1,
        explanation: { solution: "Inherently ambiguous: every CFG for the language is ambiguous" }
    },
    {
        id: "toc2-cfg-010",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "Pumping lemma for CFLs: w = uvxyz, conditions are:",
        options: ["|vy| > 0, |vxy| ≤ p, uv^ix^iy^iz ∈ L", "|uv| ≤ p only", "No conditions", "|xy| > 0 only"],
        correctAnswer: 0,
        explanation: { solution: "CFL pumping: |vy| ≥ 1, |vxy| ≤ p, uv^ixy^iz ∈ L ∀i≥0", formula: "|vy| > 0, |vxy| ≤ p" }
    },
    {
        id: "toc2-cfg-011",
        type: "MCQ",
        topic: "toc",
        subtopic: "CFG",
        question: "L = {a^n b^n c^n : n ≥ 0} is:",
        options: ["Regular", "Context-free", "Context-sensitive but not CF", "Not recursively enumerable"],
        correctAnswer: 2,
        explanation: { solution: "a^n b^n c^n is CSL, not CFL (fails CFL pumping lemma)" }
    },
    // ========== PDA ==========
    {
        id: "toc2-pda-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "PDA extends FA by adding:",
        options: ["Multiple tapes", "A stack", "A queue", "Random access memory"],
        correctAnswer: 1,
        explanation: { solution: "PDA = FA + stack (LIFO memory)" }
    },
    {
        id: "toc2-pda-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "Deterministic PDA (DPDA) is:",
        options: ["Equivalent to NPDA", "Strictly weaker than NPDA", "Strictly stronger than NPDA", "Cannot exist"],
        correctAnswer: 1,
        explanation: { solution: "DPDA < NPDA (DPDA accepts DCFLs ⊂ CFLs)" }
    },
    {
        id: "toc2-pda-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "PDA acceptance can be by:",
        options: ["Final state only", "Empty stack only", "Either final state or empty stack", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "PDA: accept by final state OR accept by empty stack (equivalent models)" }
    },
    {
        id: "toc2-pda-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "PDA",
        question: "DCFL (deterministic CFL) is closed under:",
        options: ["Union", "Intersection", "Complement", "Kleene star"],
        correctAnswer: 2,
        explanation: { solution: "DCFL closed under complement (but not union or intersection)" }
    },
    // ========== TURING MACHINE ==========
    {
        id: "toc2-tm-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Turing Machine has:",
        options: ["Fixed finite tape", "Infinite tape, read-only", "Infinite tape, read-write", "No tape"],
        correctAnswer: 2,
        explanation: { solution: "TM: infinite tape, read/write head, can move left/right" }
    },
    {
        id: "toc2-tm-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "TM transition function δ: Q × Γ →:",
        options: ["Q", "Q × Γ", "Q × Γ × {L, R}", "Q × Σ"],
        correctAnswer: 2,
        explanation: { solution: "δ(q, a) = (q', b, D): new state, write symbol, move direction", formula: "δ: Q × Γ → Q × Γ × {L, R}" }
    },
    {
        id: "toc2-tm-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "A language is recursively enumerable (RE) if:",
        options: ["Decided by some TM", "Accepted by some TM (may not halt on non-members)", "Rejected by all TMs", "Not accepted by any TM"],
        correctAnswer: 1,
        explanation: { solution: "RE: TM accepts members, may loop forever on non-members" }
    },
    {
        id: "toc2-tm-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "A language is recursive (decidable) if:",
        options: ["TM accepts or rejects (always halts)", "TM may loop forever", "TM rejects all strings", "No TM exists"],
        correctAnswer: 0,
        explanation: { solution: "Recursive/Decidable: TM always halts (accepts or rejects)" }
    },
    {
        id: "toc2-tm-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Decidable ⊂ RE means:",
        options: ["All decidable languages are RE", "All RE languages are decidable", "They don't overlap", "RE ⊂ Decidable"],
        correctAnswer: 0,
        explanation: { solution: "Decidable ⊂ RE ⊂ All languages" }
    },
    {
        id: "toc2-tm-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "The Halting Problem is:",
        options: ["Decidable", "Undecidable", "Regular", "Context-free"],
        correctAnswer: 1,
        explanation: { solution: "Halting problem: undecidable (proved by diagonalization)" }
    },
    {
        id: "toc2-tm-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Church-Turing thesis states:",
        options: ["All TMs are equivalent", "Any effective computation can be done by a TM", "TMs cannot compute everything", "All languages are decidable"],
        correctAnswer: 1,
        explanation: { solution: "Church-Turing: TM captures notion of algorithmic computability" }
    },
    {
        id: "toc2-tm-008",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Multi-tape TM vs single-tape TM:",
        options: ["Multi-tape is more powerful", "Single-tape is more powerful", "Equivalent in power (multi-tape can be simulated)", "Cannot compare"],
        correctAnswer: 2,
        explanation: { solution: "Multi-tape TM can be simulated by single-tape TM (polynomial slowdown)" }
    },
    {
        id: "toc2-tm-009",
        type: "MCQ",
        topic: "toc",
        subtopic: "Turing Machine",
        question: "Non-deterministic TM vs Deterministic TM:",
        options: ["NTM more powerful", "DTM more powerful", "Equivalent in power", "Cannot compare"],
        correctAnswer: 2,
        explanation: { solution: "NTM = DTM in computational power (exponential time simulation)" }
    },
    // ========== CHOMSKY HIERARCHY ==========
    {
        id: "toc2-ch-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Type 3 grammars generate:",
        options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
        correctAnswer: 0,
        explanation: { solution: "Type 3 = Regular (right/left linear grammars)" }
    },
    {
        id: "toc2-ch-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Type 2 grammars generate:",
        options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
        correctAnswer: 1,
        explanation: { solution: "Type 2 = Context-free" }
    },
    {
        id: "toc2-ch-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Type 1 grammars generate:",
        options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
        correctAnswer: 2,
        explanation: { solution: "Type 1 = Context-sensitive (|α| ≤ |β| for α → β)" }
    },
    {
        id: "toc2-ch-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Type 0 grammars generate:",
        options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
        correctAnswer: 3,
        explanation: { solution: "Type 0 = Recursively enumerable (no restrictions)" }
    },
    {
        id: "toc2-ch-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Chomsky Hierarchy",
        question: "Proper hierarchy: Regular ⊂ CFL ⊂ CSL ⊂ RE means:",
        options: ["All are equal", "Each is strictly contained in next", "RE is smallest", "No containment"],
        correctAnswer: 1,
        explanation: { solution: "Regular ⊂ CFL ⊂ CSL ⊂ RE (proper inclusions)" }
    },
    // ========== DECIDABILITY ==========
    {
        id: "toc2-dec-001",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Membership problem for DFA (given DFA and string, is string accepted?):",
        options: ["Undecidable", "Decidable in O(n)", "Decidable in O(2^n)", "PSPACE-complete"],
        correctAnswer: 1,
        explanation: { solution: "DFA membership: simulate DFA on string, O(n) time" }
    },
    {
        id: "toc2-dec-002",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Emptiness problem for DFA (is L(DFA) empty?):",
        options: ["Undecidable", "Decidable (reachability to final state)", "PSPACE-complete", "NP-complete"],
        correctAnswer: 1,
        explanation: { solution: "DFA emptiness: check if any final state reachable from start" }
    },
    {
        id: "toc2-dec-003",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Equivalence problem for DFAs (do two DFAs accept same language?):",
        options: ["Undecidable", "Decidable", "NP-complete", "PSPACE-complete"],
        correctAnswer: 1,
        explanation: { solution: "DFA equivalence: decidable (minimize and compare, or check symmetric difference empty)" }
    },
    {
        id: "toc2-dec-004",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Membership problem for CFG (given CFG and string):",
        options: ["Undecidable", "Decidable (CYK algorithm)", "PSPACE-complete", "NP-complete"],
        correctAnswer: 1,
        explanation: { solution: "CFG membership: CYK algorithm O(n³), decidable" }
    },
    {
        id: "toc2-dec-005",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Emptiness problem for CFG:",
        options: ["Undecidable", "Decidable", "NP-complete", "PSPACE-complete"],
        correctAnswer: 1,
        explanation: { solution: "CFG emptiness: check if start symbol can derive a terminal string" }
    },
    {
        id: "toc2-dec-006",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Equivalence problem for CFGs:",
        options: ["Decidable", "Undecidable", "NP-complete", "In P"],
        correctAnswer: 1,
        explanation: { solution: "CFG equivalence is undecidable" }
    },
    {
        id: "toc2-dec-007",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Ambiguity problem for CFGs (is given CFG ambiguous?):",
        options: ["Decidable", "Undecidable", "In P", "NP-complete"],
        correctAnswer: 1,
        explanation: { solution: "CFG ambiguity is undecidable" }
    },
    {
        id: "toc2-dec-008",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Post Correspondence Problem (PCP) is:",
        options: ["Decidable", "Undecidable", "In P", "NP-complete"],
        correctAnswer: 1,
        explanation: { solution: "PCP is undecidable (used to prove other undecidability results)" }
    },
    {
        id: "toc2-dec-009",
        type: "MCQ",
        topic: "toc",
        subtopic: "Decidability",
        question: "Rice's Theorem states that any non-trivial property of RE languages is:",
        options: ["Decidable", "Undecidable", "NP-complete", "PSPACE-complete"],
        correctAnswer: 1,
        explanation: { solution: "Rice's theorem: non-trivial semantic properties of TMs are undecidable" }
    }
]);

console.log("Exhaustive Theory of Computation loaded - ~65 questions");
