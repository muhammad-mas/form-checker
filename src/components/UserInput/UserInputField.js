import React, { useState } from "react";

function UserInputField(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChangeHandler}
      ></input>
    </div>
  );
}
export default UserInputField;
