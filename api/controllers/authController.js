const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.register = async(req,res) =>{

    const {email,password,username} = req.body

    try {
        const newUser = await new User({username,email,password})
        
        const salt =await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)

        const emailExist = await User.findOne({email})
        if(emailExist) return res.status(409).json("Email already exists")
        newUser.password = hashedPassword
       await newUser.save()
        res.status(200).json("User created")
    } catch (error) {
        res.status(500).json({error:error,msg:"error"})
    }
}


exports.login = async(req,res) =>{

    const {username} = req.body

    try {
        const user = await User.findOne({username})
        if(!user) return res.status(409).json("Wrong email or password")
        
        const isMatch =await bcrypt.compare(req.body.password,user.password)
        if(!isMatch) return res.status(401).json("Wrong email or password")
      const payload = {
        id:user._id,
        isAdmin:user.isAdmin
      }
        const token = jwt.sign(payload,process.env.secretKey)
        const {password,...other}=user._doc
     
        res.status(200).json({msg:"login successfull",...other,token:`Bearer ${token}`})
   
    } catch (error) {
        res.status(500).json({error:error,msg:"Login failed"})
    }
}