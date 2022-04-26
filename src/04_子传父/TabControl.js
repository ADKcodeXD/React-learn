import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default class TabControl extends Component {
    constructor(props) {
        super()
        this.props=props;
        this.state={
            currIndex:0
        }
    }
    render() {
        let {currIndex}=this.state
        return (
            <div className='tab-control'>
                {
                    this.props.titles.map((item,index)=>{
                        return <div key={item} 
                                className={'tab-item'+(index===currIndex?' active':'')}
                                onClick={e=>this.itemClick(index)}
                                >{item}
                        </div>
                    })
                }
            </div>
        )
    }
    itemClick(index){
        this.setState({
            currIndex:index
        })
        let {itemClick}=this.props;
        itemClick(index);
    }
} 
TabControl.propTypes = {
    titles: PropTypes.array.isRequired
}
