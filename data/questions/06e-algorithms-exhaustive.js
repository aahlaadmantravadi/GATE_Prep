/**
 * Algorithms EXHAUSTIVE
 * Sorting, searching, graph algorithms, DP, greedy, divide & conquer
 */

Questions.register([
    // ========== SORTING ALGORITHMS ==========
    {
        id: "alg2-sort-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Bubble sort time complexity: best, worst, average?",
        options: ["O(n), O(n²), O(n²)", "O(n²), O(n²), O(n²)", "O(n log n), O(n²), O(n²)", "O(1), O(n), O(n)"],
        correctAnswer: 0,
        explanation: { solution: "Best O(n) when already sorted, worst/avg O(n²)" }
    },
    {
        id: "alg2-sort-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Selection sort always takes:",
        options: ["O(n)", "O(n log n)", "O(n²) regardless of input", "O(1)"],
        correctAnswer: 2,
        explanation: { solution: "Selection sort: always O(n²), no best/worst difference" }
    },
    {
        id: "alg2-sort-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Insertion sort best case: O(?)",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
        correctAnswer: 2,
        explanation: { solution: "Best case (sorted): O(n), just compares each element once" }
    },
    {
        id: "alg2-sort-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Merge sort time complexity in all cases:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Merge sort: always O(n log n) - divide + merge", formula: "T(n) = 2T(n/2) + O(n)" }
    },
    {
        id: "alg2-sort-005",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Merge sort space complexity:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Merge sort needs O(n) auxiliary space for merging" }
    },
    {
        id: "alg2-sort-006",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Quick sort average case: O(?), worst case: O(?)",
        options: ["O(n log n), O(n²)", "O(n²), O(n log n)", "O(n log n), O(n log n)", "O(n²), O(n²)"],
        correctAnswer: 0,
        explanation: { solution: "Average O(n log n), worst O(n²) (bad pivot choice)" }
    },
    {
        id: "alg2-sort-007",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Quick sort worst case occurs when:",
        options: ["Array is random", "Pivot always median", "Array is already sorted (and pick first/last as pivot)", "Array has unique elements"],
        correctAnswer: 2,
        explanation: { solution: "Worst: unbalanced partitions (e.g., sorted array, bad pivot)" }
    },
    {
        id: "alg2-sort-008",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Heap sort time complexity:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Heap sort: build heap O(n) + n extractions O(log n) = O(n log n)" }
    },
    {
        id: "alg2-sort-009",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Heap sort space complexity (in-place):",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 0,
        explanation: { solution: "Heap sort is in-place: O(1) extra space" }
    },
    {
        id: "alg2-sort-010",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Counting sort time complexity:",
        options: ["O(n log n)", "O(n²)", "O(n + k) where k is range", "O(log n)"],
        correctAnswer: 2,
        explanation: { solution: "Counting sort: O(n + k), works for integer range k", formula: "O(n + k)" }
    },
    {
        id: "alg2-sort-011",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Radix sort time complexity for n d-digit numbers, b base:",
        options: ["O(n log n)", "O(d × (n + b))", "O(n²)", "O(d × n × b)"],
        correctAnswer: 1,
        explanation: { solution: "Radix: d passes of counting sort O(n+b) each", formula: "O(d × (n + b))" }
    },
    {
        id: "alg2-sort-012",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Which sorting algorithms are stable?",
        options: ["Quick sort, Heap sort", "Merge sort, Insertion sort, Bubble sort", "Selection sort, Heap sort", "All sorting algorithms"],
        correctAnswer: 1,
        explanation: { solution: "Stable: Merge, Insertion, Bubble, Counting, Radix. Unstable: Quick, Heap, Selection" }
    },
    {
        id: "alg2-sort-013",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Which is in-place with O(n log n) worst case?",
        options: ["Merge sort", "Quick sort", "Heap sort", "Counting sort"],
        correctAnswer: 2,
        explanation: { solution: "Heap sort: in-place O(1) space + O(n log n) guaranteed" }
    },
    {
        id: "alg2-sort-014",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Lower bound for comparison-based sorting:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Comparison sort lower bound: Ω(n log n)", formula: "Ω(n log n)" }
    },
    // ========== SEARCHING ==========
    {
        id: "alg2-search-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Linear search time complexity:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Linear search: O(n) worst case" }
    },
    {
        id: "alg2-search-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Binary search requires:",
        options: ["Unsorted array", "Sorted array", "Linked list", "Random access not needed"],
        correctAnswer: 1,
        explanation: { solution: "Binary search needs sorted array and random access" }
    },
    {
        id: "alg2-search-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Binary search recurrence:",
        options: ["T(n) = T(n-1) + 1", "T(n) = 2T(n/2) + 1", "T(n) = T(n/2) + 1", "T(n) = T(n/2) + n"],
        correctAnswer: 2,
        explanation: { solution: "T(n) = T(n/2) + O(1) → O(log n)", formula: "T(n) = T(n/2) + O(1)" }
    },
    // ========== GRAPH ALGORITHMS ==========
    {
        id: "alg2-graph-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "BFS traversal uses:",
        options: ["Stack", "Queue", "Heap", "Recursion"],
        correctAnswer: 1,
        explanation: { solution: "BFS uses queue for level-order traversal" }
    },
    {
        id: "alg2-graph-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "DFS traversal uses:",
        options: ["Queue", "Stack (or recursion)", "Heap", "Linked list"],
        correctAnswer: 1,
        explanation: { solution: "DFS uses stack (explicit or call stack)" }
    },
    {
        id: "alg2-graph-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "BFS/DFS time complexity for adjacency list:",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
        correctAnswer: 2,
        explanation: { solution: "Visit all vertices and edges: O(V + E)", formula: "O(V + E)" }
    },
    {
        id: "alg2-graph-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "BFS/DFS time complexity for adjacency matrix:",
        options: ["O(V)", "O(V²)", "O(V + E)", "O(E)"],
        correctAnswer: 1,
        explanation: { solution: "Check all V² matrix entries: O(V²)", formula: "O(V²)" }
    },
    {
        id: "alg2-graph-005",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "BFS gives shortest path in:",
        options: ["Weighted graphs", "Unweighted graphs", "DAGs only", "All graphs"],
        correctAnswer: 1,
        explanation: { solution: "BFS gives shortest path (fewest edges) in unweighted graphs" }
    },
    {
        id: "alg2-graph-006",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's algorithm finds shortest path in:",
        options: ["Unweighted graphs only", "Non-negative weighted graphs", "Graphs with negative edges", "All graphs"],
        correctAnswer: 1,
        explanation: { solution: "Dijkstra: single-source shortest path, non-negative weights" }
    },
    {
        id: "alg2-graph-007",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's time complexity with min-heap:",
        options: ["O(V)", "O(V²)", "O((V + E) log V)", "O(V × E)"],
        correctAnswer: 2,
        explanation: { solution: "Min-heap: O((V + E) log V)", formula: "O((V + E) log V)" }
    },
    {
        id: "alg2-graph-008",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Bellman-Ford handles:",
        options: ["Only positive weights", "Negative weights (but not negative cycles)", "Unweighted only", "All graphs without restriction"],
        correctAnswer: 1,
        explanation: { solution: "Bellman-Ford: works with negative edges, detects negative cycles" }
    },
    {
        id: "alg2-graph-009",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Bellman-Ford time complexity:",
        options: ["O(V log V)", "O(V × E)", "O(V + E)", "O(V²)"],
        correctAnswer: 1,
        explanation: { solution: "V-1 iterations over all E edges: O(V × E)", formula: "O(V × E)" }
    },
    {
        id: "alg2-graph-010",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Floyd-Warshall finds:",
        options: ["Single-source shortest paths", "All-pairs shortest paths", "Minimum spanning tree", "Topological sort"],
        correctAnswer: 1,
        explanation: { solution: "Floyd-Warshall: all-pairs shortest paths O(V³)" }
    },
    {
        id: "alg2-graph-011",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Floyd-Warshall time complexity:",
        options: ["O(V²)", "O(V³)", "O(V × E)", "O(V + E)"],
        correctAnswer: 1,
        explanation: { solution: "Triple nested loop over vertices: O(V³)", formula: "O(V³)" }
    },
    // ========== MST ==========
    {
        id: "alg2-mst-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Prim's algorithm builds MST by:",
        options: ["Adding minimum edge globally", "Growing tree from a vertex, adding min edge to tree", "Sorting all edges first", "Using DFS"],
        correctAnswer: 1,
        explanation: { solution: "Prim's: greedy, grows tree by adding minimum edge connecting tree to non-tree vertex" }
    },
    {
        id: "alg2-mst-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Kruskal's algorithm builds MST by:",
        options: ["Growing from one vertex", "Adding edges in sorted order if no cycle formed", "Random edge selection", "Using BFS"],
        correctAnswer: 1,
        explanation: { solution: "Kruskal's: sort edges, add if no cycle (use Union-Find)" }
    },
    {
        id: "alg2-mst-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Kruskal's time complexity (with sorting and Union-Find):",
        options: ["O(V²)", "O(E log E) or O(E log V)", "O(V + E)", "O(V³)"],
        correctAnswer: 1,
        explanation: { solution: "Sorting: O(E log E), Union-Find: O(α(V)) per op ≈ O(1)", formula: "O(E log E)" }
    },
    {
        id: "alg2-mst-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "MST of graph with V vertices has how many edges?",
        options: ["V", "V-1", "E", "V+1"],
        correctAnswer: 1,
        explanation: { solution: "Tree with V vertices has V-1 edges", formula: "Edges = V - 1" }
    },
    // ========== TOPOLOGICAL SORT ==========
    {
        id: "alg2-topo-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Topological sort is possible only for:",
        options: ["Undirected graphs", "Cyclic graphs", "DAG (Directed Acyclic Graph)", "Complete graphs"],
        correctAnswer: 2,
        explanation: { solution: "Topological ordering only exists for DAGs" }
    },
    {
        id: "alg2-topo-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Topological sort can be done using:",
        options: ["BFS only (Kahn's algorithm)", "DFS only", "Both BFS (Kahn's) and DFS", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "BFS (Kahn's with in-degree), DFS (reverse of finish times)" }
    },
    // ========== DYNAMIC PROGRAMMING ==========
    {
        id: "alg2-dp-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "DP is applicable when problem has:",
        options: ["Only optimal substructure", "Only overlapping subproblems", "Both optimal substructure and overlapping subproblems", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "DP: optimal substructure + overlapping subproblems" }
    },
    {
        id: "alg2-dp-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Memoization is:",
        options: ["Bottom-up approach", "Top-down approach with caching", "Greedy technique", "Divide and conquer"],
        correctAnswer: 1,
        explanation: { solution: "Memoization: top-down recursion with result caching" }
    },
    {
        id: "alg2-dp-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Tabulation is:",
        options: ["Top-down approach", "Bottom-up iterative approach", "Greedy technique", "Graph traversal"],
        correctAnswer: 1,
        explanation: { solution: "Tabulation: bottom-up, fill table from base cases" }
    },
    {
        id: "alg2-dp-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Fibonacci using DP: F(n) = F(n-1) + F(n-2). Time complexity with memoization:",
        options: ["O(2^n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 2,
        explanation: { solution: "Each subproblem solved once: O(n)" }
    },
    {
        id: "alg2-dp-005",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "0/1 Knapsack DP time complexity with n items, capacity W:",
        options: ["O(n)", "O(W)", "O(n × W)", "O(2^n)"],
        correctAnswer: 2,
        explanation: { solution: "DP table: n × W entries, O(1) per entry", formula: "O(n × W)" }
    },
    {
        id: "alg2-dp-006",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Longest Common Subsequence (LCS) of strings m and n length: DP time:",
        options: ["O(m + n)", "O(m × n)", "O(m × n × min(m,n))", "O(2^(m+n))"],
        correctAnswer: 1,
        explanation: { solution: "DP table: m × n, O(1) per cell", formula: "O(m × n)" }
    },
    {
        id: "alg2-dp-007",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Matrix Chain Multiplication DP time complexity for n matrices:",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2^n)"],
        correctAnswer: 2,
        explanation: { solution: "O(n³) time, O(n²) space", formula: "O(n³)" }
    },
    {
        id: "alg2-dp-008",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Longest Increasing Subsequence naive DP: O(?), optimized: O(?)",
        options: ["O(n²), O(n log n)", "O(n), O(log n)", "O(n log n), O(n²)", "O(2^n), O(n)"],
        correctAnswer: 0,
        explanation: { solution: "DP O(n²), with binary search O(n log n)" }
    },
    // ========== GREEDY ==========
    {
        id: "alg2-greedy-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Greedy algorithm makes:",
        options: ["Globally optimal choice at each step", "Locally optimal choice hoping for global optimum", "Random choices", "All possible choices"],
        correctAnswer: 1,
        explanation: { solution: "Greedy: local optimal at each step, may not always give global optimal" }
    },
    {
        id: "alg2-greedy-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Activity Selection (non-overlapping intervals) is solved by:",
        options: ["DP only", "Greedy (sort by finish time)", "Divide and conquer", "Backtracking"],
        correctAnswer: 1,
        explanation: { solution: "Greedy: sort by finish time, pick earliest finishing non-overlapping" }
    },
    {
        id: "alg2-greedy-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Fractional Knapsack can be solved by:",
        options: ["Greedy (best value/weight ratio)", "0/1 DP only", "Brute force only", "Cannot be solved efficiently"],
        correctAnswer: 0,
        explanation: { solution: "Fractional: greedy by value/weight ratio works optimally" }
    },
    {
        id: "alg2-greedy-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Huffman coding is a:",
        options: ["DP algorithm", "Greedy algorithm for optimal prefix codes", "Divide and conquer", "Graph algorithm"],
        correctAnswer: 1,
        explanation: { solution: "Huffman: greedy, builds tree by combining lowest frequency nodes" }
    },
    {
        id: "alg2-greedy-005",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Huffman coding time complexity:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
        correctAnswer: 1,
        explanation: { solution: "n-1 merges, each with heap operation O(log n): O(n log n)" }
    },
    // ========== DIVIDE & CONQUER ==========
    {
        id: "alg2-dc-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Divide and Conquer breaks problem into:",
        options: ["Overlapping subproblems", "Independent subproblems", "Same-size problems", "Larger problems"],
        correctAnswer: 1,
        explanation: { solution: "D&C: divide into non-overlapping independent subproblems" }
    },
    {
        id: "alg2-dc-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Master Theorem: T(n) = aT(n/b) + f(n). If f(n) = Θ(n^c) and c < log_b(a):",
        options: ["T(n) = Θ(f(n))", "T(n) = Θ(n^c log n)", "T(n) = Θ(n^(log_b a))", "Cannot determine"],
        correctAnswer: 2,
        explanation: { solution: "Case 1: T(n) = Θ(n^(log_b a))", formula: "T(n) = Θ(n^(log_b a))" }
    },
    {
        id: "alg2-dc-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Master Theorem: if c = log_b(a):",
        options: ["T(n) = Θ(n^c)", "T(n) = Θ(n^c log n)", "T(n) = Θ(n^(log_b a))", "T(n) = Θ(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Case 2: T(n) = Θ(n^c log n)", formula: "T(n) = Θ(n^c log n)" }
    },
    {
        id: "alg2-dc-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Master Theorem: if c > log_b(a):",
        options: ["T(n) = Θ(n^(log_b a))", "T(n) = Θ(n^c log n)", "T(n) = Θ(f(n)) = Θ(n^c)", "Cannot determine"],
        correctAnswer: 2,
        explanation: { solution: "Case 3: T(n) = Θ(f(n))", formula: "T(n) = Θ(n^c)" }
    },
    {
        id: "alg2-dc-005",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Merge sort recurrence T(n) = 2T(n/2) + Θ(n): solution?",
        options: ["Θ(n)", "Θ(n log n)", "Θ(n²)", "Θ(log n)"],
        correctAnswer: 1,
        explanation: { solution: "a=2, b=2, c=1. log_2(2)=1=c → Case 2: Θ(n log n)" }
    },
    {
        id: "alg2-dc-006",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Strassen's matrix multiplication: T(n) = 7T(n/2) + Θ(n²). Complexity:",
        options: ["Θ(n²)", "Θ(n³)", "Θ(n^(log_2 7)) ≈ Θ(n^2.81)", "Θ(n log n)"],
        correctAnswer: 2,
        explanation: { solution: "a=7, b=2, c=2. log_2(7)≈2.81 > 2 → Θ(n^2.81)", formula: "O(n^2.81)" }
    },
    // ========== BACKTRACKING ==========
    {
        id: "alg2-bt-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Backtracking",
        question: "Backtracking systematically explores:",
        options: ["Only optimal paths", "All possibilities with pruning", "Random paths", "Greedy paths"],
        correctAnswer: 1,
        explanation: { solution: "Backtracking: try options, prune invalid branches, backtrack on failure" }
    },
    {
        id: "alg2-bt-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Backtracking",
        question: "N-Queens problem is typically solved by:",
        options: ["Greedy", "Backtracking", "Dynamic programming", "BFS"],
        correctAnswer: 1,
        explanation: { solution: "N-Queens: place queens row by row, backtrack on conflicts" }
    },
    {
        id: "alg2-bt-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Backtracking",
        question: "Graph Coloring uses:",
        options: ["BFS", "Backtracking", "Sorting", "Hashing"],
        correctAnswer: 1,
        explanation: { solution: "Graph coloring: try colors, backtrack if adjacent same color" }
    }
]);

console.log("Exhaustive Algorithms loaded - ~65 questions");
