// dependencies
var express = require("express");

// create express server
var app = express();

// set PORT
var PORT = process.env.PORT || 3000;

// Set up parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// routing to html files
require("./routes/routesapi")(app);
require("./routes/routeshtml")(app);

// listen
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});