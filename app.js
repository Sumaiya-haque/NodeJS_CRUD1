const express = require('express');
const app = express();

const mongoose = require('mongoose');

const studentRoutes = require('./api/routes/students');

mongoose.connect('mongodb+srv://sumaiya:'+ process.env.MONGO_PASS +'@cluster0.8t05k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(express.json());

app.use(express.urlencoded({

    extended: true 
}))

app.use('/students', studentRoutes);

module.exports = app;