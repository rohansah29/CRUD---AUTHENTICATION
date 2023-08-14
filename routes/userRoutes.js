const express = require("express");
const { UserModel } = require("../model/userModel");

const userRouter=express.Router()

//CREATE LOGIC
userRouter.post("/add", async (req, res) => {
    try {
      const data = req.body;
      const user = new UserModel(data);
      await user.save();
      res.send({ msg: "New user has been Registered." });
    } catch (error) {
      res.send({ err: error });
    }
  });
  
  //READ
  userRouter.get("/", async (req, res) => {
    const q = req.query;
    console.log(q);
    try {
      const users = await UserModel.find(q);
      res.send(users);
    } catch (error) {
      res.send({ err: error });
    }
  });
  
  //UPDATE
  userRouter.patch("/update/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
      await UserModel.findByIdAndUpdate({ _id: userID }, req.body);
      res.send({ msg: `Update the document with _id:${userID}` });
    } catch (error) {
      console.log({ err: error });
    }
  });
  
  //DELETE
  userRouter.delete("/delete/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
      await UserModel.findByIdAndDelete({ _id: userID });
      res.send({ msg: `Deleted the document with _id:${userID}` });
    } catch (error) {
      console.log({ err: error });
    }
  });

  module.exports={
    userRouter
  }