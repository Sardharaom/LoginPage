const express=require("express");
const tokenObj=require("../Token");

const module1=express.Router();

module1.get("",(req,res)=>{
   const reqHeaders=req.headers;
    if(reqHeaders.token == tokenObj.token){

    res.json({msg:"Module1"})
    }else{
        res.json({msg:"module1 failed"})
    }
})

module.exports=module1