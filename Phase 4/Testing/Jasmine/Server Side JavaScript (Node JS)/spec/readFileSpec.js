let obj = require("../src/readFile")

describe("Fs module testing",()=> {
    it("Read file data ",()=> {
        let data = obj.readDataFromFile();
        expect(data).toContain("fs");
    })

    it("Read Json Data",()=> {
        let data = obj.readJsonData();
        let customers = JSON.parse(data);
        expect(3).toEqual(customers.length);
        expect(100).toBe(customers[0].cid);
        expect("Raj").toBe(customers[0].cname);
        expect(21).toBe(customers[0].age);
        expect(30).toBeGreaterThan(customers[2].age)
    })
})