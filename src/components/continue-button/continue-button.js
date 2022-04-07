import React from "react";
import css from "./continue-button.module.css";

export const ContinueButton = ({ onClick, color }) => {
  const buttonText = "Continue";
  return (
    <button className={css.button} onClick={onClick} style={{ color: color }}>
      {buttonText}
    </button>
  );
};
