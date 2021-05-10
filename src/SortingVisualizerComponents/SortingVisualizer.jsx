import React from "react";
import "./SortingVisualizer.css";
import { useState } from "react";
import Header from "./Header.jsx";
import {
  bubbleSortAlgorithm,
  insertionSortAlgorithm,
  selectionSortAlgorithm,
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
    for (let i = 0; i < 15; i++) {
      tempArray.push(getRandomInt(5, 1000));
    }

    setArray([...tempArray]);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let bar of arrayBars) {
      console.log(bar);
      bar.style.backgroundColor = "blue";
    }
  };

  const bubbleSort = () => {
    const animations = bubbleSortAlgorithm(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    const animationSpeed = 10; //250 is good for slow setting and 25 bars, 350 bars and  1 for fast paced

    for (var i = 0; i < animations.length; i++) {
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
        }, i * animationSpeed);
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
          }, i * animationSpeed);
        }
      }
    }

    setTimeout(() => {
      for (let bar of arrayBars) {
        console.log(bar);
        bar.style.backgroundColor = "purple";
      }
    }, i * animationSpeed);
  };

  const insertionSort = () => {
    const animations = insertionSortAlgorithm(array);
    const animationSpeed = 10; //250 is good for slow setting and 25 bars, 350 bars and  1 for fast paced
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
        }, i * animationSpeed);
      } else {
        // this part happens if we need to switch 2 bars
        const [firstBar, secondBar] = animation;
        setTimeout(() => {
          // this part is to check if we need to compare or to switch the comparison part
          const firstBarHeight = arrayBars[firstBar].style.height;
          const secondBarHeight = arrayBars[secondBar].style.height;
          arrayBars[firstBar].style.height = secondBarHeight;
          arrayBars[secondBar].style.height = firstBarHeight;
        }, i * animationSpeed);
      }
    }
    const arrayBars = document.getElementsByClassName("array-bar");
    setTimeout(() => {
      for (let bar of arrayBars) {
        console.log(bar);
        bar.style.backgroundColor = "purple";
      }
    }, i * animationSpeed);
  };

  const selectionSort = (array) => {
    const animations = selectionSortAlgorithm(array);
  };

  return (
    <div>
      <Header
        resetArray={resetArray}
        array={array}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
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
