import React from 'react';

export default class Card extends React.Component {
    render() {
        const divStyle = {
            margin: 'auto',
            backgroundColor: 'blue',
            height: '100px',
            width: '50px'
        };

        var weight = this.getWeightFromFaceValue(this.props.faceValue);

        return (
            <div>
                <div class="card" style={divStyle}>
                    {this.props.faceValue}
                </div>

                <div>
                    faceValue={this.props.faceValue} weight={weight}
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