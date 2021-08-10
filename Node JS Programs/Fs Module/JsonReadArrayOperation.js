let fs = require("fs");

fs.readFile("employees.json",(err,data)=> {
    if(!err){
        let empString = data.toString();
        let employees = JSON.parse(empString);
        console.log(employees.length);
employees.forEach(emp=>console.log("id is "+emp.id+" Name is "+emp.name+" Age is "+emp.age))

    }
})