import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Inicial from "./pages/Inicial/Inicial";
import MaisInformacoes from "./pages/MaisInformacoes/MaisInformacoes";
import CursoCompleto from "./pages/CursoCompleto/CursoCompleto";
import Questoes from "./pages/Questoes/Questoes";
import Assinaturas from "./pages/Assinaturas/Assinaturas"
import AreaDoAdministrador from "./pages/AreaDoAdministrador/AreaDoAdministrador";
import Carrinho from "./pages/Carrinho/Carrinho";
import MinhaConta from "./pages/MinhaConta/MinhaConta";
import MeusCursos from "./pages/MeusCursos/MeusCursos";
import PageHeader from "./components/PageHeader/PageHeader"
import "./assets/styles/global.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <PageHeader />
        <Route path="/" exact> <Inicial /> </Route>
        <Route path="/mais-info"> <MaisInformacoes /></Route>
        <Route path="/cursos-completos"> <CursoCompleto /> </Route>
        <Route path="/assinaturas"> <Assinaturas /> </Route>
        <Route path="/questoes"> <Questoes /> </Route>
        <Route path="/area-do-administrador"> <AreaDoAdministrador /> </Route>
        <Route path="/carrinho"> <Carrinho /> </Route>
        <Route path="/minha-conta"> <MinhaConta /> </Route>
        <Route path="/meus-cursos"> <MeusCursos /> </Route>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
