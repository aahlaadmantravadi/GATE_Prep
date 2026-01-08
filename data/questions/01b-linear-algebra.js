/**
 * Linear Algebra - Comprehensive Questions
 * Matrices, Determinants, Eigenvalues, Vector Spaces
 */

Questions.register([
    // ========== MATRIX BASICS ==========
    {
        id: "la-mat-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Two matrices A (m×n) and B (p×q) can be multiplied (AB) only if:",
        options: ["m = p", "n = p", "m = q", "n = q"],
        correctAnswer: 1,
        explanation: { solution: "For AB to exist, columns of A must equal rows of B", formula: "A(m×n) × B(p×q) requires n = p, result is m×q" }
    },
    {
        id: "la-mat-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Matrix multiplication is:",
        options: ["Commutative and associative", "Commutative but not associative", "Associative but not commutative", "Neither commutative nor associative"],
        correctAnswer: 2,
        explanation: { solution: "AB ≠ BA in general, but (AB)C = A(BC) always holds", formula: "Not commutative: AB ≠ BA; Associative: (AB)C = A(BC)" }
    },
    {
        id: "la-mat-003",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "To multiply matrices A(3×4) and B(4×2), how many scalar multiplications are needed?",
        correctAnswer: 24,
        tolerance: 0,
        explanation: { solution: "Number of multiplications = m × n × q = 3 × 4 × 2 = 24", formula: "Multiplications for A(m×n) × B(n×q) = m·n·q" }
    },
    {
        id: "la-mat-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A matrix A is upper triangular if:",
        options: ["$a_{ij} = 0$ for $i < j$", "$a_{ij} = 0$ for $i > j$", "$a_{ij} = 0$ for $i = j$", "$a_{ij} = 0$ for $i \\neq j$"],
        correctAnswer: 1,
        explanation: { solution: "Upper triangular: all elements below diagonal are zero", formula: "Upper triangular: $a_{ij} = 0$ for i > j" }
    },
    {
        id: "la-mat-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A diagonal matrix has non-zero elements only:",
        options: ["In the first row", "In the first column", "On the main diagonal", "Above the diagonal"],
        correctAnswer: 2,
        explanation: { solution: "Diagonal matrix: aᵢⱼ = 0 for i ≠ j, only diagonal elements can be non-zero" }
    },
    {
        id: "la-mat-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "An idempotent matrix satisfies:",
        options: ["$A^2 = I$", "$A^2 = A$", "$A^2 = 0$", "$A^n = 0$ for some n"],
        correctAnswer: 1,
        explanation: { solution: "Idempotent: multiplying by itself gives the same matrix", formula: "$A^2 = A$ (idempotent)" }
    },
    {
        id: "la-mat-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A nilpotent matrix of index 3 satisfies:",
        options: ["$A^3 = I$", "$A^3 = A$", "$A^3 = 0$ and $A^2 \\neq 0$", "$A^3 \\neq 0$"],
        correctAnswer: 2,
        explanation: { solution: "Nilpotent of index k: Aᵏ = 0 and Aᵏ⁻¹ ≠ 0" }
    },
    {
        id: "la-mat-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "An orthogonal matrix satisfies:",
        options: ["$A^T = A$", "$A^T = -A$", "$A^T A = I$", "$A^2 = I$"],
        correctAnswer: 2,
        explanation: { solution: "Orthogonal: transpose equals inverse, so AᵀA = AAᵀ = I", formula: "$A^T A = I$ (orthogonal)" }
    },
    {
        id: "la-mat-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "An involutory matrix satisfies:",
        options: ["$A^2 = A$", "$A^2 = I$", "$A^2 = 0$", "$A^T = A$"],
        correctAnswer: 1,
        explanation: { solution: "Involutory: A² = I, so A is its own inverse", formula: "$A^2 = I$ (involutory)" }
    },
    // ========== TRANSPOSE ==========
    {
        id: "la-trans-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "$(AB)^T = ?$",
        options: ["$A^T B^T$", "$B^T A^T$", "$(A^T)(B^T)^T$", "$AB$"],
        correctAnswer: 1,
        explanation: { solution: "Transpose of product reverses order", formula: "$(AB)^T = B^T A^T$" }
    },
    {
        id: "la-trans-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "$(A^T)^T = ?$",
        options: ["$A^T$", "$-A$", "$A$", "$A^{-1}$"],
        correctAnswer: 2,
        explanation: { solution: "Double transpose returns original matrix", formula: "$(A^T)^T = A$" }
    },
    {
        id: "la-trans-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A symmetric matrix satisfies:",
        options: ["$A^T = -A$", "$A^T = A$", "$A^2 = A$", "$AA^T = I$"],
        correctAnswer: 1,
        explanation: { solution: "Symmetric: matrix equals its transpose", formula: "Symmetric: $A^T = A$" }
    },
    {
        id: "la-trans-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A skew-symmetric (anti-symmetric) matrix satisfies:",
        options: ["$A^T = A$", "$A^T = -A$", "$A^2 = -I$", "$AA^T = -I$"],
        correctAnswer: 1,
        explanation: { solution: "Skew-symmetric: transpose equals negative", formula: "Skew-symmetric: $A^T = -A$" }
    },
    {
        id: "la-trans-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Diagonal elements of a skew-symmetric matrix are:",
        options: ["All 1", "All positive", "All zero", "Can be any value"],
        correctAnswer: 2,
        explanation: { solution: "For skew-symmetric, aᵢⱼ = -aⱼᵢ. When i=j: aᵢᵢ = -aᵢᵢ, so aᵢᵢ = 0" }
    },
    // ========== TRACE ==========
    {
        id: "la-trace-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Trace of a matrix is:",
        options: ["Product of diagonal elements", "Sum of diagonal elements", "Sum of all elements", "Determinant"],
        correctAnswer: 1,
        explanation: { solution: "Trace = sum of main diagonal elements", formula: "tr(A) = Σaᵢᵢ" }
    },
    {
        id: "la-trace-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "tr(AB) = ?",
        options: ["tr(A) + tr(B)", "tr(A) × tr(B)", "tr(BA)", "tr(A)tr(B)"],
        correctAnswer: 2,
        explanation: { solution: "Trace is cyclic: tr(AB) = tr(BA), even though AB ≠ BA generally", formula: "tr(AB) = tr(BA)" }
    },
    {
        id: "la-trace-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "tr(A + B) = ?",
        options: ["tr(A) × tr(B)", "tr(A) + tr(B)", "tr(AB)", "max(tr(A), tr(B))"],
        correctAnswer: 1,
        explanation: { solution: "Trace is linear: trace of sum equals sum of traces", formula: "tr(A+B) = tr(A) + tr(B)" }
    },
    // ========== DETERMINANT ==========
    {
        id: "la-det-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "det(AB) = ?",
        options: ["det(A) + det(B)", "det(A) × det(B)", "det(A)/det(B)", "det(A+B)"],
        correctAnswer: 1,
        explanation: { solution: "Determinant of product equals product of determinants", formula: "det(AB) = det(A)·det(B)" }
    },
    {
        id: "la-det-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "det(kA) for n×n matrix A = ?",
        options: ["k·det(A)", "$k^n$·det(A)", "det(A)/k", "det(A)"],
        correctAnswer: 1,
        explanation: { solution: "Scalar multiplies each row, so determinant is multiplied n times", formula: "det(kA) = kⁿ·det(A)" }
    },
    {
        id: "la-det-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "det($A^T$) = ?",
        options: ["det(A)", "-det(A)", "1/det(A)", "det(A)²"],
        correctAnswer: 0,
        explanation: { solution: "Determinant is unchanged by transpose", formula: "det(Aᵀ) = det(A)" }
    },
    {
        id: "la-det-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If two rows of a matrix are identical, then det(A) = ?",
        options: ["1", "-1", "0", "2"],
        correctAnswer: 2,
        explanation: { solution: "Identical rows/columns make determinant zero (linearly dependent)" }
    },
    {
        id: "la-det-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If two rows of a matrix are swapped, the determinant:",
        options: ["Remains same", "Changes sign", "Doubles", "Becomes zero"],
        correctAnswer: 1,
        explanation: { solution: "Each row swap multiplies determinant by -1" }
    },
    {
        id: "la-det-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Determinant of a triangular matrix equals:",
        options: ["Sum of diagonal elements", "Product of diagonal elements", "Largest element", "Sum of all elements"],
        correctAnswer: 1,
        explanation: { solution: "For triangular matrices (upper or lower), det = product of diagonal elements" }
    },
    {
        id: "la-det-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "det($A^{-1}$) = ?",
        options: ["det(A)", "-det(A)", "1/det(A)", "det(A)²"],
        correctAnswer: 2,
        explanation: { solution: "Since A·A⁻¹ = I and det(I) = 1, we have det(A)·det(A⁻¹) = 1", formula: "det(A⁻¹) = 1/det(A)" }
    },
    // ========== MATRIX INVERSE ==========
    {
        id: "la-inv-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A square matrix A is invertible if and only if:",
        options: ["tr(A) ≠ 0", "det(A) ≠ 0", "A = Aᵀ", "All elements are non-zero"],
        correctAnswer: 1,
        explanation: { solution: "Non-zero determinant is necessary and sufficient for invertibility" }
    },
    {
        id: "la-inv-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "$(AB)^{-1} = ?$",
        options: ["$A^{-1}B^{-1}$", "$B^{-1}A^{-1}$", "$(A^{-1})(B^{-1})^T$", "$A^{-1} + B^{-1}$"],
        correctAnswer: 1,
        explanation: { solution: "Inverse of product reverses order (like transpose)", formula: "$(AB)^{-1} = B^{-1}A^{-1}$" }
    },
    {
        id: "la-inv-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "$(A^{-1})^T = ?$",
        options: ["$(A^T)^{-1}$", "$A^T$", "$(A^{-1})$", "$A$"],
        correctAnswer: 0,
        explanation: { solution: "Transpose and inverse commute", formula: "$(A^{-1})^T = (A^T)^{-1}$" }
    },
    // ========== RANK ==========
    {
        id: "la-rank-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Rank of a matrix is:",
        options: ["Number of rows", "Number of columns", "Maximum number of linearly independent rows/columns", "Trace of the matrix"],
        correctAnswer: 2,
        explanation: { solution: "Rank = dimension of row space = dimension of column space" }
    },
    {
        id: "la-rank-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For an m×n matrix A, rank(A) ≤ ?",
        options: ["m", "n", "min(m,n)", "max(m,n)"],
        correctAnswer: 2,
        explanation: { solution: "Rank cannot exceed number of rows or columns", formula: "rank(A) ≤ min(m,n)" }
    },
    {
        id: "la-rank-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If A is an n×n matrix with rank(A) = n, then A is:",
        options: ["Singular", "Non-singular (invertible)", "Nilpotent", "Symmetric"],
        correctAnswer: 1,
        explanation: { solution: "Full rank means no zero eigenvalues, so det ≠ 0, hence invertible" }
    },
    {
        id: "la-rank-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "rank(AB) ≤ ?",
        options: ["rank(A) + rank(B)", "rank(A) × rank(B)", "max(rank(A), rank(B))", "min(rank(A), rank(B))"],
        correctAnswer: 3,
        explanation: { solution: "Rank can only decrease (or stay same) under multiplication", formula: "rank(AB) ≤ min(rank(A), rank(B))" }
    },
    // ========== EIGENVALUES & EIGENVECTORS ==========
    {
        id: "la-eigen-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If Ax = λx for non-zero x, then λ is called:",
        options: ["Trace of A", "Rank of A", "Eigenvalue of A", "Determinant of A"],
        correctAnswer: 2,
        explanation: { solution: "Ax = λx defines eigenvalue λ and eigenvector x" }
    },
    {
        id: "la-eigen-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues are found by solving which equation?",
        options: ["Ax = 0", "det(A) = 0", "det(A - λI) = 0", "A = λI"],
        correctAnswer: 2,
        explanation: { solution: "Characteristic equation: det(A - λI) = 0 gives eigenvalues", formula: "det(A - λI) = 0 (characteristic equation)" }
    },
    {
        id: "la-eigen-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Sum of eigenvalues of matrix A equals:",
        options: ["det(A)", "rank(A)", "tr(A)", "0"],
        correctAnswer: 2,
        explanation: { solution: "Sum of eigenvalues = trace (sum of diagonal elements)", formula: "Σλᵢ = tr(A)" }
    },
    {
        id: "la-eigen-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Product of eigenvalues of matrix A equals:",
        options: ["tr(A)", "det(A)", "rank(A)", "1"],
        correctAnswer: 1,
        explanation: { solution: "Product of eigenvalues = determinant", formula: "∏λᵢ = det(A)" }
    },
    {
        id: "la-eigen-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If λ is an eigenvalue of A, then eigenvalues of A² are:",
        options: ["λ", "2λ", "$λ^2$", "$\\sqrt{λ}$"],
        correctAnswer: 2,
        explanation: { solution: "If Ax = λx, then A²x = A(Ax) = A(λx) = λ(Ax) = λ²x", formula: "Eigenvalues of Aⁿ are λⁿ" }
    },
    {
        id: "la-eigen-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If λ is an eigenvalue of A and A is invertible, eigenvalue of A⁻¹ is:",
        options: ["λ", "-λ", "1/λ", "λ²"],
        correctAnswer: 2,
        explanation: { solution: "If Ax = λx, then x = A⁻¹(λx) = λ(A⁻¹x), so A⁻¹x = (1/λ)x", formula: "Eigenvalues of A⁻¹ are 1/λ" }
    },
    {
        id: "la-eigen-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues of a triangular matrix are:",
        options: ["Sum of diagonal elements", "Product of diagonal elements", "The diagonal elements themselves", "All zeros"],
        correctAnswer: 2,
        explanation: { solution: "For triangular matrices, det(A-λI) has diagonal (aᵢᵢ - λ), so eigenvalues are the diagonal elements" }
    },
    {
        id: "la-eigen-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "All eigenvalues of a real symmetric matrix are:",
        options: ["Complex", "Imaginary", "Real", "Zero"],
        correctAnswer: 2,
        explanation: { solution: "Symmetric matrices have all real eigenvalues (fundamental result)" }
    },
    {
        id: "la-eigen-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvectors of a real symmetric matrix corresponding to distinct eigenvalues are:",
        options: ["Parallel", "Equal", "Orthogonal", "Linearly dependent"],
        correctAnswer: 2,
        explanation: { solution: "For symmetric matrices, eigenvectors for different eigenvalues are orthogonal" }
    },
    // ========== CAYLEY-HAMILTON THEOREM ==========
    {
        id: "la-ch-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Cayley-Hamilton theorem states that every square matrix:",
        options: ["Has real eigenvalues", "Is invertible", "Satisfies its own characteristic equation", "Is diagonalizable"],
        correctAnswer: 2,
        explanation: { solution: "If p(λ) = det(A-λI) is the characteristic polynomial, then p(A) = 0" }
    },
    // ========== DIAGONALIZATION ==========
    {
        id: "la-diag-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "An n×n matrix is diagonalizable if it has:",
        options: ["n eigenvalues (counting multiplicity)", "n linearly independent eigenvectors", "All distinct eigenvalues", "Positive determinant"],
        correctAnswer: 1,
        explanation: { solution: "Diagonalizable ⟺ has n linearly independent eigenvectors. Distinct eigenvalues guarantee this but aren't required." }
    },
    {
        id: "la-diag-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If A is diagonalizable, A = PDP⁻¹ where D is diagonal. D contains:",
        options: ["Rows of A", "Columns of A", "Eigenvalues of A on diagonal", "Eigenvectors of A"],
        correctAnswer: 2,
        explanation: { solution: "D is diagonal matrix of eigenvalues, P has eigenvectors as columns" }
    }
]);

console.log("Linear Algebra comprehensive questions loaded");
