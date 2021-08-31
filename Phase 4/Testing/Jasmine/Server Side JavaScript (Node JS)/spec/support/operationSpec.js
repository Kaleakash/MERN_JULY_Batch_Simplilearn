// load the file as a module 
let obj = require("../../src/operation")
describe("Operation Testing",()=> {
    it("Addition function testing ",()=> {
        let result = obj.add(10,20);
        expect(30).toBe(result);
    })

    it("Substraction function testing ",()=> {
        let result = obj.sub(10,5);
        expect(5).toBe(result);
    })
})