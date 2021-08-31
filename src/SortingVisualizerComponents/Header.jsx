import React from "react";
import "./SortingVisualizer.css";

const Header = ({
  resetArray,
  bubbleSort,
  selectionSort,
  insertionSort,
  disabled,
}) => {
  return (
    <div className={disabled === false ? "header" : "headerDisabled"}>
      <button onClick={disabled === false ? resetArray : null}>
        Create New Array
      </button>
      <button onClick={disabled === false ? insertionSort : null}>
        Insertion Sort
      </button>
      <button onClick={disabled === false ? selectionSort : null}>
        Selection Sort
      </button>
      <button onClick={disabled === false ? bubbleSort : null}>
        Bubble Sort
      </button>
    </div>
  );
};

export default Header;
