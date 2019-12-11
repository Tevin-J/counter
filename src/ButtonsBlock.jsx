import React from 'react';
import style from './App.css';
import Button from "./Button";


class ButtonsBlock extends React.Component {

    render = () => {

        return (
            <div className='buttonsBlock'>
                <Button title='inc' callback={this.props.increaseNumber}  isIncDisabled={this.props.isIncDisabled}/>
                <Button title='reset' callback={this.props.resetNumber}  isResetDisabled={this.props.isResetDisabled}/>
            </div>
        )

    }
}

export default ButtonsBlock;