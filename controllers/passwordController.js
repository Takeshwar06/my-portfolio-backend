
require('dotenv').config();

module.exports.authentication=async(req,res,next)=>{
    try {
        const {subject}=req.body;
        if(subject.includes(process.env.PASS)){
            return res.json({success:true,Token:process.env.TOKEN})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        next(error);
    }
}
module.exports.authToken=async(req,res,next)=>{
    try {
        const {Token}=req.body;
        if(Token==process.env.Token){
            return res.json({success:true})
        }else{
            return res.json({success:false})
        }
    } catch (error) {
        next(error);
    }
}