import "./NewHobbiesStylesheets/HobbyForm.css";
import { useState } from "react";

const HobbyForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDesc, setEnteredDesc] = useState("");
  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const hobbyData = {
      title: enteredTitle,
      desc: enteredDesc,
      amount: enteredAmount,
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
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-hobby__control">
          <label>Description</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredDesc}
            onChange={descChangeHandler}
          />
        </div>
        <div className="new-hobby__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
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
