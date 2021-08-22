let net = require("net");
let readline= require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let client = net.createConnection(8787,()=> {
    console.log("Client Send the request to server");
    // sending data to server....
    client.write("Hello Server I am Client")
});

// receive the message from server 
client.on("data",(msg)=> {
    console.log(msg.toString());
})

r1.on("line",(message)=> {                      // after enter again it waiting for your input
    client.write(`Client Say : ${message}`);
})