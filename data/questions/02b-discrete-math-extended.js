/**
 * Discrete Mathematics Extended - Graph Theory, Relations, Groups
 */

Questions.register([
    // ========== MORE GRAPH THEORY ==========
    {
        id: "dm-graph-010",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "The number of edges in a wheel graph Wₙ with n vertices (1 hub + (n-1) rim vertices) is:",
        options: ["n-1", "n", "2(n-1)", "2n-2"],
        correctAnswer: 2,
        explanation: { solution: "Wheel = Cycle Cₙ₋₁ (n-1 edges) + n-1 edges from hub to each rim vertex = 2(n-1)", formula: "Edges in Wₙ = 2(n-1)" }
    },
    {
        id: "dm-graph-011",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A hypercube Qₙ has 2ⁿ vertices. How many edges does Q₃ have?",
        correctAnswer: 12,
        tolerance: 0,
        explanation: { solution: "Qₙ has n·2ⁿ⁻¹ edges. Q₃: 3×2² = 12 edges", formula: "Edges in Qₙ = n·2^(n-1)" }
    },
    {
        id: "dm-graph-012",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "The degree of each vertex in a hypercube Qₙ is:",
        options: ["n-1", "n", "2n", "2ⁿ"],
        correctAnswer: 1,
        explanation: { solution: "Each vertex's binary label differs from n others in exactly one bit", formula: "Qₙ is n-regular" }
    },
    {
        id: "dm-graph-013",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A simple graph with n vertices that is connected must have at least how many edges?",
        options: ["n", "n-1", "n/2", "n(n-1)/2"],
        correctAnswer: 1,
        explanation: { solution: "Minimum connected graph is a tree: n-1 edges", formula: "Minimum edges for connected = n-1 (tree)" }
    },
    {
        id: "dm-graph-014",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Maximum edges in a simple planar graph with n ≥ 3 vertices is:",
        options: ["n", "2n", "3n - 6", "n(n-1)/2"],
        correctAnswer: 2,
        explanation: { solution: "From Euler's formula v - e + f = 2 and 3f ≤ 2e, we get e ≤ 3n - 6", formula: "Max planar edges = 3n - 6 (n ≥ 3)" }
    },
    {
        id: "dm-graph-015",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A graph has a Hamiltonian cycle if:",
        options: ["It visits every edge exactly once", "It visits every vertex exactly once and returns", "It is connected", "It has Eulerian path"],
        correctAnswer: 1,
        explanation: { solution: "Hamiltonian cycle = visit each vertex exactly once, return to start. Eulerian = visit each edge exactly once." }
    },
    {
        id: "dm-graph-016",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "An Eulerian path (not cycle) exists if the graph has exactly how many odd-degree vertices?",
        options: ["0", "1", "2", "Any number"],
        correctAnswer: 2,
        explanation: { solution: "Eulerian path: exactly 2 odd-degree vertices (start and end). Eulerian cycle: all even degrees." }
    },
    {
        id: "dm-graph-017",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "In the complement of graph G, two vertices are adjacent if and only if:",
        options: ["They are adjacent in G", "They are not adjacent in G", "They have same degree in G", "They are in the same component in G"],
        correctAnswer: 1,
        explanation: { solution: "Complement Ḡ has edges exactly where G doesn't (between non-adjacent vertices of G)" }
    },
    {
        id: "dm-graph-018",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "A graph is self-complementary if:",
        options: ["G̅ = G", "G ≅ G̅ (isomorphic to its complement)", "G = -G", "G has no edges"],
        correctAnswer: 1,
        explanation: { solution: "Self-complementary means G is isomorphic to its own complement" }
    },
    {
        id: "dm-graph-019",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Number of edges in self-complementary graph with n vertices is:",
        options: ["n(n-1)/2", "n(n-1)/4", "n/2", "(n-1)/2"],
        correctAnswer: 1,
        explanation: { solution: "G and Ḡ split total Kₙ edges equally: n(n-1)/2 ÷ 2 = n(n-1)/4", formula: "Self-complementary: e = n(n-1)/4" }
    },
    {
        id: "dm-graph-020",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Graph Theory",
        question: "Vertex connectivity κ(G) is related to minimum degree δ(G) by:",
        options: ["κ(G) = δ(G)", "κ(G) ≥ δ(G)", "κ(G) ≤ δ(G)", "κ(G) = δ(G) + 1"],
        correctAnswer: 2,
        explanation: { solution: "κ(G) ≤ λ(G) ≤ δ(G) where λ is edge connectivity", formula: "κ(G) ≤ δ(G)" }
    },
    // ========== RELATIONS ==========
    {
        id: "dm-rel-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "A relation R is reflexive if for all a in A:",
        options: ["(a,a) ∈ R", "(a,a) ∉ R", "if (a,b)∈R then (b,a)∈R", "if (a,b)∈R and (b,c)∈R then (a,c)∈R"],
        correctAnswer: 0,
        explanation: { solution: "Reflexive: every element is related to itself" }
    },
    {
        id: "dm-rel-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "A relation R is anti-symmetric if whenever (a,b)∈R and (b,a)∈R:",
        options: ["a ≠ b", "a = b", "(a,b) ∉ R", "R is empty"],
        correctAnswer: 1,
        explanation: { solution: "Anti-symmetric: (a,b) and (b,a) both in R implies a=b" }
    },
    {
        id: "dm-rel-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "A relation is an equivalence relation if it is:",
        options: ["Reflexive and symmetric", "Symmetric and transitive", "Reflexive, symmetric, and transitive", "Reflexive and anti-symmetric"],
        correctAnswer: 2,
        explanation: { solution: "Equivalence = reflexive + symmetric + transitive" }
    },
    {
        id: "dm-rel-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "Equivalence classes form a _____ of the underlying set:",
        options: ["Subset", "Superset", "Partition", "Power set"],
        correctAnswer: 2,
        explanation: { solution: "Equivalence classes are disjoint and cover the whole set (partition)" }
    },
    {
        id: "dm-rel-005",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "How many reflexive relations are possible on a set with 3 elements?",
        correctAnswer: 64,
        tolerance: 0,
        explanation: { solution: "Reflexive: diagonal elements (a,a) must be in R. This fixes 3 pairs. Remaining n²-n = 6 pairs can be chosen freely: 2⁶ = 64", formula: "Reflexive relations = 2^(n²-n)" }
    },
    {
        id: "dm-rel-006",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Sets & Relations",
        question: "How many symmetric relations are possible on a set with 3 elements?",
        correctAnswer: 64,
        tolerance: 0,
        explanation: { solution: "Need to choose: 3 diagonal pairs (2³), 3 off-diagonal pairs (either both in or both out: 2³). Total = 2³ × 2³ = 64", formula: "Symmetric relations = 2^(n(n+1)/2)" }
    },
    // ========== FUNCTIONS ==========
    {
        id: "dm-func-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Functions",
        question: "A function f: A → B is injective (one-to-one) if:",
        options: ["Every element of B is mapped to", "Different elements of A map to different elements of B", "f(a) = f(b) implies a = b", "Both B and C"],
        correctAnswer: 3,
        explanation: { solution: "Injective: f(a)=f(b) ⟹ a=b (no two inputs give same output)" }
    },
    {
        id: "dm-func-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Functions",
        question: "A function f: A → B is surjective (onto) if:",
        options: ["Every element of B has a preimage in A", "f is one-to-one", "A and B have same size", "f has an inverse"],
        correctAnswer: 0,
        explanation: { solution: "Surjective: range = codomain (every b has some a with f(a)=b)" }
    },
    {
        id: "dm-func-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Functions",
        question: "A bijection is a function that is:",
        options: ["Injective only", "Surjective only", "Both injective and surjective", "Neither"],
        correctAnswer: 2,
        explanation: { solution: "Bijection = one-to-one correspondence (both injective and surjective)" }
    },
    {
        id: "dm-func-004",
        type: "NAT",
        topic: "discrete-math",
        subtopic: "Functions",
        question: "How many bijections (permutations) are there from a 4-element set to itself?",
        correctAnswer: 24,
        tolerance: 0,
        explanation: { solution: "Bijections from n-set to itself = n! = 4! = 24", formula: "Bijections = n!" }
    },
    {
        id: "dm-func-005",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Functions",
        question: "Number of functions from set A (|A|=m) to set B (|B|=n) is:",
        options: ["m + n", "m × n", "n^m", "m^n"],
        correctAnswer: 2,
        explanation: { solution: "Each of m elements has n choices → nᵐ total functions", formula: "Functions from A to B = n^m" }
    },
    // ========== RECURRENCE RELATIONS ==========
    {
        id: "dm-recur-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Recurrence",
        question: "The recurrence T(n) = T(n-1) + 1 with T(0) = 0 has solution:",
        options: ["T(n) = 0", "T(n) = n", "T(n) = 2^n", "T(n) = n!"],
        correctAnswer: 1,
        explanation: { solution: "Add 1 each step: T(n) = n" }
    },
    {
        id: "dm-recur-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Recurrence",
        question: "The recurrence T(n) = 2T(n-1) with T(0) = 1 has solution:",
        options: ["T(n) = n", "T(n) = 2n", "T(n) = 2^n", "T(n) = n²"],
        correctAnswer: 2,
        explanation: { solution: "Doubles each step: T(n) = 2ⁿ" }
    },
    {
        id: "dm-recur-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Recurrence",
        question: "Fibonacci sequence Fₙ = Fₙ₋₁ + Fₙ₋₂ is a:",
        options: ["First-order linear recurrence", "Second-order linear recurrence", "Non-linear recurrence", "Divide-and-conquer recurrence"],
        correctAnswer: 1,
        explanation: { solution: "Depends on two previous terms → second order" }
    },
    // ========== GROUP THEORY ==========
    {
        id: "dm-group-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Algebraic Structures",
        question: "A group must satisfy which properties?",
        options: ["Closure, associativity only", "Closure, associativity, identity, inverse", "Commutativity, closure", "Distributivity, closure"],
        correctAnswer: 1,
        explanation: { solution: "Group: closed, associative, has identity, every element has inverse" }
    },
    {
        id: "dm-group-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Algebraic Structures",
        question: "An abelian group additionally requires:",
        options: ["Identity element", "Inverse elements", "Commutativity", "Closure"],
        correctAnswer: 2,
        explanation: { solution: "Abelian = commutative group: a*b = b*a for all a,b" }
    },
    {
        id: "dm-group-003",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Algebraic Structures",
        question: "Order of an element a in a group is the smallest positive n such that:",
        options: ["a = n", "aⁿ = e (identity)", "a + n = 0", "n divides a"],
        correctAnswer: 1,
        explanation: { solution: "Order of a = smallest n where aⁿ = identity" }
    },
    {
        id: "dm-group-004",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Algebraic Structures",
        question: "Lagrange's theorem states that the order of a subgroup:",
        options: ["Equals the order of the group", "Divides the order of the group", "Is a prime number", "Is greater than the group order"],
        correctAnswer: 1,
        explanation: { solution: "Lagrange: |H| divides |G| for subgroup H of finite group G", formula: "|H| divides |G|" }
    },
    // ========== LATTICE ==========
    {
        id: "dm-lattice-001",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Algebraic Structures",
        question: "A lattice is a partially ordered set where every two elements have:",
        options: ["Only a LUB", "Only a GLB", "Both LUB (join) and GLB (meet)", "Neither LUB nor GLB"],
        correctAnswer: 2,
        explanation: { solution: "Lattice: every pair has both least upper bound (∨) and greatest lower bound (∧)" }
    },
    {
        id: "dm-lattice-002",
        type: "MCQ",
        topic: "discrete-math",
        subtopic: "Algebraic Structures",
        question: "In a Boolean algebra, complement of element a satisfies:",
        options: ["a ∨ a' = 1 and a ∧ a' = 0", "a ∨ a' = a", "a ∧ a' = a", "a' = a"],
        correctAnswer: 0,
        explanation: { solution: "Complement: join with complement = top, meet with complement = bottom" }
    }
]);

console.log("Extended Discrete Math questions loaded");
