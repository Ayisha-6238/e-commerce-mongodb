const mongoose=require("mongoose")

const productschema=mongoose.Schema({
    id:{
       type:Number
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:false,
    }
})


const productModel=mongoose.model("products",productschema)
module.exports=productModel