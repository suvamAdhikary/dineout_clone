import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { SigninContextProvider } from "./Context/SignInContext";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


ReactDOM.render(
  <BrowserRouter>
    <SigninContextProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </SigninContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);