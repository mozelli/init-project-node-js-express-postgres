const Sequelize = require('sequelize');
// connection configurations
const dbConfig = require('../config/database');
// models
const Example = require('../models/Example');



const connection = new Sequelize(dbConfig);

connection.authenticate()
	.then(() => { 
		console.log('Connection has been established successfuly.')
	})
	.catch(err => {
		console.log('Unable to connect to the database.', err)
	})

Example.init(connection);
//Example.associate(connection.models);

module.exports = connection;
