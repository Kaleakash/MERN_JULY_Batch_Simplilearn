// load the module. 
let express = require("express");

// we have to create the referend of express module 
let app = express();    

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


app.get("/checkUser",(req,res)=> {
        let user = req.query.user;
        let pass = req.query.pass;
        if(user=="Ajay" && pass=="123"){
                res.send("successfully Login!")
        }else {
                res.send("failure try once again")
        }
})

app.listen(9090,()=>console.log("Server is runing on port number 9090"));