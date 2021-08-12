// load the module. 
let express = require("express");
let bodyParser = require("body-parser");

// we have to create the referend of express module 
let app = express();    

// add bodyParser module as a middleware to enable the post data 
app.use(bodyParser.urlencoded({extended:true}));// enable body data

// http://localhost:9090
app.get("/",(req,res)=> {
    console.log("client send the request");
    res.sendFile(__dirname+"/index.html");
})
//  http://localhost:9090/aboutus
app.get("/aboutus",(req,res)=> {
    res.send("<h2>Welcome to About Us Page</h2>")
})
// http://localhost:9090/contactus
app.get("/contactus",(req,res)=> {
    res.send("<h2>Welcome to Contact us Page</h2>")
})

// http://localhost:9090/login 
app.get("/login",(req,res)=> {
    res.sendFile(__dirname+"/login.html");
})

// Get Login Page
app.get("/checkUser",(req,res)=> {
        let user = req.query.user;
        let pass = req.query.pass;
        if(user=="Ajay" && pass=="123"){
                res.send("successfully Login!")
        }else {
                res.send("failure try once again")
        }
})

// Post Login Page 
app.post("/checkUser",(req,res)=> {
    let login = req.body;
    if(login.user=="Raj" && login.pass=="123"){
            res.send("Succesfully Login!")
    }else {
            res.send("Failure try once again");
    }
})

app.listen(9090,()=>console.log("Server is runing on port number 9090"));