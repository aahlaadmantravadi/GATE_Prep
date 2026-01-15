Questions.register([
    {
        "id": "algo-sort-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Sorting",
        "question": "The time complexity of Merge Sort in worst case is:",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(log n)"
        ],
        "correctAnswer": 1,
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
            "Array is randomly ordered",
            "Pivot always divides the array into equal halves",
            "Array is already sorted (with first element as pivot)",
            "Quick sort never has O(n²) complexity"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "When pivot is always the smallest or largest element, one partition has 0 elements, the other has n-1. This gives n + (n-1) + ... + 1 = O(n²) comparisons."
        }
    },
    {
        "id": "algo-sort-003",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Sorting",
        "question": "Which sorting algorithm is stable?",
        "options": [
            "Quick Sort",
            "Heap Sort",
            "Merge Sort",
            "Selection Sort"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A stable sort preserves relative order of equal elements. Merge Sort and Insertion Sort are stable. Quick Sort, Heap Sort are typically unstable."
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
            "Unsorted",
            "Sorted",
            "Of size power of 2"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Binary search repeatedly divides the search interval in half. This requires the array to be sorted to decide which half to continue searching."
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
            "Shortest path from source to all vertices",
            "Topological order",
            "Strongly connected components"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Dijkstra finds single-source shortest paths in a weighted graph with non-negative edge weights. Uses greedy approach with priority queue."
        }
    },
    {
        "id": "algo-graph-002",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Graph Algorithms",
        "question": "Dijkstra's algorithm fails when the graph has:",
        "options": [
            "Directed edges",
            "Negative edge weights",
            "Cycles",
            "More than 1000 vertices"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Dijkstra's greedy approach assumes once a node is visited, its shortest path is found. Negative edges can violate this. Use Bellman-Ford for negative edges."
        }
    },
    {
        "id": "algo-graph-003",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Graph Algorithms",
        "question": "Kruskal's algorithm for MST uses which approach?",
        "options": [
            "Dynamic Programming",
            "Greedy (sort edges, add if no cycle)",
            "Divide and Conquer",
            "Backtracking"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Kruskal's: Sort all edges by weight. Add edges greedily if they don't form a cycle (use Union-Find). Creates MST in O(E log E) time."
        }
    },
    {
        "id": "algo-dp-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Dynamic Programming",
        "question": "Dynamic Programming is used when a problem has:",
        "options": [
            "Only one solution",
            "Overlapping subproblems and optimal substructure",
            "Greedy choice property",
            "No recursive solution"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DP applies when: (1) Overlapping subproblems - same subproblems solved multiple times, (2) Optimal substructure - optimal solution uses optimal solutions to subproblems."
        }
    },
    {
        "id": "algo-complex-001",
        "type": "MCQ",
        "topic": "algorithms",
        "subtopic": "Complexity Analysis",
        "question": "The Master Theorem applies to recurrences of form T(n) = aT(n/b) + f(n). If f(n) = Θ(n^(log_b(a))), then T(n) is:",
        "options": [
            "Θ(n^(log_b(a)))",
            "Θ(n^(log_b(a)) · log n)",
            "Θ(f(n))",
            "Cannot be determined"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Master Theorem Case 2: When f(n) = Θ(n^(log_b(a))), then T(n) = Θ(n^(log_b(a)) · log n). The log n factor appears as work per level accumulates.",
            "formula": "T(n) = Θ(n^(log_b(a)) · log n) when f(n) = Θ(n^(log_b(a)))"
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
            "solution": "Here a=2, b=2, so log_b(a) = log_2(2) = 1. Since f(n) = n = Θ(n^1), we're in Case 2: T(n) = Θ(n log n).",
            "formula": "log_b(a) = log_2(2) = 1"
        }
    }
]);
