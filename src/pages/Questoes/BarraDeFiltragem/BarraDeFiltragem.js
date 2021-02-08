import React from "react";

import DropDownFilter from "./DropDownFilter";
import "./BarraDeFiltragem.css";

const DUMMY_FILTER_SET_ANO = [
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
];
const DUMMY_FILTER_SET_DISCIPLINA = [
  "Matematica",
  "Filosofia",
  "Portugues",
  "Direito",
  "Sociologia"
];

const BarraDeFiltragem = (props) => {
  return (
    <div id="barra-de-filtragem">
      <DropDownFilter filterSet={DUMMY_FILTER_SET_DISCIPLINA} className="seletor">
        Selecionar Disciplina
      </DropDownFilter>
      <DropDownFilter filterSet={DUMMY_FILTER_SET_ANO} className="seletor">
        Selecionar Ano
      </DropDownFilter>
      <input className="input-buscar"
        placeholder="Digite a palavra chave"
      ></input>
      <input className="submit-buscar"
        type="submit"
        value="Filtrar"
      ></input>
    </div>
  );
};

export default BarraDeFiltragem;
