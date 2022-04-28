import React, { PureComponent} from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            friend:[
                {"avc":123456,"sss":14},
                {"avc":789,"sss":12},
                {"avc":123456789,"sss":1144},
            ]
        }
    }
    render() {
        return (
            <div> 
                <ul>
                    {
                        this.state.friend.map((item,index)=>{
                            return( <li key={item}>
                                    {item.avc}  
                                    {item.sss}
                                <button onClick={e=>this.addAvc(index)}>增加avc</button>
                                <button onClick={e=>this.addSss(index)}>增加sss</button>
                            </li>)
                        })
                    }
                </ul>
                <button onClick={e=>this.addItem()}>增加</button>
            </div>
        )
    }
    // 这里写方法
    addItem() {
        // 加入这么写，那么setState是不会更新组件的 如果遇到了pureComponent
        // 因此不建议以下的做法 推荐的是新建一个数组
        // this.state.friend.push({"avc":12156,"sss":144})
        // this.setState({
        //     friend:this.state.friend
        // })
        const newFriend=[...this.state.friend,{"avc":156489,"sss":1111222}];
        this.setState({
            friend:newFriend
        })
    }
    addAvc(index){
        const newFriend=[...this.state.friend];
        newFriend[index].avc++
        this.setState({
            friend:newFriend
        })
    }
    addSss(index){
        
    }
}
