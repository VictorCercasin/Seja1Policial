import React, { useState } from "react";

import Alternativas from "./Alternativas";
import "./Questao.css";

const Questao = (props) => {
  const [submitAllower, setsubmitAllower] = useState(0);
  const [alternativaEscolhida, setAlternativaEscolhida] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alternativaEscolhida === props.questoes[props.numeroQuestao].correta
      ? props.manejarQuestao({
          statusResposta: true,
          alternativaEscolhida: alternativaEscolhida,
        })
      : props.manejarQuestao({
          statusResposta: false,
          alternativaEscolhida: alternativaEscolhida,
        });
  };

  const onChange = (e) => {
    setsubmitAllower(1);
    setAlternativaEscolhida(e.target.id);
    document.getElementById("a").parentElement.classList.remove("selecionada");
    document.getElementById("b").parentElement.classList.remove("selecionada");
    document.getElementById("c") &&
      document
        .getElementById("c")
        .parentElement.classList.remove("selecionada");
    document.getElementById("d") &&
      document
        .getElementById("d")
        .parentElement.classList.remove("selecionada");
    document.getElementById("e") &&
      document
        .getElementById("e")
        .parentElement.classList.remove("selecionada");

    e.currentTarget.classList.add("selecionada");
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
          <ol className="ol" type="A">
            <Alternativas
              onChange={onChange}
              questao={props.questoes[props.numeroQuestao]}
            ></Alternativas>
          </ol>
          <input
            disabled={submitAllower !== 1}
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
