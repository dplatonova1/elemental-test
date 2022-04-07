import React, { Component } from "react";

import TopCustomers from "./top-customers/top-customers";
import TopProducts from "./top-products/top-products";

export default class Report extends Component {
  state = {
    step: 1,
    totalCustomers: 1925,
    totalRevenue: 28601.51,
    highlightedSales: "",
    quarterlyOverviews: "",
    purchaseMarkers: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  render() {
    const {
      step,
      totalCustomers,
      totalRevenue,
      highlightedSales,
      quarterlyOverviews,
      purchaseMarkers,
    } = this.state;

    switch (step) {
      case 1:
        return (
          <>
            <TopCustomers
              totalCustomers={totalCustomers}
              totalRevenue={totalRevenue}
              nextStep={this.nextStep}
            />
          </>
        );
      case 2:
        return (
          <>
            <TopProducts
              prevStep={this.prevStep}
              highlightedSales={highlightedSales}
              quarterlyOverviews={quarterlyOverviews}
              purchaseMarkers={purchaseMarkers}
            />
          </>
        );

      default:
      // do nothing
    }
  }
}
