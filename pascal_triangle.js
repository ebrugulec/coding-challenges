// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

generate = (numRows) => {
     let triangle = [];
     for (let i = 0; i < numRows; i++) {
       if (i === 0) {
         triangle.push([1]);
       } else if (i === 1) {
         triangle.push([1, 1]);
       }else {
         let oldArray = triangle[i-1]
         let newArray = new Array(i+1).fill(1);
         for (let j = 1; j < i; j++) {
           newArray[j] = oldArray[j-1] + oldArray[j]
         }
         triangle.push(newArray)
       }
     }
     return triangle;
};
   
console.log(generate(6))