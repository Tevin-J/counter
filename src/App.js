import React from 'react';
import './App.css';
import ContentBlock from "./ContentBlock";
import ButtonsBlock from "./ButtonsBlock";


class App extends React.Component {
    state = {
        contentNumber: 0,
        min: 0,
        max: 5,
        isDisabled: false
    }

    increaseNumber = () => {
        /*if (this.state.contentNumber>=this.state.max) {
            this.state.contentNumber = this.state.max;
            this.state.isDisabled = true
        } else {
            ++this.state.contentNumber;
            this.state.isDisabled = false
        }*/
        this.setState({
            contentNumber: ++this.state.contentNumber
        })
    }
    resetNumber = () => {
        /*if (this.state.contentNumber<=this.state.min) {
            this.state.isDisabled = true
        } else {
            this.state.contentNumber = this.state.min;
            this.state.isDisabled = false
        }*/
        this.setState({
            contentNumber: this.state.min
        })
    }

    render = () => {
        return (
            <div className="App">
                <div className='counter'>
                    <ContentBlock state={this.state}/>
                    <ButtonsBlock increaseNumber={this.increaseNumber} resetNumber={this.resetNumber}
                                  isDisabled={this.state.isDisabled}/>
                </div>
            </div>
        );
    }
}

export default App;

