// load the controller file 
let productController = require("../controller/product.controller");
let express = require("express");
let router = express.Router();  // created router reference. 

// map sub path and http method and pass the flow to controller methods. 

router.post("/storeProductDetails",productController.storeProductDetails);
router.get("/getProductDetails",productController.retreiveProductDetails);
router.put("/updateProductDetails",productController.upateProductPrice);
router.delete("/deleteProductDetails/:pid",productController.deleteProductById);


module.exports=router;