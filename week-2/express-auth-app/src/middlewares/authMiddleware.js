const {verifyToken} = require('../utils/jwt');

const auth=(req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try{
        req.user=verifyToken(token);
        next();

    }catch(err){
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = auth;