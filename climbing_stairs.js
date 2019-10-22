// Dynamic Programming Approach
var climbStairs = function(n) {
    if ( n === 1 ) {
        return 1
    }

    let newArray = []
    newArray[1]=1
    newArray[2]=2

    for (let i=3; i<= n; i++) {
        newArray[i] = newArray[i-1] + newArray[i-2]
    }
    return newArray[n]
};

// Complexity Analysis
//
// Time complexity : O(n). Single loop upto n
//     Space complexity : O(n)

// Fibonacci Number Approach

var climbStairs = function(n) {
    if ( n === 1 ) {
        return 1
    }

    let first = 1
    let sec = 2

    for (let i=3; i<= n; i++) {
        let third = first + sec
        first = sec
        second = third
    }
    return sec
};

// Complexity Analysis
//
// Time complexity : O(n)
// Space complexity : O(1). Constant space is used.