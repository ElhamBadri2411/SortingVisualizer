import React from "react";
import "./SortingVisualizer.css";
import { useState } from "react";
import Header from "./Header.jsx";
import Bars from "./Bars.jsx";
import RangeSlider from "./RangeSlider.jsx";
import {
  bubbleSortAlgorithm,
  insertionSortAlgorithm,
  selectionSortAlgorithm,
} from "./sortingAlgorithims.js";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]); // state that holds the value of the array
  const [disabled, setDisabled] = useState(false); // state that checks if the header should be disabled
  const [rangeval, setRangeval] = useState(20); // state that holds the value of the number of bars
  const ANIMATION_SPEED = 20000 / (rangeval ** 2 + 1) + 1; // speed of animation given number of bars

  function getRandomInt(min, max) {
    // gets a random value between min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const resetArray = () => {
    // resets the array on the screen by creating a new array
    let tempArray = [];
    for (let i = 0; i < rangeval; i++) {
      // generates an array of length rangeval
      tempArray.push(getRandomInt(5, 1000));
    }

    setArray([...tempArray]); // sets the temparray as the state
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let bar of arrayBars) {
      bar.style.backgroundColor = "blue"; // changes the color of each bar to blue
    }
  };

  const bubbleSort = () => {
    const animations = bubbleSortAlgorithm(array); // runs the animations for bubblesort
    const arrayBars = document.getElementsByClassName("array-bar");
    setDisabled(true);

    for (var i = 0; i < animations.length; i++) {
      console.log(disabled);
      const animation = animations[i];

      // checks which colour  the bar should be based on the index
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
      // checks which colour  the bar should be based on the index
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
      // checks which colour the bar should
      const animation = animations[i];
      let color = animation[2] === 1 ? "blue" : "red";

      // checks if the bar should be
      if (animation[1] === false) {
        const bar = animation[0]; // gets the bar index
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
      <RangeSlider
        setRangeval={setRangeval}
        rangeval={rangeval}
        disabled={disabled}
      />
      <Bars array={array} />
    </div>
  );
};

export default SortingVisualizer;
