const User = require("../models/User")
const bcrypt = require("bcryptjs")

exports.updateUser = async(req,res)=>{
    if(req.user.id===req.params.id){
    try {
        const salt =await bcrypt.genSalt(10)
        if (req.body.password) {
            const hashedPassword =await bcrypt.hash(req.body.password,salt)
            req.body.password = hashedPassword
          }
            const updatedUser = await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true})
            .select("-password")
            res.status(200).json({msg:"User updated",updatedUser})
        } catch (error) {
            res.status(500).json(error)
        }
    } else{
        res.status(403).json("You are not authorized")
    }
}


exports.getUsers = async(req,res) => {
    try {
        if(req.user.isAdmin){
            const users =await User.find().select("-password")
           res.status(200).json(users)
        }else{
            res.status(403).json("You dont have access")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getUser = async(req,res) => {
    try {
        const user =await User.findById(req.params.id).select("-password")

       user ? res.status(200).json(user) : res.status(404).json("User doesnt exist")
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteUser = async(req,res)=>{
    if(req.user.id===req.params.id||req.user.isAdmin){
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}else{
    res.status(403).json("You are not authorized")
}
}