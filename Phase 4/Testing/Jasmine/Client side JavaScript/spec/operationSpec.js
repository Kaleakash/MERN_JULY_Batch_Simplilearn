
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
})