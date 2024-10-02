const express = require('express');
// const { signup } = require('../controllers/authController');
const router = express.Router();
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
const { handleSignup, handleLogin } = require('../controllers/authController');
   

router.post('/signup', handleSignup);
router.post('/login', handleLogin);


// router.post('/signup', async (req, res) => {
//     console.log("inside signup");
  
//     const { firstName, lastName, email, password, confirmPassword } = req.body;
  
//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }
  
//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       const newUser = await User.create({
//         firstName,
//         lastName,
//         email,
//         password: hashedPassword,
//       });
  
//       res.status(201).json({
//         message: 'User created successfully',
//         user: newUser,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

module.exports = router;
