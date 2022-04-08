import React, { Component } from "react";

import TopCustomers from "../top-customers/top-customers";
import TopProducts from "../top-products/top-products";
import css from "./report.module.css";
import { ProgressBar } from "../progress-bar/progress-bar";

export default class Report extends Component {
  state = {
    data: [],
    step: 1,
    totalCustomers: 0,
    totalRevenue: 0,
    highlightedSales: "",
    quarterlyOverviews: "",
    purchaseMarkers: "",
    colors: ["green", "blue", "yellow"],
  };

  componentDidMount() {
    this.getFetchUsers();
  }

  getFetchUsers() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch(
          "https://my-json-server.typicode.com/dplatonova1/elemental-test-base/sales"
        )
          .then((res) => res.json())
          .then((result) => {
            this.setState({ data: result });
            this.getTotalCustomers();
            this.getTotalRevenue();
          })
          .catch(console.log);
      }
    );
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  getTotalCustomers() {
    const { data } = this.state;

    let array = data.map((item) => {
      return item.customer_id;
    });

    this.setState({ totalCustomers: [...new Set(array)].length });
  }

  getTotalRevenue() {
    const { data } = this.state;
    let array = data.map((item) => {
      return Number(item.net_sales);
    });

    this.setState({
      totalRevenue: array.reduce((acc, value) => {
        return acc + value;
      }),
    });
  }

  render() {
    const {
      step,
      totalCustomers,
      totalRevenue,
      highlightedSales,
      quarterlyOverviews,
      purchaseMarkers,
      colors,
    } = this.state;

    switch (step) {
      case 1:
        return (
          <div
            className={css.container}
            style={{ backgroundColor: `var(--light-${colors[step - 1]})` }}
          >
            <TopCustomers
              totalCustomers={totalCustomers}
              totalRevenue={totalRevenue.toString().split(".")[0]}
            />
            <ProgressBar
              step={"50%"}
              color={colors[step - 1]}
              handleClick={() => this.nextStep()}
            />
          </div>
        );
      case 2:
        return (
          <div
            className={css.container}
            style={{ backgroundColor: `var(--light-${colors[step - 1]})` }}
          >
            <TopProducts
              highlightedSales={highlightedSales}
              quarterlyOverviews={quarterlyOverviews}
              purchaseMarkers={purchaseMarkers}
            />
            <ProgressBar
              step={"100%"}
              color={colors[step - 1]}
              handleClick={() => {
                this.prevStep();
              }}
            />
          </div>
        );

      default:
      // do nothing
    }
  }
}
