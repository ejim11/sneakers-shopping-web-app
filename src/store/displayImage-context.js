import React from "react";

const DisplayImageContext = React.createContext({
  src: undefined,
  onAddDisplayImage: () => {},
  items: [],
  totalAmount: 0,
  onAddToCart: (item) => {},
  onRemoveFromCart: (id) => {},
});

export default DisplayImageContext;
