import "./NewHobbiesStylesheets/HobbyForm.css";
import { useState } from "react";

const HobbyForm = (props) => {
  //const [isValid, setIsValid] = useState(true);
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [descIsValid, setDescIsValid] = useState(true);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTitleIsValid(true);
    }

    setEnteredTitle(event.target.value);
  };

  const [enteredDesc, setEnteredDesc] = useState("");
  const descChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDescIsValid(true);
    }

    setEnteredDesc(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAmountIsValid(true);
    }

    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    // Handle clicking submit button
    event.preventDefault(); // Prevent page from refreshing
    if (
      // All 3
      enteredTitle.trim().length === 0 &&
      enteredDesc.trim().length === 0 &&
      enteredAmount.trim().length === 0
    ) {
      setTitleIsValid(false);
      setDescIsValid(false);
      setAmountIsValid(false);
      return;
    } else if (
      // 1 and 2
      enteredTitle.trim().length === 0 &&
      enteredDesc.trim().length === 0
    ) {
      setTitleIsValid(false);
      setDescIsValid(false);
      return;
    } else if (
      // 2 and 3
      enteredDesc.trim().length === 0 &&
      enteredAmount.trim().length === 0
    ) {
      setDescIsValid(false);
      setAmountIsValid(false);
      return;
    } else if (
      // 1 and 3
      enteredTitle.trim().length === 0 &&
      enteredAmount.trim().length === 0
    ) {
      setTitleIsValid(false);
      setAmountIsValid(false);
      return;
    } else if (
      // 1
      enteredTitle.trim().length == 0
    ) {
      setTitleIsValid(false);
      return;
    } else if (
      // 2
      enteredDesc.trim().length === 0
    ) {
      setDescIsValid(false);
      return;
    } else if (
      // 3
      enteredAmount.trim().length === 0
    ) {
      setAmountIsValid(false);
      return;
    }

    const hobbyData = {
      title: enteredTitle,
      desc: enteredDesc,
      timeSpent: enteredAmount,
    };
    props.onSaveHobbyData(hobbyData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDesc("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-hobby__controls">
        <div className="new-hobby__control">
          <label style={{ color: !titleIsValid ? "red" : "black" }}>
            Title
          </label>
          <input
            type="text"
            style={{
              borderColor: !titleIsValid ? "red" : "black",
              backgroundColor: !titleIsValid ? "pink" : "white",
            }}
            title={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-hobby__control">
          <label style={{ color: !descIsValid ? "red" : "black" }}>
            Description
          </label>
          <input
            type="text"
            style={{
              borderColor: !descIsValid ? "red" : "black",
              backgroundColor: !descIsValid ? "pink" : "white",
            }}
            min="0.01"
            step="0.01"
            desc={enteredDesc}
            onChange={descChangeHandler}
          />
        </div>
        <div className="new-hobby__control">
          <label style={{ color: !amountIsValid ? "red" : "black" }}>
            Amount
          </label>
          <input
            type="text"
            style={{
              borderColor: !amountIsValid ? "red" : "black",
              backgroundColor: !amountIsValid ? "pink" : "white",
            }}
            min="0.01"
            step="0.01"
            amount={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-hobby__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Hobby</button>
      </div>
    </form>
  );
};

export default HobbyForm;
