let fs = require("fs");
fs.readFile("demo2.txt",(err,data)=> {
    if(!err){
        console.log(data.toString())
    }else {
        console.log(err)
    }
})
console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")