const express = require('express');
const app = require('./server');
const port = 8000;

app.get('/', (req, res) => res.send('My first Node API!'));

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
