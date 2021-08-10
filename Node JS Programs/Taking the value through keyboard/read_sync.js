let obj = require("readline-sync");
let id = obj.questionInt("Enter the id")
let name = obj.question("Enter the name");
let salary = obj.questionFloat("Enter the salary")
console.log("Your id is "+id);
console.log("Your name is "+name);
console.log("Your salary is "+salary);