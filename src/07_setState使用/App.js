import React, {Component} from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h1>当前计数:{
                    this.state.counter
                }</h1>
                <button onClick={
                    e => this.increment()
                }>+1</button>
            </div>
        )
    }
    //可见setState这里是异步的
    increment() {
        //这样做setState会变成同步的
        // setTimeout(()=>{
        //     this.setState({
        //         counter:this.state.counter+1
        //     })
        //     console.log(this.state.counter);
        // },0)
        this.setState((prevstate,prevprops)=>{
            return {
                counter:prevstate.counter+1
            }
        })
        console.log(this.state.counter);
    }
}
