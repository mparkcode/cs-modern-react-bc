import React, {Component} from "react";
import './Pokecard.css'

class Pokecard extends Component{
  render(){
    const {id, name, type, base_experience} = this.props.pokemon;
    const formatImgId = id => {
      return `000${id}`.substr(-3)
    }
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatImgId(id)}.png`
    return(
      <div className="Poke-card">
        <h2 className="Poke-title">{name}</h2>
        <img className="Poke-img" src={img} alt="pokeon"/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
      
    )
  }
}

export default Pokecard;