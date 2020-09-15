import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./AuthInfo/LoginPage";
import "./App.module.css";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
