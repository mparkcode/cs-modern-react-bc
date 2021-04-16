import React, { Component } from 'react'
import Box from './Box'
import './Boxes.css'
import {getNewColor} from './helpers'

class Boxes extends Component{
    static defaultProps = {
        colors: [
            "AliceBlue",
            "AntiqueWhite",
            "Aqua",
            "Aquamarine",
            "Azure",
            "Beige",
            "Bisque",
            "Black",
            "BlanchedAlmond",
            "Blue",
            "BlueViolet",
            "Brown",
            "BurlyWood",
            "CadetBlue",
            "Chartreuse",
            "Chocolate",
            "Coral",
            "CornflowerBlue",
            "Cornsilk",
            "Crimson",
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            boxColors: Array.from({length: 18}, i => this.props.colors[Math.floor(Math.random() * this.props.colors.length)])
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(e){
        let index = e.target.dataset.index
        let oldColor = e.target.style.backgroundColor
        let newColor = getNewColor(oldColor, this.props.colors)
        this.setState(st => {
            return {
                boxColors: st.boxColors.map((color,i) => i == index ? newColor : color)
            }
        })
    }
    render(){
        return(
            <div className="Boxes">
                {this.state.boxColors.map((color, idx) => <Box index={idx} customClickEvent={this.changeColor} background={color}/>)}
            </div>
        )
    }
}

export default Boxes