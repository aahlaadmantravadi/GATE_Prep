/**
 * Computer Networks Extended - All Layers
 */

Questions.register([
    // ========== PHYSICAL LAYER ==========
    {
        id: "net-phy-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Shannon's capacity formula gives maximum data rate as:",
        options: ["B × log₂(S/N)", "B × log₂(1 + S/N)", "2B × log₂(V)", "B/log(S/N)"],
        correctAnswer: 1,
        explanation: { solution: "Shannon capacity: C = B × log₂(1 + S/N) where B=bandwidth, S/N=signal-to-noise ratio", formula: "C = B log₂(1 + S/N) bits/sec" }
    },
    {
        id: "net-phy-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "Nyquist formula (noiseless channel) gives max data rate as:",
        options: ["B", "2B", "2B × log₂(V)", "B/2"],
        correctAnswer: 2,
        explanation: { solution: "Nyquist: C = 2B × log₂(V) where B=bandwidth, V=signal levels", formula: "C = 2B log₂(V) bits/sec" }
    },
    {
        id: "net-phy-003",
        type: "NAT",
        topic: "networks",
        subtopic: "Physical Layer",
        question: "A channel with bandwidth 4 kHz and SNR 255 has capacity (Shannon's formula) approximately how many kbps?",
        correctAnswer: 32,
        tolerance: 1,
        explanation: { solution: "C = 4000 × log₂(1+255) = 4000 × log₂(256) = 4000 × 8 = 32000 bps = 32 kbps", formula: "C = 4000 × log₂(256) = 32 kbps" }
    },
    // ========== DATA LINK LAYER ==========
    {
        id: "net-dll-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Stop-and-Wait protocol efficiency on high bandwidth-delay product link is:",
        options: ["Very high", "Very low", "Always 100%", "Undefined"],
        correctAnswer: 1,
        explanation: { solution: "Stop-and-Wait: sender waits for ACK after each frame. Low utilization on long-delay links." }
    },
    {
        id: "net-dll-011",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Go-Back-N allows sender to have up to _____ unacknowledged frames:",
        options: ["1", "N", "N-1", "2N"],
        correctAnswer: 1,
        explanation: { solution: "Go-Back-N: window size N allows N outstanding frames" }
    },
    {
        id: "net-dll-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "Selective Repeat allows receiver to:",
        options: ["Only accept in-order frames", "Accept and buffer out-of-order frames", "Drop all frames on error", "Send only NAKs"],
        correctAnswer: 1,
        explanation: { solution: "Selective Repeat: buffer out-of-order frames, send individual ACK/NAK, retransmit only lost frames" }
    },
    {
        id: "net-dll-013",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "In Go-Back-N with n-bit sequence numbers, maximum window size is:",
        options: ["2ⁿ", "2ⁿ - 1", "2ⁿ⁻¹", "n"],
        correctAnswer: 1,
        explanation: { solution: "GBN: window ≤ 2ⁿ - 1 to distinguish new from retransmitted frames", formula: "Max window = 2ⁿ - 1" }
    },
    {
        id: "net-dll-014",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "In Selective Repeat with n-bit sequence numbers, maximum window size is:",
        options: ["2ⁿ", "2ⁿ - 1", "2ⁿ⁻¹", "n"],
        correctAnswer: 2,
        explanation: { solution: "SR: window ≤ 2ⁿ⁻¹ (sender + receiver windows must not overlap)", formula: "Max window = 2^(n-1)" }
    },
    {
        id: "net-dll-015",
        type: "MCQ",
        topic: "networks",
        subtopic: "Data Link Layer",
        question: "HDLC flag byte for frame delimiting is:",
        options: ["0x00", "0x7E", "0xFF", "0x55"],
        correctAnswer: 1,
        explanation: { solution: "HDLC uses 0x7E (01111110) as flag. Bit stuffing prevents this pattern in data." }
    },
    // ========== NETWORK LAYER ==========
    {
        id: "net-nl-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Class C IP address has how many host bits?",
        options: ["8", "16", "24", "7"],
        correctAnswer: 0,
        explanation: { solution: "Class C: first 3 bytes = network, last 1 byte (8 bits) = host" }
    },
    {
        id: "net-nl-011",
        type: "NAT",
        topic: "networks",
        subtopic: "Network Layer",
        question: "A /28 subnet has how many usable host addresses?",
        correctAnswer: 14,
        tolerance: 0,
        explanation: { solution: "/28 = 4 host bits → 2⁴ - 2 = 14 usable hosts (subtract network and broadcast)", formula: "Hosts = 2^(32-28) - 2 = 14" }
    },
    {
        id: "net-nl-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "CIDR (Classless Inter-Domain Routing) allows:",
        options: ["Fixed subnet masks only", "Variable-length subnet masks", "No subnetting", "Only /8, /16, /24"],
        correctAnswer: 1,
        explanation: { solution: "CIDR: any prefix length /n, not limited to class boundaries" }
    },
    {
        id: "net-nl-013",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "ARP resolves:",
        options: ["Domain name to IP", "IP address to MAC address", "MAC to IP", "Hostname to IP"],
        correctAnswer: 1,
        explanation: { solution: "ARP: Address Resolution Protocol - maps IP to MAC for local delivery" }
    },
    {
        id: "net-nl-014",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "ICMP is used for:",
        options: ["Data transfer", "Error reporting and diagnostics", "Routing", "Encryption"],
        correctAnswer: 1,
        explanation: { solution: "ICMP: ping, traceroute, destination unreachable, time exceeded messages" }
    },
    {
        id: "net-nl-015",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Distance Vector routing algorithm is used by:",
        options: ["OSPF", "RIP", "BGP", "IS-IS"],
        correctAnswer: 1,
        explanation: { solution: "RIP uses distance vector (Bellman-Ford). OSPF uses link state (Dijkstra). BGP is path vector." }
    },
    {
        id: "net-nl-016",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Link State routing protocol is:",
        options: ["RIP", "OSPF", "RIPv2", "IGRP"],
        correctAnswer: 1,
        explanation: { solution: "OSPF: Open Shortest Path First - link state protocol using Dijkstra's algorithm" }
    },
    {
        id: "net-nl-017",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "Count-to-infinity problem affects:",
        options: ["Link state protocols", "Distance vector protocols", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "Distance vector: routing loops cause counts to increase until infinity (16 in RIP)" }
    },
    {
        id: "net-nl-018",
        type: "MCQ",
        topic: "networks",
        subtopic: "Network Layer",
        question: "NAT (Network Address Translation) is used to:",
        options: ["Encrypt packets", "Map private IPs to public IPs", "Route packets", "Fragment packets"],
        correctAnswer: 1,
        explanation: { solution: "NAT: allows multiple private IPs to share single public IP" }
    },
    // ========== TRANSPORT LAYER ==========
    {
        id: "net-tl-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP uses _____ handshake to establish connection:",
        options: ["2-way", "3-way", "4-way", "No handshake"],
        correctAnswer: 1,
        explanation: { solution: "TCP: SYN → SYN-ACK → ACK (3-way handshake)" }
    },
    {
        id: "net-tl-011",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP uses _____ handshake to close connection:",
        options: ["2-way", "3-way", "4-way", "1-way"],
        correctAnswer: 2,
        explanation: { solution: "TCP close: FIN → ACK → FIN → ACK (4-way handshake, can be combined to 3)" }
    },
    {
        id: "net-tl-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP slow start increases congestion window:",
        options: ["Linearly", "Exponentially", "Logarithmically", "Not at all"],
        correctAnswer: 1,
        explanation: { solution: "Slow start: cwnd doubles every RTT (exponential growth) until threshold" }
    },
    {
        id: "net-tl-013",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP congestion avoidance (after reaching ssthresh) increases window:",
        options: ["Exponentially", "Linearly (additive increase)", "Stays constant", "Decreases"],
        correctAnswer: 1,
        explanation: { solution: "Congestion avoidance: cwnd += 1/cwnd per ACK (linear/additive increase)" }
    },
    {
        id: "net-tl-014",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "On TCP timeout, congestion window is set to:",
        options: ["Previous value", "Half of current value", "1 MSS (segment)", "0"],
        correctAnswer: 2,
        explanation: { solution: "Timeout: cwnd = 1 MSS, ssthresh = cwnd/2, restart slow start" }
    },
    {
        id: "net-tl-015",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "UDP header size is:",
        options: ["8 bytes", "20 bytes", "24 bytes", "Variable"],
        correctAnswer: 0,
        explanation: { solution: "UDP header: 8 bytes (source port, dest port, length, checksum - each 2 bytes)" }
    },
    {
        id: "net-tl-016",
        type: "MCQ",
        topic: "networks",
        subtopic: "Transport Layer",
        question: "TCP header size (without options) is:",
        options: ["8 bytes", "16 bytes", "20 bytes", "32 bytes"],
        correctAnswer: 2,
        explanation: { solution: "TCP header minimum: 20 bytes. With options: up to 60 bytes." }
    },
    // ========== APPLICATION LAYER ==========
    {
        id: "net-al-010",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "DNS primarily uses which transport protocol?",
        options: ["TCP only", "UDP only", "UDP (default), TCP for large responses", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "DNS: UDP port 53 for queries, TCP for zone transfers or responses > 512 bytes" }
    },
    {
        id: "net-al-011",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "DNS uses port:",
        options: ["21", "25", "53", "80"],
        correctAnswer: 2,
        explanation: { solution: "DNS: port 53. FTP: 21, SMTP: 25, HTTP: 80" }
    },
    {
        id: "net-al-012",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "DHCP is used to:",
        options: ["Resolve domain names", "Automatically assign IP addresses", "Transfer files", "Send email"],
        correctAnswer: 1,
        explanation: { solution: "DHCP: Dynamic Host Configuration Protocol - assigns IP, subnet, gateway, DNS automatically" }
    },
    {
        id: "net-al-013",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "HTTPS uses port:",
        options: ["80", "443", "8080", "22"],
        correctAnswer: 1,
        explanation: { solution: "HTTPS (HTTP Secure): port 443. HTTP: 80, SSH: 22" }
    },
    {
        id: "net-al-014",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "Telnet port number is:",
        options: ["21", "22", "23", "25"],
        correctAnswer: 2,
        explanation: { solution: "Telnet: 23. SSH: 22. FTP: 21. SMTP: 25." }
    },
    {
        id: "net-al-015",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Protocols",
        question: "POP3 vs IMAP: IMAP allows:",
        options: ["Only download and delete", "Server-side mail management without download", "No email access", "FTP access"],
        correctAnswer: 1,
        explanation: { solution: "IMAP: manage mail on server, sync across devices. POP3: download and usually delete." }
    }
]);

console.log("Extended Networks questions loaded");
