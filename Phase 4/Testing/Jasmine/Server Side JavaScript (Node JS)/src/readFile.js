let fs = require("fs");

function readDataFromFile() {
    let data = fs.readFileSync("./src/demo.txt")
    return data.toString();     // converting buffer data to string format 
}

module.exports= {readDataFromFile}

