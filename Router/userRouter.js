const express=require("express")
const userController=require("../Controller/userController")
const productController=require("../Controller/productsController")
const orderController=require("../Controller/orderController")

const router= express.Router()
router.use(express.json())

router.post('/user/register',userController.register)
router.post("/user/login",userController.login)
router.get('/products',productController.getProducts)
router.post("/products",productController.addProduct)
router.put("/products/:id",productController.updateProducts)
router.delete("/products/:id",productController.deleteProducts)
router.post("/orders/:userId",orderController.createOrder)
router.get("/orders",orderController.getorders)
router.get("/orders/:id",orderController.getOneOrder)


module.exports=router