const express=require("express")
const Product=require("../models/product_model")
const { getProducts, getProduct, postProducts, UpdatedProduct, deleteProduct } = require("../controllers/product_controllers")
const router=express.Router()

router.get("/:id",getProduct)
router.get("/",getProducts)
router.post('/',postProducts)
router.put("/:id",UpdatedProduct)
router.delete("/:id",deleteProduct)


module.exports=router