import React from 'react';
import Button from "../Common/Button";
import {connect} from "react-redux";
import {increaseNumberAC} from "../reducer";

class Increment extends React.Component {
    buttonTitle = this.props.button.title;

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.props.saveState()
        }
    }


    increaseNumber = () => {
        this.props.increaseNumber()
    }

    render = () => {
        return (
            <Button title={this.buttonTitle} changeNumber={this.increaseNumber} isIncDisabled={this.props.isIncDisabled}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        button: state.buttons[0],
        counterNumber: state.counterNumber,
        maxNumber: state.maxNumber,
        minNumber: state.minNumber,
        isIncDisabled: state.isIncDisabled,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseNumber () {
            dispatch(increaseNumberAC())
        }
    }
}

const ConnectedIncrement = connect(mapStateToProps, mapDispatchToProps)(Increment)
export default ConnectedIncrement