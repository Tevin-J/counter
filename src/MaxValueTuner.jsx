import React from 'react';
import TunerInput from "./TunerInput";

class MaxValueTuner extends React.Component {
    state = {
        title: 'max value: '
    }

    render = () => {
        return (
            <TunerInput title={this.state.title} value={this.props.state.maxNumber} changeValue={this.props.changeMaxValue}
                        /*activateEditMode={this.props.activateEditMode}*/ incorrectMaxValue={this.props.state.incorrectMaxValue}/>
        )
    }
}

export default MaxValueTuner;