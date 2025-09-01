import mongoose from "mongoose";
import { DB_Name } from "../constants.js";



const connectDB=async()=>{
    try{

        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);                       
        console.log("Mongodb connected!!");

    }
    catch(error)
    {
        console.error("Error:",error);
        process.exit(1);
    }
}

export default connectDB;