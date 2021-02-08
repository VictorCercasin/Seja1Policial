import React from "react";

import "./Input.css";

const Input = props => {
    const element = props.input ? (
        <input id={props.id} placeholder={props.placeholder} title={props.title}></input>
    ) : (
            <textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder} title={props.title}></textarea>
        )
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    )
}

export default Input;