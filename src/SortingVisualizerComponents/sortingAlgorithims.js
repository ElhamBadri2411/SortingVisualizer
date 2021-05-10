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

const mergeArrays = (a, b) => {
  let c = [];

  while (a.length && b.length) {
    if (a[0] < b[0]) {
      c.push(a.shift());
    } else {
      c.push(b.shift());
    }
  }

  return [...c, ...a, ...b];
};

const mergeSortAlgorithm = (inputArray) => {
  if (inputArray.length < 2) return inputArray;

  const middle = Math.floor(inputArray.length / 2);
  const inputArrayLeft = inputArray.slice(0, middle);
  const inputArrayRight = inputArray.slice(middle, inputArray.length);
  const sortedArrayLeft = mergeSortAlgorithm(inputArrayLeft);
  const sortedArrayRight = mergeSortAlgorithm(inputArrayRight);

  return mergeArrays(sortedArrayLeft, sortedArrayRight);
};

export { bubbleSortAlgorithm, mergeSortAlgorithm };
