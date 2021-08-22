// load the express module 
let express = require("express");
// create the reference of express 
let app = express();
//Now we have to create reference of web socket with the 
// help express reference. 
let ws = require("express-ws")(app);
// http://localhost:9090 
app.get("/",(req,res)=> {
    // __dirname : it provide current directory path 
    res.sendFile(__dirname+"/index.html");
})
app.ws("/",(socket,req)=> {
        console.log("Web Socket connection done successfully...");
        // To recieve the message from client 
        socket.on("message",(data)=> {
            console.log(data);
            socket.send("Client I Got message "+new Date()); // server send message to client 
        })
})

app.listen(9090,()=>console.log("Server running on port number 9090"));