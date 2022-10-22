import React from "react";

const WinLose = (props) => {
  return (
    <>
      {props.endGameProps.win ? (
        <div className="endgame win">
          <h2 className="endgame-header win">Congratulations!</h2>
          <button className="endgame-button" onClick={props.onRefresh}>
            PLAY AGAIN
          </button>
        </div>
      ) : props.endGameProps.maxTen ? (
        <div className="endgame failure">
          <h2 className="endgame-header failure">Game Over!</h2>
          <button className="endgame-button" onClick={props.onRefresh}>
            PLAY AGAIN
          </button>
        </div>
      ) : null}
    </>
  );
};

export default WinLose;
