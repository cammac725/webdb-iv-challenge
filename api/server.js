const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const dishesRouter = require('../dishes/dishes-router');
const recipesRouter = require('../recipes/recipes-router')

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' })
})

module.exports = server;