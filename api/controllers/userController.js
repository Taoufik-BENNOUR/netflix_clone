const User = require("../models/User")


exports.updateUser = async(req,res)=>{
    try {
       if(req.user.id===req.params.id){

            const updatedUser = await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true})
            res.status(200).json({msg:"User updated",updatedUser})
       } 
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.getUsers = async(req,res) => {
    try {
        const users =await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}