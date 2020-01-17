import React from 'react';
import Button from "./Button";

class Increment extends React.Component {
    state = {
        buttonTitle: 'inc'
    }
    render = () => {
        return (
            <Button title={this.state.buttonTitle} changeNumber={this.props.increaseNumber} isIncDisabled={this.props.isIncDisabled}/>
        )
    }
}

export default Increment