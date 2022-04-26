import React, {Component} from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar> {/* 这里可以直接传递内容 这里传递的jsx会传递到props.children中 */}
                    <h1>我是插槽1</h1>
                </NavBar>

                <NavBar2 leftSlot={<h1>我是插槽1</h1>}
                        midSlot={<strong>我是主体</strong>}
                        rightSlot={<p>我是右边</p>}/>
            </div>
        )
    }
}
