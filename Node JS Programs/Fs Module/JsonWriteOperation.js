let fs = require("fs");
let emp = {id:100,name:"Ravi",age:21};

fs.writeFile("emp.json",JSON.stringify(emp),(err)=> {
    if(!err){
        console.log("employee details stored in file successfully")
    }else {
        console.log(err);
    }
})