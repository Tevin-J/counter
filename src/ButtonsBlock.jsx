import React from 'react';
import style from './App.css';
import Button from "./Button";


class ButtonsBlock extends React.Component {

    render = () => {

        return (
            <div className='buttonsBlock'>
                <Button title='inc' callback={this.props.increaseNumber}  isDisabled={this.props.isDisabled}/>
                <Button title='reset' callback={this.props.resetNumber}  isDisabled={this.props.isDisabled}/>
            </div>
        )

    }
}

export default ButtonsBlock;