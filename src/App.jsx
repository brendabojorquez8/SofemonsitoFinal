import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCart = this.handleCart.bind(this);
    this.handleCartRemove = this.handleCartRemove.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.state = {
      cart: [],
      pokemonshop: [],
      myPokemons: [],
      pokemonUrl: [],
      storedCart: [],
      storedAdopted: []
    };
  }

  getPokemonUrl = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    );
    const json = await response.json();

    this.setState({
      pokemonUrl: json.results
    });
    this.getPokemonObject();
  };

  getPokemonObject = async () => {
    const pokemonSimple = this.state.pokemonUrl;
    pokemonSimple.map(async ({ url }) => {
      const response = await fetch(url);
      const json = await response.json();
      /* this.setState(prevState => ({
          pokemonshop: [...prevState.pokemonshop, json]
        })); */
      this.setState({
        pokemonshop: [...this.state.pokemonshop, json]
      });
    });
    this.getCurrentPoke();
  };

  //get all elements
  componentDidMount() {
    if (this.state.pokemonshop.length === 0) {
      this.getPokemonUrl();
    }
  }

  getCurrentPoke() {
    this.state.pokemonshop.forEach(pokemon => {
      this.state.storedCart.forEach(id => {});
    });
  }

  restoredData() {
    let restorePokemon = {
      cartPokemon: [],
      myPokemon: []
    };
    this.state.cart.forEach(x => {
      restorePokemon.cartPokemon.push(x.id);
    });
    this.state.myPokemons.forEach(x => {
      restorePokemon.myPokemon.push(x.id);
    });

    return restorePokemon;
  }

  handleCart(pokemon) {
    const newPokeShop = this.state.pokemonshop.filter(poke => poke !== pokemon);
    this.setState({
      cart: [...this.state.cart, pokemon],
      pokemonshop: newPokeShop
    });
  }

  handleCartRemove(pokemon) {
    const newCart = this.state.cart.filter(poke => poke !== pokemon);
    this.setState({
      pokemonshop: [...this.state.pokemonshop, pokemon],
      cart: newCart
    });
  }
  /*handleStorage(pokemon){
    pokecart.push()
    localStorage.setItem('id', pokemon.id)
    localStorage.setItem('id', pokemon.name)
    this.setState()
  }

*/
  handleCheckout() {
    const allAdopted = this.state.cart.concat(this.state.myPokemons);
    this.setState({
      cart: [],
      myPokemons: allAdopted
    });
  }

  /*
  getCurrentPoke = async () => {
    let currentCart = [];
    let currentAdopted = [];
    await Promise.all(
      this.state.pokemonshop.map(async poke => {
        this.state.storedAdopted.map(async Cartid => {
          if (poke.id === Cartid) {
            currentCart.push(poke);
          }
        });
      })
    );

    this.setState({
      cart: currentCart
    });
    /*
    storedpokemon = this.state.storedCart;
    storedpokemon.map((x) => {
      
  });
};*/

  /*
  componentWillUpdate() {
    var cart = localStorage.getItem("PokemonCart");
    var adopted = localStorage.getItem("adopted");
    /*  this.setState({
      storedCart: JSON.parse(cart),
      storedAdopted: JSON.parse(adopted)
    }); 
}*/

  /*
  getRestoredData() {
    const restoredData = this.restoreData();
    localStorage.setItem(
      "PokemonCart",
      JSON.stringify(restoredData.cartPokemon)
    );
    localStorage.setItem("adopted", JSON.stringify(restoredData.myPokemon));
  }
*/

  render() {
    return (
      <div className="App">
        <Header
          pokemonshop={this.state.pokemonshop}
          cart={this.state.cart}
          myPokemons={this.state.myPokemons}
          handleCart={this.handleCart}
          handleCartRemove={this.handleCartRemove}
          handleCheckout={this.handleCheckout}
        />

        <Footer />
      </div>
    );
  }
}
export default App;
