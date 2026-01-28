Questions.register([
    {
        "id": "coa-pipe-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "The maximum speedup achievable by a K-stage pipeline is:",
        "options": [
            "2K",
            "K+1",
            "K-1",
            "K"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Pipeline speedup = (Time without pipeline)/(Time with pipeline). For n tasks with K stages: Without pipeline = n×K cycles. With pipeline = K + n - 1 cycles. Speedup = nK/(K+n-1). As n→∞, speedup → K. Theoretical maximum equals the number of stages, achieved only with infinite tasks and no hazards.",
            "formula": "$S = \\frac{nK}{K+n-1}$, $S_{max} = K$ as $n \\rightarrow \\infty$"
        }
    },
    {
        "id": "coa-pipe-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "A K-stage pipeline with n tasks requires how many clock cycles?",
        "options": [
            "K + n",
            "K × n",
            "K + n - 1",
            "K × (n - 1)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "First task requires K cycles to flow through all stages. Each subsequent task adds only 1 cycle (it follows right behind). Total = K + (n-1) = K + n - 1 cycles. This is the 'filling and draining' overhead of the pipeline. With n=1, time = K (same as non-pipelined).",
            "formula": "$Cycles = K + n - 1$"
        }
    },
    {
        "id": "coa-pipe-003",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "A data hazard occurs when:",
        "options": [
            "Two instructions compete for the same memory location",
            "An instruction depends on the result of a previous instruction still in the pipeline",
            "The pipeline is empty",
            "A branch instruction is encountered"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Data hazards: RAW, WAR, WAW. RAW most common - result dependency.",
            "formula": "Hazards: RAW (Read After Write), WAR, WAW"
        }
    },
    {
        "id": "coa-pipe-004",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "Operand forwarding (data forwarding) is used to:",
        "options": [
            "Handle branch instructions",
            "Increase pipeline stages",
            "Increase clock frequency",
            "Reduce data hazard stalls by bypassing register file"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Forwarding adds hardware paths to send ALU result directly to where it's needed in a subsequent instruction, without waiting for writeback to register file. Example: ADD R1,R2,R3 followed by SUB R4,R1,R5 - the R1 value is forwarded from ADD's ALU output to SUB's ALU input. Eliminates many stalls but adds MUXes and control logic."
        }
    },
    {
        "id": "coa-pipe-005",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "A 5-stage pipeline executes 100 instructions. How many clock cycles are needed (assuming no hazards)?",
        "correctAnswer": 104,
        "tolerance": 0,
        "explanation": {
            "solution": "Using the formula: Cycles = K + n - 1 = 5 + 100 - 1 = 104 cycles. First instruction takes 5 cycles (through all stages), then each of 99 remaining instructions adds 1 cycle each. Pipeline efficiency = (100×5)/104 ≈ 96% (approaches 100% as n increases).",
            "formula": "$K + n - 1 = 5 + 100 - 1 = 104$"
        }
    },
    {
        "id": "coa-mem-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "In a cache, a 'hit' occurs when:",
        "options": [
            "The required data is found in cache",
            "A write operation happens",
            "The required data is not in cache",
            "The cache is full"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Cache hit: requested data is found in cache (fast access, ~1-2 cycles). Cache miss: data not in cache, must fetch from main memory (slow, ~100+ cycles for DRAM). Hit rate = hits/(hits+misses). High hit rate (95%+) is crucial for performance. Exploits temporal and spatial locality of programs."
        }
    },
    {
        "id": "coa-mem-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "In direct-mapped cache, each memory block can go to:",
        "options": [
            "Any cache line",
            "Any line in a specific set",
            "Two different cache lines",
            "Exactly one specific cache line"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Direct-mapped: each memory block maps to exactly one cache line, determined by (block address) mod (number of lines). Simple and fast lookup, but prone to conflict misses - two frequently used blocks mapping to same line keep evicting each other. Fully associative (any line) and set-associative (any line in a set) reduce conflicts.",
            "formula": "Line = (Block address) mod (Number of lines)"
        }
    },
    {
        "id": "coa-mem-003",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "Write-through vs Write-back: In write-through policy,",
        "options": [
            "No writes are allowed",
            "Data is written to both cache and main memory simultaneously",
            "Data is written to main memory only when cache line is replaced",
            "Data is written only to cache"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Write-through: every write updates both cache AND memory immediately. Simpler, memory always consistent, but slower (memory write latency on every write). Write-back: writes go only to cache (set dirty bit), memory updated only when line is evicted. Faster (batch writes) but complex (dirty bit tracking, coherence issues in multiprocessor)."
        }
    },
    {
        "id": "coa-mem-004",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "A cache has hit rate 90% with hit time 1 cycle and miss penalty 100 cycles. What is the average memory access time (AMAT) in cycles?",
        "correctAnswer": 10.9,
        "tolerance": 0.1,
        "explanation": {
            "solution": "AMAT = Hit time + Miss rate × Miss penalty = 1 + 0.10 × 100 = 1 + 10 = 11 cycles. Some definitions: AMAT = (Hit rate × Hit time) + (Miss rate × Miss time) = 0.9×1 + 0.1×(1+100) = 0.9 + 10.1 = 11 (or 10.9 depending on whether miss time includes hit time). AMAT determines effective memory speed.",
            "formula": "AMAT = Hit time + Miss rate × Miss penalty"
        }
    },
    {
        "id": "coa-addr-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Addressing Modes",
        "question": "In immediate addressing mode, the operand is:",
        "options": [
            "In memory",
            "Computed at runtime",
            "Part of the instruction itself",
            "In a register"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Immediate addressing: operand value is encoded directly in the instruction (e.g., MOV R1, #5). No memory access needed - fastest mode. But operand size is limited by instruction encoding (typically 8-16 bits in RISC). Used for constants, loop counters, offsets. Cannot modify the operand at runtime."
        }
    },
    {
        "id": "coa-addr-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Addressing Modes",
        "question": "In register indirect addressing, the register contains:",
        "options": [
            "The operand value",
            "The opcode",
            "The address of the operand",
            "Nothing useful"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Register indirect: register holds a memory address; operand is at that address. Like dereferencing a pointer in C (*ptr). Example: MOV R1, [R2] - R2 contains address, R1 gets value from memory location in R2. Allows dynamic addressing, array access, data structure traversal. One level of indirection."
        }
    },
    {
        "id": "coa-io-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "I/O Organization",
        "question": "In DMA (Direct Memory Access), data transfer between I/O and memory occurs:",
        "options": [
            "Through CPU using interrupts",
            "Only one byte at a time",
            "Directly without CPU intervention",
            "Through the CPU using programmed I/O"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DMA: CPU sets up DMA controller (source, destination, count), then DMA handles the entire block transfer independently. CPU is free for other work during transfer. DMA controller takes control of system bus (cycle stealing or burst mode). Much faster than programmed I/O (CPU moves each byte) or interrupt-driven I/O (interrupt per byte)."
        }
    },
    {
        "id": "coa-io-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "I/O Organization",
        "question": "Memory-mapped I/O means:",
        "options": [
            "Only memory can be accessed",
            "I/O devices share the same address space as memory",
            "I/O operations are disabled",
            "I/O devices have separate address space"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Memory-mapped I/O: I/O device registers appear at memory addresses. Same load/store instructions access both memory and I/O. Simpler (no special I/O instructions) and can use memory addressing modes. Downside: some address space is 'used up' by I/O. Alternative: port-mapped I/O (separate address space, special IN/OUT instructions)."
        }
    },
    {
        "id": "coa-cpu-010",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "CPU Architecture",
        "question": "RISC architecture has:",
        "options": [
            "Simple instructions, many registers",
            "No registers",
            "Variable instruction length",
            "Complex instructions, few registers"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "RISC (Reduced Instruction Set Computer): simple, fixed-length instructions; many general-purpose registers (32+); load-store architecture (only load/store access memory); most operations complete in one cycle; hardwired control; optimized for pipelining. Examples: ARM, MIPS, RISC-V."
        }
    },
    {
        "id": "coa-cpu-011",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "CPU Architecture",
        "question": "CISC architecture typically has:",
        "options": [
            "Fixed instruction length",
            "Variable instruction length",
            "No microcode",
            "Only ADD instruction"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "CISC (Complex Instruction Set Computer): variable-length instructions (1-15 bytes); complex operations in single instruction; memory operands in ALU ops; fewer registers; microprogrammed control. Complex decoding makes pipelining harder. Examples: x86, VAX."
        }
    },
    {
        "id": "coa-cpu-012",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "CPU Architecture",
        "question": "Accumulator-based architecture uses:",
        "options": [
            "Many general-purpose registers",
            "One special register (accumulator) for operations",
            "Stack only",
            "No registers"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Accumulator architecture: one operand is always the accumulator register. Instructions like ADD X mean: AC ← AC + M[X]. Simple, short instructions, but bottleneck at accumulator. Many early computers used this design. Now superseded by general-purpose register architectures."
        }
    },
    {
        "id": "coa-cpu-013",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "CPU Architecture",
        "question": "Stack-based architecture uses _____ for operands:",
        "options": [
            "Top of stack",
            "Registers",
            "Accumulator",
            "Memory only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Stack machine: 0-address instructions. Operands implicitly pushed/popped from stack. ADD means: push (pop + pop). Very compact code, good for recursive languages, but limited parallelism and compiler optimization difficulty. Examples: JVM, Forth, some old calculators."
        }
    },
    {
        "id": "coa-addr-010",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Addressing Modes",
        "question": "In auto-increment addressing mode, register value:",
        "options": [
            "Stays same after access",
            "Increments after memory access",
            "Decrements",
            "Multiplied by 2"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Auto-increment: EA = R, then R = R + d (where d = data size). Used after the access. Useful for array traversal: (R)+ accesses array element and advances pointer. Auto-decrement: R = R - d, then EA = R containing the new value (pre-decrement). Both reduce instruction count for loops.",
            "formula": "EA = R; R ← R + sizeof(data)"
        }
    },
    {
        "id": "coa-addr-011",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Addressing Modes",
        "question": "Base + offset addressing is useful for accessing:",
        "options": [
            "Stack",
            "Array elements",
            "Structure fields with base pointer",
            "Constants"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Base + displacement: EA = Base_Register + constant_offset. Perfect for struct/record access: base points to struct start, offset is field position. Also good for stack frames: FP + offset accesses local variables. Compiler knows offsets at compile time, calculates at runtime.",
            "formula": "EA = [Base] + displacement"
        }
    },
    {
        "id": "coa-addr-012",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Addressing Modes",
        "question": "PC-relative addressing is commonly used for:",
        "options": [
            "Array access",
            "Branch instructions",
            "Stack operations",
            "Arithmetic"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "PC-relative: EA = PC + signed displacement. Used for branch/jump instructions. Allows position-independent code (PIC) - code works regardless of load address. Displacement is typically small (fits in instruction), so branches are usually within a few hundred bytes.",
            "formula": "EA = PC + offset"
        }
    },
    {
        "id": "coa-pipe-010",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "Read After Write (RAW) hazard is also called:",
        "options": [
            "True dependency",
            "Control dependency",
            "Anti-dependency",
            "Output dependency"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "RAW (Read After Write) = true data dependency. Instruction needs result from previous instruction that hasn't finished writing. Example: ADD R1,R2,R3; SUB R4,R1,R5 - SUB needs R1 from ADD. Can't eliminate, must wait or use forwarding. Most common hazard type."
        }
    },
    {
        "id": "coa-pipe-011",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "Write After Read (WAR) hazard is also called:",
        "options": [
            "Structural hazard",
            "True dependency",
            "Anti-dependency",
            "Output dependency"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "WAR (Write After Read) = anti-dependency. Later instruction writes before earlier instruction reads. Example: ADD R1,R2,R3; SUB R2,R4,R5 - if SUB writes R2 before ADD reads it, wrong value. Occurs in out-of-order execution. Solved by register renaming."
        }
    },
    {
        "id": "coa-pipe-012",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "Operand forwarding (bypassing) reduces stalls by:",
        "options": [
            "Passing results directly without waiting for write-back",
            "Removing memory access",
            "Using more stages",
            "Eliminating all hazards"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Forwarding/bypassing: ALU result from EX stage sent directly to dependent instruction's ALU input, bypassing WB stage. Eliminates stall for many RAW hazards. Hardware: muxes select forwarded value. Doesn't help load-use hazard (data from MEM stage comes too late)."
        }
    },
    {
        "id": "coa-pipe-013",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "A 5-stage pipeline executes 100 instructions with no hazards. Total cycles needed (assume 1 cycle per stage)?",
        "correctAnswer": 104,
        "tolerance": 0,
        "explanation": {
            "solution": "Pipeline timing: first instruction takes k cycles to complete (fill pipeline), each subsequent instruction adds 1 cycle. Total = k + (n-1) = 5 + 99 = 104 cycles. Without pipelining: 5×100 = 500 cycles. Speedup ≈ 500/104 ≈ 4.8× (approaches k as n→∞).",
            "formula": "$Cycles = k + (n-1) = 5 + 99 = 104$"
        }
    },
    {
        "id": "coa-pipe-014",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "Branch prediction helps reduce:",
        "options": [
            "Control hazards",
            "WAR hazards",
            "Structural hazards",
            "Data hazards"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Branch prediction reduces control hazards caused by conditional branches. Without it, pipeline stalls until branch outcome known (EX or MEM stage). Prediction guesses direction early, continues fetching. If wrong, must flush pipeline (misprediction penalty). Modern CPUs: >95% accuracy."
        }
    },
    {
        "id": "coa-pipe-015",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Pipelining",
        "question": "Delayed branch technique:",
        "options": [
            "Executes instruction after branch regardless of outcome",
            "Stalls the pipeline",
            "Uses only unconditional branches",
            "Uses branch prediction"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Delayed branch: instruction in 'delay slot' (immediately after branch) ALWAYS executes, regardless of branch outcome. Compiler fills slot with useful work (instruction from before branch, or from taken path). MIPS uses this. Avoids 1-cycle stall for branches. Less common in modern CPUs."
        }
    },
    {
        "id": "coa-mem-010",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "Set-associative cache is a compromise between:",
        "options": [
            "SRAM and DRAM",
            "RAM and ROM",
            "L1 and L2 cache",
            "Direct-mapped and fully-associative"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "k-way set-associative: divides cache into sets, each with k blocks. Block maps to specific set (like direct), but can go in any of k locations within set (like fully-assoc). Balances hit rate (higher than direct) vs hardware complexity (k comparators per access, not n)."
        }
    },
    {
        "id": "coa-mem-011",
        "type": "NAT",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "A direct-mapped cache with 64 blocks, where each block is 16 bytes, uses how many index bits?",
        "correctAnswer": 6,
        "tolerance": 0,
        "explanation": {
            "solution": "In direct-mapped cache, index bits select which cache line to check. With 64 lines = 2^6, need 6 index bits. Address breakdown: Offset (4 bits for 16-byte block), Index (6 bits for 64 lines), Tag (remaining bits).",
            "formula": "$Index\\ bits = \\log_2(64) = 6$"
        }
    },
    {
        "id": "coa-mem-012",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "Write-through cache:",
        "options": [
            "Never writes",
            "Writes to both cache and main memory",
            "Writes only to cache",
            "Writes only to main memory"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Write-through: every write updates BOTH cache and main memory simultaneously. Pros: cache and memory always consistent, simple. Cons: slow (every write waits for memory), more memory bandwidth needed. Often uses write buffer to hide latency."
        }
    },
    {
        "id": "coa-mem-013",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "Write-back cache:",
        "options": [
            "Writes to memory immediately",
            "Has no dirty bit",
            "Writes to cache first, memory on eviction",
            "Never writes to memory"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Write-back: write only to cache, mark block 'dirty'. Write to memory only when dirty block is evicted. Pros: faster writes, less memory traffic. Cons: cache and memory inconsistent, complex recovery on power failure, requires dirty bit per block."
        }
    },
    {
        "id": "coa-mem-014",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "Cache miss penalty is the time to:",
        "options": [
            "Calculate address",
            "Fetch block from lower level memory",
            "Access cache",
            "Write to cache"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Miss penalty: additional time when cache miss occurs to fetch block from main memory (or L2/L3). Typically 50-200 cycles. Total miss time = cache access time + miss penalty. Reducing miss penalty: larger block size (prefetching), multiple cache levels, critical word first."
        }
    },
    {
        "id": "coa-mem-015",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Memory Hierarchy",
        "question": "Victim cache stores:",
        "options": [
            "Recently evicted blocks",
            "All cache blocks",
            "Most recently used blocks",
            "Instruction blocks only"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Victim cache: small, fully-associative cache holding recently evicted blocks from main cache. On miss, check victim cache before going to memory. If found there, swap with conflicting block in main cache. Helps with conflict misses in direct-mapped caches. Typically 4-16 entries."
        }
    },
    {
        "id": "coa-io-010",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "I/O Organization",
        "question": "Programmed I/O requires CPU to:",
        "options": [
            "Use DMA",
            "Use interrupts",
            "Do nothing",
            "Wait in loop checking device status"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Programmed I/O: CPU continuously polls device status register in a loop (busy-waiting) until device ready. Simple but wastes CPU cycles - can't do other work while waiting. Acceptable only for very fast devices or when CPU has nothing else to do."
        }
    },
    {
        "id": "coa-io-011",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "I/O Organization",
        "question": "Interrupt-driven I/O frees CPU to do other work because:",
        "options": [
            "DMA handles everything",
            "There is no I/O",
            "Device signals CPU when ready",
            "Device never needs attention"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Interrupt-driven I/O: CPU initiates I/O then continues other work. When device ready, it sends interrupt signal. CPU suspends current task, handles I/O in interrupt handler, then resumes. Much better CPU utilization than polling. Context switch overhead per data transfer."
        }
    },
    {
        "id": "coa-io-012",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "I/O Organization",
        "question": "DMA transfers data:",
        "options": [
            "Between two CPUs",
            "Only within CPU",
            "Directly between memory and I/O device",
            "Through CPU"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "DMA (Direct Memory Access): special hardware controller transfers data between I/O device and memory WITHOUT CPU involvement. CPU sets up transfer (addresses, count), then DMA runs independently. CPU interrupted only when complete. Best for bulk transfers (disk, network)."
        }
    },
    {
        "id": "coa-io-013",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "I/O Organization",
        "question": "Cycle stealing in DMA means:",
        "options": [
            "CPU steals from DMA",
            "DMA takes all memory cycles",
            "DMA takes memory cycles when CPU isn't using bus",
            "No cycles are used"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Cycle stealing: DMA controller 'steals' memory bus cycles from CPU when it needs to transfer data. CPU slightly slowed but not blocked. Alternative: burst mode (DMA takes bus for entire transfer - faster but CPU stalled). Cycle stealing gives better CPU responsiveness."
        }
    },
    {
        "id": "coa-isa-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Instruction Set",
        "question": "A 3-address instruction format specifies:",
        "options": [
            "Only 1 operand",
            "3 destinations",
            "1 source, 1 destination",
            "2 sources, 1 destination"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "3-address instruction: ADD R1, R2, R3 means R1 ← R2 + R3. Specifies destination and two source operands. Most flexible, preserves source operands. Longer instructions but fewer instructions needed. Common in RISC architectures.",
            "formula": "Result = Source1 op Source2"
        }
    },
    {
        "id": "coa-isa-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Instruction Set",
        "question": "Opcode expansion allows:",
        "options": [
            "Fewer instructions",
            "Fixed opcode length",
            "No operands",
            "More instructions by using unused bits"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Opcode expansion: variable-length opcodes. Common instructions get short opcodes, rare instructions get longer ones (using bits from unused operand fields). Huffman-like encoding. Example: if 3 operand fields rarely all used, use unused field bits for expanded opcodes."
        }
    },
    {
        "id": "coa3-cache-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "In direct mapping, block j of main memory maps to cache block:",
        "options": [
            "j",
            "n mod j",
            "j / n",
            "j mod n (where n = cache blocks)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Direct mapping: memory block j maps to cache line = j mod n (where n = number of cache lines). Each memory block has exactly one possible cache location. Simple but causes conflict misses when multiple frequently-used blocks map to same line.",
            "formula": "$Cache\\ line = j \\mod n$"
        }
    },
    {
        "id": "coa3-cache-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "Direct mapping address format:",
        "options": [
            "Block + Tag + Word",
            "Tag + Block + Word",
            "Only Tag",
            "Tag + Word"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Direct-mapped cache address: Tag (identifies which memory block among those mapping to same line) | Block/Line/Index (selects cache line) | Word/Offset (selects byte within block). Index bits = log₂(cache lines). Offset bits = log₂(block size)."
        }
    },
    {
        "id": "coa3-cache-003",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "Associative (fully) mapping address format:",
        "options": [
            "Set + Word",
            "Tag + Block + Word",
            "Block + Word",
            "Tag + Word"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Fully associative: address is just Tag | Word/Offset. No index field - block can go anywhere, so no fixed position to select. Tag is compared against ALL lines in parallel. Most flexible but requires n comparators for n lines, making it expensive for large caches."
        }
    },
    {
        "id": "coa3-cache-004",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "Set-associative mapping address format:",
        "options": [
            "Tag + Word",
            "Tag + Block + Word",
            "Block + Word",
            "Tag + Set + Word"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Set-associative: address is Tag | Set | Offset. Set bits select which set (group of n lines). Within set, block can go in any of n positions - tag compared against n lines in that set. Balances flexibility (fewer conflicts) with hardware cost (only n comparators)."
        }
    },
    {
        "id": "coa3-cache-005",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "In direct mapping, number of tag comparators needed:",
        "options": [
            "1",
            "log n",
            "0",
            "n (cache blocks)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Direct-mapped: only ONE comparator needed. The index field directly selects which cache line to check - then just compare that line's tag with the address tag. No searching. Fast and simple, but limited flexibility leads to conflict misses."
        }
    },
    {
        "id": "coa3-cache-006",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "In fully associative, number of tag comparators needed:",
        "options": [
            "n (number of cache blocks)",
            "1",
            "log n",
            "0"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Fully associative: need n comparators (one per cache line) to check all lines in parallel. Block could be anywhere, so must compare address tag against every stored tag simultaneously. This hardware cost limits practical size of fully associative caches (typically used for TLB, victim cache)."
        }
    },
    {
        "id": "coa3-cache-007",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "In k-way set-associative, number of tag comparators:",
        "options": [
            "n",
            "n/k",
            "1",
            "k"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "k-way set-associative: need k comparators - one for each line in the selected set. Index field selects set, then k tags in that set are compared in parallel. Common configurations: 2-way (2 comparators), 4-way, 8-way. Good balance of hit rate and hardware cost."
        }
    },
    {
        "id": "coa3-cache-008",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "Write-through policy:",
        "options": [
            "Write to cache and main memory simultaneously",
            "Write only to main memory",
            "Delayed write",
            "Write only to cache"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Write-through: every write updates both cache AND main memory immediately. Cache and memory always consistent. Simple to implement, but slow (memory speed limits writes) and high memory bandwidth usage. Often uses write buffer to partially hide write latency."
        }
    },
    {
        "id": "coa3-cache-009",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "Write-back policy:",
        "options": [
            "Write only to cache, update memory on eviction",
            "Write to memory only",
            "No writes allowed",
            "Write to both always"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Write-back: write only to cache, mark block 'dirty'. Memory updated only when dirty block evicted. Faster (no memory wait on write), less memory traffic. But: cache inconsistent with memory until eviction. Needs dirty bit. Complex crash recovery. Most common in modern systems."
        }
    },
    {
        "id": "coa3-cache-010",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "Hit ratio formula:",
        "options": [
            "Hits / Misses",
            "Hits / Total accesses",
            "Total / Hits",
            "Misses / Total"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Hit ratio = Hits / (Hits + Misses) = Hits / Total accesses. Measures cache effectiveness. Higher is better. Typical L1 caches achieve >95% hit ratio. Miss ratio = 1 - hit ratio. Even small improvements in hit ratio significantly impact performance.",
            "formula": "$h = \\frac{Hits}{Hits + Misses}$"
        }
    },
    {
        "id": "coa3-emat-001",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "EMAT with cache hit rate h, cache time c, memory time m:",
        "options": [
            "c + m",
            "h*c + (1-h)*(c+m)",
            "h*c + (1-h)*m",
            "h*(c+m)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Effective Memory Access Time: On hit (probability h): just cache access = c. On miss (probability 1-h): access cache, find miss, then access memory = c + m. EMAT = h×c + (1-h)×(c+m). Some models simplify to c + (1-h)×m if miss penalty = m.",
            "formula": "$EMAT = h \\cdot c + (1-h) \\cdot (c + m)$"
        }
    },
    {
        "id": "coa3-emat-002",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "TLB effective memory access time with TLB hit h, TLB time t, memory m:",
        "options": [
            "h*(t+m) + (1-h)*(t+2m)",
            "t + m",
            "t + h*m",
            "h*t + m"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "TLB-based paging: TLB hit (probability h): TLB access + memory access = t + m. TLB miss (probability 1-h): TLB access + page table lookup in memory + data access in memory = t + m + m = t + 2m. EMAT = h(t+m) + (1-h)(t+2m). TLB crucial for paging performance.",
            "formula": "$EMAT = h(t+m) + (1-h)(t+2m)$"
        }
    },
    {
        "id": "coa3-emat-003",
        "type": "MCQ",
        "topic": "coa",
        "subtopic": "Cache Memory",
        "question": "n-level paging without TLB: memory accesses for one data access:",
        "options": [
            "n",
            "n²",
            "n+1",
            "2n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Multi-level paging without TLB: must traverse n levels of page tables (n memory accesses), then access the data itself (1 more access). Total = n + 1 memory accesses. Very slow without TLB. Example: 3-level paging needs 4 memory accesses per data access.",
            "formula": "Memory accesses = $n + 1$"
        }
    }
]);