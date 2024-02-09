import express from 'express'
import { config } from 'dotenv';
import mongoose from 'mongoose';

const app = express();
// Creating config file
config({
    path:'.env'
});

//DB Connection
mongoose.connect(process.env.MONGO_URL,{
    dbName:"Blogging_MERN_Volcanus"
}).then(()=>console.log("MongoDB is connected..!"))

//Server Setup 
const port = process.env.PORT;
app.listen(1000,()=>console.log(`Server is running on port ${port}`));
