import React from 'react';
//import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';
import CursoItem from '../../components/CursoItem/CursoItem';
import './CursoCompleto.css';

const CursoCompleto = () => {
    return (
        <div id="page-curso" className="container">
            <PageHeader search=""></PageHeader>
            <div>espaço</div>
            <CursoItem name="Nome do Curso" subject="Policia Civil" description="Descrição do curso bla bla bla bla " cost="79,90" imgSrc="https://via.placeholder.com/1080x1080" imgAlt="Policia federal" />
            <CursoItem name="Policia Rodoviária federal" subject="Pdf de 13 páginas + 120 questões de multipla escolha" description="Curso completo para ovter exito no concurso de policia rodoviário federal" cost="139,90" imgSrc="https://i.pinimg.com/564x/57/01/9e/57019ea5466cdd42c1758b959dd60cae.jpg" imgAlt="PRF" />
            <CursoItem name="Guarda Municipal" subject="Pdf de 30 páginas + 60 questões de multipla escolha" description="Tudo que você precisa saber para se tornar um GM" cost="149,90" imgSrc="https://pbs.twimg.com/profile_images/753795189/OgAAAMvVOF5GiAHm2vwMCGEoVO5yX4bUS9DC3euHRlWilkBdBLkOcEsB_8mlwP49hTSVjYKkleiCjSQjYZ99ME0DvQMAm1T1UGDNcIcdusv1rWrCTk16BI_3bTYP_400x400.jpg" imgAlt="Guarda Municipal" />

        </div >
    )
}

export default CursoCompleto;