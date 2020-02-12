import React from 'react';
import style from './App.css';

class CounterContent extends React.Component {
    render = () => {
        let classForNumber = this.props.counterNumber<=this.props.minNumber ||
            this.props.counterNumber>=this.props.maxNumber || this.props.error ? 'limit-number' : 'number';
        let output;
        if (this.props.error) {
            output = 'enter correct values!'
        } else if (this.props.isEditMode) {
            output = 'enter values and press "set"'
        } else {
            output = this.props.counterNumber
        }
        return (
            <div className='contentBlock'>
                <div className={classForNumber}>
                    {output}
                </div>
            </div>
        )

    }
}

export default CounterContent;