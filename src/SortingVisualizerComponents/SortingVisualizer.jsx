import React from "react";
import "./SortingVisualizer.css";
import { useState } from "react";
import Header from "./Header.jsx";
import Bars from "./Bars.jsx";
import {
  bubbleSortAlgorithm,
  insertionSortAlgorithm,
  selectionSortAlgorithm,
} from "./sortingAlgorithims.js";

const NUMBER_OF_BARS = 20; // MAX 150 MIN 15
const ANIMATION_SPEED = 22000 / (NUMBER_OF_BARS ** 2 + 1) + 1;

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [disabled, setDisabled] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const resetArray = () => {
    let tempArray = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      tempArray.push(getRandomInt(5, 1000));
    }

    setArray([...tempArray]);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let bar of arrayBars) {
      bar.style.backgroundColor = "blue";
    }
  };

  const bubbleSort = () => {
    const animations = bubbleSortAlgorithm(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    setDisabled(true);

    for (var i = 0; i < animations.length; i++) {
      console.log(disabled);
      const animation = animations[i];

      let color = "red";
      if (i % 3 !== 2) {
        const [firstBar, secondBar] = animation;

        if (i % 3 === 1) {
          color = "blue";
        } else {
          color = "red";
        }
        setTimeout(() => {
          // this part is to check if we need to compare or to switch the comparison part
          arrayBars[firstBar].style.backgroundColor = color;
          arrayBars[secondBar].style.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        // this part happens if we need to switch 2 bars
        if (animation !== false) {
          const [firstBar, secondBar] = animation;
          setTimeout(() => {
            // this part is to check if we need to compare or to switch the comparison part
            const firstBarHeight = arrayBars[firstBar].style.height;
            const secondBarHeight = arrayBars[secondBar].style.height;
            arrayBars[firstBar].style.height = secondBarHeight;
            arrayBars[secondBar].style.height = firstBarHeight;
          }, i * ANIMATION_SPEED);
        }
      }
    }

    setTimeout(() => {
      for (let bar of arrayBars) {
        bar.style.backgroundColor = "purple";
      }
      setDisabled(false);
    }, i * ANIMATION_SPEED);
  };

  const insertionSort = () => {
    setDisabled(true);
    const animations = insertionSortAlgorithm(array);

    for (var i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      let color = "red";
      if (i % 3 !== 2) {
        const [firstBar, secondBar] = animation;

        if (i % 3 === 1) {
          color = "blue";
        } else {
          color = "red";
        }
        setTimeout(() => {
          if (animation[3] === true) {
            arrayBars[animation[2]].style.backgroundColor = "green";
          } else {
            arrayBars[animation[2]].style.backgroundColor = "blue";
          }
          // this part is to check if we need to compare or to switch the comparison part
          arrayBars[firstBar].style.backgroundColor = color;
          arrayBars[secondBar].style.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        // this part happens if we need to switch 2 bars
        const [firstBar, secondBar] = animation;
        setTimeout(() => {
          // this part is to check if we need to compare or to switch the comparison part
          const firstBarHeight = arrayBars[firstBar].style.height;
          const secondBarHeight = arrayBars[secondBar].style.height;
          arrayBars[firstBar].style.height = secondBarHeight;
          arrayBars[secondBar].style.height = firstBarHeight;
        }, i * ANIMATION_SPEED);
      }
    }
    const arrayBars = document.getElementsByClassName("array-bar");
    setTimeout(() => {
      for (let bar of arrayBars) {
        bar.style.backgroundColor = "purple";
      }

      setDisabled(false);
    }, i * ANIMATION_SPEED);
  };

  const selectionSort = () => {
    setDisabled(true);
    const animations = selectionSortAlgorithm(array);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (var i = 0; i < animations.length; i++) {
      const animation = animations[i];
      let color = animation[2] === 1 ? "blue" : "red";

      if (animation[1] === false) {
        const bar = animation[0];
        setTimeout(() => {
          arrayBars[bar].style.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else if (animation[1] === true) {
        const swap = animation[0];
        const [firstBar, secondBar] = swap;

        setTimeout(() => {
          // this part is to check if we need to compare or to switch the comparison part
          const firstBarHeight = arrayBars[firstBar].style.height;
          const secondBarHeight = arrayBars[secondBar].style.height;
          arrayBars[firstBar].style.height = secondBarHeight;
          arrayBars[secondBar].style.height = firstBarHeight;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          for (let bar of arrayBars) {
            bar.style.backgroundColor = "blue";
          }
        }, i * ANIMATION_SPEED);
      }
    }
    setTimeout(() => {
      for (let bar of arrayBars) {
        bar.style.backgroundColor = "purple";
      }

      setDisabled(false);
    }, i * ANIMATION_SPEED);
  };

  return (
    <div>
      <Header
        resetArray={resetArray}
        array={array}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
        disabled={disabled}
      />
      <Bars array={array} />
    </div>
  );
};

export default SortingVisualizer;
