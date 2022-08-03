const express=require("express");
const jwt=require("jwt-simple");
const tokenObj=require("../Token");

const loginModule=express.Router();

loginModule.post("/",(req,res)=>{
    const uname=req.body.uname
    const upwd=req.body.upwd
    if(uname==="admin" && upwd==="admin123"){
    const token=jwt.encode({uname:uname,upwd:upwd},"skill123")
    tokenObj.token=token;
    console.log(token)
    res.json({msg:"Login Succesfully",token:token})
    }else{
        res.json({msg:"Login Failed"})
    }
})

module.exports=loginModule