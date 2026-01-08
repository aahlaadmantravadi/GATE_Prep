/**
 * DBMS Extended - Comprehensive Coverage
 * ER Model, Relational Algebra, SQL, Transactions, Concurrency
 */

Questions.register([
    // ========== ER MODEL ==========
    {
        id: "db-er-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "In ER model, a weak entity:",
        options: ["Has a primary key", "Depends on identifying (strong) entity", "Has its own existence", "Cannot have attributes"],
        correctAnswer: 1,
        explanation: { solution: "Weak entity has no primary key of its own, depends on strong entity for identification" }
    },
    {
        id: "db-er-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Cardinality constraint types include:",
        options: ["Primary and foreign", "One-to-one, one-to-many, many-to-many", "Strong and weak", "Total and partial"],
        correctAnswer: 1,
        explanation: { solution: "Cardinality: 1:1, 1:N, M:N describe relationship between entity occurrences" }
    },
    {
        id: "db-er-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Total participation means:",
        options: ["Some entities may not participate", "Every entity must participate in relationship", "Relationship is M:N", "Primary key is required"],
        correctAnswer: 1,
        explanation: { solution: "Total: every instance must participate. Partial: some may not participate." }
    },
    {
        id: "db-er-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Multi-valued attribute is one that:",
        options: ["Has only one value", "Can have multiple values for an entity", "Is derived from other attributes", "Is a key attribute"],
        correctAnswer: 1,
        explanation: { solution: "Multi-valued: e.g., phone numbers (one person can have many). Shown as double oval." }
    },
    {
        id: "db-er-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Generalization creates:",
        options: ["Bottom-up hierarchy", "Top-down hierarchy", "Horizontal split", "Circular reference"],
        correctAnswer: 0,
        explanation: { solution: "Generalization: combine lower entities into higher (bottom-up). Specialization is top-down." }
    },
    // ========== RELATIONAL ALGEBRA ==========
    {
        id: "db-ra-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Selection (σ) operation:",
        options: ["Chooses columns", "Chooses rows based on condition", "Combines tables", "Renames attributes"],
        correctAnswer: 1,
        explanation: { solution: "Selection σₚ(R) returns rows of R satisfying predicate p" }
    },
    {
        id: "db-ra-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Projection (π) operation:",
        options: ["Chooses columns", "Chooses rows", "Joins tables", "Groups rows"],
        correctAnswer: 0,
        explanation: { solution: "Projection π_{A,B}(R) returns only columns A, B from R, removing duplicates" }
    },
    {
        id: "db-ra-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Natural join (⋈) combines tables on:",
        options: ["All attributes", "Common attributes with same values", "Primary key only", "Any user-specified condition"],
        correctAnswer: 1,
        explanation: { solution: "Natural join: equijoin on common attributes, removes duplicate columns" }
    },
    {
        id: "db-ra-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Cartesian product (×) of tables with m and n rows has:",
        options: ["m + n rows", "m × n rows", "max(m,n) rows", "min(m,n) rows"],
        correctAnswer: 1,
        explanation: { solution: "Cartesian product: every row of first with every row of second = m×n" }
    },
    {
        id: "db-ra-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Division (÷) is useful for queries with:",
        options: ["OR conditions", "AND conditions", "ALL/FOR ALL conditions", "simple equality"],
        correctAnswer: 2,
        explanation: { solution: "Division: 'find students who take ALL courses' type queries" }
    },
    // ========== SQL EXTENDED ==========
    {
        id: "db-sql-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "DISTINCT keyword in SELECT:",
        options: ["Sorts results", "Removes duplicate rows", "Limits rows", "Joins tables"],
        correctAnswer: 1,
        explanation: { solution: "DISTINCT eliminates duplicate rows from result" }
    },
    {
        id: "db-sql-011",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "GROUP BY clause:",
        options: ["Sorts data", "Filters rows", "Partitions rows into groups for aggregation", "Joins tables"],
        correctAnswer: 2,
        explanation: { solution: "GROUP BY groups rows with same values; used with aggregate functions" }
    },
    {
        id: "db-sql-012",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "ORDER BY default sorting order is:",
        options: ["DESC", "ASC", "Random", "No specific order"],
        correctAnswer: 1,
        explanation: { solution: "ORDER BY is ascending by default. Use DESC for descending." }
    },
    {
        id: "db-sql-013",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "NULL in SQL means:",
        options: ["Zero", "Empty string", "Unknown/missing value", "False"],
        correctAnswer: 2,
        explanation: { solution: "NULL = unknown/missing. NULL = NULL is unknown, not true!" }
    },
    {
        id: "db-sql-014",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "LEFT OUTER JOIN includes:",
        options: ["Only matching rows", "All rows from left table + matching from right", "All rows from right table", "Cartesian product"],
        correctAnswer: 1,
        explanation: { solution: "Left outer: all left rows, matched right rows (or NULL if no match)" }
    },
    {
        id: "db-sql-015",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "A subquery in SELECT returning multiple rows should use:",
        options: ["= operator", "IN, ANY, ALL, EXISTS operators", "LIKE operator", "BETWEEN operator"],
        correctAnswer: 1,
        explanation: { solution: "Multi-row subqueries need IN (membership), ANY/ALL (comparisons), EXISTS (existence)" }
    },
    // ========== FUNCTIONAL DEPENDENCIES ==========
    {
        id: "db-fd-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "If A → B and B → C, then A → C is an example of:",
        options: ["Reflexivity", "Augmentation", "Transitivity", "Union"],
        correctAnswer: 2,
        explanation: { solution: "Armstrong's axiom: Transitivity - if X→Y and Y→Z, then X→Z" }
    },
    {
        id: "db-fd-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Candidate key is:",
        options: ["Minimal superkey", "Any superkey", "Foreign key", "Primary key only"],
        correctAnswer: 0,
        explanation: { solution: "Candidate key = minimal superkey (no proper subset is a superkey)" }
    },
    {
        id: "db-fd-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "A prime attribute is one that:",
        options: ["Is always primary key", "Is part of some candidate key", "Cannot be NULL", "Is always unique"],
        correctAnswer: 1,
        explanation: { solution: "Prime attribute = member of at least one candidate key" }
    },
    {
        id: "db-fd-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "4NF deals with:",
        options: ["Partial dependencies", "Transitive dependencies", "Multi-valued dependencies", "Join dependencies"],
        correctAnswer: 2,
        explanation: { solution: "4NF: eliminates multi-valued dependencies. 5NF: join dependencies." }
    },
    {
        id: "db-fd-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Lossless join decomposition ensures:",
        options: ["Less storage space", "Faster queries", "Original relation can be recovered by joining", "No functional dependencies"],
        correctAnswer: 2,
        explanation: { solution: "Lossless: R = R1 ⋈ R2 (can recover original by natural join)" }
    },
    {
        id: "db-fd-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Dependency preservation ensures:",
        options: ["All FDs can be checked within single relations", "Data is never lost", "Keys are preserved", "Joins are efficient"],
        correctAnswer: 0,
        explanation: { solution: "Dependency preserving: each FD can be verified in one relation (no joins needed)" }
    },
    // ========== TRANSACTIONS EXTENDED ==========
    {
        id: "db-trans-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Durability in ACID means:",
        options: ["Transaction takes bounded time", "Once committed, changes persist despite failures", "Transaction runs in isolation", "Database remains consistent"],
        correctAnswer: 1,
        explanation: { solution: "Durability: committed changes survive system crashes (via logs, disk writes)" }
    },
    {
        id: "db-trans-011",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Cascading rollback occurs when:",
        options: ["One transaction aborts, causing others to abort", "All transactions commit", "Disk fails", "Lock is acquired"],
        correctAnswer: 0,
        explanation: { solution: "Cascading rollback: T2 reads uncommitted data from T1; if T1 aborts, T2 must also abort" }
    },
    {
        id: "db-trans-012",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "A recoverable schedule ensures:",
        options: ["No deadlock", "If T2 reads from T1, T1 commits before T2 commits", "All transactions succeed", "No locks needed"],
        correctAnswer: 1,
        explanation: { solution: "Recoverable: if T_j reads from T_i, then T_i commits before T_j" }
    },
    {
        id: "db-trans-013",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Strict 2PL differs from basic 2PL by:",
        options: ["Using more locks", "Holding exclusive locks until commit/abort", "Allowing more concurrency", "Not using locks"],
        correctAnswer: 1,
        explanation: { solution: "Strict 2PL: hold all X-locks until end of transaction (prevents cascading rollback)" }
    },
    {
        id: "db-trans-014",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "In timestamp ordering, if Ti wants to read X but W-TS(X) > TS(Ti):",
        options: ["Ti proceeds", "Ti waits", "Ti is rolled back", "X is deleted"],
        correctAnswer: 2,
        explanation: { solution: "Read too late: a younger transaction already wrote X, so Ti's read is invalid - T_i must rollback" }
    },
    // ========== B/B+ TREES EXTENDED ==========
    {
        id: "db-btree-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "In a B+ tree of order p, each non-root internal node has at least:",
        options: ["1 key", "⌈p/2⌉ - 1 keys", "p keys", "p-1 keys"],
        correctAnswer: 1,
        explanation: { solution: "B+ tree: min keys in non-root = ⌈p/2⌉ - 1", formula: "Min keys = ⌈p/2⌉ - 1" }
    },
    {
        id: "db-btree-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree leaves are linked because:",
        options: ["Required for insertion", "Enables efficient range queries", "Saves space", "Required for deletion"],
        correctAnswer: 1,
        explanation: { solution: "Linked leaves allow sequential scan for range queries without tree traversal" }
    },
    {
        id: "db-btree-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Height of B+ tree with n records and order p is approximately:",
        options: ["log₂n", "log_{⌈p/2⌉}n", "p·n", "n/p"],
        correctAnswer: 1,
        explanation: { solution: "Height ≈ log_{⌈p/2⌉}(n) - logarithmic in number of records", formula: "h ≈ log_{⌈p/2⌉}(n)" }
    },
    {
        id: "db-btree-004",
        type: "NAT",
        topic: "dbms",
        subtopic: "Indexing",
        question: "A B+ tree of order 4 (max 4 children) has root with minimum how many keys? (Root can have fewer)",
        correctAnswer: 1,
        tolerance: 0,
        explanation: { solution: "Root must have at least 1 key (2 children). Non-root minimum is higher.", formula: "Root min keys = 1" }
    }
]);

console.log("Extended DBMS questions loaded");
