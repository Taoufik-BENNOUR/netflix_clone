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
  const query = req.query.new;

  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
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

exports.getUsersStats = async (req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1);
  
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  };