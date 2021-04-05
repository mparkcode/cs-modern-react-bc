import React, {Component} from 'react'
import './Card.css'
const CARD_API = "https://deckofcardsapi.com/static/img/"

class Card extends Component {
    render(){
        let imgSrc = `${CARD_API}${this.props.id}.png`
        return(
            <div class="Card">
                <img src={imgSrc} />
            </div>
        )
    }
}

export default Card