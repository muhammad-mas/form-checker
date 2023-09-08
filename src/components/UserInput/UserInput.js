import React, { useState } from "react";
import UserInputField from "./UserInputField";
import Button from "../Button/Button";

function UserInput(props) {
  const [userForm, setUserForm] = useState({
    username: "",
    age: "",
  });

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();

    console.log(userForm);
    if (!userForm.age || !userForm.username) {
      props.onError("Please Fill The Full Form");
    } else if (+userForm.age < 0) {
      props.onError("Age can't be negative");
    } else {
      props.onNoError();
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <UserInputField
        name="username"
        label="Username"
        value={userForm.name}
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
      <Button></Button>
    </form>
  );
}

export default UserInput;
