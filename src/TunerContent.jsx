import React from 'react';
import style from './App.css';
import TunerInput from "./TunerInput";
import MaxValueTuner from "./MaxValueTuner";
import MinValueTuner from "./MinValueTuner";

class TunerContent extends React.Component {

    render = () => {
        return (
        <div className='contentBlock'>
            <div className='tunerContent'>
                <MaxValueTuner state={this.props.state} changeMaxValue={this.props.changeMaxValue}
                               activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}/>
                <MinValueTuner state={this.props.state} changeMinValue={this.props.changeMinValue}
                               activateEditMode={this.props.activateEditMode} deactivateEditMode={this.props.deactivateEditMode}/>
            </div>
        </div>
        )
    }
}

export default TunerContent;