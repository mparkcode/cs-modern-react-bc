import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
    constructor(props){
        super(props)
        this.state = {
            'dice1': 'fas fa-dice-one',
            'dice2': 'fas fa-dice-one',
            'isShaking': false
        }
        this.roll = this.roll.bind(this)
    }
    roll(e){
        let nums = ['one', 'two', 'three', 'four', 'five', 'six']
        let rand1 = nums[Math.floor(Math.random() * nums.length)]
        let rand2 = nums[Math.floor(Math.random() * nums.length)]
        this.setState({
            'dice1': `fas fa-dice-${rand1} buzz`,
            'dice2': `fas fa-dice-${rand2} buzz`,
            'isShaking': true
        })
        setTimeout(() => {
            this.setState({
                'dice1': `fas fa-dice-${rand1}`,
                'dice2': `fas fa-dice-${rand2}`,
                'isShaking': false
            })
        }, 2000) 
    }
    render(){
        let text;
        this.state.isShaking == true ? text = 'Shaking' : text = 'Roll Dice!'
        return(
            <div>
                <div className="DiceDisplay">
                    <Dice num={this.state.dice1}/>
                    <Dice num={this.state.dice2}/>  
                </div>
                <button onClick={this.roll} disabled={this.state.isShaking}>{text}</button>
            </div>
            
        )
    }
}

export default RollDice