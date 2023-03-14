import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [completed, setCompleted] = useState(false);

  const startGame = () => {
    debugger;
    const newBoard = [];
    const tilesNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = 0; i < 8; i++) {
      let randomIndex = Math.floor(Math.random() * tilesNumbers.length);
      let value = tilesNumbers[randomIndex];
      tilesNumbers.splice(randomIndex, 1);
      newBoard.push(value);
    }
    newBoard.push("");
    return newBoard;
  };

  useEffect(() => {
    // const newBoard = startGame();
    const newBoard = [1, 2, 3, 4, 5, 6, 7, "", 8];
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    checkCompletion();
  }, [board]);

  //onClick check if the value
  // above
  //if currIndex -3 is below 0 then don't do anything
  //if currIndex -3 has value then don't do anything
  // right
  //If currIndex +1 is above 8 don't do anything
  //If currIndex +1 has value don't do anything
  // left
  //if currIndex -1 is below 0 don't do anything
  //if currIndex -1 has value don't do anything
  // below
  //if currIndex +3 is above 8 don't do anything
  //if currIndex +3 has value don't do anything

  const tileClick = (index, value) => {
    let currIndex = index;

    //left
    if (currIndex - 1 >= 0 && board[currIndex - 1] === "") {
      const switchedTile = [...board];
      switchedTile[currIndex - 1] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);
      // checkCompletion(switchedTile);
      return;
    }

    //right
    if (
      currIndex + 1 <= 8 &&
      board[currIndex + 1] === "" &&
      currIndex % 3 !== 2
    ) {
      const switchedTile = [...board];
      switchedTile[currIndex + 1] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);
      // checkCompletion(switchedTile);
    }

    //above

    if (currIndex - 3 >= 0 && board[currIndex - 3] === "") {
      const switchedTile = [...board];
      switchedTile[currIndex - 3] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);

      return;
    }
    // below
    if (currIndex + 3 <= 8 && board[currIndex + 3] === "") {
      const switchedTile = [...board];
      switchedTile[currIndex + 3] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);

      return;
    }
  };

  const checkCompletion = () => {
    const completedBoard = [1, 2, 3, 4, 5, 6, 7, 8, ""];

    for (let i = 0; i < completedBoard.length; i++) {
      if (completedBoard[i] !== board[i]) {
        return setCompleted(false);
      }
    }
    setCompleted(true);
  };

  return (
    <div className="App">
      <h1>Sliding Game</h1>

      {completed ? (
        <div>
          <h2>Completed!</h2>
          <button
            onClick={() => {
              const newBoard = startGame();
              setBoard(newBoard);
            }}
          >
            Start Game
          </button>
        </div>
      ) : (
        <h2>Not yet completed...</h2>
      )}
      <div className="board">
        {board.map((value, index) => {
          return (
            <div
              key={index}
              className="square"
              onClick={() => tileClick(index, value)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
