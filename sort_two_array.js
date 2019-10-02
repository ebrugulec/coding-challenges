//[0,3,4,31], [2, 4,6,30] => result [ 0, 2, 3, 4, 4, 6, 30, 31 ]
mergeSortedArrays = (array1, array2) => {
    var newSortedArray = [];
    var k = 0;
    var j = 0;
    let array1Item = array1[0];
    let array2Item = array2[0];
  
    if (array1.length === 0) {
      return array2;
    }
    if (array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item) {
      if (!array2Item || array1Item < array2Item) {
        newSortedArray.push(array1Item);
        k++;
        array1Item = array1[k];
      } else {
        newSortedArray.push(array2Item);
        j++;
        array2Item = array2[j];
      }
    }
    return newSortedArray;
  };
  
  console.log('result', mergeSortedArrays([0,3,4,31], [2, 4,6,30]));