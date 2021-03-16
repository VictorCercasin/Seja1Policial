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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const getFilterState = state => {

  }

  return (
    <div id="container">
      <form id="barra-de-filtragem" onSubmit={submitHandler}>
        <DropDownFilter filterItem={filterItems.anos} label="Anos" />
        <DropDownFilter filterItem={filterItems.disciplina} label="Disciplina"/>

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
    </div>
  );
};

const DropDownFilter = (props) => {
  const [drawerIsOpen, setDrawer] = useState(false);
  const [txtBotao, setTxtBotao] = useState(props.label);

  const closeDrawer = () => {
    setDrawer(false);
  };
  const openDrawer = () => {
    setDrawer(true);
  };

  const drawerHandler = e => {
    e.preventDefault();
    drawerIsOpen ? closeDrawer() : openDrawer();
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setTxtBotao(e.target.innerHTML);
    closeDrawer();
  };


  return (
    <div id="dropdown-filter" onMouseLeave={closeDrawer}>
      <button className="filter-member" onClick={drawerHandler}>
        {txtBotao }
        <i className="fas fa-chevron-down" id="seta"/>
      </button>
      {drawerIsOpen && (
        <div>
          <ul id="dropdown-ul" >
            <li id="dropdown-li">
              <button className="filter-member-smaller filter-member bold" onClick={clickHandler}>
              {props.label}
              </button>
            </li>
            {props.filterItem.map((item) => (
              <li id="dropdown-li" key={item.toString()}>
                <button
                  className="filter-member-smaller filter-member"
                  onClick={clickHandler}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BarraDeFiltragem;
