import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import Modal from "./components/Modal/Modal";

function App() {
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
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
  return (
    <div>
      <UserInput onError={openModal} onNoError={removeError}></UserInput>
      {hasError && (
        <Modal>
          <p>{message}</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
