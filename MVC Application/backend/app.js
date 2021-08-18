// load all the modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let productRouter = require("./router/product.router");

// database URL 
let url = "mongodb://localhost:27017/mern";

//create the reference of express 
let app = express();

// add middleware 
app.use(bodyParser.json());     // enable data from request body

// to avoid database connection warning 
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
// connect the database 
mongoose.connect(url,options).
then(res=>console.log("connected")).
catch(err=>console.log(err));

// match main path and pass to router file 
app.use("/api/product",productRouter);
//app.use("/api/customer",customerRouter);

app.listen(9090,()=>console.log("server running on port number 9090"));
