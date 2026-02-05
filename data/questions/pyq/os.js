Questions.register([
    {
        "id": "7.0.1",
        "question": "Consider a demand paging memory management system with 32-bit logical address, 20-bit physical address, and page size of 2048 bytes. Assuming that the memory is byte addressable, what is the maximum number of entries in the page table?",
        "options": [
            "A. 2^21",
            "B. 2^20",
            "C. 2^22",
            "D. 2^24"
        ],
        "answer": "A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.1.1",
        "question": "Which of the following actions is/are typically not performed by the operating system when switching context from process A to process B?",
        "options": [
            "A. Saving current register values and restoring saved register values for process B.",
            "B. Changing address translation tables.",
            "C. Swapping out the memory image of process A to the disk.",
            "D. Invalidating the translation look-aside buffer."
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.1.2",
        "question": "Which of the following need not necessarily be saved on a context switch between processes?",
        "options": [
            "A. General purpose registers",
            "B. Translation look-aside buffer",
            "C. Program counter",
            "D. All of the above"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.1.3",
        "question": "Let the time taken to switch from user mode to kernel mode of execution be T1 while time taken to switch between two user processes be T2. Which of the following is correct?",
        "options": [
            "A. T1 > T2",
            "B. T1 = T2",
            "C. T1 < T2",
            "D. Nothing can be said about the relation between T1 and T2"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.1.4",
        "question": "Consider a process P running on a CPU. Which one or more of the following events will always trigger a context switch by the OS that results in process P moving to a non-running state (e.g., ready, blocked)?",
        "options": [
            "A. P makes a blocking system call to read a block of data from the disk",
            "B. P tries to access a page that is in the swap space, triggering a page fault",
            "C. An interrupt is raised by the disk to deliver data requested by some other process",
            "D. A timer interrupt is raised by the hardware"
        ],
        "answer": "A;B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.2.1",
        "question": "Consider a system with 3 processes that share 4 instances of the same resource type. Each process can request a maximum of K instances. Resources can be requested and releases only one at a time. The largest value of K that will always avoid deadlock is ___",
        "options": [],
        "answer": "2",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.2.2",
        "question": "In a system, there are three types of resources: E, F and G. Four processes P0, P1, P2 and P3 execute concurrently. At the outset, the processes have declared their maximum resource requirements using a matrix named Max as given below. For example, Max[P2, F] is the maximum number of instances of F that P2 would require. The number of instances of the resources allocated to the various processes at any given state is given by a matrix named Allocation.\\n\\nConsider a state of the system with the Allocation matrix as shown below, and in which 3 instances of E and 3 instances of F are only resources available.\\n\\n**Allocation**\\n| | E | F | G |\\n|---|---|---|---|\\n| P0 | 1 | 0 | 1 |\\n| P1 | 1 | 1 | 2 |\\n| P2 | 1 | 0 | 3 |\\n| P3 | 2 | 0 | 0 |\\n\\n**Max**\\n| | E | F | G |\\n|---|---|---|---|\\n| P0 | 4 | 3 | 1 |\\n| P1 | 2 | 1 | 4 |\\n| P2 | 1 | 3 | 3 |\\n| P3 | 5 | 4 | 1 |\\n\\nFrom the perspective of deadlock avoidance, which one of the following is true?",
        "options": [
            "A. The system is in safe state",
            "B. The system is not in safe state, but would be safe if one more instance of E were available",
            "C. The system is not in safe state, but would be safe if one more instance of F were available",
            "D. The system is not in safe state, but would be safe if one more instance of G were available"
        ],
        "answer": "A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.2.3",
        "question": "Consider a computer system with multiple shared resource types, with one instance per resource type. Each instance can be owned by only one process at a time. Owning and freeing of resources are done by holding a global lock (L). The following scheme is used to own a resource instance:\\n\\n```\\nfunction OWNRESOURCE(Resource R)\\n  Acquire lock L // a global lock\\n  if R is available then\\n    Acquire R\\n    Release lock L\\n  else\\n    if R is owned by another process P then\\n      Terminate P, after releasing all resources owned by P\\n      Acquire R\\n    else\\n      // ... (rest assumed from logic or missing context, but standard preemptive scheme)\\n      // Wait... Image has code.\\n    // Rest of code:\\n    Restart P\\n    Release lock L\\n  end if\\nend if\\nend function\\n```\\n\\nWhich of the following choice(s) about the above scheme is/are correct?",
        "options": [
            "A. The scheme ensures that deadlocks will not occur",
            "B. The scheme may lead to live-lock",
            "C. The scheme may lead to starvation",
            "D. The scheme violates the mutual exclusion property"
        ],
        "answer": "A;B;C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.2.4",
        "question": "In a certain operating system, deadlock prevention is attempted using the following scheme. Each process is assigned a unique timestamp, and is restarted with the same timestamp if killed. Let Ph be the process holding a resource R, Pr be a process requesting for the same resource R, and T(Ph) and T(Pr) be their timestamps respectively. The decision to wait or preempt one of the processes is based on the following algorithm.\\n\\n```\\nif T(Pr) < T(Ph) then\\n  kill Pr\\nelse wait\\n```\\n\\nWhich one of the following is TRUE?",
        "options": [
            "A. The scheme is deadlock-free, but not starvation-free",
            "B. The scheme is not deadlock-free, but starvation-free",
            "C. The scheme is neither deadlock-free nor starvation-free",
            "D. The scheme is both deadlock-free and starvation-free"
        ],
        "answer": "A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.1",
        "question": "A certain moving arm disk-storage device has the following specifications:\\n- Number of tracks per surface = 404\\n- Track storage capacity = 130030 bytes.\\n- Disk speed = 3600 rpm\\n- Average seek time = 30 m secs.\\n\\nEstimate the average latency, the disk storage capacity, and the data transfer rate.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.2",
        "question": "A certain moving arm disk storage, with one head, has the following specifications:\\n- Number of tracks/recording surface = 200\\n- Disk rotation speed = 2400 rpm\\n- Track storage capacity = 62,500 bits\\n\\nThe average latency of this device is P ms and the data transfer rate is Q bits/sec. Write the values of P and Q.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.3",
        "question": "The root directory of a disk should be placed",
        "options": [
            "A. at a fixed address in main memory",
            "B. at a fixed location on the disk",
            "C. anywhere on the disk",
            "D. at a fixed location on the system disk",
            "E. anywhere on the system disk"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.4",
        "question": "If the overhead for formatting a disk is 96 bytes for a 4000 byte sector,\\n\\nA. Compute the unformatted capacity of the disk for the following parameters:\\n  - Number of surfaces: 8\\n  - Outer diameter of the disk: 12 cm\\n  - Inner diameter of the disk: 4 cm\\n  - Inner track space: 0.1 mm\\n  - Number of sectors per track: 20\\n\\nB. If the disk in (A) is rotating at 360 rpm, determine the effective data transfer rate which is defined as the number of bytes transferred per second between disk and memory.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.5",
        "question": "A program P reads and processes 1000 consecutive records from a sequential file F stored on device D without using any file system facilities. Given the following\\n- Size of each record = 3200 bytes\\n- Access time of D = 10 msecs\\n- Data transfer rate of D = 800 * 10^3 bytes/second\\n- CPU time to process each record = 3 msecs\\n\\nWhat is the elapsed time of P if\\nA. F contains unblocked records and P does not use buffering?\\nB. F contains unblocked records and P uses one buffer (i.e., it always reads ahead into the buffer)?\\nC. records of F are organized using a blocking factor of 2 (i.e., each block on D contains two records of F) and P uses one buffer?",
        "options": [],
        "answer": "9.006",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.6",
        "question": "Formatting for a floppy disk refers to",
        "options": [
            "A. arranging the data on the disk in contiguous fashion",
            "B. writing the directory",
            "C. erasing the system data",
            "D. writing identification information on all tracks and sectors"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.7",
        "question": "Free disk space can be used to keep track of using a free list or a bit map. Disk addresses require d bits. For a disk with B blocks, F of which are free, state the condition under which the free list uses less space than the bit map.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.8",
        "question": "Consider a disk with c cylinders, t tracks per cylinder, s sectors per track and a sector length sl. A logical file dl with fixed record length rl is stored continuously on this disk starting at location (cL, tL, sL), where cL, tL and sL are the cylinder, track and sector numbers, respectively. Derive the formula to calculate the disk address (i.e. cylinder, track and sector) of a logical record n assuming that rl = sl.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.9",
        "question": "Raid configurations of the disks are used to provide",
        "options": [
            "A. Fault-tolerance",
            "B. High speed",
            "C. High data density",
            "D. (A) & (B)"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.10",
        "question": "Which of the following requires a device driver?",
        "options": [
            "A. Register",
            "B. Cache",
            "C. Main memory",
            "D. Disk"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.11",
        "question": "Consider a disk with the 100 tracks numbered from 0 to 99 rotating at 3000 rpm. The number of sectors per track is 100 and the time to move the head between two successive tracks is 0.2 millisecond.\\nA. Consider a set of disk requests to read data from tracks 32, 7, 45, 5 and 10. Assuming that the elevator algorithm is used to schedule disk requests, and the head is initially at track 25 moving up (towards larger track numbers), what is the total seek time for servicing the requests?\\nB. Consider an initial set of 100 arbitrary disk requests and assume that no new disk requests arrive while servicing these requests. If the head is initially at track 0 and the elevator algorithm is used to schedule disk requests, what is the worse case time to complete all the requests?",
        "options": [],
        "answer": "A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.12",
        "question": "Consider a disk with the following specifications: 20 surfaces, 1000 tracks/surface, 16 sectors/track, data density 1 KB/sector, rotation speed 3000 rpm. The operating system initiates the transfer between the disk and the memory sector-wise. Once the head has been placed on the right track, the disk reads a sector in a single scan. It reads bits from the sector while the head is passing over the sector. The read bits are formed into bytes in a serial-in-parallel-out buffer and each byte is then transferred to memory. The disk writing is exactly a complementary process.\\nFor parts (C) and (D) below, assume memory read-write time = 0.1 microseconds/byte, interrupt driven transfer has an interrupt overhead = 0.4 microseconds, the DMA initialization, and termination overhead is negligible compared to the total sector transfer time. DMA requests are always granted.\\n\\nA. What is the total capacity of the desk?\\nB. What is the data transfer rate?\\nC. What is the percentage of time the CPU is required for this disk I/O for byte-wise interrupts driven transfer?\\nD. What is the maximum percentage of time the CPU is held up for this disk I/O for cycle-stealing DMA transfer?",
        "options": [],
        "answer": "800",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.13",
        "question": "Using a larger block size in a fixed block size file system leads to",
        "options": [
            "A. better disk throughput but poorer disk space utilization",
            "B. better disk throughput and better disk space utilization",
            "C. poorer disk throughput but better disk space utilization",
            "D. poorer disk throughput and poorer disk space utilization"
        ],
        "answer": "A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.14",
        "question": "A unix-style I-nodes has 10 direct pointers and one single, one double and one triple indirect pointers. Disk block size is 1 Kbyte, disk block address is 32 bits, and 48-bit integers are used. What is the maximum possible file size?",
        "options": [
            "A. 2^24 bytes",
            "B. 2^32 bytes",
            "C. 2^34 bytes",
            "D. 2^48 bytes"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.15",
        "question": "What is the swap space in the disk used for?",
        "options": [
            "A. Saving temporary html pages",
            "B. Saving process data",
            "C. Storing the super-block",
            "D. Storing device drivers"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.16",
        "question": "Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stored in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively:",
        "options": [
            "A. 256 Mbyte, 19 bits",
            "B. 256 Mbyte, 28 bits",
            "C. 512 Mbyte, 20 bits",
            "D. 64 Gbyte, 28 bits"
        ],
        "answer": "A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.17",
        "question": "For a magnetic disk with concentric circular tracks, the seek latency is not linearly proportional to the seek distance due to",
        "options": [
            "A. non-uniform distribution of requests",
            "B. arm starting and stopping inertia",
            "C. higher capacity of tracks on the periphery of the platter",
            "D. use of unfair arm scheduling policies"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.18",
        "question": "A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces and 1000 cylinders. The address of a sector is given as a triple <c, h, s>, where c is the cylinder number, h is the surface number and s is the sector number. Thus, the 0th sector is addresses as <0, 0, 0>, the 1st sector as <0, 0, 1>, and so on. The address <400, 16, 29> corresponds to sector number:",
        "options": [
            "A. 505035",
            "B. 505036",
            "C. 505037",
            "D. 505038"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.19",
        "question": "A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces and 1000 cylinders. The address of a sector is given as a triple <c, h, s>, where c is the cylinder number, h is the surface number and s is the sector number. Thus, the 0th sector is addresses as <0, 0, 0>, the 1st sector as <0, 0, 1>, and so on. The address of the 1039th sector is",
        "options": [
            "A. <0, 15, 31>",
            "B. <0, 16, 30>",
            "C. <0, 16, 31>",
            "D. <0, 17, 31>"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.20",
        "question": "An application loads 100 libraries at startup. Loading each library requires exactly one disk access. The seek time of the disk to a random location is given as 10 ms. Rotational speed of disk is 6000 rpm. If all 100 libraries are loaded from random locations on the disk, how long does it take to load all libraries? (The time to transfer data from the disk block once the head has been positioned at the start of the block may be neglected.)",
        "options": [
            "A. 0.50 s",
            "B. 1.50 s",
            "C. 1.25 s",
            "D. 1.00 s"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.21",
        "question": "A file system with 300 GByte disk uses a file descriptor with 8 direct block addresses, 1 indirect block address and 1 doubly indirect block address. The size of each disk block is 128 Bytes and the size of each disk block address is 8 Bytes. The maximum possible file size in this file system is",
        "options": [
            "A. 3 KBytes",
            "B. 35 KBytes",
            "C. 280 KBytes",
            "D. dependent on the size of the disk"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.22",
        "question": "Consider a hard disk with 16 recording surfaces (0-15) having 16384 cylinders (0-16383) and each cylinder contains 64 sectors (0-63). Data storage capacity in each sector is 512 bytes. Data are organized cylinder-wise and the addressing format is <cylinder no., surface no., sector no.> . A file of size 42797 KB is stored in the disk and the starting disk location of the file is <1200, 9, 40>. What is the cylinder number of the last sector of the file, if it is stored in a contiguous manner?",
        "options": [
            "A. 1281",
            "B. 1282",
            "C. 1283",
            "D. 1284"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.23",
        "question": "Consider a disk pack with a seek time of 4 milliseconds and rotational speed of 10000 rotations per minute (RPM). It has 600 sectors per track and each sector can store 512 bytes of data. Consider a file stored in the disk. The file contains 2000 sectors. Assume that every sector access necessitates a seek, and the average rotational latency for accessing each sector is half of the time for one complete rotation. The total time (in milliseconds) needed to read the entire file is ______",
        "options": [],
        "answer": "14020",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.24",
        "question": "Consider a typical disk that rotates at 15000 rotations per minute (RPM) and has a transfer rate of 50 * 10^6 bytes/sec. If the average seek time of the disk is twice the average rotational delay and the controller's transfer time is 10 times the disk transfer time, the average time (in milliseconds) to read or write a 512-byte sector of the disk is ______",
        "options": [],
        "answer": "6.1 : 6.2",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.25",
        "question": "Consider a storage disk with 4 platters (numbered as 0, 1, 2 and 3), 200 cylinders (numbered as 0, 1, ..., 199), and 256 sectors per track (numbered as 0, 1, ... 255). The following 6 disk requests of the form [sector number, cylinder number, platter number] are received by the disk controller at the same time:\\n\\n[120, 72, 2], [180, 134, 1], [60, 20, 0], [212, 86, 3], [56, 116, 2], [118, 16, 1]\\n\\nCurrently head is positioned at sector number 100 of cylinder 80, and is moving towards higher cylinder numbers. The average power dissipation in moving the head over 100 cylinders is 20 milliwatts and for reversing the direction of the head movement once is 15 milliwatts. Power dissipation associated with rotational latency and switching of head between different platters is negligible.\\n\\nThe total power consumption in milliwatts to satisfy all of the above disk requests using the Shortest Seek Time First disk scheduling algorithm is ______",
        "options": [],
        "answer": "85",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.26",
        "question": "Consider a 512 GB hard disk with 32 storage surfaces. There are 4096 sectors per track and each sector holds 1024 bytes of data. The number of cylinders in the hard disk is _______.",
        "options": [],
        "answer": "4096",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.27",
        "question": "Consider a disk with the following specifications: rotation speed of 6000 RPM, average seek time of 5 milliseconds, 500 sectors/track, 512-byte sectors. A file has content stored in 3000 sectors located randomly on the disk. Assuming average rotational latency, the total time (in seconds, rounded off to 2 decimal places) to read the entire file from the disk is ______.",
        "options": [],
        "answer": "30.06",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.28",
        "question": "In a computer system, four files of size 11050 bytes, 4990 bytes, 5170 bytes and 12640 bytes need to be stored. For storing these files on disk, we can use either 100 byte disk blocks or 200 byte disk blocks (but can't mix block sizes). For each block used to store a file, 4 bytes of bookkeeping information also needs to be stored on the disk. Thus, the total space used to store a file is the sum of the space taken to store the file and the space taken to store the bookkeeping information for the blocks allocated for storing the file. A disk block can store either bookkeeping information for a file or data from a file, but not both.\\nWhat is the total space required for storing the files using 100 byte disk blocks and 200 byte disk blocks respectively?",
        "options": [
            "A. 35400 and 35800 bytes",
            "B. 35800 and 35400 bytes",
            "C. 35600 and 35400 bytes",
            "D. 35400 and 35600 bytes"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.29",
        "question": "A disk has 8 equidistant tracks. The diameters of the innermost and outermost tracks are 1 cm and 8 cm respectively. The innermost track has a storage capacity of 10 MB.\\nWhat is the total amount of data that can be stored on the disk if it is used with a drive that rotates it with\\n\\nI. Constant Linear Velocity\\nII. Constant Angular Velocity?",
        "options": [
            "A. I. 80 MB; II. 2040 MB",
            "B. I. 2040 MB; II 80 MB",
            "C. I. 80 MB; II. 360 MB",
            "D. I. 360 MB; II. 80 MB"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.30",
        "question": "A disk has 8 equidistant tracks. The diameters of the innermost and outermost tracks are 1 cm and 8 cm respectively. The innermost track has a storage capacity of 10 MB.\\nIf the disk has 20 sectors per track and is currently at the end of the 5th sector of the inner-most track and the head can move at a speed of 10 meters/sec and it is rotating at constant angular velocity of 6000 RPM, how much time will it take to read 1 MB contiguous data starting from the sector 4 of the outer-most track?",
        "options": [
            "A. 13.5 ms",
            "B. 10 ms",
            "C. 9.5 ms",
            "D. 20 ms"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.3.31",
        "question": "A hard disk system has the following parameters :\\n\\n- Number of tracks = 500\\n- Number of sectors/track = 100\\n- Number of bytes /sector = 500\\n- Time taken by the head to move from one track to adjacent track = 1 ms\\n- Rotation speed = 600 rpm.\\n\\nWhat is the average time taken for transferring 250 bytes from the disk ?",
        "options": [
            "A. 300.5 ms",
            "B. 255.5 ms",
            "C. 255 ms",
            "D. 300 ms"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.1",
        "question": "Disk requests come to disk driver for cylinders 10, 22, 20, 2, 40, 6 and 38, in that order at a time when the disk drive is reading from cylinder 20. The seek time is 6 msec per cylinder. Compute the total seek time if the disk arm scheduling algorithm is.\\n\\nA. First come first served.\\nB. Closest cylinder next.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.2",
        "question": "Assuming the current disk cylinder to be 50 and the sequence for the cylinders to be 1, 36, 49, 65, 53, 12, 3, 20, 55, 16, 65 and 78 find the sequence of servicing using\\n\\n1. Shortest seek time first (SSTF) and\\n2. Elevator disk scheduling policies.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.3",
        "question": "The head of a moving head disk with 100 tracks numbered 0 to 99 is currently serving a request at track 55. If the queue of requests kept in FIFO order is\\n\\n10, 70, 75, 23, 65\\n\\nwhich of the two disk scheduling algorithms FCFS (First Come First Served) and SSTF (Shortest Seek Time First) will require less head movement? Find the head movement for each of the algorithms.",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.4",
        "question": "The correct matching for the following pairs is:\\n\\n| | | | |\\n|---|---|---|---|\\n| (A) | Disk Scheduling | (1) | Round robin |\\n| (B) | Batch Processing | (2) | SCAN |\\n| (C) | Time-sharing | (3) | LIFO |\\n| (D) | Interrupt processing | (4) | FIFO |",
        "options": [
            "A. A-3 B-4 C-2 D-1",
            "B. A-4 B-3 C-2 D-1",
            "C. A-2 B-4 C-1 D-3",
            "D. A-3 B-4 C-3 D-2"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.5",
        "question": "Which of the following disk scheduling strategies is likely to give the best throughput?",
        "options": [
            "A. Farthest cylinder next",
            "B. Nearest cylinder next",
            "C. First come first served",
            "D. Elevator algorithm"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.6",
        "question": "Consider an operating system capable of loading and executing a single sequential user process at a time. The disk head scheduling algorithm used is First Come First Served (FCFS). If FCFS is replaced by Shortest Seek Time First (SSTF), claimed by the vendor to give 50% better benchmark results, what is the expected improvement in the I/O performance of user programs?",
        "options": [
            "A. 50%",
            "B. 40%",
            "C. 25%",
            "D. 0%"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.7",
        "question": "Consider a disk system with 100 cylinders. The requests to access the cylinders occur in following sequence: 4, 34, 10, 7, 19, 73, 2, 15, 6, 20. Assuming that the head is currently at cylinder 50, what is the time taken to satisfy all requests if it takes 1 ms to move from one cylinder to adjacent one and shortest seek time first policy is used?",
        "options": [
            "A. 95 ms",
            "B. 119 ms",
            "C. 233 ms",
            "D. 276 ms"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.8",
        "question": "Suppose a disk has 201 cylinders, numbered from 0 to 200. At some time the disk arm is at cylinder 100, and there is a queue of disk access requests for cylinders 30, 85, 90, 100, 105, 110, 135 and 145. If Shortest-Seek Time First (SSTF) is being used for scheduling the disk access, the request for cylinder 90 is serviced after servicing ______ number of requests.",
        "options": [],
        "answer": "3",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.9",
        "question": "Suppose the following disk request sequence (track numbers) for a disk with 100 tracks is given: 45, 20, 90, 10, 50, 60, 80, 25, 70. Assume that the initial position of the R/W head is on track 50. The additional distance that will be traversed by the R/W head when the Shortest Seek Time First (SSTF) algorithm is used compared to the SCAN (Elevator) algorithm (assuming that SCAN algorithm moves towards 100 when it starts execution) is ______ tracks.",
        "options": [],
        "answer": "10",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.10",
        "question": "Cylinder a disk queue with requests for I/O to blocks on cylinders 47, 38, 121, 191, 87, 11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0 to 199. The total head movement (in number of cylinders) incurred while servicing these requests is ______.",
        "options": [],
        "answer": "346",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.11",
        "question": "Consider the following five disk access requests of the form (request id, cylinder number) that are present in the disk scheduler queue at a given time. (P, 155), (Q, 85), (R, 110), (S, 30), (T, 115). Assume the head is positioned at cylinder 100. The scheduler follows Shortest Seek Time First scheduling to service the requests. Which one of the following statements is FALSE?",
        "options": [
            "A. T is serviced before P.",
            "B. Q is serviced after S, but before T.",
            "C. The head reverses its direction of movement between servicing of Q and P.",
            "D. R is serviced before P."
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.12",
        "question": "A disk has 200 tracks (numbered 0 through 199). At a given time, it was servicing the request of reading data from track 120, and at the previous request, service was for track 90. The pending requests (in order of their arrival) are for track numbers. 30 70 115 130 110 80 20 25. How many times will the head change its direction for the disk scheduling policies SSTF(Shortest Seek Time First) and FCFS (First Come First Serve)?",
        "options": [
            "A. 2 and 3",
            "B. 3 and 3",
            "C. 3 and 4",
            "D. 4 and 4"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.13",
        "question": "The head of a hard disk serves requests following the shortest seek time first (SSTF) policy. The head is initially positioned at track number 180. Which of the request sets will cause the head to change its direction after servicing every request assuming that the head does not change direction if there is a tie in SSTF and all the requests arrive before the servicing starts?",
        "options": [
            "A. 11, 139, 170, 178, 181, 184, 201, 265",
            "B. 10, 138, 170, 178, 181, 185, 201, 265",
            "C. 10, 139, 169, 178, 181, 184, 201, 265",
            "D. 10, 138, 170, 178, 181, 185, 200, 265"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.4.14",
        "question": "The head of a hard disk serves requests following the shortest seek time first (SSTF) policy. What is the maximum cardinality of the request set, so that the head changes its direction after servicing every request if the total number of tracks are 2048 and the head can start from any track?",
        "options": [
            "A. 9",
            "B. 10",
            "C. 11",
            "D. 12"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.1",
        "question": "A file system with a one-level directory structure is implemented on a disk with disk block size of 4K bytes. The disk is used as follows:\\n\\n| Disk-block 0 | File Allocation Table, consisting of one 8-bit entry per data block, representing the data block address of the next data block in the file |\\n|---|---|\\n| Disk-block 1 | Directory, with one 32 bit entry per file: |\\n| Disk-block 2 | Data-block 1; |\\n| Disk-block 3 | Data-block 2; etc. |\\n\\na. What is the maximum possible number of files?\\nb. What is the maximum possible file size in blocks",
        "options": [],
        "answer": "N/A",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.2",
        "question": "In the index allocation scheme of blocks to a file, the maximum possible size of the file depends on",
        "options": [
            "A. the size of the blocks, and the size of the address of the blocks.",
            "B. the number of blocks used for the index, and the size of the blocks.",
            "C. the size of the blocks, the number of blocks used for the index, and the size of the address of the blocks.",
            "D. None of the above"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.3",
        "question": "The data blocks of a very large file in the Unix file system are allocated using",
        "options": [
            "A. continuous allocation",
            "B. linked allocation",
            "C. indexed allocation",
            "D. an extension of indexed allocation"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.4",
        "question": "A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100 x 10^6 bytes disk on which the file system is stored and data block size is 10^3 bytes, the maximum size of a file that can be stored on this disk in units of 10^6 bytes is ______.",
        "options": [],
        "answer": "99.55 : 99.65",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.5",
        "question": "In a file allocation system, which of the following allocation scheme(s) can be used if no external fragmentation is allowed?\\n1. Contiguous\\n2. Linked\\n3. Indexed",
        "options": [
            "A. 1 and 3 only",
            "B. 2 only",
            "C. 3 only",
            "D. 2 and 3 only"
        ],
        "answer": "D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.6",
        "question": "The index node (inode) of a Unix -like file system has 12 direct, one single-indirect and one double-indirect pointers. The disk block size is 4 kB, and the disk block address is 32-bits long. The maximum possible file size is (rounded off to 1 decimal place) _____ GB",
        "options": [],
        "answer": "4.0 : 4.1",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.7",
        "question": "Consider a linear list based directory implementation in a file system. Each directory is a list of nodes, where each node contains the file name along with the file metadata, such as the list of pointers to the data blocks. Consider a given directory foo. Which of the following operations will necessarily require a full scan of foo for successful completion?",
        "options": [
            "A. Creation of a new file in foo",
            "B. Deletion of an existing file from foo",
            "C. Renaming of an existing file in foo",
            "D. Opening of an existing file in foo"
        ],
        "answer": "A;C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.8",
        "question": "Consider two files systems A and B, that use contiguous allocation and linked allocation, respectively. A file of size 100 blocks is already stored in A and also in B. Now, consider inserting a new block in the middle of the file (between 50th and 51st block), whose data is already available in the memory. Assume that there are enough free blocks at the end of the file and that the file control blocks are already in memory. Let the number of disk accesses required to insert a block in the middle of the file in A and B are n_A and n_B, respectively, then the value of n_A + n_B is_____.",
        "options": [],
        "answer": "153",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.5.9",
        "question": "In a particular Unix OS, each data block is of size 1024 bytes, each node has 10 direct data block addresses and three additional addresses: one for single indirect block, one for double indirect block and one for triple indirect block. Also, each block can contain addresses for 128 blocks. Which one of the following is approximately the maximum size of a file in the file system?",
        "options": [
            "A. 512 MB",
            "B. 2 GB",
            "C. 8 GB",
            "D. 16 GB"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.1",
        "question": "Consider the following code fragment:\\n```c\\nif (fork() == 0)\\n{\\n a = a + 5;\\n printf(\"%d, %d\\n\", a, &a);\\n}\\nelse\\n{\\n a = a - 5;\\n printf (\"%d, %d\\n\", a, &a);\\n}\\n```\\nLet u, v be the values printed by the parent process and x, y be the values printed by the child process. Which one of the following is TRUE?",
        "options": [
            "A. u = x + 10 and v = y",
            "B. u = x + 10 and v! = y",
            "C. u + 10 = x and v = y",
            "D. u + 10 = x and v! = y"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.2",
        "question": "A process executes the following code\\n```c\\nfor(i=0; i<n; i++) fork();\\n```\\nThe total number of child processes created is",
        "options": [
            "A. n",
            "B. 2^n - 1",
            "C. 2^n",
            "D. 2^(n+1) - 1"
        ],
        "answer": "B",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.3",
        "question": "A process executes the code\\n```c\\nfork();\\nfork();\\nfork();\\n```\\nThe total number of child processes created is",
        "options": [
            "A. 3",
            "B. 4",
            "C. 7",
            "D. 8"
        ],
        "answer": "C",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.4",
        "question": "The following C program is executed on a Unix/Linux system :\\n```c\\n#include<unistd.h>\\nint main()\\n{\\n int i;\\n for(i=0; i<10; i++)\\n  if(i%2 == 0)\\n   fork();\\n return 0;\\n}\\n```\\nThe total number of child processes created is ______ .",
        "options": [],
        "answer": "31",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.5",
        "question": "Which one or more of the following options guarantee that a computer system will transition from user mode to kernel mode?",
        "options": [
            "A. Function Call",
            "B. malloc Call",
            "C. Page Fault",
            "D. System Call"
        ],
        "answer": "C;D",
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.6",
        "question": "Consider the following code snippet using the fork () and wait () system calls. Assume that the code compiles and runs correctly, and that the system calls run successfully without any errors.\\n\\n```c\\nint x=3;\\nwhile (x>0){\\n    fork ();\\n    printf(\"hello\");\\n    wait (NULL) ;\\n    x-- ;\\n}\\n```\\n\\nThe total number of times the printf statement is executed is __________ .",
        "options": [],
        "answer": {
            "answer": "14",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.6.7",
        "question": "A process executes the following segment of code :\\n\\n```c\\nfor(i = 1; i <= n; i++)\\n    fork ();\\n```\\n\\nThe number of new processes created is",
        "options": [
            "A. $n$",
            "B. $((n(n+1))/2)$",
            "C. $2^n - 1$",
            "D. $3^n - 1$"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.1",
        "question": "Which of the following is an example of spooled device?",
        "options": [
            "A. A line printer used to print the output of a number of jobs",
            "B. A terminal used to enter input data to a running program",
            "C. A secondary storage device in a virtual memory system",
            "D. A graphic display device"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.2",
        "question": "Which of the following is an example of a spooled device?",
        "options": [
            "A. The terminal used to enter the input data for the C program being executed",
            "B. An output device used to print the output of a number of jobs",
            "C. The secondary memory device in a virtual storage system",
            "D. The swapping area on a disk used by the swapper"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.3",
        "question": "Which one of the following is true for a CPU having a single interrupt request line and a single interrupt grant line?",
        "options": [
            "A. Neither vectored interrupt nor multiple interrupting devices are possible",
            "B. Vectored interrupts are not possible but multiple interrupting devices are possible",
            "C. Vectored interrupts and multiple interrupting devices are both possible",
            "D. Vectored interrupts are possible but multiple interrupting devices are not possible"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.4",
        "question": "Normally user programs are prevented from handling I/O directly by I/O instructions in them. For CPUs having explicit I/O instructions, such I/O protection is ensured by having the I/O instruction privileged. In a CPU with memory mapped I/O, there is no explicit I/O instruction. Which one of the following is true for a CPU with memory mapped I/O?",
        "options": [
            "A. I/O protection is ensured by operating system routine(s)",
            "B. I/O protection is ensured by a hardware trap",
            "C. I/O protection is ensured during system configuration",
            "D. I/O protection is not possible"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.5",
        "question": "The following are some events that occur after a device controller issues an interrupt while process $L$ is under execution.\\n\\n*   P. The processor pushes the process status of $L$ onto the control stack\\n*   Q. The processor finishes the execution of the current instruction\\n*   R. The processor executes the interrupt service routine\\n*   S. The processor pops the process status of $L$ from the control stack\\n*   T. The processor loads the new PC value based on the interrupt\\n\\nWhich of the following is the correct order in which the events above occur?",
        "options": [
            "A. QPTRS",
            "B. PTRSQ",
            "C. TRPQS",
            "D. QTPRS"
        ],
        "answer": {
            "answer": "D",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.6",
        "question": "What is the bit rate of a video terminal unit with $80$ characters/line, $8$ bits/character and horizontal sweep time of $100\\ \\mu\\text{s}$ (including $20\\ \\mu\\text{s}$ of retrace time)?",
        "options": [
            "A. $8\\text{ Mbps}$",
            "B. $6.4\\text{ Mbps}$",
            "C. $0.8\\text{ Mbps}$",
            "D. $0.64\\text{ Mbps}$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.7.7",
        "question": "Which of the following DMA transfer modes and interrupt handling mechanisms will enable the highest I/O band-width?",
        "options": [
            "A. Transparent DMA and Polling interrupts",
            "B. Cycle-stealing and Vectored interrupts",
            "C. Block transfer and Vectored interrupts",
            "D. Block transfer and Polling interrupts"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.8.1",
        "question": "Suppose in a multiprogramming environment, the following C program segment is executed. A process goes into I/O queue whenever an I/O related operation is performed. Assume that there will always be a context switch whenever a process requests for an I/O, and also whenever the process returns from an I/O. The number of times the process will enter the ready queue during its lifetime (not counting the time the process enters the ready queue when it is run initially) is _______ . Answer in integer)\\n\\n```c\\nint main()\\n{\\nint x=0,i=0;\\nscanf(\"%d\",&x);\\nfor(i=0; i<20; i++)\\n{\\nx = x+20;\\nprintf(\"%d\\\\n\",x);\\n}\\nreturn 0;\\n}\\n```",
        "options": [],
        "answer": {
            "answer": "41",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.9.1",
        "question": "I/O redirection",
        "options": [
            "A. implies changing the name of a file",
            "B. can be employed to use an existing file as input file for a program",
            "C. implies connecting 2 programs through a pipe",
            "D. None of the above"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.10.1",
        "question": "The details of an interrupt cycle are shown in figure.\\n\\n*   Arrival of Interrupt Input -> $10\\mu\\text{ sec}$ -> Main Program Execution\\n*   Saving of CPU State -> $10\\mu\\text{ sec}$\\n*   Interrupt Service Execution -> $80\\mu\\text{ sec}$\\n*   Restoration of CPU state -> $10\\mu\\text{ sec}$\\n*   Back to Main Program Execution\\n\\nGiven that an interrupt input arrives every $1\\text{ msec}$, what is the percentage of the total time that the CPU devotes for the main program execution.",
        "options": [],
        "answer": {
            "answer": "90",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.10.2",
        "question": "When an interrupt occurs, an operating system",
        "options": [
            "A. ignores the interrupt",
            "B. always changes state of interrupted process after processing the interrupt",
            "C. always resumes execution of interrupted process after processing the interrupt",
            "D. may change state of interrupted process to 'blocked' and schedule another process."
        ],
        "answer": {
            "answer": "D",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.10.3",
        "question": "Which of the following devices should get higher priority in assigning interrupts?",
        "options": [
            "A. Hard disk",
            "B. Printer",
            "C. Keyboard",
            "D. Floppy disk"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.10.4",
        "question": "Listed below are some operating system abstractions (in the left column) and the hardware components (in the right column)\\n\\n| | | | |\\n|---|---|---|---|\\n| (A) | Thread | 1. | Interrupt |\\n| (B) | Virtual address space | 2. | Memory |\\n| (C) | File system | 3. | CPU |\\n| (D) | Signal | 4. | Disk |",
        "options": [
            "A. (A) – 2 (B) – 4 (C) – 3 (D) – 1",
            "B. (A) – 1 (B) – 2 (C) – 3 (D) – 4",
            "C. (A) – 3 (B) – 2 (C) – 4 (D) – 1",
            "D. (A) – 4 (B) – 1 (C) – 2 (D) – 3"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.10.5",
        "question": "A processor needs software interrupt to",
        "options": [
            "A. test the interrupt system of the processor",
            "B. implement co-routines",
            "C. obtain system services which need execution of privileged instructions",
            "D. return from subroutine"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.10.6",
        "question": "A computer handles several interrupt sources of which of the following are relevant for this question.\\n\\n*   Interrupt from CPU temperature sensor (raises interrupt if CPU temperature is too high)\\n*   Interrupt from Mouse (raises Interrupt if the mouse is moved or a button is pressed)\\n*   Interrupt from Keyboard (raises Interrupt if a key is pressed or released)\\n*   Interrupt from Hard Disk (raises Interrupt when a disk read is completed)\\n\\nWhich one of these will be handled at the HIGHEST priority?",
        "options": [
            "A. Interrupt from Hard Disk",
            "B. Interrupt from Mouse",
            "C. Interrupt from Keyboard",
            "D. Interrupt from CPU temperature sensor"
        ],
        "answer": {
            "answer": "D",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.11.1",
        "question": "A disk of size $512$ M bytes is divided into blocks of $64$ K bytes. A file is stored in the disk using linked allocation. In linked allocation, each data block reserves $4$ bytes to store the pointer to the next data block. The link part of the last data block contains a NULL pointer (also of $4$ bytes). Suppose a file of $1$ M bytes needs to be stored in the disk. Assume, $1\\text{ K} = 2^{10}$ and $1\\text{ M} = 2^{20}$. The amount of space in bytes that will be wasted due to internal fragmentation is ______ . (Answer in integer)",
        "options": [],
        "answer": {
            "answer": "1024",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.1",
        "question": "Let the page reference and the working set window be $c\\ c\\ d\\ b\\ c\\ e\\ c\\ e\\ a\\ d$ and $4$, respectively. The initial working set at time $t=0$ contains the pages $\\{a, d, e\\}$, where $a$ was referenced at time $t=0$, $d$ was referenced at time $t=-1$, and $e$ was referenced at time $t=-2$. Determine the total number of page faults and the average number of page frames used by computing the working set at each reference.",
        "options": [],
        "answer": {
            "answer": "To be evaluated",
            "explanation": "This is a descriptive question requiring calculation.",
            "isDescriptive": true
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.2",
        "question": "A computer installation has $1000k$ of main memory. The jobs arrive and finish in the following sequences.\\n\\n*   Job 1 requiring 200k arrives\\n*   Job 2 requiring 350k arrives\\n*   Job 3 requiring 300k arrives\\n*   Job 1 finishes\\n*   Job 4 requiring 120k arrives\\n*   Job 5 requiring 150k arrives\\n*   Job 6 requiring 80k arrives\\n\\nA. Draw the memory allocation table using Best Fit and First Fit algorithms.\\nB. Which algorithm performs better for this sequence?",
        "options": [],
        "answer": {
            "answer": "To be evaluated",
            "explanation": "This is a descriptive question requiring drawing and comparison.",
            "isDescriptive": true
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.3",
        "question": "A 1000 Kbyte memory is managed using variable partitions but no compaction. It currently has two partitions of sizes $200$ Kbyte and $260$ Kbyte respectively. The smallest allocation request in Kbyte that could be denied is for",
        "options": [
            "A. 151",
            "B. 181",
            "C. 231",
            "D. 541"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.4",
        "question": "The overlay tree for a program is as shown below:\\n\\n```\\n          Root (2KB)\\n         /    |    \\\\\\n     A(4KB) B(6KB) C(8KB)\\n     /   \\      |      |\\n D(6KB) E(8KB) F(2KB) G(4KB)\\n```\\n\\nWhat will be the size of the partition (in physical memory) required to load (and run) this program?",
        "options": [
            "A. 12 KB",
            "B. 14 KB",
            "C. 10 KB",
            "D. 8 KB"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.5",
        "question": "Consider the main memory system that consists of 8 memory modules attached to the system bus, which is one word wide. When a write request is made, the bus is occupied for 100 nanoseconds (ns) by the data, address, and control signals. During the same 100 ns, and for 500 ns thereafter, the addressed memory module executes one cycle accepting and storing the data. The (internal) operation of different memory modules may overlap in time, but only one request can be on the bus at any time. The maximum number of stores (of one word each) that can be initiated in 1 millisecond is _______",
        "options": [],
        "answer": {
            "answer": "10000",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.6",
        "question": "Consider 6 memory partitions of sizes 200 KB, 400 KB, 600 KB, 500 KB, 300 KB and 250 KB, where KB refers to kilobyte. These partitions need to be allotted to four processes of sizes 357 KB, 210 KB, 468 KB, 491 KB in that order. If the best-fit algorithm is used, which partitions are NOT allotted to any process?",
        "options": [
            "A. 200 KB and 300 KB",
            "B. 200 KB and 250 KB",
            "C. 250 KB and 300 KB",
            "D. 300 KB and 400 KB"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.7",
        "question": "Consider allocation of memory to a new process. Assume that none of the existing holes in the memory will exactly fit the process's memory requirement. Hence, a new hole of smaller size will be created if allocation is made in any of the existing holes. Which one of the following statement is TRUE?",
        "options": [
            "A. The hole created by first fit is always larger than the hole created by next fit.",
            "B. The hole created by worst fit is always larger than the hole created by first fit.",
            "C. The hole created by best fit is never larger than the hole created by first fit.",
            "D. The hole created by next fit is never larger than the hole created by best fit."
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.8",
        "question": "Which one of the following statements is FALSE?",
        "options": [
            "A. The TLB performs an associative search in parallel on all its valid entries using page number of incoming virtual address.",
            "B. If the virtual address of a word given by CPU has a TLB hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.",
            "C. The memory access time using a given inverted page table is always same for all incoming virtual addresses.",
            "D. In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 map to the same value while hashing, then the memory access time of these addresses will not be the same."
        ],
        "answer": {
            "answer": "D",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.9",
        "question": "For each of the four processes $P_1, P_2, P_3,$ and $P_4$. The total size in kilobytes ($KB$) and the number of segments are given below.\\n\\n| Process | Total size (in KB) | Number of segments |\\n| :--- | :--- | :--- |\\n| $P_1$ | 195 | 4 |\\n| $P_2$ | 254 | 5 |\\n| $P_3$ | 45 | 3 |\\n| $P_4$ | 364 | 8 |\\n\\nThe page size is 1 KB. The size of an entry in the page table is 4 bytes. The size of an entry in the segment table is 8 bytes. The maximum size of a segment is 256 KB. The paging method for memory management uses two-level paging, and its storage overhead is $P$. The storage overhead for the segmentation method is $S$. The storage overhead for the segmentation and paging method is $T$. What is the relation among the overheads for the different methods of memory management in the concurrent execution of the above four processes?",
        "options": [
            "A. P < S < T",
            "B. S < P < T",
            "C. S < T < P",
            "D. T < S < P"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.12.10",
        "question": "Let a memory have four free blocks of sizes $4k, 8k, 20k, 2k$. These blocks are allocated following the best-fit strategy. The allocation requests are stored in a queue as shown below.\\n\\n| Request No | J1 | J2 | J3 | J4 | J5 | J6 | J7 | J8 |\\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\\n| Request Sizes | 2k | 14k | 3k | 6k | 6k | 10k | 7k | 20k |\\n| Usage Time | 4 | 10 | 2 | 8 | 4 | 1 | 8 | 6 |\\n\\nThe time at which the request for $J7$ will be completed will be",
        "options": [
            "A. 16",
            "B. 19",
            "C. 20",
            "D. 37"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.13.1",
        "question": "A computer system supports a logical address space of $2^{32}$ bytes. It uses two-level hierarchical paging with a page size of $4096$ bytes. A logical address is divided into a $b$-bit index to the outer page table, an offset within the page of the inner page table, and an offset within the desired page. Each entry of the inner page table uses eight bytes. All the pages in the system have the same size.\\n\\nThe value of $b$ is ________ . (Answer in integer)",
        "options": [],
        "answer": {
            "answer": "11",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.14.1",
        "question": "System calls are usually invoked by using",
        "options": [
            "A. a software interrupt",
            "B. polling",
            "C. an indirect jump",
            "D. a privileged instruction"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.14.2",
        "question": "A CPU has two modes -- privileged and non-privileged. In order to change the mode from privileged to non-privileged",
        "options": [
            "A. a hardware interrupt is needed",
            "B. a software interrupt is needed",
            "C. a privileged instruction (which does not generate an interrupt) is needed",
            "D. a non-privileged instruction (which does not generate an interrupt) is needed"
        ],
        "answer": {
            "answer": "D",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.14.3",
        "question": "A user level process in Unix traps the signal sent on a Ctrl-C input, and has a signal handling routine that saves appropriate files before terminating the process. When a Ctrl-C input is given to this process, what is the mode in which the signal handling routine executes?",
        "options": [
            "A. User mode",
            "B. Kernel mode",
            "C. Superuser mode",
            "D. Privileged mode"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.15.1",
        "question": "In optimal page replacement algorithm, information about all future page references is available to the operating system (OS). A modification of the optimal page replacement algorithm is as follows:\\nThe OS correctly predicts only up to next 4 page references (including the current page) at the time of allocating a frame to a page.\\nA process accesses the pages in the following order of page numbers:\\n$1, 3, 2, 4, 2, 3, 1, 2, 4, 3, 1, 4$\\nIf the system has three memory frames that are initially empty, the number of page faults that will occur during execution of the process is ________. (Answer in integer)",
        "options": [],
        "answer": {
            "answer": "9",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.1",
        "question": "The following page addresses, in the given sequence, were generated by a program:\\n$1\\ 2\\ 3\\ 4\\ 1\\ 3\\ 5\\ 2\\ 1\\ 5\\ 4\\ 3\\ 2\\ 3$\\nThis program is run on a demand paged virtual memory system, with main memory size equal to 4 pages. Indicate the page references for which page faults occur for the following page replacement algorithms.\\nA. LRU\\nB. FIFO\\nAssume that the main memory is initially empty.",
        "options": [],
        "answer": {
            "answer": "To be evaluated",
            "explanation": "Descriptive question.",
            "isDescriptive": true
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.2",
        "question": "A memory page containing a heavily used variable that was initialized very early and is in constant use is removed then",
        "options": [
            "A. LRU page replacement algorithm is used",
            "B. FIFO page replacement algorithm is used",
            "C. LFU page replacement algorithm is used",
            "D. None of the above"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.3",
        "question": "Consider the following heap (figure) in which blank regions are not in use and hatched region are in use.\\n\\n```\\n|--50--|--150--|--300--|--350--|--600--|\\n|///////|       |///////|       |///////|\\n```\\n\\nThe sequence of requests for blocks of sizes $300, 25, 125, 50$ can be satisfied if we use",
        "options": [
            "A. either first fit or best fit policy (any one)",
            "B. first fit but not best fit policy",
            "C. best fit but not first fit policy",
            "D. None of the above"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.4",
        "question": "Which of the following page replacement algorithms suffers from Belady's anamoly?",
        "options": [
            "A. Optimal replacement",
            "B. LRU",
            "C. FIFO",
            "D. Both (A) and (C)"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.5",
        "question": "The address sequence generated by tracing a particular program executing in a pure demand based paging system with 100 records per page with 1 free main memory frame is recorded as follows. What is the number of page faults?\\n$0100, 0200, 0430, 0499, 0510, 0530, 0560, 0120, 0220, 0240, 0260, 0320, 0370$",
        "options": [
            "A. 13",
            "B. 8",
            "C. 7",
            "D. 10"
        ],
        "answer": {
            "answer": "D",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.6",
        "question": "Dirty bit for a page in a page table",
        "options": [
            "A. helps avoid unnecessary writes on a paging device",
            "B. helps maintain LRU information",
            "C. allows only read on a page",
            "D. None of the above"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.7",
        "question": "Locality of reference implies that the page reference being made by a process",
        "options": [
            "A. will always be to the page used in the previous page reference",
            "B. is likely to be to one of the pages used in the last few page references",
            "C. will always be to one of the pages existing in memory",
            "D. will always lead to a page fault"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.8",
        "question": "Thrashing",
        "options": [
            "A. reduces page I/O",
            "B. decreases the degree of multiprogramming",
            "C. implies excessive page I/O",
            "D. improve the system performance"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.9",
        "question": "Consider a virtual memory system with FIFO page replacement policy. For an arbitrary page access pattern, increasing the number of page frames in main memory will",
        "options": [
            "A. always decrease the number of page faults",
            "B. always increase the number of page faults",
            "C. sometimes increase the number of page faults",
            "D. never affect the number of page faults"
        ],
        "answer": {
            "answer": "C",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.10",
        "question": "The optimal page replacement algorithm will select the page that",
        "options": [
            "A. Has not been used for the longest time in the past",
            "B. Will not be used for the longest time in the future",
            "C. Has been used least number of times",
            "D. Has been used most number of times"
        ],
        "answer": {
            "answer": "B",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.11",
        "question": "The minimum number of page frames that must be allocated to a running process in a virtual memory environment is determined by",
        "options": [
            "A. the instruction set architecture",
            "B. page size",
            "C. number of processes in memory",
            "D. physical memory size"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To be filled later.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.12",
        "question": "Increasing the RAM of a computer typically improves performance because:",
        "options": [
            "Virtual Memory increases",
            "Larger RAMs are faster",
            "Fewer page faults occur",
            "Fewer segmentation faults occur"
        ],
        "answer": {
            "answer": "C",
            "explanation": "Increasing RAM allows more pages to stay in memory, reducing the frequency of page faults.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.13",
        "question": "A virtual memory system uses First In First Out (FIFO) page replacement policy and allocates a fixed number of frames to a process. Consider the following statements:\\n\\nP: Increasing the number of page frames allocated to a process sometimes increases the page fault rate.\\nQ: Some programs do not exhibit locality of reference.\\n\\nWhich one of the following is TRUE?",
        "options": [
            "Both P and Q are true, and Q is the reason for P",
            "Both P and Q are true, but Q is not the reason for P",
            "P is false but Q is true",
            "Both P and Q are false"
        ],
        "answer": {
            "answer": "B",
            "explanation": "P refers to Belady's Anomaly, which is true for FIFO. Q is also true as some programs may access memory randomly. However, Q is not the direct reason for Belady's anomaly; the anomaly arises due to the lack of stack property in FIFO.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.14",
        "question": "A process has been allocated $3$ page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string):\\n$1, 2, 1, 3, 7, 4, 5, 6, 3, 1$\\n\\nIf optimal page replacement policy is used, how many page faults occur for the above reference string?",
        "options": [
            "7",
            "8",
            "9",
            "10"
        ],
        "answer": {
            "answer": "A",
            "explanation": "References: 1, 2, 1, 3, 7, 4, 5, 6, 3, 1\\nFrames (3):\\n1: Miss (1, -, -)\\n2: Miss (1, 2, -)\\n1: Hit\\n3: Miss (1, 2, 3)\\n7: Miss (Replace 2, longest future use) -> (1, 7, 3)\\n4: Miss (Replace 7) -> (1, 4, 3)\\n5: Miss (Replace 4) -> (1, 5, 3)\\n6: Miss (Replace 5) -> (1, 6, 3)\\n3: Hit\\n1: Hit\\nTotal Page Faults: 7",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.15",
        "question": "A process, has been allocated $3$ page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string):\\n$1, 2, 1, 3, 7, 4, 5, 6, 3, 1$\\n\\nLeast Recently Used (LRU) page replacement policy is a practical approximation to optimal page replacement. For the above reference string, how many more page faults occur with LRU than with the optimal page replacement policy?",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "answer": {
            "answer": "C",
            "explanation": "LRU Faults:\\n1: Miss (1)\\n2: Miss (1, 2)\\n1: Hit (1, 2)\\n3: Miss (1, 2, 3)\\n7: Miss (Replace 2) -> (1, 3, 7)\\n4: Miss (Replace 1) -> (3, 7, 4)\\n5: Miss (Replace 3) -> (7, 4, 5)\\n6: Miss (Replace 7) -> (4, 5, 6)\\n3: Miss (Replace 4) -> (5, 6, 3)\\n1: Miss (Replace 5) -> (6, 3, 1)\\nTotal LRU Faults = 9.\\nOptimal Faults (from previous question) = 7.\\nDifference = 9 - 7 = 2.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.16",
        "question": "In which one of the following page replacement policies, Belady's anomaly may occur?",
        "options": [
            "FIFO",
            "Optimal",
            "LRU",
            "MRU"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Belady's anomaly (more frames leading to more page faults) is a characteristic of the First In First Out (FIFO) page replacement algorithm.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.17",
        "question": "A system uses FIFO policy for system replacement. It has $4$ page frames with no pages loaded to begin with. The system first accesses $100$ distinct pages in some order and then accesses the same $100$ pages but now in the reverse order. How many page faults will occur?",
        "options": [
            "196",
            "192",
            "197",
            "195"
        ],
        "answer": {
            "answer": "A",
            "explanation": "1st Pass (100 distinct pages): All 100 accesses result in page faults. Frames contain the last 4 pages accessed (97, 98, 99, 100).\\n2nd Pass (Reverse order 100 to 1):\\n- 100, 99, 98, 97 are Hits (4 Hits).\\n- 96 down to 1 are all Misses (100 - 4 = 96 Misses).\\nTotal Faults = 100 (1st Pass) + 96 (2nd Pass) = 196.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.18",
        "question": "Consider the virtual page reference string\\n$$1, 2, 3, 2, 4, 1, 3, 2, 4, 1$$\\non a demand paged virtual memory system running on a computer system that has main memory size of $3$ page frames which are initially empty. Let LRU, FIFO and OPTIMAL denote the number of page faults under the corresponding page replacement policy. Then",
        "options": [
            "OPTIMAL < LRU < FIFO",
            "OPTIMAL < FIFO < LRU",
            "OPTIMAL = LRU",
            "OPTIMAL = FIFO"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Calculated faults:\\nFIFO: 6 faults (1, 2, 3, 4, 1, 2)\\nLRU: 9 faults\\nOPTIMAL: 5 faults\\nOrder: OPTIMAL (5) < FIFO (6) < LRU (9).",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.19",
        "question": "Assume that there are $3$ page frames which are initially empty. If the page reference string is $1, 2, 3, 4, 2, 1, 5, 3, 2, 4, 6$ the number of page faults using the optimal replacement policy is_____.",
        "options": [],
        "answer": {
            "answer": "7",
            "explanation": "Optimal Replacement:\\n1: F {1}\\n2: F {1, 2}\\n3: F {1, 2, 3}\\n4: F {1, 2, 4} (Repl 3 as it's used furthest)\\n2: H\\n1: H\\n5: F {5, 2, 4} (Repl 1)\\n3: F {3, 2, 4} (Repl 5)\\n2: H\\n4: H\\n6: F {3, 2, 6} (Repl 4)\\nTotal Faults: 7",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.20",
        "question": "A computer has twenty physical page frames which contain pages numbered $101$ through $120$. Now a program accesses the pages numbered $1, 2, ..., 100$ in that order, and repeats the access sequence THRICE. Which one of the following page replacement policies experiences the same number of page faults as the optimal page replacement policy for this program?",
        "options": [
            "Least-recently-used",
            "First-in-first-out",
            "Last-in-first-out",
            "Most-recently-used"
        ],
        "answer": {
            "answer": "D",
            "explanation": "For a cyclic access pattern like 1..100 repeated, where N > Frames, Optimal strategy keeps the first (Frames-1) pages and toggles the last frame. MRU (Most Recently Used) mimics this by keeping the oldest loaded pages (1..19) and replacing the most recently used one (20, 21...), effectively using one frame for the streaming pages while keeping 19 constant. Thus MRU performs close to Optimal here.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.21",
        "question": "A system uses $3$ page frames for storing process pages in main memory. It uses the Least Recently Used (LRU) page replacement policy. Assume that all the page frames are initially empty. What is the total number of page faults that will occur while processing the page reference string given below?\\n$4, 7, 6, 1, 7, 6, 1, 2, 7, 2$",
        "options": [],
        "answer": {
            "answer": "6",
            "explanation": "LRU Trace (3 frames):\\n4: F {4}\\n7: F {4, 7}\\n6: F {4, 7, 6}\\n1: F {7, 6, 1} (Repl 4)\\n7: H {6, 1, 7}\\n6: H {1, 7, 6}\\n1: H {7, 6, 1}\\n2: F {6, 1, 2} (Repl 7)\\n7: F {1, 2, 7} (Repl 6)\\n2: H\\nTotal: 6 Faults.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.22",
        "question": "Consider a main memory with five-page frames and the following sequence of page references:\\n$3, 8, 2, 3, 9, 1, 6, 3, 8, 9, 3, 6, 2, 1, 3$. Which one of the following is true with respect to page replacement policies First In First Out (FIFO) and Least Recently Used (LRU)?",
        "options": [
            "Both incur the same number of page faults",
            "FIFO incurs 2 more page faults than LRU",
            "LRU incurs 2 more page faults than FIFO",
            "FIFO incurs 1 more page faults than LRU"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Both FIFO and LRU incur 9 page faults for this specific sequence.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.23",
        "question": "Consider a computer system with ten physical page frames. The system is provided with an access sequence $(a_1, a_2, ..., a_{20}, a_1, a_2, ..., a_{20})$, where each $a_i$ is a distinct virtual page number. The difference in the number of page faults between the last-in-first-out page replacement policy and the optimal page replacement policy is ____.",
        "options": [],
        "answer": {
            "answer": "0",
            "explanation": "Both LIFO and Optimal strategies result in 31 page faults for this specific sequence (20 distinct pages repeated once, with 10 frames). LIFO mimics Optimal by preserving the first 9 pages and using one frame for the rest, which is the optimal strategy for a cyclic pattern larger than memory size.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.24",
        "question": "In which one of the following page replacement algorithms it is possible for the page fault rate to increase even when the number of allocated frames increases?",
        "options": [
            "LRU (Least Recently Used)",
            "OPT (Optimal Page Replacement)",
            "MRU (Most Recently Used)",
            "FIFO (First In First Out)"
        ],
        "answer": {
            "answer": "D",
            "explanation": "This phenomenon is known as Belady's Anomaly and occurs in the FIFO page replacement algorithm.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.25",
        "question": "Recall that Belady's anomaly is that the page-fault rate may increase as the number of allocated frames increases. Now, consider the following statements:\\n\\n* $S_1$: Random page replacement algorithm (where a page chosen at random is replaced) suffers from Belady's anomaly.\\n* $S_2$: LRU page replacement algorithm suffers from Belady's anomaly.\\n\\nWhich of the following is CORRECT?",
        "options": [
            "S1 is true, S2 is true",
            "S1 is true, S2 is false",
            "S1 is false, S2 is true",
            "S1 is false, S2 is false"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Random page replacement is not a stack algorithm, so it can suffer from Belady's anomaly ($S_1$ is true). LRU is a stack algorithm and is guaranteed not to suffer from Belady's anomaly ($S_2$ is false).",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.26",
        "question": "In the context of operating systems, which of the following statements is/are correct with respect to paging?",
        "options": [
            "Paging helps solve the issue of external fragmentation",
            "Page size has no impact on internal fragmentation",
            "Paging incurs memory overheads",
            "Multi-level paging is necessary to support pages of different sizes"
        ],
        "answer": {
            "answer": "A, C",
            "explanation": "Paging eliminates external fragmentation by allowing non-contiguous memory allocation (A is correct). Paging introduces memory overhead for maintaining page tables (C is correct). Internal fragmentation is dependent on page size (larger pages -> more fragmentation), so B is false. Multi-level paging is for large address spaces, not variable page sizes.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.27",
        "question": "Consider a three-level page table to translate a $39$-bit virtual address to a physical address as shown below:\\n\\nLevel 1: 9 bits\\nLevel 2: 9 bits\\nLevel 3: 9 bits\\nPage Offset: 12 bits\\n\\nThe page size is $4$ KB ($1$ KB = $2^{10}$ bytes) and page table entry size at every level is $8$ bytes. A process $P$ is currently using $2$ GB ($1$ GB = $2^{30}$ bytes) virtual memory which is mapped to $2$ GB of physical memory. The minimum amount of memory required for the page table of $P$ across all levels is _______ KB.",
        "options": [],
        "answer": {
            "answer": "4108",
            "explanation": "Virtual Memory Used = 2GB.\\nEntry coverage: L1 (1GB), L2 (2MB), L3 (4KB).\\nL1 Tables needed: 1 (always). (4KB)\\nL2 Tables needed: 2GB / 1GB = 2 tables. (2 * 4KB = 8KB)\\nL3 Tables needed: 2GB / 2MB = 1024 tables. (1024 * 4KB = 4096KB)\\nTotal = 4 + 8 + 4096 = 4108 KB.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.28",
        "question": "Consider a demand paging system with four page frames (initially empty) and LRU page replacement policy. For the following page reference string\\n$$7, 2, 7, 3, 2, 5, 3, 4, 6, 7, 7, 1, 5, 6, 1$$\\nthe page fault rate, defined as the ratio of number of page faults to the number of memory accesses (rounded off to one decimal place) is ______.",
        "options": [],
        "answer": {
            "answer": "0.6",
            "explanation": "Reference String: 7, 2, 7, 3, 2, 5, 3, 4, 6, 7, 7, 1, 5, 6, 1 (Length 15)\\nFrames: 4, LRU\\nFaults: 7 (F), 2 (F), 7 (H), 3 (F), 2 (H), 5 (F), 3 (H), 4 (F), 6 (F), 7 (F), 7 (H), 1 (F), 5 (F), 6 (H), 1 (H).\\nTotal Faults = 9.\\nFault Rate = 9 / 15 = 0.6.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.29",
        "question": "Consider the following two-dimensional array D in the C programming language, which is stored in row-major order:\\n`int D[128][128];`\\nDemand paging is used for allocating memory and each physical page frame holds $512$ elements of the array $D$. The Least Recently Used (LRU) page replacement policy is used by the operating system. A total of $30$ physical page frames are allocated to a process which executes the following code snippet:\\n```c\\nfor (int i = 0; i < 128; i++)\\n    for (int j = 0; j < 128; j++)\\n        D[j][i] *= 10;\\n```\\nThe number of page faults generated during the execution of this code snippet is _______.",
        "options": [],
        "answer": {
            "answer": "4096",
            "explanation": "Total Array Elements = 128*128 = 16384.\\nElements per Page = 512. Total Pages = 16384/512 = 32.\\nFrames Available = 30.\\nThe code accesses the array in Column Monitor (j varies in inner loop), but array is stored Row Major. This causes the access pattern to traverse through all 32 pages for each column (i.e., for each outer loop iteration).\\nSince 32 (needed pages) > 30 (frames), and LRU is used, every page access sequence 0..31 results in faults for all pages (thrashing behavior over the set of 32 pages).\\nTotal Faults = 128 (outer loop) * 32 (page faults per column pass) = 4096.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.30",
        "question": "Consider a demand paging system with three frames, and the following page reference string: $1~2~3~4~5~4~1~6~4~5~1~3~2$. The contents of the frames are as follows initially and after each reference (from left to right):\\n(Table shows frame contents updating)\\nWhich one or more of the following could be the page replacement policy/policies in use?",
        "options": [
            "Least Recently Used page replacement policy",
            "Least Frequently Used page replacement policy",
            "Most Frequently Used page replacement policy",
            "Optimal page replacement policy"
        ],
        "answer": {
            "answer": "D",
            "explanation": "By analyzing the replacements in the table (e.g., at reference 4, page 1 is replaced; at reference 5, page 2 is replaced), the replaced page is consistently the one that will be used farthest in the future (or not at all). This behavior matches the Optimal page replacement policy.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.31",
        "question": "The address sequence generated by tracing a particular program executing in a pure demand paging system with $100$ bytes per page is\\n$$0100, 0200, 0430, 0499, 0510, 0530, 0560, 0120, 0220, 0240, 0260, 0320, 0410.$$\\nSuppose that the memory can store only one page and if $x$ is the address which causes a page fault then the bytes from addresses $x$ to $x + 99$ are loaded on to the memory.\\nHow many page faults will occur?",
        "options": [
            "0",
            "4",
            "7",
            "8"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Page Size = 100 bytes. Addresses map to Page Numbers (Addr/100):\\n0100->1, 0200->2, 0430->4, 0499->4, 0510->5, 0530->5, 0560->5, 0120->1, 0220->2, 0240->2, 0260->2, 0320->3, 0410->4.\\nSequence: 1, 2, 4, 4, 5, 5, 5, 1, 2, 2, 2, 3, 4.\\nSimplified Sequence (removing immediate hits): 1, 2, 4, 5, 1, 2, 3, 4.\\nWith 1 frame, every change in page number is a fault.\\nFaults: 1(F), 2(F), 4(F), 5(F), 1(F), 2(F), 3(F), 4(F). Total 8.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.32",
        "question": "A demand paging system takes $100$ time units to service a page fault and $300$ time units to replace a dirty page. Memory access time is $1$ time unit. The probability of a page fault is $p$. In case of a page fault, the probability of page being dirty is also $p$. It is observed that the average access time is $3$ time units. Then the value of $p$ is",
        "options": [
            "0.194",
            "0.233",
            "0.514",
            "0.981"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Equation: EAT = (1-p)*1 + p * (ServiceTime).\\nAverage ServiceTime = (1-p)*100 (clean) + p*300 (dirty).\\n3 = (1-p) + p * [100(1-p) + 300p].\\nSolving this quadratic equation yields p ≈ 0.0194. Option A (0.194) appears to have a decimal place typo but is the intended corresponding value.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.16.33",
        "question": "Assume that a main memory with only $4$ pages, each of $16$ bytes, is initially empty. The CPU generates the following sequence of virtual addresses and uses the Least Recently Used (LRU) page replacement policy.\\n$$0, 4, 8, 20, 24, 36, 44, 12, 68, 72, 80, 84, 28, 32, 88, 92$$\\nHow many page faults does this sequence cause? What are the page numbers of the pages present in the main memory at the end of the sequence?",
        "options": [
            "6 and 1,2,3,4",
            "7 and 1,2,4,5",
            "8 and 1,2,4,5",
            "9 and 1,2,3,5"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Page Size = 16 bytes. Addresses to Pages (Addr/16):\\n0->0, 4->0, 8->0, 20->1, 24->1, 36->2, 44->2, 12->0, 68->4, 72->4, 80->5, 84->5, 28->1, 32->2, 88->5, 92->5.\\nSequence: 0, 0, 0, 1, 1, 2, 2, 0, 4, 4, 5, 5, 1, 2, 5, 5.\\nReduced: 0, 1, 2, 0, 4, 5, 1, 2, 5.\\nLRU Trace (4 Frames):\\n0 (F) {0}\\n1 (F) {0, 1}\\n2 (F) {0, 1, 2}\\n0 (H) {1, 2, 0}\\n4 (F) {1, 2, 0, 4}\\n5 (F) {2, 0, 4, 5} (Repl 1)\\n1 (F) {0, 4, 5, 1} (Repl 2)\\n2 (F) {4, 5, 1, 2} (Repl 0)\\n5 (H) {4, 1, 2, 5}\\nTotal Faults: 7.\\nFinal Pages: {1, 2, 4, 5}.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.17.2",
        "question": "A given set of processes can be implemented by using only parbegin/parend statement, if the precedence graph of these processes is ______",
        "options": [],
        "answer": {
            "answer": "series-parallel",
            "explanation": "The parbegin/parend constructs can only represent Series-Parallel Graphs (SPGs). A precedence graph must be series-parallel to be implemented using these structured concurrency constructs.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.17.3",
        "question": "Draw the precedence graph for the concurrent program given below\\n```\\nS1\\nparbegin\\n  begin\\n    S2; S4\\n  end;\\n  begin\\n    S3;\\n    parbegin\\n      S5;\\n      begin\\n        S6; S8\\n      end\\n    parend\\n  end;\\n  S7\\nparend;\\nS9\\n```",
        "options": [],
        "answer": {
            "answer": "Graph Description",
            "explanation": "The graph structure is:\\nStart -> S1.\\nFrom S1, split into Branch A and Branch B (parbegin).\\nBranch A: S2 -> S4.\\nBranch B: S3 -> Split into B1, B2 (parbegin).\\n  B1: S5.\\n  B2: S6 -> S8.\\n  Join B1, B2 -> (End of inner parbegin).\\n  Then S7 (Wait, S7 is inside the outer parbegin, but where?).\\n  Indentation suggests:\\n  begin (S3... parend) end;\\n  S7\\n  Wait, if S7 is after 'end;' of second begin block, but before 'parend' of outer parbegin.\\n  Actually, the code shows:\\n  parbegin\\n    begin S2; S4 end;\\n    begin S3; ... parend end;\\n    S7\\n  parend;\\n  This suggests 3 concurrent branches? Or S7 is typographically aligned with S3?\\n  Standard interpretation of GATE 1992 Q 12a:\\n  S1 -> {S2->S4} || {S3->{S5 || S6->S8}} || {S7}. (3 branches).\\n  Then Join -> S9.\\n  Or S7 follows the second block?\\n  Looking at indentation in image:\\n  Line 'S7' is aligned with 'begin' (start of second branch) and 'begin' (start of first branch).\\n  So it looks like a 3rd branch in the top-level parbegin.\\n  So: S1 -> Fork to (S2->S4), (S3->...), (S7). Join -> S9.",
            "isDescriptive": true
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.18.1",
        "question": "The process state transition diagram in the below figure is representative of\\n(Figure shows Running -> Ready transition)\\n",
        "options": [
            "a batch operating system",
            "an operating system with a preemptive scheduler",
            "an operating system with a non-preemptive scheduler",
            "a uni-programmed operating system"
        ],
        "answer": {
            "answer": "B",
            "explanation": "The transition from 'Running' to 'Ready' implies that a running process can be interrupted and moved back to the ready queue to allow another process to run. This is the defining characteristic of a preemptive scheduler.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.18.2",
        "question": "Which of the following does not interrupt a running process?",
        "options": [
            "A device",
            "Timer",
            "Scheduler process",
            "Power failure"
        ],
        "answer": {
            "answer": "C",
            "explanation": "A 'Scheduler process' is a piece of operating system code. It does not generate hardware interrupts. Devices, Timers, and Power failures generate interrupts that stop the running process. The scheduler is usually invoked *by* an interrupt (like a timer tick) or a system call, but is not itself an interrupt source.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.18.3",
        "question": "Which combination of the following features will suffice to characterize an OS as a multi-programmed OS?\\n(a) More than one program may be loaded into main memory at the same time for execution\\n(b) If a program waits for certain events such as I/O, another program is immediately scheduled for execution\\n(c) If the execution of a program terminates, another program is immediately scheduled for execution",
        "options": [
            "(a)",
            "(a) and (b)",
            "(a) and (c)",
            "(a), (b) and (c)"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Multiprogramming is defined by storing multiple programs in memory (a) and switching between them when one waits for I/O (b) to maximize CPU utilization. Feature (c) is also true but largely applicable to simple batching; (b) is the critical differentiator for 'multiprogramming' efficiency.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.18.4",
        "question": "Which one or more of the following need to be saved on a context switch from one thread ($T_1$) of a process to another thread ($T_2$) of the same process?",
        "options": [
            "Page table base register",
            "Stack pointer",
            "Program counter",
            "General purpose registers"
        ],
        "answer": {
            "answer": "B, C, D",
            "explanation": "Threads share the same address space, so the Page Table Base Register (A) does not need to be changed or saved (it remains same for the process). Threads have their own execution context, which includes the Stack Pointer (B), Program Counter (C), and General Purpose Registers (D), which must be saved and restored.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.18.5",
        "question": "The process state transition diagram of an operating system is as given below.\\nWhich of the following must be FALSE about the above operating system?\\n(Figure shows Running -> Ready transition labeled 'Schedule' from Start?? No, Start->Ready. Running->Ready labeled 'Schedule'? No, Ready->Running is Schedule. Running->Ready is '...preemption?').\\nActually diagram arrows:\\nReady -> Running (Schedule)\\nRunning -> Ready (Timeout?)\\nRunning -> Blocked (Wait for I/O)\\nBlocked -> Ready (I/O complete)\\nRunning -> Terminated (Exit)\\nStart -> Ready (Create)",
        "options": [
            "It is a multiprogrammed operating system",
            "It uses preemptive scheduling",
            "It uses non-preemptive scheduling",
            "It is a multi-user operating system"
        ],
        "answer": {
            "answer": "C",
            "explanation": "The diagram shows a transition from 'Running' to 'Ready' (implicitly, or explicitly if visualized). This transition indicates preemption. Therefore, the statement 'It uses non-preemptive scheduling' must be FALSE.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.3",
        "question": "The highest-response ratio next scheduling policy favours ______ jobs, but it also limits the waiting time of ______ jobs.",
        "options": [],
        "answer": {
            "answer": "short, long",
            "explanation": "HRRN formula is (W+S)/S = 1 + W/S. For same W, smaller S gives higher ratio, favouring 'short' jobs. However, as W increases for 'long' jobs, their ratio increases, preventing starvation and limiting their waiting time.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.4",
        "question": "Assume that the following jobs are to be executed on a single processor system\\n(Table: p(4), q(1), r(8), s(1), t(2))\\nThe jobs are assumed to have arrived at time $0^+$ and in the order $p, q, r, s, t$. Calculate the departure time (completion time) for job $p$ if scheduling is round robin with time slice $1$.",
        "options": [
            "4",
            "10",
            "11",
            "12"
        ],
        "answer": {
            "answer": "C",
            "explanation": "Q: p, q, r, s, t\\nTime 0-1: p (rem 3). Q: q, r, s, t, p\\nTime 1-2: q (rem 0, Done). Q: r, s, t, p\\nTime 2-3: r (rem 7). Q: s, t, p, r\\nTime 3-4: s (rem 0, Done). Q: t, p, r\\nTime 4-5: t (rem 1). Q: p, r, t\\nTime 5-6: p (rem 2). Q: r, t, p\\nTime 6-7: r (rem 6). Q: t, p, r\\nTime 7-8: t (rem 0, Done). Q: p, r\\nTime 8-9: p (rem 1). Q: r, p\\nTime 9-10: r (rem 5). Q: p, r\\nTime 10-11: p (rem 0, Done). Departure Time = 11.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.5",
        "question": "Which scheduling policy is most suitable for a time shared operating system?",
        "options": [
            "Shortest Job First",
            "Round Robin",
            "First Come First Serve",
            "Elevator"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Round Robin scheduling is designed specifically for time-sharing systems to ensure fairness and responsiveness by giving each process a small time quantum.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.6",
        "question": "The sequence ______ is an optimal non-preemptive scheduling sequence for the following jobs which leaves the CPU idle for ______ unit(s) of time.\\n(Table: Job 1(0.0, 9), Job 2(0.6, 5), Job 3(1.0, 1))",
        "options": [
            "{3,2,1}, 1",
            "{2,1,3}, 0",
            "{3,2,1}, 0",
            "{1,2,3}, 5"
        ],
        "answer": {
            "answer": "A",
            "explanation": "To minimize average waiting time (Optimal), we should schedule shorter jobs first (SJF). Job 3 is shortest (1), then 2 (5), then 1 (9).\\nHowever, Job 3 arrives at 1.0. Job 2 at 0.6. Job 1 at 0.0.\\nIf we wait for Job 3 (start at 1.0), the CPU is idle for 0-1.0 (1 unit).\\nSequence {3, 2, 1}:\\n- Idle: 0.0-1.0\\n- Job 3: 1.0-2.0\\n- Job 2: 2.0-7.0\\n- Job 1: 7.0-16.0\\nThis sequence yields significantly lower average waiting time compared to running Job 1 first (non-preemptive). Thus {3,2,1} with 1 unit idle time is optimal.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.7",
        "question": "Four jobs to be executed on a single processor system arrive at time 0 in the order $A, B, C, D$. Their burst CPU time requirements are $4, 1, 8, 1$ time units respectively. The completion time of $A$ under round robin scheduling with time slice of one time unit is",
        "options": [
            "10",
            "4",
            "8",
            "9"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Round Robin (q=1) Trace:\\nQ: A, B, C, D\\n0-1: A (rem 3). Q: B, C, D, A\\n1-2: B (rem 0, Done). Q: C, D, A\\n2-3: C (rem 7). Q: D, A, C\\n3-4: D (rem 0, Done). Q: A, C\\n4-5: A (rem 2). Q: C, A\\n5-6: C (rem 6). Q: A, C\\n6-7: A (rem 1). Q: C, A\\n7-8: C (rem 5). Q: A, C\\n8-9: A (rem 0, Done).\\nCompletion Time of A = 9.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.8",
        "question": "Consider $n$ processes sharing the CPU in a round-robin fashion. Assuming that each process switch takes $s$ seconds, what must be the quantum size $q$ such that the overhead resulting from process switching is minimized but at the same time each process is guaranteed to get its turn at the CPU at least every $t$ seconds?",
        "options": [
            "$q \\le \\frac{t-ns}{n-1}$",
            "$q \\ge \\frac{t-ns}{n-1}$",
            "$q \\le \\frac{t-ns}{n+1}$",
            "$q \\ge \\frac{t-ns}{n+1}$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Cycle time for one round of all n processes including switching time s is $n(q+s)$.\\nHowever, the waiting time for a process to get the CPU *again* is the time taken by the other $n-1$ processes. Wait Time = $(n-1)(q+s)$.\\nConstraint: Wait Time $\\le t$.\\n$(n-1)(q+s) \\le t \\Rightarrow q+s \\le \\frac{t}{n-1} \\Rightarrow q \\le \\frac{t}{n-1} - s = \\frac{t - s(n-1)}{n-1}$.\\nApproximating $s(n-1) \\approx sn$ (or if derivation assumes cycle time $\\le t$, then $n(q+s) \\le t \\Rightarrow q \\le \\frac{t}{n} - s = \\frac{t-ns}{n}$).\\nThe option A matches the form $\\frac{t-ns}{n-1}$ best. To minimize overhead ratio $s/q$, we want $q$ to be as large as possible, so we maximize $q$ subject to the constraint.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.9",
        "question": "a. Four jobs are waiting to be run. Their expected run times are $6, 3, 5$ and $x$. In what order should they be run to minimize the average response time?\\nb. Write a concurrent program using par begin-par end to represent the precedence graph shown below.",
        "options": [],
        "answer": {
            "answer": "SJF Order",
            "explanation": "a. To minimize average response time (waiting time), Shortest Job First (SJF) is optimal. The order should be non-decreasing order of run times. Sort $x, 3, 5, 6$ accordingly.\\n\\nb. The graph shows $S1$ triggers ($S2, S3$). Both $S2$ and $S3$ trigger both $S4$ and $S5$. This implies a barrier synchronization: $S2$ and $S3$ must both finish before $S4$ or $S5$ can start.\\nProgram:\\n```\\nS1;\\nparbegin\\n  S2;\\n  S3;\\nparend;\\nparbegin\\n  S4;\\n  S5;\\nparend;\\n```",
            "isDescriptive": true
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.10",
        "question": "In a computer system where the 'best-fit' algorithm is used for allocating 'jobs' to 'memory partitions', the following situation was encountered:\\n(Table: Partitions: 4K, 8K, 20K, 2K. Jobs: 2K(4), 14K(10), 3K(2), 6K(1), 6K(4), 10K(1), 20K(8), 2K(6))\\nWhen will the $20K$ job complete?",
        "options": [],
        "answer": {
            "answer": "19",
            "explanation": "Allocations:\\n1. Job 2K(4) -> Part 2K. Busy 0-4.\\n2. Job 14K(10) -> Part 20K. Busy 0-10.\\n3. Job 3K(2) -> Part 4K. Busy 0-2.\\n4. Job 6K(1) -> Part 8K. Busy 0-1.\\n5. Job 6K(4) -> Needs 6K. Best Fit 8K. Part 8K free at 1. Runs 1-5.\\n6. Job 10K(1) -> Needs 10K. Best Fit 20K. Part 20K free at 10. Runs 10-11.\\n7. Job 20K(8) -> Needs 20K. Only Part 20K fits. Part 20K free at 11. Runs 11-19.\\nCompletion Time = 19.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.11",
        "question": "Which of the following scheduling algorithms is non-preemptive?",
        "options": [
            "Round Robin",
            "First-In First-Out",
            "Multilevel Queue Scheduling",
            "Multilevel Queue Scheduling with Feedback"
        ],
        "answer": {
            "answer": "B",
            "explanation": "First-In First-Out (FIFO) is inherently non-preemptive. Round Robin is preemptive (time quantum). Multilevel queues can be preemptive. MLQ with Feedback moves processes between queues based on CPU bursts, which is preemptive.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.12",
        "question": "A uni-processor computer system only has two processes, both of which alternate 10 ms CPU bursts with 90 ms I/O bursts. Both the processes were created at nearly the same time. The I/O of both processes can proceed in parallel. Which of the following scheduling strategies will result in the least CPU utilization (over a long period of time) for this system?",
        "options": [
            "First come first served scheduling",
            "Shortest remaining time first scheduling",
            "Static priority scheduling with different priorities for the two processes",
            "Round robin scheduling with a time quantum of 5 ms"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Rounded Robin with small quantum mixes the execution of CPU bursts. P1 runs 5ms, P2 runs 5ms, P1 runs 5ms (Done -> IO), P2 runs 5ms (Done -> IO). This delays the start of I/O for both processes compared to FCFS where P1 finishes CPU immediately and starts I/O overlap. Delayed I/O start leads to less overlap and more idle time, thus lower CPU utilization.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.13",
        "question": "Consider the following set of processes, with the arrival times and the CPU-burst times gives in milliseconds.\\n(Table: P1(0,5), P2(1,3), P3(2,3), P4(4,1))\\nWhat is the average turnaround time for these processes with the preemptive shortest remaining processing time first (SRPT) algorithm?",
        "options": [
            "5.50",
            "5.75",
            "6.00",
            "6.25"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Trace:\\n0-1: P1 (rem 4).\\n1: P2(3) < P1(4). Preempt P1. Run P2.\\n1-4: P2 runs (CT=4). TA=3.\\n4: P4(1) < P3(3) < P1(4). Run P4.\\n4-5: P4 runs (CT=5). TA=1.\\n5: P3(3) < P1(4). Run P3.\\n5-8: P3 runs (CT=8). TA=6.\\n8-12: P1 runs (CT=12). TA=12.\\nTotal TA = 3+1+6+12 = 22. Avg = 22/4 = 5.50.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.14",
        "question": "Consider three CPU-intensive processes, which require 10, 20 and 30 time units and arrive at times 0, 2 and 6, respectively. How many context switches are needed if the operating system implements a shortest remaining time first scheduling algorithm? Do not count the context switches at time zero and at the end.",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": {
            "answer": "B",
            "explanation": null,
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.19.16",
        "question": "Consider three processes (process id $0, 1, 2$) with compute time bursts $2, 4$, and $8$ time units. All processes arrive at time zero. Consider the longest remaining time first (LRTF) scheduling algorithm. In LRTF ties are broken by giving priority to the process with the lowest process id. The average turn around time is:",
        "options": [
            "13 units",
            "14 units",
            "15 units",
            "16 units"
        ],
        "answer": "B",
        "image": "os_468.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2006
    },
    {
        "id": "7.19.17",
        "question": "Group 1 contains some CPU scheduling algorithms and Group 2 contains some applications. Match entries in Group 1 to entries in Group 2.\\n\\nGroup 1:\\nP. Gang Scheduling\\nQ. Rate Monotonic Scheduling\\nR. Fair Share Scheduling\\n\\nGroup 2:\\n1. Guaranteed Scheduling\\n2. Real-time Scheduling\\n3. Thread Scheduling",
        "options": [
            "P-3; Q-2; R-1",
            "P-1; Q-2; R-3",
            "P-2; Q-3; R-1",
            "P-1; Q-3; R-2"
        ],
        "answer": "A",
        "image": "os_469.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2007
    },
    {
        "id": "7.19.18",
        "question": "An operating system used Shortest Remaining System Time first (SRT) process scheduling algorithm. Consider the arrival times and execution times for the following processes:\\n\\nProcess | Arrival Time | Execution Time\\n---|---|---\\nP1 | 0 | 20\\nP2 | 15 | 25\\nP3 | 30 | 10\\nP4 | 45 | 15\\n\\nWhat is the total waiting time for process P2?",
        "options": [
            "5",
            "15",
            "40",
            "55"
        ],
        "answer": "B",
        "image": "os_470.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2007
    },
    {
        "id": "7.19.19",
        "question": "In the following process state transition diagram, for a uniprocessor system, assume that there are always some processes in the ready state:\\n\\n(Diagram in image)\\n\\nWhich of the above statements are TRUE?\\nI. If a process makes a transition D, it would result in another process making transition A immediately.\\nII. A process P2 in blocked state can make transition E while another process P1 is in running state.\\nIII. The OS uses preemptive scheduling.\\nIV. The OS uses non-preemptive scheduling.",
        "options": [
            "I and II",
            "I and III",
            "II and III",
            "II and IV"
        ],
        "answer": "C",
        "image": "os_471.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2009
    },
    {
        "id": "7.19.20",
        "question": "Which of the following statements are true?\\nI. Shortest remaining time first scheduling may cause starvation.\\nII. Preemptive scheduling may cause starvation.\\nIII. Round robin is better than FCFS in terms of response time.",
        "options": [
            "I only",
            "I and III only",
            "II and III only",
            "I, II and III"
        ],
        "answer": "D",
        "image": "os_472.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2010
    },
    {
        "id": "7.19.21",
        "question": "Consider the following table of arrival time and burst time for three processes P0, P1 and P2.\\n\\nProcess | Arrival Time | Burst Time\\n---|---|---\\nP0 | 0 | 9\\nP1 | 1 | 4\\nP2 | 2 | 9\\n\\nThe pre-emptive shortest job first scheduling algorithm is used. The average waiting time of the three processes is",
        "options": [
            "5.0 ms",
            "4.33 ms",
            "6.33 ms",
            "7.33 ms"
        ],
        "answer": "A",
        "image": "os_472.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2011
    },
    {
        "id": "7.19.22",
        "question": "Consider the 3 processes, P1, P2 and P3 shown in the table.\\n\\nProcess | Arrival Time | Burst Time\\n---|---|---\\nP1 | 0 | 5\\nP2 | 1 | 7\\nP3 | 3 | 4\\n\\nThe completion order of the 3 processes under the policies FCFS and RR2 (round robin scheduling with CPU quantum of 2 time units) are",
        "options": [
            "FCFS: P1, P2, P3 RR2: P1, P2, P3",
            "FCFS: P1, P3, P2 RR2: P1, P3, P2",
            "FCFS: P1, P2, P3 RR2: P1, P3, P2",
            "FCFS: P1, P3, P2 RR2: P1, P2, P3"
        ],
        "answer": "C",
        "image": "os_472.png",
        "topic": "os",
        "isPYQ": true,
        "year": 2012
    },
    {
        "id": "7.19.15",
        "question": "Consider three processes (process id 0, 1, 2 respectively) with compute time bursts 2, 4 and 8 time units. All processes arrive at time zero. Consider the longest remaining time first (LRTF) scheduling algorithm. In LRTF ties are broken by giving priority to the process with the lowest process id. The average turn around time is:",
        "options": [
            "13 units",
            "14 units",
            "15 units",
            "16 units"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Trace:\\nP2 runs 0-4 (rem 4). P0(2), P1(4), P2(4).\\nP1, P2 run 4-8 alternating (rem 2 each). P0(2), P1(2), P2(2).\\nP0, P1, P2 run 8-14 alternating.\\nOrder of finish: P0 (12), P1 (13), P2 (14).\\nAvg TA = (12+13+14)/3 = 13.",
            "isDescriptive": false
        },
        "category": "Operating Systems",
        "topic": "os",
        "isPYQ": true
    },
    {
        "id": "7.20.1",
        "image": "os/os_473.png",
        "answer": {
            "answer": "D",
            "isDescriptive": true
        },
        "topic": "os",
        "year": 2024,
        "isPYQ": true
    },
    {
        "id": "7.21.1",
        "image": "os/os_474.png",
        "answer": {
            "answer": "N/A",
            "isDescriptive": true
        },
        "topic": "os",
        "year": 2024,
        "isPYQ": true
    },
    {
        "id": "7.22.1",
        "image": "os/os_475.png",
        "answer": {
            "answer": "C;D",
            "isDescriptive": true
        },
        "topic": "os",
        "year": 2024,
        "isPYQ": true
    },
    {
        "id": "7.23.1",
        "image": "os/os_476.png",
        "answer": {
            "answer": "N/A",
            "isDescriptive": true
        },
        "topic": "os",
        "year": 2024,
        "isPYQ": true
    },
    {
        "id": "7.24.1",
        "image": "os/os_477.png",
        "answer": {
            "answer": "D",
            "isDescriptive": true
        },
        "topic": "os",
        "year": 2024,
        "isPYQ": true
    }
]);