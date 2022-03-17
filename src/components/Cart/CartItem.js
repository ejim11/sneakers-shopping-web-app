import React, { Fragment, useContext } from "react";
import classes from "./CartItem.module.scss";

import icons from "../../assets/sprite.svg";

import DisplayImageContext from "../../store/displayImage-context";

const CartItem = (props) => {
  const itemCtx = useContext(DisplayImageContext);

  const onRemoveCartItemHandler = () => {
    itemCtx.onRemoveFromCart(props.id);
  };

  return (
    <Fragment>
      <div className={classes["cartItem"]}>
        <div className={classes.cartItem__image}>
          <img src={props.image} alt="cart-item-img" />
        </div>
        <div className={classes.cartItem__content}>
          <div>{props.name}</div>
          <span>{`$${props.price}`}</span>
          <span className={classes["cartItem__content-amount"]}>
            x {props.amount}
          </span>
          <span
            className={classes["cartItem__content-total"]}
          >{`$${itemCtx.totalAmount.toFixed(2)}`}</span>
        </div>
        <div className={classes["cartItem__icon"]}>
          <svg
            className={classes["cartItem__icon-close"]}
            onClick={onRemoveCartItemHandler}
          >
            <use xlinkHref={`${icons}#icon-bin`}></use>
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
