import React from 'react';
import './App.css';
import CounterContent from "./CounterContent";
import CounterButtons from "./CounterButtons";
import Counter from "./Counter";
import CounterTuner from "./CounterTuner";


class App extends React.Component {
    state = {
        minNumber: 0,
        maxNumber: 5,
        counterNumber: 0,
        isIncDisabled: false,
        isResetDisabled: true,
        isEditMode: false,
        error: false
    };
    increaseNumber = () => {
        this.setState({
            counterNumber: ++this.state.counterNumber
        }, () => {
            if (this.state.counterNumber>=this.state.maxNumber) {
                this.setState({counterNumber: this.state.maxNumber, isIncDisabled: true, isResetDisabled: false})
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
    changeMinValue = (minValue) => {
        this.setValues(minValue, this.state.maxNumber)
    }
    changeMaxValue = (maxValue) => {
        this.setValues(this.state.minNumber, maxValue)
    }
    activateEditMode = () => {
        this.setState({isEditMode: true,
            isIncDisabled: true,
            isResetDisabled: true
        })
    }
    deactivateEditMode = () => {
        this.setState({isEditMode: false
            })
    }
    setValues = (minValue, maxValue) => {
        if (minValue < 0 || minValue > maxValue || maxValue <= 0 || maxValue <= minValue) {
            this.setState({
                error: true,
                isIncDisabled: true,
                isResetDisabled: true
            })
        } else {
            this.setState({
                isIncDisabled: true,
                isResetDisabled: true,
                isEditMode: true,
                minNumber: minValue,
                maxNumber: maxValue,
                counterNumber: minValue,
                error: false
            })
        }
    }
    setCounter = () => {

        this.deactivateEditMode();
        this.setState({
            isIncDisabled: false,
            isResetDisabled: true,
            isEditMode: false
        })
    }
    render = () => {
        return (
            <div className="app">
               <CounterTuner state={this.state} changeMinValue={this.changeMinValue} changeMaxValue={this.changeMaxValue}
                             activateEditMode={this.activateEditMode} setCounter={this.setCounter}/>
               <Counter state={this.state} increaseNumber={this.increaseNumber} resetNumber={this.resetNumber}/>
            </div>
        );
    }
}

export default App;

