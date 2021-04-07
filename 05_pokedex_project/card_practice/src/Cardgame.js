import React, {Component} from 'react';
import './Cardgame.css'
import Hand from './Hand'
import deck from './deck'

class Cardgame extends Component {
    static defaultProps = {
        deck
    }
    render(){
        let hand1 = [];
        let hand2 = [];
        let x = 0;
        while(x<10){
            let randIdx = Math.floor(Math.random() * deck.length)
            let card = deck[randIdx]
            deck.splice(randIdx, 1)
            x%2 === 0 ? hand1.push(card) : hand2.push(card)
            x += 1
        }
        let hand1Value = hand1.reduce((total, card) => total + card.value, 0)
        let hand2Value = hand2.reduce((total, card) => total + card.value, 0)
        console.log(hand1Value, hand2Value)
        return(
            <div>
                <Hand player={'Player One'} hand={hand1} totalValue={hand1Value} isWinner={hand1Value > hand2Value ? true : false}/>
                <Hand player={'Player Two'} hand={hand2} totalValue={hand2Value} isWinner={hand2Value > hand1Value ? true : false}/>
            </div>
        )
    }
}

export default Cardgame;