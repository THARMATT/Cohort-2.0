const { default: mongoose } = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI,)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.error("Database connection error", err);
});
const CardSchema= mongoose.Schema({
    name:String,
    description:String,
    interest:String,

})
const Card=mongoose.model('Card',CardSchema);
module.exports={Card}