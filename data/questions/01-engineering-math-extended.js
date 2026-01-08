/**
 * Engineering Mathematics - Extended Question Bank
 * Comprehensive coverage of all formulas, concepts from document
 * Pages 1-40 of the handbook
 */

Questions.register([
    // ========== DERIVATIVES - All Standard Formulas ==========
    {
        id: "em-deriv-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(x^n)$?",
        options: ["$nx^{n-1}$", "$nx^n$", "$(n-1)x^{n-1}$", "$x^{n-1}$"],
        correctAnswer: 0,
        explanation: { solution: "Power rule: d/dx(xⁿ) = n·xⁿ⁻¹", formula: "$\\frac{d}{dx}(x^n) = nx^{n-1}$" }
    },
    {
        id: "em-deriv-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\sin x)$?",
        options: ["$-\\cos x$", "$\\cos x$", "$\\tan x$", "$-\\sin x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of sin x is cos x", formula: "$\\frac{d}{dx}(\\sin x) = \\cos x$" }
    },
    {
        id: "em-deriv-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\cos x)$?",
        options: ["$\\sin x$", "$-\\sin x$", "$\\cos x$", "$-\\cos x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of cos x is -sin x", formula: "$\\frac{d}{dx}(\\cos x) = -\\sin x$" }
    },
    {
        id: "em-deriv-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\tan x)$?",
        options: ["$\\sec x$", "$\\sec^2 x$", "$\\cot x$", "$\\csc^2 x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of tan x is sec²x", formula: "$\\frac{d}{dx}(\\tan x) = \\sec^2 x$" }
    },
    {
        id: "em-deriv-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\cot x)$?",
        options: ["$\\csc^2 x$", "$-\\csc^2 x$", "$-\\sec^2 x$", "$\\tan x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of cot x is -csc²x", formula: "$\\frac{d}{dx}(\\cot x) = -\\csc^2 x$" }
    },
    {
        id: "em-deriv-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\sec x)$?",
        options: ["$\\sec x \\tan x$", "$\\csc x \\cot x$", "$-\\sec x \\tan x$", "$\\sec^2 x$"],
        correctAnswer: 0,
        explanation: { solution: "Derivative of sec x is sec x tan x", formula: "$\\frac{d}{dx}(\\sec x) = \\sec x \\tan x$" }
    },
    {
        id: "em-deriv-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\csc x)$?",
        options: ["$\\csc x \\cot x$", "$-\\csc x \\cot x$", "$-\\sec x \\tan x$", "$\\csc^2 x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of csc x is -csc x cot x", formula: "$\\frac{d}{dx}(\\csc x) = -\\csc x \\cot x$" }
    },
    {
        id: "em-deriv-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\sin^{-1} x)$?",
        options: ["$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{-1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$\\frac{1}{x\\sqrt{x^2-1}}$"],
        correctAnswer: 0,
        explanation: { solution: "Derivative of arcsin x is 1/√(1-x²)", formula: "$\\frac{d}{dx}(\\sin^{-1} x) = \\frac{1}{\\sqrt{1-x^2}}$" }
    },
    {
        id: "em-deriv-009",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\cos^{-1} x)$?",
        options: ["$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{-1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$\\frac{-1}{1+x^2}$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of arccos x is -1/√(1-x²)", formula: "$\\frac{d}{dx}(\\cos^{-1} x) = \\frac{-1}{\\sqrt{1-x^2}}$" }
    },
    {
        id: "em-deriv-010",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\cot^{-1} x)$?",
        options: ["$\\frac{1}{1+x^2}$", "$\\frac{-1}{1+x^2}$", "$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{-1}{|x|\\sqrt{x^2-1}}$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of arccot x is -1/(1+x²)", formula: "$\\frac{d}{dx}(\\cot^{-1} x) = \\frac{-1}{1+x^2}$" }
    },
    {
        id: "em-deriv-011",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\sec^{-1} x)$?",
        options: ["$\\frac{1}{|x|\\sqrt{x^2-1}}$", "$\\frac{-1}{|x|\\sqrt{x^2-1}}$", "$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$"],
        correctAnswer: 0,
        explanation: { solution: "Derivative of arcsec x is 1/(|x|√(x²-1))", formula: "$\\frac{d}{dx}(\\sec^{-1} x) = \\frac{1}{|x|\\sqrt{x^2-1}}$" }
    },
    {
        id: "em-deriv-012",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(e^x)$?",
        options: ["$xe^{x-1}$", "$e^x$", "$e^{x-1}$", "$xe^x$"],
        correctAnswer: 1,
        explanation: { solution: "eˣ is its own derivative - a special property of the exponential function", formula: "$\\frac{d}{dx}(e^x) = e^x$" }
    },
    {
        id: "em-deriv-013",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(a^x)$ where a is a constant?",
        options: ["$a^x$", "$xa^{x-1}$", "$a^x \\ln a$", "$a^x / \\ln a$"],
        correctAnswer: 2,
        explanation: { solution: "For aˣ where a is constant, derivative is aˣ ln a", formula: "$\\frac{d}{dx}(a^x) = a^x \\ln a$" }
    },
    {
        id: "em-deriv-014",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\ln x)$?",
        options: ["$x$", "$1/x$", "$\\ln x / x$", "$e^x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of natural log is 1/x", formula: "$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$" }
    },
    {
        id: "em-deriv-015",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\log_a x)$?",
        options: ["$\\frac{1}{x}$", "$\\frac{1}{x \\ln a}$", "$\\frac{\\ln a}{x}$", "$\\frac{a}{x}$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of log base a is 1/(x ln a)", formula: "$\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$" }
    },
    {
        id: "em-deriv-016",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(x^x)$?",
        options: ["$x^x$", "$x \\cdot x^{x-1}$", "$x^x(1 + \\ln x)$", "$x^x \\ln x$"],
        correctAnswer: 2,
        explanation: { solution: "Using logarithmic differentiation: y = xˣ, ln y = x ln x, differentiating gives y' = xˣ(1 + ln x)", formula: "$\\frac{d}{dx}(x^x) = x^x(1 + \\ln x)$" }
    },
    {
        id: "em-deriv-017",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "What is $\\frac{d}{dx}(\\sinh x)$?",
        options: ["$\\sinh x$", "$\\cosh x$", "$-\\cosh x$", "$\\tanh x$"],
        correctAnswer: 1,
        explanation: { solution: "Derivative of sinh x is cosh x (similar to sin→cos but no sign change)", formula: "$\\frac{d}{dx}(\\sinh x) = \\cosh x$" }
    },
    // ========== STANDARD LIMITS ==========
    {
        id: "em-lim-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = ?$",
        options: ["0", "1", "∞", "Does not exist"],
        correctAnswer: 1,
        explanation: { solution: "Similar to sin x/x, as x→0, tan x ≈ x, so ratio approaches 1", formula: "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$" }
    },
    {
        id: "em-lim-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = ?$",
        options: ["0", "1", "1/2", "2"],
        correctAnswer: 2,
        explanation: { solution: "Using L'Hospital's rule or series expansion: 1-cos x ≈ x²/2, so limit is 1/2", formula: "$\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} = \\frac{1}{2}$" }
    },
    {
        id: "em-lim-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = ?$",
        options: ["0", "1", "e", "∞"],
        correctAnswer: 1,
        explanation: { solution: "This is the definition of the derivative of eˣ at x=0, which equals 1", formula: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$" }
    },
    {
        id: "em-lim-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = ?$",
        options: ["1", "a", "$\\ln a$", "$a \\ln a$"],
        correctAnswer: 2,
        explanation: { solution: "This equals the derivative of aˣ at x=0, which is ln a", formula: "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$" }
    },
    {
        id: "em-lim-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = ?$",
        options: ["1", "∞", "e", "0"],
        correctAnswer: 2,
        explanation: { solution: "This is the fundamental definition of e (Euler's number)", formula: "$\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e$" }
    },
    {
        id: "em-lim-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to 0} (1 + ax)^{b/x} = ?$",
        options: ["$e^a$", "$e^b$", "$e^{ab}$", "1"],
        correctAnswer: 2,
        explanation: { solution: "General form: lim (1+ax)^(b/x) = e^(ab) as x→0", formula: "$\\lim_{x \\to 0} (1 + ax)^{b/x} = e^{ab}$" }
    },
    {
        id: "em-lim-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = ?$",
        options: ["1", "0", "∞", "Does not exist"],
        correctAnswer: 1,
        explanation: { solution: "sin x is bounded between -1 and 1, while x→∞, so the limit is 0", formula: "$\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = 0$" }
    },
    // ========== MEAN VALUE THEOREMS ==========
    {
        id: "em-mvt-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Lagrange's Mean Value Theorem states that for f continuous on [a,b] and differentiable on (a,b), there exists c in (a,b) such that:",
        options: ["$f'(c) = 0$", "$f'(c) = \\frac{f(b)-f(a)}{b-a}$", "$f(c) = \\frac{f(a)+f(b)}{2}$", "$f''(c) = 0$"],
        correctAnswer: 1,
        explanation: { solution: "LMVT: slope of tangent at c equals slope of secant joining endpoints", formula: "$f'(c) = \\frac{f(b)-f(a)}{b-a}$" }
    },
    {
        id: "em-mvt-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Rolle's Theorem is a special case of LMVT when:",
        options: ["$f(a) = 0$", "$f(b) = 0$", "$f(a) = f(b)$", "$f'(a) = f'(b)$"],
        correctAnswer: 2,
        explanation: { solution: "When f(a)=f(b), LMVT gives f'(c)=0 for some c∈(a,b)", formula: "If f(a)=f(b), then ∃c∈(a,b): f'(c)=0" }
    },
    {
        id: "em-mvt-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Cauchy's Mean Value Theorem relates f'(c)/g'(c) to:",
        options: ["$\\frac{f(a)}{g(a)}$", "$\\frac{f(b)-f(a)}{g(b)-g(a)}$", "$\\frac{f(a)+f(b)}{g(a)+g(b)}$", "$\\frac{f'(a)}{g'(a)}$"],
        correctAnswer: 1,
        explanation: { solution: "Cauchy's MVT: f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)] for some c∈(a,b)", formula: "$\\frac{f'(c)}{g'(c)} = \\frac{f(b)-f(a)}{g(b)-g(a)}$" }
    },
    // ========== L'HOSPITAL'S RULE ==========
    {
        id: "em-lhop-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "L'Hospital's rule applies when the limit has which indeterminate form?",
        options: ["0 × ∞", "∞ - ∞", "0/0 or ∞/∞", "1^∞"],
        correctAnswer: 2,
        explanation: { solution: "L'Hospital's rule: if lim f/g = 0/0 or ∞/∞, then lim f/g = lim f'/g' (if the latter exists)" }
    },
    {
        id: "em-lhop-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "To apply L'Hospital's rule to 0 × ∞ form, we should first convert it to:",
        options: ["0/0", "∞/∞", "0/0 or ∞/∞", "The original form can be used directly"],
        correctAnswer: 2,
        explanation: { solution: "Convert 0 × ∞ to 0/0 or ∞/∞ by writing f×g as f/(1/g) or g/(1/f)" }
    },
    // ========== TAYLOR SERIES ==========
    {
        id: "em-taylor-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The Taylor series of f(x) about x=a is $\\sum_{n=0}^{\\infty} c_n(x-a)^n$. What is $c_n$?",
        options: ["$f^{(n)}(a)$", "$\\frac{f^{(n)}(a)}{n!}$", "$\\frac{f^{(n)}(0)}{n!}$", "$f(a)$"],
        correctAnswer: 1,
        explanation: { solution: "Taylor coefficient: cₙ = f⁽ⁿ⁾(a)/n!", formula: "Taylor: $f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$" }
    },
    {
        id: "em-taylor-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Maclaurin series is Taylor series centered at:",
        options: ["x = 1", "x = a", "x = 0", "x = ∞"],
        correctAnswer: 2,
        explanation: { solution: "Maclaurin series is simply Taylor series with a=0" }
    },
    {
        id: "em-taylor-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The Maclaurin series for $e^x$ is:",
        options: ["$1 + x + x^2 + x^3 + ...$", "$1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$", "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$", "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$"],
        correctAnswer: 1,
        explanation: { solution: "eˣ = 1 + x + x²/2! + x³/3! + ... All derivatives of eˣ are eˣ=1 at x=0", formula: "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$" }
    },
    {
        id: "em-taylor-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The Maclaurin series for $\\sin x$ is:",
        options: ["$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$", "$x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + ...$", "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$", "$1 + x + \\frac{x^2}{2!} + ...$"],
        correctAnswer: 2,
        explanation: { solution: "sin x has only odd powers with alternating signs", formula: "$\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$" }
    },
    {
        id: "em-taylor-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The Maclaurin series for $\\cos x$ is:",
        options: ["$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$", "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$", "$1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + ...$", "$x + \\frac{x^3}{3!} + ...$"],
        correctAnswer: 0,
        explanation: { solution: "cos x has only even powers with alternating signs", formula: "$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$" }
    },
    // ========== INTEGRALS ==========
    {
        id: "em-int-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int x^n dx = ?$ (n ≠ -1)",
        options: ["$\\frac{x^{n+1}}{n+1} + C$", "$nx^{n-1} + C$", "$\\frac{x^n}{n} + C$", "$x^{n+1} + C$"],
        correctAnswer: 0,
        explanation: { solution: "Power rule for integration: increase power by 1, divide by new power", formula: "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$" }
    },
    {
        id: "em-int-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int \\sin x \\, dx = ?$",
        options: ["$\\cos x + C$", "$-\\cos x + C$", "$\\sin x + C$", "$-\\sin x + C$"],
        correctAnswer: 1,
        explanation: { solution: "Integral of sin x is -cos x (verify by differentiating)", formula: "$\\int \\sin x \\, dx = -\\cos x + C$" }
    },
    {
        id: "em-int-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int \\cos x \\, dx = ?$",
        options: ["$-\\sin x + C$", "$\\sin x + C$", "$\\cos x + C$", "$-\\cos x + C$"],
        correctAnswer: 1,
        explanation: { solution: "Integral of cos x is sin x", formula: "$\\int \\cos x \\, dx = \\sin x + C$" }
    },
    {
        id: "em-int-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int \\tan x \\, dx = ?$",
        options: ["$\\ln|\\cos x| + C$", "$-\\ln|\\cos x| + C$", "$\\sec^2 x + C$", "$\\ln|\\sin x| + C$"],
        correctAnswer: 1,
        explanation: { solution: "∫tan x dx = -ln|cos x| + C = ln|sec x| + C", formula: "$\\int \\tan x \\, dx = \\ln|\\sec x| + C$" }
    },
    {
        id: "em-int-005",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int \\cot x \\, dx = ?$",
        options: ["$\\ln|\\sin x| + C$", "$-\\ln|\\sin x| + C$", "$\\ln|\\cos x| + C$", "$-\\csc^2 x + C$"],
        correctAnswer: 0,
        explanation: { solution: "∫cot x dx = ∫(cos x/sin x)dx = ln|sin x| + C", formula: "$\\int \\cot x \\, dx = \\ln|\\sin x| + C$" }
    },
    {
        id: "em-int-006",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int \\sec x \\, dx = ?$",
        options: ["$\\sec x \\tan x + C$", "$\\ln|\\sec x + \\tan x| + C$", "$\\tan x + C$", "$\\ln|\\sec x| + C$"],
        correctAnswer: 1,
        explanation: { solution: "∫sec x dx = ln|sec x + tan x| + C (multiply by (sec x + tan x)/(sec x + tan x))", formula: "$\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C$" }
    },
    {
        id: "em-int-007",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int e^x \\, dx = ?$",
        options: ["$e^{x-1} + C$", "$xe^x + C$", "$e^x + C$", "$e^x/x + C$"],
        correctAnswer: 2,
        explanation: { solution: "eˣ is its own integral (and derivative)", formula: "$\\int e^x dx = e^x + C$" }
    },
    {
        id: "em-int-008",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int a^x \\, dx = ?$ (a > 0, a ≠ 1)",
        options: ["$a^x + C$", "$\\frac{a^x}{\\ln a} + C$", "$a^x \\ln a + C$", "$\\frac{a^{x+1}}{x+1} + C$"],
        correctAnswer: 1,
        explanation: { solution: "Integral of aˣ is aˣ/ln a (verify by differentiating)", formula: "$\\int a^x dx = \\frac{a^x}{\\ln a} + C$" }
    },
    // ========== DEFINITE INTEGRAL PROPERTIES ==========
    {
        id: "em-defint-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "$\\int_a^b f(x)dx = ?$ in terms of $\\int_b^a f(x)dx$",
        options: ["$\\int_b^a f(x)dx$", "$-\\int_b^a f(x)dx$", "$2\\int_b^a f(x)dx$", "0"],
        correctAnswer: 1,
        explanation: { solution: "Swapping limits changes the sign of the integral", formula: "$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$" }
    },
    {
        id: "em-defint-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "If f(x) is an odd function, then $\\int_{-a}^{a} f(x)dx = ?$",
        options: ["$2\\int_0^a f(x)dx$", "0", "$\\int_0^a f(x)dx$", "f(a)"],
        correctAnswer: 1,
        explanation: { solution: "For odd functions f(-x) = -f(x), the positive and negative parts cancel", formula: "If f(-x) = -f(x): $\\int_{-a}^{a} f(x)dx = 0$" }
    },
    {
        id: "em-defint-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "If f(x) is an even function, then $\\int_{-a}^{a} f(x)dx = ?$",
        options: ["0", "$\\int_0^a f(x)dx$", "$2\\int_0^a f(x)dx$", "$-\\int_0^a f(x)dx$"],
        correctAnswer: 2,
        explanation: { solution: "For even functions f(-x) = f(x), both halves contribute equally", formula: "If f(-x) = f(x): $\\int_{-a}^{a} f(x)dx = 2\\int_0^a f(x)dx$" }
    },
    // ========== GAMMA FUNCTION ==========
    {
        id: "em-gamma-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "The Gamma function is defined as $\\Gamma(n) = ?$",
        options: ["$\\int_0^{\\infty} e^{-x}x^n dx$", "$\\int_0^{\\infty} e^{-x}x^{n-1} dx$", "$\\int_0^1 x^{n-1}(1-x)^{m-1} dx$", "$n!$"],
        correctAnswer: 1,
        explanation: { solution: "Gamma function: Γ(n) = ∫₀^∞ e^(-x)x^(n-1)dx for n > 0", formula: "$\\Gamma(n) = \\int_0^{\\infty} e^{-x}x^{n-1} dx$" }
    },
    {
        id: "em-gamma-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "For positive integer n, Γ(n) = ?",
        options: ["n!", "(n-1)!", "(n+1)!", "n"],
        correctAnswer: 1,
        explanation: { solution: "Γ(n) = (n-1)! for positive integers. Note: Γ(n+1) = n!", formula: "$\\Gamma(n) = (n-1)!$ for integers" }
    },
    {
        id: "em-gamma-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Γ(n+1) = ?",
        options: ["n·Γ(n)", "(n+1)·Γ(n)", "Γ(n)/n", "n!"],
        correctAnswer: 0,
        explanation: { solution: "Recurrence relation: Γ(n+1) = n·Γ(n). This gives Γ(n+1) = n! for positive integers", formula: "$\\Gamma(n+1) = n \\cdot \\Gamma(n)$" }
    },
    {
        id: "em-gamma-004",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Γ(1/2) = ?",
        options: ["1", "1/2", "$\\sqrt{\\pi}$", "$\\pi$"],
        correctAnswer: 2,
        explanation: { solution: "Γ(1/2) = √π is a famous result, derived from Gaussian integral", formula: "$\\Gamma(1/2) = \\sqrt{\\pi}$" }
    },
    // ========== BETA FUNCTION ==========
    {
        id: "em-beta-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Beta function B(m,n) = ?",
        options: ["$\\int_0^{\\infty} x^{m-1}e^{-x} dx$", "$\\int_0^1 x^{m-1}(1-x)^{n-1} dx$", "$\\Gamma(m) + \\Gamma(n)$", "$\\Gamma(m) \\cdot \\Gamma(n)$"],
        correctAnswer: 1,
        explanation: { solution: "Beta function is defined as integral from 0 to 1 of x^(m-1)(1-x)^(n-1)", formula: "$B(m,n) = \\int_0^1 x^{m-1}(1-x)^{n-1} dx$" }
    },
    {
        id: "em-beta-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Beta function in terms of Gamma function: B(m,n) = ?",
        options: ["$\\Gamma(m)\\cdot\\Gamma(n)$", "$\\frac{\\Gamma(m)\\cdot\\Gamma(n)}{\\Gamma(m+n)}$", "$\\Gamma(m) + \\Gamma(n)$", "$\\frac{\\Gamma(m+n)}{\\Gamma(m)\\cdot\\Gamma(n)}$"],
        correctAnswer: 1,
        explanation: { solution: "Key relationship between Beta and Gamma functions", formula: "$B(m,n) = \\frac{\\Gamma(m)\\cdot\\Gamma(n)}{\\Gamma(m+n)}$" }
    },
    {
        id: "em-beta-003",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "Is Beta function symmetric? i.e., B(m,n) = B(n,m)?",
        options: ["Yes, always", "No, never", "Only when m=n", "Only for integers"],
        correctAnswer: 0,
        explanation: { solution: "B(m,n) = B(n,m) - this can be seen from both the integral definition and Gamma representation", formula: "$B(m,n) = B(n,m)$" }
    },
    // ========== EULER'S THEOREM ==========
    {
        id: "em-euler-001",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "If f(x,y) is homogeneous of degree n, Euler's theorem gives:",
        options: ["$f_x + f_y = nf$", "$xf_x + yf_y = nf$", "$xf_x + yf_y = f$", "$f_x \\cdot f_y = nf$"],
        correctAnswer: 1,
        explanation: { solution: "Euler's theorem for homogeneous functions", formula: "$x\\frac{\\partial f}{\\partial x} + y\\frac{\\partial f}{\\partial y} = nf$" }
    },
    {
        id: "em-euler-002",
        type: "MCQ",
        topic: "engineering-math",
        subtopic: "Basic Calculus",
        question: "A function f(x,y) is homogeneous of degree n if f(kx,ky) = ?",
        options: ["kf(x,y)", "$k^n f(x,y)$", "f(x,y)/k", "nf(x,y)"],
        correctAnswer: 1,
        explanation: { solution: "Definition of homogeneous function of degree n", formula: "$f(kx, ky) = k^n f(x,y)$" }
    }
]);

console.log("Extended Engineering Math questions loaded");
