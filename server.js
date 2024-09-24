const express=require('express')
const userRouter=require("./Router/userRouter")
// const productRouter=require("./Router/productsRouter")
const dbconnection = require('./Configuration/dbconfig')



const app =express()
dbconnection()
// app.use("/",productRouter)
app.use("/",userRouter)








app.listen(4000,()=>{
    console.log("server is running");
    
})