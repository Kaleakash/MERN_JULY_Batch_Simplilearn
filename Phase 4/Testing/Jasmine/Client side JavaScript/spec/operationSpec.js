
describe("Operation Testing",()=> {
    it("Simple Testing",()=> {
        expect(true).toBeTruthy();  // your exepection and actual both match 
    })
    it("Another testing",()=> {
        //expect(false).toBeTruthy();
        expect(false).toBeFalsy();
    })

    it("Addition function testing",()=> {
        var result = add(10,20);        // calling JS function 
        expect(30).toBe(result);
    })

    it("Substraction function testing",()=> {
        var result = sub(20,10);
        expect(10).toBe(result);
    })
})

describe("Employee Testing",()=> {
    it("Calulate Salary ",()=> {
            var managerSalary = calSalary(100,"Raj",45000,"Manager");
            var programmerSalary = calSalary(101,"Ramesh",25000,"Programmer");
            var testerSalary = calSalary(102,"Raju",15000,"Tester");
            expect(50000).toBe(managerSalary);
            expect(28000).toBe(programmerSalary);
            expect(15000).toBe(testerSalary);                
    })
})