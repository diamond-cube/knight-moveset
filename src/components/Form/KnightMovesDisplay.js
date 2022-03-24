import React from "react";
import Card from "../UI/Card";
import "../UI/Card.css";

function KnightMovesDisplay(props) {
  return (
    <Card>
      <h3>Possible Moves</h3>
      <ul>
        {props.moves
          .filter(
            (move) => move.x > 0 && move.x < 9 && move.y > 0 && move.y < 9
          )
          .map((move) => (
            <li key={move.id}>
              ({move.x},{move.y})
            </li>
          ))}
      </ul>
    </Card>
  );
}

export default KnightMovesDisplay;
