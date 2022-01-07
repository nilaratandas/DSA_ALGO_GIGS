# DSA ALGO GIGS
DSA Algorithm for Node and Python
Introducing Asymptotic Measures:

	Asymptotic analysis is widely used in Computer Science to describe the limiting behaviour of algorithm resource use.

	Asymptotics
	In asymptotic analysis, we care about what a function does when n is very large.

	We take the concrete function (e.g. y = x) and extract a "higher meaning" from it. Something that we can use to relate it into a family of other functions.

	But, this is only one of the tools in your toolkit to analyze algorithms.
-------------------------------------------------------------------------------------------
What is Asymptotic Bounding? 
	The Asymptotic  analysisc we often use to bound the algorithm's resource use gets asymtotically. 
	We measure the how good and bad algorithm's resources are. 

	Best Case
	Average Case
	Worst Case

Different Bounds: 
	Upper Bounds - (often we see O( ) "big O", o( ) "little o", etc.)
	Exact Bounds - (Θ( ) "theta" which combines the lower and upper bound, notice)
	Lower Bounds - (Ω( ) "big omega", ω( ) "little omega")

    Often: 
    	We will only use the "bigs" (O() "big O" annd Ω() "big omega")
    	We use Θ "theta" when we want to be really specific about what is happening

    It just makes more sense to:
		Use an upper bound (O( ) "big O") for a worst-case => "How bad can performance get?"
		Use a lower bound (Ω( ) "big omega") for a best-case => "How good can performance get?"

	But it wouldn't be wrong to:
		lower bound a worst-case input
		upper bound a best-case input

Reference : 
https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/e/quiz--asymptotic-notation
https://www.bigocheatsheet.com/
https://www.careerdrill.com/category/fundamentals/algorithm/

https://www.mooc.org/
https://www.youtube.com/watch?list=PLGLfVvz_LVvReUrWr94U-ZMgjYTQ538nT&time_continue=28&v=V6mKVRU1evU&feature=emb_logo


What is the difference between Big O and Big theta and omega : https://www.geeksforgeeks.org/difference-between-big-oh-big-omega-and-big-theta/

-------------------------------------------------------------------------------------------
Constant Time : O(1)
	Arithmetic Operations 
	Array Access 
	Variable Assigntment 
	Object Access 
	Bolean Compariason 
	Array Insertion 

	Resize Array : 
		Create a new array, copy the content of exis array and insert O(n) 

-------------------------------------------------------------------------------------------
Linear Time : O(n)
 	
 	Array, 
 	linked list, 
 	multi dependent passes, 
 	stay within the arrays within the array using swaps 

	T = O(n)
	Multilinear = O(m + n)

	O(n) "Linear Time"
	The O(n) upper bound (often called "linear time") is the most common interview time complexity. As such, look for it to appear often. 

	When dealing with problems using linear data structures (i.e. Linked Lists, Arrays) the optimal solution often takes the time-bound of:
	O(n)
	O(max(m, n))
	O(min(m, n))
	O(m + n) (called "multilinear time" since the time and space are linear with respect to 2 inputs) which is asymptoticall equivalent to O(max(m, n))

	"Linear time" often describes linear or fractional, non-dependent, passes over a data structure (which can be non-linear too, in the case of a Tree, a Binary Heap).

	We say "often" because we are only stating what is common rather than extrapolating "hard" rules to live by.

	You will hear us say these things often. What do these mean?:
	"Linear" means the function of resource consumption (with respect to time or space) will look like a line asymptotically
	"Non-dependent" means there are no passes that have passes inside them. We see this often as nested double for( ) loops that each do O(n) work leading to an overall O(n^2) time-bound.

	Often you will be saying these things in an interview:
	"Our time complexity is O(n) because we have an n length string and we are only doing linear, non-dependent passes over it. We do O(1) work at each character".
	"We have a tree with n nodes and we touch each node once. At each node we just do a print statement which takes O(1) time (its speed will not asymptotically increase with tree size at all). Our overall time complexity is O(n)".

-------------------------------------------------------------------------------------------

Memoization

	Memoization is simply a caching strategy to avoid repeat computation on already solved function calls.

	We often use memoization to "memoize" our recursive functions to prune recursive subtrees that have already happened and whose valid answer we can still use in the future.

	n'th Fibonacci Number.

	This runs to the tune of O(2^n):

	int fibonacci(int n) {
	  if (n == 0) {
	    return 0;
	  } else if (n == 1) {
	    return 1;
	  }

	  return fibonacci(n - 1) + fibonacci(n - 2);
	 }

	This runs in linear time O(n):

	fibonacci(int n, int[] cache){
	  if (n == 0) {
	   return 0;
	  } else if (n == 1) {
	   return 1;
	  }

	  // Return cache value if it already exists
	  if (cache[n] != 0) {
	    return cache[n];
	  }

	  // Cache answer so later calls can use it
	  cache[n] = fibonacci(n - 1) + fibonacci(n - 2);

	  return cache[n];
	 }
-------------------------------------------------------------------------------------------

O(log(n)) “Logarithmic Time”
	Logarithms are functions that confuse many people, often due to the special log symbol introduced.

	Logarithms are simply the inverse of taking powers (which most are more familiar with). So 2^3 (which is 8) is undone by log_2(8) (which is 3).

	Here we see:
	Exponentiation: 2^3 = 2 * 2 * 2 = 2 multiplied 3 times
	The Logarithm: log_2(8) = "How many times did I multiply 2 (my "logarithm base") to get 8?"

	Often in Computer Science, we will only see base 2 (denoted log_2( ) here) because we often ask ourselves: "How often did this algorithm halve its input?".

	If I had an input (say 8) and I wanted to know how many times I could cut it in half, the logarithm is exactly how I'd describe those total divisions (division is inverse of multiplication).

	The base I'd use is 2 since we divide by 2 (just as with exponentiation our base was 2 that we multiplied over and over by).

	But we can use different logarithm bases. We can use base 3 if we wanted to describe "thirding" behaviour. And so on.

	We cover the O(log(n)) time complexity further here with its common manifestations.

	Example : 
		log(8) = log base 2 of 8 = 2^? = 8
		50log2(n)+40
		21log8(n)+2

	Binary Search 
	Adapting search 
	Heaps (O(log(n)))

-------------------------------------------------------------------------------------------

O(n * log(n))

	O(n * log(n)) is the time complexity with no common name and is often the "scariest" looking time complexity.

	If you know what it intuitively means and its common manifestations you will fear no more.

	We often see it when:
	We have an n size structure (linear or non-linear) and we do log(n) work at each element (maybe we insert each of the n elements into a binary heap which has O(log(n)) insert in the worst case.
	We have a divide and conquer algorithm that satisfies the recurrence T(n) = 2T(n/2) + O(n) (think Merge Sort)

	Example: 
		Sort linkist :

	 	function sort(head){
	 		if(head === null || head.next == null){
	 			return head;
	 		}

	 		mid = getMiddleAndSplit(head);
	 		leftHalf = sortList(head);
	 		rightHalf = sortList(mid);

	 		return merge(leftHalf, rightHalf);
	 	}
Conslusion: 
	where does O(n*log(n)) happen?
	- mergesort
	- quicksort
	- heapsort 

-------------------------------------------------------------------------------------------

O(n!) "Factorial Time"


	O(n!) is the time-bound that we often see with problems dealing with generating all permutations of a data set explicitly (taking no shortcut heuristic).

	The ! as seen in n! is the "factorial" symbol which indicates a "descending" multiplication.

	4! = 4 * 3 * 2 * 1 = 24

	Notice how each number (which we will often think of as a "level" of work in a recursive tree) decreases by 1.

	This pattern is very useful if our algorithm behaves this way.

	We cover the O(n!) time complexity and investigate why it is related to problems dealing with permutations.


-------------------------------------------------------------------------------------------

Graph : O(|V| + |E|) or O(V+E)
V - Virticies
E - Edage 
Graph = Adjancency Martrix and Adjancency List 

	O(|V|+|E|) is most commonly seen when dealing with graph algorithms.

	Here is a breakdown:
	The vertical bars are "cardinality" and just mean "size of a set" (so |{2, 3, 4}| = 3 (the has 3 elements)
	V is the number of "vertices" (or "nodes") in the graph
	E is the number of "edges" in the graph

	So why O(|V| + |E|)? If we look at the code of any breadth-first search on a graph we will notice:
	We will touch each node, this automatically leaves us at a lower bound of Ω(|V|) for overall iterations (if we do O(1) work at each node)
	When we visit a vertex we inspect all of its edges

	That second part is more interesting, so the next question is how many iterations are spent inspecting edges? It depends on the type of graph & its representation.

	We will assume our graph is represented as an adjacency list:
	In a directed graph (or "digraph") each node will only inspect its edges (and no edge will be inspected twice since each node only knows of its own edges) so overall |E| iterations will be performed
	In an undirected graph, each edge is noted twice. Once by each node at each end of the edge. So overall |2E| iterations will be performed.

	In both cases, we are doing linear work with respect to the total edges so we do O(|E|) work.

	This leads to O(|V|+|E|) overall.

	We will cover many more graph ideas in our graph section.

-------------------------------------------------------------------------------------------

Covered : 
	O(1), O(n), O(log(n)), O(n*log(n))








