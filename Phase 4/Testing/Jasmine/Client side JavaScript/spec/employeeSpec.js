describe("Employee class Testig",()=> {
        let emp;
        beforeAll(()=> {
            console.log("It call only once before testing start")
            emp = new  Employee(100,"Raj",12000);
        })
        beforeEach(()=> {
            console.log("Before each spec function it call")
        })
        it("Increment Salary ",()=> {
            //let emp1 = new Employee(100,"Raj",12000);
            expect(12000).toBe(emp.getSalary());
            emp.incrementSalary(emp.getSalary()+3000);
            expect(15000).toBe(emp.getSalary());
        })
        xit("Decrement Salary ",()=> {
            //let emp2 = new Employee(100,"Raj",12000);
            expect(15000).toBe(emp.getSalary());
            emp.decrementSalary(emp.getSalary()-2000);
            expect(13000).toBe(emp.getSalary());
        })
        afterEach(()=> {
            console.log("After each spec function it call")
        })
        afterAll(()=> {
            console.log("It call only once after testing finished.")
            delete emp;         // remove memory
        })
})