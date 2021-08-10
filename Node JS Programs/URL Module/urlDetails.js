let url = require("url");
//let sampleUrl = "https://www.google.com/doodles"
let sampleUrl = "http://localhost:9090/MyWebPage?name=Ravi&age=21";
console.log(sampleUrl);
let urlObj = url.parse(sampleUrl,true);
//console.log(urlObj);
console.log("Protocol "+urlObj.protocol)
console.log("Port Number "+urlObj.port)
console.log("Path "+urlObj.path)
console.log("Path name is "+urlObj.pathname)
//console.log("Query "+urlObj.query)
let queryRef = urlObj.query;
console.log(queryRef.name)
console.log(queryRef.age)