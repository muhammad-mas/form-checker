import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import UserList from "./components/UserList/UserList";

function App() {
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const openModal = (message) => {
    setMessage(message);
    setHasError(true);
  };
  const closeModal = () => {
    setMessage("");
    setHasError(false);
  };
  const removeError = () => {
    setMessage("");
    setHasError(false);
  };
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };
  return (
    <div>
      <UserInput
        onError={openModal}
        onNoError={removeError}
        onSubmit={addUser}
      ></UserInput>
      <UserList users={users}> </UserList>
      {hasError && (
        <Modal message={message} onCloseHandler={closeModal}></Modal>
      )}
    </div>
  );
}

export default App;
