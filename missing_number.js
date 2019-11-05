//Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

//Example 1:

//Input: [3,0,1]
//Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
//Sorting
var missingNumber = function(nums) {
    nums.sort(function(a, b){return a - b});
    
    let i=0
  for(i=0; i<nums.length; i++) {
    if(nums[i] !== i) {
      return i
    }
  }
    return i
};
//HashSet 
var missingNumber2 = function(nums) {
  let set_array = new Set(nums)
  let count = nums.length
  for(i=0; i<count; i++) {
    let num = nums[i]
    if(!set_array.has(i)) {
      return i
    }
  }

  return i
};
// Gauss' Formula 
var missingNumber3 = function(nums) {
 let expected = nums.length * (nums.length+1)/2
 let actual_sum = nums.reduce((a, b) => a + b)
 console.log(expected, actual_sum)
 return expected-actual_sum
};

console.log('result', missingNumber3([0,1,2,4,5]))