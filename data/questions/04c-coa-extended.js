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
        explanation: {
            solution: "RISC (Reduced Instruction Set Computer): simple, fixed-length instructions; many general-purpose registers (32+); load-store architecture (only load/store access memory); most operations complete in one cycle; hardwired control; optimized for pipelining. Examples: ARM, MIPS, RISC-V."
        }
    },
    {
        id: "coa-cpu-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "CISC architecture typically has:",
        options: ["Fixed instruction length", "Variable instruction length", "Only ADD instruction", "No microcode"],
        correctAnswer: 1,
        explanation: {
            solution: "CISC (Complex Instruction Set Computer): variable-length instructions (1-15 bytes); complex operations in single instruction; memory operands in ALU ops; fewer registers; microprogrammed control. Complex decoding makes pipelining harder. Examples: x86, VAX."
        }
    },
    {
        id: "coa-cpu-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Accumulator-based architecture uses:",
        options: ["No registers", "One special register (accumulator) for operations", "Many general-purpose registers", "Stack only"],
        correctAnswer: 1,
        explanation: {
            solution: "Accumulator architecture: one operand is always the accumulator register. Instructions like ADD X mean: AC ← AC + M[X]. Simple, short instructions, but bottleneck at accumulator. Many early computers used this design. Now superseded by general-purpose register architectures."
        }
    },
    {
        id: "coa-cpu-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Stack-based architecture uses _____ for operands:",
        options: ["Registers", "Memory only", "Top of stack", "Accumulator"],
        correctAnswer: 2,
        explanation: {
            solution: "Stack machine: 0-address instructions. Operands implicitly pushed/popped from stack. ADD means: push (pop + pop). Very compact code, good for recursive languages, but limited parallelism and compiler optimization difficulty. Examples: JVM, Forth, some old calculators."
        }
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
        explanation: {
            solution: "Auto-increment: EA = R, then R = R + d (where d = data size). Used after the access. Useful for array traversal: (R)+ accesses array element and advances pointer. Auto-decrement: R = R - d, then EA = R containing the new value (pre-decrement). Both reduce instruction count for loops.",
            formula: "EA = R; R ← R + sizeof(data)"
        }
    },
    {
        id: "coa-addr-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Base + offset addressing is useful for accessing:",
        options: ["Array elements", "Structure fields with base pointer", "Constants", "Stack"],
        correctAnswer: 1,
        explanation: {
            solution: "Base + displacement: EA = Base_Register + constant_offset. Perfect for struct/record access: base points to struct start, offset is field position. Also good for stack frames: FP + offset accesses local variables. Compiler knows offsets at compile time, calculates at runtime.",
            formula: "EA = [Base] + displacement"
        }
    },
    {
        id: "coa-addr-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "PC-relative addressing is commonly used for:",
        options: ["Array access", "Branch instructions", "Arithmetic", "Stack operations"],
        correctAnswer: 1,
        explanation: {
            solution: "PC-relative: EA = PC + signed displacement. Used for branch/jump instructions. Allows position-independent code (PIC) - code works regardless of load address. Displacement is typically small (fits in instruction), so branches are usually within a few hundred bytes.",
            formula: "EA = PC + offset"
        }
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
        explanation: {
            solution: "RAW (Read After Write) = true data dependency. Instruction needs result from previous instruction that hasn't finished writing. Example: ADD R1,R2,R3; SUB R4,R1,R5 - SUB needs R1 from ADD. Can't eliminate, must wait or use forwarding. Most common hazard type."
        }
    },
    {
        id: "coa-pipe-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Write After Read (WAR) hazard is also called:",
        options: ["True dependency", "Anti-dependency", "Output dependency", "Structural hazard"],
        correctAnswer: 1,
        explanation: {
            solution: "WAR (Write After Read) = anti-dependency. Later instruction writes before earlier instruction reads. Example: ADD R1,R2,R3; SUB R2,R4,R5 - if SUB writes R2 before ADD reads it, wrong value. Occurs in out-of-order execution. Solved by register renaming."
        }
    },
    {
        id: "coa-pipe-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Operand forwarding (bypassing) reduces stalls by:",
        options: ["Eliminating all hazards", "Passing results directly without waiting for write-back", "Using more stages", "Removing memory access"],
        correctAnswer: 1,
        explanation: {
            solution: "Forwarding/bypassing: ALU result from EX stage sent directly to dependent instruction's ALU input, bypassing WB stage. Eliminates stall for many RAW hazards. Hardware: muxes select forwarded value. Doesn't help load-use hazard (data from MEM stage comes too late)."
        }
    },
    {
        id: "coa-pipe-013",
        type: "NAT",
        topic: "coa",
        subtopic: "Pipelining",
        question: "A 5-stage pipeline executes 100 instructions with no hazards. Total cycles needed (assume 1 cycle per stage)?",
        correctAnswer: 104,
        tolerance: 0,
        explanation: {
            solution: "Pipeline timing: first instruction takes k cycles to complete (fill pipeline), each subsequent instruction adds 1 cycle. Total = k + (n-1) = 5 + 99 = 104 cycles. Without pipelining: 5×100 = 500 cycles. Speedup ≈ 500/104 ≈ 4.8× (approaches k as n→∞).",
            formula: "$Cycles = k + (n-1) = 5 + 99 = 104$"
        }
    },
    {
        id: "coa-pipe-014",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Branch prediction helps reduce:",
        options: ["Data hazards", "Structural hazards", "Control hazards", "WAR hazards"],
        correctAnswer: 2,
        explanation: {
            solution: "Branch prediction reduces control hazards caused by conditional branches. Without it, pipeline stalls until branch outcome known (EX or MEM stage). Prediction guesses direction early, continues fetching. If wrong, must flush pipeline (misprediction penalty). Modern CPUs: >95% accuracy."
        }
    },
    {
        id: "coa-pipe-015",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Delayed branch technique:",
        options: ["Uses branch prediction", "Executes instruction after branch regardless of outcome", "Stalls the pipeline", "Uses only unconditional branches"],
        correctAnswer: 1,
        explanation: {
            solution: "Delayed branch: instruction in 'delay slot' (immediately after branch) ALWAYS executes, regardless of branch outcome. Compiler fills slot with useful work (instruction from before branch, or from taken path). MIPS uses this. Avoids 1-cycle stall for branches. Less common in modern CPUs."
        }
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
        explanation: {
            solution: "k-way set-associative: divides cache into sets, each with k blocks. Block maps to specific set (like direct), but can go in any of k locations within set (like fully-assoc). Balances hit rate (higher than direct) vs hardware complexity (k comparators per access, not n)."
        }
    },
    {
        id: "coa-mem-011",
        type: "NAT",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "A direct-mapped cache with 64 blocks, where each block is 16 bytes, uses how many index bits?",
        correctAnswer: 6,
        tolerance: 0,
        explanation: {
            solution: "In direct-mapped cache, index bits select which cache line to check. With 64 lines = 2^6, need 6 index bits. Address breakdown: Offset (4 bits for 16-byte block), Index (6 bits for 64 lines), Tag (remaining bits).",
            formula: "$Index\\ bits = \\log_2(64) = 6$"
        }
    },
    {
        id: "coa-mem-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Write-through cache:",
        options: ["Writes only to cache", "Writes to both cache and main memory", "Writes only to main memory", "Never writes"],
        correctAnswer: 1,
        explanation: {
            solution: "Write-through: every write updates BOTH cache and main memory simultaneously. Pros: cache and memory always consistent, simple. Cons: slow (every write waits for memory), more memory bandwidth needed. Often uses write buffer to hide latency."
        }
    },
    {
        id: "coa-mem-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Write-back cache:",
        options: ["Writes to memory immediately", "Writes to cache first, memory on eviction", "Never writes to memory", "Has no dirty bit"],
        correctAnswer: 1,
        explanation: {
            solution: "Write-back: write only to cache, mark block 'dirty'. Write to memory only when dirty block is evicted. Pros: faster writes, less memory traffic. Cons: cache and memory inconsistent, complex recovery on power failure, requires dirty bit per block."
        }
    },
    {
        id: "coa-mem-014",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Cache miss penalty is the time to:",
        options: ["Access cache", "Fetch block from lower level memory", "Write to cache", "Calculate address"],
        correctAnswer: 1,
        explanation: {
            solution: "Miss penalty: additional time when cache miss occurs to fetch block from main memory (or L2/L3). Typically 50-200 cycles. Total miss time = cache access time + miss penalty. Reducing miss penalty: larger block size (prefetching), multiple cache levels, critical word first."
        }
    },
    {
        id: "coa-mem-015",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory Hierarchy",
        question: "Victim cache stores:",
        options: ["All cache blocks", "Most recently used blocks", "Recently evicted blocks", "Instruction blocks only"],
        correctAnswer: 2,
        explanation: {
            solution: "Victim cache: small, fully-associative cache holding recently evicted blocks from main cache. On miss, check victim cache before going to memory. If found there, swap with conflicting block in main cache. Helps with conflict misses in direct-mapped caches. Typically 4-16 entries."
        }
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
        explanation: {
            solution: "Programmed I/O: CPU continuously polls device status register in a loop (busy-waiting) until device ready. Simple but wastes CPU cycles - can't do other work while waiting. Acceptable only for very fast devices or when CPU has nothing else to do."
        }
    },
    {
        id: "coa-io-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "Interrupt-driven I/O frees CPU to do other work because:",
        options: ["Device never needs attention", "Device signals CPU when ready", "DMA handles everything", "There is no I/O"],
        correctAnswer: 1,
        explanation: {
            solution: "Interrupt-driven I/O: CPU initiates I/O then continues other work. When device ready, it sends interrupt signal. CPU suspends current task, handles I/O in interrupt handler, then resumes. Much better CPU utilization than polling. Context switch overhead per data transfer."
        }
    },
    {
        id: "coa-io-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "DMA transfers data:",
        options: ["Through CPU", "Directly between memory and I/O device", "Only within CPU", "Between two CPUs"],
        correctAnswer: 1,
        explanation: {
            solution: "DMA (Direct Memory Access): special hardware controller transfers data between I/O device and memory WITHOUT CPU involvement. CPU sets up transfer (addresses, count), then DMA runs independently. CPU interrupted only when complete. Best for bulk transfers (disk, network)."
        }
    },
    {
        id: "coa-io-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O Organization",
        question: "Cycle stealing in DMA means:",
        options: ["DMA takes all memory cycles", "DMA takes memory cycles when CPU isn't using bus", "CPU steals from DMA", "No cycles are used"],
        correctAnswer: 1,
        explanation: {
            solution: "Cycle stealing: DMA controller 'steals' memory bus cycles from CPU when it needs to transfer data. CPU slightly slowed but not blocked. Alternative: burst mode (DMA takes bus for entire transfer - faster but CPU stalled). Cycle stealing gives better CPU responsiveness."
        }
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
        explanation: {
            solution: "3-address instruction: ADD R1, R2, R3 means R1 ← R2 + R3. Specifies destination and two source operands. Most flexible, preserves source operands. Longer instructions but fewer instructions needed. Common in RISC architectures.",
            formula: "Result = Source1 op Source2"
        }
    },
    {
        id: "coa-isa-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "Opcode expansion allows:",
        options: ["Fixed opcode length", "More instructions by using unused bits", "Fewer instructions", "No operands"],
        correctAnswer: 1,
        explanation: {
            solution: "Opcode expansion: variable-length opcodes. Common instructions get short opcodes, rare instructions get longer ones (using bits from unused operand fields). Huffman-like encoding. Example: if 3 operand fields rarely all used, use unused field bits for expanded opcodes."
        }
    }
]);

console.log("Extended COA questions loaded");
