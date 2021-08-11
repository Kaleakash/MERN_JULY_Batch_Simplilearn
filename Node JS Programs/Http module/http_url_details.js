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
let loginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login Page</h2>
    <form action="checkUser" method="GET">
        <label>UserName</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/>
        <input type="reset" value="reset"/>
    </form>
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
                res.write(loginPage);
            }else if(urlRef.pathname=="/checkUser"){
                        login = urlRef.query;   // this properties help to extract the data from url. 
                        //console.log(login);
                        //res.write("Login page submit");
                        // read json data from file using fs module and check multiple user and password. 
                        if(login.user=="Raj" && login.pass =="123"){
                                res.write("Successfully Login")
                        }else {
                                res.write("Failure try once again")
                        }
            }else {
                res.write("<h2>Not found page</h2>");
            }

        }
        res.end();

});

server.listen(9090,()=>console.log("Server running on port number 9090"))