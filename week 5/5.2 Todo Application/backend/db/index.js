const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://cohort:cohort@cluster0.lvveym3.mongodb.net/todos');
mongoose.connection.on('open',()=>{
    console.log('Database connected successfully')
})

const TodoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,

})
const Todo=mongoose.model('Todo',TodoSchema);
module.exports={Todo}