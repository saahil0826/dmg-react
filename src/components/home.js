import React, { Component } from "react";
import Catalog from "./catalog.js";
import ProductHero from "./ProductHero.js";
import Product from "./Product.js";
import { ProductHeroData } from "../ProductHeroData";
import { ProductData } from "../ProductData";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ProductHeroData,
      data1: ProductData
    };
  }

  render() {
    return (
      <div className="bg">
        <Catalog />
        <div class="content">
          {this.state.data.map((product, index) => {
            return <ProductHero product={product} key={index} />;
          })}
        </div>
        <div class="row-container">
        {this.state.data1.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
        </div>
        <div class="load-more">
          <button type="button" name="button">Load More Results</button>
        </div>
      </div>
    );
  }
}

export default Home;
