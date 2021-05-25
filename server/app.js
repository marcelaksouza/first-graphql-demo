const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// mongoose.connect(process.env.URL);
// mongoose.connection.once('open',()=>{
//     console.log('connected to database')
// })

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(port,()=>{
    console.log("Server runing on port "+port)
});