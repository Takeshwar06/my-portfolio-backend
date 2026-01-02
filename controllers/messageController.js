const Messages=require("../models/messagemodel")
require('dotenv').config();

module.exports.sendMessage=async(req,res,next)=>{
    try {
      const {name,email,subject,message,viewer}=req.body;
      const data=await Messages.create({name,email,subject,message,viewer})
      res.json(data);
    } catch (error) {
        next(error);
    }
}
module.exports.getAllMessage=async(req,res,next)=>{
    try {
        const {Token}=req.body;
        if(Token==process.env.TOKEN){
            const data=[]
            return res.json({success:true,data})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        next(error);
    }
}
