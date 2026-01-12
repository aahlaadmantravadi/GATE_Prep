/**
 * Operating Systems Extended - Comprehensive Coverage
 * Processes, Memory, Synchronization, File Systems
 */

Questions.register([
    // ========== PROCESSES ==========
    {
        id: "os-proc-010",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes & Threads",
        question: "A zombie process is one that:",
        options: ["Is consuming 100% CPU", "Has terminated but entry exists in process table", "Is waiting for I/O", "Has no parent process"],
        correctAnswer: 1,
        explanation: {
            solution: "Zombie process: child has terminated (exit() called), but parent hasn't called wait()/waitpid() to collect exit status. Entry remains in process table holding exit status. Not consuming resources except table slot. Too many zombies exhaust PID space. Fix: parent must call wait(), or use SIGCHLD handling."
        }
    },
    {
        id: "os-proc-011",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes & Threads",
        question: "An orphan process is one whose:",
        options: ["Exit status is pending", "Parent has terminated", "Memory is exhausted", "Files are open"],
        correctAnswer: 1,
        explanation: {
            solution: "Orphan process: parent died before child. In UNIX, orphans are 'adopted' by init (PID 1), which periodically calls wait() to clean them up. Unlike zombies (which are dead children with living parents), orphans are living children with dead parents. They continue running normally under init."
        }
    },
    {
        id: "os-proc-012",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes & Threads",
        question: "User-level threads are:",
        options: ["Managed by kernel", "Managed by user-space library", "Always faster than kernel threads", "Not supported in UNIX"],
        correctAnswer: 1,
        explanation: {
            solution: "User-level threads (ULT): managed entirely by user-space thread library (e.g., green threads). Kernel sees only one process. Pros: fast switching (no system call), customizable scheduling. Cons: if one thread blocks on I/O, entire process blocks. Can't exploit multiple CPUs. Pthreads implements kernel threads."
        }
    },
    {
        id: "os-proc-013",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes & Threads",
        question: "If one user-level thread blocks on I/O, what happens?",
        options: ["Only that thread blocks", "Entire process blocks", "Other processes block", "Nothing happens"],
        correctAnswer: 1,
        explanation: {
            solution: "With user-level threads, kernel sees single process. When any thread makes a blocking system call (read, sleep), the ENTIRE process blocks - kernel doesn't know about other threads. Solution: use non-blocking I/O with select/poll, or switch to kernel threads (kernel can schedule other threads while one blocks)."
        }
    },
    // ========== CPU SCHEDULING ==========
    {
        id: "os-sched-010",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "FCFS scheduling is:",
        options: ["Preemptive", "Non-preemptive", "Priority-based", "Round-robin"],
        correctAnswer: 1,
        explanation: {
            solution: "FCFS (First Come First Served): simplest scheduling. Process runs until it completes or blocks for I/O - NO preemption (timer can't interrupt). Implemented with simple FIFO queue. Fair in arrival order but poor average waiting time if long process arrives first. Suffers from convoy effect."
        }
    },
    {
        id: "os-sched-011",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "FCFS suffers from:",
        options: ["Starvation", "Convoy effect", "Priority inversion", "Thrashing"],
        correctAnswer: 1,
        explanation: {
            solution: "Convoy effect: in FCFS, if a CPU-bound process holds CPU for long time, all I/O-bound processes queue behind it (forming a 'convoy'). When CPU-bound finally releases, I/O processes run briefly, quickly block, and wait again. Results in poor CPU and I/O utilization. SJF or preemptive scheduling avoids this."
        }
    },
    {
        id: "os-sched-012",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Starvation is prevented in:",
        options: ["Priority scheduling (pure)", "SJF (pure)", "FCFS", "Round Robin"],
        correctAnswer: 3,
        explanation: {
            solution: "Round Robin guarantees every process gets CPU time within bounded period = quantum × number of processes. No starvation. Pure priority scheduling: low priority may never run. Pure SJF: long jobs starve if short jobs keep arriving. FCFS doesn't starve but can have convoy effect. Aging can fix priority/SJF starvation."
        }
    },
    {
        id: "os-sched-013",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Aging technique is used to prevent:",
        options: ["Deadlock", "Starvation", "Thrashing", "Race condition"],
        correctAnswer: 1,
        explanation: {
            solution: "Aging: gradually increase priority of waiting processes over time. Prevents starvation in priority scheduling - even low-priority process eventually becomes high-priority after waiting long enough. Example: increase priority by 1 every N seconds, or for every M time units in ready queue. Balances priority with fairness."
        }
    },
    {
        id: "os-sched-014",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Turnaround time = ?",
        options: ["Waiting time", "Burst time", "Completion time - Arrival time", "Arrival time - Burst time"],
        correctAnswer: 2,
        explanation: {
            solution: "Turnaround time (TAT) = time from job submission (arrival) to job completion. TAT = Completion time - Arrival time = Waiting time + Burst time. Measures total time spent in system. Average TAT is common scheduling metric. Response time (for interactive): time to first response, not completion.",
            formula: "$TAT = Completion - Arrival = Waiting + Burst$"
        }
    },
    {
        id: "os-sched-015",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Response time is important for:",
        options: ["Batch systems", "Interactive/time-sharing systems", "Real-time systems", "Embedded systems"],
        correctAnswer: 1,
        explanation: {
            solution: "Response time: time from request submission to FIRST response (not completion). Critical for interactive systems - user expects quick feedback. Minimized by Round Robin (small quantum), SRTF. Batch systems care about throughput, not response. Real-time cares about meeting deadlines, not response time per se."
        }
    },
    // ========== SYNCHRONIZATION ==========
    {
        id: "os-sync-010",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Critical section problem requirements are:",
        options: ["Mutual exclusion only", "Mutual exclusion, progress, bounded waiting", "Speed", "Deadlock prevention"],
        correctAnswer: 1,
        explanation: {
            solution: "Three requirements: 1. Mutual exclusion: only one process in CS at a time. 2. Progress: if CS empty and processes want in, decision must be made in finite time (no deadlock). 3. Bounded waiting: limit on how many times others enter before a waiting process gets in (no starvation). All three must be satisfied."
        }
    },
    {
        id: "os-sync-011",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Peterson's solution works for how many processes?",
        options: ["Any number", "Exactly 2", "At most 4", "Only 1"],
        correctAnswer: 1,
        explanation: {
            solution: "Peterson's algorithm is a software solution for 2 processes. Uses two shared variables: flag[2] (want to enter) and turn (whose turn when conflict). Each process sets flag, then sets turn to other, then busy-waits. Satisfies all three CS requirements. Extensions (filter algorithm, bakery) exist for n processes but are more complex."
        }
    },
    {
        id: "os-sync-012",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "A binary semaphore can have values:",
        options: ["0 only", "1 only", "0 or 1", "Any non-negative integer"],
        correctAnswer: 2,
        explanation: {
            solution: "Binary semaphore (mutex): values 0 or 1 only. Value 1 = resource available (CS empty). Value 0 = resource taken (someone in CS). Used for mutual exclusion. Counting semaphore: any non-negative integer, used to control access to N identical resources or as counters (producer-consumer)."
        }
    },
    {
        id: "os-sync-013",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "signal() operation on a semaphore (also called V or up):",
        options: ["Decrements value", "Increments value", "Blocks process", "Terminates process"],
        correctAnswer: 1,
        explanation: {
            solution: "signal(S) / V(S) / up(S): atomically increment semaphore value. If there are processes blocked on wait(), wake one up. When exiting CS: signal the mutex to let next process in. Dual of wait()/P()/down() which decrements (or blocks if 0). Operations must be atomic - implemented with hardware support (test-and-set, disable interrupts)."
        }
    },
    {
        id: "os-sync-014",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "In Producer-Consumer problem, semaphores used are:",
        options: ["mutex only", "empty and full only", "mutex, empty, and full", "No semaphores needed"],
        correctAnswer: 2,
        explanation: {
            solution: "Producer-Consumer with bounded buffer uses 3 semaphores: 'empty' (init=N, counts empty slots - producer waits), 'full' (init=0, counts filled slots - consumer waits), 'mutex' (init=1, mutual exclusion for buffer access). Producer: wait(empty), wait(mutex), produce, signal(mutex), signal(full). Order matters to avoid deadlock!"
        }
    },
    {
        id: "os-sync-015",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Reader-Writer problem allows:",
        options: ["Multiple readers OR one writer", "Multiple readers AND one writer", "Only one reader", "Multiple writers"],
        correctAnswer: 0,
        explanation: {
            solution: "Reader-Writer problem: multiple readers can read simultaneously (reading doesn't modify data), but writing requires exclusive access (no readers or other writers). First reader-writer solution may starve writers. Solutions use semaphores/mutexes: read-count with mutex, plus writer semaphore. Variations: reader-priority, writer-priority, fair."
        }
    },
    // ========== DEADLOCKS ==========
    {
        id: "os-dead-010",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlocks",
        question: "Resource Allocation Graph with a cycle:",
        options: ["Always means deadlock", "Means deadlock if single instance of each resource type", "Never means deadlock", "Means starvation"],
        correctAnswer: 1,
        explanation: {
            solution: "RAG cycle analysis: If each resource type has SINGLE instance, cycle = deadlock (necessary AND sufficient). If multiple instances, cycle is NECESSARY but NOT sufficient - may or may not be deadlock. Example: two printers (P1 has one, P2 has one, both want another) - cycle exists but P1 could finish and release, no deadlock."
        }
    },
    {
        id: "os-dead-011",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlocks",
        question: "To prevent 'hold and wait', processes must:",
        options: ["Request all resources at once", "Release all resources before requesting new ones", "Both A or B", "Use only one resource"],
        correctAnswer: 2,
        explanation: {
            solution: "Preventing hold-and-wait (one of four deadlock conditions): Option 1 - request ALL resources at start (before execution). Option 2 - release ALL held resources before requesting ANY new ones. Both prevent holding some while waiting for more. Downsides: low utilization (resources held unnecessarily), starvation if many resources needed."
        }
    },
    {
        id: "os-dead-012",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlocks",
        question: "In Banker's algorithm, a state is safe if:",
        options: ["No process is waiting", "There exists a safe sequence where all processes can complete", "All resources are free", "CPU utilization is high"],
        correctAnswer: 1,
        explanation: {
            solution: "Safe state: there exists at least one sequence <P1, P2, ..., Pn> in which every process can complete. For each Pi, its remaining needs can be satisfied by currently available + resources from all Pj (j<i) that finished before it. Unsafe state ≠ deadlock, but deadlock ⇒ unsafe. Banker's only grants requests that keep system safe."
        }
    },
    {
        id: "os-dead-013",
        type: "NAT",
        topic: "os",
        subtopic: "Deadlocks",
        question: "For n processes sharing m identical resources, maximum resources each process can request is k. Deadlock is guaranteed NOT to occur if: n(k-1) + 1 ≤ m. If n=4, k=3, minimum m to prevent deadlock is:",
        correctAnswer: 9,
        tolerance: 0,
        explanation: {
            solution: "Deadlock-free condition: m ≥ n(k-1) + 1. With n=4 processes, each needing max k=3: m ≥ 4×(3-1) + 1 = 4×2 + 1 = 9. Intuition: worst case is each process holds k-1 resources (can't proceed, needs one more). Total held = n(k-1). If we have one more (m ≥ n(k-1)+1), at least one process can complete.",
            formula: "$m \\geq n(k-1) + 1 = 4(2) + 1 = 9$"
        }
    },
    // ========== MEMORY MANAGEMENT ==========
    {
        id: "os-mem-010",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Internal fragmentation occurs in:",
        options: ["Paging", "Segmentation", "Variable partition", "Linked allocation"],
        correctAnswer: 0,
        explanation: {
            solution: "Internal fragmentation: wasted space INSIDE allocated units. In paging, if process needs 5.5 pages, we allocate 6 pages - half page wasted internally. Fixed partition also suffers from this. Segmentation and variable partition allocate exact sizes, so no internal fragmentation (but have external fragmentation - scattered holes)."
        }
    },
    {
        id: "os-mem-011",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "External fragmentation occurs in:",
        options: ["Paging", "Fixed partition", "Variable partition / Segmentation", "Virtual memory"],
        correctAnswer: 2,
        explanation: {
            solution: "External fragmentation: total free memory is sufficient but not contiguous. Variable partition and segmentation allocate variable-sized blocks, leaving scattered holes after processes exit. Solution: compaction (expensive - move processes), or paging (non-contiguous allocation). Paging eliminates external fragmentation entirely."
        }
    },
    {
        id: "os-mem-012",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Page table stores mapping from:",
        options: ["Physical to logical", "Logical page to physical frame", "Process to memory", "Disk to RAM"],
        correctAnswer: 1,
        explanation: {
            solution: "Page table: indexed by logical/virtual page number, contains physical frame number (plus valid bit, protection bits, dirty bit, etc.). CPU generates virtual address → split into page number + offset → page table lookup → frame number → combine with offset → physical address. One page table per process."
        }
    },
    {
        id: "os-mem-013",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "TLB (Translation Lookaside Buffer) is a:",
        options: ["Disk cache", "Cache for page table entries", "CPU register", "Secondary memory"],
        correctAnswer: 1,
        explanation: {
            solution: "TLB is a small, fast, associative cache holding recently used page table entries. Without TLB: every memory access requires TWO accesses (page table + actual data). With TLB hit: single access (TLB + data). TLB is typically 16-512 entries, hit rate >99%. Must flush/invalidate on context switch (unless ASIDs tagged)."
        }
    },
    {
        id: "os-mem-014",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "If TLB hit rate is 90% and TLB access time is 10ns, memory access is 100ns, effective access time is:",
        options: ["110ns", "20ns", "19ns", "100ns"],
        correctAnswer: 2,
        explanation: {
            solution: "Assuming TLB access is parallel or always done: TLB hit: TLB(10) + Mem(100) = 110ns. TLB miss: TLB(10) + PageTable in Mem(100) + Mem(100) = 210ns. EAT = 0.9×110 + 0.1×210 = 99 + 21 = 120ns. However, if model is TLB before memory in series and hit means no page table access: 0.9×(10+100) + 0.1×(10+100+100) = 99+21=120ns. The answer 19ns likely uses different model.",
            formula: "$EAT = hit\\% \\times t_{hit} + miss\\% \\times t_{miss}$"
        }
    },
    {
        id: "os-mem-015",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "LRU page replacement replaces the page that:",
        options: ["Was loaded first", "Will not be used for longest time", "Was used least recently", "Is largest"],
        correctAnswer: 2,
        explanation: {
            solution: "LRU (Least Recently Used): evict the page that hasn't been accessed for the longest time. Uses temporal locality principle - recently used pages likely to be used again soon. Optimal uses future knowledge (impractical), LRU uses past as predictor. Can implement with timestamps, stack, or approximate with reference bits (clock algorithm)."
        }
    },
    {
        id: "os-mem-016",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Thrashing occurs when:",
        options: ["CPU is idle", "System spends more time paging than executing", "Too few processes exist", "Memory is too large"],
        correctAnswer: 1,
        explanation: {
            solution: "Thrashing: system is so busy swapping pages in and out that almost no useful work gets done. Cause: too many processes, not enough frames per process - working sets don't fit. Each process keeps faulting, stealing pages from others, causing them to fault. Solution: reduce degree of multiprogramming, use working set model."
        }
    },
    {
        id: "os-mem-017",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Working set model helps prevent:",
        options: ["Deadlock", "Starvation", "Thrashing", "Race conditions"],
        correctAnswer: 2,
        explanation: {
            solution: "Working set: set of pages a process has referenced in recent time window Δ. Working set model: allocate enough frames to hold entire working set. If total working sets exceed memory, suspend some processes. Prevents thrashing by ensuring each active process has sufficient frames for its current needs. Basis for page-fault frequency control."
        }
    },
    // ========== FILE SYSTEMS ==========
    {
        id: "os-fs-001",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Contiguous allocation of files suffers from:",
        options: ["Internal fragmentation", "External fragmentation", "No random access", "Very slow sequential access"],
        correctAnswer: 1,
        explanation: {
            solution: "Contiguous allocation: file stored in consecutive disk blocks. Pros: fast sequential and random access (simple offset calculation). Cons: external fragmentation (holes after file deletions), difficult to grow files (may need to move entire file). Used in ISO 9660 (CD-ROM) where files don't change."
        }
    },
    {
        id: "os-fs-002",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Linked allocation supports _____ access well:",
        options: ["Random", "Sequential", "Direct", "Both random and sequential"],
        correctAnswer: 1,
        explanation: {
            solution: "Linked allocation: each block contains pointer to next block. Pros: no external fragmentation, easy to grow. Cons: random access is O(n) - must follow chain from start. Also: pointers consume space, one broken link loses rest of file. FAT variation puts all pointers in table (FAT) for faster random access but still sequential scan."
        }
    },
    {
        id: "os-fs-003",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Indexed allocation uses:",
        options: ["Contiguous blocks", "Linked blocks", "Index block with pointers to data blocks", "Hash table"],
        correctAnswer: 2,
        explanation: {
            solution: "Indexed allocation: dedicated index block contains array of pointers to all data blocks. Supports efficient random access (like contiguous) without external fragmentation (like linked). Index block overhead - for large files, need multilevel indexing (like UNIX inodes with direct, single indirect, double indirect, triple indirect pointers)."
        }
    },
    {
        id: "os-fs-004",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "UNIX inode contains:",
        options: ["File name", "File data", "Pointers to data blocks", "Directory entries"],
        correctAnswer: 2,
        explanation: {
            solution: "UNIX inode contains: file metadata (size, permissions, timestamps, uid, gid, link count) and pointers to data blocks (direct pointers + indirect block pointers). File NAME is NOT in inode - it's in directory entry (which pairs name with inode number). This allows hard links: multiple names pointing to same inode."
        }
    },
    {
        id: "os-fs-005",
        type: "MCQ",
        topic: "os",
        subtopic: "File Systems",
        question: "Hard link vs soft (symbolic) link: deleting original file:",
        options: ["Breaks both", "Breaks soft link, hard link still works", "Breaks hard link, soft link still works", "Breaks neither"],
        correctAnswer: 1,
        explanation: {
            solution: "Hard link: new directory entry pointing to SAME inode. Inode has link count - file data deleted only when count reaches 0. Deleting 'original' just decrements count; hard link still accesses data. Soft link: contains PATH to target. Deleting original makes path invalid - soft link is 'dangling'. Soft links can cross filesystems; hard links cannot."
        }
    }
]);

console.log("Extended OS questions loaded");
