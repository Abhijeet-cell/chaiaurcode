import dotenv from "dotenv";
dotenv.config({ path: '../.env' }); // src folder se ek level upar .env hai

import connectDB from "./db/index.js";

connectDB();