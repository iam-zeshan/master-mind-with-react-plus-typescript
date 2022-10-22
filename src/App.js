import './App.css';
import Heading from './components/heading';
import Rules from './components/rules';
import RightSidePegs from './components/rightSidePegs';
import LeftSide from './components/leftSide';
import EndGame from './components/winLose';
import Footer from './components/footer';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [rightSidePeg, setrightSidePeg] = useState(
    [
      { id: 0, pegColorValue: "zero", selected: "selected" },
      { id: 1, pegColorValue: "one", selected: "" },
      { id: 2, pegColorValue: "two", selected: "" },
      { id: 3, pegColorValue: "three", selected: "" },
      { id: 4, pegColorValue: "four", selected: "" },
      { id: 5, pegColorValue: "five", selected: "" }
    ]
  );

  const [leftSidePeg, setleftSidePeg] = useState(
    [
      {
        id: 0,
        row: "current",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: false,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 1,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 2,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 3,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 4,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 5,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 6,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 7,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 8,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      },
      {
        id: 9,
        row: "",
        pegs: [
          { id: 0, pegColorValue: "", pegValue: -1 },
          { id: 1, pegColorValue: "", pegValue: -1 },
          { id: 2, pegColorValue: "", pegValue: -1 },
          { id: 3, pegColorValue: "", pegValue: -1 }
        ],
        disable: true,
        hints: [
          { id: 0, hintValue: null },
          { id: 1, hintValue: null },
          { id: 2, hintValue: null },
          { id: 3, hintValue: null }
        ]
      }
    ]
  );

  const [givenPattern, setgivenPattern] = useState(
    []
  );

  {/* the below two methods has a job to generate the random numbers array on every refresh and on first creation */ }
  const RandomPatternGen = () => {
    let tempGivenPattern = [];
    for (let i = 0; i < 4; i++) {
      tempGivenPattern[i] = randomRange(0, 5);
    }
    console.log(tempGivenPattern);
    setgivenPattern(tempGivenPattern);
  }
  const randomRange = (myMin, myMax) => {
    let rangeVal = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return rangeVal;
  }
  {/* this Hook is calling the RandomPatternGen method twice in the start ? */ }
  useEffect(() => {
    RandomPatternGen();
  }, [])

  {/* this method will refresh the whole application when it is called */ }
  const handleRefresh = () => {
    window.location.reload();
  }

  const [endGame, setendGame] = useState(
    {
      win: false,
      maxTen: false
    }
  );

  {/* this arrow func will change state (rightSidePeg) according to what peg (color) is selected */ }
  const handleRightSidePeg = pegId => {
    let tempArr = [...rightSidePeg];
    tempArr.filter(peg => peg.id !== pegId).map(peg => peg.selected = "");
    tempArr[pegId].selected = "selected";
    setrightSidePeg(tempArr);
  }

  {/* It will be used to put color and initializes the state's color Value in the clicked peg and in current row */ }
  const handlePutColor = (whichRow, pegId) => {
    let tempArr = [...leftSidePeg];
    let pegColorValue = rightSidePeg.filter(selected => selected.selected === "selected");
    let currentRow = tempArr.indexOf(whichRow);
    tempArr[currentRow].pegs[pegId].pegColorValue = pegColorValue[0].pegColorValue;
    tempArr[currentRow].pegs[pegId].pegValue = pegColorValue[0].id;
    setleftSidePeg(tempArr);
  }

  {/* This method has a job to confirm the results and change the state accordingly */ }
  const handleCheckClick = () => {
    let currentRow = [...leftSidePeg].filter(whichRow => whichRow.row === "current")[0].pegs.map(onlyPegValues => onlyPegValues.pegValue);
    let givenPattarn = [...givenPattern];
    let exactMatch = currentRow.filter((value, index) => value === givenPattarn[index]).length;
    let tempcheckCCWrongL = givenPattarn.filter((check, index) => check !== currentRow[index]).sort();
    let checkCCWrongL = currentRow.filter((value, index) => value !== givenPattarn[index]).sort();
    for (let i = 0; i < checkCCWrongL.length; i++) {
      for (let j = 0; j < checkCCWrongL.length; j++) {
        if (checkCCWrongL[i] === tempcheckCCWrongL[j]) {
          tempcheckCCWrongL[j] = "match";
        }
      }
    }
    let onlyColorMatch = tempcheckCCWrongL.filter(match => match === "match").length;

    updateHintState(exactMatch, onlyColorMatch);
  }

  {/* this method would change the state according to input hints' values */ }
  const updateHintState = (exactMatch, onlyColorMatch) => {
    let tempStateArr = [...leftSidePeg];
    let currentRow = tempStateArr.filter(whichRow => whichRow.row === "current")[0];
    let exactMatchDec = exactMatch;
    for (let i = 0; i < 4; i++) {
      if (exactMatch > 0) {
        currentRow.hints[i].hintValue = "exactMatch";
        exactMatch--;
      } else if (onlyColorMatch > 0) {
        currentRow.hints[i].hintValue = "onlyColorMatch";
        onlyColorMatch--;
      } else {
        currentRow.hints[i].hintValue = "none-matches";
      }
    }
    {/* below two lines will set the previous row to disable plus unbordered*/ }
    currentRow.disable = true;
    currentRow.row = "";
    let tempStateArrIndex = tempStateArr.indexOf(currentRow);
    if (exactMatchDec === 4) {
      setendGame({ win: true, maxTen: false });
    } else if (tempStateArrIndex === 9) {
      setendGame({ win: false, maxTen: true });
    } else {
      tempStateArr[tempStateArrIndex + 1].disable = false;
      tempStateArr[tempStateArrIndex + 1].row = "current";
    }
    tempStateArr[tempStateArrIndex] = currentRow;
    setleftSidePeg(tempStateArr);
  }

  return (
    <>
      <div className="container">
        < EndGame endGameProps={endGame} onRefresh={handleRefresh} />
        <Heading />
        <Rules />
        <RightSidePegs data={rightSidePeg} onSelect={handleRightSidePeg} />
        {leftSidePeg.map(currentRow => <LeftSide key={currentRow.id} stateData={currentRow} onPutColor={handlePutColor} onCheck={handleCheckClick} />)}
      </div>
      <Footer />
    </>
  );
}

export default App;
