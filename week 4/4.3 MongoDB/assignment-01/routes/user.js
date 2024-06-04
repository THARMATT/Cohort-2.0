const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup',async (req, res) => {
  const{username,email,password}=req.body;
  if(!email && !password){
    res.status(400).json({
        msg:"Please provide valid credentials"
    })
  }
  const user=new User({
    username,email,password
  })
 await  user.save();
  res.status(200).json({
    msg:'User is logged in',user
  })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic

    const courses=await Course.find({})
    res.send({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
   try {
   
     const course=await Course.find({});
   } catch (error) {
    console.log(error);
   }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router