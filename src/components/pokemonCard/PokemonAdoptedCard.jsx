import React, { Component } from "react";
import "./PokemonCard.css";
import colors from "../ColorTypes";

class PokemonAdoptedCard extends Component {
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
        </div>
      </React.Fragment>
    );
  }
}
export default PokemonAdoptedCard;
