/**
 * DBMS Questions
 * Covers: SQL, Normalization, Transactions, Indexing
 */

Questions.register([
    // Relational Model & SQL
    {
        id: "db-sql-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "The SQL command to remove a table completely from the database is:",
        options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
        correctAnswer: 2,
        explanation: {
            solution: "DROP TABLE removes table structure and data. DELETE removes rows (can have WHERE). TRUNCATE removes all rows but keeps structure."
        }
    },
    {
        id: "db-sql-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "The difference between HAVING and WHERE clause is:",
        options: [
            "HAVING is faster",
            "WHERE filters rows, HAVING filters groups",
            "They are identical",
            "HAVING works on tables, WHERE on views"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "WHERE filters rows before grouping. HAVING filters groups after GROUP BY. HAVING is used with aggregate functions."
        }
    },
    {
        id: "db-sql-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "SQL",
        question: "Which SQL statement is used to update data in a database?",
        options: ["MODIFY", "UPDATE", "ALTER", "SET"],
        correctAnswer: 1,
        explanation: {
            solution: "UPDATE table SET column = value WHERE condition. ALTER is for schema changes, not data modification."
        }
    },
    // Normalization
    {
        id: "db-norm-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "A relation is in 1NF (First Normal Form) if:",
        options: [
            "It has no repeating groups/atomic values only",
            "No partial dependencies exist",
            "No transitive dependencies exist",
            "All determinants are candidate keys"
        ],
        correctAnswer: 0,
        explanation: {
            solution: "1NF: All attributes contain atomic (indivisible) values. No multi-valued or composite attributes. Each column has unique name."
        }
    },
    {
        id: "db-norm-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "A relation is in 2NF if it is in 1NF and:",
        options: [
            "Has no transitive dependencies",
            "Has no partial dependencies on the primary key",
            "Every determinant is a candidate key",
            "Has no multi-valued dependencies"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "2NF: 1NF + no partial dependencies. Every non-prime attribute must depend on the whole primary key, not just part of it."
        }
    },
    {
        id: "db-norm-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "3NF eliminates:",
        options: [
            "Partial dependencies",
            "Transitive dependencies",
            "Multi-valued dependencies",
            "Join dependencies"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "3NF: 2NF + no transitive dependencies. Non-prime attributes must depend directly on candidate keys, not through other non-prime attributes."
        }
    },
    {
        id: "db-norm-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Normalization",
        question: "BCNF (Boyce-Codd Normal Form) requires that for every functional dependency X → Y:",
        options: [
            "Y is a prime attribute",
            "X is a superkey",
            "Y is a non-prime attribute",
            "X is a prime attribute"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "BCNF: For every non-trivial FD X → Y, X must be a superkey. Stronger than 3NF. Eliminates all redundancy based on FDs."
        }
    },
    // Transactions
    {
        id: "db-trans-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "The ACID property 'Atomicity' ensures that:",
        options: [
            "Transactions are executed serially",
            "All operations in a transaction complete or none do",
            "Data remains consistent",
            "Changes persist after commit"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Atomicity: all-or-nothing. Either all operations succeed and commit, or the transaction is rolled back completely. No partial execution."
        }
    },
    {
        id: "db-trans-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "A schedule is conflict serializable if and only if its precedence graph is:",
        options: ["Complete", "Cyclic", "Acyclic", "Empty"],
        correctAnswer: 2,
        explanation: {
            solution: "If the precedence graph (based on conflicting operations) has a cycle, no equivalent serial schedule exists. Acyclic graph → topological ordering gives equivalent serial schedule."
        }
    },
    {
        id: "db-trans-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "Two operations conflict if they are from different transactions, on the same data item, and:",
        options: [
            "Both are read operations",
            "At least one is a write operation",
            "Both are write operations only",
            "Neither is a write operation"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Conflict pairs: R-W, W-R, W-W on same data item from different transactions. R-R doesn't conflict (both can read safely)."
        }
    },
    {
        id: "db-trans-004",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Transactions",
        question: "In Two-Phase Locking (2PL), a transaction:",
        options: [
            "Can acquire locks anytime",
            "Cannot release any lock until it has acquired all locks needed",
            "Must release all locks before acquiring new ones",
            "Doesn't need locks"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "2PL: Growing phase (acquire locks, no releases), Shrinking phase (release locks, no acquisitions). Guarantees serializability but can cause deadlock."
        }
    },
    // Indexing
    {
        id: "db-idx-001",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "A B+ tree stores all data pointers in:",
        options: [
            "Internal nodes only",
            "Root node only",
            "Leaf nodes only",
            "All nodes"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "B+ tree: all data pointers at leaf level, internal nodes only contain keys for navigation. Leaves are linked for range queries."
        }
    },
    {
        id: "db-idx-002",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "A dense index has an index entry for:",
        options: [
            "Each block in the data file",
            "Each record in the data file",
            "Only the first record of each block",
            "Every other record"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Dense index: one entry per record. Sparse index: one entry per block (requires sorted data). Dense uses more space but faster lookups."
        }
    },
    {
        id: "db-idx-003",
        type: "MCQ",
        topic: "dbms",
        subtopic: "Indexing",
        question: "Primary index is always:",
        options: [
            "Dense",
            "Sparse",
            "Created on non-key attribute",
            "Created on unordered field"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Primary index is on the ordering key of a sorted file. Since file is sorted, we only need pointers to first record of each block (sparse index works)."
        }
    },
    {
        id: "db-idx-004",
        type: "NAT",
        topic: "dbms",
        subtopic: "Indexing",
        question: "A B+ tree of order 4 (max 4 pointers per node) can have at most how many keys per non-root internal node?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "Order P means max P pointers. Internal node has at most P pointers and P-1 keys. So P=4 → max 3 keys.",
            formula: "Max keys in node = Order - 1"
        }
    }
]);

/**
 * Computer Networks Questions
 * Covers: OSI, TCP/IP, Protocols, Addressing
 */

Questions.register([
    // OSI Model
    {
        id: "net-osi-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "OSI & TCP/IP",
        question: "The OSI model has how many layers?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 3,
        explanation: {
            solution: "OSI: Physical, Data Link, Network, Transport, Session, Presentation, Application (7 layers). TCP/IP has 4/5 layers."
        }
    },
    {
        id: "net-osi-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "OSI & TCP/IP",
        question: "The Network layer is responsible for:",
        options: [
            "Physical transmission of bits",
            "Node-to-node delivery",
            "Host-to-host delivery (routing)",
            "Process-to-process delivery"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Network layer: logical addressing (IP), routing packets across networks. Physical = bits, Data Link = frames/node-to-node, Transport = process-to-process."
        }
    },
    {
        id: "net-osi-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "OSI & TCP/IP",
        question: "Transport layer provides:",
        options: [
            "Path determination",
            "Process-to-process communication",
            "Bit synchronization",
            "Encryption"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Transport layer: end-to-end (process-to-process) delivery using port numbers. TCP (reliable) and UDP (unreliable) operate here."
        }
    },
    // Protocols
    {
        id: "net-proto-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "HTTP uses port number:",
        options: ["21", "25", "80", "443"],
        correctAnswer: 2,
        explanation: {
            solution: "HTTP: port 80, HTTPS: 443, FTP: 20/21, SMTP: 25, DNS: 53, SSH: 22, Telnet: 23."
        }
    },
    {
        id: "net-proto-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "SMTP is used for:",
        options: [
            "Receiving email",
            "Sending email",
            "Web browsing",
            "File transfer"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "SMTP (port 25): sending/pushing email. POP3 (110) and IMAP (143) are for receiving/pulling email from mail server."
        }
    },
    {
        id: "net-proto-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "FTP uses separate connections for control and data. The control port is:",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
        explanation: {
            solution: "FTP: Port 21 for control (commands), Port 20 for data transfer. It's an 'out-of-band' protocol."
        }
    },
    {
        id: "net-proto-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP is different from UDP because TCP provides:",
        options: [
            "Faster transmission",
            "Connectionless service",
            "Reliable, ordered delivery with flow control",
            "Smaller header overhead"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "TCP: connection-oriented, reliable (ACKs, retransmission), ordered, flow/congestion control. UDP: connectionless, unreliable, fast, minimal overhead."
        }
    },
    // IP Addressing
    {
        id: "net-ip-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "An IPv4 address is how many bits long?",
        options: ["16", "32", "64", "128"],
        correctAnswer: 1,
        explanation: {
            solution: "IPv4: 32 bits (4 bytes, written as dotted decimal). IPv6: 128 bits."
        }
    },
    {
        id: "net-ip-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "A Class B IP address has how many bits for the network portion (default)?",
        options: ["8", "16", "24", "32"],
        correctAnswer: 1,
        explanation: {
            solution: "Classful: Class A = 8 bits network (starts 0), Class B = 16 bits (starts 10), Class C = 24 bits (starts 110)."
        }
    },
    {
        id: "net-ip-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "A /24 subnet mask has how many usable host addresses?",
        correctAnswer: 254,
        tolerance: 0,
        explanation: {
            solution: "/24 means 8 bits for hosts. 2^8 = 256 addresses, minus 2 (network address and broadcast) = 254 usable.",
            formula: "Usable hosts = 2^(32-prefix) - 2 = 2^8 - 2 = 254"
        }
    },
    // Data Link
    {
        id: "net-dl-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "CSMA/CD is used in:",
        options: ["Token Ring", "Ethernet (wired)", "WiFi", "Bluetooth"],
        correctAnswer: 1,
        explanation: {
            solution: "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is used in traditional Ethernet. WiFi uses CSMA/CA (Collision Avoidance)."
        }
    },
    {
        id: "net-dl-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "MAC address is how many bits long?",
        options: ["32", "48", "64", "128"],
        correctAnswer: 1,
        explanation: {
            solution: "MAC (Media Access Control) address: 48 bits (6 bytes), written as 12 hex digits. First 24 bits = OUI (manufacturer), last 24 bits = unique.",
            formula: "MAC = 48 bits = 6 bytes"
        }
    }
]);
