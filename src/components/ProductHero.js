import React, { Component } from "react";
import UpdatedComponent from './withCounter.js'

class ProductHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.product.quantity,
      total: 0,
      stock: this.props.product.stock
    };
  }

  // increase
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
    const { name, type, price, id, vehicleType } = this.props.product;
    const { stock } = this.state;

    return (
      <>
        <div class="main lg">
          <div class="img">
            <div class="z-index" id="prem">
              <span>{type}</span>
            </div>
            <img
              src={require("../resources/tyre.jpg")}
              alt="tyre"
              id="main-img"
            />
          </div>
          <div class="info">
            <div class="container">
              <div class="heading">
                <h1>{name}</h1>
              </div>
              <div class="details">
                <div class="approved">
                  <img src={require("../resources/approved.jpg")} alt="" />
                </div>
                <div class="text">
                  <span>{id}</span>
                  <span id="text-align-left">{vehicleType}</span>
                </div>
                <div class="text">
                  <div class="icon">
                    <span>Stock </span>
                    {stock > 70 ? (
                      <img src={require("../resources/green.png")} alt="" />
                    ) : stock < 70 && stock > 0 ? (
                      <img src={require("../resources/yellow.png")} alt="" />
                    ) : (
                      <img src={require("../resources/red.png")} alt="" />
                    )}
                  </div>
                  <span>Price ₪{price}</span>
                </div>
                <div class="text" id="total">
                  <span>Total</span>
                  <span class="bold">₪{this.state.quantity * price}{this.props.name}</span>
                </div>
              </div>
              <div class="quantity">
                <div class="counter">
                  <span class="incre" onClick={() => this.decrement()}>
                    -
                  </span>
                  <span class="number">{this.state.quantity}</span>
                  <span class="incre" onClick={() => this.increment()}>
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
                    {this.state.stock !== 0 ? "Add to cart" : "Notify me!"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main sm">
          <div class="up">
            <div class="left">
              <div class="img">
                <div class="z-index" id="prem">
                  <span>{type}</span>
                </div>
                <img
                  src={require("../resources/tyre.jpg")}
                  alt="tyre"
                  id="main-img"
                />
              </div>
            </div>
            <div class="right">
              <div class="heading">
                <h1>Continental PremiumContact™ 6</h1>
              </div>
              <div class="details">
                <div class="approved">
                  <img src={require("../resources/approved.jpg")} alt="" />
                </div>
                <div class="text">
                  <span>195/55 R15 85V</span>
                  <span id="text-align-left">{vehicleType}</span>
                </div>
              </div>
              <div class="info">
                <div class="icon">
                  <span>
                    Stock{" "}
                    {stock > 70 ? (
                      <img src={require("../resources/green.png")} alt="" />
                    ) : stock < 70 && stock > 0 ? (
                      <img src={require("../resources/yellow.png")} alt="" />
                    ) : (
                      <img src={require("../resources/red.png")} alt="" />
                    )}
                  </span>
                </div>
                <div class="text">
                  <span>Price ₪{price}</span>
                </div>
                <div class="text">
                  <span>
                    Total{" "}
                    <span class="bold">₪{this.state.quantity * price}</span>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="quantity">
            <div class="counter">
              <span class="incre" onClick={() => this.decrement()}>
                -
              </span>
              <span class="number">{this.state.quantity}</span>
              <span class="incre" onClick={() => this.increment()}>
                +
              </span>
            </div>

            <div className={` ${stock > 0 ? "adc" : "adc notify"}`}>
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
                {" "}
                {this.state.stock !== 0 ? "Add to cart" : "Notify me!"}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductHero;
