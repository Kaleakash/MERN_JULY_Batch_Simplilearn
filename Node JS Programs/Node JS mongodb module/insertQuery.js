// load the module and create the reference. 
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mern");     // connected to database
        
        //db.collection("Emp").count().then(data=>console.log(data));
    
        let emp = {_id:105,name:"Vikash",age:34,city:"Bangalore"};
        db.collection("Emp").insertOne(emp,(err,result)=> {
            if(!err){
                console.log(result);
            }else {
                console.log(err);
            }
            client.close();
        })

    }else {
            console.log(err);
    }

})
