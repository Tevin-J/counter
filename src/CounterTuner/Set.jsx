import React from 'react';
import Button from "../Common/Button";
import {connect} from "react-redux";
import {setCounterAC} from "../reducer";

class Set extends React.Component {
    buttonTitle = this.props.button.title
    setCounter = () => {
        this.props.setCounter()
        this.props.saveState()
    }

    render = () => {
        return (
            <Button title={this.buttonTitle} changeNumber={this.setCounter} isSetDisabled={this.props.error}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        button: state.buttons[3],
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCounter () {
            dispatch(setCounterAC())
        }
    }
}
const ConnectedSet = connect(mapStateToProps, mapDispatchToProps)(Set)
export default ConnectedSet