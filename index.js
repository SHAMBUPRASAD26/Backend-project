import express, { response } from "express";
import {PORT,mongodburl} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
const app=express();
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Welcome to shambus project')
});
app.use(express.json());
app.use('/books',booksRoute);
mongoose.
 connect(mongodburl)
 .then(()=>
{
    console.log(`App is connected to database`);
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{console.log(error)});