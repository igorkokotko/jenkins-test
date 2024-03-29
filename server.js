'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const random = 'random';
// App
const app = express();
app.get('/', (req, res) => {
    res.send(`Hello world ${random}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
