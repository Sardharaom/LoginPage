const express=require("express");
const tokenObj=require("../Token");

const middleware=(req,res,next)=>{
   const reqHeaders=req.headers;
    if(reqHeaders.token == tokenObj.token){

   next()
    }else{
        res.json({msg:"module1 failed"})
    }
}

module.exports=middleware