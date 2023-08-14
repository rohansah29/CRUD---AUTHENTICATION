const express=require("express");
const {connection}=require("./db")
const {userRouter}=require("./routes/userRoutes")
const {auth}=require("./middlewares/auth.middleware")


const app=express();
app.use(express.json())

app.use("/users",userRouter)

//Home page
app.get("/",(req,res)=>{
    res.status(200).send("HOME PAGE")
})

//About page
app.get("/about",(req,res)=>{
    res.status(200).send("ABOUT PAGE");
})

//Movies Data
app.get("/movies",auth,(req,res)=>{
    res.status(200).send({"data":"Movie Data..."})
})

//Series Data
app.get("/series",auth,(req,res)=>{
    res.status(200).send({"data":"Series Data..."})
})

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to the DB")
        console.log("Server is running at port 8080")
    } catch (err) {
        res.send(err)
    }
})