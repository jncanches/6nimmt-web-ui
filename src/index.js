import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.scss';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('.my-6nimmt-component'));
registerServiceWorker();
