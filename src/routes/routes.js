const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => { res.send('Hello') });

//categories
routes.get('/categories', (req, res) => { res.send('Categories'); });

module.exports = routes;