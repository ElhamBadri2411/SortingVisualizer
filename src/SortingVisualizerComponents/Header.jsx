import React from "react";
import "./SortingVisualizer.css";

const Header = ({ resetArray, bubbleSort, selectionSort, insertionSort }) => {
  return (
    <div className="header">
      <button onClick={resetArray}>Create New Array</button>
      <button onClick={insertionSort}>Insertion Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default Header;
