const jwt = require("jsonwebtoken")

exports.isAuth = (req,res,next) =>{
    const authorization = req.headers.token;
    if(authorization){
        const token = authorization.split(" ")[1]
        jwt.verify(token,process.env.secretKey,(err,user)=>{
            if(err)return res.status(403).json("Unvalid token")
            req.user = user;
            next()
        })
    }else{
        res.status(401).json("You are not authenticated")
    }
}