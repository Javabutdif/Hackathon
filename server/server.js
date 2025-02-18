const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

//MiddleWare
app.use(express.json());
app.use(bodyParser.json());

//Api endpoint

//Start server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
