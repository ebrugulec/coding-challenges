// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//
//     Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
//     Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
    let targets = []

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === target) {
            targets.push(i)
        }
    }

    let first = targets[0] !== undefined ? targets[0] : -1
    let last = targets.slice(-1)[0] !== undefined ? targets.slice(-1)[0] : -1

    return [first, last]
};

var searchRange2 = function(nums, target) {
    let first = -1, last = -1

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i
                last = i
            } else {
                last = i
            }
        }
    }
    return [first, last]
};

var searchRange3 = function(nums, target) {
    let first = -1, last = -1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            first = i
            break
        }
    }

    for (let j = nums.length-1; j >= 0; j--) {
        if (nums[j] === target) {
            last = j
            break
        }
    }
    return [first, last]
};
