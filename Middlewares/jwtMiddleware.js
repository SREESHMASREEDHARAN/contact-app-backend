const jwt = require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    //token verification
    console.log("Inside jwt middleware");
   
    const token = req.headers['authorization'].slice(7)
    console.log(token);
    try{
        const tokenVerification=jwt.verify(token,"superkey2024")
        console.log(tokenVerification);
        req.payload=tokenVerification.userId
        next()
    }
    catch(err){
        res.status(401).json("Authorization Failed....Please login again")
    }
    
    
}
module.exports=jwtMiddleware