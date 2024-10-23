import express from "express";
import "dotenv/config"
import mongoose from "mongoose";

import router from "./routes/route.js"; //extension are mandatory
const app = express();
const PORT = 8080;

mongoose.connect(process.env.MONGODB).then(() => console.log("Connection Successfull"));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));
app.use("/" , router);




app.listen(PORT, ()=> console.log("server started at port"  + PORT) ) 