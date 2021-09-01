let app = require("../../src/app");
let supertest = require("supertest");

describe("Rest API Testing",()=> {

    it("Simple Text Message",(finish)=> {
        supertest(app).get("/simpleTextMsg").
        expect(200).
        expect(data=>expect("Welcome to REST API with Testing").toBe(data.text)).
        end(err=>err?finish(err):finish());
    })

    it("Json Data get method Testing",(finish)=> {
        supertest(app).get("/JsonData").
        expect(200). 
        expect(data=> {
            let employees = data.body;
            expect(3).toBe(employees.length);
            expect(100).toBe(employees[0].id)
            expect("Raj").toBe(employees[0].name)
            expect(21).toBe(employees[0].age)

        }).end(err=>err?finish(err):finish());
    })

    it("Post Method Testing ",(finish)=> {
        let emp = {id:105,name:"Ajay",age:26}
        supertest(app).post("/storeData").send(emp).
        expect(200).
        expect(data=>expect("Record stored successfully").toBe(data.text)).
        end(err=>err?finish(err):finish());
    })
})