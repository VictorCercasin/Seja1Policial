import React, { useContext, useEffect, useCallback } from "react";

import "./Login.css";
import { AuthContext } from "../../components/context/auth-context";

const Login = () => {
  const auth = useContext(AuthContext);

  const login = () => {
    auth.login("logado");
  };

  const loginAdmin = () => {
    auth.login("admin");
  };

  const logout = () => {
    auth.logout();
  };

  const tellMe = () => {
    alert(auth.loginStatus);
  };


  return (
    <div className="container page" style={{ marginTop: "100px" }}>
      <div id="container-login">
        <button id="buttonLogin" onClick={loginAdmin}>login admin</button>
        <button id="buttonLogin" onClick={login}>login normal</button>
        <button id="buttonLogin" onClick={logout}>deslogar</button>
        <button id="buttonLogin" onClick={tellMe}>logado?</button>
      </div>
    </div>
  );
};

export default Login;
