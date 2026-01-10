/**
 * Networks SUPPLEMENT - Application Layer Protocols, Port Numbers

 */

Questions.register([
    // ========== EMAIL PROTOCOLS ==========
    {
        id: "net3-email-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "SMTP uses port:",
        options: ["80", "25", "110", "143"],
        correctAnswer: 1,
        explanation: { solution: "SMTP (send mail): port 25" }
    },
    {
        id: "net3-email-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "SMTP is a __ protocol (push/pull):",
        options: ["Pull", "Push", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "SMTP pushes mail to server; POP/IMAP pull from server" }
    },
    {
        id: "net3-email-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "POP3 uses port:",
        options: ["25", "110", "143", "80"],
        correctAnswer: 1,
        explanation: { solution: "POP3: port 110" }
    },
    {
        id: "net3-email-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "IMAP uses port:",
        options: ["25", "110", "143", "80"],
        correctAnswer: 2,
        explanation: { solution: "IMAP: port 143" }
    },
    {
        id: "net3-email-005",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "IMAP advantage over POP3:",
        options: ["Faster download", "Can access mail from multiple devices, organize on server", "Uses less bandwidth", "More secure"],
        correctAnswer: 1,
        explanation: { solution: "IMAP: mail stays on server, accessible from anywhere" }
    },
    {
        id: "net3-email-006",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "MIME is used with SMTP to:",
        options: ["Encrypt mail", "Send non-ASCII data (images, audio, video)", "Compress mail", "Authenticate sender"],
        correctAnswer: 1,
        explanation: { solution: "MIME: Multipurpose Internet Mail Extensions for binary data" }
    },
    // ========== FTP ==========
    {
        id: "net3-ftp-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "FTP uses ports:",
        options: ["80 only", "21 (control) and 20 (data)", "25 and 110", "443 only"],
        correctAnswer: 1,
        explanation: { solution: "FTP: 21 for control, 20 for data transfer" }
    },
    {
        id: "net3-ftp-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "FTP is __ protocol (in-band/out-of-band):",
        options: ["In-band", "Out-of-band (separate control and data)", "Neither", "Both"],
        correctAnswer: 1,
        explanation: { solution: "FTP: out-of-band (control on 21, data on 20)" }
    },
    {
        id: "net3-ftp-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "FTP control connection is:",
        options: ["Non-persistent", "Persistent (stays open during session)", "Connectionless", "UDP-based"],
        correctAnswer: 1,
        explanation: { solution: "FTP control: persistent. Data: non-persistent" }
    },
    {
        id: "net3-ftp-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "FTP is a __ protocol:",
        options: ["Stateless", "Stateful", "Connectionless", "Unreliable"],
        correctAnswer: 1,
        explanation: { solution: "FTP: stateful (maintains user state during session)" }
    },
    // ========== HTTP ==========
    {
        id: "net3-http-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP is a __ protocol:",
        options: ["Stateful", "Stateless", "Connection-oriented", "Unreliable"],
        correctAnswer: 1,
        explanation: { solution: "HTTP: stateless (each request independent)" }
    },
    {
        id: "net3-http-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP 1.0 is:",
        options: ["Persistent", "Non-persistent", "Stateful", "UDP-based"],
        correctAnswer: 1,
        explanation: { solution: "HTTP 1.0: non-persistent (new TCP connection per request)" }
    },
    {
        id: "net3-http-003",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP 1.1 is:",
        options: ["Non-persistent", "Persistent", "Connectionless", "Unreliable"],
        correctAnswer: 1,
        explanation: { solution: "HTTP 1.1: persistent (reuse TCP connection)" }
    },
    {
        id: "net3-http-004",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "HTTP is __ protocol (in-band/out-of-band):",
        options: ["Out-of-band", "In-band", "Neither", "Both"],
        correctAnswer: 1,
        explanation: { solution: "HTTP: in-band (request and data on same connection)" }
    },
    // ========== DNS ==========
    {
        id: "net3-dns-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DNS primarily uses:",
        options: ["TCP", "UDP (port 53)", "Both equally", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "DNS: UDP port 53 (TCP for large responses or zone transfer)" }
    },
    {
        id: "net3-dns-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "DNS is a __ protocol:",
        options: ["Stateful", "Stateless", "Persistent", "Non-persistent"],
        correctAnswer: 1,
        explanation: { solution: "DNS: stateless" }
    },
    // ========== PORT SUMMARY ==========
    {
        id: "net3-port-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Telnet uses port:",
        options: ["21", "22", "23", "25"],
        correctAnswer: 2,
        explanation: { solution: "Telnet: port 23" }
    },
    {
        id: "net3-port-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Match: Which is NOT a correct port assignment?",
        options: ["HTTP-80", "SSH-22", "DNS-53", "SMTP-110"],
        correctAnswer: 3,
        explanation: { solution: "SMTP is 25, not 110. POP3 is 110" }
    },
    // ========== PROTOCOL PROPERTIES ==========
    {
        id: "net3-prop-001",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Which protocols are stateful?",
        options: ["HTTP, DNS", "FTP, POP3, IMAP", "SMTP, HTTP", "DNS, SMTP"],
        correctAnswer: 1,
        explanation: { solution: "Stateful: FTP, POP3, IMAP. Stateless: HTTP, DNS, SMTP" }
    },
    {
        id: "net3-prop-002",
        type: "MCQ",
        topic: "networks",
        subtopic: "Application Layer",
        question: "Which uses UDP as transport?",
        options: ["HTTP", "FTP", "DNS", "SMTP"],
        correctAnswer: 2,
        explanation: { solution: "DNS uses UDP. HTTP, FTP, SMTP use TCP" }
    }
]);

console.log("Networks Application Layer Supplement loaded - ~20 questions");
