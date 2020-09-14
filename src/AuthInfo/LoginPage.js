import React from "react";
import Login from "./Login";
import SignIn from "./Auth";

const LoginPage = () => {
  const login = ({ userId, password }) => SignIn({ userId, password });

  return <Login login={login} />;
};

export default LoginPage;
