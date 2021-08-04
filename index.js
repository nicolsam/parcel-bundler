// Common Javascript:

// const jokes = require('./jokes');

// ES6 Javascript:

import { jokes } from './jokes';

jokes.getOne()
    .then(joke => {
        document.querySelector('#joke').innerHTML = joke;
    });