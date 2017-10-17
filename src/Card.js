import React from 'react';
import styles from './Card.css';
console.log(styles);

export default class Card extends React.Component {
    render() {
        var weight = this.getWeightFromFaceValue(this.props.faceValue);

        return (
            <div className={'card weight-' + weight}>
                <div className={styles.header}>
                    weight {weight}
                </div>
                <div className={styles.center}>
                    <i className="icon-bull"/>

                </div>
                <div className={styles.footer}>
                    weight {weight}
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