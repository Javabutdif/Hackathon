const mongoose = require("mongoose");
const User = require("./user_schema");

const Schema = mongoose.Schema;

const orgSchema = new Schema({
	orgName: {
		type: String,
	},
	orgLeader: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
	},
});

const Org = mongoose.model("Org", orgSchema, "org");

module.exports = Org;
