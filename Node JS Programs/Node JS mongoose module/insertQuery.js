let obj = require("mongoose");
let url = "mongodb://localhost:27017/mern"; // load and connect database 
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,options).then(res=>console.log("connected")).catch(error=>console.log(error));
let db = obj.connection;        // get the connection reference. 

// life cycle function 
db.once("open",()=> {
    // create the Schema 
    var customerSchema = obj.Schema({
        _id:Number,
        name:String,
        age:Number
    });
    // using schema create model 
//var customerModel = obj.model("Customer",customerSchema); it create collection in lower case with s post fix. 
var customerModel = obj.model("",customerSchema,"Customer");
    // now create cutomer reference using model 
    //let cust1 = new customerModel({_id:1,name:"Raj",age:21});
    let cust2 = new customerModel({_id:4,name:"Ajay",age:32});
    let cust3 = new customerModel({_id:5,name:"Vijay",age:28});
    customerModel.insertMany([cust2,cust3],(err,result)=> {
        if(!err){
            console.log(result);
        }
        obj.disconnect();
    })
})
