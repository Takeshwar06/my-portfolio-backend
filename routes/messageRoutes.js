
const express=require("express");
const { sendMessage, getAllMessage } = require("../controllers/messageController");

const router=express.Router();
router.post("/sendmessage",sendMessage);
router.post("/getallmessage",getAllMessage);
module.exports=router;