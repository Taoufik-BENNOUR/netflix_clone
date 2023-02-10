require("dotenv").config({path:"./config/.env"});
const express = require("express");
const mongoose = require("mongoose")
const connectDb = require("./config/connectDB");
const app = express()
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const moviesRoute = require("./routes/movies")
const listRoute = require("./routes/lists");
const Weight = require("./models/Weight");
mongoose.set('strictQuery', false);

app.use(express.json())
connectDb()

app.use("/api/auth",authRoute)
app.use("/api/user",usersRoute)
app.use("/api/movie",moviesRoute)
app.use("/api/lists",listRoute)

app.get('/api/weights', async(req, res) => {
    
    const interval = req.query.interval || 'week';
    let groupBy;
    if (interval === 'week') {
      groupBy = {
        $dateToString: { format: "%Y-%U", date: "$date" }
      };
    } else if (interval === 'month') {
      groupBy = {
        $dateToString: { format: "%Y-%m", date: "$date" }
      };
    } else if (interval === 'year') {
      groupBy = {
        $dateToString: { format: "%Y", date: "$date" }
      };
    }
    try {
        const weight =await Weight.aggregate([
            {
                $group: {
                  _id: {
                    userId: "$userId",
                    interval: groupBy
                  },
                  avgWeight: { $avg: "$weight" }
                }
              }
            ])
        res.status(200).json(weight)
    } catch (error) {
        res.status(500).json(error)
    }
    })

app.post('/api/weights', async(req, res) => {
        try {
           const newWeight = new Weight(req.body)
           await newWeight.save()
            res.status(200).json(newWeight)
        } catch (error) {
            res.status(500).json(error)
        }
        })

app.listen(process.env.PORT,()=>{
    console.log("server connected on port",process.env.PORT);
})