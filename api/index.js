require("dotenv").config({path:"./config/.env"});
const express = require("express");
const mongoose = require("mongoose")
const connectDb = require("./config/connectDB");
const app = express()
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const moviesRoute = require("./routes/movies")
const listRoute = require("./routes/lists");
mongoose.set('strictQuery', false);

app.use(express.json())
connectDb()

app.use("/api/auth",authRoute)
app.use("/api/user",usersRoute)
app.use("/api/movie",moviesRoute)
app.use("/api/lists",listRoute)




app.listen(process.env.PORT,()=>{
    console.log("server connected on port",process.env.PORT);
})