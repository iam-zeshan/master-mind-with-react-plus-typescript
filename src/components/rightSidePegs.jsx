import React from "react";

const rightSidePegs = (props) => {
  return (
    <div className="rightSide">
      {props.data.map((peg) => (
        <span
          key={peg.id}
          className={`peg ${peg.pegColorValue} ${peg.selected}`}
          onClick={() => props.onSelect(peg.id)}
        ></span>
      ))}
    </div>
  );
};

export default rightSidePegs;
