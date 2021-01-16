import React from "react";

import CursoItem from "./CursoItem";
import "./CursoItem.css";

const CursoLista = props => {
    return (
        <ul className="users-list">
          {props.cursoLista.map(curso => (
            <CursoItem
            name={curso.name}
            subject={curso.subject}
            description={curso.description}
            cost={curso.cost}
            imgSrc={curso.imgSrc}
            imgAlt={curso.imgAlt}
            />
          ))}
        </ul>
      );
    };

export default CursoLista;