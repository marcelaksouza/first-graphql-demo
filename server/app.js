//Secrets
require('dotenv').config()
//Database conection
require('./shared/db')

//imports
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4001;
const cors = require('cors')

//Midware
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

//Server
app.listen(port,()=>{
    console.log("Server runing on port "+port)
});