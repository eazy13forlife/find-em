import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history.js";

import HomePage from "../HomePage/HomePage.js";
import App from "../App/App.js";

const App2 = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={HomePage} />
      <Route path="/game" exact component={App} />
    </Router>
  );
};

export default App2;
