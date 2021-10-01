import React, { useState } from "react";
import "./NameAddTextBox.css";

const NameAddTextBox = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const handleOnChange = (e) => {
    setEnteredName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (enteredName.trim() !== "") props.enterFriendName(enteredName);
      setEnteredName("");
    }
  };

  return (
    <div className="nameAddTextBoxContainer">
      <input
        className="inputBox"
        placeholder="Enter your friend's name and press enter to add"
        value={enteredName}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default NameAddTextBox;
