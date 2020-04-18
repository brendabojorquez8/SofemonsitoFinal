import React, { Component } from "react";
import PokemonAdoptedCard from "./../pokemonCard/PokemonAdoptedCard";

class Adopted extends Component {
  render() {
    return (
      //incluir mapeo de this.props.pokemonshop
      //y crear un PokemonCard(elemento_del_mapa)
      <React.Fragment>
          <div className="cards">
            {this.props.myPokemons.map((pokemon, i) => {
              return (
                <PokemonAdoptedCard
                  key={i}
                  pokemon={pokemon}
                  cardStyle={"mi-card"}
                />
              );
            })}
          </div>
      </React.Fragment>
    );
  }
}

export default Adopted;
