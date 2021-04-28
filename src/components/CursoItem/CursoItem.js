import React from "react";

import "./CursoItem.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="headerCard">
        <strong>{props.name}</strong>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <p>{props.description}</p>
        <span>{props.subject}</span>
      </div>
      <div className="footerCard">
        <div className="precoFooter">
          <p>
            De: <h6 className="dashed"> R$ {props.costNormal} </h6>
          </p>
          <p>
            Por:<strong> R$ {props.costPromo} </strong>
          </p>
        </div>
        <button type="button">Comprar o curso</button>
      </div>
    </div>
  );
};

export default Card;
