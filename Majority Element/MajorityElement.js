/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let newMap = new Map()
  nums.map((num) => {
      if(newMap.get(num) === undefined) {
        newMap.set(num, 1)
      } else {
        newMap.set(num, newMap.get(num) + 1)
      }
    }
  )
  let maJorityElement = [...newMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)

  return maJorityElement[0]
};

majorityElement([2,2,1,1,1,2,2])