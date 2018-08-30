'use strict';

const crypto = require('crypto');

// const hash = crypto.createHash('sha1');
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));