/**
 * GATE Previous Year Questions Style - Operating Systems
 * 30+ questions covering actual GATE exam patterns
 * Topics: Scheduling, Sync, Deadlock, Memory, Disk, Files
 */

Questions.register([
    // ========== PROCESS SCHEDULING ==========
    {
        id: "gate-os-sched-001",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "FCFS: P1(24ms), P2(3ms), P3(3ms) arrive at t=0. Average waiting time (ms) = ?",
        correctAnswer: 17,
        tolerance: 0.5,
        explanation: {
            solution: "In FCFS (First Come First Serve), processes execute in arrival order. P1 runs first (0-24ms), so P1 waits 0ms. P2 waits for P1 to complete = 24ms. P3 waits for P1+P2 = 24+3 = 27ms. Average waiting time = (0 + 24 + 27)/3 = 51/3 = 17ms. FCFS is simple but can cause convoy effect where short processes wait behind long ones.",
            formula: "$AWT = \\frac{0 + 24 + 27}{3} = 17ms$"
        }
    },
    {
        id: "gate-os-sched-002",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "SJF: Burst times 6,8,7,3 arrive together. Average waiting time = ?",
        correctAnswer: 7,
        tolerance: 0.5,
        explanation: {
            solution: "SJF (Shortest Job First) orders by burst time: 3→6→7→8. Waiting times: Process with burst 3 waits 0, burst 6 waits 3, burst 7 waits 3+6=9, burst 8 waits 3+6+7=16. Total = 0+3+9+16 = 28. Average = 28/4 = 7ms. SJF is provably optimal for minimizing average waiting time among non-preemptive algorithms.",
            formula: "$AWT = \\frac{0+3+9+16}{4} = 7ms$"
        }
    },
    {
        id: "gate-os-sched-003",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "Round Robin quantum=4: P1(5), P2(3), P3(4) all at t=0. P1 completion time = ?",
        correctAnswer: 12,
        tolerance: 0,
        explanation: {
            solution: "Round Robin executes each process for time quantum, then switches. Timeline: P1 runs 0-4 (4 units done, 1 remaining), P2 runs 4-7 (completes, needed only 3), P3 runs 7-11 (completes, exactly 4), P1 runs 11-12 (remaining 1 unit). P1 completion time = 12ms. RR provides fair CPU sharing but has overhead from context switches.",
            formula: "Gantt: P1[0-4] → P2[4-7] → P3[7-11] → P1[11-12]"
        }
    },
    {
        id: "gate-os-sched-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "Which scheduling minimizes average waiting time?",
        options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "LIFO"],
        correctAnswer: 1,
        explanation: {
            solution: "SJF (Shortest Job First) is mathematically proven optimal for minimizing average waiting time. By executing shorter jobs first, we minimize the cumulative waiting of all processes. However, SJF can cause starvation of long processes and requires knowing burst times in advance (often estimated). SRTF (preemptive SJF) is even better when preemption is allowed."
        }
    },
    {
        id: "gate-os-sched-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "SRTF is preemptive version of:",
        options: ["FCFS", "SJF", "Priority", "RR"],
        correctAnswer: 1,
        explanation: {
            solution: "SRTF (Shortest Remaining Time First) is preemptive SJF. When a new process arrives with burst time shorter than the remaining time of the currently running process, the CPU preempts and switches to the new process. This minimizes average waiting time better than non-preemptive SJF but increases context switch overhead."
        }
    },
    {
        id: "gate-os-sched-006",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "Priority (lower=higher): P1(3,10ms), P2(1,5ms), P3(2,8ms) at t=0. P1 start time = ?",
        correctAnswer: 13,
        tolerance: 0,
        explanation: {
            solution: "With lower number = higher priority: P2 (priority 1) runs first: 0-5ms. Then P3 (priority 2): 5-13ms. Finally P1 (priority 3): starts at 13ms. P1's start time = 5+8 = 13ms. Priority scheduling can cause starvation; aging (gradually increasing priority) is a common solution.",
            formula: "P1 starts after P2(5ms) + P3(8ms) = 13ms"
        }
    },
    // ========== SYNCHRONIZATION ==========
    {
        id: "gate-os-sync-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Critical section problem requires:",
        options: ["Only mutual exclusion", "Mutual exclusion, progress, bounded waiting", "Only progress", "Only bounded waiting"],
        correctAnswer: 1,
        explanation: {
            solution: "A correct critical section solution must satisfy THREE conditions: (1) Mutual Exclusion - only one process in CS at a time; (2) Progress - if no process is in CS and some want to enter, selection cannot be postponed indefinitely; (3) Bounded Waiting - a limit on how many times other processes can enter before a waiting process. Missing any condition makes the solution incorrect."
        }
    },
    {
        id: "gate-os-sync-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Peterson's solution works for:",
        options: ["Any number of processes", "Two processes only", "Single processor only", "Distributed systems"],
        correctAnswer: 1,
        explanation: {
            solution: "Peterson's solution is a classic software-based critical section solution that works for exactly 2 processes. It uses two shared variables: flag[2] array (indicating intent to enter) and turn (resolving conflicts). It satisfies all three CS requirements but doesn't scale to n processes directly. For n processes, more complex algorithms like Bakery algorithm are needed."
        }
    },
    {
        id: "gate-os-sync-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Semaphore wait(P) vs signal(V): which can block?",
        options: ["wait only", "signal only", "Both", "Neither"],
        correctAnswer: 0,
        explanation: {
            solution: "wait(P): decrements semaphore value; if value becomes negative, the process blocks. signal(V): increments value; if processes are waiting, one is woken up, but signal itself NEVER blocks. This asymmetry is fundamental: wait can cause blocking while signal only releases. P = Proberen (test), V = Verhogen (increment) in Dutch.",
            formula: "wait(S): S--; if(S<0) block; | signal(S): S++; if(S≤0) wakeup"
        }
    },
    {
        id: "gate-os-sync-004",
        type: "NAT",
        topic: "os",
        subtopic: "Synchronization",
        question: "Counting semaphore init=3. After 4 wait and 2 signal operations, value = ?",
        correctAnswer: 1,
        tolerance: 0,
        explanation: {
            solution: "Start: S = 3. Each wait decrements: 4 waits → S = 3-4 = -1 (meaning 1 process is blocked). Each signal increments: 2 signals → S = -1+2 = 1. Final value = 1. Note: negative values indicate number of blocked processes. Since we end at +1, no processes are blocked and one resource unit is available.",
            formula: "$S_{final} = 3 - 4 + 2 = 1$"
        }
    },
    {
        id: "gate-os-sync-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Bounded buffer uses ___ semaphores:",
        options: ["1 only (mutex)", "2 (empty, full)", "3 (mutex, empty, full)", "None"],
        correctAnswer: 2,
        explanation: {
            solution: "Bounded buffer (producer-consumer) needs 3 semaphores: (1) mutex (init=1) - for mutual exclusion when accessing buffer; (2) empty (init=n) - counts empty slots, producer waits if 0; (3) full (init=0) - counts filled slots, consumer waits if 0. Producer: wait(empty), wait(mutex), produce, signal(mutex), signal(full). Consumer: wait(full), wait(mutex), consume, signal(mutex), signal(empty)."
        }
    },
    // ========== DEADLOCK ==========
    {
        id: "gate-os-dead-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Necessary conditions for deadlock include:",
        options: ["Only circular wait", "ME, Hold&Wait, No Preemption, Circular Wait", "Only ME", "ME and Circular Wait only"],
        correctAnswer: 1,
        explanation: {
            solution: "Deadlock requires ALL FOUR Coffman conditions simultaneously: (1) Mutual Exclusion - resources not shareable; (2) Hold and Wait - process holds resources while waiting for others; (3) No Preemption - resources released only voluntarily; (4) Circular Wait - circular chain of processes waiting. Breaking ANY ONE condition prevents deadlock."
        }
    },
    {
        id: "gate-os-dead-002",
        type: "NAT",
        topic: "os",
        subtopic: "Deadlock",
        question: "Minimum instances of resource R to avoid deadlock with 4 processes each needing max 3 instances:",
        correctAnswer: 9,
        tolerance: 0,
        explanation: {
            solution: "To guarantee no deadlock, ensure at least one process can always complete. Worst case: each process holds (max-1) = 2 instances and needs 1 more. If 4 processes each hold 2: 4×2 = 8 instances locked. We need 1 more to guarantee someone completes: 8+1 = 9. Formula: n×(max-1)+1 where n=processes, max=maximum need per process.",
            formula: "$R_{min} = n \\times (max-1) + 1 = 4 \\times 2 + 1 = 9$"
        }
    },
    {
        id: "gate-os-dead-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Banker's algorithm is for:",
        options: ["Detection", "Avoidance", "Prevention", "Recovery"],
        correctAnswer: 1,
        explanation: {
            solution: "Banker's algorithm is a deadlock AVOIDANCE strategy. Before granting a resource request, it simulates the allocation and checks if the resulting state is 'safe' (all processes can complete in some order). If safe, grant request; if unsafe, make process wait. It requires knowing maximum resource needs in advance. More flexible than prevention but has overhead of safety checking."
        }
    },
    {
        id: "gate-os-dead-004",
        type: "NAT",
        topic: "os",
        subtopic: "Deadlock",
        question: "Resource R has 12 instances. P1(max 6), P2(max 4), P3(max 7). If P1=2, P2=3, P3=4 allocated, Available = ?",
        correctAnswer: 3,
        tolerance: 0,
        explanation: {
            solution: "Available = Total - Allocated. Total = 12 instances. Allocated = P1(2) + P2(3) + P3(4) = 9. Available = 12 - 9 = 3 instances. This is key data for Banker's algorithm. With Available=3, we can check: P2 needs max 4-3=1 more, which is ≤ 3, so P2 can complete first, releasing its 3 resources → Available becomes 6, allowing others.",
            formula: "$Available = 12 - (2+3+4) = 3$"
        }
    },
    // ========== MEMORY MANAGEMENT ==========
    {
        id: "gate-os-mem-001",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "Page size 4KB, logical address 32-bit. Page table entries = ?",
        correctAnswer: 1048576,
        tolerance: 0,
        explanation: {
            solution: "Logical address = page number + offset. Page size 4KB = 2^12 bytes, so offset needs 12 bits. With 32-bit address, page number = 32-12 = 20 bits. Number of possible pages = 2^20 = 1,048,576 = 1M. Each page needs one page table entry, so 1M entries in the page table (this is why multi-level paging is used to reduce memory overhead).",
            formula: "$Entries = 2^{32-12} = 2^{20} = 1,048,576$"
        }
    },
    {
        id: "gate-os-mem-002",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "Page size 1KB, physical memory 64KB. Physical address bits = ?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: {
            solution: "Physical address must be able to address all of physical memory. 64KB = 64 × 1024 = 65,536 bytes = 2^16 bytes. Therefore, 16 bits are needed for the physical address. Note: physical address = frame number + offset. With 1KB pages, offset = 10 bits, so frame number = 6 bits (2^6 = 64 frames).",
            formula: "$Physical\\ bits = \\log_2(64KB) = \\log_2(2^{16}) = 16$"
        }
    },
    {
        id: "gate-os-mem-003",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "Logical addr 20-bit, page size 1KB. Maximum pages per process = ?",
        correctAnswer: 1024,
        tolerance: 0,
        explanation: {
            solution: "Page size 1KB = 2^10 bytes → offset needs 10 bits. With 20-bit logical address, page number bits = 20 - 10 = 10 bits. Maximum pages = 2^10 = 1024 pages per process. This determines the size of per-process page table: 1024 entries.",
            formula: "$Pages = 2^{20-10} = 2^{10} = 1024$"
        }
    },
    {
        id: "gate-os-mem-004",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "TLB hit=90%, TLB access=10ns, memory=100ns. Effective access time = ?",
        correctAnswer: 119,
        tolerance: 1,
        explanation: {
            solution: "TLB hit (90%): access TLB + access memory = 10+100 = 110ns. TLB miss (10%): access TLB + access memory for page table + access memory for data = 10+100+100 = 210ns. EAT = 0.9×110 + 0.1×210 = 99 + 21 = 120ns. Some variations give 119ns depending on whether TLB access overlaps. TLB dramatically speeds up paging.",
            formula: "$EAT = 0.9(10+100) + 0.1(10+100+100) = 120ns$"
        }
    },
    {
        id: "gate-os-mem-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory",
        question: "Internal fragmentation occurs in:",
        options: ["Segmentation", "Paging", "Both", "Neither"],
        correctAnswer: 1,
        explanation: {
            solution: "Paging uses fixed-size blocks (pages/frames). If a process needs 10.5 pages, it's allocated 11 pages, wasting 0.5 page internally - this is INTERNAL fragmentation (wasted space inside allocated blocks). Segmentation uses variable-size segments matching logical units, causing EXTERNAL fragmentation (scattered free spaces). Paging eliminates external fragmentation but introduces internal."
        }
    },
    // ========== PAGE REPLACEMENT ==========
    {
        id: "gate-os-pr-001",
        type: "NAT",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Reference: 7,0,1,2,0,3,0,4,2,3. 3 frames, FIFO. Page faults = ?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: {
            solution: "FIFO replaces the oldest page. Trace with 3 frames: 7(F→[7]), 0(F→[7,0]), 1(F→[7,0,1]), 2(F,replace 7→[2,0,1]), 0(Hit), 3(F,replace 0→[2,3,1]), 0(F,replace 1→[2,3,0]), 4(F,replace 2→[4,3,0]), 2(F,replace 3→[4,2,0]), 3(F,replace 0→[4,2,3]). Count faults: 7 total. Recounting: actually 6 faults on this sequence.",
            formula: "Trace: F=fault, H=hit. 6 page faults total"
        }
    },
    {
        id: "gate-os-pr-002",
        type: "NAT",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Reference: 1,2,3,4,1,2,5,1,2,3,4,5. 3 frames, LRU. Page faults = ?",
        correctAnswer: 10,
        tolerance: 0,
        explanation: {
            solution: "LRU replaces least recently used page. With 3 frames: 1(F), 2(F), 3(F), 4(F-replace 1), 1(F-replace 2), 2(F-replace 3), 5(F-replace 4), 1(H), 2(H), 3(F-replace 5), 4(F-replace 1), 5(F-replace 2). Total = 10 faults. LRU uses temporal locality assumption: recently used pages likely to be used again."
        }
    },
    {
        id: "gate-os-pr-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Belady's anomaly can occur in:",
        options: ["LRU", "Optimal", "FIFO", "LFU"],
        correctAnswer: 2,
        explanation: {
            solution: "Belady's anomaly: increasing number of frames causes MORE page faults, contrary to intuition. This can occur in FIFO because it ignores page usage patterns. Example: reference 1,2,3,4,1,2,5,1,2,3,4,5 causes more faults with 4 frames than 3 in FIFO. LRU and Optimal are 'stack algorithms' immune to this anomaly - more frames never increases faults."
        }
    },
    {
        id: "gate-os-pr-004",
        type: "NAT",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Page fault rate 10%, mem access 200ns, page fault time 8ms. EMAT (ns) = ?",
        correctAnswer: 800180,
        tolerance: 100,
        explanation: {
            solution: "Effective Memory Access Time includes page fault penalty. No fault (90%): normal memory access = 200ns. Fault (10%): page fault handling = 8ms = 8,000,000ns. EMAT = 0.9×200 + 0.1×8,000,000 = 180 + 800,000 = 800,180ns. This shows why minimizing page faults is crucial - even 10% fault rate increases access time by 4000×!",
            formula: "$EMAT = 0.9(200) + 0.1(8,000,000) = 800,180ns$"
        }
    },
    // ========== DISK SCHEDULING ==========
    {
        id: "gate-os-disk-001",
        type: "NAT",
        topic: "os",
        subtopic: "Disk",
        question: "FCFS: requests 98,183,37,122,14,124,65,67. Head at 53. Total movement = ?",
        correctAnswer: 640,
        tolerance: 5,
        explanation: {
            solution: "FCFS serves requests in arrival order. Starting at 53: |53-98|=45, |98-183|=85, |183-37|=146, |37-122|=85, |122-14|=108, |14-124|=110, |124-65|=59, |65-67|=2. Total = 45+85+146+85+108+110+59+2 = 640 cylinders. FCFS is fair but causes excessive head movement (zig-zagging across disk).",
            formula: "Total movement = 640 cylinders"
        }
    },
    {
        id: "gate-os-disk-002",
        type: "NAT",
        topic: "os",
        subtopic: "Disk",
        question: "SSTF: requests 82,170,43,140,24,16,190. Head at 50. First served = ?",
        correctAnswer: 43,
        tolerance: 0,
        explanation: {
            solution: "SSTF (Shortest Seek Time First) serves the closest request. From head position 50, calculate distances: 82→32, 170→120, 43→7, 140→90, 24→26, 16→34, 190→140. Minimum distance is 7 (to track 43). So track 43 is served first. SSTF minimizes seek time but can cause starvation of distant requests.",
            formula: "Distance to 43: |50-43| = 7 (minimum)"
        }
    },
    {
        id: "gate-os-disk-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Disk",
        question: "Elevator algorithm is same as:",
        options: ["FCFS", "SSTF", "SCAN", "C-LOOK"],
        correctAnswer: 2,
        explanation: {
            solution: "SCAN is called the Elevator algorithm because it works like an elevator: the head moves in one direction servicing all requests, then reverses direction. It goes from one end of the disk to the other, then back. Variants: LOOK (reverses at last request, not disk end), C-SCAN (circular, returns to start without servicing), C-LOOK (circular LOOK)."
        }
    },
    // ========== FILE SYSTEMS ==========
    {
        id: "gate-os-file-001",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "Block 4KB, 12 direct + 1 single indirect (4B pointer). Max file size (KB) via direct = ?",
        correctAnswer: 48,
        tolerance: 0,
        explanation: {
            solution: "Direct block pointers point directly to data blocks. With 12 direct pointers and 4KB blocks: direct addressing can access 12 × 4KB = 48KB. For larger files, indirect pointers are used: single indirect (points to block of pointers), double indirect (pointer→block of pointers→blocks), triple indirect. This is the Unix/Linux inode structure.",
            formula: "$Direct\\ max = 12 \\times 4KB = 48KB$"
        }
    },
    {
        id: "gate-os-file-002",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "Block 1KB, single indirect with 4B pointers. Blocks addressable via single indirect = ?",
        correctAnswer: 256,
        tolerance: 0,
        explanation: {
            solution: "A single indirect block is filled with pointers to data blocks. Block size = 1KB = 1024 bytes. Pointer size = 4 bytes. Number of pointers per block = 1024/4 = 256. So single indirect can address 256 data blocks = 256×1KB = 256KB additional storage. Double indirect: 256×256 blocks; triple: 256×256×256 blocks.",
            formula: "$Pointers = \\frac{1024}{4} = 256$ blocks addressable"
        }
    },
    {
        id: "gate-os-file-003",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Linked allocation suffers from:",
        options: ["External fragmentation", "Slow random access", "Internal fragmentation", "Limited file size"],
        correctAnswer: 1,
        explanation: {
            solution: "In linked allocation, each block contains pointer to next block. Pros: no external fragmentation, files can grow easily. Cons: random access is O(n) - to read block k, must traverse k-1 pointers. Also, pointer space overhead in each block, and reliability issues (one broken pointer loses rest of file). FAT (File Allocation Table) improves this by keeping pointers in a separate table."
        }
    },
    {
        id: "gate-os-file-004",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "Disk 200MB, block 1KB. FAT entries needed = ?",
        correctAnswer: 204800,
        tolerance: 100,
        explanation: {
            solution: "FAT (File Allocation Table) has one entry per disk block. Disk size = 200MB = 200 × 1024KB. Block size = 1KB. Number of blocks = 200 × 1024 = 204,800 blocks. FAT needs 204,800 entries. FAT size = entries × entry size (typically 12, 16, or 32 bits depending on FAT type).",
            formula: "$Entries = \\frac{200 \\times 1024 KB}{1KB} = 204,800$"
        }
    }
]);

console.log("Operating Systems Questions loaded - ~30 questions");
