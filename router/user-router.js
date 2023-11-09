const express = require('express');

const userController = require('../controllers/signupcontroller');

const router = express.Router();

router.post('/signup', userController.postUser); 

module.exports = router;
