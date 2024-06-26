
const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://cohort:cohort@cluster0.lvveym3.mongodb.net/test1');
mongoose.connection.on('connected',()=>{
    console.log('Database connected');
})
const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        trim: true,
        maxLength: 50
    }

})
const AccountSchema=new mongoose.Schema({
    amount:Number,
    userId:{
        ref:'User',
        type:mongoose.Schema.Types.ObjectId
    }
})
const User=mongoose.model('User',UserSchema);
const Account=mongoose.model('Account',AccountSchema)
module.exports={User,Account}