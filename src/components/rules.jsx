import React, { useState } from "react";

const Rules = () => {
  const [toggleRules, setToggleRules] = useState(false);

  let handleHideUnHideRules = () => {
    if (toggleRules) {
      setToggleRules(false);
    } else {
      setToggleRules(true);
    }
  };

  return (
    <div className="rules">
      <span className="rulesToggle" onClick={handleHideUnHideRules}>
        <p id="showHide">{toggleRules ? "Hide rules" : "Show rules"}</p>
      </span>
      {toggleRules && (
        <p id="infoHidden">
          Try to guess the pattern, in both order and color, within ten turns.
          After submitting a row, a small black peg is placed for each code peg
          from the guess which is correct in both color and position. A white
          peg indicates the existence of a correct color code peg placed in the
          wrong position. More info on
          <a
            href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
            target="_blank"
          >
            Wikipedia
          </a>
          .
        </p>
      )}
    </div>
  );
};

export default Rules;
