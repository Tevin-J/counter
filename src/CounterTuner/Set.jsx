import React from 'react';
import Button from "../Common/Button";

class Set extends React.Component {
    state = {
        buttonTitle: 'set'
    }
    render = () => {
        return (
            <Button title={this.state.buttonTitle} changeNumber={this.props.setCounter} isSetDisabled={this.props.error}/>
        )
    }
}

export default Set