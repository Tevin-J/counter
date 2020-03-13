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

    changeMinValue = (minValue) => { //метод работающий во время изменения минимального значения счетчика
        this.setValues(minValue, this.props.state.maxNumber)
    }
    changeMaxValue = (maxValue) => { //метод работающий во время изменения максимального значения счетчика
        this.setValues(this.props.state.minNumber, maxValue)
    }

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
            this.props.setValuesFunc1(minValue, maxValue)

        } else {
            this.props.setValuesFunc2(minValue, maxValue)

        }
    }

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
        this.props.initState(initState)
    }
    render = () => {
        return (
            <div className="app">
                {this.props.state.isEditMode
                    ? <CounterTuner state={this.props.state} saveState={this.saveState} changeMinValue={this.changeMinValue}
                                    changeMaxValue={this.changeMaxValue} setCounter={this.setCounter}/>
                    : <Counter state={this.props.state} saveState={this.saveState} switchCounterMode={this.switchCounterMode}/>
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        state: state
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
        initState(initState) {
            dispatch(initStateAC(initState))
        }
    }
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp;

