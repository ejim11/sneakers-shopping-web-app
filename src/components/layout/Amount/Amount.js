import { Fragment, useState, useContext, useEffect } from "react";

import classes from "./Amount.module.scss";
import icons from "../../../assets/sprite.svg";
import DisplayImageContext from "../../../store/displayImage-context";

const Amount = (props) => {
  const itemCtx = useContext(DisplayImageContext);

  const [inputValue, setInputValue] = useState(0);

  const { items } = itemCtx;
  useEffect(() => {
    if (items) {
      setInputValue(0);
    }
  }, [items]);

  let counter = inputValue;
  const increaseInputHandler = () => {
    counter++;
    setInputValue(counter);
  };
  const decreaseInputHandler = () => {
    if (inputValue === 0) {
      return;
    }
    counter--;
    setInputValue(counter);
  };

  const inputChangeHandler = (e) => {
    return;
  };
  props.onAddItemToCart(inputValue);

  return (
    <Fragment>
      <button className={classes.button} onClick={decreaseInputHandler}>
        <svg className={classes.button__minus}>
          <use xlinkHref={`${icons}#icon-minus`}></use>
        </svg>
      </button>
      <input type={"number"} value={inputValue} onChange={inputChangeHandler} />
      <button className={classes.button} onClick={increaseInputHandler}>
        <svg className={classes.button__plus}>
          <use xlinkHref={`${icons}#icon-plus`}></use>
        </svg>
      </button>
    </Fragment>
  );
};

export default Amount;
