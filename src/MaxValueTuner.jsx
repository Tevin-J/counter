import React from 'react';
import style from './App.css';
import TunerInput from "./TunerInput";

class MaxValueTuner extends React.Component {
    state = {
        title: 'max value: '
    }
    render = () => {
        return (
            <TunerInput title={this.state.title} value={this.props.state.maxValue} changeValue={this.props.changeMaxValue}
                        activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}/>
        )
    }
}

export default MaxValueTuner;