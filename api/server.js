const express = require('express');
const server = express();
const configMiddleware = require('./config/middleware');

configMiddleware(server);

server.get('/', (req, res) => {
	res.json('alive');
});

module.exports = server;
