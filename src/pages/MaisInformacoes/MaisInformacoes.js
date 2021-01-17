import React from 'react'

import imagem1 from '../../assets/images/Seja1gm.png'
import imagem2 from '../../assets/images/Seja1PMPR3.png'
import imagem3 from '../../assets/images/LogoCodifica.png'
import imagem4 from '../../assets/images/Facebook.png'
import imagem5 from '../../assets/images/Instagram.png'
import imagem6 from '../../assets/images/Whatsapp.png'
import "./MaisInformacoes.css";

const MaisInformacoes = () => {
    return (
        <div className='page'>
            <div className="quem-somos">
                <h1>
                    Quem somos?
                </h1>
                <p>Guarda Municipal desde 2014, ao longo desses 6 anos, vivenciados no serviço operacional, trago um pouco das minhas experiencias e ponto de vista, sobre
                Guarda Municipal. Nosso ”lema” é trazer conteúdo na área de segurança pública, materiais para estudos, e dicas para quem almeja entrar para carreira policial.
                Conteúdo de qualidade, para agregar não apenas no seu conhecimento, mais para ”Turbinar” seus estudos. Queremos facilitar sua vida, otimizar seu tempo,
                te entregar conteúdo, para que possa estudar aonde estiver.
                </p>
            </div>
            <div className="parceiros">
                <h1>Parceiros</h1>
                <div className="flex-centralizado">
                    <a href="https://www.facebook.com/Seja1GCM"><section className="parceiro-imagem"><img src={imagem1} alt="seja1gm" /></section></a>
                    <a href="https://www.facebook.com/Seja1PMPR-101687504638522"><section className="parceiro-imagem"><img src={imagem2} alt="seja1pm" /></section></a>
                    <a href="http://codificajr.com.br/"><section className="parceiro-imagem"><img src={imagem3} alt="codifica" /></section></a>
                </div>
            </div>
            <div className="contatos">
                <h1>Contatos</h1>
                <div className="flex-centralizado">
                    <a href="https://www.facebook.com/Seja1PMPR-101687504638522"><section className="contato-imagem"><img src={imagem4} alt="seja1gm" /></section></a>
                    <a><section className="contato-imagem"><img src={imagem5} alt="seja1gm" /></section></a>
                    <a><section className="contato-imagem"><img src={imagem6} alt="seja1gm" /></section></a>
                </div>
            </div >
        </div>
    )


}

export default MaisInformacoes;