import React from "react";
import { ProgressBar } from "../progress-bar/progress-bar";

import css from "./top-products.module.css";

const TopProducts = ({ prevStep }) => {
  const title =
    "This is a page made to test prevoius page's Continue button functionality. Thank you for your attention! Have the nicest evening or a productive day!";

  const handleContinueButton = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className={css.container}>
      <div className={css.title}>{title}</div>
      <ProgressBar
        step={"100%"}
        color={"var(--blue)"}
        secondaryColor={"var(--light-blue)"}
        handleClick={handleContinueButton}
      />
    </div>
  );
};

export default TopProducts;
