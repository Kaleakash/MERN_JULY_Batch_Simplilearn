let fs = require("fs");
let emp = {id:103,name:"Ajay",age:26};

fs.writeFile("emp.json",JSON.stringify(emp),(err)=> {
    if(!err){
        console.log("employee details stored in file successfully")
    }else {
        console.log(err);
    }
})