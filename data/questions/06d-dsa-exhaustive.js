/**
 * Programming & Data Structures EXHAUSTIVE
 * C programming, arrays, linked lists, trees, graphs, hashing
 */

Questions.register([
    // ========== C PROGRAMMING BASICS ==========
    {
        id: "ds2-c-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "In C, sizeof(char) is always:",
        options: ["0 bytes", "1 byte", "2 bytes", "4 bytes"],
        correctAnswer: 1,
        explanation: { solution: "sizeof(char) = 1 byte by definition in C standard" }
    },
    {
        id: "ds2-c-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "In C, array name is:",
        options: ["A variable", "A constant pointer to first element", "An integer", "A function"],
        correctAnswer: 1,
        explanation: { solution: "Array name decays to pointer to first element (but not modifiable lvalue)" }
    },
    {
        id: "ds2-c-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "a[i] is equivalent to:",
        options: ["*a + i", "*(a + i)", "a + *(i)", "&a[i]"],
        correctAnswer: 1,
        explanation: { solution: "a[i] = *(a + i) = i[a]", formula: "a[i] ≡ *(a+i)" }
    },
    {
        id: "ds2-c-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "In 2D array a[m][n], a[i][j] address = ?",
        options: ["Base + i×n + j (row major)", "Base + j×m + i", "Base + i + j", "Base + i×j"],
        correctAnswer: 0,
        explanation: { solution: "Row major: address = Base + (i × columns + j) × element_size", formula: "Base + i×n + j" }
    },
    {
        id: "ds2-c-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "Column major order for a[i][j] in a[m][n]:",
        options: ["Base + i×n + j", "Base + j×m + i", "Base + i + j", "Base + i×j"],
        correctAnswer: 1,
        explanation: { solution: "Column major: address = Base + (j × rows + i) × element_size", formula: "Base + j×m + i" }
    },
    {
        id: "ds2-c-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "Pointer to pointer (double pointer) is declared as:",
        options: ["int *p", "int **p", "int p**", "int &p"],
        correctAnswer: 1,
        explanation: { solution: "int **p declares pointer to pointer to int" }
    },
    {
        id: "ds2-c-007",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "Recursion uses which data structure internally?",
        options: ["Queue", "Stack", "Heap", "Array"],
        correctAnswer: 1,
        explanation: { solution: "Function calls use call stack for return addresses and local variables" }
    },
    {
        id: "ds2-c-008",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "Static variable in C is stored in:",
        options: ["Stack", "Heap", "Data segment", "Code segment"],
        correctAnswer: 2,
        explanation: { solution: "Static variables stored in data segment (persist for program lifetime)" }
    },
    {
        id: "ds2-c-009",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "malloc() allocates memory from:",
        options: ["Stack", "Heap", "Data segment", "Code segment"],
        correctAnswer: 1,
        explanation: { solution: "Dynamic allocation uses heap" }
    },
    {
        id: "ds2-c-010",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Programming",
        question: "Big endian vs Little endian refers to:",
        options: ["Integer size", "Byte ordering in memory", "Pointer size", "Array indexing"],
        correctAnswer: 1,
        explanation: { solution: "Endianness: order of bytes in multi-byte data (MSB first vs LSB first)" }
    },
    // ========== TIME COMPLEXITY ==========
    {
        id: "ds2-tc-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Complexity",
        question: "O(1) means:",
        options: ["Linear time", "Constant time", "Quadratic time", "Logarithmic time"],
        correctAnswer: 1,
        explanation: { solution: "O(1) = constant time (independent of input size)" }
    },
    {
        id: "ds2-tc-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Complexity",
        question: "Binary search has time complexity:",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        correctAnswer: 2,
        explanation: { solution: "Binary search halves search space each step: O(log n)" }
    },
    {
        id: "ds2-tc-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Complexity",
        question: "Two nested loops each running n times: O(?)",
        options: ["O(n)", "O(n²)", "O(log n)", "O(2n)"],
        correctAnswer: 1,
        explanation: { solution: "n × n = n² iterations", formula: "O(n²)" }
    },
    {
        id: "ds2-tc-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Complexity",
        question: "O(n log n) is typical of which algorithms?",
        options: ["Linear search", "Bubble sort", "Merge sort, Quick sort (avg)", "Insertion sort"],
        correctAnswer: 2,
        explanation: { solution: "Merge sort always O(n log n), Quick sort average O(n log n)" }
    },
    {
        id: "ds2-tc-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Complexity",
        question: "Which is faster for large n: O(n²) or O(n log n)?",
        options: ["O(n²)", "O(n log n)", "Both same", "Cannot compare"],
        correctAnswer: 1,
        explanation: { solution: "n log n < n² for large n" }
    },
    // ========== LINKED LISTS ==========
    {
        id: "ds2-ll-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Singly linked list node contains:",
        options: ["Data only", "Next pointer only", "Data and next pointer", "Data, prev, next pointers"],
        correctAnswer: 2,
        explanation: { solution: "Singly LL node: data + pointer to next node" }
    },
    {
        id: "ds2-ll-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Doubly linked list node contains:",
        options: ["Data only", "Data and next pointer", "Data, prev, next pointers", "Only pointers"],
        correctAnswer: 2,
        explanation: { solution: "Doubly LL: data + prev pointer + next pointer" }
    },
    {
        id: "ds2-ll-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Insertion at head of singly linked list: O(?)",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0,
        explanation: { solution: "Create node, point to old head, update head: O(1)" }
    },
    {
        id: "ds2-ll-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Insertion at tail of singly linked list (without tail pointer): O(?)",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "Must traverse to find last node: O(n)" }
    },
    {
        id: "ds2-ll-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Deletion from middle of doubly linked list: O(?)",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 0,
        explanation: { solution: "Given pointer to node, update prev and next: O(1)" }
    },
    {
        id: "ds2-ll-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Circular linked list: last node's next points to:",
        options: ["NULL", "Head/First node", "Previous node", "Itself"],
        correctAnswer: 1,
        explanation: { solution: "Circular: last→next = head (forms a cycle)" }
    },
    {
        id: "ds2-ll-007",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Detecting cycle in linked list can be done with:",
        options: ["Hash set of visited nodes", "Floyd's tortoise and hare (slow/fast pointers)", "Both work", "Neither works"],
        correctAnswer: 2,
        explanation: { solution: "Hash set O(n) space, Floyd's O(1) space - both work" }
    },
    {
        id: "ds2-ll-008",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Linked List",
        question: "Reversing a singly linked list in-place: O(?) time, O(?) space",
        options: ["O(n), O(1)", "O(n²), O(1)", "O(n), O(n)", "O(1), O(1)"],
        correctAnswer: 0,
        explanation: { solution: "Single traversal, only pointer changes: O(n) time, O(1) space" }
    },
    // ========== STACKS ==========
    {
        id: "ds2-stk-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Stack follows which principle?",
        options: ["FIFO", "LIFO", "Random access", "Priority"],
        correctAnswer: 1,
        explanation: { solution: "Stack: Last In First Out (LIFO)" }
    },
    {
        id: "ds2-stk-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Stack operations push, pop, peek: O(?)",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "All basic stack operations are O(1)" }
    },
    {
        id: "ds2-stk-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Which expression is valid for stack with +, -, *, / operators?",
        options: ["Infix only", "Postfix only", "Prefix only", "All three can be evaluated with stack"],
        correctAnswer: 3,
        explanation: { solution: "Stack can evaluate postfix/prefix, or convert infix to them" }
    },
    {
        id: "ds2-stk-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Stack",
        question: "Infix a+b*c in postfix is:",
        options: ["a b + c *", "a b c * +", "* + a b c", "a b c + *"],
        correctAnswer: 1,
        explanation: { solution: "* has higher precedence: a b c * + (evaluate bc* first, then add a)" }
    },
    // ========== QUEUES ==========
    {
        id: "ds2-que-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Queue follows which principle?",
        options: ["LIFO", "FIFO", "Random access", "Priority"],
        correctAnswer: 1,
        explanation: { solution: "Queue: First In First Out (FIFO)" }
    },
    {
        id: "ds2-que-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Circular queue avoids:",
        options: ["Overflow", "Underflow", "False full condition (wasted space)", "All of these"],
        correctAnswer: 2,
        explanation: { solution: "Circular queue reuses freed space at front (wrap-around)" }
    },
    {
        id: "ds2-que-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Priority queue is typically implemented using:",
        options: ["Array", "Linked list", "Heap", "Stack"],
        correctAnswer: 2,
        explanation: { solution: "Heap gives O(log n) insert and extract-min/max" }
    },
    {
        id: "ds2-que-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Queue",
        question: "Deque (double-ended queue) allows insertion/deletion at:",
        options: ["Front only", "Rear only", "Both front and rear", "Middle only"],
        correctAnswer: 2,
        explanation: { solution: "Deque: insert/delete at both ends" }
    },
    // ========== TREES ==========
    {
        id: "ds2-tree-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Binary tree: each node has at most:",
        options: ["1 child", "2 children", "3 children", "Unlimited children"],
        correctAnswer: 1,
        explanation: { solution: "Binary tree: max 2 children per node (left, right)" }
    },
    {
        id: "ds2-tree-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Height of tree with n nodes is minimum when tree is:",
        options: ["Skewed", "Complete/Balanced", "Has only leaves", "Has one long path"],
        correctAnswer: 1,
        explanation: { solution: "Complete binary tree: height = ⌊log₂n⌋", formula: "Min height = O(log n)" }
    },
    {
        id: "ds2-tree-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Height of tree with n nodes is maximum when:",
        options: ["Balanced", "Skewed (like linked list)", "Complete", "Empty"],
        correctAnswer: 1,
        explanation: { solution: "Skewed tree: height = n-1 (each node has one child)" }
    },
    {
        id: "ds2-tree-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Full binary tree: every node has:",
        options: ["0 or 1 children", "0 or 2 children", "Exactly 2 children", "At least 1 child"],
        correctAnswer: 1,
        explanation: { solution: "Full/Proper BT: every node has 0 or 2 children (no single-child nodes)" }
    },
    {
        id: "ds2-tree-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Complete binary tree: all levels filled except possibly last, which is filled from:",
        options: ["Right", "Left", "Center", "Randomly"],
        correctAnswer: 1,
        explanation: { solution: "Complete BT: last level filled left to right" }
    },
    {
        id: "ds2-tree-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Perfect binary tree with height h has how many nodes?",
        options: ["h", "2^h", "2^(h+1) - 1", "2^h - 1"],
        correctAnswer: 2,
        explanation: { solution: "Perfect BT: all levels full, n = 2^(h+1) - 1", formula: "n = 2^(h+1) - 1" }
    },
    {
        id: "ds2-tree-007",
        type: "NAT",
        topic: "dsa",
        subtopic: "Trees",
        question: "Perfect binary tree of height 3 has how many nodes?",
        correctAnswer: 15,
        tolerance: 0,
        explanation: { solution: "2^(3+1) - 1 = 16 - 1 = 15" }
    },
    {
        id: "ds2-tree-008",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "In binary tree with n nodes, number of NULL pointers (children) is:",
        options: ["n", "n+1", "n-1", "2n"],
        correctAnswer: 1,
        explanation: { solution: "2n total child pointers, n-1 are used (edges = n-1), so n+1 are NULL", formula: "NULL pointers = n+1" }
    },
    // ========== BST ==========
    {
        id: "ds2-bst-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "BST property: for each node, left subtree has values:",
        options: ["Greater", "Less", "Equal", "Random"],
        correctAnswer: 1,
        explanation: { solution: "BST: left < node < right" }
    },
    {
        id: "ds2-bst-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "BST search, insert, delete average case: O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "Balanced BST: O(log n) for all operations" }
    },
    {
        id: "ds2-bst-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "BST worst case (skewed): O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2,
        explanation: { solution: "Skewed BST degenerates to linked list: O(n)" }
    },
    {
        id: "ds2-bst-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Inorder traversal of BST gives:",
        options: ["Unsorted sequence", "Sorted ascending sequence", "Sorted descending sequence", "Level order"],
        correctAnswer: 1,
        explanation: { solution: "BST inorder: left, root, right → ascending order" }
    },
    // ========== BALANCED TREES ==========
    {
        id: "ds2-avl-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "AVL tree property: balance factor of every node is:",
        options: ["-2, -1, 0, +1, +2", "-1, 0, +1 (i.e., |BF| ≤ 1)", "0 only", "Any value"],
        correctAnswer: 1,
        explanation: { solution: "AVL: |height(left) - height(right)| ≤ 1 for all nodes" }
    },
    {
        id: "ds2-avl-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "AVL rotations are: single and double. Types of single rotations:",
        options: ["LL and RR only", "LR and RL only", "LL, RR, LR, RL", "No rotations needed"],
        correctAnswer: 0,
        explanation: { solution: "Single: LL, RR. Double: LR (RL then LL), RL (LL then RR)" }
    },
    {
        id: "ds2-avl-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Trees",
        question: "Red-Black tree property: path from root to NULL has:",
        options: ["Same number of nodes", "Same number of black nodes", "Same number of red nodes", "Different lengths"],
        correctAnswer: 1,
        explanation: { solution: "RB tree: all root-to-leaf paths have same black height" }
    },
    // ========== HEAPS ==========
    {
        id: "ds2-heap-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heaps",
        question: "Max-heap property: parent is:",
        options: ["Less than children", "Greater than or equal to children", "Equal to children", "Has no children"],
        correctAnswer: 1,
        explanation: { solution: "Max-heap: parent ≥ children (root is maximum)" }
    },
    {
        id: "ds2-heap-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heaps",
        question: "Min-heap property: parent is:",
        options: ["Greater than children", "Less than or equal to children", "Equal to children", "Has no children"],
        correctAnswer: 1,
        explanation: { solution: "Min-heap: parent ≤ children (root is minimum)" }
    },
    {
        id: "ds2-heap-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heaps",
        question: "Heap insert, extract-min/max: O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "Insert: bubble up O(log n). Extract: remove root, heapify O(log n)" }
    },
    {
        id: "ds2-heap-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heaps",
        question: "Building heap from n elements (heapify): O(?)",
        options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: 1,
        explanation: { solution: "Bottom-up heapify is O(n), not O(n log n)" }
    },
    {
        id: "ds2-heap-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heaps",
        question: "In array representation of heap, left child of node at index i is at:",
        options: ["i+1", "2*i", "2*i + 1", "i/2"],
        correctAnswer: 2,
        explanation: { solution: "0-indexed: left = 2i+1, right = 2i+2. 1-indexed: left = 2i, right = 2i+1", formula: "left = 2i+1 (0-indexed)" }
    },
    {
        id: "ds2-heap-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Heaps",
        question: "Parent of node at index i (0-indexed) is at:",
        options: ["i-1", "i/2", "(i-1)/2", "2*i"],
        correctAnswer: 2,
        explanation: { solution: "parent = ⌊(i-1)/2⌋ for 0-indexed", formula: "parent = (i-1)/2" }
    },
    // ========== HASHING ==========
    {
        id: "ds2-hash-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Ideal hash table lookup: O(?)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 0,
        explanation: { solution: "Hash table: average O(1) for insert, search, delete" }
    },
    {
        id: "ds2-hash-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Collision in hashing occurs when:",
        options: ["Key not found", "Two keys hash to same index", "Table is empty", "Key is NULL"],
        correctAnswer: 1,
        explanation: { solution: "Collision: h(k1) = h(k2) for k1 ≠ k2" }
    },
    {
        id: "ds2-hash-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Chaining handles collisions by:",
        options: ["Ignoring duplicate keys", "Linked list at each bucket", "Finding next empty slot", "Rehashing"],
        correctAnswer: 1,
        explanation: { solution: "Chaining: each slot has a linked list of colliding elements" }
    },
    {
        id: "ds2-hash-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Open addressing handles collisions by:",
        options: ["Linked lists", "Finding another slot in the table", "Creating new table", "Ignoring collisions"],
        correctAnswer: 1,
        explanation: { solution: "Open addressing: probe for next empty slot (linear, quadratic, double hashing)" }
    },
    {
        id: "ds2-hash-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Linear probing: next probe position = ?",
        options: ["(h(k) + i) mod m", "(h(k) + i²) mod m", "(h(k) + i×h2(k)) mod m", "Random"],
        correctAnswer: 0,
        explanation: { solution: "Linear: h(k), h(k)+1, h(k)+2, ... (mod m)", formula: "(h(k) + i) mod m" }
    },
    {
        id: "ds2-hash-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Quadratic probing: probe sequence = ?",
        options: ["(h(k) + i) mod m", "(h(k) + c₁i + c₂i²) mod m", "(h(k) + i×h2(k)) mod m", "Random"],
        correctAnswer: 1,
        explanation: { solution: "Quadratic: uses i² term to reduce clustering", formula: "(h(k) + c₁i + c₂i²) mod m" }
    },
    {
        id: "ds2-hash-007",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Double hashing: second hash function is used for:",
        options: ["Collision resolution step size", "Primary hashing", "Nothing", "Chaining"],
        correctAnswer: 0,
        explanation: { solution: "Double hashing: step = h2(k), reduces clustering", formula: "(h(k) + i×h2(k)) mod m" }
    },
    {
        id: "ds2-hash-008",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Load factor α = ?",
        options: ["n / m (items / table size)", "m / n", "n × m", "log n"],
        correctAnswer: 0,
        explanation: { solution: "α = n/m where n = number of items, m = table size", formula: "α = n/m" }
    },
    {
        id: "ds2-hash-009",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Hashing",
        question: "Expected probes in unsuccessful search with open addressing (uniform hashing): 1/(1-α) requires α to be:",
        options: ["α > 1", "α < 1", "α = 1", "α = 0"],
        correctAnswer: 1,
        explanation: { solution: "Open addressing requires α < 1 (table not full)", formula: "Expected = 1/(1-α)" }
    }
]);

console.log("Exhaustive Programming & DS loaded - ~70 questions");
