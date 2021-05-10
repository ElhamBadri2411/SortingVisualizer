const bubbleSortAlgorithm = (inputArray) => {
  let len = inputArray.length;
  //let swaps = [];
  //let comparisons = [];
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

const insertionSortAlgorithm = () => {};

const selectionSortAlgorithm = () => {};

export { bubbleSortAlgorithm, insertionSortAlgorithm, selectionSortAlgorithm };
