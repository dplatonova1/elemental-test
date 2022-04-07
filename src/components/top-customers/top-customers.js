import React from "react";
import { ReactComponent as Plane } from "../icons/plane.svg";
import css from "./top-customers.module.css";
import classnames from "classnames";
import { ProgressBar } from "../progress-bar/progress-bar";

const TopCustomers = ({ totalCustomers, totalRevenue, nextStep }) => {
  const title = "Let's start you off with a win!";
  const customersText = "Total No. of Customers = ";
  const revenuesText = "Revenues Generated = $";

  const handleContinueButton = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={css.container}>
      <div className={css.title}>{title}</div>
      <div className={css.wrap}>
        <Plane className={classnames(css.icon, css.iconUpwards)} />
        <div className={css.cards}>
          <div className={css.card}>
            <div className={css.cardContents}>
              <div className={classnames(css.cardImage, css.customers)}></div>
              <div className={classnames(css.cardImage, css.customers)}></div>
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

      <ProgressBar
        step={"50%"}
        color={"var(--green)"}
        secondaryColor={"var(--light-green)"}
        handleClick={handleContinueButton}
      />
    </div>
  );
};

export default TopCustomers;
