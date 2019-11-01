// Given a string, find the length of the longest substring without repeating characters.
//
//     Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let substrings = {}, count = 0;

    if (s === " " || s.length === 1) {
        return 1
    }
    for (let i = 0; i < s.length; i++) {
        if (substrings[s[i]]) {
            count = Math.max(Object.keys(substrings).length, count)

            i = substrings[s[i]]
            substrings = {}



        } else {
            substrings[s[i]] = i
            count = Math.max(Object.keys(substrings).length, count)
        }
    }

    return count
};

console.log(lengthOfLongestSubstring("au"))
