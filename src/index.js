import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./globalStyles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
