import React, { useState } from "react";

import Alternativas from "./Alternativas";
import "./Questao.css";

const Questao = (props) => {
    const [numeroQuestao, next] = useState(0);

    const onSubmit =  e  => {
      e.preventDefault();
      if(props.questoes.length > (numeroQuestao + 1)){
        next(numeroQuestao + 1);
      }
      else{
        next(0);
      }
      
    }
  return (
    <div id="area-de-questoes" className="flex-center center">
      <div id="questao-cabecalho">
        <div className="cabeca-do-cabecalho">
          <h4>ID : {props.questoes[numeroQuestao].id}</h4>
          <h4>Disciplina : {props.questoes[numeroQuestao].disciplina}</h4>
        </div>
        <h3>{props.questoes[numeroQuestao].enunciado}</h3>
      </div>
      <div id="questao-corpo">
        <form>
          <ol type="A">
            <Alternativas
              questao={props.questoes[numeroQuestao]}
            ></Alternativas>
          </ol>
          <input
            type="submit"
            onClick={onSubmit}
            value="CONFIRMAR"
            id="confirmar"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Questao;
