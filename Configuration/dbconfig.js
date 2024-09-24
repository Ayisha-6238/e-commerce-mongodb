
const mongoose=require("mongoose")

const dbconnection=()=>{
    mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>{
        console.log("db connected");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}


module.exports=dbconnection