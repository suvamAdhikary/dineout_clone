import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { SigninContextProvider } from "./Context/SignInContext";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ChipsContextProvider } from "./Context/ChipsContest";

ReactDOM.render(
  <BrowserRouter>
    <SigninContextProvider>
      <ChipsContextProvider>
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      </ChipsContextProvider>
    </SigninContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
