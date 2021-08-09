let fs = require("fs");
fs.readFile("emp.json",(err,data)=> {
    if(!err){
        //console.log(data);
        //console.log(data.toString())
        // converting string to json 
        let emp = JSON.parse(data.toString());
        console.log("id is "+emp.id);
        console.log(" name is "+emp.name);
        console.log("Age is "+emp.age);  
    }
})