let expect = require("chai").expect;
let id=100;
let name = "Raj";
let result = true;
let num = [10,20,30,40,50,60];
let emp = {id:100,name:"Ravi",salary:12000}
expect(id).to.be.a("number");
expect(name).to.be.a("string");
expect(result).to.be.a("boolean")
expect(id).to.be.equal(100);
expect(name).to.be.equal("Raj")
expect(result).to.be.equal(true);
expect(num).to.be.a("array");
expect(num).to.be.a("array").length(6);
expect(num).to.be.a("array").include(10);
expect(emp).to.have.property("id")
expect(emp).to.have.property("id").to.be.equal(100);
expect(emp).to.have.property("name").to.be.a("string");
expect(emp).to.have.property("name").to.be.equal("Ravi");
expect(emp).to.have.property("salary").to.be.greaterThan(10000);


