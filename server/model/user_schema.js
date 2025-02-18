const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},

	role: {
		type: String,
	},
});

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
