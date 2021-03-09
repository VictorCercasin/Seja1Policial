import React from "react";

import Alternativas from "./Alternativas";
import "./Justificativa.css";
import "./Questao.css";
import "./Alternativas.css";

const Justificativa = (props) => {
  const handleProximo = e => {
    e.preventDefault();
    props.manejarJustificativa(true);
  }

  const handleAnterior = e => {
    e.preventDefault();
    props.manejarJustificativa(false);
  }
  const certo = props.statusResposta ? <div id="certo" className='resposta'><h2>Certo!</h2></div> : <div id="errado" className='resposta'><h2>Errado</h2></div>;
  return (
    <div className="flex-center center area-de-questoes">
      {certo}
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
            <Alternativas justificativa questao={props.questoes[props.numeroQuestao]}/>
          </ol>

        </form>
      </div>
      <div id='anterior-próximo'>
        <button id='anterior' onClick={handleAnterior}> Voltar</button>
        <button id='próximo' onClick={handleProximo}> Proxima questao</button>
      </div>
    </div>
  );
};
export default Justificativa;
