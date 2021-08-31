

describe("Fake Service Testing",()=> {

        it("RESt API Test",async ()=> {
            let result = await loadFakeData();        // asynchronous 
            //console.log(result);
            expect(200).toBe(result.length);
        })
})