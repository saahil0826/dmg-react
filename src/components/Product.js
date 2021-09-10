import React, { Component } from "react";

import withCounter from './withCounter';

class Product extends Component {
  constructor(props) {
    super(props);
//     this.state = {
//       quantity: this.props.product.quantity,
//       total: 0,
//       stock: this.props.product.stock
//     };
  }

  // increase
//   increment = () => {
//     if (this.state.stock > 0) {
//       this.setState(prevState => {
//         return {
//           quantity: prevState.quantity + 4,
//           stock: prevState.stock - 4
//         };
//       });
//     }
//   };

//   decrement = () => {
//     if (this.state.quantity > 0) {
//       this.setState(prevState => {
//         return {
//           quantity: prevState.quantity - 4,
//           stock: prevState.stock + 4
//         };
//       });
//     }
//   };

  render() {
    const { name, price, id, vehicleType, discount } = this.props.product;
    const { stock } = this.props;

    return (
      <>
        <div className="bg-container">
          <div className="rows lg">
            <div className="name">
              <h1>{name}</h1>
            </div>
            <div className="text">
              <img src={require("../resources/approved.jpg")} alt="" />
            </div>
            <div className="text">
              <span>{id}</span>
              <span id="text-align-left">{vehicleType}</span>
            </div>
            <div className="text row">
              <div className="icon">
                <span>Stock</span>
                {stock > 70 ? (
                  <img src={require("../resources/green.png")} alt="" />
                ) : stock < 70 && stock > 0 ? (
                  <img src={require("../resources/yellow.png")} alt="" />
                ) : (
                  <img src={require("../resources/red.png")} alt="" />
                )}
              </div>
              <span></span>
            </div>

            <div className="text">
              <span>Price ₪{price}</span>
            </div>
            <div className="counter" id="main">
              <span className="incre" onClick={() => this.props.decrement()}>
                -
              </span>
              <span className="number">{this.props.quantity}</span>
              <span className="incre" onClick={() => this.props.increment()}>
                +
              </span>
            </div>
            <div className="text" id="total1">
              <p>
                Total{" "}
                <span className="bold">₪{this.props.quantity * price}</span>
              </p>
            </div>
            <div
              className={` ${stock > 0 ? "adc" : "adc notify"}`}
              id="icononly"
            >
              {stock > 0 ? (
                <img src={require("../resources/adc.png")} id="adc" alt="" />
              ) : (
                <img
                  src={require("../resources/reminder.png")}
                  id="rem"
                  alt=""
                />
              )}
              <span>
                {this.props.stock !== 0 ? "Add to cart" : "Notify me!"}
              </span>
            </div>
          </div>
        </div>
        <div class="sm-container">
          <div class="rows sm">
            <div class="row-divider">
              <div class="first-row">
                <div class="name" id="text-align-left">
                  <h1>{name}</h1>
                </div>
                <div class="text" id="text-align-left">
                  <span>{id}</span>
                  <span>{vehicleType}</span>
                </div>
              </div>
              <div class="second-row">
                <div class="text">
                  <img src={require("../resources/approved.jpg")} alt="" id="approved"/>
                </div>
                <div class="text row">
                  <div class="icon">
                    <span>Stock</span>
                    {stock > 70 ? (
                      <img src={require("../resources/green.png")} alt="" />
                    ) : stock < 70 && stock > 0 ? (
                      <img src={require("../resources/yellow.png")} alt="" />
                    ) : (
                      <img src={require("../resources/red.png")} alt="" />
                    )}
                    <span id="stock">
                    {stock === 0 ? ("back in 1 week!") : stock < 10 ? (`${stock} tyres left`): (null) }
                    </span>
                  </div>

                </div>
                <div class="text">
                  <span>Price ₪{price}</span>
                </div>
                <div class="text width-fixer" >
                  <p>
                    Total{" "}
                    <span class="bold">₪{this.props.quantity * price}</span>
                  </p>
                  <span class="red">{discount!==0?`Save ₪${discount}!`:null}</span>
                </div>
              </div>
              <div class="third-row">
                <div class="counter">
                  <span class="incre" onClick={() => this.props.decrement()}>
                    -
                  </span>
                  <span class="number">{this.props.quantity}</span>
                  <span class="incre" onClick={() => this.props.increment()}>
                    +
                  </span>
                </div>

                <div className={` ${stock > 0 ? "adc" : "adc notify"}`}>
                  {stock > 0 ? (
                    <img
                      src={require("../resources/adc.png")}
                      id="adc"
                      alt=""
                    />
                  ) : (
                    <img
                      src={require("../resources/reminder.png")}
                      id="rem"
                      alt=""
                    />
                  )}
                  <span>
                    {" "}
                    {this.props.stock !== 0 ? "Add to cart" : "Notify me!"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withCounter(Product);
