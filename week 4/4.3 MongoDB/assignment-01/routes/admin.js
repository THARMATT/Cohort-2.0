const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const { name, password, email } = req.body;
        const user = new Admin({
            name, password, email,
        })
        const User = await user.save();
        if (!password && !email) {
            res.status(402).json({
                msg: 'Please provide necessary fileds'
            })
        }
        res.status(200).json({
            msg: 'Admin created Successfully', User
        })


    } catch (error) {
        console.log(error);
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { coursename, price } = req.body;
    const course = new Course({
        coursename, price
    })
    const courses = await course.save()
    console.log(courses);
    res.status(200).json({
        msg: 'Course created sccussfully', coursename, price, courses
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find({

        })
        console.log(courses);
        res.status(200).json({
            courses
        })
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;