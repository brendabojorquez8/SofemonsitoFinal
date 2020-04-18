import React, { Component } from "react";
import "./PokemonCard.css";
import colors from "../ColorTypes";

class PokemonCardCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.handleCartRemove = this.props.handleCartRemove.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className="mi-card">
          <div className="mi-card-image">
            <img src={this.props.pokemon.sprites.front_default} alt="" />
          </div>
          <div className="types">
            {this.props.pokemon.types.map(type => {
              return (
                <div
                  className="pokeType"
                  style={{ backgroundColor: colors[type.type.name] }}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <div className="pokeName">{this.props.pokemon.name}</div>
          <div className="exp">
            Base experience: {this.props.pokemon.base_experience}
          </div>
          <button
            className="Remove"
            onClick={() => this.handleCartRemove(this.props.pokemon)}
          >
            Remove{" "}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default PokemonCardCheckout;
