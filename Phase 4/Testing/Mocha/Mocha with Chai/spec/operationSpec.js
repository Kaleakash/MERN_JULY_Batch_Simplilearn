let op = require("../src/operation");
let  assert  = require("chai").assert
let should = require("chai").should();

describe("Operation Testing",()=> {
    it("Addition of two number",()=> {
        let result = op.add(10,20);
        assert.equal(result,30);
    })

    it("Substration of two number",()=> {
        let result = op.sub(20,10);
        result.should.to.be.equal(10);
    })

    it("Sum of even number",()=> {
        let num = [1,2,3,4,5,6,7,8,9,10];
        let result = op.sumOfEven(num);
        result.should.to.be.equal(30);
    })
})