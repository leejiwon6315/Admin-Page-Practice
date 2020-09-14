import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./AuthInfo/LoginPage";
import Main from "./components/Main";
import "./App.module.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route path="/Home" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
