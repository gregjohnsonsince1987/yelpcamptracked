var express = require("express");
var app = express();


//Landing Page
app.get("/", function(req, res){
    res.send("IT WORKS!");
});





app.listen(3000, function(){
	console.log("YelpCamp Server is now running on port 3000...");
});