import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen:false};
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div>
        <div className="nav shadow">
          <div className="icon-nav">
            <img src={require("../resources/first.png")} alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <img src={require("../resources/srch.png")} id="srch" alt="" />
          </div>
          <div className="right-links">
            <div className="icon-nav" id="srchsmall">
              <img src={require("../resources/srch.png")} id="srch" alt="" />
            </div>
            <div className="dropdown" onClick ={this.toggleMenu}>
              <div id="trigger" className="icon-nav">
                <img src={require("../resources/account.png")} alt="" />
                <a className="dropbtn">Account</a>
              </div>
              <div className="dropdown-content" style={{display: this.state.isOpen?'block':'none'}}>
                <a href="#">Account</a>
                <a href="#">Help</a>
                <a href="#">Give Feedback</a>
                <a href="#">Log Out</a>
              </div>
            </div>
            <div className="icon-nav">
              <img src={require("../resources/orders.png")} alt="" />
              <a href="#contact">Order</a>
            </div>
            <div className="icon-nav">
              <img src={require("../resources/cart.png")} alt="" />
              <a href="#contact">Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Nav;
