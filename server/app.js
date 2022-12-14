import express from 'express';
import dotenv from 'dotenv';
import { connectPassport } from './utils/Provider.js';
import {connectDB} from './config/database.js' 

const app = express();
export default app;

dotenv.config({
    path :"./config/config.env"
})
connectDB()
connectPassport()
//import routes
import UserRoute from './Routes/user.js';

app.use('/api/v1',UserRoute)

