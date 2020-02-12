import React from 'react';
import style from './App.css';
import Increment from "./Increment";
import Reset from "./Reset";


class CounterButtons extends React.Component {

    render = () => {

        return (
            <div className='buttonsBlock'>
                <Increment increaseNumber={this.props.increaseNumber} isIncDisabled={this.props.isIncDisabled}/>
                <Reset resetNumber={this.props.resetNumber} isResetDisabled={this.props.isResetDisabled}/>
            </div>
        )

    }
}

export default CounterButtons;