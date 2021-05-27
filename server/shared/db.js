//Not working
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// mongoose.Promise = global.Promise;
// const URL = process.env.DB_SERVER+"://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.kespz.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority";


// //db connection
// mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
// .then(() => {
//     console.log("Database connection established!");
//  },
//  err => {
//     console.log("Error connecting Database instance due to: ", err);
//  });