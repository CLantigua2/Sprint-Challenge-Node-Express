const express = require('express');
const actionRouter = require('../REST/actionMod.js');
const projectRouter = require('../REST/projectMod.js');
const cors = require('cors');

module.exports = (server) => {
	server.use(cors());
	server.use(express.json());
	server.use('/api/action', actionRouter);
	server.use('/api/project', projectRouter);
};
