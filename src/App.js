import React from 'react';
import './App.css';

/**
 * 类方式写组件
 */
// export default class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             message: "nihao"
//         }
//     }

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <p> {this.state.message} </p>
//                 </header>
//             </div>
//         );
//     }
// }
/**
 * 函数式的组件
 */
export default function App(){
    return (
        <div className="App">
                <header className="App-header">
                    <p> hello world function </p>
                </header>
        </div>
    )
}