import { createContext } from "react";
import { useState } from "react";
export const ChipsContext = createContext();
export const ChipsContextProvider = ({ children }) => {
  const [chips, setChips] = useState([]);
  const handleAddChips = (e) => {
    setChips([...chips, e]);
  };
  return (
    <ChipsContext.Provider value={{ handleAddChips, chips }}>
      {children}
    </ChipsContext.Provider>
  );
};
