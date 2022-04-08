import React from "react";

import css from "./top-products.module.css";

const TopProducts = () => {
  const title =
    "This is a page made to test prevoius page's Continue button functionality. Thank you for your attention! Have the nicest evening or a productive day!";

  return (
    <div className={css.container}>
      <div className={css.title}>{title}</div>
    </div>
  );
};

export default TopProducts;
