import React, { Component } from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Adopted from "../adopted/Adopted";
import Checkout from "../checkout/Checkout";
import Home from "../home/home";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleCart = this.props.handleCart.bind(this);
    this.handleCartRemove = this.props.handleCartRemove.bind(this);
    this.handleCheckout = this.props.handleCheckout.bind(this);
  }
  render() {
    return (
      <div className="header">
        <div id="buttonContainer">
          <Router>
            <Link to="/home">
              <button id="homeBtn">HOME</button>
            </Link>
            <Link to="/adopted">
              <button id="adoptedBtn">{`ADOPTED ${
                this.props.myPokemons.length
              }`}</button>
            </Link>
            <Link to="/checkout">
              <button id="checkoutBtn">
                <img src="https://i.imgur.com/oYPqB7I.png" alt="" height="12" />
                {`CHECKOUT ${this.props.cart.length}`}
              </button>
            </Link>
            <div>
              <Switch>
                <Route path="/adopted">
                  <Adopted myPokemons={this.props.myPokemons} />
                </Route>
                <Route path="/home">
                  <Home
                    pokemonshop={this.props.pokemonshop}
                    cart={this.props.cart}
                    myPokemons={this.props.myPokemon}
                    handleCart={this.handleCart}
                  />
                </Route>
                <Route path="/checkout">
                  <Checkout
                    cart={this.props.cart}
                    handleCart={this.handleCart}
                    handleCartRemove={this.handleCartRemove}
                    handleCheckout={this.handleCheckout}
                  />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Header;
