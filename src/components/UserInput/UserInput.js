import React, { useState } from "react";
import UserInputField from "./UserInputField";
import Button from "../Button/Button";
import styles from "./UserInput.module.css";
import Card from "../Card/Card";

function UserInput(props) {
  const initialState = {
    username: "",
    age: "",
  };
  const [userForm, setUserForm] = useState(initialState);
  function clearForm() {
    setUserForm(initialState);
  }
  function inputChangeHandler(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();

    // console.log(userForm);
    if (!userForm.age || !userForm.username) {
      props.onError("Please Fill The Full Form");
    } else if (+userForm.age < 0) {
      props.onError("Age can't be negative");
    } else {
      props.onNoError();
      props.onSubmit(userForm);
      clearForm();
    }
  }
  return (
    <Card classes={styles.input}>
      <form onSubmit={submitHandler}>
        <UserInputField
          name="username"
          label="Username"
          value={userForm.username}
          onChangeHandler={inputChangeHandler}
          type="text"
        ></UserInputField>
        <UserInputField
          name="age"
          label="Age"
          value={userForm.age}
          onChangeHandler={inputChangeHandler}
          type="number"
        ></UserInputField>
        <Button label="Submit Form" type="submit"></Button>
      </form>
    </Card>
  );
}

export default UserInput;
