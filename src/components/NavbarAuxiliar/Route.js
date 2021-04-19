import React from "react";

import "./Route.css";

const Route = (props) => {
  return (
    <li className="li-da-rota-auxiliar">
      <a href={props.href} className="a-da-rota-auxiliar">
        {props.texto}
      </a>
    </li>
  );
};

export default Route;
