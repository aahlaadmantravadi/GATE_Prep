/**
 * Linear Algebra EXHAUSTIVE - Part 2
 * System of Equations, Rank, Vector Spaces, Diagonalization
 */

Questions.register([
    // ========== MATRIX TYPES (from document) ==========
    {
        id: "la-type-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A matrix A is symmetric if:",
        options: ["A = -A", "A^T = A", "A^T = -A", "A^T = A^(-1)"],
        correctAnswer: 1,
        explanation: { solution: "Symmetric matrix: A^T = A (transpose equals itself)", formula: "A^T = A" }
    },
    {
        id: "la-type-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A matrix A is skew-symmetric if:",
        options: ["A^T = A", "A^T = -A", "A^T = A^(-1)", "A = A^(-1)"],
        correctAnswer: 1,
        explanation: { solution: "Skew-symmetric: A^T = -A", formula: "A^T = -A" }
    },
    {
        id: "la-type-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A matrix A is orthogonal if:",
        options: ["A^T = A", "A^T = -A", "A^T = A^(-1)", "A = -A"],
        correctAnswer: 2,
        explanation: { solution: "Orthogonal: A^T = A^(-1), equivalently AA^T = I", formula: "A^T = A^(-1)" }
    },
    {
        id: "la-type-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For any matrix A, the matrix AA^T is always:",
        options: ["Skew-symmetric", "Symmetric", "Orthogonal", "Singular"],
        correctAnswer: 1,
        explanation: { solution: "(AA^T)^T = (A^T)^T A^T = AA^T. So AA^T is symmetric.", formula: "AA^T is always symmetric" }
    },
    {
        id: "la-type-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Any square matrix A can be written as sum of:",
        options: ["Two symmetric matrices", "Two skew-symmetric matrices", "A symmetric and a skew-symmetric matrix", "Two orthogonal matrices"],
        correctAnswer: 2,
        explanation: { solution: "A = (A+A^T)/2 + (A-A^T)/2 where first is symmetric, second is skew-symmetric", formula: "A = (A+A^T)/2 + (A-A^T)/2" }
    },
    {
        id: "la-type-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For orthogonal matrices, the determinant equals:",
        options: ["0", "1", "-1", "±1"],
        correctAnswer: 3,
        explanation: { solution: "If A^T A = I, then |A^T||A| = 1, so |A|² = 1, hence |A| = ±1", formula: "|A| = ±1 for orthogonal A" }
    },
    {
        id: "la-type-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A Hermitian matrix satisfies:",
        options: ["A = A^T", "A = A̅ (conjugate transpose)", "A = -A̅", "A = A^(-1)"],
        correctAnswer: 1,
        explanation: { solution: "Hermitian: A = A̅ (equals its conjugate transpose)", formula: "A = A̅" }
    },
    {
        id: "la-type-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A Skew-Hermitian matrix satisfies:",
        options: ["A = A̅", "A = -A̅", "A = A^T", "A^(-1) = A̅"],
        correctAnswer: 1,
        explanation: { solution: "Skew-Hermitian: A = -A̅", formula: "A = -A̅" }
    },
    {
        id: "la-type-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A Unitary matrix satisfies:",
        options: ["A = A̅", "A̅ = A^(-1)", "A = A^T", "A^(-1) = A"],
        correctAnswer: 1,
        explanation: { solution: "Unitary: A̅ = A^(-1), i.e., AA̅ = I", formula: "A̅ = A^(-1)" }
    },
    // ========== DETERMINANT PROPERTIES (exhaustive from document) ==========
    {
        id: "la-det-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If A is an n×n matrix and k is a scalar, then |kA| equals:",
        options: ["k|A|", "k²|A|", "k^n |A|", "k^(n-1)|A|"],
        correctAnswer: 2,
        explanation: { solution: "Each row multiplied by k, so |kA| = k^n |A|", formula: "|kA_{n×n}| = k^n |A|" }
    },
    {
        id: "la-det-011",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "|adj(A)| for an n×n matrix A equals:",
        options: ["|A|", "|A|^n", "|A|^(n-1)", "|A|^(n+1)"],
        correctAnswer: 2,
        explanation: { solution: "From A·adj(A) = |A|·I, taking determinants: |A||adj(A)| = |A|^n, so |adj(A)| = |A|^(n-1)", formula: "|adj(A)| = |A|^(n-1)" }
    },
    {
        id: "la-det-012",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "|adj(adj(A))| for an n×n matrix A equals:",
        options: ["|A|^(n-1)", "|A|^((n-1)²)", "|A|^(n-2)", "|A|^n"],
        correctAnswer: 1,
        explanation: { solution: "adj(adj(A)) has determinant |A|^((n-1)²)", formula: "|adj(adj(A))| = |A|^((n-1)²)" }
    },
    {
        id: "la-det-013",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The determinant of a triangular matrix (upper or lower) equals:",
        options: ["Sum of diagonal elements", "Product of diagonal elements", "Sum of all elements", "0"],
        correctAnswer: 1,
        explanation: { solution: "Triangular matrix: det = product of diagonal elements", formula: "|A| = a₁₁·a₂₂·...·aₙₙ" }
    },
    {
        id: "la-det-014",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The determinant of an odd-order skew-symmetric matrix is always:",
        options: ["Positive", "Negative", "Zero", "±1"],
        correctAnswer: 2,
        explanation: { solution: "|A| = |A^T| = |-A| = (-1)^n |A|. For odd n: |A| = -|A|, so |A| = 0", formula: "|A| = 0 for odd-order skew-symmetric" }
    },
    {
        id: "la-det-015",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The determinant of an idempotent matrix is:",
        options: ["0", "1", "0 or 1", "±1"],
        correctAnswer: 2,
        explanation: { solution: "A² = A implies |A|² = |A|, so |A|(|A| - 1) = 0, hence |A| = 0 or 1", formula: "|A| = 0 or 1" }
    },
    {
        id: "la-det-016",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The determinant of an involutory matrix is:",
        options: ["0", "1", "±1", "0 or 1"],
        correctAnswer: 2,
        explanation: { solution: "A² = I implies |A|² = 1, so |A| = ±1", formula: "|A| = ±1" }
    },
    {
        id: "la-det-017",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The determinant of a nilpotent matrix is:",
        options: ["1", "-1", "0", "±1"],
        correctAnswer: 2,
        explanation: { solution: "A^k = 0 implies |A|^k = 0, so |A| = 0", formula: "|A| = 0" }
    },
    {
        id: "la-det-018",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If AB = 0 where A and B are non-zero n×n matrices, then:",
        options: ["|A| = 0 only", "|B| = 0 only", "Both |A| = 0 and |B| = 0", "Neither need be 0"],
        correctAnswer: 2,
        explanation: { solution: "|AB| = |A||B| = 0. Since AB = 0 but A,B ≠ 0, both must be singular", formula: "Both |A| = 0 and |B| = 0" }
    },
    {
        id: "la-det-019",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If two rows (or columns) of a matrix are identical, the determinant is:",
        options: ["1", "-1", "0", "Undefined"],
        correctAnswer: 2,
        explanation: { solution: "Identical or proportional rows/columns make determinant = 0" }
    },
    {
        id: "la-det-020",
        type: "NAT",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Number of terms in the expansion of an n×n determinant is n!. For a 4×4 determinant, this is:",
        correctAnswer: 24,
        tolerance: 0,
        explanation: { solution: "n! = 4! = 24 terms", formula: "Terms = n!" }
    },
    {
        id: "la-det-021",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "|A| = |A^T| means the determinant value:",
        options: ["Changes under transpose", "Remains unchanged under transpose", "Becomes negative under transpose", "Doubles under transpose"],
        correctAnswer: 1,
        explanation: { solution: "Determinant is invariant under transpose" }
    },
    {
        id: "la-det-022",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Elementary row operation Rᵢ → Rᵢ + kRⱼ changes the determinant by:",
        options: ["Multiplying by k", "Adding k", "Not changing (keeps same)", "Multiplying by -1"],
        correctAnswer: 2,
        explanation: { solution: "Adding multiple of one row to another doesn't change determinant" }
    },
    // ========== MINORS, COFACTORS, ADJOINT ==========
    {
        id: "la-cof-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Cofactor of element aᵢⱼ equals:",
        options: ["(-1)^(i+j) × Minor of aᵢⱼ", "(-1)^(i×j) × Minor of aᵢⱼ", "Minor of aᵢⱼ", "(-1)^i × Minor of aᵢⱼ"],
        correctAnswer: 0,
        explanation: { solution: "Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ", formula: "Cofactor = (-1)^(i+j) × Minor" }
    },
    {
        id: "la-cof-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Adjoint of matrix A is:",
        options: ["Transpose of A", "Inverse of A", "Transpose of cofactor matrix of A", "Determinant of A"],
        correctAnswer: 2,
        explanation: { solution: "adj(A) = (cofactor matrix of A)^T", formula: "adj(A) = C^T" }
    },
    {
        id: "la-cof-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A·adj(A) equals:",
        options: ["A", "|A|", "|A|·I", "I"],
        correctAnswer: 2,
        explanation: { solution: "A·adj(A) = |A|·I (identity matrix times determinant)", formula: "A·adj(A) = |A|·I" }
    },
    // ========== MATRIX INVERSE ==========
    {
        id: "la-inv-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A^(-1) exists only if:",
        options: ["|A| = 0", "|A| ≠ 0", "A is symmetric", "A is diagonal"],
        correctAnswer: 1,
        explanation: { solution: "Matrix is invertible (non-singular) iff determinant ≠ 0", formula: "|A| ≠ 0" }
    },
    {
        id: "la-inv-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A^(-1) = ?",
        options: ["adj(A)/|A|", "|A|/adj(A)", "adj(A)×|A|", "adj(A)"],
        correctAnswer: 0,
        explanation: { solution: "A^(-1) = adj(A)/|A|", formula: "A^(-1) = adj(A)/|A|" }
    },
    {
        id: "la-inv-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "(AB)^(-1) equals:",
        options: ["A^(-1)B^(-1)", "B^(-1)A^(-1)", "A^(-1) + B^(-1)", "Cannot be computed"],
        correctAnswer: 1,
        explanation: { solution: "(AB)^(-1) = B^(-1)A^(-1) (reverse order)", formula: "(AB)^(-1) = B^(-1)A^(-1)" }
    },
    {
        id: "la-inv-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "(A^T)^(-1) equals:",
        options: ["(A^(-1))^T", "A^(-1)", "A^T", "-(A^(-1))^T"],
        correctAnswer: 0,
        explanation: { solution: "(A^T)^(-1) = (A^(-1))^T", formula: "(A^T)^(-1) = (A^(-1))^T" }
    },
    {
        id: "la-inv-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For 2×2 matrix [a b; c d], the inverse is obtained by:",
        options: ["Swapping a and d, negating b and c, dividing by det", "Just taking transpose", "Negating all elements", "Swapping rows"],
        correctAnswer: 0,
        explanation: { solution: "[a b; c d]^(-1) = [d -b; -c a]/(ad-bc)", formula: "Swap diagonals, negate off-diagonals, divide by det" }
    },
    // ========== RANK ==========
    {
        id: "la-rank-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Rank of a matrix is defined as:",
        options: ["Number of rows", "Number of columns", "Number of linearly independent rows/columns", "Determinant value"],
        correctAnswer: 2,
        explanation: { solution: "Rank = dimension of row space = dimension of column space = number of linearly independent rows/columns" }
    },
    {
        id: "la-rank-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Rank of the zero matrix is:",
        options: ["1", "0", "Undefined", "Same as order"],
        correctAnswer: 1,
        explanation: { solution: "Zero matrix has rank 0 (no non-zero rows)", formula: "ρ(0) = 0" }
    },
    {
        id: "la-rank-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For an m×n matrix A, rank(A) ≤:",
        options: ["m", "n", "min(m, n)", "max(m, n)"],
        correctAnswer: 2,
        explanation: { solution: "ρ(A) ≤ min(m, n)", formula: "ρ(A_{m×n}) ≤ min(m, n)" }
    },
    {
        id: "la-rank-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "ρ(AB) ≤:",
        options: ["ρ(A) + ρ(B)", "ρ(A) × ρ(B)", "min{ρ(A), ρ(B)}", "max{ρ(A), ρ(B)}"],
        correctAnswer: 2,
        explanation: { solution: "Rank of product ≤ minimum of individual ranks", formula: "ρ(AB) ≤ min{ρ(A), ρ(B)}" }
    },
    {
        id: "la-rank-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "ρ(A + B) ≤:",
        options: ["ρ(A) × ρ(B)", "ρ(A) + ρ(B)", "min{ρ(A), ρ(B)}", "max{ρ(A), ρ(B)}"],
        correctAnswer: 1,
        explanation: { solution: "Rank of sum ≤ sum of ranks", formula: "ρ(A+B) ≤ ρ(A) + ρ(B)" }
    },
    {
        id: "la-rank-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "ρ(A^T) equals:",
        options: ["0", "ρ(A) + 1", "ρ(A)", "Different from ρ(A)"],
        correctAnswer: 2,
        explanation: { solution: "Rank is invariant under transpose", formula: "ρ(A^T) = ρ(A)" }
    },
    {
        id: "la-rank-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Elementary row/column operations:",
        options: ["Change the rank", "Don't change the rank", "Double the rank", "Set rank to zero"],
        correctAnswer: 1,
        explanation: { solution: "Elementary operations preserve rank" }
    },
    {
        id: "la-rank-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A matrix is in row echelon form if:",
        options: ["All elements are zero", "Leading entry in each row is to the right of the row above", "All rows are identical", "Diagonal elements are 1"],
        correctAnswer: 1,
        explanation: { solution: "Row echelon: staircase pattern with leading 1s moving right, zero rows at bottom" }
    },
    {
        id: "la-rank-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Rank of a matrix in row echelon form equals:",
        options: ["Number of columns", "Number of rows", "Number of non-zero rows", "Number of zero rows"],
        correctAnswer: 2,
        explanation: { solution: "ρ(A) = number of non-zero rows in row echelon form" }
    },
    {
        id: "la-rank-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Nullity of a matrix A is:",
        options: ["Same as rank", "Dimension of null space", "Number of rows", "Always zero"],
        correctAnswer: 1,
        explanation: { solution: "Nullity = dimension of null space (solution space of Ax = 0)" }
    },
    {
        id: "la-rank-011",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Rank-Nullity theorem states: For m×n matrix A, rank(A) + nullity(A) =:",
        options: ["m", "n", "m + n", "min(m, n)"],
        correctAnswer: 1,
        explanation: { solution: "ρ(A) + nullity(A) = n (number of columns)", formula: "Rank + Nullity = n" }
    },
    // ========== SYSTEM OF EQUATIONS ==========
    {
        id: "la-sys-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "System Ax = B is homogeneous if:",
        options: ["A = 0", "B = 0", "x = 0", "A = B"],
        correctAnswer: 1,
        explanation: { solution: "Homogeneous system: Ax = 0 (B is zero vector)" }
    },
    {
        id: "la-sys-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For non-homogeneous system Ax = B, unique solution exists if:",
        options: ["ρ(A) < ρ[A|B]", "ρ(A) = ρ[A|B] = number of unknowns", "ρ(A) ≠ ρ[A|B]", "ρ(A) = 0"],
        correctAnswer: 1,
        explanation: { solution: "Unique solution: ρ(A) = ρ[A|B] = n", formula: "ρ(A) = ρ[A|B] = n" }
    },
    {
        id: "la-sys-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For non-homogeneous system Ax = B, infinitely many solutions exist if:",
        options: ["ρ(A) = ρ[A|B] < number of unknowns", "ρ(A) ≠ ρ[A|B]", "ρ(A) = ρ[A|B] = n", "|A| ≠ 0"],
        correctAnswer: 0,
        explanation: { solution: "Infinite solutions: ρ(A) = ρ[A|B] < n", formula: "ρ(A) = ρ[A|B] < n" }
    },
    {
        id: "la-sys-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "For non-homogeneous system Ax = B, no solution exists if:",
        options: ["ρ(A) = ρ[A|B]", "ρ(A) ≠ ρ[A|B]", "|A| ≠ 0", "ρ(A) = n"],
        correctAnswer: 1,
        explanation: { solution: "No solution (inconsistent): ρ(A) ≠ ρ[A|B]", formula: "ρ(A) ≠ ρ[A|B]" }
    },
    {
        id: "la-sys-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Homogeneous system Ax = 0 always has:",
        options: ["No solution", "Exactly one solution", "At least the trivial solution x = 0", "Infinitely many solutions"],
        correctAnswer: 2,
        explanation: { solution: "x = 0 always satisfies Ax = 0 (trivial solution)" }
    },
    {
        id: "la-sys-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Homogeneous system Ax = 0 has non-trivial solutions if:",
        options: ["|A| ≠ 0", "|A| = 0", "ρ(A) = n", "A is invertible"],
        correctAnswer: 1,
        explanation: { solution: "Non-trivial solutions exist iff |A| = 0 (ρ(A) < n)", formula: "|A| = 0" }
    },
    {
        id: "la-sys-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Number of linearly independent solutions of Ax = 0 is:",
        options: ["ρ(A)", "n - ρ(A)", "n + ρ(A)", "0"],
        correctAnswer: 1,
        explanation: { solution: "Dimension of solution space = n - ρ(A) = nullity", formula: "n - ρ(A)" }
    },
    // ========== LINEAR INDEPENDENCE ==========
    {
        id: "la-li-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Vectors x₁, x₂, ..., xₙ are linearly dependent if:",
        options: ["k₁x₁ + k₂x₂ + ... + kₙxₙ = 0 only when all kᵢ = 0", "k₁x₁ + k₂x₂ + ... + kₙxₙ = 0 for some kᵢ ≠ 0", "They are orthogonal", "They have same norm"],
        correctAnswer: 1,
        explanation: { solution: "Linearly dependent: non-trivial linear combination equals zero" }
    },
    {
        id: "la-li-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Three 3D vectors are linearly dependent if the determinant of the matrix formed by them is:",
        options: ["1", "-1", "0", "Non-zero"],
        correctAnswer: 2,
        explanation: { solution: "Vectors linearly dependent ↔ det = 0" }
    },
    {
        id: "la-li-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Two vectors are orthogonal if:",
        options: ["Their sum is zero", "Their dot product is zero", "They are equal", "They have same magnitude"],
        correctAnswer: 1,
        explanation: { solution: "Orthogonal: x₁^T × x₂ = 0", formula: "x₁·x₂ = 0" }
    },
    // ========== EIGENVALUES & EIGENVECTORS ==========
    {
        id: "la-eig-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "The characteristic equation of matrix A is:",
        options: ["|A - λI| = 0", "|A + λI| = 0", "|A - I| = 0", "|A| = 0"],
        correctAnswer: 0,
        explanation: { solution: "det(A - λI) = 0 is the characteristic equation", formula: "|A - λI| = 0" }
    },
    {
        id: "la-eig-011",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Sum of all eigenvalues of a matrix A equals:",
        options: ["Determinant", "Trace", "Rank", "Order"],
        correctAnswer: 1,
        explanation: { solution: "Σλᵢ = trace(A) = sum of diagonal elements", formula: "Σλᵢ = trace(A)" }
    },
    {
        id: "la-eig-012",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Product of all eigenvalues of a matrix A equals:",
        options: ["Trace", "Rank", "Determinant", "Order"],
        correctAnswer: 2,
        explanation: { solution: "∏λᵢ = |A| (determinant)", formula: "∏λᵢ = |A|" }
    },
    {
        id: "la-eig-013",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If λ is an eigenvalue of A, then eigenvalue of A^m is:",
        options: ["mλ", "λ + m", "λ^m", "λ/m"],
        correctAnswer: 2,
        explanation: { solution: "Eigenvalue of A^m = λ^m", formula: "λ^m" }
    },
    {
        id: "la-eig-014",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalue of adj(A) if λ is eigenvalue of A is:",
        options: ["|A|/λ", "λ/|A|", "|A| + λ", "|A| - λ"],
        correctAnswer: 0,
        explanation: { solution: "Eigenvalue of adj(A) = |A|/λ", formula: "λ(adj A) = |A|/λ" }
    },
    {
        id: "la-eig-015",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues of A and A^T are:",
        options: ["Different", "Same", "Negatives of each other", "Reciprocals"],
        correctAnswer: 1,
        explanation: { solution: "Eigenvalues of A and A^T are the same" }
    },
    {
        id: "la-eig-016",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If λ is eigenvalue of A, then eigenvalue of (k₁A + k₂I) is:",
        options: ["k₁λ", "k₁λ + k₂", "k₁ + k₂λ", "k₁k₂λ"],
        correctAnswer: 1,
        explanation: { solution: "Linear transformation: eigenvalue = k₁λ + k₂", formula: "k₁λ + k₂" }
    },
    {
        id: "la-eig-017",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "0 is always an eigenvalue of:",
        options: ["Symmetric matrix", "Orthogonal matrix", "Odd-order skew-symmetric matrix", "Diagonal matrix"],
        correctAnswer: 2,
        explanation: { solution: "|A| = 0 for odd-order skew-symmetric, so 0 is eigenvalue" }
    },
    {
        id: "la-eig-018",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues of a real symmetric matrix are always:",
        options: ["Complex", "Purely imaginary", "Real", "Zero"],
        correctAnswer: 2,
        explanation: { solution: "Real symmetric matrices have real eigenvalues" }
    },
    {
        id: "la-eig-019",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues of a skew-symmetric matrix are:",
        options: ["All positive", "All negative", "Zero or purely imaginary", "All real"],
        correctAnswer: 2,
        explanation: { solution: "Skew-symmetric: eigenvalues are 0 or purely imaginary" }
    },
    {
        id: "la-eig-020",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues of an orthogonal matrix have modulus:",
        options: ["0", "1", "Greater than 1", "Less than 1"],
        correctAnswer: 1,
        explanation: { solution: "Orthogonal: eigenvalues have |λ| = 1 (unit modulus)" }
    },
    {
        id: "la-eig-021",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvalues of a triangular matrix are:",
        options: ["Sum of all elements", "Product of all elements", "Diagonal elements", "Zero"],
        correctAnswer: 2,
        explanation: { solution: "Triangular matrix: eigenvalues = diagonal elements" }
    },
    {
        id: "la-eig-022",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If row sum is constant k for all rows, then k is:",
        options: ["Determinant of A", "An eigenvalue of A", "Trace of A", "Rank of A"],
        correctAnswer: 1,
        explanation: { solution: "Constant row sum k means [1,1,...,1]^T is eigenvector with eigenvalue k" }
    },
    // ========== EIGENVECTOR PROPERTIES ==========
    {
        id: "la-evec-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "An eigenvector X of matrix A corresponding to eigenvalue λ satisfies:",
        options: ["AX = X", "AX = λX", "AX = λ", "AX = 0"],
        correctAnswer: 1,
        explanation: { solution: "Eigenvector equation: AX = λX (X ≠ 0)", formula: "AX = λX" }
    },
    {
        id: "la-evec-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvectors of A and A^T are:",
        options: ["Same", "Different", "Transposes of each other", "Negatives of each other"],
        correctAnswer: 1,
        explanation: { solution: "Eigenvectors of A and A^T are generally different (unlike eigenvalues)" }
    },
    {
        id: "la-evec-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvectors of A and A^m (m > 0) are:",
        options: ["Different", "Same", "Orthogonal", "Linearly dependent"],
        correctAnswer: 1,
        explanation: { solution: "Eigenvectors of A and A^m are the same" }
    },
    {
        id: "la-evec-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Eigenvectors of a real symmetric matrix are:",
        options: ["Parallel", "Orthogonal", "Same", "Zero"],
        correctAnswer: 1,
        explanation: { solution: "Real symmetric: eigenvectors corresponding to distinct eigenvalues are orthogonal" }
    },
    // ========== CAYLEY-HAMILTON THEOREM ==========
    {
        id: "la-ch-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Cayley-Hamilton theorem states that every matrix:",
        options: ["Is diagonalizable", "Satisfies its characteristic equation", "Has real eigenvalues", "Is invertible"],
        correctAnswer: 1,
        explanation: { solution: "If p(λ) = 0 is characteristic equation, then p(A) = 0 (matrix satisfies its own characteristic equation)" }
    },
    {
        id: "la-ch-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Using Cayley-Hamilton, when λ is replaced by A in characteristic equation, the constant term c becomes:",
        options: ["c", "cA", "cI", "0"],
        correctAnswer: 2,
        explanation: { solution: "Constant c becomes cI (c times identity matrix)" }
    },
    // ========== SIMILAR MATRICES & DIAGONALIZATION ==========
    {
        id: "la-sim-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Two matrices A and B are similar if there exists non-singular P such that:",
        options: ["A = PB", "B = PA", "B = P^(-1)AP", "A = P + B"],
        correctAnswer: 2,
        explanation: { solution: "Similar: B = P^(-1)AP", formula: "B = P^(-1)AP" }
    },
    {
        id: "la-sim-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Similar matrices have:",
        options: ["Same eigenvalues", "Same eigenvectors", "Same rows", "Same columns"],
        correctAnswer: 0,
        explanation: { solution: "Similar matrices have the same eigenvalues" }
    },
    {
        id: "la-diag-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "A matrix A is diagonalizable if it has:",
        options: ["All zero eigenvalues", "n linearly independent eigenvectors", "Trace = 0", "|A| = 0"],
        correctAnswer: 1,
        explanation: { solution: "Diagonalizable iff n×n matrix has n linearly independent eigenvectors" }
    },
    {
        id: "la-diag-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "Sufficient (but not necessary) condition for diagonalizability is:",
        options: ["|A| = 0", "n distinct eigenvalues", "All eigenvalues = 0", "A is singular"],
        correctAnswer: 1,
        explanation: { solution: "n distinct eigenvalues → n independent eigenvectors → diagonalizable" }
    },
    {
        id: "la-diag-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Linear Algebra",
        question: "If D = M^(-1)AM where D is diagonal, the diagonal elements of D are:",
        options: ["Eigenvalues of A", "Rows of A", "Columns of A", "Elements of A"],
        correctAnswer: 0,
        explanation: { solution: "D has eigenvalues of A on diagonal" }
    }
]);

console.log("Exhaustive Linear Algebra Part 2 loaded - ~75 questions");
