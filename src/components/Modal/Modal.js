import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
const Modal = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.modal} `}>
        <header className={styles.header}>
          <h2>Error Message</h2>
        </header>
        <p className={styles.content}>{props.message}</p>
        <div className={styles.actions}>
          <Button
            label="Close Modal"
            clickHandler={props.onCloseHandler}
          ></Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
