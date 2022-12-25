const Movie = require("../models/Movie")

exports.addMovie = async (req,res) => {
    if(req.user.isAdmin){
    try {
            const newMovie =  new Movie(req.body);
            await newMovie.save()
            res.status(200).json("Movie added")
   
    } catch (error) {
        res.status(500).json(error)
    }
}else{
    res.status(403).json("You are not allowed")
}
}

exports.updateMovie = async (req,res) => {
    if(req.user.isAdmin){
    try {
            const updatedMovie =  await Movie.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedMovie)
   
    } catch (error) {
        res.status(500).json(error)
    }
}else{
    res.status(403).json("You are not allowed")
}
}

exports.deleteMovie = async (req,res) => {
    if(req.user.isAdmin){
    try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted")
   
    } catch (error) {
        res.status(500).json(error)
    }
}else{
    res.status(403).json("You are not allowed")
}
}

exports.getMovie = async(req,res) => {
    try {
        const movie =await Movie.findById(req.params.id)

       movie ? res.status(200).json(movie) : res.status(404).json("Movie doesnt exist")
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.getMovies = async(req,res) => {
    try {
        if(req.user.isAdmin){
            const movies =await Movie.find()
           res.status(200).json(movies.reverse())
        }else{
            res.status(403).json("You dont have access")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.featureMovie = async(req,res) => {
    const type = req.query.type
    let movie;
    try {
        if(type==="series"){
            movie = await Movie.aggregate([
                {$match:{isSeries:true}},
                {$sample:{size:1}}
            ])
        }else{
            movie = await Movie.aggregate([
                {$match:{isSeries:false}},
                {$sample:{size:1}}
            ])
        }
        res.status(200).json(movie)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


