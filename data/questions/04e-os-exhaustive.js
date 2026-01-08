/**
 * Operating Systems EXHAUSTIVE
 * Processes, CPU Scheduling, Synchronization, Deadlock, Memory, File Systems
 */

Questions.register([
    // ========== PROCESS BASICS ==========
    {
        id: "os2-proc-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Process states include:",
        options: ["Only running", "New, Ready, Running, Waiting, Terminated", "Ready and Running only", "Running and Blocked only"],
        correctAnswer: 1,
        explanation: { solution: "5-state model: New → Ready → Running → Terminated, with Waiting/Blocked" }
    },
    {
        id: "os2-proc-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "PCB (Process Control Block) contains:",
        options: ["Only PID", "PID, state, PC, registers, memory info, I/O status", "Only memory address", "Only priority"],
        correctAnswer: 1,
        explanation: { solution: "PCB: all process info (PID, state, registers, memory maps, etc.)" }
    },
    {
        id: "os2-proc-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Context switch involves:",
        options: ["Only saving PC", "Saving state of current process, loading state of next process", "Restarting the CPU", "Deleting the process"],
        correctAnswer: 1,
        explanation: { solution: "Context switch: save current PCB, restore next PCB (overhead)" }
    },
    {
        id: "os2-proc-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "fork() system call creates:",
        options: ["Thread", "Child process (copy of parent)", "File", "Signal"],
        correctAnswer: 1,
        explanation: { solution: "fork(): creates child process, returns 0 to child, child PID to parent" }
    },
    {
        id: "os2-proc-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "exec() system call:",
        options: ["Creates new process", "Replaces current process image with new program", "Terminates process", "Creates thread"],
        correctAnswer: 1,
        explanation: { solution: "exec(): replaces process code/data with new program" }
    },
    {
        id: "os2-proc-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Zombie process is a process that:",
        options: ["Is running", "Has terminated but parent hasn't called wait()", "Has no PCB", "Is waiting for I/O"],
        correctAnswer: 1,
        explanation: { solution: "Zombie: terminated but entry in process table until parent reads exit status" }
    },
    {
        id: "os2-proc-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Orphan process is a process whose:",
        options: ["Has no children", "Parent has terminated", "Has infinite priority", "Is waiting forever"],
        correctAnswer: 1,
        explanation: { solution: "Orphan: parent terminated, inherited by init (PID 1)" }
    },
    // ========== THREADS ==========
    {
        id: "os2-thread-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Threads",
        question: "Threads within same process share:",
        options: ["Stack", "Code, data, heap, open files", "Registers", "PC"],
        correctAnswer: 1,
        explanation: { solution: "Threads share: code, data, heap, files. Own: stack, registers, PC" }
    },
    {
        id: "os2-thread-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Threads",
        question: "User-level threads vs kernel-level threads: context switch is faster for:",
        options: ["Kernel threads", "User threads", "Both same", "Neither has context switch"],
        correctAnswer: 1,
        explanation: { solution: "User threads: no kernel involvement, faster switch" }
    },
    {
        id: "os2-thread-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Threads",
        question: "If one user-level thread blocks on I/O:",
        options: ["Only that thread blocks", "Entire process blocks", "All threads continue", "No blocking occurs"],
        correctAnswer: 1,
        explanation: { solution: "User threads: kernel sees one process, if thread blocks → process blocks" }
    },
    // ========== CPU SCHEDULING ==========
    {
        id: "os2-sched-001",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Preemptive scheduling allows:",
        options: ["Process to run until completion", "OS to interrupt running process", "No context switching", "Only I/O scheduling"],
        correctAnswer: 1,
        explanation: { solution: "Preemptive: OS can take CPU from running process" }
    },
    {
        id: "os2-sched-002",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Non-preemptive scheduling means:",
        options: ["OS can interrupt anytime", "Process runs until it blocks or terminates", "No scheduling", "Only for real-time"],
        correctAnswer: 1,
        explanation: { solution: "Non-preemptive/cooperative: process gives up CPU voluntarily" }
    },
    {
        id: "os2-sched-003",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "FCFS (First Come First Serve) is:",
        options: ["Preemptive", "Non-preemptive", "Both", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "FCFS: non-preemptive, simple FIFO queue" }
    },
    {
        id: "os2-sched-004",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Convoy effect occurs in:",
        options: ["SJF", "FCFS (short jobs behind long job)", "Round Robin", "Priority scheduling"],
        correctAnswer: 1,
        explanation: { solution: "FCFS convoy: short processes wait behind long CPU-bound process" }
    },
    {
        id: "os2-sched-005",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "SJF (Shortest Job First) minimizes:",
        options: ["Response time", "Average waiting time", "Throughput", "Turnaround time"],
        correctAnswer: 1,
        explanation: { solution: "SJF optimal for minimizing average waiting time" }
    },
    {
        id: "os2-sched-006",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "SJF can cause starvation of:",
        options: ["Short jobs", "Long jobs (may never get CPU)", "All jobs", "No starvation"],
        correctAnswer: 1,
        explanation: { solution: "SJF starvation: long jobs postponed indefinitely by short jobs" }
    },
    {
        id: "os2-sched-007",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "SRTF (Shortest Remaining Time First) is:",
        options: ["Non-preemptive SJF", "Preemptive SJF", "FCFS variant", "Round Robin variant"],
        correctAnswer: 1,
        explanation: { solution: "SRTF = preemptive SJF: preempt if new job has shorter remaining time" }
    },
    {
        id: "os2-sched-008",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Round Robin scheduling is:",
        options: ["Non-preemptive", "Preemptive with time quantum", "Priority based", "FCFS based"],
        correctAnswer: 1,
        explanation: { solution: "RR: preemptive, each process gets time quantum then moves to queue end" }
    },
    {
        id: "os2-sched-009",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "If time quantum is very large, Round Robin behaves like:",
        options: ["SJF", "FCFS", "Priority", "SRTF"],
        correctAnswer: 1,
        explanation: { solution: "Large quantum: each process finishes in one burst → FCFS" }
    },
    {
        id: "os2-sched-010",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "If time quantum is very small in RR:",
        options: ["Less context switches", "High context switch overhead", "Better for long jobs", "No overhead"],
        correctAnswer: 1,
        explanation: { solution: "Small quantum: too many context switches, high overhead" }
    },
    {
        id: "os2-sched-011",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Priority scheduling can cause starvation, solved by:",
        options: ["Ignoring priorities", "Aging (increase priority over time)", "Reducing all priorities", "Using FCFS instead"],
        correctAnswer: 1,
        explanation: { solution: "Aging: gradually increase priority of waiting processes" }
    },
    {
        id: "os2-sched-012",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Multilevel Queue scheduling:",
        options: ["Has one queue", "Has multiple queues with different priorities/scheduling", "Uses only RR", "Uses only FCFS"],
        correctAnswer: 1,
        explanation: { solution: "MLQ: separate queues for different process types (foreground, background)" }
    },
    {
        id: "os2-sched-013",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Multilevel Feedback Queue allows:",
        options: ["Movement between queues based on behavior", "No movement between queues", "Only priority changes", "Fixed queue assignment"],
        correctAnswer: 0,
        explanation: { solution: "MLFQ: processes can move between queues based on CPU usage" }
    },
    // ========== SCHEDULING METRICS ==========
    {
        id: "os2-metric-001",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Turnaround time = ?",
        options: ["Waiting time only", "Completion time - Arrival time", "Response time only", "Burst time only"],
        correctAnswer: 1,
        explanation: { solution: "TAT = Completion - Arrival (total time in system)", formula: "TAT = CT - AT" }
    },
    {
        id: "os2-metric-002",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Waiting time = ?",
        options: ["Turnaround time - Burst time", "Burst time - Arrival time", "Completion time only", "Response time only"],
        correctAnswer: 0,
        explanation: { solution: "WT = TAT - BT (time spent waiting in ready queue)", formula: "WT = TAT - BT" }
    },
    {
        id: "os2-metric-003",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Response time = ?",
        options: ["Time to completion", "First response time - Arrival time", "Burst time", "Waiting time"],
        correctAnswer: 1,
        explanation: { solution: "RT = First_CPU_time - Arrival (important for interactive)", formula: "RT = FirstCPU - AT" }
    },
    // ========== SYNCHRONIZATION ==========
    {
        id: "os2-sync-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Race condition occurs when:",
        options: ["Processes run sequentially", "Multiple processes access shared data concurrently and outcome depends on order", "Only one process runs", "No shared data exists"],
        correctAnswer: 1,
        explanation: { solution: "Race: result depends on non-deterministic timing of concurrent accesses" }
    },
    {
        id: "os2-sync-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Critical section is:",
        options: ["Any code", "Code that accesses shared resources", "Only read operations", "Only write operations"],
        correctAnswer: 1,
        explanation: { solution: "Critical section: code accessing shared resources, needs mutual exclusion" }
    },
    {
        id: "os2-sync-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Requirements for critical section solution:",
        options: ["Only mutual exclusion", "Mutual exclusion, progress, bounded waiting", "Only progress", "None required"],
        correctAnswer: 1,
        explanation: { solution: "CS requirements: mutual exclusion, progress, bounded waiting" }
    },
    {
        id: "os2-sync-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Peterson's solution works for:",
        options: ["Any number of processes", "2 processes only", "1 process only", "Distributed systems"],
        correctAnswer: 1,
        explanation: { solution: "Peterson's: software solution for 2 processes" }
    },
    {
        id: "os2-sync-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Semaphore is an integer variable accessed via:",
        options: ["Any operation", "wait() (P) and signal() (V) atomic operations", "Read and write only", "Increment only"],
        correctAnswer: 1,
        explanation: { solution: "Semaphore: wait(S)/P decrements, signal(S)/V increments atomically" }
    },
    {
        id: "os2-sync-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Binary semaphore (mutex) has values:",
        options: ["Any integer", "0 or 1 only", "Only positive", "Only negative"],
        correctAnswer: 1,
        explanation: { solution: "Binary semaphore = mutex: 0 (locked) or 1 (unlocked)" }
    },
    {
        id: "os2-sync-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Counting semaphore is used for:",
        options: ["Only mutual exclusion", "Resource counting (multiple instances)", "Only signaling", "Only blocking"],
        correctAnswer: 1,
        explanation: { solution: "Counting semaphore: manage pool of resources (value = available count)" }
    },
    {
        id: "os2-sync-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Producer-Consumer problem requires:",
        options: ["1 semaphore", "3 semaphores (mutex, full, empty)", "No synchronization", "Only mutex"],
        correctAnswer: 1,
        explanation: { solution: "Bounded buffer: mutex (protect buffer), full (items count), empty (spaces count)" }
    },
    {
        id: "os2-sync-009",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Readers-Writers problem: multiple readers can read simultaneously if:",
        options: ["A writer is writing", "No writer is writing", "Always allowed", "Never allowed"],
        correctAnswer: 1,
        explanation: { solution: "Readers: concurrent reading OK if no writers; writing is exclusive" }
    },
    {
        id: "os2-sync-010",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Dining Philosophers problem demonstrates:",
        options: ["Only mutual exclusion", "Deadlock possibility", "No synchronization needed", "Thread creation"],
        correctAnswer: 1,
        explanation: { solution: "Dining philosophers: classic deadlock example (circular wait on forks)" }
    },
    {
        id: "os2-sync-011",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Monitor is a high-level synchronization construct with:",
        options: ["Only shared variables", "Shared data, procedures, implicit mutual exclusion", "No mutual exclusion", "Only signals"],
        correctAnswer: 1,
        explanation: { solution: "Monitor: ADT with implicit mutex, condition variables for waiting" }
    },
    // ========== DEADLOCK ==========
    {
        id: "os2-dead-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock conditions (Coffman conditions):",
        options: ["Mutual exclusion only", "Mutual exclusion, hold and wait, no preemption, circular wait", "Only circular wait", "None required"],
        correctAnswer: 1,
        explanation: { solution: "All 4 conditions must hold: mutex, hold-wait, no-preemption, circular-wait" }
    },
    {
        id: "os2-dead-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock prevention breaks at least one of the four conditions by:",
        options: ["Ignoring the problem", "Denying one of the necessary conditions", "Detecting after occurrence", "Doing nothing"],
        correctAnswer: 1,
        explanation: { solution: "Prevention: ensure one condition cannot hold (e.g., request all at once)" }
    },
    {
        id: "os2-dead-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock avoidance checks:",
        options: ["Nothing", "If granting request leads to safe state", "Only current state", "Only previous states"],
        correctAnswer: 1,
        explanation: { solution: "Avoidance: grant only if system remains in safe state" }
    },
    {
        id: "os2-dead-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Banker's algorithm is used for:",
        options: ["Deadlock prevention", "Deadlock avoidance", "Deadlock detection", "Deadlock recovery"],
        correctAnswer: 1,
        explanation: { solution: "Banker's: deadlock avoidance, checks safe state before granting" }
    },
    {
        id: "os2-dead-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Safe state means:",
        options: ["No processes running", "There exists a sequence in which all processes can complete", "All resources free", "Deadlock has occurred"],
        correctAnswer: 1,
        explanation: { solution: "Safe: exists safe sequence where all can finish" }
    },
    {
        id: "os2-dead-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock detection uses:",
        options: ["Prevention conditions", "Resource allocation graph or matrix algorithm", "Avoidance algorithm", "No algorithm"],
        correctAnswer: 1,
        explanation: { solution: "Detection: periodically check for cycles in resource graph" }
    },
    {
        id: "os2-dead-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Resource Allocation Graph has cycle → deadlock if:",
        options: ["Always", "Single instance of each resource type", "Never", "Multiple instances guarantee deadlock"],
        correctAnswer: 1,
        explanation: { solution: "Cycle + single instances = deadlock; cycle + multiple instances = possible deadlock" }
    },
    // ========== MEMORY MANAGEMENT ==========
    {
        id: "os2-mem-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Logical (virtual) address is generated by:",
        options: ["Memory", "MMU", "CPU", "Disk"],
        correctAnswer: 2,
        explanation: { solution: "CPU generates logical address, MMU translates to physical" }
    },
    {
        id: "os2-mem-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Physical address is the actual:",
        options: ["Address in virtual space", "Address in physical memory (RAM)", "Disk address", "Register address"],
        correctAnswer: 1,
        explanation: { solution: "Physical address: actual location in RAM" }
    },
    {
        id: "os2-mem-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "External fragmentation occurs in:",
        options: ["Paging", "Contiguous allocation (variable partitions)", "Segmentation with paging", "Only virtual memory"],
        correctAnswer: 1,
        explanation: { solution: "External frag: free memory scattered in small non-contiguous holes" }
    },
    {
        id: "os2-mem-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Internal fragmentation occurs in:",
        options: ["Variable partitions", "Fixed partitions, paging (wasted space in allocated block)", "Only segmentation", "Never occurs"],
        correctAnswer: 1,
        explanation: { solution: "Internal frag: allocated block larger than needed, wasted internal space" }
    },
    {
        id: "os2-mem-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Paging divides:",
        options: ["Only physical memory into frames", "Logical memory into pages, physical into frames of same size", "Only logical memory", "Memory randomly"],
        correctAnswer: 1,
        explanation: { solution: "Paging: pages (logical) → frames (physical), same size, no external frag" }
    },
    {
        id: "os2-mem-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Page table maps:",
        options: ["Physical to logical", "Page number to frame number", "Frame to disk", "Nothing"],
        correctAnswer: 1,
        explanation: { solution: "Page table: page number → frame number translation" }
    },
    {
        id: "os2-mem-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "TLB is:",
        options: ["Disk cache", "Cache for page table entries", "Main memory", "Process cache"],
        correctAnswer: 1,
        explanation: { solution: "TLB: fast associative cache for recently used page table entries" }
    },
    {
        id: "os2-mem-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Effective Access Time with TLB = ?",
        options: ["TLB time + Memory time", "TLB_hit × (TLB + mem) + TLB_miss × (TLB + 2×mem)", "Memory time only", "Always same as no TLB"],
        correctAnswer: 1,
        explanation: { solution: "EAT = h(TLB + mem) + (1-h)(TLB + 2×mem) where h = hit ratio" }
    },
    {
        id: "os2-mem-009",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Segmentation divides program into:",
        options: ["Fixed size pages", "Logical segments of variable size (code, data, stack)", "Equal partitions", "Random chunks"],
        correctAnswer: 1,
        explanation: { solution: "Segmentation: logical division, variable sizes, user/compiler view" }
    },
    // ========== PAGE REPLACEMENT ==========
    {
        id: "os2-pr-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Page fault occurs when:",
        options: ["Page is in memory", "Required page not in memory (must load from disk)", "Memory is full", "TLB hit"],
        correctAnswer: 1,
        explanation: { solution: "Page fault: page not in RAM, OS must fetch from disk" }
    },
    {
        id: "os2-pr-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Optimal page replacement (OPT) replaces page that:",
        options: ["Was used most recently", "Will not be used for longest time in future", "Was used first", "Is smallest"],
        correctAnswer: 1,
        explanation: { solution: "OPT: replace page not needed for longest (requires future knowledge)" }
    },
    {
        id: "os2-pr-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "LRU page replacement replaces:",
        options: ["Most recently used page", "Least recently used page", "First loaded page", "Random page"],
        correctAnswer: 1,
        explanation: { solution: "LRU: replace page not used for longest (practical approximation of OPT)" }
    },
    {
        id: "os2-pr-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "FIFO page replacement replaces:",
        options: ["LRU page", "First page that was loaded", "Most recently loaded", "Optimal page"],
        correctAnswer: 1,
        explanation: { solution: "FIFO: replace oldest page (first in first out)" }
    },
    {
        id: "os2-pr-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Belady's anomaly occurs in:",
        options: ["LRU", "OPT", "FIFO (more frames can cause more page faults)", "All algorithms"],
        correctAnswer: 2,
        explanation: { solution: "FIFO can have Belady's anomaly: more frames → more faults" }
    },
    {
        id: "os2-pr-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Clock (Second Chance) algorithm is approximation of:",
        options: ["FIFO", "LRU", "OPT", "Random"],
        correctAnswer: 1,
        explanation: { solution: "Clock: LRU approximation using reference bit" }
    },
    {
        id: "os2-pr-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Thrashing occurs when:",
        options: ["Many processes complete", "Processes spend more time page faulting than executing", "Memory is empty", "CPU is idle by choice"],
        correctAnswer: 1,
        explanation: { solution: "Thrashing: high paging overhead, CPU utilization drops" }
    },
    {
        id: "os2-pr-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Working set model helps prevent thrashing by:",
        options: ["Ignoring locality", "Allocating pages based on locality (recently used pages)", "Using more disk", "Running fewer processes"],
        correctAnswer: 1,
        explanation: { solution: "Working set: keep in memory pages used in recent time window" }
    },
    // ========== FILE SYSTEMS ==========
    {
        id: "os2-fs-001",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Contiguous allocation stores file blocks:",
        options: ["Scattered randomly", "In contiguous disk blocks", "In linked list", "In indexed table"],
        correctAnswer: 1,
        explanation: { solution: "Contiguous: all blocks together, fast but external fragmentation" }
    },
    {
        id: "os2-fs-002",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Linked allocation stores file as:",
        options: ["Contiguous blocks", "Linked list of blocks (each points to next)", "Index table", "Hash table"],
        correctAnswer: 1,
        explanation: { solution: "Linked: each block has pointer to next, no external frag, sequential access only" }
    },
    {
        id: "os2-fs-003",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "FAT (File Allocation Table) is a variant of:",
        options: ["Contiguous allocation", "Linked allocation (centralized pointers)", "Indexed allocation", "None of these"],
        correctAnswer: 1,
        explanation: { solution: "FAT: linked allocation with pointers in separate table" }
    },
    {
        id: "os2-fs-004",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Indexed allocation uses:",
        options: ["Contiguous blocks", "Linked list", "Index block containing pointers to all file blocks", "No pointers"],
        correctAnswer: 2,
        explanation: { solution: "Indexed: index block contains array of block pointers" }
    },
    {
        id: "os2-fs-005",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "UNIX inode uses:",
        options: ["Only direct pointers", "Direct + indirect + double indirect + triple indirect pointers", "Only FAT", "Contiguous only"],
        correctAnswer: 1,
        explanation: { solution: "inode: direct pointers + single/double/triple indirect for large files" }
    },
    {
        id: "os2-fs-006",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Free space management using bitmap:",
        options: ["1 bit per block (0=free, 1=used or vice versa)", "Linked list of free blocks", "No tracking", "Random allocation"],
        correctAnswer: 0,
        explanation: { solution: "Bitmap: one bit per block, efficient for finding contiguous free blocks" }
    }
]);

console.log("Exhaustive Operating Systems loaded - ~70 questions");
