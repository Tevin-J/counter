import React from 'react';
import Button from "./Button";

class Reset extends React.Component {
    state = {
        buttonTitle: 'reset'
    }
    render = () => {
        return (
            <Button title={this.state.buttonTitle} changeNumber={this.props.resetNumber} isResetDisabled={this.props.isResetDisabled}/>
        )
    }
}
export default Reset;