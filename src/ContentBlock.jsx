import React from 'react';
import style from './App.css';

class ContentBlock extends React.Component {
    render = () => {
        let classForNumber = this.props.state.contentNumber<=this.props.state.min ||
            this.props.state.contentNumber>=this.props.state.max ? 'limit-number' : 'number';

        return (
            <div className='contentBlock'>
                <div className={classForNumber}>
                    {this.props.state.contentNumber}
                </div>
            </div>
        )

    }
}

export default ContentBlock;