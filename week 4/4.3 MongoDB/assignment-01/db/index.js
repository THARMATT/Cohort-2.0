const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://cohort:cohort@cluster0.lvveym3.mongodb.net/');
mongoose.connection.on('error', err => {
    logError(err);
  });
// Define schemas
const AdminSchema = new mongoose.Schema({
   name:{
    type:String,
   
   },
   email:{
    type:String,
  
    unique:true,
   },
   password:{
    type:String,

   },
   role:{
    type:String,
    default:'admin'
   }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    name:{
        type:String,
        
    },
     
   email:{
    type:String,
   
    unique:true,
   },
   password:{
    type:String,
  
   },
    purchasedCourses:{
        type:mongoose.Types.ObjectId,
        ref:'Course'
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    coursename:{
type:String
    },
    price:{
        type:String,
        required:true
    },
    course_id:{
        type:mongoose.Types.ObjectId,
        ref:'Course'
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}