const User = require('../model/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const postUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      res.json({ message: "User already exists!" });
    } else {
        bcrypt.hash(password, 10 ,async (err,hash) =>{
            console.log('err',err)
            await User.create({
                name: name,
                email: email,
                phone: phone,
                password: hash,
              });
              res.status(201).json({ message: "User signed up successfully!" });
        } )
      
    }
  } catch (err) {
    console.log(err);  
    res.status(500).json({ message: "Internal Server Error" });  // Fix: Added response status and message
  }
};

module.exports = {
  postUser,
};
