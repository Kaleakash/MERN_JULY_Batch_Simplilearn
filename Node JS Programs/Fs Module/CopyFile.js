let fs = require("fs");
// Asyn copy operation
fs.copyFile("Sample.txt","TargetSample.txt",(err)=> {
    if(!err){
        console.log("Data Store in file")
    }
})