const express=require("express");
const tokenObj=require("../Token");

const module2=express.Router();

module2.get("",require("../Middleware/middleware"),(req,res)=>{
 
    res.json({msg:"Module2"})
   
})

module.exports=module2