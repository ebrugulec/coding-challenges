// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
        nums[lastNonZeroFoundAt] = nums[i];
        lastNonZeroFoundAt++
      }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
      nums[i] = 0;
    }
    return nums
  };
  
  console.log('result', moveZeroes([2,3,0,0,4,0,5]))
  
  // Complexity Analysis
  
  // Space Complexity : O(1)O(1). Only constant space is used.
  
  // Time Complexity: O(n)O(n). However, the total number of operations are still sub-optimal. The total operations (array writes) that code does is nn (Total number of elements).