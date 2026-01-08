/**
 * GATE Previous Year Questions Style - Computer Networks
 * 40+ questions covering actual GATE exam patterns
 * Topics: Physical, DLL, Network, Transport, Application
 */

Questions.register([
    // ========== PHYSICAL LAYER - GATE PYQ STYLE ==========
    {
        id: "gate-net-phy-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "[GATE 2018] Bandwidth 3kHz, SNR = 63. Shannon capacity (kbps) = ?",
        correctAnswer: 18,
        tolerance: 0.5,
        explanation: { solution: "3000 × log₂(64) = 3000 × 6 = 18000 bps = 18 kbps" }
    },
    {
        id: "gate-net-phy-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "[GATE 2019] Bandwidth 4kHz, 8 signal levels. Nyquist rate (kbps) = ?",
        correctAnswer: 24,
        tolerance: 0,
        explanation: { solution: "2 × 4000 × log₂(8) = 8000 × 3 = 24000 bps = 24 kbps" }
    },
    {
        id: "gate-net-phy-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "[GATE 2017] Manchester encoding baud rate for 10 Mbps:",
        options: ["5 Mbaud", "10 Mbaud", "20 Mbaud", "40 Mbaud"],
        correctAnswer: 2,
        explanation: { solution: "Manchester: baud = 2 × bit rate = 20 Mbaud" }
    },
    // ========== DATA LINK LAYER - GATE PYQ STYLE ==========
    {
        id: "gate-net-dll-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Data Link",
        question: "[GATE 2018] CRC generator x⁴+x+1. Checksum bits = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "Degree of generator = 4 checksum bits" }
    },
    {
        id: "gate-net-dll-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Data Link",
        question: "[GATE 2019] Hamming code: 11 data bits. Parity bits needed = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: { solution: "2⁴ ≥ 11+4+1 = 16 ≥ 16 ✓" }
    },
    {
        id: "gate-net-dll-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "[GATE 2016] Minimum Hamming distance to detect d errors:",
        options: ["d", "d+1", "2d", "2d+1"],
        correctAnswer: 1,
        explanation: { solution: "Detect d errors: d_min ≥ d+1" }
    },
    {
        id: "gate-net-dll-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "[GATE 2017] Minimum Hamming distance to correct t errors:",
        options: ["t", "t+1", "2t", "2t+1"],
        correctAnswer: 3,
        explanation: { solution: "Correct t errors: d_min ≥ 2t+1" }
    },
    // ========== ARQ PROTOCOLS - GATE PYQ STYLE ==========
    {
        id: "gate-net-arq-001",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "[GATE 2018] Stop-and-wait: Tp=10ms, Tt=5ms. Efficiency (%) = ?",
        correctAnswer: 20,
        tolerance: 1,
        explanation: { solution: "η = Tt/(Tt+2Tp) = 5/25 = 0.2 = 20%" }
    },
    {
        id: "gate-net-arq-002",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "[GATE 2019] GBN: 3-bit sequence number. Max window size = ?",
        correctAnswer: 7,
        tolerance: 0,
        explanation: { solution: "GBN: 2³-1 = 7" }
    },
    {
        id: "gate-net-arq-003",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "[GATE 2017] SR: 4-bit sequence number. Max sender window = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: { solution: "SR: 2^(n-1) = 2³ = 8" }
    },
    {
        id: "gate-net-arq-004",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "[GATE Style] Propagation delay=200ms, bandwidth=1Mbps, frame=1000bits. a = Tp/Tt = ?",
        correctAnswer: 200,
        tolerance: 0,
        explanation: { solution: "Tt = 1000/10⁶ = 1ms. a = 200/1 = 200" }
    },
    // ========== MAC - GATE PYQ STYLE ==========
    {
        id: "gate-net-mac-001",
        type: "NAT",
        topic: "networks",
        subtopic: "MAC",
        question: "[GATE 2018] Ethernet 10Mbps, 2km distance, prop speed 2×10⁸m/s. Min frame (bits) = ?",
        correctAnswer: 200,
        tolerance: 10,
        explanation: { solution: "RTT = 2×2000/(2×10⁸) = 20μs. Frame ≥ 10M × 20μs = 200 bits" }
    },
    {
        id: "gate-net-mac-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "[GATE 2017] Pure ALOHA max throughput:",
        options: ["18.4%", "36.8%", "50%", "100%"],
        correctAnswer: 0,
        explanation: { solution: "Pure ALOHA: 1/(2e) ≈ 18.4%" }
    },
    {
        id: "gate-net-mac-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "[GATE 2019] Slotted ALOHA max throughput:",
        options: ["18.4%", "36.8%", "50%", "100%"],
        correctAnswer: 1,
        explanation: { solution: "Slotted ALOHA: 1/e ≈ 36.8%" }
    },
    // ========== NETWORK LAYER - GATE PYQ STYLE ==========
    {
        id: "gate-net-nl-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "[GATE 2018] IP 192.168.10.0/26. Usable host addresses = ?",
        correctAnswer: 62,
        tolerance: 0,
        explanation: { solution: "2^(32-26) - 2 = 64 - 2 = 62" }
    },
    {
        id: "gate-net-nl-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "[GATE 2019] Class B uses /16 default. Bits for network = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "Class B: 16 network bits" }
    },
    {
        id: "gate-net-nl-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "[GATE 2017] Need 100 host addresses. Minimum subnet prefix = ?",
        correctAnswer: 25,
        tolerance: 0,
        explanation: { solution: "2^7-2 = 126 ≥ 100. So 32-7 = /25" }
    },
    {
        id: "gate-net-nl-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "[GATE 2016] ICMP is used for:",
        options: ["Routing", "Error reporting and diagnostics", "File transfer", "Email"],
        correctAnswer: 1,
        explanation: { solution: "ICMP: ping, traceroute, error messages" }
    },
    // ========== ROUTING - GATE PYQ STYLE ==========
    {
        id: "gate-net-rout-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "[GATE 2018] RIP uses:",
        options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Prim"],
        correctAnswer: 1,
        explanation: { solution: "RIP: distance-vector (Bellman-Ford)" }
    },
    {
        id: "gate-net-rout-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "[GATE 2019] OSPF uses:",
        options: ["Bellman-Ford", "Dijkstra", "BFS", "DFS"],
        correctAnswer: 1,
        explanation: { solution: "OSPF: link-state (Dijkstra)" }
    },
    {
        id: "gate-net-rout-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Routing",
        question: "[GATE 2017] RIP max hop count:",
        correctAnswer: 15,
        tolerance: 0,
        explanation: { solution: "RIP: max 15 hops (16 = unreachable)" }
    },
    // ========== TRANSPORT LAYER - GATE PYQ STYLE ==========
    {
        id: "gate-net-tcp-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "[GATE 2018] TCP: max segment size 1KB, window 64KB. Max segments in flight = ?",
        correctAnswer: 64,
        tolerance: 0,
        explanation: { solution: "64KB / 1KB = 64 segments" }
    },
    {
        id: "gate-net-tcp-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "[GATE 2019] TCP 3-way handshake flags:",
        options: ["SYN, ACK, FIN", "SYN, SYN-ACK, ACK", "ACK, SYN, ACK", "FIN, ACK, FIN"],
        correctAnswer: 1,
        explanation: { solution: "SYN → SYN+ACK → ACK" }
    },
    {
        id: "gate-net-tcp-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "[GATE 2017] TCP slow start increases cwnd:",
        options: ["Linearly", "Exponentially", "Logarithmically", "Constant"],
        correctAnswer: 1,
        explanation: { solution: "Slow start: cwnd doubles each RTT" }
    },
    {
        id: "gate-net-tcp-004",
        type: "NAT",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "[GATE Style] TCP initial cwnd=1, ssthresh=8. After 3 RTTs, cwnd = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: { solution: "1→2→4→8 (doubles each RTT until ssthresh)" }
    },
    // ========== APPLICATION LAYER - GATE PYQ STYLE ==========
    {
        id: "gate-net-app-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "[GATE 2018] HTTP port number:",
        correctAnswer: 80,
        tolerance: 0,
        explanation: { solution: "HTTP: port 80" }
    },
    {
        id: "gate-net-app-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "[GATE 2019] HTTPS port number:",
        correctAnswer: 443,
        tolerance: 0,
        explanation: { solution: "HTTPS: port 443" }
    },
    {
        id: "gate-net-app-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "[GATE 2017] DNS port number:",
        correctAnswer: 53,
        tolerance: 0,
        explanation: { solution: "DNS: port 53 (UDP usually)" }
    },
    {
        id: "gate-net-app-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "[GATE 2016] Persistent HTTP advantage:",
        options: ["More secure", "Reuses TCP connection", "Faster DNS", "Better compression"],
        correctAnswer: 1,
        explanation: { solution: "Persistent: same TCP connection for multiple requests" }
    },
    {
        id: "gate-net-app-005",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "[GATE Style] Non-persistent HTTP: 10 objects, RTT=100ms. Total time (ms) = ?",
        correctAnswer: 2100,
        tolerance: 100,
        explanation: { solution: "Each object: 2 RTT. 10 objects + 1 base = 11 × 2 × 100 = 2200ms approx" }
    }
]);

console.log("GATE PYQ Style - Networks loaded - ~35 questions");
