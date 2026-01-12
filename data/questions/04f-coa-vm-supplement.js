/**
 * COA SUPPLEMENT - Cache Mapping Formulas, Virtual Memory Details
 */

Questions.register([
    // ========== CACHE MAPPING FORMULAS ==========
    {
        id: "coa3-cache-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In direct mapping, block j of main memory maps to cache block:",
        options: ["j", "j mod n (where n = cache blocks)", "j / n", "n mod j"],
        correctAnswer: 1,
        explanation: {
            solution: "Direct mapping: memory block j maps to cache line = j mod n (where n = number of cache lines). Each memory block has exactly one possible cache location. Simple but causes conflict misses when multiple frequently-used blocks map to same line.",
            formula: "$Cache\\ line = j \\mod n$"
        }
    },
    {
        id: "coa3-cache-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Direct mapping address format:",
        options: ["Tag + Block + Word", "Tag + Word", "Block + Tag + Word", "Only Tag"],
        correctAnswer: 0,
        explanation: {
            solution: "Direct-mapped cache address: Tag (identifies which memory block among those mapping to same line) | Block/Line/Index (selects cache line) | Word/Offset (selects byte within block). Index bits = log₂(cache lines). Offset bits = log₂(block size)."
        }
    },
    {
        id: "coa3-cache-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Associative (fully) mapping address format:",
        options: ["Tag + Block + Word", "Tag + Word", "Block + Word", "Set + Word"],
        correctAnswer: 1,
        explanation: {
            solution: "Fully associative: address is just Tag | Word/Offset. No index field - block can go anywhere, so no fixed position to select. Tag is compared against ALL lines in parallel. Most flexible but requires n comparators for n lines, making it expensive for large caches."
        }
    },
    {
        id: "coa3-cache-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Set-associative mapping address format:",
        options: ["Tag + Block + Word", "Tag + Set + Word", "Tag + Word", "Block + Word"],
        correctAnswer: 1,
        explanation: {
            solution: "Set-associative: address is Tag | Set | Offset. Set bits select which set (group of n lines). Within set, block can go in any of n positions - tag compared against n lines in that set. Balances flexibility (fewer conflicts) with hardware cost (only n comparators)."
        }
    },
    {
        id: "coa3-cache-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In direct mapping, number of tag comparators needed:",
        options: ["0", "1", "n (cache blocks)", "log n"],
        correctAnswer: 1,
        explanation: {
            solution: "Direct-mapped: only ONE comparator needed. The index field directly selects which cache line to check - then just compare that line's tag with the address tag. No searching. Fast and simple, but limited flexibility leads to conflict misses."
        }
    },
    {
        id: "coa3-cache-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In fully associative, number of tag comparators needed:",
        options: ["1", "n (number of cache blocks)", "log n", "0"],
        correctAnswer: 1,
        explanation: {
            solution: "Fully associative: need n comparators (one per cache line) to check all lines in parallel. Block could be anywhere, so must compare address tag against every stored tag simultaneously. This hardware cost limits practical size of fully associative caches (typically used for TLB, victim cache)."
        }
    },
    {
        id: "coa3-cache-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In k-way set-associative, number of tag comparators:",
        options: ["1", "k", "n", "n/k"],
        correctAnswer: 1,
        explanation: {
            solution: "k-way set-associative: need k comparators - one for each line in the selected set. Index field selects set, then k tags in that set are compared in parallel. Common configurations: 2-way (2 comparators), 4-way, 8-way. Good balance of hit rate and hardware cost."
        }
    },
    {
        id: "coa3-cache-008",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Write-through policy:",
        options: ["Write only to cache", "Write to cache and main memory simultaneously", "Write only to main memory", "Delayed write"],
        correctAnswer: 1,
        explanation: {
            solution: "Write-through: every write updates both cache AND main memory immediately. Cache and memory always consistent. Simple to implement, but slow (memory speed limits writes) and high memory bandwidth usage. Often uses write buffer to partially hide write latency."
        }
    },
    {
        id: "coa3-cache-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Write-back policy:",
        options: ["Write only to cache, update memory on eviction", "Write to both always", "Write to memory only", "No writes allowed"],
        correctAnswer: 0,
        explanation: {
            solution: "Write-back: write only to cache, mark block 'dirty'. Memory updated only when dirty block evicted. Faster (no memory wait on write), less memory traffic. But: cache inconsistent with memory until eviction. Needs dirty bit. Complex crash recovery. Most common in modern systems."
        }
    },
    {
        id: "coa3-cache-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Hit ratio formula:",
        options: ["Hits / Misses", "Hits / Total accesses", "Misses / Total", "Total / Hits"],
        correctAnswer: 1,
        explanation: {
            solution: "Hit ratio = Hits / (Hits + Misses) = Hits / Total accesses. Measures cache effectiveness. Higher is better. Typical L1 caches achieve >95% hit ratio. Miss ratio = 1 - hit ratio. Even small improvements in hit ratio significantly impact performance.",
            formula: "$h = \\frac{Hits}{Hits + Misses}$"
        }
    },
    // ========== EMAT FORMULAS ==========
    {
        id: "coa3-emat-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "EMAT with cache hit rate h, cache time c, memory time m:",
        options: ["h*c + (1-h)*m", "h*c + (1-h)*(c+m)", "c + m", "h*(c+m)"],
        correctAnswer: 1,
        explanation: {
            solution: "Effective Memory Access Time: On hit (probability h): just cache access = c. On miss (probability 1-h): access cache, find miss, then access memory = c + m. EMAT = h×c + (1-h)×(c+m). Some models simplify to c + (1-h)×m if miss penalty = m.",
            formula: "$EMAT = h \\cdot c + (1-h) \\cdot (c + m)$"
        }
    },
    {
        id: "coa3-emat-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "TLB effective memory access time with TLB hit h, TLB time t, memory m:",
        options: ["h*(t+m) + (1-h)*(t+2m)", "t + m", "h*t + m", "t + h*m"],
        correctAnswer: 0,
        explanation: {
            solution: "TLB-based paging: TLB hit (probability h): TLB access + memory access = t + m. TLB miss (probability 1-h): TLB access + page table lookup in memory + data access in memory = t + m + m = t + 2m. EMAT = h(t+m) + (1-h)(t+2m). TLB crucial for paging performance.",
            formula: "$EMAT = h(t+m) + (1-h)(t+2m)$"
        }
    },
    {
        id: "coa3-emat-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "n-level paging without TLB: memory accesses for one data access:",
        options: ["n", "n+1", "2n", "n²"],
        correctAnswer: 1,
        explanation: {
            solution: "Multi-level paging without TLB: must traverse n levels of page tables (n memory accesses), then access the data itself (1 more access). Total = n + 1 memory accesses. Very slow without TLB. Example: 3-level paging needs 4 memory accesses per data access.",
            formula: "Memory accesses = $n + 1$"
        }
    },
    // ========== VIRTUAL MEMORY ==========
    {
        id: "coa3-vm-001",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Page fault service time S, memory time M, page fault rate P. EMAT = ?",
        options: ["P*S + (1-P)*M", "S + M", "P*M + S", "M + P*(S-M)"],
        correctAnswer: 0,
        explanation: {
            solution: "With page faults: On hit (probability 1-P): normal memory access = M. On fault (probability P): page fault service (disk I/O, very slow) = S. EMAT = P×S + (1-P)×M = M + P×(S-M). Since S >> M (millions of ns vs hundreds), even small P dramatically increases EMAT.",
            formula: "$EMAT = P \\cdot S + (1-P) \\cdot M$"
        }
    },
    {
        id: "coa3-vm-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Belady's anomaly occurs in:",
        options: ["LRU", "FIFO (more frames can cause more faults)", "Optimal", "LFU"],
        correctAnswer: 1,
        explanation: {
            solution: "Belady's anomaly: counter-intuitively, giving MORE frames can cause MORE page faults. Only occurs in FIFO (and some other algorithms). Example: reference 1,2,3,4,1,2,5,1,2,3,4,5 has 9 faults with 3 frames but 10 faults with 4 frames! FIFO doesn't respect recency."
        }
    },
    {
        id: "coa3-vm-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Which page replacement algorithm never suffers Belady's anomaly?",
        options: ["FIFO", "LRU (stack algorithm)", "Random", "Second Chance"],
        correctAnswer: 1,
        explanation: {
            solution: "LRU and Optimal are 'stack algorithms' - the set of pages in memory with n frames is always a subset of pages with n+1 frames. Adding frames can only add pages, never cause eviction of previously-kept pages. FIFO is NOT a stack algorithm. LFU is also a stack algorithm."
        }
    },
    {
        id: "coa3-vm-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Optimal page replacement replaces the page:",
        options: ["Oldest page", "Page not used for longest time in future", "Least recently used", "Random"],
        correctAnswer: 1,
        explanation: {
            solution: "Optimal (OPT/Belady's) replaces page that will not be used for the longest time in the FUTURE. Provably minimum page faults. But impractical - requires knowing future accesses. Used as theoretical benchmark. LRU approximates OPT using past to predict future."
        }
    },
    {
        id: "coa3-vm-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Internal fragmentation in paging averages approximately:",
        options: ["0", "p/2 (where p = page size)", "p", "2p"],
        correctAnswer: 1,
        explanation: {
            solution: "Paging internal fragmentation: last page of each process not fully used. On average, half the last page is wasted. Average internal fragmentation = page_size / 2 = p/2 per process. Larger pages → more wasted space. Tradeoff with page table size (smaller pages → larger page table).",
            formula: "Average internal fragmentation $\\approx p/2$"
        }
    },
    {
        id: "coa3-vm-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Segmentation vs Paging: segmentation suffers from:",
        options: ["Internal fragmentation", "External fragmentation", "No fragmentation", "Both"],
        correctAnswer: 1,
        explanation: {
            solution: "Segmentation: variable-sized segments → external fragmentation (scattered holes in memory). Paging: fixed-sized pages → internal fragmentation (wasted space in last page). Segmentation with paging combines both: logical segments divided into fixed pages. Paging eliminates external fragmentation."
        }
    },
    {
        id: "coa3-vm-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Inverted page table size depends on:",
        options: ["Virtual address space size", "Physical memory size (number of frames)", "Both equally", "Neither"],
        correctAnswer: 1,
        explanation: {
            solution: "Inverted page table: one entry per physical frame (not per virtual page). Size = number of physical frames × entry size. Independent of virtual address space size! Much smaller for systems with large virtual address spaces but limited physical memory. Trade-off: slower lookup (search required)."
        }
    },
    {
        id: "coa3-vm-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Working set model helps prevent:",
        options: ["Page faults", "Thrashing", "Context switching", "Deadlock"],
        correctAnswer: 1,
        explanation: {
            solution: "Working set: set of pages a process has referenced in recent time window Δ. Working set model allocates enough frames to hold each process's working set. If total working sets exceed memory, suspend some processes. Prevents thrashing by ensuring active processes have sufficient frames."
        }
    }
]);

console.log("COA/VM Supplement loaded - ~25 questions");
