import React, { Component } from 'react'
import './Box.css'

class Box extends Component{
    render(){
        return(
            <div className="Box" data-index={this.props.index} onClick={this.props.customClickEvent} style={{backgroundColor: this.props.background}}></div>
        )
    }
}

export default Box