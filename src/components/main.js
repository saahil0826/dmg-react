import React from "react";
import Nav from "./nav.js";
import Home from './home.js'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default Main;
