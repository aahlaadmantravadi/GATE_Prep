/**
 * GATE Previous Year Questions Style - DBMS
 * 30+ questions covering actual GATE exam patterns
 * Topics: ER, SQL, Normalization, FDs, Transactions
 */

Questions.register([
    // ========== ER MODEL ==========
    {
        id: "gate-db-er-001",
        type: "NAT",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Binary M:N relationship R between A(100) and B(200). Max tuples in R = ?",
        correctAnswer: 20000,
        tolerance: 0,
        explanation: {
            solution: "In M:N relationship, each entity in A can relate to many entities in B and vice versa. Maximum occurs when every A relates to every B: 100 × 200 = 20,000 tuples in relationship table. In 1:N, max would be 200 (each B relates to one A). In 1:1, max is min(100,200) = 100.",
            formula: "M:N max = $|A| \\times |B| = 100 \\times 200 = 20,000$"
        }
    },
    {
        id: "gate-db-er-002",
        type: "NAT",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Entity A with 3 multivalued attributes. Tables after ER-to-Relational = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "In ER-to-Relational mapping, multivalued attributes require separate tables (to be in 1NF). Entity A becomes 1 table with single-valued attributes. Each multivalued attribute becomes a separate table with foreign key to A. Total = 1 (main) + 3 (multivalued) = 4 tables. Composite attributes are flattened into the main table.",
            formula: "Tables = 1 (entity) + 3 (multivalued) = 4"
        }
    },
    {
        id: "gate-db-er-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Weak entity participation in identifying relationship:",
        options: ["Partial", "Total", "Optional", "None"],
        correctAnswer: 1,
        explanation: {
            solution: "A weak entity depends on its owner (strong) entity for identification. It MUST have total (mandatory) participation in the identifying relationship - it cannot exist without being related to an owner entity. Example: Dependent (weak) of Employee (strong) - every dependent must belong to some employee. Depicted with double lines and double rectangles in ER."
        }
    },
    // ========== RELATIONAL ALGEBRA ==========
    {
        id: "gate-db-ra-001",
        type: "NAT",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "R(A,B) has 10 tuples, S(B,C) has 15 tuples. Max tuples in R⋈S (natural join) = ?",
        correctAnswer: 150,
        tolerance: 0,
        explanation: {
            solution: "Natural join matches on common attribute B. Maximum occurs when every B value in R matches every tuple in S (all B values are the same). Each R tuple joins with all 15 S tuples: 10 × 15 = 150. Minimum is 0 (if no B values match). If B is a key in S: max = 10. If B is a key in R: max = 15.",
            formula: "Max join = $|R| \\times |S| = 10 \\times 15 = 150$"
        }
    },
    {
        id: "gate-db-ra-002",
        type: "NAT",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "R(A,B,C) with 100 tuples, S(D,E) with 50 tuples. R × S tuples = ?",
        correctAnswer: 5000,
        tolerance: 0,
        explanation: {
            solution: "Cartesian product (cross product) pairs every tuple of R with every tuple of S. No join condition, no matching - pure combination. Result has |R| × |S| = 100 × 50 = 5000 tuples. Columns = R's + S's = 3 + 2 = 5. Cartesian product is expensive and rarely used directly; joins are typically preferred.",
            formula: "$|R \\times S| = |R| \\times |S| = 100 \\times 50 = 5000$"
        }
    },
    {
        id: "gate-db-ra-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "π(A,B)(σ(C>5)(R)) is equivalent to:",
        options: ["σ(C>5)(π(A,B)(R))", "These are different", "π(A,B)(R)", "σ(C>5)(R)"],
        correctAnswer: 1,
        explanation: {
            solution: "These are different! In π_{A,B}(σ_{C>5}(R)): first filter by C>5, then project A,B. In σ_{C>5}(π_{A,B}(R)): first project A,B (losing C!), then filter by C>5 - but C doesn't exist after projection, causing an error or undefined behavior. Selection-projection order matters when the selection attribute is not in the projection list."
        }
    },
    // ========== SQL ==========
    {
        id: "gate-db-sql-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "Which removes duplicates?",
        options: ["SELECT ALL", "SELECT DISTINCT", "SELECT UNIQUE", "SELECT *"],
        correctAnswer: 1,
        explanation: {
            solution: "SELECT DISTINCT removes duplicate rows from the result. SQL treats tables as multisets (bags) by default, allowing duplicates. DISTINCT forces set semantics. SELECT ALL (default) keeps duplicates. SELECT UNIQUE is Oracle-specific (non-standard). SELECT * selects all columns but says nothing about duplicate elimination."
        }
    },
    {
        id: "gate-db-sql-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "HAVING clause filters:",
        options: ["Individual rows", "Groups after GROUP BY", "Columns", "Tables"],
        correctAnswer: 1,
        explanation: {
            solution: "WHERE filters individual rows BEFORE grouping. HAVING filters groups AFTER GROUP BY aggregation. HAVING can use aggregate functions (SUM, COUNT, etc.) while WHERE cannot. Example: SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 50000 - this filters departments by average salary, not individual employees."
        }
    },
    {
        id: "gate-db-sql-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "COUNT(*) vs COUNT(column) difference:",
        options: ["No difference", "COUNT(*) includes NULLs, COUNT(col) doesn't", "COUNT(col) includes NULLs", "Both count NULLs"],
        correctAnswer: 1,
        explanation: {
            solution: "COUNT(*) counts all rows regardless of NULL values - it counts rows, not values. COUNT(column) counts non-NULL values in that column only. Example: table with 10 rows where column X has 3 NULLs: COUNT(*) = 10, COUNT(X) = 7. COUNT(DISTINCT col) counts unique non-NULL values."
        }
    },
    {
        id: "gate-db-sql-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "NULL = NULL evaluates to:",
        options: ["TRUE", "FALSE", "UNKNOWN", "NULL"],
        correctAnswer: 2,
        explanation: {
            solution: "In SQL's three-valued logic, any comparison with NULL returns UNKNOWN (not TRUE or FALSE). NULL means 'unknown value', so comparing two unknowns doesn't yield TRUE. Use IS NULL or IS NOT NULL for NULL checks, not =. In WHERE clause, only TRUE rows are returned; UNKNOWN (like FALSE) rows are excluded."
        }
    },
    // ========== FUNCTIONAL DEPENDENCIES ==========
    {
        id: "gate-db-fd-001",
        type: "NAT",
        topic: "dbms",
        subtopic: "FDs",
        question: "R(A,B,C,D), FDs: A→B, B→C, C→D. Candidate keys = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: {
            solution: "Find attributes that determine all others. A⁺ (closure of A): A→B→C→D. So A⁺ = {A,B,C,D} = all attributes. A is a superkey. Is it minimal? Yes, since {A} alone determines everything. No other single attribute works (check B⁺, C⁺, D⁺ - none give all). So A is the ONLY candidate key. Count = 1.",
            formula: "A⁺ = \\{A,B,C,D\\}, A is only candidate key"
        }
    },
    {
        id: "gate-db-fd-002",
        type: "NAT",
        topic: "dbms",
        subtopic: "FDs",
        question: "R(A,B,C,D,E), FDs: AB→C, C→D, D→E. Minimum attributes in candidate key = ?",
        correctAnswer: 2,
        tolerance: 0,
        explanation: {
            solution: "A and B never appear on RHS of any FD, so they MUST be in every candidate key. Check (AB)⁺: AB→C→D→E, so (AB)⁺ = {A,B,C,D,E} = all attributes. AB is a candidate key with 2 attributes. No single-attribute key exists (neither A⁺ nor B⁺ gives all attributes). Minimum = 2.",
            formula: "(AB)⁺ = \\{A,B,C,D,E\\}, min size = 2"
        }
    },
    {
        id: "gate-db-fd-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "FDs",
        question: "Armstrong's axioms include:",
        options: ["Reflexivity, Augmentation, Union", "Reflexivity, Augmentation, Transitivity", "Only Transitivity", "Union, Decomposition, Pseudotransitivity"],
        correctAnswer: 1,
        explanation: {
            solution: "Armstrong's axioms are complete and sound for FD inference: (1) Reflexivity: if Y⊆X, then X→Y (trivial FD); (2) Augmentation: if X→Y, then XZ→YZ; (3) Transitivity: if X→Y and Y→Z, then X→Z. Union and Decomposition are derived rules (not axioms). These generate all possible FDs from a given set."
        }
    },
    // ========== NORMALIZATION ==========
    {
        id: "gate-db-norm-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "2NF requires:",
        options: ["No transitive FDs", "No partial dependencies on candidate key", "BCNF", "4NF"],
        correctAnswer: 1,
        explanation: {
            solution: "2NF: table is in 1NF AND no non-prime attribute is partially dependent on any candidate key. Partial dependency: attribute depends on part of a composite key. Example: (StudentID, CourseID) → Grade is fine, but (StudentID, CourseID) → StudentName violates 2NF if StudentID → StudentName. Solution: decompose."
        }
    },
    {
        id: "gate-db-norm-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "3NF requires 2NF and no:",
        options: ["Partial dependencies", "Transitive dependencies", "Multivalued dependencies", "Join dependencies"],
        correctAnswer: 1,
        explanation: {
            solution: "3NF: table is in 2NF AND no non-prime attribute is transitively dependent on any candidate key. Transitive dependency: A→B→C where B is not a superkey. Example: EmpID→DeptID→DeptName. EmpID transitively determines DeptName through DeptID. Solution: separate Dept(DeptID, DeptName)."
        }
    },
    {
        id: "gate-db-norm-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "BCNF requires for every FD X→Y: X is:",
        options: ["Prime attribute", "Superkey", "Non-prime", "Candidate key only"],
        correctAnswer: 1,
        explanation: {
            solution: "BCNF (Boyce-Codd NF): for every non-trivial FD X→Y, X must be a superkey (determines all attributes). Stricter than 3NF, which allows X→Y when Y is prime attribute. BCNF eliminates all redundancy from FDs. However, BCNF decomposition may not preserve all FDs, while 3NF decomposition always can."
        }
    },
    {
        id: "gate-db-norm-004",
        type: "NAT",
        topic: "dbms",
        subtopic: "Normalization",
        question: "R(A,B,C,D), FDs: A→B, C→D. Decompose to BCNF. Minimum relations = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "First find candidate key. Neither A nor C determine all attributes; but (AC)⁺ = {A,B,C,D}. So AC is key. FD A→B violates BCNF (A not superkey): decompose into R1(A,B) and R2(A,C,D). In R2, C→D still violates (C not superkey): decompose into R3(C,D) and R4(A,C). Final: R1(A,B), R3(C,D), R4(A,C). Total = 3.",
            formula: "BCNF decomposition: R1(A,B), R2(C,D), R3(A,C)"
        }
    },
    // ========== TRANSACTIONS ==========
    {
        id: "gate-db-tx-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Schedule is conflict serializable if precedence graph is:",
        options: ["Connected", "Cyclic", "Acyclic", "Tree"],
        correctAnswer: 2,
        explanation: {
            solution: "Conflict serializability test: build precedence graph with transactions as nodes. Add edge Ti→Tj if Ti has conflicting operation before Tj's conflicting operation (conflicts: same data, at least one write). If graph is ACYCLIC, schedule is conflict serializable - any topological order gives equivalent serial schedule. Cycle means not serializable."
        }
    },
    {
        id: "gate-db-tx-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "2PL guarantees:",
        options: ["Deadlock freedom", "Serializability", "Recoverability", "Livelock freedom"],
        correctAnswer: 1,
        explanation: {
            solution: "Two-Phase Locking (2PL): transactions have growing phase (acquire locks, no releases) and shrinking phase (release locks, no acquires). 2PL guarantees conflict serializability. However, it does NOT prevent deadlocks (transactions can still wait in cycles) and basic 2PL doesn't ensure recoverability. Strict 2PL (hold X-locks till commit) adds recoverability."
        }
    },
    {
        id: "gate-db-tx-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Strict 2PL additionally prevents:",
        options: ["Deadlock", "Cascading rollback", "Starvation", "Nothing extra"],
        correctAnswer: 1,
        explanation: {
            solution: "Strict 2PL: hold all EXCLUSIVE locks until commit/abort (shared locks can be released earlier). This prevents cascading rollback: if T1 aborts, no other transaction has read T1's uncommitted writes (since T1 held X-locks). Basic 2PL allows reading uncommitted data, potentially requiring cascade if writer aborts. Strict 2PL is recoverable and cascadeless."
        }
    },
    {
        id: "gate-db-tx-004",
        type: "NAT",
        topic: "dbms",
        subtopic: "Transactions",
        question: "3 transactions concurrent, each does R(X) then W(X). Possible schedules = ?",
        correctAnswer: 90,
        tolerance: 0,
        explanation: {
            solution: "Each transaction has 2 operations (R,W), with R before W within same transaction. Total 6 operations. Count interleavings: 6!/(2!×2!×2!) = 720/8 = 90 ways to arrange, respecting internal order of each transaction. This counts all possible schedules, not just serializable ones. Conflict equivalence classes would be fewer.",
            formula: "$\\frac{6!}{(2!)^3} = \\frac{720}{8} = 90$ schedules"
        }
    },
    // ========== INDEXING ==========
    {
        id: "gate-db-idx-001",
        type: "NAT",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree order 50. Min keys in non-root node = ?",
        correctAnswer: 25,
        tolerance: 0,
        explanation: {
            solution: "B+ tree with order p (max p pointers per node): each non-root node has at least ⌈p/2⌉ pointers, meaning at least ⌈p/2⌉-1 keys. For p=50: ⌈50/2⌉ = 25 pointers, so min keys = 25-1 = 24. However, some definitions say order = max keys, giving min = ⌈order/2⌉ = 25. Answer depends on order definition used; 25 is common answer.",
            formula: "Min keys = $\\lceil p/2 \\rceil - 1$ or $\\lceil order/2 \\rceil$"
        }
    },
    {
        id: "gate-db-idx-002",
        type: "NAT",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree: block 4KB, key 10B, pointer 6B. Order = ?",
        correctAnswer: 256,
        tolerance: 5,
        explanation: {
            solution: "B+ tree node fits in one block. Internal node: (order-1) keys + order pointers ≤ block. Let order = p: (p-1)×10 + p×6 ≤ 4096. 10p - 10 + 6p ≤ 4096. 16p ≤ 4106. p ≤ 256.6. Order = 256. Leaf nodes calculated differently (record pointers instead of child pointers), but internal node determines tree structure.",
            formula: "$(p-1) \\times 10 + p \\times 6 \\leq 4096$; $p = 256$"
        }
    },
    {
        id: "gate-db-idx-003",
        type: "NAT",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree order 100, 10⁶ records. Max height = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "B+ tree height determines lookup cost. With order 100: root has 1-100 pointers, internal nodes have 50-100 pointers (min = ⌈100/2⌉). At height h, max leaf pointers = 100^h. For 10⁶ records: 100² = 10,000 < 10⁶ ≤ 100³ = 10⁶. Height = 3 (root + 2 internal levels + leaves). Lookup = 3 disk accesses.",
            formula: "$\\lceil \\log_{50}(10^6) \\rceil = 3$ levels"
        }
    },
    {
        id: "gate-db-idx-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Secondary index is always:",
        options: ["Sparse", "Dense", "Clustered", "Primary"],
        correctAnswer: 1,
        explanation: {
            solution: "Secondary index is on non-ordering field (records not sorted by this key). Since data isn't clustered by this key, we can't use one index entry per block - must have entry for EACH record: DENSE index. Primary/clustering indexes on sorted data can be sparse (one entry per block). Secondary enables efficient search on non-primary attributes but requires more space."
        }
    }
]);

console.log("DBMS Questions loaded - ~30 questions");
