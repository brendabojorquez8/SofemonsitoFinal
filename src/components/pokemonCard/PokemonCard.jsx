import React, { Component } from "react";
import "./PokemonCard.css";
import colors from "../ColorTypes";

class PokemonCard extends Component {
  render() {
    return (
      <React.Fragment>
        <button style={{ colors }} className="sm-card" disabled={true}>
          <div className="sm-card-image">
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
            className="buttonAdd"
            onClick={() => this.props.handleCart(this.props.pokemon)}
          >
            Add to cart
          </button>
        </button>
      </React.Fragment>
    );
  }
}
export default PokemonCard;
