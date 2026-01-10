/**
 * Algorithms SUPPLEMENT - DP Details, Complexity Analysis, Graph Algorithms

 */

Questions.register([
    // ========== GRAPH REPRESENTATION ==========
    {
        id: "algo3-graph-001",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Adjacency matrix space complexity:",
        options: ["O(V)", "O(E)", "O(V²)", "O(V+E)"],
        correctAnswer: 2,
        explanation: { solution: "Matrix: V×V = O(V²) regardless of edges" }
    },
    {
        id: "algo3-graph-002",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Adjacency list space complexity:",
        options: ["O(V²)", "O(V+E)", "O(E)", "O(V)"],
        correctAnswer: 1,
        explanation: { solution: "List: O(V) vertices + O(E) edges = O(V+E)" }
    },
    {
        id: "algo3-graph-003",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "For dense graphs (E ≈ V²), prefer:",
        options: ["Adjacency list", "Adjacency matrix", "Edge list", "Incidence matrix"],
        correctAnswer: 1,
        explanation: { solution: "Dense: matrix better (O(1) edge lookup)" }
    },
    {
        id: "algo3-graph-004",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "For sparse graphs (E << V²), prefer:",
        options: ["Adjacency matrix", "Adjacency list", "Full matrix", "2D array"],
        correctAnswer: 1,
        explanation: { solution: "Sparse: list saves space O(V+E) vs O(V²)" }
    },
    // ========== MST ALGORITHMS ==========
    {
        id: "algo3-mst-001",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Prim's algorithm time complexity with binary heap and adjacency list:",
        options: ["O(V²)", "O(E log V)", "O(E + V)", "O(V log V)"],
        correctAnswer: 1,
        explanation: { solution: "Prim with binary heap: O((V+E) log V) = O(E log V)" }
    },
    {
        id: "algo3-mst-002",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Kruskal's algorithm time complexity:",
        options: ["O(V²)", "O(E log E) = O(E log V)", "O(V+E)", "O(E)"],
        correctAnswer: 1,
        explanation: { solution: "Kruskal: sort edges O(E log E), union-find O(E α(V))", formula: "O(E log E)" }
    },
    {
        id: "algo3-mst-003",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "If edges are already sorted, Kruskal's complexity becomes:",
        options: ["O(E log E)", "O(E + V) using union-find", "O(V²)", "O(E²)"],
        correctAnswer: 1,
        explanation: { solution: "Pre-sorted: only union-find operations O(E α(V)) ≈ O(E+V)" }
    },
    // ========== SHORTEST PATH ==========
    {
        id: "algo3-sp-001",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's algorithm with binary heap:",
        options: ["O(V²)", "O((V+E) log V)", "O(VE)", "O(V log V)"],
        correctAnswer: 1,
        explanation: { solution: "Dijkstra with min-heap: O((V+E) log V)" }
    },
    {
        id: "algo3-sp-002",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's algorithm with adjacency matrix (no heap):",
        options: ["O(V²)", "O(E log V)", "O(VE)", "O(V+E)"],
        correctAnswer: 0,
        explanation: { solution: "Simple Dijkstra: O(V) extract-min × V iterations = O(V²)" }
    },
    {
        id: "algo3-sp-003",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Bellman-Ford time complexity:",
        options: ["O(V²)", "O(E log V)", "O(VE)", "O(V+E)"],
        correctAnswer: 2,
        explanation: { solution: "Bellman-Ford: V-1 iterations × E edges = O(VE)" }
    },
    {
        id: "algo3-sp-004",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Bellman-Ford can handle:",
        options: ["Only positive weights", "Negative edge weights (detects negative cycles)", "Only unweighted graphs", "Only undirected graphs"],
        correctAnswer: 1,
        explanation: { solution: "Bellman-Ford: handles negative edges, detects negative cycles" }
    },
    {
        id: "algo3-sp-005",
        type: "MCQ",
        topic: "algo",
        subtopic: "Graph Algorithms",
        question: "Dijkstra fails with negative edge weights because:",
        options: ["Uses wrong data structure", "Greedy assumption violated (node may need revisiting)", "Cannot handle graphs", "Too slow"],
        correctAnswer: 1,
        explanation: { solution: "Dijkstra: greedy, once visited node is final (wrong with neg weights)" }
    },
    // ========== DYNAMIC PROGRAMMING ==========
    {
        id: "algo3-dp-001",
        type: "MCQ",
        topic: "algo",
        subtopic: "Dynamic Programming",
        question: "LCS (Longest Common Subsequence) of strings length m and n:",
        options: ["O(m+n)", "O(mn)", "O(m²+n²)", "O(2^n)"],
        correctAnswer: 1,
        explanation: { solution: "LCS: O(mn) time and O(mn) space", formula: "O(mn)" }
    },
    {
        id: "algo3-dp-002",
        type: "MCQ",
        topic: "algo",
        subtopic: "Dynamic Programming",
        question: "Matrix Chain Multiplication for n matrices:",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2^n)"],
        correctAnswer: 2,
        explanation: { solution: "MCM: O(n³) time, O(n²) space", formula: "O(n³)" }
    },
    {
        id: "algo3-dp-003",
        type: "MCQ",
        topic: "algo",
        subtopic: "Dynamic Programming",
        question: "Number of ways to parenthesize n matrices (Catalan number):",
        options: ["n!", "2^n", "C(2n,n)/(n+1)", "n²"],
        correctAnswer: 2,
        explanation: { solution: "Catalan: C(2n,n)/(n+1) = exponential ways", formula: "C_{n-1} = (2n-2)! / (n!(n-1)!)" }
    },
    {
        id: "algo3-dp-004",
        type: "MCQ",
        topic: "algo",
        subtopic: "Dynamic Programming",
        question: "0/1 Knapsack with n items and capacity W:",
        options: ["O(n)", "O(nW)", "O(n²)", "O(2^n)"],
        correctAnswer: 1,
        explanation: { solution: "0/1 Knapsack: O(nW) pseudo-polynomial", formula: "O(nW)" }
    },
    {
        id: "algo3-dp-005",
        type: "MCQ",
        topic: "algo",
        subtopic: "Dynamic Programming",
        question: "Subset Sum for n elements and target M:",
        options: ["O(n)", "O(nM)", "O(n²)", "O(2^n) in worst case"],
        correctAnswer: 1,
        explanation: { solution: "Subset sum DP: O(n×M) pseudo-polynomial", formula: "O(nM)" }
    },
    // ========== COMPLEXITY ANALYSIS ==========
    {
        id: "algo3-comp-001",
        type: "MCQ",
        topic: "algo",
        subtopic: "Complexity",
        question: "log E in terms of V for simple graph:",
        options: ["O(log V)", "O(V)", "O(V²)", "O(log E)"],
        correctAnswer: 0,
        explanation: { solution: "E ≤ V(V-1)/2, so log E = O(log V²) = O(2 log V) = O(log V)" }
    },
    {
        id: "algo3-comp-002",
        type: "MCQ",
        topic: "algo",
        subtopic: "Complexity",
        question: "E in terms of V for complete graph:",
        options: ["O(V)", "O(V²)", "O(V log V)", "O(V³)"],
        correctAnswer: 1,
        explanation: { solution: "Complete graph: E = V(V-1)/2 = O(V²)" }
    }
]);

console.log("Algorithms Supplement loaded - ~22 questions");
