let fs = require("fs");
let emp4 = {id:105,name:"Nanu",age:30}
fs.readFile("employees.json",(err,data)=> {
    if(!err){
        let employees = JSON.parse(data.toString());
        employees.push(emp4);
        fs.writeFile("employees.json",JSON.stringify(employees),(err)=> {
            if(!err){
                console.log("New Employee records store in json array");
            }
        })
    }
})