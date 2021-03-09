import React from "react";

import "./Alternativas.css";

const handleChange = e => {
  e.target.classList.toggle("selecionada")
  
}

const Alternativas = props => {
  return (
    <div className="lista-alternativas">
      <li>
        <div className="alternativa">
          {props.justificativa ||<input type="radio" id="a" name="alternativa" onChange={(e) => props.onChange(e)} ></input>}
          <span className='letra'>A</span>
          <label htmlFor="a">{props.questao.a}</label>
        </div>
      </li>
      <li>
        <div className="alternativa">
          {props.justificativa || <input type="radio" id="b" name="alternativa" onChange={props.onChange} ></input>}
          <span className='letra'>B</span>
          <label htmlFor="b">{props.questao.b}</label>
        </div>
      </li>
      {props.questao.c !== "" && (
        <li>
          <div className="alternativa">
          {props.justificativa ||<input  type="radio"  id="c" name="alternativa"  onChange={props.onChange} ></input>}
            <span className='letra'>C</span>
            <label htmlFor="c">{props.questao.c}</label>
          </div>
        </li>
      )}
      {props.questao.d !== "" && (
        <li>
          <div className="alternativa">
          {props.justificativa ||<input type="radio" id="d" name="alternativa" onChange={props.onChange} ></input>}
            <span className='letra' >D</span>
            <label htmlFor="d">{props.questao.d}</label>
          </div>
        </li>
      )}
      {props.questao.e !== "" && (
        <li>
          <div className="alternativa">
          {props.justificativa ||<input  type="radio"  id="e"  name="alternativa"  onChange={props.onChange}></input>}
            <span className='letra'>E</span>
            <label htmlFor="e">{props.questao.e}</label>
          </div>
        </li>
      )}
    </div>
  );
};

export default Alternativas;
