const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());



app.get('/', (re,res)=>{
    return res.json("from backend side");
})

mongoose.connect('mongodb+srv://preetibhutta02:qxrFD1fjgNWVNWIY@sweetqueue-ditto.fbznrza.mongodb.net/?retryWrites=true&w=majority&appName=sweetqueue-ditto').then(
    ()=>{
        app.listen(8081,() =>{
            console.log("listening");
        })
    }
)

