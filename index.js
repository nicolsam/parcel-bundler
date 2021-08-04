// Common Javascript:

// const jokes = require('./jokes');

// ES6 Javascript:
import { jokes } from './jokes';

import fs from 'fs';

jokes.getOne()
    .then(joke => {
        document.querySelector('#joke').innerHTML = joke;
    });

const copyright = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

document.querySelector('#copy').innerHTML = copyright;