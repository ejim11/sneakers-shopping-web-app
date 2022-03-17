import React, { Fragment, useState, useContext, useEffect } from "react";

import classes from "./Header.module.scss";
import icons from "../../assets/sprite.svg";
import profilePic from "../../assets/image-avatar.png";
import Cart from "../Cart/Cart";

import DisplayImageContext from "../../store/displayImage-context";

const Header = (props) => {
  const itemCtx = useContext(DisplayImageContext);

  const [displayCart, setIsDisplayCart] = useState(false);

  const [displayMenu, setDisplayMenu] = useState(false);

  const [hideMenu, setHideMenu] = useState(false);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const [linkActive, setLinkActive] = useState("1");

  const onDisplayCartHandler = () => {
    setIsDisplayCart(true);
  };

  const onHideCartHandler = () => {
    setIsDisplayCart(false);
  };

  const { items } = itemCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfItems = items.reduce((acc, curItem) => {
    return acc + curItem.amount;
  }, 0);

  const numOfItemsClass = `${classes["cart-amount"]} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const openMenuHandler = () => {
    setDisplayMenu(true);
  };

  const closeMenuHandler = (event) => {
    console.log(event.target);

    // if (!event.target.dataset.type) {
    //   return;
    // }
    setHideMenu(true);
    setTimeout(() => {
      setHideMenu(false);
    }, 1000);
    setTimeout(() => {
      setDisplayMenu(false);
    }, 500);
  };

  const navActiveHandler = (event) => {
    event.preventDefault();
    let num = event.target.dataset.num;
    if (!num) {
      return;
    }
    setLinkActive(num);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes["icon-box"]}>
          <svg className={classes["icon-menu"]} onClick={openMenuHandler}>
            <use xlinkHref={`${icons}#icon-menu`}></use>
          </svg>
        </div>
        <p>sneakers</p>

        <nav
          onClick={closeMenuHandler}
          className={` ${
            displayMenu ? classes.display : classes.hide_display
          } ${hideMenu ? classes.hide_menu : ""}`}
          data-type="menu-backdrop"
        >
          <ul
            className={`${classes.header__nav} ${
              hideMenu ? classes.hide_nav : ""
            }`}
            onClick={navActiveHandler}
          >
            <div className={classes.exit_icon}>
              <svg className={classes["icon-cross"]} onClick={closeMenuHandler}>
                <use xlinkHref={`${icons}#icon-cross`}></use>
              </svg>
            </div>
            <li
              className={`${classes.header__nav_item} ${
                linkActive === "1" ? classes.active_border : ""
              }`}
            >
              <a href="http://#" data-num="1">
                Collections
              </a>
            </li>
            <li
              className={`${classes.header__nav_item} ${
                linkActive === "2" ? classes.active_border : ""
              }`}
            >
              <a href="http://#" data-num="2">
                Men
              </a>
            </li>
            <li
              className={`${classes.header__nav_item} ${
                linkActive === "3" ? classes.active_border : ""
              }`}
            >
              <a href="http://#" data-num="3">
                Women
              </a>
            </li>
            <li
              className={`${classes.header__nav_item} ${
                linkActive === "4" ? classes.active_border : ""
              }`}
            >
              <a href="http://#" data-num="4">
                About
              </a>
            </li>
            <li
              className={`${classes.header__nav_item} ${
                linkActive === "5" ? classes.active_border : ""
              }`}
            >
              <a href="http://#" data-num="5">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={classes.header__item}>
          <div className={classes["cart-box"]}>
            <svg
              className={classes["shopping-cart"]}
              onClick={onDisplayCartHandler}
            >
              <use xlinkHref={`${icons}#icon-shopping-cart`}></use>
            </svg>
            {items.length > 0 && (
              <span className={numOfItemsClass}>{numberOfItems}</span>
            )}
          </div>
          <div className={classes.header__profilePic}>
            <img src={profilePic} alt="profilePicture" />
          </div>
        </div>
        <Cart onClose={onHideCartHandler} clsCartAnim={displayCart} />
      </header>
    </Fragment>
  );
};

export default Header;
