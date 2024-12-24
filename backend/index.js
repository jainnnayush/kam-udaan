require('dotenv').config();
const express = require('express');
const bodyParser= require('body-parser');
const {dbConnect,syncDatabase} = require('./services/dbService.js');

const app = express();
app.use(bodyParser.json());

dbConnect();
syncDatabase();

app.listen(5000,()=>{
    console.log('Server running on port 5000');
});


