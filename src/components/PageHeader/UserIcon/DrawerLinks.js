import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faUserAlt,
  faShoppingCart,
  faUserTag,
  faSignOutAlt,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";

import Button from "./../../UIElements/Button";
import { AuthContext } from "./../../context/auth-context";
import "./DrawerLinks.css";

const DrawerLinks = (props) => {
  const auth = useContext(AuthContext);


  const cursosIcon = <FontAwesomeIcon icon={faBookOpen} className="drawer-icons" />;
  const userIcon = <FontAwesomeIcon icon={faUserAlt} className="drawer-icons" />;
  const carrinhoIcon = <FontAwesomeIcon icon={faShoppingCart} className="drawer-icons" />;
  const admIcon = <FontAwesomeIcon icon={faUserTag} className="drawer-icons" />;
  const sairIcon = <FontAwesomeIcon icon={faSignOutAlt} className="drawer-icons" />;
  const statsIcon = <FontAwesomeIcon icon={faChartPie} className="drawer-icons" />;

  return (
    <div className="drawer-links">
      <ul>
        {/* <li>
          <Button to="/login" id="button">
            Login
          </Button>
        </li> */}
        {auth.loginStatus === "admin" && 
          <li>
            <Button
              to="/area-do-administrador"
              id="button"
              className="inline-container-drawer"
            >
              {admIcon}
              Administrador
            </Button>
          </li>}
          <li>
            <Button
              to="/minha-conta"
              id="button"
              className="inline-container-drawer"
            >
              {userIcon}
              Minha conta
            </Button>
          </li>
        <li>
            <Button
              to="/estatisticas"
              id="button"
              className="inline-container-drawer"
            >
              {statsIcon}
              Estatísticas
            </Button>
        </li>
        <li>
          <Button
            to="/meus-cursos"
            id="button"
            className="inline-container-drawer"
          >
            {cursosIcon}
            Meus Cursos
          </Button>
        </li>

        <li>
          <Button
            to="/carrinho"
            id="button"
            className="inline-container-drawer"
          >
            {carrinhoIcon}
            Carrinho
          </Button>
        </li>

        <li>
          <Button
            onClick={() => auth.logout()}
            id="button"
            className="inline-container-drawer"
          >
            {sairIcon}
            Sair
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default DrawerLinks;
