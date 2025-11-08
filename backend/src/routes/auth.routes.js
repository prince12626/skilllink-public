const express = require('express');
const { userRegister, userLogin, freelancerLogin, freelancerRegister } = require("../controllers/auth.controller");
const router = express.Router();

router.post('/api/v1/auth/user/register', userRegister);
router.post('/api/v1/auth/user/login', userLogin);
router.post('/api/v1/auth/freelancer/register', freelancerRegister);
router.post('/api/v1/auth/freelancer/login', freelancerLogin);

module.exports = router;