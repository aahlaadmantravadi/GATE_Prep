Questions.register([
    {
        "id": "em-deriv-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(x^n)$?",
        "options": [
            "$nx^{n-1}$",
            "$x^{n-1}$",
            "$nx^n$",
            "$(n-1)x^{n-1}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "The Power Rule is fundamental in calculus. To differentiate xⁿ:\n\n1. Bring down the exponent as a coefficient: n\n2. Reduce the exponent by 1: n-1\n3. Result: n·xⁿ⁻¹\n\nExample: d/dx(x⁵) = 5x⁴\n\nThis rule works for any real n (including negative and fractional powers).",
            "formula": "$\\frac{d}{dx}(x^n) = nx^{n-1}$"
        }
    },
    {
        "id": "em-deriv-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\sin x)$?",
        "options": [
            "$\\tan x$",
            "$\\cos x$",
            "$-\\cos x$",
            "$-\\sin x$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "The derivative of sin(x) is cos(x).\n\nGeometric interpretation: The slope of sin(x) at any point equals the y-value of cos(x) at that point.\n\nAt x=0: sin(0)=0, slope=cos(0)=1 (rising)\nAt x=π/2: sin(π/2)=1, slope=cos(π/2)=0 (peak)\nAt x=π: sin(π)=0, slope=cos(π)=-1 (falling)\n\nThis is a fundamental trigonometric derivative that must be memorized.",
            "formula": "$\\frac{d}{dx}(\\sin x) = \\cos x$"
        }
    },
    {
        "id": "em-deriv-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\cos x)$?",
        "options": [
            "$-\\cos x$",
            "$-\\sin x$",
            "$\\cos x$",
            "$\\sin x$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "The derivative of cos(x) is -sin(x). Note the negative sign!\n\nWhy negative? When cos(x) is decreasing (0 to π), sin(x) is positive, so slope is negative.\n\nAt x=0: cos(0)=1, slope=-sin(0)=0 (peak)\nAt x=π/2: cos(π/2)=0, slope=-sin(π/2)=-1 (falling)\n\nMemory tip: The derivatives cycle: sin→cos→-sin→-cos→sin...",
            "formula": "$\\frac{d}{dx}(\\cos x) = -\\sin x$"
        }
    },
    {
        "id": "em-deriv-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\tan x)$?",
        "options": [
            "$\\csc^2 x$",
            "$\\sec^2 x$",
            "$\\cot x$",
            "$\\sec x$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "To derive d/dx(tan x):\n\n1. Write tan x = sin x / cos x\n2. Apply quotient rule: (u/v)' = (u'v - uv')/v²\n3. = (cos x · cos x - sin x · (-sin x)) / cos²x\n4. = (cos²x + sin²x) / cos²x\n5. = 1 / cos²x = sec²x\n\nNote: sec²x is always ≥ 1, meaning tan x is always increasing where defined.",
            "formula": "$\\frac{d}{dx}(\\tan x) = \\sec^2 x$"
        }
    },
    {
        "id": "em-deriv-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\cot x)$?",
        "options": [
            "$-\\csc^2 x$",
            "$-\\sec^2 x$",
            "$\\tan x$",
            "$\\csc^2 x$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "To derive d/dx(cot x):\n\n1. Write cot x = cos x / sin x\n2. Apply quotient rule: (u/v)' = (u'v - uv')/v²\n3. = (-sin x · sin x - cos x · cos x) / sin²x\n4. = -(sin²x + cos²x) / sin²x\n5. = -1 / sin²x = -csc²x\n\nNote: The negative sign indicates cot x is always decreasing.",
            "formula": "$\\frac{d}{dx}(\\cot x) = -\\csc^2 x$"
        }
    },
    {
        "id": "em-deriv-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\sec x)$?",
        "options": [
            "$-\\sec x \\tan x$",
            "$\\csc x \\cot x$",
            "$\\sec^2 x$",
            "$\\sec x \\tan x$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "To derive d/dx(sec x):\n\n1. Write sec x = 1/cos x = (cos x)⁻¹\n2. Apply chain rule: -1(cos x)⁻² · (-sin x)\n3. = sin x / cos²x\n4. = (1/cos x)(sin x/cos x)\n5. = sec x · tan x\n\nThis derivative appears frequently in advanced integration.",
            "formula": "$\\frac{d}{dx}(\\sec x) = \\sec x \\tan x$"
        }
    },
    {
        "id": "em-deriv-007",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\csc x)$?",
        "options": [
            "$\\csc^2 x$",
            "$-\\csc x \\cot x$",
            "$\\csc x \\cot x$",
            "$-\\sec x \\tan x$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "To derive d/dx(csc x):\n\n1. Write csc x = 1/sin x = (sin x)⁻¹\n2. Apply chain rule: -1(sin x)⁻² · (cos x)\n3. = -cos x / sin²x\n4. = -(1/sin x)(cos x/sin x)\n5. = -csc x · cot x\n\nNote: Similar to sec x derivative but with negative sign.",
            "formula": "$\\frac{d}{dx}(\\csc x) = -\\csc x \\cot x$"
        }
    },
    {
        "id": "em-deriv-008",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\sin^{-1} x)$?",
        "options": [
            "$\\frac{1}{1+x^2}$",
            "$\\frac{1}{\\sqrt{1-x^2}}$",
            "$\\frac{1}{x\\sqrt{x^2-1}}$",
            "$\\frac{-1}{\\sqrt{1-x^2}}$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "To derive d/dx(sin⁻¹ x):\n\n1. Let y = sin⁻¹ x, so sin y = x\n2. Differentiate: cos y · dy/dx = 1\n3. dy/dx = 1/cos y\n4. Since sin²y + cos²y = 1: cos y = √(1-sin²y) = √(1-x²)\n5. Therefore: dy/dx = 1/√(1-x²)\n\nDomain: |x| < 1 (otherwise square root undefined).",
            "formula": "$\\frac{d}{dx}(\\sin^{-1} x) = \\frac{1}{\\sqrt{1-x^2}}$"
        }
    },
    {
        "id": "em-deriv-009",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\cos^{-1} x)$?",
        "options": [
            "$\\frac{-1}{\\sqrt{1-x^2}}$",
            "$\\frac{1}{1+x^2}$",
            "$\\frac{-1}{1+x^2}$",
            "$\\frac{1}{\\sqrt{1-x^2}}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "To derive d/dx(cos⁻¹ x):\n\n1. Let y = cos⁻¹ x, so cos y = x\n2. Differentiate: -sin y · dy/dx = 1\n3. dy/dx = -1/sin y\n4. Since sin²y + cos²y = 1: sin y = √(1-cos²y) = √(1-x²)\n5. Therefore: dy/dx = -1/√(1-x²)\n\nNote: Differs from arcsin by negative sign.",
            "formula": "$\\frac{d}{dx}(\\cos^{-1} x) = \\frac{-1}{\\sqrt{1-x^2}}$"
        }
    },
    {
        "id": "em-deriv-010",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\cot^{-1} x)$?",
        "options": [
            "$\\frac{-1}{1+x^2}$",
            "$\\frac{1}{\\sqrt{1-x^2}}$",
            "$\\frac{-1}{|x|\\sqrt{x^2-1}}$",
            "$\\frac{1}{1+x^2}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Derivative of Arccot: d/dx(cot⁻¹ x) = -1/(1+x²). Similar to arctan derivative but with negative sign. Derivation: Let y = cot⁻¹ x, so cot y = x. Differentiate: -csc² y · dy/dx = 1, thus dy/dx = -1/csc² y = -1 /(1+cot²y) = -1/(1+x²). Defined for all real x. Note: d/dx(tan⁻¹ x) = +1/(1+x²), d/dx(cot⁻¹ x) = -1/(1+x²).",
            "formula": "$\\frac{d}{dx}(\\cot^{-1} x) = \\frac{-1}{1+x^2}$"
        }
    },
    {
        "id": "em-deriv-011",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\sec^{-1} x)$?",
        "options": [
            "$\\frac{1}{\\sqrt{1-x^2}}$",
            "$\\frac{-1}{|x|\\sqrt{x^2-1}}$",
            "$\\frac{1}{1+x^2}$",
            "$\\frac{1}{|x|\\sqrt{x^2-1}}$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Derivative of Arcsec: d/dx(sec⁻¹ x) = 1/(|x|√(x²-1)). Domain: |x| > 1. Derivation: Let y = sec⁻¹ x, so sec y = x. Differentiate: sec y tan y · dy/dx = 1, thus dy/dx = 1/(sec y tan y). With sec y = x and tan y = √(sec²y-1) = √(x²-1), get dy/dx = 1/(x√(x²-1)). Absolute value ensures correct sign over range. Less common but appears in advanced integration.",
            "formula": "$\\frac{d}{dx}(\\sec^{-1} x) = \\frac{1}{|x|\\sqrt{x^2-1}}$"
        }
    },
    {
        "id": "em-deriv-012",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(e^x)$?",
        "options": [
            "$e^x$",
            "$xe^{x-1}$",
            "$xe^x$",
            "$e^{x-1}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "eˣ is the only function that equals its own derivative!\n\nWhy? The definition of e makes this true:\n- e = lim(1 + 1/n)ⁿ as n→∞\n- This special property makes eˣ fundamental in calculus\n\nConsequences:\n- All derivatives of eˣ are eˣ\n- Integral of eˣ is also eˣ + C\n- eˣ never equals zero (always positive)",
            "formula": "$\\frac{d}{dx}(e^x) = e^x$"
        }
    },
    {
        "id": "em-deriv-013",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(a^x)$ where a is a constant?",
        "options": [
            "$a^x$",
            "$a^x / \\ln a$",
            "$xa^{x-1}$",
            "$a^x \\ln a$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "To derive d/dx(aˣ) where a is a positive constant:\n\n1. Write aˣ = e^(x ln a) using a = e^(ln a)\n2. Apply chain rule: e^(x ln a) · d/dx(x ln a)\n3. = e^(x ln a) · ln a\n4. = aˣ · ln a\n\nSpecial cases:\n- If a = e: ln e = 1, so d/dx(eˣ) = eˣ\n- If a = 2: d/dx(2ˣ) = 2ˣ ln 2 ≈ 0.693 · 2ˣ",
            "formula": "$\\frac{d}{dx}(a^x) = a^x \\ln a$"
        }
    },
    {
        "id": "em-deriv-014",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\ln x)$?",
        "options": [
            "$\\ln x / x$",
            "$x$",
            "$1/x$",
            "$e^x$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Derivative of Natural Logarithm: d/dx(ln x) = 1/x for x > 0. Derivation from inverse function: If y = ln x, then eʸ = x. Differentiate: eʸ · dy/dx = 1,  thus dy/dx = 1/eʸ = 1/x. Integration perspective: ∫(1/x)dx = ln|x| + C. This is why ln appears in many integration formulas. Logarithmic differentiation uses this rule to differentiate complex products/quotients/powers.",
            "formula": "$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$"
        }
    },
    {
        "id": "em-deriv-015",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\log_a x)$?",
        "options": [
            "$\\frac{1}{x \\ln a}$",
            "$\\frac{1}{x}$",
            "$\\frac{a}{x}$",
            "$\\frac{\\ln a}{x}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Derivative of Log Base a: d/dx(log_a x) = 1/(x ln a). Change of base: log_a x = (ln x)/(ln a), so differentiate using quotient rule: d/dx[(ln x)/(ln a)] = (1/x)/(ln a) = 1/(x ln a). When a = e: ln e = 1, reducing to d/dx(ln x) = 1/x. When a = 10: d/dx(log₁₀ x) = 1/(x ln 10) ≈ 0.434/x. Factor ln a makes this slower growing than natural log.",
            "formula": "$\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$"
        }
    },
    {
        "id": "em-deriv-016",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(x^x)$?",
        "options": [
            "$x^x$",
            "$x \\cdot x^{x-1}$",
            "$x^x \\ln x$",
            "$x^x(1 + \\ln x)$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Derivative of x^x using Logarithmic Differentiation: Let y = xˣ. Take ln both sides: ln y = x ln x. Differentiate: (1/y)dy/dx = (x·1/x) + (ln x·1) = 1 + ln x. Therefore dy/dx = y(1 + ln x) = xˣ(1 + ln x). This technique works when variable is both base and exponent. Note: defined only for x > 0. At x = 1/e (minimum), y' = 0.",
            "formula": "$\\frac{d}{dx}(x^x) = x^x(1 + \\ln x)$"
        }
    },
    {
        "id": "em-deriv-017",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "What is $\\frac{d}{dx}(\\sinh x)$?",
        "options": [
            "$\\cosh x$",
            "$-\\cosh x$",
            "$\\sinh x$",
            "$\\tanh x$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Derivative of Hyperbolic Sine: d/dx(sinh x) = cosh x. Definition: sinh x = (eˣ - e⁻ˣ)/2. Differentiate: d/dx[(eˣ - e⁻ˣ)/2] = (eˣ + e⁻ˣ)/2 = cosh x. Note: unlike regular trig where d/dx(sin x) = cos x, hyperbolic version has NO negative sign. Hyperbolic derivatives are simpler! Properties: (sinh x)' = cosh x, (cosh x)' = sinh x (both positive).",
            "formula": "$\\frac{d}{dx}(\\sinh x) = \\cosh x$"
        }
    },
    {
        "id": "em-lim-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = ?$",
        "options": [
            "Does not exist",
            "0",
            "1",
            "∞"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "This is a fundamental limit in calculus.\n\nAs x→0, both tan(x)→0 and x→0, giving 0/0 form.\n\nProof using L'Hospital's Rule:\nlim (tan x)/x = lim (sec²x)/1 = sec²(0) = 1\n\nAlternatively:\ntan x = sin x / cos x ≈ x/1 = x for small x\nSo (tan x)/x ≈ x/x = 1\n\nThis limit is used in many calculus proofs.",
            "formula": "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$"
        }
    },
    {
        "id": "em-lim-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = ?$",
        "options": [
            "1",
            "2",
            "1/2",
            "0"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "This limit equals 1/2. Here's why:\n\nMethod 1 - L'Hospital's Rule (apply twice):\nlim (1-cos x)/x² = lim sin x/(2x) = lim cos x/2 = 1/2\n\nMethod 2 - Taylor Series:\ncos x = 1 - x²/2! + x⁴/4! - ...\n1 - cos x = x²/2 - x⁴/24 + ...\n(1-cos x)/x² = 1/2 - x²/24 + ... → 1/2\n\nThis is a frequently tested GATE limit.",
            "formula": "$\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2} = \\frac{1}{2}$"
        }
    },
    {
        "id": "em-lim-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = ?$",
        "options": [
            "0",
            "∞",
            "1",
            "e"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "This limit equals 1 and is fundamental.\n\nThis is the definition of the derivative of eˣ at x=0:\nd/dx(eˣ)|_{x=0} = lim_{h→0} (eʰ-e⁰)/h = lim (eʰ-1)/h\n\nUsing L'Hospital's Rule:\nlim (eˣ-1)/x = lim eˣ/1 = e⁰ = 1\n\nUsing Taylor Series:\neˣ = 1 + x + x²/2! + ...\n(eˣ-1)/x = 1 + x/2! + ... → 1",
            "formula": "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$"
        }
    },
    {
        "id": "em-lim-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = ?$",
        "options": [
            "$a \\ln a$",
            "1",
            "a",
            "$\\ln a$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Limit of (aˣ - 1)/x as x → 0: This equals ln a - the derivative of aˣ at x=0. Proof: This is definitional: d/dx(aˣ)|_{x=0} = lim_{h→0} (a^h - a^0)/h = lim (a^h - 1)/h. Since d/dx(aˣ) = aˣ ln a, at x=0: a^0 ln a = ln a. Special cases: a=e gives ln e = 1, a=2 gives ln 2 ≈ 0.693. Used to derive exponential derivatives.",
            "formula": "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$"
        }
    },
    {
        "id": "em-lim-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = ?$",
        "options": [
            "∞",
            "e",
            "0",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "This is the definition of Euler's number e!\n\ne = lim_{n→∞} (1 + 1/n)ⁿ ≈ 2.71828...\n\nWhy? Consider compound interest:\n- Principal P = 1, interest rate = 100%\n- Compounded n times: (1 + 1/n)ⁿ\n- As n→∞ (continuous compounding): approaches e\n\nRelated limits:\n- lim (1 + k/n)ⁿ = eᵏ as n→∞\n- lim (1 + 1/n)ⁿk = eᵏ as n→∞",
            "formula": "$\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e$"
        }
    },
    {
        "id": "em-lim-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to 0} (1 + ax)^{b/x} = ?$",
        "options": [
            "$e^{ab}$",
            "$e^b$",
            "$e^a$",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "General Exponential Limit Form: lim_{x→0} (1+ax)^(b/x) = e^(ab). Derivation: Let y = (1+ax)^(b/x). ln y = (b/x)ln(1+ax). As x→0: ln(1+ax) ≈ ax (Taylor), so ln y ≈ (b/x)(ax) = ab, thus y → e^(ab). Examples: lim (1+2x)^(3/x) = e^6 as x→0. Special case a=b=1 gives definition of e. Useful for compound interest, growth models.",
            "formula": "$\\lim_{x \\to 0} (1 + ax)^{b/x} = e^{ab}$"
        }
    },
    {
        "id": "em-lim-007",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = ?$",
        "options": [
            "Does not exist",
            "∞",
            "1",
            "0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Limit of sin(x)/x as x → ∞: sin(x) oscillates between -1 and 1 (bounded), while denominator x → ∞ (unbounded). Bounded/unbounded → 0. Rigorously: -1 ≤ sin(x) ≤ 1 implies -1/x ≤ sin(x)/x ≤ 1/x. As x→∞, both bounds → 0, so by squeeze theorem sin(x)/x → 0. Contrast: lim_{x→0} sin(x)/x = 1 (fundamental limit). Different behavior at 0 vs infinity.",
            "formula": "$\\lim_{x \\to \\infty} \\frac{\\sin x}{x} = 0$"
        }
    },
    {
        "id": "em-mvt-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Lagrange's Mean Value Theorem states that for f continuous on [a,b] and differentiable on (a,b), there exists c in (a,b) such that:",
        "options": [
            "$f''(c) = 0$",
            "$f(c) = \\frac{f(a)+f(b)}{2}$",
            "$f'(c) = 0$",
            "$f'(c) = \\frac{f(b)-f(a)}{b-a}$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Lagrange's Mean Value Theorem (LMVT) is a cornerstone of calculus.\n\nStatement: If f is continuous on [a,b] and differentiable on (a,b), then ∃c ∈ (a,b) such that:\nf'(c) = [f(b)-f(a)]/(b-a)\n\nGeometric meaning: There's at least one point where the tangent line is parallel to the secant line joining (a,f(a)) and (b,f(b)).\n\nApplications:\n1. Proving inequalities\n2. Estimating function values\n3. Proving Rolle's theorem (special case)",
            "formula": "$f'(c) = \\frac{f(b)-f(a)}{b-a}$"
        }
    },
    {
        "id": "em-mvt-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Rolle's Theorem is a special case of LMVT when:",
        "options": [
            "$f(a) = f(b)$",
            "$f(b) = 0$",
            "$f(a) = 0$",
            "$f'(a) = f'(b)$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Rolle's Theorem: Special case of Lagrange MVT when f(a) = f(b). Conclusion: ∃c ∈ (a,b) such that f'(c) = 0. Geometric interpretation: if function starts and ends at same height, there's at least one point where tangent is horizontal (slope = 0). Example: f(x) = x²-4 on [-2,2], f(-2) = f(2) = 0, so f'(c) = 0 for some c (indeed c=0). Applications: proving existence of roots of derivatives, proving inequalities. Named after Michel Rolle (1652-1719).",
            "formula": "If f(a)=f(b), then ∃c∈(a,b): f'(c)=0"
        }
    },
    {
        "id": "em-mvt-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Cauchy's Mean Value Theorem relates f'(c)/g'(c) to:",
        "options": [
            "$\\frac{f(b)-f(a)}{g(b)-g(a)}$",
            "$\\frac{f'(a)}{g'(a)}$",
            "$\\frac{f(a)+f(b)}{g(a)+g(b)}$",
            "$\\frac{f(a)}{g(a)}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Cauchy's Mean Value Theorem (generalized MVT): If f and g are continuous on [a,b] and differentiable on (a,b), and g'(x) ≠ 0 on (a,b), then ∃c ∈ (a,b): f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)]. Lagrange MVT is special case when g(x) = x. Used to prove L'Hospital's rule. Geometric interpretation: ratio of rates equals ratio of changes. Applications in physics for relating different changing quantities.",
            "formula": "$\\frac{f'(c)}{g'(c)} = \\frac{f(b)-f(a)}{g(b)-g(a)}$"
        }
    },
    {
        "id": "em-lhop-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "L'Hospital's rule applies when the limit has which indeterminate form?",
        "options": [
            "1^∞",
            "0 × ∞",
            "0/0 or ∞/∞",
            "∞ - ∞"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "L'Hospital's Rule applies ONLY to 0/0 or ∞/∞ forms!\n\nThe rule states: If lim f(x)/g(x) gives 0/0 or ∞/∞, then:\nlim f(x)/g(x) = lim f'(x)/g'(x) (if the right limit exists)\n\nOther indeterminate forms must be converted first:\n- 0 × ∞: rewrite as 0/(1/∞) = 0/0 or ∞/(1/0) = ∞/∞\n- ∞ - ∞: combine into single fraction\n- 0⁰, 1^∞, ∞⁰: take logarithm first\n\nAlways verify the form before applying!"
        }
    },
    {
        "id": "em-lhop-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "To apply L'Hospital's rule to 0 × ∞ form, we should first convert it to:",
        "options": [
            "0/0",
            "∞/∞",
            "The original form can be used directly",
            "0/0 or ∞/∞"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Converting 0 × ∞ to Apply L'Hospital: Rewrite as quotient to get 0/0 or ∞/∞ form. Two options: (1) f × g = f/(1/g) giving 0/(1/∞) = 0/0, OR (2) f × g = g/(1/f) giving ∞/(1/0) = ∞/∞. Choose form that simplifies better. Example: lim_{x→0+} x ln(x) = 0×(-∞). Rewrite as ln(x)/(1/x) = (-∞)/(∞) = ∞/∞, then apply L'Hospital: (1/x)/(-1/x²) = -x → 0. Other indeterminate forms (1^∞, 0^0, ∞^0) need logarithm first.",
            "formula": "$0 \\times \\infty = \\frac{0}{1/\\infty}$ or $\\frac{\\infty}{1/0}$"
        }
    },
    {
        "id": "em-taylor-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "The Taylor series of f(x) about x=a is $\\sum_{n=0}^{\\infty} c_n(x-a)^n$. What is $c_n$?",
        "options": [
            "$\\frac{f^{(n)}(0)}{n!}$",
            "$\\frac{f^{(n)}(a)}{n!}$",
            "$f^{(n)}(a)$",
            "$f(a)$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Taylor Series expands a function as an infinite polynomial around point a.\n\nThe coefficient of (x-a)ⁿ is: c_n = f⁽ⁿ⁾(a)/n!\n\nFull series: f(x) = Σ [f⁽ⁿ⁾(a)/n!](x-a)ⁿ from n=0 to ∞\n\n= f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + f'''(a)(x-a)³/3! + ...\n\nWhen a=0, this is called Maclaurin Series.\nThe series converges within the radius of convergence.",
            "formula": "Taylor: $f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$"
        }
    },
    {
        "id": "em-taylor-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Maclaurin series is Taylor series centered at:",
        "options": [
            "x = 1",
            "x = ∞",
            "x = 0",
            "x = a"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Maclaurin Series: Taylor series centered at a = 0. Special case: f(x) = Σ[f^(n)(0)/n!]x^n from n=0 to ∞. Simpler notation than general Taylor (no (x-a) terms, just powers of x). Named after Colin Maclaurin (1698-1746). Common Maclaurin series: e^x, sin(x), cos(x), ln(1+x), (1+x)^r. Most elementary functions have Maclaurin expansions. Convergence radius varies: e^x converges for all x, ln(1+x) for |x| < 1.",
            "formula": "Maclaurin: $f(x) = \\sum \\frac{f^{(n)}(0)}{n!}x^n$"
        }
    },
    {
        "id": "em-taylor-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "The Maclaurin series for $e^x$ is:",
        "options": [
            "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$",
            "$1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$",
            "$1 + x + x^2 + x^3 + ...$",
            "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "The Maclaurin series for eˣ is one of the most important in mathematics.\n\neˣ = 1 + x + x²/2! + x³/3! + x⁴/4! + ...\n\nWhy? All derivatives of eˣ equal eˣ, and e⁰ = 1:\nf(0) = 1, f'(0) = 1, f''(0) = 1, ...\n\nSo coefficient of xⁿ = 1/n!\n\nThis series converges for ALL real x!\n\nUseful approximation: For small x, eˣ ≈ 1 + x",
            "formula": "$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$"
        }
    },
    {
        "id": "em-taylor-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "The Maclaurin series for $\\sin x$ is:",
        "options": [
            "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$",
            "$1 + x + \\frac{x^2}{2!} + ...$",
            "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$",
            "$x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + ...$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Maclaurin Series for sin(x): sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ... = Σ[(-1)^n x^(2n+1)/(2n+1)!]. Only ODD powers (1, 3, 5, ...), alternating signs (+, -, +, -). Why? Derivatives of sin cycle: sin → cos → -sin → -cos → sin. At x=0: sin(0)=0, sin'(0)=1, sin''(0)=0, sin'''(0)=-1. Converges for ALL x. Small angle approximation: sin(x) ≈ x for small x. Used in physics, engineering.",
            "formula": "$\\sin x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$"
        }
    },
    {
        "id": "em-taylor-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "The Maclaurin series for $\\cos x$ is:",
        "options": [
            "$x + \\frac{x^3}{3!} + ...$",
            "$1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + ...$",
            "$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$",
            "$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Maclaurin Series for cos(x): cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ... = Σ[(-1)^n x^(2n)/(2n)!]. Only EVEN powers (0, 2, 4, 6, ...), alternating signs. Derivatives of cos at 0: cos(0)=1, cos'(0)=0, cos''(0)=-1, cos'''(0)=0. Converges for ALL x. Small angle: cos(x) ≈ 1 - x²/2. Euler's formula:  e^(ix) = cos(x) + i·sin(x) connects exponential and trig.",
            "formula": "$\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$"
        }
    },
    {
        "id": "em-int-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int x^n dx = ?$ (n ≠ -1)",
        "options": [
            "$nx^{n-1} + C$",
            "$\\frac{x^{n+1}}{n+1} + C$",
            "$x^{n+1} + C$",
            "$\\frac{x^n}{n} + C$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Power Rule for Integration (reverse of differentiation):\n\n∫xⁿ dx = xⁿ⁺¹/(n+1) + C (for n ≠ -1)\n\nSteps:\n1. Increase the power by 1: n → n+1\n2. Divide by the new power: /(n+1)\n3. Add constant of integration: +C\n\nExamples:\n∫x² dx = x³/3 + C\n∫x⁻² dx = x⁻¹/(-1) + C = -1/x + C\n∫√x dx = ∫x^(1/2) dx = x^(3/2)/(3/2) = (2/3)x^(3/2) + C",
            "formula": "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$"
        }
    },
    {
        "id": "em-int-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int \\sin x \\, dx = ?$",
        "options": [
            "$\\sin x + C$",
            "$-\\cos x + C$",
            "$\\cos x + C$",
            "$-\\sin x + C$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Integral of sin(x): ∫sin(x)dx = -cos(x) + C. Verification: d/dx[-cos(x)] = -·(-sin(x)) = sin(x) ✓. Negative sign comes from derivative of cos being -sin. Memory trick: integrate sin down the trig circle: sin → -cos. Definite integral: ∫_0^π sin(x)dx = [-cos(x)]_0^π = -(-1) - (-1) = 2. Area under one period of sin from 0 to 2π is 0 (equal positive and negative areas).",
            "formula": "$\\int \\sin x \\, dx = -\\cos x + C$"
        }
    },
    {
        "id": "em-int-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int \\cos x \\, dx = ?$",
        "options": [
            "$-\\sin x + C$",
            "$\\sin x + C$",
            "$\\cos x + C$",
            "$-\\cos x + C$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Integral of cos(x): ∫cos(x)dx = sin(x) + C. Verification: d/dx[sin(x)] = cos(x) ✓. NO negative sign (unlike integral of sin). Memory: integrate cos up the trig circle: cos → sin. Definite integral: ∫_0^(π/2) cos(x)dx = [sin(x)]_0^(π/2) = 1 - 0 = 1. Used extensively in Fourier analysis, signal processing.",
            "formula": "$\\int \\cos x \\, dx = \\sin x + C$"
        }
    },
    {
        "id": "em-int-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int \\tan x \\, dx = ?$",
        "options": [
            "$\\sec^2 x + C$",
            "$\\ln|\\cos x| + C$",
            "$\\ln|\\sin x| + C$",
            "$-\\ln|\\cos x| + C$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Integral of tan(x): ∫tan(x)dx = ∫(sin x/cos x)dx. Substitution: u = cos x, du = -sin x dx. Get -∫du/u = -ln|u| + C = -ln|cos x| + C = ln|1/cos x| + C = ln|sec x| + C. Two forms: -ln|cos x| or ln|sec x| (equivalent). Verification: d/dx[ln|sec x|] = (1/sec x)·sec x tan x = tan x ✓. Domain: x ≠ (2k+1)π/2 where tan undefined.",
            "formula": "$\\int \\tan x \\, dx = \\ln|\\sec x| + C$"
        }
    },
    {
        "id": "em-int-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int \\cot x \\, dx = ?$",
        "options": [
            "$-\\ln|\\sin x| + C$",
            "$-\\csc^2 x + C$",
            "$\\ln|\\cos x| + C$",
            "$\\ln|\\sin x| + C$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Integral of cot(x): ∫cot(x)dx = ∫(cos x/sin x)dx. Substitution: u = sin x, du = cos x dx. Get ∫du/u = ln|u| + C = ln|sin x| + C. Verification: d/dx[ln|sin x|] = (1/sin x)·cos x = cot x ✓. Positive sign (unlike tan which has negative). Domain: x ≠ kπ where cot undefined (sin x = 0).",
            "formula": "$\\int \\cot x \\, dx = \\ln|\\sin x| + C$"
        }
    },
    {
        "id": "em-int-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int \\sec x \\, dx = ?$",
        "options": [
            "$\\ln|\\sec x| + C$",
            "$\\ln|\\sec x + \\tan x| + C$",
            "$\\sec x \\tan x + C$",
            "$\\tan x + C$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Integral of sec(x): ∫sec(x)dx - tricky! Multiply by (sec x + tan x)/(sec x + tan x): ∫[sec x(sec x + tan x)/(sec x + tan x)]dx. Numerator becomes sec² x + sec x tan x. Let u = sec x + tan x, then du = (sec x tan x + sec² x)dx = numerator! Get ∫du/u = ln|u| + C = ln|sec x + tan x| + C. Alternative form: ln|tan(x/2 + π/4)| + C. Verification by differentiation confirms result.",
            "formula": "$\\int \\sec x \\, dx = \\ln|\\sec x + \\tan x| + C$"
        }
    },
    {
        "id": "em-int-007",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int e^x \\, dx = ?$",
        "options": [
            "$e^x + C$",
            "$e^x/x + C$",
            "$e^{x-1} + C$",
            "$xe^x + C$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Integral of e^x: ∫e^x dx = e^x + C. Unique property: e^x is its own integral AND its own derivative! Verification: d/dx[e^x] = e^x ✓. No coefficient change (unlike power rule). Definite integral: ∫_0^1 e^x dx = [e^x]_0^1 = e - 1 ≈ 1.718. This property makes e the natural base for exponential functions. Applications: compound interest, population growth, radioactive decay.",
            "formula": "$\\int e^x dx = e^x + C$"
        }
    },
    {
        "id": "em-int-008",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int a^x \\, dx = ?$ (a > 0, a ≠ 1)",
        "options": [
            "$a^x + C$",
            "$a^x \\ln a + C$",
            "$\\frac{a^x}{\\ln a} + C$",
            "$\\frac{a^{x+1}}{x+1} + C$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Integral of a^x (general exponential): ∫a^x dx = a^x/ln(a) + C for a > 0, a ≠ 1. Derivation: a^x = e^(x ln a), so ∫a^x dx = ∫e^(x ln a) dx. Let u = x ln a, du = ln a dx. Get (1/ln a)∫e^u du = e^u/ln a + C = a^x/ln a + C. When a = e: ln e = 1, reduces to ∫e^x dx = e^x + C. Verification: d/dx[a^x/ln a] = (a^x ln a)/ln a = a^x ✓.",
            "formula": "$\\int a^x dx = \\frac{a^x}{\\ln a} + C$"
        }
    },
    {
        "id": "em-defint-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "$\\int_a^b f(x)dx = ?$ in terms of $\\int_b^a f(x)dx$",
        "options": [
            "$\\int_b^a f(x)dx$",
            "0",
            "$-\\int_b^a f(x)dx$",
            "$2\\int_b^a f(x)dx$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Reversing Limits of Definite Integral: ∫_a^b f(x)dx = -∫_b^a f(x)dx. Swapping lower and upper limits negates the integral. Why? Fundamental Theorem: ∫_a^b f = F(b) - F(a), while ∫_b^a f = F(a) - F(b) = -(F(b) - F(a)). Consequence: ∫_a^a f(x)dx = 0 (zero width interval). Property used in splitting integrals: ∫_a^c f = ∫_a^b f + ∫_b^c f.",
            "formula": "$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$"
        }
    },
    {
        "id": "em-defint-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "If f(x) is an odd function, then $\\int_{-a}^{a} f(x)dx = ?$",
        "options": [
            "$2\\int_0^a f(x)dx$",
            "$\\int_0^a f(x)dx$",
            "f(a)",
            "0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A function f(x) is ODD if f(-x) = -f(x).\n\nExamples: sin(x), x³, tan(x)\n\nFor odd functions, ∫_{-a}^a f(x)dx = 0\n\nWhy? The area from -a to 0 is the negative of area from 0 to a.\nThey cancel out exactly!\n\nThis property saves computation time - if you recognize an odd function over symmetric limits, the answer is 0.",
            "formula": "If f(-x) = -f(x): $\\int_{-a}^{a} f(x)dx = 0$"
        }
    },
    {
        "id": "em-defint-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "If f(x) is an even function, then $\\int_{-a}^{a} f(x)dx = ?$",
        "options": [
            "$-\\int_0^a f(x)dx$",
            "$2\\int_0^a f(x)dx$",
            "$\\int_0^a f(x)dx$",
            "0"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "A function f(x) is EVEN if f(-x) = f(x).\n\nExamples: cos(x), x², |x|\n\nFor even functions, ∫_{-a}^a f(x)dx = 2∫_0^a f(x)dx\n\nWhy? The graph is symmetric about y-axis.\nArea from -a to 0 equals area from 0 to a.\nSo total = 2 × (area from 0 to a).\n\nThis property simplifies many integrals!",
            "formula": "If f(-x) = f(x): $\\int_{-a}^{a} f(x)dx = 2\\int_0^a f(x)dx$"
        }
    },
    {
        "id": "em-gamma-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "The Gamma function is defined as $\\Gamma(n) = ?$",
        "options": [
            "$\\int_0^{\\infty} e^{-x}x^{n-1} dx$",
            "$\\int_0^{\\infty} e^{-x}x^n dx$",
            "$\\int_0^1 x^{n-1}(1-x)^{m-1} dx$",
            "$n!$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "The Gamma Function generalizes factorial to non-integers!\n\nΓ(n) = ∫_0^∞ e^(-x) x^(n-1) dx for n > 0\n\nKey properties:\n1. Γ(n+1) = nΓ(n) (recurrence)\n2. Γ(n) = (n-1)! for positive integers\n3. Γ(1) = 1\n4. Γ(1/2) = √π\n\nExamples:\nΓ(5) = 4! = 24\nΓ(3/2) = (1/2)Γ(1/2) = √π/2",
            "formula": "$\\Gamma(n) = \\int_0^{\\infty} e^{-x}x^{n-1} dx$"
        }
    },
    {
        "id": "em-gamma-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "For positive integer n, Γ(n) = ?",
        "options": [
            "n",
            "(n+1)!",
            "n!",
            "(n-1)!"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Gamma Function for Integers: For positive integer n, Γ(n) = (n-1)!. Note the shift: Γ(n) is factorial of (n-1), not n. Examples: Γ(1) = 0! = 1, Γ(2) = 1! = 1, Γ(3) = 2! = 2, Γ(4) = 3! = 6, Γ(5) = 4! = 24. If you want n!, compute Γ(n+1) = n!. This shift is historical convention. For non-integers, Γ provides generalization of factorial.",
            "formula": "$\\Gamma(n) = (n-1)!$ for integers"
        }
    },
    {
        "id": "em-gamma-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Γ(n+1) = ?",
        "options": [
            "Γ(n)/n",
            "(n+1)·Γ(n)",
            "n·Γ(n)",
            "n!"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Gamma Recurrence Relation: Γ(n+1) = n·Γ(n) for n > 0. Proof via integration by parts. Recursive: Γ(5) = 4·Γ(4) = 4·3·Γ(3) = 4·3·2·Γ(2) = 4·3·2·1·Γ(1) = 4! = 24. This recurrence extends factorial to non-integers. Example: Γ(7/2) = (5/2)·Γ(5/2) = (5/2)·(3/2)·Γ(3/2) = (5/2)·(3/2)·(1/2)·Γ(1/2) = (5/2)·(3/2)·(1/2)·√π. For positive integers: Γ(n+1) = n! immediately follows.",
            "formula": "$\\Gamma(n+1) = n \\cdot \\Gamma(n)$"
        }
    },
    {
        "id": "em-gamma-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Γ(1/2) = ?",
        "options": [
            "1/2",
            "$\\sqrt{\\pi}$",
            "1",
            "$\\pi$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Γ(1/2) = √π: Famous and beautiful result! Proof via Gaussian integral: Γ(1/2) = ∫_0^∞ e^(-x) x^(-1/2) dx. Substitute u = √x to get 2∫_0^∞ e^(-u²) du. This equals √π (Gaussian integral). Numerical: √π ≈ 1.772. Applications: probability (normal distribution), physics (error function). From recurrence: Γ(3/2) = (1/2)Γ(1/2) = √π/2, Γ(5/2) = (3/2)·√π/2 = 3√π/4.",
            "formula": "$\\Gamma(1/2) = \\sqrt{\\pi}$"
        }
    },
    {
        "id": "em-beta-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Beta function B(m,n) = ?",
        "options": [
            "$\\int_0^{\\infty} x^{m-1}e^{-x} dx$",
            "$\\Gamma(m) \\cdot \\Gamma(n)$",
            "$\\int_0^1 x^{m-1}(1-x)^{n-1} dx$",
            "$\\Gamma(m) + \\Gamma(n)$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "The Beta Function B(m,n) is defined as:\n\nB(m,n) = ∫_0^1 x^(m-1)(1-x)^(n-1) dx for m,n > 0\n\nKey properties:\n1. B(m,n) = B(n,m) (symmetric!)\n2. B(m,n) = Γ(m)Γ(n)/Γ(m+n)\n3. B(1,1) = 1\n4. B(1/2,1/2) = π\n\nThe Beta function is useful for evaluating integrals involving powers of x and (1-x).",
            "formula": "$B(m,n) = \\int_0^1 x^{m-1}(1-x)^{n-1} dx$"
        }
    },
    {
        "id": "em-beta-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Beta function in terms of Gamma function: B(m,n) = ?",
        "options": [
            "$\\Gamma(m)\\cdot\\Gamma(n)$",
            "$\\Gamma(m) + \\Gamma(n)$",
            "$\\frac{\\Gamma(m+n)}{\\Gamma(m)\\cdot\\Gamma(n)}$",
            "$\\frac{\\Gamma(m)\\cdot\\Gamma(n)}{\\Gamma(m+n)}$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "The Beta-Gamma relationship is crucial for solving integrals:\n\nB(m,n) = Γ(m)·Γ(n) / Γ(m+n)\n\nThis allows converting Beta integrals to factorial-like expressions.\n\nExample: B(3,4) = Γ(3)Γ(4)/Γ(7) = 2!·3!/6! = 2·6/720 = 1/60\n\nFor half-integers, use Γ(1/2) = √π:\nB(1/2,1/2) = Γ(1/2)²/Γ(1) = π/1 = π",
            "formula": "$B(m,n) = \\frac{\\Gamma(m)\\cdot\\Gamma(n)}{\\Gamma(m+n)}$"
        }
    },
    {
        "id": "em-beta-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "Is Beta function symmetric? i.e., B(m,n) = B(n,m)?",
        "options": [
            "No, never",
            "Only for integers",
            "Yes, always",
            "Only when m=n"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "B(m,n) = B(n,m) - this can be seen from both the integral definition and Gamma representation",
            "formula": "$B(m,n) = B(n,m)$"
        }
    },
    {
        "id": "em-euler-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "If f(x,y) is homogeneous of degree n, Euler's theorem gives:",
        "options": [
            "$xf_x + yf_y = nf$",
            "$f_x \\cdot f_y = nf$",
            "$f_x + f_y = nf$",
            "$xf_x + yf_y = f$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Euler's theorem for homogeneous functions",
            "formula": "$x\\frac{\\partial f}{\\partial x} + y\\frac{\\partial f}{\\partial y} = nf$"
        }
    },
    {
        "id": "em-euler-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Basic Calculus",
        "question": "A function f(x,y) is homogeneous of degree n if f(kx,ky) = ?",
        "options": [
            "f(x,y)/k",
            "nf(x,y)",
            "kf(x,y)",
            "$k^n f(x,y)$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Definition of homogeneous function of degree n",
            "formula": "$f(kx, ky) = k^n f(x,y)$"
        }
    },
    {
        "id": "la-mat-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Two matrices A (m×n) and B (p×q) can be multiplied (AB) only if:",
        "options": [
            "m = p",
            "m = q",
            "n = p",
            "n = q"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Matrix multiplication has strict dimension rules.\n\nFor A(m×n) × B(p×q) to exist: n must equal p\n\nWhy? Each element of AB is the dot product of a row of A (length n) with a column of B (length p). These must match!\n\nResult: The product matrix is m×q.\n\nExample: A(3×4) × B(4×2) = C(3×2)\nColumns of A (4) = Rows of B (4) ✔",
            "formula": "A(m×n) × B(p×q) requires n = p, result is m×q"
        }
    },
    {
        "id": "la-mat-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Matrix multiplication is:",
        "options": [
            "Associative but not commutative",
            "Neither commutative nor associative",
            "Commutative but not associative",
            "Commutative and associative"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Matrix multiplication has different algebraic properties than scalar multiplication.\n\nNOT Commutative: AB ≠ BA in general\nExample: A = [1 0; 0 0], B = [0 1; 0 0]\nAB = [0 1; 0 0], BA = [0 0; 0 0]\n\nAssociative: (AB)C = A(BC) ALWAYS holds\nThis is because matrix multiplication represents composition of linear transformations.\n\nOther properties: A(B+C) = AB + AC (distributive)",
            "formula": "Not commutative: AB ≠ BA; Associative: (AB)C = A(BC)"
        }
    },
    {
        "id": "la-mat-003",
        "type": "NAT",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "To multiply matrices A(3×4) and B(4×2), how many scalar multiplications are needed?",
        "correctAnswer": 24,
        "tolerance": 0,
        "explanation": {
            "solution": "Number of multiplications = m × n × q = 3 × 4 × 2 = 24",
            "formula": "Multiplications for A(m×n) × B(n×q) = m·n·q"
        }
    },
    {
        "id": "la-mat-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "A matrix A is upper triangular if:",
        "options": [
            "$a_{ij} = 0$ for $i > j$",
            "$a_{ij} = 0$ for $i < j$",
            "$a_{ij} = 0$ for $i \\neq j$",
            "$a_{ij} = 0$ for $i = j$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Upper Triangular Matrix:\n\nA matrix where all entries BELOW the main diagonal are zero.\naᵢⱼ = 0 for i > j\n\nShape: [* * * *]\n       [0 * * *]\n       [0 0 * *]\n       [0 0 0 *]\n\nProperties:\n1. Eigenvalues = diagonal elements\n2. Determinant = product of diagonal elements\n3. Product of upper triangular matrices is upper triangular\n4. Inverse (if exists) is also upper triangular",
            "formula": "Upper triangular: aᵢⱼ = 0 for i > j"
        }
    },
    {
        "id": "la-mat-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "A diagonal matrix has non-zero elements only:",
        "options": [
            "In the first row",
            "Above the diagonal",
            "In the first column",
            "On the main diagonal"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Diagonal Matrix:\n\nA matrix where all off-diagonal elements are zero.\naᵢⱼ = 0 for i ≠ j\n\nShape: [d₁  0  0 ]\n       [ 0 d₂  0 ]\n       [ 0  0 d₃]\n\nProperties:\n1. Both upper and lower triangular\n2. det = d₁ × d₂ × ... × dₙ\n3. Eigenvalues = diagonal elements\n4. D⁻¹ exists iff all dᵢ ≠ 0\n5. Dⁿ = diag(d₁ⁿ, d₂ⁿ, ..., dₙⁿ)\n6. Very easy to compute with!"
        }
    },
    {
        "id": "la-mat-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "An idempotent matrix satisfies:",
        "options": [
            "$A^2 = I$",
            "$A^2 = A$",
            "$A^2 = 0$",
            "$A^n = 0$ for some n"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Idempotent Matrix (A² = A):\n\nMultiplying by itself gives the same matrix.\n\nExamples:\n1. Identity matrix I (I² = I)\n2. Projection matrices onto subspaces\n\nProperties:\n1. Eigenvalues are only 0 or 1\n   (If Ax = λx, then A²x = Ax gives λ²x = λx, so λ² = λ, λ(λ-1)=0)\n2. det(A) = 0 or 1\n3. rank(A) + rank(I-A) = n\n4. trace(A) = rank(A)",
            "formula": "A² = A (idempotent)"
        }
    },
    {
        "id": "la-mat-007",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "A nilpotent matrix of index 3 satisfies:",
        "options": [
            "$A^3 = I$",
            "$A^3 = A$",
            "$A^3 \\neq 0$",
            "$A^3 = 0$ and $A^2 \\neq 0$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Nilpotent Matrix (Aᵏ = 0 for some k):\n\nRaised to some power, becomes zero matrix.\n\nIndex of nilpotency: smallest k such that Aᵏ = 0.\n\nExample: A = [0 1; 0 0] has A² = 0, so index = 2.\n\nProperties:\n1. All eigenvalues = 0\n   (If Ax = λx, then Aᵏx = λᵏx = 0, so λᵏ = 0, thus λ = 0)\n2. det(A) = 0 (singular)\n3. trace(A) = 0\n4. I - A is invertible with (I-A)⁻¹ = I + A + A² + ... + Aᵏ⁻¹"
        }
    },
    {
        "id": "la-mat-008",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "An orthogonal matrix satisfies:",
        "options": [
            "$A^T = -A$",
            "$A^T = A$",
            "$A^T A = I$",
            "$A^2 = I$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "A matrix Q is orthogonal if QᵀQ = QQᵀ = I.\n\nThis means: Q⁻¹ = Qᵀ (inverse equals transpose!)\n\nProperties of orthogonal matrices:\n1. Columns are orthonormal (unit length, mutually perpendicular)\n2. Rows are orthonormal\n3. det(Q) = ±1\n4. Preserves lengths and angles (isometry)\n\nExamples: Rotation matrices, permutation matrices, reflection matrices.",
            "formula": "$A^T A = I$ (orthogonal)"
        }
    },
    {
        "id": "la-mat-009",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "An involutory matrix satisfies:",
        "options": [
            "$A^2 = I$",
            "$A^T = A$",
            "$A^2 = 0$",
            "$A^2 = A$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Involutory: A² = I, so A is its own inverse",
            "formula": "$A^2 = I$ (involutory)"
        }
    },
    {
        "id": "la-trans-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "$(AB)^T = ?$",
        "options": [
            "$(A^T)(B^T)^T$",
            "$A^T B^T$",
            "$B^T A^T$",
            "$AB$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "The transpose of a product reverses the order of factors.\n\n(AB)ᵀ = BᵀAᵀ\n\nWhy? Let's trace dimensions:\nIf A is m×n and B is n×p, then AB is m×p\n(AB)ᵀ is p×m\nBᵀ is p×n, Aᵀ is n×m\nBᵀAᵀ is p×m ✔\n\nThis extends to multiple matrices:\n(ABC)ᵀ = CᵀBᵀAᵀ",
            "formula": "$(AB)^T = B^T A^T$"
        }
    },
    {
        "id": "la-trans-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "$(A^T)^T = ?$",
        "options": [
            "$A$",
            "$-A$",
            "$A^{-1}$",
            "$A^T$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Double transpose returns original matrix",
            "formula": "$(A^T)^T = A$"
        }
    },
    {
        "id": "la-trans-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "A symmetric matrix satisfies:",
        "options": [
            "$AA^T = I$",
            "$A^T = -A$",
            "$A^2 = A$",
            "$A^T = A$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A symmetric matrix equals its own transpose: Aᵀ = A\n\nThis means: aᵢⱼ = aⱼᵢ for all i,j\n\nProperties:\n1. Must be square\n2. Entries mirror across main diagonal\n3. All eigenvalues are REAL\n4. Eigenvectors can be chosen to be orthogonal\n\nExample: [1 2 3; 2 4 5; 3 5 6] is symmetric.",
            "formula": "Symmetric: $A^T = A$"
        }
    },
    {
        "id": "la-trans-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "A skew-symmetric (anti-symmetric) matrix satisfies:",
        "options": [
            "$AA^T = -I$",
            "$A^T = -A$",
            "$A^2 = -I$",
            "$A^T = A$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Skew-symmetric: transpose equals negative",
            "formula": "Skew-symmetric: $A^T = -A$"
        }
    },
    {
        "id": "la-trans-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Diagonal elements of a skew-symmetric matrix are:",
        "options": [
            "All 1",
            "All zero",
            "Can be any value",
            "All positive"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Diagonal Elements of Skew-Symmetric Matrix are ZERO:\n\nFor skew-symmetric: aᵢⱼ = -aⱼᵢ\n\nWhen i = j: aᵢᵢ = -aᵢᵢ\n2aᵢᵢ = 0\naᵢᵢ = 0\n\nSo all diagonal elements must be zero!\n\nExample: [ 0  2 -3]\n         [-2  0  4]\n         [ 3 -4  0]\n\nConsequences: trace = 0 for all skew-symmetric matrices."
        }
    },
    {
        "id": "la-trace-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Trace of a matrix is:",
        "options": [
            "Sum of diagonal elements",
            "Product of diagonal elements",
            "Determinant",
            "Sum of all elements"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Trace of a Matrix:\n\nTrace = sum of main diagonal elements\ntr(A) = a₁₁ + a₂₂ + a₃₃ + ... + aₙₙ\n\nProperties:\n1. tr(A) = Σλᵢ (sum of eigenvalues!)\n2. tr(A + B) = tr(A) + tr(B) (linear)\n3. tr(cA) = c·tr(A)\n4. tr(AB) = tr(BA) (cyclic)\n5. tr(Aᵀ) = tr(A)\n6. Trace is invariant under similarity transformations\n\nOnly defined for square matrices.",
            "formula": "tr(A) = Σaᵢᵢ"
        }
    },
    {
        "id": "la-trace-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "tr(AB) = ?",
        "options": [
            "tr(A)tr(B)",
            "tr(A) × tr(B)",
            "tr(A) + tr(B)",
            "tr(BA)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Cyclic Property of Trace:\n\ntr(AB) = tr(BA)\n\nThis holds even though AB ≠ BA in general!\n\nMore generally: tr(ABC) = tr(BCA) = tr(CAB)\n(Cyclic permutations have same trace)\n\nBut: tr(ABC) ≠ tr(BAC) in general!\n(Only cyclic permutations work)\n\nUseful for simplifying trace computations.",
            "formula": "tr(AB) = tr(BA)"
        }
    },
    {
        "id": "la-trace-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "tr(A + B) = ?",
        "options": [
            "tr(A) + tr(B)",
            "max(tr(A), tr(B))",
            "tr(AB)",
            "tr(A) × tr(B)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Trace is linear: trace of sum equals sum of traces",
            "formula": "tr(A+B) = tr(A) + tr(B)"
        }
    },
    {
        "id": "la-det-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "det(AB) = ?",
        "options": [
            "det(A) + det(B)",
            "det(A+B)",
            "det(A)/det(B)",
            "det(A) × det(B)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "The determinant of a product equals the product of determinants!\n\ndet(AB) = det(A) · det(B)\n\nThis is fundamental and holds for any conformable square matrices.\n\nWhy? Determinant measures 'volume scaling factor' of a linear transformation.\nAB means first apply B then A.\nTotal scaling = scaling by A × scaling by B\n\nCorollary: det(Aⁿ) = [det(A)]ⁿ",
            "formula": "det(AB) = det(A)·det(B)"
        }
    },
    {
        "id": "la-det-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "det(kA) for n×n matrix A = ?",
        "options": [
            "det(A)",
            "k·det(A)",
            "det(A)/k",
            "$k^n$·det(A)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "When you multiply a matrix by scalar k, the determinant changes by kⁿ!\n\nFor n×n matrix A: det(kA) = kⁿ · det(A)\n\nWhy? Each of the n rows gets multiplied by k.\nDet changes by factor k for each row that's scaled.\nSo total change is k × k × ... (n times) = kⁿ\n\nExample: For 3×3 matrix: det(2A) = 2³ · det(A) = 8 det(A)",
            "formula": "det(kA) = kⁿ·det(A)"
        }
    },
    {
        "id": "la-det-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "det($A^T$) = ?",
        "options": [
            "det(A)²",
            "det(A)",
            "1/det(A)",
            "-det(A)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Determinant is unchanged by transpose",
            "formula": "det(Aᵀ) = det(A)"
        }
    },
    {
        "id": "la-det-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If two rows of a matrix are identical, then det(A) = ?",
        "options": [
            "-1",
            "2",
            "0",
            "1"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Identical rows/columns make determinant zero (linearly dependent)"
        }
    },
    {
        "id": "la-det-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If two rows of a matrix are swapped, the determinant:",
        "options": [
            "Remains same",
            "Doubles",
            "Changes sign",
            "Becomes zero"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Row Swap Changes Determinant Sign:\n\nSwapping any two rows multiplies det by -1.\n\nThis is a fundamental property of determinants!\n\nConsequences:\n1. If two rows are identical, swap them → det = -det\n   ∴ det = 0\n2. Counting swaps in Gaussian elimination matters\n3. Explains why permutation matrices have det = ±1\n\nSame rule applies for column swaps."
        }
    },
    {
        "id": "la-det-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Determinant of a triangular matrix equals:",
        "options": [
            "Sum of all elements",
            "Sum of diagonal elements",
            "Product of diagonal elements",
            "Largest element"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "For triangular matrices (upper or lower), det = product of diagonal elements"
        }
    },
    {
        "id": "la-det-007",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "det($A^{-1}$) = ?",
        "options": [
            "1/det(A)",
            "det(A)²",
            "-det(A)",
            "det(A)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Since A·A⁻¹ = I and det(I) = 1, we have det(A)·det(A⁻¹) = 1",
            "formula": "det(A⁻¹) = 1/det(A)"
        }
    },
    {
        "id": "la-inv-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "A square matrix A is invertible if and only if:",
        "options": [
            "All elements are non-zero",
            "A = Aᵀ",
            "tr(A) ≠ 0",
            "det(A) ≠ 0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "A square matrix is invertible (also called non-singular) iff det(A) ≠ 0.\n\nEquivalent conditions for invertibility:\n1. det(A) ≠ 0\n2. rank(A) = n (full rank)\n3. Rows are linearly independent\n4. Columns are linearly independent\n5. A⁻¹ exists\n6. Ax = 0 has only trivial solution\n7. 0 is NOT an eigenvalue\n\nIf det(A) = 0, matrix is 'singular' (not invertible)"
        }
    },
    {
        "id": "la-inv-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "$(AB)^{-1} = ?$",
        "options": [
            "$B^{-1}A^{-1}$",
            "$A^{-1}B^{-1}$",
            "$A^{-1} + B^{-1}$",
            "$(A^{-1})(B^{-1})^T$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "The inverse of a product reverses the order (just like transpose)!\n\n(AB)⁻¹ = B⁻¹A⁻¹\n\nWhy? Verify by multiplication:\n(AB)(B⁻¹A⁻¹) = A(BB⁻¹)A⁻¹ = AIA⁻¹ = AA⁻¹ = I ✔\n\nFor multiple matrices:\n(ABC)⁻¹ = C⁻¹B⁻¹A⁻¹\n\nRemember: 'Reverse the order'!",
            "formula": "$(AB)^{-1} = B^{-1}A^{-1}$"
        }
    },
    {
        "id": "la-inv-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "$(A^{-1})^T = ?$",
        "options": [
            "$(A^T)^{-1}$",
            "$A^T$",
            "$A$",
            "$(A^{-1})$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Transpose and inverse commute",
            "formula": "$(A^{-1})^T = (A^T)^{-1}$"
        }
    },
    {
        "id": "la-rank-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Rank of a matrix is:",
        "options": [
            "Trace of the matrix",
            "Number of columns",
            "Maximum number of linearly independent rows/columns",
            "Number of rows"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Rank is the dimension of the column space (or row space).\n\nInterpretations:\n1. Max number of linearly independent rows\n2. Max number of linearly independent columns\n3. Number of pivot positions in row echelon form\n4. Dimension of the image of the linear transformation\n\nImportant: Row rank = Column rank (always!)\n\nFor n×n matrix: rank = n means full rank (invertible)"
        }
    },
    {
        "id": "la-rank-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "For an m×n matrix A, rank(A) ≤ ?",
        "options": [
            "min(m,n)",
            "m",
            "max(m,n)",
            "n"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Rank cannot exceed number of rows or columns",
            "formula": "rank(A) ≤ min(m,n)"
        }
    },
    {
        "id": "la-rank-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If A is an n×n matrix with rank(A) = n, then A is:",
        "options": [
            "Non-singular (invertible)",
            "Nilpotent",
            "Singular",
            "Symmetric"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Full Rank ⇔ Invertible:\n\nFor n×n matrix A:\nrank(A) = n ⇔ A is non-singular (invertible)\n\nWhy? Full rank means:\n1. All n rows are linearly independent\n2. All n columns are linearly independent\n3. No zero eigenvalues\n4. det(A) ≠ 0\n5. Ax = 0 has only trivial solution\n\nIf rank < n, matrix is 'rank deficient' and singular."
        }
    },
    {
        "id": "la-rank-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "rank(AB) ≤ ?",
        "options": [
            "max(rank(A), rank(B))",
            "rank(A) × rank(B)",
            "min(rank(A), rank(B))",
            "rank(A) + rank(B)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Rank Inequality for Product:\n\nrank(AB) ≤ min(rank(A), rank(B))\n\nMultiplication can only DECREASE rank (or keep it same).\n\nWhy? The column space of AB is a subspace of the column space of A.\nAnd rank(AB) can't exceed rank(B) either.\n\nEquality cases:\n- rank(AB) = rank(A) if B has full column rank\n- rank(AB) = rank(B) if A has full row rank",
            "formula": "rank(AB) ≤ min(rank(A), rank(B))"
        }
    },
    {
        "id": "la-eigen-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If Ax = λx for non-zero x, then λ is called:",
        "options": [
            "Rank of A",
            "Trace of A",
            "Determinant of A",
            "Eigenvalue of A"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Eigenvalues and eigenvectors are fundamental in Linear Algebra.\n\nIf Ax = λx for some non-zero vector x:\n- λ is an EIGENVALUE of A\n- x is the corresponding EIGENVECTOR\n\nGeometric meaning: A linear transformation only scales x (by factor λ) without changing its direction.\n\nNote: Eigenvector x cannot be zero (by definition), but eigenvalue λ can be 0."
        }
    },
    {
        "id": "la-eigen-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Eigenvalues are found by solving which equation?",
        "options": [
            "Ax = 0",
            "det(A) = 0",
            "A = λI",
            "det(A - λI) = 0"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "To find eigenvalues, solve the characteristic equation:\n\ndet(A - λI) = 0\n\nDerivation:\nAx = λx\nAx - λx = 0\n(A - λI)x = 0\nFor non-zero x to exist: det(A - λI) = 0\n\nThis polynomial equation in λ gives all eigenvalues.\n\nFor 2×2: λ² - tr(A)λ + det(A) = 0\nFor 3×3: cubic equation",
            "formula": "det(A - λI) = 0 (characteristic equation)"
        }
    },
    {
        "id": "la-eigen-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Sum of eigenvalues of matrix A equals:",
        "options": [
            "0",
            "rank(A)",
            "det(A)",
            "tr(A)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "One of the most important eigenvalue properties!\n\nΣλᵢ = tr(A) (sum of eigenvalues = trace)\n∏λᵢ = det(A) (product of eigenvalues = determinant)\n\nFor 2×2 matrix with eigenvalues λ₁, λ₂:\nλ₁ + λ₂ = a₁₁ + a₂₂ (trace)\nλ₁ × λ₂ = det(A)\n\nThese relations come from Vieta's formulas applied to the characteristic polynomial.",
            "formula": "Σλᵢ = tr(A)"
        }
    },
    {
        "id": "la-eigen-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Product of eigenvalues of matrix A equals:",
        "options": [
            "tr(A)",
            "det(A)",
            "rank(A)",
            "1"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Product of eigenvalues = determinant",
            "formula": "∏λᵢ = det(A)"
        }
    },
    {
        "id": "la-eigen-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If λ is an eigenvalue of A, then eigenvalues of A² are:",
        "options": [
            "λ",
            "$λ^2$",
            "$\\sqrt{λ}$",
            "2λ"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "If Ax = λx, then A²x = A(Ax) = A(λx) = λ(Ax) = λ²x",
            "formula": "Eigenvalues of Aⁿ are λⁿ"
        }
    },
    {
        "id": "la-eigen-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If λ is an eigenvalue of A and A is invertible, eigenvalue of A⁻¹ is:",
        "options": [
            "λ²",
            "λ",
            "-λ",
            "1/λ"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "If Ax = λx, then x = A⁻¹(λx) = λ(A⁻¹x), so A⁻¹x = (1/λ)x",
            "formula": "Eigenvalues of A⁻¹ are 1/λ"
        }
    },
    {
        "id": "la-eigen-007",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Eigenvalues of a triangular matrix are:",
        "options": [
            "Sum of diagonal elements",
            "All zeros",
            "The diagonal elements themselves",
            "Product of diagonal elements"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "For triangular matrices, det(A-λI) has diagonal (aᵢᵢ - λ), so eigenvalues are the diagonal elements"
        }
    },
    {
        "id": "la-eigen-008",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "All eigenvalues of a real symmetric matrix are:",
        "options": [
            "Imaginary",
            "Complex",
            "Zero",
            "Real"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Symmetric matrices have all real eigenvalues (fundamental result)"
        }
    },
    {
        "id": "la-eigen-009",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Eigenvectors of a real symmetric matrix corresponding to distinct eigenvalues are:",
        "options": [
            "Parallel",
            "Linearly dependent",
            "Equal",
            "Orthogonal"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "For symmetric matrices, eigenvectors for different eigenvalues are orthogonal"
        }
    },
    {
        "id": "la-ch-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "Cayley-Hamilton theorem states that every square matrix:",
        "options": [
            "Is invertible",
            "Satisfies its own characteristic equation",
            "Has real eigenvalues",
            "Is diagonalizable"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Cayley-Hamilton Theorem: Every matrix satisfies its own characteristic equation!\n\nIf p(λ) = det(A - λI) = λⁿ - cₙ₋₁λⁿ⁻¹ - ... - c₁λ - c₀\n\nThen p(A) = Aⁿ - cₙ₋₁Aⁿ⁻¹ - ... - c₁A - c₀I = 0\n\nApplications:\n1. Find A⁻¹ using A⁻¹ = (1/c₀)(Aⁿ⁻¹ - cₙ₋₁Aⁿ⁻² - ...)\n2. Simplify powers Aⁿ (reduce to lower powers)\n3. Verify matrix computations"
        }
    },
    {
        "id": "la-diag-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "An n×n matrix is diagonalizable if it has:",
        "options": [
            "All distinct eigenvalues",
            "n linearly independent eigenvectors",
            "n eigenvalues (counting multiplicity)",
            "Positive determinant"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "A matrix is diagonalizable if it can be written as A = PDP⁻¹ where D is diagonal.\n\nCondition: Must have n linearly independent eigenvectors.\n\nGuarantees for diagonalizability:\n1. All n eigenvalues are distinct → always diagonalizable\n2. Symmetric/Hermitian matrix → always diagonalizable\n\nNote: Even if eigenvalues repeat, the matrix MAY still be diagonalizable if geometric multiplicity = algebraic multiplicity for each eigenvalue."
        }
    },
    {
        "id": "la-diag-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Linear Algebra",
        "question": "If A is diagonalizable, A = PDP⁻¹ where D is diagonal. D contains:",
        "options": [
            "Rows of A",
            "Eigenvectors of A",
            "Eigenvalues of A on diagonal",
            "Columns of A"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "D is diagonal matrix of eigenvalues, P has eigenvectors as columns"
        }
    },
    {
        "id": "prob-basic-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "P(A ∪ B) = ?",
        "options": [
            "P(A) × P(B)",
            "P(A) + P(B) - P(A∩B)",
            "P(A|B) × P(B)",
            "P(A) + P(B)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Addition Rule for Probability (Inclusion-Exclusion):\n\nP(A∪B) = P(A) + P(B) - P(A∩B)\n\nWhy subtract P(A∩B)? When we add P(A) and P(B), we count the intersection TWICE (once in each). Subtract once to correct.\n\nSpecial cases:\n- If A,B mutually exclusive: P(A∩B)=0, so P(A∪B)=P(A)+P(B)\n- If A,B exhaustive: P(A∪B)=1\n\nVenn diagram helps visualize this!",
            "formula": "P(A∪B) = P(A) + P(B) - P(A∩B)"
        }
    },
    {
        "id": "prob-basic-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "For mutually exclusive events A and B, P(A ∪ B) = ?",
        "options": [
            "P(A) + P(B)",
            "P(A) × P(B)",
            "0",
            "P(A) + P(B) - P(A∩B)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Mutually Exclusive Events:\n\nA and B are mutually exclusive (disjoint) if they CANNOT occur together.\nA ∩ B = ∅ (empty set), so P(A∩B) = 0\n\nFor mutually exclusive events:\nP(A∪B) = P(A) + P(B)\n\nExample: Rolling 'even' and 'odd' on a die are mutually exclusive.\n\nIMPORTANT: Mutually exclusive ≠ Independent!\nIn fact, if A,B mutually exclusive with P(A),P(B) > 0, they're DEPENDENT (knowing one occurred tells you other didn't).",
            "formula": "If A∩B = ∅: P(A∪B) = P(A) + P(B)"
        }
    },
    {
        "id": "prob-basic-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "For independent events A and B, P(A ∩ B) = ?",
        "options": [
            "P(A) × P(B)",
            "P(A) + P(B)",
            "P(A|B)",
            "P(A)/P(B)"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Independence vs Mutual Exclusivity - don't confuse them!\n\nIndependent events: occurrence of A doesn't affect probability of B.\nP(A∩B) = P(A)·P(B)\n\nEquivalently: P(A|B) = P(A) and P(B|A) = P(B)\n\nExample: Two coin flips are independent.\nP(H₁ ∩ H₂) = 0.5 × 0.5 = 0.25\n\nNote: Mutually exclusive events are NOT independent (if one occurs, other can't)!",
            "formula": "Independent: P(A∩B) = P(A)·P(B)"
        }
    },
    {
        "id": "prob-basic-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Conditional probability P(A|B) = ?",
        "options": [
            "P(B|A)",
            "P(A∩B) / P(B)",
            "P(A) + P(B)",
            "P(A) × P(B)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Conditional Probability: probability of A GIVEN that B has occurred.\n\nP(A|B) = P(A∩B) / P(B) where P(B) > 0\n\nInterpretation: We restrict our sample space to B (our new 'universe'), then find probability of A within it.\n\nFrom this we get:\nMultiplication Rule: P(A∩B) = P(A|B)·P(B) = P(B|A)·P(A)\n\nChain Rule: P(A∩B∩C) = P(A)·P(B|A)·P(C|A∩B)",
            "formula": "P(A|B) = P(A∩B) / P(B)"
        }
    },
    {
        "id": "prob-basic-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "P(A') = ? (complement of A)",
        "options": [
            "P(A)",
            "1 / P(A)",
            "1 - P(A)",
            "1 + P(A)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Complement Rule:\n\nP(A') = 1 - P(A)\n\nWhere A' (or Ā or Ac) is the complement of A.\n\nRationale: A and A' partition the sample space.\nP(A) + P(A') = P(S) = 1\n\nApplications:\n1. P(at least one) = 1 - P(none)\n2. P(X ≤ 5) = 1 - P(X > 5)\n3. Often easier to compute complement!",
            "formula": "P(A') = 1 - P(A)"
        }
    },
    {
        "id": "prob-bayes-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Bayes' Theorem states P(A|B) = ?",
        "options": [
            "P(A∩B)",
            "P(A) + P(B|A)",
            "P(A)P(B)",
            "P(B|A)P(A)/P(B)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Bayes' Theorem: A powerful tool for 'inverting' conditional probabilities!\n\nP(A|B) = [P(B|A) · P(A)] / P(B)\n\nTerminology:\n- P(A) = Prior probability (before seeing evidence)\n- P(B|A) = Likelihood (probability of evidence given hypothesis)\n- P(A|B) = Posterior (updated belief after seeing evidence)\n- P(B) = Evidence (often computed as ΣP(B|Aᵢ)P(Aᵢ))\n\nApplication: Medical diagnosis, spam filtering, machine learning.",
            "formula": "P(A|B) = P(B|A)P(A) / P(B)"
        }
    },
    {
        "id": "prob-bayes-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "In Bayes' theorem, P(A) is called:",
        "options": [
            "Posterior probability",
            "Prior probability",
            "Likelihood",
            "Marginal probability"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Bayes' Theorem Terminology:\n\nP(A) = Prior probability - belief about A BEFORE seeing evidence B\nP(A|B) = Posterior probability - updated belief AFTER seeing B\n\nBayes: Prior → (Evidence) → Posterior\n\nP(A|B) = P(B|A)·P(A) / P(B)\n\nThe prior represents your initial knowledge.\nThe posterior incorporates the new evidence.\n\nExample: P(disease) = 0.01 (prior), P(disease|positive test) = 0.15 (posterior)"
        }
    },
    {
        "id": "prob-rv-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Expected value E(X) of a discrete random variable is:",
        "options": [
            "$\\sum x$",
            "max(x)",
            "$\\sum P(x)$",
            "$\\sum x \\cdot P(x)$"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Expected Value (Mean) for Discrete RV:\n\nE(X) = Σ xᵢ · P(X = xᵢ)\n\nThis is a 'weighted average' where weights are probabilities.\n\nInterpretation: The long-run average value you'd observe if you repeated the experiment infinitely.\n\nNote: E(X) itself may not be a possible value of X!\n\nExample (fair die):\nE(X) = 1(1/6) + 2(1/6) + ... + 6(1/6) = 3.5\nYou can never roll 3.5, but it's the average!",
            "formula": "E(X) = Σx·P(X=x)"
        }
    },
    {
        "id": "prob-rv-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "E(aX + b) = ? (a, b are constants)",
        "options": [
            "E(X)",
            "aE(X)",
            "aE(X) + b",
            "E(X) + b"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Linearity of Expected Value:\n\nE(aX + b) = a·E(X) + b\n\nThis is one of the most useful properties!\n\n1. Constants come out: E(aX) = a·E(X)\n2. Shifts add: E(X + b) = E(X) + b\n3. Addition works too: E(X + Y) = E(X) + E(Y) (even if dependent!)\n\nExample: If E(exam score) = 70\nE(curved score) = E(1.2·X + 5) = 1.2(70) + 5 = 89",
            "formula": "E(aX + b) = aE(X) + b"
        }
    },
    {
        "id": "prob-rv-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Var(X) = ?",
        "options": [
            "E(X²)",
            "E(X)² - E(X²)",
            "E(X²) - E(X)²",
            "E(X - μ)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Variance measures 'spread' or 'dispersion' of a random variable.\n\nVar(X) = E[(X-μ)²] = E(X²) - [E(X)]²\n\nThe second formula is often easier for computation:\n1. Find E(X²) = Σx²·P(x)\n2. Find E(X) and square it\n3. Var(X) = E(X²) - [E(X)]²\n\nProperties:\n- Var(X) ≥ 0 always\n- Var(X) = 0 iff X is constant\n- Var(aX+b) = a²Var(X)",
            "formula": "Var(X) = E(X²) - [E(X)]² = E[(X-μ)²]"
        }
    },
    {
        "id": "prob-rv-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Var(aX + b) = ?",
        "options": [
            "aVar(X) + b",
            "Var(X)",
            "a²Var(X)",
            "a²Var(X) + b"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Constant b doesn't affect variance, a gets squared",
            "formula": "Var(aX + b) = a²Var(X)"
        }
    },
    {
        "id": "prob-rv-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Standard deviation σ is:",
        "options": [
            "$\\sqrt{Variance}$",
            "Variance",
            "Mean",
            "Variance²"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Standard deviation is square root of variance",
            "formula": "σ = √Var(X)"
        }
    },
    {
        "id": "prob-rv-006",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "For independent random variables X and Y, Var(X + Y) = ?",
        "options": [
            "Var(X) - Var(Y)",
            "Var(X) + Var(Y)",
            "max(Var(X), Var(Y))",
            "Var(X) × Var(Y)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "For independent variables, variances add",
            "formula": "Var(X+Y) = Var(X) + Var(Y) when X,Y independent"
        }
    },
    {
        "id": "prob-binom-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Binomial distribution B(n,p) gives probability of k successes in n trials. P(X=k) = ?",
        "options": [
            "$\\binom{n}{k}p^k$",
            "$\\binom{n}{k}p^k(1-p)^{n-k}$",
            "$np$",
            "$p^k$"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Binomial Distribution models the number of successes in n independent trials.\n\nP(X=k) = C(n,k) · p^k · (1-p)^(n-k)\n\nBreaking down the formula:\n- C(n,k) = n!/(k!(n-k)!) ways to choose which k trials are successes\n- p^k = probability of k successes\n- (1-p)^(n-k) = probability of (n-k) failures\n\nConditions for Binomial:\n1. Fixed n trials\n2. Each trial: success (p) or failure (1-p)\n3. Trials are independent",
            "formula": "P(X=k) = C(n,k)·p^k·(1-p)^(n-k)"
        }
    },
    {
        "id": "prob-binom-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Mean of Binomial distribution B(n,p) is:",
        "options": [
            "n(1-p)",
            "n²p",
            "p",
            "np"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Mean = np (expected number of successes)",
            "formula": "E(X) = np for Binomial"
        }
    },
    {
        "id": "prob-binom-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Variance of Binomial distribution B(n,p) is:",
        "options": [
            "p(1-p)",
            "np",
            "np(1-p)",
            "n²p(1-p)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Variance = npq where q = 1-p",
            "formula": "Var(X) = np(1-p) = npq for Binomial"
        }
    },
    {
        "id": "prob-poisson-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Poisson distribution with parameter λ gives P(X=k) = ?",
        "options": [
            "$\\frac{\\lambda^k}{k!}$",
            "$\\lambda^k$",
            "$\\frac{e^{-\\lambda}\\lambda^k}{k!}$",
            "$e^{-\\lambda}\\lambda^k$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Poisson Distribution models rare events occurring at a constant average rate.\n\nP(X=k) = e^(-λ) · λ^k / k!\n\nWhere λ = expected number of events in the interval.\n\nApplications:\n- Number of calls per hour at call center\n- Number of defects per unit length\n- Number of arrivals at a queue\n\nKey insight: As Binomial with n→∞, p→0, np→λ, we get Poisson.",
            "formula": "P(X=k) = e^(-λ)·λ^k / k!"
        }
    },
    {
        "id": "prob-poisson-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "For Poisson distribution with parameter λ, E(X) = Var(X) = ?",
        "options": [
            "1",
            "λ",
            "λ²",
            "0"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "A unique property of Poisson distribution!\n\nFor Poisson with parameter λ:\nE(X) = λ (mean)\nVar(X) = λ (variance)\n\nThis means: Mean = Variance\n\nIn practice, if you observe data where mean ≈ variance, Poisson may be a good model!\n\nContrast with Binomial: Var = np(1-p) < np = Mean",
            "formula": "E(X) = Var(X) = λ for Poisson"
        }
    },
    {
        "id": "prob-poisson-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Poisson is used to approximate Binomial when:",
        "options": [
            "p is large",
            "n is large, p is small, np is moderate",
            "n = p",
            "n is small"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Poisson approximates Binomial when n→∞, p→0, np→λ"
        }
    },
    {
        "id": "prob-uniform-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "PDF of Uniform distribution U(a,b) is:",
        "options": [
            "1/(b+a)",
            "1",
            "(b-a)",
            "1/(b-a)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Constant PDF between a and b, zero elsewhere",
            "formula": "f(x) = 1/(b-a) for a ≤ x ≤ b"
        }
    },
    {
        "id": "prob-uniform-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Mean of Uniform distribution U(a,b) is:",
        "options": [
            "a",
            "b",
            "(b-a)/2",
            "(a+b)/2"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Mean is midpoint of interval",
            "formula": "E(X) = (a+b)/2 for U(a,b)"
        }
    },
    {
        "id": "prob-uniform-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Variance of Uniform distribution U(a,b) is:",
        "options": [
            "$(b-a)/12$",
            "$(b-a)^2$",
            "$(b-a)^2/12$",
            "$(b+a)^2/12$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Variance formula for uniform",
            "formula": "Var(X) = (b-a)²/12 for U(a,b)"
        }
    },
    {
        "id": "prob-exp-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "PDF of Exponential distribution with parameter λ is f(x) = ?",
        "options": [
            "$\\lambda e^{-\\lambda x}$",
            "$e^{-x/\\lambda}$",
            "$e^{-\\lambda x}$",
            "$\\lambda e^{\\lambda x}$"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Exponential models time between Poisson events",
            "formula": "f(x) = λe^(-λx) for x ≥ 0"
        }
    },
    {
        "id": "prob-exp-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Mean of Exponential distribution with parameter λ is:",
        "options": [
            "λ²",
            "λ",
            "$\\sqrt{\\lambda}$",
            "1/λ"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Mean = 1/λ (average time between events)",
            "formula": "E(X) = 1/λ for Exponential"
        }
    },
    {
        "id": "prob-exp-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Exponential distribution has the memoryless property: P(X > s+t | X > s) = ?",
        "options": [
            "P(X > s)",
            "P(X > s)P(X > t)",
            "P(X > s+t)",
            "P(X > t)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Memoryless Property: The exponential distribution 'forgets' the past!\n\nP(X > s+t | X > s) = P(X > t)\n\nMeaning: Given you've already waited s time units, the remaining wait time distribution is the same as if you just started.\n\nOnly exponential (continuous) and geometric (discrete) have this property.\n\nExample: If bulb has survived 100 hours, probability of surviving another 50 hours = probability of new bulb surviving 50 hours.",
            "formula": "P(X > s+t | X > s) = P(X > t)"
        }
    },
    {
        "id": "prob-normal-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Normal distribution N(μ,σ²) has PDF proportional to:",
        "options": [
            "$e^{-\\lambda x}$",
            "$e^{-|x-\\mu|}$",
            "$e^{-(x-\\mu)^2/(2\\sigma^2)}$",
            "$e^{-x^2}$"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Bell curve centered at μ with spread σ",
            "formula": "f(x) ∝ exp[-(x-μ)²/(2σ²)]"
        }
    },
    {
        "id": "prob-normal-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Standard Normal distribution Z has mean and variance:",
        "options": [
            "μ=0, σ²=1",
            "μ=0, σ²=0",
            "μ=1, σ²=1",
            "μ=1, σ²=0"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Standard normal: N(0,1) - mean 0, variance 1",
            "formula": "Z ~ N(0,1)"
        }
    },
    {
        "id": "prob-normal-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "To standardize X ~ N(μ,σ²), we compute Z = ?",
        "options": [
            "(X - μ)/σ²",
            "X - μ",
            "(X - μ)/σ",
            "X/σ"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Subtract mean, divide by standard deviation",
            "formula": "Z = (X - μ)/σ ~ N(0,1)"
        }
    },
    {
        "id": "prob-normal-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "For standard normal, P(-1 ≤ Z ≤ 1) ≈ ?",
        "options": [
            "50%",
            "68%",
            "95%",
            "99.7%"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "The 68-95-99.7 Rule (Empirical Rule) for Normal Distribution:\n\nP(μ - 1σ < X < μ + 1σ) ≈ 68.27%\nP(μ - 2σ < X < μ + 2σ) ≈ 95.45%\nP(μ - 3σ < X < μ + 3σ) ≈ 99.73%\n\nThis is a quick rule for estimating probabilities without tables!\n\nMemory aid: 68-95-99.7 corresponds to 1-2-3 standard deviations.",
            "formula": "P(μ-σ < X < μ+σ) ≈ 0.68"
        }
    },
    {
        "id": "prob-normal-005",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "For standard normal, P(-2 ≤ Z ≤ 2) ≈ ?",
        "options": [
            "68%",
            "95%",
            "99.7%",
            "50%"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "68-95-99.7 rule: about 95% within 2σ of mean",
            "formula": "P(μ-2σ < X < μ+2σ) ≈ 0.95"
        }
    },
    {
        "id": "prob-corr-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Correlation coefficient r ranges from:",
        "options": [
            "0 to 1",
            "-1 to 1",
            "-∞ to ∞",
            "0 to ∞"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "r = 1 (perfect positive), r = -1 (perfect negative), r = 0 (no linear correlation)",
            "formula": "-1 ≤ r ≤ 1"
        }
    },
    {
        "id": "prob-corr-002",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "If r = 0, X and Y are:",
        "options": [
            "Uncorrelated (no linear relationship)",
            "Negatively correlated",
            "Independent",
            "Perfectly correlated"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "r = 0 means no linear correlation, but X and Y could still be dependent (non-linearly)"
        }
    },
    {
        "id": "prob-corr-003",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Covariance Cov(X,Y) = ?",
        "options": [
            "E(X)E(Y)",
            "E(XY)",
            "Var(X)Var(Y)",
            "E(XY) - E(X)E(Y)"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Covariance measures joint variability",
            "formula": "Cov(X,Y) = E(XY) - E(X)E(Y)"
        }
    },
    {
        "id": "prob-corr-004",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "Correlation coefficient r = ?",
        "options": [
            "Var(X)/Var(Y)",
            "Cov(X,Y)/(σ_X × σ_Y)",
            "Cov(X,Y)",
            "Cov(X,Y)/(σ_X + σ_Y)"
        ],
        "correctAnswer": 1,
        "explanation": {
            "solution": "Correlation is normalized covariance",
            "formula": "r = Cov(X,Y)/(σ_X·σ_Y)"
        }
    },
    {
        "id": "prob-ind-001",
        "type": "MCQ",
        "topic": "engineering-math",
        "subtopic": "Probability & Statistics",
        "question": "If X and Y are independent, then Cov(X,Y) = ?",
        "options": [
            "-1",
            "1",
            "0",
            "E(X)E(Y)"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Independence implies E(XY) = E(X)E(Y), so Cov = 0"
        }
    }
]);