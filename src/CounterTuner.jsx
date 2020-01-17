import React from 'react';
import './App.css';
import TunerContent from "./TunerContent";
import TunerButtons from "./TunerButtons";


class CounterTuner extends React.Component {



    render = () => {
        return (
                <div className='counter'>
                    <TunerContent/>
                    <TunerButtons/>
                </div>
        );
    }
}

export default CounterTuner;

