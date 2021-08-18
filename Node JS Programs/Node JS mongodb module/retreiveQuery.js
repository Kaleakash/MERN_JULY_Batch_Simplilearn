// load the module and create the reference. 
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mern"); // connect data 
        //var cursor = db.collection("Emp").find({}); // query
        var cursor = db.collection("Emp").find({age:{$gt:30}}); // query 
        cursor.forEach(doc=> {
            console.log(doc)
            //console.log("Id is "+doc._id+" Name is "+doc.name);
            client.close();
        })

    }else {
            console.log(err);
    }
    
})
