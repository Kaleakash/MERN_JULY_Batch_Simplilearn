let should = require("chai").should();
let id=100;
let name = "Raj";
let result = true;
let num = [10,20,30,40,50,60];
let emp = {id:100,name:"Raj",age:20};
name.should.be.a("string");
id.should.be.a("number");
result.should.be.a("boolean");
name.should.be.equal("Raj");
id.should.be.equal(100);
result.should.be.equal(true);
num.should.be.a("array");
num.should.be.include(30);
num.should.be.length(6);
emp.should.be.have.property("id")
emp.should.be.have.property("id").to.be.equal(100);
emp.should.be.have.property("name").to.be.length(3);
emp.should.be.have.property("age").to.greaterThanOrEqual(20);