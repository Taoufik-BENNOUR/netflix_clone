const List = require("../models/List")

exports.addList = async (req,res) => {
    if(req.user.isAdmin){
    try {
            const newList =  new List(req.body);
        const savedList = await newList.save()
            res.status(200).json(savedList)
   
    } catch (error) {
        res.status(500).json(error)
    }
}else{
    res.status(403).json("You are not allowed")
}
}


exports.deleteList = async (req,res) => {
    if(req.user.isAdmin){
    try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List has been deleted")
   
    } catch (error) {
        res.status(500).json(error)
    }
}else{
    res.status(403).json("You are not allowed")
}
}

exports.featureList= async(req,res) => {
    const type = req.query.type
    const genre = req.query.genre
    let List= [];
    try {
        if(type){
            if(genre){
                List = await List.aggregate([
                    {$match:{type:type,genre:genre}},
                    {$sample:{size:10}}
                ])
            }else{
                List = await List.aggregate([
                    {$match:{type:type}},
                    {$sample:{size:10}}
                ])
            }

        }else{
            List = await List.aggregate([
                {$sample:{size:10}}
            ])
        }
        res.status(200).json(List)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


