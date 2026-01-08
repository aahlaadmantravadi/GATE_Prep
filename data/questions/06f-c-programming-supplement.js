/**
 * C Programming SUPPLEMENT - Strings, Pointers, Function Pointers
 * From PDF pages 251-258
 */

Questions.register([
    // ========== STRINGS ==========
    {
        id: "c3-str-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "A string in C is terminated by:",
        options: ["'\\n'", "'\\0' (null character)", "' '", "EOF"],
        correctAnswer: 1,
        explanation: { solution: "C strings end with null character '\\0'" }
    },
    {
        id: "c3-str-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "To store string \"hello\" (5 chars), minimum array size needed is:",
        options: ["5", "6", "4", "7"],
        correctAnswer: 1,
        explanation: { solution: "5 characters + 1 null terminator = 6" }
    },
    {
        id: "c3-str-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "scanf(\"%s\", str) stops reading at:",
        options: ["End of line only", "Whitespace or newline", "Null character", "Never stops"],
        correctAnswer: 1,
        explanation: { solution: "scanf stops at whitespace; use gets() or fgets() for spaces" }
    },
    {
        id: "c3-str-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "strlen(\"hello\") returns:",
        options: ["5", "6", "4", "Error"],
        correctAnswer: 0,
        explanation: { solution: "strlen returns length without null character" }
    },
    {
        id: "c3-str-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "strcmp(s1, s2) returns 0 when:",
        options: ["s1 > s2", "s1 < s2", "s1 and s2 are equal", "Error"],
        correctAnswer: 2,
        explanation: { solution: "strcmp: returns 0 if equal, <0 if s1<s2, >0 if s1>s2" }
    },
    {
        id: "c3-str-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "Can we modify char str[] = \"hello\";?",
        options: ["No", "Yes, str[0] = 'H' is valid", "Only with strcpy", "Only the first character"],
        correctAnswer: 1,
        explanation: { solution: "Array in stack/data: modifiable" }
    },
    {
        id: "c3-str-007",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "Can we modify char *ptr = \"hello\";?",
        options: ["Yes", "No, string literal is in read-only memory", "Only at runtime", "With strcpy only"],
        correctAnswer: 1,
        explanation: { solution: "String literal in read-only section; modifying causes undefined behavior" }
    },
    {
        id: "c3-str-008",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "After char name[10]=\"abc\"; can we do name=\"xyz\";?",
        options: ["Yes", "No, array name is not an lvalue", "Only with malloc", "Yes but causes overflow"],
        correctAnswer: 1,
        explanation: { solution: "Array name is constant pointer; cannot reassign" }
    },
    {
        id: "c3-str-009",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "\"hello\"[1] evaluates to:",
        options: ["'h'", "'e'", "\"ello\"", "Error"],
        correctAnswer: 1,
        explanation: { solution: "String literal is array; [1] gives second character 'e'" }
    },
    // ========== FUNCTION POINTERS ==========
    {
        id: "c3-fp-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "Declaration of function pointer to int add(int, int):",
        options: ["int *ptr(int, int)", "int (*ptr)(int, int)", "int ptr(int, int)", "(*int)(ptr)"],
        correctAnswer: 1,
        explanation: { solution: "int (*ptr)(int, int) - parentheses around *ptr are crucial" }
    },
    {
        id: "c3-fp-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "To assign function address to pointer: ptr = ?",
        options: ["ptr = add or ptr = &add", "ptr = *add", "ptr = add()", "ptr = &add()"],
        correctAnswer: 0,
        explanation: { solution: "Function name is its address; both add and &add work" }
    },
    {
        id: "c3-fp-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "To call function through pointer ptr: ?",
        options: ["ptr(args) or (*ptr)(args)", "*ptr(args)", "ptr*(args)", "&ptr(args)"],
        correctAnswer: 0,
        explanation: { solution: "Both ptr(args) and (*ptr)(args) are valid call syntaxes" }
    },
    {
        id: "c3-fp-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "int (*ptr[3])(int, int) declares:",
        options: ["Pointer to array", "Array of 3 function pointers", "3D array", "Invalid"],
        correctAnswer: 1,
        explanation: { solution: "Array of 3 pointers to functions taking 2 ints, returning int" }
    },
    {
        id: "c3-fp-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "C Programming",
        question: "Function pointers can be used for:",
        options: ["Callbacks, passing functions as arguments", "Only for recursion", "Only for arrays", "Only for strings"],
        correctAnswer: 0,
        explanation: { solution: "Function pointers enable callbacks, dispatch tables, plugins" }
    },
    // ========== ARRAYS - SPARSE MATRIX ==========
    {
        id: "c3-arr-001",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Address of A[i][j] in row-major order for A[M][N] (0-indexed):",
        options: ["Base + (i*N + j) * size", "Base + (j*M + i) * size", "Base + i*M*size", "Base + j*N*size"],
        correctAnswer: 0,
        explanation: { solution: "Row-major: A[i][j] = Base + (i*N + j) * element_size", formula: "Base + (i*N + j)*w" }
    },
    {
        id: "c3-arr-002",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Address of A[i][j] in column-major order for A[M][N] (0-indexed):",
        options: ["Base + (i*N + j) * size", "Base + (j*M + i) * size", "Base + i*M*size", "Base + j*N*size"],
        correctAnswer: 1,
        explanation: { solution: "Column-major: A[i][j] = Base + (j*M + i) * element_size", formula: "Base + (j*M + i)*w" }
    },
    {
        id: "c3-arr-003",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Lower triangular matrix n×n: non-zero elements count is:",
        options: ["n²", "n(n+1)/2", "n(n-1)/2", "n"],
        correctAnswer: 1,
        explanation: { solution: "Lower triangular: 1+2+3+...+n = n(n+1)/2", formula: "n(n+1)/2" }
    },
    {
        id: "c3-arr-004",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Upper triangular matrix n×n: non-zero elements count is:",
        options: ["n²", "n(n+1)/2", "n(n-1)/2", "n"],
        correctAnswer: 1,
        explanation: { solution: "Upper triangular: same as lower = n(n+1)/2", formula: "n(n+1)/2" }
    },
    {
        id: "c3-arr-005",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Tri-diagonal n×n matrix: non-zero elements (for n≥2):",
        options: ["n", "3n-2", "2n", "n²"],
        correctAnswer: 1,
        explanation: { solution: "Main diagonal + upper + lower = n + (n-1) + (n-1) = 3n-2", formula: "3n-2" }
    },
    {
        id: "c3-arr-006",
        type: "MCQ",
        topic: "dsa",
        subtopic: "Arrays",
        question: "Index of A[i][j] in row-major storage of lower triangular matrix (1-indexed, i≥j):",
        options: ["i(i-1)/2 + j", "i(i+1)/2 + j", "j(j-1)/2 + i", "i*j"],
        correctAnswer: 0,
        explanation: { solution: "Index = i(i-1)/2 + j - 1 (0-indexed) or i(i-1)/2 + j (1-indexed start)", formula: "i(i-1)/2 + j" }
    }
]);

console.log("C Programming Supplement loaded - ~25 questions");
