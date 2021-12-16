import { createContext } from "react";
import { useState } from "react";
export const SigninContext = createContext();
export const SigninContextProvider = ({ children }) => {
  const [model, setModel] = useState(false);
  const [signupModel, setSignupModel] = useState(false);
  const handleModel = () => {
    setSignupModel(false)
    setModel(model ? false : true);
  };
  const handleSignupModel = () => {
    setModel(false);
    setSignupModel(signupModel ? false : true);
  };
  return (
    <SigninContext.Provider
      value={{ model, handleModel, signupModel, handleSignupModel }}
    >
      {children}
    </SigninContext.Provider>
  );
};
