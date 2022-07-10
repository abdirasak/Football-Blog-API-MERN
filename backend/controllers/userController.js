const User = require('../models/userModel')
// @desc    Register a user
// @route   POST /api/users
// @access  Public
exports.registerUser = async(req, res) => {
   res.json({msg: 'register user'})    
}

// @desc    User login 
// @route   POST /api/users/login
// @access  Private
exports.loginUser = async(req, res) => {
    res.json({msg: 'login user'})    
 }

 // @desc   Get current user
// @route   POST /api/users/me
// @access  Private
exports.getUser = async(req, res) => {
    res.json({msg: 'user details'})    
 }

