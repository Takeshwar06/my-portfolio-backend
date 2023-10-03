
const { authentication, authToken } = require("../controllers/passwordController");
const express=require("express");

const router=express.Router();

router.post("/authentication",authentication);
router.post("/authtoken",authToken);
module.exports=router;