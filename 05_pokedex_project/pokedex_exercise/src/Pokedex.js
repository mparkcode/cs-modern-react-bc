import React, {Component} from "react";
import './Pokedex.css';
import Pokecard from './Pokecard';
import {getRandomPokemon} from './helpers';

class Pokedex extends Component{
  render(){
    const {pokemonHand} = this.props;
    return(
      <div>
        <h1 className="Pokedex-title">{this.props.player}</h1>
        <Pokecard pokemon={getRandomPokemon(pokemonHand)}/>
        <Pokecard pokemon={getRandomPokemon(pokemonHand)} />
        <Pokecard pokemon={getRandomPokemon(pokemonHand)} />
        <Pokecard pokemon={getRandomPokemon(pokemonHand)} />
        <p className={this.props.isWinner? 'Pokedex-winner' : "Pokedex-loser"}>
          {this.props.isWinner? 'This Hand wins!' : "This hand loses"}
        </p>
      </div>
    )
  }
}

export default Pokedex;