import React, { Component } from "react";

const UpdatedComponent = OriginalComponent => {
  class withCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: this.props.product.quantity,
        total: 0,
        stock: this.props.product.stock
      };
    }
    increment = () => {
      if (this.state.stock > 0) {
        this.setState(prevState => {
          return {
            quantity: prevState.quantity + 4,
            stock: prevState.stock - 4
          };
        });
      }
    };

    decrement = () => {
      if (this.state.quantity > 0) {
        this.setState(prevState => {
          return {
            quantity: prevState.quantity - 4,
            stock: prevState.stock + 4
          };
        });
      }
    };

    render() {
      const { quantity, total, stock, increment, decrement } = this.state;
      const props = {quantity: quantity, total: total, stock:stock, increment:increment, decrement:decrement };
      return <OriginalComponent {...props} />;
    }
  }
  return withCounter;
};

export default UpdatedComponent;
