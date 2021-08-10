let obj = require("readline");
let r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter the id",(id)=> {
   
    r1.question("Enter the name",(name)=> {
       
        r1.question("Enter the age",(age)=> {
            console.log("id is "+id)
            console.log("name is "+name);
            console.log("age is "+age);
            r1.close();
        })

    })
    
})