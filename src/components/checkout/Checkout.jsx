import React, { Component } from "react";
import PokemonCardCheckout from "../pokemonCard/PokemonCardCheckout";
import "./checkout.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.handleCartRemove = this.props.handleCartRemove.bind(this);
    this.handleCheckout = this.props.handleCheckout.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h3 id="instruction">Your Pokemon Cart:</h3>
          <button
            className="adoptBtn"
            onClick={() => this.props.handleCheckout()}
          >
            Gonna adopt em all!
          </button>
        </div>
        <div className="cartList">
          {this.props.cart.map((pokemon, i) => {
            return (
              <React.Fragment>
                <div>
                  <PokemonCardCheckout
                    key={i}
                    pokemon={pokemon}
                    handleCartRemove={this.props.handleCartRemove}
                    cardStyle={"mi-card"}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
