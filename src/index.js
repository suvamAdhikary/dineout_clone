import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { SigninContextProvider } from "./Context/SignInContext";

ReactDOM.render(
  <BrowserRouter>
    <SigninContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SigninContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);