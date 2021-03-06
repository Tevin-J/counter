import React from 'react';
import MaxValueTuner from "./MaxValueTuner";
import MinValueTuner from "./MinValueTuner";

class TunerContent extends React.Component {

    render = () => {
        return (
        <div className='contentBlock'>
            <div className='tunerContent'>
                <MaxValueTuner state={this.props.state} changeMaxValue={this.props.changeMaxValue}/>
                <MinValueTuner state={this.props.state} changeMinValue={this.props.changeMinValue}/>
            </div>
        </div>
        )
    }
}

export default TunerContent;