require("dotenv").config({path:"./config/.env"});
const express = require("express");
const mongoose = require("mongoose")
const connectDb = require("./config/connectDB");
const app = express()
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
mongoose.set('strictQuery', false);

app.use(express.json())
connectDb()

app.use("/api/auth",authRoute)
app.use("/api/user",usersRoute)

app.listen(process.env.PORT,()=>{
    console.log("server connected on port",process.env.PORT);
})