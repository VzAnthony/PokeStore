import React, { createContext, useState } from "react";

export const Context = createContext([]);

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (data) => {
    const newData = [...cart, data];
    setCart(newData);
  };

  const setAllCart = (newcCart) => {
    setCart(newcCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const store = { cart, addCart, setAllCart, emptyCart };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export default ContextProvider;
