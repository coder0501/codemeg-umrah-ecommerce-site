// services/authService.js
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateToken } = require('../utils/jwtUtil');

const signup = async (data) => {
  const { firstName, lastName, email, password, confirmPassword } = data;
  
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // const token = generateToken({ id: newUser.id, role: newUser.role });
    // const token = generateToken({ id: newUser.id, role: newUser.role });
    return { user: newUser };

    // res.status(201).json({
    //   message: 'User created successfully',
    //   user: newUser,
    // });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (data) => {
  const { email, password } = data;
  
  try{
      const user = await User.findOne({ where: { email } });
      console.log(user)
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
      }

    //   const token = generateToken({ id: user.id, role: user.role });
      return { user };
  } catch (error)   {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup, login };


