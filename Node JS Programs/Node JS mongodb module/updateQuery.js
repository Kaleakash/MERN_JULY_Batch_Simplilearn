// load the module and create the reference. 
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mern"); // connect data 
        db.collection("Emp").updateMany({city:"Delhi"},{$set:{age:35}},(err,result)=> {
            if(!err){
                //console.log(result);
                if(result.modifiedCount>0){
                        console.log("Record updated successfully")
                }else {
                        console.log("Record didn't update")
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
