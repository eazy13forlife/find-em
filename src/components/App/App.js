import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../../history.js";

import HomePage from "../HomePage/HomePage.js";
import GameLoader from "../GameLoader/GameLoader.js";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={HomePage} />
      <Route path="/game" exact component={GameLoader} />
    </Router>
  );
};

export default App;
