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
        explanation: {
            solution: "Basic CPU cycle: (1) Fetch - read instruction from memory using PC, store in IR. (2) Decode - control unit interprets opcode, determines operation and operands. (3) Execute - ALU performs operation, results stored. Some architectures add memory access and write-back as separate phases."
        }
    },
    {
        id: "coa2-cpu-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Program Counter (PC) holds:",
        options: ["Data to be processed", "Address of next instruction", "Current result", "Stack pointer"],
        correctAnswer: 1,
        explanation: {
            solution: "Program Counter (PC) / Instruction Pointer (IP): holds memory address of NEXT instruction to fetch. Automatically incremented after fetch. Modified by branches/jumps. Critical for sequential execution - PC determines control flow of program."
        }
    },
    {
        id: "coa2-cpu-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Instruction Register (IR) holds:",
        options: ["Address of next instruction", "Currently executing instruction", "Memory address", "Data value"],
        correctAnswer: 1,
        explanation: {
            solution: "Instruction Register (IR): holds the instruction currently being decoded/executed. Loaded during fetch phase from memory. Contains opcode and operand fields. Control unit decodes IR to generate control signals for datapath."
        }
    },
    {
        id: "coa2-cpu-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Memory Address Register (MAR) holds:",
        options: ["Data from memory", "Address being accessed in memory", "Instruction opcode", "Result of ALU"],
        correctAnswer: 1,
        explanation: {
            solution: "Memory Address Register (MAR): holds the address for memory read/write operations. When CPU wants to access memory, address placed in MAR, then sent to memory address bus. Connected to address bus of memory system."
        }
    },
    {
        id: "coa2-cpu-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Memory Data/Buffer Register (MDR/MBR) holds:",
        options: ["Address to access", "Data read from or to be written to memory", "Instruction", "PC value"],
        correctAnswer: 1,
        explanation: {
            solution: "Memory Data Register (MDR) / Memory Buffer Register (MBR): holds data being transferred to/from memory. On read: receives data from memory. On write: holds data to be written. Connected to data bus of memory system."
        }
    },
    {
        id: "coa2-cpu-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "CPU Architecture",
        question: "Accumulator (AC) is used for:",
        options: ["Storing addresses", "Arithmetic/logic operations result", "Instruction storage", "Stack operations"],
        correctAnswer: 1,
        explanation: {
            solution: "Accumulator (AC): special-purpose register that is the implicit operand/destination for arithmetic and logic operations in accumulator-based architectures. Example: ADD X means AC ← AC + M[X]. Reduces instruction size since one operand is always implied."
        }
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
        explanation: {
            solution: "Immediate addressing: operand VALUE is directly embedded in the instruction. No memory access needed for operand. Fast, but operand size limited to instruction's immediate field. Used for constants. Example: MOV R1, #5 (move constant 5 to R1)."
        }
    },
    {
        id: "coa2-addr-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Direct/Absolute addressing, operand is at:",
        options: ["Address given in instruction", "Next instruction", "Register specified", "Stack top"],
        correctAnswer: 0,
        explanation: {
            solution: "Direct (Absolute) addressing: instruction contains the complete memory address of the operand. EA = address field. One memory access to fetch operand. Simple but limited by address field size and not relocatable.",
            formula: "EA = address field in instruction"
        }
    },
    {
        id: "coa2-addr-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Indirect addressing, the instruction contains:",
        options: ["The operand value", "Address of address of operand", "Register number", "Immediate value"],
        correctAnswer: 1,
        explanation: {
            solution: "Indirect addressing: instruction contains address that points to location holding actual operand address. TWO memory accesses: first fetches pointer, second fetches operand. Useful for pointers, dynamic data structures. Slower but more flexible.",
            formula: "EA = M[address field]"
        }
    },
    {
        id: "coa2-addr-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Register addressing, operand is in:",
        options: ["Memory at address in register", "The register itself", "Stack", "Immediate field"],
        correctAnswer: 1,
        explanation: {
            solution: "Register addressing: operand is in a CPU register specified in instruction. No memory access (very fast). Small register number field (3-5 bits typically). Most common in RISC. Example: ADD R1, R2, R3."
        }
    },
    {
        id: "coa2-addr-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Register Indirect addressing, EA = ?",
        options: ["Register contents", "Address in register points to memory", "Immediate value", "PC + offset"],
        correctAnswer: 1,
        explanation: {
            solution: "Register Indirect: register contains a memory address; operand is at that memory location. EA = [R] (contents of register). One memory access. Good for pointer dereferencing. Example: LOAD R1, (R2) loads from address stored in R2.",
            formula: "EA = [R]"
        }
    },
    {
        id: "coa2-addr-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "In Base+Displacement (Indexed) addressing, EA = ?",
        options: ["Base + Offset", "PC only", "Register only", "Immediate value"],
        correctAnswer: 0,
        explanation: {
            solution: "Base+Displacement: EA = contents of base register + displacement (constant offset in instruction). Used for array access (base=array start, offset=index×size) and structure fields (base=struct pointer, offset=field position).",
            formula: "EA = [Base] + Displacement"
        }
    },
    {
        id: "coa2-addr-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "PC-Relative addressing: EA = ?",
        options: ["PC", "PC + Displacement", "Displacement only", "PC × Displacement"],
        correctAnswer: 1,
        explanation: {
            solution: "PC-Relative: EA = PC + signed displacement. Primarily for branch instructions. Creates position-independent code (PIC) - same code works regardless of memory location. Displacement is typically small (signed 8-16 bits).",
            formula: "EA = PC + offset"
        }
    },
    {
        id: "coa2-addr-008",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Auto-increment addressing after access: R ← ?",
        options: ["R - 1", "R + 1", "R × 2", "R / 2"],
        correctAnswer: 1,
        explanation: {
            solution: "Auto-increment (post-increment): use current register value as EA, THEN increment register by data size. R ← R + sizeof(data). Perfect for array traversal, string operations. Example: (R1)+ means EA=[R1], then R1=R1+word_size."
        }
    },
    {
        id: "coa2-addr-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Which addressing mode requires most memory accesses for operand fetch?",
        options: ["Immediate", "Direct", "Indirect", "Register"],
        correctAnswer: 2,
        explanation: {
            solution: "Indirect requires TWO memory accesses: first access fetches the pointer (address of operand), second access fetches actual operand. Direct needs 1 access. Register and Immediate need 0 accesses (operand in register or instruction respectively)."
        }
    },
    {
        id: "coa2-addr-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Addressing Modes",
        question: "Which addressing mode requires no memory access for operand?",
        options: ["Direct", "Indirect", "Immediate and Register", "Base+Offset"],
        correctAnswer: 2,
        explanation: {
            solution: "Immediate: operand embedded in instruction (fetched with instruction, no extra access). Register: operand already in CPU register (no memory access). Both are fastest. All other modes access memory at least once."
        }
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
        explanation: {
            solution: "RISC = Reduced Instruction Set Computer. Philosophy: keep instructions simple so they execute in one cycle, making pipelining effective. Characteristics: fixed-length instructions, load-store architecture, many registers, hardwired control. Examples: ARM, MIPS, RISC-V, PowerPC."
        }
    },
    {
        id: "coa2-isa-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "CISC stands for:",
        options: ["Complete Instruction Set Computer", "Complex Instruction Set Computer", "Common Instruction Set Computer", "Compiled Instruction Set Computer"],
        correctAnswer: 1,
        explanation: {
            solution: "CISC = Complex Instruction Set Computer. Philosophy: complex instructions closer to high-level language constructs, fewer instructions per program. Characteristics: variable-length instructions, memory operands in ALU, microprogrammed control. Main example: x86."
        }
    },
    {
        id: "coa2-isa-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "RISC typically has:",
        options: ["Many complex instructions", "Few simple instructions, fixed length", "Variable length instructions", "Memory-to-memory operations"],
        correctAnswer: 1,
        explanation: {
            solution: "RISC characteristics: simple instructions (complete in one cycle), fixed-length (easy to decode, good for pipeline), load-store architecture (only load/store access memory, ALU uses registers only), many general-purpose registers (reduce memory traffic), hardwired control unit."
        }
    },
    {
        id: "coa2-isa-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "CISC typically supports:",
        options: ["Only register operations", "Memory-to-memory operations", "Fixed instruction length", "Only load/store memory access"],
        correctAnswer: 1,
        explanation: {
            solution: "CISC allows memory operands directly in arithmetic/logic instructions (ADD [M1], [M2]). Variable instruction lengths (1-15 bytes in x86). Complex addressing modes. Multiple cycles per instruction. Microprogrammed control. Fewer registers (register pressure)."
        }
    },
    {
        id: "coa2-isa-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "In 3-address instruction format: ADD R1, R2, R3 means:",
        options: ["R1 = R2 + R3", "R3 = R1 + R2", "R2 = R1 + R3", "R1 = R1 + R2"],
        correctAnswer: 0,
        explanation: {
            solution: "3-address format: specifies destination and two source operands. ADD R1, R2, R3 means R1 ← R2 + R3. Most flexible - preserves source operands. Needs more bits per instruction but cleaner programming. Common in RISC (e.g., ARM, MIPS).",
            formula: "R1 ← R2 + R3"
        }
    },
    {
        id: "coa2-isa-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Instruction Set",
        question: "In 0-address (stack) machine, operands come from:",
        options: ["Registers", "Memory addresses", "Stack top", "Immediate only"],
        correctAnswer: 2,
        explanation: {
            solution: "0-address (stack) architecture: no operand addresses in instruction. Operands implicitly on stack. ADD pops two values, pushes sum. Very compact code. Used by JVM, PostScript, old HP calculators. Limited optimization opportunities but natural for recursive languages."
        }
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
        explanation: {
            solution: "Classic 5-stage RISC pipeline: IF (Instruction Fetch), ID (Instruction Decode + Register Read), EX (Execute/ALU), MEM (Memory Access), WB (Write Back to register). Each stage takes one clock cycle. Ideal: one instruction completes per cycle in steady state."
        }
    },
    {
        id: "coa2-pipe-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Ideal speedup with k-stage pipeline is:",
        options: ["k", "k/2", "k²", "log k"],
        correctAnswer: 0,
        explanation: {
            solution: "Ideal speedup is k (k times faster than non-pipelined). In steady state, one instruction completes every cycle vs k cycles without pipelining. Actual speedup is less due to hazards, pipeline stalls, and fill/drain overhead for short instruction sequences.",
            formula: "$Speedup_{ideal} = k$"
        }
    },
    {
        id: "coa2-pipe-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "For n instructions in k-stage pipeline, total cycles = ?",
        options: ["n × k", "n + k", "k + (n-1)", "n - k"],
        correctAnswer: 2,
        explanation: {
            solution: "Pipeline timing: first instruction takes k cycles to complete (filling pipeline). Each subsequent instruction adds just 1 cycle. Total = k + (n-1). For large n, throughput approaches 1 instruction/cycle.",
            formula: "$Cycles = k + (n-1)$"
        }
    },
    {
        id: "coa2-pipe-004",
        type: "NAT",
        topic: "coa",
        subtopic: "Pipelining",
        question: "In 5-stage pipeline, time to complete 100 instructions (ignoring hazards) = k + (n-1) = ?",
        correctAnswer: 104,
        tolerance: 0,
        explanation: {
            solution: "k + (n-1) = 5 + (100-1) = 5 + 99 = 104 cycles. Without pipelining: 5 × 100 = 500 cycles. Actual speedup = 500/104 ≈ 4.8× (close to ideal k=5). As n→∞, speedup approaches k.",
            formula: "$5 + 99 = 104$ cycles"
        }
    },
    {
        id: "coa2-pipe-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Throughput of ideal k-stage pipeline (1 instruction per cycle) is:",
        options: ["k instructions/cycle", "1 instruction/cycle", "1/k instructions/cycle", "k² instructions/cycle"],
        correctAnswer: 1,
        explanation: {
            solution: "Ideal pipeline throughput: 1 instruction completes per cycle in steady state, regardless of k. More stages give faster cycle time (each stage does less work), but same throughput of 1 instruction/cycle. Total instructions/second = 1/cycle_time."
        }
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
        explanation: {
            solution: "Three hazard types: (1) Structural - resource conflicts (e.g., single memory port for both IF and MEM). (2) Data - dependencies between instructions (RAW, WAR, WAW). (3) Control - branches disrupt sequential fetch. All cause pipeline stalls or require special handling."
        }
    },
    {
        id: "coa2-haz-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Structural hazard occurs when:",
        options: ["Data not ready", "Same resource needed by multiple stages", "Branch prediction fails", "Memory is full"],
        correctAnswer: 1,
        explanation: {
            solution: "Structural hazard: hardware resource conflict. Example: single-port memory accessed by both instruction fetch (IF) and data access (MEM) in same cycle. Solution: duplicate resources (separate I-cache and D-cache), or stall pipeline. Most modern CPUs design to avoid structural hazards."
        }
    },
    {
        id: "coa2-haz-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "RAW (Read After Write) hazard is a type of:",
        options: ["Structural hazard", "Data hazard", "Control hazard", "Memory hazard"],
        correctAnswer: 1,
        explanation: {
            solution: "RAW = Read After Write = true data dependency. Later instruction reads register that earlier instruction writes. Can't get correct value until write completes. Example: ADD R1,R2,R3; SUB R4,R1,R5. SUB needs R1 from ADD. Most common and problematic hazard."
        }
    },
    {
        id: "coa2-haz-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "WAR (Write After Read) hazard is called:",
        options: ["True dependency", "Anti-dependency", "Output dependency", "Resource dependency"],
        correctAnswer: 1,
        explanation: {
            solution: "WAR = Write After Read = anti-dependency. Later instruction writes register before earlier instruction reads it. Can't happen in simple in-order pipeline (read in ID before write in WB). Problem in out-of-order execution. Solved by register renaming."
        }
    },
    {
        id: "coa2-haz-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "WAW (Write After Write) hazard is called:",
        options: ["True dependency", "Anti-dependency", "Output dependency", "Control dependency"],
        correctAnswer: 2,
        explanation: {
            solution: "WAW = Write After Write = output dependency. Two instructions write same register - must complete in program order for correct final value. Can't happen in simple 5-stage pipeline (only one WB per instruction flow). Problem in out-of-order or superscalar. Solved by register renaming."
        }
    },
    {
        id: "coa2-haz-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Forwarding/Bypassing is used to resolve:",
        options: ["Structural hazards", "Data hazards", "Control hazards", "All hazards"],
        correctAnswer: 1,
        explanation: {
            solution: "Forwarding (bypassing): resolves RAW data hazards by sending ALU result directly from EX/MEM stage to dependent instruction's ALU input, bypassing the WB stage and register file. Eliminates stalls for most arithmetic dependencies. Doesn't help load-use hazard (data available after MEM, not EX)."
        }
    },
    {
        id: "coa2-haz-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Stalling (inserting NOPs/bubbles) is used when:",
        options: ["Forwarding can solve hazard", "Hazard cannot be resolved by forwarding", "There is no hazard", "For all instructions"],
        correctAnswer: 1,
        explanation: {
            solution: "Stalling needed when forwarding can't help. Example: load-use hazard - LW R1,0(R2) followed by ADD R3,R1,R4. Data not available until end of MEM stage, but ADD needs it at start of EX. Must insert 1 stall cycle (bubble/NOP). Compiler can reorder to avoid."
        }
    },
    {
        id: "coa2-haz-008",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Control hazard is caused by:",
        options: ["Data dependency", "Resource conflict", "Branch instructions", "Memory access"],
        correctAnswer: 2,
        explanation: {
            solution: "Control hazard: branch/jump changes program flow. By the time branch outcome is known (EX or later), wrong instructions may have been fetched. Must flush incorrect instructions (penalty). Solutions: delayed branch, branch prediction, or always stall until outcome known."
        }
    },
    {
        id: "coa2-haz-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Branch prediction helps reduce:",
        options: ["Data hazards", "Structural hazards", "Control hazards", "WAR hazards"],
        correctAnswer: 2,
        explanation: {
            solution: "Branch prediction guesses branch outcome and continues fetching speculatively. If correct, no penalty. If wrong, must flush misfetched instructions (penalty = pipeline depth). Modern predictors achieve >95% accuracy using history patterns. Critical for deep pipelines."
        }
    },
    {
        id: "coa2-haz-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Pipelining",
        question: "Branch penalty is the number of cycles lost when:",
        options: ["Prediction is correct", "Prediction is wrong", "Pipeline has no branches", "Memory stall occurs"],
        correctAnswer: 1,
        explanation: {
            solution: "Misprediction penalty: cycles wasted on wrong-path instructions that must be flushed. Penalty typically equals stages between fetch and branch resolution. Deeper pipelines have higher misprediction penalty. Critical to minimize mispredictions in high-performance CPUs."
        }
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
        explanation: {
            solution: "Memory hierarchy (fast to slow, small to large): Registers (~1 cycle, bytes) > L1 Cache (~2-4 cycles, 32KB) > L2 Cache (~10-20 cycles, 256KB) > L3 Cache (~30-50 cycles, MBs) > Main Memory (~100-300 cycles, GBs) > Disk/SSD (millions of cycles, TBs)."
        }
    },
    {
        id: "coa2-mem-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache memory exploits:",
        options: ["Spatial locality only", "Temporal locality only", "Both spatial and temporal locality", "Neither"],
        correctAnswer: 2,
        explanation: {
            solution: "Caches exploit BOTH: Temporal locality - recently accessed data likely accessed again soon (keep in cache). Spatial locality - data near recently accessed data likely accessed soon (fetch entire block). Together enable very high hit rates (>95%) for typical programs."
        }
    },
    {
        id: "coa2-mem-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache hit ratio h means:",
        options: ["h% of accesses miss", "h% of accesses found in cache", "h% of cache is full", "h% of memory is cached"],
        correctAnswer: 1,
        explanation: {
            solution: "Hit ratio (h) = fraction of memory accesses found in cache = Hits/(Hits+Misses). Miss ratio = 1-h. A 95% hit ratio means 95% of accesses don't need to go to slower memory. Even small improvements in hit ratio significantly improve performance.",
            formula: "$h = \\frac{Hits}{Hits + Misses}$"
        }
    },
    {
        id: "coa2-mem-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Effective Access Time (EAT) = ?",
        options: ["h × Tc + (1-h) × Tm", "h × Tc + (1-h) × (Tc + Tm)", "Tc + Tm", "h × Tm"],
        correctAnswer: 1,
        explanation: {
            solution: "EAT = h×Tc + (1-h)×(Tc + Tm). On hit (probability h): access cache only (Tc). On miss (probability 1-h): access cache first (Tc), then memory (Tm). This assumes cache checked before memory. Alternative formula if miss penalty given directly: EAT = Tc + (1-h)×penalty.",
            formula: "$EAT = h \\cdot T_c + (1-h) \\cdot (T_c + T_m)$"
        }
    },
    {
        id: "coa2-mem-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In Direct Mapped cache, each memory block maps to:",
        options: ["Any cache line", "Exactly one cache line", "Two cache lines", "All cache lines"],
        correctAnswer: 1,
        explanation: {
            solution: "Direct mapped: each memory block maps to exactly one specific cache line. Line = (block_address) mod (number_of_lines). Simple, fast (no searching), but conflict misses possible (two blocks mapping to same line keep evicting each other).",
            formula: "Line = Block mod NumLines"
        }
    },
    {
        id: "coa2-mem-006",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In Fully Associative cache, a memory block can go to:",
        options: ["Only one specific line", "Any cache line", "Only even lines", "Only odd lines"],
        correctAnswer: 1,
        explanation: {
            solution: "Fully associative: block can be placed in ANY cache line. Maximum flexibility, minimum conflict misses. But: must search all lines in parallel (need n comparators for n lines). Expensive, power-hungry. Used for small caches like TLB."
        }
    },
    {
        id: "coa2-mem-007",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In n-way Set Associative cache, each block maps to:",
        options: ["1 line", "n lines in one set", "All lines", "Random lines"],
        correctAnswer: 1,
        explanation: {
            solution: "n-way set associative: cache divided into sets, each with n lines. Block maps to specific set (by address), can go in any of n lines within that set. Compromise: less hardware than fully associative, fewer conflicts than direct mapped. Common: 4-way, 8-way.",
            formula: "Set = Block mod NumSets"
        }
    },
    {
        id: "coa2-mem-008",
        type: "NAT",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache with 64 lines and 4-way set associative has how many sets?",
        correctAnswer: 16,
        tolerance: 0,
        explanation: {
            solution: "Number of sets = Total lines / Ways per set = 64 / 4 = 16 sets. Each set contains 4 lines. Index bits needed = log₂(16) = 4 bits to select among 16 sets.",
            formula: "$Sets = \\frac{64}{4} = 16$"
        }
    },
    {
        id: "coa2-mem-009",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache address is divided into:",
        options: ["Tag only", "Tag, Index, Offset", "Tag, Data", "Address only"],
        correctAnswer: 1,
        explanation: {
            solution: "Address breakdown: Tag (identifies which block, compared to stored tags) | Index (selects cache set/line to check) | Offset (selects byte within block). Index bits = log₂(sets). Offset bits = log₂(block_size). Tag = remaining bits."
        }
    },
    {
        id: "coa2-mem-010",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "In Direct Mapped cache: Index bits = ?",
        options: ["log₂(cache size)", "log₂(number of lines)", "log₂(block size)", "log₂(sets × ways)"],
        correctAnswer: 1,
        explanation: {
            solution: "In direct-mapped cache, index bits select which line to check. With L lines: index bits = log₂(L). Example: 256 lines → 8 index bits. In set-associative: index selects set, so bits = log₂(number_of_sets).",
            formula: "$Index\\ bits = \\log_2(lines)$"
        }
    },
    {
        id: "coa2-mem-011",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Block offset bits = ?",
        options: ["log₂(cache size)", "log₂(number of lines)", "log₂(block size)", "log₂(memory size)"],
        correctAnswer: 2,
        explanation: {
            solution: "Block offset bits address bytes within a cache block. With block size B bytes: offset = log₂(B) bits. Example: 64-byte block → 6 offset bits. Offset is the least significant bits of the address.",
            formula: "$Offset\\ bits = \\log_2(block\\ size)$"
        }
    },
    {
        id: "coa2-mem-012",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Cache replacement policy LRU means:",
        options: ["Last Recently Used", "Least Recently Used", "Longest Running Used", "Lowest Read Used"],
        correctAnswer: 1,
        explanation: {
            solution: "LRU = Least Recently Used. On miss in full set, evict the block that hasn't been accessed for the longest time. Based on temporal locality - recently used blocks likely to be used again. Requires tracking access order. Common alternative: pseudo-LRU (approximate, simpler)."
        }
    },
    {
        id: "coa2-mem-013",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Write-through cache policy:",
        options: ["Writes only to cache", "Writes to both cache and memory simultaneously", "Writes only to memory", "Never writes"],
        correctAnswer: 1,
        explanation: {
            solution: "Write-through: every write updates BOTH cache and main memory. Pros: cache always consistent with memory, simple recovery. Cons: slow (memory write on every store), high memory bandwidth. Often uses write buffer to partially hide latency."
        }
    },
    {
        id: "coa2-mem-014",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Write-back cache policy:",
        options: ["Writes to memory immediately", "Writes only to cache, updates memory on eviction", "Never writes to cache", "Writes to disk"],
        correctAnswer: 1,
        explanation: {
            solution: "Write-back: write only to cache, mark block 'dirty'. Memory updated only when dirty block is evicted. Pros: faster writes, less memory traffic. Cons: cache-memory inconsistency, complex error recovery. Needs dirty bit per block. Most common in modern CPUs."
        }
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
        explanation: {
            solution: "Virtual memory: programs can be larger than physical RAM. Only needed pages kept in memory, rest on disk. Also provides: memory protection between processes, simplified memory allocation, shared libraries. Requires address translation (page table) and page fault handling."
        }
    },
    {
        id: "coa2-vm-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Page table maps:",
        options: ["Physical to virtual addresses", "Virtual to physical addresses", "Cache to memory", "Memory to disk"],
        correctAnswer: 1,
        explanation: {
            solution: "Page table: maps virtual page numbers to physical frame numbers. Indexed by virtual page number, contains: frame number, valid bit, protection bits, dirty bit, etc. One page table per process. Creates illusion that each process has its own large, contiguous address space.",
            formula: "Physical = PageTable[VirtualPage] + Offset"
        }
    },
    {
        id: "coa2-vm-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "TLB (Translation Lookaside Buffer) is a cache for:",
        options: ["Data", "Instructions", "Page table entries", "Disk blocks"],
        correctAnswer: 2,
        explanation: {
            solution: "TLB caches recently used page table entries (virtual→physical mappings). Without TLB: every memory access needs page table lookup first (in memory). With TLB hit: direct translation, no extra memory access. TLB is small (16-512 entries), fully associative, very fast."
        }
    },
    {
        id: "coa2-vm-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "Memory",
        question: "Page fault occurs when:",
        options: ["Page in memory", "Page not in physical memory", "TLB hit", "Cache hit"],
        correctAnswer: 1,
        explanation: {
            solution: "Page fault: accessed page not currently in physical memory (valid bit = 0). OS handles: find page on disk (swap space), allocate free frame, load page, update page table, restart instruction. Very expensive (millions of cycles for disk I/O). Minimized by good page replacement algorithms."
        }
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
        explanation: {
            solution: "Programmed I/O: CPU continuously polls (busy-waits) device status register. Loop: read status → if not ready, repeat. Wastes CPU cycles. Simple but inefficient. Only acceptable for very fast devices or when CPU has nothing else to do."
        }
    },
    {
        id: "coa2-io-002",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "Interrupt-driven I/O means:",
        options: ["CPU polls continuously", "Device signals CPU when ready", "CPU ignores device", "Direct memory access"],
        correctAnswer: 1,
        explanation: {
            solution: "Interrupt-driven I/O: CPU initiates I/O, continues other work. Device sends interrupt when ready. CPU stops current task, runs interrupt handler, handles I/O, returns to previous task. Much better CPU utilization than polling. Context switch overhead per interrupt."
        }
    },
    {
        id: "coa2-io-003",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "DMA (Direct Memory Access) allows:",
        options: ["CPU to access device registers", "Device to transfer data to memory without CPU", "Only programmed I/O", "Device to control CPU"],
        correctAnswer: 1,
        explanation: {
            solution: "DMA: hardware controller transfers data directly between I/O device and memory, bypassing CPU. CPU sets up transfer (source/destination addresses, count), then DMA runs independently. CPU interrupted only when transfer complete. Best for bulk data (disk, network)."
        }
    },
    {
        id: "coa2-io-004",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "Memory-mapped I/O means:",
        options: ["I/O devices have separate address space", "I/O devices share memory address space", "Memory is on the I/O device", "No I/O possible"],
        correctAnswer: 1,
        explanation: {
            solution: "Memory-mapped I/O: device registers accessed using regular memory addresses - same instructions as memory access (LOAD, STORE). Part of address space reserved for I/O. Simpler hardware and software, but uses up address space. Common in RISC architectures."
        }
    },
    {
        id: "coa2-io-005",
        type: "MCQ",
        topic: "coa",
        subtopic: "I/O",
        question: "I/O-mapped I/O (port-mapped) uses:",
        options: ["Same address space as memory", "Separate I/O address space and special instructions", "No addresses", "Only registers"],
        correctAnswer: 1,
        explanation: {
            solution: "Port-mapped I/O: separate I/O address space accessed with special instructions (IN, OUT in x86). Dedicated I/O bus or separate address line for I/O. Keeps memory address space clean for memory. More complex hardware. Common in CISC (x86)."
        }
    }
]);

console.log("Exhaustive COA loaded - ~65 questions");
