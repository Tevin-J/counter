import React from 'react';
import './App.css';
import CounterContent from "./CounterContent";
import CounterButtons from "./CounterButtons";


class Counter extends React.Component {
    state = {
        counterNumber: 0,
        minNumber: 0,
        maxNumber: 5,
        isIncDisabled: false,
        isResetDisabled: true
    };

    increaseNumber = () => {
        this.setState({
            counterNumber: ++this.state.counterNumber
        }, () => {
            if (this.state.counterNumber>=this.state.maxNumber) {
                this.setState({counterNumber: this.state.maxNumber, isIncDisabled: true})
            } else if (this.state.counterNumber > this.state.minNumber && this.state.counterNumber < this.state.maxNumber) {
                this.setState({isResetDisabled: false, isIncDisabled: false})
            }
        })
    };

    resetNumber = () => {
        this.setState({
            counterNumber: this.state.minNumber,
        }, () => {
            if (this.state.counterNumber<=this.state.minNumber) {
                this.setState({isResetDisabled: true, isIncDisabled: false})
            } else if (this.state.counterNumber > this.state.min && this.state.counterNumber < this.state.maxNumber) {
                this.setState({isResetDisabled: false, isIncDisabled: false})
            }
        })
    };
    render = () => {

        return (
            <div className='counter'>
                <CounterContent contentNumber={this.state.counterNumber} minNumber={this.state.minNumber} maxNumber={this.state.maxNumber}/>
                <CounterButtons increaseNumber={this.increaseNumber} resetNumber={this.resetNumber}
                                isIncDisabled={this.state.isIncDisabled} isResetDisabled={this.state.isResetDisabled}
                />
            </div>
        );
    }
}

export default Counter;

