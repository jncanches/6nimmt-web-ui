import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faceValue: this.props.faceValue,
            weight: this.getWeightFromFaceValue(this.props.faceValue)
        };
    }

    render() {
        const divStyle = {
            margin: 'auto',
            backgroundColor: 'blue',
            height: '100px',
            width: '50px'
        };

        return (
            <div>
                <div class="card" style={divStyle}>
                    {this.state.faceValue}
                </div>

                <div>
                    faceValue={this.state.faceValue} weight={this.state.weight}
                </div>
            </div>
        );
    }

    getWeightFromFaceValue(faceValue) {
        if (faceValue === 55) {
            return 7;
        } else if (faceValue%10 === 0) {
            return 3;
        } else if (faceValue%5 === 0) {
            return 2;
        } else if (faceValue%11 === 0) {
            return 5;
        } else {
            return 1;
        }
    }
}