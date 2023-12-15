const express = require('express');
const dotenv = require('dotenv');
const monggose = require('mongoose');
const { default: mongoose } = require('mongoose');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;
const mongodb = process.env.mongodb;

app.use(express.json());

const connectMongoDB = async ()=> {
    try {
        await mongoose.connect(`${mongodb}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}

app.listen(PORT, ()=> {
    console.log('App started running...')
})