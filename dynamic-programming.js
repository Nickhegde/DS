//A method to solve a problem by breaking down into collection of simple subproblems, solving each of those subproblems just once, and 
//storing their solutions

//fibonanni sequence

const Fib = (n) => {
    if(n < 2) return 1;
    return Fib(n-1) + Fib(n-2);
}

//time complexity
// O(2^N) - very bad


//solutions - using past knowledge to solve future problems 

//memoization - storing results of expensive function calls and return cached result when same input occur again

const Fib = (n, memo=[]) => {
    if(!memo[n] !== undefined) return memo[n];
    if(n <=2) return 1;
    var res = Fib(n-1, memo) + Fib(n-2, memo);
    memo[n] = res;
    return res;
}

//time complexity - O(N) much better

//Tabulation - bottom up approach, store result of a previous problmes in table, better space complexity

const Fib = (n) => {
    if(n <=2) return 1;
    var fibNums = [0,1,1];
    for(var i =3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[i];
}

//time and space complexity - O(N)