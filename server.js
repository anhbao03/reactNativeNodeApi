import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose';
import productRouter from "./routes/productsRoutes.js";
import ordersRouter from "./routes/ordersRoutes.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(3000, ()=>{
        console.log("Server is running")
    })
}).catch((error) => {
    console.log(error)
})

//routes
app.use('/api/products/', productRouter);
app.use('/api/orders/', ordersRouter);


