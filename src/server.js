const app = require('./app');
//const database = 
const PORT = 3333;

app.listen(PORT, () => {
	console.log('Server running on http://localhost:' + PORT + '/api/v1');
	require('./database');
});