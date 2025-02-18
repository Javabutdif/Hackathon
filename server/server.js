const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongodb_uri } = require("./environment_variables/env");

//MiddleWare
app.use(express.json());
app.use(bodyParser.json());
app.use(
	cors({
		origin: process.env.CORS,
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

mongoose
	.connect(
		"mongodb+srv://hackathon:123@cluster0.rd5c9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
		{
			dbName: "Cluster0",
		}
	)
	.then(() => console.log("Hackathon Database Connected!"))
	.catch((err) => console.log(err));

//Api endpoint

//Start server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
