const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

// @desc    Register a user
// @route   POST /api/users
// @access  Public
exports.registerUser = async (req, res) => {
   const { name, email, password } = req.body
   if (!name || !email || !password) {
      res.status(400)
      throw new Error('Please add all fields')
   }

   //check if user exists 
   const userExists = await User.findOne({ email })
   if (userExists) {
      throw new Error('User already exists')
   }

   //hash password
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   //create user
   const user = await User.create({
      name,
      email,
      password: hashedPassword
   })
   if (user) {
      res.status(201).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id)
      })
   } else {
      res.status(400)
      throw new Error('Invalid user data')
   }
}

// @desc    User login 
// @route   POST /api/users/login
// @access  Private
exports.loginUser = async (req, res) => {
   const { email, password } = req.body

   //check for email
   const user = await User.findOne({ email })

   // //check for password to match with hashed password
   const matchedpass = await bcrypt.compare(password, user.password)

   // if correct username and password found, send back user deatils with token
   if (user && matchedpass) {
      res.status(201).json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id)
      })
   } else {
      res.status(400)
      throw new Error('Invalid credentials')
   }
}

// @desc    Get current user
// @route   POST /api/users/me
// @access  Private
exports.getUser = async (req, res) => {
   const { _id, name, email } = await User.findById(req.user.id)

   res.status(200).json({
      id: _id,
      name,
      email
   })
}

//generate token
const generateToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
   })
}

