let https = require("https");
https.get("https://jsonplaceholder.typicode.com/todos",(response)=>{
    let details = ""
    response.on("data",(info)=> {
    details = details+info; // it load and append one by one
        //console.log( JSON.parse(info.toString()));
    })

    response.on("end",()=> {
        //console.log(details);   // display all data as a string 
        let information = JSON.parse(details);
        console.log(information.length);    // display data as json 
    })
})