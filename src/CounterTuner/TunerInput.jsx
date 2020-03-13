import React from 'react';
import '../App.css';

class TunerInput extends React.Component {
    onValueChanged = (e) => {
        this.props.changeValue(e.currentTarget.value);
    }
    render = () => {
    let classForInput = this.props.incorrectMaxValue || this.props.incorrectMinValue ? 'inputError input' : 'input'
        return (
            <div className='tunerInput'>
                <div>
                    {this.props.title}
                </div>
                <div className={classForInput}>
                    <input value={this.props.value} onChange={this.onValueChanged}/>
                </div>
            </div>
        )
    }
}

export default TunerInput;