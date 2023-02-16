function bubbleSort(array) {
  let aux;
  let changeMade = true; // Start the changes tracker

  // While changes have been made in the array...
  while (changeMade) {
    changeMade = false; // Restart the changes tracker

    // Loop through the entire array
    for (let i = 0; i < array.length; i++) {
      // If the current element is greater than the next, change their positions
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;

        // Indicates changes in the array to do one more while loop
        // until the array is sorted
        changeMade = true;
      }
    }
  }

  // Return the sorted array
  return array;
}

// Tests:
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(bubbleSort([7, 5, 1, 8, 3]));
// [ 1, 3, 5, 7, 8 ]

console.log(bubbleSort([9, 1, 7, 0, -1, -100, 1432]));
// [ -100, -1, 0, 1,  7, 9, 1432 ]

console.log(bubbleSort([]));
// []

console.log(bubbleSort([90]));
// [ 90 ]

console.log(bubbleSort([90, 90, 90, 1]));
// [ 1, 90, 90, 90 ]
