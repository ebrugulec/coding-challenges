// Given an array of strings, group anagrams together.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// -All inputs will be in lowercase.
// -The order of your output does not matter.

const group_array = (item_array) => {
  let listed_item = []
  let maped_item = new Map();
  let index = 0
  item_array.forEach((item,i) => {
    let sorted_item = alphabet_order(item)
    if (maped_item[`${sorted_item}`] === undefined) {
      maped_item[`${sorted_item}`] = index
      index++
      let new_item_array = new Array(item)
      listed_item.push(new_item_array)
    } else {
      let item_index = maped_item[`${sorted_item}`]
      listed_item[item_index].push(item)
    }
  })
  return listed_item
}

function alphabet_order(str) {
  return str.split('').sort().join('');
}

console.log('output: ', group_array(["eat", "tea", "tan", "ate", "nat", "bat", 'hey', 'ley', 'yeh']))
