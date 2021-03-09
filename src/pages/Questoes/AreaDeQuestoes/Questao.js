import React, { useState } from "react";

import Alternativas from "./Alternativas";
import "./Questao.css";

const Questao = (props) => {
  const [submitAllower, setsubmitAllower] = useState(0);
  const [alternativaEscolhida, setAlternativaEscolhida] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    (alternativaEscolhida===props.questoes[props.numeroQuestao].correta) ? (props.manejarQuestao(true)):(props.manejarQuestao(false))
  }
  
  const onChange = (e) => {
    console.log(e.target);
    setAlternativaEscolhida(e.target.id);
    setsubmitAllower(1);
  };

  return (
    <div className="flex-center center area-de-questoes">
      <div id="questao-cabecalho">
        <div className="cabeca-do-cabecalho">
          <h4>id : {props.questoes[props.numeroQuestao].id}</h4>
          <h4>Disciplina : {props.questoes[props.numeroQuestao].disciplina}</h4>
        </div>
        <h3>{props.questoes[props.numeroQuestao].enunciado}</h3>
      </div>
      <div id="questao-corpo">
        <form>
          <ol type="A">
            <Alternativas
              onChange={onChange}
              questao={props.questoes[props.numeroQuestao]}
            ></Alternativas>
          </ol>
          <input disabled = {submitAllower !== 1} type="submit" onClick={onSubmit} value="CONFIRMAR" id="confirmar"></input>
        </form>
      </div>
    </div>
  );
};

export default Questao;
