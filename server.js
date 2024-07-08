import express from 'express';
import { config } from 'dotenv';
import { connectToDB } from './src/configs/db.js';
import userRouter from './src/routers/userRoute.js';
import orderRouter from './src/routers/orderRouter.js';
import bookRouter from './src/routers/bookRouter.js';
import reviewRouter from './src/routers/reviewRouter.js';
import cors from 'cors'

config();
const app = express();

app.use(express.json());
app.use(cors());

const port = 5000 || process.env.PORT;
const url = process.env.URL;
  


app.get('/', (req, res) =>{
     res.send("Welcome To the book store")
})

app.use('/api/user', userRouter);
app.use('/api/orders' , orderRouter);
app.use('/api/books', bookRouter)
app.use('/api/reviews', reviewRouter)


app.listen(port , async() =>{
    try {
       await connectToDB(url);
        console.log(`server is running on port ${port}` );
    } catch (error) {
     console.log(error);       
    }
})









// {
//     "title" : "champak",
//     "author" : "natwarlal",
//     "price" : 1000,
//     "stockQuantity" : 10 
//   }




// {
//     "customer" : "668bb5f5e5c256dc8b2a2a36", "totalAmount" : 1000,
//     "books" : "668bd43b75a20c01249494e0"
//   }