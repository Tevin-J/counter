import React from 'react';
import style from './App.css';

class CounterContent extends React.Component {
    render = () => {
        let classForNumber = this.props.contentNumber<=this.props.minNumber ||
            this.props.contentNumber>=this.props.maxNumber ? 'limit-number' : 'number';

        return (
            <div className='contentBlock'>
                <div className={classForNumber}>
                    {this.props.contentNumber}
                </div>
            </div>
        )

    }
}

export default CounterContent;