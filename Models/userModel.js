const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    }
})

const userModel=mongoose.model("users",userSchema)
module.exports=userModel