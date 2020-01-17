import React from 'react';
import style from './App.css';
import Set from "./Set";



class TunerButtons extends React.Component {

    render = () => {

        return (
            <div className='buttonsBlock'>
                <Set/>
            </div>
        )

    }
}

export default TunerButtons;