//
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//     Note:
//
// The solution set must not contain duplicate triplets.
//
//     Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
//     A solution set is:
//     [
//         [-1, 0, 1],
//         [-1, -1, 2]
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    const result = [];

    for (let indexA = 0; indexA < arr.length - 2; indexA++) {

        let indexB = indexA + 1;
        let indexC = arr.length - 1;

        if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

        while (indexB < indexC ) {

            let sum = arr[indexA] + arr[indexB] + arr[indexC];

            if (sum < 0) {
                indexB++;
            } else if (sum > 0) {
                indexC--;
            } else {
                result.push([arr[indexA], arr[indexB], arr[indexC]]);
                while (arr[indexB] === arr[indexB + 1]) indexB++;
                while (arr[indexC] === arr[indexC - 1]) indexC--
                indexB++;
                indexC--;
            }
        }
    }
    return result;
}

console.log('result', threeSum([-1,0,1,2,-1,-4]))

// O(n^2) Time Complexity