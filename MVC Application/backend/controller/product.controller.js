// loading model and and creating the reference. 
let productModel = require("../model/product.model");

let storeProductDetails = (req,res)=> {
    
    let product = req.body; // retrieve the data from req.body
    productModel.insertMany(product,(err,result)=> {
        if(!err){
            res.send(result);
        }else {
            res.send(err);
        }
    })

}

let retreiveProductDetails  = (req,res)=> {
    productModel.find({},(err,doc)=> {
        if(!err){
            res.json(doc);
        }
    })
}
let upateProductPrice = (req,res)=> {
    let product = req.body;
    productModel.updateOne({_id:product._id},{$set:{price:product.price}},(err,result)=> {
        if(!err){
            res.send(result);
        }else {
            res.send(err);
        }
    })
}

let deleteProductById = (req,res)=> {
    let pid = req.params.pid;
    productModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
            res.send(result)
        }else {
            res.send(err);
        }
    })
}

module.exports={storeProductDetails,retreiveProductDetails,upateProductPrice,deleteProductById}





