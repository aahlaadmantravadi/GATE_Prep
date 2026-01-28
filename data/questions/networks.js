Questions.register([
    {
        "id": "net-osi-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "OSI & TCP/IP",
        "question": "The OSI model has how many layers?",
        "options": [
            "4",
            "6",
            "5",
            "7"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "OSI (Open Systems Interconnection) model: 7 layers defining network communication stack. Layers (bottom-up): (1) PHYSICAL - bits, cables, voltages; (2) DATA LINK - frames, MAC addressing, error detection; (3) NETWORK - logical addressing (IP), routing; (4) TRANSPORT - end-to-end delivery, reliability (TCP/UDP); (5) SESSION - dialog control, synchronization; (6) PRESENTATION - encryption, compression, format conversion; (7) APPLICATION - user interfaces, protocols (HTTP, FTP). Mnemonic: Please Do Not Throw Sausage Pizza Away. TCP/IP has 4-5 layers (merges upper layers).",
            "formula": "OSI: Phys|DL|Net|Trans|Sess|Pres|App (7)"
        }
    },
    {
        "id": "net-osi-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "OSI & TCP/IP",
        "question": "The Network layer is responsible for:",
        "options": [
            "Host-to-host delivery (routing)",
            "Process-to-process delivery",
            "Node-to-node delivery",
            "Physical transmission of bits"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Network Layer (Layer 3): provides HOST-TO-HOST delivery across multiple networks via routing. Responsibilities: (1) LOGICAL ADDRESSING using IP addresses (hierarchical), (2) ROUTING - path determination using routing algorithms/protocols (RIP, OSPF, BGP), (3) FRAGMENTATION/REASSEMBLY of packets, (4) FORWARDING packets to next hop. Key protocol: IP (Internet Protocol). Devices: Router. Physical layer = bits/voltage, Data Link = frame/node-to-node/MAC, Transport = process-to-process/ports.",
            "formula": "Network Layer: IP addressing + routing"
        }
    },
    {
        "id": "net-osi-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "OSI & TCP/IP",
        "question": "Transport layer provides:",
        "options": [
            "Process-to-process communication",
            "Encryption",
            "Bit synchronization",
            "Path determination"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Transport Layer (Layer 4): provides PROCESS-TO-PROCESS (end-to-end) communication using PORT NUMBERS to identify applications. Functions: (1) SEGMENTATION - break messages into segments, (2) ADDRESSING via ports (socket = IP + port), (3) ERROR CONTROL - checksums, (4) FLOW CONTROL - prevent sender overwhelming receiver, (5) CONGESTION CONTROL. Two main protocols: TCP (reliable, connection-oriented, slower) andUDP (unreliable, connectionless, fast). Multiplexing/demultiplexing happens here.",
            "formula": "Transport: ports for process-to-process"
        }
    },
    {
        "id": "net-proto-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "HTTP uses port number:",
        "options": [
            "80",
            "21",
            "443",
            "25"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Well-known port numbers: HTTP=80 (web), HTTPS=443 (secure web), FTP=20 (data)/21 (control), SMTP=25 (send email), DNS=53 (domain resolution), SSH=22 (secure shell), Telnet=23 (unsecure remote), POP3=110 (receive email), IMAP=143 (email access). Ports 0-1023: well-known/system, 1024-49151: registered, 49152-65535: dynamic/private. Servers listen on well-known ports; clients use ephemeral ports.",
            "formula": "HTTP:80, HTTPS:443, FTP:20/21, SMTP:25, DNS:53"
        }
    },
    {
        "id": "net-proto-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "SMTP is used for:",
        "options": [
            "Web browsing",
            "Receiving email",
            "File transfer",
            "Sending email"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SMTP (Simple Mail Transfer Protocol): used for SENDING/PUSHING email from client to mail server and between mail servers. Uses TCP port 25. Push protocol - client initiates and pushes mail. For RECEIVING email: POP3 (Post Office Protocol v3, port 110) - downloads and deletes from server, IMAP (Internet Message Access Protocol, port 143) - keeps mail on server, allows folder management. Email flow: Sender → SMTP → Mail Server → SMTP → Receiver's Mail Server → POP3/IMAP → Receiver.",
            "formula": "SMTP (send):25, POP3 (receive):110, IMAP:143"
        }
    },
    {
        "id": "net-proto-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "FTP uses separate connections for control and data. The control port is:",
        "options": [
            "22",
            "21",
            "23",
            "20"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP (File Transfer Protocol): uses TWO separate TCP connections: (1) CONTROL connection (port 21) - persistent, for commands/responses (USER, PASS, LIST, RETR, STOR), (2) DATA connection (port 20) - temporary, for actual file transfer. This is OUT-OF-BAND control (control and data separated). Modes: Active FTP (server initiates data connection to client-specified port), Passive FTP (client initiates both connections - NAT-friendly). Authentication: username/password. Insecure (plaintext) - use SFTP (SSH-based) or FTPS (TLS-based) for security.",
            "formula": "FTP: control=21, data=20 (out-of-band)"
        }
    },
    {
        "id": "net-proto-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP is different from UDP because TCP provides:",
        "options": [
            "Reliable, ordered delivery with flow control",
            "Smaller header overhead",
            "Connectionless service",
            "Faster transmission"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP vs UDP fundamental differences: TCP (Transmission Control Protocol): (1) CONNECTION-ORIENTED - 3-way handshake before data transfer, (2) RELIABLE - ACKs, sequence numbers, retransmission, guaranteed delivery, (3) ORDERED - maintains sequence, (4) FLOW CONTROL - prevents buffer overflow, (5) CONGESTION CONTROL - adjusts to network conditions, (6) OVERHEAD - 20-byte header. Use cases: HTTP, FTP, email. UDP (User Datagram Protocol): (1) CONNECTIONLESS - no setup, (2) UNRELIABLE - no ACKs/retransmission, (3) UNORDERED - datagrams may arrive out-of-order, (4) NO FLOW/CONGESTION control, (5) LOW OVERHEAD - 8-byte header, fast. Use cases: DNS, DHCP, streaming, gaming.",
            "formula": "TCP: reliable|ordered; UDP: fast|lightweight"
        }
    },
    {
        "id": "net-ip-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "An IPv4 address is how many bits long?",
        "options": [
            "128",
            "32",
            "16",
            "64"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "IPv4 (Internet Protocol version 4): 32-bit address space = 2^32 ≈ 4.3 billion addresses. Written in dotted-decimal notation: 4 octets (bytes) separated by dots, each 0-255. Example: 192.168.1.1. Structure: Network portion + Host portion (determined by subnet mask). Header: 20-60 bytes. Problems: address exhaustion (NAT helps), no built-in security. IPv6: 128 bits = 2^128 addresses, written in hexadecimal colon notation. IPv4 exhaustion led to CIDR, NAT, and IPv6 development.",
            "formula": "IPv4 = 32 bits = 4 bytes; $2^{32}$ addresses"
        }
    },
    {
        "id": "net-ip-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "A Class B IP address has how many bits for the network portion (default)?",
        "options": [
            "32",
            "16",
            "8",
            "24"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Classful IPv4 addressing (legacy, now CIDR): CLASS A: first bit=0, starts 0.x.x.x-127.x.x.x, 8 bits network/24 bits host, 126 networks (0 and 127 reserved), 16M hosts each, for large organizations. CLASS B: first 2 bits=10, starts 128.x.x.x-191.x.x.x, 16 bits network/16 bits host, 16K networks, 65K hosts each, for medium organizations. CLASS C: first 3 bits=110, starts 192.x.x.x-223.x.x.x, 24 bits network/8 bits host, 2M networks, 254 hosts each, for small organizations. CLASS D (224-239): multicast. CLASS E (240-255): experimental. Classful addressing wasteful - replaced by CIDR (Classless Inter-Domain Routing).",
            "formula": "Class A:8bit net, B:16bit, C:24bit network"
        }
    },
    {
        "id": "net-ip-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "A /24 subnet mask has how many usable host addresses?",
        "correctAnswer": 254,
        "tolerance": 0,
        "explanation": {
            "solution": "/24 means 8 bits for hosts. 2^8 = 256 addresses, minus 2 (network address and broadcast) = 254 usable.",
            "formula": "Usable hosts = 2^(32-prefix) - 2 = 2^8 - 2 = 254"
        }
    },
    {
        "id": "net-dl-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "CSMA/CD is used in:",
        "options": [
            "Ethernet (wired)",
            "Bluetooth",
            "Token Ring",
            "WiFi"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection): media access control protocol for traditional wired Ethernet. Operation: (1) CARRIER SENSE - listen before transmitting, (2) MULTIPLE ACCESS - all nodes share medium, (3) COLLISION DETECTION - if collision detected during transmission, STOP immediately, (4) BACKOFF - wait random time (exponential backoff) before retrying. Minimum frame size (64 bytes) ensures collision detection. Replaced by switches (full-duplex, no collisions). WiFi uses CSMA/CA (Collision AVOIDANCE - can't detect collisions in wireless).",
            "formula": "CSMA/CD: Listen, Transmit, Detect, Backoff"
        }
    },
    {
        "id": "net-dl-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "MAC address is how many bits long?",
        "options": [
            "128",
            "32",
            "48",
            "64"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "MAC (Media Access Control) address: 48 bits (6 bytes), written as 12 hex digits. First 24 bits = OUI (manufacturer), last 24 bits = unique.",
            "formula": "MAC = 48 bits = 6 bytes"
        }
    },
    {
        "id": "net-phy-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Nyquist theorem for noiseless channel:",
        "options": [
            "C = B log₂(1+SNR)",
            "C = B log₂L",
            "C = B",
            "C = 2B log₂L"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Nyquist theorem: maximum data rate for NOISELESS channel. Formula: C = 2B log₂(L) bits/sec, where B = bandwidth (Hz), L = number of signal levels. Explanation: can send at most 2 samples per cycle (Nyquist rate), each sample carries log₂(L) bits. Example: 3 KHz channel, 8 levels → C = 2(3000)log₂(8) = 6000(3) =18 Kbps. Limitation: assumes no noise - theoretical maximum. Increasing L helps but noise limits practical levels.",
            "formula": "$C = 2B \\log_2 L$ bits/sec (noiseless)"
        }
    },
    {
        "id": "net-phy-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Shannon theorem for noisy channel:",
        "options": [
            "C = B × SNR",
            "C = B log₂(1+SNR)",
            "C = B/SNR",
            "C = 2B log₂L"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Shannon theorem: maximum achievable data rate for NOISY channel. Formula: C = B log₂(1 + SNR) bits/sec, where B = bandwidth (Hz), SNR = Signal-to-Noise Ratio (linear, not dB). SNR(dB) = 10 log₁₀(SNR). Example: 3 KHz, 30 dB SNR → SNR = 10^(30/10) = 1000, C = 3000 log₂(1001) ≈ 30 Kbps. Shannon gives ABSOLUTE limit - no coding scheme can exceed. Reality: achieve ~70-80% of Shannon limit . Higher SNR or bandwidth increases capacity.",
            "formula": "$C = B \\log_2(1 + S/N)$ bits/sec (noisy)"
        }
    },
    {
        "id": "net-phy-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Bandwidth 4KHz, 16 signal levels. Nyquist capacity (Kbps) = ?",
        "correctAnswer": 32,
        "tolerance": 0,
        "explanation": {
            "solution": "Nyquist capacity calculation: C = 2B log₂(L). Given B=4 KHz=4000 Hz, L=16 signal levels. C = 2 × 4000 × log₂(16) = 8000 × log₂(2^4) = 8000 × 4 = 32,000 bps = 32 Kbps. Each symbol carries 4 bits (log₂16 = 4). Symbol rate = 2B = 8000 symbols/sec. Bit rate = symbol rate × bits/symbol = 8000 × 4 = 32 Kbps. Note: assumes noiseless channel - practical rates lower.",
            "formula": "$C = 2 \\times 4000 \\times \\log_2(16) = 32,000$ bps"
        }
    },
    {
        "id": "net-dll-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Stop-and-Wait protocol efficiency on high bandwidth-delay product link is:",
        "options": [
            "Very high",
            "Undefined",
            "Always 100%",
            "Very low"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Stop-and-Wait protocol: sender transmits ONE frame and WAITS for ACK before sending next. Efficiency = (Transmission time) / (Transmission + 2×Propagation time) = 1 / (1 + 2a), where a = Prop. time / Trans. time = (Distance/Speed) / (Frame size/Bandwidth). On high bandwidth-delay product links (satellite, long fiber): a >> 1, efficiency approaches 0. Example: a=100 → efficiency = 1/201 ≈ 0.5%. Solution: pipelining (Go-Back-N, Selective Repeat) allows multiple outstanding frames.",
            "formula": "Efficiency = $\\frac{1}{1+2a}$; low when $a$ large"
        }
    },
    {
        "id": "net-dll-011",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Go-Back-N allows sender to have up to _____ unacknowledged frames:",
        "options": [
            "2N",
            "1",
            "N",
            "N-1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Go-Back-N (GBN) ARQ protocol: pipelined protocol allowing sender to have up to N unacknowledgedframes in transit (window size = N). Sender: maintains window of N frames, sends continuously without waiting. Receiver: accepts only in-order frames, discards out-of-order (no buffering), sends cumulative ACK. On error/timeout: sender retransmits ALL frames from lost frame onward (go back N frames). Advantage: simple receiver. Disadvantage: retransmits correctly received frames. Efficiency better than Stop-and-Wait on high-delay links.",
            "formula": "Window size = N frames (sender)"
        }
    },
    {
        "id": "net-dll-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Selective Repeat allows receiver to:",
        "options": [
            "Drop all frames on error",
            "Only accept in-order frames",
            "Accept and buffer out-of-order frames",
            "Send only NAKs"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Selective Repeat (SR) ARQ: most efficient pipelined protocol. Sender: maintains window, sends frames. Receiver: ACCEPTS and BUFFERS out-of-order frames, sends individual ACK for each frame correctly received. On error: receiver sends NAK or waits for timeout; sender retransmits ONLY lost/corrupted frames (selective retransmission). Advantage: doesn't retransmit correctly received frames (efficient). Disadvantage: complex (requires buffering at receiver). Ideal for unreliable channels with high bandwidth-delay product.",
            "formula": "SR: individual ACK, selective retransmit"
        }
    },
    {
        "id": "net-dll-013",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "In Go-Back-N with n-bit sequence numbers, maximum window size is:",
        "options": [
            "2ⁿ - 1",
            "2ⁿ⁻¹",
            "2ⁿ",
            "n"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Go-Back-N window size limit: with n-bit sequence numbers, max window size = 2^n - 1. Reason: must distinguish new frames from retransmissions. If window = 2^n, receiver can't tell if frame is new (seq# wrapped around) or a retransmitted old frame. Example: 3-bit seq# (0-7), max window = 7. If using window=8 and all ACKs lost, sender retransmits frame 0, but receiver expects new frame 0 - ambiguity! Receiver has NO buffer, so needs this distinction.",
            "formula": "$W_{max} = 2^n - 1$ for GBN"
        }
    },
    {
        "id": "net-dll-014",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "In Selective Repeat with n-bit sequence numbers, maximum window size is:",
        "options": [
            "2ⁿ",
            "2ⁿ⁻¹",
            "2ⁿ - 1",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Selective Repeat window size limit: with n-bit sequence numbers, max window size = 2^(n-1). Reason: BOTH sender and receiver have windows that can overlap. Must ensure sender's window (new frames) doesn't overlap with receiver's window (expected ACKs for old frames). Since both windows can be size W, need 2W ≤ 2^n, so W ≤ 2^(n-1). Example: 3-bit seq# (0-7), max window = 4. If sender window = receiver window = 4, total space = 8 = 2^3, no overlap. More restrictive than GBN due to receiver buffering.",
            "formula": "$W_{max} = 2^{n-1}$ for SR"
        }
    },
    {
        "id": "net-dll-015",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "HDLC flag byte for frame delimiting is:",
        "options": [
            "0x55",
            "0x7E",
            "0xFF",
            "0x00"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HDLC (High-Level Data Link Control): bit-oriented protocol using FLAG byte 0x7E (01111110) for frame delineation (start and end). Problem: what if data contains 0x7E? Solution: BIT STUFFING - After five consecutive 1s in data, sender inserts a 0. Receiver removes stuffed 0s after five 1s. This ensures flag pattern never appears in data. Example: data=0111111 → stuffed=01111101 (0 inserted after five 1s). Also uses for synchronization and error detection (CRC).",
            "formula": "Flag = 0x7E (01111110); bit stuffing used"
        }
    },
    {
        "id": "net-nl-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Class C IP address has how many host bits?",
        "options": [
            "24",
            "16",
            "7",
            "8"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Class C IP address structure: 24 bits network portion + 8 bits host portion. First 3 bits are 110 (identifies Class C), followed by 21 network bits, then 8 host bits. Range: 192.0.0.0 - 223.255.255.255. Network portion identifies the network, host portion identifies specific host. 8 host bits = 2^8 = 256 addresses, but 2 reserved (network address all 0s, broadcast all 1s) = 254 usable hosts per Class C network. Best for small organizations.",
            "formula": "Class C: 24-bit network, 8-bit host"
        }
    },
    {
        "id": "net-nl-011",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "A /28 subnet has how many usable host addresses?",
        "correctAnswer": 14,
        "tolerance": 0,
        "explanation": {
            "solution": "Subnetting calculation with CIDR: /28 means 28 bits for network, leaving 32-28 = 4 bits for hosts. Total addresses = 2^4 = 16. SUBTRACT 2 reserved addresses: (1) Network address (all host bits = 0), (2) Broadcast address (all host bits = 1). Usable hosts = 16 - 2 = 14. General formula: Usable hosts = 2^(32-prefix) - 2. Quick reference: /24=254 hosts, /25=126, /26=62, /27=30, /28=14, /29=6, /30=2 (point-to-point links).",
            "formula": "Usable hosts = $2^{(32-n)} - 2 = 2^4 - 2 = 14$"
        }
    },
    {
        "id": "net-nl-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "CIDR (Classless Inter-Domain Routing) allows:",
        "options": [
            "Fixed subnet masks only",
            "Variable-length subnet masks",
            "Only /8, /16, /24",
            "No subnetting"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CIDR (Classless Inter-Domain Routing): introduced to replace wasteful classful addressing. Allows VARIABLE-LENGTH subnet masks (VLSM) - any prefix length /n (1-32), not restricted to /8, /16, /24 class boundaries. Benefits: (1) flexible, efficient IP allocation, (2) route aggregation/supernetting (combines multiple networks into one route), (3) reduces routing table size. Format: IP/prefix (e.g., 192.168.1.0/24). Prefix indicates network bits. Enables subnetting at any bit boundary. Adopted Internet-wide in 1993 to slow IPv4 exhaustion.",
            "formula": "CIDR: any prefix /n, enables VLSM"
        }
    },
    {
        "id": "net-nl-013",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "ARP resolves:",
        "options": [
            "Hostname to IP",
            "IP address to MAC address",
            "MAC to IP",
            "Domain name to IP"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ARP (Address Resolution Protocol): maps IP address (Layer 3 logical) to MAC address (Layer 2 physical) for LOCAL network delivery. Operation: (1) Host needs to send to IP but doesn't know MAC, (2) Broadcasts ARP REQUEST 'Who has IP X.X.X.X?', (3) Target replies with ARP REPLY containing its MAC, (4) Sender caches mapping in ARP table. Works only within local subnet (not routed). RARP: reverse (MAC to IP, obsolete). Uses broadcast, so switched networks more efficient than hubs. ARP cache timeout typically 20 minutes.",
            "formula": "ARP: IP → MAC (local network only)"
        }
    },
    {
        "id": "net-nl-014",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "ICMP is used for:",
        "options": [
            "Error reporting and diagnostics",
            "Encryption",
            "Routing",
            "Data transfer"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "ICMP (Internet Control Message Protocol): companion protocol to IP for ERROR REPORTING and DIAGNOSTICS. Not for data transfer. Common ICMP messages: (1) ECHO REQUEST/REPLY - used by ping to test reachability, (2) DESTINATION UNREACHABLE - network/host/port/protocol unreachable, (3) TIME EXCEEDED - TTL=0 (used by traceroute), (4) REDIRECT - better route exists, (5) SOURCE QUENCH - congestion control (deprecated). Encapsulated in IP packets. Type + Code identify message. Essential for network troubleshooting.",
            "formula": "ICMP: ping, traceroute, error reports"
        }
    },
    {
        "id": "net-nl-015",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Distance Vector routing algorithm is used by:",
        "options": [
            "OSPF",
            "BGP",
            "IS-IS",
            "RIP"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "RIP (Routing Information Protocol): Distance Vector routing protocol using Bellman-Ford algorithm. Each router knows: (1) distance (hop count) to destinations, (2) next hop (vector). Updates exchanged periodically (every 30s) with neighbors. Metric: hop count only (max 15, 16=infinity). Problems: (1) COUNT-TO-INFINITY - slow convergence, routing loops, (2) doesn't consider bandwidth/delay, (3) maximum 15 hops limits network size. Solutions: split horizon, poison reverse, hold-down timers. RIPv1 classful, RIPv2 supports CIDR. Simplicity = advantage for small networks. OSPF (link state, Dijkstra) better for large networks.",
            "formula": "RIP: distance vector, Bellman-Ford, max 15 hops"
        }
    },
    {
        "id": "net-nl-016",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Link State routing protocol is:",
        "options": [
            "OSPF",
            "IGRP",
            "RIP",
            "RIPv2"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "OSPF (Open Shortest Path First): Link State routing protocol using Dijkstra's shortest path algorithm. Each router maintains complete network TOPOLOGY (link state database). Operation: (1) Exchange HELLO packets to discover neighbors, (2) Flood LSAs (Link State Advertisements) to all routers, (3) Build topology map, (4) Run Dijkstra to compute shortest path tree, (5) Update routing table. Metric: COST (considers bandwidth, not just hops). Features: fast convergence, hierarchical (areas), authentication, VLSM/CIDR support. More complex than RIP but scalable for large networks. Updates triggered by changes (not periodic).",
            "formula": "OSPF: link state, Dijkstra, cost-based"
        }
    },
    {
        "id": "net-nl-017",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Count-to-infinity problem affects:",
        "options": [
            "Neither",
            "Distance vector protocols",
            "Link state protocols",
            "Both"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Count-to-infinity problem: affects DISTANCE VECTOR routing protocols (RIP). Occurs when link fails: routers don't know failure happened elsewhere, keep incrementing hop count thinking alternate path exists. Example: A-B-C network, B-C link fails. C tells B distance=infinity. But B heard from A that C is reachable (old info). B updates A saying C reachable via 2 hops. A tells B it's 3 hops. Counts increment until reaching infinity (16 in RIP). Solutions: (1) Split horizon - don't advertise route back to source, (2) Poison reverse - advertise infinity back, (3) Hold-down timers - ignore updates for period after route fails. Link state protocols (OSPF) don't have this problem.",
            "formula": "Distance vector problem: slow convergence, loops"
        }
    },
    {
        "id": "net-nl-018",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "NAT (Network Address Translation) is used to:",
        "options": [
            "Route packets",
            "Map private IPs to public IPs",
            "Encrypt packets",
            "Fragment packets"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NAT (Network Address Translation): allows multiple devices with PRIVATE IP addresses to share a SINGLE PUBLIC IP address for Internet access. Operation: (1) Internal host sends packet with private source IP, (2) NAT router replaces source IP with its public IP and assigns unique port, (3) Maintains translation table (private IP:port ↔ public IP:port), (4) Return packets translated back to private IP. Benefits: (1) conserves public IPs (addresses IPv4 exhaustion), (2) security (hides internal topology), (3) allows network restructuring without renumbering. Types: Static NAT (1:1), Dynamic NAT (pool), PAT/NAPT (port-based, most common). Breaks end-to-end connectivity principle.",
            "formula": "NAT: private IPs → share public IP"
        }
    },
    {
        "id": "net-tl-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP uses _____ handshake to establish connection:",
        "options": [
            "4-way",
            "3-way",
            "No handshake",
            "2-way"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP 3-way handshake: connection establishment mechanism. Steps: (1) CLIENT sends SYN (SYNchronize sequence number) - requests connection, includes initial sequence number, (2) SERVER replies SYN-ACK (SYNchronize-ACKnowledge) - accepts connection, acks client's seq#, sends own initial seq#, (3) CLIENT sends ACK - acknowledges server's seq#, connection ESTABLISHED. Now both sides have synchronized sequence numbers for reliable data transfer. After handshake, data exchange begins. Purpose: synchronize sequence numbers, agree on connection parameters (window size, MSS). Connection state: LISTEN → SYN-SENT → SYN-RECEIVED → ESTABLISHED.",
            "formula": "3-way: SYN → SYN-ACK → ACK"
        }
    },
    {
        "id": "net-tl-011",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP uses _____ handshake to close connection:",
        "options": [
            "4-way",
            "3-way",
            "2-way",
            "1-way"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP 4-way handshake: connection termination (graceful close). Steps: (1) Side A sends FIN (FINish) - no more data to send, (2) Side B sends ACK - acknowledges FIN, (3) Side B sends FIN - also done sending (half-close period ended), (4) Side A sends ACK - acknowledges FIN, connection CLOSED. TCP is full-duplex, so each direction closed independently. Can be optimized to 3-way by combining FIN+ACK in step 2-3. TIME-WAIT state: side performing active close waits 2MSL before fully closing (ensures last ACK received). States: ESTABLISHED → FIN-WAIT-1 → FIN-WAIT-2 → TIME-WAIT → CLOSED.",
            "formula": "4-way: FIN → ACK, FIN → ACK (can combine to 3)"
        }
    },
    {
        "id": "net-tl-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP slow start increases congestion window:",
        "options": [
            "Not at all",
            "Exponentially",
            "Linearly",
            "Logarithmically"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP Slow Start: congestion control phase at connection start or after timeout. Congestion window (cwnd) starts at 1 MSS (Maximum Segment Size). For each ACK received, cwnd increases by 1 MSS, effectively DOUBLING every RTT (exponential growth). Example: cwnd = 1 → 2 → 4 → 8 → 16 MSS. Continues until: (1) reaches slow start threshold (ssthresh), then switches to Congestion Avoidance, OR (2) packet loss detected. Despite name, grows exponentially (fast initially). Purpose: probe network capacity quickly without causing immediate congestion. Modern enhancements: TCP Fast Open, Initial Congestion Window (IW=10).",
            "formula": "Slow start: cwnd doubles per RTT (exponential)"
        }
    },
    {
        "id": "net-tl-013",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP congestion avoidance (after reaching ssthresh) increases window:",
        "options": [
            "Stays constant",
            "Exponentially",
            "Linearly (additive increase)",
            "Decreases"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TCP Congestion Avoidance: phase after Slow Start when cwnd >= ssthresh. Growth: ADDITIVE INCREASE - cwnd increases by 1 MSS per RTT (linear growth). Implementation: cwnd += 1/cwnd for each ACK received, so after cwnd ACKs (one RTT), cwnd increases by 1. Example: cwnd=16, after 16 ACKs (1 RTT), becomes 17. Cautious growth prevents congestion. Combined with Multiplicative Decrease (on loss, cwnd /= 2), forms AIMD (Additive Increase Multiplicative Decrease) algorithm - proven to converge to fair bandwidth sharing among TCP flows. Continues until packet loss detected.",
            "formula": "Cong. avoid: cwnd += 1 per RTT (linear/AIMD)"
        }
    },
    {
        "id": "net-tl-014",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "On TCP timeout, congestion window is set to:",
        "options": [
            "Previous value",
            "Half of current value",
            "0",
            "1 MSS (segment)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TCP Timeout (packet loss detected): SEVERE congestion signal. Actions: (1) ssthresh (slow start threshold) = current cwnd / 2 (remember congestion onset point), (2) cwnd = 1 MSS (reset to minimum), (3) Restart SLOW START phase. This is MULTIPLICATIVE DECREASE - halves effective window. Difference from Fast Recovery (3 duplicate ACKs): timeout indicates complete loss, more severe, full reset. Fast Retransmit/Fast Recovery (on 3 dup ACKs): cwnd = ssthresh = cwnd/2, continue Congestion Avoidance (no full restart). Timeout = pessimistic, 3 dup ACKs = optimistic recovery.",
            "formula": "Timeout: cwnd=1, ssthresh=cwnd/2, restart slow start"
        }
    },
    {
        "id": "net-tl-015",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "UDP header size is:",
        "options": [
            "20 bytes",
            "8 bytes",
            "Variable",
            "24 bytes"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "UDP header: FIXED 8 bytes (lightweight). Fields: (1) Source Port - 2 bytes, (2) Destination Port - 2 bytes, (3) Length - 2 bytes (header + data), (4) Checksum - 2 bytes (optional in IPv4, mandatory in IPv6). Total = 8 bytes. Contrast with TCP: minimum 20 bytes (without options), up to 60 bytes (with options). UDP's small header contributes to low overhead and speed. No sequence numbers, no ACKs, no flow control fields. Simple and fast.",
            "formula": "UDP header = 8 bytes (fixed)"
        }
    },
    {
        "id": "net-tl-016",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP header size (without options) is:",
        "options": [
            "8 bytes",
            "20 bytes",
            "16 bytes",
            "32 bytes"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP header: MINIMUM 20 bytes (without options). Fields include: Source/Dest Port (4B), Sequence# (4B), ACK# (4B), Header Length/Flags (2B), Window Size (2B), Checksum (2B), Urgent Pointer (2B) = 20B. Options: 0-40 more bytes (timestamps, SACK, window scaling). Maximum header = 60 bytes (4-bit header length field × 4 = max 60). Data Offset field specifies header length in 32-bit words. Options critical for performance (SACK for selective retransmission, timestamps for RTT/PAWS).",
            "formula": "TCP header: 20-60 bytes (20 min, 40 options max)"
        }
    },
    {
        "id": "net-al-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "DNS primarily uses which transport protocol?",
        "options": [
            "UDP only",
            "Neither",
            "TCP only",
            "UDP (default), TCP for large responses"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "DNS (Domain Name System) protocol choice: DEFAULT uses UDP port 53 for queries/responses (fast, low overhead, sufficient for typical lookups). DNS message fits in single UDP datagram (max DNS UDP size historically 512B, now EDNS0 allows larger). Uses TCP port 53 for: (1) ZONE TRANSFERS (AXFR, IXFR) between nameservers - large, reliable transfer needed, (2) Responses > 512 bytes (now often > 4096B with EDNS0), (3) When truncated bit (TC) set in UDP response - client must retry via TCP. UDP preferred for speed; TCP for reliability/large transfers.",
            "formula": "DNS: UDP:53 (default), TCP:53 (zone xfer, large)"
        }
    },
    {
        "id": "net-al-011",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "DNS uses port:",
        "options": [
            "80",
            "53",
            "25",
            "21"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Well-known ports reminder: DNS=53 (domain resolution), FTP=21 (control), SMTP=25 (email sending), HTTP=80 (web), HTTPS=443 (secure web), SSH=22 (secure shell), Telnet=23, POP3=110, IMAP=143, DHCP server=67/client=68. DNS critical for Internet - translates domain names (google.com) to IP addresses (142.250.x.x). Hierarchical distributed database. Queries: iterative (client asks each level) or recursive (server does full resolution).",
            "formula": "DNS:53, FTP:21, SMTP:25, HTTP:80, HTTPS:443"
        }
    },
    {
        "id": "net-al-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "DHCP is used to:",
        "options": [
            "Send email",
            "Transfer files",
            "Resolve domain names",
            "Automatically assign IP addresses"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "DHCP (Dynamic Host Configuration Protocol): automatically assigns network configuration to hosts. 4-step DORA process: (1) DISCOVER - client broadcasts 'need IP', (2) OFFER - DHCP server(s) offer IP address + config, (3) REQUEST - client requests specific offer (broadcast), (4) ACK - server acknowledges, lease granted. Assigns: IP address, subnet mask, default gateway, DNS servers, lease time. Uses UDP ports 67 (server) and 68 (client). Lease renewal at 50%/87.5% of lease time. Eliminates manual IP configuration. Centralized management, IP reuse via leases.",
            "formula": "DHCP: DORA (Discover, Offer, Request, Ack)"
        }
    },
    {
        "id": "net-al-013",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "HTTPS uses port:",
        "options": [
            "8080",
            "22",
            "80",
            "443"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "HTTPS (HTTP Secure) port 443: HTTP over TLS/SSL encryption. Provides: (1) ENCRYPTION - data confidentiality, (2) AUTHENTICATION - verify server identity (certificate), (3) INTEGRITY - detect tampering. TLS handshake: client hello, server hello + certificate, key exchange, encrypted communication. Certificate issued by Certificate Authority (CA). Browser checks certificate validity. HTTP (port 80) sends data in plaintext - insecure. HTTPS essential for: login, payments, sensitive data. Performance: initially slower (handshake overhead), but HTTP/2 over TLS mitigates.",
            "formula": "HTTPS:443 (HTTP + TLS/SSL), HTTP:80"
        }
    },
    {
        "id": "net-al-014",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "Telnet port number is:",
        "options": [
            "23",
            "22",
            "21",
            "25"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Port number reference (well-known): Telnet=23 (insecure remote terminal access, sends passwords in plaintext - DEPRECATED, use SSH instead), SSH=22 (Secure Shell - encrypted remote access, authentication), FTP=21 (control), SMTP=25 (email send). Telnet security issues: no encryption, vulnerable to sniffing/man-in-the-middle attacks. SSH provides secure alternative with strong encryption (AES, RSA). Modern systems disable Telnet by default.",
            "formula": "Telnet:23 (insecure), SSH:22 (secure), FTP:21, SMTP:25"
        }
    },
    {
        "id": "net-al-015",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Protocols",
        "question": "POP3 vs IMAP: IMAP allows:",
        "options": [
            "Only download and delete",
            "Server-side mail management without download",
            "FTP access",
            "No email access"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "POP3 vs IMAP email retrieval protocols: POP3 (Post Office Protocol v3, port 110): DOWNLOAD emails from server to client, typically DELETES from server (offline access model). Simple, less server storage. IMAP (Internet Message Access Protocol, port 143): MANAGE emails ON SERVER - create folders, search, flag, synchronize across multiple devices. Emails stay on server (online access model). IMAP advantages: multi-device sync, server-side backups, access anywhere. IMAP uses more server storage. Modern preference: IMAP for flexibility, cloud access. Both can use TLS/SSL for security (POP3S, IMAPS).",
            "formula": "IMAP:143 (sync, server-side); POP3:110 (download, delete)"
        }
    },
    {
        "id": "net2-model-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "OSI model has how many layers?",
        "options": [
            "5",
            "7",
            "6",
            "4"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "OSI (Open Systems Interconnection) 7-layer model: conceptual framework for network communication. Layers (bottom to top): 1. PHYSICAL - physical medium, bits, voltages, cables (Ethernet, fiber). 2. DATA LINK - node-to-node delivery, framing, MAC addressing, error detection (Ethernet, WiFi, switches). 3. NETWORK - host-to-host routing across networks, logical addressing (IP, routers, ICMP). 4. TRANSPORT - end-to-end, process-to-process delivery, segmentation, ports (TCP, UDP). 5. SESSION - dialog control, session establishment, synchronization. 6. PRESENTATION - data format translation, encryption, compression. 7. APPLICATION - user interface, network services (HTTP, FTP, SMTP, DNS). Mnemonic: Please Do Not Throw Sausage Pizza Away.",
            "formula": "OSI 7: Phy|DL|Net|Trans|Sess|Pres|App"
        }
    },
    {
        "id": "net2-model-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "TCP/IP model has how many layers?",
        "options": [
            "4 or 5",
            "7",
            "6",
            "3"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP/IP model: practical Internet protocol suite (vs OSI theoretical). Has 4 OR 5 layers depending on interpretation: 4-LAYER: (1) Network Access/Link (combines Physical + Data Link), (2) Internet (IP, ICMP, ARP), (3) Transport (TCP, UDP), (4) Application (HTTP, FTP, DNS, SMTP - combines Session+Presentation+Application). 5-LAYER (updated): separates (1) Physical, (2) Data Link. TCP/IP model predates OSI, reflects actual Internet implementation. OSI = reference model, TCP/IP = implementation model.",
            "formula": "TCP/IP: 4-5 layers (practical Internet stack)"
        }
    },
    {
        "id": "net2-model-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "OSI Layer 1 (Physical) deals with:",
        "options": [
            "Bit transmission over physical medium",
            "End-to-end delivery",
            "Routing",
            "Encryption"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Physical Layer (OSI Layer 1): lowest layer, deals with physical transmission of raw bits over communication channel. Functions: (1) BIT REPRESENTATION - voltage levels, light pulses, radio frequencies, (2) BIT SYNCHRONIZATION - sender/receiver clock sync, (3) BIT RATE CONTROL - transmission speed, (4) PHYSICAL TOPOLOGY - bus, star, mesh, (5) TRANSMISSION MODE - simplex, half-duplex, full-duplex. Specifies: cables (coaxial, twisted pair, fiber), connectors (RJ45, BNC), signals, hubs, repeaters. No error detection/correction (handled by Data Link). Theoretical capacity: Nyquist (noiseless), Shannon (noisy).",
            "formula": "Physical: bits, signals, cables, voltages"
        }
    },
    {
        "id": "net2-model-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "OSI Layer 2 (Data Link) deals with:",
        "options": [
            "Application protocols",
            "Node-to-node delivery, framing, MAC addresses",
            "Routing between networks",
            "End-to-end reliability"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Data Link Layer (OSI Layer 2): provides NODE-TO-NODE delivery within same network segment. Functions: (1) FRAMING - encapsulate network packets into frames with header/trailer, (2) PHYSICAL ADDRESSING - use MAC addresses (48-bit hardware addresses), (3) ERROR DETECTION - CRC, checksums (detection, not correction typically), (4) FLOW CONTROL - prevent receiver overflow (sliding window), (5) MEDIA ACCESS CONTROL - handle shared medium (CSMA/CD, CSMA/CA, token passing). Sublayers: LLC (Logical Link Control) and MAC (Medium Access Control). Devices: switches, bridges. Protocols: Ethernet, WiFi (802.11), PPP.",
            "formula": "Data Link: frames, MAC, error detect, flow control"
        }
    },
    {
        "id": "net2-model-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "OSI Layer 3 (Network) deals with:",
        "options": [
            "Logical addressing, routing between networks",
            "Port numbers",
            "Encryption",
            "Physical transmission"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Network Layer (OSI Layer 3): provides HOST-TO-HOST delivery across MULTIPLE networks (inter-network). Functions: (1) LOGICAL ADDRESSING - hierarchical IP addresses (vs flat MAC addresses), (2) ROUTING - path determination using routing algorithms and protocols (RIPdistance vector, OSPF link state, BGP path vector), (3) PACKET FORWARDING - send packets to next hop, (4) FRAGMENTATION/REASSEMBLY - handle different MTUs. Key protocol: IP (IPv4/IPv6). Devices: routers (Layer 3 switches). Unlike Data Link (same network), Network Layer enables Internet-scale communication.",
            "formula": "Network: IP addressing, routing, packets"
        }
    },
    {
        "id": "net2-model-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "OSI Layer 4 (Transport) deals with:",
        "options": [
            "End-to-end delivery, segmentation, ports",
            "MAC addresses",
            "Bit transmission",
            "Routing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Transport Layer (OSI Layer 4): provides END-TO-END (process-to-process) communication between hosts. Functions: (1) SEGMENTATION - break application data into segments, (2) PORT ADDRESSING - identify sending/receiving applications (ports 0-65535, socket = IP+port), (3) ERROR CONTROL - detect and recover from errors (TCP checksum, retransmission), (4) FLOW CONTROL - match sender/receiver speeds (sliding window), (5) CONGESTION CONTROL - prevent network overload (TCP only). Protocols: TCP (reliable, ordered, connection-oriented) vs UDP (unreliable, fast, connectionless). Enables multiplexing/demultiplexing.",
            "formula": "Transport: segments, ports, TCP/UDP, end-to-end"
        }
    },
    {
        "id": "net2-model-007",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Models",
        "question": "Protocol Data Units (PDUs): Layer 2 = ?, Layer 3 = ?, Layer 4 = ?",
        "options": [
            "Bit, Frame, Packet",
            "Packet, Frame, Segment",
            "Frame, Packet, Segment",
            "Segment, Packet, Frame"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Protocol Data Units (PDUs) at each layer: Layer 1 (Physical): BITS - raw binary, voltages/light. Layer 2 (Data Link): FRAME - adds MAC header/trailer to packet. Layer 3 (Network): PACKET or DATAGRAM - adds IP header to segment. Layer 4 (Transport): SEGMENT (TCP) or DATAGRAM (UDP) - adds TCP/UDP header to application data. Layer 5-7 (Application): DATA or MESSAGE. Encapsulation: data → segment → packet → frame → bits. De-encapsulation reverses this at receiver.",
            "formula": "PDUs: Bit|Frame|Packet|Segment|Data"
        }
    },
    {
        "id": "net2-phy-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Nyquist theorem (noiseless channel): max bit rate = ?",
        "options": [
            "B / 2",
            "2 × B × log₂(L)",
            "L × B",
            "B × log₂(1 + SNR)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Nyquist theorem (previously explained in detail): maximum bit rate for NOISELESS channel = 2 × Bandwidth × log₂(Signal Levels). Example: 4 KHz bandwidth, 16 signal levels → 2(4000)log₂(16) = 8000(4) = 32 Kbps. Assumes perfect channel (no noise). Theoretical maximum - practical rates lower due to noise, distortion, interference. Doubling bandwidth doubles capacity (linear). Increasing signal levels increases capacity logarithmically. Nyquist rate = minimum sampling rate = 2 × max frequency.",
            "formula": "$C = 2B \\log_2 L$ (Nyquist, noiseless)"
        }
    },
    {
        "id": "net2-phy-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Shannon capacity (noisy channel): C = ?",
        "options": [
            "B / SNR",
            "SNR × L",
            "2B log₂L",
            "B × log₂(1 + SNR)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Shannon Capacity: Maximum data rate of a noisy channel. C = B × log₂(1 + SNR) where B = bandwidth (Hz), SNR = signal-to-noise ratio (linear, not dB). This is the theoretical upper limit - no error-free communication above this rate regardless of encoding. Key for understanding channel limits.",
            "formula": "C = B log₂(1 + SNR)"
        }
    },
    {
        "id": "net2-phy-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Manchester encoding represents:",
        "options": [
            "Only high voltage",
            "Transition in middle of bit (self-clocking)",
            "No transitions",
            "0 and 1 as voltage levels"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Manchester encoding: line coding scheme used in Ethernet (10BASE-T). Encoding: 0 = high-to-low transition, 1 = low-to-high transition (or vice versa depending on convention). Key feature: TRANSITION IN MIDDLE OF EVERY BIT PERIOD. Benefits: (1) SELF-CLOCKING - receiver extracts clock from transitions (no separate clock signal needed), (2) NO DC COMPONENT - balanced signal, (3) EASY ERROR DETECTION - missing transition indicates error. Disadvantage: requires DOUBLE bandwidth (2 signals per bit). Used: Ethernet 802.3, RFID. Differential Manchester: transition at start for 0, no transition for 1.",
            "formula": "Manchester: mid-bit transition (self-clocking)"
        }
    },
    {
        "id": "net2-phy-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Multiplexing types include:",
        "options": [
            "No multiplexing exists",
            "Only FDM",
            "Only TDM",
            "FDM, TDM, WDM, CDM"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Multiplexing: combining multiple signals into single channel to utilize bandwidth efficiently. Types: (1) FDM (Frequency Division): divide frequency band into sub-bands, allocate each signal a frequency (analog TV, radio, ADSL). (2) TDM (Time Division): divide time into slots, each signal gets a time slot (GSM, T1/E1). Synchronous TDM: fixed slots, Statistical TDM: dynamic allocation. (3) WDM (Wavelength Division): like FDM but for optical fiber, use different wavelengths/colors of light (fiber optic). (4) CDM (Code Division): use unique codes, all signals share time/frequency (CDMA in 3G). Demultiplexing: reverse process.",
            "formula": "Multiplexing: FDM(freq), TDM(time), WDM(wavelength), CDM(code)"
        }
    },
    {
        "id": "net2-dl-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Framing is the process of:",
        "options": [
            "Addressing hosts",
            "Encapsulating network layer packets into frames",
            "Routing packets",
            "Encrypting data"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Framing (Data Link Layer): process of dividing bit stream into manageable units called FRAMES by adding delimiters, headers, and trailers. Purpose: (1) SYNCHRONIZATION - identify frame boundaries, (2) ERROR DETECTION - add CRC/checksum in trailer, (3) ADDRESSING - add source/destination MAC addresses in header, (4) FLOW/ERROR CONTROL - sequence numbers, ACKs. Framing methods: (1) CHARACTER/BYTE COUNT - specify frame length in header (error-prone), (2) FLAG-BASED - use special flag bytes (HDLC uses 0x7E, needs byte/bit stuffing), (3) PHYSICAL LAYER CODING - Manchester encoding provides natural framing.",
            "formula": "Framing: packet → [Header|Payload|Trailer]"
        }
    },
    {
        "id": "net2-dl-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "MAC address is:",
        "options": [
            "32 bits, logical",
            "Variable length",
            "Same as IP",
            "48 bits, physical (hardware)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "MAC (Media Access Control) address: 48-bit (6-byte) PHYSICAL (hardware) address burned into Network Interface Card (NIC) by manufacturer. Format: 12 hex digits, often written as XX:XX:XX:XX:XX:XX or XX-XX-XX-XX-XX-XX. Structure: First 24 bits = OUI (Organizationally Unique Identifier) - identifies manufacturer. Last 24 bits = unique device identifier. Example: A4:5E:60:XX:XX:XX (OUI for TP-Link). Layer 2 addressing - used for local network delivery. Unlike IP (logical, changeable), MAC is hardware-based and globally unique. Special addresses: FF:FF:FF:FF:FF:FF (broadcast), 01:XX... (multicast).",
            "formula": "MAC = 48 bits = 6 bytes (OUI + device ID)"
        }
    },
    {
        "id": "net2-dl-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Error detection using CRC (Cyclic Redundancy Check):",
        "options": [
            "Corrects all errors",
            "Detects errors using polynomial division",
            "Is same as parity",
            "Cannot detect errors"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CRC (Cyclic Redundancy Check): powerful error DETECTION technique using polynomial division mathematics. Process: (1) Treat data as polynomial coefficients, (2) Divide by generator polynomial G(x), (3) Append remainder as CRC bits to data, (4) Receiver divides received data+CRC by same G(x), (5) If remainder = 0, no error detected. Benefits: detects all single-bit errors, all double-bit errors, any odd number of errors, all burst errors ≤ degree of polynomial. Common: CRC-16, CRC-32 (Ethernet). Does NOT correct errors (only detects). More powerful than parity (detects only single-bit errors) or checksum.",
            "formula": "CRC: polynomial division for error detection"
        }
    },
    {
        "id": "net2-dl-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Hamming code can:",
        "options": [
            "Correct any number of errors",
            "Only detect errors",
            "Not detect any error",
            "Detect and correct single-bit errors"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Hamming code: ERROR-CORRECTING code that can detect up to 2-bit errors AND correct single-bit errors. Uses redundant parity bits at positions 2^k (1, 2, 4, 8, 16...). For m data bits, need r parity bits where 2^r ≥ m + r + 1. Example: 4 data bits need 3 parity bits. Each parity bit covers specific bit positions (determined by binary representation). To correct error: calculate syndrome from parity checks - gives position of error bit. Used in ECC memory, satellite communication. Trade-off: overhead vs error correction capability.",
            "formula": "Hamming: detect 2-bit, correct 1-bit errors"
        }
    },
    {
        "id": "net2-dl-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Hamming distance for detecting d errors: minimum distance = ?",
        "options": [
            "2d",
            "d + 1",
            "d",
            "d - 1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hamming Distance: number of bit positions where two codewords differ. MIN Hamming distance (dmin) of code determines error capability. To DETECT d errors: dmin ≥ d + 1 (need one more distance to distinguish error from valid codeword). Example: dmin=3 detects up to 2 errors. If error changes bits but result matches another codeword within distance d, detection fails. Code design: maximize dmin for better detection. Single parity bit: dmin=2 (detects 1 error).",
            "formula": "Detect $d$ errors: $d_{min} \\geq d + 1$"
        }
    },
    {
        "id": "net2-dl-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Hamming distance for correcting d errors: minimum distance = ?",
        "options": [
            "d",
            "2d + 1",
            "d - 1",
            "d + 1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hamming Distance for ERROR CORRECTION: To CORRECT d errors: dmin ≥ 2d + 1. Reason: need to uniquely identify error within sphere of radius d around each codeword. If two codewords are 2d+1 apart, their error spheres (radius d) don't overlap - can unambiguously correct. Example: dmin=5 corrects up to 2 errors. Correction harder than detection - requires more redundancy. Hamming code (dmin=3) corrects 1 error. Triple replication (dmin=3) also corrects 1.",
            "formula": "Correct $d$ errors: $d_{min} \\geq 2d + 1$"
        }
    },
    {
        "id": "net2-dl-007",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Stop-and-Wait protocol: sender sends:",
        "options": [
            "No frames",
            "Multiple frames before waiting",
            "One frame, waits for ACK before next",
            "Continuous stream"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Stop-and-Wait ARQ: simplest flow/error control protocol. Mechanism: (1) Sender transmits ONE frame, (2) WAITS for ACK (positive acknowledgment) or NAK (negative), (3) If ACK received or timeout: send next frame, (4) If NAK or timeout: retransmit same frame. Sequence numbers: 0 and 1 (alternating bit protocol) sufficient to detect duplicates. Advantages: simple implementation, low buffer requirements. Disadvantages: poor link utilization especially on high bandwidth-delay product links (satellite). Idle most of the time waiting for ACKs.",
            "formula": "Stop-and-Wait: send 1, wait ACK, repeat"
        }
    },
    {
        "id": "net2-dl-008",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Stop-and-Wait efficiency = ?",
        "options": [
            "1 / (1 + 2a) where a = propagation/transmission time",
            "Always 100%",
            "0%",
            "Depends on frame size only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Stop-and-Wait Efficiency: η = 1 / (1 + 2a), where a = Tp/Tt = (Propagation time) / (Transmission time) = (Distance/Speed) / (Frame_size/Bandwidth). Transmission time Tt: time to put frame on wire. Propagation time Tp: time for signal to reach receiver. If a << 1 (short distance, large frames): high efficiency. If a >> 1 (long distance, small frames, high bandwidth): very low efficiency. Example: a=99 → η=0.5%. Solution: pipelining (GBN, SR) allows multiple outstanding frames, efficiency approaches 100% with large enough window.",
            "formula": "$\\eta = \\frac{1}{1 + 2a}$ where $a = T_p/T_t$"
        }
    },
    {
        "id": "net2-dl-009",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Go-Back-N ARQ: on error, retransmit:",
        "options": [
            "All frames from erroneous frame onward",
            "Random frames",
            "Only erroneous frame",
            "No frames"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Go-Back-N (GBN) error recovery: On error detection or timeout for frame N: sender RETRANSMITS frame N and ALL SUBSEQUENT frames in window (even if they were correctly received). Receiver: accepts only in-order frames, discards out-of-order (no buffering), sends cumulative ACK for last in-order frame received. Waste: retransmits correctly received frames after error. Example: window=5, frames 1-5 sent, frame 3 lost, receiver got 4,5. Sender timeout on 3, retransmits 3,4,5 (wastes bandwidth for 4,5). Simple receiver but inefficient on lossy links.",
            "formula": "GBN: retransmit N and all subsequent frames"
        }
    },
    {
        "id": "net2-dl-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Selective Repeat ARQ: on error, retransmit:",
        "options": [
            "No frames",
            "From beginning",
            "Only the erroneous frame(s)",
            "All frames"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Selective Repeat (SR) error recovery: On error detection for frame N: sender retransmits ONLY frame N (selective retransmission). Receiver: BUFFERS out-of-order frames, sends individual ACK/NAK for each frame. Efficiency: doesn't waste bandwidth retransmitting correct frames. Complexity: requires buffering at receiver, individual acknowledgments for each frame, careful window management. Best for high error-rate or high-bandwidth links. Example: frames 1-5 sent, 3 lost, 4,5 buffered. Sender retransmits only 3, delivers 3,4,5 in order to upper layer.",
            "formula": "SR: retransmit ONLY erroneous frames, buffer OOO"
        }
    },
    {
        "id": "net2-dl-011",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Sliding window size for Go-Back-N with n-bit sequence: max window = ?",
        "options": [
            "n",
            "2^n - 1",
            "2^(n-1)",
            "2^n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "GBN: sender window ≤ 2^n - 1",
            "formula": "W ≤ 2^n - 1"
        }
    },
    {
        "id": "net2-dl-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Sliding window size for Selective Repeat with n-bit sequence: max window = ?",
        "options": [
            "n",
            "2^n",
            "2^n - 1",
            "2^(n-1)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SR: sender + receiver window ≤ 2^n, so each ≤ 2^(n-1)",
            "formula": "W ≤ 2^(n-1)"
        }
    },
    {
        "id": "net2-mac-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "CSMA/CD is used in:",
        "options": [
            "Satellite networks",
            "Ethernet (wired LAN)",
            "WAN only",
            "Wireless networks"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection): Used in wired Ethernet. Listen before transmitting, transmit if idle. While transmitting, detect collisions. On collision: stop, send jam signal, wait random time (exponential backoff), retry. Minimum frame size ensures collision detected before transmission finishes."
        }
    },
    {
        "id": "net2-mac-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "CSMA/CD: minimum frame size ensures:",
        "options": [
            "No errors",
            "Maximum speed",
            "Large packets",
            "Collision detected before transmission ends"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "CSMA/CD minimum frame size: ensures collision is detected BEFORE transmission completes. Condition: Transmission time (Tt) ≥ 2 × Propagation time (Tp). Why 2Tp? Signal must travel to farthest node AND collision signal must return - round-trip time (RTT). Ethernet: max length 2500m, speed 2×10^8 m/s, Tp≈5μs, RTT=10μs. For 10 Mbps: min frame = 10Mbps × 10μs = 100 bits. Ethernet standard: 64 bytes (512 bits) minimum frame.  Shorter frames padded. Prevents late collision problem.",
            "formula": "Min frame: $T_t \\geq 2T_p$ (detect collision)"
        }
    },
    {
        "id": "net2-mac-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "CSMA/CA is used in:",
        "options": [
            "Fiber optic",
            "Coaxial only",
            "Wired Ethernet",
            "Wireless networks (WiFi)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "CSMA/CA (Carrier Sense Multiple Access with Collision AVOIDANCE): MAC protocol for WIRELESS networks (WiFi 802.11). Cannot detect collisions in wireless (hidden terminal problem, can't listen while transmitting). Strategy: AVOID collisions using: (1) CARRIER SENSE - listen before transmitting (NAV - Network Allocation Vector), (2) RTS/CTS optional (Request To Send / Clear To Send) for hidden terminals, (3) ACKs - positive acknowledgment required for each frame, (4) EXPONENTIAL BACKOFF - random wait on busy channel. Less efficient than CSMA/CD due to overhead, but necessary for wireless.",
            "formula": "CSMA/CA: WiFi (collision AVOIDANCE, RTS/CTS)"
        }
    },
    {
        "id": "net2-mac-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Switch operates at which layer?",
        "options": [
            "Physical",
            "Data Link (Layer 2)",
            "Network",
            "Transport"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Switch (Layer 2 / Data Link Layer device): forwards frames based on MAC addresses. Operation: (1) Learn MAC addresses by examining source address of received frames, (2) Build MAC address table (port-MAC mapping), (3) Forward frame ONLY to destination port (unicast) or flood if unknown/broadcast, (4) Filter/isolate collision domains (each port = separate collision domain). Benefits vs Hub: (1) reduces collisions, (2) full-duplex possible, (3) better bandwidth utilization, (4) security (isolates traffic). Modern LANs use switches, not hubs. VLAN capability for logical segmentation.",
            "formula": "Switch: Layer 2, MAC-based forwarding, learns"
        }
    },
    {
        "id": "net2-mac-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link Layer",
        "question": "Hub operates at which layer?",
        "options": [
            "Physical (Layer 1)",
            "Network",
            "Transport",
            "Data Link"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Hub (Layer 1 / Physical Layer device): SIMPLE repeater that broadcasts incoming signal to ALL ports (except source port). No intelligence - doesn't examine addresses. Operates on bits, not frames. Problems: (1) creates SINGLE collision  domain (all devices compete), (2) half-duplex only, (3) wastes bandwidth (floods all ports), (4) security risk (all devices see all traffic). OBSOLETE - replaced by switches. Cheap but inefficient. Increases collision probability. Use for debugging/monitoring only.",
            "formula": "Hub: Layer 1, broadcasts to all ports (dumb)"
        }
    },
    {
        "id": "net2-net-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "IPv4 address is:",
        "options": [
            "128 bits",
            "48 bits",
            "64 bits",
            "32 bits"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "IPv4 address: 32-bit hierarchical logical address. Format: 4 octets (bytes) in dotted-decimal notation (e.g., 192.168.1.1). Each octet: 0-255. Total address space: 2^32 ≈ 4.3 billion addresses. Structure: Network portion + Host portion (determined by subnet mask/CIDR prefix). Addressing schemes: Classful (obsolete - Class A/B/C), Classless (CIDR - flexible). Assignment: static (manual) or dynamic (DHCP). Exhaustion led to: NAT, CIDR, IPv6. Essential for Layer 3 routing.",
            "formula": "IPv4 = 32 bits = 4 bytes ($2^{32}$ addresses)"
        }
    },
    {
        "id": "net2-net-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "IPv6 address is:",
        "options": [
            "32 bits",
            "48 bits",
            "128 bits",
            "64 bits"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "IPv6 address: 128-bit next-generation IP address. Notation: 8 groups of 4 hexadecimal digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Abbreviations: leading zeros omitted, consecutive zero groups replaced by :: (once only). Address space: 2^128 ≈ 3.4×10^38 addresses - virtually unlimited. Benefits vs IPv4: (1) vast address space, (2) simplified header, (3) built-in IPsec, (4) no NAT needed, (5) better multicast/anycast. Deployment: dual-stack, tunneling, translation. Adoption growing but IPv4 still dominant.",
            "formula": "IPv6 = 128 bits ($2^{128}$ addresses)"
        }
    },
    {
        "id": "net2-net-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Subnet mask is used to:",
        "options": [
            "Encrypt data",
            "Compress data",
            "Route packets",
            "Identify network and host portions of IP address"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Subnet mask: 1s for network, 0s for host portion"
        }
    },
    {
        "id": "net2-net-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "CIDR notation /24 means:",
        "options": [
            "24 hosts",
            "24 routers",
            "24-bit network prefix",
            "24 networks"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CIDR notation /24: slash notation indicating PREFIX LENGTH. /24 means first 24 bits are NETWORK portion, remaining 32-24 = 8 bits are HOST portion. Equivalent subnet mask: 255.255.255.0. Network range: X.X.X.0 - X.X.X.255 (256 addresses). Usable hosts: 2^8 - 2 = 254 (subtract network address .0 and broadcast .255). Example: 192.168.1.0/24 covers 192.168.1.0 through 192.168.1.255. CIDR allows flexible subnetting - any /n from /1 to /32. Replaces wasteful classful addressing.",
            "formula": "/24: 24-bit prefix, 8-bit host ($2^8=256$ addresses)"
        }
    },
    {
        "id": "net2-net-005",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "A /24 network has how many usable host addresses? (Subtract 2 for network and broadcast)",
        "correctAnswer": 254,
        "tolerance": 0,
        "explanation": {
            "solution": "Subnetting calculation for /24: Total addresses = 2^(32-24) = 2^8 = 256. RESERVED addresses: (1) Network address (all host bits = 0): X.X.X.0 - identifies network itself, (2) Broadcast address (all host bits = 1): X.X.X.255 - sends to all hosts. USABLE hosts = 256 - 2 = 254. Range: X.X.X.1 through X.X.X.254. Formula applies to any prefix: usable = 2^(host_bits) - 2. Quick reference: /30=2 hosts (point-to-point), /29=6, /28=14, /27=30, /26=62, /25=126, /24=254.",
            "formula": "Usable = $2^{(32-n)} -  2 = 2^8 - 2 = 254$"
        }
    },
    {
        "id": "net2-net-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Class A IP address range (first octet):",
        "options": [
            "224-239",
            "128-191",
            "0-127",
            "192-223"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Class A IP address range: first octet 1-126 (0.x.x.x-126.x.x.x). First bit = 0 (binary pattern 0xxxxxxx). 0.0.0.0 reserved (default route). 127.x.x.x reserved for loopback (localhost, 127.0.0.1). Network bits: 8, host bits: 24. Networks: 126 (2^7 - 2). Hosts per network: 2^24 - 2 ≈ 16.7 million. Default mask: 255.0.0.0 (/8). Usage: very large organizations, ISPs. Examples: 10.0.0.0 (private), MIT (18.x.x.x). Classful addressing now obsolete, replaced by CIDR.",
            "formula": "Class A: 1-126 (first bit=0), /8 network"
        }
    },
    {
        "id": "net2-net-007",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Class B IP address range (first octet):",
        "options": [
            "192-223",
            "0-127",
            "224-239",
            "128-191"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Class B IP address range: first octet 128-191 (128.x.x.x-191.x.x.x). First two bits = 10 (binary pattern 10xxxxxx). Network bits: 16, host bits: 16. Networks: 2^14 = 16,384. Hosts per network: 2^16 - 2 = 65,534. Default mask: 255.255.0.0 (/16). Usage: medium to large organizations, universities. Examples: 172.16.0.0-172.31.0.0 (private), many university networks. Balanced network/host allocation. Classful scheme wasteful - CIDR provides flexibility.",
            "formula": "Class B: 128-191 (first 2 bits=10), /16"
        }
    },
    {
        "id": "net2-net-008",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Class C IP address range (first octet):",
        "options": [
            "128-191",
            "192-223",
            "224-239",
            "0-127"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Class C IP address range: first octet 192-223 (192.x.x.x-223.x.x.x). First three bits = 110 (binary pattern 110xxxxx). Network bits: 24, host bits: 8. Networks: 2^21 ≈ 2 million. Hosts per network: 2^8 - 2 = 254. Default mask: 255.255.255.0 (/24). Usage: small organizations, home/small business networks. Examples: 192.168.0.0-192.168.255.0 (private - most common for home routers). Too few hosts for many needs - led to subnetting and eventual CIDR adoption.",
            "formula": "Class C: 192-223 (first 3 bits=110), /24"
        }
    },
    {
        "id": "net2-net-009",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Private IP address ranges include:",
        "options": [
            "Only 192.168.x.x",
            "All IP addresses",
            "Only 10.x.x.x",
            "10.x.x.x, 172.16-31.x.x, 192.168.x.x"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Private (RFC 1918) IP address ranges - NOT routable on public Internet, reserved for internal networks: (1) 10.0.0.0/8 (10.0.0.0 - 10.255.255.255) - single Class A, 16M addresses, large enterprises. (2) 172.16.0.0/12 (172.16.0.0 - 172.31.255.255) - 16 Class B networks, 1M addresses, medium orgs. (3) 192.168.0.0/16 (192.168.0.0 - 192.168.255.255) - 256 Class C networks, 65K addresses, home/small office (most common). Benefits: (1) conserve public IPs, (2) security (hidden from Internet), (3) flexible internal addressing. Requires NAT for Internet access. Loopback 127.0.0.0/8 also private.",
            "formula": "Private: 10/8, 172.16/12, 192.168/16 (RFC 1918)"
        }
    },
    {
        "id": "net2-net-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "NAT (Network Address Translation) is used for:",
        "options": [
            "Encryption",
            "Error correction",
            "Routing",
            "Translating private IPs to public IP"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "NAT (Network Address Translation): allows MULTIPLE devices on private network to share SINGLE public IP address. Router maintains NAT translation table: (private IP, port) ↔ (public IP, translated port). Purpose: (1) IP ADDRESS CONSERVATION - conserves scarce IPv4 addresses (one public IP for entire home/office), (2) SECURITY - hides internal network structure, (3) FLEXIBILITY - change internal addressing without affecting external. Types: (1) Static NAT - one-to-one mapping, (2) Dynamic NAT - many-to-one from pool, (3) PAT/NAPT - most common, uses port numbers for multiplexing (masquerading). Drawbacks: breaks end-to-end connectivity, complicates peer-to-peer apps, issues with some protocols (FTP, SIP). IPv6 eliminates need for NAT.",
            "formula": "NAT: private IPs → single public IP"
        }
    },
    {
        "id": "net2-net-011",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "ARP (Address Resolution Protocol) resolves:",
        "options": [
            "IP to MAC address",
            "Domain to IP",
            "MAC to IP address",
            "Port to service"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "ARP: IP address → MAC address (same network)"
        }
    },
    {
        "id": "net2-net-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "RARP (Reverse ARP) resolves:",
        "options": [
            "IP to MAC",
            "Domain to IP",
            "MAC to IP address",
            "Nothing"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "RARP (Reverse Address Resolution Protocol): OBSOLETE protocol that maps MAC address → IP address (reverse of ARP). Use case: diskless workstations boot from network - know their MAC (burned in) but need to discover their IP. RARP server maintains MAC-to-IP database. Limitations: (1) doesn't provide subnet mask, gateway, DNS, (2) requires RARP server on each network segment, (3) inflexible. REPLACED BY: BOOTP (provides more config), then DHCP (fully dynamic, lease management). Modern systems use DHCP exclusively. RARP rarely seen today.",
            "formula": "RARP: MAC → IP (obsolete, use DHCP)"
        }
    },
    {
        "id": "net2-net-013",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "ICMP is used for:",
        "options": [
            "Error reporting and diagnostics (ping, traceroute)",
            "Data transfer",
            "Routing",
            "Encryption"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "ICMP (Internet Control Message Protocol): Network layer protocol for ERROR REPORTING and DIAGNOSTICS - does NOT carry user data. Encapsulated in IP packets (protocol number 1). Message types: (1) ERROR MESSAGES - Destination Unreachable (host/net/port/protocol unreachable), Time Exceeded (TTL=0, used by traceroute), Parameter Problem, Source Quench (deprecated congestion control). (2) INFORMATIONAL - Echo Request/Reply (ping), Timestamp, Router Advertisement/Solicitation. Tools using ICMP: (1) PING - sends Echo Request, measures RTT from Echo Reply, (2) TRACEROUTE - sends packets with increasing TTL, receives Time Exceeded from each hop. Security: ICMP can be exploited (ping floods, smurf attacks), often filtered by firewalls.",
            "formula": "ICMP: protocol 1, error reporting + diagnostics"
        }
    },
    {
        "id": "net2-net-014",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Router operates at which layer?",
        "options": [
            "Network (Layer 3)",
            "Transport",
            "Physical",
            "Data Link"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Router (Layer 3 / Network Layer device): forwards PACKETS between DIFFERENT networks based on IP addresses. Functions: (1) ROUTING - determine best path using routing table/algorithms, (2) PACKET FORWARDING - send packet to next hop toward destination, (3) LOGICAL ADDRESSING - use IP (not MAC), (4) INTER-NETWORK communication, (5) FRAGMENTATION/REASSEMBLY for different MTUs. Maintains routing table: destination network, next hop, metric, interface. Uses routing protocols: RIP, OSPF, BGP. Creates  separate BROADCAST domains (blocks broadcasts). Default gateway for hosts. Core Internet device. Layer 3 switches = routers with switching performance.",
            "formula": "Router: Layer 3, IP-based, inter-network"
        }
    },
    {
        "id": "net2-route-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Distance Vector routing algorithm is based on:",
        "options": [
            "Link state",
            "Bellman-Ford (exchange distance vectors with neighbors)",
            "Flooding",
            "Dijkstra"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Distance Vector (DV) routing: based on Bellman-Ford algorithm. Each router: (1) knows DISTANCE (cost/hops) to destinations and NEXT HOP (vector/direction), (2) periodically SHARES its distance table with IMMEDIATE NEIGHBORS only, (3) updates table using: Distance to X via neighbor Y = (distance from Y to X) + (cost to Y). Decentralized: each router has partial view. Examples: RIP (hop count), IGRP. Advantages: simple, low overhead. Disadvantages: slow convergence, count-to-infinity problem, doesn't scale well. 'Routing by rumor' - relies on neighbors' information.",
            "formula": "DV: Bellman-Ford, share distance tables, iterative"
        }
    },
    {
        "id": "net2-route-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Link State routing algorithm is based on:",
        "options": [
            "Only local info",
            "Random selection",
            "Bellman-Ford",
            "Dijkstra (build global topology)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Link State (LS) routing: based on Dijkstra's shortest path algorithm. Each router: (1) discovers neighbors via HELLO packets, (2) measures LINK COST to each neighbor (bandwidth, delay), (3) FLOODS Link State Advertisements (LSAs) to ALL routers (not just neighbors), (4) every router builds COMPLETE TOPOLOGY map (link state database), (5) independently runs Dijkstra to compute shortest path tree, (6) constructs routing table. Centralized knowledge, distributed computation. Examples: OSPF, IS-IS. Advantages: fast convergence, scales well, no count-to-infinity. Disadvantages: higher memory/CPU, complex, more control traffic initially.",
            "formula": "LS: flood LSAs, Dijkstra, complete topology"
        }
    },
    {
        "id": "net2-route-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "RIP (Routing Information Protocol) uses:",
        "options": [
            "Link State",
            "Flooding",
            "Distance Vector",
            "Path Vector"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "RIP (Routing Information Protocol): INTERIOR GATEWAY PROTOCOL using Distance Vector algorithm. Characteristics: (1) METRIC - hop count only (simplest), ignores bandwidth/delay, (2) MAX HOPS - 15 (16 = infinity/unreachable), limits network size, (3) UPDATES - broadcasts full routing table every 30 seconds (high overhead), (4) SLOW CONVERGENCE - count-to-infinity problem, uses split horizon and poison reverse. Versions: RIPv1 (classful, no VLSM), RIPv2 (classless, supports VLSM, authentication). Use case: small networks, easy configuration. Replaced by OSPF in larger networks (better scalability, faster convergence, multiple metrics). Transport: UDP port 520.",
            "formula": "RIP: hop count metric, max 15 hops, 30s updates"
        }
    },
    {
        "id": "net2-route-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "OSPF (Open Shortest Path First) uses:",
        "options": [
            "Distance Vector",
            "Path Vector",
            "Link State",
            "Static routing"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "OSPF (Open Shortest Path First): INTERIOR GATEWAY PROTOCOL using Link State algorithm. Features: (1) DIJKSTRA - each router builds complete topology, computes shortest path tree, (2) FAST CONVERGENCE - LSA flooding immediately on topology change, (3) METRIC - cost (inverse bandwidth by default), administrators can configure, (4) HIERARCHICAL - divides network into areas (Area 0 = backbone), reduces routing table size and LSA flooding scope, (5) CLASSLESS - supports VLSM and CIDR, (6) AUTHENTICATION - MD5 or plaintext. (7) MULTICAST - uses 224.0.0.5 (all OSPF routers), reduces overhead. Advantages over RIP: faster, scales better, loop-free, multiple metrics. More complex configuration. Widely deployed in enterprise networks. Transport: IP protocol 89 (directly over IP).",
            "formula": "OSPF: link state, Dijkstra, areas, fast convergence"
        }
    },
    {
        "id": "net2-route-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "BGP (Border Gateway Protocol) uses:",
        "options": [
            "Path Vector",
            "Distance Vector",
            "Flooding",
            "Link State"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "BGP (Border Gateway Protocol): PATH VECTOR protocol for INTER-DOMAIN (between Autonomous Systems / ASes) routing. Internet's core routing protocol. Operation: (1) maintains paths (lists of ASes) to destinations, not just distance, (2) exchange path information with BGP peers, (3) POLICY-BASED routing - can prefer/avoid specific ASes (politics, cost, performance), (4) prevents loops by rejecting paths containing own AS. eBGP (external between ASes) vs iBGP (internal within AS). Metric: AS path length, but policies override. Highly scalable - routes entire Internet. Complex configuration. Vulnerabilities: BGP hijacking if compromised.",
            "formula": "BGP: path vector, inter-AS, policy-based"
        }
    },
    {
        "id": "net2-route-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Count-to-infinity problem occurs in:",
        "options": [
            "Distance Vector routing",
            "Link State routing",
            "Both",
            "Neither"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Count-to-infinity problem (Distance Vector routing): occurs when link failure causes slow convergence and routing loops. Mechanism: After link fails, routers don't immediately know -continue advertising outdated routes to each other in circular fashion, incrementing hop counts until reaching infinity (max metric, e.g., 16 in RIP). Example: A-B-C linear network. B-C link fails. C knows C unreachable (sets to infinity). But B hears from A that C reachable via A (old info). B tells A 'C is 2 hops via B'. A tells B 'C is 3 via A'. Counts increment slowly to 16. Solutions: (1) Split Horizon - don't advertise route back to source, (2) Poison Reverse - advertise infinity back, (3) Hold-down timers, (4) Triggered updates. Link State protocols (OSPF) immune - flood complete topology immediately.",
            "formula": "DV problem: slow convergence, routing loops"
        }
    },
    {
        "id": "net2-trans-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP is:",
        "options": [
            "Connectionless, unreliable",
            "Connection-oriented, unreliable",
            "Connection-oriented, reliable",
            "Connectionless, reliable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TCP (Transmission Control Protocol): CONNECTION-ORIENTED protocol providing RELIABLE stream-oriented communication. Features: (1) 3-WAY HANDSHAKE - connection establishment before data transfer, (2) RELIABLE - ACKs, sequence numbers, retransmission guarantee delivery, (3) ORDERED - maintains sequence, delivers in order, (4) FLOW CONTROL - sliding window (rwnd) prevents receiver overflow, (5) CONGESTION CONTROL - slow start, congestion avoidance, AIMD algorithm prevents network overload, (6) FULL-DUPLEX - bidirectional simultaneous transmission. Header: 20-60 bytes. Use cases: HTTP, FTP, email, any application requiring reliability. Overhead: slower than UDP due to connection management and reliability mechanisms.",
            "formula": "TCP: connection-oriented, reliable, ordered"
        }
    },
    {
        "id": "net2-trans-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "UDP is:",
        "options": [
            "Connectionless, unreliable (best-effort)",
            "Connection-oriented, reliable",
            "Connectionless, reliable",
            "Connection-oriented, unreliable"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "UDP (User Datagram Protocol): CONNECTIONLESS protocol providing UNRELIABLE best-effort datagram delivery. Features: (1) NO CONNECTION - send immediately without handshake, (2) UNRELIABLE - no ACKs, no guaranteed delivery, packets may be lost, (3) UNORDERED - datagrams may arrive out-of-order or duplicated, (4) NO FLOW CONTROL - sender doesn't adapt to receiver, (5) NO CONGESTION CONTROL - doesn't react to network conditions, (6) LIGHTWEIGHT - minimal 8-byte header (vs TCP 20+ bytes), (7) FAST - low latency, no connection overhead. Use cases: DNS (queries), DHCP, streaming video/audio (loss tolerance), online gaming (latency-sensitive), VoIP. Application handles reliability if needed.",
            "formula": "UDP: connectionless, unreliable, fast, minimal overhead"
        }
    },
    {
        "id": "net2-trans-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "Port numbers identify:",
        "options": [
            "IP addresses",
            "MAC addresses",
            "Physical ports",
            "Applications/processes on a host"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Port number: 16-bit unsigned integer (0-65535) identifying specific APPLICATION/PROCESS on a host. Enables MULTIPLEXING/DEMULTIPLEXING - multiple applications share same IP. Socket = (IP address, port number) uniquely identifies endpoint. Port ranges: (1) WELL-KNOWN (0-1023): reserved for standard services (HTTP=80, HTTPS=443, SSH=22, FTP=21, DNS=53, SMTP=25), require root/admin privileges. (2) REGISTERED (1024-49151): registered for specific applications. (3) DYNAMIC/EPHEMERAL (49152-65535): temporary client ports assigned by OS. Server listens on well-known port; client uses ephemeral port.",
            "formula": "Port = 16-bit (0-65535); socket = IP:port"
        }
    },
    {
        "id": "net2-trans-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "Well-known ports range from:",
        "options": [
            "0-65535",
            "49152-65535",
            "0-1023",
            "1024-49151"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Port number ranges: (1) WELL-KNOWN ports (0-1023): System/privileged ports for standard services. Examples: HTTP=80, HTTPS=443 (web), FTP=20/21 (file transfer), SSH=22 (secure shell), Telnet=23, SMTP=25 (email send), DNS=53 (name resolution), DHCP=67/68, TFTP=69, POP3=110, IMAP=143. Servers bind to these. Require administrator/root privileges. (2) REGISTERED (1024-49151): Application-specific, less strict. (3) DYNAMIC/EPHEMERAL (49152-65535): OS-assigned temporary client ports. IANA manages port assignments.",
            "formula": "Well-known: 0-1023 (standard services)"
        }
    },
    {
        "id": "net2-trans-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP 3-way handshake sequence:",
        "options": [
            "SYN, SYN-ACK, ACK",
            "FIN, ACK, FIN",
            "SYN, ACK, SYN",
            "ACK, SYN, FIN"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP 3-Way Handshake (connection establishment): (1) CLIENT → SERVER: SYN packet (SYN flag set, seq=x, initial sequence number randomly chosen). Client enters SYN-SENT state. (2) SERVER → CLIENT: SYN-ACK packet (SYN+ACK flags set, seq=y server's ISN, ack=x+1 acknowledging client's SYN). Server allocates resources, enters SYN-RECEIVED state. (3) CLIENT → SERVER: ACK packet (ACK flag set, seq=x+1, ack=y+1 acknowledging server's SYN). Client enters ESTABLISHED. Server receives ACK, enters ESTABLISHED. Both sides now have synchronized sequence numbers and connection is open for bidirectional data transfer. Purpose: mutual agreement, sequence number synchronization, negotiate options (MSS, window scaling). SYN packets consume 1 sequence number despite carrying no data. SYN flood attack exploits this by sending many SYNs without completing handshake.",
            "formula": "3-way: SYN → SYN-ACK → ACK"
        }
    },
    {
        "id": "net2-trans-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP connection termination uses:",
        "options": [
            "3-way handshake",
            "1-way",
            "No handshake",
            "4-way handshake (FIN → ACK → FIN → ACK)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TCP 4-Way Handshake (connection termination - graceful close): (1) ACTIVE CLOSE (Client) → PASSIVE CLOSE (Server): FIN packet (FIN flag set). Client enters FIN-WAIT-1. (2) Server → Client: ACK packet (acknowledging FIN). Server enters CLOSE-WAIT (can still send data). Client receives ACK, enters FIN-WAIT-2. (3) Server → Client: FIN packet (when server ready to close). Server enters LAST-ACK. (4) Client → Server: ACK packet (acknowledging server's FIN). Client enters TIME-WAIT for 2×MSL (Maximum Segment Lifetime, typically 2 minutes) to handle delayed packets, then CLOSED. Server receives ACK, immediately CLOSED. Why four-way? TCP is FULL-DUPLEX - each direction must be closed independently. SYN-ACK can combine in handshake (both establishing), but FIN-ACK usually separate (asymmetric closing). Abrupt close: RST packet.",
            "formula": "4-way: FIN → ACK → FIN → ACK (full-duplex)"
        }
    },
    {
        "id": "net2-trans-007",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP flow control uses:",
        "options": [
            "Sliding window (receiver advertised window)",
            "No flow control",
            "Congestion window only",
            "Rate limiting only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP Flow Control: prevents fast sender from overwhelming slow receiver using SLIDING WINDOW mechanism. Receiver advertises RECEIVE WINDOW (rwnd) in every ACK - amount of available buffer space. Sender limits unacknowledged data to min(cwnd, rwnd). rwnd changes dynamically based on application consumption rate. If rwnd=0, sender stops sending data (but sends window probes). Flow control ≠ congestion control. Flow control: end-to-end (receiver-sender). Congestion control: network-wide (sender adjusts to network capacity). Both use windowing but for different purposes. Window scaling (TCP option) allows rwnd > 65535 bytes.",
            "formula": "Flow ctrl: receiver advertises rwnd (buffer size)"
        }
    },
    {
        "id": "net2-trans-008",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP congestion control uses:",
        "options": [
            "Slow start, congestion avoidance, fast retransmit, fast recovery",
            "Only slow start",
            "Only fast recovery",
            "No congestion control"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP Congestion Control: prevents sender from overwhelming NETWORK (vs flow control = prevent overwhelming receiver). Mechanisms: (1) SLOW START - cwnd starts at 1 MSS, DOUBLES every RTT (exponential), continues until ssthresh or loss. (2) CONGESTION AVOIDANCE - after ssthresh, cwnd increases LINEARLY by 1 MSS per RTT (additive increase). (3) FAST RETRANSMIT - on 3 duplicate ACKs, retransmit segment immediately without waiting for timeout. (4) FAST RECOVERY - after fast retransmit, set ssthresh=cwnd/2, cwnd=ssthresh+3, continue congestion avoidance (multiplicative decrease). On TIMEOUT: more severe, indicates serious congestion - set ssthresh=cwnd/2, cwnd=1 MSS, restart slow start. AIMD: Additive Increase Multiplicative Decrease balances efficiency and fairness among competing flows. Modern variants: TCP Reno (described), TCP Tahoe (older), TCP New Reno, TCP CUBIC (default Linux), TCP BBR (bottleneck bandwidth/RTT).",
            "formula": "SS: exponential, CA: linear, AIMD on loss"
        }
    },
    {
        "id": "net2-trans-009",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP slow start: cwnd increases:",
        "options": [
            "Remains constant",
            "Exponentially (double every RTT)",
            "Decreases",
            "Linearly"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP Slow Start: Initial phase of congestion control. Congestion window (cwnd) starts at 1 MSS (Maximum Segment Size, typically 1460 bytes for Ethernet). For EACH ACK received, cwnd increases by 1 MSS: effective DOUBLING per RTT (exponential growth). Example: cwnd = 1 → send 1 segment → receive 1 ACK → cwnd = 2 → send 2 segments → receive 2 ACKs → cwnd = 4 → etc. Pattern: 1, 2, 4, 8, 16, 32... MSS. Continues until: (1) cwnd reaches slow start threshold (ssthresh), transition to congestion avoidance, OR (2) LOSS detected (3 dup ACKs or timeout). Name 'slow start' is misnomer - starts conservatively (1 MSS) but grows exponentially, quite aggressive. Purpose: probe network capacity without starting too aggressively.",
            "formula": "SS: cwnd doubles per RTT, cwnd += 1 MSS per ACK"
        }
    },
    {
        "id": "net2-trans-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP congestion avoidance: cwnd increases:",
        "options": [
            "Stays constant",
            "Halves",
            "Linearly (add 1 MSS per RTT)",
            "Exponentially"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TCP Congestion Avoidance: Entered when cwnd >= ssthresh (slow start threshold) or after fast recovery. LINEAR (additive) increase: cwnd increases by approximately 1 MSS for each full RTT of successfully acknowledged data. Implementation: for each ACK, cwnd += MSS × (MSS/cwnd), accumulating fractional increases until reaching 1 full MSS. Goal: probe for additional bandwidth cautiously - network is near capacity. Continues until: (1) LOSS (3 dup ACKs) → fast retransmit/recovery, set ssthresh=cwnd/2, cwnd=ssthresh+3, OR (2) TIMEOUT → severe congestion, ssthresh=cwnd/2, cwnd=1 MSS, restart slow start. AIMD (Additive Increase Multiplicative Decrease): fair bandwidth sharing among competing flows, stability. Saw-tooth pattern in cwnd vs time graphs.",
            "formula": "CA: cwnd += 1 MSS per RTT (linear)"
        }
    },
    {
        "id": "net2-trans-011",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "On timeout, TCP sets cwnd to:",
        "options": [
            "Half of current",
            "Double",
            "1 MSS (restart slow start)",
            "No change"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TCP Timeout Response (severe congestion): When retransmission timeout (RTO) expires without receiving expected ACK, TCP interprets this as SEVERE NETWORK CONGESTION. Actions: (1) Set ssthresh (slow start threshold) = cwnd/2 (remember current window size), (2) Reset cwnd = 1 MSS (drastic reduction), (3) RESTART SLOW START (exponential growth until ssthresh). Retransmit the timed-out segment. Timeout is more severe than 3 duplicate ACKs - indicates potential complete path failure or heavy congestion. RTO calculated using smoothed RTT and RTT variance (Jacobson's algorithm). Exponential backoff: if subsequent retransmissions also timeout, RTO doubles each time (1s → 2s → 4s → 8s...) to avoid overwhelming congested network. After successful ACK, resume normal slow start → congestion avoidance progression.",
            "formula": "Timeout: ssthresh=cwnd/2, cwnd=1, slow start"
        }
    },
    {
        "id": "net2-trans-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "On 3 duplicate ACKs, TCP uses:",
        "options": [
            "Fast retransmit + fast recovery (cwnd halved)",
            "Slow start from 1",
            "No action",
            "Connection reset"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP Fast Retransmit & Fast Recovery (3 Duplicate ACKs): When receiver gets out-of-order segment, sends duplicate ACK for last in-order byte. If sender receives 3 DUPLICATE ACKs (4 identical ACKs total), infers segment loss WITHOUT waiting for timeout. FAST RETRANSMIT: immediately retransmit the presumed lost segment (the one after the ACK'd sequence). FAST RECOVERY (TCP Reno): (1) Set ssthresh = cwnd/2 (multiplicative decrease), (2) Set cwnd = ssthresh + 3 MSS (inflate window by 3 for the 3 dup ACKs in flight), (3) For each additional dup ACK: cwnd += 1 MSS (temporary inflation), (4) When new ACK arrives (acknowledging retransmitted segment): cwnd = ssthresh (deflate), resume congestion avoidance. Why less severe than timeout? Dup ACKs indicate network still delivering packets (just out of order), not complete failure. Recovers faster than timeout. TCP Tahoe (older): on 3 dup ACKs, treats like timeout (cwnd=1, slow start).",
            "formula": "Fast: ssthresh=cwnd/2, cwnd=ssthresh+3"
        }
    },
    {
        "id": "net2-app-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS resolves:",
        "options": [
            "Domain name to IP address",
            "IP to MAC",
            "Port to service",
            "MAC to IP"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "DNS (Domain Name System): Internet's DISTRIBUTED HIERARCHICAL naming system translating human-readable domain names (www.google.com) to IP addresses (142.250.190.14) - the 'phone book of the Internet'. Architecture: (1) HIERARCHICAL namespace - root (.), TLDs (.com, .org, .in), second-level (google.com), subdomains (mail.google.com). (2) DISTRIBUTED database - no single point of failure, millions of DNS servers worldwide. Query process: (1) CLIENT → LOCAL DNS SERVER (recursive resolver, typically ISP's), (2) If cached: immediate response. Else ITERATIVE queries: local → ROOT nameserver → TLD nameserver → AUTHORITATIVE nameserver → response. Record types: A (IPv4), AAAA (IPv6), CNAME (canonical name/alias), MX (mail exchange), NS (nameserver), PTR (reverse lookup), TXT (text/SPF). Transport: UDP port 53 (fast queries), TCP port 53 (zone transfers, large responses >512 bytes). Caching: TTL (Time To Live) reduces load. Security: DNSSEC prevents spoofing.",
            "formula": "DNS: domain → IP, UDP port 53, hierarchical"
        }
    },
    {
        "id": "net2-app-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS uses port:",
        "options": [
            "25",
            "53",
            "80",
            "443"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS Port 53: DNS primarily uses UDP port 53 for standard queries and responses. UDP chosen for: (1) SPEED - no connection setup overhead, low latency critical for frequent name lookups, (2) STATELESS - simple request-response, (3) SMALL MESSAGES - typical query/response fits in single packet (<512 bytes originally). TCP port 53 used for: (1) ZONE TRANSFERS - synchronizing DNS data between primary and secondary nameservers (large data), (2) LARGE RESPONSES - when response >512 bytes (common with DNSSEC or many records), response truncated in UDP with TC (Truncation) flag set, client retries over TCP, (3) SECURITY - DNS over TLS (DoT) uses TCP port 853. Modern DNS: EDNS0 extension allows UDP messages >512 bytes (up to 4096 bytes) to reduce TCP fallback. Port 53 must be open bidirectionally for DNS to function.",
            "formula": "DNS: UDP 53 (queries), TCP 53 (zone xfer/large)"
        }
    },
    {
        "id": "net2-app-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP uses port:",
        "options": [
            "80",
            "53",
            "443",
            "22"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "HTTP Port 80: Standard well-known port for HTTP (HyperText Transfer Protocol) - unencrypted web traffic. When you access http://example.com, browser connects to server's port 80 by default. Port 80 assigned by IANA for HTTP service. Data transmitted in PLAINTEXT - no encryption, vulnerable to eavesdropping/MITM attacks. Can see URLs, headers, cookies, form data in transit. Modern web moving away from HTTP to HTTPS. Many sites auto-redirect 80→443. Browsers mark HTTP sites as 'Not Secure'. Port 80 open on web servers to accept incoming HTTP connections. Firewalls typically allow outbound 80 for web browsing. Alternative HTTP ports: 8080 (HTTP proxy/alternate), 8000, 3000 (development servers).",
            "formula": "HTTP: port 80, plaintext, insecure"
        }
    },
    {
        "id": "net2-app-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTPS uses port:",
        "options": [
            "25",
            "80",
            "443",
            "22"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "HTTPS Port 443: Standard well-known port for HTTPS (HTTP Secure) - encrypted web traffic over TLS/SSL. When accessing https://example.com, browser connects to port 443. HTTPS = HTTP + TLS/SSL ENCRYPTION. Provides: (1) CONFIDENTIALITY - data encrypted in transit, unreadable to eavesdroppers, (2) INTEGRITY - tampering detected via cryptographic hashing, (3) AUTHENTICATION - server verified via digital certificates (issued by Certificate Authorities). TLS handshake: negotiates encryption algorithms, exchanges keys, verifies certificate. After handshake, all HTTP data encrypted. Port 443 must be open on servers hosting HTTPS sites. Browsers show padlock icon for HTTPS. HSTS (HTTP Strict Transport Security) forces HTTPS. Certificate errors (expired, self-signed, wrong domain) trigger warnings. Modern web standard - HTTP/2 and HTTP/3 require HTTPS.",
            "formula": "HTTPS: port 443, HTTP over TLS/SSL, encrypted"
        }
    },
    {
        "id": "net2-app-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP uses port:",
        "options": [
            "22",
            "80",
            "21 (control) and 20 (data)",
            "25"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FTP Ports 20 & 21: FTP (File Transfer Protocol) uses TWO separate TCP connections - OUT-OF-BAND control. (1) PORT 21 - CONTROL CONNECTION: persistent TCP connection for commands and responses. Client sends commands (USER, PASS, LIST, RETR, STOR), server sends status codes (200 OK, 550 error). Remains open during entire FTP session. (2) PORT 20 - DATA CONNECTION: separate TCP connection for actual FILE TRANSFER and directory listings. Created for each file transfer or LIST, then closed. Two modes: ACTIVE (server port 20 connects to client's data port) vs PASSIVE (client connects to server's ephemeral port, NAT-friendly). Why separate? Allows simultaneous control and data transfer, different connection management. Security: FTP transmits credentials and data in PLAINTEXT - use FTPS (FTP over TLS) or SFTP (SSH File Transfer Protocol, port 22) for encryption.",
            "formula": "FTP: port 21 (control), 20 (data), out-of-band"
        }
    },
    {
        "id": "net2-app-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SSH uses port:",
        "options": [
            "80",
            "22",
            "21",
            "25"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SSH Port 22: Well-known port for SSH (Secure Shell) - encrypted remote access protocol. Provides SECURE: (1) REMOTE LOGIN - command-line access to servers (replaces insecure Telnet port 23), (2) FILE TRANSFER - SCP (Secure Copy) and SFTP (SSH File Transfer Protocol) for encrypted file transfers (replaces FTP), (3) PORT FORWARDING/TUNNELING - encrypt other protocols through SSH tunnel (e.g., tunnel database connections). Security features: (1) ENCRYPTION - all traffic encrypted (AES, ChaCha20), (2) AUTHENTICATION - password or public-key based (SSH keys preferred), (3) INTEGRITY - HMAC prevents tampering. Common use: DevOps, sysadmins accessing servers, Git repository access (git@github.com). Configuration: ~/.ssh/config, authorized_keys. Changing SSH from port 22 (security through obscurity) reduces automated attacks but not proper security.",
            "formula": "SSH: port 22, encrypted remote access"
        }
    },
    {
        "id": "net2-app-007",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP (email sending) uses port:",
        "options": [
            "80",
            "110",
            "143",
            "25"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SMTP Port 25: Standard port for SMTP (Simple Mail Transfer Protocol) - email SENDING (PUSH) protocol. Used for: (1) MUA→MTA - client sending email to mail server (outgoing mail), (2) MTA→MTA - mail server relaying to recipient's mail server. SMTP is PUSH protocol - sender initiates transfer. Commands: HELO/EHLO (hello), MAIL FROM (sender), RCPT TO (recipient), DATA (message body), QUIT. Responses: 250 OK, 550 error. Originally plaintext, now often requires: STARTTLS (upgrade to encrypted), AUTH (authenticate sender via SMTP AUTH). Modern email: port 25 often blocked by ISPs for outbound (anti-spam), use port 587 (submission, authenticated) or 465 (SMTPS, deprecated but common). MIME (Multipurpose Internet Mail Extensions) allows non-ASCII content (attachments, HTML). Email retrieval: POP3 (port 110) or  IMAP (port 143).",
            "formula": "SMTP: port 25, send/relay email, PUSH"
        }
    },
    {
        "id": "net2-app-008",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DHCP is used for:",
        "options": [
            "DNS resolution",
            "Routing",
            "Encryption",
            "Dynamic IP address assignment"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "DHCP (Dynamic Host Configuration Protocol): Automates network configuration - client broadcasts DISCOVER message, DHCP server responds with OFFER (available IP), client sends REQUEST, server sends ACK with configuration. DHCP provides: (1) IP ADDRESS - dynamically assigned from pool with LEASE time (hours/days), client must renew periodically, (2) SUBNET MASK - defines network/host portions, (3) DEFAULT GATEWAY - router IP for reaching other networks, (4) DNS SERVERS - for name resolution, (5) Additional: NTP servers, domain name, TFTP server for diskless boot. Benefits: centralized management, automatic configuration (plug-and-play), IP reuse (leases expire), no manual errors. Ports: UDP 67 (server), 68 (client). DORA process: Discover, Offer, Request, Acknowledge. Lease management: T1 (50% lease) unicast renewal, T2 (87.5%) broadcast renewal, rebinding. Replaced BOOTP and manual static IP assignment.",
            "formula": "DHCP: auto IP/mask/gateway/DNS, UDP 67/68"
        }
    },
    {
        "id": "net2-app-009",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP is:",
        "options": [
            "Reliable transport",
            "Connection-oriented",
            "Stateful",
            "Stateless"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "HTTP Statelessness: HTTP protocol itself is STATELESS - each request is INDEPENDENT, server doesn't retain information about previous requests from same client. No built-in session memory. Request contains ALL information needed to process it (headers, cookies, auth). Benefits: (1) SIMPLICITY - server logic straightforward, (2) SCALABILITY - any server can handle any request (load balancing easy), no synchronization, (3) RELIABILITY - server crash doesn't lose state. Drawbacks: inefficient for applications needing continuity (shopping carts, authentication). Solutions adding state: (1) COOKIES - server sends Set-Cookie, client returns cookie in subsequent requests, (2) SESSION IDs - cookie contains session ID, server stores session data mapped to ID, (3) URL PARAMETERS - pass state in URL (query strings), (4) LOCAL STORAGE - browser-side storage (HTML5). HTTP is stateless, but web applications are stateful via these mechanisms. REST APIs embrace statelessness.",
            "formula": "HTTP: stateless (cookies/sessions add state)"
        }
    },
    {
        "id": "net2-app-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP methods include:",
        "options": [
            "Only HEAD",
            "Only POST",
            "Only GET",
            "GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "HTTP Request Methods (Verbs): Standard operations on resources (RESTful design). (1) GET - retrieve/read resource, SAFE (no side effects), IDEMPOTENT (multiple calls = same result), data in URL query string, cached. (2) POST - create new resource or submit data, NOT safe, NOT idempotent, data in request body, can upload files. (3) PUT - update/replace entire resource, idempotent (repeated = same state), create if doesn't exist. (4) DELETE - remove resource, idempotent. (5) PATCH - partial update (modify part of resource), not always idempotent. (6) HEAD - like GET but returns headers only (no body), check existence/metadata. (7) OPTIONS - query server for supported methods (CORS preflight). (8) CONNECT - establish tunnel (HTTP proxy). (9) TRACE - diagnostic loop-back. CRUD mapping: Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE. Security: validate all inputs, POST/PUT/DELETE require authentication/authorization.",
            "formula": "HTTP: GET, POST, PUT, DELETE, PATCH, HEAD..."
        }
    },
    {
        "id": "net3-email-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP uses port:",
        "options": [
            "143",
            "110",
            "80",
            "25"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SMTP (Simple Mail Transfer Protocol): email SENDING protocol using port 25. Client-to-server (MUA→MTA) and server-to-server (MTA→MTA) email delivery. PUSH protocol - sender actively transfers mail to recipient's server. Commands: HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT. Modern SMTP requires STARTTLS (encryption) and AUTH (authentication). Port 587 (submission with auth) increasingly common, port 25 often blocked by ISPs for outbound to reduce spam. SMTP only sends - retrieval uses POP3 port 110 or IMAP port 143.",
            "formula": "SMTP: port 25, send mail, PUSH, TCP"
        }
    },
    {
        "id": "net3-email-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP is a __ protocol (push/pull):",
        "options": [
            "Neither",
            "Pull",
            "Push",
            "Both"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SMTP (Simple Mail Transfer Protocol): PUSH PROTOCOL - sender initiates transfer and actively pushes email to recipient's mail server. Client pushes to outgoing SMTP server, which pushes to recipient's SMTP server. Sender-driven model. In contrast, email RETRIEVAL protocols are PULL: (1) POP3 (Post Office Protocol v3) - client pulls/downloads mail from server to local device, port 110, (2) IMAP (Internet Message Access Protocol) - client pulls/synchronizes mail from server, port 143. Asymmetry: SMTP for outbound (push), POP3/IMAP for inbound (pull). This design reflects original network architecture where user devices were not always online to receive pushed mail.",
            "formula": "SMTP: PUSH. POP3/IMAP: PULL."
        }
    },
    {
        "id": "net3-email-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "POP3 uses port:",
        "options": [
            "143",
            "110",
            "80",
            "25"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "POP3 (Post Office Protocol version 3): Email RETRIEVAL protocol using port 110 (TCP). Client connects, authenticates, DOWNLOADS mail from server to local device. Three phases: (1) AUTHORIZATION - USER and PASS commands, plaintext authentication (use APOP or TLS), (2) TRANSACTION - LIST (messages), RETR (retrieve/download), DELE (mark for deletion), (3) UPDATE - QUIT triggers actual deletion of marked messages. Traditional POP3: 'download-and-delete' - mail removed from server after retrieval (saves server storage). Modern: can configure 'leave copy on server'. Drawback: mail on single device, multiple devices see different states. Best for: single device, limited server space. IMAP (port 143) better for multi-device access. Secure variant: POP3S (port 995, over TLS).",
            "formula": "POP3: port 110, download email, TCP"
        }
    },
    {
        "id": "net3-email-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "IMAP uses port:",
        "options": [
            "143",
            "80",
            "110",
            "25"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "IMAP (Internet Message Access Protocol): Advanced email RETRIEVAL protocol using port 143 (TCP). Unlike POP3, mail stays on SERVER - client synchronizes local view. Features: (1) FOLDER MANAGEMENT - create, delete, rename folders on server, organize mail remotely, (2) SELECTIVE DOWNLOAD - fetch headers first, download full message on demand (bandwidth efficient), (3) SERVER-SIDE SEARCH - query before downloading, (4) MULTI-DEVICE SYNC - same view (read/unread, folders) across all devices (phone, laptop, web), (5) PARTIAL FETCH - retrieve message parts (e.g., text without attachments), (6) FLAGS - seen, answered, deleted, flagged. Phases: connection, authentication, selected (mailbox operations), logout. Advantages over POP3: better for multiple devices, server backup, web mail integration. Disadvantage: requires server storage. Secure: IMAPS (port 993, over TLS). Modern email standard.",
            "formula": "IMAP: port 143, sync email, server storage"
        }
    },
    {
        "id": "net3-email-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "IMAP advantage over POP3:",
        "options": [
            "Uses less bandwidth",
            "Can access mail from multiple devices, organize on server",
            "More secure",
            "Faster download"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "IMAP vs POP3 - IMAP Advantages: (1) MULTI-DEVICE ACCESS - mail synchronized across all devices (phone, laptop, tablet, webmail) - same view everywhere. Read on one device = read on all. POP3: downloads to single device, others don't see changes. (2) SERVER-SIDE ORGANIZATION - folders, searches, flags managed on server. POP3: organization local only. (3) SELECTIVE SYNC - can browse headers, fetch full messages on demand, download only needed parts. Saves bandwidth and storage. POP3: download everything. (4) REMOTE BACKUP - mail always on server, device loss/failure doesn't lose email. POP3: if device dies, mail lost (unless 'leave on server' enabled). (5) BANDWIDTH - fetch only what's needed. POP3: downloads all messages. Tradeoff: IMAP requires server storage quota, POP3 frees server space. Modern recommendation: IMAP for flexibility.",
            "formula": "IMAP: multi-device, server organization/backup"
        }
    },
    {
        "id": "net3-email-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "MIME is used with SMTP to:",
        "options": [
            "Authenticate sender",
            "Encrypt mail",
            "Compress mail",
            "Send non-ASCII data (images, audio, video)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "MIME (Multipurpose Internet Mail Extensions): Standard extending SMTP to support NON-ASCII content. Original SMTP: only 7-bit ASCII text (a-z, 0-9, basic punctuation). MIME enables: (1) ATTACHMENTS - images, audio, video, PDFs, executables encoded as text (Base64), (2) HTML EMAIL - formatted text, colors, fonts, embedded images, (3) MULTIPLE PARTS - multipart/mixed (attachments), multipart/alternative (text + HTML versions), (4) NON-LATIN SCRIPTS - UTF-8 encoding for international characters (Arabic, Chinese, emoji). MIME headers: (1) MIME-Version: 1.0, (2) Content-Type: text/html; charset=UTF-8, image/jpeg, audio/mp3, application/pdf, multipart/mixed, (3) Content-Transfer-Encoding: base64, quoted-printable, 7bit. Modern email is SMTP + MIME. Security: malware often delivered as MIME attachments, email clients scan/block dangerous types. Similar concept: HTTP also uses MIME types for web content.",
            "formula": "MIME: extends SMTP, attachments/HTML/non-ASCII"
        }
    },
    {
        "id": "net3-ftp-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP uses ports:",
        "options": [
            "25 and 110",
            "21 (control) and 20 (data)",
            "443 only",
            "80 only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP (File Transfer Protocol): Uses TWO ports - OUT-OF-BAND control model. Port 21: CONTROL connection - persistent TCP connection for commands (USER, PASS, LIST, RETR, STOR, CWD, QUIT) and server responses (status codes: 150, 200, 226, 550). Stays open entire session. Port 20: DATA connection - separate TCP connection for actual file transfers and directory listings. Created per transfer, then closed. Active mode: server port 20 initiates connection to client's data port. Passive mode (PASV): client initiates data connection to server's ephemeral port - preferred for NAT/firewall traversal. Secure alternatives: FTPS (FTP over TLS, explicit/implicit), SFTP (SSH File Transfer, port 22 - different protocol entirely, not FTP-based).",
            "formula": "FTP: 21 (control), 20 (data), out-of-band"
        }
    },
    {
        "id": "net3-ftp-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP is __ protocol (in-band/out-of-band):",
        "options": [
            "Out-of-band (separate control and data)",
            "Neither",
            "In-band",
            "Both"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FTP Out-of-Band Control: Uses SEPARATE connections for control (commands/responses on port 21) and data (file transfers on port 20). Control and data are 'out-of-band' - transmitted over independent channels. Advantages: (1) can send commands during file transfer (abort, status), (2) different connection management for control (persistent) vs data (transient), (3) load distribution. Contrast with IN-BAND protocols: HTTP - requests, headers, and content all on same connection (port 80/443). Control 'in-band' with data. Out-of-band: FTP, SIP (VoIP signaling). In-band: HTTP, SMTP. Out-of-band can complicate firewalls/NAT - must open multiple ports. FTP passive mode addresses this by having client initiate both connections.",
            "formula": "FTP: out-of-band (sep. control & data)"
        }
    },
    {
        "id": "net3-ftp-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP control connection is:",
        "options": [
            "Connectionless",
            "Non-persistent",
            "Persistent (stays open during session)",
            "UDP-based"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FTP Control Connection: PERSISTENT - established at session start (client connects to server port 21), remains open throughout entire FTP session (multiple file transfers), closed only when client sends QUIT or disconnects. Used for all commands and server responses. Persistence allows stateful session - server remembers current directory, authentication, transfer mode. DATA connection: NON-PERSISTENT - separate TCP connection created for each file transfer or directory listing (LIST), closed after transfer completes. New data connection for each operation. Control persistence simplifies protocol - client doesn't re-authenticate for each file. Similar to HTTP/1.1 persistent connections (Connection: keep-alive), but FTP pioneered this model earlier.",
            "formula": "FTP control: persistent. Data: per-transfer."
        }
    },
    {
        "id": "net3-ftp-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP is a __ protocol:",
        "options": [
            "Stateless",
            "Stateful",
            "Unreliable",
            "Connectionless"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP: STATEFUL PROTOCOL - server maintains state (context) about client during session. State information: (1) AUTHENTICATION - username/password verified, user logged in, (2) CURRENT WORKING DIRECTORY - CWD command changes directory, server remembers path for subsequent operations, (3) TRANSFER MODE - ASCII vs binary mode setting, (4) DATA CONNECTION TYPE - active vs passive mode. Server must allocate resources per session, track session state. Contrast: STATELESS protocols (HTTP, DNS, SMTP) - each request independent, server doesn't remember previous requests. Advantages of stateful: simpler client commands (e.g., 'RETR file.txt' uses current directory, no need to specify full path every time). Disadvantages: server complexity, resource usage (memory per session), scalability challenges. FTP's statefulness contributed to decline - modern protocols prefer stateless for horizontal scaling.",
            "formula": "FTP: stateful (maintains session context)"
        }
    },
    {
        "id": "net3-http-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP is a __ protocol:",
        "options": [
            "Connection-oriented",
            "Stateful",
            "Stateless",
            "Unreliable"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "HTTP: STATELESS PROTOCOL - each request is self-contained and independent. Server doesn't retain memory of previous requests from same client. Request includes ALL necessary information (URL, headers, auth, cookies). No inherent session concept. Benefits: (1) SIMPLICITY - server logic straightforward, (2) SCALABILITY - stateless enables easy load balancing (any server can handle any request), horizontal scaling, no session synchronization needed, (3) RELIABILITY - server restart doesn't lose client state. Web applications layer statefulness ON TOP using cookies (session IDs), local/session storage, URL parameters. REST API design embraces statelessness. Contrast: FTP, SMTP session, Telnet are stateful - server remembers context. HTTP/1.0 vs HTTP/1.1: both stateless in protocol sense, but HTTP/1.1 adds persistent CONNECTIONS (not state, just reuses TCP).",
            "formula": "HTTP: stateless (request independence)"
        }
    },
    {
        "id": "net3-http-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP 1.0 is:",
        "options": [
            "Persistent",
            "Stateful",
            "UDP-based",
            "Non-persistent"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "HTTP/1.0: NON-PERSISTENT connections - NEW TCP connection created for EACH object (HTML, CSS, image, script). Process: (1) client initiates TCP handshake to server, (2) client sends HTTP request, (3) server sends HTTP response, (4) TCP connection CLOSED. Repeat for every object. For webpage with 10 images: 11 separate TCP connections (HTML + 10 images). Overhead: (1) TCP handshake latency (3-way handshake = 1 RTT before data), (2) TCP slow start for each connection (inefficient), (3) server resources - many connections. Total time for N objects: 2N RTTs (N handshakes + N request/response) + N transmission times. Very inefficient! Led to HTTP/1.1 persistent connections. Non-persistent mode can use parallel TCP connections (browsers open multiple simultaneous connections), but still wasteful. HTTP/1.0 is obsolete.",
            "formula": "HTTP/1.0: non-persistent (1 object per TCP)"
        }
    },
    {
        "id": "net3-http-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP 1.1 is:",
        "options": [
            "Persistent",
            "Unreliable",
            "Non-persistent",
            "Connectionless"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "HTTP/1.1: PERSISTENT connections (default behavior) - single TCP connection REUSED for multiple requests/responses. 'Connection: keep-alive' header (default in 1.1). Process: (1) client opens TCP connection, (2) client sends multiple HTTP requests sequentially or pipelined, (3) server sends multiple responses, (4) connection stays open until timeout or explicit close. Benefits: (1) ELIMINATES handshake overhead - only 1 TCP setup for entire page (HTML + all objects), (2) AVOIDS SLOW START - TCP cwnd grows, later requests benefit from larger window, (3) REDUCED LATENCY - no connection setup delay per object, (4) SERVER EFFICIENCY - fewer socket allocations. Pipelining (optional): send requests without waiting for responses - further reduces latency, but complicates HOL blocking. HTTP/1.1 also added chunked encoding, better caching. Persistent connections dramatically improved web performance over HTTP/1.0.",
            "formula": "HTTP/1.1: persistent (reuse TCP connection)"
        }
    },
    {
        "id": "net3-http-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP is __ protocol (in-band/out-of-band):",
        "options": [
            "Neither",
            "Out-of-band",
            "Both",
            "In-band"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "HTTP: IN-BAND control - requests, responses, headers, and data ALL travel over SAME connection. Request line, headers, and message body (payload) transmitted sequentially on single TCP connection (port 80 or 443). No separate control channel. Client sends 'GET /index.html HTTP/1.1' followed by headers followed by optional body (for POST). Server responds with status line, headers, content - all on same connection. Benefits: simplicity, single port. Contrast: OUT-OF-BAND protocols use SEPARATE channels: (1) FTP - control on port 21, data on port 20, (2) SIP (VoIP) - signaling separate from RTP media streams. Out-of-band: more complex but flexible (can control during data transfer, different QoS for control). In-band: HTTP, SMTP, DNS, Telnet. Modern trend: in-band with multiplexing (HTTP/2 streams, QUIC) for simplicity.",
            "formula": "HTTP: in-band (all on same connection)"
        }
    },
    {
        "id": "net3-dns-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS primarily uses:",
        "options": [
            "Both equally",
            "UDP (port 53)",
            "TCP",
            "Neither"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS Transport: PRIMARILY UDP port 53 for queries and responses. UDP chosen for: (1) Speed - connectionless, low latency; (2) Simplicity - single packet request/response; (3) Stateless - fits DNS design. Original limit: 512 bytes per packet. TCP port 53 used for: (1) ZONE TRANSFERS - AXFR (full) and IXFR (incremental) between primary and secondary nameservers (large datasets, reliable delivery needed); (2) LARGE RESPONSES - when answer exceeds 512 bytes (many records, DNSSEC signatures), UDP response has TC (Truncated) bit set, client retries over TCP; (3) SECURITY - DNS-over-TLS (DoT, port 853), DNS-over-HTTPS (DoH, port 443). Modern extension: EDNS0 allows larger UDP packets (up to 4096 bytes), reducing TCP fallback. Query: Use UDP first. If truncated, retry TCP.",
            "formula": "DNS: UDP 53 (queries), TCP 53 (zone/large)"
        }
    },
    {
        "id": "net3-dns-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS is a __ protocol:",
        "options": [
            "Stateless",
            "Non-persistent",
            "Stateful",
            "Persistent"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "DNS: STATELESS protocol - each query is independent, server doesn't remember previous queries from client. Query contains all information needed (domain name, query type A/AAAA/MX). No session. Server replies, transaction ends. Benefits: simplicity, scalability (any DNS server can answer any query from any client), reliability. Caching adds pseudo-state: resolver caches responses based on TTL (Time To Live), but this is local optimization, not protocol state. Subsequent queries for same domain may hit cache (no server query needed) until TTL expires. However, protocol itself remains stateless - cached or not, each query is isolated transaction. Contrast: FTP maintains session state. DNS queries: fire-and-forget (typically UDP, connectionless). Statelessness crucial for DNS's massive scale and distributed architecture.",
            "formula": "DNS: stateless (independent queries, caching)"
        }
    },
    {
        "id": "net3-port-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Telnet uses port:",
        "options": [
            "21",
            "25",
            "23",
            "22"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Telnet: Port 23 (TCP). Legacy protocol for remote terminal access - connects to remote host and provides command-line interface. User types commands, sent to server, output displayed locally. Originally widespread for remote server administration. MAJOR FLAW: transmits ALL data (including username/password) in PLAINTEXT - no encryption, vulnerable to eavesdropping and MITM attacks. Replaced by SSH (Secure Shell, port 22) which provides ENCRYPTED remote access with strong authentication (password or public-key). SSH is modern standard for secure remote login. Telnet still used: (1) IoT device configuration (local networks), (2) testing TCP services manually (e.g., 'telnet smtp.server.com 25' to test SMTP), (3) legacy embedded systems. Production use: NEVER use Telnet over internet - always SSH. Telnet insecurity is textbook example of why encryption is essential.",
            "formula": "Telnet: port 23, plaintext, insecure (use SSH)"
        }
    },
    {
        "id": "net3-port-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Match: Which is NOT a correct port assignment?",
        "options": [
            "SSH-22",
            "DNS-53",
            "SMTP-110",
            "HTTP-80"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Port Assignment Verification: (1) HTTP: port 80 - correct, standard web traffic, (2) SSH: port 22 - correct, secure shell, (3) DNS: port 53 - correct, domain name system. (4) SMTP: port 110 - INCORRECT! SMTP (Simple Mail Transfer Protocol, email sending) uses port 25, NOT 110. Port 110 is POP3 (Post Office Protocol v3, email retrieval). Common confusion: both are email-related. SMTP = outbound/send (25), POP3 = inbound/retrieve (110), IMAP = inbound/retrieve advanced (143). Remember: twenty-five for sending mail (SMTP), one-ten for popping mail (POP3). Mnemonic: SMTP Send = 25, POP Pull = 110. Other email: port 587 (SMTP submission with auth), 465 (legacy SMTPS), 143 (IMAP), 993 (IMAPS), 995 (POP3S).",
            "formula": "SMTP=25 (not 110). POP3=110, IMAP=143."
        }
    },
    {
        "id": "net3-prop-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Which protocols are stateful?",
        "options": [
            "HTTP, DNS",
            "FTP, POP3, IMAP",
            "SMTP, HTTP",
            "DNS, SMTP"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Protocol Statefulness: STATEFUL protocols maintain session context/state on server between requests. (1) FTP - server remembers current directory, authentication, transfer settings during session. (2) POP3 - server tracks authorization phase, which messages marked for deletion. (3) IMAP - server maintains folder selections, search context, flags. (4) Telnet/SSH - server maintains terminal state, command history context. STATELESS protocols treat each request independently. (1) HTTP - each request contains all needed info, no session memory (cookies add state at application layer). (2) DNS - each query independent, no session. (3) SMTP - each mail transaction independent (though SMTP session has phases, each mail is isolated). Tradeoff: Stateful = simpler client, complex server, scalability challenges. Stateless = complex client, simple server, horizontal scaling easy. Modern trend: stateless with client-side state management.",
            "formula": "Stateful: FTP, POP3, IMAP. Stateless: HTTP, DNS, SMTP"
        }
    },
    {
        "id": "net3-prop-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Which uses UDP as transport?",
        "options": [
            "SMTP",
            "HTTP",
            "DNS",
            "FTP"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "UDP Transport Protocol Usage: DNS is the PRIMARY application-layer protocol using UDP (User Datagram Protocol, port 53). UDP characteristics: connectionless, unreliable (no ACKs, retransmission), unordered, low overhead. DNS uses UDP because: (1) queries/responses typically small (<512 bytes originally), fit single packet; (2) speed critical for frequent lookups; (3) application handles retransmission if needed (client timeout, resend query). Other UDP applications: DHCP (67/68), TFTP (69), SNMP (161), NTP (123), VoIP/RTP (variable), online gaming. Most listed use TCP: (1) HTTP (80) - reliable transfer needed for web pages. (2) FTP (20/21) - file integrity critical. (3) SMTP (25) - mail delivery requires reliability. (4) SSH (22) - interactive session, ordering essential. General rule: reliability/ordering needed → TCP. Speed/low overhead → UDP. DNS straddles both (UDP primary, TCP fallback).",
            "formula": "DNS: UDP (53). HTTP/FTP/SMTP/SSH: TCP."
        }
    },
    {
        "id": "net-phy-004",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Bandwidth 4KHz, SNR = 255. Shannon capacity (Kbps) = ?",
        "correctAnswer": 32,
        "tolerance": 0,
        "explanation": {
            "solution": "Shannon Capacity Theorem: Maximum theoretical bit rate over noisy channel. Formula: $C = B \\log_2(1 + SNR)$ where C = capacity (bps), B = bandwidth (Hz), SNR = Signal-to-Noise Ratio (linear, not dB). Given: B = 4 KHz = 4000 Hz, SNR = 255. Calculation: $C = 4000 \\times \\log_2(1 + 255) = 4000 \\times \\log_2(256) = 4000 \\times 8 = 32000$ bps = 32 Kbps. Note: $\\log_2(256) = 8$ because $2^8 = 256$. Shannon's theorem provides UPPER BOUND - no practical coding scheme can exceed this limit given the noise. If SNR in dB: convert to linear using $SNR_{linear} = 10^{SNR_{dB}/10}$. Perfect channel (SNR → ∞): C → ∞. No bandwidth (B=0): C = 0.",
            "formula": "$C = B \\log_2(1 + SNR)$"
        }
    },
    {
        "id": "net-phy-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Manchester encoding has efficiency:",
        "options": [
            "50%",
            "200%",
            "25%",
            "100%"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Manchester Encoding: Line coding combining data and clock - every bit has MID-BIT TRANSITION (self-clocking). Encoding: 0 = high-to-low transition, 1 = low-to-high transition (IEEE 802.3 convention, opposite in Thomas convention). Efficiency = 50% because BAUD RATE (signal changes/sec) = 2 × BIT RATE. To transmit 1 Mbps data, need 2 Mbaud signaling rate. Each bit period requires 2 signal levels. Formula: $\\eta = \\frac{\\text{Bit Rate}}{\\text{Baud Rate}} = \\frac{R}{2R} = 50\\%$. Advantages: (1) self-clocking - easy synchronization, (2) no DC component - can use AC-coupled transmission, (3) error detection - missing transition indicates error. Disadvantage: double bandwidth requirement. Used in: Ethernet 10BASE-T, RFID, NFC. Diff. Manchester: XOR with previous to get transitions.",
            "formula": "$\\eta = 50\\%$ (baud = 2 × bit rate)"
        }
    },
    {
        "id": "net-phy-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "NRZ-L uses:",
        "options": [
            "No signal",
            "Transition for bit value",
            "Differential",
            "Level for bit value"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "NRZ-L (Non-Return-to-Zero Level): Line coding scheme using signal LEVEL to represent bit value. Encoding: positive voltage = binary 1, negative voltage = binary 0 (or vice versa, convention varies). 'Non-Return-to-Zero' means signal doesn't return to zero voltage between bits - stays at previous level if consecutive identical bits. 'Level' indicates bit value determined by voltage level, not transitions. Simple implementation, 100% bandwidth efficiency (baud rate = bit rate). Disadvantages: (1) SYNCHRONIZATION LOSS - long strings of identical bits have no transitions, receiver clock drift, (2) DC COMPONENT - average non-zero, problematic for AC-coupled channels. Solutions: scrambling, encoding (Manchester). Contrast: NRZ-I (Invert) uses TRANSITION for 1, no transition for 0. NRZI better for synchronization. Used in: USB (NRZI), RS-232.",
            "formula": "NRZ-L: level encodes bit (high=1, low=0)"
        }
    },
    {
        "id": "net-dll-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Framing is done at:",
        "options": [
            "Physical layer",
            "Transport layer",
            "Data Link layer",
            "Network layer"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Framing: DATA LINK LAYER (Layer 2) function - encapsulates Network Layer packets into FRAMES for physical transmission. Frame = header + payload (packet) + trailer. Purpose: (1) DELIMITATION - identify frame boundaries in bit stream, (2) ADDRESSING - MAC addresses (source/destination), (3) ERROR DETECTION - CRC/checksum in trailer, (4) FLOW CONTROL - windowing, (5) PROTOCOL INFO - frame type, length. Framing methods: (1) CHARACTER COUNT - header specifies length (error-prone), (2) FLAG BYTES - special start/end delimiters (byte stuffing for data), (3) BIT-LEVEL FLAGS - HDLC uses 01111110, bit stuffing, (4) PHYSICAL LAYER VIOLATIONS - signal encoding violations mark boundaries. Without framing, receiver can't distinguish frames in continuous bit stream. Frames passed to Physical Layer as raw bits. Network Layer deals with packets (logical), DLL with frames (link-specific).",
            "formula": "DLL: packets → frames (encapsulation)"
        }
    },
    {
        "id": "net-dll-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Bit stuffing is used in:",
        "options": [
            "Flag-based framing (e.g., HDLC)",
            "Length-based",
            "None",
            "Character stuffing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Bit Stuffing: Technique for FLAG-BASED framing (HDLC, PPP) to prevent data containing flag pattern. HDLC flag: 01111110 (6 consecutive 1s). Problem: what if payload data contains 01111110? Receiver would mistake it for frame boundary. Solution: SENDER inserts a 0 bit after every sequence of FIVE consecutive 1s in data (never allowing six 1s except flags). RECEIVER removes stuffed 0s after five 1s. Example: data 011111011 becomes 0111110011 (0 inserted after 5 ones). Flag bits remain 01111110 unchanged (only appears at boundaries). Overhead: depends on data pattern, worst case ~12.5%. Ensures TRANSPARENCY - any bit pattern can be transmitted without confusion with control sequences. Contrast: CHARACTER stuffing for byte-oriented framing (escape characters). Bit stuffing more efficient, protocol-independent at bit level. Used in: HDLC, PPP, SONET.",
            "formula": "Bit stuffing: insert 0 after five 1s (not flags)"
        }
    },
    {
        "id": "net-dll-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "CRC detects:",
        "options": [
            "Both burst and bit errors",
            "Only single-bit",
            "All odd-bit errors",
            "Nothing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CRC (Cyclic Redundancy Check): Powerful polynomial-based error DETECTION code. Sender: treats data as polynomial, divides by generator polynomial $G(x)$ (degree $r$), appends REMAINDER (r bits) as checksum. Receiver: divides received data+checksum by same $G(x)$ - remainder 0 = no error. CRC DETECTS (guarantee 100%): (1) ALL SINGLE-BIT ERRORS, (2) ALL DOUBLE-BIT ERRORS (if $G(x)$ has factor $x+1$), (3) ALL ODD number of bit errors (if $G(x)$ has factor $x+1$), (4) ALL BURST ERRORS of length ≤ $r$ (degree of generator), (5) Most longer bursts. Does NOT correct errors, only detects. Common standards: CRC-8, CRC-16, CRC-32 (Ethernet, ZIP). Far superior to simple checksum (XOR) or parity. Implementation: shift registers, very efficient in hardware. Used in: Ethernet, USB, storage devices, networking.",
            "formula": "CRC: detects all single, odd-bit, burst≤r"
        }
    },
    {
        "id": "net-dll-004",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "CRC with generator polynomial of degree 5. Checksum bits = ?",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "CRC Checksum Size: Number of CRC bits = DEGREE of generator polynomial $G(x)$. Generator polynomial of degree $r$ produces $r$-bit remainder. Example: $G(x) = x^5 + x^2 + 1$ (degree 5) → 5 checksum bits appended to data. Why? Polynomial division by degree-$r$ divisor produces degree-$(r-1)$ or smaller remainder, represented by $r$ bits. Higher degree = better error detection but more overhead. Common: CRC-1 (parity, degree 1), CRC-8 (degree 8), CRC-16 (degree 16, 99.998% detection), CRC-32 (degree 32, Ethernet/ZIP, extremely reliable). Tradeoff: overhead vs detection capability. For this question: degree 5 generator → 5 checksum bits. Total transmitted = data bits + 5 CRC bits. Receiver checks: (data + CRC) mod G(x) = 0?",
            "formula": "CRC bits = degree of $G(x)$"
        }
    },
    {
        "id": "net-dll-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Hamming distance for correcting t errors:",
        "options": [
            "t",
            "2t",
            "t+1",
            "2t+1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Hamming Distance for ERROR CORRECTION: Minimum Hamming distance $d_{min}$ required to CORRECT up to $t$ errors = $2t + 1$. Intuition: to correct $t$ errors, need to distinguish corrupted codeword (≤$t$ bits flipped) from all other valid codewords. With $d_{min} = 2t+1$, even with $t$ errors, corrupted codeword is still closer to original than to any other valid codeword (distance ≤$t$ vs >$t$). Example: single error correction ($t=1$) requires $d_{min} ≥ 3$. Valid codewords differ by at least 3 bits. If 1 bit flips, result is distance 1 from original, distance ≥2 from others - can uniquely identify original. Formula: $d_{min} ≥ 2t + 1$ for CORRECTION. Contrast: DETECTION only needs $d_{min} ≥ t + 1$. Hamming codes, Reed-Solomon use this principle. Correction needs more redundancy than detection.",
            "formula": "$d_{min} \\geq 2t+1$ (correct $t$ errors)"
        }
    },
    {
        "id": "net-dll-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Hamming distance for detecting t errors:",
        "options": [
            "2t",
            "t",
            "2t+1",
            "t+1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Hamming Distance for ERROR DETECTION: Minimum Hamming distance $d_{min}$ required to DETECT up to $t$ errors = $t + 1$. Intuition: to detect $t$ errors, any valid codeword must differ from every other valid codeword by MORE than $t$ bits. If $d_{min} = t+1$ and ≤$t$ bits flip, result is not a valid codeword - error detected. But can't determine which valid codeword was original - detection only, not correction. Example: single error detection ($t=1$) requires $d_{min} ≥ 2$. Simple parity bit achieves this: even vs odd parity differ by 1 bit, any single flip changes parity (detected). If $d_{min} = t+2$, can detect $t$ errors OR correct $\\lfloor t/2 \\rfloor$ errors. Formula: $d_{min} ≥ t+1$ for DETECTION. CRC, checksums, parity are detection codes. Less redundancy needed than correction.",
            "formula": "$d_{min} \\geq t+1$ (detect $t$ errors)"
        }
    },
    {
        "id": "net-dll-007",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Hamming code for 4 data bits needs ___ parity bits:",
        "correctAnswer": 3,
        "tolerance": 0,
        "explanation": {
            "solution": "Hamming Code Parity Bits: For $m$ data bits, number of parity bits $r$ must satisfy $2^r ≥ m + r + 1$. Reason: $r$ parity bits can represent $2^r$ distinct syndromes. Need to encode: (1) NO ERROR (1 syndrome), (2) error in any of $m$ data bit positions, (3) error in any of $r$ parity bit positions. Total: $1 + m + r$ states, so $2^r ≥ m + r + 1$. For $m=4$ data bits: Try $r=2$: $2^2 = 4 < 4+2+1 = 7$ ✗. Try $r=3$: $2^3 = 8 ≥ 4+3+1 = 8$ ✓. Need 3 parity bits. Total codeword: 4 + 3 = 7 bits. Parity bits at positions $2^0=1, 2^1=2, 2^2=4$. Each parity bit covers specific positions based on binary representation. Can correct single-bit errors. Extended Hamming can detect 2-bit errors. Used in: ECC RAM, satellite communication.",
            "formula": "$2^r \\geq m+r+1$ (m data, r parity)"
        }
    },
    {
        "id": "net-arq-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Stop-and-wait efficiency formula:",
        "options": [
            "a/(1+a)",
            "1/(1+a)",
            "1/(1+2a)",
            "1/a"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Stop-and-Wait Efficiency: Sender transmits ONE frame, waits for ACK before next - simplest ARQ protocol. Define: $a = T_p / T_t$ where $T_p$ = propagation delay (one-way), $T_t$ = transmission time (frame duration). Efficiency $\\eta = \\frac{\\text{useful time}}{\\text{total cycle time}} = \\frac{T_t}{T_t + 2T_p} = \\frac{T_t}{T_t(1 + 2a)} = \\frac{1}{1+2a}$. High $a$ (long distance or small frames) → low efficiency, much idle time waiting. For $a=1$ (Tp=Tt): only 33% efficient. For $a$ >> 1: approaches 0%. Improved by pipelining (Go-Back-N, Selective Repeat). Stop-and-wait simple but wasteful for high bandwidth-delay product links (satellite, high-speed networks). Used when: low bandwidth-delay, simplicity valued, or half-duplex channels.",
            "formula": "$\\eta = \\frac{1}{1+2a}$ where $a = T_p/T_t$"
        }
    },
    {
        "id": "net-arq-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Stop-and-wait: Tp = 100ms, Tt = 50ms. Efficiency (%) = ?",
        "correctAnswer": 20,
        "tolerance": 1,
        "explanation": {
            "solution": "Stop-and-Wait Efficiency Calculation: Given $T_p = 100$ ms (propagation delay), $T_t = 50$ ms (transmission time). Compute $a = T_p/T_t = 100/50 = 2$. Efficiency $\\eta = \\frac{1}{1+2a} = \\frac{1}{1+2(2)} = \\frac{1}{1+4} = \\frac{1}{5} = 0.2 = 20\\%$. Interpretation: sender spends 50 ms transmitting, then 200 ms idle (100 ms for ACK to arrive, 100 ms for next frame's first bit to reach receiver). Only 50 ms of 250 ms cycle is useful = 20%. This is VERY inefficient - 80% idle time! Solution: pipelining (send multiple frames before waiting for ACK). For $a=2$, to achieve near 100% efficiency with Go-Back-N, window size should be $W ≥ 1+2a = 5$ frames.",
            "formula": "$a=2, \\eta = 1/5 = 20\\%$"
        }
    },
    {
        "id": "net-arq-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Go-Back-N maximum window size with n-bit sequence number:",
        "options": [
            "n",
            "2ⁿ-1",
            "2ⁿ",
            "2^(n-1)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Go-Back-N Maximum Window Size: With $n$-bit sequence numbers, maximum sender window size $W_{max} = 2^n - 1$. Reason: avoid AMBIGUITY between old and new frames. Sequence numbers wrap around modulo $2^n$. If $W = 2^n$, scenario: sender transmits frames 0 to $2^n-1$, all ACKs lost, sender retransmits. Receiver (expecting frame 0 of next cycle) can't distinguish retransmitted frame 0 (old) from new frame 0. SOLUTION: limit $W ≤ 2^n - 1$. At most $2^n-1$ unACKed frames. Example: $n=3$ bits (seq 0-7), $W_{max}=7$. Sender can have frames 0-6 outstanding. If all lost and retransmitted, receiver at frame 7 knows these are old. GBN retransmits ALL frames after lost one, even if received correctly. Simple receiver (only accepts in-order). Used in: HDLC, older protocols. Selective Repeat has smaller window but more complex.",
            "formula": "$W_{max} = 2^n - 1$ (Go-Back-N)"
        }
    },
    {
        "id": "net-arq-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Selective Repeat maximum window size with n-bit sequence number:",
        "options": [
            "n",
            "2ⁿ",
            "2ⁿ-1",
            "2^(n-1)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Selective Repeat Maximum Window Size: With $n$-bit sequence numbers, maximum window size $W_{max} = 2^{n-1}$ for BOTH sender and receiver. Reason: prevent overlap between sender's window and receiver's acceptance window. Sequence space $2^n$, but windows at sender and receiver each of size $W$. Worst case: all ACKs delayed, sender and receiver windows maximally separated. To avoid ambiguity (old frame accepted as new or vice versa), require $2W ≤ 2^n$, thus $W ≤ 2^{n-1}$. Example: $n=3$ bits, $W_{max}=2^2=4$. Sender window frames 0-3, receiver window expecting 0-3. If frame 0 lost and ACKs delayed, when sender retransmits frame 0, receiver won't confuse it with frame 0 of next cycle (would be ≥4). SR retransmits ONLY lost frames, buffers out-of-order. Higher efficiency than GBN but complex receiver. Used in: TCP (modified), modern protocols.",
            "formula": "$W_{max} = 2^{n-1}$ (Selective Repeat)"
        }
    },
    {
        "id": "net-arq-005",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "GBN with 4-bit sequence. Max window = ?",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "Go-Back-N Window Calculation: Given $n = 4$ bit sequence numbers. Formula: $W_{max} = 2^n - 1 = 2^4 - 1 = 16 - 1 = 15$ frames. Sequence numbers: 0, 1, 2, ..., 15 (wraps to 0). Sender can have up to 15 outstanding (unACKed) frames simultaneously. Why not 16? If sender transmits frames 0-15 and all ACKs lost, when it retransmits frame 0, receiver (expecting frame 0 of next cycle, at seq 0) can't distinguish new from old. Limiting to 15 prevents this ambiguity. GBN advantage: simple receiver (only buffer for next expected frame). Disadvantage: retransmits already-correct frames if one is lost. For high-error channels, wasteful. Most modern protocols use Selective Repeat instead.",
            "formula": "$2^4 - 1 = 15$"
        }
    },
    {
        "id": "net-arq-006",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "SR with 4-bit sequence. Max window = ?",
        "correctAnswer": 8,
        "tolerance": 0,
        "explanation": {
            "solution": "Selective Repeat Window Calculation: Given $n = 4$ bit sequence numbers. Formula: $W_{max} = 2^{n-1} = 2^{4-1} = 2^3 = 8$ frames. Both sender and receiver windows limited to 8. Sequence numbers: 0-15. At any time, sender can have 8 outstanding frames, receiver can accept 8 frames (within window). Why half? To prevent sender and receiver window overlap causing ambiguity. If both windows size 8, they partition the sequence space (16 total) into two non-overlapping halves. Example: sender transmits 0-7, receiver ACKs, sender advances to 8-15. Even if ACKs delayed, no confusion between old and new frames. SR efficiency: retransmits only lost frames, receiver buffers out-of-order arrivals. Best for lossy links. Complexity: receiver buffering, sequence number management. TCP uses modified SR.",
            "formula": "$2^3 = 8$"
        }
    },
    {
        "id": "net-mac-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "CSMA/CD stands for:",
        "options": [
            "Cyclic Sense Multiple Access",
            "Central Station Multiple Access",
            "Carrier Sense Multiple Access / Collision Detection",
            "None"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CSMA /CD (Carrier Sense Multiple Access with Collision Detection): Ethernet's MAC protocol for shared medium (bus/hub). CARRIER SENSE: Listen before transmit - if channel busy, defer. Reduces collisions vs pure ALOHA. MULTIPLE ACCESS: Many devices share channel. COLLISION DETECTION: While transmitting, monitor for collision (signal from another station). If detected, ABORT transmission, send jam signal (48 bits, alert others), wait random backoff (exponential), retry. CD improves efficiency over CSMA (no CD) - don't waste time transmitting full frame after collision. Only works on: wired media (Ethernet), can't detect collision on wireless (signal attenuation, hidden terminal). Wireless uses CSMA/CA (Collision Avoidance, RTS/CTS). Minimum frame size ensures collision detected before transmission ends. Obsolete with switches (full-duplex, no collisions), but foundational concept.",
            "formula": "CSMA/CD: sense+detect, Ethernet wired"
        }
    },
    {
        "id": "net-mac-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "CSMA/CD minimum frame size ensures:",
        "options": [
            "Large payload",
            "Collision detection before frame ends",
            "Fast transmission",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CSMA/CD Minimum Frame Size: Frame must be large enough to ensure collision detected BEFORE transmission completes. Constraint: $T_{transmission} ≥ 2 \\times T_{propagation}$ (RTT = Round-Trip Time). Why? Worst case: station A starts transmitting, signal propagates toward station B (max distance away). Just before A's signal arrives, B starts transmitting (didn't sense A's carrier yet). Collision occurs at B. Collision signal propagates back to A. Total time for A to detect = 2 × propagation delay (A→B→A). If A finishes transmitting before collision signal returns, A won't know collision occurred. Formula: $Frame_{min} = Bandwidth \\times RTT = Bandwidth \\times (2 \\times Distance / Speed)$. Ethernet: 64 bytes min (512 bits for 10Mbps, 2.5km max). Too-small frames are collisions undetected. Padding added if payload < minimum.",
            "formula": "$Frame_{min} = BW \\times 2T_p$"
        }
    },
    {
        "id": "net-mac-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Ethernet 10Mbps, max distance 2.5km, propagation speed 2×10⁸ m/s. Min frame size (bits) = ?",
        "correctAnswer": 250,
        "tolerance": 10,
        "explanation": {
            "solution": "CSMA/CD Min Frame Calculation: Given bandwidth = 10 Mbps, max distance = 2.5 km = 2500 m, propagation speed = $2 \\times 10^8$ m/s. (1) Compute one-way propagation delay: $T_p = Distance/Speed = 2500/(2 \\times 10^8) = 12.5 \\mu s$. (2) Compute RTT: $RTT = 2 \\times T_p = 2 \\times 12.5 = 25 \\mu s$. (3) Minimum frame size: $Frame_{min} = Bandwidth \\times RTT = 10 \\times 10^6 \\times 25 \\times 10^{-6} = 250$ bits = 31.25 bytes. For collision detection, frame transmission time must ≥ RTT. If frame < 250 bits, station might finish transmitting before detecting collision. Actual Ethernet uses 64 bytes (512 bits) minimum for 10 Mbps, 2.5 km to account for safety margin and interframe gap. This is fundamental CSMA/CD constraint.",
            "formula": "$RTT=25\\mu s, Frame=10M \\times 25\\mu s=250$ bits"
        }
    },
    {
        "id": "net-mac-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Token Ring uses:",
        "options": [
            "Slotted ALOHA",
            "Token passing",
            "CSMA/CD",
            "Polling"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Token Ring: Deterministic MAC protocol using TOKEN PASSING. Stations connected in logical ring topology. Special token frame circulates continuously. Rules: (1) Only token holder can transmit data, (2) After transmission (or if no data), station releases token to next, (3) Others wait for token. NO COLLISIONS - deterministic access, unlike CSMA/CD. Advantages: (1) FAIR - guaranteed access within maximum time (token rotation time), (2) PREDICTABLE performance under high load, (3) PRIORITY mechanisms possible. Disadvantages: (1) token overhead, (2) single point of failure (token loss, broken ring), (3) complex maintenance (token regeneration). Variants: Token Ring (IEEE 802.5, IBM, 4/16 Mbps), Token Bus, FDDI (Fiber). Largely replaced by Ethernet switches (full-duplex, no contention). Historical importance in understanding MAC diversity.",
            "formula": "Token Ring: token passing, deterministic"
        }
    },
    {
        "id": "net-mac-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Pure ALOHA maximum throughput:",
        "options": [
            "36.8%",
            "100%",
            "50%",
            "18.4%"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Pure ALOHA Maximum Throughput: Simplest random access protocol - transmit whenever data ready, NO carrier sensing. If collision (detected via ACK timeout), wait random time, retransmit. Vulnerable period = $2 \\times$ frame time (collision if any other station transmits during [ $t-T_f$, $t+T_f$ ] where $T_f$ = frame transmission time). Throughput analysis (Poisson traffic, $G$ = offered load): $S = G \\times e^{-2G}$. Maximum: differentiate, set to 0, get $G_{opt} = 0.5$. $S_{max} = 0.5 \\times e^{-1} = 1/(2e) ≈ 0.184 = 18.4\\%$. Only 18.4% of time used successfully! Very wasteful. Used in: early radio networks (ALOHAnet, Hawaii, 1970s), satellite. Improved by slotting. Modern: rarely used, but conceptually important for understanding contention.",
            "formula": "$S_{max} = 1/(2e) ≈ 18.4\\%$"
        }
    },
    {
        "id": "net-mac-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Slotted ALOHA maximum throughput:",
        "options": [
            "50%",
            "36.8%",
            "100%",
            "18.4%"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Slotted ALOHA Maximum Throughput: Improved ALOHA - time divided into DISCRETE SLOTS (each = frame transmission time). Stations synchronized, can only transmit at slot boundaries. Reduces vulnerable period: collision ONLY if two stations transmit in SAME slot (vs pure ALOHA: collision if transmit within 2 frame times). Vulnerable period = $1 \\times$ frame time (vs 2 for pure). Throughput: $S = G \\times e^{-G}$. Maximum: differentiate, $G_{opt} = 1$, $S_{max} = 1 \\times e^{-1} = 1/e ≈ 0.368 = 36.8\\%$. DOUBLE the throughput of pure ALOHA! Still wasteful (63% collisions/idle at peak). Advantages over pure: better efficiency, simpler analysis. Disadvantages: requires synchronization. Used in: early satellite systems, GSM random access. Modern contention protocols (CSMA/CD/CA) far superior.",
            "formula": "$S_{max} = 1/e ≈ 36.8\\%$"
        }
    },
    {
        "id": "net-nl-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "IPv4 address is:",
        "options": [
            "16 bits",
            "64 bits",
            "32 bits",
            "128 bits"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "IPv4 Address Size: 32 bits (4 bytes) total. Notation: dotted-decimal - four octets (8 bits each) separated by dots. Example: 192.168.1.1 = 11000000.10101000.00000001.00000001 (binary). Address space: $2^{32} = 4,294,967,296$ addresses (≈4.3 billion). Originally designed for classful addressing (Class A/B/C/D/E), now classless (CIDR). Each octet: 0-255 decimal. Network portion + host portion determined by subnet mask. IPv4 exhaustion: addresses depleted (2011), driving IPv6 adoption. Mitigation: NAT (private addresses), CIDR (efficient allocation). Special addresses: 0.0.0.0 (default route), 127.0.0.1 (loopback), 255.255.255.255 (broadcast), private ranges (10.x, 172.16-31.x, 192.168.x). IPv4 header: 20-60 bytes, includes TTL, protocol, checksum.",
            "formula": "IPv4: 32 bits = 4 bytes, dotted-decimal"
        }
    },
    {
        "id": "net-nl-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "IPv6 address is:",
        "options": [
            "256 bits",
            "128 bits",
            "32 bits",
            "64 bits"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "IPv6 Address Size: 128 bits total - FOUR TIMES larger than IPv4's 32 bits. Notation: colon-hexadecimal - eight groups of 4 hex digits (16 bits each) separated by colons. Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Shorthand rules: (1) omit leading zeros: 0042 → 42, (2) consecutive zero groups → '::' (once only): 2001:0db8::8a2e:0370:7334. Address space: $2^{128} = 3.4 \\times 10^{38}$ addresses - VAST, effectively unlimited (≈$10^{28}$ addresses per person). Designed to: (1) solve IPv4 exhaustion, (2) simplify routing (hierarchical allocation), (3) improve security (IPsec mandatory), (4) eliminate NAT need. No broadcast (uses multicast). IPv6 header: fixed 40 bytes, simpler than IPv4. Adoption growing but still < 50% globally. Dual-stack, tunneling, translation for coexistence.",
            "formula": "IPv6: 128 bits, colon-hex, $2^{128}$ addresses"
        }
    },
    {
        "id": "net-nl-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "/24 subnet. Number of usable host addresses = ?",
        "correctAnswer": 254,
        "tolerance": 0,
        "explanation": {
            "solution": "Usable Hosts in /24 Subnet: /24 means 24-bit network prefix, leaving $32 - 24 = 8$ bits for host portion. Total addresses: $2^8 = 256$. However, 2 addresses RESERVED: (1) NETWORK ADDRESS - all host bits = 0 (e.g., 192.168.1.0 for 192.168.1.0/24), identifies the subnet itself, (2) BROADCAST ADDRESS - all host bits = 1 (e.g., 192.168.1.255), sends to all hosts in subnet. USABLE host addresses: $2^8 - 2 = 256 - 2 = 254$. Range: 192.168.1.1 to 192.168.1.254 (if network is 192.168.1.0/24). Formula: $Hosts = 2^{host_bits} - 2 = 2^{(32-prefix)} - 2$. Applies to ALL subnet sizes: /8 → 16,777,214 hosts, /16 → 65,534, /30 → 2 (point-to-point links), /31 → 0 usable (special case for p2p, RFC 3021 allows 2), /32 → single host.",
            "formula": "$2^{(32-24)} - 2 = 254$ usable hosts"
        }
    },
    {
        "id": "net-nl-004",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "/28 subnet. Total addresses (including network and broadcast) = ?",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "/28 Subnet Total Addresses: /28 prefix means 28 network bits, $32 - 28 = 4$ host bits remaining. Total addresses in subnet (including network and broadcast): $2^4 = 16$ addresses. Breakdown: (1) 1 network address (all host bits 0), (2) 14 usable host addresses (host bits 0001 to 1110), (3) 1 broadcast address (all host bits 1). Example: 192.168.1.16/28 contains 192.168.1.16 (network) to 192.168.1.31 (broadcast). Usable: .17 to .30. /28 commonly used for small subnets (office floor, VLAN). Subnet mask: 255.255.255.240 (binary: 28 ones, 4 zeros). Address range calculation: network address + [0, $2^{host_bits} - 1$]. /28 wastes least space for 10-14 hosts. Use subnet calculator for complex VLSM.",
            "formula": "$2^{(32-28)} = 2^4 = 16$ total"
        }
    },
    {
        "id": "net-nl-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "CIDR allows:",
        "options": [
            "Variable-length subnet masks",
            "Only class A",
            "No subnetting",
            "Classful addressing only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CIDR (Classless Inter-Domain Routing): Addressing scheme allowing VARIABLE-LENGTH SUBNET MASKS (VLSM) - flexible prefix lengths rather than fixed classes. Replaces classful addressing (Class A=/8, B=/16, C=/24) which was wasteful. CIDR notation: IP/prefix (e.g., 192.168.1.0/24, 10.0.0.0/8, 203.0.113.0/25). Benefits: (1) EFFICIENT allocation - assign exactly needed address space, reduce waste, (2) ROUTE AGGREGATION (supernetting) - combine multiple networks into single route, reduces routing table size, improve scalability, (3) FLEXIBILITY - subnets of any size. Example: instead of wasting Class C (256 addresses) for 50 hosts, use /26 (64 addresses). Introduced 1993 (RFC 1519) to combat IPv4 exhaustion. Requires routers support CIDR (all modern do). Essential for: ISPs, large enterprises, Internet routing (BGP aggregates with CIDR).",
            "formula": "CIDR: classless, VLSM, route aggregation"
        }
    },
    {
        "id": "net-nl-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "NAT translates:",
        "options": [
            "MAC to IP",
            "Port to IP",
            "IP to hostname",
            "Private IP to public IP"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "NAT (Network Address Translation): Translates PRIVATE (RFC 1918) IP addresses to PUBLIC IP addresses at network boundary (router). Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 - non-routable on Internet. NAT operation: (1) OUTBOUND - internal host (e.g., 192.168.1.5:12345) sends packet, NAT router replaces source with public IP:port (e.g., 203.0.113.5:6789), records mapping in translation table. (2) INBOUND - response arrives at 203.0.113.5:6789, NAT looks up table, translates destination back to 192.168.1.5:12345, forwards internally. Benefits: IP conservation (entire network shares 1 public IP), security (hides internal topology). Drawbacks: breaks end-to-end model, complicates P2P, VoIP, IPsec. Types: Static NAT (1:1), Dynamic NAT (pool), PAT/NAPT (port-based, most common). IPv6 eliminates NAT need.",
            "formula": "NAT: private IP ↔ public IP (translation)"
        }
    },
    {
        "id": "net-rout-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "RIP is a ___ routing protocol:",
        "options": [
            "Path-vector",
            "Distance-vector",
            "Hybrid",
            "Link-state"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RIP Routing Protocol Type: DISTANCE-VECTOR algorithm. Each router maintains routing table with distance (metric = hop count) and next-hop to each destination. Periodically (every 30s) broadcasts entire table to neighbors. On receiving update, router applies BELLMAN-FORD algorithm: for each destination, if neighbor's distance+1 < current distance, update route. Converges by iterative exchange. Characteristics: (1) SIMPLE - easy to configure and understand, (2) METRIC - only hop count (ignores bandwidth, latency), (3) SLOW CONVERGENCE - iterative updates, routing loops possible during convergence, (4) COUNT-TO-INFINITY problem - mitigated by max hop limit (15), split horizon, poison reverse. Contrast: LINK-STATE (OSPF) - routers exchange link information, each computes shortest paths using Dijkstra. RIP suitable for small networks only. IGP (Interior Gateway Protocol).",
            "formula": "RIP: distance-vector, Bellman-Ford, hop count"
        }
    },
    {
        "id": "net-rout-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "OSPF is a ___ routing protocol:",
        "options": [
            "Path-vector",
            "Link-state",
            "Static",
            "Distance-vector"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "OSPF Routing Protocol Type: LINK-STATE algorithm. Each router discovers neighbors, measures link costs, floods LINK STATE ADVERTISEMENTS (LSAs) to ALL routers in area. Every router builds identical LINK-STATE DATABASE (complete network topology graph). Each router independently runs DIJKSTRA's algorithm on this graph to compute shortest path tree (itself as root) and builds routing table. Updates triggered by topology changes only (not periodic) - FAST CONVERGENCE. Characteristics: (1) SCALABLE - hierarchical areas reduce LSA flooding scope, (2) METRIC - cost (configurable, often inverse bandwidth), (3) LOOP-FREE - SPF algorithm guarantees, (4) SUPPORTS - VLSM, CIDR, authentication, multicast routing. More complex than RIP but far superior for large networks. IGP. Used in: enterprise networks, data centers. Contrast: distance-vector (RIP) iterates, slower, routing loops possible.",
            "formula": "OSPF: link-state, Dijkstra, LSAs, areas"
        }
    },
    {
        "id": "net-rout-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "BGP is a ___ routing protocol:",
        "options": [
            "Static",
            "Link-state",
            "Path-vector",
            "Distance-vector"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BGP Routing Protocol Type: PATH-VECTOR algorithm - extension of distance-vector with FULL PATH information. Used for INTER-DOMAIN routing (between Autonomous Systems, ASs) on the Internet. Each BGP router advertises REACHABLE PREFIXES along with complete AS PATH (sequence of AS numbers traversed). Receiving router uses path for: (1) LOOP PREVENTION - reject routes containing own AS number, (2) POLICY-BASED routing - prefer/avoid routes through specific ASs (business relationships, politics), not just shortest. BGP selects best path using complex DECISION PROCESS: (1) prefer higher local preference, (2) shorter AS path, (3) lower MED, etc. Characteristics: (1) POLICY - routing based on agreements, not just metrics, (2) SCALABLE - handles entire Internet routing table (900K+ prefixes), (3) SLOW convergence - stability over speed. EGP (Exterior Gateway Protocol). Contrast: RIP/OSPF are IGPs within single AS.",
            "formula": "BGP: path-vector, inter-AS, policy-based"
        }
    },
    {
        "id": "net-rout-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "Count to infinity problem occurs in:",
        "options": [
            "Path-vector",
            "Link-state",
            "All protocols",
            "Distance-vector"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Count-to-Infinity Problem: Pathological SLOW CONVERGENCE issue in DISTANCE-VECTOR routing when link fails. Scenario: 3 routers A-B-C in line. A has route to X (distance 1), advertises to B (distance 2), B advertises to C (distance 3). If A-X link fails, A sets distance to X = ∞. But before A's update reaches B, B advertises 'distance 2 to X' to A. A thinks 'route through B exists!' and sets distance = 2+1=3, advertises to B. B receives '3', updates to 4, advertises. This BOUNCING continues, distances incrementing each round (counting to infinity), until reaching maximum (RIP: 16 = ∞). SLOW! Solutions: (1) MAX METRIC (RIP: 16=∞) stops infinite counting, (2) SPLIT HORIZON - don't advertise route back to neighbor learned from, (3) POISON REVERSE - advertise ∞ back to source, (4) HOLD-DOWN timers. Link-state (OSPF) DOES NOT have this problem - global topology knowledge prevents.",
            "formula": "Count-to-∞: distance-vector slow convergence"
        }
    },
    {
        "id": "net-tcp-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP is:",
        "options": [
            "Connectionless, reliable",
            "Connectionless, unreliable",
            "Connection-oriented, unreliable",
            "Connection-oriented, reliable"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TCP (Transmission Control Protocol): CONNECTION-ORIENTED (3-way handshake establishes connection before data transfer, 4-way termination), RELIABLE (guaranteed delivery via ACKs, retransmission, sequence numbers, checksums). Features: (1) ORDERED - data arrives in correct order, (2) FLOW CONTROL - receiver window prevents overflow, (3) CONGESTION CONTROL - adapts to network conditions, (4) FULL-DUPLEX - bidirectional communication, (5) BYTE-STREAM - no message boundaries. Overhead: larger header (20-60 bytes), connection setup latency. Use cases: web (HTTP/HTTPS), email (SMTP, IMAP), file transfer (FTP, SSH), where reliability essential. Transport layer protocol (Layer 4).",
            "formula": "TCP: connection-oriented, reliable, ordered"
        }
    },
    {
        "id": "net-tcp-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "UDP is:",
        "options": [
            "Connectionless, unreliable",
            "Connection-oriented, unreliable",
            "Connectionless, reliable",
            "Connection-oriented, reliable"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "UDP (User Datagram Protocol): CONNECTIONLESS (no handshake, just send), UNRELIABLE (best-effort delivery, no ACKs, no retransmission, packets may be lost/duplicated/reordered). Features: (1) FAST - minimal overhead, low latency, no connection setup, (2) SIMPLE - small header (8 bytes fixed), (3) NO flow/congestion control, (4) MESSAGE-ORIENTED - preserves message boundaries (datagrams). Applications handle reliability if needed. Use cases: (1) REAL-TIME - VoIP, video streaming, online gaming (prefer speed over perfect delivery), (2) DNS queries (small, can retry), (3) DHCP, TFTP, SNMP, NTP. When to use UDP? Speed critical, can tolerate loss, application-level error handling. Contrast TCP: reliable but slower.",
            "formula": "UDP: connectionless, unreliable, fast"
        }
    },
    {
        "id": "net-tcp-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP 3-way handshake sequence:",
        "options": [
            "SYN, ACK, SYN",
            "FIN, ACK, FIN",
            "ACK, SYN, FIN",
            "SYN, SYN+ACK, ACK"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TCP 3-Way Handshake: SYN → SYN+ACK → ACK. See earlier detailed explanation (net2-tcp-008). Establishes connection, synchronizes sequence numbers, negotiates options before data transfer.",
            "formula": "3-way: SYN → SYN+ACK → ACK"
        }
    },
    {
        "id": "net-tcp-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP slow start increases window:",
        "options": [
            "Linearly",
            "Logarithmically",
            "Stays constant",
            "Exponentially (double each RTT)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TCP Slow Start: Exponential growth - congestion window (cwnd) DOUBLES every RTT. See earlier detailed explanation (net2-tcp-012). cwnd starts at 1 MSS, increases by 1 MSS per ACK received (1→2→4→8...). Continues until reaching ssthresh or detecting loss.",
            "formula": "Slow Start: exponential (doubles per RTT)"
        }
    },
    {
        "id": "net-tcp-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP congestion avoidance increases window:",
        "options": [
            "Logarithmically",
            "Exponentially",
            "Linearly (additive increase)",
            "Constant"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TCP Congestion Avoidance: Linear (additive) increase - cwnd increases by approximately 1 MSS per RTT. See earlier detailed explanation (net2-tcp-013). Used after slow start (cwnd ≥ ssthresh). AIMD: Additive Increase Multiplicative Decrease for fairness.",
            "formula": "Congestion Avoidance: linear (+1 MSS/RTT)"
        }
    },
    {
        "id": "net-tcp-006",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP sequence number field is 32 bits. Maximum sequence number = 2³² - 1 = ?",
        "correctAnswer": 4294967295,
        "tolerance": 0,
        "explanation": {
            "solution": "TCP Sequence Number Field: 32 bits allows sequence numbers from 0 to $2^{32} - 1 = 4,294,967,295$. Sequence numbers track BYTES (not packets) - each byte gets a sequence number. After reaching max, wraps to 0 (modulo $2^{32}$). 32-bit space allows ~4 GB window before wraparound. For modern high-speed networks (10Gbps+), wraparound can occur quickly - Window Scaling option (RFC 1323) extends effective window beyond 64KB. Acknowledgment numbers also 32-bit. Sequence/ACK synchronization in handshake uses random initial sequence numbers (ISN) for security (prevent hijacking).",
            "formula": "$2^{32} - 1 = 4,294,967,295$"
        }
    },
    {
        "id": "net-app-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS primarily uses:",
        "options": [
            "UDP (port 53)",
            "ICMP",
            "TCP only",
            "HTTP"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "DNS primarily UDP port 53. See earlier comprehensive explanation (net3-dns-004). TCP port 53 for zone transfers and large responses >512 bytes.",
            "formula": "DNS: UDP 53 (TCP for zone xfer/large)"
        }
    },
    {
        "id": "net-app-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP default port:",
        "options": [
            "21",
            "80",
            "443",
            "25"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP default port 80 (unencrypted). HTTPS port 443 (encrypted over TLS/SSL). See earlier comprehensive explanations (net3-http-002 for port 80, net3-http-003 for port 443).",
            "formula": "HTTP: 80 (plaintext), HTTPS: 443 (TLS)"
        }
    },
    {
        "id": "net-app-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP uses ports:",
        "options": [
            "25 and 110",
            "53 only",
            "80 only",
            "21 (control) and 20 (data)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "FTP ports 21 (control) and 20 (data), out-of-band control. See earlier comprehensive explanation (net3-ftp-001). Separate persistent control connection and transient data connections.",
            "formula": "FTP: 21 (control), 20 (data)"
        }
    },
    {
        "id": "net-app-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP port:",
        "options": [
            "110",
            "143",
            "25",
            "21"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SMTP port 25 for email sending/relay. See earlier comprehensive explanations (net3-email-001, net3-smtp-001). Port 587 for submission with authentication increasingly common.",
            "formula": "SMTP: port 25 (send/relay)"
        }
    },
    {
        "id": "net-app-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Telnet port:",
        "options": [
            "25",
            "21",
            "22",
            "23"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Telnet port 23 (plaintext, insecure, legacy remote access). SSH port 22 (encrypted, secure replacement). See earlier comprehensive explanations (net3-port-001 for Telnet, net3-ssh-001 for SSH).",
            "formula": "Telnet: 23 (insecure), SSH: 22 (secure)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-phy-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Bandwidth 3kHz, SNR = 63. Shannon capacity (kbps) = ?",
        "correctAnswer": 18,
        "tolerance": 0.5,
        "explanation": {
            "solution": "Shannon-Hartley theorem: C = B × log₂(1 + SNR). Here B = 3000 Hz, SNR = 63. C = 3000 × log₂(64) = 3000 × 6 = 18,000 bps = 18 kbps. This is the theoretical maximum channel capacity with noise. Note: SNR is given as ratio (63), not dB.",
            "formula": "$C = B \\times \\log_2(1 + SNR) = 3000 \\times \\log_2(64) = 18$ kbps"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-phy-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Bandwidth 4kHz, 8 signal levels. Nyquist rate (kbps) = ?",
        "correctAnswer": 24,
        "tolerance": 0,
        "explanation": {
            "solution": "Nyquist theorem for noiseless channel: C = 2B × log₂(L), where L = signal levels. C = 2 × 4000 × log₂(8) = 8000 × 3 = 24,000 bps = 24 kbps. Nyquist gives max rate without ISI (intersymbol interference). Shannon gives max with noise. Actual capacity ≤ min(Nyquist, Shannon).",
            "formula": "$C = 2B \\times \\log_2(L) = 2 \\times 4000 \\times 3 = 24$ kbps"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-phy-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Manchester encoding baud rate for 10 Mbps:",
        "options": [
            "20 Mbaud",
            "10 Mbaud",
            "40 Mbaud",
            "5 Mbaud"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Manchester encoding has a transition in the middle of each bit period (for clocking) plus possible transitions at boundaries. Each bit requires 2 signal transitions → baud rate = 2 × bit rate. For 10 Mbps: baud rate = 20 Mbaud. It's self-clocking but inefficient (50% efficiency). Used in 10BASE-T Ethernet.",
            "formula": "$Baud = 2 \\times BitRate = 20$ Mbaud"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-dll-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "CRC generator x⁴+x+1. Checksum bits = ?",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "In CRC, the number of checksum bits equals the degree of the generator polynomial. For G(x) = x⁴+x+1, degree = 4, so 4 checksum bits are appended. The generator in binary is 10011 (5 bits). Transmitted message = data × x⁴ + remainder (after dividing by generator). CRC can detect all burst errors ≤ 4 bits.",
            "formula": "CRC bits = degree of generator = 4"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-dll-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Hamming code: 11 data bits. Parity bits needed = ?",
        "correctAnswer": 4,
        "tolerance": 0,
        "explanation": {
            "solution": "Hamming code formula: 2^r ≥ m + r + 1, where r = parity bits, m = data bits. For m = 11: try r=3: 8 ≥ 15? No. Try r=4: 16 ≥ 16? Yes! So 4 parity bits needed. Parity bits go at positions 1, 2, 4, 8 (powers of 2). Total codeword = 11 + 4 = 15 bits. Can detect 2 errors, correct 1.",
            "formula": "$2^r \\geq m + r + 1$; $2^4 = 16 \\geq 11+4+1 = 16$ ✓"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-dll-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Minimum Hamming distance to detect d errors:",
        "options": [
            "d+1",
            "2d",
            "2d+1",
            "d"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "To detect d errors, we need Hamming distance ≥ d+1. Intuition: if codewords are d+1 apart, d bit flips can't turn one valid codeword into another (they'd be at most d away). For error CORRECTION of t errors, need distance ≥ 2t+1 (to be closer to original than any other valid codeword).",
            "formula": "Detection: $d_{min} \\geq d+1$; Correction: $d_{min} \\geq 2t+1$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-dll-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Minimum Hamming distance to correct t errors:",
        "options": [
            "t+1",
            "t",
            "2t",
            "2t+1"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "To correct t errors, need Hamming distance ≥ 2t+1. After t bit flips, the corrupted word is still closer to the original (t away) than to any other valid codeword (at least t+1 away, since others are 2t+1 away and we're t from original). This ensures unique recovery of original.",
            "formula": "$d_{min} \\geq 2t+1$ for t-error correction"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-arq-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Stop-and-wait: Tp=10ms, Tt=5ms. Efficiency (%) = ?",
        "correctAnswer": 20,
        "tolerance": 1,
        "explanation": {
            "solution": "Stop-and-wait: sender waits for ACK after each frame. Efficiency η = Tt/(Tt + 2×Tp) = useful time / total cycle time. Here: 5/(5 + 2×10) = 5/25 = 0.2 = 20%. The 2×Tp accounts for round-trip propagation. Efficiency is poor when Tp >> Tt (high bandwidth-delay product).",
            "formula": "$\\eta = \\frac{T_t}{T_t + 2T_p} = \\frac{5}{25} = 20\\%$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-arq-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "GBN: 3-bit sequence number. Max window size = ?",
        "correctAnswer": 7,
        "tolerance": 0,
        "explanation": {
            "solution": "Go-Back-N needs window size ≤ 2^n - 1 (where n = sequence number bits). With 3 bits: max window = 2³-1 = 7. Why not 8? If window = 8 and all ACKs lost, receiver can't distinguish between all-new frames vs retransmissions (sequence numbers wrap around). For n=3: sequence 0-7, window max 7.",
            "formula": "GBN window $\\leq 2^n - 1 = 7$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-arq-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "SR: 4-bit sequence number. Max sender window = ?",
        "correctAnswer": 8,
        "tolerance": 0,
        "explanation": {
            "solution": "Selective Repeat: both sender and receiver have windows. To avoid overlap ambiguity: sender window + receiver window ≤ 2^n. With equal windows (common): each ≤ 2^(n-1). For 4-bit: max sender window = 2³ = 8. This is larger than GBN would allow (15), but SR maintains per-frame state so needs this constraint.",
            "formula": "SR window $\\leq 2^{n-1} = 2^3 = 8$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-arq-004",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Propagation delay=200ms, bandwidth=1Mbps, frame=1000bits. a = Tp/Tt = ?",
        "correctAnswer": 200,
        "tolerance": 0,
        "explanation": {
            "solution": "Parameter 'a' measures propagation delay relative to transmission delay. Tt = frame_size/bandwidth = 1000/(10^6) = 0.001s = 1ms. Tp = 200ms. a = Tp/Tt = 200/1 = 200. Large 'a' means protocol efficiency is important (long pipes). Stop-and-wait efficiency ≈ 1/(1+2a) = 1/401 ≈ 0.25% here!",
            "formula": "$a = \\frac{T_p}{T_t} = \\frac{200}{1} = 200$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-mac-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Ethernet 10Mbps, 2km distance, prop speed 2×10⁸m/s. Min frame (bits) = ?",
        "correctAnswer": 200,
        "tolerance": 10,
        "explanation": {
            "solution": "CSMA/CD collision detection requires sender still transmitting when collision arrives. Worst case: collision at far end, signal returns. RTT = 2×distance/speed = 2×2000/(2×10^8) = 20μs. Min frame must take ≥ RTT to transmit: bits ≥ bandwidth×RTT = 10^7 × 20×10^-6 = 200 bits. (Actual Ethernet min = 512 bits for longer cables.)",
            "formula": "Min frame $\\geq BW \\times RTT = 10M \\times 20\\mu s = 200$ bits"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-mac-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Pure ALOHA max throughput:",
        "options": [
            "100%",
            "36.8%",
            "18.4%",
            "50%"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Pure ALOHA: stations transmit whenever they have data. Collision if any overlap. For Poisson arrivals, throughput S = G×e^(-2G), maximized at G=0.5, giving S = 1/(2e) ≈ 0.184 = 18.4%. The 2G factor comes from vulnerability period being 2× frame time (overlap can start before or during transmission).",
            "formula": "Max throughput = $\\frac{1}{2e} \\approx 18.4\\%$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-mac-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Slotted ALOHA max throughput:",
        "options": [
            "18.4%",
            "100%",
            "50%",
            "36.8%"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Slotted ALOHA: time divided into slots, transmit only at slot boundaries. Vulnerability period reduced to 1× frame time (from 2× in pure ALOHA). Throughput S = G×e^(-G), maximized at G=1, giving S = 1/e ≈ 0.368 = 36.8%. Exactly double pure ALOHA's efficiency due to halved collision window.",
            "formula": "Max throughput = $\\frac{1}{e} \\approx 36.8\\%$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-nl-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "IP 192.168.10.0/26. Usable host addresses = ?",
        "correctAnswer": 62,
        "tolerance": 0,
        "explanation": {
            "solution": "CIDR /26 means 26 network bits, leaving 32-26=6 host bits. Total addresses = 2^6 = 64. But network address (all 0s) and broadcast (all 1s) are reserved. Usable hosts = 64-2 = 62. This subnet: 192.168.10.0 (network), 192.168.10.1-62 (hosts), 192.168.10.63 (broadcast).",
            "formula": "Hosts = $2^{32-26} - 2 = 64 - 2 = 62$"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-nl-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Class B uses /16 default. Bits for network = ?",
        "correctAnswer": 16,
        "tolerance": 0,
        "explanation": {
            "solution": "Classful addressing (legacy): Class A = /8 (8 network bits), Class B = /16 (16 network bits), Class C = /24 (24 network bits). Class B range: 128.0.0.0 - 191.255.255.255. The first two octets (16 bits) identify the network, remaining 16 bits for hosts (65,534 usable). CIDR replaced classful with flexible prefixes.",
            "formula": "Class B default = /16 = 16 network bits"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-nl-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Need 100 host addresses. Minimum subnet prefix = ?",
        "correctAnswer": 25,
        "tolerance": 0,
        "explanation": {
            "solution": "Need ≥100 usable hosts. Usable = 2^h - 2 where h = host bits. For 2^7 - 2 = 126 ≥ 100 ✓. So h = 7 host bits. Network bits = 32 - 7 = 25. Prefix = /25. This gives 126 usable addresses. /26 would give only 62, insufficient. Always round up to next power of 2 minus 2.",
            "formula": "$2^7 - 2 = 126 \\geq 100$, so /$(32-7)$ = /25"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-nl-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "ICMP is used for:",
        "options": [
            "File transfer",
            "Email",
            "Routing",
            "Error reporting and diagnostics"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "ICMP (Internet Control Message Protocol) handles network-layer error reporting and diagnostics. Uses: ping (echo request/reply for reachability), traceroute (TTL exceeded messages reveal path), destination unreachable, source quench, redirect. ICMP is encapsulated in IP but considered part of network layer. Not for app data."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-rout-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "RIP uses:",
        "options": [
            "Prim",
            "Floyd-Warshall",
            "Dijkstra",
            "Bellman-Ford"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "RIP (Routing Information Protocol) uses distance-vector algorithm based on Bellman-Ford. Routers share their distance tables with neighbors, who update their own tables. Converges slowly, max 15 hops, updates every 30s. Bellman-Ford: d[v] = min(d[v], d[u] + weight(u,v)) for all edges. Prone to count-to-infinity."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-rout-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "OSPF uses:",
        "options": [
            "DFS",
            "Bellman-Ford",
            "Dijkstra",
            "BFS"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "OSPF (Open Shortest Path First) uses link-state algorithm with Dijkstra's shortest path. Each router floods link-state advertisements (LSAs) to build complete network topology map. Then runs Dijkstra locally to compute shortest paths to all destinations. Faster convergence than RIP, no hop limit, supports VLSM and areas for scalability."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-rout-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "RIP max hop count:",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "RIP uses hop count as metric with maximum 15 hops. Destinations >15 hops away are considered unreachable (metric = 16 = infinity). This limits RIP to smaller networks. The limit exists partly to bound count-to-infinity problem: after failure, increments stop at 16. RIPv2 adds CIDR support but same 15-hop limit.",
            "formula": "RIP max = 15 hops; 16 = unreachable"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-tcp-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP: max segment size 1KB, window 64KB. Max segments in flight = ?",
        "correctAnswer": 64,
        "tolerance": 0,
        "explanation": {
            "solution": "TCP window limits unacknowledged data. Window = 64KB = 65536 bytes. MSS = 1KB = 1024 bytes. Max segments in flight = window/MSS = 65536/1024 = 64 segments. More precisely, up to 64 segments can be sent before waiting for ACKs. Larger windows enable better throughput on high bandwidth-delay networks.",
            "formula": "Segments = Window/MSS = 64KB/1KB = 64"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-tcp-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP 3-way handshake flags:",
        "options": [
            "FIN, ACK, FIN",
            "SYN, SYN-ACK, ACK",
            "ACK, SYN, ACK",
            "SYN, ACK, FIN"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP connection establishment: (1) Client→Server: SYN (seq=x), (2) Server→Client: SYN-ACK (seq=y, ack=x+1), (3) Client→Server: ACK (ack=y+1). Both sides exchange initial sequence numbers and confirm receipt. After handshake, bidirectional data transfer begins. Connection termination uses FIN flags (4-way)."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-tcp-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP slow start increases cwnd:",
        "options": [
            "Linearly",
            "Logarithmically",
            "Exponentially",
            "Constant"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TCP slow start: congestion window (cwnd) starts at 1 MSS and DOUBLES each RTT (exponential growth: 1→2→4→8→16...). Called 'slow' only compared to sending entire window immediately. Continues until ssthresh (slow start threshold) reached, then switches to congestion avoidance (linear growth). On timeout, ssthresh = cwnd/2, cwnd = 1."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-tcp-004",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP initial cwnd=1, ssthresh=8. After 3 RTTs, cwnd = ?",
        "correctAnswer": 8,
        "tolerance": 0,
        "explanation": {
            "solution": "Slow start: cwnd doubles each RTT until reaching ssthresh. Start: cwnd=1. After RTT1: cwnd=2. After RTT2: cwnd=4. After RTT3: cwnd=8 (reaches ssthresh). After this, switches to congestion avoidance (additive increase). If ssthresh were higher, cwnd would be 8 anyway after 3 RTTs of doubling from 1.",
            "formula": "cwnd: $1 \\rightarrow 2 \\rightarrow 4 \\rightarrow 8$ (3 RTTs)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-app-001",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP port number:",
        "correctAnswer": 80,
        "tolerance": 0,
        "explanation": {
            "solution": "Well-known ports (0-1023): HTTP uses port 80. Web servers listen on port 80 for unencrypted HTTP traffic. Clients use ephemeral ports (>1024). Other common ports: FTP(20/21), SSH(22), Telnet(23), SMTP(25), DNS(53), HTTPS(443). Port + IP = socket address for connection identification.",
            "formula": "HTTP = port 80"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-app-002",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTPS port number:",
        "correctAnswer": 443,
        "tolerance": 0,
        "explanation": {
            "solution": "HTTPS (HTTP Secure) uses port 443. It's HTTP over TLS/SSL encryption layer. Server presents certificate during TLS handshake. Traffic is encrypted, protecting against eavesdropping and tampering. Modern web strongly prefers HTTPS for all sites, not just login pages.",
            "formula": "HTTPS = port 443"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-app-003",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS port number:",
        "correctAnswer": 53,
        "tolerance": 0,
        "explanation": {
            "solution": "DNS uses port 53, typically over UDP for queries (faster, smaller messages) and TCP for zone transfers (large, reliable). DNS resolves domain names to IP addresses through hierarchical system: root servers → TLD servers → authoritative name servers. Recursive vs iterative queries. Caching reduces load.",
            "formula": "DNS = port 53 (UDP/TCP)"
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-app-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Persistent HTTP advantage:",
        "options": [
            "Reuses TCP connection",
            "Better compression",
            "Faster DNS",
            "More secure"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Persistent HTTP (HTTP/1.1 default, HTTP/2) reuses the same TCP connection for multiple requests/responses. Saves TCP handshake overhead (1 RTT) for each object after the first. Non-persistent HTTP/1.0 opens new connection per object. With pipelining, multiple requests can be sent without waiting for responses."
        }
    },
    {
        "isPYQ": true,
        "id": "gate-net-app-005",
        "type": "NAT",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Non-persistent HTTP: 10 objects, RTT=100ms. Total time (ms) = ?",
        "correctAnswer": 2100,
        "tolerance": 100,
        "explanation": {
            "solution": "Non-persistent HTTP: each object requires separate TCP connection. Per object: 1 RTT for TCP handshake + 1 RTT for request-response = 2 RTT. For base HTML + 10 embedded objects = 11 objects total. Time = 11 × 2 × 100ms = 2200ms. Some parallelism possible with multiple simultaneous connections in practice.",
            "formula": "Time ≈ $(1 + 10) \\times 2 \\times RTT = 2200$ms"
        }
    }
]);