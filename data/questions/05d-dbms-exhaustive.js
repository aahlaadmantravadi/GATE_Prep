/**
 * Database Management Systems EXHAUSTIVE
 * ER Model, Relational Model, SQL, Normalization, Transactions, Indexing
 */

Questions.register([
    // ========== ER MODEL ==========
    {
        id: "db2-er-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Entity set is a collection of:",
        options: ["Attributes", "Entities of same type", "Relationships", "Keys"],
        correctAnswer: 1,
        explanation: { solution: "Entity set: collection of similar entities (e.g., all Students)" }
    },
    {
        id: "db2-er-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Attribute types include:",
        options: ["Simple, composite, multivalued, derived", "Only simple", "Only keys", "Only foreign keys"],
        correctAnswer: 0,
        explanation: { solution: "Attribute types: simple/atomic, composite, multivalued, derived" }
    },
    {
        id: "db2-er-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "A multivalued attribute can have:",
        options: ["Only one value", "Multiple values for an entity", "No values", "Only derived values"],
        correctAnswer: 1,
        explanation: { solution: "Multivalued: multiple values (e.g., phone numbers)" }
    },
    {
        id: "db2-er-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Derived attribute is computed from:",
        options: ["Nothing", "Other attributes (e.g., age from DOB)", "Only primary key", "Foreign keys"],
        correctAnswer: 1,
        explanation: { solution: "Derived: computed from stored attributes (e.g., age from birthdate)" }
    },
    {
        id: "db2-er-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Relationship set represents:",
        options: ["Only entities", "Association among entity sets", "Only attributes", "Only keys"],
        correctAnswer: 1,
        explanation: { solution: "Relationship: association between two or more entity sets" }
    },
    {
        id: "db2-er-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Degree of relationship set is:",
        options: ["Number of attributes", "Number of entity sets involved", "Number of tuples", "Number of keys"],
        correctAnswer: 1,
        explanation: { solution: "Degree: binary (2), ternary (3), n-ary (n entity sets)" }
    },
    {
        id: "db2-er-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Cardinality ratio for a binary relationship can be:",
        options: ["Only 1:1", "1:1, 1:N, M:N", "Only N:N", "Only 1:N"],
        correctAnswer: 1,
        explanation: { solution: "Cardinality: one-to-one, one-to-many, many-to-many" }
    },
    {
        id: "db2-er-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Participation constraint: total (mandatory) means:",
        options: ["Some entities participate", "Every entity in set must participate in relationship", "No participation required", "Optional participation"],
        correctAnswer: 1,
        explanation: { solution: "Total: every entity must participate; Partial: some may not" }
    },
    {
        id: "db2-er-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "Weak entity set has:",
        options: ["Primary key", "No discriminator, depends on strong entity", "Discriminator (partial key), depends on identifying entity", "No attributes"],
        correctAnswer: 2,
        explanation: { solution: "Weak entity: partial key + identifying (owner) entity's key" }
    },
    {
        id: "db2-er-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "ER Model",
        question: "ISA (Generalization/Specialization) hierarchy represents:",
        options: ["Composition", "Inheritance/IS-A relationship", "Aggregation only", "1:N relationship"],
        correctAnswer: 1,
        explanation: { solution: "ISA: superclass-subclass, inheritance of attributes" }
    },
    // ========== RELATIONAL MODEL ==========
    {
        id: "db2-rel-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "A relation (table) consists of:",
        options: ["Only rows", "Rows (tuples) and columns (attributes)", "Only columns", "Only keys"],
        correctAnswer: 1,
        explanation: { solution: "Relation: set of tuples with same attributes" }
    },
    {
        id: "db2-rel-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Tuple is:",
        options: ["A column", "A row in a relation", "An attribute", "A key"],
        correctAnswer: 1,
        explanation: { solution: "Tuple = row = record in a relation" }
    },
    {
        id: "db2-rel-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Attribute is:",
        options: ["A row", "A column (property) of relation", "A table", "A relationship"],
        correctAnswer: 1,
        explanation: { solution: "Attribute = column = field in a relation" }
    },
    {
        id: "db2-rel-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Domain of an attribute is:",
        options: ["Name of attribute", "Set of allowed values for the attribute", "Type of relation", "Number of tuples"],
        correctAnswer: 1,
        explanation: { solution: "Domain: set of atomic values attribute can take" }
    },
    {
        id: "db2-rel-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Superkey is:",
        options: ["Minimal set of attributes uniquely identifying tuple", "Any set of attributes that uniquely identifies tuples", "Only primary key", "Only foreign key"],
        correctAnswer: 1,
        explanation: { solution: "Superkey: any attribute set that uniquely identifies tuples" }
    },
    {
        id: "db2-rel-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Candidate key is:",
        options: ["Any superkey", "Minimal superkey (no proper subset is superkey)", "Only foreign key", "Non-unique key"],
        correctAnswer: 1,
        explanation: { solution: "Candidate key: minimal superkey (remove any attribute → not a key)" }
    },
    {
        id: "db2-rel-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Primary key is:",
        options: ["Any superkey", "Chosen candidate key for the relation", "Non-unique identifier", "Foreign key"],
        correctAnswer: 1,
        explanation: { solution: "Primary key: one candidate key chosen as main identifier" }
    },
    {
        id: "db2-rel-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Foreign key is:",
        options: ["Primary key of same table", "Attribute referencing primary key of another table", "Candidate key", "Superkey"],
        correctAnswer: 1,
        explanation: { solution: "Foreign key: references primary key of another (or same) table" }
    },
    {
        id: "db2-rel-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Model",
        question: "Referential integrity constraint ensures:",
        options: ["All attributes have values", "Foreign key values exist in referenced table (or are NULL)", "No duplicates", "All keys are primary"],
        correctAnswer: 1,
        explanation: { solution: "Referential integrity: FK value must exist in referenced PK or be NULL" }
    },
    // ========== RELATIONAL ALGEBRA ==========
    {
        id: "db2-ra-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Selection (σ) operation:",
        options: ["Selects columns", "Selects rows satisfying a condition", "Joins tables", "Projects attributes"],
        correctAnswer: 1,
        explanation: { solution: "σ_condition(R): selects tuples (rows) satisfying condition" }
    },
    {
        id: "db2-ra-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Projection (π) operation:",
        options: ["Selects rows", "Selects columns (attributes)", "Joins tables", "Renames relation"],
        correctAnswer: 1,
        explanation: { solution: "π_attributes(R): projects specified columns, removes duplicates" }
    },
    {
        id: "db2-ra-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Union (∪) of R and S requires:",
        options: ["Different schemas", "Same schema (union compatible)", "No requirement", "Different number of tuples"],
        correctAnswer: 1,
        explanation: { solution: "Union: R and S must have same number and types of attributes" }
    },
    {
        id: "db2-ra-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Set difference (R - S) returns:",
        options: ["Tuples in both R and S", "Tuples in R but not in S", "Tuples in S but not in R", "All tuples from both"],
        correctAnswer: 1,
        explanation: { solution: "R - S: tuples in R that are not in S" }
    },
    {
        id: "db2-ra-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Cartesian product (R × S) produces:",
        options: ["Union of tuples", "Every combination of R tuple with S tuple", "Intersection", "Difference"],
        correctAnswer: 1,
        explanation: { solution: "R × S: |R| × |S| tuples, each R tuple paired with each S tuple" }
    },
    {
        id: "db2-ra-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Natural join (⋈) combines tuples where:",
        options: ["No common attributes", "Common attributes have equal values", "All attributes differ", "Only primary keys match"],
        correctAnswer: 1,
        explanation: { solution: "Natural join: equi-join on all common attributes, removes duplicates" }
    },
    {
        id: "db2-ra-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Theta join (R ⋈_θ S) is:",
        options: ["Cartesian product followed by selection on condition θ", "Only natural join", "Only projection", "Only union"],
        correctAnswer: 0,
        explanation: { solution: "Theta join: σ_θ(R × S), join with arbitrary condition" }
    },
    {
        id: "db2-ra-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Left outer join includes:",
        options: ["Only matching tuples", "All tuples from left + matching from right (NULLs if no match)", "All from right", "No NULLs"],
        correctAnswer: 1,
        explanation: { solution: "Left outer: all from left, matching from right, NULL if no match" }
    },
    {
        id: "db2-ra-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Relational Algebra",
        question: "Division (R ÷ S) is used for:",
        options: ["Simple selection", "Queries with 'for all' semantics", "Union", "Projection only"],
        correctAnswer: 1,
        explanation: { solution: "Division: find tuples in R related to all tuples in S" }
    },
    // ========== SQL ==========
    {
        id: "db2-sql-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "SELECT DISTINCT removes:",
        options: ["NULL values", "Duplicate rows from result", "All rows", "Primary keys"],
        correctAnswer: 1,
        explanation: { solution: "DISTINCT: eliminates duplicate tuples in result" }
    },
    {
        id: "db2-sql-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "WHERE clause filters:",
        options: ["Groups", "Individual rows before grouping", "Aggregates", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "WHERE: row-level filter before GROUP BY" }
    },
    {
        id: "db2-sql-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "HAVING clause filters:",
        options: ["Individual rows", "Groups after GROUP BY based on aggregate conditions", "Columns", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "HAVING: group-level filter after GROUP BY" }
    },
    {
        id: "db2-sql-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "ORDER BY clause:",
        options: ["Filters rows", "Sorts the result set", "Groups rows", "Joins tables"],
        correctAnswer: 1,
        explanation: { solution: "ORDER BY: sorts result (ASC default, DESC for descending)" }
    },
    {
        id: "db2-sql-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "SQL aggregate functions include:",
        options: ["SELECT only", "COUNT, SUM, AVG, MIN, MAX", "JOIN only", "WHERE only"],
        correctAnswer: 1,
        explanation: { solution: "Aggregates: COUNT, SUM, AVG, MIN, MAX" }
    },
    {
        id: "db2-sql-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "COUNT(*) counts:",
        options: ["Only non-null values", "All rows including NULLs", "Only nulls", "Only distinct values"],
        correctAnswer: 1,
        explanation: { solution: "COUNT(*) counts all rows; COUNT(column) excludes NULLs" }
    },
    {
        id: "db2-sql-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "INNER JOIN returns:",
        options: ["All rows from both tables", "Only matching rows from both tables", "All from left table", "All from right table"],
        correctAnswer: 1,
        explanation: { solution: "INNER JOIN: only rows with matches in both tables" }
    },
    {
        id: "db2-sql-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "NULL comparison: what does (NULL = NULL) return?",
        options: ["TRUE", "FALSE", "NULL (unknown)", "Error"],
        correctAnswer: 2,
        explanation: { solution: "NULL = NULL is UNKNOWN (NULL); use IS NULL for comparison" }
    },
    {
        id: "db2-sql-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "Subquery in WHERE clause is called:",
        options: ["Outer query", "Nested query / Subquery", "Main query", "Join"],
        correctAnswer: 1,
        explanation: { solution: "Subquery: query nested inside another query" }
    },
    {
        id: "db2-sql-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "Correlated subquery references:",
        options: ["Only its own tables", "Outer query's tables", "No tables", "System tables only"],
        correctAnswer: 1,
        explanation: { solution: "Correlated: subquery references outer query, executed per outer row" }
    },
    {
        id: "db2-sql-011",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "EXISTS operator checks if:",
        options: ["Value is NULL", "Subquery returns at least one row", "Value equals something", "Table exists"],
        correctAnswer: 1,
        explanation: { solution: "EXISTS: true if subquery returns any rows" }
    },
    // ========== NORMALIZATION ==========
    {
        id: "db2-norm-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Functional dependency X → Y means:",
        options: ["Y determines X", "X determines Y (same X → same Y)", "X and Y are equal", "No relationship"],
        correctAnswer: 1,
        explanation: { solution: "X → Y: if two tuples have same X, they have same Y" }
    },
    {
        id: "db2-norm-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Armstrong's axioms include:",
        options: ["Reflexivity, Augmentation, Transitivity", "Only reflexivity", "Only transitivity", "None of these"],
        correctAnswer: 0,
        explanation: { solution: "Armstrong: reflexivity, augmentation, transitivity (sound + complete)" }
    },
    {
        id: "db2-norm-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Closure of attribute set X (X+) is:",
        options: ["X itself", "All attributes functionally determined by X", "Only primary key", "Empty set"],
        correctAnswer: 1,
        explanation: { solution: "X+ = all attributes Y such that X → Y" }
    },
    {
        id: "db2-norm-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Candidate key is found when X+ contains:",
        options: ["No attributes", "All attributes of the relation", "Only X", "Only primary key"],
        correctAnswer: 1,
        explanation: { solution: "X is candidate key if X+ = R (all attributes) and X is minimal" }
    },
    {
        id: "db2-norm-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "1NF (First Normal Form) requires:",
        options: ["No functional dependencies", "All attribute values are atomic (no multi-valued or composite)", "No nulls", "Only one key"],
        correctAnswer: 1,
        explanation: { solution: "1NF: atomic values only, no repeating groups" }
    },
    {
        id: "db2-norm-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "2NF requires 1NF plus:",
        options: ["No transitive dependencies", "No partial dependencies on candidate key", "No multi-valued dependencies", "BCNF"],
        correctAnswer: 1,
        explanation: { solution: "2NF: no partial dependency (non-prime attributes depend on full key)" }
    },
    {
        id: "db2-norm-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "3NF requires 2NF plus:",
        options: ["No partial dependencies", "No transitive dependencies of non-prime on key", "Only one candidate key", "BCNF"],
        correctAnswer: 1,
        explanation: { solution: "3NF: no transitive dependency (non-prime → non-prime)" }
    },
    {
        id: "db2-norm-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "3NF formal definition: for all X → Y, either:",
        options: ["X is superkey, Y ⊆ X, or Y is prime attribute", "Only X is superkey", "Only Y is prime", "No conditions"],
        correctAnswer: 0,
        explanation: { solution: "3NF: X → Y implies (X is superkey OR Y ⊆ X OR every attr in Y-X is prime)" }
    },
    {
        id: "db2-norm-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "BCNF (Boyce-Codd Normal Form) requires: for all X → Y,",
        options: ["Y is prime", "X is a superkey (or Y ⊆ X)", "No functional dependencies", "X is candidate key only"],
        correctAnswer: 1,
        explanation: { solution: "BCNF: every determinant is a superkey" }
    },
    {
        id: "db2-norm-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "BCNF is stricter than 3NF. 3NF allows:",
        options: ["Nothing extra", "FD where Y is prime attribute and X is not superkey", "Any FD", "No FD"],
        correctAnswer: 1,
        explanation: { solution: "3NF allows X → prime_attr even if X not superkey; BCNF doesn't" }
    },
    {
        id: "db2-norm-011",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Lossless join decomposition ensures:",
        options: ["Data is lost", "Original relation can be reconstructed by natural join", "More data added", "Normalization fails"],
        correctAnswer: 1,
        explanation: { solution: "Lossless: R1 ⋈ R2 = R (no spurious tuples)" }
    },
    {
        id: "db2-norm-012",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "Dependency preservation ensures:",
        options: ["All FDs lost", "All original FDs can be checked in decomposed relations", "No FDs preserved", "Only trivial FDs"],
        correctAnswer: 1,
        explanation: { solution: "Dependency preserving: union of FDs on decomposed relations covers original FDs" }
    },
    // ========== TRANSACTIONS ==========
    {
        id: "db2-txn-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "ACID properties are:",
        options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Completeness, Integrity, Dependency", "Only Atomicity", "Only Durability"],
        correctAnswer: 0,
        explanation: { solution: "ACID: Atomicity, Consistency, Isolation, Durability" }
    },
    {
        id: "db2-txn-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Atomicity means:",
        options: ["Transaction can be partially done", "Transaction is all-or-nothing (complete or none)", "Transaction reads atoms", "Transaction is fastest"],
        correctAnswer: 1,
        explanation: { solution: "Atomicity: either all operations commit or all rollback" }
    },
    {
        id: "db2-txn-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Isolation means:",
        options: ["Transactions see each other's uncommitted changes", "Concurrent transactions appear to execute in isolation", "No concurrency", "Only one transaction runs"],
        correctAnswer: 1,
        explanation: { solution: "Isolation: intermediate states not visible to other transactions" }
    },
    {
        id: "db2-txn-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Durability means:",
        options: ["Data can be lost", "Once committed, changes persist even after failures", "Temporary storage", "No persistence"],
        correctAnswer: 1,
        explanation: { solution: "Durability: committed data survives system failures" }
    },
    {
        id: "db2-txn-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Schedule is serializable if:",
        options: ["It is serial", "It is equivalent to some serial schedule", "It has conflicts", "It is random"],
        correctAnswer: 1,
        explanation: { solution: "Serializable: equivalent result to some serial execution" }
    },
    {
        id: "db2-txn-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Conflict serializability: two operations conflict if they:",
        options: ["Are on different items", "Are on same item, at least one is write, different transactions", "Are both reads", "Are same transaction"],
        correctAnswer: 1,
        explanation: { solution: "Conflict: same item, different transactions, at least one write" }
    },
    {
        id: "db2-txn-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Precedence graph for conflict serializability has edge Ti → Tj if:",
        options: ["Ti reads after Tj writes", "Ti has conflicting operation before Tj's conflicting operation", "Random edge", "No edges needed"],
        correctAnswer: 1,
        explanation: { solution: "Edge Ti→Tj: Ti's conflicting op appears before Tj's in schedule" }
    },
    {
        id: "db2-txn-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "A schedule is conflict serializable if precedence graph is:",
        options: ["Has cycles", "Acyclic (DAG)", "Complete graph", "Empty"],
        correctAnswer: 1,
        explanation: { solution: "Conflict serializable ↔ acyclic precedence graph" }
    },
    {
        id: "db2-txn-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "2-Phase Locking (2PL) has:",
        options: ["Only one phase", "Growing phase (acquire locks) and Shrinking phase (release locks)", "Three phases", "No phases"],
        correctAnswer: 1,
        explanation: { solution: "2PL: growing (only acquire), shrinking (only release)" }
    },
    {
        id: "db2-txn-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "2PL guarantees:",
        options: ["Deadlock freedom", "Conflict serializability", "View serializability only", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "2PL → conflict serializable (but may deadlock)" }
    },
    {
        id: "db2-txn-011",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Strict 2PL releases exclusive locks only:",
        options: ["During execution", "After transaction commits/aborts", "Before any read", "Never"],
        correctAnswer: 1,
        explanation: { solution: "Strict 2PL: hold X-locks until commit → avoids cascading aborts" }
    },
    {
        id: "db2-txn-012",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Deadlock in DBMS can be handled by:",
        options: ["Ignoring it", "Prevention, detection + recovery, timeout", "Only detection", "No handling needed"],
        correctAnswer: 1,
        explanation: { solution: "Deadlock: prevent (ordering, timeout), or detect (wait-for graph) + abort" }
    },
    // ========== INDEXING ==========
    {
        id: "db2-idx-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Primary index is on:",
        options: ["Non-key field", "Primary key (file ordered by key)", "Foreign key", "Any field"],
        correctAnswer: 1,
        explanation: { solution: "Primary index: on ordering key field (usually primary key)" }
    },
    {
        id: "db2-idx-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Secondary index is on:",
        options: ["Ordering field", "Non-ordering field", "Only primary key", "No field"],
        correctAnswer: 1,
        explanation: { solution: "Secondary index: on non-ordering field, can be on any field" }
    },
    {
        id: "db2-idx-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Dense index has:",
        options: ["Entry for some records", "Entry for every record", "No entries", "Only for first record"],
        correctAnswer: 1,
        explanation: { solution: "Dense: one index entry per data record" }
    },
    {
        id: "db2-idx-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Sparse index has:",
        options: ["Entry for every record", "Entry for some records (e.g., per block)", "No entries", "Entry for foreign keys only"],
        correctAnswer: 1,
        explanation: { solution: "Sparse: one entry per block or group of records" }
    },
    {
        id: "db2-idx-005",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree index: all data pointers are in:",
        options: ["Internal nodes only", "Leaf nodes only", "Root only", "All nodes"],
        correctAnswer: 1,
        explanation: { solution: "B+ tree: data pointers only in leaves, internal nodes have keys" }
    },
    {
        id: "db2-idx-006",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree leaf nodes are:",
        options: ["Not connected", "Linked together (for range queries)", "Deleted after use", "Same as root"],
        correctAnswer: 1,
        explanation: { solution: "B+ leaves linked: allows efficient range scans" }
    },
    {
        id: "db2-idx-007",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "B+ tree of order p (fanout p): internal node has at most:",
        options: ["p keys", "p-1 keys, p children", "p children, p keys", "Only 2 children"],
        correctAnswer: 1,
        explanation: { solution: "Order p: up to p-1 keys, p children in internal nodes" }
    },
    {
        id: "db2-idx-008",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Height of B+ tree with n keys and order p is approximately:",
        options: ["n", "log_p(n)", "p", "n × p"],
        correctAnswer: 1,
        explanation: { solution: "Height ≈ ⌈log_p(n)⌉", formula: "h = O(log_p n)" }
    },
    {
        id: "db2-idx-009",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Hash index is best for:",
        options: ["Range queries", "Equality lookups", "Sorting", "Pattern matching"],
        correctAnswer: 1,
        explanation: { solution: "Hash: O(1) average for equality, not good for range" }
    },
    {
        id: "db2-idx-010",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Clustered index: data records are:",
        options: ["Not ordered", "Physically ordered by index key", "Always in heap", "In separate file"],
        correctAnswer: 1,
        explanation: { solution: "Clustered: data physically sorted by index, only one per table" }
    }
]);

console.log("Exhaustive DBMS loaded - ~75 questions");
