let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());
let employees = [
    {"empid":100,"name":"Raj","salary":45000,"position":"Manager","city":"Bangalore"},
    {"empid":101,"name":"Ravi","salary":24000,"position":"Clerk","city":"Mumbai"}
]

// get all customer details 
// http://localhost:9090/allEmployeeDetails
app.get("/allEmployeeDetails",(req,res)=> {
    res.json(employees);
});

// find employee details base upon the empId
// http://localhost:9090/findEmployeeById/100   display employee details 
//  http://localhost:9090/findEmployeeById/1   no employee present
app.get("/findEmployeeById/:id",(req,res)=> {
        let id = req.params.id;
        let emp = employees.find(emp=>emp.empid==id); 
        if(emp==undefined){
            res.json({"msg":"Record not present with id is "+id})
        }else {
            res.json(emp);
        }
})
// post method to store the data in array with unique id 
// http://localhost:9090/storEmployeeRecord
//  {"empid":100,"name":"Raj","salary":45000,"position":"Manager","city":"Bangalore"}
//  {"empid":102,"name":"Ajay","salary":35000,"position":"Manager","city":"Delhi"}
app.post("/storEmployeeRecord",(req,res)=> {
    let employee = req.body;
    let result = employees.find(emp=>emp.empid==employee.empid);
    if(result==undefined){
                employees.push(employee);
                res.send("Record stored successfully ")
    } else {
                res.send("Record didn't store id must be unique");
    }
})

// put method to update the salary using id or position 
// http://localhost:9090/updateSalary
// {"empid":101,"salary":5000}
// {"empid":123,"salary":1000}
app.put("/updateSalary",(req,res)=> {
    let employee = req.body;
    // if record present it return index position else return -1
    let index = employees.findIndex(emp=>emp.empid==employee.empid);
    if(index<0){
        res.send("Record didn't present");
    }else {
        employees[index].salary = employees[index].salary +employee.salary;
        res.send("Salary updated successfully");
    }
})

// delete method to delete record using id 
// http://localhost:9090/deleteEmployeeRecord/100   record deleted 
// http://localhost:9090/deleteEmployeeRecord/1000     record not present
app.delete("/deleteEmployeeRecord/:id",(req,res)=> {
    let id = req.params.id;
    let index = employees.findIndex(emp=>emp.empid==id);
    if(index<0){
        res.send("Record didn't present");
    }else {
        employees.splice(index,1);      // using index position we delete one element     
        res.send("Record deteled successfully");
    }
})

app.listen(9090,()=>console.log("Server running on port number 9090"))