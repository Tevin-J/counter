import React from 'react';
import style from './App.css';

class TunerInput extends React.Component {
    onValueChanged = (e) => {
        this.props.changeValue(e.currentTarget.value);
    }
    render = () => {

        return (
            <div className='tunerInput'>
                {this.props.title}
                <input value={this.props.value} onChange={this.onValueChanged} onClick={this.props.activateEditMode}/>
            </div>
        )
    }
}

export default TunerInput;