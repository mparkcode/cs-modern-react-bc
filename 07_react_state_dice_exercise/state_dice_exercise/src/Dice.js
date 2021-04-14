import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
    render(){
        return(
            <div className="Dice">
                <i className={this.props.num}></i>
            </div>
        )
    }
}

export default Dice