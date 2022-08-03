const express =require("express");
const loginModule=require("./Login/login")
const module1=require("./Module1/module1")
const module2=require("./Module1/module2")
const app=express();
app.use(express.json());

app.use("/login",loginModule)
app.use("/module1",module1)
app.use("/module2",module2)

app.listen(8383,()=>{
    console.log("server is listening on 8383")
})