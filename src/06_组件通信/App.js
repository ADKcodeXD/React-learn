import React, {Component} from 'react'

const MyContext = React.createContext({name: "abc", age: -1})
/**
 * 函数式组件使用Context
 */
function ProfileHeader(props) {
    return(
        <MyContext.Consumer>
            {
                value=>{
                    return (
                        <div>
                            <h1>{value.name}</h1>
                            <h1>{value.age}</h1>
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}

/**
 * 类组件使用context 
 */
// class ProfileHeader extends Component {
//   render() {
//       console.log(this.context);
//     return (
//       <div>
//           <h2>{this.context.name}</h2>
//           <h2>{this.context.age}</h2>
//       </div>
//     )
//   }
// }
// ProfileHeader.contextType=MyContext;

function Profile(props) {
return (
    <div>
        <ProfileHeader/>
        <ul>
            <li>1</li>
            <li>2
            </li>
            <li>33333</li>
        </ul>
    </div>
)}
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "nihao",
            age: 18
        }
    }
    render() {
        return (
            <div>
                <MyContext.Provider value={this.state}>
                    <Profile/>
                </MyContext.Provider>
            </div>
        )
    }
}
