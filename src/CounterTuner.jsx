import React from 'react';
import './App.css';
import TunerContent from "./TunerContent";
import TunerButtons from "./TunerButtons";
import MaxValueTuner from "./MaxValueTuner";


class CounterTuner extends React.Component {



    render = () => {
        return (
                <div className='counterWrapper'>
                    <TunerContent state={this.props.state} changeMinValue={this.props.changeMinValue}
                                  changeMaxValue={this.props.changeMaxValue} activateEditMode={this.props.activateEditMode}/>
                    <TunerButtons setCounter={this.props.setCounter} error={this.props.state.error}/>
                </div>
        );
    }
}

export default CounterTuner;

