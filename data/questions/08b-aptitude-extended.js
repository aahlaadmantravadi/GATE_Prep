Questions.register([
    {
        "id": "apt-series-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "Find the next number in the series: 2, 6, 12, 20, 30, ?",
        "correctAnswer": 42,
        "tolerance": 0,
        "explanation": {
            "solution": "Pattern: differences are 4, 6, 8, 10, 12... Next difference = 12, so 30 + 12 = 42. Or n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42"
        }
    },
    {
        "id": "apt-series-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "Find the next number: 1, 4, 9, 16, 25, ?",
        "correctAnswer": 36,
        "tolerance": 0,
        "explanation": {
            "solution": "Perfect squares: 1², 2², 3², 4², 5², 6² = 36"
        }
    },
    {
        "id": "apt-series-003",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "1, 1, 2, 3, 5, 8, 13, ?",
        "correctAnswer": 21,
        "tolerance": 0,
        "explanation": {
            "solution": "Fibonacci sequence: each term = sum of previous two. 8 + 13 = 21"
        }
    },
    {
        "id": "apt-pct-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "If a number is increased by 20% and then decreased by 20%, what is the net percentage change?",
        "correctAnswer": -4,
        "tolerance": 0,
        "explanation": {
            "solution": "100 → 120 → 96. Net change = -4%",
            "formula": "Successive % change: x + y + xy/100 = 20 - 20 - 400/100 = -4%"
        }
    },
    {
        "id": "apt-pct-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "A shopkeeper marks goods 25% above cost price and offers 20% discount. What is profit percentage?",
        "correctAnswer": 0,
        "tolerance": 0,
        "explanation": {
            "solution": "CP=100, MP=125, SP=125×0.8=100. No profit, no loss = 0%",
            "formula": "SP = MP × (1 - discount%)"
        }
    },
    {
        "id": "apt-pl-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "An article is sold for Rs. 480 at 20% profit. What was the cost price?",
        "correctAnswer": 400,
        "tolerance": 0,
        "explanation": {
            "solution": "CP × 1.2 = 480, so CP = 480/1.2 = 400",
            "formula": "SP = CP(1 + P%/100)"
        }
    },
    {
        "id": "apt-pl-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "If selling price is doubled, profit triples. What is the profit percentage?",
        "correctAnswer": 100,
        "tolerance": 0,
        "explanation": {
            "solution": "Let CP=C, SP=S, P=profit. S=C+P. 2S=C+3P → 2C+2P=C+3P → C=P. So profit% = P/C×100 = 100%"
        }
    },
    {
        "id": "apt-ratio-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "If A:B = 2:3 and B:C = 4:5, then A:B:C = ?:12:? What is the value of C (B=12)?",
        "correctAnswer": 15,
        "tolerance": 0,
        "explanation": {
            "solution": "Make B same: A:B = 8:12, B:C = 12:15. So A:B:C = 8:12:15. C = 15"
        }
    },
    {
        "id": "apt-ratio-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "A sum of Rs. 770 is divided among A, B, C in ratio 2:3:5. How much does C get?",
        "correctAnswer": 385,
        "tolerance": 0,
        "explanation": {
            "solution": "Total parts = 10. C gets 5 parts = 770 × 5/10 = 385"
        }
    },
    {
        "id": "apt-tw-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "A can do work in 10 days, B in 15 days. How many days if they work together?",
        "correctAnswer": 6,
        "tolerance": 0,
        "explanation": {
            "solution": "Work done per day: 1/10 + 1/15 = 5/30 = 1/6. Days = 6",
            "formula": "Combined time = (a×b)/(a+b) = 150/25 = 6"
        }
    },
    {
        "id": "apt-tw-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "6 men complete work in 8 days. How many days for 4 men?",
        "correctAnswer": 12,
        "tolerance": 0,
        "explanation": {
            "solution": "Man-days = 6 × 8 = 48. Days for 4 men = 48/4 = 12",
            "formula": "M₁D₁ = M₂D₂"
        }
    },
    {
        "id": "apt-tsd-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "A train 100m long crosses a pole in 5 seconds. Speed in km/hr?",
        "correctAnswer": 72,
        "tolerance": 0,
        "explanation": {
            "solution": "Speed = 100/5 = 20 m/s = 20 × 18/5 = 72 km/hr",
            "formula": "m/s × 18/5 = km/hr"
        }
    },
    {
        "id": "apt-tsd-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "Two trains 100m and 150m long running at 50 km/hr and 40 km/hr in opposite directions. Time to cross each other in seconds?",
        "correctAnswer": 10,
        "tolerance": 0,
        "explanation": {
            "solution": "Relative speed = 90 km/hr = 25 m/s. Distance = 250m. Time = 250/25 = 10 sec",
            "formula": "Time = (L₁+L₂)/(S₁+S₂)"
        }
    },
    {
        "id": "apt-int-001",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "Simple interest on Rs. 5000 at 10% for 2 years is?",
        "correctAnswer": 1000,
        "tolerance": 0,
        "explanation": {
            "solution": "SI = PTR/100 = 5000 × 2 × 10/100 = 1000",
            "formula": "SI = PTR/100"
        }
    },
    {
        "id": "apt-int-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "Difference between CI and SI on Rs. 10000 at 10% for 2 years is?",
        "correctAnswer": 100,
        "tolerance": 0,
        "explanation": {
            "solution": "SI = 2000. CI = 10000(1.1² - 1) = 2100. Difference = 100",
            "formula": "For 2 years: CI - SI = P(R/100)²"
        }
    },
    {
        "id": "apt-logic-010",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "All dogs are animals. All animals are living things. Therefore:",
        "options": [
            "No conclusion possible",
            "Some animals are not dogs",
            "All dogs are living things",
            "All living things are dogs"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Syllogism: Dogs ⊂ Animals ⊂ Living things. So Dogs ⊂ Living things."
        }
    },
    {
        "id": "apt-logic-011",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "Statement: Some books are pens. All pens are erasers. Conclusion: Some books are erasers.",
        "options": [
            "Cannot determine",
            "Probably true",
            "Definitely true",
            "Definitely false"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Books ∩ Pens ≠ ∅. Pens ⊂ Erasers. So some books (those that are pens) are erasers. Definitely true."
        }
    },
    {
        "id": "apt-logic-012",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "If South-East becomes North, what does North-West become?",
        "options": [
            "East",
            "South-East",
            "South",
            "West"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Rotation: SE→N is 135° anti-clockwise. Apply same to NW: NW→S"
        }
    },
    {
        "id": "apt-logic-013",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "A is B's brother. C is A's mother. D is C's father. What is B to D?",
        "options": [
            "Grandchild",
            "Grandson",
            "Granddaughter",
            "Son"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "D is grandfather (C's father), A and B are C's children. B is D's grandchild (could be grandson or granddaughter)."
        }
    },
    {
        "id": "apt-logic-014",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "In a row of 50 students, Ram is 18th from left. What is his position from right?",
        "options": [
            "33rd",
            "31st",
            "34th",
            "32nd"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Position from right = Total - Position from left + 1 = 50 - 18 + 1 = 33",
            "formula": "Right = Total - Left + 1"
        }
    },
    {
        "id": "apt-code-001",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "If GATE = HBUF, then EXAM = ?",
        "options": [
            "FYBM",
            "EZAM",
            "FZBO",
            "FYBN"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Each letter shifted by +1: E→F, X→Y, A→B, M→N. EXAM = FYBN"
        }
    },
    {
        "id": "apt-code-002",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "If 123 = CAB, 456 = FED, then 789 = ?",
        "options": [
            "GHI",
            "IGH",
            "HGI",
            "IHG"
        ],
        "correctAnswer": 3,
        "explanation": {
            "solution": "Pattern: reverse order and position→letter. 789 → 9=I, 8=H, 7=G → IHG"
        }
    },
    {
        "id": "apt-blood-001",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "Pointing to a photograph, a man says 'The person is the son of my father's only daughter.' Who is in the photograph?",
        "options": [
            "Nephew",
            "Son",
            "Brother",
            "Father"
        ],
        "correctAnswer": 0,
        "explanation": {
            "solution": "Father's only daughter = sister. Son of sister = nephew."
        }
    },
    {
        "id": "apt-blood-002",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Logical Reasoning",
        "question": "A is father of B. C is daughter of A. D is brother of B. E is son of C. What is D to E?",
        "options": [
            "Grandfather",
            "Father",
            "Uncle",
            "Brother"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "D = brother of B, C is sibling, E is C's son. D is E's uncle."
        }
    },
    {
        "id": "apt-di-001",
        "type": "MCQ",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "If a pie chart for monthly expenses shows 90° for rent, what percentage is rent?",
        "options": [
            "45%",
            "30%",
            "25%",
            "10%"
        ],
        "correctAnswer": 2,
        "explanation": {
            "solution": "Percentage = (Angle/360) × 100 = (90/360) × 100 = 25%",
            "formula": "% = (θ/360) × 100"
        }
    },
    {
        "id": "apt-di-002",
        "type": "NAT",
        "topic": "aptitude",
        "subtopic": "Quantitative",
        "question": "In a bar graph, if Bar A = 40 units and Bar B is 25% more than A, what is Bar B?",
        "correctAnswer": 50,
        "tolerance": 0,
        "explanation": {
            "solution": "B = 40 × 1.25 = 50"
        }
    }
]);