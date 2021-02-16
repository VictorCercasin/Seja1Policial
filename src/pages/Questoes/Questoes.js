import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

import BarraDeFiltragem from "./BarraDeFiltragem/BarraDeFiltragem";
import AreaDeQuestoes from "./AreaDeQuestoes/AreaDeQuestoes";
import "./Questoes.css";

const DUMMY_QUESTOES = [
  {
    id: "241",
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
  },
  {
    id: "",
    banca: "GUALIMP",
    ano: "2020",
    disciplina: "Direito Administrativo",
    orgao: "Prefeitura de Areal - RJ",
    enunciado:
      "Em consonância com a Constituição Federal de 1988, a segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos seguintes órgãos, EXCETO.",
    prova: "GUALIMP - 2020 - Prefeitura de Areal - RJ - Guarda Municipal",
    comentario: "",
    "outras-informacoes": "",
    a: "Polícias penais estaduais e municipais",
    b: "Polícia ferroviária federal.",
    c: "Polícias civis",
    d: "Corpo de bombeiros militares",
    e: "",
    correta: "a",
  },
  {
    id: "",
    banca: "SELECON",
    ano: "2019",
    disciplina: "Direito Administrativo",
    orgao: "Prefeitura de Niterói - RJ",
    enunciado:
      "O Estatuto dos Servidores Civis Federais (Lei n° 8.112/90), em seu art. 143, caput, dispõe que “a autoridade que tiver ciência de irregularidade no serviço público é obrigada a promover a sua apuração imediata, mediante sindicância (...), assegurada ao acusado ampla defesa”. À vista disso, essa norma jurídica, que impõe à autoridade administrativa o dever de apurar eventual irregularidade, inclusive com a possibilidade de rever atos administrativos praticados pelos seus subordinados, tem como fundamento o poder:",
    prova:
      "SELECON - 2019 - Prefeitura de Niterói - RJ - Guarda Civil Municipal",
    comentario: "",
    a: "regulamentar",
    b: "discricionário",
    c: "hierárquico",
    d: "temporal",
    e: "formal",
    correta: "c",
  },
];

function Questoes() {
  return (
    <div id="page-questoes" className="container page">
      <BarraDeFiltragem></BarraDeFiltragem>
      <AreaDeQuestoes questoes={DUMMY_QUESTOES}></AreaDeQuestoes>
    </div>
  );
}

export default Questoes;
