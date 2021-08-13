const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//mongoose connection
const connectDB = require('./connection');
const routesUrls = require('./routes/routes');
const cors = require('cors');


dotenv.config()

//mongoose.connect(process.env.DATABASE_ACCESS,() => console.log('Connected to database'));


app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)

app.listen(4000, () => 
    connectDB()
    .then((data) => console.log('Listening on 4000 http://localhost:4000/', data))
    .catch((err) => console.log(err))
);
