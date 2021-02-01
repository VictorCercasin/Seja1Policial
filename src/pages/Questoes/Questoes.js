import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import BarraDeFiltragem from "./BarraDeFiltragem/BarraDeFiltragem";
import AreaDeQuestoes from "./AreaDeQuestoes/AreaDeQuestoes";
import "./Questoes.css";

const DUMMY_QUESTAO = {
  id: "",
  banca: "INSTITUTO AOCP",
  ano: "2020",
  disciplina: "Direito Administrativo",
  orgao: "Prefeitura de Novo Hamburgo - RS",
  enunciado:
    "Nos termos da Constituição Federal de 1988, o regime próprio de previdência social dos servidores titulares de cargos efetivos terá caráter contributivo e solidário, mediante contribuição do respectivo ente federativo, de servidores ativos, de aposentados e de pensionistas, observados critérios que preservem o equilíbrio financeiro e atuarial. Assim sendo, o servidor abrangido pelo regime próprio de previdência social será aposentado",
  prova:
    "INSTITUTO AOCP - 2020 - Prefeitura de Novo Hamburgo - RS - Auditor Fiscal de Tributos",
  comentario: "",
  "outras-informacoes": "",
  a:
    "Apor incapacidade permanente para o trabalho, no cargo em que estiver investido, quando suscetível de readaptação.",
  b:
    "compulsoriamente, com proventos proporcionais ao tempo de contribuição, aos 70 (setenta) anos de idade, ou aos 75 (setenta e cinco) anos de idade, na forma de Lei Ordinária.",
  c:
    "compulsoriamente, com proventos proporcionais ao tempo de contribuição, aos 65 (sessenta e cinco) anos de idade, ou aos 70 (setenta) anos de idade, na forma de Lei Ordinária.",
  d:
    "no âmbito dos Estados, do Distrito Federal e dos Municípios, na idade mínima estabelecida mediante emenda às respectivas Constituições e Leis Orgânicas, observados o tempo de contribuição e os demais requisitos estabelecidos em Lei do respectivo ente federativo.",
  e:
    "no âmbito da União, aos 62 (sessenta e dois) anos de idade, se mulher, e aos 65 (sessenta e cinco) anos de idade, se homem.",
  correta: "e",
};

function Questoes() {
  return (
    <div id="page-questoes" className="container page">
      <BarraDeFiltragem></BarraDeFiltragem>
      <AreaDeQuestoes questao={DUMMY_QUESTAO}></AreaDeQuestoes>
    </div>
  );
}

export default Questoes;
