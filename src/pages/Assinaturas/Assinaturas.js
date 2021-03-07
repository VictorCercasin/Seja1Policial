import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Assinaturas.css";

const Assinaturas = () => {
  const ItemList = [
    {
      titulo: "Assinatura grátis",
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
      titulo: "Assinatura Gold",
      textoHabilitado:
        "Acesso a 20 questões por dia.\nDesconto de 15% nos PDFs.\nLer diversos PDFs on-line.\n",
      textoDesabilitado: "Estatisticas dos seus estudos.\nBaixar os PDFs.\n",
      link: `/carrinho`,
      preco: "R$ 30,00/mês",
    },
    {
      titulo: "Assinatura Platinum",
      textoHabilitado:
        "Acesso a 50 questões por dia.\nDesconto de 25% nos PDFs.\nLer diversos PDFs on-line.\nEstatisticas dos seus estudos.",
      textoDesabilitado: "Baixar os PDFs.\n",
      link: `/carrinho`,
      preco: "R$ 50,00/mês",
    },
    {
      titulo: "Assinatura Elite",
      textoHabilitado:
        "Acesso ilimitado a questões.\nDesconto de 50% nos PDFs.\nLer diversos PDFs on-line.\nEstatisticas dos seus estudos.\nBaixar os PDFs.\n",
      textoDesabilitado: "",
      link: `/carrinho`,
      preco: "R$ 100,00/mês",
    },
  ];

  return (
    <section className="body">
      <div className="header">
        <h1>Assinaturas</h1>
      </div>
      <ul className="lista">
        {ItemList.map((item, index) => (
          <li className="item" key={index.toString()}>
            <h4>{item.titulo}</h4>
            <p>{item.textoHabilitado}</p>
            <span>{item.textoDesabilitado}</span>
            <button href={item.link}>{item.preco}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Assinaturas;
