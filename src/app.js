import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({ //It's a security rule enforced by browsers that controls which websites can talk to your backend.                       
    origin: process.env.CORS_ORIGIN      
}))

app.use(express.json({limit: "16kb"})) //When someone sends data to your backend (like a login form), they send it as JSON: But don't accept anything larger than 16kb — reject it
app.use(express.urlencoded({extended:true, limit:"16kb"})) //When you submit a HTML form, the data is NOT sent as JSON. It's sent in a different format called URL encoded:
//You need both in most apps.

app.use(express.static("public")) //Think of the public folder as a shop display window — whatever you put there, anyone can see it directly without asking the shopkeeper (your routes).
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users",  userRouter)

export {app}