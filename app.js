const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const todoRouter = require('./routes/Todo.route');

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

connectMongoDB().then(()=> {
    app.use(todoRouter);
});

app.listen(PORT, ()=> {
    console.log('App started running...')
})