import "./App.css";
import React, { useState } from "react";

const newBoard = [];
const tilesNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 9; i++) {
  let randomIndex = Math.floor(Math.random() * tilesNumbers.length);
  let value = tilesNumbers[randomIndex];
  tilesNumbers.splice(randomIndex, 1);
  newBoard.push(value);
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [firstTile, setFirstTile] = useState("");
  const [secondTile, setSecondTile] = useState("");
  const [clicked, setClicked] = useState(false);

  const startGame = (e) => {
    setBoard(newBoard);
  };

  const tileClick = (value, index) => {
    if (!clicked) {
      setFirstTile(index, value);
      console.log(index);
      console.log(value);
      setClicked(true);
    } else if (clicked) {
      setSecondTile(index, value);
      console.log(index);
      console.log(value);
      setClicked(false);
    }
  };

  return (
    <div className="App">
      <h1>Sliding Game</h1>
      <button onClick={startGame}>Start Game</button>
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
