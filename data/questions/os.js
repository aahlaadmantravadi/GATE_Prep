Questions.register([
    {
        "id": "os-proc-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes & Threads",
        "question": "A process in the 'ready' state is waiting for:",
        "options": [
            "CPU allocation",
            "I/O completion",
            "Termination signal",
            "Memory allocation"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Ready state means the process has EVERYTHING it needs EXCEPT CPU time. Common GATE trap: confusing Ready with Blocked/Waiting. Ready = can run immediately if given CPU. Blocked = waiting for I/O or event, CANNOT run even if CPU is free. Key transitions: (1) New->Ready (admitted), (2) Running->Ready (preempted by timer interrupt or higher priority process), (3) Ready->Running (scheduler dispatch), (4) Blocked->Ready (I/O completes, resource available). GATE Tip: If question asks \"process waiting for I/O\" -> Blocked, NOT Ready. If \"process waiting for CPU\" -> Ready.",
            "formula": "Ready ≠ Blocked: Ready can run, Blocked cannot"
        }
    },
    {
        "id": "os-proc-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes & Threads",
        "question": "Context switching is slower for processes than threads because:",
        "options": [
            "Threads are faster to execute",
            "Process context includes more state (page tables, memory maps)",
            "Processes share more resources",
            "Thread count is always less"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Process context switch Cost > Thread context switch Cost. WHY? Process switch saves: (1) CPU registers, (2) Program Counter, (3) Stack Pointer, (4) Page Table Base Register (CR3 in x86), (5) Memory management info, (6) Flushes TLB (Translation Lookaside Buffer). Thread switch (within same process) saves ONLY: (1) CPU registers, (2) PC, (3) Stack pointer. Threads share: address space, page tables, open files, global data. GATE numbers: Process switch ~ 1-10 microseconds, Thread switch ~ 100 nanoseconds (10-100x faster). TLB flush is the major overhead - forces reloading of address translations from memory.",
            "formula": "Process Switch Cost = Thread Switch Cost + Page Table Switch + TLB Flush"
        }
    },
    {
        "id": "os-sched-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Shortest Job First (SJF) scheduling is optimal for minimizing:",
        "options": [
            "Response time",
            "Context switches",
            "Average waiting time",
            "Throughput"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SJF is PROVABLY OPTIMAL for minimizing average waiting time (proved using exchange argument: swapping jobs only increases wait). Average Waiting Time = $\\frac{1}{n}\\sum_{i=1}^{n} W_i$ where $W_i$ = start time - arrival time for process i. GATE calculation: sort by burst time, assign in order, calculate each wait. Variants: (1) Non-preemptive SJF (once started, runs to completion), (2) Preemptive SRTF (Shortest Remaining Time First - can preempt if new shorter job arrives). Problem: Starvation - long jobs may never run if short jobs keep coming. Solution: Aging - increase priority of waiting processes over time. Real systems use predicted burst time (exponential averaging: $\\tau_{n+1} = \\alpha t_n + (1-\\alpha)\\tau_n$).",
            "formula": "$AvgWT = \\frac{1}{n}\\sum W_i$, optimal by SJF"
        }
    },
    {
        "id": "os-sched-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Round Robin scheduling is best suited for:",
        "options": [
            "Batch systems",
            "Real-time systems only",
            "Single-user systems",
            "Time-sharing/interactive systems"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Round Robin: Fair, preemptive scheduling for time-sharing/interactive systems. Each process gets CPU for time quantum $q$ (typically 10-100 ms), then preempted and moved to end of ready queue. Guarantees: NO starvation (every process gets turn), Good response time (wait ≤ $(n-1) \\times q$ for n processes). Quantum selection: (1) Too small ($q \\to 0$) -> excessive context switching overhead, effective CPU time -> 0, (2) Too large ($q \\to \\infty$) -> degenerates to FCFS, poor response. Rule of thumb: $q$ should be larger than 80% of CPU bursts. NOT suitable for: batch systems (overhead), hard real-time (no guarantees), systems needing priority. GATE: Calculate avg turnaround/waiting with Gantt chart, watch for processes arriving mid-quantum.",
            "formula": "Response Time ≤ $(n-1) \\times q$ for $n$ processes"
        }
    },
    {
        "id": "os-sched-003",
        "type": "NAT",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Three processes with burst times 3, 5, 2 arrive at time 0. Using SJF (non-preemptive), the average waiting time is:",
        "correctAnswer": 2.33,
        "tolerance": 0.1,
        "explanation": {
            "solution": "GATE approach for SJF calculations: (1) Sort processes by burst time: 2->3->5, (2) Draw Gantt chart: P3[0-2], P1[2-5], P2[5-10], (3) Calculate waiting times: $W_{P3} = 0$ (starts immediately), $W_{P1} = 2$ (waits for P3), $W_{P2} = 5$ (waits for P3+P1), (4) Average: $\\frac{0+2+5}{3} = \\frac{7}{3} \\approx 2.33$. Common mistake: using turnaround time instead of waiting time. Formula: $WT_i = $ start time - arrival time. Turnaround = completion - arrival. If FCFS used instead: (0+3+8)/3 = 3.67 (41% worse). GATE tip: Always draw Gantt chart first, verify with formula.",
            "formula": "$AWT_{SJF} = \\frac{0+2+5}{3} = 2.33$ (Optimal)"
        }
    },
    {
        "id": "os-sync-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Critical section problem requires:",
        "options": [
            "Only deadlock prevention",
            "Only progress",
            "Mutual exclusion, progress, bounded waiting",
            "Only mutual exclusion"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Critical Section (CS) solution MUST satisfy 3 requirements (all mandatory): (1) Mutual Exclusion: At most ONE process in CS at any time (safety). Violation -> race condition, data corruption. (2) Progress: If no process in CS and some want to enter, only non-remainder-section processes can decide who enters next, decision cannot be postponed indefinitely (liveness). Violation -> deadlock. (3) Bounded Waiting: There exists a bound on number of times other processes enter CS after a process requests entry  (starvation-freedom). Violation -> indefinite postponement. GATE trap: A solution satisfying only (1) and (2) is INCOMPLETE - it may starve processes. Example: Peterson's solution satisfies all 3. Bakery algorithm satisfies all 3. Test-and-Set alone only satisfies (1).",
            "formula": "CS Solution = Mutual Exclusion + Progress + Bounded Waiting"
        }
    },
    {
        "id": "os-sync-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Semaphore operations are:",
        "options": [
            "open/close",
            "lock/unlock",
            "read/write",
            "wait/signal (P/V)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Semaphore: integer variable accessed via 2 atomic operations: wait(S) (P/down) and signal(S) (V/up). Pseudocode: `wait(S): { S--; if(S<0) block(); }` and `signal(S): { S++; if(S<=0) wakeup_one(); }`. CRITICAL: operations are atomic (indivisible). Types: (1) Binary semaphore: S ∈ {0,1}, acts like mutex lock, (2) Counting semaphore: S ∈ {0,1,2,...}, counts available resources. Initial value = number of available resources. S>0 -> resources available, S≤0 -> |S| = number of blocked processes. Named by Dijkstra (1965), from Dutch: Proberen=test, Verhogen=increment. GATE: Track S value through sequence of operations, identify blocking/wakeup points.",
            "formula": "`wait(S): S--; if(S<0) block()` | `signal(S): S++; if(S<=0) wakeup()`"
        }
    },
    {
        "id": "os-dead-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Necessary conditions for deadlock:",
        "options": [
            "Only hold and wait",
            "Mutual exclusion only",
            "Only circular wait",
            "ME, Hold&Wait, No preemption, Circular wait"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Deadlock occurs IFF (if and only if) ALL FOUR Coffman conditions hold simultaneously: (1) Mutual Exclusion (ME): ≥1 resource non-shareable (e.g., printer). (2) Hold & Wait (H&W): Process holds resources while requesting more. (3) No Preemption (NP): Resources released only voluntarily, not forcibly taken. (4) Circular Wait (CW): Cycle in Resource Allocation Graph (RAG): P1->R1->P2->R2->P1. GATE strategy: To PREVENT deadlock, break ANY ONE condition. To DETECT deadlock, check for all 4 + cycle in RAG. Common trap: Only ME doesn't guarantee deadlock - need all 4. Example: Spooling breaks ME for printers. Requesting all resources at once breaks H&W. Preemption breaks NP. Resource ordering breaks CW.",
            "formula": "Deadlock ⟺ ME ∧ H&W ∧ NP ∧ CW (all 4 together)"
        }
    },
    {
        "id": "os-dead-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Banker's algorithm is for:",
        "options": [
            "Deadlock recovery",
            "Deadlock detection",
            "Deadlock avoidance",
            "Deadlock prevention"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Banker's algorithm: Deadlock AVOIDANCE (not prevention/detection/recovery). On each request: (1) Simulate allocation (pretend to grant), (2) Check if resulting state is SAFE. Safe state = ∃ sequence ⟨P1, P2, ..., Pn⟩ where each Pi can complete using available + resources from previous Pj (j<i). If safe -> grant request. If unsafe (may lead to deadlock) -> block process until safe. Requires: knowing MAX resource needs of all processes in advance. GATE calculation: Given Available, Max, Allocation matrices -> find Need = Max - Allocation -> check if any process can finish with Available -> release its resources -> repeat. Algorithm guarantees all safe states stay safe. Contrast: Prevention (break a condition), Detection (find cycles), Recovery (kill/preempt). Named after banks not lending more than they can recover.",
            "formula": "Need = Max - Allocation; Safe ⟺ ∃ safe sequence"
        }
    },
    {
        "id": "os-mem-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory",
        "question": "Paging eliminates:",
        "options": [
            "Neither",
            "Internal fragmentation",
            "Both",
            "External fragmentation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Paging uses FIXED-SIZE pages (process) and frames (memory), typically 4KB. Key: NO contiguous allocation needed -> ELIMINATES external fragmentation (no unusable holes between allocations). BUT has internal fragmentation: last page may not be fully used. Example: page size = 4KB, process needs 10.3KB = 2.575 pages -> allocate 3 pages -> waste 0.7KB internally. Average internal fragmentation ~ page_size/2. GATE trap: \"Paging has NO fragmentation\" is FALSE - it has internal, not external. Smaller pages -> less internal waste but more page table overhead. Trade-off: 4KB is common balance.",
            "formula": "Paging: External=0, Internal~page_size/2 (avg)"
        }
    },
    {
        "id": "os-mem-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory",
        "question": "Segmentation suffers from:",
        "options": [
            "Internal fragmentation",
            "External fragmentation",
            "Both",
            "Neither"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Segmentation uses VARIABLE-SIZED segments matching logical units (code segment, data segment, heap, stack). Because sizes vary, when segments are allocated/deallocated -> EXTERNAL fragmentation (holes between segments too small for new segments). BUT NO internal fragmentation (segments sized exactly to need). Contrast with paging: opposite fragmentation types. Solution to external frag: Compaction (shift segments to create one large hole) - expensive, requires relocation. GATE comparison: Paging (fixed-size) has internal frag but not external. Segmentation (variable-size) has external frag but not internal. Segmented Paging combines both -> has internal frag from pages.",
            "formula": "Segmentation: Internal=0, External=Yes (variable sizes)"
        }
    },
    {
        "id": "os-mem-003",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Memory",
        "question": "Page size = 4KB, logical address = 32 bits. Page table entries = ?",
        "correctAnswer": 1048576,
        "tolerance": 0,
        "explanation": {
            "solution": "GATE formula: Page size = $2^d$ bytes where $d$ = offset bits. Given: Page size = 4KB = $2^{12}$ bytes -> offset = 12 bits. Logical address = 32 bits -> page number = 32 - 12 = 20 bits -> max pages = $2^{20}$ = 1,048,576 entries. If each PTE = 4 bytes -> page table size = $2^{20} \\times 4$ bytes = 4MB per process! This is why multi-level paging exists: split 20-bit page# into 10+10 bits -> 2-level -> only allocate inner tables when needed -> sparse allocation -> huge memory savings. GATE calculation pattern: (1) Find offset bits from page size, (2) Page# bits = address_bits - offset_bits, (3) #entries = $2^{page\\#bits}$, (4) PT size = #entries × PTE_size.",
            "formula": "$Entries = 2^{32-12} = 2^{20} = 1,048,576$"
        }
    },
    {
        "id": "os-proc-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes & Threads",
        "question": "A zombie process is one that:",
        "options": [
            "Is consuming 100% CPU",
            "Has no parent process",
            "Has terminated but entry exists in process table",
            "Is waiting for I/O"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Zombie (defunct) process: Child executed exit() but parent hasn't called wait(). Process is DEAD (no code running, no resources used) but entry (PCB) remains in process table to store exit status for parent. GATE trap: Zombies DON'T consume CPU/memory - only a table slot! Too many zombies can exhaust PID space (max ~32768 on Linux). Contrast: Orphan = living child, dead parent. Solution: Parent must call wait()/waitpid() to reap zombie and release PID. If parent never calls wait() and doesn't terminate, zombie persists forever. Signal: ps shows zombie as <defunct> or Z state.",
            "formula": "Zombie = Dead child + Living parent (who hasn't called wait())"
        }
    },
    {
        "id": "os-proc-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes & Threads",
        "question": "An orphan process is one whose:",
        "options": [
            "Exit status is pending",
            "Parent has terminated",
            "Files are open",
            "Memory is exhausted"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Orphan process: Living child whose parent has died/terminated. In UNIX/Linux, init process (PID=1) or systemd automatically adopts all orphans and becomes their new parent. init periodically calls wait() to clean up terminated children, preventing orphans from becoming zombies. Orphans continue running NORMALLY - just under new parent. GATE contrast: | Type | Child State | Parent State | Problem | Cleanup | |----|----|----|----|-| | Zombie | Dead (exit() done) | Alive (no wait()) | Wastes PID slot | Parent calls wait() | | Orphan | Alive | Dead | None really | init adopts, runs normally |. Note: Orphan processes are NOT a problem - they're handled automatically.",
            "formula": "Orphan = Living child + Dead parent -> Adopted by init(PID 1)"
        }
    },
    {
        "id": "os-proc-012",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes & Threads",
        "question": "User-level threads are:",
        "options": [
            "Not supported in UNIX",
            "Always faster than kernel threads",
            "Managed by user-space library",
            "Managed by kernel"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "User-Level Threads (ULT): Thread management (create, destroy, schedule, context switch) done entirely in user-space by thread library (e.g., GNU Portable Threads, Green Threads in old Java). Kernel sees single process. PROS: (1) Fast switching - no system call/mode switch, (2) Portable across OSes, (3) Custom scheduling possible. CONS: (1) Blocking I/O blocks entire process (one thread blocks on read() -> whole process blocks), (2) Cannot utilize multiple CPUs (kernel schedules process, not threads), (3) No true parallelism. Kernel-Level Threads (KLT): Kernel manages threads (Linux pthreads, Windows threads). Can use multiple CPUs, non-blocking I/O. GATE: ULT faster switch but KLT better for I/O-bound and multicore. Modern systems use KLT or hybrid (M:N model).",
            "formula": "ULT: 1 kernel entity, N user threads (N:1 model)"
        }
    },
    {
        "id": "os-proc-013",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes & Threads",
        "question": "If one user-level thread blocks on I/O, what happens?",
        "options": [
            "Other processes block",
            "Nothing happens",
            "Only that thread blocks",
            "Entire process blocks"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "User-Level Thread (ULT) blocking problem: Kernel sees ONE process (unaware of library threads). When any ULT makes blocking syscall (read(), sleep()), kernel blocks THE ENTIRE PROCESS. All other ULTs also blocked even though ready to run. GATE example: Process P has 4 ULTs. Thread T1 does read() on slow disk. Kernel blocks process P. Threads T2, T3, T4 cannot run despite being ready. Solutions: (1) Use non-blocking I/O (select/poll/epoll), (2) Use asynchronous I/O, (3) Switch to Kernel-Level Threads where kernel schedules threads independently. Why KLT doesn't have this: Kernel manages each thread separately, can block one while others run.",
            "formula": "ULT: One blocks = All block (kernel sees 1 process)"
        }
    },
    {
        "id": "os-sched-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "FCFS scheduling is:",
        "options": [
            "Non-preemptive",
            "Round-robin",
            "Priority-based",
            "Preemptive"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "FCFS (First-Come-First-Served) aka FIFO: NON-preemptive scheduling. Process runs to completion or until voluntary block (I/O). No timer interrupt. Implementation: Single FIFO ready queue. Arrival order determines execution order. PROS: Simple, fair (arrival order), no starvation. CONS: (1) Poor average waiting time (long process delays all), (2) Convoy effect (I/O-bound wait for CPU-bound), (3) No prioritization. GATE calculation: Build Gantt chart in arrival order, compute waiting times. Example: Processes with bursts 24, 3, 3 arrive at 0 = Avg WT = (0+24+27)/3 = 17. If shortest first: (0+3+6)/3 = 3 (much better).",
            "formula": "FCFS: Non-preemptive, FIFO queue, poor avg WT"
        }
    },
    {
        "id": "os-sched-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "FCFS suffers from:",
        "options": [
            "Thrashing",
            "Starvation",
            "Convoy effect",
            "Priority inversion"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Convoy Effect: FCFS problem where short I/O-bound processes get stuck behind long CPU-bound process, like cars behind slow truck on highway. Scenario: 1 CPU-bound (burst=100ms) + 10 I/O-bound (burst=1ms each). FCFS order: CPU-bound runs 100ms, then each I/O process runs 1ms, quickly requests I/O (disk), blocks. While I/O processes wait for disk, CPU idle (they're all blocked). When disk I/O completes, processes re-enter ready queue, again stuck behind CPU-bound if it's still there. Result: CPU utilization LOW (idle during I/O), I/O device utilization LOW (idle while CPU-bound runs), response time HIGH. Solution: Preemptive scheduling (RR, SRTF) allows I/O processes to jump ahead.",
            "formula": "Convoy = Long CPU-bound blocks queue of short I/O-bound"
        }
    },
    {
        "id": "os-sched-012",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Starvation is prevented in:",
        "options": [
            "FCFS",
            "SJF (pure)",
            "Priority scheduling (pure)",
            "Round Robin"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Starvation = process waits indefinitely, never gets CPU. GATE analysis of algorithms: (1) Round Robin: NO starvation - every process gets turn within (n-1)*q time. (2) FCFS: NO starvation - arrival order guarantees eventual run. (3) Pure Priority: YES starvation - high priority keeps preempting low (solution: aging). (4) Pure SJF: YES starvation - long jobs never run if short jobs keep arriving (solution: aging or SRTF with time limits). RR and FCFS guarantee bounded waiting. Formula: Max wait in RR = (n-1) * quantum for n processes.",
            "formula": "RR max wait = (n-1)*q; FCFS/RR prevent starvation"
        }
    },
    {
        "id": "os-sched-013",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Aging technique is used to prevent:",
        "options": [
            "Race condition",
            "Thrashing",
            "Starvation",
            "Deadlock"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Aging: Anti-starvation technique for priority-based scheduling. Gradually increase priority of waiting processes as function of wait time. Implementation examples: (1) Linear: priority = base_priority + (wait_time / time_unit), (2) Increment: Every 10 seconds in ready queue, add 1 to priority, (3) Exponential: priority *= 1.1 per time unit. Ensures low-priority process eventually reaches high priority after sufficient waiting. Used in multilevel feedback queue. GATE: Even process with initial priority=0 will surpass priority=10 process if it waits long enough. Balances static priority with dynamic fairness. Compare: Pure priority (no aging) can starve, Priority + Aging prevents starvation.",
            "formula": "New_Priority = Base_Priority + f(Wait_Time)"
        }
    },
    {
        "id": "os-sched-014",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Turnaround time = ?",
        "options": [
            "Completion time - Arrival time",
            "Arrival time - Burst time",
            "Waiting time",
            "Burst time"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Turnaround Time (TAT) = Total time process spends in system from arrival to completion. Formula: $TAT = T_{completion} - T_{arrival}$ OR equivalently $TAT = T_{waiting} + T_{burst}$ (time in ready queue + time executing). GATE uses both forms. Example: Process arrives at t=2, waits until t=5 (waiting=3), runs for 4ms (burst=4), finishes at t=9. TAT = 9-2=7 OR 3+4=7. Average TAT minimized by SJF. Measures user perspective (how long did MY job take?). Contrast with throughput (system perspective: jobs/time).",
            "formula": "$TAT = T_{comp} - T_{arr} = T_{wait} + T_{burst}$"
        }
    },
    {
        "id": "os-sched-015",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Response time is important for:",
        "options": [
            "Batch systems",
            "Interactive/time-sharing systems",
            "Embedded systems",
            "Real-time systems"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Response Time = Time from request/arrival to FIRST output/response (not completion!). Critical metric for interactive/time-sharing systems where user expects immediate feedback (e.g., typing in terminal, clicking button). Formula: $ResponseTime = T_{first_response} - T_{arrival}$. Minimized by: (1) Round Robin with small quantum (gets quick first response), (2) SRTF (short jobs respond fast). Contrast: Turnaround time = first to last (completion). Batch systems optimize throughput (jobs/sec), not response. Real-time optimizes meeting deadlines, may sacrifice response for predictability.",
            "formula": "$RT = T_{first_resp} - T_{arr}$ (important for interactive)"
        }
    },
    {
        "id": "os-sync-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Critical section problem requirements are:",
        "options": [
            "Speed",
            "Deadlock prevention",
            "Mutual exclusion only",
            "Mutual exclusion, progress, bounded waiting"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Critical Section solution requirements (ALL 3 mandatory): (1) Mutual Exclusion: At most 1 process in CS simultaneously (safety). (2) Progress: If no process in CS and some want to enter, only waiting processes participate in deciding who enters next, decision made in finite time (liveness, no deadlock). (3) Bounded Waiting: Exists a bound $B$ on number of times other processes enter CS after process Pi requests entry before Pi gets in (no starvation). GATE: Solution satisfying only (1) + (2) is INCOMPLETE - may starve. Solution satisfying only (1) may deadlock. Need ALL 3. Algorithms: Peterson's (all 3 ✓), Test-and-Set alone (only 1 ✓), Bakery (all 3 ✓).",
            "formula": "CS Requirements = ME + Progress + Bounded Waiting (all 3)"
        }
    },
    {
        "id": "os-sync-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Peterson's solution works for how many processes?",
        "options": [
            "Exactly 2",
            "Any number",
            "Only 1",
            "At most 4"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Peterson's Algorithm: Software solution for exactly 2 processes only. Uses 2 shared variables: boolean flag[2] (process i wants to enter: flag[i]=true) and int turn (whose turn when both want in). Pseudocode: flag[i]=true; turn=j; while(flag[j] && turn==j); //busy wait. Satisfies all 3 CS requirements without hardware support. GATE: Works only for2 processes - NOT scalable. Extensions for n processes: Filter algorithm (generalization), Bakery algorithm (Lamport, uses ticket numbers). Modern systems use hardware (test-and-set, compare-and-swap) or kernel semaphores instead of Peterson's.",
            "formula": "Peterson's: flag[2] + turn, works for n=2 processes only"
        }
    },
    {
        "id": "os-sync-012",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "A binary semaphore can have values:",
        "options": [
            "1 only",
            "0 only",
            "0 or 1",
            "Any non-negative integer"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Binary Semaphore (aka Mutex): Semaphore with values restricted to 0 or 1 only. Semantics: 1 = resource available/unlocked, 0 = resource busy/locked. Used for mutual exclusion (lock/unlock CS). Operations: wait(mutex) before CS (if 1 make 0 and enter, if 0 block), signal(mutex) after CS (make 1, wake waiting). GATE distinction: (1) Binary semaphore: values {0,1}, for ME. (2) Counting semaphore: values {0,1,2,...,N}, for resource counting (N instances). Example: Counting sem (init=5) controls access to 5 printers.",
            "formula": "Binary: {0,1} for ME; Counting: {0..N} for resources"
        }
    },
    {
        "id": "os-sync-013",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "signal() operation on a semaphore (also called V or up):",
        "options": [
            "Decrements value",
            "Increments value",
            "Blocks process",
            "Terminates process"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "signal(S) aka V(S) aka up(S): Increments semaphore value S atomically. Pseudocode: `S++; if(S<=0) wakeup_one_waiting_process();`. When S goes from -2 to -1, means one blocked process wakes up. Exiting CS: signal(mutex) releases lock. GATE: Track semaphore value through operation sequence. If S=2, 5 wait()s then 2 signal()s: 2->1->0->-1->-2->-3->-2->-1, meaning 1 process still blocked. Dual operation: wait(S)/P(S)/down(S) decrements and possibly blocks. Both must be atomic (indivisible) - implemented via hardware instructions.",
            "formula": "`signal(S): S++; if(S<=0) wakeup();` (atomic increment)"
        }
    },
    {
        "id": "os-sync-014",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "In Producer-Consumer problem, semaphores used are:",
        "options": [
            "No semaphores needed",
            "mutex, empty, and full",
            "mutex only",
            "empty and full only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Producer-Consumer (Bounded Buffer): 3 semaphores needed. (1) mutex (init=1): Mutual exclusion for buffer access. (2) empty (init=N): Counts empty slots, producer waits if buffer full. (3) full (init=0): Counts filled slots, consumer waits if buffer empty. GATE code pattern: Producer: wait(empty); wait(mutex); [produce item]; signal(mutex); signal(full). Consumer: wait(full); wait(mutex); [consume item]; signal(mutex); signal(empty). CRITICAL: Order matters! wait(empty) BEFORE wait(mutex) to avoid deadlock (why: if buffer full and producer holds mutex while waiting for empty, consumer can't signal empty because can't get mutex). Common GATE mistake: wrong order causes deadlock.",
            "formula": "3 sems: mutex(1), empty(N), full(0); Order: resource then mutex"
        }
    },
    {
        "id": "os-sync-015",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Reader-Writer problem allows:",
        "options": [
            "Multiple writers",
            "Multiple readers OR one writer",
            "Multiple readers AND one writer",
            "Only one reader"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Reader-Writer Problem: Allows multiple readers simultaneously (reading doesn't change data) XOR one writer exclusively (writing requires exclusive access, no readers/writers). Never: multiple writers, or reader+writer together. Classic solutions: (1) First Reader-Writer: Readers priority - writer may starve if readers keep arriving. (2) Second Reader-Writer: Writers priority - readers may starve. (3) Third/Fair: FIFO queue, no starvation. Implementation: semaphores (wrt for write, mutex for read-count, read-count variable). GATE: Which variant depends on requirements (database: usually writer-priority to avoid stale reads).",
            "formula": "R-W: Many readers OR 1 writer (exclusive write access)"
        }
    },
    {
        "id": "os-dead-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlocks",
        "question": "Resource Allocation Graph with a cycle:",
        "options": [
            "Always means deadlock",
            "Never means deadlock",
            "Means deadlock if single instance of each resource type",
            "Means starvation"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Resource Allocation Graph (RAG) cycle analysis: (1) If SINGLE instance per resource type: Cycle implies deadlock (necessary and sufficient). (2) If MULTIPLE instances: Cycle is necessary but NOT sufficient for deadlock (may have cycle but no deadlock if instances available). GATE example: 2 processes, 2 resources (1 instance each), cycle P1 to R1 to P2 to R2 to P1 equals deadlock. But: 3 processes, 1 resource (2 instances), cycle can exist while process finishes and releases. Detection: For single instance use cycle detection (DFS). For multiple instances use Banker's-like algorithm (resource request vs available).",
            "formula": "Single instance: Cycle means Deadlock; Multi: Cycle means Maybe deadlock"
        }
    },
    {
        "id": "os-dead-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlocks",
        "question": "To prevent 'hold and wait', processes must:",
        "options": [
            "Both A or B",
            "Use only one resource",
            "Release all resources before requesting new ones",
            "Request all resources at once"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Preventing Hold-and-Wait (one of 4 Coffman conditions): Method 1: Request ALL resources atomically at process start (before execution begins). Method 2: Release ALL currently held resources before requesting ANY new ones (protocol: request, use, release ALL, then can request again). Both ensure process never holds some while waiting for more. GATE note: Either method breaks H&W. Downside: (1) Low resource utilization (may hold resources not currently  needed), (2) Starvation (process needing many resources may never get all simultaneously). Real systems rarely use pure prevention - prefer avoidance (Banker's) or detection+recovery.",
            "formula": "Break H&W: Request all at once OR Release all before new request"
        }
    },
    {
        "id": "os-dead-012",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlocks",
        "question": "In Banker's algorithm, a state is safe if:",
        "options": [
            "CPU utilization is high",
            "There exists a safe sequence where all processes can complete",
            "No process is waiting",
            "All resources are free"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Safe State (Banker's algorithm): Exists at least one sequence (safe sequence) order P1, P2, ..., Pn where each process Pi can finish using: Available resources + Resources from all Pj that finished before it (j less than i). Formally: For each Pi, Need[i] less than or equal to Available + Sum of Allocation[j] for all j less than i. If system is safe, no deadlock possible (but may still have processes waiting). If unsafe, deadlock MAY occur (not guaranteed). GATE algorithm: Find one Pi whose need is satisfied by current available. Assume it finishes, add its allocation to available. Repeat. If all processes finish, safe. Example: Available equals 3, P1 needs 2, P2 needs 5. Sequence P1, P2 works (P1 finishes, releases, then P2 runs).",
            "formula": "Safe: exists order where each Pi completes with avail + prior releases"
        }
    },
    {
        "id": "os-dead-013",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Deadlocks",
        "question": "For n processes sharing m identical resources, maximum resources each process can request is k. Deadlock is guaranteed NOT to occur if: n(k-1) + 1 ≤ m. If n=4, k=3, minimum m to prevent deadlock is:",
        "correctAnswer": 9,
        "tolerance": 0,
        "explanation": {
            "solution": "Deadlock-free condition: m ≥ n(k-1) + 1. With n=4 processes, each needing max k=3: m ≥ 4×(3-1) + 1 = 4×2 + 1 = 9. Intuition: worst case is each process holds k-1 resources (can't proceed, needs one more). Total held = n(k-1). If we have one more (m ≥ n(k-1)+1), at least one process can complete.",
            "formula": "$m \\geq n(k-1) + 1 = 4(2) + 1 = 9$"
        }
    },
    {
        "id": "os-mem-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Internal fragmentation occurs in:",
        "options": [
            "Linked allocation",
            "Paging",
            "Variable partition",
            "Segmentation"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Internal Fragmentation: Wasted space INSIDE allocated block/page. Occurs in FIXED-SIZE schemes: (1) Paging: If process needs 10.3KB and page size is 4KB, allocate 3 pages (12KB), waste 1.7KB inside last page. (2) Fixed Partitioning: 100KB partition for 60KB process wastes 40KB internally. Average internal fragmentation in paging approx page_size divided by 2. Does NOT occur in: Segmentation (exact size), Variable partitioning (exact size), Dynamic partitioning. GATE: \"Does paging have fragmentation?\" - YES, internal. \"Does segmentation have fragmentation?\" - YES, external.",
            "formula": "Internal: Fixed-size schemes (Paging, Fixed partition)"
        }
    },
    {
        "id": "os-mem-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "External fragmentation occurs in:",
        "options": [
            "Fixed partition",
            "Paging",
            "Variable partition / Segmentation",
            "Virtual memory"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "External Fragmentation: Total free memory sufficient but NOT CONTIGUOUS (scattered in small holes). Occurs in VARIABLE-SIZE schemes: (1) Segmentation: Variable segment sizes create holes of different sizes between allocations. (2) Variable/Dynamic Partitioning: As processes load/exit, memory becomes Swiss cheese. Example: Total free is 100KB in 10KB holes, but cannot allocate 50KB process. Solutions: (a) Compaction (move processes to coalesce holes - expensive, needs relocation), (b) Paging (eliminates external frag by allowing non-contiguous allocation). Does NOT occur in: Paging (fixed frames), Fixed partitioning.",
            "formula": "External: Variable-size schemes (Segmentation, Var partition)"
        }
    },
    {
        "id": "os-mem-012",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Page table stores mapping from:",
        "options": [
            "Logical page to physical frame",
            "Disk to RAM",
            "Process to memory",
            "Physical to logical"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Page Table: Data structure mapping logical (virtual) page number to physical frame number. CPU generates virtual address (page#, offset). Page# indexes into page table to get frame#. Combine frame# with offset to get physical address. Each process has its own page table (stored in memory). Page Table Entry (PTE) contains: (1) Frame number (main data), (2) Valid bit (is page in memory?), (3) Protection bits (R/W/X), (4) Dirty bit (modified?), (5) Reference bit (accessed recently?). GATE: Direction is always logical to physical, NOT reverse.",
            "formula": "Page Table[logical_page] gives physical_frame"
        }
    },
    {
        "id": "os-mem-013",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "TLB (Translation Lookaside Buffer) is a:",
        "options": [
            "CPU register",
            "Disk cache",
            "Cache for page table entries",
            "Secondary memory"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "TLB (Translation Lookaside Buffer): Small, fast, associative cache for page table entries. Problem: Without TLB, EVERY memory access requires 2 physical accesses (1 for page table, 1 for data). TLB caches recent translations (page# to frame# mappings). Access: Check TLB (parallel/associative), if hit use frame# directly (1 memory access total), if miss go to page table in memory (2 accesses) then update TLB. Typical size: 16-512 entries. Hit rate typically over 99 percent (locality). CRITICAL: TLB must be flushed on context switch (unless tagged with ASID). Hardware managed (MMU).",
            "formula": "TLB hit: 1 memory access; TLB miss: 2 memory accesses"
        }
    },
    {
        "id": "os-mem-014",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "If TLB hit rate is 90% and TLB access time is 10ns, memory access is 100ns, effective access time is:",
        "options": [
            "20ns",
            "100ns",
            "110ns",
            "19ns"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TLB Effective Access Time (EAT) calculation: Given: TLB time is 10ns, Memory time is 100ns, Hit rate is 90 percent. Model 1 (Hierarchical): TLB hit: TLB (10) plus Memory (100) equals 110ns. TLB miss: TLB (10) plus PageTable (100) plus Memory (100) equals 210ns. EAT equals 0.9 times 110 plus 0.1 times 210 equals 99 plus 21 equals 120ns. Model 2 (Parallel TLB): If TLB checked in parallel with memory, different formula. GATE uses Model 1 usually. Formula: $EAT = h(T_{TLB} + T_{mem}) + (1-h)(T_{TLB} + T_{PT} + T_{mem})$ where h is hit rate. Answer 19ns likely typo or different problem statement.",
            "formula": "$EAT = h(T_t+T_m) + (1-h)(T_t+T_{pt}+T_m)$"
        }
    },
    {
        "id": "os-mem-015",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "LRU page replacement replaces the page that:",
        "options": [
            "Was used least recently",
            "Was loaded first",
            "Will not be used for longest time",
            "Is largest"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "LRU (Least Recently Used): Page replacement that evicts page with oldest last access time (furthest in past). Based on temporal locality: if page used recently, likely to be used again soon. If not used for long time, probably won't be needed soon. Implementation: (1) Timestamps: Update time on each access, evict oldest (slow). (2) Stack: Keep stack of page#s, most recent on top (O(n) per access). (3) Approximate: Reference bits + clock algorithm (practical). Contrast: (a) FIFO: Evict oldest arrival (can suffer Belady's anomaly). (b) Optimal: Evict page used furthest in future (impossible, needs oracle). LRU approximates Optimal using past. GATE: LRU never has Belady's anomaly (stack algorithm).",
            "formula": "LRU: Evict page with max (current_time - last_access_time)"
        }
    },
    {
        "id": "os-mem-016",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Thrashing occurs when:",
        "options": [
            "Too few processes exist",
            "CPU is idle",
            "System spends more time paging than executing",
            "Memory is too large"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Thrashing: System spends MORE time paging (swapping pages in/out) than executing useful work. CPU utilization paradoxically DROPS (despite high I/O activity). Cause: Too many processes with too few frames each, so their working sets don't fit. Process faults, steals page from another process, which faults and steals back, endless cycle. Symptoms: High page-fault rate, high disk I/O, low CPU utilization (processes mostly blocked on page faults). Solutions: (1) Reduce multiprogramming level (suspend/swap out processes), (2) Increase memory, (3) Working set model (ensure each process has enough frames), (4) Page-Fault Frequency (PFF) control. GATE: More processes does NOT always mean better utilization - beyond threshold causes thrashing.",
            "formula": "Thrashing: Page-fault time much greater than Execution time"
        }
    },
    {
        "id": "os-mem-017",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Working set model helps prevent:",
        "options": [
            "Starvation",
            "Deadlock",
            "Race conditions",
            "Thrashing"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Working Set Model: Defines working set WS(t, delta) as set of pages referenced by process in time window delta (e.g., last 10000 refs). Approximates process's current locality. Key idea: Allocate frames greater than or equal to working set size. If sum of all WS sizes exceeds total frames, SUSPEND some processes (reduce multiprogramming). Prevents thrashing by ensuring each active process has sufficient frames for locality. GATE formula: $WSS = $ working set size. If $sum(WSS_i)  greater than$ total frames, suspend processes until inequality satisfied. Alternative: Page-Fault Frequency approach (if PFF too high, allocate more frames; if too low, take frames away). Working set changes over time as program moves to new phases.",
            "formula": "WS(t,delta) = pages referenced in last delta refs; Prevent thrashing"
        }
    },
    {
        "id": "os-fs-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Contiguous allocation of files suffers from:",
        "options": [
            "External fragmentation",
            "Very slow sequential access",
            "No random access",
            "Internal fragmentation"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Contiguous File Allocation: File occupies consecutive disk blocks (like array). PROS: (1) Excellent sequential AND random access - simple block calculation: start_block + offset, (2) Minimal seek time for sequential. CONS: (1) External fragmentation - holes after file deletions make allocation difficult, (2) File growth difficult - if file grows beyond allocated space must relocate ENTIRE file (expensive), (3) Must know file size at creation. Used in: CD-ROMs, DVDs (files never change size). GATE: Compare with linked (no ext frag but slow random) and indexed (best of both but overhead).",
            "formula": "Block_addr = Start_block + offset (fast random access)"
        }
    },
    {
        "id": "os-fs-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Linked allocation supports _____ access well:",
        "options": [
            "Both random and sequential",
            "Random",
            "Sequential",
            "Direct"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Linked Allocation: Each block has pointer to next block (like linked list). PROS: (1) No external fragmentation, (2) Easy file growth - just link new block, (3) No need to know size at creation. CONS: (1) Random access O(n) - must traverse chain from start to reach block i (very slow), (2) Pointer overhead - each block wastes space for pointer (e.g., 4 bytes per 512-byte block), (3) Reliability - one broken link loses rest of file. Optimization: FAT (File Allocation Table) - store ALL pointers in separate table in memory, reduces disk seeks but still sequential scan. Used in: FAT12/16/32 file systems.",
            "formula": "Good for sequential; Random access = O(n) seeks"
        }
    },
    {
        "id": "os-fs-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Indexed allocation uses:",
        "options": [
            "Hash table",
            "Index block with pointers to data blocks",
            "Linked blocks",
            "Contiguous blocks"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Indexed Allocation: Dedicated index block contains array of pointers to ALL data blocks (like array of pointers). PROS: (1) Efficient random access O(1) - direct lookup in index, (2) No external fragmentation, (3) Dynamic growth possible. CONS: (1) Index block overhead - small files waste space, (2) Size limit - if file large, single index block insufficient. Solutions for large files: (a) Linked index blocks, (b) Multi-level indexing (UNIX inode style: direct, single-indirect, double-indirect, triple-indirect). Example: UNIX inode with 12 direct + 1 single + 1 double + 1 triple supports huge files. GATE: Best for random access, combines advantages of contiguous and linked.",
            "formula": "Index block holds pointers; Random access = O(1)"
        }
    },
    {
        "id": "os-fs-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "UNIX inode contains:",
        "options": [
            "File name",
            "Directory entries",
            "File data",
            "Pointers to data blocks"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "UNIX Inode (Index Node): Data structure containing file metadata + block pointers. Contents: (1) Metadata: File size, permissions (rwx), owner (UID), group (GID), timestamps (atime, mtime, ctime), link count, (2) Block Pointers: 12 direct pointers (to data blocks), 1 single-indirect (points to block of pointers), 1 double-indirect (points to block of pointers to blocks of pointers), 1 triple-indirect. CRITICAL GATE point: Filename NOT in inode - stored in directory entry which maps name to inode number. This enables hard links (multiple names, one inode). File deleted when link_count reaches 0.",
            "formula": "Inode = metadata + pointers (NO filename)"
        }
    },
    {
        "id": "os-fs-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Hard link vs soft (symbolic) link: deleting original file:",
        "options": [
            "Breaks soft link, hard link still works",
            "Breaks hard link, soft link still works",
            "Breaks both",
            "Breaks neither"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Hard Link vs Soft Link: Hard link: New directory entry pointing to same inode as original. Inode has link count (incremented for each hard link). File data deleted ONLY when link_count becomes 0. Deleting 'original' decrements count but hard link STILL works (accesses same inode/data). Soft link (Symlink): Special file containing pathname (text string) to target file. Deleting target makes symlink dangling (broken). GATE comparison: | Type | Points to | Crosses filesystems? | After target deleted | Overhead | |------|----------|---------------------|---------------------|----------| | Hard | Inode | No | Still works | None | | Soft | Path | Yes | Dangling | Extra inode+block |. Cannot hard-link directories (creates cycles).",
            "formula": "Hard: same inode; Soft: path string (can dangle)"
        }
    },
    {
        "id": "os2-proc-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "Process states include:",
        "options": [
            "Only running",
            "New, Ready, Running, Waiting, Terminated",
            "Ready and Running only",
            "Running and Blocked only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "5-State Process Model: (1) New: Process created, PCB allocated, not yet ready, (2) Ready: Has all resources except CPU, in ready queue waiting for scheduler, (3) Running: Executing on CPU (only 1 per CPU core), (4) Waiting/Blocked: Waiting for event (I/O completion, semaphore), CANNOT run even if CPU free, (5) Terminated: Finished execution, PCB will be freed. GATE transitions: New to Ready (admit), Ready to Running (dispatch/schedule), Running to Ready (preempt, time quantum expires), Running to Waiting (I/O request, wait on semaphore), Waiting to Ready (I/O complete, signal from semaphore), Running to Terminated (exit). Some models add Suspend states (swapped to disk).",
            "formula": "States: New, Ready, Running, Waiting, Terminated (5-state)"
        }
    },
    {
        "id": "os2-proc-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "PCB (Process Control Block) contains:",
        "options": [
            "PID, state, PC, registers, memory info, I/O status",
            "Only PID",
            "Only priority",
            "Only memory address"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "PCB (Process Control Block) aka Task Control Block: Kernel's data structure representing a process. Contents: (1) Process ID (PID) - unique identifier, (2) State - new/ready/running/waiting/terminated, (3) Program Counter (PC) - next instruction address, (4) CPU Registers - all register values, (5) Scheduling info - priority, queue pointers, CPU time used, (6) Memory management - page table base register, limit registers, (7) I/O status - list of open files, allocated devices, (8) Accounting - CPU time, time limits. Context switch = save entire PCB of current process, load PCB of next process. PCB stored in kernel memory, protected from user access.",
            "formula": "PCB = PID + State + PC + Regs + Sched + Memory + I/O"
        }
    },
    {
        "id": "os2-proc-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "Context switch involves:",
        "options": [
            "Only saving PC",
            "Saving state of current process, loading state of next process",
            "Deleting the process",
            "Restarting the CPU"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Context Switch: Switching CPU from one process/thread to another. Steps: (1) Save current process state (PC, registers, stack pointer, etc.) to its PCB, (2) Update process state (running to ready), (3) Select next process (scheduler), (4) Update state (ready to running), (5) Load next process state from its PCB to CPU registers. For process switch: also switch page table base register, flush TLB, switch memory context (expensive). For thread switch within same process: only registers (faster). Context switch is pure overhead - no useful work. Time: 1-10 microseconds typically. Triggered by: timer interrupt, I/O, system call, higher priority process ready.",
            "formula": "Context Switch = Save PCB1 + Load PCB2 (+ TLB flush for processes)"
        }
    },
    {
        "id": "os2-proc-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "fork() system call creates:",
        "options": [
            "Child process (copy of parent)",
            "Thread",
            "File",
            "Signal"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "fork() System Call: Creates new child process as (nearly) exact copy of parent process. Return values (CRITICAL for GATE): Returns 0 to child, Returns child's PID to parent, Returns -1 on error. Child gets copy of: code, data, heap, stack, open file descriptors, environment variables (uses copy-on-write optimization - copies only when modified). Child gets NEW: PID, PPID (parent's PID), resource utilizations reset. Common pattern: `pid = fork(); if(pid == 0) { child code } else { parent code }`. Often followed by exec() in child to run different program. Basis of UNIX process creation model.",
            "formula": "fork returns: 0=child, PID=parent, -1=error"
        }
    },
    {
        "id": "os2-proc-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "exec() system call:",
        "options": [
            "Replaces current process image with new program",
            "Terminates process",
            "Creates thread",
            "Creates new process"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "exec() System Call Family: Replaces current process memory image with new program. Family includes: execl, execlp, execle, execv, execvp, execve (differ in how arguments passed). Operation: (1) Load new program from file, (2) Replace code, data, heap, stack segments, (3) Initialize new stack with arguments, (4) Reset PC to new entry point. What stays same: PID, PPID, open file descriptors (unless close-on-exec set), UID/GID. On success: NEVER returns (old program gone). On error: returns -1 (current program continues). Typical usage: fork() then exec() in child to run new program while parent continues or waits.",
            "formula": "exec: Replace current process image; fork+exec = run new program"
        }
    },
    {
        "id": "os2-proc-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "Zombie process is a process that:",
        "options": [
            "Is running",
            "Has no PCB",
            "Is waiting for I/O",
            "Has terminated but parent hasn't called wait()"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Zombie: child process has terminated (exit status available) but parent hasn't collected it via wait(). Entry remains in process table holding exit status. Uses minimal resources (no memory, just PCB slot). Parent must call wait() to reap zombie. Too many zombies can exhaust PID space."
        }
    },
    {
        "id": "os2-proc-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Processes",
        "question": "Orphan process is a process whose:",
        "options": [
            "Parent has terminated",
            "Has infinite priority",
            "Is waiting forever",
            "Has no children"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Orphan: parent terminated before child. In UNIX, orphans are adopted by init (PID 1), which will eventually reap them when they terminate. Unlike zombies (dead with living parent), orphans are living with dead parent. Continue running normally until completion."
        }
    },
    {
        "id": "os2-thread-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Threads",
        "question": "Threads within same process share:",
        "options": [
            "Code, data, heap, open files",
            "Stack",
            "PC",
            "Registers"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Thread Sharing Model: Threads within same process SHARE: (1) Code/Text segment, (2) Data segment (global variables), (3) Heap (dynamically allocated memory), (4) Open file descriptors, (5) Signal handlers, (6) Process ID, (7) Working directory. Each thread has PRIVATE: (1) Stack (local variables, return addresses), (2) Registers (including PC), (3) Thread ID (TID), (4) Scheduling state/priority. GATE key: Sharing makes thread creation FAST (no need to copy memory) and context switch FAST (same address space, no TLB flush). But: shared data requires synchronization (mutexes, semaphores). Formula: Memory per thread equals stack_size (typically 1-8MB), vs process which duplicates entire address space.",
            "formula": "Threads share: Code + Data + Heap + Files; Private: Stack + Regs + TID"
        }
    },
    {
        "id": "os2-thread-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Threads",
        "question": "User-level threads vs kernel-level threads: context switch is faster for:",
        "options": [
            "Neither has context switch",
            "Kernel threads",
            "Both same",
            "User threads"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "ULT vs KLT Context Switch Speed: User-Level Threads (ULT): Context switch is MUCH FASTER - just function call in user space library (save/restore registers to thread control blocks in user memory). No kernel involvement, no mode switch. Time: ~100 nanoseconds. Kernel-Level Threads (KLT): Requires system call, kernel mode switch, scheduler invocation, full kernel context save/restore. Time: ~1-10 microseconds (10-100x slower). GATE trade-off: ULT faster switch BUT (1) can't use multiple CPUs, (2) blocking I/O blocks entire process. KLT slower switch BUT (1) true parallelism on multi-CPU, (2) one thread blocks, others continue. Modern hybrid: M:N model (multiple ULTs mapped to multiple KLTs).",
            "formula": "ULT switch ~100ns (user-space); KLT switch ~1-10μs (kernel)"
        }
    },
    {
        "id": "os2-thread-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Threads",
        "question": "If one user-level thread blocks on I/O:",
        "options": [
            "All threads continue",
            "Entire process blocks",
            "No blocking occurs",
            "Only that thread blocks"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "ULT Blocking Problem: Kernel is unaware of user-level threads - sees only the process. When ANY user thread makes blocking system call (e.g., read() from disk), kernel puts ENTIRE PROCESS in blocked state, freezing ALL user threads (even those ready to run). Why: Kernel scheduler works at process granularity, not thread. GATE solutions: (1) Jacketing: Library wraps blocking calls to use non-blocking I/O plus polling, (2) Asynchronous I/O: Use select/poll/epoll, (3) Use KLTs instead (kernel aware of each thread). Example: 4 ULTs in process, thread 1 does read(), all 4 threads block even if threads 2-4 have CPU work. With KLTs, only thread 1 blocks.",
            "formula": "ULT: Kernel blocks process -> all ULTs blocked (N:1 model problem)"
        }
    },
    {
        "id": "os2-sched-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Preemptive scheduling allows:",
        "options": [
            "No context switching",
            "OS to interrupt running process",
            "Process to run until completion",
            "Only I/O scheduling"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Preemptive Scheduling: OS can forcibly remove running process from CPU via: (1) Timer interrupt (quantum expires in RR), (2) Higher priority process arrives (preemptive priority), (3) Shorter job arrives (SRTF). Requires: Hardware timer interrupt, context switch mechanism, kernel in control. PROS: (1) Better response time for interactive systems, (2) Prevents CPU monopolization (one process can't hog CPU), (3) Fairness. CONS: (1) More context switches (overhead), (2) Race conditions possible (need synchronization). GATE examples: Round Robin, SRTF, Preemptive Priority. vs Non-preemptive: FCFS, non-preemptive SJF, Cooperative. Modern general-purpose OS use preemptive for responsiveness.",
            "formula": "Preemptive: OS can interrupt; Non-preemptive: process releases voluntarily"
        }
    },
    {
        "id": "os2-sched-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Non-preemptive scheduling means:",
        "options": [
            "Only for real-time",
            "Process runs until it blocks or terminates",
            "No scheduling",
            "OS can interrupt anytime"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Non-Preemptive (Cooperative) Scheduling: Process keeps CPU until it voluntarily gives up by: (1) Blocking for I/O, (2) Explicitly yielding (yield() syscall), (3) Terminating. OS cannot forcibly take CPU away. PROS: (1) Simpler implementation (no timer interrupts needed), (2) Fewer context switches (less overhead), (3) No race conditions from preemption. CONS: (1) Poor response time - interactive programs wait for CPU-bound process, (2) One bad process can monopolize CPU (hangs system), (3) Unfair for CPU-intensive workloads. GATE examples: FCFS, Non-preemptive SJF/Priority. Used in: Batch systems (where throughput matters, not response), embedded/real-time (predictability over responsiveness). Modern interactive OS require preemption.",
            "formula": "Non-preemptive: Process runs until blocks/terminates/yields"
        }
    },
    {
        "id": "os2-sched-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "FCFS (First Come First Serve) is:",
        "options": [
            "Both",
            "Neither",
            "Non-preemptive",
            "Preemptive"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FCFS (First-Come-First-Served): Strictly NON-preemptive FIFO scheduling. Once process gets CPU, runs until blocks (I/O request) or terminates. Implementation: Single FIFO ready queue, dispatch head. GATE characteristics: (1) No starvation - every process eventually runs in arrival order (bounded waiting satisfied). (2) Poor avg waiting time - heavily depends on arrival order, not optimal. (3) Convoy effect - major problem when long CPU-bound process blocks queue of short I/O-bound processes. PROS: Simple, fair in arrival-order sense, low overhead. CONS: Can't prioritize, poor interactive performance, convoy effect hurts throughput. GATE calculation: WT[i] = sum of all burst times BEFORE process i. Example: Bursts 24,3,3 -> WT = (0+24+27)/3 = 17 (vs SJF: 0+3+6/3=3).",
            "formula": "FCFS: Non-preemptive FIFO; WT[i] = Σburst[j] for j<i"
        }
    },
    {
        "id": "os2-sched-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Convoy effect occurs in:",
        "options": [
            "SJF",
            "Round Robin",
            "Priority scheduling",
            "FCFS (short jobs behind long job)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Convoy Effect: FCFS pathology where all short processes stuck behind one long process, like traffic jam behind slow vehicle. GATE scenario: 1 CPU-bound process (burst=100ms) + 9 I/O-bound (burst=1ms each). Arrival order: CPU-bound first. Sequence: (1) CPU-bound runs 100ms, (2) All I/O-bound wait 100ms, then each runs 1ms and blocks for I/O, (3) While waiting for I/O, CPU may be IDLE if CPU-bound also blocks, (4) When I/O-bound return from I/O, CPU-bound may still be ahead in queue - REPEAT. Result: Low CPU utilization (idle during I/O wait), Low I/O utilization (idle while CPU hogs processor), High average waiting time. Solution: Preemptive scheduling (RR, SRTF) allows short jobs to jump ahead. GATE: Convoy effect is why FCFS bad for mixed workloads despite simplicity.",
            "formula": "Convoy: Long CPU-job blocks queue -> Poor CPU & I/O util"
        }
    },
    {
        "id": "os2-sched-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "SJF (Shortest Job First) minimizes:",
        "options": [
            "Average waiting time",
            "Response time",
            "Turnaround time",
            "Throughput"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "SJF (Shortest Job First): PROVABLY OPTIMAL for minimizing average waiting time among ALL non-preemptive algorithms (proved via exchange argument). Why optimal: Giving CPU to shortest job first minimizes total weighted wait. Formula: $AvgWT = \\frac{1}{n}\\sum_{i=1}^{n} W_i$ where $W_i$ is waiting time Process_i. GATE proof idea: Swapping any two jobs where shorter follows longer NEVER decreases average wait, so sorted-by-burst-time is optimal. PROBLEMS: (1) Requires knowing burst times in advance (impractical in real systems - use prediction: exponential averaging $\\tau_{n+1} = \\alpha t_n + (1-\\alpha)\\tau_n$ where α typically 0.5, $\\tau$ = predicted burst, t = actual), (2) Starvation of long jobs if stream of short jobs keeps arriving (solution: aging). Contrast: SRTF is the preemptive version, also optimal for preemptive case.",
            "formula": "$AvgWT_{SJF}$ is provably smallest; Prediction: $\\tau_{n+1} = \\alpha t_n + (1-\\alpha)\\tau_n$"
        }
    },
    {
        "id": "os2-sched-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "SJF can cause starvation of:",
        "options": [
            "Short jobs",
            "All jobs",
            "No starvation",
            "Long jobs (may never get CPU)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SJF Starvation Problem: Long jobs may NEVER execute if continuous stream of shorter jobs arrives. GATE scenario: Job A (burst=100s) waiting. Short jobs B1(1s), B2(1s), ..., B100(1s) arrive sequentially. SJF always picks B_i over A. Job A waits INDEFINITELY (violates bounded waiting). This is a GATE trap: SJF is optimal for avg waiting but does NOT prevent starvation. Solutions: (1) Aging: Boost priority as function of wait time, e.g., Effective_Priority = Burst_Time - Wait_Time*k. Eventually long job becomes highest priority. (2) Hybrid: MLFQ-style approach where processes age into higher queues. (3) Use FCFS for processes waiting beyond threshold. GATE comparison: FCFS and RR prevent starvation (bounded waiting), pure SJF/Priority do not.",
            "formula": "SJF starvation: Long jobs wait indefinitely if short ones keep coming"
        }
    },
    {
        "id": "os2-sched-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "SRTF (Shortest Remaining Time First) is:",
        "options": [
            "FCFS variant",
            "Round Robin variant",
            "Preemptive SJF",
            "Non-preemptive SJF"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "SRTF (Shortest Remaining Time First): Preemptive version of SJF. At ANY arrival, compare new process burst with current process's REMAINING time. If new is shorter, preempt and run new. GATE optimality: PROVABLY minimal average waiting time among ALL preemptive algorithms (extends SJF optimality). Implementation: Priority queue of (remaining_time, process), update on every arrival. Example: P1 (burst=8, arr=0) running. P2 (burst=4, arr=1) arrives. Remaining time P1 = 7. Since 4<7, preempt P1, run P2 to completion, then resume P1. TRADE-OFFS vs SJF: PROS: Better average times (preemption allows finer optimization). CONS: (1) More context switches (overhead), (2) More starvation risk (long job can be preempted repeatedly), (3) Needs runtime burst estimates (same as SJF). GATE: SRTF ≤ SJF in avg wait, but higher overhead.",
            "formula": "SRTF: Preemptive SJF; Preempt if new_burst < remaining_time"
        }
    },
    {
        "id": "os2-sched-008",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Round Robin scheduling is:",
        "options": [
            "Non-preemptive",
            "FCFS based",
            "Priority based",
            "Preemptive with time quantum"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Round Robin: Preemptive with fixed time quantum q (typically 10-100ms). Each process gets q time units, then timer interrupt preempts and moves to end of ready queue. Cyclic execution. GATE guarantees: (1) No starvation - every process gets turn within (n-1)*q time for n processes, (2) Fair CPU share - over long run, each gets 1/n of CPU, (3) Good response time - all processes get quick initial response. QUANTUM SELECTION (critical for GATE): Too Small (q->0): Excessive context switches, overhead dominates, throughput->0 (spend all time switching, no work done). Too Large (q->∞): Degenerates to FCFS (processes finish in  one quantum), poor response time, no fairness benefit. Rule of thumb: q should be larger than 80% of CPU bursts. If average burst is 5ms, use q~6-10ms. GATE calculations: Calculate TAT/WT with Gantt chart, watch for arrivals mid-quantum.",
            "formula": "RR: Max_wait = (n-1)*q; q too small = overhead, q too large = FCFS"
        }
    },
    {
        "id": "os2-sched-009",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "If time quantum is very large, Round Robin behaves like:",
        "options": [
            "SJF",
            "Priority",
            "FCFS",
            "SRTF"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Large Quantum Limit: As q->∞ (quantum much larger than all burst times), RR degenerates to FCFS. Why: Each process gets one turn on CPU, completes entirely within its quantum (no preemption), never re-enters queue. Execution order = arrival order (FIFO). GATE analysis: If all bursts < q, then RR behaves exactly like FCFS - same WT, TAT, throughput. Example: Bursts = {5, 10, 3} ms, q=100ms. Each runs to completion in one quantum, same as FCFS. Loses RR fairness benefit. Optimal q: Large enough to minimize context switches (q > 80% of bursts) but small enough for good response (process doesn't wait too long for next turn). GATE rule: If q ≥ max(burst), then RR = FCFS.",
            "formula": "RR with q->∞: Degenerates to FCFS (no preemption occurs)"
        }
    },
    {
        "id": "os2-sched-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "If time quantum is very small in RR:",
        "options": [
            "High context switch overhead",
            "Less context switches",
            "Better for long jobs",
            "No overhead"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Small Quantum Limit: As q->0, context switch overhead dominates. GATE analysis: Let context switch time = s. With q very small, after every q time units, spend s switching. Fraction of time doing useful work = q/(q+s). As q->0, this fraction->0. Example: q=1ms, s=0.1ms -> 1/1.1 ~ 90.9% efficiency. But q=0.01ms, s=0.1ms -> 0.01/0.11 ~ 9% efficiency (spend 91% time just switching!). Additional costs: (1) TLB/cache thrashing - frequent switches invalidate caches, (2) Scheduler overhead - frequent scheduling decisions. GATE consequence: Throughput drops drastically, though response time stays low (every process gets CPU quickly, but for very short bursts). Practical minimum q: ~1-10ms on modern systems (depends on s).",
            "formula": "Efficiency = q/(q+s) where s=switch time; q->0 ⇒ Efficiency->0"
        }
    },
    {
        "id": "os2-sched-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Priority scheduling can cause starvation, solved by:",
        "options": [
            "Reducing all priorities",
            "Ignoring priorities",
            "Aging (increase priority over time)",
            "Using FCFS instead"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Priority Scheduling Starvation: Low-priority processes can wait INDEFINITELY if stream of high-priority processes keeps arriving. GATE example: Process P1 (priority=1, low) ready. Processes P2,P3,... (priority=10, high) arrive continuously. Scheduler always picks high-priority, P1 never runs. Violates bounded waiting requirement. Solution: AGING - Gradually increase priority as function of wait time. Implementations: (1) Linear: $priority(t) = base_priority + wait_time/k$ where k is aging constant, (2) Incremental: Every Δt seconds, priority += 1, (3) Exponential: $priority *= (1 + α)$ every interval. Effect: Even priority=0 process eventually reaches priority=10 after enough waiting, surpasses new arrivals. GATE: Aging converts unbounded-wait priority scheduling into bounded-wait, fair system. Used in MLFQ.",
            "formula": "Aging: priority_new = priority_base + f(wait_time); Prevents starvation"
        }
    },
    {
        "id": "os2-sched-012",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Multilevel Queue scheduling:",
        "options": [
            "Has multiple queues with different priorities/scheduling",
            "Uses only FCFS",
            "Has one queue",
            "Uses only RR"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Multilevel Queue (MLQ): Separate ready queues for different process classes (e.g., System, Interactive, Batch, Student). GATE characteristics: (1) Processes permanently assigned to one queue (based on type, priority, memory size), (2) Each queue has own scheduling algorithm (e.g., System uses Priority, Interactive uses RR(q=10), Batch uses FCFS), (3) Between-queue scheduling: Either *fixed priority* (System > Interactive > Batch - can starve lower queues, needs aging) OR *time slicing* (80% Interactive, 20% Batch). PROS: Different algorithms for different needs, efficient. CONS: Inflexible (no movement between queues), potential starvation of low-priority queues. Example: 3 queues with Fixed Priority: Q0(RR,q=8), Q1(RR,q=16), Q2(FCFS). Process in Q1 runs only if Q0 empty.",
            "formula": "MLQ: Multiple queues, fixed assignment, per-queue algorithms"
        }
    },
    {
        "id": "os2-sched-013",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Multilevel Feedback Queue allows:",
        "options": [
            "No movement between queues",
            "Only priority changes",
            "Fixed queue assignment",
            "Movement between queues based on behavior"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Multilevel Feedback Queue (MLFQ): Processes can MOVE between queues based on runtime behavior (adaptively learns characteristics). GATE rules (typical): (1) New processes start in highest-priority queue (Q0 with small quantum), (2) If process uses entire quantum (CPU-bound behavior) -> demote to next lower queue (larger quantum), (3) If process blocks before quantum expires (I/O-bound) -> stays in same queue or promoted, (4) Lower queues have longer quanta (Q0: q=8ms, Q1: q=16ms, Q2: FCFS). Effect: I/O-bound stay high priority (good interactive response), CPU-bound sink to low priority (run in background with less preemption). Prevents starvation via aging: processes in low queues boosted to high queues periodically. GATE: Most general, adaptive scheduler - combines priority, RR, fairness. Approximates SRTF without knowing burst times.",
            "formula": "MLFQ: Dynamic queue movement; CPU-bound↓, I/O-bound↑; Aging prevents starvation"
        }
    },
    {
        "id": "os2-metric-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Turnaround time = ?",
        "options": [
            "Burst time only",
            "Completion time - Arrival time",
            "Waiting time only",
            "Response time only"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Turnaround Time (TAT): Total time in system from submission (arrival) to completion. Measures user experience - how long did my job take? GATE formula: $TAT = T_{completion} - T_{arrival}$ OR equivalently $TAT = T_{waiting} + T_{burst}$. Example: Job arrives at t=5, waits in ready queue  until t=10 (waiting=5), executes for 15ms (burst=15), finishes at t=25. TAT = 25-5 = 20ms OR 5+15 = 20ms. GATE metrics comparison: (1) TAT - total job time (user perspective), (2) Waiting time - TAT - burst (time in ready queue), (3) Response time - time to first response (interactive), (4) Throughput - jobs/time (system). Minimize avg TAT: Use SJF or SRTF.",
            "formula": "$TAT = T_{comp} - T_{arr} = T_{wait} + T_{burst}$"
        }
    },
    {
        "id": "os2-metric-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Waiting time = ?",
        "options": [
            "Completion time only",
            "Burst time - Arrival time",
            "Response time only",
            "Turnaround time - Burst time"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Waiting Time (WT): Time process spends waiting in ready queue (not executing, not doing I/O, just waiting for CPU). GATE formula: $WT = TAT - Burst$ OR $WT = T_{completion} - T_{arrival} - T_{burst}$. Alternative: $WT = \\sum$(time spent in ready queue across all visits). For FCFS: $WT_i = \\sum_{j=1}^{i-1} Burst_j$ (sum of all previous bursts). SJF is PROVABLY OPTIMAL for minimizing average waiting time. RR spreads waiting across multiple ready-queue visits but total WT is sum. GATE calculation: Draw Gantt chart, for each process mark when it enters ready queue and when it gets CPU, sum all ready-queue intervals. Example: Process P arrives at 0, starts at 5, finishes at 10. WT = 5 (waited 0 to 5).",
            "formula": "$WT = TAT - Burst = \\sum$(ready queue time)"
        }
    },
    {
        "id": "os2-metric-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "CPU Scheduling",
        "question": "Response time = ?",
        "options": [
            "Waiting time",
            "First response time - Arrival time",
            "Burst time",
            "Time to completion"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Response Time (RT): Time from submission to FIRST CPU allocation (when process FIRST gets CPU, not completion). CRITICAL for interactive/time-sharing systems where users expect immediate feedback (typing, clicking). GATE formula: $RT = T_{first_CPU} - T_{arrival}$. Contrast with TAT (arrival to completion). Example: Job arrives 0, first gets CPU at 8, completes at 20. RT=8, TAT=20. GATE comparison: (1) FCFS: Poor response for processes at end of queue, (2) SJF: Can have terrible response for long jobs (may wait forever), (3) Round Robin: BEST response time - all jobs get CPU within (n-1)*q, (4) SRTF: Good response for short jobs, poor for long. Interactive systems optimize response time over throughput.",
            "formula": "$RT = T_{first_CPU} - T_{arr}$ (important for interactive)"
        }
    },
    {
        "id": "os2-sync-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Race condition occurs when:",
        "options": [
            "Processes run sequentially",
            "Only one process runs",
            "Multiple processes access shared data concurrently and outcome depends on order",
            "No shared data exists"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Race Condition: Situation where outcome depends on non-deterministic timing/interleaving of multiple concurrent processes accessing shared data. Same inputs, different runs, different outputs. GATE example: Two processes increment shared counter x (initially 0). Process 1: read x (0), x=x+1 (1), write x (1). Process 2: read x (0), x=x+1 (1), write x (1). If interleaved: both read 0, both write 1, final x=1 (WRONG, should be 2!). One increment lost. Why: read-modify-write is NOT atomic. Solution: Synchronization - use mutex/semaphore to make critical section atomic. GATE key: Race happens when: (1) Shared data, (2) At least one write, (3) No synchronization. Read-only sharing is safe.",
            "formula": "Race: Outcome depends on execution interleaving (non-deterministic)"
        }
    },
    {
        "id": "os2-sync-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Critical section is:",
        "options": [
            "Only write operations",
            "Only read operations",
            "Any code",
            "Code that accesses shared resources"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Critical Section (CS): Code segment where process accesses shared resources that must be accessed atomically (without interference from others). Shared can be: variables, data structures, files, hardware. Structure of process code: (1) Entry section: Request permission to enter CS (acquire lock), (2) Critical section: Access shared resource, (3) Exit section: Release permission (release lock), (4) Remainder section: Rest of code (no shared access). GATE: Only ONE process can be in CS at any time (mutual exclusion). Multiple processes can be in remainder section concurrently. CS should be as SHORT as possible (minimize holding time). Examples: updating global counter, modifying linked list, writing to shared file.",
            "formula": "CS = code accessing shared resources (needs mutual exclusion)"
        }
    },
    {
        "id": "os2-sync-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Requirements for critical section solution:",
        "options": [
            "None required",
            "Only mutual exclusion",
            "Mutual exclusion, progress, bounded waiting",
            "Only progress"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "CS Solution Requirements (ALL 3 mandatory - GATE standard): (1) Mutual Exclusion (ME): At most ONE process in CS at any time (safety property). Without ME, race conditions occur, data corrupted. (2) Progress: If NO process in CS and some processes want to enter, only those NOT in remainder section can participate in decision, and decision made in finite time (liveness - no deadlock). (3) Bounded Waiting: Exists a BOUND on number of times other processes can enter CS after process P_i requests entry and before P_i is granted entry (no starvation/indefinite postponement). GATE trap: Solution with only ME+Progress is INCOMPLETE - may starve. Example: Peterson's algorithm satisfies all 3. Test-and-Set alone satisfies only ME (can spin forever). Bakery algorithm satisfies all 3. GATE: Check each requirement separately when analyzing solutions.",
            "formula": "CS: ME (safety) + Progress (liveness) + Bounded Wait (fairness)"
        }
    },
    {
        "id": "os2-sync-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Peterson's solution works for:",
        "options": [
            "Distributed systems",
            "1 process only",
            "Any number of processes",
            "2 processes only"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Peterson's Algorithm: Pure software solution for CS problem with EXACTLY 2 processes (P0, P1). Uses 2 shared variables: (1) boolean flag[2]: flag[i]=true means P_i wants to enter CS, (2) int turn: Whose turn when BOTH want in (tiebreaker). Code: Entry section: flag[i]=true; turn=j; while(flag[j] AND turn==j); //busy wait. Exit section: flag[i]=false. Guarantees: Satisfies ALL  3 CS requirements (ME, Progress, Bounded Wait). GATE key: Works ONLY for n=2. Extensions for n processes: (1) Filter algorithm: Generalization of Peterson's, (2) Bakery algorithm (Lamport): Uses ticket numbers, works for any n. Modern systems DON'T use Peterson's - use hardware (test-and-set, compare-and-swap) or OS semaphores/mutexes (kernel-provided). Peterson's mainly theoretical/educational.",
            "formula": "Peterson: flag[2] + turn; Works for EXACTLY 2 processes"
        }
    },
    {
        "id": "os2-sync-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Semaphore is an integer variable accessed via:",
        "options": [
            "Any operation",
            "Read and write only",
            "Increment only",
            "wait() (P) and signal() (V) atomic operations"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Semaphore: Synchronization primitive - integer variable accessed ONLY through two atomic operations. wait(S) / P(S) / down(S): If S greater than 0, decrement S and proceed; If S equals 0, block process. signal(S) / V(S) / up(S): Increment S, wake one waiting process (if any exists). GATE key: Atomicity is CRITICAL - no race conditions on semaphore operations themselves (implemented with hardware test-and-set or disable interrupts). Binary semaphore: values restricted to {0,1}. Counting semaphore: values {0,1,2,...,N}. Negative value interpretation: |S| equals number of blocked processes. Example: S equals -3 means 3 processes blocked waiting.",
            "formula": "Semaphore: wait()/P() decrements; signal()/V() increments (atomic)"
        }
    },
    {
        "id": "os2-sync-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Binary semaphore (mutex) has values:",
        "options": [
            "Any integer",
            "Only negative",
            "Only positive",
            "0 or 1 only"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Binary Semaphore (Mutex): Semaphore with values restricted to {0, 1} only. Value 1 means resource available/unlocked, value 0 means resource taken/locked. Used exclusively for mutual exclusion (protecting critical sections). Pattern: Initialize mutex equals 1. Before CS: wait(mutex) - if 1 becomes 0 and enter, if 0 block. After CS: signal(mutex) - becomes 1, wakes one waiter. GATE: Binary is special case of counting semaphore. Can also implement with test-and-set hardware instruction. Modern pthread_mutex is binary semaphore. Do NOT confuse with counting semaphore (0..N for resource pools).",
            "formula": "Binary semaphore: mutex ∈ {0,1} for mutual exclusion"
        }
    },
    {
        "id": "os2-sync-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Counting semaphore is used for:",
        "options": [
            "Resource counting (multiple instances)",
            "Only mutual exclusion",
            "Only signaling",
            "Only blocking"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Counting Semaphore: Semaphore for resource counting (managing pool of N identical resources). Initialize to N (count of available resources). wait(S): Decrement S (take one resource). If S becomes 0, all N resources taken, next wait() blocks. signal(S): Increment S (release one resource), wake one blocked process. GATE examples: (1) Buffer pool: 10 buffers, S equals 10. Each allocation does wait(S), each free does signal(S). (2) Printer pool: 3 printers, S equals 3. (3) Database connections: 50 connections, S equals 50. Pattern: Producer-Consumer uses counting semaphores 'empty' (N slots) and 'full' (0 initially). Contrast with binary semaphore (ME only, not counting).",
            "formula": "Counting sem: S ∈ {0..N}, init=N (resource count)"
        }
    },
    {
        "id": "os2-sync-008",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Producer-Consumer problem requires:",
        "options": [
            "No synchronization",
            "1 semaphore",
            "3 semaphores (mutex, full, empty)",
            "Only mutex"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Producer-Consumer (Bounded Buffer): Classic synchronization problem, uses 3 semaphores. GATE pattern: (1) mutex (init=1): Binary semaphore for mutual exclusion on buffer access (only 1 can modify buffer structure at a time), (2) empty (init=N): Counting semaphore tracking empty slots (producer waits if buffer full), (3) full (init=0): Counting semaphore tracking filled slots (consumer waits if buffer empty). CRITICAL ORDER (GATE trap): Producer: wait(empty); wait(mutex); [produce]; signal(mutex); signal(full). Consumer: wait(full); wait(mutex); [consume]; signal(mutex); signal(empty). WHY order matters: If producer does wait(mutex) BEFORE wait(empty), deadlock possible: buffer full, producer holds mutex while waiting for empty, consumer can't signal empty because can't get mutex! Must wait for resource BEFORE acquiring mutex.",
            "formula": "P-C: mutex(1), empty(N), full(0); Wait resource semaphore BEFORE mutex"
        }
    },
    {
        "id": "os2-sync-009",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Readers-Writers problem: multiple readers can read simultaneously if:",
        "options": [
            "No writer is writing",
            "Never allowed",
            "Always allowed",
            "A writer is writing"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Readers-Writers: Allows many readers OR 1 writer (exclusive). Reading safe concurrently (no modification), writing needs exclusivity (no readers/writers). GATE variants: (1) First R-W (Reader priority): Once reader active, incoming readers join immediately. Writer waits for ALL readers to finish. Problem: Writer starvation if readers keep arriving. (2) Second R-W (Writer priority): Once writer waiting, no NEW readers admitted. Current readers finish, writer goes, then readers. Problem: Reader starvation. (3) Third (Fair): FIFO queue, no priority. Implementation uses: wrt semaphore (init=1) for writer exclusion, mutex for read_count protection, read_count variable tracking active readers. Code: Reader: mutex; read_count++; if(read_count==1) wait(wrt); mutex release; ...read...; mutex; read_count--; if(read_count==0) signal(wrt); mutex release.",
            "formula": "R-W: Many readers OR 1 writer; First=reader priority, Second=writer priority"
        }
    },
    {
        "id": "os2-sync-010",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Dining Philosophers problem demonstrates:",
        "options": [
            "Thread creation",
            "No synchronization needed",
            "Deadlock possibility",
            "Only mutual exclusion"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Dining Philosophers: Classic deadlock demonstration. GATE setup: 5 philosophers sitting in circle, 5 forks (1 between each pair). Each philosopher: think, pick up left fork, pick up right fork, eat, put down forks. Deadlock scenario: All 5 pick up left fork simultaneously, then wait for right fork -> circular wait (each holding one resource, waiting for next). None can proceed, deadlock. GATE solutions: (1) Allow only 4 at table - breaks circular wait (1 can always get both forks), (2) Atomic pickup - philosopher picks up BOTH forks in one atomic action (breaks hold-and-wait), (3) Asymmetric - odd philosophers pick left first, even pick right first (breaks circular wait), (4) Waiter - global semaphore limits concurrent diners. Also demonstrates starvation - philosopher may never eat if neighbors keep eating.",
            "formula": "D-P: 5 phil, 5 forks -> Deadlock (circular wait); Starvation possible"
        }
    },
    {
        "id": "os2-sync-011",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Monitor is a high-level synchronization construct with:",
        "options": [
            "Only signals",
            "No mutual exclusion",
            "Only shared variables",
            "Shared data, procedures, implicit mutual exclusion"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Monitor: High-level synchronization construct (object-oriented approach). Components: (1) Shared data: Variables encapsulated in monitor, (2) Procedures: Methods to access shared data, (3) Implicit mutual exclusion: Compiler automatically ensures only ONE process active in monitor at a time (no manual lock/unlock), (4) Condition variables: For waiting INSIDE monitor. Operations: wait(condition) - releases monitor lock and  blocks on condition, signal(condition) - wakes ONE process waiting on condition (if any). GATE advantages over semaphores: (1) Easier to program - ME automatic, less error-prone, (2) Compiler-enforced - can't access shared data without entering monitor. Used in: Java (synchronized methods), C# (lock). Example: Monitor BoundedBuffer has int buffer[N]; condition notFull, notEmpty; produce() and consume().",
            "formula": "Monitor: Shared data + Procedures + Implicit ME + Condition vars"
        }
    },
    {
        "id": "os2-dead-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Deadlock conditions (Coffman conditions):",
        "options": [
            "Mutual exclusion only",
            "Only circular wait",
            "None required",
            "Mutual exclusion, hold and wait, no preemption, circular wait"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Coffman Conditions (4 necessary conditions for deadlock): ALL 4 must hold SIMULTANEOUSLY for deadlock to occur. (1) Mutual Exclusion (ME): At least one resource must be non-shareable (only one process at a time), e.g., printer, mutex. (2) Hold and Wait (H_and_W): Process holding resources can request more resources (hold some, wait for more). (3) No Preemption (NP): Resources cannot be forcibly removed - only voluntary release by holder. (4) Circular Wait (CW): Circular chain in Resource Allocation Graph: P1 waits for R1 held by P2, P2 waits for R2 held by P3, Pn waits for Rn held by P1. GATE strategy: To PREVENT deadlock, break ANY ONE condition. To DETECT deadlock, verify ALL 4 present plus find cycle in RAG. GATE formula: If ANY condition absent, deadlock impossible.",
            "formula": "Deadlock iff ME AND H_and_W AND NP AND CW (all 4 required)"
        }
    },
    {
        "id": "os2-dead-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Deadlock prevention breaks at least one of the four conditions by:",
        "options": [
            "Doing nothing",
            "Detecting after occurrence",
            "Denying one of the necessary conditions",
            "Ignoring the problem"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Deadlock Prevention: Design system to make at least ONE Coffman condition impossible. GATE methods: (1) Deny ME: Make resources shareable (e.g., read-only files, spooling for printers). Impractical for many resources (mutex, disks). (2) Deny H_and_W: Option A - Request ALL resources at once (before execution starts). Option B - Release all held resources before requesting new ones. Downside: Low utilization (hold unused resources), possible starvation. (3) Allow Preemption: Forcibly take resources from holder. Works for CPU, memory (save/restore state). Doesn't work for printers, locks. (4) Deny Circular Wait: Impose total ordering on resource types R1<R2< ...<Rn. Processes must request in increasing order. If need R1, R3, cannot already hold R5. Downside: reduces flexibility, may force inefficient ordering. GATE: Prevention is conservative, avoids deadlock entirely but restrictive.",
            "formula": "Prevention: Break 1 Coffman condition (deny ME/H_and_W/NP/CW)"
        }
    },
    {
        "id": "os2-dead-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Deadlock avoidance checks:",
        "options": [
            "Only previous states",
            "If granting request leads to safe state",
            "Nothing",
            "Only current state"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Deadlock Avoidance: Dynamically decide whether to grant resource request based on whether it keeps system in safe state. Before granting: (1) Simulate allocation (pretend to grant), (2) Check if resulting state is safe (exists safe sequence), (3) If safe then grant, If unsafe then deny/delay request until safe. Requires: (a) Knowing maximum resource needs of all processes in advance, (b) Processes declare max needs before execution, (c) Number of resources never decreases. GATE key: Avoidance does NOT prevent conditions - allows them but AVOIDS unsafe states. More flexible than prevention but requires future  knowledge. Safe state: exists sequence where each Pi can complete. Unsafe does not equal deadlock (just potential).",
            "formula": "Avoidance: Grant only if keeps system in safe state (Bankers)"
        }
    },
    {
        "id": "os2-dead-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Banker's algorithm is used for:",
        "options": [
            "Deadlock detection",
            "Deadlock prevention",
            "Deadlock avoidance",
            "Deadlock recovery"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Bankers Algorithm: Deadlock avoidance algorithm by Dijkstra. Simulates resource allocation to check safety. Data structures: (1) Available[m]: Available resources of each type, (2) Max[n][m]: Maximum demand of each process, (3) Allocation[n][m]: Currently allocated resources, (4) Need[n][m] equals Max minus Allocation: Remaining need. GATE algorithm: On request by P_i: (1) If Request leq Need, proceed; else error. (2) If Request leq Available, check safety; else wait. (3) Safety check: Find process Pi where Need[i] leq Available. Assume Pi finishes, release Allocation[i] to Available. Repeat for all n processes. If all processes finish, SAFE; else UNSAFE, deny request. Complexity: O(m times n squared). GATE trap: Safe does not equal deadlock-free always (safe guarantees no deadlock possible from current state; unsafe means maybe deadlock). Name: Like banker ensuring loans repayable.",
            "formula": "Bankers: Need equals Max minus Alloc; Safe if exists sequence where each finishes"
        }
    },
    {
        "id": "os2-dead-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Safe state means:",
        "options": [
            "All resources free",
            "There exists a sequence in which all processes can complete",
            "No processes running",
            "Deadlock has occurred"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Safe State: System state where exists at least one safe sequence of P1, P2, ... Pn. For each process Pi in sequence, its Need[i] can be satisfied by: Available plus sum of Allocation[Pj] for all j<i (resources from processes that finished before Pi). GATE key points: (1) Safe implies No deadlock possible (system can always find way for all to complete), (2) Unsafe implies Maybe deadlock (not guaranteed, but possible if  unlucky request sequence), (3) Unsafe does not equal Deadlock (system might continue safely with right decisions). Avoidance maintains safe state. Example: Available equals 3,0,1, P1_need equals 1,0,2, P2_need equals 2,0,0. Safe sequence: P2 (finishes with 3,0,1), then P1 (with 3,0,1 plus P2_alloc). GATE: Always check if safe sequence exists.",
            "formula": "Safe: exists sequence where each Pi: Need[i] leq Available plus sum Alloc[j<i]"
        }
    },
    {
        "id": "os2-dead-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Deadlock detection uses:",
        "options": [
            "Prevention conditions",
            "Avoidance algorithm",
            "No algorithm",
            "Resource allocation graph or matrix algorithm"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Deadlock Detection: Periodic checking AFTER deadlock occurs. Methods: (1) RAG cycle detection (single instance), (2) Wait-For Graph, (3) Matrix algorithm (multi-instance). Unlike avoidance, detection allows deadlock then breaks it. Trade-off: frequent detection = high overhead, infrequent = long wait times.",
            "formula": "Detection: RAG cycle or Matrix; Then recovery"
        }
    },
    {
        "id": "os2-dead-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Resource Allocation Graph has cycle -> deadlock if:",
        "options": [
            "Always",
            "Multiple instances guarantee deadlock",
            "Single instance of each resource type",
            "Never"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "RAG Cycle Analysis: SINGLE instance - Cycle iff Deadlock (necessary AND sufficient). MULTIPLE instances - Cycle necessary but NOT sufficient (may have free instances). GATE: Always check instance count before concluding deadlock from cycle.",
            "formula": "Single: Cycle=Deadlock; Multi: Cycle implies maybe deadlock"
        }
    },
    {
        "id": "os2-mem-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Logical (virtual) address is generated by:",
        "options": [
            "MMU",
            "Memory",
            "Disk",
            "CPU"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "CPU generates logical (virtual) addresses. MMU translates to physical. Separation enables virtual memory, protection, relocation. GATE: Logical space can be larger than physical (via paging/swapping).",
            "formula": "CPU generates logical; MMU translates to physical"
        }
    },
    {
        "id": "os2-mem-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Physical address is the actual:",
        "options": [
            "Address in virtual space",
            "Address in physical memory (RAM)",
            "Disk address",
            "Register address"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Physical address = actual RAM location. MMU translates logical to physical using page/segment tables. Process never sees physical addresses directly. Allows OS to relocate, share memory, implement virtual memory transparently.",
            "formula": "Physical = RAM location; Process sees only logical"
        }
    },
    {
        "id": "os2-mem-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "External fragmentation occurs in:",
        "options": [
            "Only virtual memory",
            "Contiguous allocation (variable partitions)",
            "Paging",
            "Segmentation with paging"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "External fragmentation: Total free enough but NOT contiguous (scattered holes). Occurs in variable-sized allocation (segmentation). GATE solution: Compaction (expensive) or paging (eliminates external frag entirely).",
            "formula": "External: Variable-size; Free scattered; Solution = paging"
        }
    },
    {
        "id": "os2-mem-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Internal fragmentation occurs in:",
        "options": [
            "Variable partitions",
            "Never occurs",
            "Fixed partitions, paging (wasted space in allocated block)",
            "Only segmentation"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Internal fragmentation: Wasted space INSIDE allocated block. Paging: if need 10.5 pages, allocate 11, waste 0.5 page. Avg waste = page_size/2. Fixed partitions: waste = partition - process_size. Segmentation has NO internal frag (exact allocation).",
            "formula": "Internal: Fixed-size (paging);  Avg waste = page_size/2"
        }
    },
    {
        "id": "os2-mem-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Paging divides:",
        "options": [
            "Memory randomly",
            "Only logical memory",
            "Logical memory into pages, physical into frames of same size",
            "Only physical memory into frames"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Paging: Logical into fixed pages, physical into equal frames. Eliminates external frag. Page table maps pages to frames. GATE: Page size trade-off - small reduces internal frag but increases table size.",
            "formula": "Logical pages map to physical frames via page table"
        }
    },
    {
        "id": "os2-mem-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Page table maps:",
        "options": [
            "Physical to logical",
            "Nothing",
            "Page number to frame number",
            "Frame to disk"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Page table: Indexed by page number, contains frame number. Logical address = (p, d). Physical = (f, d) where f = PageTable[p]. Each process has own page table. GATE: Size = num_pages times entry_size.",
            "formula": "Physical_addr = frame_from_PageTable[page] + offset"
        }
    },
    {
        "id": "os2-mem-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "TLB is:",
        "options": [
            "Process cache",
            "Main memory",
            "Disk cache",
            "Cache for page table entries"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "TLB (Translation Lookaside Buffer): Fast associative cache for page table entries. Without TLB every mem access needs 2 accesses (PT then data). With TLB hit, 1 access. Typical 16-512 entries, hit rate over 99%. GATE: Uses associative/parallel search.",
            "formula": "TLB: Fast cache for page_table entries; Hit rate over 99 percent"
        }
    },
    {
        "id": "os2-mem-008",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Effective Access Time with TLB = ?",
        "options": [
            "Memory time only",
            "Always same as no TLB",
            "TLB time + Memory time",
            "TLB_hit × (TLB + mem) + TLB_miss × (TLB + 2×mem)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "EAT = (TLB hit rate) × (TLB access + memory access) + (TLB miss rate) × (TLB access + page table in memory + data in memory). With 98% hit rate, 10ns TLB, 100ns memory: EAT = 0.98×110 + 0.02×210 = 107.8 + 4.2 = 112ns. Without TLB: 200ns.",
            "formula": "EAT = h(t + m) + (1-h)(t + 2m)"
        }
    },
    {
        "id": "os2-mem-009",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Segmentation divides program into:",
        "options": [
            "Logical segments of variable size (code, data, stack)",
            "Fixed size pages",
            "Random chunks",
            "Equal partitions"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Segmentation: Variable-size logical segments (code, data, stack). Segment table has base and limit. Supports sharing, protection per segment. HAS external fragmentation. GATE: Paging eliminates ext frag, segmentation offers logical view.",
            "formula": "Segments = logical units; Segment_table maps  to physical"
        }
    },
    {
        "id": "os2-pr-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Page fault occurs when:",
        "options": [
            "Page is in memory",
            "TLB hit",
            "Memory is full",
            "Required page not in memory (must load from disk)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Page fault: Page not in memory (valid_bit=0). Triggers exception, OS loads from disk. Expensive (ms). GATE: Page fault service time much greater than memory access (microseconds vs nanoseconds).",
            "formula": "Page fault: Valid=0; Load from disk; Very expensive"
        }
    },
    {
        "id": "os2-pr-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Optimal page replacement (OPT) replaces page that:",
        "options": [
            "Is smallest",
            "Will not be used for longest time in future",
            "Was used most recently",
            "Was used first"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Optimal (OPT): Replace page not used for longest time in FUTURE. Provably minimum faults. Impractical needs future knowledge. Benchmark for evaluating real algorithms. GATE: OPT always best, LRU approximates it.",
            "formula": "OPT: Replace furthest-future use; Minimum faults (theoretical)"
        }
    },
    {
        "id": "os2-pr-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "LRU page replacement replaces:",
        "options": [
            "Most recently used page",
            "First loaded page",
            "Random page",
            "Least recently used page"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "LRU (Least Recently Used): Replace page unused for longest time in PAST. Good due to temporal locality. Implementations: timestamps (expensive), stack (top on access), or Clock approximation. NO Beladys anomaly. GATE: Stack algorithm.",
            "formula": "LRU: Replace oldest access; Stack algorithm; No Beladys"
        }
    },
    {
        "id": "os2-pr-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "FIFO page replacement replaces:",
        "options": [
            "Optimal page",
            "Most recently loaded",
            "LRU page",
            "First page that was loaded"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "FIFO: Replace oldest loaded page. Simple queue. Oldest might be heavily used! Suffers from Beladys anomaly - MORE frames can cause MORE faults. Not recommended. GATE: Beladys example often shown with FIFO.",
            "formula": "FIFO: Replace first-loaded; HAS Beladys anomaly"
        }
    },
    {
        "id": "os2-pr-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Belady's anomaly occurs in:",
        "options": [
            "OPT",
            "LRU",
            "FIFO (more frames can cause more page faults)",
            "All algorithms"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Beladys anomaly: In FIFO, MORE frames CAN cause MORE page faults (counter-intuitive). GATE: Stack algorithms (LRU, OPT) immune to this. Non-stack (FIFO) susceptible. Always check if algorithm is stack or non-stack.",
            "formula": "Beladys: FIFO has it; LRU/OPT dont (stack algorithms)"
        }
    },
    {
        "id": "os2-pr-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Clock (Second Chance) algorithm is approximation of:",
        "options": [
            "Random",
            "OPT",
            "LRU",
            "FIFO"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Clock Algorithm (Second-Chance): LRU approximation using reference bit (cheaper than true LRU). Pages in circular buffer (clock face). Each page has reference bit: set to 1 on access, cleared by algorithm. On page fault: Start at clock hand, examine current page. If ref bit is 1: give second chance (clear bit to 0, advance hand). If ref bit is 0: replace this page (hasn't been used since last sweep). Advance hand. GATE: Behaves like FIFO if all bits are 0, behaves better if accessed pages get second chance. Much simpler to implement than LRU (timestamps/stack). Used in many real systems. Also called Enhanced Second Chance if also tracks modified bit (prefer clean pages for replacement).",
            "formula": "Clock: Circular buffer + reference bits (0/1)"
        }
    },
    {
        "id": "os2-pr-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Thrashing occurs when:",
        "options": [
            "CPU is idle by choice",
            "Many processes complete",
            "Memory is empty",
            "Processes spend more time page faulting than executing"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Thrashing: system constantly paging, doing no useful work. Symptoms: high page fault rate, low CPU utilization. Cause: too many processes, each has fewer frames than its working set needs. Each steals pages from others, causing more faults. Solution: reduce multiprogramming, use working set model."
        }
    },
    {
        "id": "os2-pr-008",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory Management",
        "question": "Working set model helps prevent thrashing by:",
        "options": [
            "Running fewer processes",
            "Ignoring locality",
            "Allocating pages based on locality (recently used pages)",
            "Using more disk"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Working set: set of pages referenced by process in recent time window Δ. Allocate enough frames to hold working set. If total working sets > available memory, suspend some processes. Prevents thrashing by ensuring each active process has sufficient frames. Working set changes over time with program phase."
        }
    },
    {
        "id": "os2-fs-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File System",
        "question": "Contiguous allocation stores file blocks:",
        "options": [
            "Scattered randomly",
            "In indexed table",
            "In contiguous disk blocks",
            "In linked list"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Contiguous: Consecutive blocks. Fast sequential/random access. Has external fragmentation. File cant grow. GATE: Access block i = start + i.",
            "formula": "Contiguous: Fast access; External frag; No growth"
        }
    },
    {
        "id": "os2-fs-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File System",
        "question": "Linked allocation stores file as:",
        "options": [
            "Linked list of blocks (each points to next)",
            "Hash table",
            "Contiguous blocks",
            "Index table"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Linked: Blocks as linked list. No external frag, easy growth. Random access O(n). Pointer overhead. GATE: Good sequential, poor random access.",
            "formula": "Linked: No ext frag; O(n) random access; Pointer overhead"
        }
    },
    {
        "id": "os2-fs-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File System",
        "question": "FAT (File Allocation Table) is a variant of:",
        "options": [
            "Contiguous allocation",
            "None of these",
            "Linked allocation (centralized pointers)",
            "Indexed allocation"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "FAT: Linked allocation variant with centralized table. Pointers in FAT (in memory) not data blocks. Faster than distributed pointers. GATE: DOS/Windows file system.",
            "formula": "FAT: Centralized linked list; FAT in memory"
        }
    },
    {
        "id": "os2-fs-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File System",
        "question": "Indexed allocation uses:",
        "options": [
            "No pointers",
            "Contiguous blocks",
            "Index block containing pointers to all file blocks",
            "Linked list"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Indexed: Index block with pointers to all blocks. Random access like contiguous, no external frag like linked. Index overhead for small files. GATE: Basis for UNIX inodes.",
            "formula": "Indexed: Index block; Random access; No external frag"
        }
    },
    {
        "id": "os2-fs-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File System",
        "question": "UNIX inode uses:",
        "options": [
            "Only direct pointers",
            "Only FAT",
            "Direct + indirect + double indirect + triple indirect pointers",
            "Contiguous only"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "UNIX inode: 12 direct pointers, then single/double/triple indirect. Efficient for all file sizes. GATE: Max file size calculation common - sum all pointer capacities.",
            "formula": "inode: 12 direct + indirect + double + triple indirect"
        }
    },
    {
        "id": "os2-fs-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File System",
        "question": "Free space management using bitmap:",
        "options": [
            "No tracking",
            "1 bit per block (0=free, 1=used or vice versa)",
            "Random allocation",
            "Linked list of free blocks"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Bitmap (Bit Vector) Free Space Management: 1 bit per disk block. Convention: bit equals 1 means allocated (or free, consistent choice). Advantages: (1) Compact: n blocks = n bits, (2) Easy to find first free: scan for 0 bit, (3) Easy to find n contiguous: scan for n consecutive 0s (good for contiguous allocation). Disadvantages: Must keep in memory (large disks = large bitmap). GATE calculation: 1TB disk, 4KB blocks equals 256M blocks equals 256M bits equals 32MB bitmap. If bitmap too large for RAM, keep on disk (but slower). Alternative: Free list (linked list of free blocks) - no bitmap overhead but harder to find contiguous blocks. Grouping variant: first free block contains addresses of n free blocks.",
            "formula": "Bitmap size = (Disk_size / Block_size) / 8 bytes"
        }
    },
    {
        "id": "coa3-vm-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Page fault service time S, memory time M, page fault rate P. EMAT = ?",
        "options": [
            "P*S + (1-P)*M",
            "S + M",
            "P*M + S",
            "M + P*(S-M)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "EMAT (Effective Memory Access Time) with Paging: Accounts for page fault overhead. Given: Memory access time M (e.g., 100ns), Page fault service time S (disk I/O, e.g., 8ms = 8,000,000ns!), Page fault rate P (e.g., 0.001 = 0.1 percent). Formula: $EMAT = P \\times S + (1-P) \\times M$ Simplifies to: $EMAT = M + P \\times (S-M)$ which shows overhead is $P \\times (S-M)$. GATE calculation example: M equals 100ns, S equals 8ms equals 8 million ns, P equals 0.001. EMAT equals 0.001 times 8M plus 0.999 times 100 equals 8000 plus 99.9 equals 8099.9ns -> 80x slowdown from 0.1 percent fault rate! This is why keeping P low (under 0.01 percent) is critical. Disk is 100,000x slower than RAM.",
            "formula": "$EMAT = P \\times S + (1-P) \\times M = M + P(S-M)$"
        }
    },
    {
        "id": "coa3-vm-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Belady's anomaly occurs in:",
        "options": [
            "LFU",
            "LRU",
            "FIFO (more frames can cause more faults)",
            "Optimal"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Belady's Anomaly: Paradox where increasing frames can INCREASE page faults. Only occurs in FIFO page replacement (and random, not in LRU/Optimal). GATE example: Reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5. With 3 frames: Faults at 1,2,3,4,5,3,4 equals 9 faults. With 4 frames: Faults at 1,2,3,4,5,3,4,5 equals 10 faults! More frames, MORE faults. Reason: FIFO doesn't consider recency/frequency - just arrival order. Page needed soon might be evicted just because it arrived early. Stack algorithms (LRU, Optimal, LFU) NEVER have Belady's - adding frames always helps or stays same.",
            "formula": "Belady's: FIFO only; More frames can mean MORE faults"
        }
    },
    {
        "id": "coa3-vm-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Which page replacement algorithm never suffers Belady's anomaly?",
        "options": [
            "Random",
            "Second Chance",
            "FIFO",
            "LRU (stack algorithm)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Stack Algorithms: Page replacement algorithms where set of pages in memory with n frames is ALWAYS subset of pages with n+1 frames (inclusion property). Stack algorithms: LRU, Optimal, LFU - NEVER suffer Belady's anomaly. Non-stack: FIFO, Random, Second-Chance - CAN have Belady's. GATE definition: At any time, if we track which pages would be in memory for 1, 2, 3, ... frames, stack algorithms maintain: Pages(n) subset of Pages(n+1). This means adding frames can only reduce or maintain faults, never increase. Why LRU is stack: LRU stack of all pages, top n are in memory - adding frame just includes one more from stack.",
            "formula": "Stack alg: Pages(n) ⊆ Pages(n+1) -> No Belady's"
        }
    },
    {
        "id": "coa3-vm-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Optimal page replacement replaces the page:",
        "options": [
            "Least recently used",
            "Oldest page",
            "Random",
            "Page not used for longest time in future"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "OPT: Replace furthest-future use. Provably minimum faults. Impractical (future knowledge). Benchmark. LRU approximates.",
            "formula": "OPT: Theoretical best; Needs future knowledge"
        }
    },
    {
        "id": "coa3-vm-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Internal fragmentation in paging averages approximately:",
        "options": [
            "p/2 (where p = page size)",
            "p",
            "2p",
            "0"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Paging internal fragmentation: last page of each process not fully used. On average, half the last page is wasted. Average internal fragmentation = page_size / 2 = p/2 per process. Larger pages -> more wasted space. Tradeoff with page table size (smaller pages -> larger page table).",
            "formula": "Average internal fragmentation $\\approx p/2$"
        }
    },
    {
        "id": "coa3-vm-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Segmentation vs Paging: segmentation suffers from:",
        "options": [
            "Both",
            "No fragmentation",
            "External fragmentation",
            "Internal fragmentation"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Segmentation: Variable-size -> external frag. Paging: Fixed-size -> internal frag. Combo: Segmentation with paging has both. GATE: Paging eliminates external.",
            "formula": "Segmentation=external; Paging=internal"
        }
    },
    {
        "id": "coa3-vm-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Inverted page table size depends on:",
        "options": [
            "Virtual address space size",
            "Neither",
            "Physical memory size (number of frames)",
            "Both equally"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Inverted page table: One entry per PHYSICAL frame (not per virtual page). Size = frames times entry_size. Independent of virtual space size. GATE: Much smaller for large virtual spaces.",
            "formula": "Inverted PT size = num_frames (independent of virtual space)"
        }
    },
    {
        "id": "coa3-vm-008",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Working set model helps prevent:",
        "options": [
            "Context switching",
            "Deadlock",
            "Page faults",
            "Thrashing"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Working set: Pages referenced in recent window delta. Allocate frames to hold working set. If total  exceeds memory, suspend processes. Prevents thrashing. GATE: Thrashing = excessive paging, low CPU util.",
            "formula": "Working set prevents thrashing; Suspend if total WS > memory"
        }
    },
    {
        "id": "os-sched-num-001",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "FCFS: Processes P1,P2,P3 with burst times 24,3,3. Average waiting time = ?",
        "correctAnswer": 17,
        "tolerance": 0.5,
        "explanation": {
            "solution": "FCFS (First Come First Serve) executes processes in arrival order. For P1,P2,P3 arriving at time 0: P1 runs 0-24 (waits 0), P2 runs 24-27 (waits 24), P3 runs 27-30 (waits 27). Average waiting time = (0 + 24 + 27) / 3 = 51/3 = 17ms. This illustrates the convoy effect - short jobs P2, P3 wait behind long P1.",
            "formula": "$AWT = \\frac{0 + 24 + 27}{3} = 17ms$"
        }
    },
    {
        "id": "os-sched-num-002",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "SJF: Processes with burst times 6,8,7,3. Average waiting time = ?",
        "correctAnswer": 7,
        "tolerance": 0.5,
        "explanation": {
            "solution": "SJF (Shortest Job First) orders jobs by burst time: 3, 6, 7, 8. Waiting times: Job(3) waits 0, Job(6) waits 3, Job(7) waits 3+6=9, Job(8) waits 3+6+7=16. Total waiting = 0+3+9+16 = 28. Average = 28/4 = 7ms. SJF is provably optimal for minimizing average waiting time.",
            "formula": "$AWT = \\frac{0+3+9+16}{4} = 7ms$"
        }
    },
    {
        "id": "os-sched-num-003",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "Round Robin with quantum=4: P1(5), P2(3), P3(8). Total context switches = ?",
        "correctAnswer": 5,
        "tolerance": 0,
        "explanation": {
            "solution": "Round Robin with quantum=4: P1 runs 0-4 (4 done, 1 left) -> switch. P2 runs 4-7 (completes, only needed 3) -> switch. P3 runs 7-11 (4 done, 4 left) -> switch. P1 runs 11-12 (completes, 1 unit) -> switch. P3 runs 12-16 (completes). Count switches: P1->P2, P2->P3, P3->P1, P1->P3, P3->end = 5 context switches.",
            "formula": "Gantt: P1[0-4]->P2[4-7]->P3[7-11]->P1[11-12]->P3[12-16]"
        }
    },
    {
        "id": "os-sched-num-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "Which scheduling algorithm is non-preemptive?",
        "options": [
            "SRTF",
            "FCFS",
            "Round Robin",
            "Priority (preemptive)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "FCFS is strictly non-preemptive - once a process gets the CPU, it runs until it blocks or terminates. Round Robin is preemptive (timer-based). SRTF is preemptive SJF. Preemptive priority can take CPU from running process. Non-preemptive means OS cannot forcibly remove a running process from CPU."
        }
    },
    {
        "id": "os-sched-num-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "SRTF is preemptive version of:",
        "options": [
            "FCFS",
            "Round Robin",
            "Priority",
            "SJF"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SRTF (Shortest Remaining Time First) is the preemptive version of SJF. When a new process arrives with burst time shorter than the REMAINING time of current process, preempt and switch. This gives even better average waiting time than non-preemptive SJF but has more context switch overhead."
        }
    },
    {
        "id": "os-sched-num-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "Convoy effect is problem with:",
        "options": [
            "SJF",
            "Priority",
            "FCFS",
            "Round Robin"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Convoy effect occurs in FCFS: a long CPU-bound process holds the CPU for extended time, while many short I/O-bound processes queue behind it like a convoy. When the long process finally finishes, short processes run quickly, block on I/O, and return to queue behind another long process. Results in poor CPU and I/O device utilization."
        }
    },
    {
        "id": "os-sched-num-007",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "Starvation can occur in:",
        "options": [
            "All equally",
            "Round Robin",
            "FCFS",
            "SJF (indefinite postponement of long jobs)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SJF can cause starvation: if short jobs keep arriving, long jobs are perpetually postponed - they may never get CPU time. FCFS doesn't starve (everyone eventually gets served in order). Round Robin guarantees everyone gets CPU within bounded time. Priority scheduling also has starvation for low-priority processes. Solution: aging (gradually increase priority of waiting jobs)."
        }
    },
    {
        "id": "os-sched-num-008",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Scheduling",
        "question": "Aging technique prevents starvation by:",
        "options": [
            "Decreasing burst time",
            "Killing old processes",
            "Random selection",
            "Increasing priority over time"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Aging prevents starvation by gradually increasing the priority of waiting processes over time. Even low-priority processes eventually become high-priority after waiting long enough, guaranteeing they'll eventually get CPU time. Typically implemented by adding priority bonus for each time unit waited in the ready queue."
        }
    },
    {
        "id": "os-sync-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Binary semaphore can have values:",
        "options": [
            "Any integer",
            "1 to n",
            "Negative values only",
            "0 and 1 only"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Binary semaphore (also called mutex) restricted to values 0 (locked/busy) and 1 (unlocked/free). Used for mutual exclusion. Counting semaphore can have any non-negative integer value, used for resource counting (e.g., managing pool of N identical resources). Binary is a special case of counting with max value 1."
        }
    },
    {
        "id": "os-sync-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Counting semaphore with initial value n allows:",
        "options": [
            "Unlimited processes",
            "1 process",
            "No processes",
            "n processes in critical section"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Counting semaphore initialized to n allows up to n processes to access the resource concurrently. Each wait() decrements the count (representing taking one resource unit); signal() increments (releasing). When count reaches 0, no more resources available - subsequent wait() calls block. Used for resource pools like database connections, printers."
        }
    },
    {
        "id": "os-sync-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Monitor ensures mutual exclusion by:",
        "options": [
            "Allowing only one process active inside",
            "Disabling interrupts",
            "Priority inheritance",
            "Using semaphores internally"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Monitor is a high-level synchronization construct that automatically ensures mutual exclusion: ONLY ONE process can be executing inside the monitor at any time. This is enforced by the compiler/runtime, not by the programmer. Processes trying to enter a busy monitor are automatically blocked. Easier to use correctly than semaphores."
        }
    },
    {
        "id": "os-sync-006",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Condition variables in monitors support:",
        "options": [
            "Priority scheduling",
            "Mutual exclusion",
            "Memory allocation",
            "wait() and signal() operations"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Condition variables allow processes to wait INSIDE a monitor for some condition. Operations: wait() - release monitor and block until signaled; signal() - wake one waiting process; broadcast() - wake all. Unlike semaphores, condition variable signal is 'lost' if no one is waiting. Used for producer-consumer, readers-writers inside monitors."
        }
    },
    {
        "id": "os-rw-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "In readers-writers problem, multiple readers can:",
        "options": [
            "Never access together",
            "Only first reader",
            "Only if writer waiting",
            "Access simultaneously"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Readers-writers problem: multiple readers CAN read simultaneously since reading doesn't modify shared data (no conflicts). But writers need exclusive access - no readers or other writers allowed during writing. This asymmetry allows better concurrency than simple mutual exclusion while maintaining data consistency."
        }
    },
    {
        "id": "os-rw-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "In readers-writers, if reader is reading, writer must:",
        "options": [
            "Preempt reader",
            "Read too",
            "Wait",
            "Abort"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "When any reader is reading, writer must wait until ALL readers finish. Writing requires exclusive access. Classic solutions: reader-priority (writers may starve), writer-priority (readers may starve), or fair solutions that balance both. Implementation uses semaphores to track reader count and control writer access."
        }
    },
    {
        "id": "os-dp-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Dining philosophers with 5 philosophers need ___ forks:",
        "options": [
            "1",
            "5",
            "10",
            "4"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "N philosophers seated at round table need exactly N forks - one between each adjacent pair. Each philosopher needs TWO adjacent forks to eat. With 5 philosophers: 5 forks placed between them. The problem demonstrates deadlock: if all pick up left fork simultaneously, all wait forever for right fork (circular wait)."
        }
    },
    {
        "id": "os-dp-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Naive dining philosophers solution (pick left then right) can cause:",
        "options": [
            "Livelock only",
            "No problem",
            "Starvation only",
            "Deadlock"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Naive solution: each philosopher picks up left fork, then right fork. This causes DEADLOCK if all philosophers simultaneously pick up their left fork - each holds one fork and waits for the other, forming circular wait. All four Coffman conditions are met. Classic example of deadlock in concurrent programming."
        }
    },
    {
        "id": "os-dp-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Synchronization",
        "question": "Solution to dining philosophers deadlock: allow at most ___ philosophers to sit:",
        "options": [
            "N-1",
            "N+1",
            "N",
            "2"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Limiting to N-1 philosophers at table prevents deadlock: with 4 at table and 5 forks, at least one philosopher can always get both forks. Breaks circular wait condition. Other solutions: pick up both forks atomically, odd philosophers pick left first while even pick right first, use a waiter/arbiter to grant fork access."
        }
    },
    {
        "id": "os-dead-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Safe state means:",
        "options": [
            "No processes waiting",
            "All processes done",
            "No deadlock currently",
            "Deadlock can never occur (safe sequence exists)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Safe state: there exists at least one sequence in which all processes can complete without deadlock. The system can always complete all processes by running them in safe sequence order. Unsafe state doesn't mean deadlock, but CAN lead to deadlock depending on request/release order. Banker's algorithm keeps system in safe state."
        }
    },
    {
        "id": "os-dead-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "Ostrich algorithm for deadlock:",
        "options": [
            "Prevents deadlock",
            "Recovers from deadlock",
            "Ignores deadlock (pretend it doesn't happen)",
            "Detects deadlock"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Ostrich algorithm: simply ignore the deadlock problem - pretend it doesn't exist (like an ostrich with head in sand). Used when deadlock is rare and cost of prevention/detection exceeds cost of occasional reboot. Many real systems (Windows, Linux for user processes) use this approach. If deadlock occurs, user reboots."
        }
    },
    {
        "id": "os-dead-005",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Deadlock",
        "question": "5 processes, 3 resource types. Need matrix size = ?",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "In Banker's algorithm, the Need matrix has dimensions: processes × resource types = 5 × 3 = 15 elements. Each entry Need[i][j] represents maximum additional resources of type j that process i may request. Similarly, Allocation and Max matrices are also 5×3. Available is a vector with 3 elements (one per resource type).",
            "formula": "Need matrix: 5 × 3 = 15 elements"
        }
    },
    {
        "id": "os-mem-004",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Memory",
        "question": "Page size = 1KB, physical memory = 64KB. Number of frames = ?",
        "correctAnswer": 64,
        "tolerance": 0,
        "explanation": {
            "solution": "Number of frames = Physical memory size / Frame size = 64KB / 1KB = 64 frames. Each frame is same size as a page. With 64 frames, frame number needs 6 bits (2^6 = 64). Physical address = frame number (6 bits) + offset within frame (10 bits for 1KB) = 16 bits total.",
            "formula": "$Frames = \\frac{64KB}{1KB} = 64$"
        }
    },
    {
        "id": "os-mem-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Memory",
        "question": "TLB (Translation Lookaside Buffer) caches:",
        "options": [
            "Page table entries (virtual->physical)",
            "Disk blocks",
            "Instructions",
            "Page contents"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TLB is a small, fast, associative cache holding recently used page table entries (virtual page number -> physical frame number mappings). Without TLB, every memory access requires two accesses: page table then data. With TLB hit, only one access. TLB is typically 16-512 entries with >99% hit rate due to locality of reference."
        }
    },
    {
        "id": "os-mem-006",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Memory",
        "question": "TLB hit=90%, TLB time=10ns, memory=100ns. EMAT = ?",
        "correctAnswer": 120,
        "tolerance": 2,
        "explanation": {
            "solution": "Effective Memory Access Time with TLB: Hit (90%): TLB access + memory access = 10 + 100 = 110ns. Miss (10%): TLB access + page table in memory + data in memory = 10 + 100 + 100 = 210ns. EMAT = 0.9×110 + 0.1×210 = 99 + 21 = 120ns. Without TLB: 200ns for every access. TLB cuts time nearly in half.",
            "formula": "$EMAT = 0.9(110) + 0.1(210) = 120ns$"
        }
    },
    {
        "id": "os-pr-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Optimal page replacement replaces page:",
        "options": [
            "Oldest",
            "Least recently used",
            "Most recently used",
            "Used farthest in future"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Optimal (OPT/Belady's) algorithm replaces the page that will NOT be used for the LONGEST time in the FUTURE. Provably minimum page faults. But impractical - requires knowing future references. Used as theoretical benchmark to evaluate practical algorithms. LRU approximates OPT using past behavior to predict future."
        }
    },
    {
        "id": "os-pr-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "LRU replaces page:",
        "options": [
            "Most frequently used",
            "Not used for longest past time",
            "Used farthest in future",
            "Oldest"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "LRU (Least Recently Used) replaces the page that hasn't been accessed for the LONGEST time in the PAST. Based on temporal locality: recently used pages likely to be used again soon. Practical approximation of OPT. Can be implemented with counters, stack, or approximated with reference bits (Clock algorithm)."
        }
    },
    {
        "id": "os-pr-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Belady's anomaly can occur in:",
        "options": [
            "FIFO",
            "LFU",
            "LRU",
            "Optimal"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Belady's anomaly: in FIFO, increasing number of frames can INCREASE page faults - counterintuitive! Example: reference string 1,2,3,4,1,2,5,1,2,3,4,5 causes more faults with 4 frames than with 3. FIFO ignores page usage patterns. LRU and OPT are 'stack algorithms' provably immune to this anomaly."
        }
    },
    {
        "id": "os-pr-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "LRU and Optimal are immune to Belady's anomaly because they are:",
        "options": [
            "Faster",
            "Stack algorithms",
            "Simpler",
            "Newer"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Stack algorithms have the property that the set of pages in memory with n frames is always a subset of pages with n+1 frames: M(n) ⊆ M(n+1). Adding frames can only add pages, never remove, so faults can never increase. LRU, OPT, and LFU are stack algorithms. FIFO is not - page set with more frames can be different, not a superset."
        }
    },
    {
        "id": "os-pr-005",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Virtual Memory",
        "question": "Thrashing occurs when:",
        "options": [
            "Process spends more time paging than executing",
            "CPU utilization high",
            "Disk is slow",
            "Memory is full"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Thrashing: system constantly paging - processes spend more time waiting for page faults than executing useful code. Symptoms: high page fault rate, high disk activity, LOW CPU utilization (paradox: adding more processes worsens it). Cause: too many processes, not enough frames per process for working set. Solution: reduce multiprogramming."
        }
    },
    {
        "id": "os-disk-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Disk",
        "question": "FCFS disk scheduling serves requests in:",
        "options": [
            "Nearest first",
            "Direction order",
            "Shortest seek first",
            "Arrival order"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "FCFS (First Come First Served) Disk Scheduling: Process I/O requests in arrival order, regardless of current head position. PROS: (1) Simple to implement (just queue), (2) Fair - every request eventually served, (3) No starvation. CONS: (1) Inefficient - may cause wild head swings (seek from track 10 to 150 to 20), (2) Poor average seek time compared to smarter algorithms. GATE: Often used as baseline for comparison. Example: if requests are 45, 132, 10, current head at 50, head moves 50->45 (5), 45->132 (87), 132->10 (122), total=214 cylinders. Used in simple systems or when request rate is low.",
            "formula": "FCFS: Sum of |current - next| for each request in arrival order"
        }
    },
    {
        "id": "os-disk-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Disk",
        "question": "SSTF (Shortest Seek Time First) can cause:",
        "options": [
            "Longer seeks",
            "No problem",
            "More head movement",
            "Starvation of far requests"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "SSTF (Shortest Seek Time First): Greedy algorithm - always service request CLOSEST to current head position (minimum seek distance). PROS: (1) Better average seek time than FCFS (typically 50% improvement), (2) Less head movement overall. CONS: (1) STARVATION - requests at far edges of disk can wait indefinitely if requests near middle keep arriving, (2) Not fair. GATE: Like SJF for CPU - optimal locally but can starve. Example: Head at 50, requests at 45, 48, 90. SSTF serves 48 (2 cyl), then 45 (3 cyl), then 90 (45 cyl). Compare to FCFS which might go 50->90->45->48. Solution to starvation: Aging or use SCAN which guarantees bounded wait.",
            "formula": "SSTF: Pick min(|head - request_i|) for all pending requests"
        }
    },
    {
        "id": "os-disk-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Disk",
        "question": "SCAN (elevator) algorithm moves head:",
        "options": [
            "In one direction then reverses",
            "Randomly",
            "Always outward",
            "Always inward"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "SCAN (Elevator Algorithm): Head moves in one direction, servicing ALL requests in that direction until reaching disk end (or no more requests), then reverses direction and services requests in opposite direction. Like elevator going up servicing all floors, then down. PROS: (1) No starvation - bounded wait time (max wait = 2 times disk traversal), (2) Better than FCFS, (3) Fair distribution of wait times. CONS: (1) Slightly worse seek time than SSTF (not greedy), (2) Unfair to middle tracks (serviced more frequently). GATE comparison: | Algorithm | Avg Seek | Starvation? | Fairness | |-----------|----------|-------------|----------| | FCFS | Poor | No | Fair | | SSTF | Best | Yes | Unfair | | SCAN | Good | No | Mostly fair |. Variant: LOOK - reverses at last request instead of disk edge (practical improvement).",
            "formula": "SCAN: Unidirectional sweep, then reverse (elevator)"
        }
    },
    {
        "id": "os-disk-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "Disk",
        "question": "C-SCAN differs from SCAN by:",
        "options": [
            "No difference",
            "Random direction",
            "Returns to start without servicing (circular)",
            "Slower"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "C-SCAN (Circular SCAN): Services requests in one direction only (e.g., low to high cylinder). Upon reaching end, immediately returns to start WITHOUT servicing any requests during return (treating disk as circular). Then resumes scanning in same direction. PROS: (1) More uniform wait times than SCAN - no request waits for full disk traversal + reverse traversal, (2) Fairer - doesn't favor middle cylinders. CONS: (1) Wasted return sweep (no service during return), (2) Slightly more total head movement than SCAN. GATE: Max wait time = time to scan entire disk + return, vs SCAN's 2× full traversal. Variant: C-LOOK - returns to first request instead of track 0 (optimization). Best for systems with uniform request distribution across disk.",
            "formula": "C-SCAN: Unidirectional + jump back (circular) for uniform wait"
        }
    },
    {
        "id": "os-disk-005",
        "type": "NAT",
        "topic": "os",
        "subtopic": "Disk",
        "question": "FCFS requests: 98,183,37,122,14,124,65,67. Head at 53. Total head movement = ?",
        "correctAnswer": 640,
        "tolerance": 5,
        "explanation": {
            "solution": "FCFS Disk Scheduling Calculation: Requests: 98, 183, 37, 122, 14, 124, 65, 67. Current head: 53. Calculate movement for each step: Step 1: 53 to 98 equals |53-98| equals 45 cylinders. Step 2: 98 to 183 equals |98-183| equals 85. Step 3: 183 to 37 equals |183-37| equals 146 (big jump backward!). Step 4: 37 to 122 equals |37-122| equals 85 (big jump forward!). Step 5: 122 to 14 equals |122-14| equals 108 (backward). Step 6: 14 to 124 equals |14-124| equals 110 (forward). Step 7: 124 to 65 equals |124-65| equals 59. Step 8: 65 to 67 equals |65-67| equals 2. TOTAL equals 45 plus 85 plus 146 plus 85 plus 108 plus 110 plus 59 plus 2 equals 640 cylinders. GATE note: This demonstrates FCFS inefficiency - head zigzags wildly. SCAN would do much better (sort requests by cylinder, scan in one direction).",
            "formula": "$Total = sum |current - next| = 640$ cylinders"
        }
    },
    {
        "id": "os-file-001",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Contiguous allocation for files:",
        "options": [
            "No external fragmentation",
            "No disk space wasted",
            "Best for dynamic files",
            "Suffers from external fragmentation"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Contiguous allocation stores each file in consecutive disk blocks. Pros: fast sequential and random access, simple (just record start and length). Cons: external fragmentation (as files deleted, scattered holes form), difficult to grow files (may need to move entire file). Used in ISO 9660 (CD-ROM) where files don't change."
        }
    },
    {
        "id": "os-file-002",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Linked allocation stores each block with pointer to:",
        "options": [
            "FAT",
            "Previous block",
            "Next block",
            "Directory"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Linked allocation: each disk block contains pointer to next block of the file. Directory entry holds first block pointer. Pros: no external fragmentation, easy to grow files. Cons: random access is O(n) - must traverse entire chain, pointer overhead in each block, one bad pointer loses rest of file."
        }
    },
    {
        "id": "os-file-003",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Indexed allocation uses:",
        "options": [
            "Contiguous blocks",
            "Index block with pointers",
            "Hash table",
            "Linked list"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Indexed allocation: each file has an index block containing pointers to ALL its data blocks. Supports efficient random access (like contiguous) without external fragmentation (like linked). Index block overhead for small files. For large files: linked index blocks, multilevel indexing (Unix inode), or combined scheme."
        }
    },
    {
        "id": "os-file-004",
        "type": "MCQ",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Unix inode uses:",
        "options": [
            "Only direct pointers",
            "Only indirect",
            "Contiguous only",
            "Direct + single + double + triple indirect"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Unix inode uses multi-level indexing: 12 direct pointers (for small files), 1 single indirect (pointer to block of pointers), 1 double indirect (pointer->block->blocks), 1 triple indirect. Handles files from tiny (only direct pointers used) to huge (up to terabytes) efficiently. Most accesses use direct pointers."
        }
    },
    {
        "id": "os-file-005",
        "type": "NAT",
        "topic": "os",
        "subtopic": "File Systems",
        "question": "Block size=4KB, pointer=4B, 12 direct + 1 single indirect. Max file size (KB) = ?",
        "correctAnswer": 4144,
        "tolerance": 10,
        "explanation": {
            "solution": "Inode Max File Size Calculation (GATE standard): Given: Block size equals 4KB, Pointer size equals 4 bytes, Inode has 12 direct plus 1 single indirect. STEP 1 - Direct blocks: 12 direct pointers times 4KB per block equals 48KB. STEP 2 - Single indirect: Each block holds (4KB divided by 4B) equals 1024 pointers. Each pointer points to 4KB data block. Single indirect gives 1024 times 4KB equals 4096KB. STEP 3 - Total: 48KB plus 4096KB equals 4144KB. GATE generalization: For double indirect: 1024 pointers to blocks of 1024 pointers equals 1024 squared times 4KB equals 4GB. For triple indirect: 1024 cubed times 4KB equals 4TB. Full Unix inode (12 direct + 1 single + 1 double + 1 triple) can address files up to 4TB with 4KB blocks.",
            "formula": "$Max = 12 \\times 4KB + (4KB/4B) \\times 4KB = 48 + 4096 = 4144KB$"
        }
    }
]);