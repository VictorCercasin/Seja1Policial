import React from "react";

import CursoLista from "./../../components/CursoItem/CursoLista"
import "./Apostilas.css";

const Apostilas = (props) => {
  const DUMMY_APOSTILAS = [
    {
      name: "Apostila PMSP 2021",
      subject: "Versão Digital",
      description: "Descrição do curso bla bla bla bla ",
      cost: "79,90",
      imgSrc: "https://via.placeholder.com/1080x1080",
      imgAlt: "Policia federal",
    },
    {
      name: "Apostila PMSP 2021",
      subject: "Versão Digital",
      description: "Descrição do curso bla bla bla bla ",
      cost: "79,90",
      imgSrc: "https://via.placeholder.com/1080x1080",
      imgAlt: "Policia federal",
    },
    {
      name: "Apostila PMSP 2021",
      subject: "Versão Digital",
      description: "Descrição do curso bla bla bla bla ",
      cost: "79,90",
      imgSrc: "https://via.placeholder.com/1080x1080",
      imgAlt: "Policia federal",
    },
    {
      name: "Apostila PMSP 2021",
      subject: "Versão Digital",
      description: "Descrição do curso bla bla bla bla ",
      cost: "79,90",
      imgSrc: "https://via.placeholder.com/1080x1080",
      imgAlt: "Policia federal",
    },
    {
      name: "Apostila PMSP 2021",
      subject: "Versão Digital",
      description: "Descrição do curso bla bla bla bla ",
      cost: "79,90",
      imgSrc: "https://via.placeholder.com/1080x1080",
      imgAlt: "Policia federal",
    },
    {
      name: "Apostila PMSP 2021",
      subject: "Versão Digital",
      description: "Descrição do curso bla bla bla bla ",
      cost: "79,90",
      imgSrc: "https://via.placeholder.com/1080x1080",
      imgAlt: "Policia federal",
    },
  ];

  return (
    <div className="page-curso">
      <CursoLista cursoLista={DUMMY_APOSTILAS}></CursoLista>
    </div>
  );
};

export default Apostilas;
