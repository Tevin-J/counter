import React from 'react';
import './App.css';
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
        error: false,
        incorrectMaxValue: false,
        incorrectMinValue: false
    };
    switchCounterMode = () => { //метод переключения режимов счетчика
        this.setState({isEditMode: true})
    }
    increaseNumber = () => { //метод увеличения счетчика при нажатии на кнопку inc
        this.setState({
            counterNumber: ++this.state.counterNumber
        }, () => {
            this.saveState()
        })
        if (this.state.counterNumber>=this.state.maxNumber) {
            this.setState({counterNumber: this.state.maxNumber, isIncDisabled: true, isResetDisabled: false})
        } else if (this.state.counterNumber > this.state.minNumber && this.state.counterNumber < this.state.maxNumber) {
            this.setState({isResetDisabled: false, isIncDisabled: false})
        }
    };
    resetNumber = () => { //метод обнуления счетчика при нажатии на кнопку reset
        this.setState({
            counterNumber: this.state.minNumber,
            isIncDisabled: false,
            isResetDisabled: true
        }, () => {
            this.saveState()
        })
        if (this.state.counterNumber<=this.state.minNumber) {
            this.setState({isResetDisabled: true, isIncDisabled: false})
        } else if (this.state.counterNumber > this.state.min && this.state.counterNumber < this.state.maxNumber) {
            this.setState({isResetDisabled: false, isIncDisabled: false})
        }
    };
    changeMinValue = (minValue) => { //метод работающий во время изменения минимального значения счетчика
        this.setValues(minValue, this.state.maxNumber)
    }
    changeMaxValue = (maxValue) => { //метод работающий во время изменения максимального значения счетчика
        this.setValues(this.state.minNumber, maxValue)
    }
    /*activateEditMode = () => { //этот метод необходим только для версии счетчика без переключения режимов
        this.setState({
            isEditMode: true,
            isIncDisabled: true,
            isResetDisabled: true
        })
    }*/
    deactivateEditMode = () => { //метод для переключения счетчика из режима настройки в режим счетчик
        this.setState({
            isEditMode: false
            })
    }
    setValues = (minValue, maxValue) => { //метод для задания значений счетчика в стейт
        if (+minValue < 0 || +minValue >= +maxValue || +maxValue <= 0 || maxValue === null) {
            if ((+minValue < 0 || +minValue > +maxValue) && +maxValue > 0) {
                this.setState({incorrectMinValue: true, incorrectMaxValue: false})
            } else if ((+maxValue <= 0 && +minValue >= 0) || (+maxValue < +minValue && +minValue >= 0) || maxValue === null) {
                this.setState({incorrectMinValue: false, incorrectMaxValue: true})
            } else if (+minValue === +maxValue || (+minValue < 0 && +maxValue <= 0) ||
                ((+minValue < 0 || +minValue > +maxValue) && maxValue ===null )) {
                this.setState({incorrectMinValue: true, incorrectMaxValue: true})
            } else {
                this.setState({incorrectMinValue: false, incorrectMaxValue: false})
            }
            this.setState({
                error: true,
                isIncDisabled: true,
                isResetDisabled: true,
                minNumber: minValue,
                maxNumber: maxValue,
                counterNumber: minValue
            })
        } else {
            this.setState({
                isIncDisabled: true,
                isResetDisabled: true,
                isEditMode: true,
                minNumber: minValue,
                maxNumber: maxValue,
                counterNumber: minValue,
                error: false,
                incorrectMaxValue: false,
                incorrectMinValue: false
            })
        }
    }
    setCounter = () => { //метод нажатия на кнопку set в настройщике счетчика
        this.deactivateEditMode();
        this.setState({
            isIncDisabled: false,
            isResetDisabled: true,
            isEditMode: false
        }, () => {this.saveState()})
    }
    componentDidMount() {
        this.restoreState()
    }
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('counter-state', stateAsString)
    }
    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem('counter-state');
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    }
    render = () => {
        return (
            <div className="app">
                {this.state.isEditMode
                    ? <CounterTuner state={this.state} changeMinValue={this.changeMinValue} changeMaxValue={this.changeMaxValue}
                                  /*activateEditMode={this.activateEditMode}*/ setCounter={this.setCounter}/>
                    : <Counter state={this.state} increaseNumber={this.increaseNumber} resetNumber={this.resetNumber} switchCounterMode={this.switchCounterMode}/>
                }
                {/*<CounterTuner state={this.state} changeMinValue={this.changeMinValue} changeMaxValue={this.changeMaxValue}
                              activateEditMode={this.activateEditMode} setCounter={this.setCounter}/>
                <Counter state={this.state} increaseNumber={this.increaseNumber} resetNumber={this.resetNumber} />*/} {/*для версии счетчика без переключения режимов*/}
            </div>
        );
    }
}

export default App;

