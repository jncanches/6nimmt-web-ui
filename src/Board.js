import React from 'react';
import Card from './Card';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faceValue: 1
        };

        this._setFaceValueState = this._setFaceValueState.bind(this);
    }

    _setFaceValueState(event) {
        this.setState({faceValue: event.target.value});
    }

    render() {
        const divStyle = {
            margin: 'auto',
            width: '800px'
        };

        return (
            <div style={divStyle}>
                <label>
                    Face value :
                    <input type="text" value={this.state.faceValue} onChange={this._setFaceValueState}/>
                </label>

                <br/>
                <br/>
                <Card faceValue={this.state.faceValue}/>
            </div>
        );
    }


}