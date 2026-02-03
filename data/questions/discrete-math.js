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
            "n(n-1)/2",
            "n",
            "n-1",
            "n²"
        ],
        "correctAnswer": 0,
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
            "Odd-length cycles",
            "Trees",
            "Isolated vertices"
        ],
        "correctAnswer": 1,
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
            "n+1 edges",
            "2n edges",
            "n-1 edges",
            "n edges"
        ],
        "correctAnswer": 2,
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
            "n",
            "0",
            "1",
            "2"
        ],
        "correctAnswer": 3,
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
            "K₃ or K₂,₂",
            "K₅ or K₃,₃",
            "K₄ or K₂,₃",
            "K₆ or K₄,₄"
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
            "p is false and q is false",
            "p is false and q is true",
            "p is true and q is true",
            "p is true and q is false"
        ],
        "correctAnswer": 3,
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
            "p and q have same truth values",
            "q is true only",
            "p and q have different values",
            "p is true only"
        ],
        "correctAnswer": 0,
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
            "Tautology",
            "Satisfiable",
            "Contingency"
        ],
        "correctAnswer": 1,
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
            "Contradiction",
            "Contingency",
            "Tautology",
            "Satisfiable"
        ],
        "correctAnswer": 0,
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
            "Sound",
            "Valid",
            "Contingency",
            "Satisfiable"
        ],
        "correctAnswer": 2,
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
            "Reflexive and transitive",
            "Reflexive and symmetric",
            "Symmetric and transitive",
            "Reflexive, symmetric, and transitive"
        ],
        "correctAnswer": 3,
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
            "Reflexive and transitive only",
            "Irreflexive, symmetric, and transitive"
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
            "n!",
            "nⁿ",
            "n",
            "2ⁿ"
        ],
        "correctAnswer": 0,
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
            "nʳ",
            "n!/r!",
            "n!/((n-r)! × r!)",
            "n!/(n-r)!"
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
            "2(n-1)",
            "n-1",
            "n",
            "2n-2"
        ],
        "correctAnswer": 0,
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
            "n/2",
            "n-1",
            "n(n-1)/2",
            "n"
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
            "n(n-1)/2",
            "3n - 6",
            "2n"
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
            "It has Eulerian path",
            "It visits every vertex exactly once and returns",
            "It is connected"
        ],
        "correctAnswer": 2,
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
            "1",
            "Any number",
            "2",
            "0"
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
            "They have same degree in G",
            "They are in the same component in G",
            "They are adjacent in G",
            "They are not adjacent in G"
        ],
        "correctAnswer": 3,
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
            "G = -G",
            "G has no edges",
            "G ≅ G̅ (isomorphic to its complement)",
            "G̅ = G"
        ],
        "correctAnswer": 2,
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
            "n/2",
            "n(n-1)/2",
            "(n-1)/2",
            "n(n-1)/4"
        ],
        "correctAnswer": 3,
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
            "κ(G) = δ(G) + 1",
            "κ(G) ≤ δ(G)",
            "κ(G) ≥ δ(G)"
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
            "if (a,b)∈R then (b,a)∈R",
            "(a,a) ∉ R",
            "if (a,b)∈R and (b,c)∈R then (a,c)∈R",
            "(a,a) ∈ R"
        ],
        "correctAnswer": 3,
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
            "a = b",
            "(a,b) ∉ R",
            "a ≠ b",
            "R is empty"
        ],
        "correctAnswer": 0,
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
            "Reflexive and anti-symmetric",
            "Reflexive, symmetric, and transitive",
            "Symmetric and transitive"
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
            "Partition",
            "Power set",
            "Subset",
            "Superset"
        ],
        "correctAnswer": 0,
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
            "Both B and C",
            "f(a) = f(b) implies a = b",
            "Every element of B is mapped to",
            "Different elements of A map to different elements of B"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Injective (One-to-One) Function: Different inputs map to different outputs. Formally: $f(a) = f(b) \\Rightarrow a = b$ (contrapositive: $a \\neq b \\Rightarrow f(a) \\neq f(b)$). No two distinct domain elements map to same range element. Example: $f(x) = 2x$ is injective (different x gives different 2x). Counter-example: $f(x) = x^2$ not injective over reals ($f(-2) = f(2) = 4$). Test: horizontal line test (any horizontal hits graph at most once). Applications: invertible functions require injectivity. Counting: injective functions from m-set to n-set = $P(n,m) = \\frac{n!}{(n-m)!}$ when $m \\leq n$.",
            "formula": "Injective: $f(a) = f(b) \\Rightarrow a = b$"
        }
    },
    {
        "id": "dm-func-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Functions",
        "question": "A function f: A → B is surjective (onto) if:",
        "options": [
            "f has an inverse",
            "A and B have same size",
            "Every element of B has a preimage in A",
            "f is one-to-one"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Surjective (Onto) Function: Every element in codomain B has at least one pre-image in domain A. Range equals codomain. Formally: $\\forall b \\in B, \\exists a \\in A$ such that $f(a) = b$. All possible outputs are actually achieved. Example: $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^3$ is surjective (every real has cube root). Counter-example: $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = x^2$ not surjective (negative numbers have no pre-image). Test: cover entire codomain. Applications: surjective functions allow 'onto' mappings. Note: function onto B but injective gives bijection.",
            "formula": "Surjective: range = codomain"
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
            "Both injective and surjective",
            "Surjective only",
            "Neither"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Bijection: Function that is BOTH injective (one-to-one) AND surjective (onto). Perfect one-to-one correspondence between domain and codomain - each element in A maps to unique element in B, and every B element is mapped to. Properties: (1) Has inverse function $f^{-1}$, (2) Establishes equality of cardinalities $|A| = |B|$, (3) Reversible/invertible. Example: $f: \\mathbb{R} \\to \\mathbb{R}, f(x) = 2x + 3$ is bijection. Counting: bijections from n-set to itself = $n!$ (permutations). Applications: cryptography (encryption must be bijective), equivalence of sets, isomorphisms in algebra.",
            "formula": "Bijection = Injective $\\cap$ Surjective"
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
            "m^n",
            "m + n",
            "n^m",
            "m × n"
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
            "T(n) = n!",
            "T(n) = 2^n",
            "T(n) = n",
            "T(n) = 0"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Linear Recurrence $T(n) = T(n-1) + 1$: adds constant 1 at each step. Unrolling: $T(n) = T(n-1) + 1 = T(n-2) + 2 = ... = T(0) + n = 0 + n = n$. This is arithmetic progression with common difference 1. Pattern: $T(0)=0, T(1)=1, T(2)=2, T(3)=3, ...$. Represents simple counting or linear growth. Example: counting loop iterations. General form: $T(n) = T(n-1) + c$ has solution $T(n) = cn + T(0)$.",
            "formula": "$T(n) = T(n-1) + 1, T(0) = 0 \\Rightarrow T(n) = n$"
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
            "T(n) = 2^n",
            "T(n) = n²",
            "T(n) = 2n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Geometric Recurrence $T(n) = 2T(n-1)$: multiplies by 2 at each step. Unrolling: $T(n) = 2T(n-1) = 2^2T(n-2) = 2^3T(n-3) = ... = 2^nT(0) = 2^n \\cdot 1 = 2^n$. Exponential growth - doubles every step. Pattern: $T(0)=1, T(1)=2, T(2)=4, T(3)=8, ...$. Example: binary tree node count, divide-and-conquer with 2 subproblems. General: $T(n) = rT(n-1)$ has solution $T(n) = r^n \\cdot T(0)$. Much faster growth than linear recurrences.",
            "formula": "$T(n) = 2T(n-1), T(0) = 1 \\Rightarrow T(n) = 2^n$"
        }
    },
    {
        "id": "dm-recur-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Recurrence",
        "question": "Fibonacci sequence Fₙ = Fₙ₋₁ + Fₙ₋₂ is a:",
        "options": [
            "Second-order linear recurrence",
            "Divide-and-conquer recurrence",
            "First-order linear recurrence",
            "Non-linear recurrence"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Fibonacci Second-Order Recurrence: $F_n = F_{n-1} + F_{n-2}$ depends on TWO previous terms, making it second-order (vs first-order like $T(n) = T(n-1) + c$). Initial conditions: $F_0 = 0, F_1 = 1$. Sequence: 0,1,1,2,3,5,8,13,21,... Closed form (Binet's formula): $F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$ where $\\phi = \\frac{1+\\sqrt{5}}{2}$ (golden ratio), $\\psi = \\frac{1-\\sqrt{5}}{2}$. Growth: $F_n \\approx \\frac{\\phi^n}{\\sqrt{5}}$ (exponential but slower than $2^n$). Applications: nature patterns, algorithm analysis, dynamic programming.",
            "formula": "$F_n = F_{n-1} + F_{n-2}$ (2nd order linear)"
        }
    },
    {
        "id": "dm-group-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "A group must satisfy which properties?",
        "options": [
            "Closure, associativity, identity, inverse",
            "Closure, associativity only",
            "Commutativity, closure",
            "Distributivity, closure"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Group $(G, *)$: Set G with binary operation * satisfying FOUR axioms: (1) CLOSURE: $\\forall a,b \\in G, a*b \\in G$, (2) ASSOCIATIVITY: $(a*b)*c = a*(b*c)$, (3) IDENTITY: $\\exists e \\in G$ such that $e*a = a*e = a$ for all $a$, (4) INVERSE: $\\forall a \\in G, \\exists a^{-1}$ such that $a*a^{-1} = a^{-1}*a = e$. Examples: $(\\mathbb{Z}, +)$ integers under addition, $(\\mathbb{Q} \\setminus \\{0\\}, \\times)$ rationals under multiplication, permutations under composition. NOT commutativity (that's abelian). Applications: symmetry, cryptography, quantum mechanics.",
            "formula": "Group: Closure + Associativity + Identity + Inverse"
        }
    },
    {
        "id": "dm-group-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "An abelian group additionally requires:",
        "options": [
            "Closure",
            "Commutativity",
            "Inverse elements",
            "Identity element"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Abelian (Commutative) Group: Group with additional COMMUTATIVITY property: $a*b = b*a$ for all $a,b \\in G$. Named after mathematician Niels Henrik Abel. All 4 group axioms PLUS commutativity. Examples: $(\\mathbb{Z}, +)$, $(\\mathbb{R}, +)$, $(\\mathbb{C} \\setminus \\{0\\}, \\times)$ are abelian. Counter-example: matrix multiplication (non-abelian - $AB \\neq BA$ generally). Properties: (1) Easier to work with than non-abelian groups, (2) Fundamental Theorem of Finite Abelian Groups: every finite abelian group is direct product of cyclic groups. Applications: number theory, elliptic curve cryptography.",
            "formula": "Abelian: Group + Commutativity"
        }
    },
    {
        "id": "dm-group-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "Order of an element a in a group is the smallest positive n such that:",
        "options": [
            "aⁿ = e (identity)",
            "a + n = 0",
            "n divides a",
            "a = n"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Order of Element: Smallest positive integer $n$ such that $a^n = e$ (identity). Written $|a|$ or $ord(a)$. If no such $n$ exists, element has infinite order. Examples: In $\\mathbb{Z}_6$ under addition, element 2 has order 3 (since $2+2+2 = 6 \\equiv 0$). In multiplicative group mod 7, element 3 has order 6. Properties: (1) Order divides group order (Lagrange), (2) $a^k = e \\iff |a|$ divides $k$, (3) Cyclic group = generated by element of order $|G|$. Applications: finding generators, cryptographic protocols.",
            "formula": "$|a| = \\min\\{n \\in \\mathbb{N}: a^n = e\\}$"
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
            "Is a prime number",
            "Is greater than the group order",
            "Divides the order of the group"
        ],
        "correctAnswer": 3,
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
            "Both LUB (join) and GLB (meet)",
            "Only a GLB",
            "Only a LUB",
            "Neither LUB nor GLB"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Lattice: Partially ordered set (POSET) where every two elements have BOTH: (1) Least Upper Bound (LUB/supremum/join $a \\vee b$), (2) Greatest Lower Bound (GLB/infimum/meet $a \\wedge b$). Join = smallest element $\\geq$ both, Meet = largest element $\\leq$ both. Examples: (1) Power set with $\\subseteq$: join = union, meet = intersection, (2) Integers with divisibility: join = LCM, meet = GCD. Properties: associative, commutative, idempotent ($a \\vee a = a$), absorption ($a \\vee (a \\wedge b) = a$). Bounded lattice: has top (⊤) and bottom (⊥) elements. Applications: Boolean algebra, program analysis.",
            "formula": "Lattice: $\\forall a,b: \\exists (a \\vee b)$ and $(a \\wedge b)$"
        }
    },
    {
        "id": "dm-lattice-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Algebraic Structures",
        "question": "In a Boolean algebra, complement of element a satisfies:",
        "options": [
            "a ∨ a' = a",
            "a ∧ a' = a",
            "a' = a",
            "a ∨ a' = 1 and a ∧ a' = 0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Complement in Boolean Algebra: Element $a'$ satisfying TWO laws: (1) $a \\vee a' = 1$ (top/maximum), (2) $a \\wedge a' = 0$ (bottom/minimum). Unique in Boolean algebra (not all lattices have complements). Examples: In power set lattice, complement of set A is $\\overline{A} = U \\setminus A$. In Boolean values $\\{0,1\\}$, complement of 0 is 1. Properties: $(a')' = a$ (involution), De Morgan's laws: $(a \\vee b)' = a' \\wedge b'$ and $(a \\wedge b)' = a' \\vee b'$. Boolean algebra = complemented distributive lattice. Applications: logic gates, set operations, bit manipulation.",
            "formula": "$a \\vee a' = 1, a \\wedge a' = 0$"
        }
    },
    {
        "id": "dm-logic-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "A proposition is satisfiable if:",
        "options": [
            "There exists at least one truth assignment making it true",
            "It is always true",
            "It contains no variables",
            "It is always false"
        ],
        "correctAnswer": 0,
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
            "¬ (NOT)",
            "→ (implies)",
            "∨ (OR)"
        ],
        "correctAnswer": 1,
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
            "↔ > → > ∨ > ∧ > ¬",
            "→ > ∨ > ∧ > ¬"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Logical Operator Precedence (highest to lowest): (1) ¬ (NOT) - unary negation, (2) ∧ (AND/conjunction), (3) ∨ (OR/disjunction), (4) → (implication/conditional), (5) ↔ (biconditional/equivalence). Without parentheses: $p \\vee q \\wedge r$ means $p \\vee (q \\wedge r)$, not $(p \\vee q) \\wedge r$. Similarly $p \\rightarrow q \\vee r$ means $p \\rightarrow (q \\vee r)$. Mnemonic: NOT binds tightest (like minus in math), then AND (like multiplication), then OR (like addition), then implications. Always use parentheses when unsure!",
            "formula": "Precedence: $\\neg > \\wedge > \\vee > \\rightarrow > \\leftrightarrow$"
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
            "F",
            "T"
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
            "¬p ∨ ¬q",
            "¬p ∧ ¬q",
            "p ∧ q",
            "p ∨ q"
        ],
        "correctAnswer": 0,
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
            "¬p ∧ ¬q",
            "p ∧ q",
            "p ∨ q",
            "¬p ∨ ¬q"
        ],
        "correctAnswer": 0,
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
            "¬p ∧ ¬q",
            "q ∨ p",
            "p ∨ q",
            "q ∧ p"
        ],
        "correctAnswer": 3,
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
            "(p ∧ q) ∨ r",
            "(p ∨ q) ∧ r",
            "(p ∧ q) ∧ r",
            "p ∧ (q ∨ r)"
        ],
        "correctAnswer": 2,
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
            "(p ∨ q) ∧ (p ∨ r)",
            "(p ∨ q) ∨ (p ∨ r)",
            "(p ∧ q) ∨ (p ∧ r)",
            "(p ∧ q) ∧ (p ∧ r)"
        ],
        "correctAnswer": 2,
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
            "(p ∧ q) ∧ (p ∧ r)",
            "(p ∨ q) ∨ (p ∨ r)",
            "(p ∧ q) ∨ (p ∧ r)",
            "(p ∨ q) ∧ (p ∨ r)"
        ],
        "correctAnswer": 3,
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
            "F",
            "T",
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
            "¬p",
            "p",
            "F"
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
            "¬p",
            "p",
            "F"
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
            "T",
            "¬p",
            "F",
            "p"
        ],
        "correctAnswer": 0,
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
            "F",
            "p",
            "T",
            "¬p"
        ],
        "correctAnswer": 0,
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
            "F",
            "T",
            "¬p"
        ],
        "correctAnswer": 2,
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
            "p ∨ q",
            "p ∧ q",
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
            "p ∧ q",
            "p ∨ q",
            "p",
            "q"
        ],
        "correctAnswer": 2,
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
            "¬p ∨ q",
            "p ∨ q",
            "p ∧ q",
            "¬p ∧ q"
        ],
        "correctAnswer": 0,
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
            "¬q → ¬p",
            "¬p → ¬q",
            "p ↔ q"
        ],
        "correctAnswer": 1,
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
            "¬p → ¬q",
            "p ↔ q",
            "q → p"
        ],
        "correctAnswer": 3,
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
            "¬p → ¬q",
            "p ↔ q",
            "q → p"
        ],
        "correctAnswer": 1,
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
            "¬p ∧ q",
            "¬p ∨ q",
            "p ∧ ¬q",
            "p ∨ ¬q"
        ],
        "correctAnswer": 2,
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
            "p ∧ q",
            "(p → q) ∧ (q → p)",
            "p ∨ q",
            "(p ∧ q) ∨ (¬p ∧ ¬q)"
        ],
        "correctAnswer": 1,
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
            "(p ∧ ¬q) ∨ (¬p ∧ q)",
            "p XOR q",
            "(p ∨ q) ∧ (¬p ∨ ¬q)"
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
            "(p ∧ ¬q) ∨ (¬p ∧ q)",
            "p ∧ q",
            "p ∨ q",
            "(p ∧ q) ∨ (¬p ∧ ¬q)"
        ],
        "correctAnswer": 0,
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
            "q",
            "p",
            "¬q",
            "¬p"
        ],
        "correctAnswer": 0,
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
            "¬q",
            "q",
            "¬p"
        ],
        "correctAnswer": 3,
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
            "p → r",
            "q",
            "r"
        ],
        "correctAnswer": 1,
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
            "¬q",
            "¬p",
            "p",
            "q"
        ],
        "correctAnswer": 3,
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
            "p → q",
            "¬p",
            "p ∨ q",
            "p ∧ q"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Addition (Disjunction Introduction): From p being true, we can infer $p \u000bee q$ for ANY proposition q. If p is true, then 'p OR anything' is automatically true. Symbolically: $p \u000bdash p \u000bee q$. Example: 'It's raining' allows us to conclude 'It's raining OR it's sunny' (trivially true since first part is true). Seems obvious but formally important in proof systems. Adds flexibility in logical derivations by introducing new disjuncts.",
            "formula": "$p \u000bdash p \u000bee q$ (addition)"
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
            "¬p ∧ ¬q",
            "p (or q)",
            "p → q"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Simplification (Conjunction Elimination): From $p wedge q$ being true, we can extract either p alone or q alone. If both are true, each individual part must be true. Symbolically: $p wedge q \u000bdash p$ and $p wedge q \u000bdash q$. Example: 'It's raining AND cold' lets us conclude 'It's raining'. Converse of conjunction rule. Essential for breaking down compound statements in proofs.",
            "formula": "$p wedge q \u000bdash p$ (simplification)"
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
            "p → q",
            "p ∧ q",
            "¬(p ∧ q)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Conjunction (AND Introduction): From p and q being true separately, we can combine them into $p wedge q$. If we know both facts independently, we can state them as a conjunction. Symbolically: $p, q \u000bdash p wedge q$. Example: 'It's raining' and 'It's cold' together give 'It's raining AND cold'. Fundamental for building compound statements from atomic ones. Converse of simplification.",
            "formula": "$p, q \u000bdash p wedge q$ (conjunction)"
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
            "¬p ∧ q",
            "p ∨ r"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Resolution Rule: Foundation of automated theorem proving. From $(p \u000bee q)$ and $(\neg p \u000bee r)$, conclude $(q \u000bee r)$. Reasoning: If p is true, then from $\neg p \u000bee r$, r must be true. If p is false, then from $p \u000bee q$, q must be true. Either way, $q \u000bee r$ holds. Symbolically: $p \u000bee q, \neg p \u000bee r \u000bdash q \u000bee r$. Complete inference rule for propositional logic (with factoring). Used extensively in resolution-based theorem provers and logic programming (Prolog). Eliminates complementary literals (p and $\neg p$).",
            "formula": "$p \u000bee q, \neg p \u000bee r \u000bdash q \u000bee r$ (resolution)"
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
            "P(x) is sometimes true",
            "P(x) is a tautology",
            "For all x, P(x) is true"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Universal Quantifier ($\forall$): 'For all' or 'for every'. $\forall x P(x)$ means P(x) is true for EVERY value of x in the domain. Example: $\forall x in mathbb{Z}, x + 0 = x$ (adding zero works for all integers). To prove: must show holds for arbitrary element. To disprove: find ONE counterexample. Negation: $\neg(\forall x P(x)) equiv exists x \neg P(x)$ (if not all satisfy P, then some violate P). Scope matters in nested quantifiers. Applications: mathematical theorems, formal specifications."
        }
    },
    {
        "id": "dm-logic-051",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "∃x P(x) means:",
        "options": [
            "There exists at least one x such that P(x) is true",
            "P(x) is always false",
            "For all x, P(x) is true",
            "No x satisfies P(x)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Existential Quantifier ($exists$): 'There exists' or 'for some'. $exists x P(x)$ means P(x) is true for AT LEAST ONE value of x in domain. Example: $exists x in mathbb{Z}, x^2 = 4$ (true: x=2 or x=-2). To prove: find ONE witness/example. To disprove: must show holds for NONE (equivalent to proving $\forall x \neg P(x)$). Negation: $\neg(exists x P(x)) equiv \forall x \neg P(x)$ (if none exists, then all violate P). Unique existential: $exists! x P(x)$ means exactly one. Applications: existence proofs, database queries (SELECT)."
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
            "¬∃x P(x)",
            "∃x P(x)",
            "∃x ¬P(x)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Quantifier Negation (Universal): $\neg(\forall x P(x)) equiv exists x \neg P(x)$. 'NOT for all x, P(x)' = 'There exists some x where P(x) fails'. Example: Negation of 'All birds can fly' = 'Some bird cannot fly' (penguins!). De Morgan's law for quantifiers. To disprove universal statement, find ONE counterexample. Important for proof techniques: refutation often easier than direct proof.",
            "formula": "$\neg(\forall x P(x)) equiv exists x \neg P(x)$"
        }
    },
    {
        "id": "dm-logic-053",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Propositional Logic",
        "question": "¬(∃x P(x)) ≡",
        "options": [
            "∀x ¬P(x)",
            "∀x P(x)",
            "∃x P(x)",
            "∃x ¬P(x)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Quantifier Negation (Existential): $\neg(exists x P(x)) equiv \forall x \neg P(x)$. 'NOT exists x where P(x)' = 'For every x, P(x) is false'. Example: Negation of 'Some student passed' = 'All students failed' (or 'No student passed'). De Morgan's law for quantifiers. To disprove existential, must show property holds for NONE. Dual of universal negation.",
            "formula": "$\neg(exists x P(x)) equiv \forall x \neg P(x)$"
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
            "solution": "Boolean Functions: With n variables, each truth table row is one of $2^n$ possible inputs. Each row can map to T or F (2 choices). Total functions = $2^{2^n}$. For n=2: 4 rows (TT, TF, FT, FF), each row has 2 output choices, giving $2^4 = 16$ distinct Boolean functions. These include: tautology, contradiction, identity, negation, AND, OR, XOR, NAND, NOR, XNOR, implies, etc. Each has unique truth table. Counts all possible propositional logic operations on n variables.",
            "formula": "Boolean functions with $n$ vars = $2^{2^n}$"
        }
    },
    {
        "id": "dm-set-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "In a set, order and repetition of elements:",
        "options": [
            "Only repetition matters",
            "Matters",
            "Doesn't matter",
            "Only order matters"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Set Properties: In mathematical sets, (1) ORDER doesn't matter: ${1,2,3} = {3,1,2}$, (2) REPETITION doesn't matter: ${1,2,2,3} = {1,2,3}$. Sets defined by membership only - either element is in set or not. Contrast: sequences/lists care about order, multisets care about repetition. Example: ${a,b} = {b,a}$ but sequence $(a,b) \neq (b,a)$. Set notation: roster ${1,2,3}$ or set-builder ${x | x in mathbb{N}, x leq 3}$. Fundamental in mathematics, database relations (tables are sets of tuples)."
        }
    },
    {
        "id": "dm-set-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A set with exactly one element is called:",
        "options": [
            "Power set",
            "Empty set",
            "Singleton set",
            "Universal set"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Singleton Set: A set containing exactly ONE element. Examples: ${5}$, ${emptyset}$ (set containing empty set), ${\text{cat}}$. Cardinality = 1. Important: ${a} \neq a$ (set vs element - different types). Empty set $emptyset$ has cardinality 0. Power set of singleton: $P({a}) = {emptyset, {a}}$ (2 elements). Singleton vs element membership: $a in {a}$ but ${a} \notin {a}$ (unless nested). Used in formal logic, type theory.",
            "formula": "$|{a}| = 1$"
        }
    },
    {
        "id": "dm-set-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "The cardinality of a set is:",
        "options": [
            "Its largest element",
            "Sum of its elements",
            "Number of elements in it",
            "Its first element"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Cardinality: The NUMBER of elements in a set, denoted $|A|$ or sometimes $#A$ or card(A). Examples: $|{1,2,3}| = 3$, $|emptyset| = 0$, $|{a,b,a,c}| = 3$ (repetition ignored). For finite sets: count distinct elements. For infinite sets: different sizes exist ($|mathbb{N}| = aleph_0$ countable, $|mathbb{R}| = 2^{aleph_0}$ uncountable). Two sets have same cardinality if bijection exists between them. Important for: counting problems, comparing set sizes, database query results.",
            "formula": "$|A|$ = cardinality of set $A$"
        }
    },
    {
        "id": "dm-set-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ⊆ B means:",
        "options": [
            "Every element of A is in B",
            "A equals B",
            "Every element of B is in A",
            "A and B are disjoint"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Subset ($A subseteq B$): Every element of A is also in B. Formally: $A subseteq B iff \forall x (x in A \rightarrow x in B)$. Examples: ${1,2} subseteq {1,2,3}$, $emptyset subseteq A$ for any A (vacuously true). Properties: (1) Reflexive: $A subseteq A$, (2) Antisymmetric: $A subseteq B land B subseteq A implies A = B$, (3) Transitive: $A subseteq B land B subseteq C implies A subseteq C$. Forms partial order on sets. Total subsets of n-element set: $2^n$ (power set size). Used in: set theory, logic (domain restriction), databases (query results).",
            "formula": "$A subseteq B iff \forall x (x in A \rightarrow x in B)$"
        }
    },
    {
        "id": "dm-set-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ⊂ B (proper subset) means:",
        "options": [
            "A ⊆ B and A ≠ B",
            "A ⊇ B",
            "A ⊆ B only",
            "A = B"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Proper Subset ($A subset B$ or $A subsetneq B$): A is subset of B BUT A $\neq$ B. Equivalently: $A subseteq B$ and $exists x (x in B land x \notin A)$ (B has something A doesn't). Examples: ${1,2} subset {1,2,3}$, $emptyset subset {1}$. Note: $A \notsubset A$ (set not proper subset of itself). Proper subsets of n-element set: $2^n - 1$ (all subsets except full set). Strict inequality in subset relation. Important: notation varies - some use $subset$ for subset (not necessarily proper), others for proper subset only. Always check context!",
            "formula": "$A subset B iff (A subseteq B land A \neq B)$"
        }
    },
    {
        "id": "dm-set-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "|P(A)| where P(A) is power set of A with |A| = n is:",
        "options": [
            "2n",
            "2^n",
            "n!",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Power Set ($P(A)$ or $2^A$): Set of ALL subsets of A. For $A = {1,2}$: $P(A) = {emptyset, {1}, {2}, {1,2}}$. Cardinality: $|P(A)| = 2^{|A|}$ - each element either included or excluded (binary choice for n elements = $2^n$ subsets). Always contains $emptyset$ and A itself. Power set of empty set: $P(emptyset) = {emptyset}$ (one subset: empty set). Note: $P(A)$ has higher cardinality than A (Cantor's theorem). Power set forms Boolean algebra under $cup, cap, \text{complement}$. Used in: combinatorics, formal language theory, Venn diagrams.",
            "formula": "$|P(A)| = 2^{|A|}$"
        }
    },
    {
        "id": "dm-set-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "For any set A, ∅ is:",
        "options": [
            "Equal to A",
            "Always a subset of A",
            "Not a subset of A",
            "Only subset if A is empty"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Empty Set as Universal Subset: $emptyset subseteq A$ for EVERY set A. Proof: Vacuous truth - 'if $x in emptyset$ then $x in A$' is trivially true because antecedent is always false (no element in $emptyset$). False implies anything. Important cases: $emptyset subseteq emptyset$, $emptyset subseteq {emptyset}$. Note: $emptyset in P(A)$ always (empty set is element of every power set). Distinction: $emptyset subseteq A$ (subset) vs $emptyset in A$ (element, only if A explicitly contains empty set). Foundation of set theory, Venn diagrams (empty intersection).",
            "formula": "$emptyset subseteq A$ for all sets $A$"
        }
    },
    {
        "id": "dm-set-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A ∪ B = ?",
        "options": [
            "{x : x ∈ A or x ∈ B}",
            "{x : x ∈ A and x ∈ B}",
            "{x : x ∉ A and x ∉ B}",
            "{x : x ∈ A but x ∉ B}"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Union ($A cup B$): Set of elements in A OR B (or both). $A cup B = {x | x in A \u000bee x in B}$. Examples: ${1,2} cup {2,3} = {1,2,3}$, $A cup emptyset = A$. Properties: (1) Commutative: $A cup B = B cup A$, (2) Associative: $(A cup B) cup C = A cup (B cup C)$, (3) Idempotent: $A cup A = A$, (4) Identity: $A cup emptyset = A$. Cardinality: $|A cup B| = |A| + |B| - |A cap B|$ (inclusion-exclusion). Generalizes to n sets: $\bigcup_{i=1}^n A_i$. Duality with intersection (De Morgan's laws). Venn diagrams: shaded region covering both circles.",
            "formula": "$A cup B = {x | x in A \u000bee x in B}$"
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
            "{x : x ∈ A but x ∉ B}",
            "{x : x ∈ A and x ∈ B}",
            "{x : x ∉ A and x ∉ B}"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Intersection ($A cap B$): Set of elements in BOTH A and B. $A cap B = {x | x in A wedge x in B}$. Examples: ${1,2,3} cap {2,3,4} = {2,3}$, ${1,2} cap {3,4} = emptyset$ (disjoint). Properties: (1) Commutative: $A cap B = B cap A$, (2) Associative: $(A cap B) cap C = A cap (B cap C)$, (3) Idempotent: $A cap A = A$, (4) Identity: $A cap U = A$ (U=universal set), (5) Annihilator: $A cap emptyset = emptyset$. Cardinality: $|A cap B| leq min(|A|, |B|)$. Generalizes: $\bigcap_{i=1}^n A_i$. Dual of union. Database: JOIN operation. Venn: overlapping region.",
            "formula": "$A cap B = {x | x in A wedge x in B}$"
        }
    },
    {
        "id": "dm-set-010",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "A - B (or A \\ B) = ?",
        "options": [
            "{x : x ∈ A or x ∈ B}",
            "{x : x ∈ B and x ∉ A}",
            "{x : x ∈ A and x ∉ B}",
            "{x : x ∈ A and x ∈ B}"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Set Difference ($A - B$ or $A setminus B$): Elements in A that are NOT in B. $A - B = {x | x in A wedge x \notin B}$. Examples: ${1,2,3} - {2,3,4} = {1}$, $A - emptyset = A$, $A - A = emptyset$. NOT commutative: $A - B \neq B - A$ generally. Cardinality: $|A - B| = |A| - |A cap B|$. Complement: $overline{A} = U - A$ (universal set minus A). Relation to intersection: $A - B = A cap overline{B}$. SQL: SELECT * FROM A EXCEPT SELECT * FROM B. Venn: A circle minus overlapping part.",
            "formula": "$A - B = {x | x in A wedge x \notin B}$"
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
            "(A - B) ∩ (B - A)",
            "(A ∩ B)",
            "(A ∪ B)"
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
            "A ∩ B = ∅",
            "A = B",
            "A ∪ B = ∅",
            "A ⊆ B"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Disjoint Sets: Two sets A and B are disjoint if they have NO common elements. $A cap B = emptyset$. Examples: ${1,2}$ and ${3,4}$ are disjoint, even vs odd integers are disjoint. Pairwise disjoint: collection where every pair is disjoint (important for partitions). Properties: (1) $|A cup B| = |A| + |B|$ when disjoint (no overlap to subtract), (2) Partition: family of pairwise disjoint sets whose union is full set. Applications: probability (mutually exclusive events), data structures (disjoint sets/union-find), Venn diagrams (non-overlapping circles).",
            "formula": "Disjoint: $A cap B = emptyset$"
        }
    },
    {
        "id": "dm-set-013",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Idempotent law: A ∪ A = ?",
        "options": [
            "A",
            "A^c",
            "∅",
            "U"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Idempotent Law (Union): $A cup A = A$. Set union with itself returns same set. Idempotent = 'same power' (operation repeated gives same result). Example: ${1,2} cup {1,2} = {1,2}$. Dual law: $A cap A = A$ (intersection idempotent too). Parallel in logic: $p \u000bee p equiv p$ and $p wedge p equiv p$. Used for simplifying set expressions - redundant unions/intersections can be eliminated. Boolean algebra property.",
            "formula": "$A cup A = A$ (idempotent)"
        }
    },
    {
        "id": "dm-set-014",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Identity law: A ∪ ∅ = ?",
        "options": [
            "U",
            "∅",
            "A^c",
            "A"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Identity Law (Union): $A cup emptyset = A$. Empty set is identity element for union. Adding nothing changes nothing. Example: ${1,2} cup emptyset = {1,2}$. Dual law: $A cap U = A$ (universal set is identity for intersection). Parallel: 0 is identity for addition ($x + 0 = x$), FALSE is identity for OR ($p \u000bee F equiv p$). One of fundamental set algebra laws. Used in simplification.",
            "formula": "$A cup emptyset = A$ (identity)"
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
            "A",
            "U",
            "A^c"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Identity Law (Intersection): $A cap U = A$ where U is universal set. Intersection with universe leaves set unchanged. Example: ${1,2} cap mathbb{Z} = {1,2}$ (assuming universe is integers). Dual of $A cup emptyset = A$. Parallel: 1 is identity for multiplication ($x \times 1 = x$), TRUE is identity for AND ($p wedge T equiv p$). Fundamental set algebra law.",
            "formula": "$A cap U = A$ (identity)"
        }
    },
    {
        "id": "dm-set-016",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Domination law: A ∪ U = ?",
        "options": [
            "A^c",
            "U",
            "∅",
            "A"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Domination Law (Union): $A cup U = U$. Union with universal set gives universal set. Everything ORed with everything = everything. Example: ${1,2} cup mathbb{Z} = mathbb{Z}$. Universe dominates - absorbs any subset. Dual: $A cap emptyset = emptyset$ (empty dominates intersection). Parallel: TRUE dominates OR ($p \u000bee T equiv T$), 0 dominates multiplication in some systems.",
            "formula": "$A cup U = U$ (domination)"
        }
    },
    {
        "id": "dm-set-017",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Domination law: A ∩ ∅ = ?",
        "options": [
            "U",
            "∅",
            "A",
            "A^c"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Domination Law (Intersection): $A cap emptyset = emptyset$. Intersection with empty set always gives empty set. Nothing intersected with nothing = nothing. Example: ${1,2,3} cap emptyset = emptyset$. Empty set dominates intersection - absorbing element. Dual: $A cup U = U$ (universe dominates union). Parallel: FALSE dominates AND ($p wedge F equiv F$), 0 dominates multiplication ($x \times 0 = 0$).",
            "formula": "$A cap emptyset = emptyset$ (domination)"
        }
    },
    {
        "id": "dm-set-018",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Complement law: A ∪ A^c = ?",
        "options": [
            "A^c",
            "U",
            "A",
            "∅"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Complement Law (Union): $A cup overline{A} = U$. Set union with its complement gives universal set. Everything is either in A or not in A (law of excluded middle for sets). Example: {even integers} $cup$ {odd integers} = all integers. Partition property. Dual: $A cap overline{A} = emptyset$ (set and complement are disjoint). Parallel: $p \u000bee \neg p equiv T$.",
            "formula": "$A cup A' = U$ (complement)"
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
            "A^c",
            "A"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Complement Law (Intersection): $A cap overline{A} = emptyset$. Set and its complement are disjoint - no element can be both in A and not in A (law of non-contradiction for sets). Example: {even integers} $cap$ {odd integers} = $emptyset$. Fundamental disjointness. Dual: $A cup overline{A} = U$ (union covers universe). Parallel: $p wedge \neg p equiv F$.",
            "formula": "$A cap A' = emptyset$ (complement)"
        }
    },
    {
        "id": "dm-set-020",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "De Morgan's law: (A ∪ B)^c = ?",
        "options": [
            "A^c ∩ B^c",
            "A^c ∪ B^c",
            "A ∩ B",
            "A ∪ B"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "De Morgan's Law for Sets (Union): $(A cup B)' = A' cap B'$. Complement of union = intersection of complements. 'Not in (A OR B)' = 'Not in A AND not in B'. Example: complement of (students OR teachers) = (non-students) AND (non-teachers). Proof via element membership. Dual: $(A cap B)' = A' cup B'$. Parallel to logic: $\neg(p \u000bee q) equiv \neg p wedge \neg q$. Essential for Boolean simplification.",
            "formula": "$(A cup B)' = A' cap B'$"
        }
    },
    {
        "id": "dm-set-021",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "De Morgan's law: (A ∩ B)^c = ?",
        "options": [
            "A ∩ B",
            "A^c ∩ B^c",
            "A ∪ B",
            "A^c ∪ B^c"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "De Morgan's Law for Sets (Intersection): $(A cap B)' = A' cup B'$. Complement of intersection = union of complements. 'Not in (A AND B)' = 'Not in A OR not in B'. Example: complement of (cs-majors AND seniors) = (non-cs-majors) OR (non-seniors). Generalizes to n sets. Dual: $(A cup B)' = A' cap B'$. Parallel to logic: $\neg(p wedge q) equiv \neg p \u000bee \neg q$.",
            "formula": "$(A cap B)' = A' cup B'$"
        }
    },
    {
        "id": "dm-set-022",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Absorption law: A ∪ (A ∩ B) = ?",
        "options": [
            "A ∪ B",
            "A",
            "B",
            "A ∩ B"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Absorption Law (Union form): $A cup (A cap B) = A$. If A is true, union evaluates to A. If A is false, $(A cap B)$ is false, so union is still A. Proof: $A cup (A cap B) = (A cap U) cup (A cap B) = A cap (U cup B) = A cap U = A$ (using distributive, domination). Dual: $A cap (A cup B) = A$. Simplification law. Parallel in logic: $p \u000bee (p wedge q) equiv p$.",
            "formula": "$A cup (A cap B) = A$ (absorption)"
        }
    },
    {
        "id": "dm-set-023",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "Absorption law: A ∩ (A ∪ B) = ?",
        "options": [
            "A",
            "B",
            "A ∪ B",
            "A ∩ B"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Absorption Law (Intersection form): $A cap (A cup B) = A$. If A is true, result is A. If A is false, intersection is false = A. Symmetric to union absorption. Proof: $A cap (A cup B) = (A cap A) cup (A cap B) = A cup (A cap B) = A$ (distributive, idempotent, absorption). Dual: $A cup (A cap B) = A$. Parallel in logic: $p wedge (p \u000bee q) equiv p$.",
            "formula": "$A cap (A cup B) = A$ (absorption)"
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
            "solution": "Inclusion-Exclusion Principle (2 sets): $|A cup B| = |A| + |B| - |A cap B|$. Add individual sizes, subtract overlap (counted twice). Example: |CS students| + |Math students| counts double-majors twice, so subtract |CS $cap$ Math|. Generalizes to n sets with alternating sum. For 3: $|A cup B cup C| = |A| + |B| + |C| - |A cap B| - |A cap C| - |B cap C| + |A cap B cap C|$. Foundation of counting problems, probability.",
            "formula": "$|A cup B| = |A| + |B| - |A cap B|$"
        }
    },
    {
        "id": "dm-set-026",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Set Theory",
        "question": "|A × B| where A×B is Cartesian product = ?",
        "options": [
            "|A| / |B|",
            "|A| + |B|",
            "|A| - |B|",
            "|A| × |B|"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Cartesian Product Cardinality: $|A \times B| = |A| \times |B|$. Cartesian product $A \times B = {(a,b) | a in A, b in B}$ is set of all ordered pairs. For each of |A| choices in first position, |B| choices in second = |A|×|B| total pairs. Example: {1,2} × {a,b,c} has 2×3=6 pairs. Extends to n sets: $|A_1 \times ... \times A_n| = |A_1| \times ... \times |A_n|$ (multiplication principle). Database: cross-join size.",
            "formula": "$|A \times B| = |A| \times |B|$"
        }
    },
    {
        "id": "gt-basic-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A graph G = (V, E) consists of:",
        "options": [
            "A set of vertices and a set of edges",
            "A single vertex and edge",
            "Only edges",
            "Only vertices"
        ],
        "correctAnswer": 0,
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
            "Self-loops allowed, parallel edges not",
            "Neither self-loops nor parallel edges",
            "Parallel edges allowed, self-loops not",
            "Self-loops and parallel edges are allowed"
        ],
        "correctAnswer": 1,
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
            "Weighted edges only",
            "Multiple edges between same vertices",
            "Only directed edges"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Multigraph: Graph allowing MULTIPLE (parallel) edges between same pair of vertices. Example: two cities connected by multiple roads/flights. Can also allow self-loops. Used when edge multiplicity matters. Applications: network flow (capacity on multiple channels), transportation networks, electrical circuits (parallel resistors). Differs from simple graph (at most one edge per vertex pair). Can be weighted (capacities) or unweighted.",
            "formula": "Multigraph: parallel edges allowed"
        }
    },
    {
        "id": "gt-basic-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Degree of a vertex v, deg(v), is:",
        "options": [
            "Number of paths from v",
            "Number of vertices adjacent to v",
            "Number of edges incident to v",
            "None of these"
        ],
        "correctAnswer": 2,
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
            "|V| + |E|",
            "2|E|",
            "|V|",
            "|E|"
        ],
        "correctAnswer": 1,
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
            "Prime",
            "Even",
            "Odd",
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
            "n-1",
            "0",
            "1",
            "2"
        ],
        "correctAnswer": 2,
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
            "solution": "Isolated Vertex: Vertex with degree 0 - no edges incident to it. Disconnected from rest of graph. Example: single person with no friends in social network. Graph with isolated vertex is disconnected (unless it's the only vertex). Removing isolated vertex doesn't change connectivity. Component of size 1. Found in sparse networks, data networks with unconnected nodes.",
            "formula": "deg(v) = 0"
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
            "1",
            "n+1",
            "n",
            "n-1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Complete Graph Vertex Degree: In $K_n$, each vertex connected to all OTHER vertices. Degree = $n-1$ (connected to $n-1$ others, not to itself in simple graph). Total degree sum = $n(n-1) = 2|E|$ (handshaking). Highest degree possible in simple graph with n vertices. Complete graph is $(n-1)$-regular. All vertices have same degree.",
            "formula": "deg(v) = n-1 in $K_n$"
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
            "m + n - 1",
            "(m+n)(m+n-1)/2"
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
            "solution": "Calculation: $3 \times 4 = 12$ edges in $K_{3,4}$. Each of 3 vertices in first set connects to all 4 in second set.",
            "formula": "$m \times n$ edges"
        }
    },
    {
        "id": "gt-special-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A k-regular graph is one where every vertex has degree:",
        "options": [
            "k",
            "k-1",
            "k²",
            "k+1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "k-Regular Graph: ALL vertices have the SAME degree k. Examples: (1) $K_n$ is $(n-1)$-regular, (2) Cycle $C_n$ is 2-regular, (3) Petersen graph is 3-regular. Total edges in k-regular graph with n vertices: $\frac{nk}{2}$ (handshaking: $sum deg = nk = 2|E|$). Regular graphs have high symmetry. Applications: network design (balanced connectivity), coding theory.",
            "formula": "deg(v) = k for all v"
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
            "solution": "Cycle Graph $C_n$: Closed path forming a ring with n vertices and n edges. Each vertex has degree 2 (connected to 2 neighbors). Minimum edges to create cycle = 3 ($C_3$ = triangle). 2-regular graph. Examples: $C_3$ (triangle), $C_4$ (square), $C_5$ (pentagon). No start/end vertex. Euler circuit exists (all even degrees). Applications: circular arrangements, clock algorithms.",
            "formula": "$|V| = n, |E| = n$"
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
            "n+1",
            "n/2",
            "n-1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Path Graph $P_n$: Linear sequence of n vertices connected by edges, with n-1 edges. No cycles. Endpoints (degree 1), internal vertices (degree 2). Simplest connected graph. Examples: $P_2$ (single edge), $P_3$ (two edges in line). Tree with exactly 2 leaves. Removing path from cycle leaves another path. Found in: linked lists, shortest paths.",
            "formula": "$|V| = n, |E| = n-1$"
        }
    },
    {
        "id": "gt-tree-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A tree with n vertices has how many edges?",
        "options": [
            "n-1",
            "n+1",
            "log n",
            "n"
        ],
        "correctAnswer": 0,
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
            "Disconnected acyclic graph",
            "Complete graph",
            "Connected acyclic graph",
            "Connected graph with cycles"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Tree Definition: Connected AND acyclic graph. Fundamental structure in graph theory. Alternative definition: Acyclic + $n-1$ edges, or Connected + $n-1$ edges, or Unique path between any two vertices. Minimal connected graph (removing any edge disconnects). Maximal acyclic graph (adding any edge creates cycle). Applications: hierarchies, spanning trees, decision trees, file systems.",
            "formula": "Tree = Connected + Acyclic"
        }
    },
    {
        "id": "gt-tree-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Adding one edge to a tree creates:",
        "options": [
            "Exactly one cycle",
            "Two trees",
            "Another tree",
            "A disconnected graph"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Adding Edge to Tree: Creates EXACTLY ONE cycle. Why? Tree has unique path between any two vertices. Adding edge $(u,v)$ creates second path between u and v, forming cycle with original path. Only one cycle because tree is minimally connected. Applications: finding fundamental cycles in graph, network design (avoiding loops).",
            "formula": "+1 edge $\\rightarrow$ 1 cycle"
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
            "A complete graph",
            "Two connected components",
            "A cycle"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Removing Edge from Tree: Disconnects graph into TWO connected components. Why? Tree has unique path between vertices - path using removed edge breaks. No alternate path exists (would create cycle, contradicting tree). Each tree with $n geq 2$ has at least 2 pendant vertices (degree 1), good candidates for edge removal. Applications: tree decomposition, cut edges.",
            "formula": "-1 edge $\\rightarrow$ 2 components"
        }
    },
    {
        "id": "gt-tree-005",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Number of spanning trees of complete graph Kn is:",
        "options": [
            "n^(n-2)",
            "2^n",
            "n!",
            "n"
        ],
        "correctAnswer": 0,
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
            "solution": "Calculation using Cayley's formula: $n^{n-2} = 4^{4-2} = 4^2 = 16$ spanning trees for $K_4$.",
            "formula": "$4^{2} = 16$"
        }
    },
    {
        "id": "gt-tree-007",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A forest is:",
        "options": [
            "A graph with cycles",
            "A disjoint union of trees",
            "A connected tree",
            "A complete graph"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Forest: Acyclic graph (can be disconnected). Disjoint union of trees. If forest has k connected components (k trees), Equivalently: graph with no cycles. Forest with n vertices and k components has $n-k$ edges. When k=1, forest is a tree. Applications: disjoint set data structure, disconnected networks, MST before connecting components.",
            "formula": "Forest = Acyclic graph = Disjoint trees"
        }
    },
    {
        "id": "gt-tree-008",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A forest with n vertices and k trees has how many edges?",
        "options": [
            "n-k",
            "n-1",
            "n+k",
            "k-1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Forest Edge Count: Forest with n vertices and k trees (k connected components) has exactly $n-k$ edges. Reasoning: Each of k trees contributes $(\\text{vertices in tree}) - 1$ edges. Total edges = $(v_1-1) + (v_2-1) + ... + (v_k-1) = (v_1+v_2+...+v_k) - k = n - k$. When k=1 (single tree), $n-1$ edges. When k=n (all isolated), 0 edges. Applications: minimum spanning forest has $n-k$ edges for k components.",
            "formula": "$|E| = n - k$ (forest)"
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
            "It is connected",
            "It has parallel edges",
            "It contains no odd-length cycle"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Bipartite Characterization: Graph is bipartite $\\iff$ it contains NO odd-length cycles. Equivalently: 2-colorable (vertices colored with 2 colors, adjacent vertices different colors). Proof: If odd cycle exists, alternating colors around cycle causes contradiction at return. Converse: DFS with 2-color coloring succeeds iff no odd cycles. Examples: Trees (no cycles), even cycles, complete bipartite $K_{m,n}$. Non-examples: Odd cycles, $K_5$. Applications: matching problems (job assignment), Hall's marriage theorem."
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
            "Regular",
            "Complete"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Trees are Bipartite: Every tree is bipartite because trees are acyclic - they contain NO cycles, hence no odd cycles. Can 2-color any tree: pick root, alternate colors by levels (BFS coloring). Partition vertices by odd/even distance from root. One of many special properties of trees: connected, acyclic, bipartite, $n-1$ edges, unique paths.",
            "formula": "Tree $\\Rightarrow$ Bipartite"
        }
    },
    {
        "id": "gt-bip-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "The chromatic number of a bipartite graph with at least one edge is:",
        "options": [
            "3",
            "1",
            "2",
            "n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Chromatic Number of Bipartite: Bipartite graph is 2-colorable by definition, so $\\chi(G) = 2$ (if graph has at least one edge). If graph has no edges, $\\chi(G) = 1$. Minimum colors needed = 2 since vertices in same partition can share color,different partitions need different colors. Bipartite characterization: $\\chi(G) \\leq 2 \\iff$ graph is bipartite (or empty).",
            "formula": "$\\chi(\\text{Bipartite}) = 2$"
        }
    },
    {
        "id": "gt-planar-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Euler's formula for connected planar graph: v - e + f = ?",
        "options": [
            "1",
            "3",
            "0",
            "2"
        ],
        "correctAnswer": 3,
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
            "n(n-1)/2",
            "3n-6",
            "n-1",
            "2n-3"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Maximum Planar Edges: For simple planar graph with $n \\geq 3$ vertices, $e \\leq 3n - 6$. Derivation from Euler ($v-e+f=2$): Each face has $\\geq 3$ edges on boundary (simple graph), each edge borders $\\leq 2$ faces, so $3f \\leq 2e$. Substitute: $v - e + 2e/3 \\geq 2 \\Rightarrow e \\leq 3v-6$. Used to prove non-planarity: if $e > 3n-6$, graph is non-planar. For bipartite planar: $e \\leq 2n-4$ (tighter bound, each face has $\\geq 4$ edges).",
            "formula": "$e \\leq 3n - 6$ (planar)"
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
            "solution": "Calculation: $3(8) - 6 = 24 - 6 = 18$ maximum edges for planar graph with 8 vertices.",
            "formula": "$3n - 6 = 18$"
        }
    },
    {
        "id": "gt-planar-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "K₅ (complete graph on 5 vertices) is:",
        "options": [
            "Bipartite",
            "Planar",
            "A tree",
            "Non-planar"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "$K_5$ Non-Planarity: Complete graph on 5 vertices has $\\frac{5(4)}{2} = 10$ edges. Maximum for planar with 5 vertices: $3(5)-6 = 9$ edges. Since $10 > 9$, $K_5$ cannot be planar. Kuratowski's theorem: $K_5$ is one of two minimal non-planar graphs (other is $K_{3,3}$). Any graph containing $K_5$ subdivision is non-planar."
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
            "A tree",
            "Non-planar",
            "Disconnected"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "$K_{3,3}$ Non-Planarity: Complete bipartite 3,3 has $3 \\times 3 = 9$ edges. For bipartite planar with 6 vertices: $e \\leq 2(6)-4 = 8$ edges. Since $9 > 8$, $K_{3,3}$ is non-planar. Classical example: 'utilities problem' (3 houses, 3 utilities, can't connect all without crossings). Kuratowski: $K_{3,3}$ is minimal non-planar bipartite.",
            "formula": "$K_{3,3}$: $e=9 > 2n-4=8$"
        }
    },
    {
        "id": "gt-planar-006",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Kuratowski's theorem: A graph is planar iff it contains no subdivision of:",
        "options": [
            "K₅ or K₃,₃",
            "K₄ or K₂,₃",
            "K₆ or K₄,₄",
            "Any cycle"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Kuratowski's Theorem: Graph is planar $\\iff$ it contains NO subdivision of $K_5$ or $K_{3,3}$. Subdivision: insert vertices into edges (edge subdividing). These are  ONLY two minimal obstructions to planarity. Wagner's theorem (equivalent): planar $\\iff$ no $K_5$ or $K_{3,3}$ minor (contract/delete edges). Planarity testing: linear time algorithms (Hopcroft-Tarjan, Boyer-Myrvold). Fundamental characterization theorem.",
            "formula": "Planar $\\iff$ no $K_5$ or $K_{3,3}$ subdivision"
        }
    },
    {
        "id": "gt-euler-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "An Eulerian circuit exists iff:",
        "options": [
            "All vertices have even degree and graph is connected",
            "All vertices have odd degree",
            "Graph is complete",
            "At least one vertex has degree 0"
        ],
        "correctAnswer": 0,
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
            "2 odd-degree vertices",
            "All odd-degree vertices",
            "0 odd-degree vertices",
            "1 odd-degree vertex"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Eulerian Path Condition: Connected graph has Eulerian path (not cycle) $\\iff$ exactly 2 vertices have odd degree. These ODD-degree vertices MUST be start and end of path. All other vertices have even degree (enter = leave). If 0 odd-degree vertices, Eulerian circuit exists (closed). If > 2 odd-degree vertices, no Eulerian path/circuit exists. Constructive: start at odd-degree vertex, traverse edges, end at other odd-degree vertex.",
            "formula": "Eulerian path: exactly 2 odd vertices"
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
            "Only even-degree vertices",
            "Only odd-degree vertices",
            "Every vertex exactly once and returns"
        ],
        "correctAnswer": 3,
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
            "Undecidable",
            "NP-complete",
            "P (polynomial time)",
            "Always solvable in O(n)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hamiltonian Cycle Complexity: Determining if graph has Hamiltonian cycle is NP-complete. No known polynomial algorithm. Contrast with Eulerian (polynomial: just check degrees). NP-complete even for special cases (cubic graphs, grid graphs). Sufficient conditions exist (Dirac, Ore) but not necessary. Traveling Salesman Problem reduces to Hamiltonian. Practical: use heuristics, approximations, backtracking for small graphs."
        }
    },
    {
        "id": "gt-color-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Chromatic number χ(G) is the minimum number of colors to color vertices such that:",
        "options": [
            "Maximum colors used",
            "All vertices same color",
            "No two adjacent vertices have same color",
            "All edges same color"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Chromatic Number $\\chi(G)$: MINIMUM number of colors needed for proper vertex coloring (no two adjacent vertices same color). Graph coloring problem: assign colors to vertices such that edge endpoints have different colors. Applications: register allocation, scheduling, frequency assignment, map coloring (4-color theorem). Computing $\\chi(G)$ is NP-hard. Bounds: $\\chi(G) \\leq \\Delta(G) + 1$ where $\\Delta$ = max degree. Brooks' theorem: tighter bound for connected graphs.",
            "formula": "$\\chi(G)$ = chromatic number"
        }
    },
    {
        "id": "gt-color-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "χ(Kn) = ?",
        "options": [
            "n",
            "2",
            "1",
            "n-1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Chromatic Number of $K_n$: $\\chi(K_n) = n$. Every pair of vertices is adjacent in complete graph, so each vertex needs unique color. Requires n colors, achieves maximum chromatic number for n vertices. Example: $K_5$ needs 5 colors. Lower bound: clique number $\\omega(G) \\leq \\chi(G)$ (largest complete subgraph). $K_n$ is its own maximum clique.",
            "formula": "$\\chi(K_n) = n$"
        }
    },
    {
        "id": "gt-color-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "χ(Cn) for even n = ?",
        "options": [
            "2",
            "n",
            "3",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Even Cycle Coloring: $\\chi(C_n) = 2$ for even n. Even cycles are bipartite (no odd cycles), hence 2-colorable. Alternate colors around cycle: color 1, 2, 1, 2, ..., returns to start with color 2, then start gets color 1 - consistent! Example: $C_4$ (square), $C_6$ (hexagon) all use 2 colors.",
            "formula": "$\\chi(C_{\\text{even}}) = 2$"
        }
    },
    {
        "id": "gt-color-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "χ(Cn) for odd n ≥ 3 is:",
        "options": [
            "3",
            "2",
            "n",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Odd Cycle Coloring: $\\chi(C_n) = 3$ for odd $n \\geq 3$. Odd cycles NOT bipartite (contain odd cycle themselves). Alternating 2 colors around odd cycle: color 1, 2, 1, 2, ..., 1, when returning to start - conflict! Need 3rd color. Example: Triangle $C_3$ needs 3 colors. Minimal non-bipartite graphs.",
            "formula": "$\\chi(C_{\\text{odd}}) = 3$"
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
            "Δ(G) + 1",
            "Δ(G)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Greedy Coloring Bound: $\\chi(G) \\leq \\Delta(G) + 1$ where $\\Delta(G)$ is maximum degree. Proof: Greedy algorithm colors vertices sequentially - each vertex has at most $\\Delta$ neighbors, so at most $\\Delta$ colors used by neighbors, leaving at least 1 color available (from $\\Delta+1$ palette). Brooks' theorem (tighter): $\\chi(G) \\leq \\Delta(G)$ for connected graphs except cliques and odd cycles.",
            "formula": "$\\chi(G) \\leq \\Delta + 1$"
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
            "Connected",
            "Planar",
            "Bipartite"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "2-Colorable = Bipartite: Graph is 2-colorable $\\iff$ it is bipartite $\\iff$ it contains no odd cycles. Partition vertices into 2 independent sets (color classes). Each color class is independent set (no edges within). Constructive: BFS/DFS with alternating colors. If conflict arises, odd cycle detected. Applications: matching, stable marriage, network flow.",
            "formula": "2-colorable $\\iff$ Bipartite"
        }
    },
    {
        "id": "gt-iso-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Two graphs are isomorphic if they have:",
        "options": [
            "Same structure (bijection preserving adjacency)",
            "Same labels",
            "Same number of edges only",
            "Same drawing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Graph Isomorphism: Graphs $G$ and $H$ are isomorphic if there exists bijection $f: V(G) \\to V(H)$ preserving adjacency: $(u,v) \\in E(G) \\iff (f(u), f(v)) \\in E(H)$. Same structure, different labels. Denoted $G \\cong H$. Must preserve: vertex count, edge count, degree sequence, connectedness, cycles, chromatic number. Checking isomorphism: GI problem (graph isomorphism problem) - not known to be in P or NP-complete. Applications: chemical structure comparison, pattern matching.",
            "formula": "$G \\cong H$ (isomorphic)"
        }
    },
    {
        "id": "gt-iso-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Isomorphic graphs must have same:",
        "options": [
            "Degree sequence",
            "Vertex labels",
            "Drawing",
            "Color"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Isomorphism Invariants: Properties preserved under isomorphism. Necessary conditions for $G \\cong H$: (1) same number of vertices, (2) same number of edges, (3) same degree sequence, (4) same chromatic number, (5) same diameter, (6) same girth (shortest cycle length). These are NECESSARY but NOT SUFFICIENT - two graphs with same invariants may still be non-isomorphic. Degree sequence especially useful quick check.",
            "formula": "Invariants: $|V|, |E|$, degrees"
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
            "solution": "Non-isomorphic 3-vertex graphs: (1) 0 edges: empty graph, (2) 1 edge: path $P_2$ plus isolated vertex, (3) 2 edges: path $P_3$, (4) 3 edges: triangle $K_3$. Total = 4 non-isomorphic simple graphs on 3 vertices. Maximum possible edges = $\\binom{3}{2} = 3$. Different from labeled graphs (2^3 = 8 possible edge sets).",
            "formula": "4 non-isomorphic 3-vertex graphs"
        }
    },
    {
        "id": "gt-dig-001",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "In a directed graph, sum of all in-degrees equals sum of all out-degrees equals:",
        "options": [
            "|E|",
            "2|E|",
            "|V| + |E|",
            "|V|"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Directed Graph Degree Sum: Each directed edge $(u,v)$ contributes 1 to out-degree of u and 1 to in-degree of v. Therefore: $\\sum \\text{in-deg}(v) = |E|$ and $\\sum \\text{out-deg}(v) = |E|$. Both sums equal number of edges (each edge counted once in each sum). Handshaking for directed graphs. Example: DAG with n vertices can have up to $\\binom{n}{2}$ edges.",
            "formula": "$\\sum \\text{in-deg} = \\sum \\text{out-deg} = |E|$"
        }
    },
    {
        "id": "gt-dig-002",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A directed graph is strongly connected if:",
        "options": [
            "It has exactly one source",
            "There's a path from every vertex to every other vertex",
            "It has no cycles",
            "It's a DAG"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Strongly Connected Digraph: Directed graph where there exists directed path from EVERY vertex to EVERY other vertex (in both directions). Stronger than weakly connected (path in underlying undirected graph). Every vertex reachable from every other vertex following edge directions. Algorithm: Tarjan's or Kosaraju's algorithm finds strongly connected components in $O(V+E)$. Applications: web page ranking, circuit analysis, dependency resolution.",
            "formula": "Strong: $\\forall u,v: u \\to v$ and $v \\to u$"
        }
    },
    {
        "id": "gt-dig-003",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "A DAG is:",
        "options": [
            "Complete directed graph",
            "Undirected graph",
            "Directed Acyclic Graph",
            "Directed graph with cycles"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DAG (Directed Acyclic Graph): Directed graph with NO directed cycles. Fundamental structure in computer science. Properties: (1) Has topological ordering (linear ordering of vertices where edges go forward), (2) Has at least one source (in-degree 0) and one sink (out-degree 0). Applications: task scheduling, compilation dependency, version control, Bayesian networks. Can be solved in linear time: DFS-based topological sort. Every DAG is weakly connected or forest.",
            "formula": "DAG = Directed + Acyclic"
        }
    },
    {
        "id": "gt-dig-004",
        "type": "MCQ",
        "topic": "discrete-math",
        "subtopic": "Graph Theory",
        "question": "Topological sort is possible only for:",
        "options": [
            "Complete graphs",
            "Undirected graphs",
            "DAGs",
            "Graphs with cycles"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Topological ordering: linear order where all edges go forward; requires DAG"
        }
    }
]);