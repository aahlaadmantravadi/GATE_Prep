/**
 * GATE Previous Year Questions Style - Computer Networks
 * 35+ questions covering actual GATE exam patterns
 * Topics: Physical, DLL, Network, Transport, Application
 */

Questions.register([
    // ========== PHYSICAL LAYER ==========
    {
        id: "gate-net-phy-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Bandwidth 3kHz, SNR = 63. Shannon capacity (kbps) = ?",
        correctAnswer: 18,
        tolerance: 0.5,
        explanation: {
            solution: "Shannon-Hartley theorem: C = B × log₂(1 + SNR). Here B = 3000 Hz, SNR = 63. C = 3000 × log₂(64) = 3000 × 6 = 18,000 bps = 18 kbps. This is the theoretical maximum channel capacity with noise. Note: SNR is given as ratio (63), not dB.",
            formula: "$C = B \\times \\log_2(1 + SNR) = 3000 \\times \\log_2(64) = 18$ kbps"
        }
    },
    {
        id: "gate-net-phy-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Bandwidth 4kHz, 8 signal levels. Nyquist rate (kbps) = ?",
        correctAnswer: 24,
        tolerance: 0,
        explanation: {
            solution: "Nyquist theorem for noiseless channel: C = 2B × log₂(L), where L = signal levels. C = 2 × 4000 × log₂(8) = 8000 × 3 = 24,000 bps = 24 kbps. Nyquist gives max rate without ISI (intersymbol interference). Shannon gives max with noise. Actual capacity ≤ min(Nyquist, Shannon).",
            formula: "$C = 2B \\times \\log_2(L) = 2 \\times 4000 \\times 3 = 24$ kbps"
        }
    },
    {
        id: "gate-net-phy-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Manchester encoding baud rate for 10 Mbps:",
        options: ["5 Mbaud", "10 Mbaud", "20 Mbaud", "40 Mbaud"],
        correctAnswer: 2,
        explanation: {
            solution: "Manchester encoding has a transition in the middle of each bit period (for clocking) plus possible transitions at boundaries. Each bit requires 2 signal transitions → baud rate = 2 × bit rate. For 10 Mbps: baud rate = 20 Mbaud. It's self-clocking but inefficient (50% efficiency). Used in 10BASE-T Ethernet.",
            formula: "$Baud = 2 \\times BitRate = 20$ Mbaud"
        }
    },
    // ========== DATA LINK LAYER ==========
    {
        id: "gate-net-dll-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Data Link",
        question: "CRC generator x⁴+x+1. Checksum bits = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "In CRC, the number of checksum bits equals the degree of the generator polynomial. For G(x) = x⁴+x+1, degree = 4, so 4 checksum bits are appended. The generator in binary is 10011 (5 bits). Transmitted message = data × x⁴ + remainder (after dividing by generator). CRC can detect all burst errors ≤ 4 bits.",
            formula: "CRC bits = degree of generator = 4"
        }
    },
    {
        id: "gate-net-dll-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Data Link",
        question: "Hamming code: 11 data bits. Parity bits needed = ?",
        correctAnswer: 4,
        tolerance: 0,
        explanation: {
            solution: "Hamming code formula: 2^r ≥ m + r + 1, where r = parity bits, m = data bits. For m = 11: try r=3: 8 ≥ 15? No. Try r=4: 16 ≥ 16? Yes! So 4 parity bits needed. Parity bits go at positions 1, 2, 4, 8 (powers of 2). Total codeword = 11 + 4 = 15 bits. Can detect 2 errors, correct 1.",
            formula: "$2^r \\geq m + r + 1$; $2^4 = 16 \\geq 11+4+1 = 16$ ✓"
        }
    },
    {
        id: "gate-net-dll-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "Minimum Hamming distance to detect d errors:",
        options: ["d", "d+1", "2d", "2d+1"],
        correctAnswer: 1,
        explanation: {
            solution: "To detect d errors, we need Hamming distance ≥ d+1. Intuition: if codewords are d+1 apart, d bit flips can't turn one valid codeword into another (they'd be at most d away). For error CORRECTION of t errors, need distance ≥ 2t+1 (to be closer to original than any other valid codeword).",
            formula: "Detection: $d_{min} \\geq d+1$; Correction: $d_{min} \\geq 2t+1$"
        }
    },
    {
        id: "gate-net-dll-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link",
        question: "Minimum Hamming distance to correct t errors:",
        options: ["t", "t+1", "2t", "2t+1"],
        correctAnswer: 3,
        explanation: {
            solution: "To correct t errors, need Hamming distance ≥ 2t+1. After t bit flips, the corrupted word is still closer to the original (t away) than to any other valid codeword (at least t+1 away, since others are 2t+1 away and we're t from original). This ensures unique recovery of original.",
            formula: "$d_{min} \\geq 2t+1$ for t-error correction"
        }
    },
    // ========== ARQ PROTOCOLS ==========
    {
        id: "gate-net-arq-001",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "Stop-and-wait: Tp=10ms, Tt=5ms. Efficiency (%) = ?",
        correctAnswer: 20,
        tolerance: 1,
        explanation: {
            solution: "Stop-and-wait: sender waits for ACK after each frame. Efficiency η = Tt/(Tt + 2×Tp) = useful time / total cycle time. Here: 5/(5 + 2×10) = 5/25 = 0.2 = 20%. The 2×Tp accounts for round-trip propagation. Efficiency is poor when Tp >> Tt (high bandwidth-delay product).",
            formula: "$\\eta = \\frac{T_t}{T_t + 2T_p} = \\frac{5}{25} = 20\\%$"
        }
    },
    {
        id: "gate-net-arq-002",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "GBN: 3-bit sequence number. Max window size = ?",
        correctAnswer: 7,
        tolerance: 0,
        explanation: {
            solution: "Go-Back-N needs window size ≤ 2^n - 1 (where n = sequence number bits). With 3 bits: max window = 2³-1 = 7. Why not 8? If window = 8 and all ACKs lost, receiver can't distinguish between all-new frames vs retransmissions (sequence numbers wrap around). For n=3: sequence 0-7, window max 7.",
            formula: "GBN window $\\leq 2^n - 1 = 7$"
        }
    },
    {
        id: "gate-net-arq-003",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "SR: 4-bit sequence number. Max sender window = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: {
            solution: "Selective Repeat: both sender and receiver have windows. To avoid overlap ambiguity: sender window + receiver window ≤ 2^n. With equal windows (common): each ≤ 2^(n-1). For 4-bit: max sender window = 2³ = 8. This is larger than GBN would allow (15), but SR maintains per-frame state so needs this constraint.",
            formula: "SR window $\\leq 2^{n-1} = 2^3 = 8$"
        }
    },
    {
        id: "gate-net-arq-004",
        type: "NAT",
        topic: "networks",
        subtopic: "ARQ",
        question: "Propagation delay=200ms, bandwidth=1Mbps, frame=1000bits. a = Tp/Tt = ?",
        correctAnswer: 200,
        tolerance: 0,
        explanation: {
            solution: "Parameter 'a' measures propagation delay relative to transmission delay. Tt = frame_size/bandwidth = 1000/(10^6) = 0.001s = 1ms. Tp = 200ms. a = Tp/Tt = 200/1 = 200. Large 'a' means protocol efficiency is important (long pipes). Stop-and-wait efficiency ≈ 1/(1+2a) = 1/401 ≈ 0.25% here!",
            formula: "$a = \\frac{T_p}{T_t} = \\frac{200}{1} = 200$"
        }
    },
    // ========== MAC ==========
    {
        id: "gate-net-mac-001",
        type: "NAT",
        topic: "networks",
        subtopic: "MAC",
        question: "Ethernet 10Mbps, 2km distance, prop speed 2×10⁸m/s. Min frame (bits) = ?",
        correctAnswer: 200,
        tolerance: 10,
        explanation: {
            solution: "CSMA/CD collision detection requires sender still transmitting when collision arrives. Worst case: collision at far end, signal returns. RTT = 2×distance/speed = 2×2000/(2×10^8) = 20μs. Min frame must take ≥ RTT to transmit: bits ≥ bandwidth×RTT = 10^7 × 20×10^-6 = 200 bits. (Actual Ethernet min = 512 bits for longer cables.)",
            formula: "Min frame $\\geq BW \\times RTT = 10M \\times 20\\mu s = 200$ bits"
        }
    },
    {
        id: "gate-net-mac-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "Pure ALOHA max throughput:",
        options: ["18.4%", "36.8%", "50%", "100%"],
        correctAnswer: 0,
        explanation: {
            solution: "Pure ALOHA: stations transmit whenever they have data. Collision if any overlap. For Poisson arrivals, throughput S = G×e^(-2G), maximized at G=0.5, giving S = 1/(2e) ≈ 0.184 = 18.4%. The 2G factor comes from vulnerability period being 2× frame time (overlap can start before or during transmission).",
            formula: "Max throughput = $\\frac{1}{2e} \\approx 18.4\\%$"
        }
    },
    {
        id: "gate-net-mac-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "MAC",
        question: "Slotted ALOHA max throughput:",
        options: ["18.4%", "36.8%", "50%", "100%"],
        correctAnswer: 1,
        explanation: {
            solution: "Slotted ALOHA: time divided into slots, transmit only at slot boundaries. Vulnerability period reduced to 1× frame time (from 2× in pure ALOHA). Throughput S = G×e^(-G), maximized at G=1, giving S = 1/e ≈ 0.368 = 36.8%. Exactly double pure ALOHA's efficiency due to halved collision window.",
            formula: "Max throughput = $\\frac{1}{e} \\approx 36.8\\%$"
        }
    },
    // ========== NETWORK LAYER ==========
    {
        id: "gate-net-nl-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "IP 192.168.10.0/26. Usable host addresses = ?",
        correctAnswer: 62,
        tolerance: 0,
        explanation: {
            solution: "CIDR /26 means 26 network bits, leaving 32-26=6 host bits. Total addresses = 2^6 = 64. But network address (all 0s) and broadcast (all 1s) are reserved. Usable hosts = 64-2 = 62. This subnet: 192.168.10.0 (network), 192.168.10.1-62 (hosts), 192.168.10.63 (broadcast).",
            formula: "Hosts = $2^{32-26} - 2 = 64 - 2 = 62$"
        }
    },
    {
        id: "gate-net-nl-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Class B uses /16 default. Bits for network = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: {
            solution: "Classful addressing (legacy): Class A = /8 (8 network bits), Class B = /16 (16 network bits), Class C = /24 (24 network bits). Class B range: 128.0.0.0 - 191.255.255.255. The first two octets (16 bits) identify the network, remaining 16 bits for hosts (65,534 usable). CIDR replaced classful with flexible prefixes.",
            formula: "Class B default = /16 = 16 network bits"
        }
    },
    {
        id: "gate-net-nl-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Need 100 host addresses. Minimum subnet prefix = ?",
        correctAnswer: 25,
        tolerance: 0,
        explanation: {
            solution: "Need ≥100 usable hosts. Usable = 2^h - 2 where h = host bits. For 2^7 - 2 = 126 ≥ 100 ✓. So h = 7 host bits. Network bits = 32 - 7 = 25. Prefix = /25. This gives 126 usable addresses. /26 would give only 62, insufficient. Always round up to next power of 2 minus 2.",
            formula: "$2^7 - 2 = 126 \\geq 100$, so /$(32-7)$ = /25"
        }
    },
    {
        id: "gate-net-nl-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "ICMP is used for:",
        options: ["Routing", "Error reporting and diagnostics", "File transfer", "Email"],
        correctAnswer: 1,
        explanation: {
            solution: "ICMP (Internet Control Message Protocol) handles network-layer error reporting and diagnostics. Uses: ping (echo request/reply for reachability), traceroute (TTL exceeded messages reveal path), destination unreachable, source quench, redirect. ICMP is encapsulated in IP but considered part of network layer. Not for app data."
        }
    },
    // ========== ROUTING ==========
    {
        id: "gate-net-rout-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "RIP uses:",
        options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Prim"],
        correctAnswer: 1,
        explanation: {
            solution: "RIP (Routing Information Protocol) uses distance-vector algorithm based on Bellman-Ford. Routers share their distance tables with neighbors, who update their own tables. Converges slowly, max 15 hops, updates every 30s. Bellman-Ford: d[v] = min(d[v], d[u] + weight(u,v)) for all edges. Prone to count-to-infinity."
        }
    },
    {
        id: "gate-net-rout-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Routing",
        question: "OSPF uses:",
        options: ["Bellman-Ford", "Dijkstra", "BFS", "DFS"],
        correctAnswer: 1,
        explanation: {
            solution: "OSPF (Open Shortest Path First) uses link-state algorithm with Dijkstra's shortest path. Each router floods link-state advertisements (LSAs) to build complete network topology map. Then runs Dijkstra locally to compute shortest paths to all destinations. Faster convergence than RIP, no hop limit, supports VLSM and areas for scalability."
        }
    },
    {
        id: "gate-net-rout-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Routing",
        question: "RIP max hop count:",
        correctAnswer: 15,
        tolerance: 0,
        explanation: {
            solution: "RIP uses hop count as metric with maximum 15 hops. Destinations >15 hops away are considered unreachable (metric = 16 = infinity). This limits RIP to smaller networks. The limit exists partly to bound count-to-infinity problem: after failure, increments stop at 16. RIPv2 adds CIDR support but same 15-hop limit.",
            formula: "RIP max = 15 hops; 16 = unreachable"
        }
    },
    // ========== TRANSPORT LAYER ==========
    {
        id: "gate-net-tcp-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP: max segment size 1KB, window 64KB. Max segments in flight = ?",
        correctAnswer: 64,
        tolerance: 0,
        explanation: {
            solution: "TCP window limits unacknowledged data. Window = 64KB = 65536 bytes. MSS = 1KB = 1024 bytes. Max segments in flight = window/MSS = 65536/1024 = 64 segments. More precisely, up to 64 segments can be sent before waiting for ACKs. Larger windows enable better throughput on high bandwidth-delay networks.",
            formula: "Segments = Window/MSS = 64KB/1KB = 64"
        }
    },
    {
        id: "gate-net-tcp-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP 3-way handshake flags:",
        options: ["SYN, ACK, FIN", "SYN, SYN-ACK, ACK", "ACK, SYN, ACK", "FIN, ACK, FIN"],
        correctAnswer: 1,
        explanation: {
            solution: "TCP connection establishment: (1) Client→Server: SYN (seq=x), (2) Server→Client: SYN-ACK (seq=y, ack=x+1), (3) Client→Server: ACK (ack=y+1). Both sides exchange initial sequence numbers and confirm receipt. After handshake, bidirectional data transfer begins. Connection termination uses FIN flags (4-way)."
        }
    },
    {
        id: "gate-net-tcp-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP slow start increases cwnd:",
        options: ["Linearly", "Exponentially", "Logarithmically", "Constant"],
        correctAnswer: 1,
        explanation: {
            solution: "TCP slow start: congestion window (cwnd) starts at 1 MSS and DOUBLES each RTT (exponential growth: 1→2→4→8→16...). Called 'slow' only compared to sending entire window immediately. Continues until ssthresh (slow start threshold) reached, then switches to congestion avoidance (linear growth). On timeout, ssthresh = cwnd/2, cwnd = 1."
        }
    },
    {
        id: "gate-net-tcp-004",
        type: "NAT",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP initial cwnd=1, ssthresh=8. After 3 RTTs, cwnd = ?",
        correctAnswer: 8,
        tolerance: 0,
        explanation: {
            solution: "Slow start: cwnd doubles each RTT until reaching ssthresh. Start: cwnd=1. After RTT1: cwnd=2. After RTT2: cwnd=4. After RTT3: cwnd=8 (reaches ssthresh). After this, switches to congestion avoidance (additive increase). If ssthresh were higher, cwnd would be 8 anyway after 3 RTTs of doubling from 1.",
            formula: "cwnd: $1 \\rightarrow 2 \\rightarrow 4 \\rightarrow 8$ (3 RTTs)"
        }
    },
    // ========== APPLICATION LAYER ==========
    {
        id: "gate-net-app-001",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP port number:",
        correctAnswer: 80,
        tolerance: 0,
        explanation: {
            solution: "Well-known ports (0-1023): HTTP uses port 80. Web servers listen on port 80 for unencrypted HTTP traffic. Clients use ephemeral ports (>1024). Other common ports: FTP(20/21), SSH(22), Telnet(23), SMTP(25), DNS(53), HTTPS(443). Port + IP = socket address for connection identification.",
            formula: "HTTP = port 80"
        }
    },
    {
        id: "gate-net-app-002",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTPS port number:",
        correctAnswer: 443,
        tolerance: 0,
        explanation: {
            solution: "HTTPS (HTTP Secure) uses port 443. It's HTTP over TLS/SSL encryption layer. Server presents certificate during TLS handshake. Traffic is encrypted, protecting against eavesdropping and tampering. Modern web strongly prefers HTTPS for all sites, not just login pages.",
            formula: "HTTPS = port 443"
        }
    },
    {
        id: "gate-net-app-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DNS port number:",
        correctAnswer: 53,
        tolerance: 0,
        explanation: {
            solution: "DNS uses port 53, typically over UDP for queries (faster, smaller messages) and TCP for zone transfers (large, reliable). DNS resolves domain names to IP addresses through hierarchical system: root servers → TLD servers → authoritative name servers. Recursive vs iterative queries. Caching reduces load.",
            formula: "DNS = port 53 (UDP/TCP)"
        }
    },
    {
        id: "gate-net-app-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Persistent HTTP advantage:",
        options: ["More secure", "Reuses TCP connection", "Faster DNS", "Better compression"],
        correctAnswer: 1,
        explanation: {
            solution: "Persistent HTTP (HTTP/1.1 default, HTTP/2) reuses the same TCP connection for multiple requests/responses. Saves TCP handshake overhead (1 RTT) for each object after the first. Non-persistent HTTP/1.0 opens new connection per object. With pipelining, multiple requests can be sent without waiting for responses."
        }
    },
    {
        id: "gate-net-app-005",
        type: "NAT",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Non-persistent HTTP: 10 objects, RTT=100ms. Total time (ms) = ?",
        correctAnswer: 2100,
        tolerance: 100,
        explanation: {
            solution: "Non-persistent HTTP: each object requires separate TCP connection. Per object: 1 RTT for TCP handshake + 1 RTT for request-response = 2 RTT. For base HTML + 10 embedded objects = 11 objects total. Time = 11 × 2 × 100ms = 2200ms. Some parallelism possible with multiple simultaneous connections in practice.",
            formula: "Time ≈ $(1 + 10) \\times 2 \\times RTT = 2200$ms"
        }
    }
]);

console.log("Computer Networks Questions loaded - ~30 questions");
