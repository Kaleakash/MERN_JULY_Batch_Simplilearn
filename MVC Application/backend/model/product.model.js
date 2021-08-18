// load the module 
let mongoose = require("mongoose");

// Schema 
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price : Number
});

// Model 
let productModel = mongoose.model("",productSchema,"Product");

module.exports=productModel;

