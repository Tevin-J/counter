import React from 'react';
import Button from "../Common/Button";
import {connect} from "react-redux";
import {disableFunc1AC, disableFunc2AC, increaseNumberAC} from "../reducer";

class Increment extends React.Component {
    buttonTitle = this.props.button.title
    increaseNumber = () => {
        this.props.increaseNumber()
        if (this.props.counterNumber>=this.props.maxNumber) {
            this.props.disableFunc1()
        } else if (this.props.counterNumber > this.props.minNumber && this.props.counterNumber < this.props.maxNumber) {
            this.props.disableFunc2()
        }
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
        },
        disableFunc1 () {
            dispatch(disableFunc1AC())
        },
        disableFunc2 () {
            dispatch(disableFunc2AC())
        }
    }
}

const ConnectedIncrement = connect(mapStateToProps, mapDispatchToProps)(Increment)
export default ConnectedIncrement