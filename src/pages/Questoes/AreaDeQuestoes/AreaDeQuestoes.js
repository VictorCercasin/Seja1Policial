import React, { useState } from "react";

import Alternativas from "./Alternativas";
import "./AreaDeQuestoes.css";

const AreaDeQuestoes = (props) => {
  return (
    <div id="area-de-questoes" className="flex-center center">
      <div id="questao-cabecalho">
        <div className="cabeca-do-cabecalho">
          <h4>ID : {props.questao.id}</h4>
          <h4>Disciplina : {props.questao.disciplina}</h4>
        </div>
        <h3>{props.questao.enunciado}</h3>
      </div>
      <div id="questao-corpo">
        <form>
          <ol type="A">
            <Alternativas questao={props.questao}></Alternativas>
          </ol>
        </form>
      </div>
    </div>
  );
};

export default AreaDeQuestoes;
