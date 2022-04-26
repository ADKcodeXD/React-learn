import React, {Component} from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state={
            counter:0
        }
    }
    render() {
        return (
            <div>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={e=>this.increment()}>+1</button>
                <Button increment={e=>this.increment()}  />
            </div>
        )
    }
    increment() {
        this.setState({
            counter:this.state.counter+1
        })
    }
}

class Button extends Component{
    render() {
        const {increment}=this.props
        return (
            <div>
                <button onClick={increment}>+1</button>
            </div>
        )
    }
}