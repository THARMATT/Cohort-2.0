const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.create({
            username: username,
            password: password
        })
        await admin.save()
        console.log(admin);
        if (!admin) {
            res.status(403).json({
                msg: 'Please provide valid cred'
            })
        }
        res.status(200).json({
            msg: 'Admin created successfully'
        })
    } catch (error) {
        console.log(error);
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
   try {
     const { price, title, description } = req.body;
   const newcourse=  await Course.create({
         title, description, price
     })
     console.log(newcourse);
 res.status(200).json({
 msg:"Course is created successfully",
 courseId:newcourse._id
 
 })
   } catch (error) {
    console.log(error);
   }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
  try {
   const AllCourses= await Course.find({})
    res.status(200).json({
AllCourses
    })
  } catch (error) {
    
  }

});

module.exports = router;