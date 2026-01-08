/**
 * Engineering Mathematics MEGA EXPANSION - Calculus Deep Dive
 * Limits, Continuity, Derivatives, Integration, MVTs, Series
 */

Questions.register([
    // ========== LIMITS - BASICS ==========
    {
        id: "calc-lim-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "For limit of f(x) to exist at x=a:",
        options: ["LHL must exist", "RHL must exist", "LHL = RHL", "f(a) must exist"],
        correctAnswer: 2,
        explanation: { solution: "lim(x→a) f(x) exists iff LHL = RHL" }
    },
    {
        id: "calc-lim-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (sin x)/x = ?",
        options: ["0", "1", "∞", "Does not exist"],
        correctAnswer: 1,
        explanation: { solution: "Standard limit: sin x / x → 1 as x → 0" }
    },
    {
        id: "calc-lim-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (tan x)/x = ?",
        options: ["0", "1", "∞", "-1"],
        correctAnswer: 1,
        explanation: { solution: "tan x / x → 1 as x → 0" }
    },
    {
        id: "calc-lim-004",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (1-cos x)/x² = ?",
        options: ["0", "1/2", "1", "2"],
        correctAnswer: 1,
        explanation: { solution: "(1-cos x)/x² → 1/2 as x → 0" }
    },
    {
        id: "calc-lim-005",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (eˣ-1)/x = ?",
        options: ["0", "1", "e", "∞"],
        correctAnswer: 1,
        explanation: { solution: "(eˣ-1)/x → 1 as x → 0" }
    },
    {
        id: "calc-lim-006",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (aˣ-1)/x = ?",
        options: ["1", "a", "log a", "0"],
        correctAnswer: 2,
        explanation: { solution: "(aˣ-1)/x → log_e(a) as x → 0" }
    },
    {
        id: "calc-lim-007",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→∞ (1+1/x)ˣ = ?",
        options: ["1", "0", "e", "∞"],
        correctAnswer: 2,
        explanation: { solution: "(1+1/x)^x → e as x → ∞" }
    },
    {
        id: "calc-lim-008",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (1+ax)^(b/x) = ?",
        options: ["1", "e^ab", "e^(a/b)", "e^a"],
        correctAnswer: 1,
        explanation: { solution: "(1+ax)^(b/x) → e^(ab) as x → 0" }
    },
    // ========== L'HOPITAL'S RULE ==========
    {
        id: "calc-lh-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "L'Hôpital's rule applies when limit gives form:",
        options: ["0/0 or ∞/∞", "0/1", "1/0", "Any form"],
        correctAnswer: 0,
        explanation: { solution: "L'Hôpital: for 0/0 or ∞/∞, take derivative of num and denom" }
    },
    {
        id: "calc-lh-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "0×∞ form can be converted to:",
        options: ["0/0 or ∞/∞ for L'Hôpital", "Already determinate", "Always 0", "Always ∞"],
        correctAnswer: 0,
        explanation: { solution: "f×g = f/(1/g) gives 0/0 or ∞/∞" }
    },
    {
        id: "calc-lh-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Limits",
        question: "For 0⁰, 1^∞, ∞⁰ forms, which technique helps?",
        options: ["Direct substitution", "Take log: y=f^g, log y = g·log f", "L'Hôpital directly", "None"],
        correctAnswer: 1,
        explanation: { solution: "log y = g·log f converts to product form" }
    },
    // ========== CONTINUITY ==========
    {
        id: "calc-cont-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Continuity",
        question: "f(x) is continuous at x=a if:",
        options: ["Limit exists", "f(a) exists", "Limit = f(a)", "f'(a) exists"],
        correctAnswer: 2,
        explanation: { solution: "Continuous: lim(x→a) f(x) = f(a)" }
    },
    {
        id: "calc-cont-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Continuity",
        question: "For continuity at x=a, we need:",
        options: ["LHL = RHL only", "LHL = RHL = f(a)", "f(a) exists only", "f'(a) exists"],
        correctAnswer: 1,
        explanation: { solution: "Left limit = Right limit = Value at point" }
    },
    {
        id: "calc-cont-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Continuity",
        question: "f(x) = [x] (greatest integer) is discontinuous at:",
        options: ["Only x=0", "All integers", "All real numbers", "Nowhere"],
        correctAnswer: 1,
        explanation: { solution: "[x] has jump discontinuity at all integers" }
    },
    {
        id: "calc-cont-004",
        type: "MCQ",
        topic: "math",
        subtopic: "Continuity",
        question: "f(x) = |x| is continuous but not differentiable at:",
        options: ["All x", "x = 0", "x = 1", "Nowhere"],
        correctAnswer: 1,
        explanation: { solution: "|x| continuous everywhere, not differentiable at x=0 (corner)" }
    },
    // ========== DIFFERENTIABILITY ==========
    {
        id: "calc-diff-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Differentiability",
        question: "f(x) is differentiable at x=a if:",
        options: ["f is continuous at a", "lim(x→a) [f(x)-f(a)]/(x-a) exists", "f(a) is defined", "f is bounded at a"],
        correctAnswer: 1,
        explanation: { solution: "Derivative is limit of difference quotient" }
    },
    {
        id: "calc-diff-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Differentiability",
        question: "If f is differentiable at x=a, then f is:",
        options: ["Discontinuous at a", "Continuous at a", "Not defined at a", "Unbounded at a"],
        correctAnswer: 1,
        explanation: { solution: "Differentiability implies continuity (converse not true)" }
    },
    {
        id: "calc-diff-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Differentiability",
        question: "Geometric meaning of f'(a) is:",
        options: ["y-intercept", "Slope of tangent at x=a", "Area under curve", "Length of curve"],
        correctAnswer: 1,
        explanation: { solution: "f'(a) = slope of tangent = tan θ" }
    },
    // ========== STANDARD DERIVATIVES ==========
    {
        id: "calc-der-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (xⁿ) = ?",
        options: ["xⁿ⁻¹", "nxⁿ⁻¹", "nxⁿ", "x^(n+1)"],
        correctAnswer: 1,
        explanation: { solution: "Power rule: d/dx(x^n) = nx^(n-1)" }
    },
    {
        id: "calc-der-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (sin x) = ?",
        options: ["-sin x", "cos x", "-cos x", "tan x"],
        correctAnswer: 1,
        explanation: { solution: "d/dx(sin x) = cos x" }
    },
    {
        id: "calc-der-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (cos x) = ?",
        options: ["sin x", "-sin x", "cos x", "-cos x"],
        correctAnswer: 1,
        explanation: { solution: "d/dx(cos x) = -sin x" }
    },
    {
        id: "calc-der-004",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (tan x) = ?",
        options: ["sec x", "sec²x", "cot x", "-csc²x"],
        correctAnswer: 1,
        explanation: { solution: "d/dx(tan x) = sec²x" }
    },
    {
        id: "calc-der-005",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (eˣ) = ?",
        options: ["xeˣ⁻¹", "eˣ", "eˣ ln e", "e^(x-1)"],
        correctAnswer: 1,
        explanation: { solution: "d/dx(e^x) = e^x" }
    },
    {
        id: "calc-der-006",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (ln x) = ?",
        options: ["1/x", "x", "ln x / x", "1/ln x"],
        correctAnswer: 0,
        explanation: { solution: "d/dx(ln x) = 1/x" }
    },
    {
        id: "calc-der-007",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (aˣ) = ?",
        options: ["xaˣ⁻¹", "aˣ ln a", "aˣ / ln a", "a^x"],
        correctAnswer: 1,
        explanation: { solution: "d/dx(a^x) = a^x · ln a" }
    },
    {
        id: "calc-der-008",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (sin⁻¹x) = ?",
        options: ["1/√(1-x²)", "-1/√(1-x²)", "1/(1+x²)", "1/√(x²-1)"],
        correctAnswer: 0,
        explanation: { solution: "d/dx(arcsin x) = 1/√(1-x²)" }
    },
    {
        id: "calc-der-009",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (tan⁻¹x) = ?",
        options: ["1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)", "sec²x"],
        correctAnswer: 1,
        explanation: { solution: "d/dx(arctan x) = 1/(1+x²)" }
    },
    {
        id: "calc-der-010",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (xˣ) = ?",
        options: ["x^x", "x^x (1 + ln x)", "x · x^(x-1)", "ln x · x^x"],
        correctAnswer: 1,
        explanation: { solution: "Use log diff: y=x^x, ln y = x ln x, dy/dx = x^x(1+ln x)" }
    },
    // ========== DIFFERENTIATION RULES ==========
    {
        id: "calc-rule-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "Product rule: d/dx(f·g) = ?",
        options: ["f'·g'", "f·g' + f'·g", "f'·g - f·g'", "(f·g)'"],
        correctAnswer: 1,
        explanation: { solution: "(fg)' = f·g' + f'·g" }
    },
    {
        id: "calc-rule-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "Quotient rule: d/dx(f/g) = ?",
        options: ["f'/g'", "(f'g - fg')/g²", "(gf' - fg')/g²", "f'g + fg'"],
        correctAnswer: 2,
        explanation: { solution: "(f/g)' = (g·f' - f·g')/g²" }
    },
    {
        id: "calc-rule-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Derivatives",
        question: "Chain rule: d/dx f(g(x)) = ?",
        options: ["f'(x)·g'(x)", "f'(g(x))·g'(x)", "f(g'(x))", "f'(g(x))"],
        correctAnswer: 1,
        explanation: { solution: "(f∘g)' = f'(g(x)) · g'(x)" }
    },
    // ========== MEAN VALUE THEOREMS ==========
    {
        id: "calc-mvt-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Mean Value Theorems",
        question: "Rolle's theorem requires: f continuous on [a,b], differentiable on (a,b), and:",
        options: ["f(a) = 0", "f(a) = f(b)", "f'(a) = 0", "f is increasing"],
        correctAnswer: 1,
        explanation: { solution: "Rolle: f(a)=f(b) implies ∃c where f'(c)=0" }
    },
    {
        id: "calc-mvt-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Mean Value Theorems",
        question: "Rolle's theorem guarantees existence of c ∈ (a,b) such that:",
        options: ["f(c) = 0", "f'(c) = 0", "f''(c) = 0", "f(c) = [f(a)+f(b)]/2"],
        correctAnswer: 1,
        explanation: { solution: "Rolle: ∃c such that f'(c) = 0" }
    },
    {
        id: "calc-mvt-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Mean Value Theorems",
        question: "LMVT guarantees ∃c such that f'(c) = ?",
        options: ["f(b) - f(a)", "[f(b) - f(a)]/(b-a)", "f(b)/f(a)", "0"],
        correctAnswer: 1,
        explanation: { solution: "LMVT: f'(c) = [f(b)-f(a)]/(b-a) (slope of secant)" }
    },
    {
        id: "calc-mvt-004",
        type: "MCQ",
        topic: "math",
        subtopic: "Mean Value Theorems",
        question: "Rolle's theorem is a special case of LMVT when:",
        options: ["f(a) = 0", "f(b) = 0", "f(a) = f(b)", "a = b"],
        correctAnswer: 2,
        explanation: { solution: "When f(a)=f(b), LMVT gives f'(c)=0 (Rolle)" }
    },
    {
        id: "calc-mvt-005",
        type: "MCQ",
        topic: "math",
        subtopic: "Mean Value Theorems",
        question: "Cauchy's MVT relates f and g by:",
        options: ["f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)]", "f(c) = g(c)", "f'(c) = g'(c)", "f(a)g(b) = f(b)g(a)"],
        correctAnswer: 0,
        explanation: { solution: "Cauchy: f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)]" }
    },
    // ========== INCREASING/DECREASING ==========
    {
        id: "calc-mono-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Applications",
        question: "f(x) is increasing on interval if:",
        options: ["f'(x) < 0", "f'(x) > 0", "f'(x) = 0", "f''(x) > 0"],
        correctAnswer: 1,
        explanation: { solution: "f'(x) > 0 implies f is increasing" }
    },
    {
        id: "calc-mono-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Applications",
        question: "f(x) is decreasing on interval if:",
        options: ["f'(x) > 0", "f'(x) < 0", "f'(x) = 0", "f''(x) < 0"],
        correctAnswer: 1,
        explanation: { solution: "f'(x) < 0 implies f is decreasing" }
    },
    // ========== MAXIMA/MINIMA ==========
    {
        id: "calc-ext-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Applications",
        question: "Critical points of f(x) occur where:",
        options: ["f(x) = 0", "f'(x) = 0 or undefined", "f''(x) = 0", "f(x) is undefined"],
        correctAnswer: 1,
        explanation: { solution: "Critical points: f'(x) = 0 or f' doesn't exist" }
    },
    {
        id: "calc-ext-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Applications",
        question: "Second derivative test: f has local max at c if f'(c)=0 and:",
        options: ["f''(c) > 0", "f''(c) < 0", "f''(c) = 0", "f'''(c) > 0"],
        correctAnswer: 1,
        explanation: { solution: "f''(c) < 0 implies local max (concave down)" }
    },
    {
        id: "calc-ext-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Applications",
        question: "Second derivative test: f has local min at c if f'(c)=0 and:",
        options: ["f''(c) < 0", "f''(c) > 0", "f''(c) = 0", "f'''(c) < 0"],
        correctAnswer: 1,
        explanation: { solution: "f''(c) > 0 implies local min (concave up)" }
    },
    {
        id: "calc-ext-004",
        type: "MCQ",
        topic: "math",
        subtopic: "Applications",
        question: "Point of inflection occurs where:",
        options: ["f'(x) changes sign", "f''(x) changes sign", "f(x) = 0", "f'(x) = 0"],
        correctAnswer: 1,
        explanation: { solution: "Inflection: concavity changes (f'' changes sign)" }
    },
    // ========== TAYLOR SERIES ==========
    {
        id: "calc-ts-001",
        type: "MCQ",
        topic: "math",
        subtopic: "Series",
        question: "Taylor series of f(x) about x=a: coefficient of (x-a)ⁿ is:",
        options: ["f^(n)(a)", "f^(n)(a)/n!", "f^(n)(0)/n!", "f(a)/n!"],
        correctAnswer: 1,
        explanation: { solution: "Taylor: f(x) = Σ f^(n)(a)/n! · (x-a)^n" }
    },
    {
        id: "calc-ts-002",
        type: "MCQ",
        topic: "math",
        subtopic: "Series",
        question: "Maclaurin series is Taylor series about:",
        options: ["x = 1", "x = a", "x = 0", "x = ∞"],
        correctAnswer: 2,
        explanation: { solution: "Maclaurin = Taylor with a=0" }
    },
    {
        id: "calc-ts-003",
        type: "MCQ",
        topic: "math",
        subtopic: "Series",
        question: "Maclaurin series of eˣ is:",
        options: ["1 + x + x²/2! + x³/3! + ...", "x - x³/3! + x⁵/5! - ...", "1 - x²/2! + x⁴/4! - ...", "1 + x + x² + x³ + ..."],
        correctAnswer: 0,
        explanation: { solution: "e^x = Σ x^n/n! = 1 + x + x²/2! + ..." }
    },
    {
        id: "calc-ts-004",
        type: "MCQ",
        topic: "math",
        subtopic: "Series",
        question: "Maclaurin series of sin x is:",
        options: ["1 + x + x²/2! + ...", "x - x³/3! + x⁵/5! - ...", "1 - x²/2! + x⁴/4! - ...", "x + x³/3! + x⁵/5! + ..."],
        correctAnswer: 1,
        explanation: { solution: "sin x = x - x³/3! + x⁵/5! - ... (odd powers)" }
    },
    {
        id: "calc-ts-005",
        type: "MCQ",
        topic: "math",
        subtopic: "Series",
        question: "Maclaurin series of cos x is:",
        options: ["1 + x + x²/2! + ...", "x - x³/3! + x⁵/5! - ...", "1 - x²/2! + x⁴/4! - ...", "x + x³/3! + x⁵/5! + ..."],
        correctAnswer: 2,
        explanation: { solution: "cos x = 1 - x²/2! + x⁴/4! - ... (even powers)" }
    },
    {
        id: "calc-ts-006",
        type: "MCQ",
        topic: "math",
        subtopic: "Series",
        question: "Maclaurin series of ln(1+x) is:",
        options: ["x + x²/2 + x³/3 + ...", "x - x²/2 + x³/3 - ...", "1 + x + x² + ...", "x - x²/2! + x³/3! - ..."],
        correctAnswer: 1,
        explanation: { solution: "ln(1+x) = x - x²/2 + x³/3 - x⁴/4 + ... for |x|≤1" }
    },
    // ========== NUMERICAL CALCULUS ==========
    {
        id: "calc-num-001",
        type: "NAT",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (sin 3x)/(2x) = ?",
        correctAnswer: 1.5,
        tolerance: 0.01,
        explanation: { solution: "sin 3x / 2x = (3/2) · (sin 3x / 3x) → 3/2 = 1.5" }
    },
    {
        id: "calc-num-002",
        type: "NAT",
        topic: "math",
        subtopic: "Limits",
        question: "limₓ→₀ (1 - cos 2x)/x² = ?",
        correctAnswer: 2,
        tolerance: 0.01,
        explanation: { solution: "(1-cos 2x)/x² → a²/2 where a=2, so = 4/2 = 2" }
    },
    {
        id: "calc-num-003",
        type: "NAT",
        topic: "math",
        subtopic: "Derivatives",
        question: "If f(x) = x³ - 6x² + 9x + 2, then f'(1) = ?",
        correctAnswer: 0,
        tolerance: 0.01,
        explanation: { solution: "f'(x) = 3x² - 12x + 9 = 3(x-1)(x-3). f'(1) = 0" }
    },
    {
        id: "calc-num-004",
        type: "NAT",
        topic: "math",
        subtopic: "Derivatives",
        question: "d/dx (x² · eˣ) at x=0 = ?",
        correctAnswer: 0,
        tolerance: 0.01,
        explanation: { solution: "Product rule: 2x·eˣ + x²·eˣ = eˣ(x²+2x). At x=0: 1·0 = 0" }
    },
    {
        id: "calc-num-005",
        type: "NAT",
        topic: "math",
        subtopic: "Derivatives",
        question: "For f(x) = eˣ, coefficient of x³ in Taylor series about x=0 = ?",
        correctAnswer: 0.167,
        tolerance: 0.01,
        explanation: { solution: "Coefficient = f'''(0)/3! = 1/6 ≈ 0.167" }
    }
]);

console.log("Calculus Mega Expansion loaded - ~60 questions");
