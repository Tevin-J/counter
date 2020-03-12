import React from 'react';
import Button from "../Common/Button";
import {connect} from "react-redux";
import {disableFunc3AC, disableFunc4AC, resetNumberAC} from "../reducer";

class Reset extends React.Component {
    buttonTitle = this.props.button.title
    resetNumber = () => {
        this.props.resetNumber()
        if (this.props.counterNumber<=this.props.minNumber) {
            this.props.disableFunc3()
        } else if (this.props.counterNumber > this.props.minNumber && this.props.counterNumber < this.props.maxNumber) {
            this.props.disableFunc4()
        }
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
        },
        disableFunc3() {
            dispatch(disableFunc3AC())
        },
        disableFunc4() {
            dispatch(disableFunc4AC())
        },
    }
}
const ConnectedReset = connect(mapStateToProps, mapDispatchToProps)(Reset)
export default ConnectedReset;