let request = require("request");
request("https://jsonplaceholder.typicode.com/todos",{json:true},(err,reponse,body)=> {
    if(!err){
        console.log(body.length);
    }
})