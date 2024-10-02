
// controllers/authController.js
const { signup, login } = require('../services/authService');

const handleSignup = async (req, res) => {
  try {
    const { user } = await signup(req.body);
    return res.status(201).json({ user, message:"successful" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const handleLogin = async (req, res) => {
  try {
    const { user } = await login(req.body);
    return res.status(200).json({ user, message:"successful" });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

module.exports = { handleSignup, handleLogin };





// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// exports.signup = async (req, res) => {
//   console.log("inside signup");

//   const { firstName, lastName, email, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     return res.status(400).json({ message: 'Passwords do not match' });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: 'User created successfully',
//       user: newUser,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

