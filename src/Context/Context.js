import { createContext } from "react";

export const Context = createContext({});
const ProviderContext = ({ children }) => {
  const pets = {
    tshirt: "forDogs",
    shoes: "forCats",
  };
  return <Context.Provider value={pets}>{children}</Context.Provider>;
};
export default ProviderContext;
