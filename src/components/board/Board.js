import React from 'react';
import Card from '../card/Card';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const divStyle = {
            margin: 'auto',
            width: '800px'
        };

        return (
            <div style={divStyle}>
                <Card faceValue={this.state.faceValue} width={this.state.cardWidth}/>
            </div>
        );
    }
}