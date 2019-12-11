import React from 'react';
import './App.css';
import ContentBlock from "./ContentBlock";
import ButtonsBlock from "./ButtonsBlock";


class App extends React.Component {

    state = {
        contentNumber: 0,
        min: 0,
        max: 5,
        isIncDisabled: false,
        isResetDisabled: true
    };

    increaseNumber = () => {
        this.setState({
            contentNumber: ++this.state.contentNumber
        }, () => {
            if (this.state.contentNumber>=this.state.max) {
                this.setState({contentNumber: this.state.max, isIncDisabled: true})
            } else if (this.state.contentNumber > this.state.min && this.state.contentNumber < this.state.max) {
                this.setState({isResetDisabled: false, isIncDisabled: false})
            }
        })
    };

    resetNumber = () => {
        this.setState({
            contentNumber: this.state.min,
        }, () => {
            if (this.state.contentNumber<=this.state.min) {
                this.setState({isResetDisabled: true, isIncDisabled: false})
            } else if (this.state.contentNumber > this.state.min && this.state.contentNumber < this.state.max) {
                this.setState({isResetDisabled: false, isIncDisabled: false})
            }
        })
    };

    render = () => {
        return (
            <div className="App">
                <div className='counter'>
                    <ContentBlock state={this.state}/>
                    <ButtonsBlock increaseNumber={this.increaseNumber} resetNumber={this.resetNumber}
                                  isIncDisabled={this.state.isIncDisabled} isResetDisabled={this.state.isResetDisabled}/>
                </div>
            </div>
        );
    }
}

export default App;

