let express = require("express");
let bodyParser = require("body-parser");

let app = express();
// to enable data from request body in the form of json 
app.use(bodyParser.json());                         // enable json data. 
//app.use(bodyParser.urlencoded({extended:true}))     // enable form post method data. 

let customer = {cid:100,cname:"Ajay",age:21};

let customers = [
    {cid:101,cname:"Raj",age:34},
    {cid:102,cname:"Raju",age:36},
    {cid:103,cname:"Ravi",age:32},
    {cid:104,cname:"Ramesh",age:30}
]

// get method with return text message 
// http://localhost:9090/sayTextMessage
app.get("/sayTextMessage",(req,res)=> {
    res.send("Welcome to REST API in text format");
})
// get method with return json message 
// http://localhost:9090/sayJsonMessage
app.get("/sayJsonMessage",(req,res)=> {
    res.json({"msg":"Welcome to Rest API in Json format"});
})
//get method with return customer object in json format. 
// http://localhost:9090/customerInfo
app.get("/customerInfo",(req,res)=> {
    res.json(customer);
})
// get method with return array of customer in json format 
// http://localhost:9090/allCustomers
app.get("/allCustomers",(req,res)=> {
    res.json(customers);
})

// get method with one query param 
// http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam",(req,res)=> {
    let name = req.query.name
    res.send("Welcome to REST API user "+name);
})

// get method with mulitple query param 
// http://localhost:9090/multipleQueryParam?name=Ajay&age=21
app.get("/multipleQueryParam",(req,res)=> {
    let name = req.query.name;
    let age = req.query.age;
    res.send("Welcome user "+name+", Your age is "+age);
})


// get method with sinle path param 
// http://localhost:9090/singlePathParam/100
app.get("/singlePathParam/:id",(req,res)=> {
    let empId = req.params.id;
    res.send("Your Id is "+empId);
})

//post method 
// http://localhost:9090/storeCustomerInfo
// {"cid":100,"cname":"Ramesh","age":21}
app.post("/storeCustomerInfo",(req,res)=> {
    let cust = req.body;
    res.send("Customer record store succesfully with"+cust.cid);
})

// put method 
// http://localhost:9090/updateCustomerInfo 
app.put("/updateCustomerInfo",(req,res)=> {
    let cust = req.body;
    cust.cname = cust.cname+" Deep";
    cust.age = cust.age+5;
    res.json(cust);
})

// delete method
// http://localhost:9090/deleteCustomerInfo/100
app.delete("/deleteCustomerInfo/:id",(req,res)=> {
        let id = req.params.id;
        res.send("The record deleted with id is "+id);
})

app.listen(9090,()=>console.log("Server running on port number 9090"));