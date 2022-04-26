import React, {Component} from 'react'
import './style.css'
export default class NavBar extends Component {
    constructor(props) {
        super()
    }
    render() {
        let {leftSlot,rightSlot,midSlot} = this.props;
        return (
            <div className='container'>
                <div className='left'>{leftSlot}</div>
                <div className='mid'>{midSlot}</div>
                <div className='right'>{rightSlot}</div>
            </div>
        )
    }
}
