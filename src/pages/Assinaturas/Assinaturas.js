import React from "react";
import "./Assinaturas.css";

const Assinaturas = () => {
  const ItemList = [
    {
      titulo: "Assinatura Grátis",
      textoHabilitado: "Acesso a 5 questões por dia.",
      textoDesabilitado:
        "Desconto nos PDFs.\nLer diversos PDFs on-line.\nEstatisticas dos seus estudos.\nBaixar os PDFs.\n",
      link: `/carrinho`,
      preco: "R$ 0,00/mês",
    },
    {
      titulo: "Assinatura Standart",
      textoHabilitado:
        "Acesso a 10 questões por dia.\nDesconto de 10% nos PDFs.",
      textoDesabilitado:
        "Ler diversos PDFs on-line.\nEstatisticas dos seus estudos.\nBaixar os PDFs.\n",
      link: `/carrinho`,
      preco: "R$ 20,00/mês",
    },
    {
      titulo: "Assinatura Premimum",
      textoHabilitado:
        "Acesso a 20 questões por dia.\nDesconto de 15% nos PDFs.\nLer diversos PDFs on-line.\n",
      textoDesabilitado: "Estatisticas dos seus estudos.\nBaixar os PDFs.\n",
      link: `/carrinho`,
      preco: "R$ 30,00/mês",
    },
    {
      titulo: "Assinatura Expert",
      textoHabilitado:
        "Acesso a 50 questões por dia.\nDesconto de 25% nos PDFs.\nLer diversos PDFs on-line.\nEstatisticas dos seus estudos.",
      textoDesabilitado: "Baixar os PDFs.\n",
      link: `/carrinho`,
      preco: "R$ 50,00/mês",
    },
    {
      titulo: "Assinatura Atirador de Elite",
      textoHabilitado:
        "Acesso ilimitado a questões.\nDesconto de 50% nos PDFs.\nLer diversos PDFs on-line.\nEstatisticas dos seus estudos.\nBaixar os PDFs.\n",
      textoDesabilitado: "",
      link: `/carrinho`,
      preco: "R$ 100,00/mês",
    },
  ];

  return (
    <section className="bodyAssinatura">
      <div className="header">
        <h1 className="h1Assinatura">Assinaturas</h1>
      </div>
      <ul className="listaAssinatura">
        {ItemList.map((item, index) => (
          <li className="itemAssinatura" key={index.toString()}>
            <h4 className="h4Assinatura">{item.titulo}</h4>
            <p className="pAssinatura">{item.textoHabilitado}</p>
            <span className="spanAssinatura">{item.textoDesabilitado}</span>
            <button className="btnAssinatura" href={item.link}>
              {item.preco}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Assinaturas;
