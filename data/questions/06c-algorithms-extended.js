/**
 * Algorithms Extended - Comprehensive Coverage
 * Sorting, Searching, Graph Algorithms, DP, Greedy
 */

Questions.register([
    // ========== SORTING DETAILED ==========
    {
        id: "algo-sort-010",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Insertion sort time complexity on a sorted array is:",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
        correctAnswer: 2,
        explanation: { solution: "Already sorted = no shifts needed, just n comparisons = O(n)" }
    },
    {
        id: "algo-sort-011",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Selection sort always makes exactly _____ swaps:",
        options: ["n", "n-1", "n(n-1)/2", "log n"],
        correctAnswer: 1,
        explanation: { solution: "One swap per pass to put minimum in correct position, n-1 passes" }
    },
    {
        id: "algo-sort-012",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Bubble sort best case (already sorted) is:",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
        correctAnswer: 2,
        explanation: { solution: "Optimized bubble sort with early exit flag: one pass with no swaps = O(n)" }
    },
    {
        id: "algo-sort-013",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Merge sort space complexity is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Requires O(n) auxiliary array for merging" }
    },
    {
        id: "algo-sort-014",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Quick sort average case partition divides array:",
        options: ["Into two equal halves", "Into 1 and n-1", "Randomly", "Never divides"],
        correctAnswer: 0,
        explanation: { solution: "Good pivot splits roughly equally, giving O(n log n). Bad pivot gives O(n²)" }
    },
    {
        id: "algo-sort-015",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Heap sort space complexity is:",
        options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
        correctAnswer: 2,
        explanation: { solution: "Heap sort is in-place, using the array itself as the heap" }
    },
    {
        id: "algo-sort-016",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Counting sort time complexity for n integers in range [0, k] is:",
        options: ["O(n log n)", "O(n + k)", "O(n²)", "O(k log k)"],
        correctAnswer: 1,
        explanation: { solution: "Count occurrences O(k), place elements O(n) = O(n+k)", formula: "O(n + k)" }
    },
    {
        id: "algo-sort-017",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Radix sort time complexity for n d-digit numbers is:",
        options: ["O(n log n)", "O(d·n)", "O(n + d)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "d passes, each pass is O(n) → O(d·n)", formula: "O(d·n) = O(d(n+k))" }
    },
    {
        id: "algo-sort-018",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Lower bound for comparison-based sorting is:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Decision tree argument: at least log₂(n!) = Ω(n log n) comparisons needed" }
    },
    // ========== SEARCHING ==========
    {
        id: "algo-search-010",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Binary search requires data to be:",
        options: ["Linked list", "Hash table", "Sorted array", "Any unsorted array"],
        correctAnswer: 2,
        explanation: { solution: "Binary search needs random access and sorted order" }
    },
    {
        id: "algo-search-011",
        type: "NAT",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Maximum comparisons in binary search on array of 1024 elements is:",
        correctAnswer: 11,
        tolerance: 0,
        explanation: { solution: "⌈log₂(1024)⌉ + 1 = 10 + 1 = 11 (or ⌊log₂n⌋ + 1)", formula: "Max comparisons = ⌊log₂n⌋ + 1 = 11" }
    },
    {
        id: "algo-search-012",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Ternary search divides array into how many parts?",
        options: ["2", "3", "4", "log₃n"],
        correctAnswer: 1,
        explanation: { solution: "Ternary search uses 2 comparisons to eliminate 1/3 of array" }
    },
    // ========== GRAPH ALGORITHMS ==========
    {
        id: "algo-graph-010",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "DFS uses which data structure?",
        options: ["Queue", "Stack (or recursion)", "Heap", "Hash table"],
        correctAnswer: 1,
        explanation: { solution: "DFS goes deep first - uses stack (explicit or call stack)" }
    },
    {
        id: "algo-graph-011",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Time complexity of BFS/DFS on graph with V vertices and E edges using adjacency list is:",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
        correctAnswer: 2,
        explanation: { solution: "Visit each vertex once (V) and examine each edge once (E) = O(V+E)" }
    },
    {
        id: "algo-graph-012",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Time complexity of BFS/DFS using adjacency matrix is:",
        options: ["O(V)", "O(V²)", "O(V + E)", "O(E²)"],
        correctAnswer: 1,
        explanation: { solution: "Must check all V² entries to find neighbors = O(V²)" }
    },
    {
        id: "algo-graph-013",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's algorithm time complexity with binary heap is:",
        options: ["O(V)", "O(V²)", "O(V + E) log V", "O(E log V)"],
        correctAnswer: 2,
        explanation: { solution: "V extract-mins + E decrease-keys, each O(log V) = O((V+E) log V)", formula: "O((V+E) log V)" }
    },
    {
        id: "algo-graph-014",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Bellman-Ford algorithm time complexity is:",
        options: ["O(V log V)", "O(VE)", "O(V + E)", "O(E log V)"],
        correctAnswer: 1,
        explanation: { solution: "V-1 passes, each checking all E edges = O(VE)", formula: "O(V·E)" }
    },
    {
        id: "algo-graph-015",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Bellman-Ford can detect:",
        options: ["Positive cycles", "Negative weight cycles", "Hamiltonian paths", "Eulerian circuits"],
        correctAnswer: 1,
        explanation: { solution: "After V-1 iterations, if distances still decrease → negative cycle exists" }
    },
    {
        id: "algo-graph-016",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Floyd-Warshall algorithm finds:",
        options: ["Single source shortest paths", "All pairs shortest paths", "Minimum spanning tree", "Topological order"],
        correctAnswer: 1,
        explanation: { solution: "Finds shortest path between every pair of vertices in O(V³)" }
    },
    {
        id: "algo-graph-017",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Floyd-Warshall time complexity is:",
        options: ["O(V²)", "O(V³)", "O(V²E)", "O(V log V)"],
        correctAnswer: 1,
        explanation: { solution: "Three nested loops over all vertices = O(V³)" }
    },
    {
        id: "algo-graph-018",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Prim's algorithm for MST is similar to:",
        options: ["DFS", "BFS", "Dijkstra's algorithm", "Floyd-Warshall"],
        correctAnswer: 2,
        explanation: { solution: "Both are greedy, use priority queue, grow a tree from source. Difference: Prim uses edge weight, Dijkstra uses path length" }
    },
    {
        id: "algo-graph-019",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Topological sort is possible only for:",
        options: ["Connected graphs", "Complete graphs", "DAGs (Directed Acyclic Graphs)", "All directed graphs"],
        correctAnswer: 2,
        explanation: { solution: "Cycles create circular dependencies → no valid ordering" }
    },
    {
        id: "algo-graph-020",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Number of spanning trees of complete graph Kₙ is:",
        options: ["n", "n!", "n^(n-2)", "2^n"],
        correctAnswer: 2,
        explanation: { solution: "Cayley's formula: Kₙ has n^(n-2) spanning trees", formula: "Spanning trees of Kₙ = n^(n-2)" }
    },
    // ========== DYNAMIC PROGRAMMING ==========
    {
        id: "algo-dp-010",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Fibonacci using DP (memoization or tabulation) takes:",
        options: ["O(2^n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 2,
        explanation: { solution: "Each subproblem solved once, n subproblems → O(n)" }
    },
    {
        id: "algo-dp-011",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "0/1 Knapsack DP time complexity with n items and capacity W is:",
        options: ["O(n)", "O(W)", "O(nW)", "O(2^n)"],
        correctAnswer: 2,
        explanation: { solution: "n items × W capacities = O(nW) subproblems" }
    },
    {
        id: "algo-dp-012",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Longest Common Subsequence (LCS) of strings of length m and n takes:",
        options: ["O(m + n)", "O(mn)", "O(m²n)", "O(2^(m+n))"],
        correctAnswer: 1,
        explanation: { solution: "m × n table, each cell O(1) = O(mn)" }
    },
    {
        id: "algo-dp-013",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Edit distance (Levenshtein distance) DP complexity for strings of length m and n is:",
        options: ["O(m + n)", "O(mn)", "O(max(m,n))", "O(1)"],
        correctAnswer: 1,
        explanation: { solution: "Similar to LCS: m × n table" }
    },
    {
        id: "algo-dp-014",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Matrix chain multiplication DP complexity for n matrices is:",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2^n)"],
        correctAnswer: 2,
        explanation: { solution: "O(n²) subproblems, each taking O(n) → O(n³)" }
    },
    // ========== GREEDY ALGORITHMS ==========
    {
        id: "algo-greedy-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Greedy algorithm always makes the _____ choice at each step:",
        options: ["Random", "Locally optimal", "Globally optimal", "Most expensive"],
        correctAnswer: 1,
        explanation: { solution: "Greedy picks best immediate option, hoping it leads to global optimum" }
    },
    {
        id: "algo-greedy-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Which problem is NOT solvable optimally by greedy?",
        options: ["Activity selection", "Huffman coding", "0/1 Knapsack", "Fractional knapsack"],
        correctAnswer: 2,
        explanation: { solution: "0/1 Knapsack needs DP. Fractional knapsack uses greedy (take highest value/weight first)" }
    },
    {
        id: "algo-greedy-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Huffman coding produces:",
        options: ["Fixed-length codes", "Variable-length prefix-free codes", "Random codes", "ASCII codes"],
        correctAnswer: 1,
        explanation: { solution: "More frequent characters get shorter codes, no code is prefix of another" }
    },
    {
        id: "algo-greedy-004",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Greedy",
        question: "Activity selection (interval scheduling) greedy strategy selects activity with:",
        options: ["Maximum duration", "Minimum start time", "Minimum finish time", "Maximum overlap"],
        correctAnswer: 2,
        explanation: { solution: "Select earliest finishing activity to maximize remaining time for other activities" }
    },
    // ========== DIVIDE AND CONQUER ==========
    {
        id: "algo-dc-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Divide and Conquer approach involves:",
        options: ["Breaking into subproblems, solving recursively, combining", "Always using loops", "Random selection", "Greedy choices"],
        correctAnswer: 0,
        explanation: { solution: "D&C: Divide into smaller subproblems, Conquer recursively, Combine solutions" }
    },
    {
        id: "algo-dc-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Which is NOT a divide and conquer algorithm?",
        options: ["Merge sort", "Quick sort", "Binary search", "Insertion sort"],
        correctAnswer: 3,
        explanation: { solution: "Insertion sort is incremental, not D&C" }
    },
    {
        id: "algo-dc-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Divide and Conquer",
        question: "Strassen's matrix multiplication has complexity:",
        options: ["O(n³)", "O(n^2.81)", "O(n²)", "O(n log n)"],
        correctAnswer: 1,
        explanation: { solution: "Strassen: 7 multiplications instead of 8 → O(n^log₂7) ≈ O(n^2.81)", formula: "O(n^2.81) vs O(n³) for standard" }
    }
]);

console.log("Extended Algorithms questions loaded");
