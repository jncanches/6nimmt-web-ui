import React from 'react';
import '../../assets/fonts/6nimmt/style.css';
import './Card.css';

export default class Card extends React.Component {
    render() {
        var weight = this.getWeightFromFaceValue(this.props.faceValue);

        return (
            <div className={'card weight-' + weight} style={{'--card-width': this.props.width + 'px', '--card-height': this.props.width + 'px'}}>
                <div className="header">
                    <label className="face-value-left">{this.props.faceValue}</label>
                    weight {weight}
                    <label className="face-value-right">{this.props.faceValue}</label>
                </div>
                <i className="icon-bull"/>
                <label className="face-value">{this.props.faceValue}</label>
                <div className="footer">
                    <label className="face-value-left">{this.props.faceValue}</label>
                    weight {weight}
                    <label className="face-value-right">{this.props.faceValue}</label>
                </div>

                {/*face value {this.props.faceValue}*/}
            </div>
        );
    }

    getWeightFromFaceValue(faceValue) {
        var weight = 0;
        if (faceValue % 11 === 0) {
            weight += 5;
        }
        if (faceValue % 10 === 5) {
            weight += 2;
        }
        if (faceValue % 10 === 0) {
            weight += 3;
        }
        return weight || 1;
    }
}