import React from "react";
import "./SortingVisualizer.css";

const Header = ({ resetArray, bubbleSort, mergeSort }) => {
  return (
    <div className="header">
      <button onClick={resetArray}>Create New Array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default Header;
