const express = require("express");
const Admin = require("../model/admin_schema");
const User = require("../model/user_schema");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async (req, res) => {
	const { username, password } = req.body;

	try {
		let user1 = await Admin.findOne({ username });
		let role = "Admin";
		if (!user1) {
			user1 = await User.findOne({ username });
			role = "User";
		}

		if (!user1) {
			return res.status(404).json({ message: "User not found." });
		}

		const passwordMatch = await bcrypt.compare(password, user1.password);

		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid credentials." });
		}

		const user =
			role === "Admin"
				? { name: user1.name }
				: {
						name: `${user1.firstname}  ${user1.lastname}`,
						email: user1.email,
				  };

		return res.status(200).json({
			message: "Login successful.",
			data: user,
			role,
		});
	} catch (error) {
		console.error("Login error:", error);
		return res
			.status(500)
			.json({ message: "An error occurred. Please try again later." });
	}
});

module.exports = router;
