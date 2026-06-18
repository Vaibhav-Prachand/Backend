// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose"   // whenver connecting with the database always handle it with try and acatch or async await
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js"

import { app } from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("mongodb connection failed",err);
})
















/*  you can apply this also
import express from "express"
const app = express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App islistening on port${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.error("ERROR:" , error);
        
    }
})()
*/