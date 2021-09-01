import React from "react";

const Bars = React.memo(({ array }) => {
  // using memoization to prevent re-renders on the page, allows us to disable header while running the algorithm without any issues
  return (
    <div>
      <div className="array-container">
        {array.map(
          (
            value,
            i // maps each element in array to create the bars
          ) => (
            <div
              className="array-bar"
              key={i}
              style={{ height: `${value}px` }} // changes the height of each bar based on the values of array
            ></div>
          )
        )}
      </div>
    </div>
  );
});

export default Bars;
