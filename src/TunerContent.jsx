import React from 'react';
import style from './App.css';

class TunerContent extends React.Component {
    render = () => {

        return (
            <div className='contentBlock'>
                <div className='tunerContent'>
                    <div className='tunerInput'>
                        <input/>
                    </div>
                    <div className='tunerInput'>
                        <input/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TunerContent;