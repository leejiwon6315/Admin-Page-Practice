import React from "react";
// import { HashRouter, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import MainSection from "./components/Routes/MainSection";
// import Reservation from "./components/Routes/Reservation";
import Login from "./AuthInfo/Login";
import "./App.module.css";
import SignIn from "./AuthInfo/Auth";

const App = () => {
  const login = ({ userId, password }) => SignIn({ userId, password });

  return <Login login={login} />;
};

export default App;
