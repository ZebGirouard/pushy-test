var app = require('express')();

app.get('/', function(req, res) {
	res.send("Hello World");
});

console.log("Test test");

app.listen(process.env.PORT || 3000);