import React from 'react';
import './App.css';

class CounterContent extends React.Component {
    render = () => {
        let classForNumber = this.props.counterNumber<=this.props.minNumber ||
            this.props.counterNumber>=this.props.maxNumber || this.props.error ? 'limitNumber' : 'number';
        /*let output;
        if (this.props.error) {
            output = 'enter correct values!'
        } else if (this.props.isEditMode) {
            output = 'enter values and press "set"'
        } else {
            output = this.props.counterNumber
        }*/ //для версии счетчика без переключения режимов
        return (
            <div className='contentBlock'>
                <div className={classForNumber}>
                    {this.props.counterNumber}
                </div>
            </div>
        )

    }
}

export default CounterContent;