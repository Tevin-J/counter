import React from 'react';
import style from './App.css';

class Button extends React.Component {

    render = () => {
        let classForButton = this.props.isDisabled ? 'buttonDisabled' : 'button';

        return (
            <button onClick={this.props.callback} className={classForButton}>{this.props.title}</button>
        )

    }
}

export default Button;

