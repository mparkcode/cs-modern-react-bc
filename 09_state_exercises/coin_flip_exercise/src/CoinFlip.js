import React, { Component } from 'react'
import Coin from './Coin'

class CoinFlip extends Component {
    constructor(props){
        super(props)
        this.state = {
            coin: '',
            flips: 0,
            heads: 0,
            tails: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.flip = this.flip.bind(this)
    }
    flip(){
        this.setState(curSt => ({
            flips: curSt.flips + 1
        }))
        let num = Math.floor(Math.random() * 2)
        num == 0 ? 
        this.setState(curSt => ({
            heads: curSt.heads + 1,
            coin: 'https://i.ebayimg.com/images/g/xtcAAOSwLwBaZigS/s-l400.jpg'
        })) :
        this.setState(curSt => ({
            tails: curSt.tails + 1,
            coin: 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._AC_.jpg'
        }))
    }

    handleClick(){
        this.flip()
    }
    render(){
        return(
            <div className="CoinFlip">
                <h1>Let's flip a coin!</h1>
                <Coin image={this.state.coin} />
                <button onClick={this.handleClick}>Flip meeee!</button>
                <p>Out of {this.state.flips}, there have been {this.state.heads} heads and {this.state.tails} tails</p>
            </div>
        )
    }
}

export default CoinFlip