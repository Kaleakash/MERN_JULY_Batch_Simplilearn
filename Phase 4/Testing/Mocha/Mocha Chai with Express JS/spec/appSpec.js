let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../src/app");
chai.use(chaiHttp);     // In chai reference enable http module reference. 
let expect = chai.expect;       // created the style 

describe("Express JS Testing",()=> {

    it("Get Method testing",async ()=> {
        let result = await chai.request(app).get("/allStudentInfo");
        expect(result.status).to.be.equal(200);
        let student  = result.body;
        expect(student.length).to.be.equal(1);
    });

    it("Post method testing ",async()=> {
        let student = {sid:101,sname:"Ravi",age:18}
       
        /*let result = await chai.request(app).post("/storeStudentInfo").send(student);
        expect(result.status).to.be.equal(200);
        expect(result.text).to.be.equal("Student Record stored successfully");*/

        let result = await chai.request(app).post("/storeStudentInfo").send(student);
        expect(result.status).to.be.equal(200);

        //expect(result.text).to.be.equal("Student Id must be unique");
        expect(result.text).to.be.equal("Age must grether than 21");
    })
})