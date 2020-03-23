var express = require("express");
var app = express();


app.set("view engine", "ejs");


//Landing Page
app.get("/", function(req, res){
    res.render("landing");
});





app.listen(3000, function(){
	console.log("YelpCamp Server is now running on port 3000...");
});