// load the module and create the reference. 
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mern"); // connect data 
        
        db.collection("Emp").deleteOne({_id:104},(err,result)=> {
            if(!err){
                   if(result.deletedCount>0){
                        console.log("record deleted successfully");
                   }else {
                        console.log("Record not present");
                   }
            }else {
                    console.log(err);
            }
            client.close();
        })
    }else {
            console.log(err);
    }
    
})
