Questions.register([
    {
        "id": "algorithms.1.1",
        "question": "The output of **someAlgo** ($T$) for the tree shown in the given figure is _______. (Answer in integer)<br>Algorithm:<br>1. BFS from $v$ to find furthest $u$.<br>2. BFS from $u$ to find furthest $z$.<br>3. Output dist($u$, $z$).",
        "options": [],
        "answer": {
            "answer": "6",
            "explanation": "The algorithm finds the **diameter** of the tree.<br>1. Starting BFS from any node $v$ finds finding a node $u$ which is one endpoint of the longest path (diameter).<br>2. Starting BFS from $u$ finds finding the other endpoint $z$ of the diameter.<br>3. The distance between $u$ and $z$ is the diameter.<br>For the given tree (from visual inspection of `algo-001.png`), the longest path has length 6.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "NAT"
    },
    {
        "id": "algorithms.1.2",
        "question": "Let $T$ be a Depth First Tree of a undirected graph $G$. An array $P$ indexed by vertices of $G$ is given. $P[V]$ is the parent of vertex $V$ in $T$. Parent of root is root itself.<br>Give a method for finding and printing the cycle formed if the edge $(u, v)$ of $G$ not in $T$ (i.e., $e \\in G - T$) is now added to $T$. Time taken must be proportional to the length of the cycle.",
        "options": [],
        "answer": {
            "answer": "Print path from u to v using parent array",
            "explanation": "In an undirected DFS tree, a non-tree edge $(u, v)$ is a **back edge**. This means one of the nodes is an ancestor of the other in $T$.<br>Assume $v$ is the ancestor of $u$ (or vice versa).<br>The cycle consists of the edge $(u, v)$ plus the path in the tree from $u$ to $v$.<br>Since we have the parent array $P$:<br>1. Start from $u$. Print $u$.<br>2. Move to parent $P[u]$. Print.<br>3. Repeat until we reach $v$.<br>This prints the path $u \\to \\dots \\to v$. Adding edge $(v, u)$ completes the cycle.<br>Note: We need to determine which is the ancestor. With only parent array, we can trace back from both $u$ and $v$ to finding LCA? But for DFS back edge, one IS the ancestor.<br>If we don't know which, we can trace back from $u$ and mark visited (or store in list) until we hit root. Then check $v$. Or simpler: Since it's a back edge, the cycle is unique. We can just print $u$, $P[u]$, $P[P[u]]\\dots$ until equals $v$ (if $v$ is ancestor). If $u$ is ancestor, swap.",
            "isDescriptive": true
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "DESCRIPTIVE"
    },
    {
        "id": "algorithms.1.3",
        "question": "Complete the algorithm algorithm for shifting array $A$ cyclically left by $K$ places in linear time. Fill in the blanks.<br>min:=n; i=0; while _____ do begin<br>temp:=A[i]; j:=i; while _____ do begin<br>A[j]:=_____; j:=(j+K) mod n; if j<min then min:=j; end;<br>A[(n+i-K)mod n]:=_____; i:=_____; end;",
        "options": [],
        "answer": {
            "answer": "Blanks: i < gcd(n, K), (j+K) mod n != i, A[(j+K) mod n], temp, i+1",
            "explanation": "This is the **Juggling Algorithm** for array rotation.<br>Blanks:<br>1. `i < gcd(n, K)`: The number of independent cycles is $gcd(n, K)$. (Or `i < min` if min tracks count).<br>2. `(j+K) mod n != i`: Loop until we return to start of cycle.<br>3. `A[(j+K) mod n]`: Move element from shifted position to current.<br>4. `temp`: Place the saved first element into the last position.<br>5. `i+1`: Move to next cycle start.",
            "isDescriptive": true
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "DESCRIPTIVE"
    },
    {
        "id": "algorithms.1.4",
        "question": "An element in an array $X$ is called a leader if it is greater than all elements to the right of it in $X$. The best algorithm to find all leaders in an array",
        "options": [
            "solves it in linear time using a left to right pass of the array",
            "solves it in linear time using a right to left pass of the array",
            "solves it using divide and conquer in time $\\Theta(n \\log n)$",
            "solves it in time $\\Theta(n^2)$"
        ],
        "answer": {
            "answer": "B",
            "explanation": "We can find all leaders in $O(n)$ by scanning from **right to left**.<br>Keep track of the `max_from_right`. If current element > `max_from_right`, it is a leader, and update `max_from_right`.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.1.5",
        "question": "Given two arrays of numbers $a_1, \\dots, a_n$ and $b_1, \\dots, b_n$ where each number is 0 or 1, the fastest algorithm to find the largest span $(i, j)$ such that $a_i + \\dots + a_j = b_i + \\dots + b_j$ or report that there is not such span,",
        "options": [
            "Takes $O(3^n)$ and $\\Omega(2^n)$ time if hashing is permitted",
            "Takes $O(n^3)$ and $\\Omega(n^{2.5})$ time in the key comparison mode",
            "Takes $\\Theta(n)$ time and space",
            "Takes $O(\\sqrt{n})$ time only if the sum of the $2n$ elements is an even number"
        ],
        "answer": {
            "answer": "C",
            "explanation": "This problem can be reduced to finding the longest subarray with 0 sum in an array $C$ where $C[k] = a[k] - b[k]$.<br>Algorithm:<br>1. Create diff array $C$.<br>2. Compute prefix sums.<br>3. Use a Hash Map (or array of size $2n+1$) to store first occurrence of each prefix sum.<br>4. If prefix sum repeats, the subarray between first and current occurrence has 0 sum.<br>Time Complexity: $\\Theta(n)$. Space Complexity: $\\Theta(n)$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.2.1",
        "question": "Consider a sequence of 14 elements: $A = [-5, -10, 6, 3, -1, -2, 13, 4, -9, -1, 4, 12, -3, 0]$.<br>The sequence sum $S(i, j) = \\sum_{k=i}^{j} A[k]$. Determine the maximum of $S(i, j)$, where $0 \\le i \\le j < 14$. (Divide and conquer approach may be used.)",
        "options": [],
        "answer": {
            "answer": "29",
            "explanation": "This requires finding the **Maximum Subarray Sum**.<br>Using Kadane's Algorithm:<br>- Run 1: 6, 3, -1, -2, 13, 4. Sum = 23.<br>- Next negative run: -9, -1 (Sum -10).<br>- Next positive run: 4, 12 (Sum 16).<br>- Combined: $23 - 10 + 16 = 29$.<br>The max subarray is $[6, 3, -1, -2, 13, 4, -9, -1, 4, 12]$, sum = 29.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "NAT"
    },
    {
        "id": "algorithms.2.2",
        "question": "Define $R_n$ to be the maximum amount earned by cutting a rod of length $n$ meters into one or more pieces of integer length and selling them. For $i > 0$, let $p[i]$ denote the selling price of a rod whose length is $i$ meters. Consider the array of prices:<br>$p[1]=1, p[2]=5, p[3]=8, p[4]=9, p[5]=10, p[6]=17, p[7]=18$<br>Which of the following statements is/are correct about $R_7$?",
        "options": [
            "$R_7 = 18$",
            "$R_7 = 19$",
            "$R_7$ is achieved by three different solutions",
            "$R_7$ cannot be achieved by a solution consisting of three pieces"
        ],
        "answer": {
            "answer": "A, C",
            "explanation": "We calculate $R_7$ by checking combinations:<br>- 7 (price 18) -> Total 18.<br>- 6+1 (17+1) -> Total 18.<br>- 5+2 (10+5) -> 15.<br>- 4+3 (9+8) -> 17.<br>- 3+2+2 (8+5+5) -> 18.<br>Max value is 18. So A is correct, B is false.<br>Solutions achieving 18:<br>1. {7}<br>2. {6, 1}<br>3. {3, 2, 2}<br>There are 3 distinct solutions. So C is correct.<br>One solution {3, 2, 2} has 3 pieces, so D is false.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Dynamic Programming",
        "isPYQ": true,
        "type": "MSQ"
    },
    {
        "id": "algorithms.2.3",
        "question": "Consider an array $X$ that contains $n$ positive integers. A subarray of $X$ is defined to be a sequence of array locations with consecutive indices.<br>The C code snippet given below has been written to compute the length of the longest subarray of $X$ that contains at most two distinct integers. The code has two missing expressions labelled (P) and (Q).<br>Hint: At the end of loop $i$, `len1` is length of longest subarray ending with $X[i]$ containing all equal values. `len2` is length of longest subarray ending with $X[i]$ containing at most two distinct values.<br>Identify the correct expressions.",
        "options": [
            "(P) len1 + 1; (Q) len2 + 1",
            "(P) 1; (Q) len1 + 1",
            "(P) 1; (Q) len2 + 1",
            "(P) len2 + 1; (Q) len1 + 1"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Logic Analysis:<br>1. If `X[i] == second`, we switch the 'current' value to `second`. The run of `first`s ended. Since `X[i]` differs from `first` (which is `X[i-1]`), the run of *identical* values ending at $i$ has length 1. So **(P) = 1**.<br>2. If `X[i]` is a new 3rd value (in `else`), the new window of 'at most 2 distinct' must consist of the immediate previous run of identical values (which was `first`s, of length `len1`) plus the new `X[i]`. So `len2` becomes `len1 + 1`. So **(Q) = len1 + 1**.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.2.4",
        "question": "Consider the following problem. Given $n$ positive integers $a_1, \\dots, a_n$, it is required to partition them into two parts $A$ and $B$ such that $|\\sum_{i \\in A} a_i - \\sum_{i \\in B} a_i|$ is minimised.<br>Consider a greedy algorithm: numbers are sorted $a_1 \\ge \\dots \\ge a_n$, and at $i^{th}$ step, $a_i$ is placed in that part whose sum is smaller at that step. Give an example with $n=5$ for which the solution produced by the greedy algorithm is not optimal.",
        "options": [],
        "answer": {
            "answer": "5, 5, 4, 3, 3",
            "explanation": "Example: $5, 5, 4, 3, 3$.<br>**Greedy**:<br>1. 5 -> A:5 (5), B:0 (0)<br>2. 5 -> A:5 (5), B:5 (5)<br>3. 4 -> A:9 (9), B:5 (5) (Add to smaller)<br>4. 3 -> A:9 (9), B:8 (8)<br>5. 3 -> A:9 (9), B:11 (11)<br>Final Diff: $|9 - 11| = 2$.<br>**Optimal**:<br>A = {5, 5} sum 10.<br>B = {4, 3, 3} sum 10.<br>Diff: 0.<br>Greedy is not optimal.",
            "isDescriptive": true
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "DESCRIPTIVE"
    },
    {
        "id": "algorithms.2.5",
        "question": "Match the pairs in the following questions:<br>(a) Strassen's matrix multiplication algorithm<br>(b) Kruskal's minimum spanning tree algorithm<br>(c) Biconnected components algorithm<br>(d) Floyd's shortest path algorithm<br>---<br>(p) Greedy method<br>(q) Dynamic programming<br>(r) Divide and Conquer<br>(s) Depth-first search",
        "options": [],
        "answer": {
            "answer": "(a)-(r), (b)-(p), (c)-(s), (d)-(q)",
            "explanation": "- **Strassen's**: Divide and Conquer (r).<br>- **Kruskal's**: Greedy (p).<br>- **Biconnected components**: Uses DFS (s).<br>- **Floyd-Warshall**: Dynamic Programming (q).",
            "isDescriptive": true
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "DESCRIPTIVE"
    },
    {
        "id": "algorithms.3.1",
        "question": "Algorithm design technique used in quicksort algorithm is?",
        "options": [
            "Dynamic programming",
            "Backtracking",
            "Divide and conquer",
            "Greedy method"
        ],
        "answer": {
            "answer": "C",
            "explanation": "Quicksort uses **Divide and Conquer**. It partitions the array into two sub-arrays around a pivot and recursively sorts them.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.3.2",
        "question": "Merge sort uses:",
        "options": [
            "Divide and conquer strategy",
            "Backtracking approach",
            "Heuristic search",
            "Greedy approach"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Merge sort is a classic example of **Divide and Conquer** strategy. It divides the array into halves, sorts them recursively, and then merges the sorted halves.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.3.3",
        "question": "The correct matching for the following pairs is<br>A. All pairs shortest path ... 1. Greedy<br>B. Quick Sort ... 2. Depth-First Search<br>C. Minimum weight spanning tree ... 3. Dynamic Programming<br>D. Connected Components ... 4. Divide and Conquer",
        "options": [
            "A-2 B-4 C-1 D-3",
            "A-3 B-4 C-1 D-2",
            "A-3 B-4 C-2 D-1",
            "A-4 B-1 C-2 D-3"
        ],
        "answer": {
            "answer": "B",
            "explanation": "A. All pairs shortest path (Floyd-Warshall) -> 3. Dynamic Programming<br>B. Quick Sort -> 4. Divide and Conquer<br>C. MST (Prim/Kruskal) -> 1. Greedy<br>D. Connected Components -> 2. DFS/BFS<br>Match: A-3, B-4, C-1, D-2.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.3.4",
        "question": "Which one of the following algorithm design techniques is used in finding all pairs of shortest distances in a graph?",
        "options": [
            "Dynamic programming",
            "Backtracking",
            "Greedy",
            "Divide and Conquer"
        ],
        "answer": {
            "answer": "A",
            "explanation": "The Floyd-Warshall algorithm finds all-pairs shortest paths and uses **Dynamic Programming**.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Dynamic Programming",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.3.5",
        "question": "Match the following:<br>P. Prim's algorithm for minimum spanning tree ... i. Backtracking<br>Q. Floyd-Warshall algorithm for all pairs shortest path ... ii. Greedy method<br>R. Merge sort ... iii. Dynamic programming<br>S. Hamiltonian circuit ... iv. Divide and conquer",
        "options": [
            "P-iii, Q-ii, R-iv, S-i",
            "P-i, Q-ii, R-iv, S-iii",
            "P-ii, Q-iii, R-iv, S-i",
            "P-ii, Q-i, R-iii, S-iv"
        ],
        "answer": {
            "answer": "C",
            "explanation": "P. Prim's -> ii. Greedy method<br>Q. Floyd-Warshall -> iii. Dynamic programming<br>R. Merge sort -> iv. Divide and conquer<br>S. Hamiltonian circuit -> i. Backtracking (finding a cycle visiting every vertex exactly once is NP-complete, typically solved via backtracking).<br>Matches Option C.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.4.1",
        "question": "Given below are some algorithms, and some algorithm design paradigms.<br>1. Dijkstra's Shortest Path<br>2. Floyd-Warshall algorithm to compute all pair shortest path<br>3. Binary search on a sorted array<br>4. Backtracking search on a graph<br><br>i. Divide and Conquer<br>ii. Dynamic Programming<br>iii. Greedy design<br>iv. Depth-first search<br>v. Breadth-first search<br><br>Match the above algorithms on the left to the corresponding design paradigm they follow.",
        "options": [
            "1-i, 2-iii, 3-i, 4-v",
            "1-iii, 2-iii, 3-i, 4-v",
            "1-iii, 2-ii, 3-i, 4-iv",
            "1-iii, 2-ii, 3-i, 4-v"
        ],
        "answer": {
            "answer": "C",
            "explanation": "1. Dijkstra's -> iii. Greedy design<br>2. Floyd-Warshall -> ii. Dynamic Programming<br>3. Binary search -> i. Divide and Conquer<br>4. Backtracking search -> iv. Depth-first search (Backtracking is effectively DFS).<br>Matches Option C.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.4.2",
        "question": "Consider the following table:<br>(P) Kruskal ... (i) Divide and Conquer<br>(Q) Quicksort ... (ii) Greedy<br>(R) Floyd-Warshall ... (iii) Dynamic Programming<br><br>Match the algorithms to the design paradigms they are based on.",
        "options": [
            "(P) <-> (ii), (Q) <-> (iii), (R) <-> (i)",
            "(P) <-> (iii), (Q) <-> (i), (R) <-> (ii)",
            "(P) <-> (ii), (Q) <-> (i), (R) <-> (iii)",
            "(P) <-> (i), (Q) <-> (ii), (R) <-> (iii)"
        ],
        "answer": {
            "answer": "C",
            "explanation": "P. Kruskal's -> Greedy (ii)<br>Q. Quicksort -> Divide and Conquer (i)<br>R. Floyd-Warshall -> Dynamic Programming (iii)<br>Matches Option C.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Algorithm Design",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.4.3",
        "question": "If $T_1 = O(1)$, give the correct matching for the following pairs:<br>(M) $T_n = T_{n-1} + n$<br>(N) $T_n = T_{n/2} + n$<br>(O) $T_n = T_{n/2} + \\log n$<br>(P) $T_n = T_{n-1} + \\log n$<br><br>(U) $T_n = O(n)$<br>(V) $T_n = O(n \\log n)$<br>(W) $T_n = O(n^2)$<br>(X) $T_n = O(\\log^2 n)$",
        "options": [
            "M-W, N-V, O-U, P-X",
            "M-W, N-U, O-X, P-V",
            "M-V, N-W, O-X, P-U",
            "M-W, N-U, O-V, P-X"
        ],
        "answer": {
            "answer": "B",
            "explanation": "M. $T_n = T_{n-1} + n \\Rightarrow O(n^2)$ (Matches W)<br>N. $T_n = T_{n/2} + n \\Rightarrow O(n)$ (Matches U)<br>P. $T_n = T_{n-1} + \\log n \\Rightarrow \\sum \\log i = \\log(n!) = O(n \\log n)$ (Matches V)<br>O. $T_n = T_{n/2} + \\log n \\Rightarrow O(\\log^2 n)$ (Matches X) (Using Master Theorem adaptation or substitution).<br>Matches Option B.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Recurrence Relations",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.4.4",
        "question": "Consider the following functions from positive integers to real numbers:<br>$10, \\sqrt{n}, n, \\log_2 n, \\frac{100}{n}$.<br>The CORRECT arrangement of the above functions in increasing order of asymptotic complexity is:",
        "options": [
            "$\\log_2 n, \\frac{100}{n}, 10, \\sqrt{n}, n$",
            "$\\frac{100}{n}, 10, \\log_2 n, \\sqrt{n}, n$",
            "$10, \\frac{100}{n}, \\sqrt{n}, \\log_2 n, n$",
            "$\\frac{100}{n}, \\log_2 n, 10, \\sqrt{n}, n$"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Order of growth:<br>$\\frac{100}{n}$ (decays to 0)<br>$10$ (constant)<br>$\\log_2 n$ (logarithmic)<br>$\\sqrt{n}$ (fractional power)<br>$n$ (linear)<br>Correct order: $\\frac{100}{n}, 10, \\log_2 n, \\sqrt{n}, n$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.4.5",
        "question": "Consider the following three functions.<br>$f_1 = 10^n$, $f_2 = n^{\\log n}$, $f_3 = n^{\\sqrt{n}}$<br>Which one of the following options arranges the functions in the increasing order of asymptotic growth rate?",
        "options": [
            "$f_3, f_2, f_1$",
            "$f_2, f_1, f_3$",
            "$f_1, f_2, f_3$",
            "$f_2, f_3, f_1$"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Taking logs:<br>$\\log(f_1) = n \\log 10 = O(n)$<br>$\\log(f_2) = \\log n \\cdot \\log n = (\\log n)^2$<br>$\\log(f_3) = \\sqrt{n} \\log n$<br>Comparisons:<br>$(\\log n)^2 < \\sqrt{n} \\log n < n$<br>So $f_2 < f_3 < f_1$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.5.1",
        "question": "Which one of the following statements is **TRUE** for all positive functions $f(n)$?",
        "options": [
            "$f(n^2) = \\Theta(f(n)^2)$, when $f(n)$ is a polynomial",
            "$f(n^2) = o(f(n)^2)$",
            "$f(n^2) = O(f(n)^2)$, when $f(n)$ is an exponential function",
            "$f(n^2) = \\Omega(f(n)^2)$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "If $f(n)$ is a polynomial, say $n^k$, then $f(n^2) = (n^2)^k = n^{2k}$ and $f(n)^2 = (n^k)^2 = n^{2k}$. Thus they are equal/Theta. <br>For exponential $f(n)=2^n$, $f(n^2)=2^{n^2}$ which is much larger than $f(n)^2=2^{2n}$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.5.2",
        "question": "Let $f$ and $g$ be functions of natural numbers given by $f(n)=n$ and $g(n)=n^2$. Which of the following statements is/are **TRUE**?",
        "options": [
            "$f \\in O(g)$",
            "$f \\in \\Omega(g)$",
            "$f \\in o(g)$",
            "$f \\in \\Theta(g)$"
        ],
        "answer": {
            "answer": "A, C",
            "explanation": "$f(n)=n$ is strictly less than $g(n)=n^2$ asymptotically.<br>So $f \\in O(g)$ (True) and $f \\in o(g)$ (True).<br>$f \\in \\Omega(g)$ is False ($n$ is not $\\ge n^2$).<br>$f \\in \\Theta(g)$ is False.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MSQ"
    },
    {
        "id": "algorithms.5.3",
        "question": "Consider functions Function_1 and Function_2 expressed in pseudocode... Let $f_1(n)$ and $f_2(n)$ denote the number of times the statement \"x = x + 1\" is executed... Which of the following statements is/are **TRUE**?",
        "options": [
            "$f_1(n) \\in \\Theta(f_2(n))$",
            "$f_1(n) \\in o(f_2(n))$",
            "$f_1(n) \\in \\omega(f_2(n))$",
            "$f_1(n) \\in O(n)$"
        ],
        "answer": {
            "answer": "A, D",
            "explanation": "Function_1 inner loop runs $n$ times for first $n$, then $n/2$, etc. Sum is $n + n/2 + ... = 2n = \\Theta(n)$.<br>Function_2 loop runs $100n$ times. $100n = \\Theta(n)$.<br>So $f_1(n) = \\Theta(f_2(n))$ (True).<br>Both are linear, so $f_1(n) \\in O(n)$ (True).",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Time Complexity",
        "isPYQ": true,
        "type": "MSQ"
    },
    {
        "id": "algorithms.5.4",
        "question": "Let T(n) be the recurrence relation defined as follows:<br>$T(0) = 1$,<br>$T(1) = 2$, and<br>$T(n) = 5T(n-1) - 6T(n-2)$ for $n \\ge 2$<br>Which one of the following statements is TRUE?",
        "options": [
            "$T(n) = \\Theta(2^n)$",
            "$T(n) = \\Theta(n^2 2^n)$",
            "$T(n) = \\Theta(3^n)$",
            "$T(n) = \\Theta(n 3^n)$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Characteristic equation: $r^2 - 5r + 6 = 0 \\Rightarrow (r-2)(r-3)=0$. Roots 2, 3.<br>$T(n) = c_1 2^n + c_2 3^n$.<br>Using $T(0)=1, T(1)=2$:<br>$c_1+c_2=1 \\Rightarrow c_1 = 1-c_2$.<br>$2c_1 + 3c_2 = 2 \\Rightarrow 2(1-c_2) + 3c_2 = 2 \\Rightarrow 2 + c_2 = 2 \\Rightarrow c_2=0, c_1=1$.<br>So $T(n) = 1 \\cdot 2^n$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Recurrence Relations",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.5.5",
        "question": "Consider the following two functions:<br>$g_1(n) = n^3$ for $0 \\le n \\le 10,000$, $n^2$ for $n > 10,000$<br>$g_2(n) = n$ for $0 \\le n \\le 100$, $n^3$ for $n > 100$<br>Which of the following is true?",
        "options": [
            "$g_1(n)$ is $O(g_2(n))$",
            "$g_1(n)$ is $O(n^3)$",
            "$g_2(n)$ is $O(g_1(n))$",
            "$g_2(n)$ is $O(n)$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "Asymptotically ($n \\to \\infty$), $g_1(n) = n^2$ and $g_2(n) = n^3$.<br>$n^2$ is $O(n^3)$, so $g_1(n)$ is $O(g_2(n))$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.6.1",
        "question": "Which of the following is false?",
        "options": [
            "$100n \\log n = O(\\frac{n \\log n}{100})$",
            "$\\sqrt{\\log n} = O(\\log \\log n)$",
            "If $0 < x < y$ then $n^x = O(n^y)$",
            "$2^n \\neq O(n^k)$"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Let $n=2^{2^k}$. Then $\\log n = 2^k$, so $\\sqrt{\\log n} = 2^{k/2}$.<br>$\\log \\log n = k$.<br>$2^{k/2}$ grows exponentially with $k$, while $k$ is linear. Thus $\\sqrt{\\log n}$ is asymptotically larger than $\\log \\log n$.<br>So $\\sqrt{\\log n} = O(\\log \\log n)$ is False.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.6.2",
        "question": "Consider the following functions:<br>$f(n) = 3n^{\\sqrt{n}}$<br>$g(n) = 2^{\\sqrt{n} \\log_2 n}$<br>$h(n) = n!$<br>Which of the following is true?",
        "options": [
            "$h(n)$ is $O(f(n))$",
            "$h(n)$ is $O(g(n))$",
            "$g(n)$ is not $O(f(n))$",
            "$f(n)$ is $O(g(n))$"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Simplify $g(n)$: $2^{\\sqrt{n} \\log_2 n} = (2^{\\log_2 n})^{\\sqrt{n}} = n^{\\sqrt{n}}$.<br>So $f(n) = 3n^{\\sqrt{n}}$ and $g(n) = n^{\\sqrt{n}}$. Thus $f(n) = 3g(n)$, implying $f(n) = \\Theta(g(n))$.<br>Therefore, $f(n)$ is $O(g(n))$ is True.<br>$h(n) = n! \\approx (n/e)^n = n^n$, which is much larger than $n^{\\sqrt{n}}$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.6.3",
        "question": "Let $f(n) = n^2 \\log n$ and $g(n) = n(\\log n)^{10}$ be two positive functions of $n$. Which of the following statements is correct?",
        "options": [
            "$f(n) = O(g(n))$ and $g(n) \\neq O(f(n))$",
            "$g(n) = O(f(n))$ and $f(n) \\neq O(g(n))$",
            "$f(n) \\neq O(g(n))$ and $g(n) \\neq O(f(n))$",
            "$f(n) = O(g(n))$ and $g(n) = O(f(n))$"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Compare $f(n)$ and $g(n)$ by dividing: $\\frac{f(n)}{g(n)} = \\frac{n^2 \\log n}{n (\\log n)^{10}} = \\frac{n}{(\\log n)^9}$.<br>By L'Hopital's rule or polynomial vs polylog dominance, $n$ grows faster than $(\\log n)^9$.<br>So $f(n)$ is larger. $g(n) = O(f(n))$ but $f(n) \\neq O(g(n))$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.6.4",
        "question": "Consider the following three claims:<br>I. $(n + k)^m = \\Theta(n^m)$ where $k$ and $m$ are constants<br>II. $2^{n+1} = O(2^n)$<br>III. $2^{2n+1} = O(2^n)$<br>Which of the following claims are correct?",
        "options": [
            "I and II",
            "I and III",
            "II and III",
            "I, II, and III"
        ],
        "answer": {
            "answer": "A",
            "explanation": "I. $(n+k)^m \\approx n^m$, so True.<br>II. $2^{n+1} = 2 \\cdot 2^n = O(2^n)$. True.<br>III. $2^{2n+1} = 2 \\cdot 4^n$. $4^n$ is not $O(2^n)$. False.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.6.5",
        "question": "The tightest lower bound on the number of comparisons, in the worst case, for comparison-based sorting is of the order of",
        "options": [
            "$n$",
            "$n^2$",
            "$n \\log n$",
            "$n \\log^2 n$"
        ],
        "answer": {
            "answer": "C",
            "explanation": "Any comparison-based sorting algorithm requires $\\Omega(n \\log n)$ comparisons in the worst case.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Sorting",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.7.1",
        "question": "Suppose $T(n) = 2T(n/2) + n, T(0) = T(1) = 1$. Which one of the following is **FALSE**?",
        "options": [
            "$T(n) = O(n^2)$",
            "$T(n) = \\Theta(n \\log n)$",
            "$T(n) = \\Omega(n^2)$",
            "$T(n) = O(n \\log n)$"
        ],
        "answer": {
            "answer": "C",
            "explanation": "By Master Theorem ($a=2, b=2, d=1$), since $a = b^d$, $T(n) = \\Theta(n \\log n)$.<br>A. $n \\log n = O(n^2)$. True.<br>B. True.<br>C. $n \\log n \\ne \\Omega(n^2)$ because $n \\log n$ is smaller than $n^2$. False.<br>D. True.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Recurrence Relations",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.7.2",
        "question": "Consider the following functions:<br>$f(n) = 2^n$<br>$g(n) = n!$<br>$h(n) = n^{\\log n}$<br>Which of the following statements about the asymptotic behavior of $f(n), g(n)$ and $h(n)$ is true?",
        "options": [
            "$f(n) = O(g(n)); g(n) = O(h(n))$",
            "$f(n) = \\Omega(g(n)); g(n) = O(h(n))$",
            "$g(n) = O(f(n)); h(n) = O(f(n))$",
            "$h(n) = O(f(n)); g(n) = \\Omega(f(n))$"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Growth order: $n^{\\log n} < 2^n < n!$.<br>$h(n) < f(n) < g(n)$.<br>So $h(n) = O(f(n))$ and $g(n) = \\Omega(f(n))$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.7.3",
        "question": "Which of the given options provides the increasing order of asymptotic complexity of functions $f_1, f_2, f_3$ and $f_4$?<br>$f_1(n) = 2^n$<br>$f_2(n) = n^{3/2}$<br>$f_3(n) = n \\log_2 n$<br>$f_4(n) = n^{\\log_2 n}$",
        "options": [
            "$f_3, f_2, f_4, f_1$",
            "$f_3, f_2, f_1, f_4$",
            "$f_2, f_3, f_1, f_4$",
            "$f_2, f_3, f_4, f_1$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "$f_3(n) = n \\log n$.<br>$f_2(n) = n^{1.5}$. ($n \\log n < n^{1.5}$).<br>$f_4(n) = n^{\\log n}$. ($n^{1.5}$ is polynomial, $n^{\\log n}$ is superpolynomial).<br>$f_1(n) = 2^n$. (Exponential dominates all).<br>Order: $f_3 < f_2 < f_4 < f_1$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.7.4",
        "question": "Let $W(n)$ and $A(n)$ denote respectively, the worst case and average case running time of an algorithm executed on an input of size $n$. Which of the following is **ALWAYS TRUE**?",
        "options": [
            "$A(n) = \\Omega(W(n))$",
            "$A(n) = \\Theta(W(n))$",
            "$A(n) = O(W(n))$",
            "$A(n) = o(W(n))$"
        ],
        "answer": {
            "answer": "C",
            "explanation": "The average case running time $A(n)$ is always less than or equal to the worst case running time $W(n)$. Hence $A(n) = O(W(n))$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.7.5",
        "question": "Consider the equality $\\sum_{i=0}^n i^3 = X$ and the following choices for $X$:<br>I. $\\Theta(n^4)$<br>II. $\\Theta(n^5)$<br>III. $O(n^5)$<br>IV. $\\Omega(n^3)$<br>The equality above remains correct if $X$ is replaced by",
        "options": [
            "Only I",
            "Only II",
            "I or III or IV but not II",
            "II or III or IV but not I"
        ],
        "answer": {
            "answer": "C",
            "explanation": "$\\sum i^3 = (n(n+1)/2)^2 = \\Theta(n^4)$.<br>I. $\\Theta(n^4)$ is correct.<br>II. $\\Theta(n^5)$ is incorrect.<br>III. $O(n^5)$ means upper bounded by $n^5$. Since $n^4 \\le n^5$, this is correct.<br>IV. $\\Omega(n^3)$ means lower bounded by $n^3$. Since $n^4 \\ge n^3$, this is correct.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.8.1",
        "question": "Let $f(n) = n$ and $g(n) = n^{(1+\\sin n)}$, where $n$ is a positive integer. Which of the following statements is/are correct?<br>I. $f(n) = O(g(n))$<br>II. $f(n) = \\Omega(g(n))$",
        "options": [
            "Only I",
            "Only II",
            "Both I and II",
            "Neither I nor II"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Since $\\sin n$ oscillates between -1 and 1, the exponent of $n$ varies between 0 and 2.<br>When $\\sin n \\approx -1$, $g(n) \\approx 1$. Then $f(n) > g(n)$, so $f(n) \\ne O(g(n))$.<br>When $\\sin n \\approx 1$, $g(n) \\approx n^2$. Then $f(n) < g(n)$, so $f(n) \\ne \\Omega(g(n))$.<br>Thus neither holds.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.8.2",
        "question": "Let $f(n), g(n)$ and $h(n)$ be functions defined for positive integers such that $f(n) = O(g(n)), g(n) \\ne O(f(n)), g(n) = O(h(n))$, and $h(n) = O(g(n))$. Which one of the following statements is **FALSE**?",
        "options": [
            "$f(n) + g(n) = O(h(n) + h(n))$",
            "$f(n) = O(h(n))$",
            "$h(n) \\ne O(f(n))$",
            "$f(n)h(n) \\ne O(g(n)h(n))$"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Given condition implies $f(n)$ grows strictly slower than $g(n)$, and $g(n)$ grows at same rate as $h(n)$. $f(n) = o(g(n))$ and $g(n) = \\Theta(h(n))$.<br>A. $g(n) = O(h(n))$, so sum is OK. True.<br>B. $f(n) < g(n) \\approx h(n)$, so $f(n) = O(h(n))$. True.<br>C. $h(n)$ grows faster than $f(n)$, so $h(n) \\ne O(f(n))$. True.<br>D. Since $f(n) = O(g(n))$, multiplying both sides by $h(n)$ gives $f(n)h(n) = O(g(n)h(n))$. The statement says $\\ne O$, which is FALSE.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.8.3",
        "question": "Arrange the following functions in increasing asymptotic order:<br>a. $n^{1/3}$<br>b. $e^n$<br>c. $n^{7/4}$<br>d. $n \\log^9 n$<br>e. $1.0000001^n$",
        "options": [
            "a, d, c, e, b",
            "d, a, c, e, b",
            "a, c, d, e, b",
            "a, c, d, b, e"
        ],
        "answer": {
            "answer": "A",
            "explanation": "1. $n^{1/3}$ (smallest polynomial)<br>2. $n \\log^9 n$ (roughly $n^{1+\\epsilon}$)<br>3. $n^{7/4} = n^{1.75}$ (larger polynomial)<br>4. $1.0000001^n$ (exponential with base > 1)<br>5. $e^n$ (exponential with base $e \\approx 2.718$)<br>Order: a < d < c < e < b.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Asymptotic Analysis",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.8.4",
        "question": "Which of the following statement(s) is/are correct regarding Bellman-Ford shortest path algorithm?<br>P: Always finds a negative weighted cycle, if one exists.<br>Q: Finds whether any negative weighted cycle is reachable from the source.",
        "options": [
            "P only",
            "Q only",
            "Both P and Q",
            "Neither P nor Q"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Bellman-Ford algorithm can only detect negative weight cycles that are reachable from the source vertex. If a negative cycle is in a disconnected component, it will not be detected. Thus Q is correct, P is not.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.8.5",
        "question": "What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete graph of $n$ vertices?",
        "options": [
            "$\\Theta(n^2)$",
            "$\\Theta(n^2 \\log n)$",
            "$\\Theta(n^3)$",
            "$\\Theta(n^3 \\log n)$"
        ],
        "answer": {
            "answer": "C",
            "explanation": "Time complexity of Bellman-Ford is $O(|V||E|)$.<br>For a complete graph, $|V| = n$ and $|E| = n(n-1)/2 = \\Theta(n^2)$.<br>Total time = $n \\times n^2 = \\Theta(n^3)$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.9.1",
        "question": "What is the worst-case number of arithmetic operations performed by recursive binary search on a sorted array of size $n$?",
        "options": [
            "$\\Theta(\\sqrt{n})$",
            "$\\Theta(\\log_2(n))$",
            "$\\Theta(n^2)$",
            "$\\Theta(n)$"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Recurrence for binary search is $T(n) = T(n/2) + c$.<br>The depth of recursion is $\\log_2 n$.<br>In each step, a constant number of arithmetic operations (mid calculation, comparison) are performed.<br>Total operations = $\\Theta(\\log n)$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Searching",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.9.2",
        "question": "For which of the following inputs does binary search take time $O(\\log n)$ in the worst case?",
        "options": [
            "An array of $n$ integers in any order",
            "A linked list of $n$ integers in any order",
            "An array of $n$ integers in increasing order",
            "A linked list of $n$ integers in increasing order"
        ],
        "answer": {
            "answer": "C",
            "explanation": "Binary search requires $O(1)$ random access to the middle element, which arrays provide but linked lists do not (determining mid takes $O(n)$ in LL).<br>Correctness of binary search relies on the input being sorted.<br>Thus, it works in $O(\\log n)$ only on a sorted array.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Searching",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.9.3",
        "question": "Let $F(n)$ denote the maximum number of comparisons made while searching for an entry in a sorted array of size $n$ using binary search. Which ONE of the following options is TRUE?",
        "options": [
            "$F(n) = F(\\lfloor n/2 \\rfloor) + 1$",
            "$F(n) = F(\\lfloor n/2 \\rfloor) + F(\\lceil n/2 \\rceil)$",
            "$F(n) = F(\\lfloor n/2 \\rfloor)$",
            "$F(n) = F(n-1) + 1$"
        ],
        "answer": {
            "answer": "A",
            "explanation": "In binary search, we compare with the middle element (1 comparison) and then recurse on one half of size $\\lfloor n/2 \\rfloor$.<br>Thus $F(n) = F(\\lfloor n/2 \\rfloor) + 1$.<br>Option D describes linear search.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Searching",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.9.4",
        "question": "An array $A$ of length $n$ with distinct elements is said to be bitonic if there is an index $1 \\le i \\le n$ such that $A[1..i]$ is sorted in non-decreasing order and $A[i+1..n]$ is sorted in non-increasing order. Which ONE of the following represents the best possible asymptotic bound for the worst-case number of comparisons by an algorithm that searches for an element in a bitonic array $A$?",
        "options": [
            "$\\Theta(n)$",
            "$\\Theta(1)$",
            "$\\Theta(\\log^2 n)$",
            "$\\Theta(\\log n)$"
        ],
        "answer": {
            "answer": "D",
            "explanation": "We can find the peak element (maximum) in $O(\\log n)$ using a binary search variant.<br>Once the peak is found at index $i$, we split the array into two parts: $A[1..i]$ (increasing) and $A[i+1..n]$ (decreasing).<br>We can perform binary search on both parts in $O(\\log n)$.<br>Total time is $O(\\log n)$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Searching",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.9.5",
        "question": "Consider a state space where the start state is number 1. The successor function for the state numbered $n$ returns two states numbered $n+1$ and $n+2$. Assume that the states in the unexpanded state list are expanded in the ascending order of numbers and the previously expanded states are not added to the unexpanded state list. Which of the following statements is TRUE regarding the search for goal state 6?",
        "options": [
            "BFS expands fewer states than DFS",
            "DFS expands fewer states than BFS",
            "Both BFS and DFS expand the same number of states",
            "DFS cannot reach the goal state"
        ],
        "answer": {
            "answer": "C",
            "explanation": "The rule 'states in the unexpanded state list are expanded in the ascending order of numbers' overrides the standard LIFO (DFS) or FIFO (BFS) order. Both algorithms act as a 'Best-First Search' prioritizing the smallest state number.<br>Expansion path for both: 1 -> 2 -> 3 -> 4 -> 5 -> 6.<br>Both expand the same number of states (6).",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.10.1",
        "question": "Let $G$ be the directed, weighted graph shown in the figure. We are interested in the shortest paths from $A$.<br>a. Output the sequence of vertices identified by the Dijkstra's algorithm for single source shortest path when the algorithm is started at node $A$.<br>b. Write down sequence of vertices in the shortest path from $A$ to $E$.<br>c. What is the cost of the shortest path from $A$ to $E$?",
        "options": [],
        "answer": {
            "answer": "84",
            "explanation": "a) The sequence of vertices finalized by Dijkstra's algorithm is A, B, D, C, F, E.<br>b) The shortest path from A to E is A -> B -> D -> C -> F -> E.<br>c) The cost of the shortest path is 84.",
            "isDescriptive": true
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "NAT"
    },
    {
        "id": "algorithms.10.2",
        "question": "Suppose we run Dijkstra's single source shortest path algorithm on the following edge-weighted directed graph with vertex $P$ as the source. In what order do the nodes get included into the set of vertices for which the shortest path distances are finalized?",
        "options": [
            "$P, Q, R, S, T, U$",
            "$P, Q, R, U, S, T$",
            "$P, Q, R, U, T, S$",
            "$P, Q, T, R, U, S$"
        ],
        "answer": {
            "answer": "B",
            "explanation": "Dijkstra's Algorithm Trace:<br>1. Select P (0). Update Q(1), S(6), T(7).<br>2. Select Q (1). Update R(2), S(min(6, 1+4)=5).<br>3. Select R (2). Update S(min(5, 2+2)=4), U(2+1=3).<br>4. Select U (3). No updates.<br>5. Select S (4). Update T(min(7, 4+3)=7).<br>6. Select T (7).<br>Order: P, Q, R, U, S, T.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.10.3",
        "question": "Let $G(V, E)$ be an undirected graph with positive edge weights. Dijkstra's single source shortest path algorithm can be implemented using the binary heap data structure with time complexity:",
        "options": [
            "$O(|V|^2)$",
            "$O(|E| + |V| \\log |V|)$",
            "$O(|V| \\log |V|)$",
            "$O((|E| + |V|) \\log |V|)$"
        ],
        "answer": {
            "answer": "D",
            "explanation": "Using a binary heap, Extract-Min takes $O(\\log V)$ and Decrease-Key takes $O(\\log V)$.<br>We perform $|V|$ Extract-Min operations and at most $|E|$ Decrease-Key operations.<br>Total time complexity is $O(|V| \\log |V| + |E| \\log |V|) = O((|E| + |V|) \\log |V|)$.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "MCQ"
    },
    {
        "id": "algorithms.10.4",
        "question": "To implement Dijkstra's shortest path algorithm on unweighted graphs so that it runs in linear time, the data structure to be used is:",
        "options": [
            "Queue",
            "Stack",
            "Heap",
            "B-Tree"
        ],
        "answer": {
            "answer": "A",
            "explanation": "For an unweighted graph, Dijkstra's algorithm reduces to Breadth-First Search (BFS).<br>BFS uses a Queue data structure and runs in $O(V+E)$ time, which is linear in the size of the graph.",
            "isDescriptive": false
        },
        "category": "Algorithms",
        "topic": "Graph Algorithms",
        "isPYQ": true,
        "type": "MCQ"
    }
]);
