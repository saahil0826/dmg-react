import React, { Component } from "react";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        {" "}
        <div className="catalog">
          <div className="header">
            <h1>Recommended Products</h1>
          </div>
          <div className="sort">
            <div className="filter">
              <span>Selected Filter:</span>
              <div className="drp">
                <span>Continental</span>
                <img src={require("../resources/delete.png")} alt="" />
              </div>
            </div>
            <div className="filter" onClick={this.toggleMenu}>
              <span>Sort By:</span>
              <div className="drp" id="trigger1">
                <span>Popularity</span>
                <img src={require("../resources/arr.png")} alt="" id="arr" />
              </div>
              <div
                className="dropdown-content1 shadow"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <a href="#" id="Popularity">
                  Popularity{" "}
                  <img src={require("../resources/arr1.png")} alt="" id="arr" />
                </a>
                <a href="#">Lowest Price</a>
                <a href="#">Most Stock</a>
                <a href="#">Model A-Z</a>
                <a href="#">Code No.</a>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Catalog;
