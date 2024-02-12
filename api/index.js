import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.js';
import usersRoute from './routes/usersRoute.js';
import roomsRoute from './routes/roomsRoute.js';
import hotelsRoute from './routes/hotelsRoute.js';
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
    }catch(err){
        throw err;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Mongodb disconnected!");
})

app.use(cookieParser());
app.use(cors());
app.use(express.json());

//middleware
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})


app.listen(8800,()=>{
    connect();
    console.log("Connected to backend");
})
