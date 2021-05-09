import React from "react";
import "./SortingVisualizer.css";
import { useState } from "react";
import Header from "./Header.jsx";
import {
  bubbleSortAlgorithm,
  mergeSortAlgorithm,
} from "./sortingAlgorithims.js";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const resetArray = () => {
    let tempArray = [];
    for (let i = 0; i < 250; i++) {
      tempArray.push(getRandomInt(5, 1000));
    }

    setArray([...tempArray]);
  };

  const bubbleSort = () => {
    const animations = bubbleSortAlgorithm(array);

    //const sortedArray = animations[2];
    //const comparisons = animations[0];
    const swaps = animations[1];

    for (let i = 0; i < swaps.length; i++) {
      const comparison = swaps[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      const [firstBar, secondBar] = comparison;
      const animationSpeed = 10;
      if (false) {
        setTimeout(() => {
          // this part is to check if we need to compare or to switch the comparison part
          arrayBars[firstBar].style.backgroundColor = "blue";
          arrayBars[secondBar].style.backgroundColor = "blue";
        }, i * 5);
      } else {
        // this part happens if we need to switch 2 bars
        setTimeout(() => {
          // this part is to check if we need to compare or to switch the comparison part
          const firstBarHeight = arrayBars[firstBar].style.height;
          const secondBarHeight = arrayBars[secondBar].style.height;
          arrayBars[firstBar].style.height = secondBarHeight;
          arrayBars[secondBar].style.height = firstBarHeight;
        }, i * animationSpeed);
      }
    }
  };

  const mergeSort = () => {
    let sortedArray = mergeSortAlgorithm(array);
    setArray([...sortedArray]);
  };

  return (
    <div>
      <Header
        resetArray={resetArray}
        array={array}
        bubbleSort={bubbleSort}
        mergeSort={mergeSort}
      />
      <div className="array-container">
        {array.map((value, i) => (
          <div
            className="array-bar"
            key={i}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
