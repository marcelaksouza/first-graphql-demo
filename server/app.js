require('dotenv').config()
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4001;
const URL = process.env.DB_SERVER+"://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.kespz.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority"

const options ={
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect(URL, options).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ },
    err => { consolw.log(err) }
  );
mongoose.connection.once('open',()=>{
    console.log('connected to database')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(port,()=>{
    console.log("Server runing on port "+port)
});