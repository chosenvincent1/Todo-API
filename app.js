const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const todoRouter = require('./routes/Todo.route');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use('/todos', todoRouter);

const connectMongoDB = async ()=> {
    try {
        await mongoose.connect(`${MONGODB_URL}`);
        console.log('MongoDB Connected Successfully')
    } catch (error) {
        console.log(error)
    }
}

connectMongoDB()
// .then(()=> {
    
// });

app.listen(PORT, ()=> {
    console.log(`App started running on port ${PORT}...`);
})