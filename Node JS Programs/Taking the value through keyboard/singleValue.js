let obj = require("readline");
// we have to provide the std input and output device reference. 
// std input device is keywords. 
//std output device is console. 

let r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter the name",(name)=> {
    console.log("Welcome user "+name);
    r1.close(); 
})

// r1.question("Enter the age",(age)=> {
//     console.log("Your age is "+age)
//     r1.close();
// })