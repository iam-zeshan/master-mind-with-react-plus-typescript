const leftSide = (props) => {
  const { row, pegs, hints } = props.stateData;
  return (
    <div className="leftSide">
      <div className={`row ${row}`}>
        {/* The 4 pegs */}
        <div
          className="left"
          style={
            props.stateData.disable
              ? { pointerEvents: "none", opacity: "0.4" }
              : {}
          }
        >
          <div className="color-decode">
            {props.stateData.pegs.map((peg) => (
              <span
                key={peg.id}
                className={`peg ${peg.pegColorValue}`}
                onClick={() => props.onPutColor(props.stateData, peg.id)}
              ></span>
            ))}
          </div>
        </div>
        {/* The Check Button */}
        <div className="left">
          {pegs.filter((pegValue) => pegValue.pegValue === -1).length === 0 &&
            hints.filter((hint) => hint.hintValue !== null).length === 0 && (
              <i className="fa fa-check" onClick={props.onCheck}></i>
            )}
        </div>
        {/* The hints (small circle) */}
        <div className="right">
          <div className="hints">
            {hints.map((hint) => (
              <span key={hint.id} className={`hint ${hint.hintValue}`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default leftSide;
