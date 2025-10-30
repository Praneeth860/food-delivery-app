import { createContext } from "react";
import { food_list } from "./assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    // ...context values go here
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
