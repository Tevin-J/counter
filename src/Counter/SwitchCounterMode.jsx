import React from 'react';
import Button from "../Common/Button";
import {connect} from "react-redux";
import {switchCounterModeAC} from "../reducer";

class SwitchCounterMode extends React.Component {
    buttonTitle = this.props.button.title
    switchCounterMode = () => {
        this.props.switchCounterMode()
    }
    render = () => {
        return (
            <Button title={this.buttonTitle} changeNumber={this.switchCounterMode}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        button: state.buttons[2],
        isEditMode: state.isEditMode
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        switchCounterMode() {
            dispatch(switchCounterModeAC())
        }
    }
}
const ConnectedSwitchCounterMode = connect(mapStateToProps, mapDispatchToProps)(SwitchCounterMode)
export default ConnectedSwitchCounterMode