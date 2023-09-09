import React, { useState } from "react";
import styles from "./UserInputField.module.css";
function UserInputField(props) {
  return (
    <div className={styles.input}>
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
