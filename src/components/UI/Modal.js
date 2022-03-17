import React, { Fragment } from "react";

import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return (
    <div
      className={`${classes.backdrop} ${props.hider}`}
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modaloverlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("backdrop");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} hider={props.hider} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
