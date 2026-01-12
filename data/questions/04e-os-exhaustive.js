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
        explanation: {
            solution: "5-state process model: New (created), Ready (waiting for CPU), Running (executing), Waiting/Blocked (waiting for I/O or event), Terminated (completed). Transitions: New→Ready (admit), Ready→Running (dispatch), Running→Ready (preempt/timeout), Running→Waiting (I/O request), Waiting→Ready (I/O done), Running→Terminated (exit)."
        }
    },
    {
        id: "os2-proc-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "PCB (Process Control Block) contains:",
        options: ["Only PID", "PID, state, PC, registers, memory info, I/O status", "Only memory address", "Only priority"],
        correctAnswer: 1,
        explanation: {
            solution: "PCB is the kernel's data structure for each process containing: Process ID (PID), state, program counter, CPU registers, scheduling info (priority, pointers), memory management info (page tables, limits), I/O status (open files, devices). PCB is saved/restored during context switch."
        }
    },
    {
        id: "os2-proc-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Context switch involves:",
        options: ["Only saving PC", "Saving state of current process, loading state of next process", "Restarting the CPU", "Deleting the process"],
        correctAnswer: 1,
        explanation: {
            solution: "Context switch: 1) Save current process state (registers, PC, stack pointer) to its PCB. 2) Load next process state from its PCB. For process switch, also update memory maps, flush TLB. Pure overhead - no useful work done. Minimize by using threads (share address space) or reducing switches."
        }
    },
    {
        id: "os2-proc-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "fork() system call creates:",
        options: ["Thread", "Child process (copy of parent)", "File", "Signal"],
        correctAnswer: 1,
        explanation: {
            solution: "fork() creates new child process as copy of parent (copy-on-write optimization). Returns 0 to child, child's PID to parent, -1 on error. Child inherits code, data, heap, stack, open files. Often followed by exec() to run different program. Foundation of UNIX process creation."
        }
    },
    {
        id: "os2-proc-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "exec() system call:",
        options: ["Creates new process", "Replaces current process image with new program", "Terminates process", "Creates thread"],
        correctAnswer: 1,
        explanation: {
            solution: "exec() family (execl, execv, execve, etc.) replaces current process's code, data, stack with new program from file. PID stays same, but entire memory content changes. Typically used after fork(): parent forks, child execs new program. On success, never returns (old program gone)."
        }
    },
    {
        id: "os2-proc-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Zombie process is a process that:",
        options: ["Is running", "Has terminated but parent hasn't called wait()", "Has no PCB", "Is waiting for I/O"],
        correctAnswer: 1,
        explanation: {
            solution: "Zombie: child process has terminated (exit status available) but parent hasn't collected it via wait(). Entry remains in process table holding exit status. Uses minimal resources (no memory, just PCB slot). Parent must call wait() to reap zombie. Too many zombies can exhaust PID space."
        }
    },
    {
        id: "os2-proc-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Processes",
        question: "Orphan process is a process whose:",
        options: ["Has no children", "Parent has terminated", "Has infinite priority", "Is waiting forever"],
        correctAnswer: 1,
        explanation: {
            solution: "Orphan: parent terminated before child. In UNIX, orphans are adopted by init (PID 1), which will eventually reap them when they terminate. Unlike zombies (dead with living parent), orphans are living with dead parent. Continue running normally until completion."
        }
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
        explanation: {
            solution: "Threads share: code section, data section, heap, open files, signal handlers, process ID. Each thread has its own: stack, registers, program counter, thread ID, scheduling state. Sharing makes thread creation and switch faster than processes. But shared data requires synchronization."
        }
    },
    {
        id: "os2-thread-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Threads",
        question: "User-level threads vs kernel-level threads: context switch is faster for:",
        options: ["Kernel threads", "User threads", "Both same", "Neither has context switch"],
        correctAnswer: 1,
        explanation: {
            solution: "User-level threads: managed entirely in user space by library. Context switch is just function call (save/restore user registers), no kernel involvement. Much faster. Kernel threads require system call, kernel mode switch, full context save/restore. But kernel threads can use multiple CPUs and handle blocking better."
        }
    },
    {
        id: "os2-thread-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Threads",
        question: "If one user-level thread blocks on I/O:",
        options: ["Only that thread blocks", "Entire process blocks", "All threads continue", "No blocking occurs"],
        correctAnswer: 1,
        explanation: {
            solution: "With user-level threads, kernel sees only the process - doesn't know about individual threads. When any thread makes blocking syscall, kernel blocks the process, halting ALL user threads. Solutions: jacket/wrapper routines converting blocking to non-blocking, or use kernel threads."
        }
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
        explanation: {
            solution: "Preemptive scheduling: OS can forcibly remove running process from CPU (timer interrupt, higher priority arrival). Better response time, prevents monopolization. Examples: Round Robin, SRTF, preemptive priority. Requires timer interrupt and context switch mechanism."
        }
    },
    {
        id: "os2-sched-002",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Non-preemptive scheduling means:",
        options: ["OS can interrupt anytime", "Process runs until it blocks or terminates", "No scheduling", "Only for real-time"],
        correctAnswer: 1,
        explanation: {
            solution: "Non-preemptive (cooperative) scheduling: process keeps CPU until it voluntarily releases (blocks for I/O, terminates). Simpler, less context switch overhead. But unresponsive - one long process delays others. Examples: FCFS, non-preemptive SJF, non-preemptive priority."
        }
    },
    {
        id: "os2-sched-003",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "FCFS (First Come First Serve) is:",
        options: ["Preemptive", "Non-preemptive", "Both", "Neither"],
        correctAnswer: 1,
        explanation: {
            solution: "FCFS is strictly non-preemptive. First process in queue runs until blocked or done. Simple FIFO implementation. No starvation. But: poor average waiting time (depends on arrival order), convoy effect (short jobs wait behind long). Used in simple batch systems."
        }
    },
    {
        id: "os2-sched-004",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Convoy effect occurs in:",
        options: ["SJF", "FCFS (short jobs behind long job)", "Round Robin", "Priority scheduling"],
        correctAnswer: 1,
        explanation: {
            solution: "Convoy effect in FCFS: when CPU-bound process holds CPU for long time, all I/O-bound processes queue behind it. When released, I/O processes get short CPU bursts, quickly block, rejoin queue behind CPU-bound again. Results in poor I/O device utilization."
        }
    },
    {
        id: "os2-sched-005",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "SJF (Shortest Job First) minimizes:",
        options: ["Response time", "Average waiting time", "Throughput", "Turnaround time"],
        correctAnswer: 1,
        explanation: {
            solution: "SJF provably minimizes average waiting time (optimal). By running shortest jobs first, total wait across all jobs is minimized. But: requires knowing burst times in advance (impractical - use predictions/exponential averaging), and can starve long jobs if short jobs keep arriving."
        }
    },
    {
        id: "os2-sched-006",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "SJF can cause starvation of:",
        options: ["Short jobs", "Long jobs (may never get CPU)", "All jobs", "No starvation"],
        correctAnswer: 1,
        explanation: {
            solution: "SJF starvation: if short jobs keep arriving, long jobs are perpetually postponed. Never guaranteed to run. Solution: aging (gradually increase priority of waiting jobs) or use turnaround time as tiebreaker incorporating wait time."
        }
    },
    {
        id: "os2-sched-007",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "SRTF (Shortest Remaining Time First) is:",
        options: ["Non-preemptive SJF", "Preemptive SJF", "FCFS variant", "Round Robin variant"],
        correctAnswer: 1,
        explanation: {
            solution: "SRTF = preemptive SJF. When new process arrives with burst shorter than remaining time of running process, preempt current and run new. Optimal for minimizing average waiting time among preemptive algorithms. Higher overhead than non-preemptive SJF due to more context switches."
        }
    },
    {
        id: "os2-sched-008",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Round Robin scheduling is:",
        options: ["Non-preemptive", "Preemptive with time quantum", "Priority based", "FCFS based"],
        correctAnswer: 1,
        explanation: {
            solution: "Round Robin: preemptive with fixed time quantum (timeslice). Each process gets quantum, then preempted and added to end of ready queue. Fair - guaranteed no starvation. Good response time for interactive. Performance depends on quantum: too small = overhead, too large = FCFS behavior."
        }
    },
    {
        id: "os2-sched-009",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "If time quantum is very large, Round Robin behaves like:",
        options: ["SJF", "FCFS", "Priority", "SRTF"],
        correctAnswer: 1,
        explanation: {
            solution: "With very large quantum, each process likely finishes within its single quantum - no preemption occurs. Order is determined by arrival (FIFO), same as FCFS. Rule of thumb: quantum should be larger than typical CPU burst but not so large as to hurt response time."
        }
    },
    {
        id: "os2-sched-010",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "If time quantum is very small in RR:",
        options: ["Less context switches", "High context switch overhead", "Better for long jobs", "No overhead"],
        correctAnswer: 1,
        explanation: {
            solution: "Very small quantum: frequent preemption, many context switches. Switch overhead (save/restore context, cache pollution) dominates actual work. CPU spends more time switching than executing. Throughput drops, though response time might seem low."
        }
    },
    {
        id: "os2-sched-011",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Priority scheduling can cause starvation, solved by:",
        options: ["Ignoring priorities", "Aging (increase priority over time)", "Reducing all priorities", "Using FCFS instead"],
        correctAnswer: 1,
        explanation: {
            solution: "Priority scheduling starvation: low-priority processes may never run if higher-priority processes keep arriving. Solution is aging: periodically increase priority of waiting processes. Eventually, any process becomes highest priority. Combines priority with fairness."
        }
    },
    {
        id: "os2-sched-012",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Multilevel Queue scheduling:",
        options: ["Has one queue", "Has multiple queues with different priorities/scheduling", "Uses only RR", "Uses only FCFS"],
        correctAnswer: 1,
        explanation: {
            solution: "MLQ: separate queues for different process types (foreground vs background, system vs user). Each queue can have its own scheduling algorithm (RR for interactive, FCFS for batch). Scheduling between queues: fixed priority or time slice. Processes permanently assigned to queue."
        }
    },
    {
        id: "os2-sched-013",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Multilevel Feedback Queue allows:",
        options: ["Movement between queues based on behavior", "No movement between queues", "Only priority changes", "Fixed queue assignment"],
        correctAnswer: 0,
        explanation: {
            solution: "MLFQ: processes can move between queues based on their behavior. CPU-bound jobs (use full quantum frequently) drop to lower-priority queues. I/O-bound jobs (give up CPU early) stay in or move to higher-priority queues. Adaptive - learns job characteristics. Most general scheduler."
        }
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
        explanation: {
            solution: "Turnaround time (TAT) = total time from job submission to completion = Completion time - Arrival time = Waiting time + Burst time. Includes all waiting and execution. Batch systems optimize average TAT. Related to but different from response time (first response).",
            formula: "$TAT = Completion - Arrival = Waiting + Burst$"
        }
    },
    {
        id: "os2-metric-002",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Waiting time = ?",
        options: ["Turnaround time - Burst time", "Burst time - Arrival time", "Completion time only", "Response time only"],
        correctAnswer: 0,
        explanation: {
            solution: "Waiting time = time spent waiting in ready queue (not running, not doing I/O). Waiting = TAT - Burst time = Completion - Arrival - Burst. SJF minimizes average waiting time. In RR, waiting is spread across multiple quanta but total is same as if run once.",
            formula: "$WT = TAT - Burst = Completion - Arrival - Burst$"
        }
    },
    {
        id: "os2-metric-003",
        type: "MCQ",
        topic: "os",
        subtopic: "CPU Scheduling",
        question: "Response time = ?",
        options: ["Time to completion", "First response time - Arrival time", "Burst time", "Waiting time"],
        correctAnswer: 1,
        explanation: {
            solution: "Response time = time from submission until FIRST response (first time CPU is given). Important for interactive systems - users want quick feedback. Response ≤ Turnaround. RR has good response (everyone gets CPU quickly), SJF may have poor response for long jobs.",
            formula: "$RT = First\\ CPU\\ time - Arrival$"
        }
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
        explanation: {
            solution: "Race condition: final result depends on non-deterministic interleaving of concurrent operations. Example: two processes incrementing counter - without synchronization, updates can be lost. Same code, different runs, different results. Fixed by mutual exclusion - only one process in critical section at a time."
        }
    },
    {
        id: "os2-sync-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Critical section is:",
        options: ["Any code", "Code that accesses shared resources", "Only read operations", "Only write operations"],
        correctAnswer: 1,
        explanation: {
            solution: "Critical section: code segment where process accesses shared resources (variables, files, data structures). Must be executed atomically without interference. Entry section (acquire lock), critical section, exit section (release lock), remainder section. Requires proper synchronization to prevent race conditions."
        }
    },
    {
        id: "os2-sync-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Requirements for critical section solution:",
        options: ["Only mutual exclusion", "Mutual exclusion, progress, bounded waiting", "Only progress", "None required"],
        correctAnswer: 1,
        explanation: {
            solution: "Three requirements: 1) Mutual exclusion - only one in CS at a time. 2) Progress - if no one in CS and some want in, decision made in finite time (no deadlock). 3) Bounded waiting - limit on how many others can enter before a waiting process gets in (no starvation). All three must be satisfied."
        }
    },
    {
        id: "os2-sync-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Peterson's solution works for:",
        options: ["Any number of processes", "2 processes only", "1 process only", "Distributed systems"],
        correctAnswer: 1,
        explanation: {
            solution: "Peterson's algorithm: software solution for 2 processes using two shared variables - flag[2] (intent to enter) and turn (whose turn on conflict). Each process: flag[i]=true, turn=j, while(flag[j] && turn==j); CS; flag[i]=false. Satisfies all three CS requirements. Can be extended to n processes (filter algorithm)."
        }
    },
    {
        id: "os2-sync-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Semaphore is an integer variable accessed via:",
        options: ["Any operation", "wait() (P) and signal() (V) atomic operations", "Read and write only", "Increment only"],
        correctAnswer: 1,
        explanation: {
            solution: "Semaphore: integer accessed only through two atomic operations. wait(S)/P(S)/down(S): if S>0, decrement and continue; if S=0, block. signal(S)/V(S)/up(S): increment S, wake one waiting process if any. Atomicity is key - implemented with hardware support or kernel-level operations."
        }
    },
    {
        id: "os2-sync-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Binary semaphore (mutex) has values:",
        options: ["Any integer", "0 or 1 only", "Only positive", "Only negative"],
        correctAnswer: 1,
        explanation: {
            solution: "Binary semaphore (mutex): only values 0 (locked/taken) or 1 (unlocked/available). Used for mutual exclusion. wait() acquires lock (if available) or blocks. signal() releases lock and potentially wakes waiter. Counting semaphore can have any non-negative integer value for resource counting."
        }
    },
    {
        id: "os2-sync-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Counting semaphore is used for:",
        options: ["Only mutual exclusion", "Resource counting (multiple instances)", "Only signaling", "Only blocking"],
        correctAnswer: 1,
        explanation: {
            solution: "Counting semaphore: value = number of available resources. Initialize to count of identical resources. wait() decrements (take resource), signal() increments (release). When value=0, all resources taken, requester blocks. Used for pooled resources (printers, buffers, connections)."
        }
    },
    {
        id: "os2-sync-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Producer-Consumer problem requires:",
        options: ["1 semaphore", "3 semaphores (mutex, full, empty)", "No synchronization", "Only mutex"],
        correctAnswer: 1,
        explanation: {
            solution: "Bounded buffer Producer-Consumer uses 3 semaphores: 'mutex' (init=1, protect buffer access), 'empty' (init=N, count empty slots - producer waits), 'full' (init=0, count filled slots - consumer waits). Order matters: Producer: wait(empty), wait(mutex), produce, signal(mutex), signal(full)."
        }
    },
    {
        id: "os2-sync-009",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Readers-Writers problem: multiple readers can read simultaneously if:",
        options: ["A writer is writing", "No writer is writing", "Always allowed", "Never allowed"],
        correctAnswer: 1,
        explanation: {
            solution: "Readers-Writers: multiple readers OK (reading doesn't modify), but writer needs exclusive access (no readers or other writers). First solution favors readers (writer may starve). Second favors writers (once writer waiting, no new readers). Fair solution alternates. Uses read-count with mutex plus writer semaphore."
        }
    },
    {
        id: "os2-sync-010",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Dining Philosophers problem demonstrates:",
        options: ["Only mutual exclusion", "Deadlock possibility", "No synchronization needed", "Thread creation"],
        correctAnswer: 1,
        explanation: {
            solution: "Dining Philosophers: classic deadlock example. 5 philosophers, 5 forks, need 2 adjacent forks to eat. If all pick up left fork first, then try right - deadlock (circular wait). Solutions: allow only 4 philosophers at table, pick up both forks atomically, odd/even different order. Also shows starvation possibility."
        }
    },
    {
        id: "os2-sync-011",
        type: "MCQ",
        topic: "os",
        subtopic: "Synchronization",
        question: "Monitor is a high-level synchronization construct with:",
        options: ["Only shared variables", "Shared data, procedures, implicit mutual exclusion", "No mutual exclusion", "Only signals"],
        correctAnswer: 1,
        explanation: {
            solution: "Monitor: abstract data type (object) with shared variables, procedures, and implicit mutual exclusion. Only one process can be active in monitor at a time (compiler inserts lock/unlock). Condition variables for waiting within monitor: wait() releases monitor and blocks, signal() wakes waiter. Easier to use correctly than semaphores."
        }
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
        explanation: {
            solution: "Four necessary conditions (Coffman): 1) Mutual exclusion - resource held exclusively. 2) Hold and wait - hold resources while waiting for more. 3) No preemption - resources can't be forcibly taken. 4) Circular wait - cycle in wait graph. ALL four must hold for deadlock. Break any one to prevent/resolve."
        }
    },
    {
        id: "os2-dead-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock prevention breaks at least one of the four conditions by:",
        options: ["Ignoring the problem", "Denying one of the necessary conditions", "Detecting after occurrence", "Doing nothing"],
        correctAnswer: 1,
        explanation: {
            solution: "Prevention: design system so at least one condition can never hold. No mutual exclusion (impractical for many resources), no hold-and-wait (request all at once), allow preemption (take resources away), no circular wait (impose ordering on resource requests). Each has tradeoffs in utilization/convenience."
        }
    },
    {
        id: "os2-dead-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock avoidance checks:",
        options: ["Nothing", "If granting request leads to safe state", "Only current state", "Only previous states"],
        correctAnswer: 1,
        explanation: {
            solution: "Avoidance: before granting resource request, check if granting keeps system in 'safe state' (exists sequence to complete all processes). If would lead to unsafe state, delay request. Requires knowing maximum needs in advance. Banker's algorithm is the classic avoidance method."
        }
    },
    {
        id: "os2-dead-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Banker's algorithm is used for:",
        options: ["Deadlock prevention", "Deadlock avoidance", "Deadlock detection", "Deadlock recovery"],
        correctAnswer: 1,
        explanation: {
            solution: "Banker's algorithm: deadlock avoidance. Simulates allocating resources and checks if safe sequence exists. Needs: Available (resources), Max (maximum claims), Allocation (current allocation), Need (Max - Allocation). If granting request yields safe state, grant; otherwise, deny/delay. O(m×n²) complexity."
        }
    },
    {
        id: "os2-dead-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Safe state means:",
        options: ["No processes running", "There exists a sequence in which all processes can complete", "All resources free", "Deadlock has occurred"],
        correctAnswer: 1,
        explanation: {
            solution: "Safe state: exists at least one safe sequence <P1, P2, ...Pn> where each Pi can complete using available + resources from completed Pj (j<i). Safe state guarantees no deadlock. Unsafe state doesn't mean deadlock, but MAY lead to deadlock. Avoidance maintains safe state."
        }
    },
    {
        id: "os2-dead-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Deadlock detection uses:",
        options: ["Prevention conditions", "Resource allocation graph or matrix algorithm", "Avoidance algorithm", "No algorithm"],
        correctAnswer: 1,
        explanation: {
            solution: "Detection: periodically check for deadlock using resource allocation graph (look for cycles) or wait-for graph. For multiple instances, use matrix algorithm similar to Banker's safety check but looking for processes that cannot complete. If deadlock detected, need recovery strategy."
        }
    },
    {
        id: "os2-dead-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Deadlock",
        question: "Resource Allocation Graph has cycle → deadlock if:",
        options: ["Always", "Single instance of each resource type", "Never", "Multiple instances guarantee deadlock"],
        correctAnswer: 1,
        explanation: {
            solution: "RAG analysis: With SINGLE instance of each resource type, cycle is necessary AND sufficient for deadlock. With MULTIPLE instances, cycle is necessary but NOT sufficient - may or may not be deadlock (depends on request/release sequence). For multiple instances, use allocation matrix algorithms."
        }
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
        explanation: {
            solution: "CPU generates logical (virtual) addresses during program execution. These are the addresses programs see. MMU (Memory Management Unit) translates logical to physical addresses using page table or segment table. This separation enables virtual memory, protection, relocation."
        }
    },
    {
        id: "os2-mem-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Physical address is the actual:",
        options: ["Address in virtual space", "Address in physical memory (RAM)", "Disk address", "Register address"],
        correctAnswer: 1,
        explanation: {
            solution: "Physical address: actual location in RAM, used to access memory hardware. CPU generates logical address, MMU translates to physical. Process never sees physical addresses directly. Allows OS to manage memory transparently - relocate processes, share memory, implement virtual memory."
        }
    },
    {
        id: "os2-mem-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "External fragmentation occurs in:",
        options: ["Paging", "Contiguous allocation (variable partitions)", "Segmentation with paging", "Only virtual memory"],
        correctAnswer: 1,
        explanation: {
            solution: "External fragmentation: total free memory sufficient but not contiguous. Occurs in variable-sized allocation (segmentation, variable partitions). As processes load/unload, holes appear. May not be able to fit new process even if total free > size. Solutions: compaction (expensive), paging (eliminates it)."
        }
    },
    {
        id: "os2-mem-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Internal fragmentation occurs in:",
        options: ["Variable partitions", "Fixed partitions, paging (wasted space in allocated block)", "Only segmentation", "Never occurs"],
        correctAnswer: 1,
        explanation: {
            solution: "Internal fragmentation: wasted space INSIDE allocated block. In paging, if process needs 10.5 pages, allocate 11 pages - half page wasted. Fixed partitions: process smaller than partition, rest wasted. Segmentation allocates exact sizes, no internal fragmentation (but has external)."
        }
    },
    {
        id: "os2-mem-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Paging divides:",
        options: ["Only physical memory into frames", "Logical memory into pages, physical into frames of same size", "Only logical memory", "Memory randomly"],
        correctAnswer: 1,
        explanation: {
            solution: "Paging: divide logical memory into fixed-size pages, physical memory into same-size frames. Any page can go in any frame (non-contiguous allocation). Page table maps pages to frames. Eliminates external fragmentation. Internal fragmentation limited to last page of each process."
        }
    },
    {
        id: "os2-mem-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Page table maps:",
        options: ["Physical to logical", "Page number to frame number", "Frame to disk", "Nothing"],
        correctAnswer: 1,
        explanation: {
            solution: "Page table: indexed by logical page number, contains physical frame number. CPU generates logical address = (page number, offset). MMU uses page number to look up frame number, combines with offset to form physical address. Each process has its own page table."
        }
    },
    {
        id: "os2-mem-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "TLB is:",
        options: ["Disk cache", "Cache for page table entries", "Main memory", "Process cache"],
        correctAnswer: 1,
        explanation: {
            solution: "TLB (Translation Lookaside Buffer): small, fast, associative cache holding recently used page table entries. Without TLB, every memory reference requires two accesses (page table then data). With TLB hit, single access. TLB typically has 16-512 entries, hit rate >99% due to locality."
        }
    },
    {
        id: "os2-mem-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Effective Access Time with TLB = ?",
        options: ["TLB time + Memory time", "TLB_hit × (TLB + mem) + TLB_miss × (TLB + 2×mem)", "Memory time only", "Always same as no TLB"],
        correctAnswer: 1,
        explanation: {
            solution: "EAT = (TLB hit rate) × (TLB access + memory access) + (TLB miss rate) × (TLB access + page table in memory + data in memory). With 98% hit rate, 10ns TLB, 100ns memory: EAT = 0.98×110 + 0.02×210 = 107.8 + 4.2 = 112ns. Without TLB: 200ns.",
            formula: "EAT = h(t + m) + (1-h)(t + 2m)"
        }
    },
    {
        id: "os2-mem-009",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Segmentation divides program into:",
        options: ["Fixed size pages", "Logical segments of variable size (code, data, stack)", "Equal partitions", "Random chunks"],
        correctAnswer: 1,
        explanation: {
            solution: "Segmentation: divide program into logical, variable-sized segments matching program structure (code, data, stack, heap, each module). Each segment has base and limit in segment table. Supports logical view, sharing (share code segment), protection (different permissions per segment). Has external fragmentation."
        }
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
        explanation: {
            solution: "Page fault: referenced page not in physical memory (valid bit = 0 in page table). Triggers exception. OS handles: find page on disk (swap space), find free frame (or run replacement algorithm), load page, update page table, restart instruction. Expensive - involves disk I/O (milliseconds)."
        }
    },
    {
        id: "os2-pr-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Optimal page replacement (OPT) replaces page that:",
        options: ["Was used most recently", "Will not be used for longest time in future", "Was used first", "Is smallest"],
        correctAnswer: 1,
        explanation: {
            solution: "Optimal (OPT/Belady's): replace page that won't be used for longest time in future. Provably minimum page faults. But requires future knowledge - impractical. Used as benchmark to evaluate real algorithms. LRU approximates OPT using past behavior to predict future."
        }
    },
    {
        id: "os2-pr-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "LRU page replacement replaces:",
        options: ["Most recently used page", "Least recently used page", "First loaded page", "Random page"],
        correctAnswer: 1,
        explanation: {
            solution: "LRU (Least Recently Used): replace page that hasn't been accessed for longest time. Based on temporal locality - recently used pages likely needed again soon. Implementation: timestamps (expensive), stack (move to top on access), or approximate with reference bits (clock algorithm). Good performance, no Belady's anomaly."
        }
    },
    {
        id: "os2-pr-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "FIFO page replacement replaces:",
        options: ["LRU page", "First page that was loaded", "Most recently loaded", "Optimal page"],
        correctAnswer: 1,
        explanation: {
            solution: "FIFO: replace oldest page (first loaded, first out). Simple queue implementation. But oldest page might be heavily used (e.g., kernel code). Can suffer from Belady's anomaly - more frames can cause more page faults! Not recommended for actual use despite simplicity."
        }
    },
    {
        id: "os2-pr-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Belady's anomaly occurs in:",
        options: ["LRU", "OPT", "FIFO (more frames can cause more page faults)", "All algorithms"],
        correctAnswer: 2,
        explanation: {
            solution: "Belady's anomaly: in FIFO, increasing number of frames can INCREASE page faults. Counter-intuitive, discovered by Belady. Example: reference 1,2,3,4,1,2,5,1,2,3,4,5 has 9 faults with 3 frames, 10 faults with 4 frames! LRU, OPT are 'stack algorithms' - provably immune to this anomaly."
        }
    },
    {
        id: "os2-pr-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Clock (Second Chance) algorithm is approximation of:",
        options: ["FIFO", "LRU", "OPT", "Random"],
        correctAnswer: 1,
        explanation: {
            solution: "Clock algorithm: LRU approximation using reference bit. Pages in circular queue. On fault, check page at clock hand: if reference bit = 1, clear it and move to next (give second chance). If bit = 0, replace this page. Efficiently finds pages not used since last sweep. Much cheaper than true LRU."
        }
    },
    {
        id: "os2-pr-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Thrashing occurs when:",
        options: ["Many processes complete", "Processes spend more time page faulting than executing", "Memory is empty", "CPU is idle by choice"],
        correctAnswer: 1,
        explanation: {
            solution: "Thrashing: system constantly paging, doing no useful work. Symptoms: high page fault rate, low CPU utilization. Cause: too many processes, each has fewer frames than its working set needs. Each steals pages from others, causing more faults. Solution: reduce multiprogramming, use working set model."
        }
    },
    {
        id: "os2-pr-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Memory Management",
        question: "Working set model helps prevent thrashing by:",
        options: ["Ignoring locality", "Allocating pages based on locality (recently used pages)", "Using more disk", "Running fewer processes"],
        correctAnswer: 1,
        explanation: {
            solution: "Working set: set of pages referenced by process in recent time window Δ. Allocate enough frames to hold working set. If total working sets > available memory, suspend some processes. Prevents thrashing by ensuring each active process has sufficient frames. Working set changes over time with program phase."
        }
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
        explanation: {
            solution: "Contiguous allocation: file stored in consecutive disk blocks. Pros: fast sequential read, fast random access (base + offset), simple (just start block and length). Cons: external fragmentation, file can't grow easily. Used in ISO 9660 (CD-ROM) where files don't change."
        }
    },
    {
        id: "os2-fs-002",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Linked allocation stores file as:",
        options: ["Contiguous blocks", "Linked list of blocks (each points to next)", "Index table", "Hash table"],
        correctAnswer: 1,
        explanation: {
            solution: "Linked allocation: each block contains pointer to next block. Directory has first block pointer. Pros: no external fragmentation, files can grow easily. Cons: random access is O(n), pointer space overhead, any bad pointer loses rest of file. Good for sequential access, poor for random."
        }
    },
    {
        id: "os2-fs-003",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "FAT (File Allocation Table) is a variant of:",
        options: ["Contiguous allocation", "Linked allocation (centralized pointers)", "Indexed allocation", "None of these"],
        correctAnswer: 1,
        explanation: {
            solution: "FAT: linked allocation with pointers stored in centralized table (FAT) rather than in data blocks. Table entry for block i contains pointer to next block of that file (or EOF). FAT kept in memory for fast traversal. Still sequential in structure but faster than distributed pointers. Used in DOS, Windows (FAT12, FAT16, FAT32)."
        }
    },
    {
        id: "os2-fs-004",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Indexed allocation uses:",
        options: ["Contiguous blocks", "Linked list", "Index block containing pointers to all file blocks", "No pointers"],
        correctAnswer: 2,
        explanation: {
            solution: "Indexed allocation: each file has index block containing array of pointers to all data blocks. Supports random access (like contiguous) without external fragmentation (like linked). Index block overhead for small files. For large files: multilevel indexing or linked index blocks. Basis for UNIX inodes."
        }
    },
    {
        id: "os2-fs-005",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "UNIX inode uses:",
        options: ["Only direct pointers", "Direct + indirect + double indirect + triple indirect pointers", "Only FAT", "Contiguous only"],
        correctAnswer: 1,
        explanation: {
            solution: "UNIX inode: metadata (not name) + block pointers. First 12 pointers are direct (point to data blocks). Then single indirect (points to block of pointers), double indirect (pointer to block of pointers to blocks of pointers), triple indirect. Handles files from tiny to huge efficiently."
        }
    },
    {
        id: "os2-fs-006",
        type: "MCQ",
        topic: "os",
        subtopic: "File System",
        question: "Free space management using bitmap:",
        options: ["1 bit per block (0=free, 1=used or vice versa)", "Linked list of free blocks", "No tracking", "Random allocation"],
        correctAnswer: 0,
        explanation: {
            solution: "Bitmap (bit vector): one bit for each block. 1 = allocated, 0 = free (or vice versa). Easy to find first free block or n consecutive free blocks. Compact if memory allows keeping entire bitmap in RAM. For 1TB disk with 4KB blocks: 256M blocks = 32MB bitmap. Alternative: free list (linked list of free blocks)."
        }
    }
]);

console.log("Exhaustive Operating Systems loaded - ~70 questions");
