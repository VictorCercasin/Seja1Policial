import React, { useState, useCallback } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Inicial from "./pages/Inicial/Inicial";
import Login from "./pages/Login/Login";
import MaisInformacoes from "./pages/MaisInformacoes/MaisInformacoes";
import CadernoQuestoes from "./pages/CadernoQuestoes/CadernoQuestoes";
import Questoes from "./pages/Questoes/Questoes";
import Assinaturas from "./pages/Assinaturas/Assinaturas";
import AreaDoAdministrador from "./pages/AreaDoAdministrador/AreaDoAdministrador";
import Carrinho from "./pages/Carrinho/Carrinho";
import MinhaConta from "./pages/MinhaConta/MinhaConta";
import MeusCursos from "./pages/MeusCursos/MeusCursos";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";
import CadernoGratuito from "./pages/CadernoGratuito/CadernoGratuito";
import Estatisticas from "./pages/Estatisticas/Estatisticas";
import "./assets/styles/global.css";
import "./App.css";
import { AuthContext } from "./components/context/auth-context";

function App() {
  const [loginStatus, setLoginStatus] = useState("deslogado");

  const login = useCallback((op) => {
    op == "logado" && setLoginStatus("logado");
    op == "admin" && setLoginStatus("admin");
  }, []);

  const logout = useCallback(() => {
    setLoginStatus("deslogado");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginStatus: loginStatus,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <PageHeader />
        <Route path="/" exact>
          <Inicial />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/estatisticas" exact>
          <Estatisticas />
        </Route>
        <Route path="/mais-info">
          <MaisInformacoes />
        </Route>
        <Route path="/caderno-questoes">
          <CadernoQuestoes />
        </Route>
        <Route path="/assinaturas">
          <Assinaturas />
        </Route>
        <Route path="/questoes">
          <Questoes />
        </Route>
        <Route path="/area-do-administrador">
          <AreaDoAdministrador />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
        <Route path="/minha-conta">
          <MinhaConta />
        </Route>
        <Route path="/meus-cursos">
          <MeusCursos />
        </Route>
        <Route path="/caderno-gratuito">
          <CadernoGratuito />
        </Route>
        <PageFooter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
