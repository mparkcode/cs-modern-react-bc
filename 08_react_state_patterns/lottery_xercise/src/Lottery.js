import React, { Component } from 'react'
import LottoBall from './LottoBall'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lottery',
        numBalls: 6,
        maxNum: 45
    }
    constructor(props){
        super(props);
        this.state = {nums: []}
        this.generate = this.generate.bind(this)
    }
    generate(){
        let nums = []
        for(let i=0; i< this.props.numBalls; i++){
            let num = Math.floor(Math.random() * this.props.maxNum) + 1
            nums.push(num)
        }
        this.setState({nums: nums})
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                {this.state.nums.map(num => <LottoBall value={num}/>)}
                <button onClick={this.generate}>Generate</button>
            </div>
        )
    }
}

export default Lottery