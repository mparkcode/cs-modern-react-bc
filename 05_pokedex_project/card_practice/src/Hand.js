import React, {Component} from 'react'
import './Hand.css'
import Card from './Card'

class Hand extends Component {
    render(){
        let result;
        if(this.props.isWinner){
            result = <p className="Winner">Winning hand! Total value: {this.props.totalValue}</p>
        } else {
            result = <p className="Loser">Losing hand, Total value: {this.props.totalValue}</p>
        }
        return(
            <div class="Hand">
                <h1>{this.props.player}</h1>
                <div class="Hand-cards">
                    {this.props.hand.map(card => (
                        <Card id={card.id}/>
                    ))}
                </div>
                {result}
            </div>
        )
    }
}

export default Hand