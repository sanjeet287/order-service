import express from 'express';
import orderRouter from './src/routes/order.route.js';
import errorHandler from './src/middlewares/errorHandler.js';
import dotenv from 'dotenv';
import {connectToDB} from './src/config/db.js';

//load configuration from .env file
dotenv.config();

const app = express();

app.use(express.json());


app.use("/api/service/order", orderRouter);


app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
    connectToDB();
});

export default app;
