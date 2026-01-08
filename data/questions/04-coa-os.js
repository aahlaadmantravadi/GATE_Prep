/**
 * Computer Organization & Architecture Questions
 * Covers: Pipelining, Memory, CPU Design, I/O
 */

Questions.register([
    // Pipelining
    {
        id: "coa-pipe-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "The maximum speedup achievable by a K-stage pipeline is:",
        options: ["K-1", "K", "K+1", "2K"],
        correctAnswer: 1,
        explanation: {
            solution: "As the number of tasks n approaches infinity, speedup S = nK/(K+n-1) approaches K. This is the theoretical maximum.",
            formula: "S = nK/(K+n-1), S_max = K as n→∞"
        }
    },
    {
        id: "coa-pipe-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "A K-stage pipeline with n tasks requires how many clock cycles?",
        options: ["K × n", "K + n", "K + n - 1", "K × (n - 1)"],
        correctAnswer: 2,
        explanation: {
            solution: "First task takes K cycles. Each subsequent task adds 1 cycle. Total = K + (n-1) = K + n - 1 cycles.",
            formula: "Clock cycles = K + n - 1"
        }
    },
    {
        id: "coa-pipe-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "A data hazard occurs when:",
        options: [
            "Two instructions compete for the same memory location",
            "An instruction depends on the result of a previous instruction still in the pipeline",
            "A branch instruction is encountered",
            "The pipeline is empty"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Data hazards occur due to data dependencies - when an instruction needs data that hasn't been computed yet by a previous instruction in the pipeline."
        }
    },
    {
        id: "coa-pipe-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Operand forwarding (data forwarding) is used to:",
        options: [
            "Increase pipeline stages",
            "Reduce data hazard stalls by bypassing register file",
            "Handle branch instructions",
            "Increase clock frequency"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Forwarding routes the result directly from the ALU output to where it's needed in a subsequent instruction, bypassing the normal writeback-then-read process."
        }
    },
    {
        id: "coa-pipe-005",
        type: "NAT",
        topic: "coa",
        subtopic: "Pipelining",
        question: "A 5-stage pipeline executes 100 instructions. How many clock cycles are needed (assuming no hazards)?",
        correctAnswer: 104,
        tolerance: 0,
        explanation: {
            solution: "Clock cycles = K + n - 1 = 5 + 100 - 1 = 104.",
            formula: "K + n - 1 = 5 + 100 - 1 = 104"
        }
    },
    // Memory
    {
        id: "coa-mem-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "In a cache, a 'hit' occurs when:",
        options: [
            "The required data is not in cache",
            "The required data is found in cache",
            "The cache is full",
            "A write operation happens"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Cache hit = data found in cache. Cache miss = data not in cache, must fetch from main memory (slower)."
        }
    },
    {
        id: "coa-mem-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "In direct-mapped cache, each memory block can go to:",
        options: [
            "Any cache line",
            "Exactly one specific cache line",
            "Any line in a specific set",
            "Two different cache lines"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Direct-mapped: each block maps to exactly one line (index = block address mod cache lines). Simple but high conflict misses.",
            formula: "Cache line = (Block address) mod (Number of cache lines)"
        }
    },
    {
        id: "coa-mem-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Write-through vs Write-back: In write-through policy,",
        options: [
            "Data is written only to cache",
            "Data is written to both cache and main memory simultaneously",
            "Data is written to main memory only when cache line is replaced",
            "No writes are allowed"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Write-through: writes go to both cache and memory (slower but consistent). Write-back: writes go only to cache, memory updated on replacement (faster but complex)."
        }
    },
    {
        id: "coa-mem-004",
        type: "NAT",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "A cache has hit rate 90% with hit time 1 cycle and miss penalty 100 cycles. What is the average memory access time (AMAT) in cycles?",
        correctAnswer: 10.9,
        tolerance: 0.1,
        explanation: {
            solution: "AMAT = Hit time + Miss rate × Miss penalty = 1 + 0.1 × 100 = 1 + 10 = 11 cycles (approximately 10.9 if hit contributes 0.9).",
            formula: "AMAT = Hit time + Miss rate × Miss penalty"
        }
    },
    // Addressing Modes
    {
        id: "coa-addr-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In immediate addressing mode, the operand is:",
        options: [
            "In a register",
            "In memory",
            "Part of the instruction itself",
            "Computed at runtime"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Immediate addressing: operand value is embedded in the instruction. Fastest but limited operand size."
        }
    },
    {
        id: "coa-addr-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In register indirect addressing, the register contains:",
        options: [
            "The operand value",
            "The address of the operand",
            "The opcode",
            "Nothing useful"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Register indirect: register holds memory address, actual operand is at that address. Like a pointer dereference."
        }
    },
    // I/O
    {
        id: "coa-io-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "In DMA (Direct Memory Access), data transfer between I/O and memory occurs:",
        options: [
            "Through the CPU using programmed I/O",
            "Through CPU using interrupts",
            "Directly without CPU intervention",
            "Only one byte at a time"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "DMA controller handles data transfer directly between I/O device and memory, freeing CPU for other tasks. CPU only sets up the transfer."
        }
    },
    {
        id: "coa-io-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "Memory-mapped I/O means:",
        options: [
            "I/O devices have separate address space",
            "I/O devices share the same address space as memory",
            "Only memory can be accessed",
            "I/O operations are disabled"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Memory-mapped I/O: I/O devices accessed using same instructions and address space as memory. Simpler but reduces available memory addresses."
        }
    }
]);

/**
 * Operating System Questions
 * Covers: Processes, Scheduling, Synchronization, Memory, Deadlocks
 */

Questions.register([
    // Processes
    {
        id: "os-proc-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes & Threads",
        question: "A process in the 'ready' state is waiting for:",
        options: [
            "I/O completion",
            "CPU allocation",
            "Memory allocation",
            "Termination signal"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Ready state: process has all resources except CPU. It's in the ready queue waiting to be scheduled. Running → Ready: preemption. Ready → Running: dispatch."
        }
    },
    {
        id: "os-proc-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes & Threads",
        question: "Context switching is slower for processes than threads because:",
        options: [
            "Threads are faster to execute",
            "Processes share more resources",
            "Process context includes more state (page tables, memory maps)",
            "Thread count is always less"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Threads in same process share address space, so thread switch doesn't require changing page tables. Process switch requires saving/restoring entire memory context."
        }
    },
    // Scheduling
    {
        id: "os-sched-001",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Shortest Job First (SJF) scheduling is optimal for minimizing:",
        options: [
            "Throughput",
            "Average waiting time",
            "Response time",
            "Context switches"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "SJF minimizes average waiting time. Shorter jobs complete first, reducing wait for subsequent jobs. But it requires knowing burst times in advance."
        }
    },
    {
        id: "os-sched-002",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Round Robin scheduling is best suited for:",
        options: [
            "Batch systems",
            "Real-time systems only",
            "Time-sharing/interactive systems",
            "Single-user systems"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Round Robin provides fair CPU time slices, good response time for interactive users. Each process gets a time quantum before preemption."
        }
    },
    {
        id: "os-sched-003",
        type: "NAT",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Three processes with burst times 3, 5, 2 arrive at time 0. Using SJF (non-preemptive), the average waiting time is:",
        correctAnswer: 2.33,
        tolerance: 0.1,
        explanation: {
            solution: "Order: 2, 3, 5. Process with burst 2 waits 0, burst 3 waits 2, burst 5 waits 2+3=5. Average = (0+2+5)/3 = 7/3 ≈ 2.33.",
            formula: "Average waiting time = (0 + 2 + 5)/3 = 2.33"
        }
    },
    // Synchronization
    {
        id: "os-sync-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "A semaphore's wait() operation (P or down) does what when semaphore value is 0?",
        options: [
            "Increments the semaphore",
            "Blocks the calling process",
            "Terminates the process",
            "Returns immediately"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "wait(S): if S > 0, decrement S and continue. If S = 0, block and add to wait queue. This prevents race conditions on shared resources."
        }
    },
    {
        id: "os-sync-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "The Dining Philosophers problem illustrates which synchronization issue?",
        options: ["Race condition", "Priority inversion", "Deadlock", "Starvation only"],
        correctAnswer: 2,
        explanation: {
            solution: "Dining Philosophers primarily demonstrates deadlock: all philosophers pick up left fork, then wait forever for right fork. Also shows potential starvation."
        }
    },
    // Deadlocks
    {
        id: "os-dead-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlocks",
        question: "Deadlock requires ALL of these conditions EXCEPT:",
        options: [
            "Mutual exclusion",
            "Hold and wait",
            "Preemption",
            "Circular wait"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Four conditions for deadlock: Mutual exclusion, Hold and wait, No preemption, Circular wait. If preemption were allowed, deadlock could be broken."
        }
    },
    {
        id: "os-dead-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlocks",
        question: "Banker's algorithm is used for:",
        options: [
            "Deadlock detection",
            "Deadlock prevention",
            "Deadlock avoidance",
            "Deadlock recovery"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Banker's algorithm is a deadlock avoidance method. It checks if granting a resource request keeps the system in a 'safe state' (a sequence exists to finish all processes)."
        }
    },
    // Memory Management
    {
        id: "os-mem-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "In paging, the page table maps:",
        options: [
            "Physical frames to logical pages",
            "Logical pages to physical frames",
            "Processes to memory",
            "Files to disk blocks"
        ],
        correctAnswer: 1,
        explanation: {
            solution: "Page table: logical page number → physical frame number. Allows non-contiguous physical memory allocation while presenting contiguous logical address space."
        }
    },
    {
        id: "os-mem-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Belady's anomaly can occur in which page replacement algorithm?",
        options: ["Optimal", "LRU", "FIFO", "LFU"],
        correctAnswer: 2,
        explanation: {
            solution: "Belady's anomaly: in FIFO, increasing frames can increase page faults. This counter-intuitive behavior doesn't occur in stack algorithms like LRU and Optimal."
        }
    },
    {
        id: "os-mem-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Optimal page replacement algorithm replaces the page that:",
        options: [
            "Was loaded earliest (FIFO)",
            "Was used least recently (LRU)",
            "Will not be used for the longest time in future",
            "Has been used most frequently"
        ],
        correctAnswer: 2,
        explanation: {
            solution: "Optimal (OPT/Belady's) replaces the page used farthest in the future. Theoretical minimum page faults, but requires future knowledge - not practical."
        }
    }
]);
