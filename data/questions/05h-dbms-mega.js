/**
 * DBMS MEGA EXPANSION - ER, SQL, Normalization, Transactions, Indexing
 * Deep coverage with formulas and numerical problems
 */

Questions.register([
    // ========== ER MODEL ==========
    {
        id: "db-er-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Weak entity is one that:",
        options: ["Has primary key", "Depends on another entity for identification", "Has only one attribute", "Cannot have relationships"],
        correctAnswer: 1,
        explanation: { solution: "Weak entity: no primary key, needs owner entity" }
    },
    {
        id: "db-er-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Identifying relationship connects:",
        options: ["Two strong entities", "Strong entity to weak entity", "Two weak entities", "Entity to attribute"],
        correctAnswer: 1,
        explanation: { solution: "Identifying relationship: strong ↔ weak entity" }
    },
    {
        id: "db-er-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Multivalued attribute is shown as:",
        options: ["Simple oval", "Double oval", "Rectangle", "Diamond"],
        correctAnswer: 1,
        explanation: { solution: "Multivalued: double ellipse" }
    },
    {
        id: "db-er-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Derived attribute is shown as:",
        options: ["Simple oval", "Dashed oval", "Double oval", "Underlined"],
        correctAnswer: 1,
        explanation: { solution: "Derived: dashed ellipse (computed from others)" }
    },
    {
        id: "db-er-005",
        type: "NAT",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Binary M:N relationship between A(50 records) and B(100 records). Max tuples in relationship table = ?",
        correctAnswer: 5000,
        tolerance: 0,
        explanation: { solution: "M:N: max = 50 × 100 = 5000" }
    },
    // ========== RELATIONAL MODEL ==========
    {
        id: "db-rel-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational",
        question: "Relation (table) in RDBMS is a:",
        options: ["Set of rows (no duplicates)", "List of rows (duplicates allowed)", "Tree", "Graph"],
        correctAnswer: 0,
        explanation: { solution: "Relation: set of tuples (no duplicate rows)" }
    },
    {
        id: "db-rel-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational",
        question: "Candidate key is:",
        options: ["Any attribute", "Minimal superkey", "Foreign key", "Only primary key"],
        correctAnswer: 1,
        explanation: { solution: "Candidate key: minimal set uniquely identifying tuples" }
    },
    {
        id: "db-rel-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational",
        question: "Foreign key references:",
        options: ["Any attribute", "Primary key of another table", "Its own primary key", "Only integers"],
        correctAnswer: 1,
        explanation: { solution: "FK: references PK of another (or same) table" }
    },
    // ========== RELATIONAL ALGEBRA ==========
    {
        id: "db-ra-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "σ (sigma) is operator for:",
        options: ["Projection", "Selection (filter rows)", "Join", "Union"],
        correctAnswer: 1,
        explanation: { solution: "σ: selection (horizontal filter)" }
    },
    {
        id: "db-ra-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "π (pi) is operator for:",
        options: ["Selection", "Projection (filter columns)", "Join", "Cartesian product"],
        correctAnswer: 1,
        explanation: { solution: "π: projection (vertical filter)" }
    },
    {
        id: "db-ra-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Natural join matches on:",
        options: ["All columns", "Common attribute names", "Primary keys only", "No attributes"],
        correctAnswer: 1,
        explanation: { solution: "Natural join: equi-join on same-named attributes" }
    },
    {
        id: "db-ra-004",
        type: "NAT",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "R(A,B) has 5 tuples, S(B,C) has 8 tuples. Max tuples in R × S = ?",
        correctAnswer: 40,
        tolerance: 0,
        explanation: { solution: "Cartesian product: 5 × 8 = 40" }
    },
    {
        id: "db-ra-005",
        type: "NAT",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "R(A,B,C) has 100 tuples. After σ(A>50)(R), if 30 tuples satisfy condition, result size = ?",
        correctAnswer: 30,
        tolerance: 0,
        explanation: { solution: "Selection returns 30 tuples matching condition" }
    },
    // ========== SQL ==========
    {
        id: "db-sql-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "To eliminate duplicates in SELECT:",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
        correctAnswer: 1,
        explanation: { solution: "SELECT DISTINCT removes duplicates" }
    },
    {
        id: "db-sql-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "GROUP BY is used with:",
        options: ["WHERE only", "Aggregate functions", "INSERT", "DELETE"],
        correctAnswer: 1,
        explanation: { solution: "GROUP BY with COUNT, SUM, AVG, MAX, MIN" }
    },
    {
        id: "db-sql-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "HAVING clause filters:",
        options: ["Individual rows", "Groups formed by GROUP BY", "Columns", "Tables"],
        correctAnswer: 1,
        explanation: { solution: "HAVING filters groups after GROUP BY" }
    },
    {
        id: "db-sql-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "Order of execution: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY:",
        options: ["As written", "FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY", "SELECT first", "ORDER BY first"],
        correctAnswer: 1,
        explanation: { solution: "FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY" }
    },
    {
        id: "db-sql-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "NULL = NULL evaluates to:",
        options: ["TRUE", "FALSE", "UNKNOWN", "ERROR"],
        correctAnswer: 2,
        explanation: { solution: "NULL comparisons return UNKNOWN" }
    },
    {
        id: "db-sql-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "To check for NULL values:",
        options: ["= NULL", "IS NULL", "== NULL", "NULL()"],
        correctAnswer: 1,
        explanation: { solution: "Use IS NULL or IS NOT NULL" }
    },
    // ========== NORMALIZATION ==========
    {
        id: "db-norm-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "1NF requires:",
        options: ["No transitive dependencies", "Atomic values (no multivalued attributes)", "BCNF", "No partial dependencies"],
        correctAnswer: 1,
        explanation: { solution: "1NF: atomic values in each cell" }
    },
    {
        id: "db-norm-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "2NF requires 1NF and:",
        options: ["No transitive dependencies", "No partial dependencies on primary key", "BCNF", "No multivalued"],
        correctAnswer: 1,
        explanation: { solution: "2NF: no partial dependency (full FD on key)" }
    },
    {
        id: "db-norm-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "3NF requires 2NF and:",
        options: ["No partial dependencies", "No transitive dependencies", "BCNF", "4NF"],
        correctAnswer: 1,
        explanation: { solution: "3NF: no transitive dependencies (A→B→C where B not key)" }
    },
    {
        id: "db-norm-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "BCNF requires for every FD X→Y:",
        options: ["Y is prime", "X is superkey", "X is not superkey", "Y is key"],
        correctAnswer: 1,
        explanation: { solution: "BCNF: every determinant is superkey" }
    },
    {
        id: "db-norm-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Relation in BCNF is always in:",
        options: ["1NF only", "2NF only", "3NF", "4NF"],
        correctAnswer: 2,
        explanation: { solution: "BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF" }
    },
    {
        id: "db-norm-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Anomalies in unnormalized relations:",
        options: ["Only insertion", "Insertion, deletion, update anomalies", "Only update", "No anomalies"],
        correctAnswer: 1,
        explanation: { solution: "Redundancy causes all three anomaly types" }
    },
    // ========== FUNCTIONAL DEPENDENCIES ==========
    {
        id: "db-fd-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "FDs",
        question: "Armstrong's axioms include:",
        options: ["Reflexivity, Augmentation, Transitivity", "Only reflexivity", "Only transitivity", "None"],
        correctAnswer: 0,
        explanation: { solution: "Armstrong: reflexive, augmentation, transitive" }
    },
    {
        id: "db-fd-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "FDs",
        question: "Closure of attribute set X gives:",
        options: ["All attributes determined by X", "Only X", "All attributes", "Empty set"],
        correctAnswer: 0,
        explanation: { solution: "X⁺ = all attributes functionally determined by X" }
    },
    {
        id: "db-fd-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "FDs",
        question: "X is candidate key if:",
        options: ["X⁺ = all attributes and X is minimal", "X has one attribute", "X is primary key", "X is foreign key"],
        correctAnswer: 0,
        explanation: { solution: "CK: X⁺ = R and no proper subset of X has this property" }
    },
    {
        id: "db-fd-004",
        type: "NAT",
        topic: "dbms",
        subtopic: "FDs",
        question: "R(A,B,C,D), FDs: A→B, B→C, C→D. Number of candidate keys = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: { solution: "A→B→C→D, so A⁺ = ABCD. Only {A} is CK" }
    },
    // ========== TRANSACTIONS ==========
    {
        id: "db-tx-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "ACID properties of transactions:",
        options: ["Atomicity, Consistency, Isolation, Durability", "Only atomicity", "Only isolation", "None"],
        correctAnswer: 0,
        explanation: { solution: "ACID: Atomicity, Consistency, Isolation, Durability" }
    },
    {
        id: "db-tx-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Atomicity ensures:",
        options: ["Transactions run fast", "All operations complete or none (all-or-nothing)", "Isolation", "Durability"],
        correctAnswer: 1,
        explanation: { solution: "Atomic: complete transaction or rollback entirely" }
    },
    {
        id: "db-tx-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Serializability means:",
        options: ["Transactions run serially", "Result equivalent to some serial schedule", "No concurrency", "Fast execution"],
        correctAnswer: 1,
        explanation: { solution: "Serializable: concurrent result = some serial order" }
    },
    {
        id: "db-tx-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Conflict serializability is tested using:",
        options: ["Precedence graph (cycle detection)", "Sorting", "Hashing", "B-tree"],
        correctAnswer: 0,
        explanation: { solution: "Precedence graph: acyclic → conflict serializable" }
    },
    {
        id: "db-tx-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "2-Phase Locking (2PL) has:",
        options: ["Growing phase only", "Shrinking phase only", "Growing then shrinking phases", "No phases"],
        correctAnswer: 2,
        explanation: { solution: "2PL: acquire locks (grow) then release (shrink)" }
    },
    {
        id: "db-tx-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Strict 2PL additionally requires:",
        options: ["No locks", "Hold exclusive locks until commit", "Release immediately", "No exclusive locks"],
        correctAnswer: 1,
        explanation: { solution: "Strict 2PL: hold X-locks until commit/abort" }
    },
    // ========== RECOVERY ==========
    {
        id: "db-rec-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Recovery",
        question: "Write-Ahead Logging (WAL) requires:",
        options: ["Log after write", "Log before write to disk", "No logging", "Log only reads"],
        correctAnswer: 1,
        explanation: { solution: "WAL: log record before data written to disk" }
    },
    {
        id: "db-rec-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Recovery",
        question: "UNDO recovery is for:",
        options: ["Committed transactions", "Uncommitted transactions (rollback)", "Checkpoints", "Logging"],
        correctAnswer: 1,
        explanation: { solution: "UNDO: revert effects of uncommitted transactions" }
    },
    {
        id: "db-rec-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Recovery",
        question: "REDO recovery is for:",
        options: ["Uncommitted transactions", "Committed transactions not written to disk", "Aborted transactions", "All transactions"],
        correctAnswer: 1,
        explanation: { solution: "REDO: reapply committed but not persisted changes" }
    },
    // ========== INDEXING ==========
    {
        id: "db-idx-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Primary index is on:",
        options: ["Any attribute", "Key attribute (sorted file)", "Non-key", "None"],
        correctAnswer: 1,
        explanation: { solution: "Primary index: on ordering key field" }
    },
    {
        id: "db-idx-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Clustered index means:",
        options: ["Multiple indexes", "Data sorted by index key", "Data not sorted", "No index"],
        correctAnswer: 1,
        explanation: { solution: "Clustered: data physically ordered by index" }
    },
    {
        id: "db-idx-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Dense index has entry for:",
        options: ["Every block", "Every record", "Some records", "No records"],
        correctAnswer: 1,
        explanation: { solution: "Dense: one index entry per record" }
    },
    {
        id: "db-idx-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Sparse index has entry for:",
        options: ["Every record", "One per block (anchor record)", "No records", "All blocks"],
        correctAnswer: 1,
        explanation: { solution: "Sparse: one entry per block" }
    },
    {
        id: "db-idx-005",
        type: "NAT",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree order 100, 1 million keys. Maximum height = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "Height ≤ ⌈log₅₀(10⁶)⌉ ≈ 3 (ceil of log base ⌈m/2⌉)" }
    }
]);

console.log("DBMS Mega Expansion loaded - ~55 questions");
