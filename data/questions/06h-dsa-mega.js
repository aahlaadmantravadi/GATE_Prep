/**
 * Data Structures MEGA EXPANSION - Arrays, Trees, Graphs, Hashing
 * Deep coverage with formulas and numerical problems
 */

Questions.register([
    // ========== ARRAYS ==========
    {
        id: "ds-arr-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Row-major order address of A[i][j] in m×n array (base B, element size S):",
        options: ["B + (i*n + j)*S", "B + (j*m + i)*S", "B + i + j", "B + i*j*S"],
        correctAnswer: 0,
        explanation: { solution: "Row-major: B + (i*n + j)*S", formula: "B + (i*n + j)*S" }
    },
    {
        id: "ds-arr-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Column-major order address of A[i][j] in m×n array (base B, element size S):",
        options: ["B + (i*n + j)*S", "B + (j*m + i)*S", "B + i + j", "B + i*j*S"],
        correctAnswer: 1,
        explanation: { solution: "Column-major: B + (j*m + i)*S", formula: "B + (j*m + i)*S" }
    },
    {
        id: "ds-arr-003",
        type: "NAT",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Row-major: A[10][20], base=1000, element=4B. Address of A[3][5] = ?",
        correctAnswer: 1260,
        tolerance: 0,
        explanation: { solution: "1000 + (3*20 + 5)*4 = 1000 + 65*4 = 1260" }
    },
    {
        id: "ds-arr-004",
        type: "NAT",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Lower triangular matrix n×n (only main diagonal and below stored). Elements stored = ?",
        correctAnswer: 0,
        tolerance: 0,
        explanation: { solution: "n(n+1)/2 elements", formula: "n(n+1)/2" }
    },
    {
        id: "ds-arr-005",
        type: "NAT",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Upper triangular 5×5 matrix. Non-zero elements stored = ?",
        correctAnswer: 15,
        tolerance: 0,
        explanation: { solution: "5(5+1)/2 = 15" }
    },
    // ========== STACK ==========
    {
        id: "ds-stk-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Stack follows:",
        options: ["FIFO", "LIFO", "Random", "Priority"],
        correctAnswer: 1,
        explanation: { solution: "Stack: Last In First Out" }
    },
    {
        id: "ds-stk-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Infix to postfix conversion uses:",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correctAnswer: 1,
        explanation: { solution: "Stack for operators during conversion" }
    },
    {
        id: "ds-stk-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Postfix evaluation uses:",
        options: ["Two stacks", "One stack", "Queue", "No data structure"],
        correctAnswer: 1,
        explanation: { solution: "One stack to hold operands" }
    },
    {
        id: "ds-stk-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Number of possible BSTs with n nodes = Catalan(n). For n=3 = ?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        explanation: { solution: "Catalan(3) = 5 = (2n)! / ((n+1)! × n!)" }
    },
    // ========== QUEUE ==========
    {
        id: "ds-que-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Queue follows:",
        options: ["LIFO", "FIFO", "Random", "Priority"],
        correctAnswer: 1,
        explanation: { solution: "Queue: First In First Out" }
    },
    {
        id: "ds-que-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Circular queue of size n can hold maximum:",
        options: ["n elements", "n-1 elements (one slot wasted)", "n+1 elements", "Unlimited"],
        correctAnswer: 1,
        explanation: { solution: "Usually n-1 to distinguish full from empty" }
    },
    {
        id: "ds-que-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Deque supports:",
        options: ["Insert/delete at both ends", "Insert at rear only", "Delete at front only", "Random access"],
        correctAnswer: 0,
        explanation: { solution: "Deque: double-ended queue" }
    },
    // ========== LINKED LIST ==========
    {
        id: "ds-ll-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Time to access nth element in singly linked list:",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "Must traverse from head: O(n)" }
    },
    {
        id: "ds-ll-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Doubly linked list node has:",
        options: ["Only data", "Data + next pointer", "Data + next + prev pointers", "Only pointers"],
        correctAnswer: 2,
        explanation: { solution: "DLL: data + next + prev" }
    },
    {
        id: "ds-ll-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Detecting cycle in linked list (Floyd's algorithm) uses:",
        options: ["One pointer", "Two pointers (slow and fast)", "Stack", "Queue"],
        correctAnswer: 1,
        explanation: { solution: "Floyd's: slow moves 1, fast moves 2. Meet if cycle" }
    },
    // ========== TREES ==========
    {
        id: "ds-tree-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Binary tree with n nodes has maximum height:",
        options: ["log n", "n", "n-1", "n/2"],
        correctAnswer: 2,
        explanation: { solution: "Skewed tree: height = n-1" }
    },
    {
        id: "ds-tree-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Complete binary tree with n nodes has height:",
        options: ["n", "n-1", "⌊log₂n⌋", "2ⁿ"],
        correctAnswer: 2,
        explanation: { solution: "Complete: height = ⌊log₂n⌋", formula: "⌊log₂n⌋" }
    },
    {
        id: "ds-tree-003",
        type: "NAT",
        topic: "dsa",
        subtopic: "Trees",
        question: "Full binary tree with 31 nodes. Number of leaf nodes = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "Full: n = 2L-1, so L = (n+1)/2 = 16 leaves" }
    },
    {
        id: "ds-tree-004",
        type: "NAT",
        topic: "dsa",
        subtopic: "Trees",
        question: "Binary tree with 10 leaf nodes. Nodes with degree 2 = ?",
        correctAnswer: 9,
        tolerance: 0,
        explanation: { solution: "n₂ = n₀ - 1 = 10 - 1 = 9", formula: "n₂ = n₀ - 1" }
    },
    {
        id: "ds-tree-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Inorder traversal of BST gives:",
        options: ["Random order", "Sorted order", "Reverse sorted", "Level order"],
        correctAnswer: 1,
        explanation: { solution: "BST inorder: sorted (ascending)" }
    },
    // ========== BST ==========
    {
        id: "ds-bst-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "BST",
        question: "Average case search in balanced BST:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 1,
        explanation: { solution: "Balanced BST: O(log n) search" }
    },
    {
        id: "ds-bst-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "BST",
        question: "Worst case search in BST (skewed):",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Skewed BST degenerates to linked list: O(n)" }
    },
    {
        id: "ds-bst-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "BST",
        question: "BST deletion of node with two children uses:",
        options: ["Just remove", "Replace with inorder successor/predecessor", "Rebuild tree", "Mark as deleted"],
        correctAnswer: 1,
        explanation: { solution: "Replace with inorder successor (or predecessor)" }
    },
    // ========== AVL TREE ==========
    {
        id: "ds-avl-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "AVL",
        question: "AVL tree balance factor for each node:",
        options: ["Any value", "-1, 0, or 1", "Only 0", "Only positive"],
        correctAnswer: 1,
        explanation: { solution: "AVL: |height(left) - height(right)| ≤ 1" }
    },
    {
        id: "ds-avl-002",
        type: "NAT",
        topic: "dsa",
        subtopic: "AVL",
        question: "Minimum nodes in AVL tree of height 5 = ?",
        correctAnswer: 20,
        tolerance: 0,
        explanation: { solution: "N(h) = N(h-1)+N(h-2)+1. N(5) = 12+7+1 = 20" }
    },
    {
        id: "ds-avl-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "AVL",
        question: "AVL tree rotations for LL imbalance:",
        options: ["Right rotation", "Left rotation", "Left-Right", "Right-Left"],
        correctAnswer: 0,
        explanation: { solution: "LL: single right rotation" }
    },
    {
        id: "ds-avl-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "AVL",
        question: "AVL tree rotations for LR imbalance:",
        options: ["Right only", "Left only", "Left then Right", "Right then Left"],
        correctAnswer: 2,
        explanation: { solution: "LR: left rotation then right rotation" }
    },
    // ========== HEAP ==========
    {
        id: "ds-heap-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heap",
        question: "Max-heap property:",
        options: ["Parent ≤ children", "Parent ≥ children", "Sorted", "Balanced"],
        correctAnswer: 1,
        explanation: { solution: "Max-heap: parent ≥ both children" }
    },
    {
        id: "ds-heap-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heap",
        question: "Build heap from n elements time complexity:",
        options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Build heap: O(n) using bottom-up heapify" }
    },
    {
        id: "ds-heap-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heap",
        question: "Heap sort time complexity:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Heap sort: O(n log n) always" }
    },
    {
        id: "ds-heap-004",
        type: "NAT",
        topic: "dsa",
        subtopic: "Heap",
        question: "In array representation of heap, left child of index i is at:",
        correctAnswer: 0,
        tolerance: 0,
        explanation: { solution: "Left child = 2i+1 (0-indexed) or 2i (1-indexed)" }
    },
    // ========== HASHING ==========
    {
        id: "ds-hash-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Average case search in hash table:",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Hash table: O(1) average search" }
    },
    {
        id: "ds-hash-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Collision in hashing means:",
        options: ["Table full", "Two keys map to same index", "Key not found", "Invalid key"],
        correctAnswer: 1,
        explanation: { solution: "Collision: different keys, same hash value" }
    },
    {
        id: "ds-hash-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Chaining handles collisions by:",
        options: ["Probing next slot", "Storing collisions in linked list", "Rehashing", "Rejecting"],
        correctAnswer: 1,
        explanation: { solution: "Chaining: each slot has linked list" }
    },
    {
        id: "ds-hash-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Linear probing handles collision by:",
        options: ["Linked list", "Checking next slot linearly", "Double hashing", "Binary search"],
        correctAnswer: 1,
        explanation: { solution: "Linear: try h(k)+1, h(k)+2, ..." }
    },
    {
        id: "ds-hash-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Primary clustering is problem with:",
        options: ["Chaining", "Linear probing", "Double hashing", "All methods"],
        correctAnswer: 1,
        explanation: { solution: "Linear probing: clusters form, degrade performance" }
    },
    {
        id: "ds-hash-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Double hashing uses:",
        options: ["Two hash functions", "Two tables", "Two chains", "Two passes"],
        correctAnswer: 0,
        explanation: { solution: "Double: h(k)+i×h'(k) probing" }
    },
    {
        id: "ds-hash-007",
        type: "NAT",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Hash table size 11, h(k)=k%11. Insert 22,33,44. Collisions = ?",
        correctAnswer: 2,
        tolerance: 0,
        explanation: { solution: "22%11=0, 33%11=0 (collision), 44%11=0 (collision) = 2 collisions" }
    },
    // ========== GRAPH ALGORITHMS ==========
    {
        id: "ds-graph-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Graph",
        question: "BFS uses:",
        options: ["Stack", "Queue", "Heap", "Hash table"],
        correctAnswer: 1,
        explanation: { solution: "BFS: queue for level-order traversal" }
    },
    {
        id: "ds-graph-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Graph",
        question: "DFS uses:",
        options: ["Queue", "Stack (or recursion)", "Heap", "Two queues"],
        correctAnswer: 1,
        explanation: { solution: "DFS: stack (explicit or call stack)" }
    },
    {
        id: "ds-graph-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Graph",
        question: "BFS and DFS time complexity for adjacency list:",
        options: ["O(V)", "O(E)", "O(V+E)", "O(V×E)"],
        correctAnswer: 2,
        explanation: { solution: "Visit all vertices and edges: O(V+E)" }
    },
    {
        id: "ds-graph-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Graph",
        question: "BFS finds shortest path in:",
        options: ["Weighted graph", "Unweighted graph", "All graphs", "No graphs"],
        correctAnswer: 1,
        explanation: { solution: "BFS gives shortest path in unweighted graphs" }
    },
    {
        id: "ds-graph-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Graph",
        question: "Topological sort applies to:",
        options: ["Cyclic graphs", "DAG (Directed Acyclic Graph)", "Undirected graphs", "All graphs"],
        correctAnswer: 1,
        explanation: { solution: "Topological sort: only for DAGs" }
    }
]);

console.log("DSA Mega Expansion loaded - ~55 questions");
