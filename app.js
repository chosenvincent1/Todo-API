const express = require('express');
const dotenv = require('dotenv');
const monggose = require('mongoose');
const { default: mongoose } = require('mongoose');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

const connectMongoDB = async ()=> {
    try {
        await mongoose.connect(`${MONGODB_URL}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}

connectMongoDB();

app.listen(PORT, ()=> {
    console.log('App started running...')
})