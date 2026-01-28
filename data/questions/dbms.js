Questions.register([
    {
        "id": "db-sql-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "To eliminate duplicates in SELECT:",
        "options": [
            "DISTINCT",
            "DIFFERENT",
            "UNIQUE",
            "SINGLE"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "SELECT DISTINCT removes duplicate rows. Applies to entire row.",
            "formula": "SELECT DISTINCT col FROM table;"
        }
    },
    {
        "id": "db-sql-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "GROUP BY is used with:",
        "options": [
            "INSERT",
            "Aggregate functions",
            "DELETE",
            "WHERE only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "GROUP BY partitions rows for aggregate functions (COUNT, SUM, AVG, MAX, MIN).",
            "formula": "SELECT col, AGG(col2) FROM table GROUP BY col;"
        }
    },
    {
        "id": "db-sql-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "HAVING clause filters:",
        "options": [
            "Individual rows",
            "Columns",
            "Groups formed by GROUP BY",
            "Tables"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "HAVING filters groups after aggregation. WHERE filters before grouping.",
            "formula": "... GROUP BY col HAVING AGG(col2) > val;"
        }
    },
    {
        "id": "db-norm-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "1NF requires:",
        "options": [
            "No transitive dependencies",
            "BCNF",
            "Atomic values (no multivalued attributes)",
            "No partial dependencies"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "1NF: Atomic values only, no multivalued or composite attributes.",
            "formula": "1NF = Atomic values + Primary key"
        }
    },
    {
        "id": "db-norm-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "2NF requires 1NF and:",
        "options": [
            "No partial dependencies on primary key",
            "No transitive dependencies",
            "No multivalued",
            "BCNF"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "2NF: 1NF + no partial dependencies (non-prime depends on part of composite key).",
            "formula": "2NF = 1NF + No partial dependencies"
        }
    },
    {
        "id": "db-norm-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "3NF requires 2NF and:",
        "options": [
            "BCNF",
            "No partial dependencies",
            "No transitive dependencies",
            "4NF"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "3NF: 2NF + no transitive dependencies (A->B->C where B not candidate key).",
            "formula": "3NF = 2NF + No transitive dependencies"
        }
    },
    {
        "id": "db-norm-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "BCNF requires for every FD X→Y:",
        "options": [
            "X is superkey",
            "X is not superkey",
            "Y is key",
            "Y is prime"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Boyce-Codd Normal Form (BCNF): Stricter than 3NF. For every functional dependency X → Y, X must be a superkey. All determinants are candidate keys. Example violating BCNF but in 3NF: R(Student, Subject, Professor) with FDs: {Student, Subject} → Professor AND Professor → Subject (each prof teaches one subject). Solution: decompose to preserve dependencies or accept 3NF. BCNF eliminates ALL redundancy from FDs but may not preserve dependencies. Use when no update anomalies acceptable.",
            "formula": "BCNF: $\\forall X \\rightarrow Y$, $X$ is superkey"
        }
    },
    {
        "id": "db-trans-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "The ACID property 'Atomicity' ensures that:",
        "options": [
            "All operations in a transaction complete or none do",
            "Transactions are executed serially",
            "Data remains consistent",
            "Changes persist after commit"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Atomicity (ACID): Transaction is indivisible unit - all operations complete successfully (commit) or none do (rollback). No partial execution. Example: Bank transfer must debit AND credit - not just one. Implementation: using transaction log for undo/redo. If system crashes mid-transaction, recovery ensures atomicity by rolling back incomplete transactions. Related to failure atomicity and durability.",
            "formula": "All or Nothing"
        }
    },
    {
        "id": "db-trans-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "A schedule is conflict serializable if and only if its precedence graph is:",
        "options": [
            "Complete",
            "Empty",
            "Cyclic",
            "Acyclic"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Conflict Serializability and Precedence Graph: Schedule is conflict serializable $\\iff$ precedence graph is ACYCLIC. Precedence graph: nodes = transactions, directed edge T1 → T2 if T1's operation conflicts with and precedes T2's operation. Cycle indicates conflicting operations that prevent serial ordering. Acyclic graph allows topological sort to produce equivalent serial schedule. Testing: O(n²) for n transactions. Stricter than view serializability.",
            "formula": "Acyclic precedence graph $\\iff$ Conflict serializable"
        }
    },
    {
        "id": "db-trans-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Two operations conflict if they are from different transactions, on the same data item, and:",
        "options": [
            "Both are write operations only",
            "Both are read operations",
            "Neither is a write operation",
            "At least one is a write operation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Conflicting Operations: Two operations conflict if: (1) from DIFFERENT transactions, (2) access SAME data item, (3) at least ONE is WRITE. Conflict types: Read-Write (R-W), Write-Read (W-R), Write-Write (W-W). Read-Read (R-R) does NOT conflict - multiple reads are safe. Order of conflicting operations matters for serializability. Swapping non-conflicting operations preserves result.",
            "formula": "Conflicts: R-W, W-R, W-W"
        }
    },
    {
        "id": "db-trans-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "In Two-Phase Locking (2PL), a transaction:",
        "options": [
            "Cannot release any lock until it has acquired all locks needed",
            "Must release all locks before acquiring new ones",
            "Doesn't need locks",
            "Can acquire locks anytime"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Two-Phase Locking (2PL): Protocol with two phases - (1) GROWING phase: acquire locks, cannot release any locks, (2) SHRINKING phase: release locks, cannot acquire new locks. Lock point = end of growing phase. Guarantees conflict serializability. Drawbacks: can cause deadlocks, cascading rollbacks possible. Strict 2PL improvement: hold all locks until commit/abort (no cascading rollbacks). Conservative 2PL: acquire all locks before execution (deadlock-free but impractical).",
            "formula": "Growing → Lock Point → Shrinking"
        }
    },
    {
        "id": "db-idx-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Primary index is on:",
        "options": [
            "None",
            "Non-key",
            "Any attribute",
            "Key attribute (sorted file)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Primary index: on ordering key (sorted file). Sparse - one entry per block.",
            "formula": "Primary: Ordered key + Sparse"
        }
    },
    {
        "id": "db-idx-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Clustered index means:",
        "options": [
            "Data not sorted",
            "No index",
            "Multiple indexes",
            "Data sorted by index key"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Clustered: data physically sorted by index key. Only one per table.",
            "formula": "Clustered = Data sorted by index"
        }
    },
    {
        "id": "db-idx-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Dense index has entry for:",
        "options": [
            "No records",
            "Some records",
            "Every block",
            "Every record"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Dense: entry for every record. Required for secondary indexes.",
            "formula": "Dense = Entry per record; Sparse = Entry per block"
        }
    },
    {
        "id": "db-idx-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Sparse index has entry for:",
        "options": [
            "One per block (anchor record)",
            "No records",
            "All blocks",
            "Every record"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Sparse index: contains entries only for some search key values - typically one entry per block pointing to first (anchor) record in that block. Requires file to be sorted by indexed attribute. Smaller index size, saves space. Search: find appropriate index entry, then sequential scan within block. Used for primary indexes. Cannot be used for secondary indexes (file not sorted).",
            "formula": "Sparse index entries $\\approx$ number of blocks"
        }
    },
    {
        "id": "db-er-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Weak entity is one that:",
        "options": [
            "Has only one attribute",
            "Has primary key",
            "Cannot have relationships",
            "Depends on another entity for identification"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Weak entity: cannot be uniquely identified by its own attributes alone - depends on relationship with owner (strong) entity for identification. No primary key, has partial key (discriminator). Represented by double rectangle in ER diagram. Example: Dependent entity depends on Employee (child's name unique within one employee, not globally). Identifying relationship (double diamond) connects weak to strong entity. Weak entity's primary key = owner's primary key + weak entity's partial key."
        }
    },
    {
        "id": "db-er-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Identifying relationship connects:",
        "options": [
            "Two strong entities",
            "Strong entity to weak entity",
            "Two weak entities",
            "Entity to attribute"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Identifying relationship: relationship between strong entity and weak entity. Represented by double diamond in ER diagram. Weak entity's existence depends on this relationship. Example: Employee (strong) HAS Dependent (weak) - the HAS relationship is identifying. Weak entity always has total participation in identifying relationship (cannot exist without owner). Strong entity may have partial or total participation."
        }
    },
    {
        "id": "db-er-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Multivalued attribute is shown as:",
        "options": [
            "Double oval",
            "Rectangle",
            "Diamond",
            "Simple oval"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Multivalued attribute: can have multiple values for single entity instance. Represented by double oval/ellipse in ER diagram. Example: Person.PhoneNumbers (one person may have multiple phones). In relational model: create separate table with foreign key reference. Cannot store directly in single column (violates 1NF). Alternative: create multiple columns (Phone1, Phone2...) but inflexible and wasteful."
        }
    },
    {
        "id": "db-er-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Derived attribute is shown as:",
        "options": [
            "Dashed oval",
            "Double oval",
            "Underlined",
            "Simple oval"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Derived attribute: value can be computed from other attributes, not stored explicitly. Represented by dashed oval in ER diagram. Example: Age derived from DateOfBirth, TotalPrice derived from Quantity × UnitPrice. Usually not stored in database (computed on-the-fly when needed) to avoid redundancy and update anomalies. May store for performance if computation expensive and value accessed frequently."
        }
    },
    {
        "id": "db-er-005",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Binary M:N relationship between A(50 records) and B(100 records). Max tuples in relationship table = ?",
        "correctAnswer": 5000,
        "tolerance": 0,
        "explanation": {
            "solution": "M:N (many-to-many) relationship: each A can relate to multiple Bs, each B to multiple As. In relational schema: requires separate relationship table with foreign keys from both entities. Maximum tuples: product of entity counts. With 50 records in A, 100 in B: max = 50 × 100 = 5000 tuples (every A paired with every B). Actual tuples depend on relationship instances. 1:1 max = min(|A|,|B|). 1:N max = |N-side|.",
            "formula": "Max M:N tuples = $|A| \\times |B|$"
        }
    },
    {
        "id": "db-ra-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "σ (sigma) is operator for:",
        "options": [
            "Union",
            "Join",
            "Projection",
            "Selection (filter rows)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "σ (sigma) = Selection operator in relational algebra. Selects rows (tuples) that satisfy given predicate/condition. Horizontal filtering. Notation: σ_condition(Relation). Example: σ_salary>50000(Employee) returns only employees earning more than 50K. Result has same schema as input relation. Commutative: σ_c1(σ_c2(R)) = σ_c2(σ_c1(R)). Can combine conditions: σ_c1 AND c2(R).",
            "formula": "$\\sigma_{condition}(R)$"
        }
    },
    {
        "id": "db-ra-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "π (pi) is operator for:",
        "options": [
            "Selection",
            "Cartesian product",
            "Join",
            "Projection (filter columns)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "π (pi) = Projection operator in relational algebra. Selects specific columns (attributes) from relation. Vertical filtering. Removes duplicates by default. Notation: π_attribute-list(Relation). Example: π_name,dept(Employee) returns only name and department columns for all employees. Result schema has only projected attributes. NOT commutative generally. Cardinality ≤ original (due to duplicate elimination).",
            "formula": "$\\pi_{A_1, A_2, ..., A_n}(R)$"
        }
    },
    {
        "id": "db-ra-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Natural join matches on:",
        "options": [
            "All columns",
            "No attributes",
            "Primary keys only",
            "Common attribute names"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Natural join (⋈): equijoin on all common attributes (same name and compatible type). Automatically matches and removes duplicate columns. Example: Student(SID, name, deptID) ⋈ Department(deptID, dname) joins on deptID. Result: (SID, name, deptID, dname) - deptID appears once. Implicitly uses equality on common attributes. If no common attributes, becomes Cartesian product. Commutative and associative.",
            "formula": "$R \\bowtie S$ joins on common attributes"
        }
    },
    {
        "id": "db-ra-004",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "R(A,B) has 5 tuples, S(B,C) has 8 tuples. Max tuples in R × S = ?",
        "correctAnswer": 40,
        "tolerance": 0,
        "explanation": {
            "solution": "Cartesian product (R × S): combines every tuple from R with every tuple from S. Result has |R| × |S| tuples. Schema = all attributes from R + all attributes from S. With R having 5 tuples and S having 8 tuples: result = 5 × 8 = 40 tuples. If R has n attributes and S has m attributes, result has n+m attributes. Usually followed by selection to get meaningful join. Memory intensive for large relations.",
            "formula": "$|R \\times S| = |R| \\times |S|$"
        }
    },
    {
        "id": "db-ra-005",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "R(A,B,C) has 100 tuples. After σ(A>50)(R), if 30 tuples satisfy condition, result size = ?",
        "correctAnswer": 30,
        "tolerance": 0,
        "explanation": {
            "solution": "Selection operator σ filters tuples matching the condition. Initial relation R has 100 tuples. After applying σ_(A>50)(R), only tuples where attribute A > 50 remain. If 30 tuples satisfy this condition, result contains exactly 30 tuples. Selection doesn't change schema, only reduces cardinality. This is the relational algebra equivalent of SQL WHERE clause.",
            "formula": "$|\\sigma_{condition}(R)| \\leq |R|$"
        }
    },
    {
        "id": "db-sql-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "DISTINCT keyword in SELECT:",
        "options": [
            "Removes duplicate rows",
            "Joins tables",
            "Limits rows",
            "Sorts results"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "DISTINCT keyword eliminates duplicate rows from SELECT result. By default, SQL SELECT returns all rows including duplicates (multiset/bag semantics). DISTINCT enforces set semantics. Implementation typically uses sorting or hashing. Example: SELECT DISTINCT category FROM products; returns each unique category once. Performance impact: O(n log n) for sort-based, O(n) for hash-based (average). Use only when duplicates are truly unwanted."
        }
    },
    {
        "id": "db-sql-011",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "GROUP BY clause:",
        "options": [
            "Sorts data",
            "Partitions rows into groups for aggregation",
            "Joins tables",
            "Filters rows"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "GROUP BY partitions tuples into groups based on values of specified attributes. Each group represents all tuples with same values for GROUP BY attributes. Typically used with aggregate functions (COUNT, SUM, AVG, MAX, MIN) to compute statistics per group. Example: SELECT dept, AVG(salary) FROM emp GROUP BY dept; computes average salary for each department. All non-aggregated columns in SELECT must appear in GROUP BY. Result has one row per unique group."
        }
    },
    {
        "id": "db-sql-012",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "ORDER BY default sorting order is:",
        "options": [
            "ASC",
            "No specific order",
            "DESC",
            "Random"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "ORDER BY sorts query results. Default order is ASCENDING (ASC) - smallest to largest, A to Z. To reverse order, specify DESC. Example: SELECT * FROM emp ORDER BY salary; sorts by salary lowest to highest. ORDER BY salary DESC; sorts highest to lowest. Can sort by multiple columns: ORDER BY dept ASC, salary DESC; (sort by dept ascending, ties broken by salary descending). ORDER BY executes after SELECT, GROUP BY, HAVING. NULL values: typically sorted first in ASC, last in DESC (database-dependent)."
        }
    },
    {
        "id": "db-sql-013",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "NULL in SQL means:",
        "options": [
            "Unknown/missing value",
            "False",
            "Empty string",
            "Zero"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "NULL represents unknown or missing data - NOT zero, NOT empty string, NOT false. Special properties: NULL = NULL yields UNKNOWN (not TRUE), so use IS NULL / IS NOT NULL for comparisons. Any arithmetic operation with NULL produces NULL (5 + NULL = NULL). Three-valued logic: TRUE, FALSE, UNKNOWN. COUNT(*) counts NULLs, COUNT(column) excludes NULLs. NULL in GROUP BY: all NULLs grouped together. Constraint: NOT NULL prevents NULL values in column."
        }
    },
    {
        "id": "db-sql-014",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "LEFT OUTER JOIN includes:",
        "options": [
            "All rows from right table",
            "Only matching rows",
            "All rows from left table + matching from right",
            "Cartesian product"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "LEFT OUTER JOIN (or LEFT JOIN): returns ALL rows from left table, plus matching rows from right table. For left rows without match, right columns filled with NULL. Example: Employees LEFT JOIN Departments - shows all employees including those without departments (DeptID NULL). Preserves left table completely. Contrast: INNER JOIN (only matches), RIGHT JOIN (preserves right table), FULL OUTER JOIN (preserves both tables). Useful for finding unmatched records.",
            "formula": "$|L \\  LEFT \\  JOIN \\  R| \\geq |L|$"
        }
    },
    {
        "id": "db-sql-015",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "A subquery in SELECT returning multiple rows should use:",
        "options": [
            "= operator",
            "IN, ANY, ALL, EXISTS operators",
            "LIKE operator",
            "BETWEEN operator"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Subqueries returning multiple rows cannot use = operator (equals expects single value). Use: IN (checks membership), ANY/SOME (compares to at least one value), ALL (compares to all values), EXISTS (tests existence). Examples: WHERE dept IN (SELECT dept FROM...), WHERE salary > ANY (SELECT...), WHERE NOT EXISTS (SELECT...). = operator only for scalar (single-row, single-column) subqueries. Correlated subqueries reference outer query."
        }
    },
    {
        "id": "db-fd-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "Armstrong's axioms include:",
        "options": [
            "Only reflexivity",
            "None",
            "Only transitivity",
            "Reflexivity, Augmentation, Transitivity"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Armstrong's Axioms are sound and complete inference rules for functional dependencies: (1) REFLEXIVITY: If Y ⊆ X, then X → Y (subset rule). Example: {A,B} → A. (2) AUGMENTATION: If X → Y, then XZ → YZ (add attributes to both sides). (3) TRANSITIVITY: If X → Y and Y → Z, then X → Z. Additional derived rules: Union (X → Y and X → Z implies X → YZ), Decomposition (X → YZ implies X → Y and X → Z), Pseudotransitivity. Used to compute closures and find candidate keys.",
            "formula": "Reflexivity, Augmentation, Transitivity"
        }
    },
    {
        "id": "db-fd-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "Closure of attribute set X gives:",
        "options": [
            "All attributes determined by X",
            "Empty set",
            "All attributes",
            "Only X"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Closure of attribute set X (denoted X+) is the set of ALL attributes functionally determined by X using given FDs and Armstrong's axioms. Algorithm: (1) Start with X+ = X. (2) For each FD Y → Z, if Y ⊆ X+, add Z to X+. (3) Repeat until no more attributes can be added. Example: Given A → B, B → C, compute {A}+ = {A,B,C}. If X+ = all attributes in relation, X is a superkey. Used to test if X → Y holds (check if Y ⊆ X+).",
            "formula": "$X^+ = $ closure of $X$"
        }
    },
    {
        "id": "db-fd-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "X is candidate key if:",
        "options": [
            "X⁺ = all attributes and X is minimal",
            "X has one attribute",
            "X is foreign key",
            "X is primary key"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "X is a candidate key if: (1) X+ = R (all attributes) - X is a superkey, AND (2) No proper subset of X has closure = R (X is minimal). To find candidate keys: (1) Start with single attributes, compute closures. (2) If none works, try pairs, then triples, etc. (3) Keep only minimal superkeys. Example: If A+ = {A,B,C,D} and B+ = {B}, C+ = {C}, D+ = {D}, then {A} is the only candidate key. Multiple candidate keys possible; choose one as primary key.",
            "formula": "CK: $X^+ = R$ and $X$ is minimal"
        }
    },
    {
        "id": "db-fd-004",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "R(A,B,C,D), FDs: A→B, B→C, C→D. Number of candidate keys = ?",
        "correctAnswer": 1,
        "tolerance": 0,
        "explanation": {
            "solution": "Finding candidate keys: Compute closure of A: A+ = {A,B,C,D} (using transitivity: A→B→C→D). Since A+ = all attributes, {A} is a superkey. Check if A is minimal: no proper subset of {A} exists. Therefore {A} is the ONLY candidate key. Quick method: If one attribute determines all others through transitive chain, it's typically the sole candidate key. Count = 1.",
            "formula": "$A^+ = \\{A,B,C,D\\}$ via transitivity"
        }
    },
    {
        "id": "db-fd-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Lossless join decomposition ensures:",
        "options": [
            "No functional dependencies",
            "Faster queries",
            "Original relation can be recovered by joining",
            "Less storage space"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Lossless join decomposition: when R is decomposed into R1, R2, ..., Rn, we can reconstruct original R by natural join: R = R1 ⋈ R2 ⋈ ... ⋈ Rn. No spurious tuples generated. Test: R decomposed into (R1, R2) is lossless if intersection R1 ∩ R2 is a superkey of either R1 or R2. Essential for normalization - prevents data loss. Lossy decomposition creates extra 'garbage' tuples when joined. Always verify losslessness after decomposition.",
            "formula": "$R = R_1 \\bowtie R_2$ (no information loss)"
        }
    },
    {
        "id": "db-fd-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Dependency preservation ensures:",
        "options": [
            "Keys are preserved",
            "All FDs can be checked within single relations",
            "Data is never lost",
            "Joins are efficient"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Dependency preservation: after decomposition into R1, R2, ..., Rn, each original functional dependency can be enforced by checking within a SINGLE relation (no joins required). Projection of FD set F onto Ri contains FDs involving only Ri's attributes. Union of all projected FD sets should be equivalent to F. Alternative to losslessness - can't always have both. 3NF decomposition is always dependency-preserving, BCNF may not be. Important for efficient integrity checking without expensive joins.",
            "formula": "$F = (F_1 \\cup F_2 \\cup ... \\cup F_n)^+$"
        }
    },
    {
        "id": "db-trans-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Durability in ACID means:",
        "options": [
            "Transaction takes bounded time",
            "Transaction runs in isolation",
            "Database remains consistent",
            "Once committed, changes persist despite failures"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Durability (D in ACID): once a transaction commits (COMMIT statement succeeds), changes are permanent and survive system failures (crashes, power loss). Implemented via: (1) Write-Ahead Logging (WAL) - log changes to stable storage before modifying database. (2) Force writes to disk at commit. (3) Recovery mechanisms restore committed transactions after crash. Opposite: uncommitted changes (in progress) are lost on crash. Critical for data reliability in banking, e-commerce, etc."
        }
    },
    {
        "id": "db-trans-011",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Cascading rollback occurs when:",
        "options": [
            "Lock is acquired",
            "Disk fails",
            "One transaction aborts, causing others to abort",
            "All transactions commit"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Cascading rollback: Transaction T2 reads uncommitted (dirty) data written by T1. If T1 aborts, T2's read is based on invalid data - T2 must also abort. Can cascade further: if T3 read from T2, T3 must abort too. Problem: multiple transactions fail due to one failure, reduces availability. Solution: Strict 2PL or Rigorous 2PL - hold exclusive locks until commit, preventing dirty reads. Recoverable schedules avoid cascading by ensuring T2 commits only after T1 commits.",
            "formula": "$T_1$ aborts → $T_2$ (read from $T_1$) must abort"
        }
    },
    {
        "id": "db-trans-012",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "A recoverable schedule ensures:",
        "options": [
            "If T2 reads from T1, T1 commits before T2 commits",
            "No locks needed",
            "All transactions succeed",
            "No deadlock"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Recoverable schedule: if transaction Tj reads data item written by Ti, then Ti must commit BEFORE Tj commits. Prevents reading uncommitted data and committing based on it. If Ti aborts after Tj commits, cannot undo Tj (already committed - durability). Recoverable schedules avoid this impossible situation. Stricter than cascadeless: cascadeless requires Ti commits before Tj reads (prevents cascading). All cascadeless schedules are recoverable, but not vice versa.",
            "formula": "If $T_j$ reads from $T_i$: commit($T_i$) < commit($T_j$)"
        }
    },
    {
        "id": "db-trans-013",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Strict 2PL differs from basic 2PL by:",
        "options": [
            "Holding exclusive locks until commit/abort",
            "Allowing more concurrency",
            "Using more locks",
            "Not using locks"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Strict Two-Phase Locking (Strict 2PL): follows 2PL rules (growing/shrinking phases) PLUS holds ALL exclusive (write) locks until transaction commits or aborts. Shared locks can be released earlier. Benefit: prevents cascading rollback - no transaction reads uncommitted data. Also simplifies recovery. Basic 2PL: can release locks after use (allows cascading). Rigorous 2PL: holds ALL locks (shared and exclusive) until end. Trade-off: stricter locking = less concurrency but simpler recovery.",
            "formula": "Strict 2PL: Hold X-locks until COMMIT/ABORT"
        }
    },
    {
        "id": "db-trans-014",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "In timestamp ordering, if Ti wants to read X but W-TS(X) > TS(Ti):",
        "options": [
            "Ti proceeds",
            "Ti waits",
            "X is deleted",
            "Ti is rolled back"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Timestamp Ordering (TO) protocol: each transaction Ti gets unique timestamp TS(Ti). Each data item X has R-TS(X) = timestamp of last read, W-TS(X) = timestamp of last write. Rule: if Ti wants to read X but W-TS(X) > TS(Ti), means younger transaction already wrote X - Ti is reading 'too late' (would violate serializability). Action: ROLLBACK Ti and restart with new timestamp. Similarly, write rejected if R-TS(X) > TS(Ti) or W-TS(X) > TS(Ti). TO is deadlock-free but may have many rollbacks.",
            "formula": "If W-TS(X) > TS($T_i$): ROLLBACK $T_i$"
        }
    },
    {
        "id": "db-btree-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "In a B+ tree of order p, each non-root internal node has at least:",
        "options": [
            "1 key",
            "p-1 keys",
            "p keys",
            "⌈p/2⌉ - 1 keys"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "B+ tree of order p: each node can have max p pointers (children). For non-root internal nodes: minimum ⌈p/2⌉ children, so minimum ⌈p/2⌉ - 1 keys (n keys separate n+1 pointers). Root exception: minimum 2 children (1 key). Leaf nodes: minimum ⌈p/2⌉ records. Example: order 5 tree, non-root internal nodes have 3-5 children, 2-4 keys. High branching factor keeps tree shallow, ensuring fast search. B+ tree property: all leaves at same level.",
            "formula": "Non-root: $\\lceil p/2 \\rceil - 1 \\leq keys \\leq p-1$"
        }
    },
    {
        "id": "db-btree-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree leaves are linked because:",
        "options": [
            "Required for insertion",
            "Saves space",
            "Required for deletion",
            "Enables efficient range queries"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "B+ tree leaves linked: all data records are in leaf nodes, linked as doubly-linked list. Enables efficient range queries and sequential access. Example: SELECT * FROM emp WHERE salary BETWEEN 50K AND 80K - find first qualifying leaf, then follow links to scan all leaves in range. No need to traverse tree repeatedly. Also supports: (1) Ordered file scan without tree traversal, (2) Efficient MIN/MAX queries, (3) Fast sequential processing. Internal nodes only store routing information."
        }
    },
    {
        "id": "db-btree-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Height of B+ tree with n records and order p is approximately:",
        "options": [
            "log_{⌈p/2⌉}n",
            "p·n",
            "log₂n",
            "n/p"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "B+ tree height: each internal node has minimum ⌈p/2⌉ children (except root). With fanout f = ⌈p/2⌉, height h ≈ log_f(n) where n = number of records. Since f is typically large (100+), tree stays very shallow. Example: f=100, n=1 million records, h ≈ log_100(10^6) = 3 levels. Each level requires one disk access, so search is O(log n) disk I/Os. Height formula assumes nodes are at least half full (minimum occupancy).",
            "formula": "$h \\approx \\log_{\\lceil p/2 \\rceil}(n)$"
        }
    },
    {
        "id": "db-btree-004",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "A B+ tree of order 4 (max 4 children) has root with minimum how many keys? (Root can have fewer)",
        "correctAnswer": 1,
        "tolerance": 0,
        "explanation": {
            "solution": "B+ tree root special case: can have fewer children than non-root nodes. Minimum: 2 children (1 key separating them), unless root is also a leaf (tree has only one node). This exception allows tree to start small and grow. Order 4 tree: root min = 1 key, max = 3 keys. Non-root nodes: min = 2 keys, max = 3 keys. Root grows by splitting - when root overflows, creates new root with 1 key pointing to 2 children.",
            "formula": "Root: $1 \\leq keys \\leq p-1$"
        }
    },
    {
        "id": "db2-er-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Entity set is a collection of:",
        "options": [
            "Relationships",
            "Entities of same type",
            "Keys",
            "Attributes"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Entity Set: collection of entities of SAME TYPE sharing common properties/structure (attributes). Example: STUDENT entity set contains all student entities; each student has same attributes (SID, Name, DOB). Represented by rectangle in ER diagram. Entity = instance/individual object, Entity Set = collection/class of such objects. Each entity uniquely identified by its key. All entities in set have same schema but different values. Contrast: Relationship set connects entities from different entity sets.",
            "formula": "Entity Set = collection of similar entities"
        }
    },
    {
        "id": "db2-er-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Attribute types include:",
        "options": [
            "Only foreign keys",
            "Only simple",
            "Only keys",
            "Simple, composite, multivalued, derived"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Attribute types in ER model: (1) SIMPLE/ATOMIC: indivisible (Name), (2) COMPOSITE: can be divided into sub-attributes (Address = Street + City + ZIP), (3) MULTIVALUED: can have multiple values (PhoneNumbers - one person may have multiple phones, shown as double oval), (4) DERIVED: computed from other attributes (Age from DOB, shown as dashed oval). Composite and multivalued require special handling in relational schema. Derived attributes not usually stored."
        }
    },
    {
        "id": "db2-er-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "A multivalued attribute can have:",
        "options": [
            "Only derived values",
            "Only one value",
            "Multiple values for an entity",
            "No values"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Multivalued attribute: Single entity instance can have MULTIPLE values for this attribute. Examples: Person.PhoneNumbers (person can have home, mobile, work phones), Student.Hobbies, Employee.Skills. Representation: double oval in ER diagram. Relational mapping: create separate table with foreign key. Example: if Employee has multivalued Skill, create table Skills(EmpID, Skill) with composite key. Cannot store in single column without violating 1NF."
        }
    },
    {
        "id": "db2-er-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Derived attribute is computed from:",
        "options": [
            "Foreign keys",
            "Only primary key",
            "Other attributes (e.g., age from DOB)",
            "Nothing"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Derived attribute: value computed/derived from other stored attributes, NOT stored independently (to avoid redundancy). Examples: Age from DateOfBirth, TotalSalary from Basic+Allowance+Bonus, Years_Employed from HireDate. Representation: dashed oval in ER diagram. Decision: derive during queries (saves storage, always current) vs store (faster queries, but needs updates). Typically not stored unless computation is expensive or value changes infrequently."
        }
    },
    {
        "id": "db2-er-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Relationship set represents:",
        "options": [
            "Only keys",
            "Association among entity sets",
            "Only entities",
            "Only attributes"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Relationship set: collection of relationships of same type between entity sets. Represents association/connection among entities. Example: WORKS_IN relationship between EMPLOYEE and DEPARTMENT entity sets - each relationship instance connects one employee to one department. Shown as diamond in ER diagram. Can have descriptive attributes (e.g., StartDate for WORKS_IN). Degree: number of entity sets involved. Cardinality: 1:1, 1:N, M:N."
        }
    },
    {
        "id": "db2-er-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Degree of relationship set is:",
        "options": [
            "Number of entity sets involved",
            "Number of keys",
            "Number of attributes",
            "Number of tuples"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Degree of relationship: number of entity sets participating. BINARY (degree 2): most common, e.g., Employee WORKS_FOR Department. TERNARY (degree 3): e.g., Doctor TREATS Patient using Medicine (3 entity sets). UNARY/RECURSIVE (degree 1): entity relates to itself, e.g., Employee MANAGES Employee (manager-employee hierarchy). N-ARY (degree n): n entity sets. Higher degree relationships are rare but sometimes necessary to capture complex associations.",
            "formula": "Degree = number of participating entity sets"
        }
    },
    {
        "id": "db2-er-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Cardinality ratio for a binary relationship can be:",
        "options": [
            "1:1, 1:N, M:N",
            "Only 1:1",
            "Only 1:N",
            "Only N:N"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Cardinality ratio: specifies maximum number of relationship instances an entity can participate in. For binary relationships: (1) ONE-TO-ONE (1:1): Each A relates to at most one B, and vice versa. Example: Person-Passport. (2) ONE-TO-MANY (1:N): Each A can relate to many Bs, but each B relates to at most one A. Example: Department-Employee (one dept has many employees). (3) MANY-TO-MANY (M:N): Each A can relate to many Bs and vice versa. Example: Student-Course. Affects relational schema design.",
            "formula": "Cardinality: 1:1, 1:N, M:N"
        }
    },
    {
        "id": "db2-er-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Participation constraint: total (mandatory) means:",
        "options": [
            "No participation required",
            "Optional participation",
            "Some entities participate",
            "Every entity in set must participate in relationship"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Participation constraint: (1) TOTAL/MANDATORY (double line): Every entity in entity set MUST participate in at least one relationship instance. Example: Employee must work in some Department (makes sense in many organizations). (2) PARTIAL/OPTIONAL (single line): Some entities may not participate in any relationship instance. Example: Employee may or may not have Dependents. Affects NULL constraints in relational schema - total participation means foreign key NOT NULL.",
            "formula": "Total: every entity must participate"
        }
    },
    {
        "id": "db2-er-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Weak entity set has:",
        "options": [
            "Primary key",
            "No attributes",
            "No discriminator, depends on strong entity",
            "Discriminator (partial key), depends on identifying entity"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Weak Entity Detailed: Cannot be uniquely identified by own attributes alone - existentially depends on owner (identifying/strong) entity. Has PARTIAL KEY (discriminator) - unique within owner entity's dependents, not globally unique. Primary key = owner's PK + weak entity's partial key (discriminator). Example: DEPENDENT entity depends on EMPLOYEE - Dependent_Name is unique per employee, not globally. Partial key shown as dashed underline. Total participation with owner (double line). Represented by double rectangle in ER diagram. Identifying relationship shown as double diamond.",
            "formula": "Weak Entity PK = Owner PK + Discriminator"
        }
    },
    {
        "id": "db2-er-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "ISA (Generalization/Specialization) hierarchy represents:",
        "options": [
            "Aggregation only",
            "Inheritance/IS-A relationship",
            "Composition",
            "1:N relationship"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ISA (Generalization/Specialization) hierarchy: represents IS-A relationship (inheritance). Superclass (parent) has common attributes, subclasses (children) inherit all superclass attributes plus have specific attributes. Example: PERSON (superclass) with subclasses STUDENT and EMPLOYEE. Student inherits all Person attributes (Name, DOB) and adds StudentID, GPA. Two approaches: (1) SPECIALIZATION: top-down, identify specialized subgroups. (2) GENERALIZATION: bottom-up, find common attributes. Constraints: Overlapping (can be both) vs Disjoint, Total vs Partial.",
            "formula": "Subclass INHERITS superclass attributes"
        }
    },
    {
        "id": "db2-rel-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "A relation (table) consists of:",
        "options": [
            "Only keys",
            "Only columns",
            "Only rows",
            "Rows (tuples) and columns (attributes)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Relation (table): mathematical set of tuples having same structure (attributes). Each tuple is an ordered list of values. Properties: (1) Tuples are UNORDERED (no inherent top/bottom), (2) Attributes are UNORDERED (column order doesn't matter conceptually), (3) All values are ATOMIC (1NF), (4) No duplicate tuples (set property, enforced by primary key), (5) NULL allowed for unknown/inapplicable values. Example: STUDENT(SID, Name, Age) - relation has 3 attributes."
        }
    },
    {
        "id": "db2-rel-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Tuple is:",
        "options": [
            "A row in a relation",
            "A column",
            "A key",
            "An attribute"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Tuple: a row in a relation, representing one entity instance or relationship instance. Collection of related values, one for each attribute. Example: (101, 'John', 22) is a tuple in STUDENT relation. Tuples are unordered - adding/deleting tuples doesn't change relation identity. Each tuple must be unique (enforced by primary key - no duplicate rows). Tuple is to Relation as Object is to Class in OOP.",
            "formula": "Tuple = row = record"
        }
    },
    {
        "id": "db2-rel-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Attribute is:",
        "options": [
            "A relationship",
            "A table",
            "A row",
            "A column (property) of relation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Attribute: a column/property of a relation, representing a characteristic of entity or relationship. Has a name and domain (set of allowed values). Example: STUDENT relation may have attributes SID (domain: integers), Name (domain: strings), Age (domain: 0-150). Each tuple has exactly one value from the domain for each attribute (or NULL if permitted). Attributes are conceptually unordered but physically stored in some sequence.",
            "formula": "Attribute = column = field"
        }
    },
    {
        "id": "db2-rel-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Domain of an attribute is:",
        "options": [
            "Set of allowed values for the attribute",
            "Number of tuples",
            "Name of attribute",
            "Type of relation"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Domain: set of atomic/allowed values an attribute can take. Defines data type and constraints. Examples: Age domain = {0 to 150}, Gender domain = {'M', 'F', 'Other'}, Email domain = valid email strings. Ensures type safety - operations on attribute must use values from its domain. Domain can include NULL if allowed. Different attributes can share same domain (e.g., both FirstName and LastName use string domain). Constraints: CHECK, range limits.",
            "formula": "Domain = set of valid values"
        }
    },
    {
        "id": "db2-rel-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Superkey is:",
        "options": [
            "Any set of attributes that uniquely identifies tuples",
            "Minimal set of attributes uniquely identifying tuple",
            "Only primary key",
            "Only foreign key"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Superkey: ANY set of attributes that uniquely identifies each tuple in relation. Can have redundant attributes. Examples: {StudentID}, {StudentID, Name}, {StudentID, Email, Phone} all uniquely identify students - all are superkeys. Every relation has at least one superkey (set of all attributes). Superset of any superkey is also a superkey. Not necessarily minimal. Candidate keys are minimal superkeys.",
            "formula": "Superkey ⊃ uniquely identifies tuples"
        }
    },
    {
        "id": "db2-rel-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Candidate key is:",
        "options": [
            "Any superkey",
            "Non-unique key",
            "Only foreign key",
            "Minimal superkey (no proper subset is superkey)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Candidate Key Detailed: A MINIMAL superkey - uniquely identifies each tuple AND has NO redundant attributes. Removing any attribute breaks uniqueness. A relation can have MULTIPLE candidate keys. Example: STUDENT table may have {StudentID} and {Email} as candidate keys - both uniquely identify students, both are minimal. One candidate key is selected as PRIMARY KEY, others become ALTERNATE/SECONDARY  keys. Finding candidate keys: (1) Test all attribute combinations starting from single attributes, (2) Find minimal superkeys (no proper subset is superkey). {StudentID, Name} is superkey but not candidate key (not minimal - {StudentID} alone works).",
            "formula": "CK = minimal superkey"
        }
    },
    {
        "id": "db2-rel-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Primary key is:",
        "options": [
            "Foreign key",
            "Non-unique identifier",
            "Any superkey",
            "Chosen candidate key for the relation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Primary key: THE chosen candidate key for a relation - main identifier. Constraints: (1) UNIQUE: no two tuples have same PK value, (2) NOT NULL: every tuple must have PK value. Only ONE primary key per relation (but relation may have multiple candidate keys). Usually chosen based on: minimal attributes, stability (doesn't change often), meaningfulness. Other candidate keys become alternate/secondary keys. In SQL: PRIMARY KEY constraint enforces uniqueness and NOT NULL.",
            "formula": "PK = selected CK (UNIQUE + NOT NULL)"
        }
    },
    {
        "id": "db2-rel-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Foreign key is:",
        "options": [
            "Candidate key",
            "Attribute referencing primary key of another table",
            "Superkey",
            "Primary key of same table"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Foreign key (FK): attribute (or set) in relation R1 that references primary key of relation R2 (R2 can be same as R1 for recursive relationships). Establishes link between relations. Example: Employee.DeptID references Department.DeptID. Purpose: maintain referential integrity - ensures valid references. FK value must either (1) match some PK value in referenced table, OR (2) be NULL (if allowed). Can reference same table: Employee.ManagerID references Employee.EmpID.",
            "formula": "$FK \\subseteq PK_{referenced}$ or NULL"
        }
    },
    {
        "id": "db2-rel-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Model",
        "question": "Referential integrity constraint ensures:",
        "options": [
            "All attributes have values",
            "Foreign key values exist in referenced table (or are NULL)",
            "No duplicates",
            "All keys are primary"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Referential Integrity: foreign key constraint ensuring FK values are valid. Rules: (1) FK value must exist in referenced table's PK (2) OR be NULL (if NULLs allowed). Prevents 'dangling references' (pointing to non-existent tuples). Actions on violations: REJECT operation, CASCADE (propagate change), SET NULL, SET DEFAULT. Example: Cannot delete Department if Employees reference it (or cascade delete employees). Enforced by FOREIGN KEY constraint in SQL. Critical for data consistency.",
            "formula": "$\\forall FK: FK \\in PK_{ref}$ or $FK =$ NULL"
        }
    },
    {
        "id": "db2-ra-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Selection (σ) operation:",
        "options": [
            "Selects columns",
            "Joins tables",
            "Selects rows satisfying a condition",
            "Projects attributes"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Selection σ (sigma): filters rows (tuples) matching given predicate. Horizontal operation - reduces cardinality, not degree. Notation: σ_predicate(R). Predicate: boolean condition using comparison operators (=, <, >, ≤, ≥, ≠), logical operators (AND, OR, NOT). Example: σ_(salary>50000 AND dept='IT')(Employee) returns IT employees earning over 50K. Output schema same as input. Commutative: σ_c1(σ_c2(R)) = σ_c2(σ_c1(R)).",
            "formula": "$\\sigma_{condition}(R)$ - filters rows"
        }
    },
    {
        "id": "db2-ra-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Projection (π) operation:",
        "options": [
            "Selects columns (attributes)",
            "Selects rows",
            "Joins tables",
            "Renames relation"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Projection π (pi): selects specific columns (attributes) and eliminates duplicates. Vertical operation - reduces degree (number of columns). Notation: π_A1,A2,...,An(R). Example: π_name,dept(Employee) returns only name and department columns. Removes duplicate rows automatically (set semantics). Result has ≤ tuples than original (duplicates removed). Not commutative: π_A(π_B(R)) ≠ π_B(π_A(R)) in general. Idempotent: π_A(π_A(R)) = π_A(R).",
            "formula": "$\\pi_{A_1, ..., A_n}(R)$ - selects columns"
        }
    },
    {
        "id": "db2-ra-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Union (∪) of R and S requires:",
        "options": [
            "Same schema (union compatible)",
            "No requirement",
            "Different schemas",
            "Different number of tuples"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Union (R ∪ S): set of tuples in R OR S (or both), duplicates removed. Set operation - requires union compatibility: R and S must have (1) same number of attributes (same degree), (2) corresponding attributes have compatible domains (same or compatible types). Result degree = R's degree. Cardinality: |R| ≤ |R ∪ S| ≤ |R| + |S|. Commutative: R ∪ S = S ∪ R. Associative. Example: Students_2023 ∪ Students_2024 = all students.",
            "formula": "$R \\cup S$ (union-compatible)"
        }
    },
    {
        "id": "db2-ra-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Set difference (R - S) returns:",
        "options": [
            "Tuples in R but not in S",
            "Tuples in S but not in R",
            "Tuples in both R and S",
            "All tuples from both"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Set Difference (R - S): tuples that are in R but NOT in S. Set operation - requires union compatibility (same schema). Asymmetric: R - S ≠ S - R. Result has tuples from R that don't match any tuple in S. Cardinality: 0 ≤ |R - S| ≤ |R|. Example: AllStudents - GraduatedStudents = current students. Not commutative, not associative. R - R = ∅ (empty set). R - ∅ = R.",
            "formula": "$R - S = \\{t | t \\in R \\land t \\notin S\\}$"
        }
    },
    {
        "id": "db2-ra-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Cartesian product (R × S) produces:",
        "options": [
            "Difference",
            "Union of tuples",
            "Intersection",
            "Every combination of R tuple with S tuple"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Cartesian Product (R × S): every possible combination of tuples from R and S. Binary operation - does NOT require union compatibility. Result: each R tuple concatenated with each S tuple. Cardinality: |R × S| = |R| × |S|. Degree: degree(R × S) = degree(R) + degree(S). Expensive operation - produces large result. Usually followed by selection to extract meaningful combinations (equi-join). Commutative (up to attribute order). Example: Students (100) × Courses (50) = 5000 combinations.",
            "formula": "$|R \\times S| = |R| \\times |S|$, degree = $n + m$"
        }
    },
    {
        "id": "db2-ra-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Natural join (⋈) combines tuples where:",
        "options": [
            "Only primary keys match",
            "No common attributes",
            "Common attributes have equal values",
            "All attributes differ"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Natural join (R ⋈ S): equi-join on ALL common attributes (attributes with same name in both relations). Automatically matches tuples where common attribute values are equal. Removes duplicate columns from result. Example: Employee(EmpID, Name, DeptID) ⋈ Department(DeptID, DeptName) joins on DeptID, result has DeptID once. If no common attributes, becomes Cartesian product. Associative, commutative. Most common join type.",
            "formula": "$R \\bowtie S$ on common attributes"
        }
    },
    {
        "id": "db2-ra-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Theta join (R ⋈_θ S) is:",
        "options": [
            "Cartesian product followed by selection on condition θ",
            "Only projection",
            "Only natural join",
            "Only union"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Theta join (R ⋈_θ S): generalized join with arbitrary condition θ. Defined as: R ⋈_θ S = σ_θ(R × S) - Cartesian product followed by selection. Condition θ can use any comparison operators (<, >, =, ≠, ≤, ≥) on attributes from R and S. Example: Employee ⋈_(salary>budget) Department. Special case: Equi-join when θ uses only equality. Natural join is special equi-join.",
            "formula": "$R \\bowtie_{\\theta} S = \\sigma_{\\theta}(R \\times S)$"
        }
    },
    {
        "id": "db2-ra-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Left outer join includes:",
        "options": [
            "All tuples from left + matching from right (NULLs if no match)",
            "No NULLs",
            "Only matching tuples",
            "All from right"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Left Outer Join (R ⟕ S): preserves ALL tuples from left relation R. Returns all R tuples plus matching S tuples. For R tuples without match in S, S attributes filled with NULL. Example: Employee ⟕ Department shows all employees including those without departments (DeptName = NULL). Useful for finding unmatched records. Result: |R| ≤ |R ⟕ S| ≤ |R × S|. Variants: Right Outer (preserves right), Full Outer (preserves both).",
            "formula": "$|R| \\leq |R \\  \\ltimes S|$"
        }
    },
    {
        "id": "db2-ra-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "Division (R ÷ S) is used for:",
        "options": [
            "Union",
            "Simple selection",
            "Queries with 'for all' semantics",
            "Projection only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Division (R ÷ S): finds tuples in R that are associated with ALL tuples in S. Represents 'for all' queries. Example: StudentCourse ÷ RequiredCourses = students who took ALL required courses. If R(X,Y) and S(Y), then R ÷ S has attributes X. Result = {x | for all y in S, (x,y) in R}. Not commonly supported in SQL directly, implemented using NOT EXISTS. Division is inverse of Cartesian product.",
            "formula": "$R \\div S = \\{x |  \\forall y \\in S, (x,y) \\in R\\}$"
        }
    },
    {
        "id": "db2-sql-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "SELECT DISTINCT removes:",
        "options": [
            "All rows",
            "Duplicate rows from result",
            "NULL values",
            "Primary keys"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SELECT DISTINCT: removes duplicate rows from query result, enforcing set semantics (standard SQL uses bag/multiset semantics by default). Compares entire rows for equality. Implementation: usually sorting or hashing. Example: SELECT DISTINCT city FROM customers returns each city once even if multiple customers per city. Performance cost: O(n log n) sort or O(n) hashing. Use only when duplicates truly undesirable. COUNT(DISTINCT col) counts unique values."
        }
    },
    {
        "id": "db2-sql-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "WHERE clause filters:",
        "options": [
            "Individual rows before grouping",
            "Groups",
            "Nothing",
            "Aggregates"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "WHERE clause: filters individual rows BEFORE grouping/aggregation. Row-level predicate evaluated per tuple. Execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Cannot use aggregate functions in WHERE (use HAVING for aggregates). Example: WHERE salary > 50000 filters before counting. Can use column aliases defined in SELECT only in ORDER BY, not WHERE.",
            "formula": "WHERE = row-level filter (before GROUP BY)"
        }
    },
    {
        "id": "db2-sql-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "HAVING clause filters:",
        "options": [
            "Columns",
            "Nothing",
            "Groups after GROUP BY based on aggregate conditions",
            "Individual rows"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "HAVING clause: filters groups AFTER GROUP BY based on aggregate conditions. Group-level filter. Must use aggregate functions (COUNT, SUM, AVG, etc.) or grouping columns. Example: HAVING COUNT(*) > 5 filters groups with more than 5 members. Execution after WHERE and GROUP BY. Cannot reference non-aggregated columns not in GROUP BY. Common mistake: using WHERE for aggregates or HAVING for row filtering.",
            "formula": "HAVING = group-level filter (after GROUP BY)"
        }
    },
    {
        "id": "db2-sql-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "ORDER BY clause:",
        "options": [
            "Joins tables",
            "Filters rows",
            "Sorts the result set",
            "Groups rows"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "ORDER BY: sorts query result by specified columns. Default: ASCENDING (ASC). Use DESC for descending order. Can sort by multiple columns: ORDER BY col1 ASC, col2 DESC. Execution: last operation (after SELECT). Can use column numbers: ORDER BY 1, 2. Can sort by expressions: ORDER BY (price*quantity). NULL handling: typically NULLs first in ASC, last in DESC (database-dependent). Can use NULLS FIRST/LAST.",
            "formula": "ORDER BY col [ASC|DESC]"
        }
    },
    {
        "id": "db2-sql-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "SQL aggregate functions include:",
        "options": [
            "WHERE only",
            "JOIN only",
            "COUNT, SUM, AVG, MIN, MAX",
            "SELECT only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Aggregate functions: operate on groups of rows to produce single value. (1) COUNT(*): counts all rows including NULLs, (2) COUNT(col): counts non-NULL values, (3) SUM(col): total of numeric column, (4) AVG(col): average of numeric values (excludes NULLs), (5) MIN/MAX(col): minimum/maximum value. Used with GROUP BY for per-group aggregation. Without GROUP BY: treats entire table as one group. NULL handling: all except COUNT(*) ignore NULLs.",
            "formula": "COUNT, SUM, AVG, MIN, MAX"
        }
    },
    {
        "id": "db2-sql-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "COUNT(*) counts:",
        "options": [
            "Only nulls",
            "Only non-null values",
            "All rows including NULLs",
            "Only distinct values"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "COUNT(*) vs COUNT(column): (1) COUNT(*): counts ALL rows in group including those with NULLs in any column. Returns number of tuples. (2) COUNT(column): counts rows where 'column' is NOT NULL. Ignores NULL values. (3) COUNT(DISTINCT column): counts unique non-NULL values. Example: table with 100 rows, 10 NULLs in 'email' - COUNT(*) = 100, COUNT(email) = 90, COUNT(DISTINCT email) = number of unique emails.",
            "formula": "COUNT(*) includes NULLs, COUNT(col) excludes"
        }
    },
    {
        "id": "db2-sql-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "INNER JOIN returns:",
        "options": [
            "All from left table",
            "Only matching rows from both tables",
            "All rows from both tables",
            "All from right table"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "INNER JOIN: returns only rows that have matching values in BOTH tables. Default join type (JOIN without qualifier means INNER JOIN). Syntax: R INNER JOIN S ON condition. Example: Employees INNER JOIN Departments ON emp.deptID = dept.deptID returns only employees who have valid department assignments. Non-matching rows discarded. Result: |R ⋈ S| ≤ min(|R|, |S|). Contrast: Outer joins preserve non-matching rows.",
            "formula": "INNER JOIN = matching rows only"
        }
    },
    {
        "id": "db2-sql-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "NULL comparison: what does (NULL = NULL) return?",
        "options": [
            "TRUE",
            "FALSE",
            "NULL (unknown)",
            "Error"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "NULL comparison paradox: (NULL = NULL) returns UNKNOWN (NULL), not TRUE. Reason: NULL represents unknown value - can't determine if two unknowns are equal. Three-valued logic: TRUE, FALSE, UNKNOWN. Correct NULL testing: (1) IS NULL - tests if value is NULL, (2) IS NOT NULL - tests if value exists. Cannot use = or != with NULL. Comparison operators with NULL produce NULL: (5 > NULL) = NULL. WHERE filters out NULL/UNKNOWN results.",
            "formula": "NULL = NULL → UNKNOWN; use IS NULL"
        }
    },
    {
        "id": "db2-sql-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "Subquery in WHERE clause is called:",
        "options": [
            "Join",
            "Main query",
            "Nested query / Subquery",
            "Outer query"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Subquery (Nested Query): query inside another query. Types: (1) SCALAR: returns single value, used with =, <, > operators. (2) ROW: returns single row multiple columns. (3) TABLE: returns multiple rows, used with IN, ANY, ALL, EXISTS. (4) CORRELATED: references outer query, executed per outer row. Locations: SELECT, FROM, WHERE, HAVING clauses. Example: WHERE salary > (SELECT AVG(salary) FROM emp).",
            "formula": "Subquery = query within query"
        }
    },
    {
        "id": "db2-sql-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "Correlated subquery references:",
        "options": [
            "Outer query's tables",
            "No tables",
            "System tables only",
            "Only its own tables"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Correlated subquery: inner query references columns from outer query. Executed once per outer query row (repeated execution). Example: SELECT * FROM emp e WHERE salary > (SELECT AVG(salary) FROM emp WHERE deptID = e.deptID) - compares each employee's salary to their department's average. Performance: typically slower than joins (n executions for n outer rows). Contrast: Uncorrelated subquery executes once, doesn't reference outer query.",
            "formula": "Correlated = references outer query"
        }
    },
    {
        "id": "db2-sql-011",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "EXISTS operator checks if:",
        "options": [
            "Table exists",
            "Value is NULL",
            "Value equals something",
            "Subquery returns at least one row"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "EXISTS operator: tests whether subquery returns ANY rows (non-empty result). Returns TRUE if subquery has ≥ 1 row, FALSE if empty. Often used with correlated subqueries. Example: WHERE EXISTS (SELECT * FROM orders WHERE custID = customers.id) - customers with at least one order. Performance: stops at first match (short-circuit evaluation). NOT EXISTS: checks for empty subquery result. EXISTS doesn't care about subquery columns, only row existence.",
            "formula": "EXISTS = true if subquery returns rows"
        }
    },
    {
        "id": "db2-norm-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Functional dependency X → Y means:",
        "options": [
            "Y determines X",
            "No relationship",
            "X and Y are equal",
            "X determines Y (same X → same Y)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Functional Dependency (FD) X → Y: attribute set X functionally determines Y. Meaning: whenever two tuples have same X values, they MUST have same Y values. Example: StudentID → StudentName (ID determines name uniquely). Notation: X → Y where X=determinant, Y=dependent. Key property: candidate keys functionally determine all attributes. Used for normalization, finding keys, decomposition. FDs are constraints on relation semantics, not just current instance.",
            "formula": "$X \\rightarrow Y$: same $X$ → same $Y$"
        }
    },
    {
        "id": "db2-norm-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Armstrong's axioms include:",
        "options": [
            "Reflexivity, Augmentation, Transitivity",
            "Only transitivity",
            "Only reflexivity",
            "None of these"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Armstrong's Axioms: sound and complete inference rules for FDs. (1) REFLEXIVITY: If Y ⊆ X, then X → Y (trivial FD). (2) AUGMENTATION: If X → Y, then XZ → YZ (add attributes). (3) TRANSITIVITY: If X → Y and Y → Z, then X → Z (chaining). Derived rules: UNION (X → Y and X → Z ⇒ X → YZ), DECOMPOSITION (X → YZ ⇒ X → Y and X → Z), PSEUDO-TRANSITIVITY. Sound: only valid FDs derived. Complete: all valid FDs derivable.",
            "formula": "Reflexivity, Augmentation, Transitivity"
        }
    },
    {
        "id": "db2-norm-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Closure of attribute set X (X+) is:",
        "options": [
            "Empty set",
            "X itself",
            "All attributes functionally determined by X",
            "Only primary key"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Closure X+ (X-plus): set of ALL attributes functionally determined by attribute set X under given FD set F. Algorithm: (1) Initialize X+ = X, (2) For each FD Y → Z in F, if Y ⊆ X+, add Z to X+, (3) Repeat until no new attributes added. Example: Given A → B, B → C, find {A}+ = {A,B,C}. Used to: (1) test if FD holds (X → Y holds iff Y ⊆ X+), (2) find candidate keys (if X+ = all attributes, X is superkey), (3) check BCNF/3NF violations.",
            "formula": "$X^+ = \\{A | X \\rightarrow A\\}$"
        }
    },
    {
        "id": "db2-norm-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Candidate key is found when X+ contains:",
        "options": [
            "All attributes of the relation",
            "No attributes",
            "Only primary key",
            "Only X"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Finding candidate keys using closure: (1) Compute X+ for attribute sets starting from single attributes, (2) If X+ contains ALL relation attributes, X is a superkey, (3) Check minimality - remove each attribute from X and test if closure still covers all attributes, (4) If no proper subset has full closure, X is a candidate key. Quick method: attributes NOT on right side of any FD must be in every candidate key. Multiple candidate keys possible.",
            "formula": "CK: $X^+ = R$ and X minimal"
        }
    },
    {
        "id": "db2-norm-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "1NF (First Normal Form) requires:",
        "options": [
            "No nulls",
            "No functional dependencies",
            "All attribute values are atomic (no multi-valued or composite)",
            "Only one key"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "1NF (First Normal Form): All attribute values must be ATOMIC (indivisible). No repeating groups, no multi-valued attributes, no composite attributes. Each cell contains a single value. Foundation for all higher normal forms. Violation example: Phone={123, 456} in one cell."
        }
    },
    {
        "id": "db2-norm-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "2NF requires 1NF plus:",
        "options": [
            "No partial dependencies on candidate key",
            "No multi-valued dependencies",
            "BCNF",
            "No transitive dependencies"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Second Normal Form (2NF): Must be in 1NF AND no partial dependency exists. Partial dependency: non-prime attribute depends on PART of a composite candidate key. Example violation: R(StudentID, CourseID, StudentName, Grade) with key {StudentID, CourseID} - StudentName depends only on StudentID (partial). Fix: decompose into Student(StudentID, StudentName) and Enrollment(StudentID, CourseID, Grade). 2NF only matters for relations with composite keys. Single-attribute keys automatically satisfy 2NF.",
            "formula": "2NF = 1NF + no partial dependencies"
        }
    },
    {
        "id": "db2-norm-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "3NF requires 2NF plus:",
        "options": [
            "Only one candidate key",
            "BCNF",
            "No transitive dependencies of non-prime on key",
            "No partial dependencies"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Third Normal Form (3NF): Must be in 2NF AND no transitive dependency exists. Transitive dependency: A → B → C where B is not a candidate key. Example: Employee(EmpID, DeptID, DeptBudget) - EmpID → DeptID → DeptBudget. DeptBudget transitively depends on EmpID. Fix: Employee(EmpID, DeptID), Department(DeptID, DeptBudget). 3NF is most commonly achieved normal form in practice. Prevents update anomalies from transitive dependencies.",
            "formula": "3NF = 2NF + no transitive dependencies"
        }
    },
    {
        "id": "db2-norm-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "3NF formal definition: for all X → Y, either:",
        "options": [
            "Only Y is prime",
            "X is superkey, Y ⊆ X, or Y is prime attribute",
            "Only X is superkey",
            "No conditions"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "3NF Formal Definition: For every non-trivial FD X → Y, at least ONE of these holds: (1) X is a superkey, OR (2) Y ⊆ X (trivial), OR (3) Every attribute in (Y - X) is a prime attribute (part of some candidate key). Condition (3) is the relaxation that makes 3NF less strict than BCNF. Allows certain FDs where determinant isn't superkey as long as dependent is prime. Example: {StudentID, Course} → Instructor and Instructor → Course can coexist in 3NF if Instructor is prime.",
            "formula": "$X \\rightarrow Y$: X superkey OR Y trivial OR (Y-X) prime"
        }
    },
    {
        "id": "db2-norm-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "BCNF (Boyce-Codd Normal Form) requires: for all X → Y,",
        "options": [
            "X is candidate key only",
            "X is a superkey (or Y ⊆ X)",
            "No functional dependencies",
            "Y is prime"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Boyce-Codd Normal Form (BCNF): Stricter than 3NF. For every non-trivial FD X → Y, X MUST be a superkey (or Y ⊆ X trivial). No exceptions. Every determinant is a superkey. BCNF eliminates ALL anomalies from functional dependencies. Difference from 3NF: doesn't allow FD where determinant is non-superkey even if dependent is prime. May not preserve all FDs when decomposing. Choose BCNF when anomalies unacceptable, 3NF when dependency preservation critical.",
            "formula": "BCNF: $\\forall X \\rightarrow Y$, X is superkey or Y trivial"
        }
    },
    {
        "id": "db2-norm-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "BCNF is stricter than 3NF. 3NF allows:",
        "options": [
            "Nothing extra",
            "No FD",
            "FD where Y is prime attribute and X is not superkey",
            "Any FD"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "3NF vs BCNF difference: 3NF allows functional dependency X → A where X is NOT a superkey IF A is a prime attribute (part of candidate key). BCNF does NOT allow this - ALL determinants must be superkeys. Example: R(Student, Course, Instructor) with FDs: {Student, Course} → Instructor, Instructor → Course. Violates BCNF (Instructor not superkey) but satisfies 3NF (Course is prime). Trade-off: BCNF eliminatesall FD anomalies but may lose dependencies, 3NF preserves dependencies but allows some anomalies.",
            "formula": "3NF allows non-superkey → prime; BCNF doesn't"
        }
    },
    {
        "id": "db2-norm-011",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Lossless join decomposition ensures:",
        "options": [
            "Original relation can be reconstructed by natural join",
            "Normalization fails",
            "More data added",
            "Data is lost"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Lossless-join decomposition: when relation R decomposed into R1, R2, ..., Rn, we can reconstruct original R exactly by natural join: R = R1 ⋈ R2 ⋈ ... ⋈ Rn. NO spurious tuples (extra garbage rows) generated. Test for binary decomposition (R1, R2): lossless iff (R1 ∩ R2) → (R1 - R2) or (R1 ∩ R2) → (R2 - R1). Common attribute(s) must be key of at least one part. Essential property - prevents data loss. All normalization decompositions must be lossless.",
            "formula": "Lossless: $(R_1 \\cap R_2) \\rightarrow R_1$ or $R_2$"
        }
    },
    {
        "id": "db2-norm-012",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Dependency preservation ensures:",
        "options": [
            "No FDs preserved",
            "All original FDs can be checked in decomposed relations",
            "Only trivial FDs",
            "All FDs lost"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Dependency preservation: after decomposing R into R1, R2, ..., Rn, each original FD can be CHECKED within decomposed relations without joins. Project FD set F onto each Ri. Union of projected sets should logically imply F. Benefits: (1) efficient integrity checking (no expensive joins), (2) maintain constraints locally. Trade-off: BCNF decomposition may not preserve dependencies, but 3NF always does. Sometimes must choose between losslessness + dependency preservation (3NF gives both) vs complete anomaly elimination (BCNF).",
            "formula": "$(F_1 \\cup F_2 \\cup ... \\cup F_n)^+ = F^+$"
        }
    },
    {
        "id": "db2-txn-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "ACID properties are:",
        "options": [
            "Only Atomicity",
            "Accuracy, Completeness, Integrity, Dependency",
            "Only Durability",
            "Atomicity, Consistency, Isolation, Durability"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "ACID Properties: A = Atomicity (all or nothing), C = Consistency (database remains valid before/after), I = Isolation (concurrent transactions don't interfere), D = Durability (committed changes survive failures). ACID ensures reliable transaction processing. Trade-off: stricter ACID = lower performance."
        }
    },
    {
        "id": "db2-txn-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Atomicity means:",
        "options": [
            "Transaction is fastest",
            "Transaction reads atoms",
            "Transaction can be partially done",
            "Transaction is all-or-nothing (complete or none)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Atomicity (A in ACID): transaction is indivisible unit - either ALL operations complete successfully and COMMIT, or NONE take effect and ROLLBACK. No partial execution visible. Implementation: logging (undo/redo), shadow paging. Example: bank transfer must debit one account AND credit another - can't do just one. If failure occurs partway, system must undo all changes. Ensures database doesn't end up in inconsistent intermediate state.",
            "formula": "Atomicity = all-or-nothing execution"
        }
    },
    {
        "id": "db2-txn-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Isolation means:",
        "options": [
            "Concurrent transactions appear to execute in isolation",
            "Transactions see each other's uncommitted changes",
            "Only one transaction runs",
            "No concurrency"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Isolation (I in ACID): concurrent transactions execute as if serially - intermediate states not visible to other transactions. Prevents: dirty reads (reading uncommitted data), non-repeatable reads (different values on re-read), phantom reads (new rows appear). Levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE (strictest). Implementation: locking (2PL), timestamp ordering, MVCC. Trade-off: stricter isolation = lower concurrency but more consistency.",
            "formula": "Isolation levels: from weak to strong"
        }
    },
    {
        "id": "db2-txn-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Durability means:",
        "options": [
            "No persistence",
            "Once committed, changes persist even after failures",
            "Data can be lost",
            "Temporary storage"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Durability (D in ACID): once transaction COMMITS, changes are PERMANENT and survive system failures (crash, power loss). Even if system fails immediately after commit, committed data will be restored on recovery. Implementation: (1) Write-Ahead Logging (WAL) - log changes before modifying database, (2) Force writes to stable storage at commit, (3) Recovery procedures using logs. Guarantees committed work never lost. Critical for financial/critical systems.",
            "formula": "Durability: committed changes persist forever"
        }
    },
    {
        "id": "db2-txn-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Schedule is serializable if:",
        "options": [
            "It is equivalent to some serial schedule",
            "It is serial",
            "It is random",
            "It has conflicts"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Serializable schedule: concurrent execution of transactions produces same final database state as SOME serial (one-at-a-time) execution. Correctness criterion for concurrent execution. Types: (1) CONFLICT SERIALIZABLE: can transform to serial by swapping non-conflicting operations, (2) VIEW SERIALIZABLE: produces same reads/writes as serial. All conflict serializable schedules are view serializable.Tested using precedence graph (acylic = conflict serializable). Guarantees consistency.",
            "formula": "Serializable ≡ equivalent to serial execution"
        }
    },
    {
        "id": "db2-txn-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Conflict serializability: two operations conflict if they:",
        "options": [
            "Are same transaction",
            "Are on different items",
            "Are both reads",
            "Are on same item, at least one is write, different transactions"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Conflicting operations: two operations from DIFFERENT transactions conflict if: (1) access SAME data item, (2) at least ONE is WRITE operation, (3) operations from different transactions. Conflict pairs: read-write (R-W), write-read (W-R), write-write (W-W). Non-conflicting: read-read (R-R) from different transactions. Conflicting operations cannot be swapped without changing result. Basis for conflict serializability testing.",
            "formula": "Conflict: same item + different txns + ≥ 1 write"
        }
    },
    {
        "id": "db2-txn-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Precedence graph for conflict serializability has edge Ti → Tj if:",
        "options": [
            "No edges needed",
            "Ti has conflicting operation before Tj's conflicting operation",
            "Random edge",
            "Ti reads after Tj writes"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Precedence graph (serialization graph): directed graph for testing conflict serializability. Nodes = transactions. Edge Ti → Tj if Ti has operation that conflicts with and precedes Tj's operation on same data item. Example: if Ti writes X before Tj reads X, edge Ti → Tj. Schedule is conflict serializable IFF precedence graph is ACYCLIC (DAG). Topological sort of acyclic graph gives equivalent serial order. Cycle indicates no equivalent serial schedule exists.",
            "formula": "Edge $T_i \\rightarrow T_j$: $T_i$ conflicts before $T_j$"
        }
    },
    {
        "id": "db2-txn-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "A schedule is conflict serializable if precedence graph is:",
        "options": [
            "Complete graph",
            "Has cycles",
            "Acyclic (DAG)",
            "Empty"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Conflict Serializability Test: schedule is conflict serializable ⇔ precedence graph is ACYCLIC. Algorithm: (1) Create node for each transaction, (2) For each pair of conflicting operations from different transactions, add edge from earlier to later transaction, (3) Check for cycles using DFS/topological sort. If acyclic: find topological order = equivalent serial schedule. If cycle exists: not conflict serializable. Polynomial time test O(V + E).",
            "formula": "Conflict serializable ⇔ acyclic precedence graph"
        }
    },
    {
        "id": "db2-txn-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "2-Phase Locking (2PL) has:",
        "options": [
            "Three phases",
            "Growing phase (acquire locks) and Shrinking phase (release locks)",
            "Only one phase",
            "No phases"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Two-Phase Locking (2PL) protocol: transaction divided into two phases: (1) GROWING PHASE: can only ACQUIRE locks, cannot release any lock, (2) SHRINKING PHASE: can only RELEASE locks, cannot acquire new locks. Once first lock released, no more locks can be acquired. Point of first release = lock point. 2PL GUARANTEES conflict serializability. Problem: can cause deadlocks. Variants: Strict 2PL (hold write locks until commit), Rigorous 2PL (hold all locks until commit).",
            "formula": "Growing: acquire only; Shrinking: release only"
        }
    },
    {
        "id": "db2-txn-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "2PL guarantees:",
        "options": [
            "View serializability only",
            "Deadlock freedom",
            "Conflict serializability",
            "Nothing"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "2PL Correctness: Basic 2PL GUARANTEES conflict serializability (but NOT freedom from deadlock or cascading abort). Proof: transactions' lock points define serial order. Transaction releasing lock before another acquires it determines ordering. All 2PL schedules are conflict serializable. However, may allow: (1) deadlocks (need detection/prevention), (2) cascading aborts (if read uncommitted data). Variants (Strict/Rigorous 2PL) prevent cascading aborts by holding locks longer.",
            "formula": "2PL ⇒ conflict serializable"
        }
    },
    {
        "id": "db2-txn-011",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Strict 2PL releases exclusive locks only:",
        "options": [
            "Never",
            "Before any read",
            "During execution",
            "After transaction commits/aborts"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Strict 2PL: Basic 2PL + hold ALL EXCLUSIVE (write) locks until transaction COMMITS or ABORTS. Shared (read) locks can still be released during shrinking phase. Benefits: (1) prevents cascading aborts (no dirty reads possible), (2) simplifies recovery (no need to undo other transactions), (3) still guarantees serializability. Trade-off: lower concurrency than basic 2PL (locks held longer). Most commercial DBMSs use Strict 2PL or Rigorous 2PL.",
            "formula": "Strict 2PL: hold X-locks until COMMIT/ABORT"
        }
    },
    {
        "id": "db2-txn-012",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Deadlock in DBMS can be handled by:",
        "options": [
            "Ignoring it",
            "Only detection",
            "Prevention, detection + recovery, timeout",
            "No handling needed"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Deadlock handling strategies: (1) PREVENTION: impose ordering on locks (e.g., lock resources in sorted order), use timeout (abort if wait too long), (2) AVOIDANCE: wait-die/wound-wait schemes based on timestamps, (3) DETECTION + RECOVERY: build wait-for graph periodically, detect cycles, abort victim to break cycle. Wait-for graph: nodes=transactions, edge Ti → Tj if Ti waits for lock held by Tj. Cycle = deadlock. Choose victim with minimum cost to abort.",
            "formula": "Deadlock: prevent, avoid, or detect+recover"
        }
    },
    {
        "id": "db2-idx-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Primary index is on:",
        "options": [
            "Primary key (file ordered by key)",
            "Foreign key",
            "Non-key field",
            "Any field"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Primary indexon: built on PRIMARY KEY (ordering key attribute). File is SORTED by this key. Properties: (1) sparse index (one entry per block sufficient), (2) Fast search O(log B) where B = number of blocks, (3) Only ONE primary index per file (file sorted only one way), (4) Efficient for both point and range queries. Example: Employee file sorted by EmpID - primary index on EmpID. Anchor records: first record in each block.",
            "formula": "Primary index: on ordering key (sorted file)"
        }
    },
    {
        "id": "db2-idx-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Secondary index is on:",
        "options": [
            "No field",
            "Only primary key",
            "Non-ordering field",
            "Ordering field"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Secondary index: built on NON-ORDERING field (file not sorted by this attribute). Can be on candidate key or non-key field. Properties: (1) MUST be dense (one entry per record - can't use anchor records since file unsorted), (2) larger than primary index, (3) supports searches on non-ordering attributes, (4) Multiple secondary indexes possible on same file. Example: Employee file sorted by EmpID, secondary index on DeptID for fast department lookups. Essential for multi-access-path queries.",
            "formula": "Secondary index: dense, on non-ordering field"
        }
    },
    {
        "id": "db2-idx-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Dense index has:",
        "options": [
            "Entry for some records",
            "Entry for every record",
            "No entries",
            "Only for first record"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Dense index: contains index entry for EVERY search key value (every record in data file). One-to-one mapping between index entries and data records. Properties: (1) Required for secondary indexes (file not sorted), (2) Larger size, (3) Direct pointer to every record, (4) Faster search but more storage. Example: 1 million records → 1 million index entries. Trade-off: space vs direct access. Can be on key or non-key fields.",
            "formula": "Dense: |index entries| = |data records|"
        }
    },
    {
        "id": "db2-idx-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Sparse index has:",
        "options": [
            "Entry for foreign keys only",
            "Entry for some records (e.g., per block)",
            "No entries",
            "Entry for every record"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Sparse index: contains index entries for only SOME search key values - typically one per block/page (anchor records). Requires file to be SORTED by indexed attribute. Properties: (1) smaller than dense index, (2) used for primary/clustering indexes, (3) search: find appropriate block via index, then sequential scan within block, (4) cannot be used for secondary indexes. Example: 1000 blocks → ~1000 index entries. Space-efficient but requires sorted file.",
            "formula": "Sparse: entries ≈ number of blocks"
        }
    },
    {
        "id": "db2-idx-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree index: all data pointers are in:",
        "options": [
            "Leaf nodes only",
            "Internal nodes only",
            "Root only",
            "All nodes"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "B+ tree structure: ALL data pointers (record pointers) are in LEAF nodes only. Internal nodes contain only search keys and child pointers (routing information). Benefits: (1) uniform access time (all searches end at same level), (2) efficient range queries (leaf linkage), (3) higher fanout in internal nodes (no data pointers), (4) all leaves at same level (balanced tree). Internal nodes guide search; leaves contain actual data pointers.",
            "formula": "B+ internal: routing; leaves: data pointers"
        }
    },
    {
        "id": "db2-idx-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree leaf nodes are:",
        "options": [
            "Same as root",
            "Not connected",
            "Linked together (for range queries)",
            "Deleted after use"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "B+ tree leaf linkage: ALL leaf nodes linked as doubly-linked list in key order. Critical for: (1) RANGE QUERIES: find start of range, follow links to scan all qualifying records without tree traversal,  (2) SEQUENTIAL SCAN: traverse all records in sorted order by following leaf links (no parent traversal), (3) Efficient MIN/MAX queries. Example: SELECT * WHERE age BETWEEN 20 AND 30 - find age=20 leaf, follow links until age>30. Makes B+ tree ideal for database indexing.",
            "formula": "Leaf linkage → efficient range/sequential access"
        }
    },
    {
        "id": "db2-idx-007",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree of order p (fanout p): internal node has at most:",
        "options": [
            "p keys",
            "Only 2 children",
            "p-1 keys, p children",
            "p children, p keys"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "B+ tree order p (maximum fanout): Internal node can have MAXIMUM p children (pointers) and p-1 keys. Keys separate pointers: k1 | ptr1 | k2 | ptr2 | ... | k_{p-1} | ptr_p. Minimum children (non-root): ⌈p/2⌉, minimum keys: ⌈p/2⌉-1. Leaf nodes: max p-1 data pointers (or p records in some definitions). Root exception: min 1 key (2 children). High-order trees stay shallow: order 100 → ~3 levels for millions of records. Typical disk-based B+ trees: order 100-200.",
            "formula": "Order p: max $p-1$ keys, $p$ children"
        }
    },
    {
        "id": "db2-idx-008",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Height of B+ tree with n keys and order p is approximately:",
        "options": [
            "n",
            "p",
            "log_p(n)",
            "n × p"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Height ≈ ⌈log_p(n)⌉",
            "formula": "h = O(log_p n)"
        }
    },
    {
        "id": "db2-idx-009",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Hash index is best for:",
        "options": [
            "Equality lookups",
            "Range queries",
            "Pattern matching",
            "Sorting"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Hash: O(1) average for equality, not good for range"
        }
    },
    {
        "id": "db2-idx-010",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Clustered index: data records are:",
        "options": [
            "In separate file",
            "Physically ordered by index key",
            "Not ordered",
            "Always in heap"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Clustered: data physically sorted by index, only one per table"
        }
    },
    {
        "id": "db3-file-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "File Organization",
        "question": "Block Factor (Blocking Factor) is:",
        "options": [
            "Number of blocks per record",
            "Total blocks in file",
            "Maximum records per block",
            "Block size"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BF = ⌊(Block size - Header) / Record size⌋"
        }
    },
    {
        "id": "db3-file-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "File Organization",
        "question": "Spanned organization allows:",
        "options": [
            "No records in block",
            "Only one record per block",
            "Fixed size records only",
            "Record to span multiple blocks"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Spanned: record can cross block boundary (variable length)"
        }
    },
    {
        "id": "db3-file-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "File Organization",
        "question": "Unspanned organization requires:",
        "options": [
            "Only for text files",
            "Records can cross blocks",
            "No records",
            "Complete record in one block"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Unspanned: easier access but may waste space"
        }
    },
    {
        "id": "db3-idx-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Dense index has:",
        "options": [
            "One entry per file",
            "No entries",
            "One entry per block",
            "One entry per record"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Dense: index entry for every record"
        }
    },
    {
        "id": "db3-idx-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Sparse index has:",
        "options": [
            "No entries",
            "Entry for every record",
            "Entry for each block (not every record)",
            "Entry for each file"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Sparse: one entry per block, requires ordered file"
        }
    },
    {
        "id": "db3-idx-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Primary index is built on:",
        "options": [
            "Ordering key field (unique)",
            "Any field",
            "Foreign key",
            "Non-key field"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Primary: on ordering key, usually sparse"
        }
    },
    {
        "id": "db3-idx-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Clustering index is built on:",
        "options": [
            "Primary key only",
            "Non-key ordering field",
            "Unordered field",
            "Key ordering field"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Clustering: ordered field, non-key (groups records)"
        }
    },
    {
        "id": "db3-idx-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Secondary index is built on:",
        "options": [
            "No field",
            "Ordering field only",
            "Only primary key",
            "Non-ordering field (alternative access)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Secondary: non-ordering field, always dense"
        }
    },
    {
        "id": "db3-idx-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "I/O cost to access record using k-level multilevel index:",
        "options": [
            "k+1",
            "log k",
            "k",
            "2k"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "k index blocks + 1 data block = k+1 I/Os"
        }
    },
    {
        "id": "db3-btree-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B-Tree",
        "question": "B-tree of order p: internal node has at most:",
        "options": [
            "p-1 keys, p-1 children",
            "p-1 keys, p children",
            "p keys, p-1 children",
            "p keys, p children"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "B-tree node: ≤p-1 keys, ≤p children"
        }
    },
    {
        "id": "db3-btree-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B-Tree",
        "question": "B-tree: all leaf nodes are at:",
        "options": [
            "Random levels",
            "Same level (height balanced)",
            "Root level",
            "Different levels"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "B-tree is height-balanced: all leaves at same level"
        }
    },
    {
        "id": "db3-btree-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B-Tree",
        "question": "B-tree internal node (non-root) must have at least:",
        "options": [
            "1 child",
            "p-1 children",
            "p children",
            "⌈p/2⌉ children"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Minimum ⌈p/2⌉ children for internal nodes (except root)"
        }
    },
    {
        "id": "db3-btree-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B-Tree",
        "question": "In B-tree, data pointers are present in:",
        "options": [
            "Only leaf nodes",
            "All nodes (internal and leaf)",
            "Only root",
            "Only internal nodes"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "B-tree: data pointers at all nodes (unlike B+ tree)"
        }
    },
    {
        "id": "db3-bplus-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B+ Tree",
        "question": "B+ tree: data pointers are present in:",
        "options": [
            "All nodes",
            "Only internal nodes",
            "Only root",
            "Only leaf nodes"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "B+ tree: all data at leaves, internal nodes only for navigation"
        }
    },
    {
        "id": "db3-bplus-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B+ Tree",
        "question": "B+ tree leaf nodes are:",
        "options": [
            "Random connections",
            "Connected to root only",
            "Not connected",
            "Linked together (linked list)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "B+ leaves linked: excellent for range queries"
        }
    },
    {
        "id": "db3-bplus-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B+ Tree",
        "question": "B+ tree is preferred over B-tree for:",
        "options": [
            "Space efficiency only",
            "Sequential/range access",
            "Single record access only",
            "Never preferred"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "B+ tree: better for range queries (leaf linking)"
        }
    },
    {
        "id": "db3-bplus-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B+ Tree",
        "question": "B+ tree internal node order p: maximum pointers = ?, maximum keys = ?",
        "options": [
            "p, p",
            "p-1, p",
            "p-1, p-1",
            "p, p-1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Internal: ≤p pointers, ≤p-1 keys"
        }
    },
    {
        "id": "db3-bplus-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B+ Tree",
        "question": "B+ tree leaf node order p: maximum data pointers = ?",
        "options": [
            "p-1",
            "p+1",
            "2p",
            "p"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Leaf: ≤p-1 data pointers + 1 sibling pointer",
            "formula": "p-1 data pointers"
        }
    },
    {
        "id": "db3-bplus-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "B+ Tree",
        "question": "Height of B+ tree with n keys and order p is approximately:",
        "options": [
            "logₚ(n)",
            "log₂(n)",
            "n/p",
            "p×n"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Height ≈ ⌈log_p(n)⌉",
            "formula": "h = O(log_p n)"
        }
    },
    {
        "id": "db-rel-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational",
        "question": "Relation (table) in RDBMS is a:",
        "options": [
            "List of rows (duplicates allowed)",
            "Graph",
            "Set of rows (no duplicates)",
            "Tree"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Relation: set of tuples (no duplicate rows)"
        }
    },
    {
        "id": "db-rel-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational",
        "question": "Candidate key is:",
        "options": [
            "Foreign key",
            "Only primary key",
            "Minimal superkey",
            "Any attribute"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Candidate key: minimal set uniquely identifying tuples"
        }
    },
    {
        "id": "db-rel-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational",
        "question": "Foreign key references:",
        "options": [
            "Its own primary key",
            "Only integers",
            "Primary key of another table",
            "Any attribute"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FK: references PK of another (or same) table"
        }
    },
    {
        "id": "db-sql-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "Order of execution: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY:",
        "options": [
            "FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY",
            "ORDER BY first",
            "As written",
            "SELECT first"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY"
        }
    },
    {
        "id": "db-sql-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "NULL = NULL evaluates to:",
        "options": [
            "UNKNOWN",
            "FALSE",
            "TRUE",
            "ERROR"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "NULL comparisons return UNKNOWN"
        }
    },
    {
        "id": "db-sql-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "To check for NULL values:",
        "options": [
            "IS NULL",
            "= NULL",
            "NULL()",
            "== NULL"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Use IS NULL or IS NOT NULL"
        }
    },
    {
        "id": "db-norm-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Relation in BCNF is always in:",
        "options": [
            "2NF only",
            "1NF only",
            "3NF",
            "4NF"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF"
        }
    },
    {
        "id": "db-norm-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "Anomalies in unnormalized relations:",
        "options": [
            "Insertion, deletion, update anomalies",
            "Only insertion",
            "Only update",
            "No anomalies"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Redundancy causes all three anomaly types"
        }
    },
    {
        "id": "db-tx-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "ACID properties of transactions:",
        "options": [
            "Atomicity, Consistency, Isolation, Durability",
            "Only atomicity",
            "None",
            "Only isolation"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "ACID: Atomicity, Consistency, Isolation, Durability"
        }
    },
    {
        "id": "db-tx-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Atomicity ensures:",
        "options": [
            "Durability",
            "All operations complete or none (all-or-nothing)",
            "Transactions run fast",
            "Isolation"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Atomic: complete transaction or rollback entirely"
        }
    },
    {
        "id": "db-tx-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Serializability means:",
        "options": [
            "No concurrency",
            "Transactions run serially",
            "Fast execution",
            "Result equivalent to some serial schedule"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Serializable: concurrent result = some serial order"
        }
    },
    {
        "id": "db-tx-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Conflict serializability is tested using:",
        "options": [
            "B-tree",
            "Precedence graph (cycle detection)",
            "Sorting",
            "Hashing"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Precedence graph: acyclic → conflict serializable"
        }
    },
    {
        "id": "db-tx-005",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "2-Phase Locking (2PL) has:",
        "options": [
            "No phases",
            "Growing phase only",
            "Shrinking phase only",
            "Growing then shrinking phases"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "2PL: acquire locks (grow) then release (shrink)"
        }
    },
    {
        "id": "db-tx-006",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Strict 2PL additionally requires:",
        "options": [
            "No exclusive locks",
            "Hold exclusive locks until commit",
            "Release immediately",
            "No locks"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Strict 2PL: hold X-locks until commit/abort"
        }
    },
    {
        "id": "db-rec-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Recovery",
        "question": "Write-Ahead Logging (WAL) requires:",
        "options": [
            "Log after write",
            "Log only reads",
            "No logging",
            "Log before write to disk"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "WAL: log record before data written to disk"
        }
    },
    {
        "id": "db-rec-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Recovery",
        "question": "UNDO recovery is for:",
        "options": [
            "Uncommitted transactions (rollback)",
            "Checkpoints",
            "Committed transactions",
            "Logging"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "UNDO: revert effects of uncommitted transactions"
        }
    },
    {
        "id": "db-rec-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Recovery",
        "question": "REDO recovery is for:",
        "options": [
            "All transactions",
            "Committed transactions not written to disk",
            "Uncommitted transactions",
            "Aborted transactions"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "REDO: reapply committed but not persisted changes"
        }
    },
    {
        "id": "db-idx-005",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree order 100, 1 million keys. Maximum height = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "Height ≤ ⌈log₅₀(10⁶)⌉ ≈ 3 (ceil of log base ⌈m/2⌉)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-er-001",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Binary M:N relationship R between A(100) and B(200). Max tuples in R = ?",
        "correctAnswer": 20000,
        "tolerance": 0,
        "explanation": {
            "solution": "In M:N relationship, each entity in A can relate to many entities in B and vice versa. Maximum occurs when every A relates to every B: 100 × 200 = 20,000 tuples in relationship table. In 1:N, max would be 200 (each B relates to one A). In 1:1, max is min(100,200) = 100.",
            "formula": "M:N max = $|A| \\times |B| = 100 \\times 200 = 20,000$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-er-002",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Entity A with 3 multivalued attributes. Tables after ER-to-Relational = ?",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "In ER-to-Relational mapping, multivalued attributes require separate tables (to be in 1NF). Entity A becomes 1 table with single-valued attributes. Each multivalued attribute becomes a separate table with foreign key to A. Total = 1 (main) + 3 (multivalued) = 4 tables. Composite attributes are flattened into the main table.",
            "formula": "Tables = 1 (entity) + 3 (multivalued) = 4"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-er-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "ER Model",
        "question": "Weak entity participation in identifying relationship:",
        "options": [
            "None",
            "Partial",
            "Total",
            "Optional"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A weak entity depends on its owner (strong) entity for identification. It MUST have total (mandatory) participation in the identifying relationship - it cannot exist without being related to an owner entity. Example: Dependent (weak) of Employee (strong) - every dependent must belong to some employee. Depicted with double lines and double rectangles in ER."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-ra-001",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "R(A,B) has 10 tuples, S(B,C) has 15 tuples. Max tuples in R⋈S (natural join) = ?",
        "correctAnswer": 150,
        "tolerance": 0,
        "explanation": {
            "solution": "Natural join matches on common attribute B. Maximum occurs when every B value in R matches every tuple in S (all B values are the same). Each R tuple joins with all 15 S tuples: 10 × 15 = 150. Minimum is 0 (if no B values match). If B is a key in S: max = 10. If B is a key in R: max = 15.",
            "formula": "Max join = $|R| \\times |S| = 10 \\times 15 = 150$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-ra-002",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "R(A,B,C) with 100 tuples, S(D,E) with 50 tuples. R × S tuples = ?",
        "correctAnswer": 5000,
        "tolerance": 0,
        "explanation": {
            "solution": "Cartesian product (cross product) pairs every tuple of R with every tuple of S. No join condition, no matching - pure combination. Result has |R| × |S| = 100 × 50 = 5000 tuples. Columns = R's + S's = 3 + 2 = 5. Cartesian product is expensive and rarely used directly; joins are typically preferred.",
            "formula": "$|R \\times S| = |R| \\times |S| = 100 \\times 50 = 5000$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-ra-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Relational Algebra",
        "question": "π(A,B)(σ(C>5)(R)) is equivalent to:",
        "options": [
            "π(A,B)(R)",
            "σ(C>5)(π(A,B)(R))",
            "σ(C>5)(R)",
            "These are different"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "These are different! In π_{A,B}(σ_{C>5}(R)): first filter by C>5, then project A,B. In σ_{C>5}(π_{A,B}(R)): first project A,B (losing C!), then filter by C>5 - but C doesn't exist after projection, causing an error or undefined behavior. Selection-projection order matters when the selection attribute is not in the projection list."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-sql-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "Which removes duplicates?",
        "options": [
            "SELECT ALL",
            "SELECT *",
            "SELECT DISTINCT",
            "SELECT UNIQUE"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SELECT DISTINCT removes duplicate rows from the result. SQL treats tables as multisets (bags) by default, allowing duplicates. DISTINCT forces set semantics. SELECT ALL (default) keeps duplicates. SELECT UNIQUE is Oracle-specific (non-standard). SELECT * selects all columns but says nothing about duplicate elimination."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-sql-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "HAVING clause filters:",
        "options": [
            "Columns",
            "Tables",
            "Groups after GROUP BY",
            "Individual rows"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "WHERE filters individual rows BEFORE grouping. HAVING filters groups AFTER GROUP BY aggregation. HAVING can use aggregate functions (SUM, COUNT, etc.) while WHERE cannot. Example: SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 50000 - this filters departments by average salary, not individual employees."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-sql-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "COUNT(*) vs COUNT(column) difference:",
        "options": [
            "COUNT(*) includes NULLs, COUNT(col) doesn't",
            "No difference",
            "COUNT(col) includes NULLs",
            "Both count NULLs"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "COUNT(*) counts all rows regardless of NULL values - it counts rows, not values. COUNT(column) counts non-NULL values in that column only. Example: table with 10 rows where column X has 3 NULLs: COUNT(*) = 10, COUNT(X) = 7. COUNT(DISTINCT col) counts unique non-NULL values."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-sql-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "SQL",
        "question": "NULL = NULL evaluates to:",
        "options": [
            "FALSE",
            "UNKNOWN",
            "NULL",
            "TRUE"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "In SQL's three-valued logic, any comparison with NULL returns UNKNOWN (not TRUE or FALSE). NULL means 'unknown value', so comparing two unknowns doesn't yield TRUE. Use IS NULL or IS NOT NULL for NULL checks, not =. In WHERE clause, only TRUE rows are returned; UNKNOWN (like FALSE) rows are excluded."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-fd-001",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "R(A,B,C,D), FDs: A→B, B→C, C→D. Candidate keys = ?",
        "correctAnswer": 1,
        "tolerance": 0,
        "explanation": {
            "solution": "Find attributes that determine all others. A⁺ (closure of A): A→B→C→D. So A⁺ = {A,B,C,D} = all attributes. A is a superkey. Is it minimal? Yes, since {A} alone determines everything. No other single attribute works (check B⁺, C⁺, D⁺ - none give all). So A is the ONLY candidate key. Count = 1.",
            "formula": "A⁺ = \\{A,B,C,D\\}, A is only candidate key"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-fd-002",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "R(A,B,C,D,E), FDs: AB→C, C→D, D→E. Minimum attributes in candidate key = ?",
        "correctAnswer": 2,
        "tolerance": 0,
        "explanation": {
            "solution": "A and B never appear on RHS of any FD, so they MUST be in every candidate key. Check (AB)⁺: AB→C→D→E, so (AB)⁺ = {A,B,C,D,E} = all attributes. AB is a candidate key with 2 attributes. No single-attribute key exists (neither A⁺ nor B⁺ gives all attributes). Minimum = 2.",
            "formula": "(AB)⁺ = \\{A,B,C,D,E\\}, min size = 2"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-fd-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "FDs",
        "question": "Armstrong's axioms include:",
        "options": [
            "Reflexivity, Augmentation, Transitivity",
            "Reflexivity, Augmentation, Union",
            "Only Transitivity",
            "Union, Decomposition, Pseudotransitivity"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Armstrong's axioms are complete and sound for FD inference: (1) Reflexivity: if Y⊆X, then X→Y (trivial FD); (2) Augmentation: if X→Y, then XZ→YZ; (3) Transitivity: if X→Y and Y→Z, then X→Z. Union and Decomposition are derived rules (not axioms). These generate all possible FDs from a given set."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-norm-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "2NF requires:",
        "options": [
            "No partial dependencies on candidate key",
            "4NF",
            "No transitive FDs",
            "BCNF"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "2NF: table is in 1NF AND no non-prime attribute is partially dependent on any candidate key. Partial dependency: attribute depends on part of a composite key. Example: (StudentID, CourseID) → Grade is fine, but (StudentID, CourseID) → StudentName violates 2NF if StudentID → StudentName. Solution: decompose."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-norm-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "3NF requires 2NF and no:",
        "options": [
            "Transitive dependencies",
            "Join dependencies",
            "Multivalued dependencies",
            "Partial dependencies"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "3NF: table is in 2NF AND no non-prime attribute is transitively dependent on any candidate key. Transitive dependency: A→B→C where B is not a superkey. Example: EmpID→DeptID→DeptName. EmpID transitively determines DeptName through DeptID. Solution: separate Dept(DeptID, DeptName)."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-norm-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "BCNF requires for every FD X→Y: X is:",
        "options": [
            "Candidate key only",
            "Prime attribute",
            "Superkey",
            "Non-prime"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BCNF (Boyce-Codd NF): for every non-trivial FD X→Y, X must be a superkey (determines all attributes). Stricter than 3NF, which allows X→Y when Y is prime attribute. BCNF eliminates all redundancy from FDs. However, BCNF decomposition may not preserve all FDs, while 3NF decomposition always can."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-norm-004",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Normalization",
        "question": "R(A,B,C,D), FDs: A→B, C→D. Decompose to BCNF. Minimum relations = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "First find candidate key. Neither A nor C determine all attributes; but (AC)⁺ = {A,B,C,D}. So AC is key. FD A→B violates BCNF (A not superkey): decompose into R1(A,B) and R2(A,C,D). In R2, C→D still violates (C not superkey): decompose into R3(C,D) and R4(A,C). Final: R1(A,B), R3(C,D), R4(A,C). Total = 3.",
            "formula": "BCNF decomposition: R1(A,B), R2(C,D), R3(A,C)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-tx-001",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Schedule is conflict serializable if precedence graph is:",
        "options": [
            "Connected",
            "Cyclic",
            "Acyclic",
            "Tree"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Conflict serializability test: build precedence graph with transactions as nodes. Add edge Ti→Tj if Ti has conflicting operation before Tj's conflicting operation (conflicts: same data, at least one write). If graph is ACYCLIC, schedule is conflict serializable - any topological order gives equivalent serial schedule. Cycle means not serializable."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-tx-002",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "2PL guarantees:",
        "options": [
            "Livelock freedom",
            "Deadlock freedom",
            "Recoverability",
            "Serializability"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Two-Phase Locking (2PL): transactions have growing phase (acquire locks, no releases) and shrinking phase (release locks, no acquires). 2PL guarantees conflict serializability. However, it does NOT prevent deadlocks (transactions can still wait in cycles) and basic 2PL doesn't ensure recoverability. Strict 2PL (hold X-locks till commit) adds recoverability."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-tx-003",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "Strict 2PL additionally prevents:",
        "options": [
            "Starvation",
            "Cascading rollback",
            "Nothing extra",
            "Deadlock"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Strict 2PL: hold all EXCLUSIVE locks until commit/abort (shared locks can be released earlier). This prevents cascading rollback: if T1 aborts, no other transaction has read T1's uncommitted writes (since T1 held X-locks). Basic 2PL allows reading uncommitted data, potentially requiring cascade if writer aborts. Strict 2PL is recoverable and cascadeless."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-tx-004",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Transactions",
        "question": "3 transactions concurrent, each does R(X) then W(X). Possible schedules = ?",
        "correctAnswer": 90,
        "tolerance": 0,
        "explanation": {
            "solution": "Each transaction has 2 operations (R,W), with R before W within same transaction. Total 6 operations. Count interleavings: 6!/(2!×2!×2!) = 720/8 = 90 ways to arrange, respecting internal order of each transaction. This counts all possible schedules, not just serializable ones. Conflict equivalence classes would be fewer.",
            "formula": "$\\frac{6!}{(2!)^3} = \\frac{720}{8} = 90$ schedules"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-idx-001",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree order 50. Min keys in non-root node = ?",
        "correctAnswer": 25,
        "tolerance": 0,
        "explanation": {
            "solution": "B+ tree with order p (max p pointers per node): each non-root node has at least ⌈p/2⌉ pointers, meaning at least ⌈p/2⌉-1 keys. For p=50: ⌈50/2⌉ = 25 pointers, so min keys = 25-1 = 24. However, some definitions say order = max keys, giving min = ⌈order/2⌉ = 25. Answer depends on order definition used; 25 is common answer.",
            "formula": "Min keys = $\\lceil p/2 \\rceil - 1$ or $\\lceil order/2 \\rceil$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-idx-002",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree: block 4KB, key 10B, pointer 6B. Order = ?",
        "correctAnswer": 256,
        "tolerance": 5,
        "explanation": {
            "solution": "B+ tree node fits in one block. Internal node: (order-1) keys + order pointers ≤ block. Let order = p: (p-1)×10 + p×6 ≤ 4096. 10p - 10 + 6p ≤ 4096. 16p ≤ 4106. p ≤ 256.6. Order = 256. Leaf nodes calculated differently (record pointers instead of child pointers), but internal node determines tree structure.",
            "formula": "$(p-1) \\times 10 + p \\times 6 \\leq 4096$; $p = 256$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-idx-003",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "B+ tree order 100, 10⁶ records. Max height = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "B+ tree height determines lookup cost. With order 100: root has 1-100 pointers, internal nodes have 50-100 pointers (min = ⌈100/2⌉). At height h, max leaf pointers = 100^h. For 10⁶ records: 100² = 10,000 < 10⁶ ≤ 100³ = 10⁶. Height = 3 (root + 2 internal levels + leaves). Lookup = 3 disk accesses.",
            "formula": "$\\lceil \\log_{50}(10^6) \\rceil = 3$ levels"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-db-idx-004",
        "type": "MCQ",
        "topic": "dbms",
        "subtopic": "Indexing",
        "question": "Secondary index is always:",
        "options": [
            "Sparse",
            "Dense",
            "Primary",
            "Clustered"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Secondary index is on non-ordering field (records not sorted by this key). Since data isn't clustered by this key, we can't use one index entry per block - must have entry for EACH record: DENSE index. Primary/clustering indexes on sorted data can be sparse (one entry per block). Secondary enables efficient search on non-primary attributes but requires more space."
        }
    }
]);