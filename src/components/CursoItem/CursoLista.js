import React from "react";

import CursoItem from "./CursoItem";
import "./CursoLista.css";

const CursoLista = (props) => {
  return (
    <ul className="users-list">
      {props.cursoLista.map((curso) => (
        <CursoItem
          name={curso.name}
          subject={curso.subject}
          description={curso.description}
          costNormal={curso.costNormal}
          costPromo={curso.costPromo}
          imgSrc={curso.imgSrc}
          imgAlt={curso.imgAlt}
        />
      ))}
    </ul>
  );
};

export default CursoLista;
