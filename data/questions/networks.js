Questions.register([
    {
        "id": "net-osi-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "OSI & TCP/IP",
        "question": "The OSI model has how many layers?",
        "options": [
            "4",
            "5",
            "6",
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
            "Physical transmission of bits",
            "Node-to-node delivery",
            "Host-to-host delivery (routing)",
            "Process-to-process delivery"
        ],
        "correctAnswer": 2,
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
            "Path determination",
            "Process-to-process communication",
            "Bit synchronization",
            "Encryption"
        ],
        "correctAnswer": 1,
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
            "21",
            "25",
            "80",
            "443"
        ],
        "correctAnswer": 2,
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
            "Receiving email",
            "Sending email",
            "Web browsing",
            "File transfer"
        ],
        "correctAnswer": 1,
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
            "20",
            "21",
            "22",
            "23"
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
            "Faster transmission",
            "Connectionless service",
            "Reliable, ordered delivery with flow control",
            "Smaller header overhead"
        ],
        "correctAnswer": 2,
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
            "16",
            "32",
            "64",
            "128"
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
            "8",
            "16",
            "24",
            "32"
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
            "Token Ring",
            "Ethernet (wired)",
            "WiFi",
            "Bluetooth"
        ],
        "correctAnswer": 1,
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
            "32",
            "48",
            "64",
            "128"
        ],
        "correctAnswer": 1,
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
            "C = B log₂L",
            "C = 2B log₂L",
            "C = B log₂(1+SNR)",
            "C = B"
        ],
        "correctAnswer": 1,
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
            "C = 2B log₂L",
            "C = B log₂(1+SNR)",
            "C = B/SNR",
            "C = B × SNR"
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
            "Very low",
            "Always 100%",
            "Undefined"
        ],
        "correctAnswer": 1,
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
            "1",
            "N",
            "N-1",
            "2N"
        ],
        "correctAnswer": 1,
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
            "Only accept in-order frames",
            "Accept and buffer out-of-order frames",
            "Drop all frames on error",
            "Send only NAKs"
        ],
        "correctAnswer": 1,
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
            "2ⁿ",
            "2ⁿ - 1",
            "2ⁿ⁻¹",
            "n"
        ],
        "correctAnswer": 1,
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
            "2ⁿ - 1",
            "2ⁿ⁻¹",
            "n"
        ],
        "correctAnswer": 2,
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
            "0x00",
            "0x7E",
            "0xFF",
            "0x55"
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
            "8",
            "16",
            "24",
            "7"
        ],
        "correctAnswer": 0,
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
            "No subnetting",
            "Only /8, /16, /24"
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
            "Domain name to IP",
            "IP address to MAC address",
            "MAC to IP",
            "Hostname to IP"
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
            "Data transfer",
            "Error reporting and diagnostics",
            "Routing",
            "Encryption"
        ],
        "correctAnswer": 1,
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
            "RIP",
            "BGP",
            "IS-IS"
        ],
        "correctAnswer": 1,
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
            "RIP",
            "OSPF",
            "RIPv2",
            "IGRP"
        ],
        "correctAnswer": 1,
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
            "Link state protocols",
            "Distance vector protocols",
            "Both",
            "Neither"
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
            "Encrypt packets",
            "Map private IPs to public IPs",
            "Route packets",
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
            "2-way",
            "3-way",
            "4-way",
            "No handshake"
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
            "2-way",
            "3-way",
            "4-way",
            "1-way"
        ],
        "correctAnswer": 2,
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
            "Linearly",
            "Exponentially",
            "Logarithmically",
            "Not at all"
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
            "Exponentially",
            "Linearly (additive increase)",
            "Stays constant",
            "Decreases"
        ],
        "correctAnswer": 1,
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
            "1 MSS (segment)",
            "0"
        ],
        "correctAnswer": 2,
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
            "8 bytes",
            "20 bytes",
            "24 bytes",
            "Variable"
        ],
        "correctAnswer": 0,
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
            "16 bytes",
            "20 bytes",
            "32 bytes"
        ],
        "correctAnswer": 2,
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
            "TCP only",
            "UDP only",
            "UDP (default), TCP for large responses",
            "Neither"
        ],
        "correctAnswer": 2,
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
            "21",
            "25",
            "53",
            "80"
        ],
        "correctAnswer": 2,
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
            "Resolve domain names",
            "Automatically assign IP addresses",
            "Transfer files",
            "Send email"
        ],
        "correctAnswer": 1,
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
            "80",
            "443",
            "8080",
            "22"
        ],
        "correctAnswer": 1,
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
            "21",
            "22",
            "23",
            "25"
        ],
        "correctAnswer": 2,
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
            "No email access",
            "FTP access"
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
            "4",
            "5",
            "6",
            "7"
        ],
        "correctAnswer": 3,
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
            "3",
            "6"
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
            "Routing",
            "Bit transmission over physical medium",
            "End-to-end delivery",
            "Encryption"
        ],
        "correctAnswer": 1,
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
            "Routing between networks",
            "Node-to-node delivery, framing, MAC addresses",
            "End-to-end reliability",
            "Application protocols"
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
            "Physical transmission",
            "Logical addressing, routing between networks",
            "Port numbers",
            "Encryption"
        ],
        "correctAnswer": 1,
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
            "Routing",
            "End-to-end delivery, segmentation, ports",
            "MAC addresses",
            "Bit transmission"
        ],
        "correctAnswer": 1,
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
            "Frame, Packet, Segment",
            "Packet, Frame, Segment",
            "Segment, Packet, Frame",
            "Bit, Frame, Packet"
        ],
        "correctAnswer": 0,
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
            "2 × B × log₂(L)",
            "B × log₂(1 + SNR)",
            "B / 2",
            "L × B"
        ],
        "correctAnswer": 0,
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
            "2B log₂L",
            "B × log₂(1 + SNR)",
            "B / SNR",
            "SNR × L"
        ],
        "correctAnswer": 1,
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
            "0 and 1 as voltage levels",
            "Transition in middle of bit (self-clocking)",
            "No transitions",
            "Only high voltage"
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
            "Only FDM",
            "FDM, TDM, WDM, CDM",
            "Only TDM",
            "No multiplexing exists"
        ],
        "correctAnswer": 1,
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
            "Routing packets",
            "Encapsulating network layer packets into frames",
            "Encrypting data",
            "Addressing hosts"
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
            "48 bits, physical (hardware)",
            "Variable length",
            "Same as IP"
        ],
        "correctAnswer": 1,
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
            "Cannot detect errors",
            "Is same as parity"
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
            "Only detect errors",
            "Detect and correct single-bit errors",
            "Correct any number of errors",
            "Not detect any error"
        ],
        "correctAnswer": 1,
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
            "d",
            "d + 1",
            "2d",
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
            "d + 1",
            "2d + 1",
            "d - 1"
        ],
        "correctAnswer": 2,
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
            "Multiple frames before waiting",
            "One frame, waits for ACK before next",
            "No frames",
            "Continuous stream"
        ],
        "correctAnswer": 1,
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
            "Always 100%",
            "1 / (1 + 2a) where a = propagation/transmission time",
            "0%",
            "Depends on frame size only"
        ],
        "correctAnswer": 1,
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
            "Only erroneous frame",
            "All frames from erroneous frame onward",
            "No frames",
            "Random frames"
        ],
        "correctAnswer": 1,
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
            "All frames",
            "Only the erroneous frame(s)",
            "No frames",
            "From beginning"
        ],
        "correctAnswer": 1,
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
            "2^n",
            "2^n - 1",
            "2^(n-1)",
            "n"
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
            "2^n",
            "2^n - 1",
            "2^(n-1)",
            "n"
        ],
        "correctAnswer": 2,
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
            "Wireless networks",
            "Ethernet (wired LAN)",
            "WAN only",
            "Satellite networks"
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
            "Maximum speed",
            "Collision detected before transmission ends",
            "No errors",
            "Large packets"
        ],
        "correctAnswer": 1,
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
            "Wired Ethernet",
            "Wireless networks (WiFi)",
            "Fiber optic",
            "Coaxial only"
        ],
        "correctAnswer": 1,
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
            "Data Link",
            "Network",
            "Transport"
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
            "48 bits",
            "32 bits",
            "128 bits",
            "64 bits"
        ],
        "correctAnswer": 1,
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
            "Identify network and host portions of IP address",
            "Route packets",
            "Compress data"
        ],
        "correctAnswer": 1,
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
            "24-bit network prefix",
            "24 networks",
            "24 routers"
        ],
        "correctAnswer": 1,
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
            "0-127",
            "128-191",
            "192-223",
            "224-239"
        ],
        "correctAnswer": 0,
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
            "0-127",
            "128-191",
            "192-223",
            "224-239"
        ],
        "correctAnswer": 1,
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
            "0-127",
            "128-191",
            "192-223",
            "224-239"
        ],
        "correctAnswer": 2,
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
            "10.x.x.x, 172.16-31.x.x, 192.168.x.x",
            "Only 10.x.x.x",
            "Only 192.168.x.x",
            "All IP addresses"
        ],
        "correctAnswer": 0,
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
            "Routing",
            "Translating private IPs to public IP",
            "Encryption",
            "Error correction"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NAT: multiple private IPs share one public IP"
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
            "MAC to IP address",
            "Domain to IP",
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
            "MAC to IP address",
            "Domain to IP",
            "Nothing"
        ],
        "correctAnswer": 1,
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
            "Routing",
            "Error reporting and diagnostics (ping, traceroute)",
            "Data transfer",
            "Encryption"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ICMP: error messages, ping, traceroute"
        }
    },
    {
        "id": "net2-net-014",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "Router operates at which layer?",
        "options": [
            "Physical",
            "Data Link",
            "Network (Layer 3)",
            "Transport"
        ],
        "correctAnswer": 2,
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
            "Dijkstra",
            "Flooding"
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
            "Bellman-Ford",
            "Dijkstra (build global topology)",
            "Only local info",
            "Random selection"
        ],
        "correctAnswer": 1,
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
            "Distance Vector",
            "Path Vector",
            "Flooding"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RIP: distance vector, hop count metric, max 15 hops"
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
            "Link State",
            "Path Vector",
            "Static routing"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "OSPF: link state, Dijkstra, hierarchical areas"
        }
    },
    {
        "id": "net2-route-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "BGP (Border Gateway Protocol) uses:",
        "options": [
            "Distance Vector",
            "Link State",
            "Path Vector",
            "Flooding"
        ],
        "correctAnswer": 2,
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
            "Link State routing",
            "Distance Vector routing",
            "Both",
            "Neither"
        ],
        "correctAnswer": 1,
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
            "Connection-oriented, reliable",
            "Connectionless, reliable",
            "Connection-oriented, unreliable"
        ],
        "correctAnswer": 1,
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
            "Connection-oriented, reliable",
            "Connectionless, unreliable (best-effort)",
            "Connection-oriented, unreliable",
            "Connectionless, reliable"
        ],
        "correctAnswer": 1,
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
            "Physical ports",
            "Applications/processes on a host",
            "MAC addresses",
            "IP addresses"
        ],
        "correctAnswer": 1,
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
            "0-1023",
            "1024-49151",
            "49152-65535",
            "0-65535"
        ],
        "correctAnswer": 0,
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
            "ACK, SYN, FIN",
            "SYN, SYN-ACK, ACK",
            "FIN, ACK, FIN",
            "SYN, ACK, SYN"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP 3-Way Handshake: 1) Client → Server: SYN (seq=x). 2) Server → Client: SYN-ACK (seq=y, ack=x+1). 3) Client → Server: ACK (seq=x+1, ack=y+1). Connection now ESTABLISHED. Each side learns other's initial sequence number. SYN packets consume one sequence number even though they carry no data."
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
            "4-way handshake (FIN → ACK → FIN → ACK)",
            "1-way",
            "No handshake"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "4-way: FIN, ACK, FIN, ACK (graceful close)"
        }
    },
    {
        "id": "net2-trans-007",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP flow control uses:",
        "options": [
            "Congestion window only",
            "Sliding window (receiver advertised window)",
            "No flow control",
            "Rate limiting only"
        ],
        "correctAnswer": 1,
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
            "No congestion control",
            "Only fast recovery"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TCP congestion: slow start, cong. avoidance, fast retransmit/recovery"
        }
    },
    {
        "id": "net2-trans-009",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP slow start: cwnd increases:",
        "options": [
            "Linearly",
            "Exponentially (double every RTT)",
            "Remains constant",
            "Decreases"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP Slow Start: cwnd starts at 1 MSS, DOUBLES every RTT (exponential growth). For each ACK received, cwnd += 1 MSS. Continues until ssthresh (slow start threshold) reached, then switches to congestion avoidance. NOT actually slow - 'slow' refers to starting small before ramping up quickly."
        }
    },
    {
        "id": "net2-trans-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP congestion avoidance: cwnd increases:",
        "options": [
            "Exponentially",
            "Linearly (add 1 MSS per RTT)",
            "Stays constant",
            "Halves"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Congestion avoidance: additive increase (1 MSS per RTT)"
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
            "1 MSS (restart slow start)",
            "Double",
            "No change"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Timeout: ssthresh = cwnd/2, cwnd = 1 MSS, slow start"
        }
    },
    {
        "id": "net2-trans-012",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "On 3 duplicate ACKs, TCP uses:",
        "options": [
            "Slow start from 1",
            "Fast retransmit + fast recovery (cwnd halved)",
            "No action",
            "Connection reset"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "3 dup ACKs: fast retransmit, cwnd = ssthresh + 3, congestion avoidance"
        }
    },
    {
        "id": "net2-app-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS resolves:",
        "options": [
            "IP to MAC",
            "Domain name to IP address",
            "MAC to IP",
            "Port to service"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS (Domain Name System): Translates human-readable domain names (google.com) to IP addresses (142.250.190.14). Hierarchical distributed database. Uses UDP port 53 (TCP for zone transfers). Query types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (nameserver)."
        }
    },
    {
        "id": "net2-app-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS uses port:",
        "options": [
            "80",
            "53",
            "443",
            "25"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS: port 53 (UDP primarily, TCP for large responses)"
        }
    },
    {
        "id": "net2-app-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP uses port:",
        "options": [
            "53",
            "80",
            "443",
            "22"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP: port 80 (unencrypted)"
        }
    },
    {
        "id": "net2-app-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTPS uses port:",
        "options": [
            "80",
            "443",
            "22",
            "25"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTPS: port 443 (HTTP over TLS/SSL)"
        }
    },
    {
        "id": "net2-app-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP uses port:",
        "options": [
            "80",
            "21 (control) and 20 (data)",
            "22",
            "25"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP: port 21 (control), port 20 (data)"
        }
    },
    {
        "id": "net2-app-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SSH uses port:",
        "options": [
            "21",
            "80",
            "22",
            "25"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SSH: port 22 (secure shell)"
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
            "25",
            "110",
            "143"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SMTP: port 25 (send email)"
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
            "Dynamic IP address assignment",
            "Routing",
            "Encryption"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DHCP: dynamic assignment of IP, subnet mask, gateway, DNS"
        }
    },
    {
        "id": "net2-app-009",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP is:",
        "options": [
            "Stateful",
            "Stateless",
            "Connection-oriented",
            "Reliable transport"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP: stateless (each request independent, cookies add state)"
        }
    },
    {
        "id": "net2-app-010",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP methods include:",
        "options": [
            "Only GET",
            "GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH",
            "Only POST",
            "Only HEAD"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP methods: GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH, etc."
        }
    },
    {
        "id": "net3-email-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP uses port:",
        "options": [
            "80",
            "25",
            "110",
            "143"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SMTP (send mail): port 25"
        }
    },
    {
        "id": "net3-email-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP is a __ protocol (push/pull):",
        "options": [
            "Pull",
            "Push",
            "Both",
            "Neither"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SMTP pushes mail to server; POP/IMAP pull from server"
        }
    },
    {
        "id": "net3-email-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "POP3 uses port:",
        "options": [
            "25",
            "110",
            "143",
            "80"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "POP3: port 110"
        }
    },
    {
        "id": "net3-email-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "IMAP uses port:",
        "options": [
            "25",
            "110",
            "143",
            "80"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "IMAP: port 143"
        }
    },
    {
        "id": "net3-email-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "IMAP advantage over POP3:",
        "options": [
            "Faster download",
            "Can access mail from multiple devices, organize on server",
            "Uses less bandwidth",
            "More secure"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "IMAP: mail stays on server, accessible from anywhere"
        }
    },
    {
        "id": "net3-email-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "MIME is used with SMTP to:",
        "options": [
            "Encrypt mail",
            "Send non-ASCII data (images, audio, video)",
            "Compress mail",
            "Authenticate sender"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "MIME: Multipurpose Internet Mail Extensions for binary data"
        }
    },
    {
        "id": "net3-ftp-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP uses ports:",
        "options": [
            "80 only",
            "21 (control) and 20 (data)",
            "25 and 110",
            "443 only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP: 21 for control, 20 for data transfer"
        }
    },
    {
        "id": "net3-ftp-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP is __ protocol (in-band/out-of-band):",
        "options": [
            "In-band",
            "Out-of-band (separate control and data)",
            "Neither",
            "Both"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP: out-of-band (control on 21, data on 20)"
        }
    },
    {
        "id": "net3-ftp-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP control connection is:",
        "options": [
            "Non-persistent",
            "Persistent (stays open during session)",
            "Connectionless",
            "UDP-based"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP control: persistent. Data: non-persistent"
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
            "Connectionless",
            "Unreliable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP: stateful (maintains user state during session)"
        }
    },
    {
        "id": "net3-http-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP is a __ protocol:",
        "options": [
            "Stateful",
            "Stateless",
            "Connection-oriented",
            "Unreliable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP: stateless (each request independent)"
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
            "Non-persistent",
            "Stateful",
            "UDP-based"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP 1.0: non-persistent (new TCP connection per request)"
        }
    },
    {
        "id": "net3-http-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP 1.1 is:",
        "options": [
            "Non-persistent",
            "Persistent",
            "Connectionless",
            "Unreliable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP 1.1: persistent (reuse TCP connection)"
        }
    },
    {
        "id": "net3-http-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "HTTP is __ protocol (in-band/out-of-band):",
        "options": [
            "Out-of-band",
            "In-band",
            "Neither",
            "Both"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "HTTP: in-band (request and data on same connection)"
        }
    },
    {
        "id": "net3-dns-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS primarily uses:",
        "options": [
            "TCP",
            "UDP (port 53)",
            "Both equally",
            "Neither"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS: UDP port 53 (TCP for large responses or zone transfer)"
        }
    },
    {
        "id": "net3-dns-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS is a __ protocol:",
        "options": [
            "Stateful",
            "Stateless",
            "Persistent",
            "Non-persistent"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS: stateless"
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
            "22",
            "23",
            "25"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Telnet: port 23"
        }
    },
    {
        "id": "net3-port-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Match: Which is NOT a correct port assignment?",
        "options": [
            "HTTP-80",
            "SSH-22",
            "DNS-53",
            "SMTP-110"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SMTP is 25, not 110. POP3 is 110"
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
            "solution": "Stateful: FTP, POP3, IMAP. Stateless: HTTP, DNS, SMTP"
        }
    },
    {
        "id": "net3-prop-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Which uses UDP as transport?",
        "options": [
            "HTTP",
            "FTP",
            "DNS",
            "SMTP"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DNS uses UDP. HTTP, FTP, SMTP use TCP"
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
            "solution": "4000 × log₂(256) = 4000 × 8 = 32000 bps"
        }
    },
    {
        "id": "net-phy-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "Manchester encoding has efficiency:",
        "options": [
            "100%",
            "50%",
            "25%",
            "200%"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Manchester: 50% efficiency (2 signal changes per bit)"
        }
    },
    {
        "id": "net-phy-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Physical Layer",
        "question": "NRZ-L uses:",
        "options": [
            "Level for bit value",
            "Transition for bit value",
            "No signal",
            "Differential"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "NRZ-L: signal level indicates bit (high=1, low=0)"
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
            "Data Link layer",
            "Network layer",
            "Transport layer"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DLL: frames from network layer packets"
        }
    },
    {
        "id": "net-dll-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Bit stuffing is used in:",
        "options": [
            "Character stuffing",
            "Flag-based framing (e.g., HDLC)",
            "Length-based",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Bit stuffing: insert 0 after five 1s (HDLC)"
        }
    },
    {
        "id": "net-dll-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "CRC detects:",
        "options": [
            "Only single-bit",
            "All odd-bit errors",
            "Both burst and bit errors",
            "Nothing"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CRC: detects all single-bit, odd-bit, burst ≤ degree"
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
            "solution": "CRC bits = degree of generator polynomial"
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
            "t+1",
            "2t+1",
            "2t"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Correct t errors: d_min ≥ 2t+1",
            "formula": "d ≥ 2t+1"
        }
    },
    {
        "id": "net-dll-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Data Link",
        "question": "Hamming distance for detecting t errors:",
        "options": [
            "t",
            "t+1",
            "2t+1",
            "2t"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Detect t errors: d_min ≥ t+1",
            "formula": "d ≥ t+1"
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
            "solution": "2^r ≥ m + r + 1 → 2³ ≥ 4+3+1 = 8 ≥ 8 ✓",
            "formula": "2^r ≥ m+r+1"
        }
    },
    {
        "id": "net-arq-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Stop-and-wait efficiency formula:",
        "options": [
            "1/(1+2a)",
            "1/(1+a)",
            "1/a",
            "a/(1+a)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "η = 1/(1+2a) where a = Tp/Tt",
            "formula": "η = 1/(1+2a)"
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
            "solution": "a = 100/50 = 2. η = 1/(1+4) = 0.2 = 20%"
        }
    },
    {
        "id": "net-arq-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Go-Back-N maximum window size with n-bit sequence number:",
        "options": [
            "2ⁿ",
            "2ⁿ-1",
            "2^(n-1)",
            "n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "GBN: max W = 2ⁿ - 1",
            "formula": "W ≤ 2ⁿ-1"
        }
    },
    {
        "id": "net-arq-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "ARQ",
        "question": "Selective Repeat maximum window size with n-bit sequence number:",
        "options": [
            "2ⁿ",
            "2ⁿ-1",
            "2^(n-1)",
            "n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SR: max W = 2^(n-1)",
            "formula": "W ≤ 2^(n-1)"
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
            "solution": "2⁴ - 1 = 15"
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
            "solution": "2³ = 8"
        }
    },
    {
        "id": "net-mac-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "CSMA/CD stands for:",
        "options": [
            "Carrier Sense Multiple Access / Collision Detection",
            "Central Station Multiple Access",
            "Cyclic Sense Multiple Access",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "CSMA/CD: sense carrier, detect collision (Ethernet)"
        }
    },
    {
        "id": "net-mac-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "CSMA/CD minimum frame size ensures:",
        "options": [
            "Fast transmission",
            "Collision detection before frame ends",
            "Large payload",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Frame must last ≥ 2×propagation time to detect collision"
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
            "solution": "RTT = 2 × 2500 / 2×10⁸ = 25μs. Frame = 10M × 25μs = 250 bits"
        }
    },
    {
        "id": "net-mac-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Token Ring uses:",
        "options": [
            "CSMA/CD",
            "Token passing",
            "Slotted ALOHA",
            "Polling"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Token Ring: token circulates, holder transmits"
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
            "18.4%",
            "50%",
            "100%"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Pure ALOHA: max = 1/(2e) ≈ 18.4%",
            "formula": "S_max = 1/(2e)"
        }
    },
    {
        "id": "net-mac-006",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "MAC",
        "question": "Slotted ALOHA maximum throughput:",
        "options": [
            "18.4%",
            "36.8%",
            "50%",
            "100%"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Slotted ALOHA: max = 1/e ≈ 36.8%",
            "formula": "S_max = 1/e"
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
            "32 bits",
            "64 bits",
            "128 bits"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "IPv4: 32 bits (4 bytes, dotted decimal)"
        }
    },
    {
        "id": "net-nl-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "IPv6 address is:",
        "options": [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "IPv6: 128 bits"
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
            "solution": "2^(32-24) - 2 = 256 - 2 = 254",
            "formula": "2^(32-prefix) - 2"
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
            "solution": "2^(32-28) = 2^4 = 16"
        }
    },
    {
        "id": "net-nl-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Network Layer",
        "question": "CIDR allows:",
        "options": [
            "Classful addressing only",
            "Variable-length subnet masks",
            "No subnetting",
            "Only class A"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CIDR: Classless Inter-Domain Routing, flexible prefixes"
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
            "Private IP to public IP",
            "IP to hostname",
            "Port to IP"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "NAT: maps private ↔ public IP addresses"
        }
    },
    {
        "id": "net-rout-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "RIP is a ___ routing protocol:",
        "options": [
            "Link-state",
            "Distance-vector",
            "Path-vector",
            "Hybrid"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "RIP: distance-vector (Bellman-Ford)"
        }
    },
    {
        "id": "net-rout-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "OSPF is a ___ routing protocol:",
        "options": [
            "Distance-vector",
            "Link-state",
            "Path-vector",
            "Static"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "OSPF: link-state (Dijkstra)"
        }
    },
    {
        "id": "net-rout-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "BGP is a ___ routing protocol:",
        "options": [
            "Distance-vector",
            "Link-state",
            "Path-vector",
            "Static"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "BGP: path-vector (inter-domain)"
        }
    },
    {
        "id": "net-rout-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Routing",
        "question": "Count to infinity problem occurs in:",
        "options": [
            "Link-state",
            "Distance-vector",
            "Path-vector",
            "All protocols"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DV: slow convergence, count to infinity"
        }
    },
    {
        "id": "net-tcp-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP is:",
        "options": [
            "Connectionless, unreliable",
            "Connection-oriented, reliable",
            "Connection-oriented, unreliable",
            "Connectionless, reliable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "TCP: connection-oriented, reliable (3-way handshake)"
        }
    },
    {
        "id": "net-tcp-002",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "UDP is:",
        "options": [
            "Connection-oriented, reliable",
            "Connectionless, unreliable",
            "Connection-oriented, unreliable",
            "Connectionless, reliable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "UDP: connectionless, best-effort delivery"
        }
    },
    {
        "id": "net-tcp-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP 3-way handshake sequence:",
        "options": [
            "ACK, SYN, FIN",
            "SYN, SYN+ACK, ACK",
            "FIN, ACK, FIN",
            "SYN, ACK, SYN"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "3-way: SYN → SYN+ACK → ACK"
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
            "Exponentially (double each RTT)",
            "Logarithmically",
            "Stays constant"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Slow start: cwnd doubles each RTT until threshold"
        }
    },
    {
        "id": "net-tcp-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Transport Layer",
        "question": "TCP congestion avoidance increases window:",
        "options": [
            "Exponentially",
            "Linearly (additive increase)",
            "Logarithmically",
            "Constant"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Congestion avoidance: +1 MSS per RTT (AIMD)"
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
            "solution": "2³² - 1 = 4,294,967,295"
        }
    },
    {
        "id": "net-app-001",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "DNS primarily uses:",
        "options": [
            "TCP only",
            "UDP (port 53)",
            "ICMP",
            "HTTP"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "DNS: UDP 53 (TCP for zone transfers)"
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
            "25",
            "80",
            "443"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "HTTP: port 80, HTTPS: port 443"
        }
    },
    {
        "id": "net-app-003",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "FTP uses ports:",
        "options": [
            "80 only",
            "21 (control) and 20 (data)",
            "25 and 110",
            "53 only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FTP: 21 control, 20 data"
        }
    },
    {
        "id": "net-app-004",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "SMTP port:",
        "options": [
            "21",
            "25",
            "110",
            "143"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "SMTP: port 25"
        }
    },
    {
        "id": "net-app-005",
        "type": "MCQ",
        "topic": "networks",
        "subtopic": "Application Layer",
        "question": "Telnet port:",
        "options": [
            "21",
            "22",
            "23",
            "25"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Telnet: port 23, SSH: port 22"
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
            "5 Mbaud",
            "10 Mbaud",
            "20 Mbaud",
            "40 Mbaud"
        ],
        "correctAnswer": 2,
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
            "d",
            "d+1",
            "2d",
            "2d+1"
        ],
        "correctAnswer": 1,
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
            "t",
            "t+1",
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
            "18.4%",
            "36.8%",
            "50%",
            "100%"
        ],
        "correctAnswer": 0,
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
            "36.8%",
            "50%",
            "100%"
        ],
        "correctAnswer": 1,
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
            "Routing",
            "Error reporting and diagnostics",
            "File transfer",
            "Email"
        ],
        "correctAnswer": 1,
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
            "Dijkstra",
            "Bellman-Ford",
            "Floyd-Warshall",
            "Prim"
        ],
        "correctAnswer": 1,
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
            "Bellman-Ford",
            "Dijkstra",
            "BFS",
            "DFS"
        ],
        "correctAnswer": 1,
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
            "SYN, ACK, FIN",
            "SYN, SYN-ACK, ACK",
            "ACK, SYN, ACK",
            "FIN, ACK, FIN"
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
            "Exponentially",
            "Logarithmically",
            "Constant"
        ],
        "correctAnswer": 1,
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
            "More secure",
            "Reuses TCP connection",
            "Faster DNS",
            "Better compression"
        ],
        "correctAnswer": 1,
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
