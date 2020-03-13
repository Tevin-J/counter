import React from 'react';
import Button from "../Common/Button";
import {connect} from "react-redux";
import {resetNumberAC} from "../reducer";

class Reset extends React.Component {
    buttonTitle = this.props.button.title
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.props.saveState()
        }
    }
    resetNumber = () => {
        this.props.resetNumber()
    }
    render = () => {
        return (
            <Button title={this.buttonTitle} changeNumber={this.resetNumber} isResetDisabled={this.props.isResetDisabled}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        button: state.buttons[1],
        counterNumber: state.counterNumber,
        minNumber: state.minNumber,
        maxNumber: state.maxNumber,
        isResetDisabled: state.isResetDisabled
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetNumber () {
            dispatch(resetNumberAC())
        }
    }
}
const ConnectedReset = connect(mapStateToProps, mapDispatchToProps)(Reset)
export default ConnectedReset;