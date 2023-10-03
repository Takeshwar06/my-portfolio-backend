const Message=require("../models/messagemodel")
require('dotenv').config();

module.exports.sendMessage=async(req,res,next)=>{
    try {
      const {name,email,subject,message,viewer}=req.body;
      const data=await Message.create({name,email,subject,message,viewer})
      res.json(data);
    } catch (error) {
        next(error);
    }
}
module.exports.getAllMessage=async(req,res,next)=>{
    try {
        const {Token}=req.body;
        if(Token==process.env.Token){
            const data=await Message.find();
            return res.json({success:true,data})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        next(error);
    }
}