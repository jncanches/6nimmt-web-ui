import React from 'react';
import classnames from 'classnames';

export default class Card extends React.Component {
    render() {
        let weight = this.getWeightFromFaceValue(this.props.faceValue);

        let classes = classnames('card', {
            'weight-1': weight === 1,
            'weight-2': weight === 2,
            'weight-3': weight === 3,
            'weight-5': weight === 5,
            'weight-7': weight === 7
        });

        const divStyle = {
            '--card-width': this.props.width + 'px',
            '--card-height': (this.props.width * 1.52) + 'px'
        };

        // document.documentElement.style.setProperty(`--card-width`, this.props.width + 'px');
        // console.log(document.documentElement.style);

        return (
            <div className={classes} style={divStyle}>
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