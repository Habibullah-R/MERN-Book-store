const express = require('express');
const router = require('./routes/route.js');
const cors = require('cors');
require('dotenv').config()
const { db } = require('./db.js');

const app = express()

app.use(express.json())

app.use(cors({withcredentials:true,origin:['https://mern-book-store-sand.vercel.app']}))

db()

// Routes
app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/books',router)


app.listen(3000,()=>{
    console.log("Hello World")
})


module.exports = app;