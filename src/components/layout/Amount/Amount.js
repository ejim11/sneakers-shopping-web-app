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
        <span>
          <svg className={classes.button__minus}>
            <use xlinkHref={`${icons}#icon-minus`}></use>
          </svg>
        </span>
      </button>
      <label></label>
      <input type={"number"} value={inputValue} onChange={inputChangeHandler} />
      <button className={classes.button} onClick={increaseInputHandler}>
        <span>
          <svg className={classes.button__plus}>
            <use xlinkHref={`${icons}#icon-plus`}></use>
          </svg>
        </span>
      </button>
    </Fragment>
  );
};

export default Amount;
