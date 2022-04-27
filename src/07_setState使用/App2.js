import React, {PureComponent,memo} from 'react'
// import PropTypes from 'prop-types';

// header

// // 通过这个类 可以约束传入的属性的类型
// Header.propTypes = {
//     name: PropTypes.string.isRequired,
//     type: PropTypes.array
// }
// function Main() {
//     return (
//         <h1>主题</h1>
//     )
// }
// function Footer() {
//     return (
//         <h1>footer</h1>
//     )
// }

//memo 需要传入一个函数式组件
const MemoHeader=memo(function Header() {
    console.log(123456);
    return (
        <h1>memoHeader</h1>
    )
})

class Header extends PureComponent {
constructor(){
    super();
    this.state={
        age:11
    }
}
  render() {
    console.log('Header');
    return (
      <div>
          <h1>Header</h1>
          <div>age:{this.state.age}</div>
          <button onClick={e=>this.changText()}>改变age</button>
      </div>
      
    )
  }
  changText(){
      this.setState({
          age:this.state.age+10
      })
  }
}


export default class App2 extends PureComponent {
    constructor() {
        super();
        this.state = {
            conuter: 0,
            text:'hello'
        }
    }
    render() {
        console.log('main');
        return (
            <div>
                <Header />
                <MemoHeader/>
                <h1>{this.state.text}</h1>
                <h2>{this.state.conuter}</h2>
                <button onClick={e=>this.increment()}>+1</button>
                <button onClick={e=>this.changText()}>改变</button>
            </div>
        )
    }
    increment(){
        this.setState({
            conuter:this.state.conuter+1
        })
    }
    changText(){
        this.setState({
            text:"snoiuahoi"
        })
    }
}
