import dotenv from "dotenv";
dotenv.config({ path: '../.env' }); // src folder se ek level upar .env hai
import { app } from "./app.js";


import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log("Sever is running at port number 1000");
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed",err);
})