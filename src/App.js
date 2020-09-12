import React from "react";
// import { HashRouter, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import MainSection from "./components/Routes/MainSection";
// import Reservation from "./components/Routes/Reservation";
import Login from "./AuthInfo/Login";
import "./App.module.css";
import SignIn from "./AuthInfo/Auth";

function App() {
  // Link를 사용하기 위해서는 Router 태그 내부에 있어야함

  const login = ({ userId, password }) => SignIn({ userId, password });

  return (
    // <HashRouter>
    //   <Navigation />

    //   <Route path="/" exact={true} component={MainSection} />
    //   <Route path="/reservation" component={Reservation} />
    // </HashRouter>
    <Login login={login} />
  );
}

export default App;
