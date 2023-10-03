const mongoose=require("mongoose")


const viewerSchema=new mongoose.Schema({
       viewer:{
        type:String,
        required:true,
       }
})

module.exports=mongoose.model("Viewer",viewerSchema);