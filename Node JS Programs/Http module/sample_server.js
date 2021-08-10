// load the http module 
let http = require("http");

let server =  http.createServer(function(req,res){
            console.log("Client send the request");
            res.end("Welcome to Http Client Module");          
});

server.listen(9090,()=>console.log("Server is running port port number 9090"))

// client send the request through URL 
// http://localhost:9090

