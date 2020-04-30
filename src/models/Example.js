const { Model, DataTypes } = require('sequelize');

class Example extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING
		},{
			sequelize
		});
	}
}

/*class Example extends Model {}
	Project.init({
		name: Sequelize.STRING
	}, { 
		sequelize, 
	});*/

module.exports = Example;