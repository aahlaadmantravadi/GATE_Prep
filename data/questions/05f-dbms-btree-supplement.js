/**
 * DBMS SUPPLEMENT - B/B+ Tree Formulas, Indexing Details
 * From PDF pages 451-456
 */

Questions.register([
    // ========== FILE ORGANIZATION ==========
    {
        id: "db3-file-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "File Organization",
        question: "Block Factor (Blocking Factor) is:",
        options: ["Number of blocks per record", "Maximum records per block", "Total blocks in file", "Block size"],
        correctAnswer: 1,
        explanation: { solution: "BF = ⌊(Block size - Header) / Record size⌋" }
    },
    {
        id: "db3-file-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "File Organization",
        question: "Spanned organization allows:",
        options: ["Only one record per block", "Record to span multiple blocks", "No records in block", "Fixed size records only"],
        correctAnswer: 1,
        explanation: { solution: "Spanned: record can cross block boundary (variable length)" }
    },
    {
        id: "db3-file-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "File Organization",
        question: "Unspanned organization requires:",
        options: ["Records can cross blocks", "Complete record in one block", "No records", "Only for text files"],
        correctAnswer: 1,
        explanation: { solution: "Unspanned: easier access but may waste space" }
    },
    // ========== INDEXING BASICS ==========
    {
        id: "db3-idx-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Dense index has:",
        options: ["One entry per block", "One entry per record", "No entries", "One entry per file"],
        correctAnswer: 1,
        explanation: { solution: "Dense: index entry for every record" }
    },
    {
        id: "db3-idx-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Sparse index has:",
        options: ["Entry for every record", "Entry for each block (not every record)", "No entries", "Entry for each file"],
        correctAnswer: 1,
        explanation: { solution: "Sparse: one entry per block, requires ordered file" }
    },
    {
        id: "db3-idx-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Primary index is built on:",
        options: ["Any field", "Ordering key field (unique)", "Non-key field", "Foreign key"],
        correctAnswer: 1,
        explanation: { solution: "Primary: on ordering key, usually sparse" }
    },
    {
        id: "db3-idx-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Clustering index is built on:",
        options: ["Key ordering field", "Non-key ordering field", "Unordered field", "Primary key only"],
        correctAnswer: 1,
        explanation: { solution: "Clustering: ordered field, non-key (groups records)" }
    },
    {
        id: "db3-idx-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Secondary index is built on:",
        options: ["Ordering field only", "Non-ordering field (alternative access)", "Only primary key", "No field"],
        correctAnswer: 1,
        explanation: { solution: "Secondary: non-ordering field, always dense" }
    },
    {
        id: "db3-idx-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "I/O cost to access record using k-level multilevel index:",
        options: ["k", "k+1", "2k", "log k"],
        correctAnswer: 1,
        explanation: { solution: "k index blocks + 1 data block = k+1 I/Os" }
    },
    // ========== B TREE ==========
    {
        id: "db3-btree-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B-Tree",
        question: "B-tree of order p: internal node has at most:",
        options: ["p keys, p children", "p-1 keys, p children", "p keys, p-1 children", "p-1 keys, p-1 children"],
        correctAnswer: 1,
        explanation: { solution: "B-tree node: ≤p-1 keys, ≤p children" }
    },
    {
        id: "db3-btree-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B-Tree",
        question: "B-tree: all leaf nodes are at:",
        options: ["Different levels", "Same level (height balanced)", "Root level", "Random levels"],
        correctAnswer: 1,
        explanation: { solution: "B-tree is height-balanced: all leaves at same level" }
    },
    {
        id: "db3-btree-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B-Tree",
        question: "B-tree internal node (non-root) must have at least:",
        options: ["1 child", "⌈p/2⌉ children", "p children", "p-1 children"],
        correctAnswer: 1,
        explanation: { solution: "Minimum ⌈p/2⌉ children for internal nodes (except root)" }
    },
    {
        id: "db3-btree-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B-Tree",
        question: "In B-tree, data pointers are present in:",
        options: ["Only leaf nodes", "All nodes (internal and leaf)", "Only root", "Only internal nodes"],
        correctAnswer: 1,
        explanation: { solution: "B-tree: data pointers at all nodes (unlike B+ tree)" }
    },
    // ========== B+ TREE ==========
    {
        id: "db3-bplus-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B+ Tree",
        question: "B+ tree: data pointers are present in:",
        options: ["All nodes", "Only leaf nodes", "Only internal nodes", "Only root"],
        correctAnswer: 1,
        explanation: { solution: "B+ tree: all data at leaves, internal nodes only for navigation" }
    },
    {
        id: "db3-bplus-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B+ Tree",
        question: "B+ tree leaf nodes are:",
        options: ["Not connected", "Linked together (linked list)", "Connected to root only", "Random connections"],
        correctAnswer: 1,
        explanation: { solution: "B+ leaves linked: excellent for range queries" }
    },
    {
        id: "db3-bplus-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B+ Tree",
        question: "B+ tree is preferred over B-tree for:",
        options: ["Single record access only", "Sequential/range access", "Never preferred", "Space efficiency only"],
        correctAnswer: 1,
        explanation: { solution: "B+ tree: better for range queries (leaf linking)" }
    },
    {
        id: "db3-bplus-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B+ Tree",
        question: "B+ tree internal node order p: maximum pointers = ?, maximum keys = ?",
        options: ["p, p", "p, p-1", "p-1, p", "p-1, p-1"],
        correctAnswer: 1,
        explanation: { solution: "Internal: ≤p pointers, ≤p-1 keys" }
    },
    {
        id: "db3-bplus-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B+ Tree",
        question: "B+ tree leaf node order p: maximum data pointers = ?",
        options: ["p", "p-1", "p+1", "2p"],
        correctAnswer: 1,
        explanation: { solution: "Leaf: ≤p-1 data pointers + 1 sibling pointer", formula: "p-1 data pointers" }
    },
    {
        id: "db3-bplus-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "B+ Tree",
        question: "Height of B+ tree with n keys and order p is approximately:",
        options: ["log₂(n)", "logₚ(n)", "n/p", "p×n"],
        correctAnswer: 1,
        explanation: { solution: "Height ≈ ⌈log_p(n)⌉", formula: "h = O(log_p n)" }
    }
]);

console.log("DBMS B/B+ Tree Supplement loaded - ~20 questions");
