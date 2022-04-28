import React, { createRef, PureComponent } from 'react'

export default class App3 extends PureComponent {
    constructor(){
        super();
        this.titleRef=createRef();
        this.titleEl=null;
    }
  render() {
    return (
      <div>
          <h2 ref={this.titleRef} >hello world</h2>
          <h2 ref={arg=>this.titleEl=arg} >hello world</h2>
          <button onClick={e=>this.changeText()}>显示</button>
          <form>
              <label htmlFor='username' onChange={e=>this.handleChange(e)} >
                用户:<input type='text' id='username'/>
              </label>
              <input type='submit' value='提交' />
          </form>
      </div>
    )
  }
  changeText(){
    //   console.log(this.refs.titleRef);
    console.log(this.titleRef);
    console.log(this.titleEl);
  }
  handleChange(e){
      console.log(e.target.value);
  }
}
