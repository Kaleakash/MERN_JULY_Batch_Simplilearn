let fs = require("fs");
let msg = "Welcome to Fs asynchronous operation\n";
// old value override by new value. means previous value get lost. 
// fs.writeFile("demo2.txt",msg,(err)=> {
//     if(!err){
//         console.log("Data stored in file successfully..")
//     }
// })
// new data append to old data means data doesn't lose. 
fs.writeFile("demo2.txt",msg,{flag:"a+"},(err)=> {
    if(!err){
        console.log("Data stored in file successfully..")
    }
})
console.log("1st Statement")
console.log("2nd Statement")
console.log("3rd Statement")