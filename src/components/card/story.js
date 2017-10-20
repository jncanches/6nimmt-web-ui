import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Card from './Card';

import './../../stylesheets/main.scss';

const stories = storiesOf('Cards', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories
    .addDecorator(story => (
        <div style={{textAlign: 'center'}}>
            {story()}
        </div>
    ))
    .add('Dynamic properties', () => (
        <Card faceValue={number('Face Value', 1)} width={number('Width', 300)}/>
    ))
    .add('Face value = 5', () => <Card faceValue={1}/>)
    .add('Face value = 10', () => <Card faceValue={10}/>)
    .add('Face value = 22', () => <Card faceValue={22}/>)
    .add('Face value = 55', () => <Card faceValue={55}/>)
    .add('Face value = 104', () => <Card faceValue={104}/>)