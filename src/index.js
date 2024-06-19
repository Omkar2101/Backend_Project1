//import the dot env
import dotenv from 'dotenv';
import connectDb from "./db/index.js"

import express from "express"
const app = express()

dotenv.config({
    path:"./env"
})

connectDb();

///////////+++++++++++++++++++++++++++++++++++++++++++++//first approach///////////////////+++++++++++++++++++++++++++++++++++++++
//iife ka use karenge
// (async()=>{})()

// (async()=>{
//     try {
//         //connecting to the data base
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//         //events on app
//         app.on("error",()=>{
//             console.log("error",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("error");
//         throw error
        
//     }
// })()