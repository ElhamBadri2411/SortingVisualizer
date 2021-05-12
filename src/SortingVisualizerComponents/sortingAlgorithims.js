const bubbleSortAlgorithm = (inputArray) => {
  let len = inputArray.length;
  let animations = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (inputArray[j] > inputArray[j + 1]) {
        animations.push([j, j + 1]);
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      } else {
        animations.push(false);
      }
    }
  }
  return animations;
};

const insertionSortAlgorithm = (inputArray) => {
  let len = inputArray.length;
  let animations = [];

  for (let i = 1; i < len; i++) {
    // iterate through the inputArray len - 1 times
    let j = i - 1; // make j one less than i, ie make one less than the current element we are trying to sort in the inputArray
    let key = inputArray[i]; // make temp the                            current element we are trying to sort in the inputArray

    while (key < inputArray[j] && j >= 0) {
      // go from a[j-1] to a[0] until we find the correct position for temp
      animations.push([j + 1, j, i, true]);
      animations.push([j + 1, j, i, true]);
      let temp = inputArray[j];
      inputArray[j] = inputArray[j + 1];
      inputArray[j + 1] = temp; // move every element that is greater than temp forward by one

      animations.push([j + 1, j, i, false]);
      j--; // reduce j by one
    }
  }
  return animations;
};

const selectionSortAlgorithm = (inputArray) => {
  let len = inputArray.length;
  let animations = [];
  for (let i = 0; i < len; i++) {
    // i to size is unsorted portion

    // find min of unsorted inputArray
    animations.push([i, false, 2]);
    let min = i;
    for (let j = i + 1; j < len; j++) {
      animations.push([j, false, 2]);
      if (inputArray[min] > inputArray[j]) {
        animations.push([0, "reset", 1]);
        animations.push([j, false, 2]);
        min = j;
      } else {
        animations.push([j, false, 1]);
      }
    }

    // insert min at the start of the unsorted portion
    let temp = inputArray[min];
    inputArray[min] = inputArray[i];
    inputArray[i] = temp;
    animations.push([[min, i], true, 1]);
  }

  return animations;
};

export { bubbleSortAlgorithm, insertionSortAlgorithm, selectionSortAlgorithm };
