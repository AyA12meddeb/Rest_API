const express = require("express")
const router = express.Router()
const {createProduct , getProduct , updateProduct , deleteProduct} = require("../controllers/productcontrollers")

router.post("/createproduct", createProduct)
router.get("/getproduct", getProduct)
router.put("/updateproduct/:id", updateProduct)
router.delete("/deleteproduct/:id", deleteProduct)







module.exports =router