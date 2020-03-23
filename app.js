var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
    {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1533684232926-d64430f38b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {name:"Granite Hill", image:"https://images.unsplash.com/photo-1558552709-7c68bf76b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    {name:"Gregory's Bald", image:"https://images.unsplash.com/photo-1466567270060-295a602c8ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
]


//Landing Page
app.get("/", function(req, res){
    res.render("landing");
});




//Campgrounds Route - GET
app.get("/campgrounds", function(req, res){
    
    //{Arg2 - This is the name we are giving to the data we are passing through , Arg1 - This is the data we are passing through}

    res.render("campgrounds", {campgrounds:campgrounds});
});



//Campgrounds Route - POST - Takes information from form and actually creates a new campground
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}

    // push new campground into our array of campgrounds
    campgrounds.push(newCampground);

    // redirect back to campgrounds page
    res.redirect("/campgrounds");

});



//Campground Route - Shows form for entering information for new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});



app.listen(3000, function(){
	console.log("YelpCamp Server is now running on port 3000...");
});