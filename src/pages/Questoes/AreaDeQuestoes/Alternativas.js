import React from "react";

import "./Alternativas.css";



const Alternativas = props => {
  const handleChange = e => {
    props.onChange(e);
    e.currentTarget.classList.add("selecionada");
  }
  return (
    <div className="lista-alternativas">
      <li>
        <div className="alternativa" onChange={props.onChange}>
          <input type="radio" id="a" name="alternativa" hidden = {props.justificativa}></input>
          <span className='letra'>A</span>
          <label htmlFor="a">{props.questao.a}</label>
        </div>
      </li>
      <li>
        <div className="alternativa" onChange={props.onChange}>
          <input type="radio" id="b" name="alternativa" hidden = {props.justificativa}></input>
          <span className='letra'>B</span>
          <label htmlFor="b">{props.questao.b}</label>
        </div>
      </li>
      {props.questao.c !== "" && (
        <li>
          <div className="alternativa" onChange={props.onChange}>
          <input  type="radio"  id="c" name="alternativa" hidden = {props.justificativa}></input>
            <span className='letra'>C</span>
            <label htmlFor="c">{props.questao.c}</label>
          </div>
        </li>
      )}
      {props.questao.d !== "" && (
        <li>
          <div className="alternativa" onChange={props.onChange}>
          <input type="radio" id="d" name="alternativa" hidden = {props.justificativa}></input>
            <span className='letra' >D</span>
            <label htmlFor="d">{props.questao.d}</label>
          </div>
        </li>
      )}
      {props.questao.e !== "" && (
        <li>
          <div className="alternativa" onChange={props.onChange}>
          <input  type="radio"  id="e"  name="alternativa" hidden = {props.justificativa}></input>
            <span className='letra'>E</span>
            <label htmlFor="e">{props.questao.e}</label>
          </div>
        </li>
      )}
    </div>
  );
};

export default Alternativas;
