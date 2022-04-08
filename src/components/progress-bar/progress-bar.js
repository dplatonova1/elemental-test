import React from "react";
import { ContinueButton } from "../continue-button/continue-button";
import css from "./progress-bar.module.css";

export const ProgressBar = ({ step, color, handleClick }) => {
  return (
    <div className={css.container}>
      <ContinueButton onClick={handleClick} color={`var(--${color})`} />
      <div className={css.progress}>
        <div
          className={css.bar}
          style={{ backgroundColor: `var(--light-${color})` }}
        >
          <div
            className={css.active}
            style={{ width: step, backgroundColor: `var(--${color})` }}
          ></div>
          <div
            className={css.step}
            style={{ backgroundColor: `var(--${color})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
