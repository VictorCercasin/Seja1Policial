import React from "react";

import Carrinho from "./../../../pages/Carrinho/Carrinho";
import AreaDoAdministrador from "./../../../pages/AreaDoAdministrador/AreaDoAdministrador";
import MeusCursos from "./../../../pages/MeusCursos/MeusCursos";
import MinhaConta from "./../../../pages/MinhaConta/MinhaConta";
import Button from "./../../UIElements/Button";
import "./DrawerLinks.css";

const DrawerLinks = (props) => {
  return (
    <div className="drawer-links">
      <ul>
        <li><Button to='/meus-cursos' id='button'>Meus Cursos</Button></li>
        <li><Button to='/minha-conta'id='button'>Minha conta</Button></li>
        <li><Button to='/carrinho'id='button'>Carrinho</Button></li>
        <li><Button to='/area-do-administrador'id='button'>Area do Administrador</Button></li>

      </ul>
    </div>
  );
};

export default DrawerLinks;
