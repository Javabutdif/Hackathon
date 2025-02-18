//organization/request
const express = require("express");
const User = require("../model/user_schema");
const Org = require("../model/organization_schema");
const Event = require("../model/event_schema");
const router = express.Router();

router.post("/organization/request", async (req, res) => {
	const { organizationName, description, name } = req.body;

	try {
		const newOrg = new Org({
			orgName: organizationName,
			orgLeader: name,
			description,
			date: new Date(),
		});
		await newOrg.save();
		res.status(200).json({ message: "Organization Request successfully" });
	} catch (error) {
		console.error(error);
	}
});

router.post("/event/create", async (req, res) => {
	const { eventName, description } = req.body;

	try {
		const event = new Event({
			eventName,

			description,
			date: new Date(),
		});
		await event.save();
		res.status(200).json({ message: "Event Created successfully" });
	} catch (error) {
		console.error(error);
	}
});

router.get("/organization/get-all", async (req, res) => {
	try {
		const organizations = await Org.find();
		res.status(200).json({ data: organizations });
	} catch (error) {
		console.error(error);
	}
});

router.get("/event/get-all", async (req, res) => {
	try {
		const events = await Event.find();
		res.status(200).json({ data: events });
	} catch (error) {
		console.error(error);
	}
});


module.exports = router;
