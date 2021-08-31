import React from "react";

const Bars = React.memo(({ array }) => {
  return (
    <div>
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
});

export default Bars;
