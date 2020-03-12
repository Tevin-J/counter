import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterTuner from "./CounterTuner/CounterTuner";
import {connect} from "react-redux";
import {
    initStateAC,
    setValuesFunc1AC,
    setValuesFunc2AC,
    valuesFunc1AC,
    valuesFunc2AC,
    valuesFunc3AC,
    valuesFunc4AC
} from "./reducer";

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
    /*switchCounterMode = () => { //метод переключения режимов счетчика
        this.setState({isEditMode: true})
    }*/
    /*increaseNumber = () => { //метод увеличения счетчика при нажатии на кнопку inc
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
    };*/
    /*resetNumber = () => { //метод обнуления счетчика при нажатии на кнопку reset
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
    };*/
    changeMinValue = (minValue) => { //метод работающий во время изменения минимального значения счетчика
        this.setValues(minValue, this.props.state.maxNumber)
/*        this.saveState()*/
    }
    changeMaxValue = (maxValue) => { //метод работающий во время изменения максимального значения счетчика
        this.setValues(this.props.state.minNumber, maxValue)
/*        this.saveState()*/
    }
    /*activateEditMode = () => { //этот метод необходим только для версии счетчика без переключения режимов
        this.setState({
            isEditMode: true,
            isIncDisabled: true,
            isResetDisabled: true
        })
    }*/
    /*deactivateEditMode = () => { //метод для переключения счетчика из режима настройки в режим счетчик
        this.setState({
            isEditMode: false
            })
    }*/
    setValues = (minValue, maxValue) => { //метод для задания значений счетчика в стейт
        if (+minValue < 0 || +minValue >= +maxValue || +maxValue <= 0 || maxValue === null) {
            if ((+minValue < 0 || +minValue > +maxValue) && +maxValue > 0) {
                this.props.valuesFunc1()
            } else if ((+maxValue <= 0 && +minValue >= 0) || (+maxValue < +minValue && +minValue >= 0) || maxValue === null) {
                this.props.valuesFunc2()
            } else if (+minValue === +maxValue || (+minValue < 0 && +maxValue <= 0)
                || ((+minValue < 0 || +minValue > +maxValue) && maxValue===null )) {
                this.props.valuesFunc3()
            } else {
                this.props.valuesFunc4()
            }
            this.props.setValuesFunc1(+minValue, +maxValue)
/*            this.setState({
                error: true,
                isIncDisabled: true,
                isResetDisabled: true,
                minNumber: minValue,
                maxNumber: maxValue,
                counterNumber: minValue
            })*/
        } else {
            this.props.setValuesFunc2(+minValue, +maxValue)
/*            this.setState({
                isIncDisabled: true,
                isResetDisabled: true,
                isEditMode: true,
                minNumber: minValue,
                maxNumber: maxValue,
                counterNumber: minValue,
                error: false,
                incorrectMaxValue: false,
                incorrectMinValue: false
            })*/
        }
    }
    /*setCounter = () => { //метод нажатия на кнопку set в настройщике счетчика
        this.deactivateEditMode();
        this.setState({
            isIncDisabled: false,
            isResetDisabled: true,
            isEditMode: false
        }, () => {this.saveState()})
    }*/
    componentDidMount() {
        this.restoreState()
    }
    saveState = () => {
        let stateAsString = JSON.stringify(this.props.state);
        localStorage.setItem('counter-state', stateAsString)
    }
    restoreState = () => {
        let initState = this.props.state;
        let stateAsString = localStorage.getItem('counter-state');
        if (stateAsString != null) {
            initState = JSON.parse(stateAsString)
        }
        // this.props.initState(initState)
    }
    render = () => {
        return (
            <div className="app">
                {this.props.isEditMode
                    ? <CounterTuner state={this.props.state} changeMinValue={this.changeMinValue} changeMaxValue={this.changeMaxValue}
                                  /*activateEditMode={this.activateEditMode}*/ setCounter={this.setCounter}/>
                    : <Counter state={this.props.state} /*increaseNumber={this.increaseNumber} resetNumber={this.resetNumber}*/ switchCounterMode={this.switchCounterMode}/>
                }
                {/*<CounterTuner state={this.state} changeMinValue={this.changeMinValue} changeMaxValue={this.changeMaxValue}
                              activateEditMode={this.activateEditMode} setCounter={this.setCounter}/>
                <Counter state={this.state} increaseNumber={this.increaseNumber} resetNumber={this.resetNumber} />*/} {/*для версии счетчика без переключения режимов*/}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state: state,
        isEditMode: state.isEditMode,
        minNumber: state.minNumber,
        maxNumber: state.maxNumber
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        valuesFunc1() {
            dispatch(valuesFunc1AC())
        },
        valuesFunc2() {
            dispatch(valuesFunc2AC())
        },
        valuesFunc3() {
            dispatch(valuesFunc3AC())
        },
        valuesFunc4() {
            dispatch(valuesFunc4AC())
        },
        setValuesFunc1(minValue, maxValue) {
            dispatch(setValuesFunc1AC(minValue, maxValue))
        },
        setValuesFunc2(minValue, maxValue) {
            dispatch(setValuesFunc2AC(minValue, maxValue))
        },
/*        initState(initState) {
            dispatch(initStateAC(initState))
        }*/
    }
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;

