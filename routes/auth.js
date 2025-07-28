const express = require('express');
const router = express.Router();
const authController=require('../controllers/authController');
const handleLogin = require('../controllers/authController');

router.post('/',handleLogin);

module.exports= router;