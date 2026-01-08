/**
 * Graph Theory EXHAUSTIVE
 * Every formula and property from GATE material
 */

Questions.register([
    // ========== BASIC GRAPH CONCEPTS ==========
    {
        id: "gt-basic-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A graph G = (V, E) consists of:",
        options: ["Only vertices", "Only edges", "A set of vertices and a set of edges", "A single vertex and edge"],
        correctAnswer: 2,
        explanation: { solution: "Graph G = (V, E) where V = vertices, E = edges" }
    },
    {
        id: "gt-basic-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "In a simple graph:",
        options: ["Self-loops and parallel edges are allowed", "Self-loops allowed, parallel edges not", "Neither self-loops nor parallel edges", "Parallel edges allowed, self-loops not"],
        correctAnswer: 2,
        explanation: { solution: "Simple graph: no self-loops, no multiple edges between same pair" }
    },
    {
        id: "gt-basic-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A multigraph allows:",
        options: ["Only self-loops", "Multiple edges between same vertices", "Only directed edges", "Weighted edges only"],
        correctAnswer: 1,
        explanation: { solution: "Multigraph: multiple (parallel) edges allowed between same vertices" }
    },
    {
        id: "gt-basic-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Degree of a vertex v, deg(v), is:",
        options: ["Number of vertices adjacent to v", "Number of edges incident to v", "Number of paths from v", "None of these"],
        correctAnswer: 1,
        explanation: { solution: "Degree = number of edges incident on vertex (self-loop counts 2)" }
    },
    {
        id: "gt-basic-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Handshaking theorem: Sum of all degrees = ?",
        options: ["|V|", "|E|", "2|E|", "|V| + |E|"],
        correctAnswer: 2,
        explanation: { solution: "Σ deg(v) = 2|E| (each edge contributes 2 to sum)", formula: "Σ deg(v) = 2|E|" }
    },
    {
        id: "gt-basic-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of odd-degree vertices in any graph is always:",
        options: ["Odd", "Even", "Prime", "Zero"],
        correctAnswer: 1,
        explanation: { solution: "Since Σ deg(v) = 2|E| is even, number of odd-degree vertices must be even" }
    },
    {
        id: "gt-basic-007",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A pendant vertex has degree:",
        options: ["0", "1", "2", "n-1"],
        correctAnswer: 1,
        explanation: { solution: "Pendant (leaf) vertex has degree 1" }
    },
    {
        id: "gt-basic-008",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "An isolated vertex has degree:",
        options: ["0", "1", "2", "n-1"],
        correctAnswer: 0,
        explanation: { solution: "Isolated vertex has degree 0 (no edges)" }
    },
    // ========== SPECIAL GRAPHS ==========
    {
        id: "gt-special-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Complete graph Kn has how many edges?",
        options: ["n", "n-1", "n(n-1)/2", "n²"],
        correctAnswer: 2,
        explanation: { solution: "|E| = C(n,2) = n(n-1)/2", formula: "Edges in Kn = n(n-1)/2" }
    },
    {
        id: "gt-special-002",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of edges in complete graph K₅ is:",
        correctAnswer: 10,
        tolerance: 0,
        explanation: { solution: "5(5-1)/2 = 20/2 = 10" }
    },
    {
        id: "gt-special-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "In complete graph Kn, every vertex has degree:",
        options: ["n", "n-1", "n+1", "1"],
        correctAnswer: 1,
        explanation: { solution: "Each vertex connected to all other n-1 vertices" }
    },
    {
        id: "gt-special-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Complete bipartite graph Km,n has how many edges?",
        options: ["m + n", "m × n", "(m+n)(m+n-1)/2", "m + n - 1"],
        correctAnswer: 1,
        explanation: { solution: "Every vertex in first part connected to every vertex in second", formula: "Edges = m × n" }
    },
    {
        id: "gt-special-005",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of edges in complete bipartite graph K3,4 is:",
        correctAnswer: 12,
        tolerance: 0,
        explanation: { solution: "3 × 4 = 12" }
    },
    {
        id: "gt-special-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A k-regular graph is one where every vertex has degree:",
        options: ["k-1", "k", "k+1", "k²"],
        correctAnswer: 1,
        explanation: { solution: "k-regular: all vertices have same degree k" }
    },
    {
        id: "gt-special-007",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Cycle graph Cn has how many edges?",
        options: ["n-1", "n", "n+1", "2n"],
        correctAnswer: 1,
        explanation: { solution: "Cycle with n vertices has exactly n edges", formula: "|E| = n" }
    },
    {
        id: "gt-special-008",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Path graph Pn with n vertices has how many edges?",
        options: ["n", "n-1", "n+1", "n/2"],
        correctAnswer: 1,
        explanation: { solution: "Path: n vertices connected in line = n-1 edges", formula: "|E| = n-1" }
    },
    // ========== TREES ==========
    {
        id: "gt-tree-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A tree with n vertices has how many edges?",
        options: ["n", "n-1", "n+1", "log n"],
        correctAnswer: 1,
        explanation: { solution: "Tree: connected acyclic graph, always n-1 edges", formula: "|E| = n-1" }
    },
    {
        id: "gt-tree-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A tree is:",
        options: ["Connected graph with cycles", "Disconnected acyclic graph", "Connected acyclic graph", "Complete graph"],
        correctAnswer: 2,
        explanation: { solution: "Tree = connected + acyclic" }
    },
    {
        id: "gt-tree-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Adding one edge to a tree creates:",
        options: ["Another tree", "Exactly one cycle", "Two trees", "A disconnected graph"],
        correctAnswer: 1,
        explanation: { solution: "Adding edge to tree creates exactly one cycle" }
    },
    {
        id: "gt-tree-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Removing one edge from a tree creates:",
        options: ["Another tree", "A cycle", "Two connected components", "A complete graph"],
        correctAnswer: 2,
        explanation: { solution: "Removing any edge from tree disconnects it into 2 components" }
    },
    {
        id: "gt-tree-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of spanning trees of complete graph Kn is:",
        options: ["n", "n!", "n^(n-2)", "2^n"],
        correctAnswer: 2,
        explanation: { solution: "Cayley's formula: Kn has n^(n-2) spanning trees", formula: "n^(n-2)" }
    },
    {
        id: "gt-tree-006",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of spanning trees of K₄ is (use Cayley's formula):",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "4^(4-2) = 4² = 16" }
    },
    {
        id: "gt-tree-007",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A forest is:",
        options: ["A connected tree", "A graph with cycles", "A disjoint union of trees", "A complete graph"],
        correctAnswer: 2,
        explanation: { solution: "Forest = acyclic graph (disjoint union of trees)" }
    },
    {
        id: "gt-tree-008",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A forest with n vertices and k trees has how many edges?",
        options: ["n-1", "n-k", "n+k", "k-1"],
        correctAnswer: 1,
        explanation: { solution: "Each tree has (vertices - 1) edges, total = n - k edges", formula: "|E| = n - k" }
    },
    // ========== BIPARTITE GRAPHS ==========
    {
        id: "gt-bip-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A graph is bipartite iff:",
        options: ["It has even vertices", "It contains no odd-length cycle", "It is connected", "It has parallel edges"],
        correctAnswer: 1,
        explanation: { solution: "Bipartite iff no odd cycle (2-colorable)" }
    },
    {
        id: "gt-bip-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Every tree is:",
        options: ["Not bipartite", "Bipartite", "Complete", "Regular"],
        correctAnswer: 1,
        explanation: { solution: "Trees have no cycles (hence no odd cycles) → bipartite" }
    },
    {
        id: "gt-bip-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "The chromatic number of a bipartite graph with at least one edge is:",
        options: ["1", "2", "3", "n"],
        correctAnswer: 1,
        explanation: { solution: "Bipartite = 2-colorable → χ(G) = 2" }
    },
    // ========== PLANAR GRAPHS ==========
    {
        id: "gt-planar-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Euler's formula for connected planar graph: v - e + f = ?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
        explanation: { solution: "Euler's formula: v - e + f = 2", formula: "v - e + f = 2" }
    },
    {
        id: "gt-planar-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Maximum edges in simple planar graph with n ≥ 3 vertices:",
        options: ["n-1", "2n-3", "3n-6", "n(n-1)/2"],
        correctAnswer: 2,
        explanation: { solution: "From Euler's formula: e ≤ 3n - 6", formula: "e ≤ 3n - 6" }
    },
    {
        id: "gt-planar-003",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Maximum edges in a planar graph with 8 vertices is:",
        correctAnswer: 18,
        tolerance: 0,
        explanation: { solution: "3(8) - 6 = 18" }
    },
    {
        id: "gt-planar-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "K₅ (complete graph on 5 vertices) is:",
        options: ["Planar", "Non-planar", "Bipartite", "A tree"],
        correctAnswer: 1,
        explanation: { solution: "K₅ has 10 edges > 3(5)-6 = 9, so non-planar by Kuratowski's theorem" }
    },
    {
        id: "gt-planar-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "K₃,₃ (complete bipartite 3,3) is:",
        options: ["Planar", "Non-planar", "A tree", "Disconnected"],
        correctAnswer: 1,
        explanation: { solution: "K₃,₃ is non-planar (Kuratowski subdivision)" }
    },
    {
        id: "gt-planar-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Kuratowski's theorem: A graph is planar iff it contains no subdivision of:",
        options: ["K₄ or K₂,₃", "K₅ or K₃,₃", "K₆ or K₄,₄", "Any cycle"],
        correctAnswer: 1,
        explanation: { solution: "Kuratowski: planar iff no K₅ or K₃,₃ subdivision" }
    },
    // ========== EULERIAN & HAMILTONIAN ==========
    {
        id: "gt-euler-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "An Eulerian circuit exists iff:",
        options: ["All vertices have odd degree", "All vertices have even degree and graph is connected", "At least one vertex has degree 0", "Graph is complete"],
        correctAnswer: 1,
        explanation: { solution: "Eulerian circuit: visit each edge exactly once, return to start. Requires all degrees even." }
    },
    {
        id: "gt-euler-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "An Eulerian path (not cycle) exists iff connected graph has exactly:",
        options: ["0 odd-degree vertices", "1 odd-degree vertex", "2 odd-degree vertices", "All odd-degree vertices"],
        correctAnswer: 2,
        explanation: { solution: "Eulerian path: exactly 2 odd-degree vertices (start and end)" }
    },
    {
        id: "gt-euler-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A Hamiltonian cycle visits:",
        options: ["Every edge exactly once", "Every vertex exactly once and returns", "Only odd-degree vertices", "Only even-degree vertices"],
        correctAnswer: 1,
        explanation: { solution: "Hamiltonian cycle: visit each vertex exactly once, return to start" }
    },
    {
        id: "gt-euler-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Finding Hamiltonian cycle is:",
        options: ["P (polynomial time)", "NP-complete", "Always solvable in O(n)", "Undecidable"],
        correctAnswer: 1,
        explanation: { solution: "Hamiltonian cycle problem is NP-complete" }
    },
    // ========== GRAPH COLORING ==========
    {
        id: "gt-color-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Chromatic number χ(G) is the minimum number of colors to color vertices such that:",
        options: ["All vertices same color", "No two adjacent vertices have same color", "All edges same color", "Maximum colors used"],
        correctAnswer: 1,
        explanation: { solution: "Proper coloring: adjacent vertices get different colors" }
    },
    {
        id: "gt-color-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "χ(Kn) = ?",
        options: ["1", "2", "n-1", "n"],
        correctAnswer: 3,
        explanation: { solution: "Complete graph: every pair adjacent, so need n colors", formula: "χ(Kn) = n" }
    },
    {
        id: "gt-color-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "χ(Cn) for even n = ?",
        options: ["1", "2", "3", "n"],
        correctAnswer: 1,
        explanation: { solution: "Even cycle is bipartite → χ = 2" }
    },
    {
        id: "gt-color-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "χ(Cn) for odd n ≥ 3 is:",
        options: ["1", "2", "3", "n"],
        correctAnswer: 2,
        explanation: { solution: "Odd cycle not bipartite → χ = 3" }
    },
    {
        id: "gt-color-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "For any graph G, χ(G) ≤:",
        options: ["1", "n/2", "Δ(G)", "Δ(G) + 1"],
        correctAnswer: 3,
        explanation: { solution: "χ(G) ≤ Δ + 1 where Δ = maximum degree (greedy coloring bound)", formula: "χ(G) ≤ Δ + 1" }
    },
    {
        id: "gt-color-006",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A graph is 2-colorable iff it is:",
        options: ["Complete", "Bipartite", "Planar", "Connected"],
        correctAnswer: 1,
        explanation: { solution: "2-colorable = bipartite = no odd cycle" }
    },
    // ========== ISOMORPHISM ==========
    {
        id: "gt-iso-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Two graphs are isomorphic if they have:",
        options: ["Same number of edges only", "Same structure (bijection preserving adjacency)", "Same drawing", "Same labels"],
        correctAnswer: 1,
        explanation: { solution: "Isomorphic: same structure up to vertex relabeling" }
    },
    {
        id: "gt-iso-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Isomorphic graphs must have same:",
        options: ["Vertex labels", "Degree sequence", "Drawing", "Color"],
        correctAnswer: 1,
        explanation: { solution: "Isomorphic graphs have same number of vertices, edges, and degree sequence" }
    },
    {
        id: "gt-iso-003",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of non-isomorphic simple graphs on 3 labeled vertices is:",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "0 edges, 1 edge, 2 edges, 3 edges = 4 non-isomorphic graphs on 3 vertices" }
    },
    // ========== DIRECTED GRAPHS ==========
    {
        id: "gt-dig-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "In a directed graph, sum of all in-degrees equals sum of all out-degrees equals:",
        options: ["|V|", "|E|", "2|E|", "|V| + |E|"],
        correctAnswer: 1,
        explanation: { solution: "Each edge contributes 1 to one in-degree and 1 to one out-degree", formula: "Σ in-deg = Σ out-deg = |E|" }
    },
    {
        id: "gt-dig-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A directed graph is strongly connected if:",
        options: ["There's a path from every vertex to every other vertex", "It has no cycles", "It's a DAG", "It has exactly one source"],
        correctAnswer: 0,
        explanation: { solution: "Strongly connected: path exists between every ordered pair of vertices" }
    },
    {
        id: "gt-dig-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A DAG is:",
        options: ["Directed graph with cycles", "Directed Acyclic Graph", "Undirected graph", "Complete directed graph"],
        correctAnswer: 1,
        explanation: { solution: "DAG = Directed Acyclic Graph (no directed cycles)" }
    },
    {
        id: "gt-dig-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Topological sort is possible only for:",
        options: ["Undirected graphs", "Graphs with cycles", "DAGs", "Complete graphs"],
        correctAnswer: 2,
        explanation: { solution: "Topological ordering: linear order where all edges go forward; requires DAG" }
    }
]);

console.log("Exhaustive Graph Theory loaded - ~55 questions");
