let obj = require("mongoose");
let url = "mongodb://localhost:27017/mern"; // load and connect database 

obj.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));
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
    var customerModel = obj.model("",customerSchema,"Customer");

    // now create cutomer reference using model 
    let cust1 = new customerModel({_id:1,name:"Raj",age:21});
    customerModel.insertMany(cust1,(err,result)=> {
        if(!err){
            console.log(result);
        }
        obj.disconnect();
    })
})
