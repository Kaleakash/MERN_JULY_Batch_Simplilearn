// load the module 
let express = require("express");

// create the referenc 
let app = express();

app.get("/",(req,res)=> {
    res.send("Welcome to Express JS with Docker");
})

app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcomer user to Docker "+name);
})

app.listen(9090,()=>console.log("Sever running on port number 9090"));