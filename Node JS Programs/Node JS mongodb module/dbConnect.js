// load the module and create the reference. 
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

obj.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected database")
    }else {
            console.log(err);
    }
    client.close();
})
