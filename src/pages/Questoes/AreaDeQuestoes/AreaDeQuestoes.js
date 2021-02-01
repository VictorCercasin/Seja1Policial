import React, { useState } from "react";

import Alternativas from "./Alternativas";
import "./AreaDeQuestoes.css";

const AreaDeQuestoes = (props) => {
  return (
    <div id="area-de-questoes" className="flex-center center">
      <div id="questao-cabecalho">
        <h4 id="disciplina">{props.questao.disciplina}</h4>
        <h3 className="center">{props.questao.enunciado}</h3>
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
