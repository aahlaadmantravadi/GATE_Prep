/**
 * DSA & Algorithms Questions
 * Covers: Data Structures, Sorting, Searching, Graph Algorithms, Complexity
 */

Questions.register([
    // Data Structures
    {
        id: "dsa-arr-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays & Strings",
        question: "Time complexity of accessing an element in an array by index is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 0,
        explanation: {
            solution: "Arrays provide O(1) random access because elements are stored contiguously and the address can be computed directly: base_address + index × element_size."
        }
    },
    {
        id: "dsa-ll-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked Lists",
        question: "Which operation is O(1) in a doubly linked list but O(n) in a singly linked list?",
        options: ["Insertion at head", "Insertion at tail (with tail pointer)", "Deletion of a given node", "Searching an element"],
        correctAnswer: 2,
        explanation: {
            solution: "To delete a given node in SLL, we need to find the previous node (O(n)). In DLL, we have a back pointer, so we can directly update prev.next = curr.next in O(1)."
        }
    },
    {
        id: "dsa-stack-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "The data structure used for implementing function calls is:",
        options: ["Queue", "Stack", "Heap", "Graph"],
        correctAnswer: 1,
        explanation: {
            solution: "Function calls use a stack (call stack). When a function is called, its context is pushed. When it returns, the context is popped. LIFO behavior ensures proper nesting."
        }
    },
    {
        id: "dsa-queue-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "In a circular queue with size n, the formula for rear after insertion is:",
        options: ["rear + 1", "rear - 1", "(rear + 1) % n", "(rear - 1) % n"],
        correctAnswer: 2,
        explanation: {
            solution: "Circular queue wraps around using modulo. After insertion: rear = (rear + 1) % n. This allows reusing empty spaces at the beginning.",
            formula: "rear = (rear + 1) % n"
        }
    },
    {
        id: "dsa-tree-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "A complete binary tree with n nodes has height:",
        options: ["n", "n-1", "⌊log₂n⌋", "⌈log₂n⌉"],
        correctAnswer: 2,
        explanation: {
            solution: "A complete binary tree fills levels top-to-bottom, left-to-right. Height = ⌊log₂n⌋. Maximum nodes at height h = 2^(h+1) - 1.",
            formula: "Height = ⌊log₂n⌋"
        }
    },
    {
        id: "dsa-tree-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Inorder traversal of a Binary Search Tree gives elements in:",
        options: ["Random order", "Ascending order", "Descending order", "Level order"],
        correctAnswer: 1,
        explanation: {
            solution: "BST property: left < root < right. Inorder (Left, Root, Right) visits elements in ascending order. This is a key property of BSTs."
        }
    },
    {
        id: "dsa-tree-003",
        type: "NAT",
        topic: "dsa",
        subtopic: "Trees",
        question: "A binary tree has 31 nodes. What is the minimum height (root at height 0)?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "Minimum height = ⌊log₂31⌋ = ⌊4.95⌋ = 4. A complete binary tree of height 4 has at most 2^5 - 1 = 31 nodes.",
            formula: "Min height = ⌊log₂n⌋"
        }
    },
    {
        id: "dsa-heap-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "In a max-heap, the largest element is at:",
        options: ["Any leaf node", "The last node", "The root", "Cannot be determined"],
        correctAnswer: 2,
        explanation: {
            solution: "Max-heap property: parent ≥ children for all nodes. Therefore, the root has the maximum value. Similarly, min-heap root has minimum value."
        }
    },
    {
        id: "dsa-hash-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "In hash table with chaining, the worst-case time for search is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 2,
        explanation: {
            solution: "Worst case: all n elements hash to the same bucket, creating a linked list of length n. Search requires O(n) traversal. Average case with good hash function is O(1)."
        }
    },
    // Algorithms
    {
        id: "algo-sort-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "The time complexity of Merge Sort in worst case is:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: {
            solution: "Merge Sort divides array in half (log n levels) and merges in O(n) at each level. T(n) = 2T(n/2) + O(n) = O(n log n) in all cases.",
            formula: "T(n) = 2T(n/2) + O(n) → O(n log n)"
        }
    },
    {
        id: "algo-sort-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Quick Sort's worst-case time complexity is O(n²) when:",
        options: [
            "Array is randomly ordered",
            "Pivot always divides the array into equal halves",
            "Array is already sorted (with first element as pivot)",
            "Quick sort never has O(n²) complexity"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "When pivot is always the smallest or largest element, one partition has 0 elements, the other has n-1. This gives n + (n-1) + ... + 1 = O(n²) comparisons."
        }
    },
    {
        id: "algo-sort-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Sorting",
        question: "Which sorting algorithm is stable?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2,
        explanation: {
            solution: "A stable sort preserves relative order of equal elements. Merge Sort and Insertion Sort are stable. Quick Sort, Heap Sort are typically unstable."
        }
    },
    {
        id: "algo-search-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Searching",
        question: "Binary Search requires the array to be:",
        options: ["Empty", "Unsorted", "Sorted", "Of size power of 2"],
        correctAnswer: 2,
        explanation: {
            solution: "Binary search repeatedly divides the search interval in half. This requires the array to be sorted to decide which half to continue searching."
        }
    },
    {
        id: "algo-graph-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's algorithm finds:",
        options: [
            "Minimum spanning tree",
            "Shortest path from source to all vertices",
            "Topological order",
            "Strongly connected components"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Dijkstra finds single-source shortest paths in a weighted graph with non-negative edge weights. Uses greedy approach with priority queue."
        }
    },
    {
        id: "algo-graph-002",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Dijkstra's algorithm fails when the graph has:",
        options: [
            "Directed edges",
            "Negative edge weights",
            "Cycles",
            "More than 1000 vertices"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Dijkstra's greedy approach assumes once a node is visited, its shortest path is found. Negative edges can violate this. Use Bellman-Ford for negative edges."
        }
    },
    {
        id: "algo-graph-003",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Graph Algorithms",
        question: "Kruskal's algorithm for MST uses which approach?",
        options: [
            "Dynamic Programming",
            "Greedy (sort edges, add if no cycle)",
            "Divide and Conquer",
            "Backtracking"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Kruskal's: Sort all edges by weight. Add edges greedily if they don't form a cycle (use Union-Find). Creates MST in O(E log E) time."
        }
    },
    {
        id: "algo-dp-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Dynamic Programming",
        question: "Dynamic Programming is used when a problem has:",
        options: [
            "Only one solution",
            "Overlapping subproblems and optimal substructure",
            "Greedy choice property",
            "No recursive solution"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "DP applies when: (1) Overlapping subproblems - same subproblems solved multiple times, (2) Optimal substructure - optimal solution uses optimal solutions to subproblems."
        }
    },
    {
        id: "algo-complex-001",
        type: "MCQ",
        topic: "algorithms",
        subtopic: "Complexity Analysis",
        question: "The Master Theorem applies to recurrences of form T(n) = aT(n/b) + f(n). If f(n) = Θ(n^(log_b(a))), then T(n) is:",
        options: [
            "Θ(n^(log_b(a)))",
            "Θ(n^(log_b(a)) · log n)",
            "Θ(f(n))",
            "Cannot be determined"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Master Theorem Case 2: When f(n) = Θ(n^(log_b(a))), then T(n) = Θ(n^(log_b(a)) · log n). The log n factor appears as work per level accumulates.",
            formula: "T(n) = Θ(n^(log_b(a)) · log n) when f(n) = Θ(n^(log_b(a)))"
        }
    },
    {
        id: "algo-complex-002",
        type: "NAT",
        topic: "algorithms",
        subtopic: "Complexity Analysis",
        question: "For the recurrence T(n) = 2T(n/2) + n, using Master Theorem, T(n) = Θ(n log n). What is the value of log_b(a)?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: {
            solution: "Here a=2, b=2, so log_b(a) = log_2(2) = 1. Since f(n) = n = Θ(n^1), we're in Case 2: T(n) = Θ(n log n).",
            formula: "log_b(a) = log_2(2) = 1"
        }
    }
]);
