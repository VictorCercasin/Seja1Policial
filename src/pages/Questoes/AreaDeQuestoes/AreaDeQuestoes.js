import React, { useState } from "react";

import Justificativa from "./Justificativa";
import Questao from "./Questao";
import "./AreaDeQuestoes.css";

const AreaDeQuestoes = (props) => {
  const [isQuestao, setIsQuestao] = useState(true);
  const [statusResposta, setStatusResposta] = useState(false);
  const [numeroQuestao, setNumeroQuestao] = useState(0);

  function proximaQuestao() {
    if( props.questoes.length > numeroQuestao+1){
      setNumeroQuestao(numeroQuestao+1)
    }
    else{ //fetch mais questoes do servidor

    }
  }
  function manejarQuestao(statusResposta) { //retorna true para correta false para errada
    setStatusResposta(statusResposta);
    setIsQuestao(false);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; 
  }

  function manejarJustificativa(proxima){ //retorna true para proxima, false para anterior
    proxima && (proximaQuestao());
    setIsQuestao(true);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      {isQuestao ? (
        <Questao
          questoes={props.questoes}
          manejarQuestao={manejarQuestao}
          numeroQuestao={numeroQuestao}
        />
      ) : (
        <Justificativa
          statusResposta={statusResposta}
          questoes={props.questoes}
          numeroQuestao={numeroQuestao}
          manejarJustificativa= {manejarJustificativa}
        />
      )}
    </>
  );
};

export default AreaDeQuestoes;
