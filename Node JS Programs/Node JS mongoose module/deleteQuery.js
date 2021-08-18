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

    customerModel.deleteMany({age:{$gt:28}},(err,result)=> {
        if(!err){
           if(result.deletedCount>0){
                console.log("Record deleted ")
           }else {
                console.log("Record didn't delete")
           }
        }

        obj.disconnect();
    })
    

})
