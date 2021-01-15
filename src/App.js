import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Inicial from "./pages/Inicial/Inicial";
import MaisInformacoes from "./pages/MaisInformacoes/MaisInformacoes";
import CursoCompleto from "./pages/CursoCompleto/CursoCompleto";
import Questoes from "./pages/Questoes/Questoes";
import Assinaturas from "./pages/Assinaturas/Assinaturas";
import PageHeader from "./components/PageHeader/PageHeader";
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
        <Route path="/questoes"> <Questoes /> </Route>
        <Route path="/assinaturas"> <Assinaturas /> </Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
