import React from 'react'
import PropTypes from 'prop-types';

// header
function Header(props){
    let {type,name}=props
    return (
        <h1>{type?type:name}</h1>
    )
}
//通过这个类 可以约束传入的属性的类型
Header.propTypes ={
    name:PropTypes.string.isRequired,
    type:PropTypes.array
}
// class Header extends React.Component {
//     constructor(props) {
//         super();
//         this.props=props
//     }
//     render() {
//         return (
//             <h1>{
//                 this.props.type
//             }</h1>
//         )
//     }
// }

function Main() {
    return (
        <h1>主题</h1>
    )
}
function Footer() {
    return (
        <h1>footer</h1>
    )
}


export default function App() {
    return (
        <div>
            <Header type={["abc"]} />
            <Header name="456" />
            <Main/>
            <Footer/>
        </div>
    )
}
