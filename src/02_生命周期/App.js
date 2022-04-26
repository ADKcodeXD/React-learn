import React, {Component} from 'react'


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            conuter: 0
        }
        console.log("执行了constructor");
    }
    render() {
        console.log("执行了render");
        return (
            <div className='App'>
                <p>{
                    this.state.conuter
                }</p>
                <button onClick={
                    e => this.add()
                }>+</button>
                <Btn2/>
            </div>
        )
    }
    componentDidMount() {
        console.log("执行了componentDidMount");
    }
    componentDidUpdate() {
        console.log("执行了componentDidUpdate");
    }
    add() {
        this.setState({
            conuter: this.state.conuter + 1
        })
    }
}


class Btn2 extends Component {
    constructor() {
        super()
        this.state = {
            cleaner: 0
        }
    }
    render() {
        return (
            <div>
                <h1>你好</h1>
                <p>{
                    this.state.cleaner
                }</p>
                <button onClick={
                    e => this.setClean()
                }>+</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("执行了子组件的componentDidMount");
    }
    componentDidUpdate() {
        console.log("执行了子组件的componentDidUpdate");
    }
    setClean() {
        this.setState({
            cleaner: this.state.cleaner + 2
        })
    }
}
