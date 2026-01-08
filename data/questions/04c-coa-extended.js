/**
 * Computer Organization & Architecture Extended
 * CPU, Memory, I/O, Pipelining
 */

Questions.register([
    // ========== CPU ORGANIZATION ==========
    {
        id: "coa-cpu-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "RISC architecture has:",
        options: ["Complex instructions, few registers", "Simple instructions, many registers", "No registers", "Variable instruction length"],
        correctAnswer: 1,
        explanation: { solution: "RISC: Reduced Instruction Set - simple, fixed-length instructions, many registers, load-store architecture" }
    },
    {
        id: "coa-cpu-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "CISC architecture typically has:",
        options: ["Fixed instruction length", "Variable instruction length", "Only ADD instruction", "No microcode"],
        correctAnswer: 1,
        explanation: { solution: "CISC: Complex instructions, variable length, uses microcode, few registers" }
    },
    {
        id: "coa-cpu-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Accumulator-based architecture uses:",
        options: ["No registers", "One special register (accumulator) for operations", "Many general-purpose registers", "Stack only"],
        correctAnswer: 1,
        explanation: { solution: "Accumulator: one operand is always the accumulator register" }
    },
    {
        id: "coa-cpu-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Stack-based architecture uses _____ for operands:",
        options: ["Registers", "Memory only", "Top of stack", "Accumulator"],
        correctAnswer: 2,
        explanation: { solution: "Stack machine: operands are pushed/popped from stack, no explicit register operands" }
    },
    // ========== ADDRESSING MODES EXTENDED ==========
    {
        id: "coa-addr-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In auto-increment addressing mode, register value:",
        options: ["Stays same after access", "Increments after memory access", "Decrements", "Multiplied by 2"],
        correctAnswer: 1,
        explanation: { solution: "Auto-increment: address = R, then R = R + data_size. Useful for array traversal." }
    },
    {
        id: "coa-addr-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Base + offset addressing is useful for accessing:",
        options: ["Array elements", "Structure fields with base pointer", "Constants", "Stack"],
        correctAnswer: 1,
        explanation: { solution: "Base+offset: EA = Base_Register + constant_offset. Good for struct members." }
    },
    {
        id: "coa-addr-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "PC-relative addressing is commonly used for:",
        options: ["Array access", "Branch instructions", "Arithmetic", "Stack operations"],
        correctAnswer: 1,
        explanation: { solution: "PC-relative: EA = PC + offset. Common for branches (position-independent code)" }
    },
    // ========== PIPELINING EXTENDED ==========
    {
        id: "coa-pipe-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Read After Write (RAW) hazard is also called:",
        options: ["Output dependency", "True dependency", "Anti-dependency", "Control dependency"],
        correctAnswer: 1,
        explanation: { solution: "RAW: true dependency - need result from previous instruction" }
    },
    {
        id: "coa-pipe-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Write After Read (WAR) hazard is also called:",
        options: ["True dependency", "Anti-dependency", "Output dependency", "Structural hazard"],
        correctAnswer: 1,
        explanation: { solution: "WAR: anti-dependency. Can occur with out-of-order execution." }
    },
    {
        id: "coa-pipe-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Operand forwarding (bypassing) reduces stalls by:",
        options: ["Eliminating all hazards", "Passing results directly without waiting for write-back", "Using more stages", "Removing memory access"],
        correctAnswer: 1,
        explanation: { solution: "Forwarding: pass ALU result directly to dependent instruction's input" }
    },
    {
        id: "coa-pipe-013",
        type: "NAT",
        topic: "coa",
        subtopic: "Pipelining",
        question: "A 5-stage pipeline executes 100 instructions with no hazards. Total cycles needed (assume 1 cycle per stage)?",
        correctAnswer: 104,
        tolerance: 0,
        explanation: { solution: "Cycles = (k-1) + n = (5-1) + 100 = 104 cycles for n=100 instructions, k=5 stages", formula: "Cycles = k-1 + n = 104" }
    },
    {
        id: "coa-pipe-014",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Branch prediction helps reduce:",
        options: ["Data hazards", "Structural hazards", "Control hazards", "WAR hazards"],
        correctAnswer: 2,
        explanation: { solution: "Branch prediction: guess branch outcome to avoid pipeline stalls from control hazards" }
    },
    {
        id: "coa-pipe-015",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Delayed branch technique:",
        options: ["Uses branch prediction", "Executes instruction after branch regardless of outcome", "Stalls the pipeline", "Uses only unconditional branches"],
        correctAnswer: 1,
        explanation: { solution: "Delayed branch: instruction in delay slot always executes. Compiler finds useful work." }
    },
    // ========== MEMORY HIERARCHY EXTENDED ==========
    {
        id: "coa-mem-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Set-associative cache is a compromise between:",
        options: ["SRAM and DRAM", "Direct-mapped and fully-associative", "L1 and L2 cache", "RAM and ROM"],
        correctAnswer: 1,
        explanation: { solution: "k-way set-associative: k blocks per set, combines benefits of both mapping schemes" }
    },
    {
        id: "coa-mem-011",
        type: "NAT",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "A direct-mapped cache with 64 blocks, where each block is 16 bytes, uses how many index bits?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: { solution: "64 blocks = 2⁶ → 6 index bits", formula: "Index bits = log₂(number of blocks)" }
    },
    {
        id: "coa-mem-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Write-through cache:",
        options: ["Writes only to cache", "Writes to both cache and main memory", "Writes only to main memory", "Never writes"],
        correctAnswer: 1,
        explanation: { solution: "Write-through: every write goes to cache AND memory. Simple but slow." }
    },
    {
        id: "coa-mem-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Write-back cache:",
        options: ["Writes to memory immediately", "Writes to cache first, memory on eviction", "Never writes to memory", "Has no dirty bit"],
        correctAnswer: 1,
        explanation: { solution: "Write-back: write to cache, mark dirty, write to memory only when evicted" }
    },
    {
        id: "coa-mem-014",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Cache miss penalty is the time to:",
        options: ["Access cache", "Fetch block from lower level memory", "Write to cache", "Calculate address"],
        correctAnswer: 1,
        explanation: { solution: "Miss penalty: time to fetch from main memory (or L2) when cache miss occurs" }
    },
    {
        id: "coa-mem-015",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Victim cache stores:",
        options: ["All cache blocks", "Most recently used blocks", "Recently evicted blocks", "Instruction blocks only"],
        correctAnswer: 2,
        explanation: { solution: "Victim cache: small fully-associative cache for recently evicted blocks" }
    },
    // ========== I/O ORGANIZATION ==========
    {
        id: "coa-io-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "Programmed I/O requires CPU to:",
        options: ["Wait in loop checking device status", "Do nothing", "Use interrupts", "Use DMA"],
        correctAnswer: 0,
        explanation: { solution: "Programmed I/O: CPU polls device status in loop (busy-waiting)" }
    },
    {
        id: "coa-io-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "Interrupt-driven I/O frees CPU to do other work because:",
        options: ["Device never needs attention", "Device signals CPU when ready", "DMA handles everything", "There is no I/O"],
        correctAnswer: 1,
        explanation: { solution: "Interrupts: device sends interrupt when ready, CPU handles it then resumes work" }
    },
    {
        id: "coa-io-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "DMA transfers data:",
        options: ["Through CPU", "Directly between memory and I/O device", "Only within CPU", "Between two CPUs"],
        correctAnswer: 1,
        explanation: { solution: "DMA: Direct Memory Access - device controller transfers data without CPU involvement" }
    },
    {
        id: "coa-io-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "Cycle stealing in DMA means:",
        options: ["DMA takes all memory cycles", "DMA takes memory cycles when CPU isn't using bus", "CPU steals from DMA", "No cycles are used"],
        correctAnswer: 1,
        explanation: { solution: "Cycle stealing: DMA controller 'steals' bus cycles from CPU for transfers" }
    },
    // ========== INSTRUCTION SET ==========
    {
        id: "coa-isa-001",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "A 3-address instruction format specifies:",
        options: ["1 source, 1 destination", "2 sources, 1 destination", "Only 1 operand", "3 destinations"],
        correctAnswer: 1,
        explanation: { solution: "3-address: Result = Src1 op Src2 (e.g., ADD R1, R2, R3)" }
    },
    {
        id: "coa-isa-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "Opcode expansion allows:",
        options: ["Fixed opcode length", "More instructions by using unused bits", "Fewer instructions", "No operands"],
        correctAnswer: 1,
        explanation: { solution: "Opcode expansion: use short opcodes for common instructions, longer for rare ones" }
    }
]);

console.log("Extended COA questions loaded");
