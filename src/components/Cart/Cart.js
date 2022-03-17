import React, { Fragment, useContext, useState } from "react";
import DisplayImageContext from "../../store/displayImage-context";

import CartItem from "./CartItem";

import classes from "./Cart.module.scss";

const Cart = (props) => {
  const itemCtx = useContext(DisplayImageContext);

  const [cartAnimation, setCartAnimation] = useState(false);

  const removeItem = (id) => {
    itemCtx.onRemoveFromCart(id);
  };

  const cartItems = itemCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        amount={item.amount}
        price={item.price}
        oneRemoveItem={removeItem.bind(null, item.id)}
      />
    );
  });

  const closeCartHandler = () => {
    setCartAnimation(true);
    setTimeout(() => {
      setCartAnimation(false);
    }, 1000);
    setTimeout(() => {
      props.onClose();
    }, 500);
  };

  return (
    <Fragment>
      <div
        id="cart"
        className={`${classes.cart}   ${
          cartAnimation ? classes.moveRight : ""
        } ${
          props.clsCartAnim ? classes["display-cart"] : classes["hide-cart"]
        }`}
      >
        <div className={classes["cart__title"]}>
          <p>Cart</p>
        </div>
        {cartItems}
        {itemCtx.items.length < 1 && (
          <div className={classes["cart__empty"]}>
            <p>Your cart is empty</p>
          </div>
        )}
        <div className={classes["cart__btns"]}>
          <button
            onClick={closeCartHandler}
            className={classes["cart__btns-close"]}
          >
            close
          </button>
          {itemCtx.items.length > 0 && (
            <button className={classes["cart__btns-checkout"]}>Checkout</button>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;
