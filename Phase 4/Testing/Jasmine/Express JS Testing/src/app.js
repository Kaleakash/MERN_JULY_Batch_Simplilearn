// load the module 
let express = require("express");
// create the reference of express 
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.json());     // enable the post data from body part. 

let employees = [
    {id:100,name:"Raj",age:21},
    {id:101,name:"Ramesh",age:23},
    {id:102,name:"Ravi",age:25}
]
// get with return text dat 
app.get("/simpleTextMsg",(req,res)=> {
    res.send("Welcome to REST API with Testing");
})

// get with return json data 
app.get("/JsonData",(req,res)=> {
    res.json(employees);
})

app.post("/storeData",(req,res)=> {
    let emp = req.body;                 // receive the data from body part. 
    let result = employees.find(e=>e.id==emp.id);
    if(result==undefined){          // no record present then it return undefined. 
        employees.push(emp);
        res.send("Record stored successfully")
    }else {
        res.send("Id must be unique");
    }
})

app.listen(9090,()=>console.log("Server running on port number 9090"));

module.exports=app;     // in testing using require we can load can call all functions. 