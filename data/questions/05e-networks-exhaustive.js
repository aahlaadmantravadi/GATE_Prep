/**
 * Computer Networks EXHAUSTIVE
 * OSI/TCP-IP, Physical, Data Link, Network, Transport, Application Layer
 */

Questions.register([
    // ========== NETWORK MODELS ==========
    {
        id: "net2-model-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "OSI model has how many layers?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 3,
        explanation: { solution: "OSI: Physical, Data Link, Network, Transport, Session, Presentation, Application" }
    },
    {
        id: "net2-model-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "TCP/IP model has how many layers?",
        options: ["4 or 5", "7", "3", "6"],
        correctAnswer: 0,
        explanation: { solution: "TCP/IP: Network Interface (or Physical+Data Link), Internet, Transport, Application" }
    },
    {
        id: "net2-model-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "OSI Layer 1 (Physical) deals with:",
        options: ["Routing", "Bit transmission over physical medium", "End-to-end delivery", "Encryption"],
        correctAnswer: 1,
        explanation: { solution: "Physical layer: bits, cables, signals, voltages, connectors" }
    },
    {
        id: "net2-model-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "OSI Layer 2 (Data Link) deals with:",
        options: ["Routing between networks", "Node-to-node delivery, framing, MAC addresses", "End-to-end reliability", "Application protocols"],
        correctAnswer: 1,
        explanation: { solution: "Data link: frames, MAC addresses, error detection, flow control" }
    },
    {
        id: "net2-model-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "OSI Layer 3 (Network) deals with:",
        options: ["Physical transmission", "Logical addressing, routing between networks", "Port numbers", "Encryption"],
        correctAnswer: 1,
        explanation: { solution: "Network layer: IP addresses, routing, packets" }
    },
    {
        id: "net2-model-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "OSI Layer 4 (Transport) deals with:",
        options: ["Routing", "End-to-end delivery, segmentation, ports", "MAC addresses", "Bit transmission"],
        correctAnswer: 1,
        explanation: { solution: "Transport: segments, ports, reliability (TCP) or speed (UDP)" }
    },
    {
        id: "net2-model-007",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Models",
        question: "Protocol Data Units (PDUs): Layer 2 = ?, Layer 3 = ?, Layer 4 = ?",
        options: ["Frame, Packet, Segment", "Packet, Frame, Segment", "Segment, Packet, Frame", "Bit, Frame, Packet"],
        correctAnswer: 0,
        explanation: { solution: "L2: Frame, L3: Packet/Datagram, L4: Segment (TCP) / Datagram (UDP)" }
    },
    // ========== PHYSICAL LAYER ==========
    {
        id: "net2-phy-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Nyquist theorem (noiseless channel): max bit rate = ?",
        options: ["2 × B × log₂(L)", "B × log₂(1 + SNR)", "B / 2", "L × B"],
        correctAnswer: 0,
        explanation: { solution: "Nyquist: bit_rate = 2 × bandwidth × log₂(levels)", formula: "2B log₂L" }
    },
    {
        id: "net2-phy-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Shannon capacity (noisy channel): C = ?",
        options: ["2B log₂L", "B × log₂(1 + SNR)", "B / SNR", "SNR × L"],
        correctAnswer: 1,
        explanation: { solution: "Shannon: C = B × log₂(1 + SNR)", formula: "C = B log₂(1 + SNR)" }
    },
    {
        id: "net2-phy-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Manchester encoding represents:",
        options: ["0 and 1 as voltage levels", "Transition in middle of bit (self-clocking)", "No transitions", "Only high voltage"],
        correctAnswer: 1,
        explanation: { solution: "Manchester: transition in middle of each bit period" }
    },
    {
        id: "net2-phy-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Multiplexing types include:",
        options: ["Only FDM", "FDM, TDM, WDM, CDM", "Only TDM", "No multiplexing exists"],
        correctAnswer: 1,
        explanation: { solution: "FDM (frequency), TDM (time), WDM (wavelength), CDM (code)" }
    },
    // ========== DATA LINK LAYER ==========
    {
        id: "net2-dl-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Framing is the process of:",
        options: ["Routing packets", "Encapsulating network layer packets into frames", "Encrypting data", "Addressing hosts"],
        correctAnswer: 1,
        explanation: { solution: "Framing: add header/trailer to create frames" }
    },
    {
        id: "net2-dl-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "MAC address is:",
        options: ["32 bits, logical", "48 bits, physical (hardware)", "Variable length", "Same as IP"],
        correctAnswer: 1,
        explanation: { solution: "MAC: 48-bit physical address burned into NIC" }
    },
    {
        id: "net2-dl-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Error detection using CRC (Cyclic Redundancy Check):",
        options: ["Corrects all errors", "Detects errors using polynomial division", "Cannot detect errors", "Is same as parity"],
        correctAnswer: 1,
        explanation: { solution: "CRC: powerful error detection using polynomial division" }
    },
    {
        id: "net2-dl-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Hamming code can:",
        options: ["Only detect errors", "Detect and correct single-bit errors", "Correct any number of errors", "Not detect any error"],
        correctAnswer: 1,
        explanation: { solution: "Hamming: detect 2-bit, correct 1-bit errors" }
    },
    {
        id: "net2-dl-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Hamming distance for detecting d errors: minimum distance = ?",
        options: ["d", "d + 1", "2d", "d - 1"],
        correctAnswer: 1,
        explanation: { solution: "Detect d errors: min distance = d + 1", formula: "dmin = d + 1" }
    },
    {
        id: "net2-dl-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Hamming distance for correcting d errors: minimum distance = ?",
        options: ["d", "d + 1", "2d + 1", "d - 1"],
        correctAnswer: 2,
        explanation: { solution: "Correct d errors: min distance = 2d + 1", formula: "dmin = 2d + 1" }
    },
    {
        id: "net2-dl-007",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Stop-and-Wait protocol: sender sends:",
        options: ["Multiple frames before waiting", "One frame, waits for ACK before next", "No frames", "Continuous stream"],
        correctAnswer: 1,
        explanation: { solution: "Stop-and-Wait: send 1 frame, wait for ACK, repeat" }
    },
    {
        id: "net2-dl-008",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Stop-and-Wait efficiency = ?",
        options: ["Always 100%", "1 / (1 + 2a) where a = propagation/transmission time", "0%", "Depends on frame size only"],
        correctAnswer: 1,
        explanation: { solution: "Efficiency = 1 / (1 + 2a), a = Tp/Tt", formula: "η = 1 / (1 + 2a)" }
    },
    {
        id: "net2-dl-009",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Go-Back-N ARQ: on error, retransmit:",
        options: ["Only erroneous frame", "All frames from erroneous frame onward", "No frames", "Random frames"],
        correctAnswer: 1,
        explanation: { solution: "GBN: retransmit frame N and all subsequent frames" }
    },
    {
        id: "net2-dl-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Selective Repeat ARQ: on error, retransmit:",
        options: ["All frames", "Only the erroneous frame(s)", "No frames", "From beginning"],
        correctAnswer: 1,
        explanation: { solution: "SR: retransmit only frames with errors, buffer out-of-order" }
    },
    {
        id: "net2-dl-011",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Sliding window size for Go-Back-N with n-bit sequence: max window = ?",
        options: ["2^n", "2^n - 1", "2^(n-1)", "n"],
        correctAnswer: 1,
        explanation: { solution: "GBN: sender window ≤ 2^n - 1", formula: "W ≤ 2^n - 1" }
    },
    {
        id: "net2-dl-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Sliding window size for Selective Repeat with n-bit sequence: max window = ?",
        options: ["2^n", "2^n - 1", "2^(n-1)", "n"],
        correctAnswer: 2,
        explanation: { solution: "SR: sender + receiver window ≤ 2^n, so each ≤ 2^(n-1)", formula: "W ≤ 2^(n-1)" }
    },
    // ========== MAC SUBLAYER ==========
    {
        id: "net2-mac-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "CSMA/CD is used in:",
        options: ["Wireless networks", "Ethernet (wired LAN)", "WAN only", "Satellite networks"],
        correctAnswer: 1,
        explanation: { solution: "CSMA/CD: Carrier Sense Multiple Access with Collision Detection (Ethernet)" }
    },
    {
        id: "net2-mac-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "CSMA/CD: minimum frame size ensures:",
        options: ["Maximum speed", "Collision detected before transmission ends", "No errors", "Large packets"],
        correctAnswer: 1,
        explanation: { solution: "Min frame: Tt ≥ 2Tp so sender still transmitting if collision occurs" }
    },
    {
        id: "net2-mac-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "CSMA/CA is used in:",
        options: ["Wired Ethernet", "Wireless networks (WiFi)", "Fiber optic", "Coaxial only"],
        correctAnswer: 1,
        explanation: { solution: "CSMA/CA: Collision Avoidance for wireless (can't detect collision easily)" }
    },
    {
        id: "net2-mac-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Switch operates at which layer?",
        options: ["Physical", "Data Link (Layer 2)", "Network", "Transport"],
        correctAnswer: 1,
        explanation: { solution: "Switch: Layer 2, uses MAC addresses to forward frames" }
    },
    {
        id: "net2-mac-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Hub operates at which layer?",
        options: ["Physical (Layer 1)", "Data Link", "Network", "Transport"],
        correctAnswer: 0,
        explanation: { solution: "Hub: Layer 1, just broadcasts bits to all ports" }
    },
    // ========== NETWORK LAYER ==========
    {
        id: "net2-net-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "IPv4 address is:",
        options: ["48 bits", "32 bits", "128 bits", "64 bits"],
        correctAnswer: 1,
        explanation: { solution: "IPv4: 32 bits (4 octets, e.g., 192.168.1.1)" }
    },
    {
        id: "net2-net-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "IPv6 address is:",
        options: ["32 bits", "48 bits", "128 bits", "64 bits"],
        correctAnswer: 2,
        explanation: { solution: "IPv6: 128 bits" }
    },
    {
        id: "net2-net-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Subnet mask is used to:",
        options: ["Encrypt data", "Identify network and host portions of IP address", "Route packets", "Compress data"],
        correctAnswer: 1,
        explanation: { solution: "Subnet mask: 1s for network, 0s for host portion" }
    },
    {
        id: "net2-net-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "CIDR notation /24 means:",
        options: ["24 hosts", "24-bit network prefix", "24 networks", "24 routers"],
        correctAnswer: 1,
        explanation: { solution: "/24: first 24 bits are network, remaining 8 bits for hosts" }
    },
    {
        id: "net2-net-005",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "A /24 network has how many usable host addresses? (Subtract 2 for network and broadcast)",
        correctAnswer: 254,
        tolerance: 0,
        explanation: { solution: "2^8 - 2 = 256 - 2 = 254 usable hosts" }
    },
    {
        id: "net2-net-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Class A IP address range (first octet):",
        options: ["0-127", "128-191", "192-223", "224-239"],
        correctAnswer: 0,
        explanation: { solution: "Class A: 1-126 (0 and 127 reserved), first bit 0" }
    },
    {
        id: "net2-net-007",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Class B IP address range (first octet):",
        options: ["0-127", "128-191", "192-223", "224-239"],
        correctAnswer: 1,
        explanation: { solution: "Class B: 128-191, first two bits 10" }
    },
    {
        id: "net2-net-008",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Class C IP address range (first octet):",
        options: ["0-127", "128-191", "192-223", "224-239"],
        correctAnswer: 2,
        explanation: { solution: "Class C: 192-223, first three bits 110" }
    },
    {
        id: "net2-net-009",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Private IP address ranges include:",
        options: ["10.x.x.x, 172.16-31.x.x, 192.168.x.x", "Only 10.x.x.x", "Only 192.168.x.x", "All IP addresses"],
        correctAnswer: 0,
        explanation: { solution: "Private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16" }
    },
    {
        id: "net2-net-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "NAT (Network Address Translation) is used for:",
        options: ["Routing", "Translating private IPs to public IP", "Encryption", "Error correction"],
        correctAnswer: 1,
        explanation: { solution: "NAT: multiple private IPs share one public IP" }
    },
    {
        id: "net2-net-011",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "ARP (Address Resolution Protocol) resolves:",
        options: ["IP to MAC address", "MAC to IP address", "Domain to IP", "Port to service"],
        correctAnswer: 0,
        explanation: { solution: "ARP: IP address → MAC address (same network)" }
    },
    {
        id: "net2-net-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "RARP (Reverse ARP) resolves:",
        options: ["IP to MAC", "MAC to IP address", "Domain to IP", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "RARP: MAC address → IP address" }
    },
    {
        id: "net2-net-013",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "ICMP is used for:",
        options: ["Routing", "Error reporting and diagnostics (ping, traceroute)", "Data transfer", "Encryption"],
        correctAnswer: 1,
        explanation: { solution: "ICMP: error messages, ping, traceroute" }
    },
    {
        id: "net2-net-014",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Router operates at which layer?",
        options: ["Physical", "Data Link", "Network (Layer 3)", "Transport"],
        correctAnswer: 2,
        explanation: { solution: "Router: Layer 3, uses IP addresses to route packets" }
    },
    // ========== ROUTING ==========
    {
        id: "net2-route-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Distance Vector routing algorithm is based on:",
        options: ["Link state", "Bellman-Ford (exchange distance vectors with neighbors)", "Dijkstra", "Flooding"],
        correctAnswer: 1,
        explanation: { solution: "DV: Bellman-Ford, share distance table with neighbors" }
    },
    {
        id: "net2-route-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Link State routing algorithm is based on:",
        options: ["Bellman-Ford", "Dijkstra (build global topology)", "Only local info", "Random selection"],
        correctAnswer: 1,
        explanation: { solution: "LS: flood link info, each router uses Dijkstra" }
    },
    {
        id: "net2-route-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "RIP (Routing Information Protocol) uses:",
        options: ["Link State", "Distance Vector", "Path Vector", "Flooding"],
        correctAnswer: 1,
        explanation: { solution: "RIP: distance vector, hop count metric, max 15 hops" }
    },
    {
        id: "net2-route-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "OSPF (Open Shortest Path First) uses:",
        options: ["Distance Vector", "Link State", "Path Vector", "Static routing"],
        correctAnswer: 1,
        explanation: { solution: "OSPF: link state, Dijkstra, hierarchical areas" }
    },
    {
        id: "net2-route-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "BGP (Border Gateway Protocol) uses:",
        options: ["Distance Vector", "Link State", "Path Vector", "Flooding"],
        correctAnswer: 2,
        explanation: { solution: "BGP: path vector, inter-AS routing, policy-based" }
    },
    {
        id: "net2-route-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Count-to-infinity problem occurs in:",
        options: ["Link State routing", "Distance Vector routing", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "DV: slow convergence on failures, count-to-infinity problem" }
    },
    // ========== TRANSPORT LAYER ==========
    {
        id: "net2-trans-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP is:",
        options: ["Connectionless, unreliable", "Connection-oriented, reliable", "Connectionless, reliable", "Connection-oriented, unreliable"],
        correctAnswer: 1,
        explanation: { solution: "TCP: connection-oriented, reliable, ordered delivery" }
    },
    {
        id: "net2-trans-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "UDP is:",
        options: ["Connection-oriented, reliable", "Connectionless, unreliable (best-effort)", "Connection-oriented, unreliable", "Connectionless, reliable"],
        correctAnswer: 1,
        explanation: { solution: "UDP: connectionless, unreliable, no ordering guarantee, low overhead" }
    },
    {
        id: "net2-trans-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "Port numbers identify:",
        options: ["Physical ports", "Applications/processes on a host", "MAC addresses", "IP addresses"],
        correctAnswer: 1,
        explanation: { solution: "Port: 16-bit number identifying application endpoint" }
    },
    {
        id: "net2-trans-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "Well-known ports range from:",
        options: ["0-1023", "1024-49151", "49152-65535", "0-65535"],
        correctAnswer: 0,
        explanation: { solution: "Well-known: 0-1023 (HTTP=80, HTTPS=443, FTP=21, SSH=22)" }
    },
    {
        id: "net2-trans-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP 3-way handshake sequence:",
        options: ["ACK, SYN, FIN", "SYN, SYN-ACK, ACK", "FIN, ACK, FIN", "SYN, ACK, SYN"],
        correctAnswer: 1,
        explanation: { solution: "3-way: SYN → SYN-ACK → ACK (connection established)" }
    },
    {
        id: "net2-trans-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP connection termination uses:",
        options: ["3-way handshake", "4-way handshake (FIN → ACK → FIN → ACK)", "1-way", "No handshake"],
        correctAnswer: 1,
        explanation: { solution: "4-way: FIN, ACK, FIN, ACK (graceful close)" }
    },
    {
        id: "net2-trans-007",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP flow control uses:",
        options: ["Congestion window only", "Sliding window (receiver advertised window)", "No flow control", "Rate limiting only"],
        correctAnswer: 1,
        explanation: { solution: "TCP flow control: receiver advertises available buffer (rwnd)" }
    },
    {
        id: "net2-trans-008",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP congestion control uses:",
        options: ["Slow start, congestion avoidance, fast retransmit, fast recovery", "Only slow start", "No congestion control", "Only fast recovery"],
        correctAnswer: 0,
        explanation: { solution: "TCP congestion: slow start, cong. avoidance, fast retransmit/recovery" }
    },
    {
        id: "net2-trans-009",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP slow start: cwnd increases:",
        options: ["Linearly", "Exponentially (double every RTT)", "Remains constant", "Decreases"],
        correctAnswer: 1,
        explanation: { solution: "Slow start: cwnd doubles every RTT until threshold" }
    },
    {
        id: "net2-trans-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP congestion avoidance: cwnd increases:",
        options: ["Exponentially", "Linearly (add 1 MSS per RTT)", "Stays constant", "Halves"],
        correctAnswer: 1,
        explanation: { solution: "Congestion avoidance: additive increase (1 MSS per RTT)" }
    },
    {
        id: "net2-trans-011",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "On timeout, TCP sets cwnd to:",
        options: ["Half of current", "1 MSS (restart slow start)", "Double", "No change"],
        correctAnswer: 1,
        explanation: { solution: "Timeout: ssthresh = cwnd/2, cwnd = 1 MSS, slow start" }
    },
    {
        id: "net2-trans-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "On 3 duplicate ACKs, TCP uses:",
        options: ["Slow start from 1", "Fast retransmit + fast recovery (cwnd halved)", "No action", "Connection reset"],
        correctAnswer: 1,
        explanation: { solution: "3 dup ACKs: fast retransmit, cwnd = ssthresh + 3, congestion avoidance" }
    },
    // ========== APPLICATION LAYER ==========
    {
        id: "net2-app-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DNS resolves:",
        options: ["IP to MAC", "Domain name to IP address", "MAC to IP", "Port to service"],
        correctAnswer: 1,
        explanation: { solution: "DNS: domain name → IP address" }
    },
    {
        id: "net2-app-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DNS uses port:",
        options: ["80", "53", "443", "25"],
        correctAnswer: 1,
        explanation: { solution: "DNS: port 53 (UDP primarily, TCP for large responses)" }
    },
    {
        id: "net2-app-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP uses port:",
        options: ["53", "80", "443", "22"],
        correctAnswer: 1,
        explanation: { solution: "HTTP: port 80 (unencrypted)" }
    },
    {
        id: "net2-app-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTPS uses port:",
        options: ["80", "443", "22", "25"],
        correctAnswer: 1,
        explanation: { solution: "HTTPS: port 443 (HTTP over TLS/SSL)" }
    },
    {
        id: "net2-app-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "FTP uses port:",
        options: ["80", "21 (control) and 20 (data)", "22", "25"],
        correctAnswer: 1,
        explanation: { solution: "FTP: port 21 (control), port 20 (data)" }
    },
    {
        id: "net2-app-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "SSH uses port:",
        options: ["21", "80", "22", "25"],
        correctAnswer: 2,
        explanation: { solution: "SSH: port 22 (secure shell)" }
    },
    {
        id: "net2-app-007",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "SMTP (email sending) uses port:",
        options: ["80", "25", "110", "143"],
        correctAnswer: 1,
        explanation: { solution: "SMTP: port 25 (send email)" }
    },
    {
        id: "net2-app-008",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DHCP is used for:",
        options: ["DNS resolution", "Dynamic IP address assignment", "Routing", "Encryption"],
        correctAnswer: 1,
        explanation: { solution: "DHCP: dynamic assignment of IP, subnet mask, gateway, DNS" }
    },
    {
        id: "net2-app-009",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP is:",
        options: ["Stateful", "Stateless", "Connection-oriented", "Reliable transport"],
        correctAnswer: 1,
        explanation: { solution: "HTTP: stateless (each request independent, cookies add state)" }
    },
    {
        id: "net2-app-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP methods include:",
        options: ["Only GET", "GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH", "Only POST", "Only HEAD"],
        correctAnswer: 1,
        explanation: { solution: "HTTP methods: GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH, etc." }
    }
]);

console.log("Exhaustive Computer Networks loaded - ~75 questions");
