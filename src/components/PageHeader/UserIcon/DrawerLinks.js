import React from "react";

import Carrinho from "./../../../pages/Carrinho/Carrinho";
import AreaDoAdministrador from "./../../../pages/AreaDoAdministrador/AreaDoAdministrador";
import MeusCursos from "./../../../pages/MeusCursos/MeusCursos";
import MinhaConta from "./../../../pages/MinhaConta/MinhaConta";
import Button from "./../../UIElements/Button";
import "./DrawerLinks.css";

const DrawerLinks = (props) => {
  return (
    <ul id='drawer-links'>
      <li><Button to='/meus-cursos'>Meus Cursos</Button></li>
      <li><Button to='/minha-conta'>Minha conta</Button></li>
      <li><Button to='/carrinho'>Carrinho</Button></li>
      <li><Button to='/area-do-administrador'>Area do Administrador</Button></li>

    </ul>
  );
};

export default DrawerLinks;
