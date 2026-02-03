Questions.register([
    {
        "id": "toc-dfa-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "A DFA (Deterministic Finite Automaton) for each state and input symbol has:",
        "options": [
            "At most one transition",
            "Zero transitions",
            "Exactly one transition",
            "One or more transitions"
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
            "2^n",
            "n!",
            "n²"
        ],
        "correctAnswer": 1,
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
            "All strings over {a, b} including empty string",
            "Strings starting with a",
            "Strings of exactly one a or b",
            "Strings of alternating a and b"
        ],
        "correctAnswer": 0,
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
            "Not regular",
            "Decidable",
            "Regular",
            "Context-free"
        ],
        "correctAnswer": 0,
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
            "Turing Machines only",
            "Finite Automata",
            "Pushdown Automata",
            "Linear Bounded Automata"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Context-Free Languages & Pushdown Automata: CFLs recognized by PDAs (Pushdown Automata) which extend FA with INFINITE STACK (LIFO memory). PDA = (Q, Σ, Γ, δ, q0, Z0, F) where Γ = stack alphabet, Z0 = initial stack symbol. Transitions: δ: Q × (Σ∪{ε}) × Γ → finite subsets of Q × Γ*. Can push/pop stack symbols, nondeterministic. CFLs properly contain regular languages (every RL is CFL). Examples: {a^n b^n}, balanced parentheses, palindromes. NOT CFL: {a^n b^n c^n}, {ww | w∈Σ*}. Power: FA < PDA < LBA < TM. CFL closure: union, concatenation, star. NOT closed: intersection, complement. Used for: programming language syntax, parsing.",
            "formula": "CFL ↔ PDA (stack for memory)"
        }
    },
    {
        "id": "toc-cfg-002",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "A grammar is in Chomsky Normal Form (CNF) if every production is of the form:",
        "options": [
            "A → BC or A → a (where A,B,C are non-terminals, a is terminal)",
            "A → ε only",
            "A → aB or A → a",
            "A → a only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Chomsky Normal Form (CNF): Restricted CFG where EVERY production (except S→ε) is: (1) A → BC (two non-terminals on RHS), OR (2) A → a (single terminal). Start symbol S can have S → ε if ε∈L. Purpose: (1) SIMPLIFIES analysis - fixed structure, (2) CYK PARSING algorithm - O(n³) time for membership testing, (3) Pumping lemma proofs easier. Conversion: eliminate ε-productions, unit productions, useless symbols, then convert to CNF. Every CFG can be converted to CNF generating same language (minus ε). Parse tree in CNF is BINARY tree (except leaves). Contrast GNF: terminal first.",
            "formula": "CNF: A→BC or A→a (binary productions)"
        }
    },
    {
        "id": "toc-tm-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machine",
        "question": "Turing machine has:",
        "options": [
            "Stack only",
            "Finite tape",
            "Infinite tape, read-write head",
            "No tape"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Turing Machine (TM): Most powerful computational model - can compute ANY effectively computable function (Church-Turing thesis). Components: (1) INFINITE TAPE (unbounded memory, cells with symbols), (2) READ-WRITE HEAD (can read, write, move left/right), (3) Finite control (states). Formally: TM = (Q, Σ, Γ, δ, q0, B, F) where Γ⊇Σ (tape alphabet ⊇ input alphabet), B = blank symbol, δ: Q×Γ → Q×Γ×{L,R}. Can MODIFY tape (unlike FA/PDA). Halts by reaching accept/reject state or undefined transition. Types: single-tape, multi-tape (equivalent), deterministic, nondeterministic (equivalent). Recognizes recursively enumerable languages (Type-0). Decidable if always halts.",
            "formula": "TM: infinite tape, R/W head, universal computation"
        }
    },
    {
        "id": "toc-decide-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "The halting problem for Turing Machines is:",
        "options": [
            "Regular",
            "Context-free",
            "Undecidable",
            "Decidable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Halting Problem: UNDECIDABLE problem - no algorithm exists to determine if arbitrary TM M halts on input w. Formally: HALT = {⟨M,w⟩ | TM M halts on input w} is NOT decidable (but is RE). Proof (Turing, 1936): Diagonalization - assume H decides HALT, construct TM D that: if H(D,D)=halt then loop forever, else halt. Contradiction: does D halt on D? Either answer contradicts H's output. Implications: (1) Fundamental limitation of computation, (2) Many problems reducible from HALT (undecidable), (3) Cannot write perfect debugger/virus detector. Semi-decidable: can recognize halting cases but not non-halting. Rice's theorem generalizes.",
            "formula": "HALT undecidable (diagonalization proof)"
        }
    },
    {
        "id": "toc-dfa-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Regular Languages",
        "question": "DFA for language 'strings containing substring 01' has minimum states:",
        "options": [
            "5",
            "4",
            "3",
            "2"
        ],
        "correctAnswer": 2,
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
            "6",
            "2",
            "4",
            "3"
        ],
        "correctAnswer": 3,
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
            "Neither",
            "Both DFA and NFA",
            "DFA only",
            "NFA only"
        ],
        "correctAnswer": 3,
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
            "CYK algorithm",
            "Pumping lemma"
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
            "All states",
            "No states",
            "States reachable from q using ε-transitions"
        ],
        "correctAnswer": 3,
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
            "Always has 1 state",
            "Unique up to state renaming",
            "Always larger than NFA"
        ],
        "correctAnswer": 2,
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
            "Exactly one a",
            "One or more a's",
            "At most one a",
            "Zero or more a's"
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
            "ab(a|b)*",
            "(a|b)*ab",
            "(ab)*",
            "ab"
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
            "Recursively enumerable only",
            "Regular",
            "Context-sensitive",
            "Context-free but not regular"
        ],
        "correctAnswer": 3,
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
            "None of these",
            "Intersection only"
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
            "Grammar has no terminals",
            "A → αA for some α",
            "A → ε"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Left Recursion: Grammar production A → Aα for some string α (A derives itself leftmost). Problem for TOP-DOWN parsers (LL, recursive descent): causes INFINITE LOOP - trying to expand A calls A recursively without consuming input. Example: E → E+T | T (left-recursive). Elimination: transform A → Aα | β to A → βA', A' → αA' | ε (right-recursive). Direct left-recursion (A→Aα) easy to remove. Indirect (A⇒B⇒...⇒Aα) harder - requires systematic algorithm. Bottom-up parsers (LR) handle left-recursion fine. Left-recursion natural for left-associative operators (1-2-3 = (1-2)-3).",
            "formula": "Left-recursive: A → Aα (problematic for LL)"
        }
    },
    {
        "id": "toc-cfg-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Left factoring is done to:",
        "options": [
            "Remove common prefixes for predictive parsing",
            "Remove left recursion",
            "Find FOLLOW sets",
            "Convert to CNF"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Left Factoring: Grammar transformation to enable PREDICTIVE PARSING (LL(1)). Problem: productions A → αβ | αγ share common prefix α - can't decide which to use with lookahead. Solution: factor out α: A → αA', A' → β | γ. Now first symbol of β,γ determines choice. Example: stmt → if expr then stmt else stmt | if expr then stmt becomes stmt → if expr then stmt stmt', stmt' → else stmt | ε. Necessary for LL(1) grammars. Doesn't change language, only grammar structure. Multiple passes may be needed for nested common prefixes.",
            "formula": "Left factor: A→αβ| αγ becomes A→αA', A'→β|γ"
        }
    },
    {
        "id": "toc-cfg-012",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Ambiguous grammar means:",
        "options": [
            "Is not context-free",
            "Has no parse tree for some string",
            "Has multiple parse trees for some string",
            "Cannot generate any string"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Ambiguous Grammar: CFG where ∃ at least one string with MULTIPLE DISTINCT PARSE TREES (or equivalently, multiple leftmost/rightmost derivations). Example: E → E+E | E*E | (E) | id. String id+id*id has 2 parse trees: ((id+id)*id) vs (id+(id*id)). Problem: (1) ambiguous semantics, (2) compiler can't choose unique interpretation. Solutions: (1) REWRITE grammar unambiguously (add precedence/associativity via grammar structure), (2) use DISAMBIGUATING RULES (Yacc precedence declarations). Some CFLs are INHERENTLY AMBIGUOUS - no unambiguous grammar exists. Dangling-else: classic ambiguity (if-if-else pairing).",
            "formula": "Ambiguous: ∃ string with >1 parse tree"
        }
    },
    {
        "id": "toc-cfg-013",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "CFL are closed under:",
        "options": [
            "All of above",
            "Complement",
            "Union, concatenation, Kleene star",
            "Intersection"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CFL Closure Properties: CFLs CLOSED under: (1) UNION - L1∪L2: S→S1|S2, (2) CONCATENATION - L1L2: S→S1S2, (3) KLEENE STAR - L*: S→SS1|ε. NOT CLOSED under: (1) INTERSECTION - counterexample: {a^n b^n c^m}∩{a^m b^n c^n}={a^n b^n c^n} (not CFL), (2) COMPLEMENT - follows from non-closure under ∩ (De Morgan's). Special case: CFL ∩ Regular = CFL (closed). Proofs use PDA constructions or pumping lemma. Consequences: (1) can't use ∩,complement to build new CFLs, (2) decidability issues.",
            "formula": "CFL closed: ∪,concat,*. NOT: ∩,complement"
        }
    },
    {
        "id": "toc-cfg-014",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Intersection of CFL and regular language is:",
        "options": [
            "Always CFL",
            "Could be anything",
            "Always regular",
            "Undecidable"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CFL ∩ Regular = CFL: Intersection of Context-Free Language with Regular Language is always Context-Free. Proof: construct PDA that SIMULATES BOTH - PDA for CFL + DFA for regular language run in parallel. PDA state = (q_PDA, q_DFA), accepts if both components accept. Even though CFLs not closed under general intersection, THIS SPECIAL CASE holds. Applications: (1) language restrictions (filter CFL via regex), (2) parsing with constraints. Conversely: Regular ∩ Regular = Regular (trivial). Complement: CFL∩CFL not always CFL.",
            "formula": "CFL ∩ RL = CFL (special closure)"
        }
    },
    {
        "id": "toc-cfg-015",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Context-Free Languages",
        "question": "Greibach Normal Form (GNF) has productions of form:",
        "options": [
            "A → aα where a is terminal, α is string of non-terminals",
            "A → ε",
            "A → a",
            "A → BC"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Greibach Normal Form (GNF): CFG where every production is A → aα where a∈Σ (TERMINAL FIRST), α∈V* (string of non-terminals, possibly empty). Example: A → aBC, A → a. Every CFL (without ε except possibly in S) has GNF. Advantages: (1) LEFTMOST DERIVATION consumes terminal each step, (2) Easy PDA construction - PDA state = single state, stack tracks derivation, pop A and push α reversed. (3) Derivation length = string length. Contrast CNF: all non-terminals. Conversion: more complex than CNF - requires eliminating left-recursion, substitution, renaming. Used in: formal language theory, PDA construction proofs.",
            "formula": "GNF: A→aα (terminal first, then non-terminals)"
        }
    },
    {
        "id": "toc-tm-010",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "Church-Turing thesis states:",
        "options": [
            "Any effectively computable function can be computed by a TM",
            "TM can solve NP problems in P time",
            "TM is the fastest computer",
            "TM has infinite speed"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Church-Turing Thesis: Foundational equivalence statement - INFORMAL HYPOTHESIS (not provable theorem) that: 'Intuitive notion of ALGORITHM = Turing Machine computation'. Any function computable by ANY reasonable computational model (lambda calculus, RAM, while programs, etc.) is computable by TM. Converse also true. Equivalence: λ-calculus ≡ TM ≡ recursive functions ≡ Post systems ≡ modern computers. Implications: (1) TM defines limits of computation, (2) Undecidable for TM = undecidable for ANY computer, (3) Theoretical CS results apply to real computers. Not proven - empirical observation (all proposed models equivalent to TM). Strong CT: polynomial-time TM = feasibly computable.",
            "formula": "Intuitive 'algorithm' ≡ TM-computable"
        }
    },
    {
        "id": "toc-tm-011",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "A language is decidable if:",
        "options": [
            "TM has finite states",
            "TM halts on all inputs, accepting if in language",
            "TM accepts all strings in the language",
            "TM uses bounded tape"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Decidable Language (Recursive): Language L where ∃ TM that ALWAYS HALTS - accepts strings in L, REJECTS strings not in L. Formally: ∃ TM M such that ∀w: (1) w∈L ⟹ M accepts w and halts, (2) w∉L ⟹ M rejects w and halts. Also called RECURSIVE language. Decidable = total computable characteristic function. Examples: (1) regular languages (DFA always halts), (2) CFLs (CYK parser always terminates), (3) equality of two DFAs. Decidable ⊂ RE (recursively enumerable). Complement of decidable = decidable. Church-Turing: decidable = intuitively 'solvable'. Properties: closed under ∪,∩,complement, concat.",
            "formula": "Decidable: TM halts on ALL inputs (accept/reject)"
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
            "It is regular",
            "It is finite",
            "TM accepts strings in language (may loop on non-members)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Recursively Enumerable (RE) / Turing-Recognizable: Language L where ∃ TM that ACCEPTS all strings in L, but may LOOP FOREVER on strings not in L (doesn't necessarily halt on rejection). Formally: ∃ TM M such that L = {w | M accepts w}. Also called semi-decidable. Examples: (1) HALT problem is RE but not decidable, (2) any decidable language is RE. RE languages recognized by TM (Type-0 Chomsky). Properties: (1) closed under ∪,∩,concat,*, (2) NOT closed under complement (L and L̄ both RE ⟺ L decidable). Enumerable: can list language members (may be infinite listing). Many problems RE but undecidable (can recognize yes, can't recognize no).",
            "formula": "RE: TM accepts L, may loop on L̄"
        }
    },
    {
        "id": "toc-tm-013",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Turing Machines",
        "question": "Rice's theorem applies to:",
        "options": [
            "Properties of regular languages",
            "Finite automata",
            "Non-trivial semantic properties of TM-recognized languages",
            "All languages"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Rice's Theorem: Powerful META-THEOREM about decidability. Statement: ANY non-trivial SEMANTIC property of RE languages is UNDECIDABLE. Non-trivial = property holds for some RE languages but not all (not trivially true/false). Semantic = property of language L(M), not encoding ⟨M⟩. Examples of UNDECIDABLE properties (by Rice): (1) Is L(M) finite? (2) Is L(M) regular? (3) Is ε ∈ L(M)? (4) Is L(M) = Σ*? Proof: reduction from HALT. Exceptions (syntactic, not semantic): Is M's description <100 states? (decidable-syntactic). Consequence: can't decide almost anything interesting about what TM computes. Fundamental limitation.",
            "formula": "Rice: non-trivial semantic property of RE → undecidable"
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
            "Regular",
            "NP-complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Post Correspondence Problem (PCP): UNDECIDABLE problem. Given: finite sets of domino pairs {(top_i, bottom_i)} where top_i, bottom_i ∈ Σ*. Question: Can we select sequence of dominoes (with repetition) such that concatenated tops = concatenated bottoms? Example: {(b,ca), (ca,a), (a,bca)} - solution: (2,1,1,3) gives 'cabaa' top = 'cabaa' bottom. PCP is undecidable - no algorithm decides for all instances. Modified PCP (must start with domino 1): also undecidable. Used for REDUCTION proofs - show problem P undecidable by reducing PCP to P. Applications: context-free grammar problems, ambiguity questions. Important in theory - many undecidability proofs use PCP.",
            "formula": "PCP undecidable (reduction tool)"
        }
    },
    {
        "id": "toc-dec-001",
        "type": "MCQ",
        "topic": "toc",
        "subtopic": "Decidability",
        "question": "Decidable language means:",
        "options": [
            "Recognized by PDA",
            "TM halts on all inputs with accept/reject",
            "No TM exists",
            "TM may loop forever"
        ],
        "correctAnswer": 1,
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
            "Empty language",
            "Always decidable",
            "Finite language",
            "TM accepts members, may loop on non-members"
        ],
        "correctAnswer": 3,
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
            "Undecidable",
            "Decidable",
            "Regular",
            "CFL"
        ],
        "correctAnswer": 0,
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
            "Always non-empty",
            "Decidable",
            "Always empty"
        ],
        "correctAnswer": 2,
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
            "Undecidable",
            "Always true",
            "Always false",
            "Decidable"
        ],
        "correctAnswer": 0,
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
            "(Σ, δ, q0, F)",
            "(Q, Σ, δ, q0, F)",
            "(Q, Σ, δ, F)",
            "(Q, Σ, q0, F)"
        ],
        "correctAnswer": 1,
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
            "Q → Σ",
            "Q × Σ → 2^Q",
            "Σ → Q",
            "Q × Σ → Q"
        ],
        "correctAnswer": 3,
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
            "Q × Σ → 2^Q",
            "Q × (Σ ∪ {ε}) → 2^Q",
            "Q × Σ → Q",
            "Only option C is correct for NFA with ε-transitions"
        ],
        "correctAnswer": 1,
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
            "n² states",
            "Same number of states",
            "2^n states (n = NFA states)",
            "n! states"
        ],
        "correctAnswer": 2,
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
            "Cannot compare",
            "Equivalent in power"
        ],
        "correctAnswer": 3,
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
            "States reachable from q by ε-transitions only",
            "Empty set",
            "Only q itself",
            "States reachable from q by any symbol"
        ],
        "correctAnswer": 0,
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
            "Unique (up to isomorphism)",
            "Cannot exist",
            "Not unique",
            "Always has 1 state"
        ],
        "correctAnswer": 0,
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
            "They are both non-final",
            "They are both final",
            "They have same transitions",
            "There exists a string w where δ*(p,w)∈F XOR δ*(q,w)∈F"
        ],
        "correctAnswer": 3,
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
            "All of the above",
            "None of the above",
            "Concatenation, Kleene star"
        ],
        "correctAnswer": 1,
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
            "Equal 0s and 1s",
            "Alternating 0s and 1s",
            "Only strings with both 0 and 1",
            "Any number of 0s followed by any number of 1s"
        ],
        "correctAnswer": 3,
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
            "All strings over {0,1}",
            "Only 0s",
            "Only 1s",
            "Alternating 0s and 1s"
        ],
        "correctAnswer": 0,
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
            "Prove a language is NOT regular",
            "Minimize DFA",
            "Prove a language is regular",
            "Construct DFA"
        ],
        "correctAnswer": 0,
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
            "No conditions needed",
            "|y| ≤ p only",
            "|xy| ≤ p, |y| > 0, xy^iz ∈ L for all i ≥ 0",
            "|xz| ≤ p, |y| > 0"
        ],
        "correctAnswer": 2,
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
            "Recursively enumerable only",
            "Context-free but not regular",
            "Regular",
            "Context-sensitive"
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
            "Context-free",
            "Context-sensitive only",
            "Regular",
            "Not context-free"
        ],
        "correctAnswer": 0,
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
            "It has a grammar",
            "It can be pumped",
            "The relation ~L has finitely many equivalence classes",
            "It has infinite states"
        ],
        "correctAnswer": 2,
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
            "a → α where a is terminal",
            "Non-terminal → Non-terminal only",
            "S → terminal only",
            "A → α where A is non-terminal, α is any string of terminals and non-terminals"
        ],
        "correctAnswer": 3,
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
            "Turing Machine only",
            "NFA",
            "Pushdown Automata (PDA)",
            "DFA"
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
            "Complement",
            "Both A and B",
            "Intersection with regular languages",
            "Union, concatenation, Kleene star"
        ],
        "correctAnswer": 1,
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
            "Kleene star",
            "Concatenation"
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
            "Any form",
            "A → aBc",
            "A → BC or A → a",
            "A → aB"
        ],
        "correctAnswer": 2,
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
            "A → abcd",
            "A → aα (terminal followed by non-terminals)",
            "A → BC",
            "A → a only"
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
            "O(2^n)",
            "O(n³)",
            "O(n²)",
            "O(n)"
        ],
        "correctAnswer": 1,
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
            "All strings have unique parse trees",
            "It generates empty string",
            "Some string has more than one parse tree",
            "It has no parse tree"
        ],
        "correctAnswer": 2,
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
            "All grammars generating it are ambiguous",
            "One grammar is ambiguous",
            "It has no grammar",
            "It is regular"
        ],
        "correctAnswer": 0,
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
            "|uv| ≤ p only",
            "No conditions",
            "|xy| > 0 only",
            "|vy| > 0, |vxy| ≤ p, uv^ix^iy^iz ∈ L"
        ],
        "correctAnswer": 3,
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
            "Not recursively enumerable",
            "Context-free",
            "Context-sensitive but not CF",
            "Regular"
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
            "Random access memory",
            "A stack",
            "A queue",
            "Multiple tapes"
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
            "Cannot exist",
            "Strictly weaker than NPDA",
            "Strictly stronger than NPDA",
            "Equivalent to NPDA"
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
            "Neither",
            "Final state only",
            "Empty stack only",
            "Either final state or empty stack"
        ],
        "correctAnswer": 3,
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
            "Infinite tape, read-only",
            "Infinite tape, read-write",
            "Fixed finite tape",
            "No tape"
        ],
        "correctAnswer": 1,
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
            "Q × Σ",
            "Q",
            "Q × Γ × {L, R}",
            "Q × Γ"
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
            "Not accepted by any TM",
            "Decided by some TM",
            "Rejected by all TMs",
            "Accepted by some TM (may not halt on non-members)"
        ],
        "correctAnswer": 3,
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
            "TM rejects all strings",
            "TM may loop forever",
            "No TM exists",
            "TM accepts or rejects (always halts)"
        ],
        "correctAnswer": 3,
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
            "RE ⊂ Decidable",
            "All decidable languages are RE",
            "They don't overlap",
            "All RE languages are decidable"
        ],
        "correctAnswer": 1,
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
            "Undecidable",
            "Context-free",
            "Regular",
            "Decidable"
        ],
        "correctAnswer": 0,
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
            "TMs cannot compute everything",
            "Any effective computation can be done by a TM",
            "All TMs are equivalent",
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
            "Single-tape is more powerful",
            "Equivalent in power (multi-tape can be simulated)",
            "Cannot compare",
            "Multi-tape is more powerful"
        ],
        "correctAnswer": 1,
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
            "Equivalent in power",
            "Cannot compare",
            "DTM more powerful",
            "NTM more powerful"
        ],
        "correctAnswer": 0,
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
            "Recursively enumerable languages",
            "Context-free languages",
            "Regular languages",
            "Context-sensitive languages"
        ],
        "correctAnswer": 2,
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
            "Context-sensitive languages",
            "Context-free languages",
            "Regular languages",
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
            "Context-free languages",
            "Recursively enumerable languages",
            "Context-sensitive languages",
            "Regular languages"
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
            "Recursively enumerable languages",
            "Context-free languages",
            "Context-sensitive languages"
        ],
        "correctAnswer": 1,
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
            "RE is smallest",
            "No containment",
            "Each is strictly contained in next",
            "All are equal"
        ],
        "correctAnswer": 2,
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
            "Decidable in O(n)",
            "Decidable in O(2^n)",
            "PSPACE-complete",
            "Undecidable"
        ],
        "correctAnswer": 0,
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
            "NP-complete",
            "Decidable (reachability to final state)",
            "PSPACE-complete"
        ],
        "correctAnswer": 2,
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
            "NP-complete",
            "PSPACE-complete",
            "Decidable"
        ],
        "correctAnswer": 3,
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
            "NP-complete",
            "PSPACE-complete",
            "Undecidable",
            "Decidable (CYK algorithm)"
        ],
        "correctAnswer": 3,
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
            "PSPACE-complete",
            "NP-complete",
            "Decidable"
        ],
        "correctAnswer": 3,
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
            "NP-complete",
            "Decidable",
            "In P",
            "Undecidable"
        ],
        "correctAnswer": 3,
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
            "In P",
            "Decidable",
            "NP-complete",
            "Undecidable"
        ],
        "correctAnswer": 3,
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
            "Undecidable",
            "Decidable",
            "NP-complete",
            "PSPACE-complete"
        ],
        "correctAnswer": 0,
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
            "Incomparable",
            "Equivalent in power",
            "DFA more powerful",
            "RE more powerful"
        ],
        "correctAnswer": 1,
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
            "Union, concatenation, Kleene star, intersection, complement",
            "Only complement",
            "Only union",
            "None"
        ],
        "correctAnswer": 0,
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
            "Undecidable",
            "Regular",
            "Not regular (CFL)",
            "Not CFL"
        ],
        "correctAnswer": 2,
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
            "|z| ≤ p",
            "|xy| ≤ p, |y| ≥ 1",
            "|y| ≤ p",
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
            "0 or 1",
            "1",
            "0",
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
            "0, 1, or more",
            "Exactly 1",
            "Only 0",
            "Infinite"
        ],
        "correctAnswer": 0,
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
            "2ⁿ states",
            "n+1 states",
            "n² states",
            "n states"
        ],
        "correctAnswer": 0,
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
            "Only non-ε",
            "No ε transitions",
            "Only ε moves",
            "ε transitions (no input consumed)"
        ],
        "correctAnswer": 3,
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
            "5",
            "2",
            "3",
            "4"
        ],
        "correctAnswer": 2,
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
            "PDA (Pushdown Automata)",
            "DFA",
            "Turing machine only",
            "NFA"
        ],
        "correctAnswer": 0,
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
            "Intersection",
            "Both intersection and complement",
            "Union, concatenation, Kleene star",
            "Complement"
        ],
        "correctAnswer": 2,
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
            "Undecidable",
            "CSL (not CFL)"
        ],
        "correctAnswer": 3,
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
            "A → aBc",
            "Any form",
            "A → ε always",
            "A → a or A → BC"
        ],
        "correctAnswer": 3,
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
            "A → ε",
            "A → aα (terminal followed by variables)",
            "A → aa",
            "A → BC"
        ],
        "correctAnswer": 1,
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
            "O(2ⁿ)",
            "O(n²)",
            "O(n³)",
            "O(n)"
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
            "Output tape",
            "Stack (LIFO)",
            "Two-way tape"
        ],
        "correctAnswer": 2,
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
            "DPDA more powerful",
            "NPDA more powerful (for CFLs)",
            "Incomparable",
            "Same power"
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
            "Final state or empty stack (equivalent)",
            "Neither",
            "Only final state",
            "Only empty stack"
        ],
        "correctAnswer": 0,
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
            "Turing machine only",
            "DPDA",
            "NPDA"
        ],
        "correctAnswer": 3,
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
            "Can write to tape and move both directions",
            "Has multiple heads",
            "Faster",
            "Uses less memory"
        ],
        "correctAnswer": 0,
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
            "Equivalent in power (single simulates multi)",
            "Multi-tape more powerful",
            "Incomparable",
            "Single-tape more powerful"
        ],
        "correctAnswer": 0,
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
            "DTM more powerful",
            "Equivalent in power (can simulate each other)",
            "NTM more powerful",
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
            "Always true",
            "Decidable (CYK algorithm)",
            "Only for regular",
            "Undecidable"
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
            "Always true",
            "Undecidable",
            "Decidable",
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
            "Recursively enumerable",
            "Regular",
            "Context-sensitive",
            "Context-free"
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
            "Context-free",
            "Context-sensitive",
            "RE",
            "Regular"
        ],
        "correctAnswer": 0,
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
            "RE",
            "Context-sensitive (LBA)"
        ],
        "correctAnswer": 3,
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
            "CFL",
            "CSL",
            "Recursively enumerable (TM)",
            "Regular"
        ],
        "correctAnswer": 2,
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
            "No states",
            "All states",
            "q and all states reachable by ε transitions",
            "Only q"
        ],
        "correctAnswer": 2,
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
            "8",
            "4",
            "16",
            "3"
        ],
        "correctAnswer": 0,
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
            "Strings containing aba",
            "Only aba",
            "Strings starting with aba",
            "Strings ending with aba"
        ],
        "correctAnswer": 0,
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
            "{aⁿbⁿ | n≥0}",
            "(ab)*",
            "(a+b)*"
        ],
        "correctAnswer": 1,
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
            "None",
            "Intersection only",
            "Union, intersection, complement"
        ],
        "correctAnswer": 3,
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
            "Construct DFA",
            "Minimize DFA",
            "Prove non-regularity",
            "Prove regularity"
        ],
        "correctAnswer": 2,
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
            "Kleene star",
            "Concatenation",
            "Intersection",
            "Union"
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
            "Not CFL (CSL)",
            "Regular",
            "CFL",
            "Undecidable"
        ],
        "correctAnswer": 0,
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
            "Every grammar is ambiguous",
            "Only one grammar",
            "No grammar possible",
            "Ambiguous grammar exists"
        ],
        "correctAnswer": 0,
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
            "NPDA",
            "DPDA",
            "Equal power",
            "Incomparable"
        ],
        "correctAnswer": 0,
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
            "DFA",
            "DPDA",
            "NPDA only",
            "None"
        ],
        "correctAnswer": 2,
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
            "Equivalent",
            "Final state stronger",
            "Empty stack stronger",
            "Incomparable"
        ],
        "correctAnswer": 0,
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
            "Equivalent power",
            "Single more powerful",
            "Incomparable",
            "Multi more powerful"
        ],
        "correctAnswer": 0,
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
            "Incomparable",
            "Equivalent power",
            "DTM more powerful",
            "NTM more powerful"
        ],
        "correctAnswer": 1,
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
            "Simulate any TM",
            "Solve halting problem",
            "Run in polynomial time",
            "Accept only regular"
        ],
        "correctAnswer": 0,
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
            "CFL",
            "Undecidable",
            "Regular",
            "Decidable"
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
            "PSPACE",
            "NP-complete",
            "Decidable",
            "Undecidable"
        ],
        "correctAnswer": 2,
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
            "Decidable in polynomial",
            "Undecidable",
            "Decidable in exponential",
            "Decidable"
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
            "Undecidable for ambiguous",
            "NP-hard"
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
            "TM halts only on accepted strings",
            "No TM exists",
            "DFA exists",
            "TM halts on all inputs"
        ],
        "correctAnswer": 0,
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
            "RE",
            "Context-sensitive"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "LBA = Type-1 = Context-sensitive languages"
        }
    }
]);