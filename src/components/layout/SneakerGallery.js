import React, { Fragment, useContext, useState } from "react";

import SneakerPicTemplate from "./SneakerPicTemplate";

import DisplayImageContext from "../../store/displayImage-context";
import icons from "../../assets/sprite.svg";

import classes from "./SneakerGallery.module.scss";

import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

const images = [image1, image2, image3, image4];
const maxIndex = images.length - 1;

const SneakerGallery = (props) => {
  const imageCtx = useContext(DisplayImageContext);

  const [galleryAnimation, setGalleryAnimation] = useState(false);
  const [slideLeftAnimation, setSlideLeftAnimation] = useState(false);
  const [slideRightAnimation, setSlideRightAnimation] = useState(false);

  const onMoveLeftImageHandler = () => {
    let imgIndex = images.findIndex((img) => img === imageCtx.src);
    if (imgIndex === 0) {
      return;
    }
    imgIndex--;
    setSlideLeftAnimation(true);

    setTimeout(() => {
      setSlideLeftAnimation(false);
    }, 500);
    imageCtx.onAddDisplayImage(images[imgIndex]);
    console.log(imgIndex);
  };

  const onMoveRightImageHandler = () => {
    let imgIndex = images.findIndex((img) => img === imageCtx.src);
    if (imgIndex === maxIndex) {
      return;
    }
    imgIndex++;

    setSlideRightAnimation(true);

    setTimeout(() => {
      setSlideRightAnimation(false);
    }, 500);
    imageCtx.onAddDisplayImage(images[imgIndex]);
    console.log(imgIndex);
  };

  const changeImageHandler = () => {
    setGalleryAnimation(true);

    setTimeout(() => {
      setGalleryAnimation(false);
    }, 500);
  };

  const openGallery = () => {
    props.onOpen();
  };

  return (
    <Fragment>
      <section className={props.className}>
        <div className={props.left} onClick={onMoveLeftImageHandler}>
          <svg className={classes["left-icon"]}>
            <use xlinkHref={`${icons}#icon-chevron-small-left`}></use>
          </svg>
        </div>
        <div className={props.right} onClick={onMoveRightImageHandler}>
          <svg className={classes["right-icon"]}>
            <use xlinkHref={`${icons}#icon-chevron-small-right`}></use>
          </svg>
        </div>
        <div
          className={`${props.big} ${galleryAnimation ? classes.animate : ""} ${
            slideLeftAnimation ? classes.moveLeft : ""
          }  ${slideRightAnimation ? classes.moveSlideRight : ""}`}
          onClick={openGallery}
        >
          <img src={imageCtx.src} alt="image_product_1" />
        </div>
        <div className={props.small}>
          <SneakerPicTemplate setImage={changeImageHandler} />
        </div>
      </section>
    </Fragment>
  );
};

export default SneakerGallery;
