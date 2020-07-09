const jwt=require('jsonwebtoken');
const config=require('config');

module.exports= function(req,res,next){
    //Get token from header
    const token=req.header('x-auth-token');
    //Check there is a token
    if(!token){
        return res.status(401).json({msg:"No token, Authorization denied"})
    }
    //Verify token
    try {
        const decoded=jwt.verify(token,config.get('jwtSecret'));
        req.client=decoded.client;
        next();
    } catch (err) {
        res.status(401).json({msg:"Token is not valid"});
    }
}