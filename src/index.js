import _ from 'lodash';

import './style.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we\'re in development mode! Expect more output...');
}

function helloWorld() {
    console.log('Hello, world!');
}

helloWorld();

