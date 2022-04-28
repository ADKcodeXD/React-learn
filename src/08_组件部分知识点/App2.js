import React, { PureComponent,Component } from 'react'
import { EventEmitter } from 'events'
const eventBus=new EventEmitter();

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div> 
                <h1>我是hello</h1>
            </div>
        )
    }

}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                我是Profile
                <button onClick={e=>this.emitEvent()}>点击触发子组件</button>
            </div>
        )
    }
    emitEvent(){
        eventBus.emit("sayHello","hello world i'm profile ",123)
    }
}

export default class App2 extends PureComponent {
    componentDidMount(){
        eventBus.addListener("sayHello",this.sayHelloApp2)
    }
    componentWillUnmount(){
        eventBus.removeAllListeners();
    }
  render() {
    return (
      <div>
          App
          <Hello />
          <Profile />
      </div>
    )
  }
  sayHelloApp2(...args){
    alert(...args)
  }
}
