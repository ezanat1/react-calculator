import React from "react";
import "./Button.css";

// Check to see if it is an operator or a number
const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};
export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
