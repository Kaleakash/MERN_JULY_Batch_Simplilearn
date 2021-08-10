let http = require("http");
let url = require("url");

let indexPage = `
                <html>
                        <head>
                        </head>
                        <body>
                                <h2>Welcome to Simple web page creating using http module</h2>
                                <a href="AboutUs">About Us</a>
                                <a href="ContactUs">Contact Us</a>
                                <a href="Login">Login</a>
                        </body>
                </html>
            `

let server = http.createServer((req,res)=> {
        let urlRef = url.parse(req.url,true);

        if(urlRef.pathname != "/favicon.ico"){
            
            res.writeHead(200,{"content-type":"text/html"});

            if(urlRef.pathname=="/"){
                    res.write(indexPage);
            }else if(urlRef.pathname =="/AboutUs"){
                res.write("<h2>Welcome to About Us Page</h2>")
            }else if (urlRef.pathname =="/ContactUs"){
                res.write("<h2><font color='red'>Welcome to Contact Us Page</font></h2>")
            }else if(urlRef.path=="/Login"){
                res.write("<h2>Login Page</h2>")
            }else {
                res.write("<h2>Not found page</h2>");
            }

        }
        res.end();

});

server.listen(9090,()=>console.log("Server running on port number 9090"))