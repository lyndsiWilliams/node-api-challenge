// Express import
const express = require('express');
// Router import
const projectRouter = require('./data/helpers/projectRouter');
// Set server with express
const server = express();


// Middleware usage
server.use(express.json());
server.use('/projects', projectRouter);

// Routes
server.get('/', (req, res) => {
  res.send(`Hello world!`);
});


// Server export
module.exports = server;