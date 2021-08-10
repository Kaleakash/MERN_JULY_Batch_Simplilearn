let fs  = require("fs");
let employees = [
    {id:100,name:"Ravi",age:21},
    {id:101,name:"Rajesh",age:24},
    {id:102,name:"Raju",age:25}
];

fs.writeFile("employees.json",JSON.stringify(employees),(err)=> {
    if(!err){
        console.log("Record stored successfully");
    }
})