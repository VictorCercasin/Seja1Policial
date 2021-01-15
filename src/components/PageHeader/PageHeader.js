import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.bmp";

import './PageHeader.css';



const PageHeader = (props) => {
    return (ReactDOM.createPortal(
        <div className="page-header">
            <img src={Logo} alt="logo" />
            <Link to="/" className="inicio">
                SEJA1POLICIAL
            </Link>
            <ul>
                <li><Link to="/cursos-completos" className="cursos-completos">
                    Cursos
                </Link></li>
                <li><Link to="/questoes" className="questoes">
                    Questões
                </Link></li>
                <li><Link to="/mais-info" className="mais-info">
                    Informações
                </Link></li>
                <li><Link to="/assinaturas" className="assinaturas">
                    Assinaturas
                </Link></li>
            </ul>
        </div>,
        document.getElementById('header-hook'))
    )
}



export default PageHeader;