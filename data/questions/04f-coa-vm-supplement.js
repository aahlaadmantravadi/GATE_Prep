/**
 * COA SUPPLEMENT - Cache Mapping Formulas, Virtual Memory Details
 * From PDF pages 214-218, 408-415
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
        explanation: { solution: "Direct: block j → cache block (j mod n)", formula: "j mod n" }
    },
    {
        id: "coa3-cache-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Direct mapping address format:",
        options: ["Tag + Block + Word", "Tag + Word", "Block + Tag + Word", "Only Tag"],
        correctAnswer: 0,
        explanation: { solution: "Direct: Tag | Block/Line | Word/Offset" }
    },
    {
        id: "coa3-cache-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Associative (fully) mapping address format:",
        options: ["Tag + Block + Word", "Tag + Word", "Block + Word", "Set + Word"],
        correctAnswer: 1,
        explanation: { solution: "Fully associative: Tag | Word (no block field, any block anywhere)" }
    },
    {
        id: "coa3-cache-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Set-associative mapping address format:",
        options: ["Tag + Block + Word", "Tag + Set + Word", "Tag + Word", "Block + Word"],
        correctAnswer: 1,
        explanation: { solution: "Set-associative: Tag | Set | Word" }
    },
    {
        id: "coa3-cache-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In direct mapping, number of tag comparators needed:",
        options: ["0", "1", "n (cache blocks)", "log n"],
        correctAnswer: 1,
        explanation: { solution: "Direct: only 1 comparator (block position determined by address)" }
    },
    {
        id: "coa3-cache-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In fully associative, number of tag comparators needed:",
        options: ["1", "n (number of cache blocks)", "log n", "0"],
        correctAnswer: 1,
        explanation: { solution: "Fully assoc: compare all n blocks in parallel" }
    },
    {
        id: "coa3-cache-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "In k-way set-associative, number of tag comparators:",
        options: ["1", "k", "n", "n/k"],
        correctAnswer: 1,
        explanation: { solution: "k-way: compare k blocks within the set" }
    },
    {
        id: "coa3-cache-008",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Write-through policy:",
        options: ["Write only to cache", "Write to cache and main memory simultaneously", "Write only to main memory", "Delayed write"],
        correctAnswer: 1,
        explanation: { solution: "Write-through: keeps cache and memory consistent" }
    },
    {
        id: "coa3-cache-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Write-back policy:",
        options: ["Write to cache only, update memory on eviction", "Write to both always", "Write to memory only", "No writes allowed"],
        correctAnswer: 0,
        explanation: { solution: "Write-back: write to cache, mark dirty, write to memory on replacement" }
    },
    {
        id: "coa3-cache-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "Hit ratio formula:",
        options: ["Hits / Misses", "Hits / Total accesses", "Misses / Total", "Total / Hits"],
        correctAnswer: 1,
        explanation: { solution: "Hit ratio = Hits / (Hits + Misses)", formula: "h = hits / total" }
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
        explanation: { solution: "EMAT = h*c + (1-h)*(c+m) [if cache accessed first]", formula: "EMAT = h·c + (1-h)·(c+m)" }
    },
    {
        id: "coa3-emat-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "TLB effective memory access time with TLB hit h, TLB time t, memory m:",
        options: ["h*(t+m) + (1-h)*(t+2m)", "t + m", "h*t + m", "t + h*m"],
        correctAnswer: 0,
        explanation: { solution: "TLB hit: t+m, TLB miss: t+2m (page table + data)", formula: "h(t+m) + (1-h)(t+2m)" }
    },
    {
        id: "coa3-emat-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Cache Memory",
        question: "n-level paging without TLB: memory accesses for one data access:",
        options: ["n", "n+1", "2n", "n²"],
        correctAnswer: 1,
        explanation: { solution: "n page table accesses + 1 data access = n+1", formula: "n+1 accesses" }
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
        explanation: { solution: "EMAT = P*S + (1-P)*M", formula: "EMAT = P·S + (1-P)·M" }
    },
    {
        id: "coa3-vm-002",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Belady's anomaly occurs in:",
        options: ["LRU", "FIFO (more frames can cause more faults)", "Optimal", "LFU"],
        correctAnswer: 1,
        explanation: { solution: "FIFO page replacement can show Belady's anomaly" }
    },
    {
        id: "coa3-vm-003",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Which page replacement algorithm never suffers Belady's anomaly?",
        options: ["FIFO", "LRU (stack algorithm)", "Random", "Second Chance"],
        correctAnswer: 1,
        explanation: { solution: "LRU and Optimal are stack algorithms - no Belady's anomaly" }
    },
    {
        id: "coa3-vm-004",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Optimal page replacement replaces the page:",
        options: ["Oldest page", "Page not used for longest time in future", "Least recently used", "Random"],
        correctAnswer: 1,
        explanation: { solution: "Optimal: replace page needed furthest in future (theoretical)" }
    },
    {
        id: "coa3-vm-005",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Internal fragmentation in paging averages approximately:",
        options: ["0", "p/2 (where p = page size)", "p", "2p"],
        correctAnswer: 1,
        explanation: { solution: "Average internal fragmentation = page_size / 2", formula: "≈ p/2" }
    },
    {
        id: "coa3-vm-006",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Segmentation vs Paging: segmentation suffers from:",
        options: ["Internal fragmentation", "External fragmentation", "No fragmentation", "Both"],
        correctAnswer: 1,
        explanation: { solution: "Segmentation: external frag. Paging: internal frag (last page)" }
    },
    {
        id: "coa3-vm-007",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Inverted page table size depends on:",
        options: ["Virtual address space size", "Physical memory size (number of frames)", "Both equally", "Neither"],
        correctAnswer: 1,
        explanation: { solution: "Inverted PT: one entry per physical frame" }
    },
    {
        id: "coa3-vm-008",
        type: "MCQ",
        topic: "os",
        subtopic: "Virtual Memory",
        question: "Working set model helps prevent:",
        options: ["Page faults", "Thrashing", "Context switching", "Deadlock"],
        correctAnswer: 1,
        explanation: { solution: "Working set: pages process needs; prevents thrashing" }
    }
]);

console.log("COA/VM Supplement loaded - ~25 questions");
