import React from 'react';
import Button from "./Button";

class SwitchCounterMode extends React.Component {
    state = {
        buttonTitle: 'set'
    }
    render = () => {
        return (
            <Button title={this.state.buttonTitle} changeNumber={this.props.switchCounterMode}/>
        )
    }
}

export default SwitchCounterMode