import React from "react";
import { Link } from "react-router-dom";

import ItemADM from "./ItemADM.js";
import "./AreaDoAdministrador.css";

const AreaDoAdministrador = (props) => {
  const ADMPagesList = [
    { iten: "Questoes", link: "link1" },
    { iten: "Apostilas", link: "link2" },
    { iten: "Item 3", link: "link3" },
    { iten: "Item 4", link: "link4" },
  ];
  return (
    <div id="area-administrador" className="container page">
      <div id="adm-container-usefulArea" className="container-useful-area">
        <header id="adm-header"><h2>Área do administrador</h2></header>
        <div id="adm-inner-container">
          <div id="adm-nav-bar">
            <ul>
              {ADMPagesList.map((iten, index)=>(
                <li key={index}>
                  <button id="adm-nav-bar-button">
                    {iten.iten}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="containerMainContent">

          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDoAdministrador;
