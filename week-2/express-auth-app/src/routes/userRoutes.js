const express= require('express');
const router = express.Router();
const {registerSchema,loginSchema ,updateSchema}= require('../schemas/userSchema');
const validate = require('../middlewares/validateMiddleware');
const auth= require('../middlewares/authMiddleware');

const{
    register,
    login,
    updateUser,
    markInactive,
    deleteUser
}= require('../controllers/userController');

// Register route
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.put('/user/update/:id', auth, validate(updateSchema), updateUser);
router.patch('/user/inactive/:id', auth, markInactive);
router.delete('/user/delete/:id', auth, deleteUser);


module.exports = router;
