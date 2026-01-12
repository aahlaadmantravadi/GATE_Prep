/**
 * Operating System MEGA EXPANSION - Scheduling, Memory, Disk, Files
 * Deep coverage of pages 377-450
 */

Questions.register([
    // ========== PROCESS SCHEDULING - NUMERICAL ==========
    {
        id: "os-sched-num-001",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "FCFS: Processes P1,P2,P3 with burst times 24,3,3. Average waiting time = ?",
        correctAnswer: 17,
        tolerance: 0.5,
        explanation: {
            solution: "FCFS (First Come First Serve) executes processes in arrival order. For P1,P2,P3 arriving at time 0: P1 runs 0-24 (waits 0), P2 runs 24-27 (waits 24), P3 runs 27-30 (waits 27). Average waiting time = (0 + 24 + 27) / 3 = 51/3 = 17ms. This illustrates the convoy effect - short jobs P2, P3 wait behind long P1.",
            formula: "$AWT = \\frac{0 + 24 + 27}{3} = 17ms$"
        }
    },
    {
        id: "os-sched-num-002",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "SJF: Processes with burst times 6,8,7,3. Average waiting time = ?",
        correctAnswer: 7,
        tolerance: 0.5,
        explanation: {
            solution: "SJF (Shortest Job First) orders jobs by burst time: 3, 6, 7, 8. Waiting times: Job(3) waits 0, Job(6) waits 3, Job(7) waits 3+6=9, Job(8) waits 3+6+7=16. Total waiting = 0+3+9+16 = 28. Average = 28/4 = 7ms. SJF is provably optimal for minimizing average waiting time.",
            formula: "$AWT = \\frac{0+3+9+16}{4} = 7ms$"
        }
    },
    {
        id: "os-sched-num-003",
        type: "NAT",
        topic: "os",
        subtopic: "Scheduling",
        question: "Round Robin with quantum=4: P1(5), P2(3), P3(8). Total context switches = ?",
        correctAnswer: 5,
        tolerance: 0,
        explanation: {
            solution: "Round Robin with quantum=4: P1 runs 0-4 (4 done, 1 left) → switch. P2 runs 4-7 (completes, only needed 3) → switch. P3 runs 7-11 (4 done, 4 left) → switch. P1 runs 11-12 (completes, 1 unit) → switch. P3 runs 12-16 (completes). Count switches: P1→P2, P2→P3, P3→P1, P1→P3, P3→end = 5 context switches.",
            formula: "Gantt: P1[0-4]→P2[4-7]→P3[7-11]→P1[11-12]→P3[12-16]"
        }
    },
    {
        id: "os-sched-num-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "Which scheduling algorithm is non-preemptive?",
        options: ["Round Robin", "SRTF", "FCFS", "Priority (preemptive)"],
        correctAnswer: 2,
        explanation: {
            solution: "FCFS is strictly non-preemptive - once a process gets the CPU, it runs until it blocks or terminates. Round Robin is preemptive (timer-based). SRTF is preemptive SJF. Preemptive priority can take CPU from running process. Non-preemptive means OS cannot forcibly remove a running process from CPU."
        }
    },
    {
        id: "os-sched-num-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "SRTF is preemptive version of:",
        options: ["FCFS", "SJF", "Round Robin", "Priority"],
        correctAnswer: 1,
        explanation: {
            solution: "SRTF (Shortest Remaining Time First) is the preemptive version of SJF. When a new process arrives with burst time shorter than the REMAINING time of current process, preempt and switch. This gives even better average waiting time than non-preemptive SJF but has more context switch overhead."
        }
    },
    {
        id: "os-sched-num-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "Convoy effect is problem with:",
        options: ["SJF", "FCFS", "Round Robin", "Priority"],
        correctAnswer: 1,
        explanation: {
            solution: "Convoy effect occurs in FCFS: a long CPU-bound process holds the CPU for extended time, while many short I/O-bound processes queue behind it like a convoy. When the long process finally finishes, short processes run quickly, block on I/O, and return to queue behind another long process. Results in poor CPU and I/O device utilization."
        }
    },
    {
        id: "os-sched-num-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "Starvation can occur in:",
        options: ["FCFS", "SJF (indefinite postponement of long jobs)", "Round Robin", "All equally"],
        correctAnswer: 1,
        explanation: {
            solution: "SJF can cause starvation: if short jobs keep arriving, long jobs are perpetually postponed - they may never get CPU time. FCFS doesn't starve (everyone eventually gets served in order). Round Robin guarantees everyone gets CPU within bounded time. Priority scheduling also has starvation for low-priority processes. Solution: aging (gradually increase priority of waiting jobs)."
        }
    },
    {
        id: "os-sched-num-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Scheduling",
        question: "Aging technique prevents starvation by:",
        options: ["Killing old processes", "Increasing priority over time", "Decreasing burst time", "Random selection"],
        correctAnswer: 1,
        explanation: {
            solution: "Aging prevents starvation by gradually increasing the priority of waiting processes over time. Even low-priority processes eventually become high-priority after waiting long enough, guaranteeing they'll eventually get CPU time. Typically implemented by adding priority bonus for each time unit waited in the ready queue."
        }
    },
    // ========== SYNCHRONIZATION ==========
    {
        id: "os-sync-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Critical section problem requires:",
        options: ["Only mutual exclusion", "Mutual exclusion, progress, bounded waiting", "Only progress", "Only deadlock prevention"],
        correctAnswer: 1,
        explanation: {
            solution: "A correct critical section solution must satisfy THREE requirements: (1) Mutual Exclusion - only one process in CS at a time; (2) Progress - if no process in CS, selection among waiting processes can't be postponed indefinitely; (3) Bounded Waiting - a limit exists on how many times other processes enter CS after a process requests entry. All three must be satisfied."
        }
    },
    {
        id: "os-sync-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Semaphore operations are:",
        options: ["lock/unlock", "wait/signal (P/V)", "read/write", "open/close"],
        correctAnswer: 1,
        explanation: {
            solution: "Semaphore operations: wait(S) (also called P from Dutch 'Proberen'=test, or down) decrements S; if S<0, process blocks. signal(S) (also called V from 'Verhogen'=increment, or up) increments S; if blocked processes exist, wakes one. Both operations must be atomic. Invented by Dijkstra in 1965."
        }
    },
    {
        id: "os-sync-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Binary semaphore can have values:",
        options: ["Any integer", "0 and 1 only", "1 to n", "Negative values only"],
        correctAnswer: 1,
        explanation: {
            solution: "Binary semaphore (also called mutex) restricted to values 0 (locked/busy) and 1 (unlocked/free). Used for mutual exclusion. Counting semaphore can have any non-negative integer value, used for resource counting (e.g., managing pool of N identical resources). Binary is a special case of counting with max value 1."
        }
    },
    {
        id: "os-sync-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Counting semaphore with initial value n allows:",
        options: ["1 process", "n processes in critical section", "Unlimited processes", "No processes"],
        correctAnswer: 1,
        explanation: {
            solution: "Counting semaphore initialized to n allows up to n processes to access the resource concurrently. Each wait() decrements the count (representing taking one resource unit); signal() increments (releasing). When count reaches 0, no more resources available - subsequent wait() calls block. Used for resource pools like database connections, printers."
        }
    },
    {
        id: "os-sync-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Monitor ensures mutual exclusion by:",
        options: ["Using semaphores internally", "Allowing only one process active inside", "Disabling interrupts", "Priority inheritance"],
        correctAnswer: 1,
        explanation: {
            solution: "Monitor is a high-level synchronization construct that automatically ensures mutual exclusion: ONLY ONE process can be executing inside the monitor at any time. This is enforced by the compiler/runtime, not by the programmer. Processes trying to enter a busy monitor are automatically blocked. Easier to use correctly than semaphores."
        }
    },
    {
        id: "os-sync-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Condition variables in monitors support:",
        options: ["Mutual exclusion", "wait() and signal() operations", "Priority scheduling", "Memory allocation"],
        correctAnswer: 1,
        explanation: {
            solution: "Condition variables allow processes to wait INSIDE a monitor for some condition. Operations: wait() - release monitor and block until signaled; signal() - wake one waiting process; broadcast() - wake all. Unlike semaphores, condition variable signal is 'lost' if no one is waiting. Used for producer-consumer, readers-writers inside monitors."
        }
    },
    // ========== READERS-WRITERS ==========
    {
        id: "os-rw-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "In readers-writers problem, multiple readers can:",
        options: ["Never access together", "Access simultaneously", "Only if writer waiting", "Only first reader"],
        correctAnswer: 1,
        explanation: {
            solution: "Readers-writers problem: multiple readers CAN read simultaneously since reading doesn't modify shared data (no conflicts). But writers need exclusive access - no readers or other writers allowed during writing. This asymmetry allows better concurrency than simple mutual exclusion while maintaining data consistency."
        }
    },
    {
        id: "os-rw-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "In readers-writers, if reader is reading, writer must:",
        options: ["Read too", "Wait", "Preempt reader", "Abort"],
        correctAnswer: 1,
        explanation: {
            solution: "When any reader is reading, writer must wait until ALL readers finish. Writing requires exclusive access. Classic solutions: reader-priority (writers may starve), writer-priority (readers may starve), or fair solutions that balance both. Implementation uses semaphores to track reader count and control writer access."
        }
    },
    // ========== DINING PHILOSOPHERS ==========
    {
        id: "os-dp-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Dining philosophers with 5 philosophers need ___ forks:",
        options: ["4", "5", "10", "1"],
        correctAnswer: 1,
        explanation: {
            solution: "N philosophers seated at round table need exactly N forks - one between each adjacent pair. Each philosopher needs TWO adjacent forks to eat. With 5 philosophers: 5 forks placed between them. The problem demonstrates deadlock: if all pick up left fork simultaneously, all wait forever for right fork (circular wait)."
        }
    },
    {
        id: "os-dp-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Naive dining philosophers solution (pick left then right) can cause:",
        options: ["Starvation only", "Deadlock", "Livelock only", "No problem"],
        correctAnswer: 1,
        explanation: {
            solution: "Naive solution: each philosopher picks up left fork, then right fork. This causes DEADLOCK if all philosophers simultaneously pick up their left fork - each holds one fork and waits for the other, forming circular wait. All four Coffman conditions are met. Classic example of deadlock in concurrent programming."
        }
    },
    {
        id: "os-dp-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Solution to dining philosophers deadlock: allow at most ___ philosophers to sit:",
        options: ["N", "N-1", "N+1", "2"],
        correctAnswer: 1,
        explanation: {
            solution: "Limiting to N-1 philosophers at table prevents deadlock: with 4 at table and 5 forks, at least one philosopher can always get both forks. Breaks circular wait condition. Other solutions: pick up both forks atomically, odd philosophers pick left first while even pick right first, use a waiter/arbiter to grant fork access."
        }
    },
    // ========== DEADLOCK ==========
    {
        id: "os-dead-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Necessary conditions for deadlock:",
        options: ["Mutual exclusion only", "ME, Hold&Wait, No preemption, Circular wait", "Only circular wait", "Only hold and wait"],
        correctAnswer: 1,
        explanation: {
            solution: "Deadlock requires ALL FOUR Coffman conditions simultaneously: (1) Mutual Exclusion - at least one resource not shareable; (2) Hold and Wait - process holding resources can request more; (3) No Preemption - resources released only voluntarily; (4) Circular Wait - cycle in resource allocation graph. Breaking ANY ONE prevents deadlock."
        }
    },
    {
        id: "os-dead-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Banker's algorithm is for:",
        options: ["Deadlock detection", "Deadlock avoidance", "Deadlock prevention", "Deadlock recovery"],
        correctAnswer: 1,
        explanation: {
            solution: "Banker's algorithm is a deadlock AVOIDANCE strategy. Before granting a resource request, it simulates the allocation and checks if the resulting state is 'safe' (a sequence exists where all processes can complete). If safe, grant; if unsafe, make process wait. Requires knowing maximum resource needs in advance. Named after bank lending analogy."
        }
    },
    {
        id: "os-dead-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Safe state means:",
        options: ["No deadlock currently", "Deadlock can never occur (safe sequence exists)", "All processes done", "No processes waiting"],
        correctAnswer: 1,
        explanation: {
            solution: "Safe state: there exists at least one sequence in which all processes can complete without deadlock. The system can always complete all processes by running them in safe sequence order. Unsafe state doesn't mean deadlock, but CAN lead to deadlock depending on request/release order. Banker's algorithm keeps system in safe state."
        }
    },
    {
        id: "os-dead-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Ostrich algorithm for deadlock:",
        options: ["Prevents deadlock", "Ignores deadlock (pretend it doesn't happen)", "Detects deadlock", "Recovers from deadlock"],
        correctAnswer: 1,
        explanation: {
            solution: "Ostrich algorithm: simply ignore the deadlock problem - pretend it doesn't exist (like an ostrich with head in sand). Used when deadlock is rare and cost of prevention/detection exceeds cost of occasional reboot. Many real systems (Windows, Linux for user processes) use this approach. If deadlock occurs, user reboots."
        }
    },
    {
        id: "os-dead-005",
        type: "NAT",
        topic: "os",
        subtopic: "Deadlock",
        question: "5 processes, 3 resource types. Need matrix size = ?",
        correctAnswer: 15,
        tolerance: 0,
        explanation: {
            solution: "In Banker's algorithm, the Need matrix has dimensions: processes × resource types = 5 × 3 = 15 elements. Each entry Need[i][j] represents maximum additional resources of type j that process i may request. Similarly, Allocation and Max matrices are also 5×3. Available is a vector with 3 elements (one per resource type).",
            formula: "Need matrix: 5 × 3 = 15 elements"
        }
    },
    // ========== MEMORY PAGING ==========
    {
        id: "os-mem-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory",
        question: "Paging eliminates:",
        options: ["Internal fragmentation", "External fragmentation", "Both", "Neither"],
        correctAnswer: 1,
        explanation: {
            solution: "Paging divides memory into fixed-size pages/frames. Any page can go in any free frame, so no contiguous allocation needed. This ELIMINATES external fragmentation (no holes between allocations). However, internal fragmentation still exists: if process needs 10.5 pages, we allocate 11 pages, wasting half a page internally."
        }
    },
    {
        id: "os-mem-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory",
        question: "Segmentation suffers from:",
        options: ["Internal fragmentation", "External fragmentation", "Both", "Neither"],
        correctAnswer: 1,
        explanation: {
            solution: "Segmentation uses variable-sized segments matching logical program units (code, data, stack). Because segments have different sizes, gaps appear between allocated segments when processes terminate - this is EXTERNAL fragmentation. Segmentation doesn't have internal fragmentation since segments are exactly sized to need. Compaction can reduce external fragmentation."
        }
    },
    {
        id: "os-mem-003",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "Page size = 4KB, logical address = 32 bits. Page table entries = ?",
        correctAnswer: 1048576,
        tolerance: 0,
        explanation: {
            solution: "Page size 4KB = 2^12 bytes, so offset needs 12 bits. With 32-bit logical address, page number bits = 32 - 12 = 20 bits. Maximum pages = 2^20 = 1,048,576 (about 1 million). Each page needs one page table entry. This shows why multi-level paging is needed - single-level page table would be huge.",
            formula: "$Entries = 2^{32-12} = 2^{20} = 1,048,576$"
        }
    },
    {
        id: "os-mem-004",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "Page size = 1KB, physical memory = 64KB. Number of frames = ?",
        correctAnswer: 64,
        tolerance: 0,
        explanation: {
            solution: "Number of frames = Physical memory size / Frame size = 64KB / 1KB = 64 frames. Each frame is same size as a page. With 64 frames, frame number needs 6 bits (2^6 = 64). Physical address = frame number (6 bits) + offset within frame (10 bits for 1KB) = 16 bits total.",
            formula: "$Frames = \\frac{64KB}{1KB} = 64$"
        }
    },
    {
        id: "os-mem-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory",
        question: "TLB (Translation Lookaside Buffer) caches:",
        options: ["Page contents", "Page table entries (virtual→physical)", "Disk blocks", "Instructions"],
        correctAnswer: 1,
        explanation: {
            solution: "TLB is a small, fast, associative cache holding recently used page table entries (virtual page number → physical frame number mappings). Without TLB, every memory access requires two accesses: page table then data. With TLB hit, only one access. TLB is typically 16-512 entries with >99% hit rate due to locality of reference."
        }
    },
    {
        id: "os-mem-006",
        type: "NAT",
        topic: "os",
        subtopic: "Memory",
        question: "TLB hit=90%, TLB time=10ns, memory=100ns. EMAT = ?",
        correctAnswer: 120,
        tolerance: 2,
        explanation: {
            solution: "Effective Memory Access Time with TLB: Hit (90%): TLB access + memory access = 10 + 100 = 110ns. Miss (10%): TLB access + page table in memory + data in memory = 10 + 100 + 100 = 210ns. EMAT = 0.9×110 + 0.1×210 = 99 + 21 = 120ns. Without TLB: 200ns for every access. TLB cuts time nearly in half.",
            formula: "$EMAT = 0.9(110) + 0.1(210) = 120ns$"
        }
    },
    // ========== PAGE REPLACEMENT ==========
    {
        id: "os-pr-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Optimal page replacement replaces page:",
        options: ["Oldest", "Used farthest in future", "Least recently used", "Most recently used"],
        correctAnswer: 1,
        explanation: {
            solution: "Optimal (OPT/Belady's) algorithm replaces the page that will NOT be used for the LONGEST time in the FUTURE. Provably minimum page faults. But impractical - requires knowing future references. Used as theoretical benchmark to evaluate practical algorithms. LRU approximates OPT using past behavior to predict future."
        }
    },
    {
        id: "os-pr-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "LRU replaces page:",
        options: ["Used farthest in future", "Oldest", "Not used for longest past time", "Most frequently used"],
        correctAnswer: 2,
        explanation: {
            solution: "LRU (Least Recently Used) replaces the page that hasn't been accessed for the LONGEST time in the PAST. Based on temporal locality: recently used pages likely to be used again soon. Practical approximation of OPT. Can be implemented with counters, stack, or approximated with reference bits (Clock algorithm)."
        }
    },
    {
        id: "os-pr-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Belady's anomaly can occur in:",
        options: ["LRU", "Optimal", "FIFO", "LFU"],
        correctAnswer: 2,
        explanation: {
            solution: "Belady's anomaly: in FIFO, increasing number of frames can INCREASE page faults - counterintuitive! Example: reference string 1,2,3,4,1,2,5,1,2,3,4,5 causes more faults with 4 frames than with 3. FIFO ignores page usage patterns. LRU and OPT are 'stack algorithms' provably immune to this anomaly."
        }
    },
    {
        id: "os-pr-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "LRU and Optimal are immune to Belady's anomaly because they are:",
        options: ["Faster", "Stack algorithms", "Simpler", "Newer"],
        correctAnswer: 1,
        explanation: {
            solution: "Stack algorithms have the property that the set of pages in memory with n frames is always a subset of pages with n+1 frames: M(n) ⊆ M(n+1). Adding frames can only add pages, never remove, so faults can never increase. LRU, OPT, and LFU are stack algorithms. FIFO is not - page set with more frames can be different, not a superset."
        }
    },
    {
        id: "os-pr-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Thrashing occurs when:",
        options: ["CPU utilization high", "Process spends more time paging than executing", "Memory is full", "Disk is slow"],
        correctAnswer: 1,
        explanation: {
            solution: "Thrashing: system constantly paging - processes spend more time waiting for page faults than executing useful code. Symptoms: high page fault rate, high disk activity, LOW CPU utilization (paradox: adding more processes worsens it). Cause: too many processes, not enough frames per process for working set. Solution: reduce multiprogramming."
        }
    },
    // ========== DISK SCHEDULING ==========
    {
        id: "os-disk-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Disk",
        question: "FCFS disk scheduling serves requests in:",
        options: ["Nearest first", "Arrival order", "Shortest seek first", "Direction order"],
        correctAnswer: 1,
        explanation: {
            solution: "FCFS (First Come First Served) disk scheduling processes requests in order of arrival, regardless of disk head position. Simple and fair but inefficient - may cause excessive head movement (zig-zagging across disk). No starvation but poor average seek time. Real disks use smarter algorithms."
        }
    },
    {
        id: "os-disk-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Disk",
        question: "SSTF (Shortest Seek Time First) can cause:",
        options: ["No problem", "Starvation of far requests", "Longer seeks", "More head movement"],
        correctAnswer: 1,
        explanation: {
            solution: "SSTF greedily selects request closest to current head position. Minimizes immediate seek time but requests at far edges of disk may STARVE if requests near center keep arriving. Not fair. Improvement: add aging to distant requests, or use SCAN which has bounded waiting time."
        }
    },
    {
        id: "os-disk-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Disk",
        question: "SCAN (elevator) algorithm moves head:",
        options: ["Randomly", "In one direction then reverses", "Always outward", "Always inward"],
        correctAnswer: 1,
        explanation: {
            solution: "SCAN (Elevator algorithm) moves head in one direction servicing all requests, then reverses direction. Like an elevator going up, then down. Provides uniform wait times (no starvation) and reasonable seek efficiency. Variants: LOOK (reverses at last request, not disk edge), C-SCAN (circular, jumps back to start)."
        }
    },
    {
        id: "os-disk-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Disk",
        question: "C-SCAN differs from SCAN by:",
        options: ["No difference", "Returns to start without servicing (circular)", "Random direction", "Slower"],
        correctAnswer: 1,
        explanation: {
            solution: "C-SCAN (Circular SCAN) services requests in one direction only. After reaching the end, it immediately jumps back to the start without servicing requests during return (treating disk as circular). This provides more uniform wait times - no one waits for head to traverse entire disk twice. SCAN gives unfair advantage to middle tracks."
        }
    },
    {
        id: "os-disk-005",
        type: "NAT",
        topic: "os",
        subtopic: "Disk",
        question: "FCFS requests: 98,183,37,122,14,124,65,67. Head at 53. Total head movement = ?",
        correctAnswer: 640,
        tolerance: 5,
        explanation: {
            solution: "FCFS: process requests in arrival order, calculate distance between each. |53-98|=45, |98-183|=85, |183-37|=146, |37-122|=85, |122-14|=108, |14-124|=110, |124-65|=59, |65-67|=2. Total = 45+85+146+85+108+110+59+2 = 640 cylinders. This shows FCFS inefficiency - lots of back-and-forth.",
            formula: "Total: 45+85+146+85+108+110+59+2 = 640"
        }
    },
    // ========== FILE SYSTEMS ==========
    {
        id: "os-file-001",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Contiguous allocation for files:",
        options: ["No external fragmentation", "Suffers from external fragmentation", "No disk space wasted", "Best for dynamic files"],
        correctAnswer: 1,
        explanation: {
            solution: "Contiguous allocation stores each file in consecutive disk blocks. Pros: fast sequential and random access, simple (just record start and length). Cons: external fragmentation (as files deleted, scattered holes form), difficult to grow files (may need to move entire file). Used in ISO 9660 (CD-ROM) where files don't change."
        }
    },
    {
        id: "os-file-002",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Linked allocation stores each block with pointer to:",
        options: ["FAT", "Next block", "Previous block", "Directory"],
        correctAnswer: 1,
        explanation: {
            solution: "Linked allocation: each disk block contains pointer to next block of the file. Directory entry holds first block pointer. Pros: no external fragmentation, easy to grow files. Cons: random access is O(n) - must traverse entire chain, pointer overhead in each block, one bad pointer loses rest of file."
        }
    },
    {
        id: "os-file-003",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Indexed allocation uses:",
        options: ["Contiguous blocks", "Index block with pointers", "Linked list", "Hash table"],
        correctAnswer: 1,
        explanation: {
            solution: "Indexed allocation: each file has an index block containing pointers to ALL its data blocks. Supports efficient random access (like contiguous) without external fragmentation (like linked). Index block overhead for small files. For large files: linked index blocks, multilevel indexing (Unix inode), or combined scheme."
        }
    },
    {
        id: "os-file-004",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Unix inode uses:",
        options: ["Only direct pointers", "Direct + single + double + triple indirect", "Only indirect", "Contiguous only"],
        correctAnswer: 1,
        explanation: {
            solution: "Unix inode uses multi-level indexing: 12 direct pointers (for small files), 1 single indirect (pointer to block of pointers), 1 double indirect (pointer→block→blocks), 1 triple indirect. Handles files from tiny (only direct pointers used) to huge (up to terabytes) efficiently. Most accesses use direct pointers."
        }
    },
    {
        id: "os-file-005",
        type: "NAT",
        topic: "os",
        subtopic: "File Systems",
        question: "Block size=4KB, pointer=4B, 12 direct + 1 single indirect. Max file size (KB) = ?",
        correctAnswer: 4144,
        tolerance: 10,
        explanation: {
            solution: "Direct blocks: 12 × 4KB = 48KB. Single indirect: one block holds pointers, pointer count = 4KB/4B = 1024 pointers, each to 4KB block = 1024×4KB = 4096KB. Total maximum = 48KB + 4096KB = 4144KB. With double/triple indirect (full Unix inode), maximum file size becomes enormous.",
            formula: "$Max = 12 × 4KB + 1024 × 4KB = 4144KB$"
        }
    }
]);

console.log("OS Mega Expansion loaded - ~55 questions");
