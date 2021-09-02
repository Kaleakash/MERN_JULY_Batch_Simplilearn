let op = require("../src/operation");

describe("Operation Testing",()=> {
    it("Addition",()=> {
        let result = op.add(10,20);
        expect(30).toBe(result);
    })
})