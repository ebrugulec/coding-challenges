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