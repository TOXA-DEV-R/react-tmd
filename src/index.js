import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import RootReducer from "./redux/RootReducer";
import { Provider } from "react-redux";

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
