let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=>{
    if(!err){
        let db=client.db("mern");
        var cursor=db.collection("Employees").find({});
         cursor.forEach(doc=>{
             console.log(doc);
             client.close();
         })
        
    }else{
        console.log(err);
    }
    //client.close();
})