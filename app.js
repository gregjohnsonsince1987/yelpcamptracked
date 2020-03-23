var express = require("express");
var app = express();


app.set("view engine", "ejs");


//Landing Page
app.get("/", function(req, res){
    res.render("landing");
});




//Campgrounds Route - GET
app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1533684232926-d64430f38b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {name:"Granite Hill", image:"https://images.unsplash.com/photo-1558552709-7c68bf76b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {name:"Gregory's Bald", image:"https://images.unsplash.com/photo-1466567270060-295a602c8ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
    ]
    
    //{Arg2 - This is the name we are giving to the data we are passing through , Arg1 - This is the data we are passing through}
    
    res.render("campgrounds", {campgrounds:campgrounds});
});



app.listen(3000, function(){
	console.log("YelpCamp Server is now running on port 3000...");
});