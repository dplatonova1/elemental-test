import React from "react";
import { ReactComponent as Plane } from "../icons/plane.svg";
import css from "./top-customers.module.css";
import classnames from "classnames";

const TopCustomers = ({ totalCustomers, totalRevenue }) => {
  const title = "Let's start you off with a win!";
  const customersText = "Total No. of Customers = ";
  const revenuesText = "Revenues Generated = $";

  return (
    <div className={css.container}>
      <div className={css.title}>{title}</div>
      <div className={css.wrap}>
        <Plane className={classnames(css.icon, css.iconUpwards)} />
        <div className={css.cards}>
          <div className={css.card}>
            <div className={css.cardContents}>
              <div className={classnames(css.cardImage, css.customers)}></div>
            </div>
            <div className={css.cardTitle}>
              {customersText}
              {totalCustomers}
            </div>
          </div>
          <div className={css.card}>
            <div className={css.cardContents}>
              <div className={classnames(css.cardImage, css.revenue)}></div>
            </div>
            <div className={css.cardTitle}>
              {revenuesText}
              {totalRevenue}
            </div>
          </div>
        </div>
        <Plane className={classnames(css.icon, css.iconDownwards)} />
      </div>
    </div>
  );
};

export default TopCustomers;
