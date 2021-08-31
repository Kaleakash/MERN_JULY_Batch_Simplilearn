

describe("Fake Service Testing",()=> {

        it("RESt API Test",async ()=> {
            let result = await loadFakeData();        // asynchronous 
            console.log(result[0]);
            let rec = result[0];
            expect(200).toBe(result.length);
            expect(1).toBe(rec.id);
            expect(1).toBe(rec.userId)
            expect("delectus aut autem").toBe(rec.title);
            expect(rec.result).toBeFalsy();
        })
})