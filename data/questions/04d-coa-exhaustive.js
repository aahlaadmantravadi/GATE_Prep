/**
 * Computer Organization & Architecture EXHAUSTIVE
 * CPU, Pipelining, Memory, I/O, Instruction Set
 */

Questions.register([
    // ========== CPU BASICS ==========
    {
        id: "coa2-cpu-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "The basic instruction cycle consists of:",
        options: ["Fetch only", "Fetch, Decode, Execute", "Execute only", "Fetch and Store"],
        correctAnswer: 1,
        explanation: { solution: "Basic cycle: Fetch instruction → Decode → Execute" }
    },
    {
        id: "coa2-cpu-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Program Counter (PC) holds:",
        options: ["Data to be processed", "Address of next instruction", "Current result", "Stack pointer"],
        correctAnswer: 1,
        explanation: { solution: "PC = Instruction Pointer = address of next instruction to fetch" }
    },
    {
        id: "coa2-cpu-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Instruction Register (IR) holds:",
        options: ["Address of next instruction", "Currently executing instruction", "Memory address", "Data value"],
        correctAnswer: 1,
        explanation: { solution: "IR holds the currently fetched/executing instruction" }
    },
    {
        id: "coa2-cpu-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Memory Address Register (MAR) holds:",
        options: ["Data from memory", "Address being accessed in memory", "Instruction opcode", "Result of ALU"],
        correctAnswer: 1,
        explanation: { solution: "MAR contains address for memory read/write" }
    },
    {
        id: "coa2-cpu-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Memory Data/Buffer Register (MDR/MBR) holds:",
        options: ["Address to access", "Data read from or to be written to memory", "Instruction", "PC value"],
        correctAnswer: 1,
        explanation: { solution: "MDR/MBR holds data being transferred to/from memory" }
    },
    {
        id: "coa2-cpu-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Accumulator (AC) is used for:",
        options: ["Storing addresses", "Arithmetic/logic operations result", "Instruction storage", "Stack operations"],
        correctAnswer: 1,
        explanation: { solution: "AC = default register for ALU operations" }
    },
    // ========== ADDRESSING MODES ==========
    {
        id: "coa2-addr-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Immediate addressing, operand is:",
        options: ["In memory at given address", "In the instruction itself", "In a register", "Computed from base+offset"],
        correctAnswer: 1,
        explanation: { solution: "Immediate: operand value is part of instruction (no memory access)" }
    },
    {
        id: "coa2-addr-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Direct/Absolute addressing, operand is at:",
        options: ["Address given in instruction", "Next instruction", "Register specified", "Stack top"],
        correctAnswer: 0,
        explanation: { solution: "Direct: EA = address field in instruction" }
    },
    {
        id: "coa2-addr-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Indirect addressing, the instruction contains:",
        options: ["The operand value", "Address of address of operand", "Register number", "Immediate value"],
        correctAnswer: 1,
        explanation: { solution: "Indirect: address field → points to memory location containing actual address" }
    },
    {
        id: "coa2-addr-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Register addressing, operand is in:",
        options: ["Memory at address in register", "The register itself", "Stack", "Immediate field"],
        correctAnswer: 1,
        explanation: { solution: "Register: operand = contents of specified register" }
    },
    {
        id: "coa2-addr-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Register Indirect addressing, EA = ?",
        options: ["Register contents", "Address in register points to memory", "Immediate value", "PC + offset"],
        correctAnswer: 1,
        explanation: { solution: "Register Indirect: EA = [R] (contents of register is memory address)" }
    },
    {
        id: "coa2-addr-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Base+Displacement (Indexed) addressing, EA = ?",
        options: ["Base + Offset", "PC only", "Register only", "Immediate value"],
        correctAnswer: 0,
        explanation: { solution: "EA = Base register + displacement/offset", formula: "EA = [Base] + Displacement" }
    },
    {
        id: "coa2-addr-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "PC-Relative addressing: EA = ?",
        options: ["PC", "PC + Displacement", "Displacement only", "PC × Displacement"],
        correctAnswer: 1,
        explanation: { solution: "EA = PC + signed displacement (for branches)", formula: "EA = PC + offset" }
    },
    {
        id: "coa2-addr-008",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Auto-increment addressing after access: R ← ?",
        options: ["R - 1", "R + 1", "R × 2", "R / 2"],
        correctAnswer: 1,
        explanation: { solution: "Post-increment: use [R] then R = R + 1" }
    },
    {
        id: "coa2-addr-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Which addressing mode requires most memory accesses for operand fetch?",
        options: ["Immediate", "Direct", "Indirect", "Register"],
        correctAnswer: 2,
        explanation: { solution: "Indirect: 2 memory accesses (fetch address, then fetch operand)" }
    },
    {
        id: "coa2-addr-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Which addressing mode requires no memory access for operand?",
        options: ["Direct", "Indirect", "Immediate and Register", "Base+Offset"],
        correctAnswer: 2,
        explanation: { solution: "Immediate (in instruction) and Register (in register) need no memory fetch" }
    },
    // ========== INSTRUCTION SET ARCHITECTURE ==========
    {
        id: "coa2-isa-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "RISC stands for:",
        options: ["Reduced Instruction Set Computer", "Regular Instruction Set Computer", "Rapid Instruction Set Computer", "Random Instruction Set Computer"],
        correctAnswer: 0,
        explanation: { solution: "RISC = Reduced Instruction Set Computer" }
    },
    {
        id: "coa2-isa-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "CISC stands for:",
        options: ["Complete Instruction Set Computer", "Complex Instruction Set Computer", "Common Instruction Set Computer", "Compiled Instruction Set Computer"],
        correctAnswer: 1,
        explanation: { solution: "CISC = Complex Instruction Set Computer" }
    },
    {
        id: "coa2-isa-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "RISC typically has:",
        options: ["Many complex instructions", "Few simple instructions, fixed length", "Variable length instructions", "Memory-to-memory operations"],
        correctAnswer: 1,
        explanation: { solution: "RISC: simple, fixed-length instructions, load-store architecture" }
    },
    {
        id: "coa2-isa-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "CISC typically supports:",
        options: ["Only register operations", "Memory-to-memory operations", "Fixed instruction length", "Only load/store memory access"],
        correctAnswer: 1,
        explanation: { solution: "CISC: complex variable-length instructions, memory operands in ALU ops" }
    },
    {
        id: "coa2-isa-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "In 3-address instruction format: ADD R1, R2, R3 means:",
        options: ["R1 = R2 + R3", "R3 = R1 + R2", "R2 = R1 + R3", "R1 = R1 + R2"],
        correctAnswer: 0,
        explanation: { solution: "3-address: destination, source1, source2 → R1 = R2 + R3" }
    },
    {
        id: "coa2-isa-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "In 0-address (stack) machine, operands come from:",
        options: ["Registers", "Memory addresses", "Stack top", "Immediate only"],
        correctAnswer: 2,
        explanation: { solution: "0-address: operands implicitly on stack, result pushed back" }
    },
    // ========== PIPELINING ==========
    {
        id: "coa2-pipe-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Standard 5-stage RISC pipeline stages are:",
        options: ["Fetch, Execute, Store", "IF, ID, EX, MEM, WB", "Read, Compute, Write", "Fetch, Decode, Execute"],
        correctAnswer: 1,
        explanation: { solution: "IF (Instruction Fetch), ID (Decode), EX (Execute), MEM (Memory), WB (Write Back)" }
    },
    {
        id: "coa2-pipe-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Ideal speedup with k-stage pipeline is:",
        options: ["k", "k/2", "k²", "log k"],
        correctAnswer: 0,
        explanation: { solution: "Ideal speedup = k (k times faster)", formula: "Speedup = k" }
    },
    {
        id: "coa2-pipe-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "For n instructions in k-stage pipeline, total cycles = ?",
        options: ["n × k", "n + k", "k + (n-1)", "n - k"],
        correctAnswer: 2,
        explanation: { solution: "First instruction: k cycles, each additional: 1 cycle → k + (n-1)", formula: "Cycles = k + (n-1)" }
    },
    {
        id: "coa2-pipe-004",
        type: "NAT",
        topic: "coa",
        subtopic: "Pipelining",
        question: "In 5-stage pipeline, time to complete 100 instructions (ignoring hazards) = k + (n-1) = ?",
        correctAnswer: 104,
        tolerance: 0,
        explanation: { solution: "5 + (100-1) = 5 + 99 = 104 cycles" }
    },
    {
        id: "coa2-pipe-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Throughput of ideal k-stage pipeline (1 instruction per cycle) is:",
        options: ["k instructions/cycle", "1 instruction/cycle", "1/k instructions/cycle", "k² instructions/cycle"],
        correctAnswer: 1,
        explanation: { solution: "Ideal pipeline: 1 instruction completes every cycle in steady state" }
    },
    // ========== PIPELINE HAZARDS ==========
    {
        id: "coa2-haz-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "The three types of pipeline hazards are:",
        options: ["Structural, Data, Control", "Read, Write, Execute", "Fetch, Decode, Store", "Input, Process, Output"],
        correctAnswer: 0,
        explanation: { solution: "Hazards: Structural (resource), Data (dependency), Control (branch)" }
    },
    {
        id: "coa2-haz-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Structural hazard occurs when:",
        options: ["Data not ready", "Same resource needed by multiple stages", "Branch prediction fails", "Memory is full"],
        correctAnswer: 1,
        explanation: { solution: "Structural: hardware resource conflict (e.g., single memory port)" }
    },
    {
        id: "coa2-haz-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "RAW (Read After Write) hazard is a type of:",
        options: ["Structural hazard", "Data hazard", "Control hazard", "Memory hazard"],
        correctAnswer: 1,
        explanation: { solution: "RAW: true dependency - read needs result of prior write" }
    },
    {
        id: "coa2-haz-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "WAR (Write After Read) hazard is called:",
        options: ["True dependency", "Anti-dependency", "Output dependency", "Resource dependency"],
        correctAnswer: 1,
        explanation: { solution: "WAR = anti-dependency (can be solved by renaming)" }
    },
    {
        id: "coa2-haz-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "WAW (Write After Write) hazard is called:",
        options: ["True dependency", "Anti-dependency", "Output dependency", "Control dependency"],
        correctAnswer: 2,
        explanation: { solution: "WAW = output dependency (both write to same location)" }
    },
    {
        id: "coa2-haz-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Forwarding/Bypassing is used to resolve:",
        options: ["Structural hazards", "Data hazards", "Control hazards", "All hazards"],
        correctAnswer: 1,
        explanation: { solution: "Forwarding: send data directly from EX/MEM stage to dependent instruction" }
    },
    {
        id: "coa2-haz-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Stalling (inserting NOPs/bubbles) is used when:",
        options: ["Forwarding can solve hazard", "Hazard cannot be resolved by forwarding", "There is no hazard", "For all instructions"],
        correctAnswer: 1,
        explanation: { solution: "Stall when forwarding not possible (e.g., load followed by use)" }
    },
    {
        id: "coa2-haz-008",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Control hazard is caused by:",
        options: ["Data dependency", "Resource conflict", "Branch instructions", "Memory access"],
        correctAnswer: 2,
        explanation: { solution: "Control hazard: branch outcome unknown, pipeline may fetch wrong instructions" }
    },
    {
        id: "coa2-haz-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Branch prediction helps reduce:",
        options: ["Data hazards", "Structural hazards", "Control hazards", "WAR hazards"],
        correctAnswer: 2,
        explanation: { solution: "Branch prediction: guess branch outcome to reduce stalls" }
    },
    {
        id: "coa2-haz-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Branch penalty is the number of cycles lost when:",
        options: ["Prediction is correct", "Prediction is wrong", "Pipeline has no branches", "Memory stall occurs"],
        correctAnswer: 1,
        explanation: { solution: "Misprediction penalty: cycles wasted fetching wrong path" }
    },
    // ========== MEMORY HIERARCHY ==========
    {
        id: "coa2-mem-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Memory hierarchy from fastest to slowest:",
        options: ["Main Memory, Cache, Registers", "Registers, Cache, Main Memory, Disk", "Disk, Main Memory, Cache", "Cache, Registers, Disk"],
        correctAnswer: 1,
        explanation: { solution: "Fastest: Registers > Cache > Main Memory > Disk (secondary)" }
    },
    {
        id: "coa2-mem-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache memory exploits:",
        options: ["Spatial locality only", "Temporal locality only", "Both spatial and temporal locality", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "Cache works due to locality: temporal (reuse) and spatial (nearby access)" }
    },
    {
        id: "coa2-mem-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache hit ratio h means:",
        options: ["h% of accesses miss", "h% of accesses found in cache", "h% of cache is full", "h% of memory is cached"],
        correctAnswer: 1,
        explanation: { solution: "Hit ratio = fraction of accesses found in cache" }
    },
    {
        id: "coa2-mem-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Effective Access Time (EAT) = ?",
        options: ["h × Tc + (1-h) × Tm", "h × Tc + (1-h) × (Tc + Tm)", "Tc + Tm", "h × Tm"],
        correctAnswer: 1,
        explanation: { solution: "EAT = h×Tc + (1-h)×(Tc + Tm) or h×Tc + (1-h)×Tm if miss penalty given", formula: "EAT = h×Tc + (1-h)×(Tc + Tm)" }
    },
    {
        id: "coa2-mem-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In Direct Mapped cache, each memory block maps to:",
        options: ["Any cache line", "Exactly one cache line", "Two cache lines", "All cache lines"],
        correctAnswer: 1,
        explanation: { solution: "Direct mapped: Block i → Cache line (i mod number_of_lines)" }
    },
    {
        id: "coa2-mem-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In Fully Associative cache, a memory block can go to:",
        options: ["Only one specific line", "Any cache line", "Only even lines", "Only odd lines"],
        correctAnswer: 1,
        explanation: { solution: "Fully associative: block can be in any cache line" }
    },
    {
        id: "coa2-mem-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In n-way Set Associative cache, each block maps to:",
        options: ["1 line", "n lines in one set", "All lines", "Random lines"],
        correctAnswer: 1,
        explanation: { solution: "n-way: block maps to specific set, can be in any of n lines in that set" }
    },
    {
        id: "coa2-mem-008",
        type: "NAT",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache with 64 lines and 4-way set associative has how many sets?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: { solution: "Sets = Lines / Ways = 64 / 4 = 16" }
    },
    {
        id: "coa2-mem-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache address is divided into:",
        options: ["Tag only", "Tag, Index, Offset", "Tag, Data", "Address only"],
        correctAnswer: 1,
        explanation: { solution: "Address: Tag (identifies block) | Index (selects set/line) | Offset (byte in block)" }
    },
    {
        id: "coa2-mem-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In Direct Mapped cache: Index bits = ?",
        options: ["log₂(cache size)", "log₂(number of lines)", "log₂(block size)", "log₂(sets × ways)"],
        correctAnswer: 1,
        explanation: { solution: "Index bits = log₂(number of cache lines)", formula: "Index = log₂(lines)" }
    },
    {
        id: "coa2-mem-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Block offset bits = ?",
        options: ["log₂(cache size)", "log₂(number of lines)", "log₂(block size)", "log₂(memory size)"],
        correctAnswer: 2,
        explanation: { solution: "Offset = log₂(block_size) bits to address byte within block", formula: "Offset = log₂(block size)" }
    },
    {
        id: "coa2-mem-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache replacement policy LRU means:",
        options: ["Last Recently Used", "Least Recently Used", "Longest Running Used", "Lowest Read Used"],
        correctAnswer: 1,
        explanation: { solution: "LRU = Least Recently Used (evict block not accessed longest)" }
    },
    {
        id: "coa2-mem-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Write-through cache policy:",
        options: ["Writes only to cache", "Writes to both cache and memory simultaneously", "Writes only to memory", "Never writes"],
        correctAnswer: 1,
        explanation: { solution: "Write-through: every write updates both cache and memory" }
    },
    {
        id: "coa2-mem-014",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Write-back cache policy:",
        options: ["Writes to memory immediately", "Writes only to cache, updates memory on eviction", "Never writes to cache", "Writes to disk"],
        correctAnswer: 1,
        explanation: { solution: "Write-back: write to cache, mark dirty, write to memory on eviction" }
    },
    // ========== VIRTUAL MEMORY ==========
    {
        id: "coa2-vm-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Virtual memory allows:",
        options: ["Programs larger than physical memory", "Faster memory access", "Direct disk access", "Register-only operations"],
        correctAnswer: 0,
        explanation: { solution: "Virtual memory: run programs larger than physical RAM using disk" }
    },
    {
        id: "coa2-vm-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Page table maps:",
        options: ["Physical to virtual addresses", "Virtual to physical addresses", "Cache to memory", "Memory to disk"],
        correctAnswer: 1,
        explanation: { solution: "Page table: virtual page number → physical frame number" }
    },
    {
        id: "coa2-vm-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "TLB (Translation Lookaside Buffer) is a cache for:",
        options: ["Data", "Instructions", "Page table entries", "Disk blocks"],
        correctAnswer: 2,
        explanation: { solution: "TLB: cache of recently used page table entries for fast address translation" }
    },
    {
        id: "coa2-vm-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Page fault occurs when:",
        options: ["Page in memory", "Page not in physical memory", "TLB hit", "Cache hit"],
        correctAnswer: 1,
        explanation: { solution: "Page fault: requested page not in RAM, must load from disk" }
    },
    // ========== I/O ORGANIZATION ==========
    {
        id: "coa2-io-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "Programmed I/O means CPU:",
        options: ["Does nothing for I/O", "Polls device status in a loop", "Is interrupted by device", "Uses DMA"],
        correctAnswer: 1,
        explanation: { solution: "Programmed I/O: CPU busy-waits polling device status (wastes CPU)" }
    },
    {
        id: "coa2-io-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "Interrupt-driven I/O means:",
        options: ["CPU polls continuously", "Device signals CPU when ready", "CPU ignores device", "Direct memory access"],
        correctAnswer: 1,
        explanation: { solution: "Interrupt I/O: device interrupts CPU when ready (more efficient)" }
    },
    {
        id: "coa2-io-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "DMA (Direct Memory Access) allows:",
        options: ["CPU to access device registers", "Device to transfer data to memory without CPU", "Only programmed I/O", "Device to control CPU"],
        correctAnswer: 1,
        explanation: { solution: "DMA: device transfers data directly to/from memory, CPU free" }
    },
    {
        id: "coa2-io-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "Memory-mapped I/O means:",
        options: ["I/O devices have separate address space", "I/O devices share memory address space", "Memory is on the I/O device", "No I/O possible"],
        correctAnswer: 1,
        explanation: { solution: "Memory-mapped: I/O registers accessed using normal memory addresses" }
    },
    {
        id: "coa2-io-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "I/O-mapped I/O (port-mapped) uses:",
        options: ["Same address space as memory", "Separate I/O address space and special instructions", "No addresses", "Only registers"],
        correctAnswer: 1,
        explanation: { solution: "Port-mapped: separate I/O ports, special IN/OUT instructions" }
    }
]);

console.log("Exhaustive COA loaded - ~65 questions");
