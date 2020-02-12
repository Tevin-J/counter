import React from 'react';
import './App.css';
import CounterContent from "./CounterContent";
import CounterButtons from "./CounterButtons";


class Counter extends React.Component {

    render = () => {

        return (
            <div className='counterWrapper'>
                <CounterContent counterNumber={this.props.state.counterNumber} minNumber={this.props.state.minNumber}
                                maxNumber={this.props.state.maxNumber} isEditMode={this.props.state.isEditMode}
                                error={this.props.state.error}/>
                <CounterButtons increaseNumber={this.props.increaseNumber} resetNumber={this.props.resetNumber}
                                isIncDisabled={this.props.state.isIncDisabled} isResetDisabled={this.props.state.isResetDisabled}
                />
            </div>
        );
    }
}

export default Counter;

