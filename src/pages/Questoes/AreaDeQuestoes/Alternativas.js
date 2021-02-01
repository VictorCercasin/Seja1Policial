import React from "react";

import "./Alternativas.css";

const Alternativas = (props) => {
  return (
    <div id='alternativas'>
      <li>
        <div class='alternativa'>
          <input type="radio" id="altA" name="alternativa"></input>
          <label for="altA">{`a: ${props.questao.a}`}</label>
        </div>
      </li>

      <li>
        <div class='alternativa'>
          <input type="radio" id="altB" name="alternativa"></input>
          <label for="altB">{`b: ${props.questao.b}`}</label>
        </div>
      </li>
      {props.questao.c != "" && (
        <li>
          <div class='alternativa'>
            <input type="radio" id="altC" name="alternativa"></input>
            <label for="altC">{`c: ${props.questao.c}`}</label>
          </div>
        </li>
      )}
      {props.questao.d != "" && (
        <li>
          <div class='alternativa'>
            <input type="radio" id="altD" name="alternativa"></input>
            <label for="altD">{`d: ${props.questao.d}`}</label>
          </div>
        </li>
      )}
      {props.questao.e != "" && (
        <li>
          <div>
            <input type="radio" id="altE" name="alternativa"></input>
            <label for="altE">{`e: ${props.questao.e}`}</label>
          </div>
        </li>
      )}
    </div>
  );
};

export default Alternativas;
