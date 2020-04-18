import React, { Component } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleCart = this.props.handleCart.bind(this);
  }

  render() {
    return (
      //incluir mapeo de this.props.pokemonshop
      //y crear un PokemonCard(elemento_del_mapa)
      <React.Fragment>
        <div>
          <h3 id="instructions">Select pokemons to adopt</h3>
          <div className="cards">
            {this.props.pokemonshop.map((pokemon, i) => {
              return (
                <PokemonCard
                  key={i}
                  pokemon={pokemon}
                  handleCart={this.handleCart}
                  cardStyle={"sm-card"}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
