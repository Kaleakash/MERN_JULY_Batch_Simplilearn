// load the module 
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());     // enable data from req body.

let students = [
    {sid:100,sname:"Ajay",age:26}
]

app.get("/allStudentInfo",(req,res)=> {
    res.json(students);
})
app.post("/storeStudentInfo",(req,res)=> {
    let student = req.body;
    let result = students.find(s=>s.sid==student.sid);
    if(result==undefined){
            if(student.age>=21){
                   students.push(student);
                   res.send("Student Record stored successfully") 
            }else {
                    res.send("Age must grether than 21")
            }
    }else {
            res.send("Student Id must be unique");
    }   
})

app.listen(9090,()=>console.log("Running on port number 9090"));

module.exports=app;
