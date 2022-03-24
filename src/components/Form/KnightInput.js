import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./KnightInput.css";
import ErrorModal from "../UI/ErrorModal";

function KnightInput(props) {
  const [enteredXVal, setEnteredXVal] = useState("");
  const [enteredYVal, setEnteredYVal] = useState("");
  const [error, setError] = useState();

  function addValuesHandler(event) {
    event.preventDefault();
    if (enteredXVal.trim().length === 0 || enteredYVal.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid co-ordinates (non-empty values).",
      });
      return;
    }
    if (+enteredXVal <= 0 || +enteredYVal <= 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid co-ordinates (1-8).",
      });
      return;
    }

    if (+enteredXVal > 8 || +enteredYVal > 8) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid co-ordinates (1-8).",
      });
    }

    props.onAddValues(enteredXVal, enteredYVal);
    setEnteredXVal("");
    setEnteredYVal("");
  }

  function xValChangeHandler(event) {
    setEnteredXVal(event.target.value);
  }

  function yValChangeHandler(event) {
    setEnteredYVal(event.target.value);
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Card>
      <h3>Enter Co-ordinates</h3>
      <form onSubmit={addValuesHandler}>
        <div>
          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
        </div>
        <div className="input">
          <label htmlFor="x">X (Horizontal): </label>
          <input
            type="number"
            placeholder="Enter X..."
            value={enteredXVal}
            onChange={xValChangeHandler}
          />
        </div>
        <div className="input">
          <label htmlFor="y">Y (Vertical): </label>
          <input
            type="number"
            placeholder="Enter Y..."
            value={enteredYVal}
            onChange={yValChangeHandler}
          />
        </div>
        <div className="input">
          <Button type="submit">Enter</Button>
        </div>
      </form>
    </Card>
  );
}

export default KnightInput;
