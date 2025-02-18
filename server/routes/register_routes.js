const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../model/user_schema");
const router = express.Router();

router.post("/", async (req, res) => {
	const {
		username,
		firstname,
		lastname,
		password,
		email,
		address,
		
	} = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			username,
			password: hashedPassword,
			firstname,
			lastname,
			email,
			address,
			organization,
			role: "Volunteer",
		});
		console.log(newUser);
		await newUser.save();

		res.status(200).json({ message: "Registration successful" });
	} catch (error) {
		if (error.code === 11000) {
			res.status(400).json({ message: error });
		} else {
			console.error({ message: "Error saving new user:", error });
			res.status(500).json({ message: "Internal Server Error" });
		}
	}
});

module.exports = router;
