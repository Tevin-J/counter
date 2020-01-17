import React from 'react';
import Button from "./Button";

class Set extends React.Component {
    state = {
        buttonTitle: 'set'
    }
    render = () => {
        return (
            <Button title={this.state.buttonTitle}/>
        )
    }
}

export default Set