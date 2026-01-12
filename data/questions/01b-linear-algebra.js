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
        explanation: { solution: "Matrix multiplication has strict dimension rules.\n\nFor A(m×n) × B(p×q) to exist: n must equal p\n\nWhy? Each element of AB is the dot product of a row of A (length n) with a column of B (length p). These must match!\n\nResult: The product matrix is m×q.\n\nExample: A(3×4) × B(4×2) = C(3×2)\nColumns of A (4) = Rows of B (4) ✔", formula: "A(m×n) × B(p×q) requires n = p, result is m×q" }
    },
    {
        id: "la-mat-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Matrix multiplication is:",
        options: ["Commutative and associative", "Commutative but not associative", "Associative but not commutative", "Neither commutative nor associative"],
        correctAnswer: 2,
        explanation: { solution: "Matrix multiplication has different algebraic properties than scalar multiplication.\n\nNOT Commutative: AB ≠ BA in general\nExample: A = [1 0; 0 0], B = [0 1; 0 0]\nAB = [0 1; 0 0], BA = [0 0; 0 0]\n\nAssociative: (AB)C = A(BC) ALWAYS holds\nThis is because matrix multiplication represents composition of linear transformations.\n\nOther properties: A(B+C) = AB + AC (distributive)", formula: "Not commutative: AB ≠ BA; Associative: (AB)C = A(BC)" }
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
        explanation: { solution: "A matrix Q is orthogonal if QᵀQ = QQᵀ = I.\n\nThis means: Q⁻¹ = Qᵀ (inverse equals transpose!)\n\nProperties of orthogonal matrices:\n1. Columns are orthonormal (unit length, mutually perpendicular)\n2. Rows are orthonormal\n3. det(Q) = ±1\n4. Preserves lengths and angles (isometry)\n\nExamples: Rotation matrices, permutation matrices, reflection matrices.", formula: "$A^T A = I$ (orthogonal)" }
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
        explanation: { solution: "The transpose of a product reverses the order of factors.\n\n(AB)ᵀ = BᵀAᵀ\n\nWhy? Let's trace dimensions:\nIf A is m×n and B is n×p, then AB is m×p\n(AB)ᵀ is p×m\nBᵀ is p×n, Aᵀ is n×m\nBᵀAᵀ is p×m ✔\n\nThis extends to multiple matrices:\n(ABC)ᵀ = CᵀBᵀAᵀ", formula: "$(AB)^T = B^T A^T$" }
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
        explanation: { solution: "A symmetric matrix equals its own transpose: Aᵀ = A\n\nThis means: aᵢⱼ = aⱼᵢ for all i,j\n\nProperties:\n1. Must be square\n2. Entries mirror across main diagonal\n3. All eigenvalues are REAL\n4. Eigenvectors can be chosen to be orthogonal\n\nExample: [1 2 3; 2 4 5; 3 5 6] is symmetric.", formula: "Symmetric: $A^T = A$" }
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
        explanation: { solution: "The determinant of a product equals the product of determinants!\n\ndet(AB) = det(A) · det(B)\n\nThis is fundamental and holds for any conformable square matrices.\n\nWhy? Determinant measures 'volume scaling factor' of a linear transformation.\nAB means first apply B then A.\nTotal scaling = scaling by A × scaling by B\n\nCorollary: det(Aⁿ) = [det(A)]ⁿ", formula: "det(AB) = det(A)·det(B)" }
    },
    {
        id: "la-det-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "det(kA) for n×n matrix A = ?",
        options: ["k·det(A)", "$k^n$·det(A)", "det(A)/k", "det(A)"],
        correctAnswer: 1,
        explanation: { solution: "When you multiply a matrix by scalar k, the determinant changes by kⁿ!\n\nFor n×n matrix A: det(kA) = kⁿ · det(A)\n\nWhy? Each of the n rows gets multiplied by k.\nDet changes by factor k for each row that's scaled.\nSo total change is k × k × ... (n times) = kⁿ\n\nExample: For 3×3 matrix: det(2A) = 2³ · det(A) = 8 det(A)", formula: "det(kA) = kⁿ·det(A)" }
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
        explanation: { solution: "A square matrix is invertible (also called non-singular) iff det(A) ≠ 0.\n\nEquivalent conditions for invertibility:\n1. det(A) ≠ 0\n2. rank(A) = n (full rank)\n3. Rows are linearly independent\n4. Columns are linearly independent\n5. A⁻¹ exists\n6. Ax = 0 has only trivial solution\n7. 0 is NOT an eigenvalue\n\nIf det(A) = 0, matrix is 'singular' (not invertible)" }
    },
    {
        id: "la-inv-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "$(AB)^{-1} = ?$",
        options: ["$A^{-1}B^{-1}$", "$B^{-1}A^{-1}$", "$(A^{-1})(B^{-1})^T$", "$A^{-1} + B^{-1}$"],
        correctAnswer: 1,
        explanation: { solution: "The inverse of a product reverses the order (just like transpose)!\n\n(AB)⁻¹ = B⁻¹A⁻¹\n\nWhy? Verify by multiplication:\n(AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AIA⁻¹ = AA⁻¹ = I ✔\n\nFor multiple matrices:\n(ABC)⁻¹ = C⁻¹B⁻¹A⁻¹\n\nRemember: 'Reverse the order'!", formula: "$(AB)^{-1} = B^{-1}A^{-1}$" }
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
        explanation: { solution: "Rank is the dimension of the column space (or row space).\n\nInterpretations:\n1. Max number of linearly independent rows\n2. Max number of linearly independent columns\n3. Number of pivot positions in row echelon form\n4. Dimension of the image of the linear transformation\n\nImportant: Row rank = Column rank (always!)\n\nFor n×n matrix: rank = n means full rank (invertible)" }
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
        explanation: { solution: "Eigenvalues and eigenvectors are fundamental in Linear Algebra.\n\nIf Ax = λx for some non-zero vector x:\n- λ is an EIGENVALUE of A\n- x is the corresponding EIGENVECTOR\n\nGeometric meaning: A linear transformation only scales x (by factor λ) without changing its direction.\n\nNote: Eigenvector x cannot be zero (by definition), but eigenvalue λ can be 0." }
    },
    {
        id: "la-eigen-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues are found by solving which equation?",
        options: ["Ax = 0", "det(A) = 0", "det(A - λI) = 0", "A = λI"],
        correctAnswer: 2,
        explanation: { solution: "To find eigenvalues, solve the characteristic equation:\n\ndet(A - λI) = 0\n\nDerivation:\nAx = λx\nAx - λx = 0\n(A - λI)x = 0\nFor non-zero x to exist: det(A - λI) = 0\n\nThis polynomial equation in λ gives all eigenvalues.\n\nFor 2×2: λ² - tr(A)λ + det(A) = 0\nFor 3×3: cubic equation", formula: "det(A - λI) = 0 (characteristic equation)" }
    },
    {
        id: "la-eigen-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Sum of eigenvalues of matrix A equals:",
        options: ["det(A)", "rank(A)", "tr(A)", "0"],
        correctAnswer: 2,
        explanation: { solution: "One of the most important eigenvalue properties!\n\nΣλᵢ = tr(A) (sum of eigenvalues = trace)\n∏λᵢ = det(A) (product of eigenvalues = determinant)\n\nFor 2×2 matrix with eigenvalues λ₁, λ₂:\nλ₁ + λ₂ = a₁₁ + a₂₂ (trace)\nλ₁ × λ₂ = det(A)\n\nThese relations come from Vieta's formulas applied to the characteristic polynomial.", formula: "Σλᵢ = tr(A)" }
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
        explanation: { solution: "Cayley-Hamilton Theorem: Every matrix satisfies its own characteristic equation!\n\nIf p(λ) = det(A - λI) = λⁿ - cₙ₋₁λⁿ⁻¹ - ... - c₁λ - c₀\n\nThen p(A) = Aⁿ - cₙ₋₁Aⁿ⁻¹ - ... - c₁A - c₀I = 0\n\nApplications:\n1. Find A⁻¹ using A⁻¹ = (1/c₀)(Aⁿ⁻¹ - cₙ₋₁Aⁿ⁻² - ...)\n2. Simplify powers Aⁿ (reduce to lower powers)\n3. Verify matrix computations" }
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
        explanation: { solution: "A matrix is diagonalizable if it can be written as A = PDP⁻¹ where D is diagonal.\n\nCondition: Must have n linearly independent eigenvectors.\n\nGuarantees for diagonalizability:\n1. All n eigenvalues are distinct → always diagonalizable\n2. Symmetric/Hermitian matrix → always diagonalizable\n\nNote: Even if eigenvalues repeat, the matrix MAY still be diagonalizable if geometric multiplicity = algebraic multiplicity for each eigenvalue." }
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
