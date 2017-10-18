import React from 'react';
import Card from './Card';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faceValue: 1,
            cardWidth: 266
        };

        this._setFaceValueState = this._setFaceValueState.bind(this);
        this._setCardWidthState = this._setCardWidthState.bind(this);
    }

    _setFaceValueState(event) {
        this.setState({faceValue: event.target.value});
    }

    _setCardWidthState(event) {
        this.setState({cardWidth: event.target.value});
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
                    <input type="range" min={0} max={104} value={this.state.faceValue} onChange={this._setFaceValueState}/>

                    Card size (width) :
                    <input type="range" min={266} max={600} value={this.state.cardWidth} onChange={this._setCardWidthState}/>
                </label>

                <br/>
                <br/>
                <Card faceValue={this.state.faceValue} width={this.state.cardWidth}/>
            </div>
        );
    }


}