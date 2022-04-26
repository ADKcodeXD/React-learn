import React, {Component} from 'react'
import TabControl from './TabControl'
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            currIndex:0,
            currentTitle:"音乐"
        }
        this.data={
            tabData:["音乐","流行","动漫"]
        }
    }
    render() {
        let {currentTitle}=this.state
        return (
            <div>
                <TabControl itemClick={index=>this.itemClick(index)} titles={this.data.tabData} ></TabControl>
                <h1>{currentTitle}</h1>
            </div>
            
        )
    }
    itemClick(index){
        console.log(this);
        this.setState({
            currentTitle:this.data.tabData[index]
        })
    }
}