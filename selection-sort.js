function selectionSort(array) {
  let lowestValueIndex;
  let aux;

  // Loop through the entire array
  for (let i = 0; i < array.length; i++) {
    lowestValueIndex = i; // Restart with the current element

    // This will loop only after the sorted portion
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[lowestValueIndex]) {
        // If the current element is lower, its index is stored
        lowestValueIndex = j;
      }
    }

    // The lowest value of the unsorted portion
    // changes index with the current index
    aux = array[i];
    array[i] = array[lowestValueIndex];
    array[lowestValueIndex] = aux;
  }

  // Return the sorted array
  return array;
}

// Tests:
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(selectionSort([7, 5, 1, 8, 3]));
// [ 1, 3, 5, 7, 8 ]

console.log(selectionSort([9, 1, 7, 0, -1, -100, 1432]));
// [ -100, -1, 0, 1,  7, 9, 1432 ]

console.log(selectionSort([]));
// []

console.log(selectionSort([90]));
// [ 90 ]

console.log(selectionSort([90, 90, 90, 1]));
// [ 1, 90, 90, 90 ]
