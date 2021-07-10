import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import combinedReducers from "./reducers/";
import App2 from "./components/App2/App2.js";
import "./styles/main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.querySelector("#root")
);
