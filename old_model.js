const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'super_secret',
	database: 'users_db'
});

connection.connect();

// READ / SELECT
let userID = 1;

connection.query('SELECT * FROM users WHERE user_id = ?;', [userID], (err, results) => {
	if (err) {
		console.log(err);
	} else {
		results = results[0];
		console.log(results);
	}
});

// some javascript code that accepts a post request from a form full of username, firstName, lastName, an email, and a password
// const username = 'myUser123';
// const first_name = 'first';
// const last_name = 'last';
// const email = 'myEmail@mail.com';
// const password = 'horse345';

// WRITE / INSERT
// connection.query(
// 	`INSERT INTO users (username, first_name, last_name, email, password) VALUES(?, ?, ?, ?, ?)`,
// 	[username, first_name, last_name, email, password],
// 	err => {
// 		if (err) {
// 			console.log(err);
// 		}
// 	}
// );

// UPDATE
const username = 'hello_kitty21';
userID = 3;
connection.query('UPDATE users SET username = ? WHERE user_id = ?', [username, userID], err => {
	if (err) {
		console.log(err);
	}
});

// DELETE
userID = 4;
connection.query('DELETE FROM users WHERE user_id = ?', [userID], err => {
	if (err) {
		console.log(err);
	}
});

connection.end();
