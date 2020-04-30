# Settings

## Sequelize

- Documentation: https://sequelize.org

### Create migrations

- Command to create a new migration:
```
npx sequelize migration:create --name=create-example
```
- Command to run the migration:
```
npx sequelize db:migrate
```
- Documentation for other types of migrations (queryInterface): https://sequelize.org/v5/class/lib/query-interface.js~QueryInterface.html
-- Obs.: change the 'await' to 'return'

## Config

- You must create a file named database.js that configure the database access, containing the estructure below:
```
module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	username: 'username',
	password: 'password',
	database: 'database',
	define: {
		timestamps: true,
		underscored: true
	}
}
```