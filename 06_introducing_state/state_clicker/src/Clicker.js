import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {'number' : 0};
        this.changeNumber = this.changeNumber.bind(this);
    }
    changeNumber(e){
        let num = Math.round(Math.random() * 10)
        this.setState({'number': num})
        
    }
    render(){
        return (
            <div>
                <h1>Your Number Is {this.state.number}</h1>
                {this.state.number !== 7 ? <button onClick={this.changeNumber}>Random Number</button> : <h2>You win!!</h2>}
            </div>
            
        )
    }
}

export default Clicker