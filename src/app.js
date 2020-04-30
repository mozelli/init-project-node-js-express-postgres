const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes'); // routes

app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);

module.exports = app;