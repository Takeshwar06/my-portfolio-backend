const Viewers=require("../models/viewerModel")
require('dotenv').config();
module.exports.addViewer=async(req,res,next)=>{
    try {
        const {viewer}=req.body;
        const data=await Viewers.create({viewer})
        return res.json(data);
    } catch (error) {
        next(error)
    }
}

module.exports.getAllViewer=async(req,res,next)=>{
    try {
        const {Token}=req.body;
        if(Token==process.env.TOKEN){
            const data=await Viewers.countDocuments();
           return res.json({success:true,data});
        }
        else{
          return res.json({success:false})
        }
    } catch (error) {
        next(error)
    }
}
