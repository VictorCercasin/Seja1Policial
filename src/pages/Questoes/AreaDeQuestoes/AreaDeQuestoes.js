import React, { useState } from "react";

import Justificativa from "./Justificativa";
import Questao from "./Questao";
import "./AreaDeQuestoes.css";

const AreaDeQuestoes = (props) => {
  const [isQuestao, setIsQuestao] = useState(true);
  const handleQuestaoSubmit = () =>{
    setIsQuestao(false);
  }
  return (
    <>
      {isQuestao ? <Questao questoes={props.questoes}></Questao> : <Justificativa></Justificativa>}
    </>
  );
};

export default AreaDeQuestoes;
