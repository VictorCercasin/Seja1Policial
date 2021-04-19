import React, { Fragment } from "react";

import "./CadernoGratuito.css";
import caderno from "../../assets/images/caderno-questoes-gratuitas.png";
import NavbarAuxiliar from "../../components/NavbarAuxiliar/NavbarAuxiliar";

const CadernoGratuito = () => {
  const DUMMY_ROUTES = [
    {
      href: "/apostilas",
      texto: "Apostilas",
    },
    {
      href: "/caderno-questoes",
      texto: "Caderno de questões",
    },
    {
      href: "/caderno-gratuito",
      texto: "Caderno gratuito",
    },
  ];
  return (
    <div id="caderno-gratuito" className="page">
      <NavbarAuxiliar rotas={DUMMY_ROUTES}></NavbarAuxiliar>
      <div className="titulo">
        <h1>QUESTOES GRATUITAS</h1>
      </div>
      <div className="lista">
        <ul>
          <li>
            <p>+ 100 QUESTÕES</p>
          </li>
          <li>
            <p>MATERIAL ATUALIZADO</p>
          </li>
          <li>
            <p>DOWNLOAD GRÁTIS</p>
          </li>
          <li>
            <p>MATERIAL DIGITAL</p>
          </li>
          <li>
            <p>QUESTÕES GABARITADAS</p>
          </li>
          <li>
            <p>QUESTÕES POLICIAIS</p>
          </li>
        </ul>
      </div>
      <div className="caderno">
        <a href="#">
          <section className="questoes-gratuitas">
            <img src={caderno} alt="seja1gm" />
          </section>
        </a>
      </div>
      <div id="botao">
        <button id="baixar"> BAIXAR AGORA</button>
      </div>
    </div>
  );
};

export default CadernoGratuito;
