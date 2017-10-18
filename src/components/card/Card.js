import React from 'react';
import '../../assets/fonts/6nimmt/style.css';
import './Card.css';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faceValue: 1,
            width: 266
        };
    }

    render() {
        var weight = this.getWeightFromFaceValue(this.props.faceValue);

        var divStyle = {
            width: this.props.width + 'px',
            height: this.props.width * 1.52  + 'px'
        };

        return (
            <div className={'card weight-' + weight} style={divStyle}>
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