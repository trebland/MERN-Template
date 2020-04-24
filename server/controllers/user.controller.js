const User = require("../models/user.model.js");

module.exports = {
	anon: function(req, res) {
		res.json({
		name: "Anonymous",
		email: "Anonymous@email.com"
		});
	},
	findAll: function(req, res) {
		User.find(req.query)
			.then(users => res.json(users))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		User.findById(req.params.id)
			.then(user => res.json(user))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		User.create(req.body)
			.then(user => res.json({message: "User " + user.name + " successfully added!"}))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		User.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(user => res.json(user))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		User.findById({ _id: req.params.id })
			.then(user => user.remove())
			.then(users => res.json(users))
			.catch(err => res.status(422).json(err));
	}
};