import React from 'react';
import TunerInput from "./TunerInput";
import {connect} from "react-redux";

class MaxValueTuner extends React.Component {
    inputTitle = this.props.input.title
/*    changeMaxValue = () => this.props.changeMaxValue()*/
    render = () => {
        return (
            <TunerInput title={this.inputTitle} value={this.props.maxNumber} changeValue={this.props.changeMaxValue}
                        /*activateEditMode={this.props.activateEditMode}*/ incorrectMaxValue={this.props.incorrectMaxValue}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        input: state.inputs[0],
        maxNumber: state.maxNumber,
        incorrectMaxValue: state.incorrectMaxValue
    }
}

const ConnectMaxValueTuner = connect(mapStateToProps, null)(MaxValueTuner)
export default ConnectMaxValueTuner;