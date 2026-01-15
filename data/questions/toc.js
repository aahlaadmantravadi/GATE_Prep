Questions.register([
    {
        "id": "toc-dfa-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "A DFA (Deterministic Finite Automaton) for each state and input symbol has:",
        "options": [
            "Zero transitions",
            "One or more transitions",
            "Exactly one transition",
            "At most one transition"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DFA (Deterministic Finite Automaton): DETERMINISM means for each state $q$ and input symbol $a$, transition function $\\delta(q, a)$ produces EXACTLY ONE next state (no ambiguity, no choices). Formally: $\\delta: Q \\times \\Sigma \\rightarrow Q$ (function, not relation). NO epsilon transitions allowed. NO multiple transitions on same symbol from one state. Contrast with NFA: Non-deterministic - can have 0, 1, or multiple transitions per (state, symbol) pair, plus $\\epsilon$-transitions. Every DFA is automatically an NFA, but not vice versa. DFA easier to simulate (deterministic execution path) but may need more states than equivalent NFA.",
            "formula": "DFA: $\\delta(q, a)$ = exactly 1 state; NFA: $\\delta(q, a) \\subseteq Q$"
        }
    },
    {
        "id": "toc-dfa-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Every NFA can be converted to an equivalent DFA with at most how many states (if NFA has n states)?",
        "options": [
            "n",
            "n²",
            "2^n",
            "n!"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Subset Construction (Powerset Construction) Algorithm: converts NFA with $n$ states to equivalent DFA with at most $2^n$ states. Why $2^n$? Each DFA state represents a SUBSET of NFA states (tracking all possible simultaneously active NFA states). $n$ elements have $2^n$ subsets (powerset). Construction: (1) DFA start state = $\\epsilon$-closure(NFA q_0), (2) For each DFA state $S$ (subset of NFA states) and symbol $a$: new DFA state = $\\epsilon$-closure($\\bigcup_{q \\in S} \\delta_{NFA}(q, a)$), (3) DFA state is final if it contains any NFA final state. Exponential blowup worst-case, but often many fewer states in practice (unreachable subsets ignored).",
            "formula": "Max DFA states = $2^n$ (powerset construction)"
        }
    },
    {
        "id": "toc-regex-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "The regular expression (a|b)* represents:",
        "options": [
            "Strings of exactly one a or b",
            "Strings of alternating a and b",
            "All strings over {a, b} including empty string",
            "Strings starting with a"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Regular expression $(a|b)^*$: breakdown: (1) $(a|b)$ = alternation/union - matches either $a$ OR $b$ (single character), (2) $*$ = Kleene star - ZERO or more repetitions of preceding element. Combined: zero or more occurrences of (either $a$ or $b$). Generated strings: $\\epsilon$ (empty), $a$, $b$, $aa$, $ab$, $ba$, $bb$, $aaa$, $aab$, ... = $\\Sigma^*$ where $\\Sigma = \\{a, b\\}$ = ALL possible finite strings over alphabet $\\{a,b\\}$ including empty string. Equivalent regex: $(a+b)^*$ or $(a \\cup b)^*$ depending on notation.",
            "formula": "$(a|b)^* = \\Sigma^*$ where $\\Sigma = \\{a, b\\}$"
        }
    },
    {
        "id": "toc-pump-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "The Pumping Lemma is used to prove that a language is:",
        "options": [
            "Regular",
            "Not regular",
            "Context-free",
            "Decidable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Pumping Lemma for Regular Languages: provides NECESSARY condition for regularity (not sufficient). Statement: If $L$ is regular, then $\\exists$ pumping length $p >0$ such that $\\forall$ string $w \\in L$ with $|w| \\geq p$, can divide $w = xyz$ satisfying: (1) $|xy| \\leq p$ (pump happens early), (2) $|y| > 0$ ($y$ non-empty), (3) $\\forall i \\geq 0$, $xy^iz \\in L$ (can pump $y$ any number of times). USE: Prove language NOT regular by contradiction - assume regular, apply lemma, show NO valid decomposition exists for some $w$, derive contradiction. Cannot prove language IS regular using pumping lemma. Example non-regular: $\\{a^n b^n | n \\geq 0\\}$ - pumping $y$ (all $a$'s) breaks equal count.",
            "formula": "$\\forall w \\in L$, $|w| \\geq p \\Rightarrow w=xyz$, $|xy| \\leq p$, $|y|>0$, $xy^iz \\in L$"
        }
    },
    {
        "id": "toc-cfg-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Context-Free Grammars (CFG) are recognized by:",
        "options": [
            "Finite Automata",
            "Pushdown Automata",
            "Turing Machines only",
            "Linear Bounded Automata"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFLs are recognized by PDAs (Pushdown Automata) which have a stack for memory. Regular languages use FA (no memory), Turing machines recognize recursively enumerable languages."
        }
    },
    {
        "id": "toc-cfg-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "A grammar is in Chomsky Normal Form (CNF) if every production is of the form:",
        "options": [
            "A → a only",
            "A → BC or A → a (where A,B,C are non-terminals, a is terminal)",
            "A → aB or A → a",
            "A → ε only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CNF: Every production is either A → BC (two non-terminals) or A → a (single terminal). Start symbol can have S → ε. Useful for CYK parsing."
        }
    },
    {
        "id": "toc-tm-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Turing machine has:",
        "options": [
            "Finite tape",
            "Infinite tape, read-write head",
            "No tape",
            "Stack only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TM: infinite tape, can read/write, move left/right"
        }
    },
    {
        "id": "toc-decide-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "The halting problem for Turing Machines is:",
        "options": [
            "Decidable",
            "Undecidable",
            "Context-free",
            "Regular"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Halting problem: Given a TM M and input w, does M halt on w? This is undecidable - no algorithm can solve it for all TM/input pairs. Proven by Alan Turing using diagonalization."
        }
    },
    {
        "id": "toc-dfa-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "DFA for language 'strings containing substring 01' has minimum states:",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "States: q0 (start), q1 (seen 0), q2 (seen 01 - accept). 3 states minimum."
        }
    },
    {
        "id": "toc-dfa-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "DFA for 'strings where number of a's is divisible by 3' has minimum states:",
        "options": [
            "2",
            "3",
            "4",
            "6"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Track count mod 3: states 0, 1, 2 (accept state 0). Minimum 3 states."
        }
    },
    {
        "id": "toc-dfa-012",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "ε-transitions are allowed in:",
        "options": [
            "DFA only",
            "NFA only",
            "Both DFA and NFA",
            "Neither"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ε-NFA allows epsilon transitions (move without reading input). DFA has exactly one transition per symbol."
        }
    },
    {
        "id": "toc-dfa-013",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "To convert NFA to DFA, we use:",
        "options": [
            "Minimization algorithm",
            "Subset construction",
            "Pumping lemma",
            "CYK algorithm"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Subset construction: DFA states = power set of NFA states"
        }
    },
    {
        "id": "toc-dfa-014",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "ε-closure of state q includes:",
        "options": [
            "q only",
            "States reachable from q using ε-transitions",
            "All states",
            "No states"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ε-closure(q) = {q} ∪ states reachable from q via one or more ε-transitions"
        }
    },
    {
        "id": "toc-dfa-015",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Minimized DFA for a regular language is:",
        "options": [
            "Not unique",
            "Unique up to state renaming",
            "Always has 1 state",
            "Always larger than NFA"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Minimal DFA is unique (up to isomorphism) for any regular language"
        }
    },
    {
        "id": "toc-regex-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "a+ means:",
        "options": [
            "Zero or more a's",
            "One or more a's",
            "Exactly one a",
            "At most one a"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "a+ = aa* = one or more a's"
        }
    },
    {
        "id": "toc-regex-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular expression for 'strings ending with ab' over {a,b} is:",
        "options": [
            "ab",
            "(a|b)*ab",
            "ab(a|b)*",
            "(ab)*"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Any string followed by ab at the end"
        }
    },
    {
        "id": "toc-regex-012",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Language {aⁿbⁿ | n ≥ 0} is:",
        "options": [
            "Regular",
            "Context-free but not regular",
            "Context-sensitive",
            "Recursively enumerable only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Requires matching count of a's and b's - needs stack (PDA), can't be done with finite memory (DFA)"
        }
    },
    {
        "id": "toc-regex-013",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular languages are closed under:",
        "options": [
            "Union, intersection, complement",
            "Union only",
            "Intersection only",
            "None of these"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Regular languages closed under union, intersection, complement, concatenation, Kleene star"
        }
    },
    {
        "id": "toc-cfg-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Left recursion in grammar means:",
        "options": [
            "A → Aα for some string α",
            "A → αA for some α",
            "A → ε",
            "Grammar has no terminals"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Left recursive: A → Aα. Problematic for top-down parsers - causes infinite loop."
        }
    },
    {
        "id": "toc-cfg-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Left factoring is done to:",
        "options": [
            "Remove left recursion",
            "Remove common prefixes for predictive parsing",
            "Convert to CNF",
            "Find FOLLOW sets"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Left factoring: if A → αβ | αγ, transform to A → αA', A' → β | γ"
        }
    },
    {
        "id": "toc-cfg-012",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Ambiguous grammar means:",
        "options": [
            "Has no parse tree for some string",
            "Has multiple parse trees for some string",
            "Cannot generate any string",
            "Is not context-free"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Ambiguous: ∃ string with more than one distinct parse tree"
        }
    },
    {
        "id": "toc-cfg-013",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "CFL are closed under:",
        "options": [
            "Union, concatenation, Kleene star",
            "Intersection",
            "Complement",
            "All of above"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CFLs closed under union, concatenation, star. NOT closed under intersection, complement."
        }
    },
    {
        "id": "toc-cfg-014",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Intersection of CFL and regular language is:",
        "options": [
            "Always regular",
            "Always CFL",
            "Could be anything",
            "Undecidable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFL ∩ Regular = CFL. Can build PDA that simulates both."
        }
    },
    {
        "id": "toc-cfg-015",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Greibach Normal Form (GNF) has productions of form:",
        "options": [
            "A → BC",
            "A → aα where a is terminal, α is string of non-terminals",
            "A → a",
            "A → ε"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "GNF: A → aB₁B₂...Bₖ (terminal first, then non-terminals). Useful for PDA construction."
        }
    },
    {
        "id": "toc-tm-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "Church-Turing thesis states:",
        "options": [
            "TM is the fastest computer",
            "TM can solve NP problems in P time",
            "Any effectively computable function can be computed by a TM",
            "TM has infinite speed"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Church-Turing thesis: intuitive notion of 'algorithm' = Turing machine computability"
        }
    },
    {
        "id": "toc-tm-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "A language is decidable if:",
        "options": [
            "TM accepts all strings in the language",
            "TM halts on all inputs, accepting if in language",
            "TM has finite states",
            "TM uses bounded tape"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Decidable (recursive): TM halts on ALL inputs - accepts members, rejects non-members"
        }
    },
    {
        "id": "toc-tm-012",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "A language is Turing-recognizable (recursively enumerable) if:",
        "options": [
            "TM halts on all inputs",
            "TM accepts strings in language (may loop on non-members)",
            "It is finite",
            "It is regular"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RE/Turing-recognizable: TM accepts L, but may loop forever on strings not in L"
        }
    },
    {
        "id": "toc-tm-013",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "Rice's theorem applies to:",
        "options": [
            "All languages",
            "Properties of regular languages",
            "Non-trivial semantic properties of TM-recognized languages",
            "Finite automata"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Rice's theorem: Any non-trivial property of RE languages is undecidable"
        }
    },
    {
        "id": "toc-tm-014",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "Post Correspondence Problem (PCP) is:",
        "options": [
            "Decidable",
            "Undecidable",
            "NP-complete",
            "Regular"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "PCP is undecidable - used to prove undecidability of many other problems"
        }
    },
    {
        "id": "toc-dec-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Decidable language means:",
        "options": [
            "TM halts on all inputs with accept/reject",
            "TM may loop forever",
            "Recognized by PDA",
            "No TM exists"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Decidable: TM always halts (accept or reject)"
        }
    },
    {
        "id": "toc-dec-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Recursively enumerable (RE) language means:",
        "options": [
            "Always decidable",
            "TM accepts members, may loop on non-members",
            "Finite language",
            "Empty language"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RE: TM halts on accept, may loop on reject"
        }
    },
    {
        "id": "toc-dec-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Halting problem is:",
        "options": [
            "Decidable",
            "Undecidable",
            "Regular",
            "CFL"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Halting: undecidable (diagonalization proof)"
        }
    },
    {
        "id": "toc-dec-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Emptiness of regular language (is L(DFA) empty?) is:",
        "options": [
            "Undecidable",
            "Decidable",
            "Always empty",
            "Always non-empty"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Decidable: check if final state reachable"
        }
    },
    {
        "id": "toc-dec-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Equivalence of two CFGs is:",
        "options": [
            "Decidable",
            "Undecidable",
            "Always true",
            "Always false"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFG equivalence: undecidable"
        }
    },
    {
        "id": "toc2-fa-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "A DFA is defined as a 5-tuple:",
        "options": [
            "(Q, Σ, δ, q0, F)",
            "(Q, Σ, δ, F)",
            "(Q, Σ, q0, F)",
            "(Σ, δ, q0, F)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "DFA = (Q, Σ, δ, q0, F): states, alphabet, transition function, start state, final states"
        }
    },
    {
        "id": "toc2-fa-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "In DFA, δ is a function from:",
        "options": [
            "Q × Σ → Q",
            "Q × Σ → 2^Q",
            "Q → Σ",
            "Σ → Q"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "DFA: δ: Q × Σ → Q (exactly one next state)",
            "formula": "δ: Q × Σ → Q"
        }
    },
    {
        "id": "toc2-fa-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "In NFA, δ is a function from:",
        "options": [
            "Q × Σ → Q",
            "Q × Σ → 2^Q",
            "Q × (Σ ∪ {ε}) → 2^Q",
            "Only option C is correct for NFA with ε-transitions"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "NFA: δ: Q × (Σ ∪ {ε}) → 2^Q (set of possible next states)",
            "formula": "δ: Q × (Σ ∪ {ε}) → 2^Q"
        }
    },
    {
        "id": "toc2-fa-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "Every NFA can be converted to an equivalent DFA with at most:",
        "options": [
            "Same number of states",
            "2^n states (n = NFA states)",
            "n² states",
            "n! states"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NFA to DFA: Subset Construction Algorithm\n\nGiven NFA with n states, construct DFA with up to 2ⁿ states.\n\nProcess:\n1. Start state of DFA = ε-closure({q0})\n2. For each DFA state S and symbol a:\n   - Compute ε-closure(δ(S, a))\n   - This is the new DFA state\n3. DFA state is final if it contains any NFA final state\n\nWorst case: 2ⁿ DFA states (exponential blow-up)\nBut in practice, often much fewer states.\n\nThe languages accepted are exactly the same!",
            "formula": "Max DFA states = 2ⁿ"
        }
    },
    {
        "id": "toc2-fa-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "DFA and NFA are:",
        "options": [
            "DFA more powerful",
            "NFA more powerful",
            "Equivalent in power",
            "Cannot compare"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DFA = NFA in expressive power (both accept regular languages)"
        }
    },
    {
        "id": "toc2-fa-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "ε-closure of a state q is:",
        "options": [
            "States reachable from q by any symbol",
            "States reachable from q by ε-transitions only",
            "Only q itself",
            "Empty set"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ε-closure(q) = {q} ∪ all states reachable via ε-transitions"
        }
    },
    {
        "id": "toc2-fa-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "Minimum DFA for a regular language is:",
        "options": [
            "Not unique",
            "Unique (up to isomorphism)",
            "Always has 1 state",
            "Cannot exist"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Minimum DFA is unique for any regular language"
        }
    },
    {
        "id": "toc2-fa-008",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Automata",
        "question": "Two states p, q are distinguishable if:",
        "options": [
            "They have same transitions",
            "There exists a string w where δ*(p,w)∈F XOR δ*(q,w)∈F",
            "They are both final",
            "They are both non-final"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Distinguishable: some string leads to final from one, non-final from other"
        }
    },
    {
        "id": "toc2-reg-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular languages are closed under:",
        "options": [
            "Union, intersection, complement",
            "Concatenation, Kleene star",
            "All of the above",
            "None of the above"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Regular languages closed under: union, intersection, complement, concatenation, Kleene*, reversal"
        }
    },
    {
        "id": "toc2-reg-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular expression for 0*1* describes:",
        "options": [
            "Any number of 0s followed by any number of 1s",
            "Equal 0s and 1s",
            "Alternating 0s and 1s",
            "Only strings with both 0 and 1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "0*1* = zero or more 0s, then zero or more 1s"
        }
    },
    {
        "id": "toc2-reg-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular expression (0+1)* describes:",
        "options": [
            "Only 0s",
            "Only 1s",
            "All strings over {0,1}",
            "Alternating 0s and 1s"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "(0+1)* = Σ* = all strings over {0,1}"
        }
    },
    {
        "id": "toc2-reg-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Pumping lemma for regular languages is used to:",
        "options": [
            "Prove a language is regular",
            "Prove a language is NOT regular",
            "Construct DFA",
            "Minimize DFA"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Pumping lemma: contrapositive used to prove non-regularity"
        }
    },
    {
        "id": "toc2-reg-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Pumping lemma: for regular L, ∃ pumping length p, any w∈L with |w|≥p can be split as w=xyz where:",
        "options": [
            "|xy| ≤ p, |y| > 0, xy^iz ∈ L for all i ≥ 0",
            "|xz| ≤ p, |y| > 0",
            "|y| ≤ p only",
            "No conditions needed"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Pumping Lemma for Regular Languages:\n\nIf L is regular, ∃ pumping length p such that any w ∈ L with |w| ≥ p can be written as w = xyz where:\n\n1. |xy| ≤ p (x and y are in 'first p symbols')\n2. |y| > 0 (y is non-empty)\n3. xyⁱz ∈ L for all i ≥ 0 (can 'pump' y any number of times)\n\nTo prove L is NOT regular:\n1. Assume L is regular (∴ pumping lemma applies)\n2. For any p, find w with |w| ≥ p\n3. Show NO valid split xyz satisfies all conditions\n4. Contradiction → L is not regular\n\nClassic example: {0ⁿ1ⁿ} is not regular.",
            "formula": "|xy| ≤ p, |y| > 0"
        }
    },
    {
        "id": "toc2-reg-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "L = {0^n 1^n : n ≥ 0} is:",
        "options": [
            "Regular",
            "Context-free but not regular",
            "Context-sensitive",
            "Recursively enumerable only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "0^n1^n is context-free (CFG: S→0S1|ε), not regular (pumping lemma)"
        }
    },
    {
        "id": "toc2-reg-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "L = {ww^R : w ∈ {0,1}*} (palindromes) is:",
        "options": [
            "Regular",
            "Context-free",
            "Context-sensitive only",
            "Not context-free"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Even-length palindromes are CFL: S→0S0|1S1|ε"
        }
    },
    {
        "id": "toc2-reg-008",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Myhill-Nerode theorem: L is regular iff:",
        "options": [
            "It has infinite states",
            "The relation ~L has finitely many equivalence classes",
            "It can be pumped",
            "It has a grammar"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Myhill-Nerode: L regular iff # of equivalence classes of ≡L is finite"
        }
    },
    {
        "id": "toc2-cfg-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "CFG production rules are of form:",
        "options": [
            "A → α where A is non-terminal, α is any string of terminals and non-terminals",
            "a → α where a is terminal",
            "S → terminal only",
            "Non-terminal → Non-terminal only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CFG: A → α, A ∈ V (non-terminals), α ∈ (V ∪ T)*"
        }
    },
    {
        "id": "toc2-cfg-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "CFGs are recognized by:",
        "options": [
            "DFA",
            "NFA",
            "Pushdown Automata (PDA)",
            "Turing Machine only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CFL ↔ PDA (pushdown automata)"
        }
    },
    {
        "id": "toc2-cfg-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "CFLs are closed under:",
        "options": [
            "Union, concatenation, Kleene star",
            "Intersection with regular languages",
            "Both A and B",
            "Complement"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CFLs closed under union, concat, *, intersection with regular. NOT closed under intersection, complement"
        }
    },
    {
        "id": "toc2-cfg-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "CFLs are NOT closed under:",
        "options": [
            "Union",
            "Intersection",
            "Concatenation",
            "Kleene star"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFLs not closed under intersection (and complement)"
        }
    },
    {
        "id": "toc2-cfg-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "Chomsky Normal Form (CNF): productions are of form:",
        "options": [
            "A → BC or A → a",
            "A → aB",
            "A → aBc",
            "Any form"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Chomsky Normal Form (CNF):\n\nEvery production has one of two forms:\n1. A → BC (two non-terminals)\n2. A → a (single terminal)\n(Plus S → ε if empty string is in language)\n\nConversion algorithm:\n1. Remove ε-productions\n2. Remove unit productions (A → B)\n3. Replace terminals in RHS with length ≥ 2 by new non-terminals\n4. Break long productions (A → BCD) into binary\n\nIMPORTANCE: CYK parsing algorithm requires CNF!\nO(n³) parsing time for any CFG.",
            "formula": "A → BC or A → a"
        }
    },
    {
        "id": "toc2-cfg-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "Greibach Normal Form (GNF): productions are of form:",
        "options": [
            "A → BC",
            "A → aα (terminal followed by non-terminals)",
            "A → a only",
            "A → abcd"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "GNF: A → aα where a is terminal, α is string of non-terminals",
            "formula": "A → aα"
        }
    },
    {
        "id": "toc2-cfg-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "CYK algorithm parses CFG in CNF in time:",
        "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(2^n)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CYK: dynamic programming, O(n³) time, O(n²) space",
            "formula": "O(n³)"
        }
    },
    {
        "id": "toc2-cfg-008",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "A grammar is ambiguous if:",
        "options": [
            "It has no parse tree",
            "Some string has more than one parse tree",
            "All strings have unique parse trees",
            "It generates empty string"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Ambiguous: at least one string with multiple leftmost/rightmost derivations"
        }
    },
    {
        "id": "toc2-cfg-009",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "A CFL is inherently ambiguous if:",
        "options": [
            "One grammar is ambiguous",
            "All grammars generating it are ambiguous",
            "It has no grammar",
            "It is regular"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Inherently ambiguous: every CFG for the language is ambiguous"
        }
    },
    {
        "id": "toc2-cfg-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "Pumping lemma for CFLs: w = uvxyz, conditions are:",
        "options": [
            "|vy| > 0, |vxy| ≤ p, uv^ix^iy^iz ∈ L",
            "|uv| ≤ p only",
            "No conditions",
            "|xy| > 0 only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CFL pumping: |vy| ≥ 1, |vxy| ≤ p, uv^ixy^iz ∈ L ∀i≥0",
            "formula": "|vy| > 0, |vxy| ≤ p"
        }
    },
    {
        "id": "toc2-cfg-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFG",
        "question": "L = {a^n b^n c^n : n ≥ 0} is:",
        "options": [
            "Regular",
            "Context-free",
            "Context-sensitive but not CF",
            "Not recursively enumerable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "a^n b^n c^n is CSL, not CFL (fails CFL pumping lemma)"
        }
    },
    {
        "id": "toc2-pda-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "PDA extends FA by adding:",
        "options": [
            "Multiple tapes",
            "A stack",
            "A queue",
            "Random access memory"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "PDA = FA + stack (LIFO memory)"
        }
    },
    {
        "id": "toc2-pda-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "Deterministic PDA (DPDA) is:",
        "options": [
            "Equivalent to NPDA",
            "Strictly weaker than NPDA",
            "Strictly stronger than NPDA",
            "Cannot exist"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DPDA < NPDA (DPDA accepts DCFLs ⊂ CFLs)"
        }
    },
    {
        "id": "toc2-pda-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "PDA acceptance can be by:",
        "options": [
            "Final state only",
            "Empty stack only",
            "Either final state or empty stack",
            "Neither"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "PDA: accept by final state OR accept by empty stack (equivalent models)"
        }
    },
    {
        "id": "toc2-pda-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "DCFL (deterministic CFL) is closed under:",
        "options": [
            "Union",
            "Intersection",
            "Complement",
            "Kleene star"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DCFL closed under complement (but not union or intersection)"
        }
    },
    {
        "id": "toc2-tm-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Turing Machine has:",
        "options": [
            "Fixed finite tape",
            "Infinite tape, read-only",
            "Infinite tape, read-write",
            "No tape"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TM: infinite tape, read/write head, can move left/right"
        }
    },
    {
        "id": "toc2-tm-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "TM transition function δ: Q × Γ →:",
        "options": [
            "Q",
            "Q × Γ",
            "Q × Γ × {L, R}",
            "Q × Σ"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "δ(q, a) = (q', b, D): new state, write symbol, move direction",
            "formula": "δ: Q × Γ → Q × Γ × {L, R}"
        }
    },
    {
        "id": "toc2-tm-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "A language is recursively enumerable (RE) if:",
        "options": [
            "Decided by some TM",
            "Accepted by some TM (may not halt on non-members)",
            "Rejected by all TMs",
            "Not accepted by any TM"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RE: TM accepts members, may loop forever on non-members"
        }
    },
    {
        "id": "toc2-tm-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "A language is recursive (decidable) if:",
        "options": [
            "TM accepts or rejects (always halts)",
            "TM may loop forever",
            "TM rejects all strings",
            "No TM exists"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Recursive/Decidable: TM always halts (accepts or rejects)"
        }
    },
    {
        "id": "toc2-tm-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Decidable ⊂ RE means:",
        "options": [
            "All decidable languages are RE",
            "All RE languages are decidable",
            "They don't overlap",
            "RE ⊂ Decidable"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Decidable ⊂ RE ⊂ All languages"
        }
    },
    {
        "id": "toc2-tm-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "The Halting Problem is:",
        "options": [
            "Decidable",
            "Undecidable",
            "Regular",
            "Context-free"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "The Halting Problem: UNDECIDABLE\n\nQuestion: Given TM M and input w, does M halt on w?\n\nProof by contradiction (diagonalization):\n1. Assume H exists that decides halting\n2. Construct D that takes TM M:\n   - If H(M,M) = 'halts', D loops forever\n   - If H(M,M) = 'loops', D halts\n3. What does D(D) do?\n   - If D(D) halts → H(D,D) said 'halts' → D should loop ✘\n   - If D(D) loops → H(D,D) said 'loops' → D should halt ✘\n4. Contradiction! H cannot exist.\n\nThis is THE foundational undecidability result."
        }
    },
    {
        "id": "toc2-tm-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Church-Turing thesis states:",
        "options": [
            "All TMs are equivalent",
            "Any effective computation can be done by a TM",
            "TMs cannot compute everything",
            "All languages are decidable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Church-Turing: TM captures notion of algorithmic computability"
        }
    },
    {
        "id": "toc2-tm-008",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Multi-tape TM vs single-tape TM:",
        "options": [
            "Multi-tape is more powerful",
            "Single-tape is more powerful",
            "Equivalent in power (multi-tape can be simulated)",
            "Cannot compare"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Multi-tape TM can be simulated by single-tape TM (polynomial slowdown)"
        }
    },
    {
        "id": "toc2-tm-009",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Non-deterministic TM vs Deterministic TM:",
        "options": [
            "NTM more powerful",
            "DTM more powerful",
            "Equivalent in power",
            "Cannot compare"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "NTM = DTM in computational power (exponential time simulation)"
        }
    },
    {
        "id": "toc2-ch-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Type 3 grammars generate:",
        "options": [
            "Regular languages",
            "Context-free languages",
            "Context-sensitive languages",
            "Recursively enumerable languages"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Type 3 = Regular (right/left linear grammars)"
        }
    },
    {
        "id": "toc2-ch-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Type 2 grammars generate:",
        "options": [
            "Regular languages",
            "Context-free languages",
            "Context-sensitive languages",
            "Recursively enumerable languages"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Type 2 = Context-free"
        }
    },
    {
        "id": "toc2-ch-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Type 1 grammars generate:",
        "options": [
            "Regular languages",
            "Context-free languages",
            "Context-sensitive languages",
            "Recursively enumerable languages"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Type 1 = Context-sensitive (|α| ≤ |β| for α → β)"
        }
    },
    {
        "id": "toc2-ch-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Type 0 grammars generate:",
        "options": [
            "Regular languages",
            "Context-free languages",
            "Context-sensitive languages",
            "Recursively enumerable languages"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Type 0 = Recursively enumerable (no restrictions)"
        }
    },
    {
        "id": "toc2-ch-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Proper hierarchy: Regular ⊂ CFL ⊂ CSL ⊂ RE means:",
        "options": [
            "All are equal",
            "Each is strictly contained in next",
            "RE is smallest",
            "No containment"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Regular ⊂ CFL ⊂ CSL ⊂ RE (proper inclusions)"
        }
    },
    {
        "id": "toc2-dec-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Membership problem for DFA (given DFA and string, is string accepted?):",
        "options": [
            "Undecidable",
            "Decidable in O(n)",
            "Decidable in O(2^n)",
            "PSPACE-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DFA membership: simulate DFA on string, O(n) time"
        }
    },
    {
        "id": "toc2-dec-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Emptiness problem for DFA (is L(DFA) empty?):",
        "options": [
            "Undecidable",
            "Decidable (reachability to final state)",
            "PSPACE-complete",
            "NP-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DFA emptiness: check if any final state reachable from start"
        }
    },
    {
        "id": "toc2-dec-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Equivalence problem for DFAs (do two DFAs accept same language?):",
        "options": [
            "Undecidable",
            "Decidable",
            "NP-complete",
            "PSPACE-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DFA equivalence: decidable (minimize and compare, or check symmetric difference empty)"
        }
    },
    {
        "id": "toc2-dec-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Membership problem for CFG (given CFG and string):",
        "options": [
            "Undecidable",
            "Decidable (CYK algorithm)",
            "PSPACE-complete",
            "NP-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFG membership: CYK algorithm O(n³), decidable"
        }
    },
    {
        "id": "toc2-dec-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Emptiness problem for CFG:",
        "options": [
            "Undecidable",
            "Decidable",
            "NP-complete",
            "PSPACE-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFG emptiness: check if start symbol can derive a terminal string"
        }
    },
    {
        "id": "toc2-dec-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Equivalence problem for CFGs:",
        "options": [
            "Decidable",
            "Undecidable",
            "NP-complete",
            "In P"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFG equivalence is undecidable"
        }
    },
    {
        "id": "toc2-dec-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Ambiguity problem for CFGs (is given CFG ambiguous?):",
        "options": [
            "Decidable",
            "Undecidable",
            "In P",
            "NP-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFG ambiguity is undecidable"
        }
    },
    {
        "id": "toc2-dec-008",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Post Correspondence Problem (PCP) is:",
        "options": [
            "Decidable",
            "Undecidable",
            "In P",
            "NP-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "PCP is undecidable (used to prove other undecidability results)"
        }
    },
    {
        "id": "toc2-dec-009",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Rice's Theorem states that any non-trivial property of RE languages is:",
        "options": [
            "Decidable",
            "Undecidable",
            "NP-complete",
            "PSPACE-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Rice's Theorem: A Powerful Undecidability Tool\n\nAny non-trivial property of the LANGUAGE recognized by a TM is undecidable.\n\nNon-trivial = some TMs have it, some don't.\n\nExamples of undecidable questions:\n- Does TM accept any string?\n- Is L(M) finite?\n- Is L(M) regular/context-free?\n- Is L(M) = L(M')?\n\nNOT covered by Rice's theorem (about TM itself, not language):\n- Does TM have ≤ 100 states?\n- Does TM ever move left?\n\nRice's theorem applies to SEMANTIC properties of languages, not SYNTACTIC properties of TM descriptions."
        }
    },
    {
        "id": "toc-re-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular expressions and DFA are:",
        "options": [
            "DFA more powerful",
            "RE more powerful",
            "Equivalent in power",
            "Incomparable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "RE = DFA = NFA = ε-NFA in power"
        }
    },
    {
        "id": "toc-re-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular languages are closed under:",
        "options": [
            "Only union",
            "Union, concatenation, Kleene star, intersection, complement",
            "Only complement",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Regular: closed under union, concat, *, ∩, complement, −"
        }
    },
    {
        "id": "toc-re-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "L = {aⁿbⁿ | n≥0} is:",
        "options": [
            "Regular",
            "Not regular (CFL)",
            "Not CFL",
            "Undecidable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "aⁿbⁿ requires counting: not regular (pumping lemma)"
        }
    },
    {
        "id": "toc-re-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Pumping lemma for regular languages: for |w| ≥ p, w = xyz where:",
        "options": [
            "|y| ≤ p",
            "|xy| ≤ p, |y| ≥ 1",
            "|z| ≤ p",
            "All parts equal"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Pumping: |xy| ≤ p, |y| ≥ 1, xyⁱz ∈ L for all i ≥ 0"
        }
    },
    {
        "id": "toc-fa-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "DFA has exactly ___ transition per (state, symbol) pair:",
        "options": [
            "0",
            "1",
            "0 or 1",
            "Multiple"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DFA: exactly one transition for each (state, input)"
        }
    },
    {
        "id": "toc-fa-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "NFA can have ___ transitions per (state, symbol):",
        "options": [
            "Exactly 1",
            "0, 1, or more",
            "Only 0",
            "Infinite"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NFA: zero, one, or multiple transitions allowed"
        }
    },
    {
        "id": "toc-fa-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "NFA with n states can be converted to DFA with at most:",
        "options": [
            "n states",
            "2ⁿ states",
            "n² states",
            "n+1 states"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Subset construction: max 2ⁿ states",
            "formula": "2^n"
        }
    },
    {
        "id": "toc-fa-004",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "NFA with 4 states. Equivalent DFA maximum states = ?",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "2⁴ = 16"
        }
    },
    {
        "id": "toc-fa-005",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "DFA: 3 states, alphabet {0,1}. Total transitions = ?",
        "correctAnswer": 6,
        "tolerance": 0,
        "explanation": {
            "solution": "States × |Σ| = 3 × 2 = 6"
        }
    },
    {
        "id": "toc-fa-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "ε-NFA allows:",
        "options": [
            "Only ε moves",
            "ε transitions (no input consumed)",
            "No ε transitions",
            "Only non-ε"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ε-NFA: moves without consuming input"
        }
    },
    {
        "id": "toc-fa-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "Minimum DFA states for L = strings over {a,b} ending with 'ab':",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "States: seen nothing, seen 'a', seen 'ab' = 3 states"
        }
    },
    {
        "id": "toc-cfl-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "CFLs are recognized by:",
        "options": [
            "DFA",
            "PDA (Pushdown Automata)",
            "Turing machine only",
            "NFA"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFL = language of CFG = language of PDA"
        }
    },
    {
        "id": "toc-cfl-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "CFLs are closed under:",
        "options": [
            "Union, concatenation, Kleene star",
            "Intersection",
            "Complement",
            "Both intersection and complement"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CFL: closed under ∪, ·, *. NOT closed under ∩, complement"
        }
    },
    {
        "id": "toc-cfl-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "L = {aⁿbⁿcⁿ | n≥0} is:",
        "options": [
            "Regular",
            "CFL",
            "CSL (not CFL)",
            "Undecidable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "aⁿbⁿcⁿ: not CFL (pumping lemma for CFLs)"
        }
    },
    {
        "id": "toc-cfl-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "Chomsky Normal Form (CNF) productions are of form:",
        "options": [
            "A → a or A → BC",
            "A → aBc",
            "A → ε always",
            "Any form"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CNF: A→BC or A→a (binary or terminal)"
        }
    },
    {
        "id": "toc-cfl-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "Greibach Normal Form (GNF) productions are of form:",
        "options": [
            "A → aα (terminal followed by variables)",
            "A → BC",
            "A → aa",
            "A → ε"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "GNF: A → aα where a is terminal, α is string of variables"
        }
    },
    {
        "id": "toc-cfl-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "CYK parsing algorithm runs in time:",
        "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(2ⁿ)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CYK: O(n³) for string length n"
        }
    },
    {
        "id": "toc-cfl-007",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "CNF grammar, string of length 6. CYK derivation steps = ?",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "CNF: exactly n-1 = 5 derivation steps for length n"
        }
    },
    {
        "id": "toc-pda-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "PDA differs from FA by having:",
        "options": [
            "Multiple tapes",
            "Stack (LIFO)",
            "Two-way tape",
            "Output tape"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "PDA = FA + stack"
        }
    },
    {
        "id": "toc-pda-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "DPDA and NPDA have:",
        "options": [
            "Same power",
            "NPDA more powerful (for CFLs)",
            "DPDA more powerful",
            "Incomparable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NPDA > DPDA: some CFLs not recognized by DPDA"
        }
    },
    {
        "id": "toc-pda-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "PDA acceptance modes:",
        "options": [
            "Only final state",
            "Only empty stack",
            "Final state or empty stack (equivalent)",
            "Neither"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Final state ≡ empty stack for acceptance"
        }
    },
    {
        "id": "toc-pda-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "L = {wwᴿ | w ∈ {a,b}*} is recognized by:",
        "options": [
            "DFA",
            "DPDA",
            "NPDA",
            "Turing machine only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "wwᴿ (palindromes): needs nondeterministic guess of middle"
        }
    },
    {
        "id": "toc-tm-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "TM is more powerful than PDA because:",
        "options": [
            "Faster",
            "Can write to tape and move both directions",
            "Uses less memory",
            "Has multiple heads"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TM: read/write + bidirectional movement"
        }
    },
    {
        "id": "toc-tm-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Multi-tape TM vs single-tape TM:",
        "options": [
            "Multi-tape more powerful",
            "Equivalent in power (single simulates multi)",
            "Single-tape more powerful",
            "Incomparable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Multi-tape can be simulated by single-tape TM"
        }
    },
    {
        "id": "toc-tm-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Non-deterministic TM vs deterministic TM:",
        "options": [
            "NTM more powerful",
            "Equivalent in power (can simulate each other)",
            "DTM more powerful",
            "Incomparable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DTM can simulate NTM (with exponential slowdown)"
        }
    },
    {
        "id": "toc-dec-006",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Membership problem for CFL (is w ∈ L(G)?) is:",
        "options": [
            "Undecidable",
            "Decidable (CYK algorithm)",
            "Only for regular",
            "Always true"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFL membership: decidable via CYK O(n³)"
        }
    },
    {
        "id": "toc-dec-007",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Rice's theorem states that non-trivial properties of TM languages are:",
        "options": [
            "Decidable",
            "Undecidable",
            "Always true",
            "Always false"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Rice: non-trivial semantic properties undecidable"
        }
    },
    {
        "id": "toc-ch-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Chomsky Type 3 languages are:",
        "options": [
            "Context-free",
            "Regular",
            "Context-sensitive",
            "Recursively enumerable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Type 3: Regular (DFA/NFA/RE)"
        }
    },
    {
        "id": "toc-ch-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Chomsky Type 2 languages are:",
        "options": [
            "Regular",
            "Context-free",
            "Context-sensitive",
            "RE"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Type 2: Context-free (CFG/PDA)"
        }
    },
    {
        "id": "toc-ch-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Chomsky Type 1 languages are:",
        "options": [
            "Regular",
            "CFL",
            "Context-sensitive (LBA)",
            "RE"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Type 1: CSL (Linear Bounded Automata)"
        }
    },
    {
        "id": "toc-ch-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Chomsky Type 0 languages are:",
        "options": [
            "Regular",
            "CFL",
            "CSL",
            "Recursively enumerable (TM)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Type 0: RE (Turing Machine)"
        }
    },
    {
        "id": "toc-ch-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Proper containment: Regular ⊂ CFL ⊂ CSL ⊂ RE. True or false?",
        "options": [
            "True",
            "False, all equal",
            "False, reverse order",
            "Incomparable"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Type 3 ⊂ Type 2 ⊂ Type 1 ⊂ Type 0"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-fa-001",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "NFA with 5 states. Maximum DFA states in equivalent DFA = ?",
        "correctAnswer": 32,
        "tolerance": 0,
        "explanation": {
            "solution": "2⁵ = 32 states maximum"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-fa-002",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "DFA for strings over {0,1} divisible by 3 (binary). States = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "States: remainder 0, 1, 2 when dividing by 3 = 3 states"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-fa-003",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "Minimum DFA for L = strings ending with 'ab' over {a,b}. States = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "States: start (nothing), seen 'a', seen 'ab' = 3 states"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-fa-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "ε-closure of state q includes:",
        "options": [
            "Only q",
            "q and all states reachable by ε transitions",
            "All states",
            "No states"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ε-closure: q + all states reachable by 0 or more ε"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-fa-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Finite Automata",
        "question": "Minimum DFA states to accept strings with 3rd-last symbol 'a':",
        "options": [
            "3",
            "4",
            "8",
            "16"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Need to remember last 3 symbols: 2³ = 8 states"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-re-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "(a+b)*aba(a+b)* represents:",
        "options": [
            "Strings ending with aba",
            "Strings starting with aba",
            "Strings containing aba",
            "Only aba"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "(a+b)*aba(a+b)* = strings containing 'aba'"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-re-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Which is NOT regular?",
        "options": [
            "a*b*",
            "(ab)*",
            "{aⁿbⁿ | n≥0}",
            "(a+b)*"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "aⁿbⁿ requires counting: not regular"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-re-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Regular languages are closed under:",
        "options": [
            "Union only",
            "Intersection only",
            "Union, intersection, complement",
            "None"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Regular: closed under union, intersection, complement, concat, *"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-re-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "Pumping lemma is used to:",
        "options": [
            "Prove regularity",
            "Prove non-regularity",
            "Construct DFA",
            "Minimize DFA"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Pumping lemma: prove language is NOT regular"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-cfl-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "CFLs are NOT closed under:",
        "options": [
            "Union",
            "Concatenation",
            "Intersection",
            "Kleene star"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CFL: NOT closed under intersection, complement"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-cfl-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "{aⁿbⁿcⁿ | n≥0} is:",
        "options": [
            "Regular",
            "CFL",
            "Not CFL (CSL)",
            "Undecidable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "aⁿbⁿcⁿ: not CFL (needs more than stack)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-cfl-003",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "CNF: string length 8. Parse tree internal nodes = ?",
        "correctAnswer": 7,
        "tolerance": 0,
        "explanation": {
            "solution": "CNF: n-1 = 7 internal nodes for length n"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-cfl-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "CFL",
        "question": "Inherently ambiguous language is:",
        "options": [
            "Ambiguous grammar exists",
            "Every grammar is ambiguous",
            "No grammar possible",
            "Only one grammar"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Inherently ambiguous: every CFG for it is ambiguous"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-pda-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "NPDA vs DPDA: which is more powerful for CFLs?",
        "options": [
            "DPDA",
            "NPDA",
            "Equal power",
            "Incomparable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NPDA accepts all CFLs; DPDA is weaker"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-pda-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "{wwᴿ | w ∈ {a,b}*} is accepted by:",
        "options": [
            "DPDA",
            "NPDA only",
            "DFA",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "wwᴿ: needs nondeterministic guess of middle"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-pda-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "PDA",
        "question": "PDA acceptance by empty stack and final state are:",
        "options": [
            "Final state stronger",
            "Empty stack stronger",
            "Equivalent",
            "Incomparable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Empty stack ≡ final state for acceptance"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-tm-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Multi-tape TM vs single-tape TM:",
        "options": [
            "Multi more powerful",
            "Single more powerful",
            "Equivalent power",
            "Incomparable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Multi-tape can be simulated by single-tape"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-tm-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "NTM vs DTM:",
        "options": [
            "NTM more powerful",
            "DTM more powerful",
            "Equivalent power",
            "Incomparable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "NTM can be simulated by DTM"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-tm-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Universal TM can:",
        "options": [
            "Accept only regular",
            "Simulate any TM",
            "Solve halting problem",
            "Run in polynomial time"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "UTM simulates any TM given its encoding"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-dec-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Halting problem is:",
        "options": [
            "Decidable",
            "Undecidable",
            "Regular",
            "CFL"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Halting problem: undecidable (Rice's theorem)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-dec-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Emptiness of regular language is:",
        "options": [
            "Undecidable",
            "Decidable",
            "NP-complete",
            "PSPACE"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Decidable: check if final state reachable from start"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-dec-003",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Equivalence of two CFGs is:",
        "options": [
            "Decidable",
            "Undecidable",
            "Decidable in polynomial",
            "Decidable in exponential"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CFG equivalence: undecidable"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-dec-004",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Membership problem for CFL (is w ∈ L?) is:",
        "options": [
            "Undecidable",
            "Decidable in O(n³) via CYK",
            "NP-hard",
            "Undecidable for ambiguous"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CYK algorithm: O(n³) for CFL membership"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-dec-005",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "RE (recursively enumerable) but not recursive means:",
        "options": [
            "TM halts on all inputs",
            "TM halts only on accepted strings",
            "No TM exists",
            "DFA exists"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RE not recursive: TM may loop on non-members"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-ch-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "Type-2 grammars generate:",
        "options": [
            "Regular",
            "Context-free",
            "Context-sensitive",
            "RE"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Type-2 = Context-free grammars"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-toc-ch-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Chomsky Hierarchy",
        "question": "LBA (Linear Bounded Automaton) accepts:",
        "options": [
            "Regular",
            "CFL",
            "Context-sensitive",
            "RE"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "LBA = Type-1 = Context-sensitive languages"
        }
    }
]);
