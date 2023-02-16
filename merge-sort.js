function mergeSort(array) {
  if (array.length < 2) {
    // When the array is smaller than 2, it is already sorted, so just return it
    return array;
  } else {
    // Split the array in two halves
    let arrayA = array.slice(0, array.length / 2);
    let arrayB = array.slice((array.length / 2) * 1);

    // Update the variables with the ordered halves (recursively)
    arrayA = mergeSort(arrayA);
    arrayB = mergeSort(arrayB);

    // Clear "array" to reuse it. The ordered array will be stored in it.
    array = [];

    // While there are halves with elements, take the smaller of the first
    // element, remove it, and push it into "array".
    while (arrayA.length > 0 && arrayB.length > 0) {
      if (arrayA[0] < arrayB[0]) {
        array.push(arrayA.shift());
      } else {
        array.push(arrayB.shift());
      }
    }

    // When one of the halves is empty, store the values of the other in "array"
    if (arrayA.length > 0) {
      arrayA.forEach((element) => array.push(element));
    } else if (arrayB.length > 0) {
      arrayB.forEach((element) => array.push(element));
    }

    // Return the sorted array!
    return array;
  }
}

// Tests:
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(mergeSort([7, 5, 1, 8, 3]));
// [ 1, 3, 5, 7, 8 ]

console.log(mergeSort([9, 1, 7, 0, -1, -100, 1432]));
// [ -100, -1, 0, 1,  7, 9, 1432 ]

console.log(mergeSort([]));
// []

console.log(mergeSort([90]));
// [ 90 ]

console.log(mergeSort([90, 90, 90, 1]));
// [ 1, 90, 90, 90 ]
