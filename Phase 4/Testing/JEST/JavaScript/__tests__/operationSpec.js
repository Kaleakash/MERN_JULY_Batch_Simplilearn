let op = require("../src/operation");

describe("Operation Testing",()=> {
    it("Addition",()=> {
        let result = op.add(10,20);
        expect(30).toBe(result);
    })

    it("Substration",()=> {
        let result = op.sub(20,10);
        expect(10).toBe(result);
    })

})