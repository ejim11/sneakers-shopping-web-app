import { Fragment, useContext,  } from "react";

import icons from "../../assets/sprite.svg";
import DisplayImageContext from "../../store/displayImage-context";
import Amount from "./Amount/Amount";
import classes from "./SneakerInfo.module.scss";

import imgThumbnail from "../../assets/image-product-3-thumbnail.jpg";

const SneakerInfo = (props) => {

  const itemCtx = useContext(DisplayImageContext);

  let itemAmount;
  const addItemToCart = (amount) => {
    itemAmount = +amount;
  };
  const addItemToCartNow = () => {
    console.log(itemAmount);
    if (itemAmount === 0) {
      return;
    }

    itemCtx.onAddToCart({
      id: "i1",
      image: imgThumbnail,
      name: "fall limited edition sneakers",
      amount: itemAmount,
      price: 125,
    });
  };

  return (
    <Fragment>
      <section className={classes.info}>
        <p className={classes.info__head}>sneaker company</p>
        <h1 className={classes.info__header}>fall limited edition sneakers</h1>
        <p className={classes.info__text}>
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className={classes["info__price"]}>
          <span className={classes["info__price-active"]}>$125.00</span>{" "}
          <span className={classes["info__price-percentDiscount"]}>50%</span>
        </div>
        <p className={classes["info__price-inactive"]}>$250.00</p>
        <div className={classes["info__add-to-cart"]}>
          <div className={classes.info__amount}>
            <Amount
              onAddItemToCart={addItemToCart}
            />
          </div>
          <button className={classes.info__button} onClick={addItemToCartNow}>
            <svg className={classes["shopping-cart"]}>
              <use xlinkHref={`${icons}#icon-shopping-cart`}></use>
            </svg>
            Add to cart
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default SneakerInfo;
