const express = require('express');
const app = express();
const query = require('./model/queries');
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('home-page');
});

app.get('/users', async (req, res) => {
	const users = await query.getAllUsers();
	res.send(users);
});

app.get('/users/:id', async (req, res) => {
	const user = await query.getUserByID(req.params.id);
	res.send(user);
});

app.listen(PORT, () => {
	console.log(`>>> http://localhost:3000 <<<`);
});
