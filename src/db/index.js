import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async()=>{ //use async await n=beacuse the connection to db may take time
    try{                     // ise try catch or then catch with promises as there is no guarantee that the connection get established or not
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected ${connectionInstance.connection.host}`);
        
    }
    catch(error){
        console.log("ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB