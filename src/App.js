import React from 'react';
import './App.css';
import CounterContent from "./CounterContent";
import CounterButtons from "./CounterButtons";
import Counter from "./Counter";
import CounterTuner from "./CounterTuner";


class App extends React.Component {



    render = () => {
        return (
            <div className="app">
               <CounterTuner/>
               <Counter/>
            </div>
        );
    }
}

export default App;

