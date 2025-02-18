const mongoose = require("mongoose");
const User = require("./user_schema");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
	eventName: {
		type: String,
	},
	description: {
		type: String,
		required: true,
	},
	members: {
		type: [User.Schema],
		default: [],
	},
	date: {
		type: Date,
	},
});

const Event = mongoose.model("Event", eventSchema, "event");

module.exports = Event;
