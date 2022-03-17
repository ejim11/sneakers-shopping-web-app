import { Fragment } from "react";
import Modal from "../UI/Modal";

import icons from "../../assets/sprite.svg";

import classes from "./Gallery.module.scss";
import SneakerGallery from "../layout/SneakerGallery";

const Gallery = (props) => {
  const closeGallery = () => {
    props.onClose();
  };
  return (
    <Fragment>
      <Modal onClose={props.onClose}>
        <div className={classes.closediv}>
          <svg className={classes.close} onClick={closeGallery}>
            <use xlinkHref={`${icons}#icon-cross`}></use>
          </svg>
        </div>

        <SneakerGallery
          className={classes.gallery}
          small={classes.gallery__small}
          big={classes.gallery__big}
          left={classes.left}
          right={classes.right}
        />
      </Modal>
    </Fragment>
  );
};

export default Gallery;
