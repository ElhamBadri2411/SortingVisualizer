import React from "react";
import "./SortingVisualizer.css";

const Header = ({ resetArray, bubbleSort }) => {
  return (
    <div className="header">
      <button onClick={resetArray}>Create New Array</button>
      <button >Insertion Sort</button>
      <button >Selection Sort</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default Header;
