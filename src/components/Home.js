import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import SideBar from "./SideBar";
import MainSection from "./Routes/MainSection";
import Reservation from "./Routes/Reservation";

const Home = () => {
  // Link를 사용하기 위해서는 Router 태그 내부에 있어야함

  return (
    <Router>
      <Navigation />
      <SideBar />
      <Route path="/Home" component={MainSection} />
      <Route path="/reservation" component={Reservation} />
    </Router>
  );
};

export default Home;
