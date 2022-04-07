import React from "react";
import { ContinueButton } from "../continue-button/continue-button";
import css from "./progress-bar.module.css";

export const ProgressBar = ({ step, color, secondaryColor, handleClick }) => {
  return (
    <div className={css.container}>
      <ContinueButton onClick={handleClick} color={color} />
      <div className={css.progress}>
        <div className={css.bar} style={{ backgroundColor: secondaryColor }}>
          <div
            className={css.active}
            style={{ width: step, backgroundColor: color }}
          ></div>
          <div className={css.step} style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};
