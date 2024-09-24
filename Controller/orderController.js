const order=require("../Models/orderModel")
const { all } = require("../Router/userRouter")

module.exports.createOrder=async(req,res)=>{
    const userId =req.params.userId
    const newOrder = await order.create({user:userId , product:req.body.product,price:req.body.price})
    res.json(newOrder)
}

module.exports.getorders=async(req,res)=>{
    const allOrder=await order.find()
    res.json(allOrder)
}

module.exports.getOneOrder=async(req,res)=>{
const orderId=req.params.id
const oneOrder=await order.findById(orderId)
res.json(oneOrder)
}