// //ES5 object creation syntax 
// // function itself behave like a class in ES5 style 
// function Employee() {
//         // property 
//         this.id =100;
//         this.fname = "Ravi";
//         // behaviour 
//         this.dis= function() {
//             document.write("<br/>Employee Object ES5 style ")
//             document.write("<br> Id is "+this.id);
//             document.write("<br> Name is "+this.fname);
//         }
// }
// //Employee(); it behave like a function 
// var emp1 = new Employee();  // creating the object. 
// emp1.dis();



// //ES6 style 
// class Person {
//     id = 101;
//     fname = "Ramemsh"
//     dis() {
//         document.write("<br/>Person Object ES6 style")
//         document.write("<br> Id is "+this.id)
//         document.write("<br> Name is "+this.fname);
//     }
// }
// let p1 = new Person();
// p1.dis();


//Constructor 


//ES5 object creation syntax 
// function itself behave like a class in ES5 style 
function Employee(id,name) {
    // property 
    this.id =id;
    this.fname = name;
    // behaviour 
    this.dis= function() {
        document.write("<br/>Employee Object ES5 style ")
        document.write("<br> Id is "+this.id);
        document.write("<br> Name is "+this.fname);
    }
}
//Employee(); it behave like a function 
var emp1 = new Employee(100,"Ravi");  // creating the object. 
emp1.dis();

var emp2 = new Employee(101,"Ramesh");  // creating the object. 
emp2.dis();


//ES6 style 
// constructor is a special function 
// which help to create the memory and do the 
// initialization for instance variable.
class Person {
constructor(id,fname){
    this.id = id;
    this.fname = fname;
}
dis() {
    document.write("<br/>Person Object ES6 style")
    document.write("<br> Id is "+this.id)
    document.write("<br> Name is "+this.fname);
}
}
let p1 = new Person(103,"Raju");
p1.dis();
let p2 = new Person(104,"Rajesh");
p2.dis();



