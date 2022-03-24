import "./App.css";
import KnightInput from "./components/Form/KnightInput";
import KnightMovesDisplay from "./components/Form/KnightMovesDisplay";
import Chessboard from "./Chessboard.jpg";
import React, { useState } from "react";
import Card from "./components/UI/Card";

function App() {
  const [movesList, setMovesList] = useState([]);

  function addValuesHandler(xVal, yVal) {
    setMovesList(() => {
      return [
        {
          x: xVal - 2,
          y: yVal - 1,
          id: Math.random().toString(),
        },
        {
          x: xVal - 1,
          y: yVal - 2,
          id: Math.random().toString(),
        },
        {
          x: xVal - 2,
          y: +yVal + 1,
          id: Math.random().toString(),
        },
        {
          x: xVal - 1,
          y: +yVal + 2,
          id: Math.random().toString(),
        },
        {
          x: +xVal + 2,
          y: yVal - 1,
          id: Math.random().toString(),
        },
        {
          x: +xVal + 1,
          y: yVal - 2,
          id: Math.random().toString(),
        },
        {
          x: +xVal + 2,
          y: +yVal + 1,
          id: Math.random().toString(),
        },
        {
          x: +xVal + 1,
          y: +yVal + 2,
          id: Math.random().toString(),
        },
      ];
    });
  }

  return (
    <div>
      <KnightInput onAddValues={addValuesHandler} />
      <KnightMovesDisplay moves={movesList} />
      <Card>
        <h3>Chessboard (for reference)</h3>
        <img src={Chessboard} width="400" height="400" />
        <p>
          Note: A knight can move to a maximum of 8 different positions,
          provided that there is no blockage.
        </p>
      </Card>
    </div>
  );
}

export default App;
