import React from 'react';
import './App.css';
import Set from "./Set";



class TunerButtons extends React.Component {

    render = () => {

        return (
            <div className='buttonsBlock'>
                <Set setCounter={this.props.setCounter} error={this.props.error}/>
            </div>
        )
    }
}

export default TunerButtons;