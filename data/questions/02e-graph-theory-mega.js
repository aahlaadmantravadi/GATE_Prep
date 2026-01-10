/**
 * Graph Theory MEGA EXPANSION - All Graph Types, Formulas, Properties

 */

Questions.register([
    // ========== BASIC GRAPH THEORY ==========
    {
        id: "gt-basic-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Sum of degrees of all vertices in a graph with e edges:",
        options: ["e", "2e", "e/2", "e²"],
        correctAnswer: 1,
        explanation: { solution: "Handshaking lemma: Σdeg(v) = 2e" }
    },
    {
        id: "gt-basic-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "In simple graph, at least ___ vertices have same degree:",
        options: ["0", "1", "2", "n"],
        correctAnswer: 2,
        explanation: { solution: "Pigeonhole: in simple graph of n vertices, at least 2 have same degree" }
    },
    {
        id: "gt-basic-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Maximum edges in simple undirected graph with n vertices:",
        options: ["n", "n(n-1)", "n(n-1)/2", "2n"],
        correctAnswer: 2,
        explanation: { solution: "Choose 2 from n: C(n,2) = n(n-1)/2", formula: "n(n-1)/2" }
    },
    {
        id: "gt-basic-004",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "For a sequence to be graphical (valid degree sequence), sum of degrees must be:",
        options: ["Odd", "Even", "Equal to n", "Prime"],
        correctAnswer: 1,
        explanation: { solution: "Σdeg = 2e must be even" }
    },
    // ========== COMPLETE GRAPH ==========
    {
        id: "gt-complete-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "In complete graph Kₙ, each vertex has degree:",
        options: ["n", "n-1", "n/2", "2n"],
        correctAnswer: 1,
        explanation: { solution: "Each vertex connected to all others: degree = n-1" }
    },
    {
        id: "gt-complete-002",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Number of edges in K₁₀ = ?",
        correctAnswer: 45,
        tolerance: 0,
        explanation: { solution: "n(n-1)/2 = 10×9/2 = 45", formula: "n(n-1)/2" }
    },
    {
        id: "gt-complete-003",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Number of edges in K₆ = ?",
        correctAnswer: 15,
        tolerance: 0,
        explanation: { solution: "6×5/2 = 15" }
    },
    // ========== REGULAR GRAPHS ==========
    {
        id: "gt-regular-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "A k-regular graph is one where:",
        options: ["All vertices have degree k", "Graph has k vertices", "Graph has k edges", "Graph has k components"],
        correctAnswer: 0,
        explanation: { solution: "k-regular: every vertex has degree k" }
    },
    {
        id: "gt-regular-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "In k-regular graph with n vertices, number of edges:",
        options: ["nk", "nk/2", "n+k", "n-k"],
        correctAnswer: 1,
        explanation: { solution: "Σdeg = nk = 2e, so e = nk/2", formula: "e = nk/2" }
    },
    {
        id: "gt-regular-003",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Edges in 3-regular graph with 8 vertices = ?",
        correctAnswer: 12,
        tolerance: 0,
        explanation: { solution: "e = nk/2 = 8×3/2 = 12" }
    },
    // ========== CYCLE GRAPH ==========
    {
        id: "gt-cycle-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "In cycle graph Cₙ, degree of every vertex is:",
        options: ["1", "2", "n-1", "n"],
        correctAnswer: 1,
        explanation: { solution: "Cycle: each vertex has exactly 2 neighbors" }
    },
    {
        id: "gt-cycle-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Number of edges in Cₙ:",
        options: ["n-1", "n", "n+1", "2n"],
        correctAnswer: 1,
        explanation: { solution: "Cycle has exactly n edges" }
    },
    {
        id: "gt-cycle-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Every cycle graph is:",
        options: ["Complete graph", "2-regular graph", "Tree", "Bipartite always"],
        correctAnswer: 1,
        explanation: { solution: "Cycle Cₙ: every vertex has degree 2, so 2-regular" }
    },
    // ========== WHEEL GRAPH ==========
    {
        id: "gt-wheel-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Wheel graph Wₙ is formed by adding a hub to:",
        options: ["Kₙ", "Cₙ₋₁", "Path Pₙ", "Tree"],
        correctAnswer: 1,
        explanation: { solution: "Wₙ = hub + Cₙ₋₁ (cycle with n-1 vertices)" }
    },
    {
        id: "gt-wheel-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Wheel Wₙ has how many edges?",
        options: ["n", "2n", "2(n-1)", "n-1"],
        correctAnswer: 2,
        explanation: { solution: "n-1 cycle edges + n-1 spokes = 2(n-1)", formula: "2(n-1)" }
    },
    {
        id: "gt-wheel-003",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Edges in W₅ = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: { solution: "2(5-1) = 8" }
    },
    // ========== BIPARTITE GRAPHS ==========
    {
        id: "gt-bip-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Bipartite graph cannot contain:",
        options: ["Even cycles", "Odd cycles", "Paths", "Trees"],
        correctAnswer: 1,
        explanation: { solution: "Bipartite ⟺ no odd-length cycles" }
    },
    {
        id: "gt-bip-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Maximum edges in bipartite graph with n vertices:",
        options: ["n²", "n(n-1)/2", "⌊n²/4⌋", "n"],
        correctAnswer: 2,
        explanation: { solution: "Max when partitions equal: (n/2)² = n²/4", formula: "⌊n²/4⌋" }
    },
    {
        id: "gt-bip-003",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Maximum edges in bipartite graph with 10 vertices = ?",
        correctAnswer: 25,
        tolerance: 0,
        explanation: { solution: "10²/4 = 25 (partitions of 5 each)" }
    },
    {
        id: "gt-bip-004",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Complete bipartite Km,n has edges:",
        options: ["m+n", "m×n", "(m+n)/2", "(m-n)"],
        correctAnswer: 1,
        explanation: { solution: "Each of m vertices connected to each of n: mn edges", formula: "m×n" }
    },
    {
        id: "gt-bip-005",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Edges in K₃,₄ = ?",
        correctAnswer: 12,
        tolerance: 0,
        explanation: { solution: "3 × 4 = 12" }
    },
    {
        id: "gt-bip-006",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Δ(Km,n) (maximum degree) = ?",
        options: ["m", "n", "max(m,n)", "min(m,n)"],
        correctAnswer: 2,
        explanation: { solution: "Max degree = max(m,n)" }
    },
    // ========== STAR GRAPH ==========
    {
        id: "gt-star-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Star graph K₁,ₙ₋₁ has ___ edges:",
        options: ["n", "n-1", "n(n-1)/2", "2n"],
        correctAnswer: 1,
        explanation: { solution: "Star: 1 hub connected to n-1 leaves = n-1 edges" }
    },
    {
        id: "gt-star-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Maximum degree in K₁,ₙ₋₁:",
        options: ["1", "n-1", "n", "2"],
        correctAnswer: 1,
        explanation: { solution: "Hub has degree n-1" }
    },
    // ========== COMPLEMENT GRAPH ==========
    {
        id: "gt-comp-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "If G has e edges and n vertices, complement G̅ has edges:",
        options: ["e", "n(n-1)/2 - e", "n²-e", "2e"],
        correctAnswer: 1,
        explanation: { solution: "G̅ has edges not in G: C(n,2) - e", formula: "n(n-1)/2 - e" }
    },
    {
        id: "gt-comp-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "If vertex v has degree d in G, its degree in G̅ is:",
        options: ["d", "n-d", "n-1-d", "d-1"],
        correctAnswer: 2,
        explanation: { solution: "In G̅: connected to all except those in G: n-1-d" }
    },
    {
        id: "gt-comp-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Self-complementary graph exists only if n ≡ ____ (mod 4):",
        options: ["0 or 1", "2 or 3", "0 only", "Any n"],
        correctAnswer: 0,
        explanation: { solution: "Self-complement: e = n(n-1)/4, so n(n-1) divisible by 4" }
    },
    {
        id: "gt-comp-004",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Edges in self-complementary graph with 5 vertices = ?",
        correctAnswer: 5,
        tolerance: 0,
        explanation: { solution: "e = n(n-1)/4 = 5×4/4 = 5" }
    },
    // ========== HYPERCUBE ==========
    {
        id: "gt-hyper-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Hypercube Qₙ has ___ vertices:",
        options: ["n", "2n", "2ⁿ", "n²"],
        correctAnswer: 2,
        explanation: { solution: "Qₙ has 2ⁿ vertices (all n-bit strings)", formula: "2ⁿ" }
    },
    {
        id: "gt-hyper-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Hypercube Qₙ has ___ edges:",
        options: ["n×2ⁿ", "n×2ⁿ⁻¹", "2ⁿ", "2ⁿ⁻¹"],
        correctAnswer: 1,
        explanation: { solution: "Each vertex has degree n, so edges = n×2ⁿ/2 = n×2ⁿ⁻¹", formula: "n×2^(n-1)" }
    },
    {
        id: "gt-hyper-003",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Edges in Q₄ = ?",
        correctAnswer: 32,
        tolerance: 0,
        explanation: { solution: "4 × 2³ = 4 × 8 = 32" }
    },
    {
        id: "gt-hyper-004",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Hypercube Qₙ is always:",
        options: ["Complete graph", "Bipartite graph", "Tree", "Cycle"],
        correctAnswer: 1,
        explanation: { solution: "Qₙ: vertices with even 1s vs odd 1s form bipartition" }
    },
    // ========== LINE GRAPH ==========
    {
        id: "gt-line-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Line graph L(G) has vertices representing:",
        options: ["Vertices of G", "Edges of G", "Paths of G", "Cycles of G"],
        correctAnswer: 1,
        explanation: { solution: "L(G): each edge of G becomes a vertex in L(G)" }
    },
    {
        id: "gt-line-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Two vertices in L(G) are adjacent if corresponding edges in G:",
        options: ["Are parallel", "Share a common vertex", "Are disjoint", "Form a cycle"],
        correctAnswer: 1,
        explanation: { solution: "Adjacent in L(G) iff share endpoint in G" }
    },
    {
        id: "gt-line-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Line graph of Cₙ is:",
        options: ["Kₙ", "Cₙ", "Pₙ", "Star"],
        correctAnswer: 1,
        explanation: { solution: "L(Cₙ) ≅ Cₙ (cycle's line graph is also cycle)" }
    },
    // ========== ISOMORPHISM ==========
    {
        id: "gt-iso-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Two graphs are isomorphic if there exists ___ between vertex sets:",
        options: ["Any function", "Bijection preserving adjacency", "Surjection", "Only identity"],
        correctAnswer: 1,
        explanation: { solution: "Isomorphism: bijection where (u,v)∈E₁ ⟺ (f(u),f(v))∈E₂" }
    },
    {
        id: "gt-iso-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Isomorphic graphs must have same:",
        options: ["Vertex labels", "Number of vertices, edges, degree sequence", "Drawing", "Edge labels"],
        correctAnswer: 1,
        explanation: { solution: "Invariants: |V|, |E|, degree sequence must match" }
    },
    {
        id: "gt-iso-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Graph isomorphism problem is in complexity class:",
        options: ["P", "NP (but not known NP-complete)", "NP-complete", "EXPTIME"],
        correctAnswer: 1,
        explanation: { solution: "GI is in NP, not known to be P or NP-complete" }
    },
    // ========== TREES ==========
    {
        id: "gt-tree-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Tree with n vertices has ___ edges:",
        options: ["n", "n-1", "n+1", "2n"],
        correctAnswer: 1,
        explanation: { solution: "Tree: connected acyclic, so e = n-1", formula: "n-1" }
    },
    {
        id: "gt-tree-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "In a tree, there is exactly ___ path between any two vertices:",
        options: ["0", "1", "2", "n"],
        correctAnswer: 1,
        explanation: { solution: "Tree: unique path between any pair" }
    },
    {
        id: "gt-tree-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Adding any edge to a tree creates:",
        options: ["Another tree", "Exactly one cycle", "Disconnected graph", "Multiple cycles"],
        correctAnswer: 1,
        explanation: { solution: "Tree + edge = exactly one cycle" }
    },
    {
        id: "gt-tree-004",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Removing any edge from a tree:",
        options: ["Keeps it connected", "Disconnects it", "Creates a cycle", "No effect"],
        correctAnswer: 1,
        explanation: { solution: "Tree has no redundant edges; removing any disconnects" }
    },
    {
        id: "gt-tree-005",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Number of labeled trees with 4 vertices (Cayley's formula) = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "Cayley: n^(n-2) = 4² = 16", formula: "n^(n-2)" }
    },
    // ========== EULERIAN & HAMILTONIAN ==========
    {
        id: "gt-euler-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Eulerian circuit exists iff:",
        options: ["All vertices have odd degree", "All vertices have even degree", "Exactly 2 odd-degree vertices", "Graph is complete"],
        correctAnswer: 1,
        explanation: { solution: "Euler circuit: connected, all degrees even" }
    },
    {
        id: "gt-euler-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Eulerian path (not circuit) exists iff:",
        options: ["0 odd-degree vertices", "Exactly 2 odd-degree vertices", "All vertices odd", "1 odd vertex"],
        correctAnswer: 1,
        explanation: { solution: "Euler path: connected, exactly 2 odd-degree vertices" }
    },
    {
        id: "gt-ham-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Hamiltonian path visits:",
        options: ["Every edge once", "Every vertex once", "Some vertices", "Only odd-degree vertices"],
        correctAnswer: 1,
        explanation: { solution: "Hamiltonian: visits each vertex exactly once" }
    },
    {
        id: "gt-ham-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Dirac's theorem: Simple graph with n≥3 vertices is Hamiltonian if degree of every vertex ≥:",
        options: ["n/3", "n/2", "n-1", "2"],
        correctAnswer: 1,
        explanation: { solution: "Dirac: deg(v) ≥ n/2 for all v implies Hamiltonian" }
    },
    // ========== PLANAR GRAPHS ==========
    {
        id: "gt-planar-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Euler's formula for connected planar graph: V - E + F = ?",
        options: ["0", "1", "2", "-1"],
        correctAnswer: 2,
        explanation: { solution: "V - E + F = 2", formula: "V - E + F = 2" }
    },
    {
        id: "gt-planar-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "For simple connected planar graph with V≥3: E ≤ ?",
        options: ["V", "2V", "3V - 6", "V²"],
        correctAnswer: 2,
        explanation: { solution: "E ≤ 3V - 6 for planar graphs", formula: "E ≤ 3V - 6" }
    },
    {
        id: "gt-planar-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "K₅ is:",
        options: ["Planar", "Non-planar", "Tree", "Bipartite"],
        correctAnswer: 1,
        explanation: { solution: "K₅ is non-planar (violates E ≤ 3V-6: 10 > 9)" }
    },
    {
        id: "gt-planar-004",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "K₃,₃ is:",
        options: ["Planar", "Non-planar", "Tree", "Complete graph"],
        correctAnswer: 1,
        explanation: { solution: "K₃,₃ is non-planar (Kuratowski)" }
    },
    {
        id: "gt-planar-005",
        type: "NAT",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Faces in a planar connected graph with 8 vertices, 12 edges = ?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "F = 2 - V + E = 2 - 8 + 12 = 6" }
    },
    // ========== CHROMATIC NUMBER ==========
    {
        id: "gt-color-001",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Chromatic number χ(G) is minimum number of:",
        options: ["Vertices", "Edges", "Colors to properly color vertices", "Components"],
        correctAnswer: 2,
        explanation: { solution: "χ(G): min colors so adjacent vertices have different colors" }
    },
    {
        id: "gt-color-002",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "χ(Kₙ) = ?",
        options: ["1", "2", "n", "n-1"],
        correctAnswer: 2,
        explanation: { solution: "Complete graph: each vertex needs unique color, χ(Kₙ)=n" }
    },
    {
        id: "gt-color-003",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "χ(Cₙ) for even n = ?",
        options: ["1", "2", "3", "n"],
        correctAnswer: 1,
        explanation: { solution: "Even cycle: bipartite, χ = 2" }
    },
    {
        id: "gt-color-004",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "χ(Cₙ) for odd n = ?",
        options: ["1", "2", "3", "n"],
        correctAnswer: 2,
        explanation: { solution: "Odd cycle: not bipartite, χ = 3" }
    },
    {
        id: "gt-color-005",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "χ(G) = 2 iff G is:",
        options: ["Complete", "Bipartite (and non-empty)", "Tree", "Cycle"],
        correctAnswer: 1,
        explanation: { solution: "χ(G) = 2 ⟺ G is bipartite (2-colorable)" }
    },
    {
        id: "gt-color-006",
        type: "MCQ",
        topic: "discrete",
        subtopic: "Graph Theory",
        question: "Four Color Theorem: Every planar graph has χ ≤ ?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: { solution: "Planar graphs are 4-colorable" }
    }
]);

console.log("Graph Theory Mega Expansion loaded - ~65 questions");
