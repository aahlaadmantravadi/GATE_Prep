Questions.register([
    {
        "id": "num-dl-001",
        "type": "NAT",
        "topic": "digital",
        "subtopic": "Numerical",
        "question": "Number of minterms in Boolean function of 4 variables:",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "2^4 = 16 minterms",
            "formula": "2^n"
        }
    },
    {
        "id": "num-dl-002",
        "type": "NAT",
        "topic": "digital",
        "subtopic": "Numerical",
        "question": "Minimum number of 2-input NAND gates to implement XOR:",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "XOR using NAND: 4 gates needed"
        }
    },
    {
        "id": "num-dl-003",
        "type": "NAT",
        "topic": "digital",
        "subtopic": "Numerical",
        "question": "Number of flip-flops needed for mod-13 counter:",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "⌈log₂(13)⌉ = 4 flip-flops",
            "formula": "⌈log₂N⌉"
        }
    },
    {
        "id": "num-dl-004",
        "type": "NAT",
        "topic": "digital",
        "subtopic": "Numerical",
        "question": "(1101.101)₂ in decimal = ?",
        "correctAnswer": 13.625,
        "tolerance": 0.001,
        "explanation": {
            "solution": "8+4+0+1 + 0.5+0+0.125 = 13.625"
        }
    },
    {
        "id": "num-dl-005",
        "type": "NAT",
        "topic": "digital",
        "subtopic": "Numerical",
        "question": "4-bit Johnson counter number of states:",
        "correctAnswer": 8,
        "tolerance": 0,
        "explanation": {
            "solution": "Johnson counter: 2n states = 2×4 = 8",
            "formula": "2n"
        }
    },
    {
        "id": "num-dl-006",
        "type": "NAT",
        "topic": "digital",
        "subtopic": "Numerical",
        "question": "Maximum frequency (MHz) of 4-stage ripple counter with tpd=50ns, strobe=30ns:",
        "correctAnswer": 4.35,
        "tolerance": 0.1,
        "explanation": {
            "solution": "f = 1/(4×50+30)ns = 1/230ns ≈ 4.35 MHz",
            "formula": "f = 1/(n·tpd + ts)"
        }
    },
    {
        "id": "num-coa-001",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Numerical",
        "question": "Clock cycles for 100 tasks in 6-stage pipeline:",
        "correctAnswer": 105,
        "tolerance": 0,
        "explanation": {
            "solution": "k + (n-1) = 6 + 99 = 105",
            "formula": "k + n - 1"
        }
    },
    {
        "id": "num-coa-002",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Numerical",
        "question": "Maximum speedup with 5-stage pipeline:",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "Ideal speedup = k = 5 (number of stages)",
            "formula": "S_max = k"
        }
    },
    {
        "id": "num-coa-003",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Numerical",
        "question": "If cache hit ratio=0.9, cache time=10ns, memory=100ns. EMAT (ns) = ?",
        "correctAnswer": 19,
        "tolerance": 1,
        "explanation": {
            "solution": "0.9×10 + 0.1×(10+100) = 9 + 11 = 20ns",
            "formula": "EMAT = h·c + (1-h)·(c+m)"
        }
    },
    {
        "id": "num-coa-004",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Numerical",
        "question": "Cache has 128 blocks, block size 16 words, 16-bit address. Direct mapping tag bits = ?",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "Word=4 bits, Block=7 bits, Tag=16-4-7=5 bits"
        }
    },
    {
        "id": "num-coa-005",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Numerical",
        "question": "2-way set associative cache with 64 blocks. Number of sets = ?",
        "correctAnswer": 32,
        "tolerance": 0,
        "explanation": {
            "solution": "Sets = blocks/ways = 64/2 = 32"
        }
    },
    {
        "id": "num-os-001",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Numerical",
        "question": "Page size=4KB, virtual address=32 bits. Number of page table entries = ?",
        "correctAnswer": 1048576,
        "tolerance": 0,
        "explanation": {
            "solution": "Page offset = 12 bits, page number = 20 bits. Entries = 2^20 = 1M",
            "formula": "2^(address bits - page offset bits)"
        }
    },
    {
        "id": "num-os-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Subnetting",
        "question": "A /24 subnet (CIDR notation): number of usable host addresses = ?",
        "correctAnswer": 254,
        "tolerance": 0,
        "explanation": {
            "solution": "32-24 = 8 host bits. 2^8 - 2 = 254 (subtract network and broadcast)",
            "formula": "2^(32-prefix) - 2"
        }
    },
    {
        "id": "num-os-003",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Numerical",
        "question": "Process burst times: 2, 5, 3. Average waiting time with FCFS = ?",
        "correctAnswer": 3.33,
        "tolerance": 0.1,
        "explanation": {
            "solution": "Wait: P1=0, P2=2, P3=7. Avg = (0+2+7)/3 = 3"
        }
    },
    {
        "id": "num-os-004",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Numerical",
        "question": "Banker's algorithm: 5 processes, 3 resources. Size of Allocation matrix = ?",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "n×m = 5×3 = 15 elements"
        }
    },
    {
        "id": "num-db-001",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Numerical",
        "question": "File: 10000 records, block=4096 bytes, record=100 bytes. Number of blocks = ?",
        "correctAnswer": 250,
        "tolerance": 5,
        "explanation": {
            "solution": "BF = 4096/100 = 40. Blocks = 10000/40 = 250"
        }
    },
    {
        "id": "num-db-002",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Numerical",
        "question": "B+ tree order p=100, keys n=1000000. Minimum height = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "Height ≈ ⌈log₁₀₀(1000000)⌉ = ⌈3⌉ = 3",
            "formula": "h = ⌈log_p(n)⌉"
        }
    },
    {
        "id": "num-db-003",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Numerical",
        "question": "Relation with n attributes: maximum number of candidate keys = ?",
        "correctAnswer": 1,
        "tolerance": 0,
        "explanation": {
            "solution": "Maximum = 2^(n-1) but typically few. Minimum = 1"
        }
    },
    {
        "id": "num-db-004",
        "type": "NAT",
        "topic": "dbms",
        "subtopic": "Numerical",
        "question": "Table R(A,B,C,D) with FDs: A→B, B→C. Which normal form? (1=1NF, 2=2NF, 3=3NF)",
        "correctAnswer": 2,
        "tolerance": 0,
        "explanation": {
            "solution": "A→B→C has transitive dependency. Only 2NF, not 3NF"
        }
    },
    {
        "id": "num-net-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "Nyquist: bandwidth=4KHz, 8 signal levels. Max bit rate (Kbps) = ?",
        "correctAnswer": 24,
        "tolerance": 0,
        "explanation": {
            "solution": "2 × 4000 × log₂(8) = 8000 × 3 = 24000 bps = 24 Kbps",
            "formula": "2B log₂L"
        }
    },
    {
        "id": "num-net-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "Shannon: bandwidth=3KHz, SNR=31. Capacity (Kbps) = ?",
        "correctAnswer": 15,
        "tolerance": 1,
        "explanation": {
            "solution": "C = 3000 × log₂(32) = 3000 × 5 = 15000 bps = 15 Kbps",
            "formula": "B log₂(1+SNR)"
        }
    },
    {
        "id": "num-net-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "GBN ARQ with 4-bit sequence number. Maximum window size = ?",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "Max = 2^n - 1 = 16 - 1 = 15",
            "formula": "2^n - 1"
        }
    },
    {
        "id": "num-net-004",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "Selective Repeat with 4-bit sequence number. Maximum window size = ?",
        "correctAnswer": 8,
        "tolerance": 0,
        "explanation": {
            "solution": "Max = 2^(n-1) = 2^3 = 8",
            "formula": "2^(n-1)"
        }
    },
    {
        "id": "num-net-005",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "Stop-and-wait efficiency if propagation time = transmission time (a=1). Efficiency (%) = ?",
        "correctAnswer": 33,
        "tolerance": 1,
        "explanation": {
            "solution": "η = 1/(1+2a) = 1/3 = 33%",
            "formula": "1/(1+2a)"
        }
    },
    {
        "id": "num-net-006",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "Hamming distance to detect 3-bit errors = ?",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "Detect d errors: min distance = d+1 = 4",
            "formula": "d+1"
        }
    },
    {
        "id": "num-net-007",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Numerical",
        "question": "Hamming distance to correct 1-bit error = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "Correct d errors: min distance = 2d+1 = 3",
            "formula": "2d+1"
        }
    },
    {
        "id": "num-algo-001",
        "type": "NAT",
        "topic": "algo",
        "subtopic": "Numerical",
        "question": "Binary search in sorted array of 1024 elements. Maximum comparisons = ?",
        "correctAnswer": 10,
        "tolerance": 0,
        "explanation": {
            "solution": "⌈log₂(1024)⌉ = 10",
            "formula": "⌈log₂n⌉"
        }
    },
    {
        "id": "num-algo-002",
        "type": "NAT",
        "topic": "algo",
        "subtopic": "Numerical",
        "question": "Merge sort of 32 elements. Number of merge passes = ?",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "Passes = log₂(32) = 5",
            "formula": "log₂n"
        }
    },
    {
        "id": "num-algo-003",
        "type": "NAT",
        "topic": "algo",
        "subtopic": "Numerical",
        "question": "AVL tree: minimum nodes for height 4 = ?",
        "correctAnswer": 12,
        "tolerance": 0,
        "explanation": {
            "solution": "N(h) = N(h-1)+N(h-2)+1. N(0)=1, N(1)=2, N(2)=4, N(3)=7, N(4)=12"
        }
    },
    {
        "id": "num-algo-004",
        "type": "NAT",
        "topic": "algo",
        "subtopic": "Numerical",
        "question": "Complete binary tree with 15 nodes. Height = ?",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "Height = ⌊log₂(15)⌋ = 3",
            "formula": "⌊log₂n⌋"
        }
    },
    {
        "id": "num-algo-005",
        "type": "NAT",
        "topic": "algo",
        "subtopic": "Numerical",
        "question": "Graph with 8 vertices. Maximum edges in simple graph = ?",
        "correctAnswer": 28,
        "tolerance": 0,
        "explanation": {
            "solution": "E = n(n-1)/2 = 8×7/2 = 28",
            "formula": "n(n-1)/2"
        }
    },
    {
        "id": "num-algo-006",
        "type": "NAT",
        "topic": "algo",
        "subtopic": "Numerical",
        "question": "Heap with 127 nodes. Height = ?",
        "correctAnswer": 6,
        "tolerance": 0,
        "explanation": {
            "solution": "Height = ⌊log₂(127)⌋ = 6"
        }
    },
    {
        "id": "num-toc-001",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Numerical",
        "question": "DFA with 5 states, alphabet size 2. Maximum transitions = ?",
        "correctAnswer": 10,
        "tolerance": 0,
        "explanation": {
            "solution": "States × Alphabet = 5 × 2 = 10"
        }
    },
    {
        "id": "num-toc-002",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Numerical",
        "question": "NFA with 4 states. Equivalent DFA maximum states = ?",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "Maximum 2^n = 2^4 = 16 states (subset construction)",
            "formula": "2^n"
        }
    },
    {
        "id": "num-toc-003",
        "type": "NAT",
        "topic": "toc",
        "subtopic": "Numerical",
        "question": "Strings of length 5 over {a,b} starting with 'a' = ?",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "First position fixed, 4 free positions: 2^4 = 16"
        }
    },
    {
        "id": "num-math-001",
        "type": "NAT",
        "topic": "math",
        "subtopic": "Numerical",
        "question": "P(A)=0.5, P(B)=0.3, A and B independent. P(A∩B) = ?",
        "correctAnswer": 0.15,
        "tolerance": 0.01,
        "explanation": {
            "solution": "Independent: P(A∩B) = P(A)×P(B) = 0.5×0.3 = 0.15"
        }
    },
    {
        "id": "num-math-002",
        "type": "NAT",
        "topic": "math",
        "subtopic": "Numerical",
        "question": "Determinant of 3×3 identity matrix = ?",
        "correctAnswer": 1,
        "tolerance": 0,
        "explanation": {
            "solution": "|I| = 1 for any identity matrix"
        }
    },
    {
        "id": "num-math-003",
        "type": "NAT",
        "topic": "math",
        "subtopic": "Numerical",
        "question": "Sum of eigenvalues of [[4,2],[1,3]] = ?",
        "correctAnswer": 7,
        "tolerance": 0,
        "explanation": {
            "solution": "Sum of eigenvalues = trace = 4+3 = 7"
        }
    },
    {
        "id": "num-math-004",
        "type": "NAT",
        "topic": "math",
        "subtopic": "Numerical",
        "question": "Product of eigenvalues of [[4,2],[1,3]] = ?",
        "correctAnswer": 10,
        "tolerance": 0,
        "explanation": {
            "solution": "Product of eigenvalues = determinant = 4×3-2×1 = 10"
        }
    }
]);
