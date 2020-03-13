import React from 'react';
import TunerInput from "./TunerInput";
import {connect} from "react-redux";

class MinValueTuner extends React.Component {
    inputTitle = this.props.input.title
    render = () => {
        return (
            <TunerInput title={this.inputTitle} value={this.props.minNumber} changeValue={this.props.changeMinValue}
                        incorrectMinValue={this.props.incorrectMinValue} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        input: state.inputs[1],
        minNumber: state.minNumber,
        incorrectMinValue: state.incorrectMinValue
    }
}
const connectMinValueTuner = connect(mapStateToProps, null)(MinValueTuner)
export default connectMinValueTuner;