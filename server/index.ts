import express from "express"
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/login', (req, res)=>{
    res.end("User logged in!")
})

app.listen(process.env.PORT);