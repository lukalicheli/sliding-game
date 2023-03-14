import "./App.css";
import React, { useState } from "react";

const winningBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [board, setBoard] = useState([]);

  return (
    <div className="App">
      <h1>Sliding Game</h1>
    </div>
  );
}

export default App;
