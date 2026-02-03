Questions.register([
    {
        "id": "algo-sort-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Sorting",
        "question": "The time complexity of Merge Sort in worst case is:",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n²)",
            "O(n log n)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Merge Sort divides array in half (log n levels) and merges in O(n) at each level. T(n) = 2T(n/2) + O(n) = O(n log n) in all cases.",
            "formula": "T(n) = 2T(n/2) + O(n) → O(n log n)"
        }
    },
    {
        "id": "algo-sort-002",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Sorting",
        "question": "Quick Sort's worst-case time complexity is O(n²) when:",
        "options": [
            "Array is already sorted (with first element as pivot)",
            "Array is randomly ordered",
            "Quick sort never has O(n²) complexity",
            "Pivot always divides the array into equal halves"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Quick Sort Worst Case: Occurs when pivot selection is poor - always picks smallest or largest element. Results in maximally unbalanced partitions: one side empty (0 elements), other has $n-1$ elements. Recurrence becomes $T(n) = T(n-1) + O(n) = n + (n-1) + ... + 1 = \\frac{n(n+1)}{2} = O(n^2)$ comparisons - same as bubble sort! Happens with already sorted/reverse sorted arrays when using first/last as pivot. Solutions: randomized pivot selection (expected $O(n \\log n)$), median-of-three, or use alternative like Merge Sort for guaranteed performance.",
            "formula": "Worst case: $T(n) = T(n-1) + O(n) = O(n^2)$"
        }
    },
    {
        "id": "algo-sort-003",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Sorting",
        "question": "Which sorting algorithm is stable?",
        "options": [
            "Heap Sort",
            "Merge Sort",
            "Quick Sort",
            "Selection Sort"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Stable Sorting: Algorithm preserves relative order of records with equal keys. Example: sorting students by grade, then by name - stable sort keeps name order within same grade. Merge Sort is STABLE (merges preserve order when elements equal). Insertion Sort, Bubble Sort also stable. Quick Sort, Heap Sort, Selection Sort are UNSTABLE (can swap equal elements out of order). Stability important for multi-level sorts, database queries (ORDER BY multiple columns).",
            "formula": "Stable: equal elements maintain relative order"
        }
    },
    {
        "id": "algo-search-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Searching",
        "question": "Binary Search requires the array to be:",
        "options": [
            "Empty",
            "Of size power of 2",
            "Sorted",
            "Unsorted"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Binary Search Requirement: Array MUST be sorted. Algorithm repeatedly divides search space in half - compares target with middle element, eliminates left or right half based on comparison. If target < middle: search left. If target > middle: search right. Only works if array is sorted! Time: $O(\\log n)$ comparisons. Space: $O(1)$ iteratively, $O(\\log n)$ recursively (call stack).Applications: searching, lower_bound/upper_bound, binary answer technique.",
            "formula": "$T(n) = T(n/2) + O(1) = O(\\log n)$"
        }
    },
    {
        "id": "algo-graph-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Graph Algorithms",
        "question": "Dijkstra's algorithm finds:",
        "options": [
            "Minimum spanning tree",
            "Strongly connected components",
            "Topological order",
            "Shortest path from source to all vertices"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Dijkstra's Algorithm: Finds single-source shortest paths in weighted graph with NON-NEGATIVE edge weights. Greedy approach: maintains set of vertices with finalized shortest distances. Uses min-priority queue to extract vertex with minimum distance. Relaxes outgoing edges: if $dist[u] + weight(u,v) < dist[v]$, update $dist[v]$. Time: $O((V+E) \\log V)$ with binary heap, $O(V^2)$ with array, $O(E + V \\log V)$ with Fibonacci heap. Applications: GPS navigation, network routing (OSPF), robotics.",
            "formula": "Relaxation: $dist[v] = \\min(dist[v], dist[u] + w(u,v))$"
        }
    },
    {
        "id": "algo-graph-002",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Graph Algorithms",
        "question": "Dijkstra's algorithm fails when the graph has:",
        "options": [
            "Cycles",
            "More than 1000 vertices",
            "Directed edges",
            "Negative edge weights"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Dijkstra with Negative Edges: FAILS because greedy assumption breaks. Algorithm assumes once vertex extracted from priority queue, its shortest distance is finalized. Negative edges allow later paths to improve already-finalized distances (shorter path through later-visited vertex with negative edge). Example: $A \\to B$ (weight 1), $A \\to C$ (weight 3), $C \\to B$ (weight -5). Dijkstra finds $dist[B]=1$, but actual shortest is $A \\to C \\to B = -2$. Use Bellman-Ford (handles negative edges, $O(VE)$) or detect negative cycles with Floyd-Warshall.",
            "formula": "Negative edges violate greedy invariant"
        }
    },
    {
        "id": "algo-graph-003",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Graph Algorithms",
        "question": "Kruskal's algorithm for MST uses which approach?",
        "options": [
            "Greedy (sort edges, add if no cycle)",
            "Dynamic Programming",
            "Divide and Conquer",
            "Backtracking"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Kruskal's MST Algorithm: GREEDY approach to find Minimum Spanning Tree. Steps: (1) Sort all edges by weight (ascending), (2) Initialize each vertex as separate tree (Union-Find), (3) For each edge $(u,v)$ in sorted order: if $u$ and $v$ in different trees, add edge (UNION), else skip (would create cycle). Stops when $|V|-1$ edges added. Time: $O(E \\log E)$ for sorting + $O(E \\alpha(V))$ for Union-Find $\\approx O(E \\log E)$. Alternative: Prim's algorithm (similar result, different approach). Applications: network design, clustering.",
            "formula": "$O(E \\log E)$ time complexity"
        }
    },
    {
        "id": "algo-dp-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Dynamic Programming",
        "question": "Dynamic Programming is used when a problem has:",
        "options": [
            "Greedy choice property",
            "Only one solution",
            "Overlapping subproblems and optimal substructure",
            "No recursive solution"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Dynamic Programming Applicability: Two key properties required: (1) OVERLAPPING SUBPROBLEMS: same subproblems solved repeatedly in naive recursion (memoization saves recomputation), (2) OPTIMAL SUBSTRUCTURE: optimal solution to problem contains optimal solutions to subproblems. DP methods: Top-down (memoization/recursion with cache) or Bottom-up (tabulation/iteration). Examples: Fibonacci (overlap: F(n-1) and F(n-2) both need F(n-3)), shortest paths, edit distance, knapsack, matrix chain multiplication. NOT applicable when subproblems independent or no optimization (use divide-conquer instead).",
            "formula": "DP = Overlapping Subproblems + Optimal Substructure"
        }
    },
    {
        "id": "algo-complex-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Complexity Analysis",
        "question": "The Master Theorem applies to recurrences of form T(n) = aT(n/b) + f(n). If f(n) = Θ(n^(log_b(a))), then T(n) is:",
        "options": [
            "Θ(f(n))",
            "Θ(n^(log_b(a)))",
            "Cannot be determined",
            "Θ(n^(log_b(a)) · log n)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Master Theorem Case 2: Applies when work per level $f(n)$ EQUALS work from recursive calls $\\Theta(n^{\\log_b a})$. Work is BALANCED across all $\\log_b n$ levels of recursion tree. Result: $T(n) = \\Theta(n^{\\log_b a} \\cdot \\log n)$. The $\\log n$ factor counts the levels. Example: Merge Sort with $T(n) = 2T(n/2) + \\Theta(n)$: $a=2, b=2, \\log_2 2 = 1$, so $f(n)=n = \\Theta(n^1)$ - balanced! Thus $T(n) = \\Theta(n \\log n)$. Other cases: Case 1 (recursion dominates), Case 3 (non-recursive dominates).",
            "formula": "Case 2: $T(n) = \\Theta(n^{\\log_b a} \\cdot \\log n)$ when $f(n) = \\Theta(n^{\\log_b a})$"
        }
    },
    {
        "id": "algo-complex-002",
        "type": "NAT",
        "topic": "algorithms",
        "subtopic": "Complexity Analysis",
        "question": "For the recurrence T(n) = 2T(n/2) + n, using Master Theorem, T(n) = Θ(n log n). What is the value of log_b(a)?",
        "correctAnswer": 1,
        "tolerance": 0,
        "explanation": {
            "solution": "Master Theorem Application: For $T(n) = 2T(n/2) + n$, identify: $a=2$ (subproblems), $b=2$ (division factor), $f(n)=n$ (non-recursive work). Calculate $\\log_b a = \\log_2 2 = 1$. Compare $f(n) = n$ with $n^{\\log_b a} = n^1 = n$: EQUAL! This is Master Theorem Case 2. Result: $T(n) = \\Theta(n^1 \\cdot \\log n) = \\Theta(n \\log n)$. Classic example: Merge Sort. Work balanced across $\\log n$ recursion levels, each doing $\\Theta(n)$ work.",
            "formula": "$a=2, b=2 \\Rightarrow \\log_2 2 = 1$"
        }
    }
]);