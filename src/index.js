import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./components/Router";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false } // React already does escaping
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Router />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
