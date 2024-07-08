import React from "react";
import { createContext } from "react";
import { newCollectionsData } from "../data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { newCollectionsData };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
