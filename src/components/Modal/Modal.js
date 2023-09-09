import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseHandler}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card
      classes={`${styles.modal} `}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <header className={styles.header}>
        <h2>Error Message</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button
          label="Close Modal"
          clickHandler={props.onCloseHandler}
        ></Button>
      </footer>
    </Card>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseHandler={props.onCloseHandler}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          message={props.message}
          onCloseHandler={props.onCloseHandler}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default Modal;
