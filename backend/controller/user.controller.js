let User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
	login: (req, res) => {
		User.findOne({ email: req.body.email })
			.then((user) => {
				if (user) {
					bcrypt
						.compare(req.body.password, user.password)
						.then((result) => {
							if (result) {
								const data = {
									data: { id: user._id, name: user.name, profession: user.profession },
									status: 200,
									message: 'success',
								};
								res.status(200).json(data);
							} else {
								const data = { data: [], status: 202, message: 'Incorrect Password!' };
								res.status(202).json(data);
							}
						})
						.catch((err) => res.status(400).json('Error: ' + err));
				} else {
					const data = { data: [], status: 201, message: 'Email not exists!' };
					res.status(201).json(data);
				}
			})
			.catch((err) => res.status(400).json('Error: ' + err));
	},

	signup: (req, res) => {
		User.findOne({ email: req.body.email }).then((user) => {
			if (user) {
				const data = {
					data: [],
					status: 201,
					message: 'User already exists',
				};
				res.json(data);
			} else {
				bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
					const email = req.body.email;
					const password = hash;
					const name = req.body.name;
					const profession = req.body.profession;
					const newUser = new User({ email, password, name, profession });
					newUser
						.save()
						.then(() => {
							const data = {
								data: [],
								status: 200,
								message: 'success',
							};
							res.json(data);
						})
						.catch((err) => res.status(400).json('Error: ' + err));
				});
			}
		});
	}
}


