let net = require("net");
let server = net.createServer();
let readline= require("readline");      // taking the value through 
                                        //keyboards as asynchronous 
let r1 = readline.createInterface({
    input:process.stdin,                //standard input device :keyboards 
    output:process.stdout               // standard output device : console
});

// This code will execute if any client(JS program )
// send the request to server using port number 8787
server.on("connection",(socket)=> {
    console.log("New Client send the request");
    socket.on("data",(info)=> {
        console.log(info.toString())    // this code is use to receive the value from client
    })
    //server send data to client 
    socket.write("Hello Client, Welcome to Socket Programming");

    r1.on("line",(message)=> {                      // after enter again it waiting for your input
        socket.write(`Server Say : ${message}`);
    })
})


server.listen(8787,()=>console.log("Server running on port number 8787"));
