import React from 'react';
import style from './App.css';

class Button extends React.Component {

    render = () => {
        let classForButton = this.props.isIncDisabled || this.props.isResetDisabled ? 'buttonDisabled' : 'button';
        let isDisabledButton = (this.props.isIncDisabled) || (this.props.isResetDisabled);
        return (
            <button onClick={this.props.changeNumber} className={classForButton} disabled={isDisabledButton}>{this.props.title}</button>
        )
    }
}

export default Button;

