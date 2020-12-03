const connection = require('./model');

function getAllUsers() {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM users', (err, results) => {
			if (err) {
				console.log(err);
			} else {
				resolve(results);
			}
		});
	});
}

function getUserByID(id) {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM users WHERE user_id = ?', [id], (err, results) => {
			if (err) {
				console.log(err);
			} else {
				if (results.length === 0) {
					resolve(`No users w/ that ID`);
				} else {
					resolve(results);
				}
			}
		});
	});
}

module.exports = {
	getAllUsers,
	getUserByID
};
