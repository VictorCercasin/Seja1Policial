import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';

import BarraDeFiltragem from "./BarraDeFiltragem/BarraDeFiltragem";
import Input from "./../../components/UIElements/Input";
import "./Questoes.css";

function Questoes() {
    return (
        <div id="page-questoes" className="container page">
            <BarraDeFiltragem></BarraDeFiltragem>
        </div>
    )
}

export default Questoes;