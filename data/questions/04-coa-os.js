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
            solution: "Pipeline speedup = (Time without pipeline)/(Time with pipeline). For n tasks with K stages: Without pipeline = n×K cycles. With pipeline = K + n - 1 cycles. Speedup = nK/(K+n-1). As n→∞, speedup → K. Theoretical maximum equals the number of stages, achieved only with infinite tasks and no hazards.",
            formula: "$S = \\frac{nK}{K+n-1}$, $S_{max} = K$ as $n \\rightarrow \\infty$"
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
            solution: "First task requires K cycles to flow through all stages. Each subsequent task adds only 1 cycle (it follows right behind). Total = K + (n-1) = K + n - 1 cycles. This is the 'filling and draining' overhead of the pipeline. With n=1, time = K (same as non-pipelined).",
            formula: "$Cycles = K + n - 1$"
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
            solution: "Data hazards arise from data dependencies: RAW (Read After Write), WAR (Write After Read), WAW (Write After Write). RAW is most common: instruction needs operand that previous instruction hasn't written yet. Solutions: stalling (NOPs), forwarding/bypassing (route result directly), compiler reordering."
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
            solution: "Forwarding adds hardware paths to send ALU result directly to where it's needed in a subsequent instruction, without waiting for writeback to register file. Example: ADD R1,R2,R3 followed by SUB R4,R1,R5 - the R1 value is forwarded from ADD's ALU output to SUB's ALU input. Eliminates many stalls but adds MUXes and control logic."
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
            solution: "Using the formula: Cycles = K + n - 1 = 5 + 100 - 1 = 104 cycles. First instruction takes 5 cycles (through all stages), then each of 99 remaining instructions adds 1 cycle each. Pipeline efficiency = (100×5)/104 ≈ 96% (approaches 100% as n increases).",
            formula: "$K + n - 1 = 5 + 100 - 1 = 104$"
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
            solution: "Cache hit: requested data is found in cache (fast access, ~1-2 cycles). Cache miss: data not in cache, must fetch from main memory (slow, ~100+ cycles for DRAM). Hit rate = hits/(hits+misses). High hit rate (95%+) is crucial for performance. Exploits temporal and spatial locality of programs."
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
            solution: "Direct-mapped: each memory block maps to exactly one cache line, determined by (block address) mod (number of lines). Simple and fast lookup, but prone to conflict misses - two frequently used blocks mapping to same line keep evicting each other. Fully associative (any line) and set-associative (any line in a set) reduce conflicts.",
            formula: "Line = (Block address) mod (Number of lines)"
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
            solution: "Write-through: every write updates both cache AND memory immediately. Simpler, memory always consistent, but slower (memory write latency on every write). Write-back: writes go only to cache (set dirty bit), memory updated only when line is evicted. Faster (batch writes) but complex (dirty bit tracking, coherence issues in multiprocessor)."
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
            solution: "AMAT = Hit time + Miss rate × Miss penalty = 1 + 0.10 × 100 = 1 + 10 = 11 cycles. Some definitions: AMAT = (Hit rate × Hit time) + (Miss rate × Miss time) = 0.9×1 + 0.1×(1+100) = 0.9 + 10.1 = 11 (or 10.9 depending on whether miss time includes hit time). AMAT determines effective memory speed.",
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
            solution: "Immediate addressing: operand value is encoded directly in the instruction (e.g., MOV R1, #5). No memory access needed - fastest mode. But operand size is limited by instruction encoding (typically 8-16 bits in RISC). Used for constants, loop counters, offsets. Cannot modify the operand at runtime."
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
            solution: "Register indirect: register holds a memory address; operand is at that address. Like dereferencing a pointer in C (*ptr). Example: MOV R1, [R2] - R2 contains address, R1 gets value from memory location in R2. Allows dynamic addressing, array access, data structure traversal. One level of indirection."
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
            solution: "DMA: CPU sets up DMA controller (source, destination, count), then DMA handles the entire block transfer independently. CPU is free for other work during transfer. DMA controller takes control of system bus (cycle stealing or burst mode). Much faster than programmed I/O (CPU moves each byte) or interrupt-driven I/O (interrupt per byte)."
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
            solution: "Memory-mapped I/O: I/O device registers appear at memory addresses. Same load/store instructions access both memory and I/O. Simpler (no special I/O instructions) and can use memory addressing modes. Downside: some address space is 'used up' by I/O. Alternative: port-mapped I/O (separate address space, special IN/OUT instructions)."
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
            solution: "Ready state: process has all needed resources (memory, files) EXCEPT CPU. It's in the ready queue, waiting for the scheduler to dispatch it to the CPU. Transitions: Running→Ready (preempted by timer or higher priority), Ready→Running (scheduled/dispatched), Blocked→Ready (I/O complete)."
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
            solution: "Process switch: save/restore registers, PC, stack pointer, PLUS switch page tables, flush TLB, switch address space mapping. Thread switch (same process): only save/restore registers, PC, stack pointers - threads share address space, so no page table switch, no TLB flush. Thread switching is 10-100x faster."
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
            solution: "SJF minimizes average waiting time (provably optimal). By running shortest jobs first, fewer processes wait behind long ones. Waiting time = start time - arrival time. Issue: requires knowing burst times in advance (impossible in practice - use predictions). Can cause starvation of long jobs if short jobs keep arriving."
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
            solution: "Round Robin: each process gets a fixed time quantum (e.g., 10-100ms), then preempted and added to end of ready queue. Fair - no starvation. Good response time for interactive users. Performance depends on quantum size: too small = excessive context switching, too large = degrades to FCFS. Not suitable for real-time (no priority) or batch (high overhead)."
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
            solution: "SJF order: burst 2 (P3), then 3 (P1), then 5 (P2). Waiting times: P3 waits 0 (runs first), P1 waits 2 (after P3), P2 waits 2+3=5 (after P3 and P1). Average = (0 + 2 + 5)/3 = 7/3 ≈ 2.33. Compare to FCFS order 3,5,2: (0 + 3 + 8)/3 = 3.67 (worse).",
            formula: "$AWT = \\frac{0 + 2 + 5}{3} = \\frac{7}{3} \\approx 2.33$"
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
            solution: "wait(S): if S > 0, decrement S and continue. If S == 0, block the process and add to semaphore's wait queue. The signal() operation (V or up) increments S and wakes one blocked process. Semaphores enforce mutual exclusion (binary, init=1) and synchronization (counting). Operations must be atomic."
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
            solution: "Dining Philosophers: 5 philosophers, 5 forks. Each needs 2 adjacent forks to eat. If all pick up left fork simultaneously, each waits for right fork forever = DEADLOCK (circular wait). Solutions: limit concurrent philosophers to 4, pick up both forks atomically, asymmetric ordering. Also demonstrates potential starvation if some philosophers never get to eat."
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
            solution: "Deadlock requires four conditions (all must hold): 1. Mutual exclusion (exclusive resource access). 2. Hold and wait (hold resources while waiting for more). 3. No preemption (cannot forcibly take resources). 4. Circular wait (cycle in wait graph). PREEMPTION would allow breaking deadlock by taking resources - its ABSENCE is required."
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
            solution: "Banker's algorithm: deadlock AVOIDANCE. Before granting resource request, check if resulting state is 'safe' (exists a sequence to complete all processes). If granting leads to unsafe state, deny/delay request. Requires knowing maximum resource needs in advance. O(m×n²) complexity. Prevention (design constraints) vs Detection (find deadlocks after they occur)."
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
            solution: "Page table: logical/virtual page number → physical frame number. CPU generates virtual address = (page number, offset). MMU looks up page number in page table to get frame number, combines with offset to form physical address. Allows non-contiguous physical allocation, simplifies memory management, enables virtual memory."
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
            solution: "Belady's anomaly: more frames can cause MORE page faults. Occurs in FIFO because it doesn't consider recency/frequency of use. Example: reference string 1,2,3,4,1,2,5,1,2,3,4,5 - 3 frames: 9 faults, 4 frames: 10 faults. LRU, Optimal, LFU are 'stack algorithms' - provably immune to Belady's anomaly."
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
            solution: "Optimal (OPT/Belady's) replaces the page that won't be used for the longest time. Provably minimum page faults. But requires future knowledge - impractical for real systems. Used as benchmark to evaluate other algorithms. LRU approximates OPT by assuming recent past predicts near future."
        }
    }
]);
