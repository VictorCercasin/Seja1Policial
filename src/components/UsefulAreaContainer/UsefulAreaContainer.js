import React from "react";

import './UsefulAreaContainer.css';

const UsefulAreaContainer = (props) => {
  return (
    <div id="container-useful-area">
      <header id="useful-area-header">
        <h2>{props.title}</h2>
      </header>
      <div id="useful-area-inner-container">
        {props.children}
      </div>
    </div>
  );
};

export default UsefulAreaContainer;
