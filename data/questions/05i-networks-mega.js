/**
 * Computer Networks MEGA EXPANSION - All Layers with Formulas
 * Deep coverage of pages 456-500
 */

Questions.register([
    // ========== PHYSICAL LAYER ==========
    {
        id: "net-phy-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Nyquist theorem for noiseless channel:",
        options: ["C = B log₂L", "C = 2B log₂L", "C = B log₂(1+SNR)", "C = B"],
        correctAnswer: 1,
        explanation: { solution: "Nyquist: C = 2B log₂L bits/sec", formula: "C = 2B log₂L" }
    },
    {
        id: "net-phy-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Shannon theorem for noisy channel:",
        options: ["C = 2B log₂L", "C = B log₂(1+SNR)", "C = B/SNR", "C = B × SNR"],
        correctAnswer: 1,
        explanation: { solution: "Shannon: C = B log₂(1+SNR)", formula: "C = B log₂(1+S/N)" }
    },
    {
        id: "net-phy-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Bandwidth 4KHz, 16 signal levels. Nyquist capacity (Kbps) = ?",
        correctAnswer: 32,
        tolerance: 0,
        explanation: { solution: "2 × 4000 × log₂(16) = 8000 × 4 = 32000 bps = 32 Kbps" }
    },
    {
        id: "net-phy-004",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Bandwidth 4KHz, SNR = 255. Shannon capacity (Kbps) = ?",
        correctAnswer: 32,
        tolerance: 0,
        explanation: { solution: "4000 × log₂(256) = 4000 × 8 = 32000 bps" }
    },
    {
        id: "net-phy-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Manchester encoding has efficiency:",
        options: ["100%", "50%", "25%", "200%"],
        correctAnswer: 1,
        explanation: { solution: "Manchester: 50% efficiency (2 signal changes per bit)" }
    },
    {
        id: "net-phy-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "NRZ-L uses:",
        options: ["Level for bit value", "Transition for bit value", "No signal", "Differential"],
        correctAnswer: 0,
        explanation: { solution: "NRZ-L: signal level indicates bit (high=1, low=0)" }
    },
    // ========== DATA LINK LAYER ==========
    {
        id: "net-dll-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "Framing is done at:",
        options: ["Physical layer", "Data Link layer", "Network layer", "Transport layer"],
        correctAnswer: 1,
        explanation: { solution: "DLL: frames from network layer packets" }
    },
    {
        id: "net-dll-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "Bit stuffing is used in:",
        options: ["Character stuffing", "Flag-based framing (e.g., HDLC)", "Length-based", "None"],
        correctAnswer: 1,
        explanation: { solution: "Bit stuffing: insert 0 after five 1s (HDLC)" }
    },
    {
        id: "net-dll-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "CRC detects:",
        options: ["Only single-bit", "All odd-bit errors", "Both burst and bit errors", "Nothing"],
        correctAnswer: 2,
        explanation: { solution: "CRC: detects all single-bit, odd-bit, burst ≤ degree" }
    },
    {
        id: "net-dll-004",
        type: "NAT",
        topic: "networks",
        subtopic: "Data Link",
        question: "CRC with generator polynomial of degree 5. Checksum bits = ?",
        correctAnswer: 5,
        tolerance: 0,
        explanation: { solution: "CRC bits = degree of generator polynomial" }
    },
    {
        id: "net-dll-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "Hamming distance for correcting t errors:",
        options: ["t", "t+1", "2t+1", "2t"],
        correctAnswer: 2,
        explanation: { solution: "Correct t errors: d_min ≥ 2t+1", formula: "d ≥ 2t+1" }
    },
    {
        id: "net-dll-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "Hamming distance for detecting t errors:",
        options: ["t", "t+1", "2t+1", "2t"],
        correctAnswer: 1,
        explanation: { solution: "Detect t errors: d_min ≥ t+1", formula: "d ≥ t+1" }
    },
    {
        id: "net-dll-007",
        type: "NAT",
        topic: "networks",
        subtopic: "Data Link",
        question: "Hamming code for 4 data bits needs ___ parity bits:",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "2^r ≥ m + r + 1 → 2³ ≥ 4+3+1 = 8 ≥ 8 ✓", formula: "2^r ≥ m+r+1" }
    },
    // ========== ARQ PROTOCOLS ==========
    {
        id: "net-arq-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "ARQ",
        question: "Stop-and-wait efficiency formula:",
        options: ["1/(1+2a)", "1/(1+a)", "1/a", "a/(1+a)"],
        correctAnswer: 0,
        explanation: { solution: "η = 1/(1+2a) where a = Tp/Tt", formula: "η = 1/(1+2a)" }
    },
    {
        id: "net-arq-002",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "Stop-and-wait: Tp = 100ms, Tt = 50ms. Efficiency (%) = ?",
        correctAnswer: 20,
        tolerance: 1,
        explanation: { solution: "a = 100/50 = 2. η = 1/(1+4) = 0.2 = 20%" }
    },
    {
        id: "net-arq-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "ARQ",
        question: "Go-Back-N maximum window size with n-bit sequence number:",
        options: ["2ⁿ", "2ⁿ-1", "2^(n-1)", "n"],
        correctAnswer: 1,
        explanation: { solution: "GBN: max W = 2ⁿ - 1", formula: "W ≤ 2ⁿ-1" }
    },
    {
        id: "net-arq-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "ARQ",
        question: "Selective Repeat maximum window size with n-bit sequence number:",
        options: ["2ⁿ", "2ⁿ-1", "2^(n-1)", "n"],
        correctAnswer: 2,
        explanation: { solution: "SR: max W = 2^(n-1)", formula: "W ≤ 2^(n-1)" }
    },
    {
        id: "net-arq-005",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "GBN with 4-bit sequence. Max window = ?",
        correctAnswer: 15,
        tolerance: 0,
        explanation: { solution: "2⁴ - 1 = 15" }
    },
    {
        id: "net-arq-006",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "SR with 4-bit sequence. Max window = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: { solution: "2³ = 8" }
    },
    // ========== MAC SUBLAYER ==========
    {
        id: "net-mac-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "CSMA/CD stands for:",
        options: ["Carrier Sense Multiple Access / Collision Detection", "Central Station Multiple Access", "Cyclic Sense Multiple Access", "None"],
        correctAnswer: 0,
        explanation: { solution: "CSMA/CD: sense carrier, detect collision (Ethernet)" }
    },
    {
        id: "net-mac-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "CSMA/CD minimum frame size ensures:",
        options: ["Fast transmission", "Collision detection before frame ends", "Large payload", "None"],
        correctAnswer: 1,
        explanation: { solution: "Frame must last ≥ 2×propagation time to detect collision" }
    },
    {
        id: "net-mac-003",
        type: "NAT",
        topic: "networks",
        subtopic: "MAC",
        question: "Ethernet 10Mbps, max distance 2.5km, propagation speed 2×10⁸ m/s. Min frame size (bits) = ?",
        correctAnswer: 250,
        tolerance: 10,
        explanation: { solution: "RTT = 2 × 2500 / 2×10⁸ = 25μs. Frame = 10M × 25μs = 250 bits" }
    },
    {
        id: "net-mac-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "Token Ring uses:",
        options: ["CSMA/CD", "Token passing", "Slotted ALOHA", "Polling"],
        correctAnswer: 1,
        explanation: { solution: "Token Ring: token circulates, holder transmits" }
    },
    {
        id: "net-mac-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "Pure ALOHA maximum throughput:",
        options: ["36.8%", "18.4%", "50%", "100%"],
        correctAnswer: 1,
        explanation: { solution: "Pure ALOHA: max = 1/(2e) ≈ 18.4%", formula: "S_max = 1/(2e)" }
    },
    {
        id: "net-mac-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "Slotted ALOHA maximum throughput:",
        options: ["18.4%", "36.8%", "50%", "100%"],
        correctAnswer: 1,
        explanation: { solution: "Slotted ALOHA: max = 1/e ≈ 36.8%", formula: "S_max = 1/e" }
    },
    // ========== NETWORK LAYER ==========
    {
        id: "net-nl-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "IPv4 address is:",
        options: ["16 bits", "32 bits", "64 bits", "128 bits"],
        correctAnswer: 1,
        explanation: { solution: "IPv4: 32 bits (4 bytes, dotted decimal)" }
    },
    {
        id: "net-nl-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "IPv6 address is:",
        options: ["32 bits", "64 bits", "128 bits", "256 bits"],
        correctAnswer: 2,
        explanation: { solution: "IPv6: 128 bits" }
    },
    {
        id: "net-nl-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "/24 subnet. Number of usable host addresses = ?",
        correctAnswer: 254,
        tolerance: 0,
        explanation: { solution: "2^(32-24) - 2 = 256 - 2 = 254", formula: "2^(32-prefix) - 2" }
    },
    {
        id: "net-nl-004",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "/28 subnet. Total addresses (including network and broadcast) = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "2^(32-28) = 2^4 = 16" }
    },
    {
        id: "net-nl-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "CIDR allows:",
        options: ["Classful addressing only", "Variable-length subnet masks", "No subnetting", "Only class A"],
        correctAnswer: 1,
        explanation: { solution: "CIDR: Classless Inter-Domain Routing, flexible prefixes" }
    },
    {
        id: "net-nl-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "NAT translates:",
        options: ["MAC to IP", "Private IP to public IP", "IP to hostname", "Port to IP"],
        correctAnswer: 1,
        explanation: { solution: "NAT: maps private ↔ public IP addresses" }
    },
    // ========== ROUTING ==========
    {
        id: "net-rout-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "RIP is a ___ routing protocol:",
        options: ["Link-state", "Distance-vector", "Path-vector", "Hybrid"],
        correctAnswer: 1,
        explanation: { solution: "RIP: distance-vector (Bellman-Ford)" }
    },
    {
        id: "net-rout-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "OSPF is a ___ routing protocol:",
        options: ["Distance-vector", "Link-state", "Path-vector", "Static"],
        correctAnswer: 1,
        explanation: { solution: "OSPF: link-state (Dijkstra)" }
    },
    {
        id: "net-rout-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "BGP is a ___ routing protocol:",
        options: ["Distance-vector", "Link-state", "Path-vector", "Static"],
        correctAnswer: 2,
        explanation: { solution: "BGP: path-vector (inter-domain)" }
    },
    {
        id: "net-rout-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "Count to infinity problem occurs in:",
        options: ["Link-state", "Distance-vector", "Path-vector", "All protocols"],
        correctAnswer: 1,
        explanation: { solution: "DV: slow convergence, count to infinity" }
    },
    // ========== TRANSPORT LAYER ==========
    {
        id: "net-tcp-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP is:",
        options: ["Connectionless, unreliable", "Connection-oriented, reliable", "Connection-oriented, unreliable", "Connectionless, reliable"],
        correctAnswer: 1,
        explanation: { solution: "TCP: connection-oriented, reliable (3-way handshake)" }
    },
    {
        id: "net-tcp-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "UDP is:",
        options: ["Connection-oriented, reliable", "Connectionless, unreliable", "Connection-oriented, unreliable", "Connectionless, reliable"],
        correctAnswer: 1,
        explanation: { solution: "UDP: connectionless, best-effort delivery" }
    },
    {
        id: "net-tcp-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP 3-way handshake sequence:",
        options: ["ACK, SYN, FIN", "SYN, SYN+ACK, ACK", "FIN, ACK, FIN", "SYN, ACK, SYN"],
        correctAnswer: 1,
        explanation: { solution: "3-way: SYN → SYN+ACK → ACK" }
    },
    {
        id: "net-tcp-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP slow start increases window:",
        options: ["Linearly", "Exponentially (double each RTT)", "Logarithmically", "Stays constant"],
        correctAnswer: 1,
        explanation: { solution: "Slow start: cwnd doubles each RTT until threshold" }
    },
    {
        id: "net-tcp-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP congestion avoidance increases window:",
        options: ["Exponentially", "Linearly (additive increase)", "Logarithmically", "Constant"],
        correctAnswer: 1,
        explanation: { solution: "Congestion avoidance: +1 MSS per RTT (AIMD)" }
    },
    {
        id: "net-tcp-006",
        type: "NAT",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP sequence number field is 32 bits. Maximum sequence number = 2³² - 1 = ?",
        correctAnswer: 4294967295,
        tolerance: 0,
        explanation: { solution: "2³² - 1 = 4,294,967,295" }
    },
    // ========== APPLICATION LAYER ==========
    {
        id: "net-app-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DNS primarily uses:",
        options: ["TCP only", "UDP (port 53)", "ICMP", "HTTP"],
        correctAnswer: 1,
        explanation: { solution: "DNS: UDP 53 (TCP for zone transfers)" }
    },
    {
        id: "net-app-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP default port:",
        options: ["21", "25", "80", "443"],
        correctAnswer: 2,
        explanation: { solution: "HTTP: port 80, HTTPS: port 443" }
    },
    {
        id: "net-app-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "FTP uses ports:",
        options: ["80 only", "21 (control) and 20 (data)", "25 and 110", "53 only"],
        correctAnswer: 1,
        explanation: { solution: "FTP: 21 control, 20 data" }
    },
    {
        id: "net-app-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "SMTP port:",
        options: ["21", "25", "110", "143"],
        correctAnswer: 1,
        explanation: { solution: "SMTP: port 25" }
    },
    {
        id: "net-app-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Telnet port:",
        options: ["21", "22", "23", "25"],
        correctAnswer: 2,
        explanation: { solution: "Telnet: port 23, SSH: port 22" }
    }
]);

console.log("Networks Mega Expansion loaded - ~55 questions");
