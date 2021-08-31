let obj = require("../src/readFile")

describe("Fs module testing",()=> {
    it("Read file data ",()=> {
        let data = obj.readDataFromFile();
        expect(data).toContain("fs");
    })
})