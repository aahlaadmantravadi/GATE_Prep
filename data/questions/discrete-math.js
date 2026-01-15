Questions.register([
    {
        "id": "dm-graph-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "According to the Handshaking Theorem, the sum of degrees of all vertices in a graph equals:",
        "options": [
            "Number of vertices",
            "Number of edges",
            "Twice the number of edges",
            "Number of vertices squared"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Handshaking Theorem (Degree Sum Formula): In any graph, sum of all vertex degrees = TWICE the number of edges. Why? Each edge contributes to degrees of TWO vertices (its endpoints). Counting edges by summing degrees counts each edge TWICE. Formally: $\\sum_{v \\in V} deg(v) = 2|E|$. Corollary: number of odd-degree vertices is ALWAYS EVEN (since sum must be even). Used for: graph invariants, existence proofs, impossibility arguments. Example: can't have graph with 5 vertices of degrees 3,3,3,3,2 (sum=14, not even multiple of edges).",
            "formula": "$\\sum deg(v) = 2|E|$ (each edge contributes 2 to degree sum)"
        }
    },
    {
        "id": "dm-graph-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In a complete graph Kₙ, the number of edges is:",
        "options": [
            "n",
            "n-1",
            "n(n-1)/2",
            "n²"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Complete Graph $K_n$: EVERY pair of distinct vertices connected by exactly one edge (maximally connected simple graph). Edge count: choose 2 vertices from $n$ = $\\binom{n}{2} = \\frac{n(n-1)}{2}$. Each vertex has degree $n-1$ (connected to all others). Properties: (1) diameter = 1 (any two vertices adjacent), (2) regular graph (all vertices same degree), (3) always Hamiltonian (trivial - any permutation of vertices forms Hamiltonian cycle). $K_5$ and $K_{3,3}$ are smallest non-planar graphs (Kuratowski). Total possible labeled graphs on $n$ vertices = $2^{n(n-1)/2}$ (each edge in/out).",
            "formula": "$|E(K_n)| = \\binom{n}{2} = \\frac{n(n-1)}{2}$"
        }
    },
    {
        "id": "dm-graph-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A bipartite graph cannot contain:",
        "options": [
            "Even-length cycles",
            "Trees",
            "Odd-length cycles",
            "Isolated vertices"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Bipartite Graph: Vertices can be partitioned into TWO DISJOINT sets $U$ and $V$ such that EVERY edge connects vertex in $U$ to vertex in $V$ (no edges within same set). Characterization: graph is bipartite $\\iff$ it contains NO ODD-LENGTH CYCLES. Why? Walking odd cycle alternates between sets, but odd steps returns to same set - contradiction. 2-colorable $\\iff$ bipartite. Examples: trees (always bipartite), even cycles, complete bipartite $K_{m,n}$. Applications: matching problems, scheduling, Hall's marriage theorem. Test: BFS/DFS coloring with 2 colors - succeeds iff bipartite.",
            "formula": "Bipartite $\\iff$ no odd cycles"
        }
    },
    {
        "id": "dm-graph-004",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In a complete bipartite graph K₃,₄, how many edges are there?",
        "correctAnswer": 12,
        "tolerance": 0,
        "explanation": {
            "solution": "In Km,n, each of the m vertices in one set connects to all n vertices in the other set, giving m×n = 3×4 = 12 edges.",
            "formula": "Edges in Km,n = m × n"
        }
    },
    {
        "id": "dm-graph-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A tree with n vertices has exactly:",
        "options": [
            "n edges",
            "n-1 edges",
            "n+1 edges",
            "2n edges"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Tree: Connected ACYCLIC (no cycles) undirected graph. Equivalent definitions (any 2 imply the 3rd): (1) connected + acyclic, (2) connected + $|E|=n-1$ edges, (3) acyclic + $|E|=n-1$, (4) exactly one path between any two vertices. Minimum edges for connectivity = $n-1$ (fewer disconnects, more creates cycle). Properties: (1) removing any edge disconnects, (2) adding any edge creates exactly one cycle, (3) always bipartite, (4) has at least 2 leaves (degree-1 vertices). Spanning tree of graph $G$: tree subgraph containing all vertices. Applications: network routing, parse trees, MST (minimum spanning tree).",
            "formula": "Tree: $|E| = |V| - 1$ (connected, acyclic)"
        }
    },
    {
        "id": "dm-graph-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Euler's formula for connected planar graphs states: v - e + r = ?",
        "options": [
            "0",
            "1",
            "2",
            "n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Euler's Formula for Planar Graphs: For any CONNECTED planar graph embedding with $v$ vertices, $e$ edges, $f$ faces (regions including outer infinite face): $v - e + f = 2$. Applies to ANY planar embedding of connected graph. Derivation: induction on edges/faces. Applications: (1) Prove $K_5$ non-planar: if planar, $5-10+f=2 \\Rightarrow f=7$, but $3f \\leq 2e$ gives $21 \\leq 20$ contradiction. (2) Max edges in planar: $e \\leq 3v-6$ for $v \\geq 3$. (3) Platonic solids: only 5 regular polyhedra. Generalization: for disconnected with $c$ components: $v-e+f=c+1$. Related: Euler characteristic.",
            "formula": "$v - e + f = 2$ (connected planar graph)"
        }
    },
    {
        "id": "dm-graph-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "An Eulerian circuit exists in a connected graph if and only if:",
        "options": [
            "All vertices have even degree",
            "All vertices have odd degree",
            "Exactly two vertices have odd degree",
            "The graph is complete"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Eulerian Circuit: Closed walk visiting EVERY EDGE exactly once, returning to start. Exists in connected graph $\\iff$ ALL vertices have EVEN degree. Why? At each vertex visited (not start/end), must enter and leave same number of times - requires even degree. Start vertex: leave and return same times. Euler's Theorem (1736, Königsberg bridges). Eulerian PATH (not circuit): exists $\\iff$ exactly 2 vertices odd degree (these are endpoints). Algorithm: Hierholzer's algorithm finds circuit in $O(E)$. Applications: Chinese postman problem, DNA sequencing, network traversal. Contrast Hamiltonian (NP-hard).",
            "formula": "Eulerian circuit $\\iff$ all degrees even"
        }
    },
    {
        "id": "dm-graph-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "K₅ and K₃,₃ are important because any non-planar graph must contain a subgraph homeomorphic to:",
        "options": [
            "K₄ or K₂,₃",
            "K₅ or K₃,₃",
            "K₆ or K₄,₄",
            "K₃ or K₂,₂"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Kuratowski's Theorem: Graph is NON-PLANAR $\\iff$ it contains subdivision (homeomorphic subgraph) of $K_5$ (complete graph on 5 vertices) OR $K_{3,3}$ (complete bipartite graph). Subdivision: obtained by inserting vertices into edges (edge replacement). $K_5$: has 10 edges but planar max is $3(5)-6=9$. $K_{3,3}$: bipartite with 9 edges but planar bipartite max is $2v-4=8$. Wagner's theorem (equivalent): non-planar $\\iff$ contains $K_5$ or $K_{3,3}$ as MINOR (contraction/deletion). Planarity testing: linear time algorithms (Hopcroft-Tarjan). Applications: circuit layout, map drawing.",
            "formula": "Non-planar $\\iff$ contains $K_5$ or $K_{3,3}$ subdivision"
        }
    },
    {
        "id": "dm-logic-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "The implication p → q is false only when:",
        "options": [
            "p is true and q is true",
            "p is true and q is false",
            "p is false and q is true",
            "p is false and q is false"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Implication (p → q) Truth Table:\n\np | q | p→q\nT | T | T\nT | F | F  ← ONLY false case!\nF | T | T\nF | F | T\n\nKey insight: 'False implies anything' is true!\np → q means 'if p is true, then q must be true'\nIf p is false, we can't disprove the implication.\n\nEquivalent forms: p → q ≡ ¬p ∨ q ≡ ¬(p ∧ ¬q)"
        }
    },
    {
        "id": "dm-logic-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "The biconditional p ↔ q is true when:",
        "options": [
            "p and q have different values",
            "p and q have same truth values",
            "p is true only",
            "q is true only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Biconditional (p ↔ q): True when both have SAME truth value. Also called 'if and only if' (iff). Truth table: T↔T=T, T↔F=F, F↔T=F, F↔F=T. Equivalent to: (p → q) ∧ (q → p). Used to express necessary and sufficient conditions."
        }
    },
    {
        "id": "dm-logic-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "A compound proposition that is always true is called:",
        "options": [
            "Contradiction",
            "Contingency",
            "Tautology",
            "Satisfiable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Tautology: A compound proposition that is ALWAYS TRUE.\n\nNo matter what truth values you assign to the variables, the result is always T.\n\nExamples:\n• p ∨ ¬p (Law of Excluded Middle)\n• p → p\n• (p ∧ q) → p\n• ((p → q) ∧ p) → q (Modus Ponens)\n\nTo prove a tautology: Show all rows of truth table give T.\nOr use logical equivalences to reduce to T."
        }
    },
    {
        "id": "dm-logic-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "A compound proposition that is always false is called:",
        "options": [
            "Tautology",
            "Contradiction",
            "Contingency",
            "Satisfiable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Contradiction: A compound proposition that is ALWAYS FALSE regardless of truth assignments. Examples: p ∧ ¬p (a variable can't be both true and false), F (false constant). Contradictions are unsatisfiable. Negation of a tautology is a contradiction."
        }
    },
    {
        "id": "dm-logic-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "A compound proposition that is neither tautology nor contradiction is called:",
        "options": [
            "Satisfiable",
            "Contingency",
            "Valid",
            "Sound"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Contingency: A proposition that is NEITHER a tautology NOR a contradiction. It is TRUE for some truth assignments and FALSE for others. Most 'normal' propositions are contingencies. Example: p ∧ q (true only when both p and q are true)."
        }
    },
    {
        "id": "dm-sets-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "A relation R on set A is an equivalence relation if and only if it is:",
        "options": [
            "Reflexive and symmetric",
            "Symmetric and transitive",
            "Reflexive, symmetric, and transitive",
            "Reflexive and transitive"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Equivalence Relation: Binary relation $R$ on set $A$ satisfying THREE properties: (1) REFLEXIVE: $\\forall a \\in A, aRa$ (every element related to itself), (2) SYMMETRIC: $aRb \\Rightarrow bRa$ (relation goes both ways), (3) TRANSITIVE: $aRb \\land bRc \\Rightarrow aRc$ (relation chains). Equivalence relations PARTITION set into disjoint EQUIVALENCE CLASSES $[a] = \\{x : xRa\\}$. Each element in exactly one class. Examples: (1) equality $=$, (2) congruence mod $n$: $a \\equiv b \\pmod{n}$, (3) same cardinality for sets. Quotient set $A/R$ = set of all equivalence classes. Applications: modular arithmetic, classification.",
            "formula": "Equiv. relation: reflexive + symmetric + transitive"
        }
    },
    {
        "id": "dm-sets-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "A relation R on set A is a partial order if it is:",
        "options": [
            "Reflexive, symmetric, and transitive",
            "Reflexive, antisymmetric, and transitive",
            "Irreflexive, symmetric, and transitive",
            "Reflexive and transitive only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Partial Order (POSET): Binary relation $\\leq$ on set $A$ with three properties: (1) REFLEXIVE: $a \\leq a$ for all $a$, (2) ANTISYMMETRIC: $a \\leq b$ AND $b \\leq a$ $\\Rightarrow$ $a = b$ (no cycles except self-loops), (3) TRANSITIVE: $a \\leq b$ AND $b \\leq c$ $\\Rightarrow$ $a \\leq c$. Differs from equivalence: antisymmetric vs symmetric. Examples: (1) $\\leq$ on integers,  (2) $\\subseteq$ on sets (subset relation), (3) divisibility $|$ on positive integers. HASSE DIAGRAM: graphical representation removing reflexive/transitive edges. TOTAL/LINEAR order: every pair comparable ($a \\leq b$ or $b \\leq a$). Minimal/maximal elements. Applications: lattices, sorting.",
            "formula": "POSET: reflexive + antisymmetric + transitive"
        }
    },
    {
        "id": "dm-sets-003",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "How many relations are possible on a set with 3 elements?",
        "correctAnswer": 512,
        "tolerance": 0,
        "explanation": {
            "solution": "A relation on set A is a subset of A×A. For |A|=3, |A×A|=9. Number of subsets = 2⁹ = 512.",
            "formula": "Number of relations on set of n elements = 2^(n²)"
        }
    },
    {
        "id": "dm-comb-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Combinatorics",
        "question": "The number of ways to arrange n distinct objects is:",
        "options": [
            "n",
            "2ⁿ",
            "n!",
            "nⁿ"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Permutations: Arrangements of $n$ distinct objects where ORDER MATTERS. For first position: $n$ choices. After choosing first: $n-1$ remain for second position. Continue: $n \\times (n-1) \\times (n-2) \\times ... \\times 2 \\times 1 = n!$ (n factorial). Permutations of $r$ objects from $n$: $P(n,r) = \\frac{n!}{(n-r)!}$ (ordered selections). Example: arrange 5 books on shelf = $5! = 120$ ways. With repetition: $n^r$ (each of $r$ positions has $n$ choices). Circular permutations: $(n-1)!$ (fix one position). Applications: scheduling, sequences, cryptography.",
            "formula": "$P(n,n) = n!$, $P(n,r) = \\frac{n!}{(n-r)!}$"
        }
    },
    {
        "id": "dm-comb-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Combinatorics",
        "question": "The number of ways to choose r objects from n distinct objects (order doesn't matter) is:",
        "options": [
            "n!/(n-r)!",
            "n!/r!",
            "n!/((n-r)! × r!)",
            "nʳ"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Combinations: Selections of $r$ objects from $n$ where ORDER DOESN'T MATTER. Formula: $C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. Derivation: $P(n,r) = n!/(n-r)!$ counts ordered selections, but each unordered set counted $r!$ times (all permutations) $\\Rightarrow$ divide by $r!$. Properties: (1) $\\binom{n}{r} = \\binom{n}{n-r}$ (symmetry), (2) Pascal's identity: $\\binom{n}{r} = \\binom{n-1}{r} + \\binom{n-1}{r-1}$, (3) $\\sum_{r=0}^n \\binom{n}{r} = 2^n$ (binomial theorem with $x=y=1$). Applications: lottery, committees, probability, binomial coefficients.",
            "formula": "$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ (combinations)"
        }
    },
    {
        "id": "dm-comb-003",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Combinatorics",
        "question": "How many 4-letter words can be formed from the letters of 'GATE' without repetition?",
        "correctAnswer": 24,
        "tolerance": 0,
        "explanation": {
            "solution": "This is permutation of 4 distinct letters taken 4 at a time = 4! = 4 × 3 × 2 × 1 = 24."
        }
    },
    {
        "id": "dm-graph-010",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "The number of edges in a wheel graph Wₙ with n vertices (1 hub + (n-1) rim vertices) is:",
        "options": [
            "n-1",
            "n",
            "2(n-1)",
            "2n-2"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Wheel Graph Wₙ:\n\nA wheel consists of:\n1. A cycle of n-1 vertices (the 'rim')\n2. One central 'hub' vertex connected to all rim vertices\n\nEdge count = (n-1) rim edges + (n-1) hub-to-rim edges = 2(n-1)\n\nExample: W₄ has 3-cycle + 3 hub edges = 6 edges\n\nNote: Wₙ has n vertices total (n-1 on rim + 1 hub).",
            "formula": "Edges in Wₙ = 2(n-1)"
        }
    },
    {
        "id": "dm-graph-011",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A hypercube Qₙ has 2ⁿ vertices. How many edges does Q₃ have?",
        "correctAnswer": 12,
        "tolerance": 0,
        "explanation": {
            "solution": "Qₙ has n·2ⁿ⁻¹ edges. Q₃: 3×2² = 12 edges",
            "formula": "Edges in Qₙ = n·2^(n-1)"
        }
    },
    {
        "id": "dm-graph-012",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "The degree of each vertex in a hypercube Qₙ is:",
        "options": [
            "n-1",
            "n",
            "2n",
            "2ⁿ"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hypercube Qₙ Vertex Degree:\n\nIn Qₙ, each vertex is labeled with an n-bit binary string.\nTwo vertices are adjacent iff their labels differ in exactly 1 bit.\n\nSince there are n bits, each vertex has exactly n neighbors.\n\nQₙ is therefore n-regular (every vertex has degree n).\n\nExample: Q₃ (3D cube) - each corner connects to 3 others.",
            "formula": "Qₙ is n-regular"
        }
    },
    {
        "id": "dm-graph-013",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A simple graph with n vertices that is connected must have at least how many edges?",
        "options": [
            "n",
            "n-1",
            "n/2",
            "n(n-1)/2"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Minimum Edges for Connectivity:\n\nThe minimum connected graph is a TREE.\n\nA tree on n vertices has exactly n-1 edges.\n\nWhy? Each edge added to a tree creates a cycle.\nRemoving any edge disconnects a tree.\n\nThis is minimum: less than n-1 edges can't connect n vertices.\n\nConversely, n-1 edges that don't form a cycle = tree.",
            "formula": "Minimum edges for connected = n-1 (tree)"
        }
    },
    {
        "id": "dm-graph-014",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Maximum edges in a simple planar graph with n ≥ 3 vertices is:",
        "options": [
            "n",
            "2n",
            "3n - 6",
            "n(n-1)/2"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Maximum Planar Graph Edges:\n\nFor simple planar graph with n ≥ 3 vertices:\ne ≤ 3n - 6\n\nDerivation from Euler's formula v - e + f = 2:\n1. Each face has ≥ 3 edges on boundary\n2. Each edge borders ≤ 2 faces\n3. So 3f ≤ 2e, giving f ≤ 2e/3\n4. Substitute in Euler: n - e + 2e/3 ≥ 2\n5. Simplify: e ≤ 3n - 6\n\nK₅ has 10 edges but 3(5)-6=9, so K₅ is not planar!",
            "formula": "Max planar edges = 3n - 6 (n ≥ 3)"
        }
    },
    {
        "id": "dm-graph-015",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A graph has a Hamiltonian cycle if:",
        "options": [
            "It visits every edge exactly once",
            "It visits every vertex exactly once and returns",
            "It is connected",
            "It has Eulerian path"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hamiltonian Cycle:\n\nA cycle that visits every VERTEX exactly once and returns to start.\n\nContrast with Eulerian:\n• Hamiltonian = every vertex once\n• Eulerian = every edge once\n\nHamiltonian is NP-hard to determine (no polynomial algorithm known).\nEulerian is easy (count odd-degree vertices).\n\nDirac's theorem: If δ(G) ≥ n/2, graph is Hamiltonian."
        }
    },
    {
        "id": "dm-graph-016",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "An Eulerian path (not cycle) exists if the graph has exactly how many odd-degree vertices?",
        "options": [
            "0",
            "1",
            "2",
            "Any number"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Eulerian Path (not cycle):\n\nAn Eulerian path traverses every EDGE exactly once.\n\nExists iff graph has exactly 2 odd-degree vertices.\nThese become the start and end points.\n\nEulerian CYCLE: 0 odd-degree vertices (all even).\n\nReasoning: At each intermediate vertex, you must enter and leave the same number of times, requiring even degree. Start/end can be odd.\n\nExample: Königsberg bridges had 4 odd vertices → no Eulerian path."
        }
    },
    {
        "id": "dm-graph-017",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In the complement of graph G, two vertices are adjacent if and only if:",
        "options": [
            "They are adjacent in G",
            "They are not adjacent in G",
            "They have same degree in G",
            "They are in the same component in G"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Complement Graph Ġ:\n\nIn the complement Ġ, two vertices are adjacent iff they are NOT adjacent in G.\n\nConstruction: Start with complete graph Kₙ, remove all edges of G.\n\nProperties:\nG + Ġ = Kₙ (together they have all possible edges)\n|E(G)| + |E(Ġ)| = n(n-1)/2\n\nExample: If G is a path P₃, then Ġ has the missing edges."
        }
    },
    {
        "id": "dm-graph-018",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A graph is self-complementary if:",
        "options": [
            "G̅ = G",
            "G ≅ G̅ (isomorphic to its complement)",
            "G = -G",
            "G has no edges"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Self-complementary means G is isomorphic to its own complement"
        }
    },
    {
        "id": "dm-graph-019",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of edges in self-complementary graph with n vertices is:",
        "options": [
            "n(n-1)/2",
            "n(n-1)/4",
            "n/2",
            "(n-1)/2"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "G and Ḡ split total Kₙ edges equally: n(n-1)/2 ÷ 2 = n(n-1)/4",
            "formula": "Self-complementary: e = n(n-1)/4"
        }
    },
    {
        "id": "dm-graph-020",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Vertex connectivity κ(G) is related to minimum degree δ(G) by:",
        "options": [
            "κ(G) = δ(G)",
            "κ(G) ≥ δ(G)",
            "κ(G) ≤ δ(G)",
            "κ(G) = δ(G) + 1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "κ(G) ≤ λ(G) ≤ δ(G) where λ is edge connectivity",
            "formula": "κ(G) ≤ δ(G)"
        }
    },
    {
        "id": "dm-rel-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "A relation R is reflexive if for all a in A:",
        "options": [
            "(a,a) ∈ R",
            "(a,a) ∉ R",
            "if (a,b)∈R then (b,a)∈R",
            "if (a,b)∈R and (b,c)∈R then (a,c)∈R"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Reflexive Relation:\n\nR is reflexive if (a,a) ∈ R for ALL a ∈ A.\n\nEvery element must be related to itself.\n\nExamples of reflexive:\n• = (equality): a = a always\n• ≤ (less than or equal): a ≤ a always\n• Divides: a | a always\n\nNon-reflexive: < (strict less than) since a < a is false.\n\nIn matrix: all 1s on the main diagonal."
        }
    },
    {
        "id": "dm-rel-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "A relation R is anti-symmetric if whenever (a,b)∈R and (b,a)∈R:",
        "options": [
            "a ≠ b",
            "a = b",
            "(a,b) ∉ R",
            "R is empty"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Anti-symmetric Relation:\n\nR is anti-symmetric if: (a,b) ∈ R AND (b,a) ∈ R implies a = b.\n\nEquivalently: if a ≠ b and (a,b) ∈ R, then (b,a) ∉ R.\n\nExamples:\n• ≤ on integers: a ≤ b and b ≤ a implies a = b\n• Subset ⊆: A ⊆ B and B ⊆ A implies A = B\n• Divisibility: a|b and b|a implies a = ±b\n\nNot anti-symmetric: = (since aRb & bRa can hold for a=b, but also holds for all pairs)"
        }
    },
    {
        "id": "dm-rel-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "A relation is an equivalence relation if it is:",
        "options": [
            "Reflexive and symmetric",
            "Symmetric and transitive",
            "Reflexive, symmetric, and transitive",
            "Reflexive and anti-symmetric"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Equivalence Relation:\n\nR is an equivalence relation if it satisfies:\n1. Reflexive: aRa for all a\n2. Symmetric: aRb ⇒ bRa\n3. Transitive: aRb ∧ bRc ⇒ aRc\n\nEquivalence relations partition a set into equivalence classes.\n\nExamples:\n• = (equality)\n• Same remainder mod n\n• Same cardinality of sets\n\nEach element belongs to exactly one equivalence class."
        }
    },
    {
        "id": "dm-rel-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "Equivalence classes form a _____ of the underlying set:",
        "options": [
            "Subset",
            "Superset",
            "Partition",
            "Power set"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Equivalence classes are disjoint and cover the whole set (partition)"
        }
    },
    {
        "id": "dm-rel-005",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "How many reflexive relations are possible on a set with 3 elements?",
        "correctAnswer": 64,
        "tolerance": 0,
        "explanation": {
            "solution": "Reflexive: diagonal elements (a,a) must be in R. This fixes 3 pairs. Remaining n²-n = 6 pairs can be chosen freely: 2⁶ = 64",
            "formula": "Reflexive relations = 2^(n²-n)"
        }
    },
    {
        "id": "dm-rel-006",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Sets & Relations",
        "question": "How many symmetric relations are possible on a set with 3 elements?",
        "correctAnswer": 64,
        "tolerance": 0,
        "explanation": {
            "solution": "Need to choose: 3 diagonal pairs (2³), 3 off-diagonal pairs (either both in or both out: 2³). Total = 2³ × 2³ = 64",
            "formula": "Symmetric relations = 2^(n(n+1)/2)"
        }
    },
    {
        "id": "dm-func-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Functions",
        "question": "A function f: A → B is injective (one-to-one) if:",
        "options": [
            "Every element of B is mapped to",
            "Different elements of A map to different elements of B",
            "f(a) = f(b) implies a = b",
            "Both B and C"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Injective: f(a)=f(b) ⟹ a=b (no two inputs give same output)"
        }
    },
    {
        "id": "dm-func-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Functions",
        "question": "A function f: A → B is surjective (onto) if:",
        "options": [
            "Every element of B has a preimage in A",
            "f is one-to-one",
            "A and B have same size",
            "f has an inverse"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Surjective: range = codomain (every b has some a with f(a)=b)"
        }
    },
    {
        "id": "dm-func-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Functions",
        "question": "A bijection is a function that is:",
        "options": [
            "Injective only",
            "Surjective only",
            "Both injective and surjective",
            "Neither"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Bijection = one-to-one correspondence (both injective and surjective)"
        }
    },
    {
        "id": "dm-func-004",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Functions",
        "question": "How many bijections (permutations) are there from a 4-element set to itself?",
        "correctAnswer": 24,
        "tolerance": 0,
        "explanation": {
            "solution": "Bijections from n-set to itself = n! = 4! = 24",
            "formula": "Bijections = n!"
        }
    },
    {
        "id": "dm-func-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Functions",
        "question": "Number of functions from set A (|A|=m) to set B (|B|=n) is:",
        "options": [
            "m + n",
            "m × n",
            "n^m",
            "m^n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Each of m elements has n choices → nᵐ total functions",
            "formula": "Functions from A to B = n^m"
        }
    },
    {
        "id": "dm-recur-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Recurrence",
        "question": "The recurrence T(n) = T(n-1) + 1 with T(0) = 0 has solution:",
        "options": [
            "T(n) = 0",
            "T(n) = n",
            "T(n) = 2^n",
            "T(n) = n!"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Add 1 each step: T(n) = n"
        }
    },
    {
        "id": "dm-recur-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Recurrence",
        "question": "The recurrence T(n) = 2T(n-1) with T(0) = 1 has solution:",
        "options": [
            "T(n) = n",
            "T(n) = 2n",
            "T(n) = 2^n",
            "T(n) = n²"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Doubles each step: T(n) = 2ⁿ"
        }
    },
    {
        "id": "dm-recur-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Recurrence",
        "question": "Fibonacci sequence Fₙ = Fₙ₋₁ + Fₙ₋₂ is a:",
        "options": [
            "First-order linear recurrence",
            "Second-order linear recurrence",
            "Non-linear recurrence",
            "Divide-and-conquer recurrence"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Depends on two previous terms → second order"
        }
    },
    {
        "id": "dm-group-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "A group must satisfy which properties?",
        "options": [
            "Closure, associativity only",
            "Closure, associativity, identity, inverse",
            "Commutativity, closure",
            "Distributivity, closure"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Group: closed, associative, has identity, every element has inverse"
        }
    },
    {
        "id": "dm-group-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "An abelian group additionally requires:",
        "options": [
            "Identity element",
            "Inverse elements",
            "Commutativity",
            "Closure"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Abelian = commutative group: a*b = b*a for all a,b"
        }
    },
    {
        "id": "dm-group-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "Order of an element a in a group is the smallest positive n such that:",
        "options": [
            "a = n",
            "aⁿ = e (identity)",
            "a + n = 0",
            "n divides a"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Order of a = smallest n where aⁿ = identity"
        }
    },
    {
        "id": "dm-group-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "Lagrange's theorem states that the order of a subgroup:",
        "options": [
            "Equals the order of the group",
            "Divides the order of the group",
            "Is a prime number",
            "Is greater than the group order"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Lagrange: |H| divides |G| for subgroup H of finite group G",
            "formula": "|H| divides |G|"
        }
    },
    {
        "id": "dm-lattice-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "A lattice is a partially ordered set where every two elements have:",
        "options": [
            "Only a LUB",
            "Only a GLB",
            "Both LUB (join) and GLB (meet)",
            "Neither LUB nor GLB"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Lattice: every pair has both least upper bound (∨) and greatest lower bound (∧)"
        }
    },
    {
        "id": "dm-lattice-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "In a Boolean algebra, complement of element a satisfies:",
        "options": [
            "a ∨ a' = 1 and a ∧ a' = 0",
            "a ∨ a' = a",
            "a ∧ a' = a",
            "a' = a"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Complement: join with complement = top, meet with complement = bottom"
        }
    },
    {
        "id": "dm-logic-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "A proposition is satisfiable if:",
        "options": [
            "It is always true",
            "It is always false",
            "There exists at least one truth assignment making it true",
            "It contains no variables"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Satisfiable: There EXISTS at least one truth assignment making the proposition TRUE. Tautologies and contingencies are satisfiable. Only contradictions are unsatisfiable. SAT problem (checking satisfiability) is NP-complete - foundational in complexity theory."
        }
    },
    {
        "id": "dm-logic-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Highest precedence logical operator is:",
        "options": [
            "∧ (AND)",
            "∨ (OR)",
            "¬ (NOT)",
            "→ (implies)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Logical Operator Precedence (highest to lowest): 1. ¬ (NOT) - unary, binds tightest. 2. ∧ (AND). 3. ∨ (OR). 4. → (implies). 5. ↔ (biconditional). So p ∨ q ∧ r means p ∨ (q ∧ r), not (p ∨ q) ∧ r."
        }
    },
    {
        "id": "dm-logic-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Correct precedence order is:",
        "options": [
            "∧ > ∨ > ¬ > →",
            "¬ > ∧ > ∨ > → > ↔",
            "→ > ∨ > ∧ > ¬",
            "↔ > → > ∨ > ∧ > ¬"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "¬ (1) > ∧ (2) > ∨ (3) > → (4) > ↔ (5)"
        }
    },
    {
        "id": "dm-logic-010",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Double negation law: ¬(¬p) ≡",
        "options": [
            "¬p",
            "p",
            "T",
            "F"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "¬(¬p) ≡ p",
            "formula": "¬¬p ≡ p"
        }
    },
    {
        "id": "dm-logic-011",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "De Morgan's law: ¬(p ∧ q) ≡",
        "options": [
            "¬p ∧ ¬q",
            "¬p ∨ ¬q",
            "p ∨ q",
            "p ∧ q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "De Morgan's Law (for AND):\n\n¬(p ∧ q) ≡ ¬p ∨ ¬q\n\n'NOT(p AND q)' = 'NOT p OR NOT q'\n\nMnemonic: Negation flips AND to OR!\n\nTruth table verification:\np q | p∧q | ¬(p∧q) | ¬p | ¬q | ¬p∨¬q\nT T | T   | F      | F | F | F ✔\nT F | F   | T      | F | T | T ✔\nF T | F   | T      | T | F | T ✔\nF F | F   | T      | T | T | T ✔\n\nUsed extensively in digital logic and set theory!",
            "formula": "¬(p ∧ q) ≡ ¬p ∨ ¬q"
        }
    },
    {
        "id": "dm-logic-012",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "De Morgan's law: ¬(p ∨ q) ≡",
        "options": [
            "¬p ∨ ¬q",
            "¬p ∧ ¬q",
            "p ∧ q",
            "p ∨ q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "De Morgan's Law (for OR):\n\n¬(p ∨ q) ≡ ¬p ∧ ¬q\n\n'NOT(p OR q)' = 'NOT p AND NOT q'\n\nMnemonic: Negation flips OR to AND!\n\nBoth De Morgan's Laws together:\n• ¬(p ∧ q) ≡ ¬p ∨ ¬q\n• ¬(p ∨ q) ≡ ¬p ∧ ¬q\n\nGeneralizes to n variables and to set operations:\n¬(A ∩ B) = Aᶜ ∪ Bᶜ\n¬(A ∪ B) = Aᶜ ∩ Bᶜ",
            "formula": "¬(p ∨ q) ≡ ¬p ∧ ¬q"
        }
    },
    {
        "id": "dm-logic-013",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Commutative law: p ∧ q ≡",
        "options": [
            "p ∨ q",
            "q ∧ p",
            "q ∨ p",
            "¬p ∧ ¬q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "p ∧ q ≡ q ∧ p",
            "formula": "p ∧ q ≡ q ∧ p"
        }
    },
    {
        "id": "dm-logic-014",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Associative law: p ∧ (q ∧ r) ≡",
        "options": [
            "(p ∧ q) ∧ r",
            "(p ∨ q) ∧ r",
            "p ∧ (q ∨ r)",
            "(p ∧ q) ∨ r"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "p ∧ (q ∧ r) ≡ (p ∧ q) ∧ r",
            "formula": "p ∧ (q ∧ r) ≡ (p ∧ q) ∧ r"
        }
    },
    {
        "id": "dm-logic-015",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Distributive law: p ∧ (q ∨ r) ≡",
        "options": [
            "(p ∧ q) ∧ (p ∧ r)",
            "(p ∧ q) ∨ (p ∧ r)",
            "(p ∨ q) ∧ (p ∨ r)",
            "(p ∨ q) ∨ (p ∨ r)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Distributive Law (AND over OR):\n\np ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)\n\nSimilar to distribution in arithmetic: a × (b + c) = a×b + a×c\n\nAlso works in reverse (Factoring out):\n(p ∧ q) ∨ (p ∧ r) ≡ p ∧ (q ∨ r)\n\nBoth directions are used in simplifying Boolean expressions.\n\nNote: ∨ also distributes over ∧ (unlike regular arithmetic where × doesn't distribute over ×)!",
            "formula": "∧ distributes over ∨"
        }
    },
    {
        "id": "dm-logic-016",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Distributive law: p ∨ (q ∧ r) ≡",
        "options": [
            "(p ∨ q) ∨ (p ∨ r)",
            "(p ∨ q) ∧ (p ∨ r)",
            "(p ∧ q) ∧ (p ∧ r)",
            "(p ∧ q) ∨ (p ∧ r)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)",
            "formula": "∨ distributes over ∧"
        }
    },
    {
        "id": "dm-logic-017",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Idempotent law: p ∧ p ≡",
        "options": [
            "T",
            "F",
            "p",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "p ∧ p ≡ p",
            "formula": "p ∧ p ≡ p"
        }
    },
    {
        "id": "dm-logic-018",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Identity law: p ∧ T ≡",
        "options": [
            "T",
            "F",
            "p",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "p ∧ T ≡ p",
            "formula": "p ∧ T ≡ p"
        }
    },
    {
        "id": "dm-logic-019",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Identity law: p ∨ F ≡",
        "options": [
            "T",
            "F",
            "p",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "p ∨ F ≡ p",
            "formula": "p ∨ F ≡ p"
        }
    },
    {
        "id": "dm-logic-020",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Domination law: p ∨ T ≡",
        "options": [
            "p",
            "F",
            "T",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "p ∨ T ≡ T",
            "formula": "p ∨ T ≡ T"
        }
    },
    {
        "id": "dm-logic-021",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Domination law: p ∧ F ≡",
        "options": [
            "p",
            "F",
            "T",
            "¬p"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "p ∧ F ≡ F",
            "formula": "p ∧ F ≡ F"
        }
    },
    {
        "id": "dm-logic-022",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Inverse/Negation law: p ∧ ¬p ≡",
        "options": [
            "p",
            "T",
            "F",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "p ∧ ¬p ≡ F (contradiction)",
            "formula": "p ∧ ¬p ≡ F"
        }
    },
    {
        "id": "dm-logic-023",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Inverse/Negation law: p ∨ ¬p ≡",
        "options": [
            "p",
            "T",
            "F",
            "¬p"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "p ∨ ¬p ≡ T (tautology - law of excluded middle)",
            "formula": "p ∨ ¬p ≡ T"
        }
    },
    {
        "id": "dm-logic-024",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Absorption law: p ∧ (p ∨ q) ≡",
        "options": [
            "q",
            "p ∧ q",
            "p ∨ q",
            "p"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "p ∧ (p ∨ q) ≡ p",
            "formula": "p ∧ (p ∨ q) ≡ p"
        }
    },
    {
        "id": "dm-logic-025",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Absorption law: p ∨ (p ∧ q) ≡",
        "options": [
            "q",
            "p ∧ q",
            "p ∨ q",
            "p"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "p ∨ (p ∧ q) ≡ p",
            "formula": "p ∨ (p ∧ q) ≡ p"
        }
    },
    {
        "id": "dm-logic-030",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "p → q ≡",
        "options": [
            "p ∧ q",
            "¬p ∨ q",
            "p ∨ q",
            "¬p ∧ q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "p → q ≡ ¬p ∨ q (material implication)",
            "formula": "p → q ≡ ¬p ∨ q"
        }
    },
    {
        "id": "dm-logic-031",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Contrapositive: p → q ≡",
        "options": [
            "q → p",
            "¬p → ¬q",
            "¬q → ¬p",
            "p ↔ q"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Contrapositive: The logical equivalent of an implication.\n\np → q ≡ ¬q → ¬p\n\nIMPORTANT: Contrapositive is LOGICALLY EQUIVALENT to the original!\n\nRelated forms (NOT equivalent):\n• Original: p → q\n• Converse: q → p ≠ (p → q)\n• Inverse: ¬p → ¬q ≠ (p → q)\n• Contrapositive: ¬q → ¬p ≡ (p → q)\n\nNote: Converse ≡ Inverse (these two are equivalent to each other).",
            "formula": "p → q ≡ ¬q → ¬p"
        }
    },
    {
        "id": "dm-logic-032",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Converse of p → q is:",
        "options": [
            "¬q → ¬p",
            "q → p",
            "¬p → ¬q",
            "p ↔ q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Converse: q → p (NOT equivalent to original)"
        }
    },
    {
        "id": "dm-logic-033",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Inverse of p → q is:",
        "options": [
            "¬q → ¬p",
            "q → p",
            "¬p → ¬q",
            "p ↔ q"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Inverse: ¬p → ¬q (NOT equivalent to original)"
        }
    },
    {
        "id": "dm-logic-034",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "¬(p → q) ≡",
        "options": [
            "p ∧ ¬q",
            "¬p ∨ q",
            "¬p ∧ q",
            "p ∨ ¬q"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "¬(p → q) ≡ ¬(¬p ∨ q) ≡ p ∧ ¬q",
            "formula": "¬(p → q) ≡ p ∧ ¬q"
        }
    },
    {
        "id": "dm-logic-035",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "p ↔ q ≡",
        "options": [
            "(p → q) ∧ (q → p)",
            "p ∧ q",
            "p ∨ q",
            "(p ∧ q) ∨ (¬p ∧ ¬q)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "p ↔ q ≡ (p → q) ∧ (q → p)",
            "formula": "p ↔ q ≡ (p → q) ∧ (q → p)"
        }
    },
    {
        "id": "dm-logic-036",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "p ↔ q can also be written as:",
        "options": [
            "(p ∧ q) ∨ (¬p ∧ ¬q)",
            "(p ∨ q) ∧ (¬p ∨ ¬q)",
            "p XOR q",
            "(p ∧ ¬q) ∨ (¬p ∧ q)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)",
            "formula": "XNOR operation"
        }
    },
    {
        "id": "dm-logic-037",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "p ⊕ q (XOR) ≡",
        "options": [
            "(p ∧ q) ∨ (¬p ∧ ¬q)",
            "(p ∧ ¬q) ∨ (¬p ∧ q)",
            "p ∧ q",
            "p ∨ q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "XOR: true when exactly one is true",
            "formula": "p ⊕ q ≡ (p ∧ ¬q) ∨ (¬p ∧ q)"
        }
    },
    {
        "id": "dm-logic-040",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Modus Ponens: from p and p → q, we can conclude:",
        "options": [
            "p",
            "¬q",
            "q",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Modus Ponens (Law of Detachment):\n\nFrom: p and (p → q)\nConclude: q\n\nSymbolically: p, p → q ⊢ q\n\n'If p implies q, and p is true, then q must be true.'\n\nThis is the most fundamental rule of inference!\n\nExample:\n• If it rains, then the ground is wet.\n• It is raining.\n• Therefore, the ground is wet.",
            "formula": "p, p → q ⊢ q"
        }
    },
    {
        "id": "dm-logic-041",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Modus Tollens: from ¬q and p → q, we can conclude:",
        "options": [
            "p",
            "¬p",
            "q",
            "¬q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Modus Tollens (Denying the Consequent):\n\nFrom: (p → q) and ¬q\nConclude: ¬p\n\nSymbolically: p → q, ¬q ⊢ ¬p\n\n'If p implies q, and q is false, then p must be false.'\n\nThis uses the contrapositive: p → q ≡ ¬q → ¬p\n\nExample:\n• If it rains, then the ground is wet.\n• The ground is NOT wet.\n• Therefore, it is NOT raining.",
            "formula": "p → q, ¬q ⊢ ¬p"
        }
    },
    {
        "id": "dm-logic-042",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Hypothetical Syllogism: from p → q and q → r, we conclude:",
        "options": [
            "p",
            "r",
            "p → r",
            "q"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Hypothetical Syllogism (Chain Rule):\n\nFrom: (p → q) and (q → r)\nConclude: (p → r)\n\nSymbolically: p → q, q → r ⊢ p → r\n\n'If p leads to q, and q leads to r, then p leads to r.'\n\nThis allows chaining implications!\n\nExample:\n• If I study, I pass the exam.\n• If I pass the exam, I get the job.\n• Therefore, if I study, I get the job.",
            "formula": "p → q, q → r ⊢ p → r"
        }
    },
    {
        "id": "dm-logic-043",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Disjunctive Syllogism: from p ∨ q and ¬p, we conclude:",
        "options": [
            "p",
            "¬q",
            "q",
            "¬p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Disjunctive Syllogism (Eliminating Disjuncts):\n\nFrom: (p ∨ q) and ¬p\nConclude: q\n\nSymbolically: p ∨ q, ¬p ⊢ q\n\n'If one of two things is true, and the first is false, the second must be true.'\n\nExample:\n• Either the bus is late OR I'm early.\n• The bus is NOT late.\n• Therefore, I'm early.",
            "formula": "p ∨ q, ¬p ⊢ q"
        }
    },
    {
        "id": "dm-logic-044",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Addition rule: from p, we can derive:",
        "options": [
            "p ∧ q",
            "p ∨ q",
            "p → q",
            "¬p"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Addition: p → (p ∨ q)",
            "formula": "p ⊢ p ∨ q"
        }
    },
    {
        "id": "dm-logic-045",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Simplification: from p ∧ q, we can derive:",
        "options": [
            "p ∨ q",
            "p (or q)",
            "p → q",
            "¬p ∧ ¬q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Simplification: (p ∧ q) → p",
            "formula": "p ∧ q ⊢ p"
        }
    },
    {
        "id": "dm-logic-046",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Conjunction: from p and q, we can derive:",
        "options": [
            "p ∨ q",
            "p ∧ q",
            "p → q",
            "¬(p ∧ q)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Conjunction: p, q → (p ∧ q)",
            "formula": "p, q ⊢ p ∧ q"
        }
    },
    {
        "id": "dm-logic-047",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Resolution: from (p ∨ q) and (¬p ∨ r), we conclude:",
        "options": [
            "q ∧ r",
            "q ∨ r",
            "p ∨ r",
            "¬p ∧ q"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Resolution: (p ∨ q) ∧ (¬p ∨ r) → (q ∨ r)",
            "formula": "p ∨ q, ¬p ∨ r ⊢ q ∨ r"
        }
    },
    {
        "id": "dm-logic-050",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "∀x P(x) means:",
        "options": [
            "There exists x such that P(x) is true",
            "For all x, P(x) is true",
            "P(x) is sometimes true",
            "P(x) is a tautology"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "∀ = universal quantifier = 'for all'"
        }
    },
    {
        "id": "dm-logic-051",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "∃x P(x) means:",
        "options": [
            "For all x, P(x) is true",
            "There exists at least one x such that P(x) is true",
            "P(x) is always false",
            "No x satisfies P(x)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "∃ = existential quantifier = 'there exists'"
        }
    },
    {
        "id": "dm-logic-052",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "¬(∀x P(x)) ≡",
        "options": [
            "∀x ¬P(x)",
            "∃x ¬P(x)",
            "∃x P(x)",
            "¬∃x P(x)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Negation of 'all P' = 'exists one not P'",
            "formula": "¬(∀x P(x)) ≡ ∃x ¬P(x)"
        }
    },
    {
        "id": "dm-logic-053",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "¬(∃x P(x)) ≡",
        "options": [
            "∃x ¬P(x)",
            "∀x ¬P(x)",
            "∀x P(x)",
            "∃x P(x)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Negation of 'exists P' = 'for all, not P'",
            "formula": "¬(∃x P(x)) ≡ ∀x ¬P(x)"
        }
    },
    {
        "id": "dm-logic-054",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "Number of distinct propositional functions (truth tables) possible with n variables is 2^(2^n). For n=2, this is:",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "2^(2^2) = 2^4 = 16 distinct truth tables with 2 variables"
        }
    },
    {
        "id": "dm-set-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "In a set, order and repetition of elements:",
        "options": [
            "Matters",
            "Doesn't matter",
            "Only order matters",
            "Only repetition matters"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Sets: {1,2} = {2,1} = {1,2,1}, order and repetition don't matter"
        }
    },
    {
        "id": "dm-set-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A set with exactly one element is called:",
        "options": [
            "Empty set",
            "Singleton set",
            "Power set",
            "Universal set"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Singleton set has exactly one element"
        }
    },
    {
        "id": "dm-set-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "The cardinality of a set is:",
        "options": [
            "Its first element",
            "Number of elements in it",
            "Its largest element",
            "Sum of its elements"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "|A| = cardinality = number of elements"
        }
    },
    {
        "id": "dm-set-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ⊆ B means:",
        "options": [
            "A equals B",
            "Every element of A is in B",
            "Every element of B is in A",
            "A and B are disjoint"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Subset: A ⊆ B iff x ∈ A → x ∈ B"
        }
    },
    {
        "id": "dm-set-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ⊂ B (proper subset) means:",
        "options": [
            "A ⊆ B only",
            "A ⊆ B and A ≠ B",
            "A = B",
            "A ⊇ B"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Proper subset: A ⊆ B and A ≠ B (B has at least one element not in A)"
        }
    },
    {
        "id": "dm-set-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "|P(A)| where P(A) is power set of A with |A| = n is:",
        "options": [
            "n",
            "n!",
            "2n",
            "2^n"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Power set has 2^n subsets",
            "formula": "|P(A)| = 2^|A|"
        }
    },
    {
        "id": "dm-set-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "For any set A, ∅ is:",
        "options": [
            "Not a subset of A",
            "Always a subset of A",
            "Only subset if A is empty",
            "Equal to A"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Empty set ∅ is subset of every set"
        }
    },
    {
        "id": "dm-set-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ∪ B = ?",
        "options": [
            "{x : x ∈ A and x ∈ B}",
            "{x : x ∈ A or x ∈ B}",
            "{x : x ∈ A but x ∉ B}",
            "{x : x ∉ A and x ∉ B}"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Union: elements in A OR B (or both)"
        }
    },
    {
        "id": "dm-set-009",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ∩ B = ?",
        "options": [
            "{x : x ∈ A or x ∈ B}",
            "{x : x ∈ A and x ∈ B}",
            "{x : x ∈ A but x ∉ B}",
            "{x : x ∉ A and x ∉ B}"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Intersection: elements in BOTH A and B"
        }
    },
    {
        "id": "dm-set-010",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A - B (or A \\ B) = ?",
        "options": [
            "{x : x ∈ A and x ∈ B}",
            "{x : x ∈ A or x ∈ B}",
            "{x : x ∈ A and x ∉ B}",
            "{x : x ∈ B and x ∉ A}"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Difference: elements in A but not in B"
        }
    },
    {
        "id": "dm-set-011",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ⊕ B (symmetric difference) = ?",
        "options": [
            "(A - B) ∪ (B - A)",
            "(A ∩ B)",
            "(A ∪ B)",
            "(A - B) ∩ (B - A)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Symmetric diff: in A or B but not both = (A∪B) - (A∩B)",
            "formula": "A ⊕ B = (A - B) ∪ (B - A)"
        }
    },
    {
        "id": "dm-set-012",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Two sets are disjoint if:",
        "options": [
            "A ∪ B = ∅",
            "A ∩ B = ∅",
            "A = B",
            "A ⊆ B"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Disjoint: no common elements, A ∩ B = ∅"
        }
    },
    {
        "id": "dm-set-013",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Idempotent law: A ∪ A = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A ∪ A = A",
            "formula": "A ∪ A = A"
        }
    },
    {
        "id": "dm-set-014",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Identity law: A ∪ ∅ = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A ∪ ∅ = A",
            "formula": "A ∪ ∅ = A"
        }
    },
    {
        "id": "dm-set-015",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Identity law: A ∩ U = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A ∩ U = A",
            "formula": "A ∩ U = A"
        }
    },
    {
        "id": "dm-set-016",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Domination law: A ∪ U = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "A ∪ U = U",
            "formula": "A ∪ U = U"
        }
    },
    {
        "id": "dm-set-017",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Domination law: A ∩ ∅ = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "A ∩ ∅ = ∅",
            "formula": "A ∩ ∅ = ∅"
        }
    },
    {
        "id": "dm-set-018",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Complement law: A ∪ A^c = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "A ∪ A^c = U",
            "formula": "A ∪ A' = U"
        }
    },
    {
        "id": "dm-set-019",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Complement law: A ∩ A^c = ?",
        "options": [
            "∅",
            "U",
            "A",
            "A^c"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "A ∩ A^c = ∅",
            "formula": "A ∩ A' = ∅"
        }
    },
    {
        "id": "dm-set-020",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "De Morgan's law: (A ∪ B)^c = ?",
        "options": [
            "A^c ∪ B^c",
            "A^c ∩ B^c",
            "A ∩ B",
            "A ∪ B"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "(A ∪ B)^c = A^c ∩ B^c",
            "formula": "(A ∪ B)' = A' ∩ B'"
        }
    },
    {
        "id": "dm-set-021",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "De Morgan's law: (A ∩ B)^c = ?",
        "options": [
            "A^c ∩ B^c",
            "A^c ∪ B^c",
            "A ∩ B",
            "A ∪ B"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "(A ∩ B)^c = A^c ∪ B^c",
            "formula": "(A ∩ B)' = A' ∪ B'"
        }
    },
    {
        "id": "dm-set-022",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Absorption law: A ∪ (A ∩ B) = ?",
        "options": [
            "B",
            "A ∩ B",
            "A ∪ B",
            "A"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A ∪ (A ∩ B) = A",
            "formula": "Absorption"
        }
    },
    {
        "id": "dm-set-023",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Absorption law: A ∩ (A ∪ B) = ?",
        "options": [
            "B",
            "A ∩ B",
            "A ∪ B",
            "A"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A ∩ (A ∪ B) = A",
            "formula": "Absorption"
        }
    },
    {
        "id": "dm-set-025",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "|A ∪ B| = ?",
        "options": [
            "|A| + |B|",
            "|A| + |B| - |A ∩ B|",
            "|A| × |B|",
            "|A| - |B|"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Inclusion-exclusion for 2 sets",
            "formula": "|A ∪ B| = |A| + |B| - |A ∩ B|"
        }
    },
    {
        "id": "dm-set-026",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "|A × B| where A×B is Cartesian product = ?",
        "options": [
            "|A| + |B|",
            "|A| - |B|",
            "|A| × |B|",
            "|A| / |B|"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Cartesian product: |A × B| = |A| × |B|",
            "formula": "|A × B| = |A| × |B|"
        }
    },
    {
        "id": "gt-basic-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A graph G = (V, E) consists of:",
        "options": [
            "Only vertices",
            "Only edges",
            "A set of vertices and a set of edges",
            "A single vertex and edge"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Graph Definition: G = (V, E) where V is the vertex set and E is the edge set. V contains nodes (vertices), E contains connections (edges) between vertices. Edges can be undirected (bidirectional) or directed (one-way arrows). Notation: |V| = n (vertex count), |E| = m (edge count)."
        }
    },
    {
        "id": "gt-basic-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In a simple graph:",
        "options": [
            "Self-loops and parallel edges are allowed",
            "Self-loops allowed, parallel edges not",
            "Neither self-loops nor parallel edges",
            "Parallel edges allowed, self-loops not"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Simple Graph: No self-loops (edge from vertex to itself) and no multiple/parallel edges between the same pair of vertices. Maximum edges in simple graph with n vertices: n(n-1)/2 for undirected, n(n-1) for directed. Most theoretical results assume simple graphs."
        }
    },
    {
        "id": "gt-basic-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A multigraph allows:",
        "options": [
            "Only self-loops",
            "Multiple edges between same vertices",
            "Only directed edges",
            "Weighted edges only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Multigraph: multiple (parallel) edges allowed between same vertices"
        }
    },
    {
        "id": "gt-basic-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Degree of a vertex v, deg(v), is:",
        "options": [
            "Number of vertices adjacent to v",
            "Number of edges incident to v",
            "Number of paths from v",
            "None of these"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Vertex Degree: deg(v) = number of edges incident to vertex v. For undirected graphs, each edge incident on v adds 1 to degree. Self-loop adds 2 to degree! For directed graphs: in-degree = incoming edges, out-degree = outgoing edges. Regular graph: all vertices have same degree."
        }
    },
    {
        "id": "gt-basic-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Handshaking theorem: Sum of all degrees = ?",
        "options": [
            "|V|",
            "|E|",
            "2|E|",
            "|V| + |E|"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Handshaking Theorem (Degree Sum Formula):\n\nΣ deg(v) = 2|E|\n\nWhy? Each edge contributes 2 to the total degree sum (one for each endpoint).\n\nConsequences:\n1. Sum of degrees is always EVEN\n2. Number of odd-degree vertices is always EVEN (since even ± even = even, but adding odd number of odds gives odd)\n\nExample: Triangle has 3 vertices of degree 2.\nΣ = 6 = 2 × 3 edges ✔",
            "formula": "Σ deg(v) = 2|E|"
        }
    },
    {
        "id": "gt-basic-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of odd-degree vertices in any graph is always:",
        "options": [
            "Odd",
            "Even",
            "Prime",
            "Zero"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Even Number of Odd-Degree Vertices: Since Total Degree = 2|E| is even, and sum of even numbers is even, the odd-degree vertices must pair up to give an even sum. Proof by contradiction: if odd count of odd degrees, sum would be odd, contradicting handshaking theorem."
        }
    },
    {
        "id": "gt-basic-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A pendant vertex has degree:",
        "options": [
            "0",
            "1",
            "2",
            "n-1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Pendant (Leaf) Vertex: A vertex with degree exactly 1. Connected to exactly one other vertex. In a tree, pendant vertices are the leaves. Every tree with n >= 2 has at least 2 pendant vertices. Removing a pendant vertex reduces edge count by 1."
        }
    },
    {
        "id": "gt-basic-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "An isolated vertex has degree:",
        "options": [
            "0",
            "1",
            "2",
            "n-1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Isolated vertex has degree 0 (no edges)"
        }
    },
    {
        "id": "gt-special-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Complete graph Kn has how many edges?",
        "options": [
            "n",
            "n-1",
            "n(n-1)/2",
            "n²"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Complete Graph Kₙ Properties:\n\nEvery pair of vertices is connected by an edge.\n\nEdges: |E| = C(n,2) = n(n-1)/2\n\nDerivation: Choose 2 vertices from n → n choose 2 edges.\n\nDegree of each vertex: n-1 (connected to all others)\nΣ degrees = n(n-1) = 2|E| ✔\n\nExamples:\n- K₃ = triangle (3 edges)\n- K₄ = 6 edges\n- K₅ = 10 edges\n- K₆ = 15 edges",
            "formula": "Edges in Kₙ = n(n-1)/2"
        }
    },
    {
        "id": "gt-special-002",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of edges in complete graph K₅ is:",
        "correctAnswer": 10,
        "tolerance": 0,
        "explanation": {
            "solution": "5(5-1)/2 = 20/2 = 10"
        }
    },
    {
        "id": "gt-special-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In complete graph Kn, every vertex has degree:",
        "options": [
            "n",
            "n-1",
            "n+1",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Each vertex connected to all other n-1 vertices"
        }
    },
    {
        "id": "gt-special-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Complete bipartite graph Km,n has how many edges?",
        "options": [
            "m + n",
            "m × n",
            "(m+n)(m+n-1)/2",
            "m + n - 1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Complete Bipartite Graph Kₘ,ₙ Properties:\n\nVertices partitioned into two sets of sizes m and n.\nEvery vertex in first set connected to every vertex in second set.\nNO edges within the same set.\n\nEdges: |E| = m × n\n\nTotal vertices: m + n\n\nExamples:\n- K₁,ₙ = Star graph (n edges)\n- K₂,₂ = Square/Cycle C₄ (4 edges)\n- K₃,₃ = Utility graph (9 edges, non-planar!)",
            "formula": "Edges = m × n"
        }
    },
    {
        "id": "gt-special-005",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of edges in complete bipartite graph K3,4 is:",
        "correctAnswer": 12,
        "tolerance": 0,
        "explanation": {
            "solution": "3 × 4 = 12"
        }
    },
    {
        "id": "gt-special-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A k-regular graph is one where every vertex has degree:",
        "options": [
            "k-1",
            "k",
            "k+1",
            "k²"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "k-regular: all vertices have same degree k"
        }
    },
    {
        "id": "gt-special-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Cycle graph Cn has how many edges?",
        "options": [
            "n-1",
            "n",
            "n+1",
            "2n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Cycle with n vertices has exactly n edges",
            "formula": "|E| = n"
        }
    },
    {
        "id": "gt-special-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Path graph Pn with n vertices has how many edges?",
        "options": [
            "n",
            "n-1",
            "n+1",
            "n/2"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Path: n vertices connected in line = n-1 edges",
            "formula": "|E| = n-1"
        }
    },
    {
        "id": "gt-tree-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A tree with n vertices has how many edges?",
        "options": [
            "n",
            "n-1",
            "n+1",
            "log n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Tree: A connected acyclic (no cycles) graph.\n\nFundamental Property: A tree with n vertices has exactly n-1 edges.\n\nEquivalent definitions (any one implies tree):\n1. Connected and n-1 edges\n2. Acyclic and n-1 edges\n3. Connected and acyclic\n4. Adding any edge creates exactly one cycle\n5. Removing any edge disconnects the graph\n6. Exactly one path between any two vertices\n\nUsed in: Spanning trees, hierarchical structures, recursion.",
            "formula": "|E| = n-1"
        }
    },
    {
        "id": "gt-tree-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A tree is:",
        "options": [
            "Connected graph with cycles",
            "Disconnected acyclic graph",
            "Connected acyclic graph",
            "Complete graph"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Tree = connected + acyclic"
        }
    },
    {
        "id": "gt-tree-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Adding one edge to a tree creates:",
        "options": [
            "Another tree",
            "Exactly one cycle",
            "Two trees",
            "A disconnected graph"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Adding edge to tree creates exactly one cycle"
        }
    },
    {
        "id": "gt-tree-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Removing one edge from a tree creates:",
        "options": [
            "Another tree",
            "A cycle",
            "Two connected components",
            "A complete graph"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Removing any edge from tree disconnects it into 2 components"
        }
    },
    {
        "id": "gt-tree-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of spanning trees of complete graph Kn is:",
        "options": [
            "n",
            "n!",
            "n^(n-2)",
            "2^n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Cayley's Formula for Spanning Trees:\n\nThe complete graph Kₙ has exactly n^(n-2) labeled spanning trees.\n\nExamples:\n- K₂: 2^0 = 1 tree (just the edge)\n- K₃: 3^1 = 3 trees\n- K₄: 4^2 = 16 trees\n- K₅: 5^3 = 125 trees\n\nProof methods: Prüfer sequences (bijection), matrix-tree theorem.\n\nThis is a fundamental result in combinatorics and graph enumeration!",
            "formula": "n^(n-2)"
        }
    },
    {
        "id": "gt-tree-006",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of spanning trees of K₄ is (use Cayley's formula):",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "4^(4-2) = 4² = 16"
        }
    },
    {
        "id": "gt-tree-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A forest is:",
        "options": [
            "A connected tree",
            "A graph with cycles",
            "A disjoint union of trees",
            "A complete graph"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Forest = acyclic graph (disjoint union of trees)"
        }
    },
    {
        "id": "gt-tree-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A forest with n vertices and k trees has how many edges?",
        "options": [
            "n-1",
            "n-k",
            "n+k",
            "k-1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Each tree has (vertices - 1) edges, total = n - k edges",
            "formula": "|E| = n - k"
        }
    },
    {
        "id": "gt-bip-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A graph is bipartite iff:",
        "options": [
            "It has even vertices",
            "It contains no odd-length cycle",
            "It is connected",
            "It has parallel edges"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Bipartite iff no odd cycle (2-colorable)"
        }
    },
    {
        "id": "gt-bip-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Every tree is:",
        "options": [
            "Not bipartite",
            "Bipartite",
            "Complete",
            "Regular"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Trees have no cycles (hence no odd cycles) → bipartite"
        }
    },
    {
        "id": "gt-bip-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "The chromatic number of a bipartite graph with at least one edge is:",
        "options": [
            "1",
            "2",
            "3",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Bipartite = 2-colorable → χ(G) = 2"
        }
    },
    {
        "id": "gt-planar-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Euler's formula for connected planar graph: v - e + f = ?",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Euler's Formula for Planar Graphs:\n\nv - e + f = 2\n\nWhere: v = vertices, e = edges, f = faces (including unbounded outer face)\n\nHolds for ANY connected planar graph!\n\nFrom this, we derive:\n- e ≤ 3v - 6 (for simple planar graphs, v ≥ 3)\n- e ≤ 2v - 4 (for bipartite planar graphs)\n\nThese bounds help PROVE a graph is non-planar.\nK₅ has 10 edges > 3(5)-6 = 9 → non-planar!",
            "formula": "v - e + f = 2"
        }
    },
    {
        "id": "gt-planar-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Maximum edges in simple planar graph with n ≥ 3 vertices:",
        "options": [
            "n-1",
            "2n-3",
            "3n-6",
            "n(n-1)/2"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "From Euler's formula: e ≤ 3n - 6",
            "formula": "e ≤ 3n - 6"
        }
    },
    {
        "id": "gt-planar-003",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Maximum edges in a planar graph with 8 vertices is:",
        "correctAnswer": 18,
        "tolerance": 0,
        "explanation": {
            "solution": "3(8) - 6 = 18"
        }
    },
    {
        "id": "gt-planar-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "K₅ (complete graph on 5 vertices) is:",
        "options": [
            "Planar",
            "Non-planar",
            "Bipartite",
            "A tree"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "K₅ has 10 edges > 3(5)-6 = 9, so non-planar by Kuratowski's theorem"
        }
    },
    {
        "id": "gt-planar-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "K₃,₃ (complete bipartite 3,3) is:",
        "options": [
            "Planar",
            "Non-planar",
            "A tree",
            "Disconnected"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "K₃,₃ is non-planar (Kuratowski subdivision)"
        }
    },
    {
        "id": "gt-planar-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Kuratowski's theorem: A graph is planar iff it contains no subdivision of:",
        "options": [
            "K₄ or K₂,₃",
            "K₅ or K₃,₃",
            "K₆ or K₄,₄",
            "Any cycle"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Kuratowski: planar iff no K₅ or K₃,₃ subdivision"
        }
    },
    {
        "id": "gt-euler-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "An Eulerian circuit exists iff:",
        "options": [
            "All vertices have odd degree",
            "All vertices have even degree and graph is connected",
            "At least one vertex has degree 0",
            "Graph is complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Eulerian Circuit: A closed walk that visits every EDGE exactly once.\n\nConditions:\n1. Graph must be connected (on edges)\n2. Every vertex must have EVEN degree\n\nWhy even degree? When you enter a vertex, you must leave. Each visit uses 2 edges at that vertex.\n\nEulerian PATH (not closed): Exactly 2 vertices of odd degree (start and end points).\nΣ deg(v) = 2|E|, and odd ± odd = even, so can't have 1 or 3 odd vertices.\n\nFound using Hierholzer's algorithm: O(|E|)"
        }
    },
    {
        "id": "gt-euler-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "An Eulerian path (not cycle) exists iff connected graph has exactly:",
        "options": [
            "0 odd-degree vertices",
            "1 odd-degree vertex",
            "2 odd-degree vertices",
            "All odd-degree vertices"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Eulerian path: exactly 2 odd-degree vertices (start and end)"
        }
    },
    {
        "id": "gt-euler-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A Hamiltonian cycle visits:",
        "options": [
            "Every edge exactly once",
            "Every vertex exactly once and returns",
            "Only odd-degree vertices",
            "Only even-degree vertices"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hamiltonian Cycle: A cycle that visits every VERTEX exactly once.\n\nUnlike Eulerian (edge-based), Hamiltonian is vertex-based.\n\nNo simple necessary and sufficient condition exists!\n\nSufficient conditions (not necessary):\n- Dirac: deg(v) ≥ n/2 for all v → Hamiltonian\n- Ore: deg(u) + deg(v) ≥ n for non-adjacent u,v → Hamiltonian\n\nNP-complete to decide! (Unlike Eulerian which is polynomial)\n\nTSP (Traveling Salesman) is weighted Hamiltonian cycle."
        }
    },
    {
        "id": "gt-euler-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Finding Hamiltonian cycle is:",
        "options": [
            "P (polynomial time)",
            "NP-complete",
            "Always solvable in O(n)",
            "Undecidable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hamiltonian cycle problem is NP-complete"
        }
    },
    {
        "id": "gt-color-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Chromatic number χ(G) is the minimum number of colors to color vertices such that:",
        "options": [
            "All vertices same color",
            "No two adjacent vertices have same color",
            "All edges same color",
            "Maximum colors used"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Proper coloring: adjacent vertices get different colors"
        }
    },
    {
        "id": "gt-color-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "χ(Kn) = ?",
        "options": [
            "1",
            "2",
            "n-1",
            "n"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Complete graph: every pair adjacent, so need n colors",
            "formula": "χ(Kn) = n"
        }
    },
    {
        "id": "gt-color-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "χ(Cn) for even n = ?",
        "options": [
            "1",
            "2",
            "3",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Even cycle is bipartite → χ = 2"
        }
    },
    {
        "id": "gt-color-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "χ(Cn) for odd n ≥ 3 is:",
        "options": [
            "1",
            "2",
            "3",
            "n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Odd cycle not bipartite → χ = 3"
        }
    },
    {
        "id": "gt-color-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "For any graph G, χ(G) ≤:",
        "options": [
            "1",
            "n/2",
            "Δ(G)",
            "Δ(G) + 1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "χ(G) ≤ Δ + 1 where Δ = maximum degree (greedy coloring bound)",
            "formula": "χ(G) ≤ Δ + 1"
        }
    },
    {
        "id": "gt-color-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A graph is 2-colorable iff it is:",
        "options": [
            "Complete",
            "Bipartite",
            "Planar",
            "Connected"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "2-colorable = bipartite = no odd cycle"
        }
    },
    {
        "id": "gt-iso-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Two graphs are isomorphic if they have:",
        "options": [
            "Same number of edges only",
            "Same structure (bijection preserving adjacency)",
            "Same drawing",
            "Same labels"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Isomorphic: same structure up to vertex relabeling"
        }
    },
    {
        "id": "gt-iso-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Isomorphic graphs must have same:",
        "options": [
            "Vertex labels",
            "Degree sequence",
            "Drawing",
            "Color"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Isomorphic graphs have same number of vertices, edges, and degree sequence"
        }
    },
    {
        "id": "gt-iso-003",
        "type": "NAT",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of non-isomorphic simple graphs on 3 labeled vertices is:",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "0 edges, 1 edge, 2 edges, 3 edges = 4 non-isomorphic graphs on 3 vertices"
        }
    },
    {
        "id": "gt-dig-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In a directed graph, sum of all in-degrees equals sum of all out-degrees equals:",
        "options": [
            "|V|",
            "|E|",
            "2|E|",
            "|V| + |E|"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Each edge contributes 1 to one in-degree and 1 to one out-degree",
            "formula": "Σ in-deg = Σ out-deg = |E|"
        }
    },
    {
        "id": "gt-dig-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A directed graph is strongly connected if:",
        "options": [
            "There's a path from every vertex to every other vertex",
            "It has no cycles",
            "It's a DAG",
            "It has exactly one source"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Strongly connected: path exists between every ordered pair of vertices"
        }
    },
    {
        "id": "gt-dig-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A DAG is:",
        "options": [
            "Directed graph with cycles",
            "Directed Acyclic Graph",
            "Undirected graph",
            "Complete directed graph"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DAG = Directed Acyclic Graph (no directed cycles)"
        }
    },
    {
        "id": "gt-dig-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Topological sort is possible only for:",
        "options": [
            "Undirected graphs",
            "Graphs with cycles",
            "DAGs",
            "Complete graphs"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Topological ordering: linear order where all edges go forward; requires DAG"
        }
    }
]);
