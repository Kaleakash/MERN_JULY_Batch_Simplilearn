// load the module 
let fs = require("fs");
let data = fs.readFileSync("demo1.txt");
//console.log(data);      //display the data in Buffer format
console.log(data.toString())    // toString() help to convert buffer to 
                                //string format 