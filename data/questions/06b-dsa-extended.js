/**
 * Data Structures Extended - Comprehensive Coverage
 * Trees, Heaps, Graphs, Hashing
 */

Questions.register([
    // ========== ARRAYS ==========
    {
        id: "dsa-arr-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays & Strings",
        question: "Time complexity of inserting at the beginning of an array of size n is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 2,
        explanation: { solution: "All n elements must shift right to make room at index 0" }
    },
    {
        id: "dsa-arr-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays & Strings",
        question: "Time complexity of deleting from the end of a dynamic array is:",
        options: ["O(n)", "O(log n)", "O(1) amortized", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Just decrement size, no shifting needed" }
    },
    // ========== LINKED LISTS ==========
    {
        id: "dsa-ll-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked Lists",
        question: "Time complexity of inserting at the head of a singly linked list is:",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Create new node, point it to old head, update head pointer - all O(1)" }
    },
    {
        id: "dsa-ll-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked Lists",
        question: "Time complexity of searching in an unsorted linked list of n elements is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 2,
        explanation: { solution: "Must traverse from head, checking each element - linear search" }
    },
    {
        id: "dsa-ll-012",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked Lists",
        question: "A circular linked list's last node points to:",
        options: ["NULL", "The head node", "Itself", "The second node"],
        correctAnswer: 1,
        explanation: { solution: "Circular: last node's next points back to head, creating a cycle" }
    },
    {
        id: "dsa-ll-013",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked Lists",
        question: "To detect a cycle in a linked list, Floyd's algorithm uses:",
        options: ["Recursion", "Hash table", "Two pointers (slow and fast)", "Stack"],
        correctAnswer: 2,
        explanation: { solution: "Slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle" }
    },
    // ========== STACKS ==========
    {
        id: "dsa-stack-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "Stack operations (push, pop, peek) have time complexity:",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "All stack operations work on top element only - constant time" }
    },
    {
        id: "dsa-stack-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "Postfix expression evaluation uses:",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correctAnswer: 1,
        explanation: { solution: "Push operands, when operator found pop operands, compute, push result" }
    },
    {
        id: "dsa-stack-012",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "Infix to postfix conversion uses:",
        options: ["One queue", "One stack", "Two stacks", "Priority queue"],
        correctAnswer: 1,
        explanation: { solution: "Stack holds operators; output operands immediately, pop operators based on precedence" }
    },
    {
        id: "dsa-stack-013",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "Balanced parentheses checking is done using:",
        options: ["Queue", "Stack", "Array only", "Linked list only"],
        correctAnswer: 1,
        explanation: { solution: "Push opening brackets, pop and match when closing bracket encountered" }
    },
    // ========== QUEUES ==========
    {
        id: "dsa-queue-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "BFS (Breadth-First Search) uses which data structure?",
        options: ["Stack", "Queue", "Priority Queue", "Hash Table"],
        correctAnswer: 1,
        explanation: { solution: "BFS explores level by level, FIFO order - uses queue" }
    },
    {
        id: "dsa-queue-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "Priority queue always removes the element with:",
        options: ["Newest element", "Oldest element", "Highest (or lowest) priority", "Random element"],
        correctAnswer: 2,
        explanation: { solution: "Priority queue orders by priority, not insertion order" }
    },
    {
        id: "dsa-queue-012",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stacks & Queues",
        question: "A double-ended queue (deque) allows insertion and deletion at:",
        options: ["Front only", "Rear only", "Both front and rear", "Middle only"],
        correctAnswer: 2,
        explanation: { solution: "Deque supports push/pop at both ends in O(1)" }
    },
    // ========== TREES ==========
    {
        id: "dsa-tree-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "A binary tree with n nodes has how many NULL pointers?",
        options: ["n", "n-1", "n+1", "2n"],
        correctAnswer: 2,
        explanation: { solution: "Total pointers = 2n, non-NULL pointers = n-1 (edges), so NULL = 2n-(n-1) = n+1", formula: "NULL pointers = n+1" }
    },
    {
        id: "dsa-tree-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Number of leaf nodes in a full binary tree with n internal nodes is:",
        options: ["n", "n-1", "n+1", "2n"],
        correctAnswer: 2,
        explanation: { solution: "In full binary tree: leaves = internal nodes + 1", formula: "Leaves = n + 1" }
    },
    {
        id: "dsa-tree-012",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Maximum nodes in a binary tree of height h (root at height 0) is:",
        options: ["h", "2h", "2^h", "2^(h+1) - 1"],
        correctAnswer: 3,
        explanation: { solution: "Perfect binary tree: 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1", formula: "Max nodes = 2^(h+1) - 1" }
    },
    {
        id: "dsa-tree-013",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "BST search time complexity (average case) is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 1,
        explanation: { solution: "Average case: balanced tree gives O(log n). Worst case (skewed): O(n)" }
    },
    {
        id: "dsa-tree-014",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "BST property states that for every node, all nodes in left subtree are:",
        options: ["Greater", "Less", "Equal", "Either greater or less"],
        correctAnswer: 1,
        explanation: { solution: "BST: left < root < right for all nodes" }
    },
    {
        id: "dsa-tree-015",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Deleting a node with two children in BST replaces it with:",
        options: ["Left child", "Right child", "Inorder successor or predecessor", "Any child"],
        correctAnswer: 2,
        explanation: { solution: "Replace with inorder successor (smallest in right subtree) or predecessor (largest in left)" }
    },
    // ========== AVL TREES ==========
    {
        id: "dsa-avl-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "AVL tree is a BST where for every node, height difference between left and right subtrees is at most:",
        options: ["0", "1", "2", "log n"],
        correctAnswer: 1,
        explanation: { solution: "AVL balance factor = |height(left) - height(right)| ≤ 1" }
    },
    {
        id: "dsa-avl-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "AVL tree guarantees search, insert, delete in:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 1,
        explanation: { solution: "Balance ensures height is always O(log n)" }
    },
    {
        id: "dsa-avl-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "AVL tree rotations are used to:",
        options: ["Speed up search", "Restore balance after insert/delete", "Reduce memory", "Sort elements"],
        correctAnswer: 1,
        explanation: { solution: "Rotations (LL, RR, LR, RL) restore balance factor to -1, 0, or 1" }
    },
    // ========== HEAPS ==========
    {
        id: "dsa-heap-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "A heap is typically stored as an:",
        options: ["Linked list", "Binary search tree", "Array", "Hash table"],
        correctAnswer: 2,
        explanation: { solution: "Complete binary tree maps naturally to array: parent at i, children at 2i+1 and 2i+2" }
    },
    {
        id: "dsa-heap-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Heapify operation (build heap from array) takes:",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "Bottom-up heapify is O(n), not O(n log n) as inserting n elements would suggest" }
    },
    {
        id: "dsa-heap-012",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Extract-max (or min) from heap takes:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: 1,
        explanation: { solution: "Remove root (O(1)), then heapify down to restore property (O(log n))" }
    },
    {
        id: "dsa-heap-013",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Heap sort time complexity is:",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: { solution: "Build heap O(n) + n extract operations O(log n) each = O(n log n) total" }
    },
    // ========== HASHING ==========
    {
        id: "dsa-hash-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Hash table with chaining uses _____ to handle collisions:",
        options: ["Open addressing", "Linked lists", "Binary trees", "Sorting"],
        correctAnswer: 1,
        explanation: { solution: "Chaining: each bucket is a linked list of elements that hash to that index" }
    },
    {
        id: "dsa-hash-011",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "In linear probing, if position h(k) is occupied, we try:",
        options: ["h(k)+1, h(k)+4, h(k)+9...", "h(k)+1, h(k)+2, h(k)+3...", "h(k)×2, h(k)×3...", "Random positions"],
        correctAnswer: 1,
        explanation: { solution: "Linear probing: try consecutive slots h(k)+1, h(k)+2, etc." }
    },
    {
        id: "dsa-hash-012",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Quadratic probing tries positions:",
        options: ["h(k)+1², h(k)+2², h(k)+3²...", "h(k)+1, h(k)+2, h(k)+3...", "h(k)×1, h(k)×2, h(k)×3...", "Random positions"],
        correctAnswer: 0,
        explanation: { solution: "Quadratic: h(k)+1, h(k)+4, h(k)+9... (avoids primary clustering)" }
    },
    {
        id: "dsa-hash-013",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Load factor α of a hash table is:",
        options: ["n × m", "n / m", "m / n", "n + m"],
        correctAnswer: 1,
        explanation: { solution: "α = n/m where n = number of elements, m = table size", formula: "Load factor α = n/m" }
    },
    {
        id: "dsa-hash-014",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "For a good hash table, the load factor should typically be:",
        options: ["Greater than 1", "Less than 1 (e.g., 0.7)", "Exactly 1", "As high as possible"],
        correctAnswer: 1,
        explanation: { solution: "Lower load factor means fewer collisions. Typically resize when α > 0.7" }
    },
    // ========== TRIES ==========
    {
        id: "dsa-trie-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "A trie (prefix tree) search time for a string of length m is:",
        options: ["O(1)", "O(log n)", "O(m)", "O(n)"],
        correctAnswer: 2,
        explanation: { solution: "Follow m links from root, one per character - independent of dictionary size" }
    },
    {
        id: "dsa-trie-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Tries are efficient for:",
        options: ["Numeric data", "Prefix-based string operations", "Graph traversal", "Sorting numbers"],
        correctAnswer: 1,
        explanation: { solution: "Tries excel at prefix matching, autocomplete, spell checking" }
    }
]);

console.log("Extended DSA questions loaded");
