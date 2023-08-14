const express=require("express")
const { UserModel}=require("../model/userModel")
const jwt=require("jsonwebtoken")

const userRouter=express.Router();

//Registration
userRouter.post("/register",async(req,res)=>{
    try {
        const user=new UserModel(req.body)
        await user.save()
        res.status(200).send({"msg":"New user has been Registered!"})
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

//Authentication
userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try {
        const user=await UserModel.findOne({email:email,pass:pass})
        if(user){
            const token=jwt.sign({course:"node"},"masai")
            res.status(200).send({"msg":"Login Successfull!",token:token})
        }else{
            res.status(200).send({"msg":"Wrong Credentials!"})
        }
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

module.exports={
    userRouter
}