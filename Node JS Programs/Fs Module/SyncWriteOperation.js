// it is use to load the pre-defined module fs. 
// storing the data in a file 
let fs = require("fs");
let msg = "Welcome Again\n";
//fs.writeFileSync("demo1.txt",msg);   // Data get override by default previous data be lost. 
fs.writeFileSync("demo1.txt",msg,{flag:"a+"})   // data append to previous value
console.log("Data stored in file successfully..");
console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")