import React from 'react';
import '../App.css';
import Increment from "./Increment";
import Reset from "./Reset";
import SwitchCounterMode from "./SwitchCounterMode";


class CounterButtons extends React.Component {

    render = () => {

        return (
            <div className='buttonsBlock'>
                <Increment saveState={this.props.saveState} increaseNumber={this.props.increaseNumber} isIncDisabled={this.props.isIncDisabled} isResetDisabled={this.props.isResetDisabled}/>
                <Reset saveState={this.props.saveState} resetNumber={this.props.resetNumber} isIncDisabled={this.props.isIncDisabled}isResetDisabled={this.props.isResetDisabled}/>
                <SwitchCounterMode  switchCounterMode={this.props.switchCounterMode}/>
            </div>
        )

    }
}

export default CounterButtons;