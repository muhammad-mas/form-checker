import React, { useState } from "react";
import UserInputField from "./UserInputField";
import Button from "../Button/Button";

function UserInput(props) {
  const [userForm, setUserForm] = useState({
    name: "",
    age: 0,
  });

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <UserInputField></UserInputField>
      <UserInputField></UserInputField>
      <Button></Button>
    </div>
  );
}

export default UserInput;
