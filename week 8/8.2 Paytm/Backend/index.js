const bodyParser = require('body-parser');
const express=require('express');
const UserRouter=require('./router/index')
const AmountRouter=require('./router/amount')
const cors=require('cors');
const { default: mongoose } = require('mongoose');
const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/user',UserRouter)
app.use('/api/v1/amount',AmountRouter)
mongoose.connection.on('connected',()=>{
    console.log('Database connected');
})
app.listen(3000,()=>{
    console.log('App is running on port 3000');
})