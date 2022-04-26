import React, {Component} from 'react'
import './style.css'
export default class NavBar extends Component {
    constructor(props) {
        super()
    }
    render() {
        let {children} = this.props;
        return (
            <div className='container'>
                <div className='left'>{children[0]}</div>
                <div className='mid'>{children[1]||null}</div>
                <div className='right'>{children[2]||null}</div>
            </div>
        )
    }
}
