import React from "react";
import "./style.css";

const PrimaryButton = ({ clickHandler, buttonText, style }) => {
  return (
    <button className="buttonColored" type="button" onClick={clickHandler} style={{ ...style }}>
      <span className="buttonText">{buttonText}</span>
    </button>
  );
};

export default PrimaryButton;
