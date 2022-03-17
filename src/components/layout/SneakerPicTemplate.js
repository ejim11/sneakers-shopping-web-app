import { Fragment, useContext } from "react";

import thumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import image1 from "../../assets/image-product-1.jpg";
import image2 from "../../assets/image-product-2.jpg";
import image3 from "../../assets/image-product-3.jpg";
import image4 from "../../assets/image-product-4.jpg";

import classes from "./SneakerPicTemplate.module.scss";
import DisplayImageContext from "../../store/displayImage-context";

const images = [
  { src: image1, alt: "first image", thumbnail: thumbnail1, key: "i1" },
  { src: image2, alt: "second image", thumbnail: thumbnail2, key: "i2" },
  { src: image3, alt: "third image", thumbnail: thumbnail3, key: "i3" },
  { src: image4, alt: "fourth image", thumbnail: thumbnail4, key: "i4" },
];

const SneakerPicTemplate = (props) => {
  const imgCtx = useContext(DisplayImageContext);

  const changeImageHandler = (event) => {
    const source = event.target.dataset.pic;

    if (!source) {
      return;
    }
    // console.log(source);
    console.log(event.target);

    props.setImage();
    imgCtx.onAddDisplayImage(source);
  };

  const imageList = images.map((imageObj) => {
    return (
      <div
        key={imageObj.key}
        className={`${classes.SneakerPic} ${
          imgCtx.src === imageObj.src ? classes.active : ""
        } `}
        onClick={changeImageHandler}
      >
        <img
          src={imageObj.thumbnail}
          alt={imageObj.alt}
          data-pic={imageObj.src}
          className={classes.img}
        />
      </div>
    );
  });

  return <Fragment>{imageList}</Fragment>;
};

export default SneakerPicTemplate;
