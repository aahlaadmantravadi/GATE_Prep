Questions.register([
    {
        "id": "dsa-arr-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Arrays & Strings",
        "question": "Time complexity of accessing an element in an array by index is:",
        "options": [
            "O(n²)",
            "O(log n)",
            "O(1)",
            "O(n)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Arrays provide O(1) random access because elements stored contiguously in memory. Address calculation: Address(A[i]) = Base + i times element_size. GATE: Direct addressing via index. No traversal needed unlike linked lists. Trade-off: insertion/deletion O(n) due to shifting.",
            "formula": "Address(A[i]) = Base + i times size"
        }
    },
    {
        "id": "dsa-ll-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked Lists",
        "question": "Which operation is O(1) in a doubly linked list but O(n) in a singly linked list?",
        "options": [
            "Insertion at tail (with tail pointer)",
            "Insertion at head",
            "Deletion of a given node",
            "Searching an element"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Deletion of given node: SLL needs previous node (O(n) traversal). DLL has prev pointer - directly access and update. GATE: DLL advantage - bidirectional traversal, O(1) deletion if node pointer given. SLL only forward traversal.",
            "formula": "SLL delete: O(n); DLL delete: O(1) with node pointer"
        }
    },
    {
        "id": "dsa-stack-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "The data structure used for implementing function calls is:",
        "options": [
            "Heap",
            "Stack",
            "Graph",
            "Queue"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Function calls use stack (call stack/activation records). Push: save return address, parameters, local variables. Pop on return. LIFO ensures proper nesting - last called returns first. GATE: Recursion depth limited by stack size. Stack overflow if too deep.",
            "formula": "Call stack: LIFO, stores activation records"
        }
    },
    {
        "id": "dsa-queue-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "In a circular queue with size n, the formula for rear after insertion is:",
        "options": [
            "(rear + 1) % n",
            "rear - 1",
            "rear + 1",
            "(rear - 1) % n"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Circular queue wraps using modulo to reuse space. Insert: rear = (rear + 1) mod n. Delete: front = (front + 1) mod n. GATE: Avoids wasting space in linear queue. Full condition: (rear + 1) mod n == front. Empty: front == rear (with flag or count).",
            "formula": "rear = (rear + 1) mod n; front = (front + 1) mod n"
        }
    },
    {
        "id": "dsa-tree-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "A complete binary tree with n nodes has height:",
        "options": [
            "⌈log₂n⌉",
            "n",
            "n-1",
            "⌊log₂n⌋"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A complete binary tree fills levels top-to-bottom, left-to-right. Height = ⌊log₂n⌋. Maximum nodes at height h = 2^(h+1) - 1.",
            "formula": "Height = ⌊log₂n⌋"
        }
    },
    {
        "id": "dsa-tree-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Inorder traversal of a Binary Search Tree gives elements in:",
        "options": [
            "Random order",
            "Ascending order",
            "Level order",
            "Descending order"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "BST property: left < root < right for all nodes. Inorder traversal (Left-Root-Right) visits in ascending order. GATE: This makes BST useful for sorted data operations. Preorder gives prefix, Postorder gives postfix expression.",
            "formula": "Inorder(BST) = Sorted ascending order"
        }
    },
    {
        "id": "dsa-tree-003",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "A binary tree has 31 nodes. What is the minimum height (root at height 0)?",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "Minimum height = ⌊log₂31⌋ = ⌊4.95⌋ = 4. A complete binary tree of height 4 has at most 2^5 - 1 = 31 nodes.",
            "formula": "Min height = ⌊log₂n⌋"
        }
    },
    {
        "id": "dsa-heap-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "In a max-heap, the largest element is at:",
        "options": [
            "Any leaf node",
            "Cannot be determined",
            "The root",
            "The last node"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Max-heap property: parent >= all descendants. Root has maximum value. Min-heap: root has minimum. GATE: Heap operations - insert O(log n), extract-max O(log n), build-heap O(n). Used in heapsort, priority queues.",
            "formula": "Max-heap: root = maximum; Operations O(log n)"
        }
    },
    {
        "id": "dsa-hash-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "In hash table with chaining, the worst-case time for search is:",
        "options": [
            "O(n log n)",
            "O(1)",
            "O(log n)",
            "O(n)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Worst case: all n elements hash to same bucket, O(n) chain traversal. Average O(1) with good hash.",
            "formula": "Chaining: Worst O(n), Avg O(1+alpha) where alpha=n/m"
        }
    },
    {
        "id": "dsa-arr-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Arrays & Strings",
        "question": "Time complexity of inserting at the beginning of an array of size n is:",
        "options": [
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(1)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Insert at index 0: shift all n elements right, O(n) time.",
            "formula": "Array insert at i: O(n-i) shifts"
        }
    },
    {
        "id": "dsa-arr-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Arrays & Strings",
        "question": "Time complexity of deleting from the end of a dynamic array is:",
        "options": [
            "O(n)",
            "O(1) amortized",
            "O(n²)",
            "O(log n)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Array End Deletion:\n\nDeleting from the end is O(1) because:\n1. No shifting required\n2. Just decrement the size counter\n\nThe memory slot may still contain the old value (garbage), but logically the array is shorter.\n\nDynamic arrays may occasionally shrink (copy to smaller array) for memory efficiency, but this is amortized O(1)."
        }
    },
    {
        "id": "dsa-ll-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked Lists",
        "question": "Time complexity of inserting at the head of a singly linked list is:",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Create node, new.next=head, head=new. All O(1), no traversal.",
            "formula": "LL insert at head: O(1)"
        }
    },
    {
        "id": "dsa-ll-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked Lists",
        "question": "Time complexity of searching in an unsorted linked list of n elements is:",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(1)",
            "O(log n)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Traverse from head, check each. Worst/avg O(n). No random access for binary search.",
            "formula": "LL search: O(n)"
        }
    },
    {
        "id": "dsa-ll-012",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked Lists",
        "question": "A circular linked list's last node points to:",
        "options": [
            "Itself",
            "NULL",
            "The head node",
            "The second node"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Circular Linked List:\n\nIn a circular LL, the last node's 'next' points back to the head, forming a closed loop.\n\nAdvantages:\n1. Can traverse entire list from any node\n2. Useful for round-robin scheduling\n3. No NULL pointers to check\n\nDetection: Keep tracking visited nodes or use two-pointer technique.\n\nVariation: Doubly circular - last.next = head AND head.prev = last."
        }
    },
    {
        "id": "dsa-ll-013",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked Lists",
        "question": "To detect a cycle in a linked list, Floyd's algorithm uses:",
        "options": [
            "Two pointers (slow and fast)",
            "Recursion",
            "Stack",
            "Hash table"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Two pointers: slow +1, fast +2. Meet if cycle. To find start: reset one to head, both move +1, meet at start.",
            "formula": "Floyd: O(n) time, O(1) space"
        }
    },
    {
        "id": "dsa-stack-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "Stack operations (push, pop, peek) have time complexity:",
        "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Push/Pop/Peek all O(1) - access top only.",
            "formula": "Stack: All ops O(1)"
        }
    },
    {
        "id": "dsa-stack-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "Postfix expression evaluation uses:",
        "options": [
            "Stack",
            "Graph",
            "Tree",
            "Queue"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Postfix Expression Evaluation using Stack:\n\nAlgorithm:\n1. Scan expression left to right\n2. If OPERAND: push onto stack\n3. If OPERATOR: pop two operands, apply operator, push result\n4. After scanning: stack top = final result\n\nExample: 2 3 + 4 × evaluates to 20\n- Push 2, Push 3\n- See +: Pop 3,2 → compute 2+3=5 → Push 5\n- Push 4\n- See ×: Pop 4,5 → compute 5×4=20 → Push 20\n\nNote: Second popped operand is the LEFT operand for subtraction/division!"
        }
    },
    {
        "id": "dsa-stack-012",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "Infix to postfix conversion uses:",
        "options": [
            "Priority queue",
            "One stack",
            "One queue",
            "Two stacks"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Infix to Postfix Conversion (Shunting Yard Algorithm):\n\nUse one stack for operators, one output queue.\n\nRules:\n1. OPERAND: Add directly to output\n2. OPERATOR: Pop and output operators with higher/equal precedence, then push current\n3. OPEN PAREN '(': Push to stack\n4. CLOSE PAREN ')': Pop and output until '(' found (discard parentheses)\n5. End: Pop all remaining operators to output\n\nPrecedence: ^(highest) > × ÷ > + -(lowest)\n\nExample: A + B × C → A B C × +\n\nTime: O(n), Space: O(n) for stack"
        }
    },
    {
        "id": "dsa-stack-013",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "Balanced parentheses checking is done using:",
        "options": [
            "Stack",
            "Array only",
            "Queue",
            "Linked list only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Balanced Parentheses Checking using Stack:\n\nAlgorithm:\n1. Scan expression character by character\n2. If OPENING bracket ( [ {: Push to stack\n3. If CLOSING bracket ) ] }: \n   - If stack empty → UNBALANCED (extra closing)\n   - Pop top, if mismatch → UNBALANCED\n4. After scanning: Stack should be empty, else UNBALANCED\n\nExamples:\n- ((a+b)) → Balanced ✓\n- ([)] → Unbalanced ✗ (cross-nesting)\n- ((a) → Unbalanced ✗ (extra opening)\n\nTime: O(n), Space: O(n) worst case"
        }
    },
    {
        "id": "dsa-queue-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "BFS (Breadth-First Search) uses which data structure?",
        "options": [
            "Queue",
            "Priority Queue",
            "Hash Table",
            "Stack"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "BFS (Breadth-First Search) uses Queue:\n\nAlgorithm:\n1. Enqueue starting vertex, mark visited\n2. While queue not empty:\n   - Dequeue vertex u\n   - Process u\n   - Enqueue all unvisited neighbors of u, mark visited\n\nWhy Queue? FIFO ensures level-by-level exploration.\n\nApplications:\n- Shortest path in unweighted graph\n- Level-order tree traversal\n- Web crawling\n- Social network friend-of-friend\n\nTime: O(V+E), Space: O(V) for queue and visited array"
        }
    },
    {
        "id": "dsa-queue-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "Priority queue always removes the element with:",
        "options": [
            "Newest element",
            "Random element",
            "Highest (or lowest) priority",
            "Oldest element"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Priority Queue:\n\nElements are removed in ORDER OF PRIORITY, not insertion order.\n\nImplementations:\n1. Unsorted array: Insert O(1), Extract O(n)\n2. Sorted array: Insert O(n), Extract O(1)\n3. Binary Heap (best): Insert O(log n), Extract O(log n)\n4. Fibonacci Heap: Insert O(1) amortized, Decrease-key O(1) amortized\n\nApplications:\n- Dijkstra's algorithm (needs decrease-key)\n- Huffman coding\n- Job scheduling\n- A* search algorithm\n- Heap sort"
        }
    },
    {
        "id": "dsa-queue-012",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stacks & Queues",
        "question": "A double-ended queue (deque) allows insertion and deletion at:",
        "options": [
            "Rear only",
            "Front only",
            "Both front and rear",
            "Middle only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Double-Ended Queue (Deque):\n\nOperations supported at BOTH ends in O(1):\n- push_front / push_back\n- pop_front / pop_back\n- peek_front / peek_back\n\nImplementations:\n1. Doubly linked list: O(1) all operations, extra pointer overhead\n2. Circular array: O(1) amortized, better cache locality\n\nApplications:\n- Sliding window maximum (use as monotonic deque)\n- Work stealing in parallel processing\n- Undo-redo functionality\n- BFS where you need to sometimes prioritize (like 0-1 BFS)"
        }
    },
    {
        "id": "dsa-tree-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "A binary tree with n nodes has how many NULL pointers?",
        "options": [
            "n",
            "n-1",
            "2n",
            "n+1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Binary Tree NULL Pointers:\n\nTotal pointers: Each node has 2 child pointers → 2n total\nNon-NULL pointers: Each edge uses one pointer → n-1 edges\nNULL pointers: 2n - (n-1) = n + 1\n\nAlternatively: Induction proof\n- Single node: 2 NULL pointers = 1 + 1 ✔\n- Adding a node converts 1 NULL to edge and adds 2 new NULLs\n  Net change: -1 + 2 = +1 NULL \n  So n nodes → n+1 NULLs ✔\n\nThis is a frequently tested formula!",
            "formula": "NULL pointers = n+1"
        }
    },
    {
        "id": "dsa-tree-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Number of leaf nodes in a full binary tree with n internal nodes is:",
        "options": [
            "n-1",
            "n+1",
            "2n",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Full Binary Tree Leaf Formula:\n\nA FULL binary tree: every node has 0 or 2 children (never 1).\n\nLet i = internal nodes (degree 2), L = leaf nodes (degree 0)\n\nRelation: L = i + 1\n\nProof by edge counting:\n- Total nodes = i + L\n- Edges = nodes - 1 = i + L - 1\n- Also, edges = 2i (each internal node contributes 2 edges)\n- So: 2i = i + L - 1 → L = i + 1\n\nExample: 5 internal nodes → 6 leaves",
            "formula": "Leaves = Internal nodes + 1"
        }
    },
    {
        "id": "dsa-tree-012",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Maximum nodes in a binary tree of height h (root at height 0) is:",
        "options": [
            "h",
            "2^h",
            "2h",
            "2^(h+1) - 1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Maximum Nodes in Binary Tree of Height h:\n\nPerfect binary tree: all levels completely filled.\nLevel 0 (root): 1 node\nLevel 1: 2 nodes\nLevel 2: 4 nodes\n...\nLevel h: 2^h nodes\n\nTotal = 1 + 2 + 4 + ... + 2^h = 2^(h+1) - 1\n(Geometric series sum)\n\nMinimum nodes (skewed tree): h + 1\n\nRelation: floor(log₂(n)) ≤ h ≤ n-1",
            "formula": "Max nodes = 2^(h+1) - 1"
        }
    },
    {
        "id": "dsa-tree-013",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "BST search time complexity (average case) is:",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "BST Search Time Complexity:\n\nAverage case (balanced): O(log n)\n- Height ≈ log n, search follows one path from root\n\nWorst case (skewed): O(n)\n- All nodes on one side → height = n-1\n- Happens with sorted input and no balancing\n\nTo guarantee O(log n): Use balanced BSTs (AVL, Red-Black, B-trees)\n\nSearch algorithm:\n1. If root is NULL → not found\n2. If key = root.data → found\n3. If key < root.data → search left subtree\n4. Else → search right subtree"
        }
    },
    {
        "id": "dsa-tree-014",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "BST property states that for every node, all nodes in left subtree are:",
        "options": [
            "Greater",
            "Equal",
            "Either greater or less",
            "Less"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "BST Property (Binary Search Tree Invariant):\n\nFor EVERY node in the tree:\n- ALL nodes in left subtree < current node\n- ALL nodes in right subtree > current node\n\nThis property holds recursively throughout the tree.\n\nConsequences:\n1. Inorder traversal gives sorted order\n2. Minimum is leftmost node\n3. Maximum is rightmost node\n4. Searching is efficient (binary search on tree)\n\nVariations: Some BSTs allow duplicates (usually in right subtree)."
        }
    },
    {
        "id": "dsa-tree-015",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Deleting a node with two children in BST replaces it with:",
        "options": [
            "Right child",
            "Inorder successor or predecessor",
            "Left child",
            "Any child"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "BST Deletion with Two Children:\n\nWhen deleting a node with TWO children, replace it with:\n\nOption 1: INORDER SUCCESSOR\n- Smallest node in RIGHT subtree\n- Go right once, then left as far as possible\n\nOption 2: INORDER PREDECESSOR\n- Largest node in LEFT subtree\n- Go left once, then right as far as possible\n\nBoth maintain BST property because:\n- Successor is > all in left subtree, < all in right subtree\n- Same logic for predecessor\n\nTime: O(h) where h = tree height"
        }
    },
    {
        "id": "dsa-avl-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "AVL tree is a BST where for every node, height difference between left and right subtrees is at most:",
        "options": [
            "0",
            "1",
            "2",
            "log n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "AVL Tree Balance Factor:\n\nBalance Factor = height(left subtree) - height(right subtree)\n\nFor AVL tree: BF ∈ {-1, 0, +1} for EVERY node\n- BF = 0: perfectly balanced\n- BF = +1: left-heavy\n- BF = -1: right-heavy\n\nIf |BF| ≥ 2 after insert/delete → REBALANCE with rotations\n\nHeight guarantee: h ≤ 1.44 × log₂(n+2), ensuring O(log n) operations\n\nNamed after inventors Adelson-Velsky and Landis (1962)."
        }
    },
    {
        "id": "dsa-avl-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "AVL tree guarantees search, insert, delete in:",
        "options": [
            "O(n log n)",
            "O(log n)",
            "O(n)",
            "O(1)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "AVL Tree Operations Complexity:\n\nSearch: O(log n) - follows BST search, height is O(log n)\nInsert: O(log n) - BST insert + at most 2 rotations\nDelete: O(log n) - BST delete + up to O(log n) rotations\n\nWhy guaranteed O(log n)? Balance condition ensures:\n- Height h ≤ 1.44 × log₂(n)\n- Minimum nodes for height h: N(h) = N(h-1) + N(h-2) + 1 (Fibonacci-like)\n\nCompared to Red-Black trees:\n- AVL is more rigidly balanced\n- Faster lookups, slightly slower inserts/deletes\n- Often preferred for read-heavy workloads"
        }
    },
    {
        "id": "dsa-avl-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "AVL tree rotations are used to:",
        "options": [
            "Sort elements",
            "Restore balance after insert/delete",
            "Speed up search",
            "Reduce memory"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "AVL Tree Rotations:\n\nFour imbalance cases and their fixes:\n\n1. LL (Left-Left): Node inserted in left subtree of left child\n   Fix: Single RIGHT rotation at unbalanced node\n\n2. RR (Right-Right): Node inserted in right subtree of right child\n   Fix: Single LEFT rotation at unbalanced node\n\n3. LR (Left-Right): Node inserted in right subtree of left child\n   Fix: LEFT rotation at left child, then RIGHT rotation at node\n\n4. RL (Right-Left): Node inserted in left subtree of right child\n   Fix: RIGHT rotation at right child, then LEFT rotation at node\n\nAfter rotation, balance factor returns to {-1, 0, +1}."
        }
    },
    {
        "id": "dsa-heap-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "A heap is typically stored as an:",
        "options": [
            "Binary search tree",
            "Hash table",
            "Array",
            "Linked list"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Heap Array Representation:\n\nComplete binary tree maps perfectly to array (0-indexed):\n\nFor node at index i:\n- Parent: floor((i-1)/2)\n- Left child: 2i + 1\n- Right child: 2i + 2\n\nFor 1-indexed:\n- Parent: floor(i/2)\n- Left child: 2i\n- Right child: 2i + 1\n\nAdvantages over pointer-based tree:\n1. No pointer overhead\n2. Excellent cache locality\n3. Easy to implement\n\nHeap is NOT a BST! Only parent-child ordering matters, not left-right."
        }
    },
    {
        "id": "dsa-heap-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Heapify operation (build heap from array) takes:",
        "options": [
            "O(n log n)",
            "O(n²)",
            "O(log n)",
            "O(n)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Build Heap (Heapify) Complexity:\n\nNaive analysis: Insert n elements, each O(log n) → O(n log n)\nBut bottom-up heapify is actually O(n)!\n\nWhy? Most nodes are at bottom levels.\n- n/2 leaves: 0 work\n- n/4 nodes: 1 swap max\n- n/8 nodes: 2 swaps max\n...\nSum = n/4·1 + n/8·2 + n/16·3 + ... = O(n)\n\nBottom-up: Start from last non-leaf (index n/2-1) and sift down each. Much more efficient than top-down construction!"
        }
    },
    {
        "id": "dsa-heap-012",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Extract-max (or min) from heap takes:",
        "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Heap Extract-Max/Min Operation:\n\nSteps (for max-heap):\n1. Store root value (maximum) → O(1)\n2. Replace root with last element → O(1)\n3. Remove last element (decrease size) → O(1)\n4. Heapify-down (sift down) root to restore heap property → O(log n)\n\nHeapify-down:\n- Compare root with children\n- Swap with larger child if violated\n- Repeat until leaf or no violation\n\nTotal: O(log n) because max height = log n\n\nThis operation is core to heap sort and priority queues."
        }
    },
    {
        "id": "dsa-heap-013",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Heap sort time complexity is:",
        "options": [
            "O(n)",
            "O(n²)",
            "O(n log n)",
            "O(log n)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Heap Sort Complexity:\n\nStep 1: Build max-heap from array: O(n)\nStep 2: Repeatedly extract-max and place at end: n × O(log n)\n\nTotal: O(n) + O(n log n) = O(n log n)\n\nAdvantages:\n- In-place sorting (no extra space like merge sort)\n- Guaranteed O(n log n) worst case (unlike quicksort)\n\nDisadvantages:\n- Not stable (doesn't preserve order of equal elements)\n- Poor cache locality compared to quicksort\n- Rarely faster than optimized quicksort in practice"
        }
    },
    {
        "id": "dsa-hash-010",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Hash table with chaining uses _____ to handle collisions:",
        "options": [
            "Open addressing",
            "Binary trees",
            "Sorting",
            "Linked lists"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Hash Table Collision Resolution - Chaining:\n\nEach bucket stores a linked list (chain) of entries.\n\nInsertion: Hash to bucket, append to list → O(1)\nSearch: Hash to bucket, search list → O(1+α) average, O(n) worst\nDeletion: Hash to bucket, find and remove → O(1+α) average\n\nα = n/m is load factor (elements/buckets)\n\nAdvantages:\n- Simple to implement\n- No clustering issues\n- Load factor can exceed 1\n\nDisadvantages:\n- Extra memory for pointers\n- Cache-unfriendly due to pointer chasing"
        }
    },
    {
        "id": "dsa-hash-011",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "In linear probing, if position h(k) is occupied, we try:",
        "options": [
            "h(k)+1, h(k)+2, h(k)+3...",
            "h(k)×2, h(k)×3...",
            "h(k)+1, h(k)+4, h(k)+9...",
            "Random positions"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Linear Probing (Open Addressing):\n\nProbe sequence: h(k), h(k)+1, h(k)+2, ... (mod m)\n\nInsert: Find first empty slot in sequence\nSearch: Follow sequence until found or empty slot\nDelete: Use tombstone markers (lazy deletion)\n\nProblem: PRIMARY CLUSTERING\n- Filled slots form contiguous clusters\n- New insertions extend clusters\n- Long probe sequences develop\n\nPerformance degrades significantly as load factor → 1\n\nAdvantage: Good cache locality (sequential access)"
        }
    },
    {
        "id": "dsa-hash-012",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Quadratic probing tries positions:",
        "options": [
            "Random positions",
            "h(k)+1, h(k)+2, h(k)+3...",
            "h(k)×1, h(k)×2, h(k)×3...",
            "h(k)+1², h(k)+2², h(k)+3²..."
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Quadratic Probing:\n\nProbe sequence: h(k), h(k)+1², h(k)+2², h(k)+3², ...\n= h(k), h(k)+1, h(k)+4, h(k)+9, ... (mod m)\n\nAdvantage: Avoids primary clustering\n- Entries that hash to same slot follow same probe sequence\n\nProblem: SECONDARY CLUSTERING\n- Entries with same initial hash still cluster\n\nRequired: Table size m should be prime, and load factor α < 0.5\n(otherwise may not find empty slot due to probe wrapping)\n\nAlternative: Double hashing eliminates secondary clustering too."
        }
    },
    {
        "id": "dsa-hash-013",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Load factor α of a hash table is:",
        "options": [
            "n × m",
            "m / n",
            "n + m",
            "n / m"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Load Factor Definition: $\\alpha = n/m$ where n = number of elements currently in hash table, m = table size (number of buckets). Load factor measures how 'full' the hash table is. Examples: 100 elements, 200 buckets → α=0.5 (50% full). Performance degrades as α increases. For chaining: α can exceed 1 (avg chain length = α). For open addressing: must keep α < 1. Rehashing triggered when α exceeds threshold (typical: 0.7-0.75).",
            "formula": "$\\alpha = \\frac{n}{m}$ (load factor)"
        }
    },
    {
        "id": "dsa-hash-014",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "For a good hash table, the load factor should typically be:",
        "options": [
            "Exactly 1",
            "Less than 1 (e.g., 0.7)",
            "Greater than 1",
            "As high as possible"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hash Table Load Factor Guidelines:\n\nα = n/m (elements / table size)\n\nChaining:\n- Works fine with α > 1\n- Average chain length = α\n- Resize when α > 1-2 for performance\n\nOpen Addressing:\n- MUST have α < 1\n- Performance degrades rapidly as α → 1\n- Typical threshold: α = 0.5-0.75\n\nResizing:\n- Double table size when threshold exceeded\n- Rehash all elements to new table\n- Amortized O(1) insertion despite occasional O(n) resize"
        }
    },
    {
        "id": "dsa-trie-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "A trie (prefix tree) search time for a string of length m is:",
        "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(m)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Trie Search Complexity:\n\nTime: O(m) where m = length of search string\n\nAlgorithm:\n1. Start at root\n2. For each character c in string:\n   - If child[c] exists, move to it\n   - Else, return 'not found'\n3. Check if current node is end-of-word\n\nKey insight: O(m) is INDEPENDENT of dictionary size n!\n\nCompare to:\n- Hash table: O(m) average (must hash entire string)\n- BST of strings: O(m × log n) (string comparison is O(m))\n\nTries are especially efficient for prefix queries."
        }
    },
    {
        "id": "dsa-trie-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Tries are efficient for:",
        "options": [
            "Numeric data",
            "Graph traversal",
            "Sorting numbers",
            "Prefix-based string operations"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Trie Applications:\n\n1. AUTOCOMPLETE\n   - Find all words with given prefix in O(p + k)\n   - p = prefix length, k = number of matches\n\n2. SPELL CHECKING\n   - Check if word exists: O(m)\n   - Suggest corrections by exploring nearby nodes\n\n3. IP ROUTING\n   - Longest prefix matching for network addresses\n\n4. WORD GAMES\n   - Boggle, Scrabble word validation\n\n5. DICTIONARY IMPLEMENTATION\n   - Space-efficient when strings share prefixes\n\nVariants: Patricia trie (compressed), Suffix trie/tree"
        }
    },
    {
        "id": "ds-arr-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Arrays",
        "question": "Row-major order address of A[i][j] in m×n array (base B, element size S):",
        "options": [
            "B + i*j*S",
            "B + (i*n + j)*S",
            "B + i + j",
            "B + (j*m + i)*S"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Row-Major Order: Elements stored row by row. For A[m][n] with base B and element size S: Address of A[i][j] = B + (i*n + j)*S. We skip i complete rows (each with n elements), then j elements in current row. C, C++, Java use row-major. Fortran uses column-major.",
            "formula": "B + (i*n + j)*S"
        }
    },
    {
        "id": "ds-arr-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Arrays",
        "question": "Column-major order address of A[i][j] in m×n array (base B, element size S):",
        "options": [
            "B + i*j*S",
            "B + (i*n + j)*S",
            "B + (j*m + i)*S",
            "B + i + j"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Column-Major Order: Elements stored column by column (Fortran, MATLAB, R). For A[m][n] with base B and element size S: Address of A[i][j] = B + (j*m + i)*S. Skip j complete columns (each with m elements), then i elements in current column. Row-major vs column-major matters for cache performance when traversing matrices. Accessing in wrong order causes cache misses.",
            "formula": "$B + (j \\times m + i) \\times S$ (column-major)"
        }
    },
    {
        "id": "ds-arr-003",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Arrays",
        "question": "Row-major: A[10][20], base=1000, element=4B. Address of A[3][5] = ?",
        "correctAnswer": 1260,
        "tolerance": 0,
        "explanation": {
            "solution": "Row-Major Address Calculation: A[10][20] means 10 rows, 20 columns. For A[3][5]: Index = (3*20 + 5) = 60 + 5 = 65. Address = base + index*element_size = 1000 + 65*4 = 1000 + 260 = 1260. Formula: B + (row *num_cols + col)*element_size.",
            "formula": "$1000 + (3 \\times 20 + 5) \\times 4 = 1260$"
        }
    },
    {
        "id": "ds-arr-004",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Arrays",
        "question": "Lower triangular matrix n×n (only main diagonal and below stored). Elements stored = ?",
        "correctAnswer": 0,
        "tolerance": 0,
        "explanation": {
            "solution": "Lower Triangular Matrix Storage: Only store elements on and below main diagonal. For n×n matrix: Row 0 has 1 element, row 1 has 2, ..., row i has (i+1), ..., row (n-1) has n elements. Total = 1 + 2 + 3 + ... + n = $\\frac{n(n+1)}{2}$ elements. Example: 5×5 lower triangular stores $\\frac{5\\times 6}{2} = 15$ elements instead of 25. Space savings significant for large sparse matrices. Row-major mapping: A[i][j] at index $\\frac{i(i+1)}{2} + j$.",
            "formula": "$\\frac{n(n+1)}{2}$ elements stored"
        }
    },
    {
        "id": "ds-arr-005",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Arrays",
        "question": "Upper triangular 5×5 matrix. Non-zero elements stored = ?",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "Upper Triangular 5×5 Matrix: Store elements on and above main diagonal. Row 0 has 5 elements, row 1 has 4, row 2 has 3, row 3 has 2, row 4 has 1. Total = 5 + 4 + 3 + 2 + 1 = $\\frac{5 \\times 6}{2} = 15$ elements. Upper and lower triangular  for same n both store $\\frac{n(n+1)}{2}$ elements (symmetric count). Used in Cholesky decomposition, LU factorization.",
            "formula": "$\\frac{5 \\times 6}{2} = 15$ elements"
        }
    },
    {
        "id": "ds-stk-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stack",
        "question": "Stack follows:",
        "options": [
            "LIFO",
            "Priority",
            "Random",
            "FIFO"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Stack: Last In First Out (LIFO). Last element pushed is first to be popped. Like a stack of plates - can only add/remove from top. Operations: Push (add to top), Pop (remove from top), Peek (view top). Applications: function call stack, expression evaluation, backtracking, undo functionality. Contrast with Queue (FIFO).",
            "formula": "LIFO: Last In First Out"
        }
    },
    {
        "id": "ds-stk-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stack",
        "question": "Infix to postfix conversion uses:",
        "options": [
            "Graph",
            "Queue",
            "Stack",
            "Tree"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Infix to Postfix Conversion using Stack: Stack stores operators based on precedence. Scan infix from left to right: operands go to output, operators pushed to stack (pop higher/equal precedence first), parentheses control precedence. Result is postfix expression (no parentheses needed). Example: A+B*C → ABC*+. Detailed in dsa-stack-012.",
            "formula": "Stack for operator precedence"
        }
    },
    {
        "id": "ds-stk-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stack",
        "question": "Postfix evaluation uses:",
        "options": [
            "No data structure",
            "Two stacks",
            "One stack",
            "Queue"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Postfix Evaluation using ONE Stack: Stack holds operands/intermediate results. Scan postfix expression: push operands, when operator found pop two operands, apply operation, push result. Final stack top is answer. Example: 23+4* → 5,4 → 20. No precedence ambiguity in postfix. Detailed algorithm in dsa-stack-011.",
            "formula": "Single stack for operands"
        }
    },
    {
        "id": "ds-stk-004",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Stack",
        "question": "Number of possible BSTs with n nodes = Catalan(n). For n=3 = ?",
        "options": [
            "6",
            "4",
            "3",
            "5"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Catalan Numbers for BST: Number of structurally different BSTs with n distinct nodes = Catalan(n) = $\\frac{(2n)!}{(n+1)! \\times n!} = \\frac{1}{n+1}\\binom{2n}{n}$. For n=3: $C_3 = \\frac{6!}{4! \\times 3!} = \\frac{720}{24 \\times 6} = 5$ different BSTs. Catalan also counts parenthesizations, mountain ranges, Dyck paths. Recursive: $C_n = \\sum_{i=0}^{n-1} C_i C_{n-1-i}$.",
            "formula": "$C_n = \\frac{(2n)!}{(n+1)! \\cdot n!}$ (Catalan)"
        }
    },
    {
        "id": "ds-que-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Queue",
        "question": "Queue follows:",
        "options": [
            "Priority",
            "FIFO",
            "LIFO",
            "Random"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Queue: First In First Out (FIFO). First element enqueued is first to be dequeued. Like a line at store - people served in order they arrive. Operations: Enqueue (add to rear), Dequeue (remove from front), Peek (view front). Applications: BFS, CPU scheduling, printer queue, buffering. Implemented via array (circular queue) or linked list.",
            "formula": "FIFO: First In First Out"
        }
    },
    {
        "id": "ds-que-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Queue",
        "question": "Circular queue of size n can hold maximum:",
        "options": [
            "Unlimited",
            "n+1 elements",
            "n-1 elements (one slot wasted)",
            "n elements"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Circular Queue Capacity: Typically holds n-1 elements (one slot wasted) to distinguish between empty and full conditions. Empty: front==rear. Full: (rear+1)%n == front. Without wasting a slot, would need extra flag or count variable. Trade-off: waste one slot for simpler logic. Alternative: use size counter (can then use all n slots).",
            "formula": "Max capacity = n-1 (or n with counter)"
        }
    },
    {
        "id": "ds-que-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Queue",
        "question": "Deque supports:",
        "options": [
            "Delete at front only",
            "Random access",
            "Insert/delete at both ends",
            "Insert at rear only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Deque (Double-Ended Queue): Supports insertion and deletion at BOTH front and rear ends in O(1). Generalization of both stack and queue. Can implement stack (use one end only) or queue (enqueue at  rear, dequeue at front). Applications: window sliding, work stealing, palindrome checking. Detailed in dsa-queue-012.",
            "formula": "Deque: insertion/deletion at both ends"
        }
    },
    {
        "id": "ds-ll-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked List",
        "question": "Time to access nth element in singly linked list:",
        "options": [
            "O(1)",
            "O(n)",
            "O(n²)",
            "O(log n)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Linked List Access Time: No random access! Must traverse from head sequentially. To access nth element: start at head, follow n next pointers → O(n). Compare to array: direct access at computed address → O(1). Trade-off: linked lists have O(1) insertion/deletion at known positions, arrays have O(1) access but O(n) insertion/deletion.",
            "formula": "Access time: O(n)"
        }
    },
    {
        "id": "ds-ll-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked List",
        "question": "Doubly linked list node has:",
        "options": [
            "Only pointers",
            "Data + next pointer",
            "Only data",
            "Data + next + prev pointers"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Doubly Linked List Node Structure: Each node contains three fields: (1) data - actual value, (2) next - pointer to next node, (3) prev - pointer to previous node. Allows bidirectional traversal. Enables O(1) deletion of given node (can access predecessor directly). Extra memory for prev pointer. Applications: browser history (back/forward), LRU cache.",
            "formula": "Node: {data, next, prev}"
        }
    },
    {
        "id": "ds-ll-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Linked List",
        "question": "Detecting cycle in linked list (Floyd's algorithm) uses:",
        "options": [
            "Stack",
            "Queue",
            "Two pointers (slow and fast)",
            "One pointer"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Floyd's Cycle Detection (Tortoise-Hare): Use two pointers - slow (moves 1 step), fast (moves 2 steps). If cycle exists, they meet inside cycle. If no cycle, fast reaches NULL. Time O(n), Space O(1). To find cycle start: reset one pointer to head, move both 1 step - they meet at cycle entry. Detailed in dsa-ll-013.",
            "formula": "Slow: +1, Fast: +2 per iteration"
        }
    },
    {
        "id": "ds-tree-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Binary tree with n nodes has maximum height:",
        "options": [
            "log n",
            "n-1",
            "n/2",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Binary Tree Maximum Height: Skewed tree (all nodes on one side - left or right) has maximum height. For n nodes: height = n-1. Example: 5 nodes in left-skewed tree → height 4. Minimum height (complete/perfect tree) = $\\lfloor \\log_2 n \\rfloor$. Height affects operation complexity.",
            "formula": "Max height = n-1 (skewed)"
        }
    },
    {
        "id": "ds-tree-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Complete binary tree with n nodes has height:",
        "options": [
            "2ⁿ",
            "n",
            "⌊log₂n⌋",
            "n-1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Complete Binary Tree Height: Fills levels left-to-right, top-to-bottom. Height = $\\lfloor \\log_2 n \\rfloor$ (minimum possible height for n nodes). Perfect binary tree of height h has exactly $2^{h+1}-1$ nodes. Complete tree has $2^h$ to $2^{h+1}-1$ nodes. Heaps are complete binary trees - enables array representation.",
            "formula": "$h = \\lfloor \\log_2 n \\rfloor$ (complete)"
        }
    },
    {
        "id": "ds-tree-003",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Full binary tree with 31 nodes. Number of leaf nodes = ?",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "Full Binary Tree Relationship: In full BT, every internal node has exactly 2 children. Key formula: n = 2L - 1, where n = total nodes, L = leaves. So L = (n+1)/2 = (31+1)/2 = 16 leaves. Internal nodes = L - 1 = 15."
        }
    },
    {
        "id": "ds-tree-004",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Binary tree with 10 leaf nodes. Nodes with degree 2 = ?",
        "correctAnswer": 9,
        "tolerance": 0,
        "explanation": {
            "solution": "Binary Tree Degree-2 vs Leaf Relationship: For any binary tree, nodes with degree 2 (two children) = leaf nodes - 1. Formula: $n_2 = n_0 - 1$ where $n_2$ = degree-2 nodes, $n_0$ = leaf nodes. So 10 leaves → 9 degree-2 nodes. Proof via edge counting: $n = n_0 + n_1 + n_2$ and edges $= n-1 = n_1 + 2n_2$.",
            "formula": "$n_2 = n_0 - 1$ (binary tree)"
        }
    },
    {
        "id": "ds-tree-005",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Trees",
        "question": "Inorder traversal of BST gives:",
        "options": [
            "Reverse sorted",
            "Sorted order",
            "Level order",
            "Random order"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "BST Inorder Traversal: Visits nodes in sorted (ascending) order. Traversal: Left subtree → Root → Right subtree. BST property ensures left < root < right, so inorder  gives ascending sequence. To get descending: reverse inorder (Right → Root → Left). Used for sorted iteration over BST. Time: O(n) to visit all nodes.",
            "formula": "Inorder(BST) = Sorted sequence"
        }
    },
    {
        "id": "ds-bst-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "BST",
        "question": "Average case search in balanced BST:",
        "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Balanced BST Search: Average and best case O(log n) for balanced trees (AVL, Red-Black). Height is O(log n), search follows one root-to-leaf path. Each comparison eliminates half the remaining nodes (like binary search). Balanced trees maintain O(log n) height through rotations. Compare to skewed BST: O(n) worst case.",
            "formula": "O(log n) for balanced BST"
        }
    },
    {
        "id": "ds-bst-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "BST",
        "question": "Worst case search in BST (skewed):",
        "options": [
            "O(log n)",
            "O(n²)",
            "O(n)",
            "O(1)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Skewed BST Worst Case: When BST degenerates into linked list (all nodes on one side). Happens with sorted/reverse-sorted insertion order without balancing. Height = n-1, search requires traversing all nodes → O(n). Solution: use self-balancing BSTs (AVL, Red-Black) that guarantee O(log n) height via rotations.",
            "formula": "O(n) worst case (skewed)"
        }
    },
    {
        "id": "ds-bst-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "BST",
        "question": "BST deletion of node with two children uses:",
        "options": [
            "Mark as deleted",
            "Rebuild tree",
            "Replace with inorder successor/predecessor",
            "Just remove"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BST Deletion of Node with Two Children: Replace with inorder successor (smallest in right subtree) or inorder predecessor (largest in left subtree). This maintains BST property. Then delete the successor/predecessor from its original position (which has at most one child)."
        }
    },
    {
        "id": "ds-avl-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "AVL",
        "question": "AVL tree balance factor for each node:",
        "options": [
            "-1, 0, or 1",
            "Only positive",
            "Only 0",
            "Any value"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "AVL Balance Factor: For every node, |height(left subtree) - height(right subtree)| ≤ 1. Balance factor = -1, 0, or +1. If |BF| > 1 after insertion/deletion, rotations restore balance. Guarantees O(log n) height, hence O(log n) operations."
        }
    },
    {
        "id": "ds-avl-002",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "AVL",
        "question": "Minimum nodes in AVL tree of height 5 = ?",
        "correctAnswer": 20,
        "tolerance": 0,
        "explanation": {
            "solution": "Minimum Nodes in AVL Tree: Recurrence $N(h) = N(h-1) + N(h-2) + 1$ (Fibonacci-like). $N(0)=1, N(1)=2, N(2)=4, N(3)=7, N(4)=12, N(5)=20$. AVL with minimum nodes resembles Fibonacci tree - highly unbalanced while still satisfying balance factor ≤1. Inversely: maximum height for n nodes ≈ $1.44\\log_2 n$.",
            "formula": "$N(h) = N(h-1)+N(h-2)+1$"
        }
    },
    {
        "id": "ds-avl-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "AVL",
        "question": "AVL tree rotations for LL imbalance:",
        "options": [
            "Right rotation",
            "Left rotation",
            "Right-Left",
            "Left-Right"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "AVL LL Rotation: Left-Left imbalance means node inserted in left subtree of left child. Fix: SINGLE RIGHT rotation at unbalanced node (pivot on left child). Rotation brings left child up, unbalanced node down as right child. Restores balance factor to {-1,0,+1}. Time: O(1).",
            "formula": "LL: single right rotation"
        }
    },
    {
        "id": "ds-avl-004",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "AVL",
        "question": "AVL tree rotations for LR imbalance:",
        "options": [
            "Right then Left",
            "Left only",
            "Right only",
            "Left then Right"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "AVL LR Rotation: Left-Right imbalance means node inserted in right subtree of left child. Fix: DOUBLE rotation - (1) LEFT rotation on left child, (2) RIGHT rotation on unbalanced node. Converts LR to LL, then fixes. Restores balances. Also called Left-Right zig-zag.",
            "formula": "LR: left then right rotation"
        }
    },
    {
        "id": "ds-heap-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Heap",
        "question": "Max-heap property:",
        "options": [
            "Parent ≤ children",
            "Balanced",
            "Parent ≥ children",
            "Sorted"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Max-Heap Property: For every node, parent value ≥ both children values. Largest element at root. Recursively applies to all subtrees. Min-heap reverses: parent ≤ children, smallest at root. Heap is complete binary tree (not BST!). Left vs right child order doesn't matter. Used for priority queues, heap sort.",
            "formula": "parent ≥ children (max-heap)"
        }
    },
    {
        "id": "ds-heap-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Heap",
        "question": "Build heap from n elements time complexity:",
        "options": [
            "O(log n)",
            "O(n log n)",
            "O(n²)",
            "O(n)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Build Heap in O(n): Counter-intuitive but true! Bottom-up heapify is O(n), not O(n log n). Why? Most nodes are near bottom and need few swaps. Mathematical proof: Σ(nodes at level h) × (height - h) = O(n). Much faster than n insertions (which would be O(n log n))."
        }
    },
    {
        "id": "ds-heap-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Heap",
        "question": "Heap sort time complexity:",
        "options": [
            "O(n²)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Heap Sort Time Complexity: Guaranteed O(n log n) in ALL cases (best, average, worst). Algorithm: (1) Build max-heap O(n), (2) Extract-max n times, each O(log n) → total O(n log n). In-place sorting. Not stable. Slower than quicksort in practice due to poor cache locality, but worst-case guarantee is valuable.",
            "formula": "O(n log n) guaranteed"
        }
    },
    {
        "id": "ds-heap-004",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Heap",
        "question": "In array representation of heap, left child of index i is at:",
        "correctAnswer": 0,
        "tolerance": 0,
        "explanation": {
            "solution": "Heap Array Indexing (0-based): For node at index i: left child = 2i+1, right child = 2i+2, parent = $\\lfloor (i-1)/2 \\rfloor$. For 1-based: left = 2i, right = 2i+1, parent = $\\lfloor i/2 \\rfloor$ (simpler formulas). Root at index 0 (or 1). Complete binary tree property enables efficient array mapping.",
            "formula": "Left = 2i+1 (0-based)"
        }
    },
    {
        "id": "ds-hash-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Average case search in hash table:",
        "options": [
            "O(n)",
            "O(1)",
            "O(n²)",
            "O(log n)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hash Table Average Search: O(1) average case with good hash function and load factor < 1. Directly compute index from key, access in constant time. Assumption: uniform distribution, simple uniform hashing. Collisions handled by chaining (O(1+α)) or open addressing. Worst case: O(n) if all keys collide.",
            "formula": "O(1) average"
        }
    },
    {
        "id": "ds-hash-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Collision in hashing means:",
        "options": [
            "Key not found",
            "Invalid key",
            "Table full",
            "Two keys map to same index"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Hash Collision: Two different keys k1 ≠ k2 hash to same index h(k1) = h(k2). Inevitable by pigeonhole principle (infinite keys, finite table). Collision resolution: chaining (linked lists at each bucket) or open addressing (probe for next empty slot). Good hash function minimizes, but can't eliminate collisions.",
            "formula": "h(k1) = h(k2) where k1 ≠ k2"
        }
    },
    {
        "id": "ds-hash-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Chaining handles collisions by:",
        "options": [
            "Storing collisions in linked list",
            "Rehashing",
            "Probing next slot",
            "Rejecting"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Chaining Collision Resolution: Each bucket contains linked list of all key-value pairs that hash to that index. Insert: append to list at h(k). Search: traverse list at h(k). Load factor α can exceed 1. Average search time O(1+α). Simple, no clustering, but extra memory for pointers.",
            "formula": "Each bucket = linked list"
        }
    },
    {
        "id": "ds-hash-004",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Linear probing handles collision by:",
        "options": [
            "Checking next slot linearly",
            "Double hashing",
            "Binary search",
            "Linked list"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Linear Probing Collision Resolution: If h(k) occupied, try h(k)+1, h(k)+2, ... (mod m) until empty slot found. Open addressing - all elements in table itself (no pointers). Problem: PRIMARY CLUSTERING - contiguous blocks of occupied slots form, increasing probe length. Deletion tricky (use tombstones). Load factor must be < 1.",
            "formula": "Probe: h(k), h(k)+1, h(k)+2,..."
        }
    },
    {
        "id": "ds-hash-005",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Primary clustering is problem with:",
        "options": [
            "All methods",
            "Double hashing",
            "Linear probing",
            "Chaining"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Primary Clustering in Linear Probing: Contiguous filled slots cluster together. New keys hashing anywhere in cluster extend it. Long probe sequences develop. Performance degrades significantly as load factor increases. Quadratic probing reduces (but doesn't eliminate via secondary clustering). Double hashing eliminates clustering.",
            "formula": "Long contiguous filled blocks"
        }
    },
    {
        "id": "ds-hash-006",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Double hashing uses:",
        "options": [
            "Two passes",
            "Two chains",
            "Two tables",
            "Two hash functions"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Double Hashing: Uses TWO hash functions h1(k) and h2(k). Probe sequence: h1(k), h1(k)+h2(k), h1(k)+2*h2(k), ... (all mod m). h2(k) should never be 0 and should be relatively prime to m (use prime table size). Eliminates both primary and secondary clustering. Best open addressing method but requires good second hash function.",
            "formula": "Probe: h1(k) + i*h2(k)"
        }
    },
    {
        "id": "ds-hash-007",
        "type": "NAT",
        "topic": "dsa",
        "subtopic": "Hashing",
        "question": "Hash table size 11, h(k)=k%11. Insert 22,33,44. Collisions = ?",
        "correctAnswer": 2,
        "tolerance": 0,
        "explanation": {
            "solution": "Hash Collision Calculation: h(k)=k%11. 22%11=0 (slot 0), 33%11=0 (collision! slot 0 occupied), 44%11=0 (collision again!). Total collisions = 2. With linear probing: 22 at index 0, 33 at index 1, 44 at index 2. All three keys have same hash value (0).",
            "formula": "22%11=33%11=44%11=0"
        }
    },
    {
        "id": "ds-graph-001",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Graph",
        "question": "BFS uses:",
        "options": [
            "Heap",
            "Hash table",
            "Stack",
            "Queue"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "BFS Uses Queue: Breadth-First Search explores level by level. Queue ensures FIFO - visit nodes in order discovered. Enqueue starting vertex, then repeatedly: dequeue vertex, visit it, enqueue unvisited neighbors. Queue enforces level-order traversal. Applications: shortest path in unweighted graphs, web crawlers. Time: O(V+E).",
            "formula": "BFS: Queue (FIFO)"
        }
    },
    {
        "id": "ds-graph-002",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Graph",
        "question": "DFS uses:",
        "options": [
            "Two queues",
            "Heap",
            "Queue",
            "Stack (or recursion)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "DFS Uses Stack: Depth-First Search explores as deep as possible before backtracking. Stack provides LIFO - most recent unvisited neighbor explored first. Implementation: explicit stack or recursion (implicit call stack). Visit vertex, mark visited, push unvisited neighbors. Applications: topological sort, cycle detection, pathfinding. Time: O(V+E).",
            "formula": "DFS:  Stack or recursion (LIFO)"
        }
    },
    {
        "id": "ds-graph-003",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Graph",
        "question": "BFS and DFS time complexity for adjacency list:",
        "options": [
            "O(V×E)",
            "O(E)",
            "O(V)",
            "O(V+E)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "BFS/DFS Time Complexity for Adjacency List: Visit each vertex once (O(V)) and examine each edge once in undirected or twice in directed (O(E)). Total: O(V + E). Space: O(V) for visited array and queue/stack. For adjacency matrix: O(V²) time (must check all entries for each vertex).",
            "formula": "O(V+E) for adjacency list"
        }
    },
    {
        "id": "ds-graph-004",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Graph",
        "question": "BFS finds shortest path in:",
        "options": [
            "No graphs",
            "All graphs",
            "Weighted graph",
            "Unweighted graph"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "BFS Shortest Path: In UNWEIGHTED graphs, BFS finds shortest path (minimum number of edges) from source to all reachable vertices. Why? Level-by-level expansion ensures first visit to vertex is via shortest path. For WEIGHTED graphs, use Dijkstra's (non-negative weights) or Bellman-Ford (allows negative weights).",
            "formula": "BFS shortest path: unweighted only"
        }
    },
    {
        "id": "ds-graph-005",
        "type": "MCQ",
        "topic": "dsa",
        "subtopic": "Graph",
        "question": "Topological sort applies to:",
        "options": [
            "Undirected graphs",
            "All graphs",
            "Cyclic graphs",
            "DAG (Directed Acyclic Graph)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Topological Sort for DAGs: Linear ordering of vertices such that for every directed edge u→v, u comes before v in ordering. ONLY possible for Directed Acyclic Graphs (no cycles - would create circular dependency). Algorithm: DFS or Kahn's (BFS-based, remove vertices with in-degree 0). Applications: task scheduling, build systems, prerequisite chains. Time: O(V+E).",
            "formula": "Topological sort: DAG only"
        }
    }
]);