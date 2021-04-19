import React from "react";
import "./NavbarAuxiliar.css";
import Route from "./Route";

const NavbarAuxiliar = (props) => {
  return (
    <ul className="ul-da-rota-auxiliar">
      {props.rotas.map((rota) => (
        <Route href={rota.href} texto={rota.texto}></Route>
      ))}
    </ul>
  );
};

export default NavbarAuxiliar;
