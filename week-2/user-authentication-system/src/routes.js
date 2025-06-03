// src/routes.js
const express = require('express');
const { registerUser , loginUser , updateUser , softDeleteUser , hardDeleteUser  } = require('./controllers');
const { validateRegister, validateLogin, verifyToken } = require('./middleware');

const router = express.Router();

router.post('/register', validateRegister, registerUser );
router.post('/login', validateLogin, loginUser );
router.put('/user/update/:id', verifyToken, updateUser );
router.patch('/user/inactive/:id', verifyToken, softDeleteUser );
router.delete('/user/delete/:id', verifyToken, hardDeleteUser );

module.exports = router;
