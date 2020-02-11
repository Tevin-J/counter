import React from 'react';
import style from './App.css';
import TunerInput from "./TunerInput";

class MinValueTuner extends React.Component {
    state = {
        title: 'min value: '
    }

    render = () => {
        return (
            <TunerInput title={this.state.title} value={this.props.state.minValue} changeValue={this.props.changeMinValue}
                        activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}/>
        )
    }
}

export default MinValueTuner;