import React, { useState } from "react";

import "./BarraDeFiltragem.css";

const BarraDeFiltragem = (props) => {
  let anos = [];
  for (var i = 1990; i < 2021; i++) {
    //deve receber os anos disponiveis no banco de dados
    anos.push(i);
  }
  const filterItems = {
    anos: anos,
    disciplina: ["matematica", "portugues", "ingles"],
  };

  return (
    <form id="barra-de-filtragem">
      <DropDownFilter
        filterItem={filterItems.anos}
        label="anos"
      />
      <DropDownFilter
        filterItem={filterItems.disciplina}
        label="Disciplina"
      />
      
      <input
        type="text"
        placeholder="#id"
        className="filter-member"
        id="id-input"
      ></input>
      <input
        type="submit"
        value="Filtrar"
        className="filter-member"
        id="submit-button"
      ></input>
    </form>
  );
};

const DropDownFilter = (props) => {
  const [drawerIsOpen, setDrawer] = useState(false);

  const closeDrawer = () => {
    setDrawer(false);
  };
  const openDrawer = () => {
    setDrawer(true);
  };

  const drawerHandler = (e) => {
    e.preventDefault();
    drawerIsOpen ? closeDrawer() : openDrawer();
  };
  return (
    <div id="dropdown-filter">
      <button className="filter-member" onClick={drawerHandler}>
        {props.label}
      </button>
      {drawerIsOpen && (
        <div>
          <ul id="dropdown-ul">
            {props.filterItem.map((item) => (
              <li id="dropdown-li">
                <button className="filter-member-smaller">{item}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BarraDeFiltragem;
