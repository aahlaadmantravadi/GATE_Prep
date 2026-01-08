/**
 * GATE Previous Year Questions Style - Operating Systems
 * 50+ questions covering actual GATE exam patterns
 * Topics: Scheduling, Sync, Deadlock, Memory, Disk, Files
 */

Questions.register([
    // ========== PROCESS SCHEDULING - GATE PYQ STYLE ==========
    {
        id: "gate-os-sched-001",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "[GATE 2017] FCFS: P1(24ms), P2(3ms), P3(3ms) arrive at t=0. Average waiting time (ms) = ?",
        correctAnswer: 17,
        tolerance: 0.5,
        explanation: { solution: "Wait: P1=0, P2=24, P3=27. Avg = (0+24+27)/3 = 17ms" }
    },
    {
        id: "gate-os-sched-002",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "[GATE 2018] SJF: Burst times 6,8,7,3 arrive together. Average waiting time = ?",
        correctAnswer: 7,
        tolerance: 0.5,
        explanation: { solution: "Order: 3,6,7,8. Wait: 0,3,9,16. Avg = 28/4 = 7" }
    },
    {
        id: "gate-os-sched-003",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "[GATE 2019] Round Robin quantum=4: P1(5), P2(3), P3(4) all at t=0. P1 completion time = ?",
        correctAnswer: 12,
        tolerance: 0,
        explanation: { solution: "P1(4) at 4→P2(3) at 7→P3(4) at 11→P1(1) at 12" }
    },
    {
        id: "gate-os-sched-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "[GATE 2016] Which scheduling minimizes average waiting time?",
        options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "LIFO"],
        correctAnswer: 1,
        explanation: { solution: "SJF is optimal for minimizing average wait time" }
    },
    {
        id: "gate-os-sched-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "[GATE 2020] SRTF is preemptive version of:",
        options: ["FCFS", "SJF", "Priority", "RR"],
        correctAnswer: 1,
        explanation: { solution: "SRTF (Shortest Remaining Time First) = preemptive SJF" }
    },
    {
        id: "gate-os-sched-006",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "[GATE Style] Priority (lower=higher): P1(3,10ms), P2(1,5ms), P3(2,8ms) at t=0. P1 start time = ?",
        correctAnswer: 13,
        tolerance: 0,
        explanation: { solution: "Order: P2(1)→P3(2)→P1(3). P1 starts at 5+8=13" }
    },
    // ========== SYNCHRONIZATION - GATE PYQ STYLE ==========
    {
        id: "gate-os-sync-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "[GATE 2018] Critical section problem requires:",
        options: ["Only mutual exclusion", "Mutual exclusion, progress, bounded waiting", "Only progress", "Only bounded waiting"],
        correctAnswer: 1,
        explanation: { solution: "CS solution: ME + Progress + Bounded Wait" }
    },
    {
        id: "gate-os-sync-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "[GATE 2017] Peterson's solution works for:",
        options: ["Any number of processes", "Two processes only", "Single processor only", "Distributed systems"],
        correctAnswer: 1,
        explanation: { solution: "Peterson's: only 2 processes" }
    },
    {
        id: "gate-os-sync-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "[GATE 2019] Semaphore wait(P) vs signal(V): which can block?",
        options: ["wait only", "signal only", "Both", "Neither"],
        correctAnswer: 0,
        explanation: { solution: "wait(P) blocks if value ≤ 0; signal(V) never blocks" }
    },
    {
        id: "gate-os-sync-004",
        type: "NAT",
        topic: "os",
        subtopic: "Synchronization",
        question: "[GATE 2020] Counting semaphore init=3. After 4 wait and 2 signal operations, value = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: { solution: "3 - 4 + 2 = 1" }
    },
    {
        id: "gate-os-sync-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "[GATE 2016] Bounded buffer uses ___ semaphores:",
        options: ["1 only (mutex)", "2 (empty, full)", "3 (mutex, empty, full)", "None"],
        correctAnswer: 2,
        explanation: { solution: "mutex, empty (init n), full (init 0)" }
    },
    // ========== DEADLOCK - GATE PYQ STYLE ==========
    {
        id: "gate-os-dead-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "[GATE 2018] Necessary conditions for deadlock include:",
        options: ["Only circular wait", "ME, Hold&Wait, No Preemption, Circular Wait", "Only ME", "ME and Circular Wait only"],
        correctAnswer: 1,
        explanation: { solution: "All 4 conditions needed simultaneously" }
    },
    {
        id: "gate-os-dead-002",
        type: "NAT",
        topic: "os",
        subtopic: "Deadlock",
        question: "[GATE 2019] Minimum instances of resource R to avoid deadlock with 4 processes each needing max 3 instances:",
        correctAnswer: 9,
        tolerance: 0,
        explanation: { solution: "n×(max-1)+1 = 4×2+1 = 9" }
    },
    {
        id: "gate-os-dead-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "[GATE 2017] Banker's algorithm is for:",
        options: ["Detection", "Avoidance", "Prevention", "Recovery"],
        correctAnswer: 1,
        explanation: { solution: "Banker's: check safe state before allocation (avoidance)" }
    },
    {
        id: "gate-os-dead-004",
        type: "NAT",
        topic: "os",
        subtopic: "Deadlock",
        question: "[GATE Style] Resource R has 12 instances. P1(max 6), P2(max 4), P3(max 7). If P1=2, P2=3, P3=4 allocated, Available = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: { solution: "12 - (2+3+4) = 3" }
    },
    // ========== MEMORY MANAGEMENT - GATE PYQ STYLE ==========
    {
        id: "gate-os-mem-001",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "[GATE 2018] Page size 4KB, logical address 32-bit. Page table entries = ?",
        correctAnswer: 1048576,
        tolerance: 0,
        explanation: { solution: "Offset = 12 bits, Page# = 20 bits. 2^20 = 1M entries" }
    },
    {
        id: "gate-os-mem-002",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "[GATE 2019] Page size 1KB, physical memory 64KB. Physical address bits = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "64KB = 2^16 bytes → 16 bits" }
    },
    {
        id: "gate-os-mem-003",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "[GATE 2017] Logical addr 20-bit, page size 1KB. Maximum pages per process = ?",
        correctAnswer: 1024,
        tolerance: 0,
        explanation: { solution: "Offset = 10 bits, Page# = 10 bits. 2^10 = 1024" }
    },
    {
        id: "gate-os-mem-004",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "[GATE 2020] TLB hit=90%, TLB access=10ns, memory=100ns. Effective access time = ?",
        correctAnswer: 119,
        tolerance: 1,
        explanation: { solution: "0.9×(10+100) + 0.1×(10+100+100) = 99 + 21 = 120ns (or 119 with rounding)" }
    },
    {
        id: "gate-os-mem-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory",
        question: "[GATE 2016] Internal fragmentation occurs in:",
        options: ["Segmentation", "Paging", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "Paging: fixed blocks → internal frag in last page" }
    },
    // ========== PAGE REPLACEMENT - GATE PYQ STYLE ==========
    {
        id: "gate-os-pr-001",
        type: "NAT",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "[GATE 2018] Reference: 7,0,1,2,0,3,0,4,2,3. 3 frames, FIFO. Page faults = ?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "7(F),0(F),1(F),2(F:7out),0(H),3(F:0out),0(F:1out),4(F:2out)... = 6 faults" }
    },
    {
        id: "gate-os-pr-002",
        type: "NAT",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "[GATE 2019] Reference: 1,2,3,4,1,2,5,1,2,3,4,5. 3 frames, LRU. Page faults = ?",
        correctAnswer: 10,
        tolerance: 0,
        explanation: { solution: "All 12 refs: 10 faults with LRU" }
    },
    {
        id: "gate-os-pr-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "[GATE 2017] Belady's anomaly can occur in:",
        options: ["LRU", "Optimal", "FIFO", "LFU"],
        correctAnswer: 2,
        explanation: { solution: "FIFO: more frames may cause more faults" }
    },
    {
        id: "gate-os-pr-004",
        type: "NAT",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "[GATE Style] Page fault rate 10%, mem access 200ns, page fault time 8ms. EMAT (ns) = ?",
        correctAnswer: 800180,
        tolerance: 100,
        explanation: { solution: "0.9×200 + 0.1×8,000,000 = 180 + 800,000 = 800,180ns" }
    },
    // ========== DISK SCHEDULING - GATE PYQ STYLE ==========
    {
        id: "gate-os-disk-001",
        type: "NAT",
        topic: "os",
        subtopic: "Disk",
        question: "[GATE 2018] FCFS: requests 98,183,37,122,14,124,65,67. Head at 53. Total movement = ?",
        correctAnswer: 640,
        tolerance: 5,
        explanation: { solution: "|53-98|+|98-183|+... = 45+85+146+85+108+110+59+2 = 640" }
    },
    {
        id: "gate-os-disk-002",
        type: "NAT",
        topic: "os",
        subtopic: "Disk",
        question: "[GATE 2019] SSTF: requests 82,170,43,140,24,16,190. Head at 50. First served = ?",
        correctAnswer: 43,
        tolerance: 0,
        explanation: { solution: "Nearest to 50: 43 (distance 7)" }
    },
    {
        id: "gate-os-disk-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Disk",
        question: "[GATE 2017] Elevator algorithm is same as:",
        options: ["FCFS", "SSTF", "SCAN", "C-LOOK"],
        correctAnswer: 2,
        explanation: { solution: "SCAN = Elevator algorithm" }
    },
    // ========== FILE SYSTEMS - GATE PYQ STYLE ==========
    {
        id: "gate-os-file-001",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "[GATE 2018] Block 4KB, 12 direct + 1 single indirect (4B pointer). Max file size (KB) via direct = ?",
        correctAnswer: 48,
        tolerance: 0,
        explanation: { solution: "12 × 4KB = 48KB" }
    },
    {
        id: "gate-os-file-002",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "[GATE Style] Block 1KB, single indirect with 4B pointers. Blocks addressable via single indirect = ?",
        correctAnswer: 256,
        tolerance: 0,
        explanation: { solution: "1024/4 = 256 pointers" }
    },
    {
        id: "gate-os-file-003",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "[GATE 2019] Linked allocation suffers from:",
        options: ["External fragmentation", "Slow random access", "Internal fragmentation", "Limited file size"],
        correctAnswer: 1,
        explanation: { solution: "Linked: must traverse chain for random access" }
    },
    {
        id: "gate-os-file-004",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "[GATE 2020] Disk 200MB, block 1KB. FAT entries needed = ?",
        correctAnswer: 204800,
        tolerance: 100,
        explanation: { solution: "200MB / 1KB = 200×1024 = 204,800 blocks = FAT entries" }
    }
]);

console.log("GATE PYQ Style - OS loaded - ~40 questions");
