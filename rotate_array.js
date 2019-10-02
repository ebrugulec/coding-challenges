// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

rotate = (nums, k) =>{
  console.log('ggg',k = k % nums.length)
    let newArray = [];
    let arrayLength = nums.length;
    for (let i = arrayLength-k; i<=arrayLength-1; i++) {
      console.log(nums[i])
      newArray.push(nums[i])
    };

    for (let j = 0; j<arrayLength-k; j++) {
      newArray.push(nums[j])
    }
    return newArray
};

// Complexity Analysis

// Time complexity : O(n)O(n). One pass is used to put the numbers in the new array. And another pass to copy the new array to the original one.

// Space complexity : O(n)O(n). Another array of the same size is used.

rotate2 = (nums, k) => {
  k = k % nums.length;
  var count = 0;
  for (var start = 0; count < nums.length; start++) {
    var current = start;
    var prev = nums[start];
    do {
        var next = (current + k) % nums.length;
        var temp = nums[next];
        nums[next] = prev;
        prev = temp;
        current = next;
        count++;
        console.log(nums)
    } while (start != current);
  }
}

// Complexity Analysis

// Time complexity : O(n)O(n). Only one pass is used.

// Space complexity : O(1)O(1). Constant extra space is used.