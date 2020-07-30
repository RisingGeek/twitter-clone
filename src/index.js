import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import redux from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
