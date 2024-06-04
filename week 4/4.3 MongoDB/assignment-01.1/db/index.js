const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://cohort:cohort@cluster0.lvveym3.mongodb.net/courseselling');
mongoose.connection.on('error', err => {
    logError(err);
});
// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,

    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}