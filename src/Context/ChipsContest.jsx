import { createContext } from "react";
import { useState } from "react";
export const ChipsContext = createContext();
export const ChipsContextProvider = ({ children }) => {
  const [chips, setChips] = useState([]);
  const handleAddChips = (e) => {
    setChips([...chips, e]);
  };
  const handleDelete = (d)=>{
    const Data = chips.filter((e) => {
      return e.id !== d;
    })
    setChips(Data)
  }
  return (
    <ChipsContext.Provider value={{ handleAddChips,handleDelete, chips }}>
      {children}
    </ChipsContext.Provider>
  );
};
