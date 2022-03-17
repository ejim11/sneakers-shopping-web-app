import React, { useState, useReducer } from "react";

import DisplayImageContext from "./displayImage-context";
import image1 from "../assets/image-product-1.jpg";

const DisplayImageProvider = (props) => {
  const [displayImage, setDisplayImage] = useState(image1);

  // const [displayCartItem, setDisplayCartItem] = useState([]);

  const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      // updating total amount
      const updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;

      // find existing item index
      const existingItemIndex = state.items.findIndex(
        (itemObj) => itemObj.id === action.item.id
      );

      // find existing item
      const existingItem = state.items[existingItemIndex];

      let updatedItem, updatedItems;

      if (existingItem) {
        updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      } else {
        return {
          items: state.items.concat(action.item),
          totalAmount: updatedTotalAmount,
        };
      }
    }

    if (action.type === "REMOVE_FROM_CART") {
      const existingItemIndex = state.items.findIndex(
        (itemObj) => itemObj.id === action.id
      );

      // find existing item
      const existingItem = state.items[existingItemIndex];
      const updatedTotalAmount =
        state.totalAmount - existingItem.price * existingItem.amount;
      let updatedItems = state.items.filter((item) => item.id !== action.id);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    return { items: [], totalAmount: 0 };
  };

  const [displayCartItem, dispatchCartItem] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addDisplayImage = (image) => {
    setDisplayImage(image);
  };

  const addCartItem = (item) => {
    dispatchCartItem({ type: "ADD_TO_CART", item: item });
  };

  // remove item
  const removeCartItem = (id) => {
    dispatchCartItem({ type: "REMOVE_FROM_CART", id: id });
  };

  return (
    <DisplayImageContext.Provider
      value={{
        src: displayImage,
        onAddDisplayImage: addDisplayImage,
        items: displayCartItem.items,
        totalAmount: displayCartItem.totalAmount,
        onAddToCart: addCartItem,
        onRemoveFromCart: removeCartItem,
      }}
    >
      {props.children}
    </DisplayImageContext.Provider>
  );
};
export default DisplayImageProvider;

// setDisplayCartItem((prevState) => {
//   console.log(prevState);

//   const existingItemIndex = prevState.findIndex(
//     (itemObj) => item.id === itemObj.id
//   );
//   const existingItem = prevState[existingItemIndex];
//   let updatedItem, updatedItems;
//   if (existingItem) {
//     updatedItem = {
//       ...existingItem,
//       amount: existingItem.amount + item.amount,
//     };
//     updatedItems = [...prevState];
//     updatedItems[existingItemIndex] = updatedItem;
//     return updatedItems;
//   } else {
//     return prevState.concat(item);
//   }
// });
