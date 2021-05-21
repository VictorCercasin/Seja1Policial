import React, { useEffect, useState } from "react";

import UsefulAreaContainer from "./../../components/UsefulAreaContainer/UsefulAreaContainer";
import "./Estatisticas.css";

const DUMMY_DATA = [
  {
    nome: "total",
    total: 100,
    corretas: 50,
  },
  {
    nome: "disc1",
    total: 30,
    corretas: 10,
  },
  {
    nome: "disc2",
    total: 10,
    corretas: 7,
  },
  {
    nome: "disc3",
    total: 20,
    corretas: 16,
  },
  {
    nome: "disc4",
    total: 10,
    corretas: 3,
  },
  {
    nome: "disc5",
    total: 20,
    corretas: 15,
  },
];

const Estatisticas = () => {
  const [escolhido, setEscolhido] = useState("");

  const onChange = e => {
    setEscolhido(e.target.value);
  }

  return (
    <div className="page" id="page-estatisticas">
      <UsefulAreaContainer title="Estatísticas">
        <div id="estatisticas-radio-container">
          <form>
            <ul>
              {DUMMY_DATA.map((iten, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    id="estatisticar-radio-input"
                    name="estatisticas-radio"
                    onChange={onChange}
                    value={index}
                  ></input>
                  <label for="estatisticar-radio-input">{iten.nome}</label>
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div id="estatisticas-chart-container"></div>
      </UsefulAreaContainer>
    </div>
  );
};

export default Estatisticas;
