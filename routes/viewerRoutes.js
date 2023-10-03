
const express=require("express");
const { addViewer,getAllViewer } = require("../controllers/viewerController");

const router=express.Router();
router.post("/addviewer",addViewer);
router.post("/getallviewer",getAllViewer);
module.exports=router;