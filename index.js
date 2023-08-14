const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const {userRouter}=require("./routes/userRoutes")

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users",userRouter)
// app.use("/students",studentRouter) or app.use("/teachers",teacherRouter)  like this you can create different routes.

//HOME
app.get("/", (req, res) => {
  res.setHeader("Content-type","text/html");
  res.send("<h1>HOME PAGE</h1>");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
    console.log("Running at port 8080");
  } catch (error) {
    console.log(error);
  }
});
